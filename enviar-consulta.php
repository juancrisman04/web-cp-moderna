<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

// El sitio se publica tambien desde Vercel (preview del rediseno), que no
// ejecuta PHP. Esas paginas consultan este endpoint de forma cross-origin,
// asi que se habilita CORS solo para los dominios propios.
$allowedOrigins = [
    'https://cleanpel.com.ar',
    'https://www.cleanpel.com.ar',
    'https://web-cp-moderna.vercel.app',
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$originAllowed = in_array($origin, $allowedOrigins, true)
    || preg_match('#^https://web-cp-moderna-[a-z0-9-]+\.vercel\.app$#', $origin) === 1;

if ($originAllowed) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Access-Control-Max-Age: 86400');
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code($originAllowed ? 204 : 403);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'message' => 'Metodo no permitido']);
    exit;
}

$configPath = __DIR__ . '/db-config.php';
if (!is_file($configPath)) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'message' => 'Falta configurar la base de datos']);
    exit;
}

$input = json_decode((string) file_get_contents('php://input'), true);
if (!is_array($input)) {
    $input = $_POST;
}

if (!empty($input['website'])) {
    echo json_encode(['ok' => true]);
    exit;
}

$nombre = cleanText($input['nombre'] ?? '', 120);
$apellido = cleanText($input['apellido'] ?? '', 120);
$empresa = cleanText($input['empresa'] ?? '', 160);
$email = cleanText($input['email'] ?? '', 180);
$telefono = cleanText($input['telefono'] ?? '', 60);
$necesidad = cleanText($input['necesidad'] ?? '', 180);
$mensaje = cleanText($input['mensaje'] ?? '', 3000);
$origen = cleanText($input['origen'] ?? 'web', 80);

if ($nombre === '' || $email === '' || $mensaje === '') {
    respondError('Completa nombre, email y mensaje.', 422);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respondError('El email no tiene un formato valido.', 422);
}

try {
    $config = require $configPath;
    $dsn = sprintf(
        'mysql:host=%s;dbname=%s;charset=utf8mb4',
        $config['host'],
        $config['database']
    );

    $pdo = new PDO($dsn, $config['username'], $config['password'], [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);

    $statement = $pdo->prepare(
        'INSERT INTO consultas_web
            (nombre, apellido, empresa, email, telefono, necesidad, mensaje, origen)
         VALUES
            (:nombre, :apellido, :empresa, :email, :telefono, :necesidad, :mensaje, :origen)'
    );

    $statement->execute([
        ':nombre' => $nombre,
        ':apellido' => $apellido,
        ':empresa' => $empresa,
        ':email' => $email,
        ':telefono' => $telefono,
        ':necesidad' => $necesidad,
        ':mensaje' => $mensaje,
        ':origen' => $origen,
    ]);

    sendSalesEmail($nombre, $apellido, $empresa, $email, $telefono, $necesidad, $mensaje, $origen);

    echo json_encode(['ok' => true]);
} catch (Throwable $error) {
    error_log('Clean Pel form error: ' . $error->getMessage());
    respondError('No pudimos enviar la consulta. Intentalo nuevamente.', 500);
}

function cleanText($value, int $maxLength): string
{
    $text = trim((string) $value);
    $text = preg_replace('/[^\P{C}\r\n\t]+/u', '', $text) ?? '';
    if (function_exists('mb_substr')) {
        return mb_substr($text, 0, $maxLength, 'UTF-8');
    }

    return substr($text, 0, $maxLength);
}

function respondError(string $message, int $status): void
{
    http_response_code($status);
    echo json_encode(['ok' => false, 'message' => $message]);
    exit;
}

function sendSalesEmail(
    string $nombre,
    string $apellido,
    string $empresa,
    string $email,
    string $telefono,
    string $necesidad,
    string $mensaje,
    string $origen
): void {
    $to = 'ventas@cleanpel.com.ar';
    $subject = 'Nueva consulta desde cleanpel.com.ar';
    $body = [
        'Nueva consulta recibida desde la web.',
        '',
        'Nombre: ' . trim($nombre . ' ' . $apellido),
        'Empresa: ' . ($empresa !== '' ? $empresa : 'Sin especificar'),
        'Email: ' . $email,
        'Telefono: ' . ($telefono !== '' ? $telefono : 'Sin especificar'),
        'Necesidad: ' . ($necesidad !== '' ? $necesidad : 'Sin especificar'),
        'Origen: ' . $origen,
        '',
        'Mensaje:',
        $mensaje,
    ];
    $headers = [
        'From: Clean Pel Web <ventas@cleanpel.com.ar>',
        'Reply-To: ' . $email,
        'Content-Type: text/plain; charset=UTF-8',
    ];

    mail($to, $subject, implode("\n", $body), implode("\r\n", $headers));
}
