(function () {
    const {
        onReady,
        setupChatbot,
        setupHeroVideo,
        setupLazyMedia,
        setupReveal,
        setupSideMenu,
        setupSmoothAnchors,
        setupSubmenu
    } = window.CleanPel;

    onReady(() => {
        setupLazyMedia({ eagerCount: 4 });
        setupChatbot();
        setupSideMenu();
        setupSubmenu();
        setupSmoothAnchors();
        setupHeroVideo({ forceMuted: true });
        setupReveal('.service-card, .advantage-card, .process-step, .upgrade-card, .catalog-panel');
    });
}());
