// JAVASCRIPT DE LA PÁGINA PRODUCTOS CON BARRA LATERAL - JS

// Datos de productos detallados
const productData = {

    // ELITE PAPEL HIGIENICO

    'elite-Papel Higienico SH Plus': {
        image: "img/Papel Higienico SH Plus.png",
        detailImage: "imgdetalles/ph sh plus.png",
        brand: "Elite",
        category: "Papel Higienico Alto Metraje",
        fichaTecnica: "https://www.abastecedoradelsur.com.ar/webfiles/abastecedoradelsur/productos/1633/archivos/ficha%20tecnica.pdf?srsltid=AfmBOorWW1sNg3i2HYvQA9iTTCt8iVZBauu4vC7vJ6YMJe3s9DfzktbL"
    },

    'elite-Papel Higienico Elite Rollo SH Classic': {
        image: "img/Papel Higienico Elite Rollo SH Classic.png",
        detailImage: "imgdetalles/ph elite rollo sh classic.png",
        brand: "Elite",
        category: "Papel Higienico Alto Metraje",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/21a1a-ficha-tecnica-ph-elite-pro-6109.pdf"
    },


    'elite-Papel Higienico Elite Rollo SH Plus 300': {
        image: "img/Papel Higienico Elite Rollo SH Plus 300.png",
        detailImage: "imgdetalles/ph elite rollo sh plus 300.png",
        brand: "Elite",
        category: "Papel Higienico Alto Metraje",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/d888c-ficha-tecnica-ph-elite-pro-6112.pdf"
    },

    'elite-Papel Higienico Elite Rollo SH Plus 500': {
        image: "img/Papel Higienico Elite Rollo SH Plus 500.png",
        detailImage: "imgdetalles/ph elite rollo sh plus 500.png",
        brand: "Elite",
        category: "Papel Higienico Alto Metraje",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/6194b-ficha-tecnica-ph-elite-pro-6128.pdf"
    },

    'elite-Papel Higienico Elite Rollo SH Plus': {
        image: "img/Papel Higienico Elite Rollo SH Plus.png",
        detailImage: "imgdetalles/ph elite rollo sh plus.png",
        brand: "Elite",
        category: "Papel Higienico Bajo Metraje",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/de23c-ficha-tecnica-ph-elite-pro_6607.pdf"
    },

    'elite-Papel Higienico Elite SH Plus': {
        image: "img/Papel Higienico Elite SH Plus.png",
        detailImage: "imgdetalles/ph elite sh plus.png",
        brand: "Elite",
        category: "Papel Higienico Bajo Metraje",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/1eea1-ficha-tecnica-ph-elite-pro-6122-renovado.pdf"
    },

    'elite-Papel Higienico Elite DH Excellence': {
        image: "img/Papel Higienico Elite DH Excellence.png",
        detailImage: "imgdetalles/ph dh excellence.png",
        brand: "Elite",
        category: "Papel Higienico Bajo Metraje",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/a6a28-ficha-tecnica-ph-elite-pro_6616.pdf"
    },

    'elite-Papel Higienico Interfoliado Doble Hoja': {
        image: "img/Papel Higienico Interfoliado Doble Hoja.png",
        detailImage: "imgdetalles/ph interfoliado doble hoja.png",
        brand: "Elite",
        category: "Papel Higienico Bajo Metraje",
        fichaTecnica: "https://www.eliteprofessional.com.br/assets/uploads/images/611f4-ficha-tecnica-207124.pdf"
    },

    // ELITE TOALLAS DE PAPEL

    'elite-Toalla Elite DH Excellence': {
        image: "img/Toalla Elite DH Excellence.png",
        detailImage: "imgdetalles/tp elite dh excellence.png",
        brand: "Elite",
        category: "Toallas De Papel En Rollo",
        fichaTecnica: "https://www.abastecedoradelsur.com.ar/webfiles/abastecedoradelsur/productos/4459/archivos/FICHA%20TECNICA.pdf?srsltid=AfmBOorYW2sZI0vAMqUtBdalSp79BCUoykW57_Sd0K2hV9jbVE3sp5Uq"
    },

    'elite-Toalla Elite Rollo SH Plus':{
        image: "img/Toalla Elite Rollo SH Plus.png",
        detailImage: "imgdetalles/tp elite rollo sh plus.png",
        brand: "Elite",
        category: "Toallas De Papel En Rollo",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/5fddd-ficha-tecnica-to-elite-pro-6203-renovada.pdf"
    },

    'elite-Toalla Elite SH Plus': {
        image: "img/Toalla Elite SH Plus.png",
        detailImage: "imgdetalles/tp elite sh plus.png",
        brand: "Elite",
        category: "Toallas De Papel En Rollo",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/bcd86-ficha-tecnica-to-elite-pro-6309.pdf"
    },

    'elite-Toallas De Papel Intercaladas Una Hoja': {
        image: "img/Toalla De Papel Intercaladas Una Hoja.png",
        detailImage: "imgdetalles/tp intercaladas una hoja.png",
        brand: "Elite",
        category: "Toallas De Papel Intercaladas",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/aa88a-ficha-tecnica-to-elite-pro-6295-renov.pdf"
    },

    'elite-Toalla De Papel Elite HC Excellence': {
        image: "img/Toalla De Papel Elite HC Excellence.png",
        detailImage: "imgdetalles/tp elite hc excellence.png",
        brand: "Elite",
        category: "Toallas De Papel Intercaladas",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/0115c-ficha-tecnica-to-elite-pro_6149.pdf"
    },


    'elite-Toallas De Papel Intercaladas Elite SH Plus': {
        image: "img/Toallas Intercaladas Elite SH Plus.png",
        detailImage: "imgdetalles/tp intercaladas elite sh plus.png",
        brand: "Elite",
        category: "Toallas De Papel Intercaladas",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/26c05-ficha-tecnica-to-elite-pro-6283.pdf"
    },

    'elite-Toallas De Papel Dobladas Una Hoja': {
        image: "img/Toallas De Papel Dobladas Una Hoja.png",
        detailImage: "imgdetalles/tp dobladas una hoja.png",
        brand: "Elite",
        category: "Toallas De Papel Intercaladas",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/8f3b9-ft-to-elite-pro-plus-x250_fajilla_6269_fab-ar-para-ar-1-.pdf"
    },

    // ELITE ROLLOS Y BOBINAS

    'elite-Rollos De Cocina Doble Hoja': {
        image: "img/Rollos De Cocina Doble Hoja.png",
        detailImage: "imgdetalles/rollo cocina.png",
        brand: "Elite",
        category: "Rollos Y Bobinas",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/50cbc-ficha-tecnica-rc-elite-pro_6648_ar.pdf"
    },

    'elite-Rollos Multiuso Doble Hoja': {
        image: "img/Rollo Multiuso Doble Hoja.png",
        detailImage: "imgdetalles/rollo multiuso.png",
        brand: "Elite",
        category: "Rollos Y Bobinas",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/667e2-ficha-tecnica-rc-elite-pro_6639_ar.pdf"
    },

    'elite-Bobina Elite DH Excellence': {
        image: "img/Bobina Elite DH Excellence.png",
        detailImage: "imgdetalles/bobina elite dh excellence.png",
        brand: "Elite",
        category: "Rollos Y Bobinas",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/e6cac-ficha-tecnica-bob-elite-pro-excellence_6213_ar.pdf"
    },

    'elite-Bobina Elite DH Plus': {
        image: "img/Bobina Elite DH Plus.png",
        detailImage: "imgdetalles/bobina elite dh plus.png",
        brand: "Elite",
        category: "Rollos Y Bobinas",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/83d1b-ficha-tecnica-bob-elite-pro-plus-6264.pdf"
    },

    // ELITE SERVILLETAS

    'elite-Servilletas Interfoliadas': {
        image: "img/Servilletas Interfoliadas.png",
        detailImage: "imgdetalles/servilletas interfoliadas.png",
        brand: "Elite",
        category: "Servilletas",
        fichaTecnica: "https://drive.google.com/file/d/198OKW7fsd-3HPVxgV5DtpOtaV-SpXWPq/view"
    },

    'elite-Servilletas Fast Food Una Hoja': {
        image: "img/Servilletas Fast Food Una Hoja.png",
        detailImage: "imgdetalles/servilletas fast food.png",
        brand: "Elite",
        category: "Servilletas",
        fichaTecnica: "https://www.abastecedoradelsur.com.ar/webfiles/abastecedoradelsur/productos/1664/archivos/ficha%20tecnica.pdf?srsltid=AfmBOop6gT9Nw6WT-Y0oOEyDBtSwQt0bXnWPmKGEVyHmshdIIzfEqkCS"
    },

    'elite-Servilletas Hoja Simple': {
        image: "img/Servilletas Hoja Simple.png",
        detailImage: "imgdetalles/servilletas hoja simple.png",
        brand: "Elite",
        category: "Servilletas",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/cc9cb-ficha-tecnica-srv-elite-pro-6567.pdf"
    },

    // ELITE PAÑOS DE LIMPIEZA

    'elite-Paños De Limpieza Max50': {
        image: "img/Panos De Limpieza MAX50.png",
        detailImage: "imgdetalles/max50.png",
        brand: "Elite",
        category: "Paños De Limpieza",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/4a43b-ficha-tecnica-max50_6389_ar.pdf"
    },

    'elite-Paños De Limpieza Max60 50 Paños': {
        image: "img/Panos De Limpieza MAX60 50 Panos.png",
        detailImage: "imgdetalles/max60 50 panos.png",
        brand: "Elite",
        category: "Paños De Limpieza",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/bae25-ficha-tecnica-max60_6385_ar.pdf"
    },

    'elite-Paños De Limpieza Max60 890 Paños': {
        image: "img/Panos De Limpieza MAX60 890 Panos.png",
        detailImage: "imgdetalles/max60 890 panos.png",
        brand: "Elite",
        category: "Paños De Limpieza",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/10351-ficha-tecnica-max60_6384_ar.pdf"
    },

    'elite-Paños De Limpieza Max70 88 Paños': {
        image: "img/Panos De Limpieza MAX70 88 Panos.png",
        detailImage: "imgdetalles/max70 88 panos.png",
        brand: "Elite",
        category: "Paños De Limpieza",
        fichaTecnica: "https://www.eliteprofessional.com.co/assets/uploads/images/9fc26-c4681-ficha-tecnica-1ttco615014.pdf"
    },

    'elite-Paños De Limpieza Max70 750 Paños': {
        image: "img/Panos De Limpieza MAX70 750 Panos.png",
        detailImage: "imgdetalles/max70 750 panos.png",
        brand: "Elite",
        category: "Paños De Limpieza",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/275c2-ficha-tecnica-max70_6386_ar.pdf"
    },

    'elite-Paños De Limpieza Max80': {
        image: "img/Panos De Limpieza MAX80.png",
        detailImage: "imgdetalles/max80.png",
        brand: "Elite",
        category: "Paños De Limpieza",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/c2895-ficha-tecnica-max80-rollo-azul_6387_ar.pdf"
    },

    // ELITE JABONES Y ALCOHOLES

    'elite-Jabon Liquido Glicerina': {
        image: "img/Jabon Liquido Glicerina.png",
        detailImage: "imgdetalles/jabon glicerina.png",
        brand: "Elite",
        category: "Jabones Y Alcoholes",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/5dc4c-ficha-te-cnica-jabo-n-glicerina-8086.pdf"
    },

    'elite-Jabon Liquido Antibacterial Multiflex': {
        image: "img/Jabon Liquido Antibacterial Multiflex.png",
        detailImage: "imgdetalles/jl antibacterial multiflex.png",
        brand: "Elite",
        category: "Jabones Y Alcoholes",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/20d80-ficha-tecnica-8058-jab-n-antibact.pdf"
    },

    'elite-Jabon Liquido Glicerina Multiflex': {
        image: "img/Jabon Liquido Glicerina Multiflex.png",
        detailImage: "imgdetalles/jl glicerina multiflex.png",
        brand: "Elite",
        category: "Jabones Y Alcoholes",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/c5fcc-ficha-tecnica-8055-jab-n-glicerina.pdf"
    },

    'elite-Jabon Spray Multiflex': {
        image: "img/Jabon Spray Multiflex.png",
        detailImage: "imgdetalles/spray multiflex.png",
        brand: "Elite",
        category: "Jabones Y Alcoholes",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/c2041-ficha-tecnica-8057-jab-n-spray.pdf"
    },

    'elite-Alcohol En Gel Multiflex': {
        image: "img/Alcohol En Gel Multiflex.png",
        detailImage: "imgdetalles/alcohol en gel multiflex.png",
        brand: "Elite",
        category: "Jabones Y Alcoholes",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/37293-ficha-tecnica-8054-alcohon-el-gel.pdf"
    },

    'elite-Jabon Espuma Multiflex': {
        image: "img/Jabon Espuma Multiflex.png",
        detailImage: "imgdetalles/jabon espuma multiflex.png",
        brand: "Elite",
        category: "Jabones Y Alcoholes",
        fichaTecnica: "https://www.eliteprofessional.com.ar/assets/uploads/images/0550e-ficha-tecnica-8056-jab-n-espuma.pdf"
    },

    // ELITE DISPENSADORES

    'elite-Dispensadores Jabon Alcohol Multiflex Jabon Granel': {
        image: "img/Jabon Alcohol Multiflex Jabon Granel.png",
        detailImage: "imgdetalles/disp multiflex.png",
        brand: "Elite",
        category: "Dispensadores",
    },

    'elite-Dispensadores Jabon Alcohol Multiflex': {
        image: "img/Jabon Alcohol Multiflex.png",
        detailImage: "imgdetalles/disp multiflex.png",
        brand: "Elite",
        category: "Dispensadores",
    },

    'elite-Dispensadores Papel Higienico Jumbo': {
        image: "img/Papel Higienico Jumbo.png",
        detailImage: "imgdetalles/disp jumbo.png",
        brand: "Elite",
        category: "Dispensadores",
    },

    'elite-Dispensadores Papel Higienico Intercalado': {
        image: "img/Papel Higienico Intercalado.png",
        detailImage: "imgdetalles/disp intercalado.png",
        brand: "Elite",
        category: "Dispensadores",
    },

    'elite-Dispensadores Toallas Dobladas Intercaladas': {
        image: "img/Toallas Dobladas Intercaladas.png",
        detailImage: "imgdetalles/disp dobladas intercaladas.png",
        brand: "Elite",
        category: "Dispensadores",
    },

    'elite-Dispensadores Toalla Jumbo Autocorte Non-Touch': {
        image: "img/Toalla Jumbo Autocorte Non-Touch.png",
        detailImage: "imgdetalles/disp non toch.png",
        brand: "Elite",
        category: "Dispensadores",
    },

    'elite-Dispensadores Toalla Jumbo Autocorte Automatico': {
        image: "img/Toalla Jumbo Autocorte Automatico.png",
        detailImage: "imgdetalles/disp non toch.png",
        brand: "Elite",
        category: "Dispensadores",
    },

    'elite-Dispensadores Toalla Jumbo Palanca': {
        image: "img/Toalla Jumbo Palanca.png",
        detailImage: "imgdetalles/disp non toch.png",
        brand: "Elite",
        category: "Dispensadores",
    },

    // WASSINGTON CUIDADOS DE PISO

    'wassington-Cera Autobrillo Uniwax': {
        image: "img2/Cera Autobrillo Uniwax.png",
        detailImage: "imgdetalles/cera uniwax.png",
        brand: "Wassington",
        category: "Cuidado De Pisos",
        fichaTecnica: "https://drive.google.com/file/d/1ROlAJy1zn5qZ1iWZJN-qzGYIUwMj0dYb/view"
    },

    'wassington-Cera Autobrillo Superwax': {
        image: "img2/Cera Autobrillo Superwax.png",
        detailImage: "imgdetalles/cera superwax.png",
        brand: "Wassington",
        category: "Cuidado De Pisos",
        fichaTecnica: "https://drive.google.com/file/d/1oCO5D-Jhli6PKQ-si83HNDAbuAsqEft4/view"
    },

    'wassington-Cera Autobrillo Rex': {
        image: "img2/Cera Autobrillo Rex.png",
        detailImage: "imgdetalles/cera rex.png",
        brand: "Wassington",
        category: "Cuidado De Pisos",
        fichaTecnica: "https://drive.google.com/file/d/1KNp3DPHx_ZPy-FoEVu0vJKUIkXOJvv4k/view"
    },

    'wassington-Cera Acrilica Acrilwax': {
        image: "img2/Cera Acrilica Acrilwax.png",
        detailImage: "imgdetalles/cera acrilwax.png",
        brand: "Wassington",
        category: "Cuidado De Pisos",
        fichaTecnica: "https://drive.google.com/file/d/1ZsPMEm0sdBo3JloKABAwMnhbXUifdIWQ/view"
    },

    'wassington-Sellador Acrilico Acrilwax': {
        image: "img2/Sellador Acrilico Acrilwax.png",
        detailImage: "imgdetalles/sellador acrilico acrilwax.png",
        brand: "Wassington",
        category: "Cuidado De Pisos",
        fichaTecnica: "https://drive.google.com/file/d/1-wHdjv6P12WaUClfs21vH2dOY2bzK5p_/view"
    },

    'wassington-Cera Madera Waxin': {
        image: "img2/Cera Madera Waxin.png",
        detailImage: "imgdetalles/cera madera waxin.png",
        brand: "Wassington",
        category: "Cuidado De Pisos",
        fichaTecnica: "https://drive.google.com/file/d/1wnOFWlXbsujP5xmIlFss1uI3qvMn9Zwg/view"
    },

    'wassington-Acondicionador Kwik': {
        image: "img2/Acondicionador Kwik.png",
        detailImage: "imgdetalles/acondicionador kwik.png",
        brand: "Wassington",
        category: "Cuidado De Pisos",
        fichaTecnica: "https://drive.google.com/file/d/1WBQ1OUlDZ5PRAh5ERzcdZYFXvoRL1Cxl/view"
    },

    'wassington-Limpiador Pisos Flotantes Waxin': {
        image: "img2/Limpiador Pisos Flotantes Waxin.png",
        detailImage: "imgdetalles/pisos flotantes waxin.png",
        brand: "Wassington",
        category: "Cuidado De Pisos",
        fichaTecnica: "https://drive.google.com/file/d/1NDvl7JejGjgXw-PrWmdUuh8lJ1rassT7/view"
    },

    'wassington-Limpia Alfombra Klin': {
        image: "img2/Limpia Alfombra Klin.png",
        detailImage: "imgdetalles/limpia alfombra klin.png",
        brand: "Wassington",
        category: "Cuidado De Pisos",
        fichaTecnica: "https://drive.google.com/file/d/1fpn0fJNX_dHw7dhUn2vBx9NEuzWMyHl5/view"
    },

    'wassington-Removedor Cera Acrilica Kito': {
        image: "img2/Removedor Cera Acrilica Kito.png",
        detailImage: "imgdetalles/removedor cera acrilica.png",
        brand: "Wassington",
        category: "Cuidado De Pisos",
        fichaTecnica: "https://drive.google.com/file/d/1kKH9H9W2cM7XwWx7j1niWOzp5AZmwniK/view"
    },

    'wassington-Removedor Cera Madera Kito': {
        image: "img2/Removedor Cera Madera Kito.png",
        detailImage: "imgdetalles/cera madera kito.png",
        brand: "Wassington",
        category: "Cuidado De Pisos",
        fichaTecnica: "https://drive.google.com/file/d/1GIMcEEmjaYyItPndrLakd4-qECQ73g4J/view"
    },

    'wassington-Removedor Autobrillo Kito': {
        image: "img2/Removedor Autobrillo Kito.png",
        detailImage: "imgdetalles/removedor autobrillo kito.png",
        brand: "Wassington",
        category: "Cuidado De Pisos",
        fichaTecnica: "https://drive.google.com/file/d/1D99kxucxpKuXgFHLQU_6QTyFOxx5vs5H/view"
    },

    // WASSINGTON CUIDADOS DE BAÑOS

    'wassington-Quita Sarro': {
        image: "img2/Quita Sarro.png",
        detailImage: "imgdetalles/quita sarro.png",
        brand: "Wassington",
        category: "Cuidado De Baños",
        fichaTecnica: "https://drive.google.com/file/d/1wg7GObAVQwcgEf7dt4R4J955QA9GXT-v/view"
    },

    'wassington-Desodorante Para Mingitorio Power WC': {
        image: "img2/Desodorante Para Minguitorio Power WC.png",
        detailImage: "imgdetalles/removedor autobrillo kito.png",
        brand: "Wassington",
        category: "Cuidado De Baños",
        fichaTecnica: "https://drive.google.com/file/d/1gcQ_xha1Qwq_6qSCBaYlfURpzCfl5MN_/view"
    },

    // WASSINGTON CUIDADOS DE COCINAS

    'wassington-Limpiador Multiuso Tiger': {
        image: "img2/Limpiador Multiuso Tiger.png",
        detailImage: "imgdetalles/limpiador tiger.png",
        brand: "Wassington",
        category: "Cuidado De Cocinas",
        fichaTecnica: "https://drive.google.com/file/d/13rYhGWp5hEXC7KOskwNO4fnkdCm49liq/view"
    },

    'wassington-Desengrasante Panter I': {
        image: "img2/Desengrasante Panter I.png",
        detailImage: "imgdetalles/panter i.png",
        brand: "Wassington",
        category: "Cuidado De Cocinas",
        fichaTecnica: "https://drive.google.com/file/d/1L2IUuW0gF3Zh7RcZne536zSx_xsCLFWt/view"
    },

    'wassington-Desengrasante Panter H': {
        image: "img2/Desodorante Panter H.png",
        detailImage: "imgdetalles/panter h.png",
        brand: "Wassington",
        category: "Cuidado De Cocinas",
        fichaTecnica: "https://drive.google.com/file/d/1UyajV4OKpQhNWe9KVyxDQ4yb97yAA9OZ/view"
    },

    'wassington-Detergente 15 Back': {
        image: "img2/Detergente 15 Back.png",
        detailImage: "imgdetalles/15 back.png",
        brand: "Wassington",
        category: "Cuidado De Cocinas",
        fichaTecnica: "https://drive.google.com/file/d/1jG4KoqZZwvwG7hhzc-fwDaeNjD_6g_PA/view"
    },

    'wassington-Lavavajilla Tiger Para Maquina Automatica': {
        image: "img2/Abrillantador Tiger Para Maquina Automatica.png",
        detailImage: "imgdetalles/lavavajillas tiger.png",
        brand: "Wassington",
        category: "Cuidado De Cocinas",
        fichaTecnica: "https://drive.google.com/file/d/1ICmRD6VrXz9mgAbpzjats2O84jXCz1Q6/view"
    },

    'wassington-Abrillantador Tiger Para Maquina Automatica': {
        image: "img2/Lavavajilla Tiger Para Maquina Automatica.png",
        detailImage: "imgdetalles/abrillantador tiger.png",
        brand: "Wassington",
        category: "Cuidado De Cocinas",
        fichaTecnica: "https://drive.google.com/file/d/1FKvnDyFD0WCxBMAdlFJMLp8aqLbPT99_/view"
    },
    
    // WASSINGTON CUIDADO PERSONAL

    'wassington-Limpiador De Manos Desengrasante Klin-up': {
        image: "img2/Limpiador De Manos Desengrasante Klin-up.png",
        detailImage: "imgdetalles/limpiador de manos klin.png",
        brand: "Wassington",
        category: "Cuidado Personal",
        fichaTecnica: "https://drive.google.com/file/d/1m5z0i17SdE0MB1VbI_We9Z-nIfuMrXVN/view"
    },

    'wassington-Jabon Para Manos Klin-up': {
        image: "img2/Jabon Para Manos Klin-up.png",
        detailImage: "imgdetalles/jabon para manos klin.png",
        brand: "Wassington",
        category: "Cuidado Personal",
        fichaTecnica: "https://drive.google.com/file/d/1_1SQ-bSgTIYopBxNtszf9WM_4tcr6mb6/view"
    },

    'wassington-Jabon Para Manos Bactericida Perfumado Klin-up': {
        image: "img2/Jabon Para Manos Bactericida Perfumado Klin-up.png",
        detailImage: "imgdetalles/jabon para manos bactericida.png",
        brand: "Wassington",
        category: "Cuidado Personal",
        fichaTecnica: "https://drive.google.com/file/d/1AOb6OAE6cYqhhM6YlgxCjqyMmbbIU4zk/view"
    },

    'wassington-Alcohol En Gel': {
        image: "img2/Alcohol En Gel.png",
        detailImage: "imgdetalles/alcohol en gel.png",
        brand: "Wassington",
        category: "Cuidado Personal",
        fichaTecnica: "https://drive.google.com/file/d/1-wcJQlet_TmZU6eQA9tBAt7ZjeQ_Oi7d/view"
    },

    'wassington-Shampoo Perfumado Para Manos Rex': {
        image: "img2/Shampoo Para Manos Perfumado Rex.png",
        detailImage: "imgdetalles/shampoo rex.png",
        brand: "Wassington",
        category: "Cuidado Personal",
        fichaTecnica: "https://drive.google.com/file/d/14Jc_oBbXjeqYhnvoSbUsCPqT_JCxUpt0/view"
    },

    // WASSINGTON LIMPIADORES Y DESINFECTANTES

    'wassington-Limpiador Lysto Bactericida Cherry': {
        image: "img2/Limpiador Lysto Bactericida Cherry.png",
        detailImage: "imgdetalles/limpiador lysto bactericida cherry.png",
        brand: "Wassington",
        category: "Limpiadores Y Desinfectantes",
        fichaTecnica: "https://drive.google.com/file/d/1rU9WnulzGpmAzE5_8mrd3OLFpsKKWG5z/view"
    },

    'wassington-Limpiador Desinfectante Sanitol Incoloro': {
        image: "img2/Limpiador Desinf Sanitol Incoloro.png",
        detailImage: "imgdetalles/limpiador sanitol incoloro.png",
        brand: "Wassington",
        category: "Limpiadores Y Desinfectantes",
        fichaTecnica: "https://drive.google.com/file/d/10RjbIFKyS2Bx5O7XVeao4r6nr_j0kQSR/view"
    },

    'wassington-Limpiador Desinfectante Sanitol Azul': {
        image: "img2/Limpiador Desinf Sanitol Azul.png",
        detailImage: "imgdetalles/limpiador sanitol azul.png",
        brand: "Wassington",
        category: "Limpiadores Y Desinfectantes",
        fichaTecnica: "https://drive.google.com/file/d/1AsK3eCRnAZ-oOeScLUDFe1UTCycgj4Gv/view"
    },

    'wassington-Limpiador Desinfectante Sanitol Peroxido': {
        image: "img2/Limpiador Desinf Sanitol Peroxido.png",
        detailImage: "imgdetalles/limpiador sanitol peroxido.png",
        brand: "Wassington",
        category: "Limpiadores Y Desinfectantes",
        fichaTecnica: "https://drive.google.com/file/d/1MG1A57UWMXepcWOfAbk-ywxZbWO_mP02/view"
    },

    'wassington-Limpiador Desodorante Concentrado Lysto': {
        image: "img2/Limpiador Deso Concentrado Lysto.png",
        detailImage: "imgdetalles/limpiador lysto desodorante.png",
        brand: "Wassington",
        category: "Limpiadores Y Desinfectantes",
        fichaTecnica: "https://drive.google.com/file/d/14Jc_oBbXjeqYhnvoSbUsCPqT_JCxUpt0/view"
    },

    'wassington-Limpiador Desodorante Rex': {
        image: "img2/Limpiador Deso Rex.png",
        detailImage: "imgdetalles/limpiador desodorante rex.png",
        brand: "Wassington",
        category: "Limpiadores Y Desinfectantes",
        fichaTecnica: "https://drive.google.com/file/d/14Jc_oBbXjeqYhnvoSbUsCPqT_JCxUpt0/view"
    },

    // WASSINGTON LIMPIAVIDRIOS Y MULTIUSOS
    
    'wassington-Limpiavidrios Spray': {
        image: "img2/Limpiavidrios Spray.png",
        detailImage: "imgdetalles/limpiador desodorante rex.png",
        brand: "Wassington",
        category: "Limpiadores Y Desinfectantes",
    },

    'wassington-Limpiavidrios Y Superficies Rex': {
        image: "img2/Limpiavidrios Y Superficies Rex.png",
        detailImage: "imgdetalles/limpiador desodorante rex.png",
        brand: "Wassington",
        category: "Limpiadores Y Desinfectantes",
    },

    'wassington-Limpia Acero inoxidable Rex': {
        image: "img2/Limpia Acero Inox Rex.png",
        detailImage: "imgdetalles/limpiador desodorante rex.png",
        brand: "Wassington",
        category: "Limpiadores Y Desinfectantes",
    },

    'wassington-Espuma Limpiadora Multiuso Rex': {
        image: "img2/Espuma Limpiadora Multiuso Aerosol.png",
        detailImage: "imgdetalles/limpiador desodorante rex.png",
        brand: "Wassington",
        category: "Limpiadores Y Desinfectantes",
    },

    'wassington-Limpiametales Rex': {
        image: "img2/Limpiametales Rex.png",
        detailImage: "imgdetalles/limpiador desodorante rex.png",
        brand: "Wassington",
        category: "Limpiadores Y Desinfectantes",
    },

    'wassington-Limpiador Desodorante Extra Concentrado Lysto': {
        image: "img2/Limpiador Deso Extra Concentrado Lysto.png",
        detailImage: "imgdetalles/limpiador lysto extra concentrado.png",
        brand: "Wassington",
        category: "Limpiadores Y Desinfectantes",
    },

    // ROYCO CARROS CESTOS Y CONTENEDORES

    'royco-Carro Mini Con Prensamopas Horizontal': {
        image: "img3/Carro Mini Con Prensamopas Horizontal.png",
        features: [
            "COLOR: Amarillo, Azul, Rojo, Verde",
            "MEDIDAS: 35 x 56 x 74 cm (alto).",
            "CAPACIDAD TOTAL: 20 lt.",
            "Balde interior removible rojo p/ división de agua.",
            "Clip de fijación de cabo.",
            "Ruedas de 50 mm.",
        ],
        brand: "Royco",
        category: "Carros, Cestos Y Contenedores"
    },

    'royco-Carro Hotelero': {
        image: "img3/Carro Hotelero.png",
        features: [
        ],
        brand: "Royco",
        category: "Carros, Cestos Y Contenedores"
    },

    'royco-Carro Multiservicios Top': {
        image: "img3/Carro Multiservicios Top.png",
        features: [
            "Doble bandeja plástica, porta bolsa y tapa de seguridad.",
            "Bolsa con cierre.",
            "2 ruedas fijas traseras.",
            "4 sujetacabos incluidos.",

            "COLOR: Negro",
            "MEDIDAS: 57 x 116 x 100 cm (alto).",
        ],
        brand: "Royco",
        category: "Carros, Cestos Y Contenedores"
    },

    'royco-Carro Double-Bucket': {
        image: "img3/Carro Double-Bucket.png",
        features: [
            "Prensamopas vertical y manija.",
            "Bandeja para accesorios.",
            "COLOR: Rojo, Azul",
            "MEDIDAS: 40 x 50 x 80 cm (alto)",
            "CAPACIDAD TOTAL: 50 lt.",
        ],
        brand: "Royco",
        category: "Carros, Cestos Y Contenedores"
    },

    'royco-Carro Auxiliar Top': {
        image: "img3/Carro Auxiliar Top.png",
        features: [
            
            "Carro Auxiliar con tres bandejas y manijas laterales para su fácil manejo. ",
            "Columnas de aluminio para una mejor presentación.",
            "bandejas plasticas antideslizantes.",
            "Ruedas giratorias que permiten su facil desplazamiento."
        ],
        brand: "Royco",
        category: "Carros, Cestos Y Contenedores"
    },

    'royco-Cesto a Pedal 15/30/60/100 Lts': {
        image: "img3/Cesto A Pedal.png",
        features: [
            "COLOR: Blanco, Negro, Azul, Amarillo, Verde, Rojo",
            "MEDIDAS: 25 x 36 x 28cm (alto) - 15 lt",
            "MEDIDAS: 32 x 42 x 48cm (alto) - 30 lt",
            "MEDIDAS: 42 x 50 x 68cm (alto) - 60 lt",
            "MEDIDAS: 58 x 44 x 86cm (alto) - 100 lt",
        ],
        brand: "Royco",
        category: "Carros, Cestos Y Contenedores"
    },
    
    'royco-Cesto Push 60/100 Lts': {
        image: "img3/Cesto Push.png",
        features: [
            "COLOR: Blanco, Negro, Azul, Amarillo, Verde, Rojo",
        ],
        brand: "Royco",
        category: "Carros, Cestos Y Contenedores"
    },

    'royco-Cesto Buzon 50 Lts': {
        image: "img3/Cesto Buzon.png",
        features: [
            "COLOR: Negro, Azul, Amarillo, Verde, Rojo",
        ],
        brand: "Royco",
        category: "Carros, Cestos Y Contenedores"
    },

    'royco-Cesto Redondo 14/23 Lts': {
        image: "img3/Cesto Redondo.png",
        features: [
            "COLOR: Negro, Azul, Amarillo, Verde, Rojo",
        ],
        brand: "Royco",
        category: "Carros, Cestos Y Contenedores"
    },

    'royco-Contenedores 240 Lts': {
        image: "img3/Contenedores.png",
        features: [
            "Fabricado con plastico inyectado virgen, resistente y duradero.",
            "Ruedas reforzadas de 200 mm",
            "COLOR: Negro, Azul, Amarillo, Verde, Rojo",
            "MEDIDAS: 59 x 74 x 120 cm (alto)",
        ],
        brand: "Royco",
        category: "Carros, Cestos Y Contenedores"
    },

    // ROYCO EQUIPAMIENTO DE LIMPIEZA

    'royco-Kit Wet Mop': {
        image: "img3/Kit Wet Mop.png",
        features: [
            "Regula su altura de 0,70 cm hasta una altura de 1,40 mt.",
            "Ruedas, manija y tapa hermetica plástica.",
            "Medidas balde: 50 x 26 x 33 cm (alto).",
            "Ruedas 50 mm (diam).",
        ],
        brand: "Royco",
        category: "Equipamiento De Limpieza"
    },

    'royco-Balde 12 Lts Con Escurridor': {
        image: "img3/Balde 12lt Con Escurridor.png",
        features: [
            "Balde Cuadrado plástico inyectado virgen 12 lt.",
            "Con pico vertedor.",
            "Con manija plástica.",
            "COLOR: Blanco, Azul, Amarillo, Verde",            
        ],
        brand: "Royco",
        category: "Equipamiento De Limpieza"
    },

    'royco-Balde Plastico 4 Lts': {
        image: "img3/Balde Plastico 4 lt.png",
        features: [
            "Balde Cuadrado plástico inyectado virgen 4 lt.",
            "Con manija plástica.",
            "COLOR: Blanco, Azul, Amarillo, Verde",    
        ],
        brand: "Royco",
        category: "Equipamiento De Limpieza"
    },

    'royco-Bandeja Portaobjetos': {
        image: "img3/Bandeja Portaobjetos.png",
        features: [
            "MEDIDAS: 36 x 23 x 20,5 cm (alto)",
            "Para organizar y transportar implementos de limpieza.",
            "Con división central y con asa ergonomica para un mejor agarre.",
            "Se puede anexar al Carro Multiservicios, Auxiliar y Hotelero.",
        ],
        brand: "Royco",
        category: "Equipamiento De Limpieza"
    },

    'royco-Pala Aeropuerto': {
        image: "img3/Pala Aeropuerto.png",
        features: [
            "Alta resistencia.",
            "Con cabo de aluminio y mango anatómico.",
            "COLORES: Blanco, Negro, Rojo, Verde, Amarillo",
        ],
        brand: "Royco",
        category: "Equipamiento De Limpieza"
    },

    'royco-Fibras Abrasivas y Zocaleros': {
        image: "img3/Fibras Abrasivas Y Zocalos.png",
        features: [
            "Fabricadas con fibras sinteticas de alta calidad.",
            "COLOR: Blanco, Verde, Azul",
            "MEDIDAS: 10 x 15",
        ],
        brand: "Royco",
        category: "Equipamiento De Limpieza"
    },

    'royco-Discos Abrasivos 13/16/17/20 Pulgadas': {
        image: "img3/Discos Abrasivos.png",
        features: [
            "Tejido abierto y superficie abrasiva fuertemente recubierta.",
            "Presentación: 5 unidades x caja.",
            "13''= 33cm",
            "16''= 40,6cm",
            "17''= 43,2cm",
            "20''= 50,08cm",
        ],
        brand: "Royco",
        category: "Equipamiento De Limpieza"
    },

    'royco-Extensores Telescopicos': {
        image: "img3/Extensores Telescopicos.png",
        features: [
            " Desde 1,50 mt hasta una altura máxima de 6 mt.",
            "Livianas y flexibles.",
            "Empuñadura de goma, ergonomica y antideslizante.",
            "De 2 y 3 tramos.",
        ],
        brand: "Royco",
        category: "Equipamiento De Limpieza"
    },

    'royco-Cambiador De Bebé': {
        image: "img3/Cambiador De Bebe.png",
        features: [
            "Soporta hasta 35 kg.",
            "Sistema plegable con bisagras altamente resistentes.",
            "Incluye plantilla y kit de instalación.",
            "MEDIDAS: 90 x 58 x 15 cm (cerrado) y 90x 58 x 53 (abierto).",
        ],
        brand: "Royco",
        category: "Equipamiento De Limpieza"
    },

    'royco-Señal De Piso Mojado': {
        image: "img3/Senal De Piso Mojado.png",
        features: [
            "Ideal para acompañar la limpieza de pisos o tareas de mantenimiento para preservar de manera segura.",
            "Prevención en Español y en Ingles en ambos lados.",
            "Efectiva y libre de riesgos de caídas en las distintas áreas.",
        ],
        brand: "Royco",
        category: "Equipamiento De Limpieza"
    },

    // ROYCO EQUIPOS DE VIDRIO

    'royco-Lava Secavidrios Ambo Plastico': {
        image: "img3/Lava Secavidrios Ambo Plastico.png",
        features: [
            "Goma premium de alta adherencia, resistencia, elasticidad y angulo de secado.",
            "De un lado lavavidrios Y del otro secador.",
            "COLOR: Blanco,Azul",
            "MEDIDAS: 25cm, 35cm",
        ],
        brand: "Royco",
        category: "Equipos De Vidrio"
    },

    'royco-Secavidrios Profesional Acero Inoxidable': {
        image: "img3/Secavidrios Profesional Acero Inoxidable.png",
        features: [
            "Empuñadura de goma ergonomica y antideslizante.",
            "Goma premium de alta adherencia, resistencia, elasticidad y angulo de secado.",
            "COLOR: Plateado",
            "MEDIDAS: 15cm, 20cm, 25cm, 35cm, 40cm, 45cm, 50cm",
        ],
        brand: "Royco",
        category: "Equipos De Vidrio"
    },

    'royco-Lavavidrios Vellon y Soporte': {
        image: "img3/Lavavidrios Vellon Y Soporte.png",
        features: [
            "Soporte T de aluminio y plástico con vellón.",
            "Para usar en forma manual o anexándolo a una extensión de aluminio.",
            "COLOR: Blanco,Azul",
            "MEDIDAS: 25cm, 35cm, 45cm, 55cm",
        ],
        brand: "Royco",
        category: "Equipos De Vidrio"
    },

    'royco-Secavidrios King Plastico': {
        image: "img3/Secavidrios King Plastico.png",
        features: [
            "Empuñadura de plastico inyectado y soporte de aluminio con goma premium.",
            "Empuñadura ergonómica y antideslizante.",
            "COLOR: Gris",
            "MEDIDAS: 15cm, 20cm, 25cm, 30cm, 35cm, 40cm, 45cm, 50cm",
        ],
        brand: "Royco",
        category: "Equipos De Vidrio"
    },

    'royco-Soportes Lavavidrios': {
        image: "img3/Soportes Lavavidrios.png",
        features: [
            "Fácil y rápido recambio del soporte por diferentes medidas.",
            "COLOR: Azul, Gris",
            "MEDIDAS: 25cm, 35cm, 45cm",
        ],
        brand: "Royco",
        category: "Equipos De Vidrio"
    },

    // ROYCO CABOS

    'royco-Cabo Acero Reforzado': {
        image: "img3/Cabo Acero Reforzado.png",
        features: [
            "COLOR: Blanco, Negro, Azul, Rojo, Verde, Amarillo, Naranja",
            "MEDIDAS: 22mm",
            "ALTURA: 1.50 mt",
            "FORMA DE EMPAQUE: 10 unidades por color",
        ],
        brand: "Royco",
        category: "Cabos"
    },

    'royco-Cabo Aluminio Liso': {
        image: "img3/Cabo Aluminio Liso.png",
        features: [
            "COLOR: Blanco, Negro, Azul, Rojo, Verde, Amarillo, Naranja",
            "MEDIDAS: 22mm",
            "ALTURA: 1.30 mt, 1.50 mt 1.75 mt",
            "FORMA DE EMPAQUE: 10 unidades por color",
        ],
        brand: "Royco",
        category: "Cabos"
    },


    'royco-Cabo Acero Inoxidable': {
        image: "img3/Cabo Acero Inoxidable.png",
        features: [
            "COLOR: Blanco, Negro, Azul, Rojo, Verde, Amarillo, Naranja",
            "MEDIDAS: 22mm",
            "ALTURA: 1.50 mt",
            "FORMA DE EMPAQUE: 10 unidades por color",
        ],
        brand: "Royco",
        category: "Cabos"
    },

    // ROYCO ESCOBAS BARREDORES Y ESCOBILLONES

    'royco-Escoba Plastica Italia': {
        image: "img3/Escoba Plastica Italia.png",
        features: [
            "Para usar con cabos Royco de 22 mm diámetro.",
            "MEDIDAS: 29x30x6 cm",
            "FIBRA: 10 cm",
            "COLOR: Negro, Blanco, Rojo, Azul, Amarillo",
        ],
        brand: "Royco",
        category: "Escobas, Barredores y Escobillones"
    },

    'royco-Escobillon Plastico 40 Cm': {
        image: "img3/Escobillon Plastico 40cm.png",
        features: [
            "Para usar con cabos Royco de 22 mm diámetro.",
            "MEDIDAS: 10x30x7 cm",
            "FIBRA: 7 cm",
            "COLOR: Negro, Blanco, Rojo, Azul, Amarillo",
        ],
        brand: "Royco",
        category: "Escobas, Barredores y Escobillones"
    },

    'royco-Escobillon Cordero 30 Cm': {
        image: "img3/Escobillon Cordero 30cm.png",
        features: [
            "Para usar con cabos Royco de 22 mm diámetro.",
            "MEDIDAS: 10x30x7 cm",
            "FIBRA: 7 cm",
            "COLOR: Negro, Blanco, Rojo, Azul, Amarillo",
        ],
        brand: "Royco",
        category: "Escobas, Barredores y Escobillones"
    },

    'royco-Barrendero Base Plastica 60 Cm': {
        image: "img3/Barrendero Base Plastica 60cm.png",
        features: [
            "Para usar con cabos Royco de 22 mm diámetro.",
            "RIGIDEZ: extra suave.",
            "MEDIDAS: 11x60x7 cm",
            "FIBRA: 6 cm",
        ],
        brand: "Royco",
        category: "Escobas, Barredores y Escobillones"
    },

    'royco-Barrendero Base Madera 80 Cm': {
        image: "img3/Barrendero Base Madera 80cm.png",
        features: [
            "Para usar con cabos Royco de 22 mm diámetro.",
            "RIGIDEZ: extra suave.",
            "MEDIDAS: 11x80x7 cm",
            "FIBRA: 6 cm",
        ],
        brand: "Royco",
        category: "Escobas, Barredores y Escobillones"
    },

    'royco-Barredor Profesional Domestico Completo': {
        image: "img3/Barredor Profesional Domestico Completo.png",
        features: [
            "Cabezal con movimiento universal, se adapta a cualquier tipo de cabo.",
            "Se utiliza en seco con atrapa polvo.",
            "MEDIDAS: 35 x 12cm",
            "MEDIDAS: 60 x 12cm",
            "MEDIDAS: 80 x 12cm",
            "MEDIDAS: 100 x 12cm",
        ],
        brand: "Royco",
        category: "Escobas, Barredores y Escobillones"
    },

    'royco-Barredor Profesional Acrilico Completo': {
        image: "img3/Barredor Profesional Acrilico Completo.png",
        features: [
            "Cabezal con movimiento universal, se adapta a cualquier tipo de cabo.",
            "Se utiliza en seco, sin necesidad de agregar productos químicos.",
            "MEDIDAS: 35 x 12cm",
            "MEDIDAS: 60 x 12cm",
            "MEDIDAS: 80 x 12cm",
            "MEDIDAS: 100 x 12cm",
        ],
        brand: "Royco",
        category: "Escobas, Barredores y Escobillones"
    },

    'royco-Barredor Profesional Algodon Completo': {
        image: "img3/Barredor Profesional Algodon Completo.png",
        features: [
            "Cabezal con movimiento universal, se adapta a cualquier tipo de cabo.",
            "MEDIDAS: 45 x 15cm",
            "MEDIDAS: 60 x 15cm",
            "MEDIDAS: 80 x 15cm",
            "MEDIDAS: 100 x 15cm",
            "MEDIDAS: 120 x 15cm",
        ],
        brand: "Royco",
        category: "Escobas, Barredores y Escobillones"
    },

    'royco-Armazon Profesional 45/60/80/100/120 Cm': {
        image: "img3/Armazon Profesional.png",
        features: [
            "Para usar con repuesto barredor dómestico de acrilico o algodón Royco, sin botón.",
            "Cabezal con movimiento universal, que se adapta a cualquier tipo de cabo.",
            "MEDIDAS: 35 x 12cm",
            "MEDIDAS: 60 x 12cm",
            "MEDIDAS: 80 x 12cm",
            "MEDIDAS: 100 x 12cm",
        ],
        brand: "Royco",
        category: "Escobas, Barredores y Escobillones"
    },

    // ROYCO SECADORES DE PISO

    'royco-Musto': {
        image: "img3/Secadores De Piso Musto.png",
        features: [
            "Doble goma fija que se adapta a todas las superficies.",
            "Adaptador con rosca para todo tipo de cabos de 22 mm",
            "COLOR: Blanco, Azul",
            "MEDIDAS: 35, 50 y 75 cm.",
            ],
        brand: "Royco",
        category: "Secadores De Piso"
    },

    'royco-Aluminio Blanco': {
        image: "img3/Secadores De Piso De Aluminio Blanco.png",
        features: [
            "Fabricado en aluminio reforzado.",
            "Goma Simple intercambiable.",
            "COLOR: Blanco",
            "MEDIDAS: 37, 52, 80 y 100 cm.",
        ],
        brand: "Royco",
        category: "Secadores De Piso"
    },

    'royco-Twister': {
        image: "img3/Secador De Piso Twister.png",
        features: [
            "Su giro de 180º permite ser utilizado debajo de muebles.",
            "Ideal para secar con eficiencia superficies con liquidos.",
            "COLOR: Blanco",
            "MEDIDAS: 50 cm.",
        ],
        brand: "Royco",
        category: "Secadores De Piso"
    },

    // PRODUCTOS VARIOS TRAPOS Y PAÑOS

    'productos varios-Paños Multiuso De Cocina': {
        title: "PAÑOS MULTIUSO DE COCINA",
        image: "img4/Panos Multiuso De Cocina.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Trapos Y Paños"
    },

    'productos varios-Paños Microfibra': {
        title: "PAÑOS MICROFIBRA",
        image: "img4/Panos Microfibra.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Trapos Y Paños"
    },

    'productos varios-Rejilla Doble s/coche': {
        title: "REJILLA DOBLE S/DOBLE",
        image: "img4/Rejilla Doble.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Trapos Y Paños"
    },

    'productos varios-Rejilla Simple De Algodon': {
        title: "REJILLA SIMPLE DE ALGODON",
        image: "img4/Rejilla Simple Algodon.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Trapos Y Paños"
    },

    'productos varios-Rejilla Para Coche Grande': {
        title: "REJILLA PARA COCHE GRANDE",
        image: "img4/Rejilla Para Coche Grande.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Trapos Y Paños"
    },

    'productos varios-Repasador Nido De Abeja': {
        title: "REPASADOR NIDO DE ABEJA",
        image: "img4/Repasador Nido De Abeja.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Trapos Y Paños"
    },

    'productos varios-Rejilla Americana': {
        title: "REJILLA AMERICANA",
        image: "img4/Rejilla Americana.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Trapos Y Paños"
    },

    'productos varios-Rejilla Pabilo': {
        title: "REJILLA PABILO",
        image: "img4/Rejilla Pabilo.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Trapos Y Paños"
    },

    'productos varios-Trapo De Piso Star Costurado Blanco': {
        title: "TRAPO DE PISO STAR COSTURADO BLANCO",
        image: "img4/Trapo De Piso Star Blanco.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Trapos Y Paños"
    },

    'productos varios-Trapo De Piso Star Costurado Gris': {
        title: "TRAPO DE PISO STAR COSTURADO GRIS",
        image: "img4/Trapo De Piso Star Gris.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Trapos Y Paños"
    },

    'productos varios-Trapo De Piso Blanco Reforzado': {
        title: "TRAPO DE PISO BLANCO REFORZADO",
        image: "img4/Trapo De Piso Blanco Reforzado.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Trapos Y Paños"
    },

    'productos varios-Trapo De Piso Gris Reforzado': {
        title: "TRAPO DE PISO GRIS REFORZADO",
        image: "img4/Trapo De Piso Gris Reforzado.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Trapos Y Paños"
    },

    'productos varios-Franela Naranja': {
        title: "FRANELA NARANJA",
        image: "img4/Franela Naranja.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Trapos Y Paños"
    },

    // PRODUCTOS VARIOS varios

    'productos varios-Blem Lustramuebles En Aerosol': {
        title: "BLEM LUSTRAMUEBLES EN AEROSOL",
        image: "img4/Blen Lustramuebles.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Lustramuebles Ceramicol En Aerosol': {
        title: "LUSTRAMUEBLES CERAMICOL EN AEROSOL",
        image: "img4/Ceramicol Lustramuebles.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Desinfectante Lysoform En Aerosol': {
        title: "DESINFECTANTE LYSOFORM EN AEROSOL",
        image: "img4/Lysoform Desinfectante.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Fuyi Mata Moscas Y Mosquitos': {
        title: "FUYI MATA MOSCAS Y MOSQUITOS",
        image: "img4/Fuyi Mata Moscas Y Mosquitos.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Desodorante De Ambiente Glade': {
        title: "DESODORANTE DE AMBIENTE GLADE",
        image: "img4/Glade Desodorante De Ambiente.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Raid Mata Moscas Y Mosquitos': {
        title: "RAID MATA MOSCAS Y MOSQUITOS",
        image: "img4/Raid Mata Moscas Y Mosquitos.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Pato Gel': {
        title: "PATO GEL",
        image: "img4/Pato Gel.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Esencia De Ambiente Feel Y Smell': {
        title: "ESENCIA DE AMBIENTE FEEL Y SMELL",
        image: "img4/Esencia De Ambiente Feel Y Smell.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Limpiador Cremoso Cif': {
        title: "LIMPIADOR CREMOSO CIF",
        image: "img4/Cif Limpiador.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },


    'productos varios-Off En Aerosol': {
        title: "OFF EN AEROSOL",
        image: "img4/Off Aerosol.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },


    'productos varios-Detergente Ala Lavavajillas': {
        title: "DETERGENTE ALA LAVAVAJILLAS",
        image: "img4/Ala Lavavajillas Detergente.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },


    'productos varios-Limpiavidrios Cif': {
        title: "LIMPIAVIDRIOS CIF",
        image: "img4/Cif Limpia Vidrios.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },


    'productos varios-Echo Listo': {
        title: "ECHO LISTO",
        image: "img4/Echo Liso.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },


    'productos varios-Ceramicol Autobrillo': {
        title: "CERAMICOL AUTOBRILLO",
        image: "img4/Ceramicol Autobrillo.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },


    'productos varios-Ceramicol Lampazos': {
        title: "CERAMICOL LAMPAZOS",
        image: "img4/Ceramicol Lampazos.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },


    'productos varios-Alcohol Frau 500ml': {
        title: "ALCOHOL FRAU 500ML",
        image: "img4/Alcohol Frau.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Cif Gel Lavandina 2l': {
        title: "CIF GEL LAVANDINA 2L",
        image: "img4/Cif Gel Con Lavandina.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Pato Pastillas Autoadhesivas': {
        title: "PATO PASTILLAS AUTOADHESIVAS",
        image: "img4/Pato Pastillas Autoadhesivas.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },


    'productos varios-Glade Pastillas': {
        title: "GLADE PASTILLAS",
        image: "img4/Glade Pastillas.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },


    'productos varios-Pulverizadores 500/1000 ml': {
        title: "PULVERIZADORES 500/1000 ML",
        image: "img4/Pulverizadores.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },


    'productos varios-Fibra Esponja Lisa': {
        title: "FIBRA ESPONJA LISA",
        image: "img4/Fibra Esponja Lisa.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },


    'productos varios-Fibra Verde Multiuso': {
        title: "FIBRA VERDE MULTIUSO",
        image: "img4/Fibra Verde Multiuso.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Esponja De Acero Inoxidable': {
        title: "ESPONJA DE ACERO INOXIDABLE",
        image: "img4/Esponja De Acero Inoxidable.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Lana De Acero Batuque': {
        title: "LANA DE ACERO BATUQUE",
        image: "img4/Lana De Acero Batuque.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Pala Con Cabo': {
        title: "PALA CON CABO",
        image: "img4/Pala Con Cabo.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Balde 13 lt Con Mango Metalico': {
        title: "BALDE 13 LT CON MANGO METALICO",
        image: "img4/Balde 13 lt Con Mango Metalico.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Balde Plastico 10 lt': {
        title: "BALDE PLASTICO 10 LT",
        image: "img4/Balde Plastico 10 lt.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Escobilla De Baño': {
        title: "ESCOBILLA DE BAÑO",
        image: "img4/Escoba De Baño.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Plumero De Techo': {
        title: "PLUMERO DE TECHO",
        image: "img4/Plumero De Techo.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Plumero De Lana': {
        title: "PLUMERO DE LANA",
        image: "img4/Plumero De Lana.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Bolsas De Residuos': {
        title: "BOLSAS DE RESIDUOS",
        image: "img4/Bolsas De Residuos.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },


    'productos varios-Guantes Moteados': {
        title: "GUANTES MOTEADOS",
        image: "img4/Guantes Moteados.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Guantes De Latex S/M/L': {
        title: "GUANTES DE LATEX S/M/L",
        image: "img4/Guantes De Latex.png",
        features: [
        ],d: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Guantes De Nitrilo S/M/L': {
        title: "GUANTES DE NITRILO S/M/L",
        image: "img4/Guantes De Nitrilo.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Mopa Microfibra Blanca': {
        title: "MOPA MICROFIBRA BLANCA",
        image: "img4/Mopa Microfibra Blanca.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Mopin Algodon Blanco': {
        title: "MOPIN ALGODON BLANCO",
        image: "img4/Mopin Algodon Blanco.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Plumero Nacional': {
        title: "PLUMERO NACIONAL",
        image: "img4/Plumero Nacional.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Pasacera': {
        title: "PASACERA",
        image: "img4/Pasacera.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Sopapa': {
        title: "SOPAPA",
        image: "img4/Sopapa.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    'productos varios-Secadores De Pisos 40/50 cm': {
        title: "SECADORES DE PISOS 40/50 CM",
        image: "img4/Secadores De Piso.png",
        features: [
        ],
        brand: "Produtos Varios",
        category: "Varios"
    },

    // MAQUINAS DE LIMPIEZA RCN

    'rcm-Bite I': {
        image: "img5/Bite I.png",
        features: [
            "La opción compacta para cuando necesitás velocidad, maniobrabilidad y resultados impecables sin invertir en un equipo grande. Ideal para pasillos, colegios, gimnasios y todo espacio que necesite limpieza profesional en poco tiempo y sin hacer ruido."
        ],
        brand: "Maquinas De Limpieza Rcm",
        category: "Maquinas De Limpieza Rcm",
        fichaTecnica: "https://www.rcm.it/wp-content/uploads/2017/09/BYTE-I-catalogue-IT_EN_ES.pdf"
    },

    'rcm-Bite II': {
        image: "img5/Bite II.png",
        features: [
            "Si querés productividad y autonomía real, esta es LA máquina. Lava, seca, ahorra agua, detergente y energía. Perfecta para empresas de limpieza y para cualquier industria o supermercado con superficies medianas a grandes. Robusta, silenciosa y súper eficiente."
        ],
        brand: "Maquinas De Limpieza Rcm",
        category: "Maquinas De Limpieza Rcm",
        fichaTecnica: "https://www.rcm.it/wp-content/uploads/2017/09/BYTE-II-3-I_EN_SP.pdf"
    },

    'rcm-Giga': {
        image: "img5/Giga.png",
        features: [
            "La premium. Operador sentado, hombre a bordo , tanques enormes, potencia, autonomía y rendimiento de hasta 6.750 m²/h. Para clientes que necesitan limpiar grandes superficies con la mejor tecnología, seguridad, ahorro operativo y una terminación impecable."
        ],
        brand: "Maquinas De Limpieza Rcm",
        category: "Maquinas De Limpieza Rcm",
        fichaTecnica: "https://www.rcm.it/wp-content/uploads/2019/07/GIGA_depliant-I_EN_ES_low.pdf"
    },

    'rcm-Boxer Plus': {
        image: "img5/Boxer Plus.png",
        features: [
            "potencia y productividad en una sola barredora.",
            "Con 13.000 m²/h de rendimiento, gran contenedor de 315 L y aspiración superior sin levantar polvo, la BOXER PLUS es la solución ideal para limpiar grandes superficies rápido, seguro y con menor costo operativo. Robusta, compacta y pensada para trabajar todos los días."
        ],
        brand: "Maquinas De Limpieza Rcm",
        category: "Maquinas De Limpieza Rcm",
        fichaTecnica: "https://www.rcm.it/wp-content/uploads/2019/11/BOXER_PLUS_-I_EN_ES.pdf"
    },

};
// ========================================
// INTERACCION DE PRODUCTOS
// ========================================
let currentFilter = { brand: 'all', category: 'all' };
let allProducts = [];
let productTitle = null;

function toggleCategory(categoryId) {
    const content = document.getElementById(`${categoryId}-content`);
    const arrow = document.getElementById(`${categoryId}-arrow`);
    if (!content || !arrow) return;

    const isOpen = content.classList.contains('active');
    content.classList.toggle('active', !isOpen);
    arrow.classList.toggle('fa-chevron-up', !isOpen);
    arrow.classList.toggle('fa-chevron-down', isOpen);

    if (isOpen) {
        content.querySelectorAll('.sub-subcategory-list').forEach((list) => {
            list.classList.remove('active');
        });
    }
}

function toggleSubSubcategory(event, id) {
    event.preventDefault();

    const clickedList = document.getElementById(id);
    if (!clickedList) return;

    clickedList.classList.toggle('active');
}

function filterProducts(brand, category) {
    currentFilter = { brand, category };
    const normalizedCategory = normalizeText(category);

    allProducts.forEach((product) => {
        const productBrand = product.dataset.brand || '';
        const productCategory = product.dataset.category || '';
        const matchesBrand = productBrand === brand;
        const matchesCategory = normalizeText(productCategory).startsWith(normalizedCategory);

        product.classList.toggle('hidden', !(matchesBrand && matchesCategory));
        product.classList.remove('filtered');
    });

    setProductsTitle(category);
    closeFilters();
    scrollToProductsTitle();
}

function showAllProducts() {
    allProducts.forEach((product) => {
        product.classList.remove('hidden');
        product.classList.remove('filtered');
    });

    setProductsTitle('PRODUCTOS');
    closeFilters();
}

function searchProducts(searchTerm) {
    const term = normalizeText(searchTerm);

    if (!term) {
        showAllProducts();
        return;
    }

    allProducts.forEach((product) => {
        const title = product.querySelector('h3')?.textContent || '';
        const searchableText = normalizeText(`${title} ${product.dataset.brand || ''} ${product.dataset.category || ''}`);
        const isVisible = searchableText.includes(term);

        product.classList.toggle('hidden', !isVisible);
        product.classList.remove('filtered');
    });

    setProductsTitle(`RESULTADOS: "${searchTerm}"`);
}

function showProductInfo(productId) {
    const product = productData[productId];
    if (!product) return;

    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    if (!modal || !modalBody) return;

    const title = product.title || productId.split('-').slice(1).join(' ');
    const brand = product.brand || productId.split('-')[0] || 'Clean Pel';
    const category = product.category || 'Producto institucional';
    const description = product.description || buildProductDescription(title, brand, category);
    const features = product.features?.length ? product.features : buildDefaultFeatures(category);
    const quoteText = encodeURIComponent(`Hola Clean Pel, quiero cotizar este producto: ${title}. Marca: ${brand}. Categoria: ${category}.`);

    modal.style.display = 'block';
    modal.scrollTop = 0;
    document.body.style.overflow = 'hidden';

    modalBody.innerHTML = `
        <div class="product-modal-layout">
            <div class="product-modal-media">
                <img class="product-primary-image" src="${escapeHTML(product.image)}" alt="${escapeHTML(title)}" loading="eager" decoding="async" fetchpriority="high">
                ${product.detailImage ? `
                    <div class="product-detail-slot">
                        <button type="button" class="load-detail-btn" data-detail-image="${escapeHTML(product.detailImage)}" data-detail-title="${escapeHTML(title)}">
                            <i class="fa-solid fa-image"></i> Ver detalle tecnico
                        </button>
                    </div>
                ` : ''}
            </div>
            <div class="product-modal-copy">
                <span class="modal-kicker"><i class="fa-solid fa-box"></i> Ficha comercial</span>
                <div class="product-meta">
                    <span>${escapeHTML(brand)}</span>
                    <span>${escapeHTML(category)}</span>
                </div>
                <h2>${escapeHTML(title)}</h2>
                <p class="product-description">${escapeHTML(description)}</p>
                <ul class="product-feature-list">
                    ${features.map((feature) => `<li>${escapeHTML(feature)}</li>`).join('')}
                </ul>
                <div class="modal-actions">
                    ${product.fichaTecnica ? `
                        <a href="${escapeHTML(product.fichaTecnica)}" target="_blank" class="ghost-button">
                            <i class="fa-solid fa-file-lines"></i> Ficha tecnica
                        </a>
                    ` : ''}
                    <a href="https://api.whatsapp.com/send?phone=543412151619&text=${quoteText}" target="_blank" class="cta-button">
                        <i class="fa-brands fa-whatsapp"></i> Cotizar producto
                    </a>
                </div>
            </div>
        </div>
    `;

    modalBody.querySelector('.load-detail-btn')?.addEventListener('click', loadProductDetailImage, { once: true });
}

function loadProductDetailImage(event) {
    const button = event.currentTarget;
    const slot = button.closest('.product-detail-slot');
    const detailImage = button.dataset.detailImage;
    const title = button.dataset.detailTitle || 'Producto';
    if (!slot || !detailImage) return;

    slot.innerHTML = '<div class="detail-loading">Cargando detalle...</div>';

    const image = new Image();
    image.decoding = 'async';
    image.loading = 'lazy';
    image.alt = `${title} detalle`;
    image.className = 'product-detail-image';

    image.onload = async () => {
        try {
            await image.decode?.();
        } catch {
            // decode can fail on already-decoded images; showing the image is still fine.
        }
        slot.replaceChildren(image);
    };

    image.onerror = () => {
        slot.innerHTML = '<div class="detail-loading">No se pudo cargar el detalle.</div>';
    };

    window.requestAnimationFrame(() => {
        image.src = detailImage;
    });
}

function buildProductDescription(title, brand, category) {
    return `${title} de ${brand}, seleccionado para abastecimiento institucional en la categoria ${category}. Ideal para compras profesionales que buscan continuidad de stock, rendimiento y soporte comercial de Clean Pel.`;
}

function buildDefaultFeatures(category) {
    return [
        `Aplicacion recomendada para ${category.toLowerCase()}.`,
        'Disponible para cotizacion y reposicion programada.',
        'Asesoramiento para elegir presentacion, consumo estimado y productos complementarios.'
    ];
}

function escapeHTML(value) {
    return String(value || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function closeModal() {
    const modal = document.getElementById('productModal');
    if (!modal) return;

    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function clearSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';
    showAllProducts();
}

function highlightSelectedSubcategory(element) {
    document.querySelectorAll('.subcategory-list a, .sub-subcategory-list a')
        .forEach((link) => link.classList.remove('active-subcategory'));
    element?.classList.add('active-subcategory');
}

function setupProductsPage() {
    allProducts = Array.from(document.querySelectorAll('.product-card'));
    productTitle = document.querySelector('.page-title h1, #productsTitle');
    expandCategoryPanel();

    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.querySelector('.search-btn');
    const debouncedSearch = window.CleanPel.debounce(() => searchProducts(searchInput.value.trim()), 160);
    setupFilterDrawer();

    searchInput?.addEventListener('input', debouncedSearch);
    searchBtn?.addEventListener('click', () => searchProducts(searchInput?.value.trim() || ''));
    searchInput?.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') searchProducts(searchInput.value.trim());
    });

    const modal = document.getElementById('productModal');
    window.addEventListener('click', (event) => {
        if (event.target === modal) closeModal();
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeModal();
    });

    showAllProducts();
}

function setupFilterDrawer() {
    const drawer = document.getElementById('productFilters');
    const openButton = document.getElementById('openFilters');
    const closeButton = document.getElementById('closeFilters');
    const backdrop = document.getElementById('filterBackdrop');
    if (!drawer || !openButton || !closeButton || !backdrop) return;

    if (drawer.parentElement !== document.body) document.body.appendChild(drawer);
    if (backdrop.parentElement !== document.body) document.body.appendChild(backdrop);

    openButton.addEventListener('click', openFilters);
    closeButton.addEventListener('click', closeFilters);
    backdrop.addEventListener('click', closeFilters);

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeFilters();
    });
}

function openFilters() {
    const drawer = document.getElementById('productFilters');
    const backdrop = document.getElementById('filterBackdrop');
    if (!drawer || !backdrop) return;

    expandCategoryPanel();
    drawer.classList.add('is-open');
    backdrop.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('filters-open');
}

function closeFilters() {
    const drawer = document.getElementById('productFilters');
    const backdrop = document.getElementById('filterBackdrop');
    if (!drawer || !backdrop) return;

    drawer.classList.remove('is-open');
    backdrop.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('filters-open');
}

function expandCategoryPanel() {
    document.querySelectorAll('.category-content').forEach((content) => {
        content.classList.remove('active');
    });

    document.querySelectorAll('.sub-subcategory-list').forEach((list) => {
        list.classList.remove('active');
    });

    document.querySelectorAll('.category-arrow').forEach((arrow) => {
        arrow.classList.add('fa-chevron-down');
        arrow.classList.remove('fa-chevron-up');
    });
}

function setProductsTitle(title) {
    const titleElement = productTitle || document.querySelector('.page-title h1, #productsTitle');
    if (titleElement) titleElement.textContent = title;
}

function scrollToProductsTitle() {
    const titleElement = productTitle || document.querySelector('.page-title h1, #productsTitle');
    const header = document.querySelector('header');
    if (!titleElement || !header) return;

    const top = titleElement.getBoundingClientRect().top + window.pageYOffset - header.offsetHeight - 20;
    window.scrollTo({ top, behavior: 'smooth' });
}

function normalizeText(value) {
    return String(value || '')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim();
}

window.toggleCategory = toggleCategory;
window.toggleSubSubcategory = toggleSubSubcategory;
window.filterProducts = filterProducts;
window.showProductInfo = showProductInfo;
window.closeModal = closeModal;
window.clearSearch = clearSearch;
window.highlightSelectedSubcategory = highlightSelectedSubcategory;
window.openFilters = openFilters;
window.closeFilters = closeFilters;

window.CleanPel.onReady(() => {
    window.CleanPel.setupLazyMedia({ eagerCount: 5 });
    window.CleanPel.setupChatbot();
    window.CleanPel.setupSideMenu();
    window.CleanPel.setupSubmenu();
    window.CleanPel.setupSmoothAnchors();
    window.CleanPel.setupHeroVideo({ forceMuted: true });
    window.CleanPel.setupReveal('.product-card, .catalog-panel, .sector-card', { threshold: 0.05, rootMargin: '100px 0px' });
    setupProductsPage();
});
