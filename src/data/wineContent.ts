import type { Locale } from "@/lib/i18n/translations";
import type { WineContent } from "@/types/wine";

export const wineContent: Record<string, Record<Locale, WineContent>> = {
  "rezos-wine-saperavi": {
    en: {
      name: "REZO’S WINE – Saperavi",
      classification: "Dry Red",
      region: "Kakheti",
      country: "Georgia",
      grape: "Saperavi 100%",
      grapesSourced: "Locally from Kakheti vineyards.",
      servingTemperature: "+16°C to +18°C",
      storageTemperature: "+5°C to +20°C",
      color: "Dark cherry",
      aroma: "Rich and complex with pronounced tones of black fruit",
      taste:
        "Balanced flavor profile with soft tannins, pleasant acidity, and a long, smooth finish. The prolonged maceration at 20°C enhances the deep, fruity notes.",
      pairing: "Ideal with grilled meats, rich stews, and mature cheeses",
    },
    ru: {
      name: "REZO’S WINE — Saperavi",
      classification: "Сухое Красное",
      region: "Кахетия",
      country: "Грузия",
      grape: "Саперави 100%",
      grapesSourced: "Локально выращенный виноград из виноградников Кахетия",
      servingTemperature: "+16°C — +18°C",
      storageTemperature: "+5°C — +20°C",
      color: "Тёмная вишня",
      aroma: "Богатый и сложный, с ярко выраженными тонами спелой вишни",
      taste:
        "Сбалансированный профиль со мягкими танинами, приятной кислотностью и долгим, гладким послевкусием. Продолжительная мацерация при 20°C усиливает насыщенные фруктовые нотки.",
      pairing:
        "Идеально подходит к блюдам на гриле, наваристым рагу и выдержанным сырам",
    },
    es: {
      name: "REZO’S WINE – Saperavi",
      classification: "Tinto seco",
      region: "Kajetia",
      country: "Georgia",
      grape: "Saperavi 100%",
      grapesSourced: "Cultivado localmente en los viñedos de Kajetia.",
      servingTemperature: "+16°C a +18°C",
      storageTemperature: "+5°C a +20°C",
      color: "Cereza oscuro",
      aroma: "Rico y complejo, con tonos pronunciados de fruta negra",
      taste:
        "Perfil equilibrado con taninos suaves, acidez agradable y un final largo y suave. La maceración prolongada a 20°C realza las notas frutales profundas.",
      pairing: "Ideal con carnes a la parrilla, estofados ricos y quesos curados",
    },
    fr: {
      name: "REZO’S WINE – Saperavi",
      classification: "Rouge sec",
      region: "Kakhétie",
      country: "Géorgie",
      grape: "Saperavi 100%",
      grapesSourced: "Cultivés localement dans les vignobles de Kakhétie.",
      servingTemperature: "+16°C à +18°C",
      storageTemperature: "+5°C à +20°C",
      color: "Cerise sombre",
      aroma: "Riche et complexe, aux notes prononcées de fruits noirs",
      taste:
        "Profil équilibré avec des tanins souples, une acidité agréable et une finale longue et soyeuse. La macération prolongée à 20°C intensifie les notes fruitées profondes.",
      pairing:
        "Idéal avec viandes grillées, ragoûts riches et fromages affinés",
    },
    uk: {
      name: "REZO’S WINE – Saperavi",
      classification: "Сухе червоне",
      region: "Кахетія",
      country: "Грузія",
      grape: "Сапераві 100%",
      grapesSourced: "Локально вирощений виноград із виноградників Кахетії",
      servingTemperature: "+16°C — +18°C",
      storageTemperature: "+5°C — +20°C",
      color: "Темна вишня",
      aroma: "Багатий і складний, з вираженими тонами чорних фруктів",
      taste:
        "Збалансований профіль з м’якими танінами, приємною кислотністю та довгим гладким післясмаком. Тривала мацерація при 20°C підсилює глибокі фруктові ноти.",
      pairing:
        "Ідеально з м’ясом на грилі, наваристими рагу та витриманими сирами",
    },
  },
  "rezos-wine-kindzmarauli": {
    en: {
      name: "REZO’S WINE – Kindzmarauli",
      classification: "Naturally Semi-Sweet Red",
      region: "Kakheti",
      country: "Georgia",
      microzone: "Kindzmarauli PDO",
      grape: "Saperavi 100%",
      grapesSourced: "Locally from Kakheti vineyards.",
      servingTemperature: "+12°C to +16°C",
      storageTemperature: "+5°C to +20°C",
      color: "Dark cherry",
      tastingNotes:
        "Delights the senses with its fruity and aromatic charm. This velvety wine offers a smooth and indulgent experience, perfect for sipping and savoring. Enticing aromas of rich plum jam, blackberry, biscuit, and delicate spices. With its balanced sweetness and smooth texture, Kindzmarauli promises a wine experience that is comforting, making it an ideal companion for relaxed evenings and joyful celebrations.",
      pairing: "Spicy food, grilled meats, chocolate desserts, cheeses.",
    },
    ru: {
      name: "REZO’S WINE — Kindzmarauli",
      classification: "Природно-полусладкое красное",
      region: "Кахетия",
      country: "Грузия",
      microzone:
        "Киндзмараули (Защищенное наименование места происхождения)",
      grape: "Саперави 100%",
      grapesSourced: "Виноград собран вручную на виноградниках Кахетии",
      servingTemperature: "+12°C — +16°C",
      storageTemperature: "+5°C — +20°C",
      color: "Тёмная вишня",
      tastingNotes:
        "Вино восхищает своим фруктовым и ароматным шармом. Это бархатистое вино дарит мягкое, богатое послевкусие, идеально подходящее для неторопливого наслаждения. В букете раскрываются соблазнительные ноты сливового джема, ежевики, бисквита и деликатных пряностей.",
      pairing: "Острые блюда, мясо на гриле, шоколадные десерты, сыры",
    },
    es: {
      name: "REZO’S WINE – Kindzmarauli",
      classification: "Tinto naturalmente semidulce",
      region: "Kajetia",
      country: "Georgia",
      microzone: "Kindzmarauli DOP",
      grape: "Saperavi 100%",
      grapesSourced: "Cultivado localmente en los viñedos de Kajetia.",
      servingTemperature: "+12°C a +16°C",
      storageTemperature: "+5°C a +20°C",
      color: "Cereza oscuro",
      tastingNotes:
        "Encanta los sentidos con su encanto afrutado y aromático. Este vino aterciopelado ofrece una experiencia suave e indulgente. Aromas de mermelada de ciruela, mora, bizcocho y especias delicadas. Con su dulzor equilibrado y textura suave, Kindzmarauli es el compañero ideal para veladas tranquilas y celebraciones.",
      pairing: "Comida picante, carnes a la parrilla, postres de chocolate, quesos.",
    },
    fr: {
      name: "REZO’S WINE – Kindzmarauli",
      classification: "Rouge naturellement demi-doux",
      region: "Kakhétie",
      country: "Géorgie",
      microzone: "Kindzmarauli AOP",
      grape: "Saperavi 100%",
      grapesSourced: "Cultivés localement dans les vignobles de Kakhétie.",
      servingTemperature: "+12°C à +16°C",
      storageTemperature: "+5°C à +20°C",
      color: "Cerise sombre",
      tastingNotes:
        "Séduit par son charme fruité et aromatique. Ce vin velouté offre une expérience douce et gourmande. Arômes de confiture de prune, mûre, biscuit et épices délicates. Avec sa douceur équilibrée et sa texture soyeuse, le Kindzmarauli accompagne parfaitement les soirées détendues et les célébrations.",
      pairing: "Plats épicés, viandes grillées, desserts au chocolat, fromages.",
    },
    uk: {
      name: "REZO’S WINE – Kindzmarauli",
      classification: "Природно напівсолодке червоне",
      region: "Кахетія",
      country: "Грузія",
      microzone:
        "Кіндзмараулі (захищена назва місця походження)",
      grape: "Сапераві 100%",
      grapesSourced: "Виноград зібрано вручну на виноградниках Кахетії",
      servingTemperature: "+12°C — +16°C",
      storageTemperature: "+5°C — +20°C",
      color: "Темна вишня",
      tastingNotes:
        "Вино захоплює фруктовим і ароматним шармом. Це оксамитове вино дарує м’яке, багате післясмак, ідеальне для неквапливого насолодження. У букеті розкриваються ноти сливового джему, ожини, бісквіта та делікатних прянощів.",
      pairing: "Гострі страви, м’ясо на грилі, шоколадні десерти, сири",
    },
  },
  "rezos-wine-kisi": {
    en: {
      name: "REZO’S WINE – Kisi",
      classification: "Qvevri Amber Dry",
      region: "Kakheti",
      country: "Georgia",
      grape: "Kisi 100%",
      grapesSourced: "Locally from Kakheti vineyards",
      servingTemperature: "+13°C to +15°C",
      storageTemperature: "+5°C to +20°C",
      aroma:
        "Wine is produced using the ancient Georgian Qvevri method, aging the wine six months with pomace. Perfect combination of freshness and spiciness, with aromas of dry fruits, tea and autumn yellow leaves.",
      pairing:
        "Duck meat, BBQ, smoked ham, lasagna, aged Bergkäse, Allgäuer Emmentaler",
    },
    ru: {
      name: "REZO’S WINE — Kisi",
      classification: "Квеври Янтарное Сухое",
      region: "Кахетия",
      country: "Грузия",
      grape: "Киси 100%",
      grapesSourced: "Местные виноградники Кахетии",
      servingTemperature: "+13°C — +15°C",
      storageTemperature: "+5°C — +20°C",
      aroma:
        "Вино произведено старинным грузинским методом в квеври с выдержкой на мезге в течение шести месяцев. Идеальное сочетание свежести и пряности; в аромате чувствуются нотки сухофруктов, чая и желтых осенних листьев.",
      pairing:
        "Мясо утки, барбекю, копченая ветчина, лазанья, выдержанный сыр",
    },
    es: {
      name: "REZO’S WINE – Kisi",
      classification: "Ámbar seco de qvevri",
      region: "Kajetia",
      country: "Georgia",
      grape: "Kisi 100%",
      grapesSourced: "Viñedos locales de Kajetia",
      servingTemperature: "+13°C a +15°C",
      storageTemperature: "+5°C a +20°C",
      aroma:
        "Elaborado con el antiguo método georgiano en qvevri, con seis meses de crianza sobre hollejos. Perfecta combinación de frescura y especias, con aromas de frutos secos, té y hojas amarillas de otoño.",
      pairing:
        "Carne de pato, barbacoa, jamón ahumado, lasaña, Bergkäse curado, Allgäuer Emmentaler",
    },
    fr: {
      name: "REZO’S WINE – Kisi",
      classification: "Ambré sec de qvevri",
      region: "Kakhétie",
      country: "Géorgie",
      grape: "Kisi 100%",
      grapesSourced: "Vignobles locaux de Kakhétie",
      servingTemperature: "+13°C à +15°C",
      storageTemperature: "+5°C à +20°C",
      aroma:
        "Élaboré selon l’ancienne méthode géorgienne en qvevri, avec six mois d’élevage sur marc. Alliance parfaite de fraîcheur et d’épices, aux arômes de fruits secs, de thé et de feuilles jaunes d’automne.",
      pairing:
        "Viande de canard, barbecue, jambon fumé, lasagnes, Bergkäse affiné, Allgäuer Emmentaler",
    },
    uk: {
      name: "REZO’S WINE – Kisi",
      classification: "Квеврі янтарне сухе",
      region: "Кахетія",
      country: "Грузія",
      grape: "Кісі 100%",
      grapesSourced: "Місцеві виноградники Кахетії",
      servingTemperature: "+13°C — +15°C",
      storageTemperature: "+5°C — +20°C",
      aroma:
        "Вино вироблено давнім грузинським методом у квеврі з витримкою на меззі протягом шести місяців. Ідеальне поєднання свіжості та прянощів; в ароматі відчуваються ноти сухофруктів, чаю та жовтого осіннього листя.",
      pairing:
        "М’ясо качки, барбекю, копчена шинка, лазанья, витриманий сир",
    },
  },
  "rezos-wine-tsinandali": {
    en: {
      name: "REZO’S WINE – Tsinandali",
      classification: "White Dry",
      region: "Kakheti",
      country: "Georgia",
      microzone: "Tsinandali PDO",
      grape: "Rkatsiteli and Mtsvane",
      grapesSourced: "Locally from Kakheti vineyards",
      servingTemperature: "+13°C to +15°C",
      storageTemperature: "+5°C to +20°C",
      aroma:
        "A classic white wine celebrated for its freshness, crispness, and herbal notes. This wine offers a refreshing and vibrant taste with a delightful array of aromas. Immerse yourself in the enticing scents of lime, lemon, peach, and refreshing mint. With its balanced herbal notes and crisp character, the wine is lively and invigorating, capturing the essence of the Kakheti terroir.",
      pairing: "Baked fish, fresh salads",
    },
    ru: {
      name: "REZO’S WINE — Tsinandali",
      classification: "Белое Сухое",
      region: "Кахетия",
      country: "Грузия",
      microzone: "Цинандали",
      grape: "Ркацители и Мцване",
      grapesSourced: "Местные виноградники Кахетия",
      servingTemperature: "+12°C — +15°C",
      storageTemperature: "+5°C — +20°C",
      aroma:
        "Классическое белое вино, известное своей свежестью, хрусткостью и травяными оттенками. Вкус яркий и освежающий, с выразительными ароматами лайма, лимона, персика и освежающей мяты. Гармоничное сочетание травяных нот и бодрящей кислинки передает характер терруара Кахетии.",
      pairing: "Запеченная рыба, свежие салаты",
    },
    es: {
      name: "REZO’S WINE – Tsinandali",
      classification: "Blanco seco",
      region: "Kajetia",
      country: "Georgia",
      microzone: "Tsinandali DOP",
      grape: "Rkatsiteli y Mtsvane",
      grapesSourced: "Viñedos locales de Kajetia",
      servingTemperature: "+13°C a +15°C",
      storageTemperature: "+5°C a +20°C",
      aroma:
        "Un blanco clásico, celebrado por su frescura, viveza y notas herbales. Sabor refrescante y vibrante, con aromas de lima, limón, melocotón y menta. Sus notas herbales equilibradas y su carácter crujiente capturan la esencia del terroir de Kajetia.",
      pairing: "Pescado al horno, ensaladas frescas",
    },
    fr: {
      name: "REZO’S WINE – Tsinandali",
      classification: "Blanc sec",
      region: "Kakhétie",
      country: "Géorgie",
      microzone: "Tsinandali AOP",
      grape: "Rkatsiteli et Mtsvane",
      grapesSourced: "Vignobles locaux de Kakhétie",
      servingTemperature: "+13°C à +15°C",
      storageTemperature: "+5°C à +20°C",
      aroma:
        "Un blanc classique, apprécié pour sa fraîcheur, sa vivacité et ses notes herbacées. Saveur rafraîchissante, aux arômes de citron vert, citron, pêche et menthe. Ses notes herbacées équilibrées et son caractère croquant capturent l’essence du terroir de Kakhétie.",
      pairing: "Poisson au four, salades fraîches",
    },
    uk: {
      name: "REZO’S WINE – Tsinandali",
      classification: "Біле сухе",
      region: "Кахетія",
      country: "Грузія",
      microzone: "Цінандалі",
      grape: "Ркацителі та Мцване",
      grapesSourced: "Місцеві виноградники Кахетії",
      servingTemperature: "+12°C — +15°C",
      storageTemperature: "+5°C — +20°C",
      aroma:
        "Класичне біле вино, відоме свіжістю, хрусткістю та трав’яними відтінками. Смак яскравий і освіжаючий, з ароматами лайма, лимона, персика та м’яти. Гармонійне поєднання трав’яних нот і бадьорої кислотності передає характер терруару Кахетії.",
      pairing: "Запечена риба, свіжі салати",
    },
  },
  "rezos-wine-tvishi": {
    en: {
      name: "REZO’S WINE – Tvishi",
      classification: "Naturally Semi-Sweet White (PDO)",
      region: "Racha-Lechkhumi",
      subregion: "Racha-Lechkhumi viticulture region",
      microzone: "Tvishi specific viticulture zone (SVZ)",
      country: "Georgia",
      grape: "Tsolikouri 100%",
      grapesSourced: "Tvishi microzone",
      alcohol: "11%–12%",
      servingTemperature: "+10°C to +12°C",
      storageTemperature: "+5°C to +18°C",
      color: "Light golden with greenish reflections",
      aroma:
        "Delicate yet expressive aromas of ripe pear, white peach, apricot and citrus fruits are complemented by floral notes and hints of honey. Subtle mineral characteristics derived from the unique Tvishi microzone contribute additional complexity and freshness.",
      taste:
        "Naturally semi-sweet, harmonious and exceptionally refreshing. The palate displays flavors of pear, quince, apricot and citrus balanced by lively natural acidity. The sweetness is elegant and integrated rather than dominant, creating a refined and balanced wine. The finish is long, fruity and pleasantly refreshing.",
      tastingNotes:
        "Climate: Moderate continental with humid mountain influence · Wine category: Protected Designation of Origin · Sugar: 18–45 g/l · Crop capacity: 8 ton/hectare",
      pairing: "Fresh fruit, soft cheeses, light desserts, and spicy Asian cuisine.",
      vinification:
        "Grapes are hand-picked at the peak of their maturity. Soft de-stemming and crushing is followed by fermentation at controlled temperature (23°C–28°C) in stainless steel tanks. Wine is fermented using cultural yeast strains, by délestage and remontage method. After 5–7 days of maceration, when the desired level of residual sugar is reached, fermentation is stopped by cooling to maintain the natural sweetness and freshness of the wine. Before bottling, wine is kept cold in isothermal reservoirs at −2°C to +2°C.",
    },
    ru: {
      name: "REZO’S WINE — Tvishi",
      classification: "Природно полусладкое белое (ЗНМП)",
      region: "Рача-Лечхуми",
      subregion: "Винодельческий регион Рача-Лечхуми",
      microzone: "Специфическая виноградарская зона Твиши (СВЗ)",
      country: "Грузия",
      grape: "Цоликоури 100%",
      grapesSourced: "Микрозона Твиши",
      alcohol: "11%–12%",
      servingTemperature: "+10°C — +12°C",
      storageTemperature: "+5°C — +18°C",
      color: "Светло-золотистый с зеленоватыми отблесками",
      aroma:
        "Нежные, но выразительные ароматы спелой груши, белого персика, абрикоса и цитрусов дополняются цветочными нотами и оттенками мёда. Тонкие минеральные характеристики уникальной микрозоны Твиши придают вину дополнительную сложность и свежесть.",
      taste:
        "Природно полусладкое, гармоничное и исключительно освежающее. Во вкусе — груша, айва, абрикос и цитрусы, сбалансированные живой натуральной кислотностью. Сладость элегантная и органичная, а не доминирующая. Длинное фруктовое послевкусие.",
      tastingNotes:
        "Климат: умеренно-континентальный с влажным горным влиянием · Категория: вино с защищённым наименованием места происхождения · Сахар: 18–45 г/л · Урожайность: 8 т/га",
      pairing: "Свежие фрукты, мягкие сыры, лёгкие десерты и пряная азиатская кухня.",
      vinification:
        "Виноград собирают вручную в полной зрелости. Мягкое гребнеотделение и дробление, затем ферментация при контролируемой температуре (23°C–28°C) в нержавеющих ёмкостях с культурными дрожжами методом délestage и remontage. Через 5–7 дней мацерации, когда достигнут нужный уровень остаточного сахара, ферментацию останавливают охлаждением. Перед розливом вино хранят в изотермических резервуарах при −2°C…+2°C.",
    },
    es: {
      name: "REZO’S WINE – Tvishi",
      classification: "Blanco semiseco natural (DOP)",
      region: "Racha-Lechkhumi",
      subregion: "Región vitivinícola de Racha-Lechkhumi",
      microzone: "Zona vitivinícola específica de Tvishi (SVZ)",
      country: "Georgia",
      grape: "Tsolikouri 100%",
      grapesSourced: "Microzona de Tvishi",
      alcohol: "11%–12%",
      servingTemperature: "+10°C a +12°C",
      storageTemperature: "+5°C a +18°C",
      color: "Dorado claro con reflejos verdosos",
      aroma:
        "Aromas delicados pero expresivos de pera madura, melocotón blanco, albaricoque y cítricos, complementados con notas florales y matices de miel. Sutiles características minerales de la microzona de Tvishi aportan complejidad y frescura.",
      taste:
        "Naturalmente semiseco, armonioso y excepcionalmente refrescante. En boca, pera, membrillo, albaricoque y cítricos equilibrados por una viva acidez natural. Dulzor elegante e integrado. Final largo, afrutado y refrescante.",
      tastingNotes:
        "Clima: continental moderado con influencia montañosa húmeda · Categoría: denominación de origen protegida · Azúcar: 18–45 g/l · Rendimiento: 8 t/ha",
      pairing: "Fruta fresca, quesos suaves, postres ligeros y cocina asiática especiada.",
      vinification:
        "Uvas cosechadas a mano en plena madurez. Despalillado y estrujado suave, fermentación a temperatura controlada (23°C–28°C) en tanques de acero con levaduras seleccionadas, por délestage y remontage. Tras 5–7 días de maceración, cuando se alcanza el azúcar residual deseado, se detiene la fermentación por enfriamiento. Antes del embotellado, el vino se conserva en frío en depósitos isotérmicos a −2°C…+2°C.",
    },
    fr: {
      name: "REZO’S WINE – Tvishi",
      classification: "Blanc demi-doux naturel (AOP)",
      region: "Racha-Lechkhumi",
      subregion: "Région viticole de Racha-Lechkhumi",
      microzone: "Zone viticole spécifique de Tvishi (SVZ)",
      country: "Géorgie",
      grape: "Tsolikouri 100%",
      grapesSourced: "Microzone de Tvishi",
      alcohol: "11 % – 12 %",
      servingTemperature: "+10°C à +12°C",
      storageTemperature: "+5°C à +18°C",
      color: "Doré clair aux reflets verdâtres",
      aroma:
        "Arômes délicats mais expressifs de poire mûre, pêche blanche, abricot et agrumes, complétés par des notes florales et des touches de miel. De subtiles notes minérales propres à la microzone de Tvishi apportent complexité et fraîcheur.",
      taste:
        "Naturellement demi-doux, harmonieux et exceptionnellement rafraîchissant. Bouche de poire, coing, abricot et agrumes, équilibrée par une acidité naturelle vive. Douceur élégante et intégrée. Finale longue, fruitée et agréablement rafraîchissante.",
      tastingNotes:
        "Climat : continental modéré avec influence montagneuse humide · Catégorie : appellation d’origine protégée · Sucre : 18–45 g/l · Rendement : 8 t/ha",
      pairing: "Fruits frais, fromages doux, desserts légers et cuisine asiatique épicée.",
      vinification:
        "Raisins récoltés à la main à maturité optimale. Égrappage et foulage doux, fermentation à température contrôlée (23°C–28°C) en cuve inox avec levures sélectionnées, par délestage et remontage. Après 5 à 7 jours de macération, lorsque le sucre résiduel souhaité est atteint, la fermentation est arrêtée par refroidissement. Avant la mise en bouteille, le vin est conservé au froid en cuves isothermes à −2°C…+2°C.",
    },
    uk: {
      name: "REZO’S WINE – Tvishi",
      classification: "Природно напівсолодке біле (ЗНМП)",
      region: "Рача-Лечхумі",
      subregion: "Виноробний регіон Рача-Лечхумі",
      microzone: "Специфічна виноградарська зона Tvishi (СВЗ)",
      country: "Грузія",
      grape: "Цолікоурі 100%",
      grapesSourced: "Мікрозона Tvishi",
      alcohol: "11%–12%",
      servingTemperature: "+10°C — +12°C",
      storageTemperature: "+5°C — +18°C",
      color: "Світло-золотистий із зеленуватими відблисками",
      aroma:
        "Ніжні, але виразні аромати стиглої груші, білого персика, абрикоса та цитрусових доповнюються квітковими нотами та відтінками меду. Тонкі мінеральні характеристики унікальної мікрозони Tvishi надають вину додаткової складності та свіжості.",
      taste:
        "Природно напівсолодке, гармонійне та надзвичайно освіжаюче. У смаку — груша, айва, абрикос і цитруси, збалансовані живою природною кислотністю. Солодкість елегантна та органічна. Довге фруктове післясмак.",
      tastingNotes:
        "Клімат: помірно-континентальний з вологим гірським впливом · Категорія: вино з охоронюваним найменуванням · Цукор: 18–45 г/л · Урожайність: 8 т/га",
      pairing: "Свіжі фрукти, м’які сири, легкі десерти та пряна азіатська кухня.",
      vinification:
        "Виноград збирають вручну в повній зрілості. М’яке гребеневідділення та дроблення, далі ферментація при контрольованій температурі (23°C–28°C) у нержавіючих ємностях з культурними дрожжами методом délestage та remontage. Після 5–7 днів мацерації, коли досягнуто потрібний рівень залишкового цукру, ферментацію зупиняють охолодженням. Перед розливом вино зберігають у ізотермічних резервуарах при −2°C…+2°C.",
    },
  },
  "grw-kisi": {
    en: {
      name: "KISI",
      classification: "Dry White",
      region: "Kakheti",
      country: "Georgia",
      grape: "Kisi 100%",
      grapesSourced:
        "100% company’s own vineyards located on the right bank of the Alazani river",
      servingTemperature: "+12°C to +16°C",
      storageTemperature: "+5°C to +18°C",
      color: "Dark straw",
      aroma:
        "Rich bouquet of tropical fruits accompanied with pleasant floral notes",
      taste:
        "It hits the palate as a crisp, balanced wine, with hints of citrus, pineapple, pear, apple and peach.",
      pairing:
        "Best with grilled white fish, poultry and light meat, dishes with green herbs, mozzarella, feta and more.",
    },
    ru: {
      name: "KISI",
      classification: "Белое Сухое",
      region: "Кахетия",
      country: "Грузия",
      grape: "Киси 100%",
      grapesSourced:
        "Только с собственных виноградников компании, расположенных на правом берегу реки Алазани",
      servingTemperature: "+12°C — +16°C",
      storageTemperature: "+16°C — +18°C",
      color: "Тёмно-соломенный",
      aroma:
        "Богатый букет тропических фруктов в сопровождении приятных цветочных нот.",
      taste:
        "Вино раскрывается свежим, сбалансированным вкусом с «хрустящей» кислотностью и оттенками цитрусовых, ананаса, груши, яблока и персика.",
      pairing:
        "Лучше всего сочетается с белой рыбой на гриле, птицей и легким мясом. Прекрасно подходит к блюдам с зеленой зеленью, а также к сырам Моцарелла, Фета и т.д",
    },
    es: {
      name: "KISI",
      classification: "Blanco seco",
      region: "Kajetia",
      country: "Georgia",
      grape: "Kisi 100%",
      grapesSourced:
        "100% de los viñedos propios de la empresa, en la orilla derecha del río Alazani",
      servingTemperature: "+12°C a +16°C",
      storageTemperature: "+5°C a +18°C",
      color: "Paja oscuro",
      aroma:
        "Rico bouquet de frutas tropicales acompañado de agradables notas florales",
      taste:
        "En paladar es un vino fresco y equilibrado, con matices de cítricos, piña, pera, manzana y melocotón.",
      pairing:
        "Ideal con pescado blanco a la parrilla, aves y carnes ligeras, platos con hierbas verdes, mozzarella, feta y más.",
    },
    fr: {
      name: "KISI",
      classification: "Blanc sec",
      region: "Kakhétie",
      country: "Géorgie",
      grape: "Kisi 100%",
      grapesSourced:
        "100 % des vignobles de la maison, sur la rive droite de l’Alazani",
      servingTemperature: "+12°C à +16°C",
      storageTemperature: "+5°C à +18°C",
      color: "Paille foncée",
      aroma:
        "Riche bouquet de fruits tropicaux accompagné de notes florales agréables",
      taste:
        "En bouche, un vin vif et équilibré, aux notes d’agrumes, d’ananas, de poire, de pomme et de pêche.",
      pairing:
        "Idéal avec poisson blanc grillé, volaille et viandes légères, plats aux herbes vertes, mozzarella, feta et plus encore.",
    },
    uk: {
      name: "KISI",
      classification: "Біле сухе",
      region: "Кахетія",
      country: "Грузія",
      grape: "Кісі 100%",
      grapesSourced:
        "Лише з власних виноградників компанії на правому березі річки Алазані",
      servingTemperature: "+12°C — +16°C",
      storageTemperature: "+16°C — +18°C",
      color: "Темно-солом’яний",
      aroma:
        "Багатий букет тропічних фруктів у супроводі приємних квіткових нот.",
      taste:
        "Вино розкривається свіжим, збалансованим смаком із хрусткою кислотністю та відтінками цитрусових, ананаса, груші, яблука та персика.",
      pairing:
        "Найкраще з білою рибою на грилі, птицею та легким м’ясом. Добре пасує до страв із зеленою зеленню, а також до сирів моцарела, фета тощо.",
    },
  },
  "grw-khikhvi-qvevri": {
    en: {
      name: "KHIKHVI QVEVRI",
      classification: "Qvevri White Dry",
      region: "Kakheti",
      country: "Georgia",
      grape: "Khikhvi 100%",
      grapesSourced: "Company’s own vineyards",
      servingTemperature: "+13°C to +16°C",
      storageTemperature: "+5°C to +20°C",
      color: "Pale golden yellow",
      aroma:
        "Aromas of fresh herbs, wildflowers, and subtle notes of ripe yellow fruit",
      taste:
        "A complex yet balanced profile with a crisp finish. It blends delicate floral tones with flavors of dried fruits, providing a smooth, refreshing taste that is both elegant and versatile.",
      pairing:
        "This wine pairs beautifully with seafood dishes, white meats, and Mediterranean salads, making it a great choice for varied dining occasions.",
    },
    ru: {
      name: "KHIKHVI QVEVRI",
      classification: "Белое Сухое — Квеври",
      region: "Кахетия",
      country: "Грузия",
      grape: "Хихви 100%",
      grapesSourced: "Собственные виноградники",
      servingTemperature: "+13°C — +16°C",
      storageTemperature: "+5°C — +20°C",
      color: "Бледно-золотистый",
      aroma:
        "Ароматы трав и полевых цветов, дополненные тонкими нотками спелых желтых фруктов",
      taste:
        "Сбалансированный профиль с освежающим послевкусием. В нем гармонично сочетаются нежные цветочные тона и оттенки сухофруктов, создавая мягкий, бодрящий элегантный вкус.",
      pairing:
        "Прекрасно сочетается с лёгкими блюдами из морепродуктов, белым мясом и средиземноморскими салатами, что делает его универсальным выбором для различных блюд.",
    },
    es: {
      name: "KHIKHVI QVEVRI",
      classification: "Blanco seco de qvevri",
      region: "Kajetia",
      country: "Georgia",
      grape: "Khikhvi 100%",
      grapesSourced: "Viñedos propios de la empresa",
      servingTemperature: "+13°C a +16°C",
      storageTemperature: "+5°C a +20°C",
      color: "Amarillo dorado pálido",
      aroma:
        "Aromas de hierbas frescas, flores silvestres y sutiles notas de fruta amarilla madura",
      taste:
        "Perfil complejo y equilibrado, con un final fresco. Combina tonos florales delicados con sabores de frutos secos, para un gusto suave, elegante y versátil.",
      pairing:
        "Marida a la perfección con mariscos, carnes blancas y ensaladas mediterráneas.",
    },
    fr: {
      name: "KHIKHVI QVEVRI",
      classification: "Blanc sec de qvevri",
      region: "Kakhétie",
      country: "Géorgie",
      grape: "Khikhvi 100%",
      grapesSourced: "Vignobles de la maison",
      servingTemperature: "+13°C à +16°C",
      storageTemperature: "+5°C à +20°C",
      color: "Jaune doré pâle",
      aroma:
        "Arômes d’herbes fraîches, de fleurs des champs et de subtiles notes de fruits jaunes mûrs",
      taste:
        "Profil complexe et équilibré, à la finale vive. Il allie des tons floraux délicats aux saveurs de fruits secs, pour un goût souple, élégant et polyvalent.",
      pairing:
        "S’accorde parfaitement avec fruits de mer, viandes blanches et salades méditerranéennes.",
    },
    uk: {
      name: "KHIKHVI QVEVRI",
      classification: "Біле сухе — квеврі",
      region: "Кахетія",
      country: "Грузія",
      grape: "Хіхві 100%",
      grapesSourced: "Власні виноградники",
      servingTemperature: "+13°C — +16°C",
      storageTemperature: "+5°C — +20°C",
      color: "Блідо-золотистий",
      aroma:
        "Аромати трав і польових квітів, доповнені тонкими нотами стиглих жовтих фруктів",
      taste:
        "Збалансований профіль з освіжаючим післясмаком. Гармонійно поєднуються ніжні квіткові тони та відтінки сухофруктів, створюючи м’який, бадьорий елегантний смак.",
      pairing:
        "Чудово пасує до легких страв з морепродуктів, білого м’яса та середземноморських салатів.",
    },
  },
  "grw-kvareli-qvevri": {
    en: {
      name: "KVARELI QVEVRI",
      classification: "Qvevri Red Dry",
      region: "Kakheti",
      country: "Georgia",
      microzone: "Kvareli PDO",
      grape: "Saperavi 100%",
      grapesSourced: "Only from the best vineyards in Kakheti",
      alcohol: "12%",
      servingTemperature: "+16°C to +18°C",
      storageTemperature: "+5°C to +20°C",
      color: "Deep ruby",
      aroma:
        "The wine reveals aromas of ripe cherry, mixed with soft hints of dark berries.",
      taste:
        "Smooth and harmonious, balanced with soft tannins and a pleasant acidity, which adds a long and refined finish.",
      pairing: "Hearty meals, grilled meats, and aged cheeses.",
      vinification:
        "This wine is crafted using the traditional Georgian qvevri method and after aged in oak barrel at least six months. This contributes to the wine’s unique depth and character, making it a standout selection for lovers of refined, authentic red wines.",
      vintage: "2022",
    },
    ru: {
      name: "KVARELI QVEVRI",
      classification: "Красное сухое вино",
      region: "Кахетия",
      country: "Грузия",
      microzone: "Кварели, Кахетия",
      grape: "Саперави 100%",
      grapesSourced: "Виноград из лучших виноградников Кахетии",
      alcohol: "13%",
      servingTemperature: "+16°C — +18°C",
      storageTemperature: "+5°C — +20°C",
      color: "Темно-вишневый",
      aroma:
        "Вино раскрывает насыщенные ароматы спелой вишни с мягкими оттенками темных ягод.",
      taste:
        "Гладкое и гармоничное, сбалансированное мягкими танинами и приятной кислотностью, создающими долгий и изысканный послевкусие.",
      pairing:
        "Идеально подходит к насыщенным блюдам, мясу на гриле и выдержанным сырам.",
      vinification:
        "Вино производится по традиционному грузинскому методу в квеври — больших глиняных сосудах, закопанных в землю, где проходят ферментация и выдержка. Этот древний способ придаёт вину глубину и уникальный характер, делая его настоящей находкой для ценителей аутентичных и благородных красных вин.",
      vintage: "2011",
    },
    es: {
      name: "KVARELI QVEVRI",
      classification: "Tinto seco de qvevri",
      region: "Kajetia",
      country: "Georgia",
      microzone: "Kvareli DOP",
      grape: "Saperavi 100%",
      grapesSourced: "Solo de los mejores viñedos de Kajetia",
      alcohol: "12%",
      servingTemperature: "+16°C a +18°C",
      storageTemperature: "+5°C a +20°C",
      color: "Rubí profundo",
      aroma:
        "Aromas de cereza madura, con suaves matices de frutos negros.",
      taste:
        "Suave y armonioso, equilibrado con taninos blandos y una acidez agradable que aporta un final largo y refinado.",
      pairing: "Platos contundentes, carnes a la parrilla y quesos curados.",
      vinification:
        "Elaborado con el método tradicional georgiano en qvevri y posteriormente envejecido en barrica de roble al menos seis meses, lo que aporta profundidad y carácter.",
      vintage: "2022",
    },
    fr: {
      name: "KVARELI QVEVRI",
      classification: "Rouge sec de qvevri",
      region: "Kakhétie",
      country: "Géorgie",
      microzone: "Kvareli AOP",
      grape: "Saperavi 100%",
      grapesSourced: "Uniquement des meilleurs vignobles de Kakhétie",
      alcohol: "12%",
      servingTemperature: "+16°C à +18°C",
      storageTemperature: "+5°C à +20°C",
      color: "Rubis profond",
      aroma:
        "Arômes de cerise mûre, mêlés de douces notes de baies noires.",
      taste:
        "Souple et harmonieux, équilibré par des tanins doux et une acidité agréable, pour une finale longue et raffinée.",
      pairing: "Plats copieux, viandes grillées et fromages affinés.",
      vinification:
        "Élaboré selon la méthode traditionnelle géorgienne en qvevri, puis élevé en fût de chêne au moins six mois, pour plus de profondeur et de caractère.",
      vintage: "2022",
    },
    uk: {
      name: "KVARELI QVEVRI",
      classification: "Червоне сухе вино",
      region: "Кахетія",
      country: "Грузія",
      microzone: "Кварелі, Кахетія",
      grape: "Сапераві 100%",
      grapesSourced: "Виноград із найкращих виноградників Кахетії",
      alcohol: "13%",
      servingTemperature: "+16°C — +18°C",
      storageTemperature: "+5°C — +20°C",
      color: "Темно-вишневий",
      aroma:
        "Вино розкриває насичені аромати стиглої вишні з м’якими відтінками темних ягід.",
      taste:
        "Гладке й гармонійне, збалансоване м’якими танінами та приємною кислотністю, що створюють довгий вишуканий післясмак.",
      pairing:
        "Ідеально до насичених страв, м’яса на грилі та витриманих сирів.",
      vinification:
        "Вино виробляється за традиційним грузинським методом у квеврі — великих глиняних посудинах, заглиблених у землю, де відбуваються ферментація та витримка. Цей давній спосіб надає вину глибини й унікального характеру.",
      vintage: "2011",
    },
  },
  "grw-kisi-qvevri": {
    en: {
      name: "KISI QVEVRI",
      classification: "Qvevri Amber Dry",
      region: "Kakheti",
      country: "Georgia",
      grape: "Kisi 100%",
      grapesSourced:
        "Company’s own vineyards located on the right bank of Alazani river",
      servingTemperature: "+13°C to +16°C",
      storageTemperature: "+5°C to +18°C",
      aroma:
        "Pronounced stone fruit notes such as peach, apricot, accompanied with herbal, zest hue",
      taste:
        "Well structured, pleasant bouquet of various fruits with long aftertaste",
      pairing: "Best with steak, lamb and barbecue",
      vintage: "2021",
    },
    ru: {
      name: "KISI QVEVRI",
      classification: "Квеври Янтарное Сухое",
      region: "Кахетия",
      country: "Грузия",
      grape: "Киси 100%",
      grapesSourced:
        "Собственные виноградники компании, расположенные на правом берегу реки Алазани",
      servingTemperature: "+12°C — +16°C",
      storageTemperature: "+5°C — +18°C",
      aroma:
        "Ярко выраженные ноты персика и абрикоса в сочетании с травяными оттенками и нюансами цедры.",
      taste:
        "Хорошо структурированный, приятный букет из различных фруктов с длительным послевкусием",
      pairing:
        "Лучше всего подходит с мясом утки, курицы, барбекю также с выдержанными сырами",
      vintage: "2021",
    },
    es: {
      name: "KISI QVEVRI",
      classification: "Ámbar seco de qvevri",
      region: "Kajetia",
      country: "Georgia",
      grape: "Kisi 100%",
      grapesSourced:
        "Viñedos propios de la empresa, en la orilla derecha del río Alazani",
      servingTemperature: "+13°C a +16°C",
      storageTemperature: "+5°C a +18°C",
      aroma:
        "Notas pronunciadas de fruta de hueso como melocotón y albaricoque, con matices herbales y de cítricos",
      taste:
        "Bien estructurado, agradable bouquet de frutas diversas y un largo retrogusto",
      pairing: "Ideal con bistec, cordero y barbacoa",
      vintage: "2021",
    },
    fr: {
      name: "KISI QVEVRI",
      classification: "Ambré sec de qvevri",
      region: "Kakhétie",
      country: "Géorgie",
      grape: "Kisi 100%",
      grapesSourced:
        "Vignobles de la maison, sur la rive droite de l’Alazani",
      servingTemperature: "+13°C à +16°C",
      storageTemperature: "+5°C à +18°C",
      aroma:
        "Notes marquées de fruits à noyau — pêche, abricot — accompagnées d’accents herbacés et d’écorce d’agrumes",
      taste:
        "Bien structuré, bouquet fruité agréable et longue persistance",
      pairing: "Idéal avec steak, agneau et barbecue",
      vintage: "2021",
    },
    uk: {
      name: "KISI QVEVRI",
      classification: "Квеврі янтарне сухе",
      region: "Кахетія",
      country: "Грузія",
      grape: "Кісі 100%",
      grapesSourced:
        "Власні виноградники компанії на правому березі річки Алазані",
      servingTemperature: "+12°C — +16°C",
      storageTemperature: "+5°C — +18°C",
      aroma:
        "Яскраво виражені ноти персика й абрикоса в поєднанні з трав’яними відтінками та нюансами цедри.",
      taste:
        "Добре структурований, приємний букет різних фруктів із тривалим післясмаком",
      pairing:
        "Найкраще пасує до качки, курки, барбекю, а також до витриманих сирів",
      vintage: "2021",
    },
  },
  "grw-alazani-valley": {
    en: {
      name: "ALAZANI VALLEY",
      classification: "Semi-Sweet White",
      region: "Kakheti",
      country: "Georgia",
      grape: "Rkatsiteli 100%",
      grapesSourced: "Company’s own vineyards",
      servingTemperature: "+10°C to +14°C",
      storageTemperature: "+5°C to +20°C",
      aroma:
        "Distinguished by a tender aroma with expressed tones of quince and melon",
      taste:
        "The taste is fresh and harmonious with mild acidity and candied quince tones.",
      pairing: "Recommended together with fruit salads and dessert",
      vintage: "2023",
    },
    ru: {
      name: "ALAZANI VALLEY",
      classification: "Белое полусладкое",
      region: "Кахетия",
      country: "Грузия",
      grape: "Ркацители 100%",
      grapesSourced: "Виноград с собственных виноградников",
      servingTemperature: "+10°C — +14°C",
      storageTemperature: "+5°C — +20°C",
      aroma: "Отличается нежным ароматом с выраженными тонами айвы и дыни",
      taste:
        "Свежий и гармоничный, с мягкой кислотностью и оттенками цукатированной айвы.",
      pairing: "Рекомендуется к фруктовым салатам и десертам.",
      vintage: "2023",
    },
    es: {
      name: "ALAZANI VALLEY",
      classification: "Blanco semidulce",
      region: "Kajetia",
      country: "Georgia",
      grape: "Rkatsiteli 100%",
      grapesSourced: "Viñedos propios de la empresa",
      servingTemperature: "+10°C a +14°C",
      storageTemperature: "+5°C a +20°C",
      aroma:
        "Se distingue por un aroma tierno, con tonos expresivos de membrillo y melón",
      taste:
        "Fresco y armonioso, con acidez suave y notas de membrillo confitado.",
      pairing: "Recomendado con ensaladas de fruta y postres",
      vintage: "2023",
    },
    fr: {
      name: "ALAZANI VALLEY",
      classification: "Blanc moelleux",
      region: "Kakhétie",
      country: "Géorgie",
      grape: "Rkatsiteli 100%",
      grapesSourced: "Vignobles de la maison",
      servingTemperature: "+10°C à +14°C",
      storageTemperature: "+5°C à +20°C",
      aroma:
        "Se distingue par un arôme tendre aux notes marquées de coing et de melon",
      taste:
        "Frais et harmonieux, avec une acidité douce et des notes de coing confit.",
      pairing: "Recommandé avec salades de fruits et desserts",
      vintage: "2023",
    },
    uk: {
      name: "ALAZANI VALLEY",
      classification: "Біле напівсолодке",
      region: "Кахетія",
      country: "Грузія",
      grape: "Ркацителі 100%",
      grapesSourced: "Виноград із власних виноградників",
      servingTemperature: "+10°C — +14°C",
      storageTemperature: "+5°C — +20°C",
      aroma: "Відрізняється ніжним ароматом із вираженими тонами айви та дині",
      taste:
        "Свіжий і гармонійний, з м’якою кислотністю та відтінками цукатованої айви.",
      pairing: "Рекомендується до фруктових салатів і десертів.",
      vintage: "2023",
    },
  },
  "grw-khvanchkara": {
    en: {
      name: "KHVANCHKARA",
      classification: "Naturally Semi-Sweet Red",
      region: "Racha",
      country: "Georgia",
      subregion: "Ambrolauri",
      microzone: "Khvanchkara PDO",
      grape: "Aleksandrouli and Mujuretuli",
      grapesSourced: "All of grapes are bought from local economies",
      alcohol: "11,5%",
      servingTemperature: "+12°C to +15°C",
      storageTemperature: "+5°C to +20°C",
      aroma:
        "The wine has a dominant character of red and black berries, delicate floral and slightly of sweet spicy notes.",
      taste:
        "The palate mirrors the aroma notes. It has good balance of sweetness and acidity, texture is smooth and round",
      pairing:
        "The wine is a good accompaniment to ham, slightly spicy food, pork, fruits, and desserts",
      vintage: "2023",
    },
    ru: {
      name: "KHVANCHKARA",
      classification: "Природно-полусладкое красное",
      region: "Рача",
      country: "Грузия",
      subregion: "Амбролаури",
      microzone:
        "Хванчкара (защищенное наименование места происхождения)",
      grape: "Александраули и Муджуретули",
      grapesSourced: "Закупается у местных фермерских хозяйств",
      alcohol: "11,5%",
      servingTemperature: "+12°C — +15°C",
      storageTemperature: "+5°C — +20°C",
      aroma:
        "Доминируют ноты красных и черных ягод, присутствуют нежные цветочные нюансы и легкие оттенки сладких специй.",
      taste:
        "Вкус повторяет ароматический профиль. Вино отличается хорошим балансом сладости и кислотности, а также мягкой, округлой текстурой",
      pairing:
        "Хорошо подходит с ветчиной, умеренно острыми блюдами, свининой, фруктами и десертами.",
      vintage: "2023",
    },
    es: {
      name: "KHVANCHKARA",
      classification: "Tinto semidulce natural",
      region: "Racha",
      country: "Georgia",
      subregion: "Ambrolauri",
      microzone: "Khvanchkara DOP",
      grape: "Aleksandrouli y Mujuretuli",
      grapesSourced: "Toda la uva se compra a explotaciones locales",
      alcohol: "11,5%",
      servingTemperature: "+12°C a +15°C",
      storageTemperature: "+5°C a +20°C",
      aroma:
        "Carácter dominante de frutos rojos y negros, con notas florales delicadas y un toque de especias dulces.",
      taste:
        "El paladar refleja el aroma. Buen equilibrio de dulzor y acidez, con una textura suave y redonda",
      pairing:
        "Acompaña bien jamón, platos ligeramente picantes, cerdo, frutas y postres",
      vintage: "2023",
    },
    fr: {
      name: "KHVANCHKARA",
      classification: "Rouge moelleux naturel",
      region: "Ratcha",
      country: "Géorgie",
      subregion: "Ambrolauri",
      microzone: "Khvanchkara AOP",
      grape: "Aleksandrouli et Mujuretuli",
      grapesSourced: "Tous les raisins sont achetés auprès d’exploitations locales",
      alcohol: "11,5%",
      servingTemperature: "+12°C à +15°C",
      storageTemperature: "+5°C à +20°C",
      aroma:
        "Caractère dominant de baies rouges et noires, notes florales délicates et une légère touche d’épices douces.",
      taste:
        "Le palais reprend les notes aromatiques. Bel équilibre sucré-acide, texture souple et ronde",
      pairing:
        "S’accorde avec jambon, plats légèrement épicés, porc, fruits et desserts",
      vintage: "2023",
    },
    uk: {
      name: "KHVANCHKARA",
      classification: "Природно-напівсолодке червоне",
      region: "Рача",
      country: "Грузія",
      subregion: "Амбролаурі",
      microzone:
        "Хванчкара (захищена назва місця походження)",
      grape: "Александраулі та Муджуретулі",
      grapesSourced: "Закуповується в місцевих фермерських господарств",
      alcohol: "11,5%",
      servingTemperature: "+12°C — +15°C",
      storageTemperature: "+5°C — +20°C",
      aroma:
        "Домінують ноти червоних і чорних ягід, ніжні квіткові нюанси та легкі відтінки солодких спецій.",
      taste:
        "Смак повторює ароматичний профіль. Вино вирізняється добрим балансом солодощі й кислотності та м’якою округлою текстурою",
      pairing:
        "Добре пасує до шинки, помірно гострих страв, свинини, фруктів і десертів.",
      vintage: "2023",
    },
  },
  "grw-alazani-valley-red": {
    en: {
      name: "ALAZANI VALLEY",
      classification: "Semi-Sweet Red",
      region: "Kakheti",
      country: "Georgia",
      grape: "Saperavi 100%",
      grapesSourced: "Company’s own vineyards",
      alcohol: "11,5%",
      servingTemperature: "+12°C to +15°C",
      storageTemperature: "+5°C to +20°C",
      aroma:
        "The wine has rich fruit tones authentic for Saperavi such as various red and black fruits",
      taste: "Dark forest fruits, undertone of jams",
      vintage: "2023",
    },
    ru: {
      name: "ALAZANI VALLEY",
      classification: "Красное полусладкое",
      region: "Кахетия",
      country: "Грузия",
      grape: "Саперави 100%",
      grapesSourced: "Виноград с собственных виноградников",
      alcohol: "11,5%",
      servingTemperature: "+12°C — +15°C",
      storageTemperature: "+5°C — +20°C",
      aroma:
        "Богат фруктовыми тонами, характерными для сорта Саперави — сочные чёрные ягоды, вишня, чернослив, шелковица и т.д.",
      taste:
        "Главный акцент — это спелая ежевика, черная смородина и шелковица, нотки джема. Вино очень сбалансированное с приятным послевкусием",
      vintage: "2023",
    },
    es: {
      name: "ALAZANI VALLEY",
      classification: "Tinto semidulce",
      region: "Kajetia",
      country: "Georgia",
      grape: "Saperavi 100%",
      grapesSourced: "Viñedos propios de la empresa",
      alcohol: "11,5%",
      servingTemperature: "+12°C a +15°C",
      storageTemperature: "+5°C a +20°C",
      aroma:
        "Rico en tonos frutales auténticos del Saperavi, con frutos rojos y negros",
      taste: "Frutos del bosque oscuros, con un fondo de mermeladas",
      vintage: "2023",
    },
    fr: {
      name: "ALAZANI VALLEY",
      classification: "Rouge moelleux",
      region: "Kakhétie",
      country: "Géorgie",
      grape: "Saperavi 100%",
      grapesSourced: "Vignobles de la maison",
      alcohol: "11,5%",
      servingTemperature: "+12°C à +15°C",
      storageTemperature: "+5°C à +20°C",
      aroma:
        "Riche en notes fruitées typiques du Saperavi, fruits rouges et noirs",
      taste: "Fruits noirs des bois, avec un fond de confitures",
      vintage: "2023",
    },
    uk: {
      name: "ALAZANI VALLEY",
      classification: "Червоне напівсолодке",
      region: "Кахетія",
      country: "Грузія",
      grape: "Сапераві 100%",
      grapesSourced: "Виноград із власних виноградників",
      alcohol: "11,5%",
      servingTemperature: "+12°C — +15°C",
      storageTemperature: "+5°C — +20°C",
      aroma:
        "Багатий фруктовими тонами, характерними для сорту Сапераві — соковиті чорні ягоди, вишня, чорнослив, шовковиця тощо.",
      taste:
        "Головний акцент — стигла ожина, чорна смородина і шовковиця, нотки джему. Вино дуже збалансоване з приємним післясмаком",
      vintage: "2023",
    },
  },
  "grw-kindzmarauli": {
    en: {
      name: "KINDZMARAULI",
      classification: "Naturally Semi-Sweet Red",
      region: "Kakheti",
      country: "Georgia",
      microzone: "Kindzmarauli PDO",
      grape: "Saperavi 100%",
      grapesSourced: "100% Company’s own vineyards",
      servingTemperature: "+13°C to +16°C",
      storageTemperature: "+5°C to +20°C",
      aroma:
        "Wine is very expressive. The most immediate scents are of ripe, dark fruits and delicate floral signature.",
      taste:
        "A soft, honeyed sweetness hints, dominated by blackberry jam and ripe pomegranate",
      vintage: "2023",
    },
    ru: {
      name: "KINDZMARAULI",
      classification: "Природно-полусладкое красное",
      region: "Кварели",
      country: "Грузия",
      microzone:
        "Киндзмараули (защищенное наименование места происхождения)",
      grape: "Саперави 100%",
      grapesSourced: "Виноград с собственных виноградников",
      servingTemperature: "+12°C — +16°C",
      storageTemperature: "+5°C — +20°C",
      aroma:
        "Вино гармоничное, ярко выраженный и богатый букет тёмных фруктов, оттенки фиолетовых цветов и шоколада",
      taste:
        "Ощущается мягкая сладость, в которой доминируют ноты ежевичного джема и спелого граната. Вино сбалансированное, с долгим послевкусием",
      vintage: "2023",
    },
    es: {
      name: "KINDZMARAULI",
      classification: "Tinto semidulce natural",
      region: "Kajetia",
      country: "Georgia",
      microzone: "Kindzmarauli DOP",
      grape: "Saperavi 100%",
      grapesSourced: "100% viñedos propios de la empresa",
      servingTemperature: "+13°C a +16°C",
      storageTemperature: "+5°C a +20°C",
      aroma:
        "Vino muy expresivo. Los aromas más inmediatos son de frutos negros maduros y una delicada firma floral.",
      taste:
        "Dulzor suave con un toque de miel, dominado por mermelada de mora y granada madura",
      vintage: "2023",
    },
    fr: {
      name: "KINDZMARAULI",
      classification: "Rouge moelleux naturel",
      region: "Kakhétie",
      country: "Géorgie",
      microzone: "Kindzmarauli AOP",
      grape: "Saperavi 100%",
      grapesSourced: "100 % vignobles de la maison",
      servingTemperature: "+13°C à +16°C",
      storageTemperature: "+5°C à +20°C",
      aroma:
        "Vin très expressif. Les premiers arômes sont de fruits noirs mûrs et d’une délicate signature florale.",
      taste:
        "Douceur mielée et souple, dominée par la confiture de mûre et la grenade mûre",
      vintage: "2023",
    },
    uk: {
      name: "KINDZMARAULI",
      classification: "Природно-напівсолодке червоне",
      region: "Кварелі",
      country: "Грузія",
      microzone:
        "Кіндзмараулі (захищена назва місця походження)",
      grape: "Сапераві 100%",
      grapesSourced: "Виноград із власних виноградників",
      servingTemperature: "+12°C — +16°C",
      storageTemperature: "+5°C — +20°C",
      aroma:
        "Вино гармонійне, яскраво виражений і багатий букет темних фруктів, відтінки фіолетових квітів і шоколаду",
      taste:
        "Відчувається м’яка солодкість, у якій домінують ноти ожинового джему та стиглого граната. Вино збалансоване, з довгим післясмаком",
      vintage: "2023",
    },
  },
  "grw-saperavi-qvevri": {
    en: {
      name: "SAPERAVI QVEVRI",
      classification: "Qvevri Red Dry",
      region: "Kakheti",
      subregion: "Kakheti viticulture region",
      country: "Georgia",
      grape: "Saperavi 100%",
      grapesSourced: "100% own vineyards",
      alcohol: "12.5%–14.0%",
      servingTemperature: "+16°C to +18°C",
      storageTemperature: "+5°C to +20°C",
      color: "Deep ruby red",
      aroma:
        "The bouquet reveals concentrated aromas of blackberry, black cherry, ripe plum and forest berries. These fruit-driven characteristics are complemented by hints of black pepper, clove, cocoa, tobacco leaf and subtle earthy nuances. With aging, the wine develops additional complexity expressed through leather, dried fruits and dark chocolate notes.",
      taste:
        "Powerful and full-bodied with outstanding concentration and structure. Rich dark fruit flavors dominate the palate, supported by firm but polished tannins. The wine demonstrates excellent balance between fruit, acidity and tannic backbone. Long and persistent finish showcases black berries, spices and elegant mineral undertones.",
      tastingNotes:
        "Climate: Moderate continental · Wine category: Qvevri wine · Sugar: <4 g/l · Crop capacity: 8–10 ton/hectare",
      pairing: "Grilled meats, hearty stews, and aged cheeses.",
      vinification:
        "Grapes are hand-picked at the peak of their maturity. Soft de-stemming and crushing is followed by fermentation at controlled temperature (23°C–28°C) in qvevri. After 8–10 days of maceration, the wine is racked clean, transferred for malolactic fermentation and aged in qvevri for 5 months.",
    },
    ru: {
      name: "SAPERAVI QVEVRI",
      classification: "Красное сухое вино квеври",
      region: "Кахетия",
      subregion: "Винодельческий регион Кахетия",
      country: "Грузия",
      grape: "Саперави 100%",
      grapesSourced: "100% виноград с собственных виноградников",
      alcohol: "12,5%–14,0%",
      servingTemperature: "+16°C — +18°C",
      storageTemperature: "+5°C — +20°C",
      color: "Насыщенный рубиново-красный",
      aroma:
        "Букет раскрывается концентрированными ароматами ежевики, черешни, спелой сливы и лесных ягод. Фруктовые ноты дополняются оттенками черного перца, гвоздики, какао, табачного листа и тонкими землистыми нюансами. При выдержке вино обретает дополнительную сложность — кожа, сухофрукты и темный шоколад.",
      taste:
        "Мощное, полнотелое вино с выдающейся концентрацией и структурой. Во вкусе доминируют насыщенные темные фрукты, поддержанные плотными, но отполированными танинами. Отличный баланс фруктов, кислотности и танинного каркаса. Длинное, стойкое послевкусие с нотами черных ягод, специй и элегантными минеральными оттенками.",
      tastingNotes:
        "Климат: умеренно-континентальный · Категория: вино квеври · Сахар: <4 г/л · Урожайность: 8–10 т/га",
      pairing: "Мясо на гриле, насыщенные рагу и выдержанные сыры.",
      vinification:
        "Виноград собирают вручную в полной зрелости. Мягкое гребнеотделение и дробление, затем ферментация при контролируемой температуре (23°C–28°C) в квеври. После 8–10 дней мацерации вино сливают, проводят малолактическую ферментацию и выдерживают в квеври 5 месяцев.",
    },
    es: {
      name: "SAPERAVI QVEVRI",
      classification: "Tinto seco de qvevri",
      region: "Kajetia",
      subregion: "Región vitivinícola de Kajetia",
      country: "Georgia",
      grape: "Saperavi 100%",
      grapesSourced: "100% uvas de viñedos propios",
      alcohol: "12,5%–14,0%",
      servingTemperature: "+16°C a +18°C",
      storageTemperature: "+5°C a +20°C",
      color: "Rojo rubí intenso",
      aroma:
        "El bouquet revela aromas concentrados de mora, cereza negra, ciruela madura y frutos del bosque. Estas notas frutales se complementan con pimienta negra, clavo, cacao, hoja de tabaco y sutiles matices terrosos. Con la crianza aparecen cuero, frutos secos y chocolate negro.",
      taste:
        "Potente y corpulento, con gran concentración y estructura. Predominan frutos negros maduros, apoyados por taninos firmes pero pulidos. Excelente equilibrio entre fruta, acidez y estructura tanínica. Final largo y persistente con bayas negras, especias y elegantes matices minerales.",
      tastingNotes:
        "Clima: continental moderado · Categoría: vino de qvevri · Azúcar: <4 g/l · Rendimiento: 8–10 t/ha",
      pairing: "Carnes a la parrilla, guisos contundentes y quesos curados.",
      vinification:
        "Uvas cosechadas a mano en su punto óptimo de madurez. Despalillado y estrujado suave, fermentación a temperatura controlada (23°C–28°C) en qvevri. Tras 8–10 días de maceración, el vino se trasiega, pasa la fermentación maloláctica y envejece en qvevri 5 meses.",
    },
    fr: {
      name: "SAPERAVI QVEVRI",
      classification: "Rouge sec de qvevri",
      region: "Kakhétie",
      subregion: "Région viticole de Kakhétie",
      country: "Géorgie",
      grape: "Saperavi 100%",
      grapesSourced: "100 % de vignobles propres",
      alcohol: "12,5 % – 14,0 %",
      servingTemperature: "+16°C à +18°C",
      storageTemperature: "+5°C à +20°C",
      color: "Rouge rubis profond",
      aroma:
        "Le bouquet dévoile des arômes concentrés de mûre, cerise noire, prune mûre et baies des bois. Ces notes fruitées s’accompagnent de poivre noir, clou de girofle, cacao, feuille de tabac et de nuances terreuses subtiles. Avec l’âge, le vin gagne en complexité — cuir, fruits secs et chocolat noir.",
      taste:
        "Puissant et corsé, d’une concentration et d’une structure remarquables. Les fruits noirs dominent le palais, soutenus par des tanins fermes mais polis. Excellent équilibre entre fruit, acidité et structure tannique. Finale longue et persistante aux notes de baies noires, d’épices et de minéraux élégants.",
      tastingNotes:
        "Climat : continental modéré · Catégorie : vin de qvevri · Sucre : <4 g/l · Rendement : 8–10 t/ha",
      pairing: "Viandes grillées, plats mijotés copieux et fromages affinés.",
      vinification:
        "Raisins récoltés à la main à parfaite maturité. Égrappage et foulage doux, fermentation à température contrôlée (23°C–28°C) en qvevri. Après 8 à 10 jours de macération, le vin est soutiré, subit la fermentation malolactique et est élevé en qvevri pendant 5 mois.",
    },
    uk: {
      name: "SAPERAVI QVEVRI",
      classification: "Червоне сухе вино квеврі",
      region: "Кахетія",
      subregion: "Виноробний регіон Кахетія",
      country: "Грузія",
      grape: "Сапераві 100%",
      grapesSourced: "100% виноград із власних виноградників",
      alcohol: "12,5%–14,0%",
      servingTemperature: "+16°C — +18°C",
      storageTemperature: "+5°C — +20°C",
      color: "Насичений рубіново-червоний",
      aroma:
        "Букет розкриває концентровані аромати ожини, чорної вишні, стиглої сливи та лісових ягід. Фруктові ноти доповнюються чорним перцем, гвоздикою, какао, тютюновим листом і тонкими землистими відтінками. З витримкою з’являються шкіра, сухофрукти та темний шоколад.",
      taste:
        "Потужне, насичене вино з виразною концентрацією та структурою. У смаку домінують темні фрукти, підтримані щільними, але полірованими танінами. Чудовий баланс фруктів, кислотності та танінного каркасу. Довге, стійке післясмак з нотами чорних ягід, спецій і елегантними мінеральними відтінками.",
      tastingNotes:
        "Клімат: помірно-континентальний · Категорія: вино квеврі · Цукор: <4 г/л · Урожайність: 8–10 т/га",
      pairing: "М’ясо на грилі, наваристі рагу та витримані сири.",
      vinification:
        "Виноград збирають вручну в повній зрилості. М’яке гребеневідділення та дроблення, далі ферментація при контрольованій температурі (23°C–28°C) у квеврі. Після 8–10 днів мацерації вино зливають, проводять малолактичну ферментацію та витримують у квеврі 5 місяців.",
    },
  },
  "grw-saperavi": {
    en: {
      name: "SAPERAVI",
      classification: "Dry Red",
      region: "Kakheti",
      country: "Georgia",
      grape: "Saperavi 100%",
      grapesSourced: "Company’s own vineyards",
      servingTemperature: "+16°C to +18°C",
      storageTemperature: "+5°C to +20°C",
      color: "Dark ruby colour",
      aroma:
        "The wine is defined by dominant, inky dark fruit aromas—notably blackberry and black plum—layered with elegant undertones of black pepper and violet.",
      taste:
        "Well structured, powerful wine with medium to long finish. The dark fruit from the nose translates directly to the tongue",
      vintage: "2023",
    },
    ru: {
      name: "SAPERAVI",
      classification: "Красное сухое",
      region: "Кахетия",
      country: "Грузия",
      grape: "Саперави 100%",
      grapesSourced: "100% виноград с собственных виноградников",
      servingTemperature: "+16°C — +18°C",
      storageTemperature: "+5°C — +20°C",
      color: "Темно-рубиновый",
      aroma:
        "Вино определяется доминирующими ароматами темных фруктов — особенно ежевики и черной сливы, дополненными элегантными нотками специи, кожи и фиалки.",
      taste:
        "Хорошо структурированное. Мощное, яркое вино с насыщенным вкусом и долгим послевкусием",
      vintage: "2023",
    },
    es: {
      name: "SAPERAVI",
      classification: "Tinto seco",
      region: "Kajetia",
      country: "Georgia",
      grape: "Saperavi 100%",
      grapesSourced: "Viñedos propios de la empresa",
      servingTemperature: "+16°C a +18°C",
      storageTemperature: "+5°C a +20°C",
      color: "Color rubí oscuro",
      aroma:
        "Aromas dominantes de fruta negra tinta —mora y ciruela negra— con elegantes matices de pimienta negra y violeta.",
      taste:
        "Vino bien estructurado y potente, con un final medio a largo. La fruta negra de la nariz se traduce directamente en boca",
      vintage: "2023",
    },
    fr: {
      name: "SAPERAVI",
      classification: "Rouge sec",
      region: "Kakhétie",
      country: "Géorgie",
      grape: "Saperavi 100%",
      grapesSourced: "Vignobles de la maison",
      servingTemperature: "+16°C à +18°C",
      storageTemperature: "+5°C à +20°C",
      color: "Couleur rubis sombre",
      aroma:
        "Arômes dominants de fruits noirs encreux — mûre et prune noire — avec d’élégantes notes de poivre noir et de violette.",
      taste:
        "Vin puissant, bien structuré, à la finale moyenne à longue. Les fruits noirs du nez se retrouvent directement en bouche",
      vintage: "2023",
    },
    uk: {
      name: "SAPERAVI",
      classification: "Червоне сухе",
      region: "Кахетія",
      country: "Грузія",
      grape: "Сапераві 100%",
      grapesSourced: "100% виноград із власних виноградників",
      servingTemperature: "+16°C — +18°C",
      storageTemperature: "+5°C — +20°C",
      color: "Темно-рубіновий",
      aroma:
        "Вино визначається домінуючими ароматами темних фруктів — особливо ожини та чорної сливи, доповненими елегантними нотками спецій, шкіри та фіалки.",
      taste:
        "Добре структуроване. Потужне, яскраве вино з насиченим смаком і довгим післясмаком",
      vintage: "2023",
    },
  },
  "grw-mukuzani": {
    en: {
      name: "MUKUZANI",
      classification: "Red Dry",
      region: "Kakheti",
      country: "Georgia",
      microzone: "Mukuzani PDO",
      grape: "Saperavi 100%",
      grapesSourced: "Handpicked grapes only from Mukuzani PDO",
      servingTemperature: "+16°C to +18°C",
      storageTemperature: "+5°C to +20°C",
      color: "Deep, opaque ruby",
      aroma:
        "A complex bouquet of black cherry, dark chocolate, and blackberry, layered with smoky notes of tobacco, vanilla, and cedar from the oak",
      taste:
        "Corpulent and full with fruit tones, with round medium tannins and extended taste.",
      pairing: "Best with steak, lamb, barbecue and blue or aged cheese",
      vintage: "2022",
    },
    ru: {
      name: "MUKUZANI",
      classification: "Красное сухое",
      region: "Кахетия",
      country: "Грузия",
      microzone: "Мукузани (ЗНМП)",
      grape: "Саперави 100%",
      grapesSourced:
        "Виноград, собранный вручную исключительно в микрозоне Мукузани",
      servingTemperature: "+16°C — +18°C",
      storageTemperature: "+5°C — +20°C",
      color: "Тёмно-рубиновый",
      aroma:
        "Яркий букет с нотами черной вишни, темного шоколада и ежевики, дополненный дымными оттенками табака, ванили и кедра, полученными от выдержки в дубовых бочках",
      taste:
        "Вино плотное и насыщенное фруктовыми тонами с округлыми танинами и длительным послевкусием.",
      pairing:
        "Лучше всего сочетается со стейком, ягненком, барбекю, а также с голубыми или выдержанными сырами.",
      vintage: "2022",
    },
    es: {
      name: "MUKUZANI",
      classification: "Tinto seco",
      region: "Kajetia",
      country: "Georgia",
      microzone: "Mukuzani DOP",
      grape: "Saperavi 100%",
      grapesSourced: "Uvas vendimiadas a mano únicamente de Mukuzani DOP",
      servingTemperature: "+16°C a +18°C",
      storageTemperature: "+5°C a +20°C",
      color: "Rubí profundo y opaco",
      aroma:
        "Ramo complejo de cereza negra, chocolate negro y mora, con notas ahumadas de tabaco, vainilla y cedro de la crianza en roble",
      taste:
        "Corpulento y pleno, con tonos frutales, taninos medios redondos y un sabor persistente.",
      pairing: "Ideal con bistec, cordero, barbacoa y quesos azules o curados",
      vintage: "2022",
    },
    fr: {
      name: "MUKUZANI",
      classification: "Rouge sec",
      region: "Kakhétie",
      country: "Géorgie",
      microzone: "Mukuzani AOP",
      grape: "Saperavi 100%",
      grapesSourced: "Raisins vendangés à la main exclusivement de Mukuzani AOP",
      servingTemperature: "+16°C à +18°C",
      storageTemperature: "+5°C à +20°C",
      color: "Rubis profond et opaque",
      aroma:
        "Bouquet complexe de cerise noire, chocolat noir et mûre, avec des notes fumées de tabac, vanille et cèdre issues du fût de chêne",
      taste:
        "Corpulent et ample, aux tons fruités, tanins moyens ronds et une persistance étendue.",
      pairing: "Idéal avec steak, agneau, barbecue et fromages bleus ou affinés",
      vintage: "2022",
    },
    uk: {
      name: "MUKUZANI",
      classification: "Червоне сухе",
      region: "Кахетія",
      country: "Грузія",
      microzone: "Мукузані (ЗНМП)",
      grape: "Сапераві 100%",
      grapesSourced:
        "Виноград, зібраний вручну виключно в мікрозоні Мукузані",
      servingTemperature: "+16°C — +18°C",
      storageTemperature: "+5°C — +20°C",
      color: "Темно-рубіновий",
      aroma:
        "Яскравий букет із нотами чорної вишні, темного шоколаду та ожини, доповнений димними відтінками тютюну, ванілі та кедра від витримки в дубових бочках",
      taste:
        "Вино щільне й насичене фруктовими тонами, з округлими танінами та тривалим післясмаком.",
      pairing:
        "Найкраще пасує до стейка, ягнятини, барбекю, а також до блакитних або витриманих сирів.",
      vintage: "2022",
    },
  },
  "grw-pirosmani": {
    en: {
      name: "PIROSMANI",
      classification: "Medium Dry Red",
      region: "Kakheti",
      country: "Georgia",
      grape: "Saperavi",
      grapesSourced: "100% Company’s own vineyards",
      alcohol: "11,5%",
      servingTemperature: "+12°C to +16°C",
      storageTemperature: "+5°C to +20°C",
      color: "Dark ruby colour",
      aroma:
        "While fresh berries dominate, you’ll often find a hint of sun-dried fruit, giving it a concentrated, jammy depth.",
      taste: "Wine is silky, soft in tannins with fruity finish",
      vintage: "2023",
    },
    ru: {
      name: "PIROSMANI",
      classification: "Полусухое красное",
      region: "Кахетия",
      country: "Грузия",
      grape: "Саперави",
      grapesSourced: "100% виноград с собственных виноградников",
      alcohol: "11,5%",
      servingTemperature: "+12°C — +16°C",
      storageTemperature: "+5°C — +20°C",
      color: "Тёмно-рубиновый",
      aroma:
        "Это вино обладает густым, насыщенным и глубоким букетом черной смородины, ежевики и спелой вишни.",
      taste: "Вино шелковистое, с мягкими танинами и фруктовым послевкусием.",
      vintage: "2023",
    },
    es: {
      name: "PIROSMANI",
      classification: "Tinto semiseco",
      region: "Kajetia",
      country: "Georgia",
      grape: "Saperavi",
      grapesSourced: "100% viñedos propios de la empresa",
      alcohol: "11,5%",
      servingTemperature: "+12°C a +16°C",
      storageTemperature: "+5°C a +20°C",
      color: "Color rubí oscuro",
      aroma:
        "Dominan las bayas frescas, a menudo con un toque de fruta seca al sol que aporta profundidad confitada.",
      taste: "Seda en boca, taninos suaves y un final afrutado",
      vintage: "2023",
    },
    fr: {
      name: "PIROSMANI",
      classification: "Rouge demi-sec",
      region: "Kakhétie",
      country: "Géorgie",
      grape: "Saperavi",
      grapesSourced: "100 % vignobles de la maison",
      alcohol: "11,5%",
      servingTemperature: "+12°C à +16°C",
      storageTemperature: "+5°C à +20°C",
      color: "Couleur rubis sombre",
      aroma:
        "Les baies fraîches dominent, souvent avec une touche de fruit séché au soleil, pour une profondeur confiturée.",
      taste: "Soyeux, aux tanins souples et à la finale fruitée",
      vintage: "2023",
    },
    uk: {
      name: "PIROSMANI",
      classification: "Напівсухе червоне",
      region: "Кахетія",
      country: "Грузія",
      grape: "Сапераві",
      grapesSourced: "100% виноград із власних виноградників",
      alcohol: "11,5%",
      servingTemperature: "+12°C — +16°C",
      storageTemperature: "+5°C — +20°C",
      color: "Темно-рубіновий",
      aroma:
        "Це вино має густий, насичений і глибокий букет чорної смородини, ожини та стиглої вишні.",
      taste: "Вино шовковисте, з м’якими танінами та фруктовим післясмаком.",
      vintage: "2023",
    },
  },
  "grw-rose": {
    en: {
      name: "ROSE",
      classification: "Semi-dry Rosé",
      region: "Kakheti",
      subregion: "Kakheti viticulture region",
      country: "Georgia",
      grape: "Saperavi 40%, Rkatsiteli 60%",
      grapesSourced: "100% own vineyards",
      alcohol: "11.0%–12.5%",
      servingTemperature: "+8°C to +10°C",
      storageTemperature: "+5°C to +20°C",
      color: "Brilliant salmon-pink with delicate coral reflections",
      aroma:
        "Fresh aromas of wild strawberry, raspberry and red cherry are complemented by subtle floral notes and delicate citrus nuances inherited from Rkatsiteli.",
      taste:
        "Elegant and refreshing palate with balanced natural sweetness and vibrant acidity. Notes of red berries, pomegranate and ripe peach create a harmonious and fruit-driven profile with a pleasant and persistent finish.",
      tastingNotes:
        "Climate: Moderate continental · Wine category: Table wine · Sugar: 8–15 g/l · Crop capacity: 8–10 ton/hectare",
      pairing: "Light salads, seafood, soft cheeses, and summer dishes.",
      vinification:
        "The grapes are harvested separately at optimal maturity and carefully sorted. Following gentle crushing, short skin contact with Saperavi grapes provides the wine with its delicate pink color. Fermentation takes place in temperature-controlled stainless-steel tanks at 14°C–16°C to preserve freshness and aromatic intensity. Fermentation is stopped at the desired sugar level to retain natural fruitiness and achieve a balanced semi-dry style. The wine is aged in stainless steel tanks before bottling under controlled temperature and humidity conditions.",
    },
    ru: {
      name: "ROSE",
      classification: "Полусухое розовое",
      region: "Кахетия",
      subregion: "Винодельческий регион Кахетия",
      country: "Грузия",
      grape: "Саперави 40%, Ркацители 60%",
      grapesSourced: "100% виноград с собственных виноградников",
      alcohol: "11,0%–12,5%",
      servingTemperature: "+8°C — +10°C",
      storageTemperature: "+5°C — +20°C",
      color: "Яркий лососево-розовый с нежными коралловыми отблесками",
      aroma:
        "Свежие ароматы лесной земляники, малины и красной вишни дополняются тонкими цветочными нотами и деликатными цитрусовыми нюансами, унаследованными от Ркацители.",
      taste:
        "Элегантный и освежающий вкус со сбалансированной естественной сладостью и яркой кислотностью. Ноты красных ягод, граната и спелого персика создают гармоничный фруктовый профиль с приятным и стойким послевкусием.",
      tastingNotes:
        "Климат: умеренно-континентальный · Категория: столовое вино · Сахар: 8–15 г/л · Урожайность: 8–10 т/га",
      pairing: "Лёгкие салаты, морепродукты, мягкие сыры и летние блюда.",
      vinification:
        "Виноград собирают отдельно при оптимальной зрелости и тщательно сортируют. После мягкого дробления краткий контакт с кожицей Саперави придаёт вину нежный розовый цвет. Ферментация проходит в нержавеющих резервуарах с контролируемой температурой 14°C–16°C для сохранения свежести и ароматической интенсивности. Ферментацию останавливают на нужном уровне сахара, чтобы сохранить естественную фруктовость и получить сбалансированный полусухой стиль. Перед розливом вино выдерживают в нержавеющих резервуарах при контролируемых температуре и влажности.",
    },
    es: {
      name: "ROSE",
      classification: "Rosado semiseco",
      region: "Kajetia",
      subregion: "Región vitivinícola de Kajetia",
      country: "Georgia",
      grape: "Saperavi 40%, Rkatsiteli 60%",
      grapesSourced: "100% uvas de viñedos propios",
      alcohol: "11,0%–12,5%",
      servingTemperature: "+8°C a +10°C",
      storageTemperature: "+5°C a +20°C",
      color: "Rosa salmón brillante con delicados reflejos coral",
      aroma:
        "Aromas frescos de fresa silvestre, frambuesa y cereza roja, complementados por sutiles notas florales y delicados matices cítricos heredados del Rkatsiteli.",
      taste:
        "Paladar elegante y refrescante, con dulzor natural equilibrado y acidez vibrante. Notas de frutos rojos, granada y melocotón maduro crean un perfil armonioso y afrutado, con un final agradable y persistente.",
      tastingNotes:
        "Clima: continental moderado · Categoría: vino de mesa · Azúcar: 8–15 g/l · Rendimiento: 8–10 t/ha",
      pairing: "Ensaladas ligeras, mariscos, quesos suaves y platos de verano.",
      vinification:
        "Las uvas se vendimian por separado en su madurez óptima y se seleccionan con cuidado. Tras un estrujado suave, un breve contacto con los hollejos de Saperavi aporta el delicado color rosado. La fermentación se realiza en depósitos de acero inoxidable a temperatura controlada (14°C–16°C) para preservar la frescura y la intensidad aromática. Se detiene al nivel de azúcar deseado para conservar la frutalidad natural y lograr un estilo semiseco equilibrado. El vino envejece en acero inoxidable antes del embotellado en condiciones controladas de temperatura y humedad.",
    },
    fr: {
      name: "ROSE",
      classification: "Rosé demi-sec",
      region: "Kakhétie",
      subregion: "Région viticole de Kakhétie",
      country: "Géorgie",
      grape: "Saperavi 40 %, Rkatsiteli 60 %",
      grapesSourced: "100 % de vignobles propres",
      alcohol: "11,0 % – 12,5 %",
      servingTemperature: "+8°C à +10°C",
      storageTemperature: "+5°C à +20°C",
      color: "Rose saumon brillant aux délicats reflets corail",
      aroma:
        "Arômes frais de fraise des bois, framboise et cerise rouge, complétés par de subtiles notes florales et de délicates nuances d’agrumes héritées du Rkatsiteli.",
      taste:
        "Palais élégant et rafraîchissant, à la douceur naturelle équilibrée et à l’acidité vive. Notes de fruits rouges, de grenade et de pêche mûre pour un profil harmonieux et fruité, à la finale agréable et persistante.",
      tastingNotes:
        "Climat : continental modéré · Catégorie : vin de table · Sucre : 8–15 g/l · Rendement : 8–10 t/ha",
      pairing: "Salades légères, fruits de mer, fromages doux et plats d’été.",
      vinification:
        "Les raisins sont vendangés séparément à maturité optimale et soigneusement triés. Après un foulage doux, un court contact avec les peaux de Saperavi confère la délicate couleur rose. La fermentation se déroule en cuves inox thermo-régulées à 14°C–16°C pour préserver fraîcheur et intensité aromatique. Elle est arrêtée au niveau de sucre souhaité afin de conserver le fruité naturel et d’obtenir un style demi-sec équilibré. Le vin est élevé en inox avant mise en bouteille dans des conditions de température et d’humidité contrôlées.",
    },
    uk: {
      name: "ROSE",
      classification: "Напівсухе рожеве",
      region: "Кахетія",
      subregion: "Виноробний регіон Кахетія",
      country: "Грузія",
      grape: "Сапераві 40%, Ркацителі 60%",
      grapesSourced: "100% виноград із власних виноградників",
      alcohol: "11,0%–12,5%",
      servingTemperature: "+8°C — +10°C",
      storageTemperature: "+5°C — +20°C",
      color: "Яскравий лососево-рожевий із ніжними кораловими відблисками",
      aroma:
        "Свіжі аромати лісової суниці, малини та червоної вишні доповнюються тонкими квітковими нотами й делікатними цитрусовими нюансами, успадкованими від Ркацителі.",
      taste:
        "Елегантний і освіжаючий смак зі збалансованою природною солодкістю та яскравою кислотністю. Ноти червоних ягід, граната та стиглого персика створюють гармонійний фруктовий профіль із приємним і стійким післясмаком.",
      tastingNotes:
        "Клімат: помірно-континентальний · Категорія: столове вино · Цукор: 8–15 г/л · Урожайність: 8–10 т/га",
      pairing: "Легкі салати, морепродукти, м’які сири та літні страви.",
      vinification:
        "Виноград збирають окремо при оптимальній зрилості та ретельно сортують. Після м’якого дроблення короткий контакт зі шкіркою Сапераві надає вину ніжний рожевий колір. Ферментація відбувається в нержавіючих резервуарах за контрольованої температури 14°C–16°C для збереження свіжості та ароматичної інтенсивності. Ферментацію зупиняють на потрібному рівні цукру, щоб зберегти природну фруктовість і отримати збалансований напівсухий стиль. Перед розливом вино витримують у нержавіючих резервуарах за контрольованих температури та вологості.",
    },
  },
};

export function getWineContent(slug: string, locale: Locale): WineContent {
  const byLocale = wineContent[slug];
  return byLocale?.[locale] ?? byLocale?.en ?? wineContent["rezos-wine-saperavi"].en;
}
