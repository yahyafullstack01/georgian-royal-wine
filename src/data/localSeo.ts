import type { Locale } from "@/lib/i18n/translations";

export type SeoFaq = { question: string; answer: string };
export type SeoSection = { heading: string; paragraphs: string[] };

export type LocalizedSeoCopy = {
  title: string;
  description: string;
  lead: string;
  eyebrow: string;
  sections: SeoSection[];
  faqs: SeoFaq[];
};

export type CityPage = {
  slug: string;
  name: string;
  locales: Record<Locale, LocalizedSeoCopy>;
};

export type GuidePage = {
  slug: string;
  locales: Record<Locale, LocalizedSeoCopy>;
};

export type SeoUiCopy = {
  faqTitle: string;
  shopCta: string;
  contactCta: string;
  citiesNav: string;
  guidesNav: string;
  wineIn: string;
  morePages: string;
};

export type SeoIndexCopy = {
  cityTitle: string;
  citySubtitle: string;
  guidesTitle: string;
  guidesSubtitle: string;
};

export const seoUi: Record<Locale, SeoUiCopy> = {
  "es": {
    "faqTitle": "Preguntas frecuentes",
    "shopCta": "Ver tienda",
    "contactCta": "Contacto",
    "citiesNav": "Entrega en España",
    "guidesNav": "Guías",
    "wineIn": "Vino en {city}",
    "morePages": "Más páginas"
  },
  "en": {
    "faqTitle": "Frequently asked questions",
    "shopCta": "Shop wines",
    "contactCta": "Contact",
    "citiesNav": "Delivery in Spain",
    "guidesNav": "Guides",
    "wineIn": "Wine in {city}",
    "morePages": "More pages"
  },
  "ru": {
    "faqTitle": "Частые вопросы",
    "shopCta": "В магазин",
    "contactCta": "Контакты",
    "citiesNav": "Доставка по Испании",
    "guidesNav": "Гиды",
    "wineIn": "Вино в {city}",
    "morePages": "Ещё страницы"
  },
  "fr": {
    "faqTitle": "Questions fréquentes",
    "shopCta": "Voir la boutique",
    "contactCta": "Contact",
    "citiesNav": "Livraison en Espagne",
    "guidesNav": "Guides",
    "wineIn": "Vin à {city}",
    "morePages": "Plus de pages"
  },
  "uk": {
    "faqTitle": "Часті запитання",
    "shopCta": "До магазину",
    "contactCta": "Контакти",
    "citiesNav": "Доставка Іспанією",
    "guidesNav": "Гіди",
    "wineIn": "Вино в {city}",
    "morePages": "Інші сторінки"
  },
  "bg": {
    "faqTitle": "Често задавани въпроси",
    "shopCta": "Към магазина",
    "contactCta": "Контакт",
    "citiesNav": "Доставка в Испания",
    "guidesNav": "Ръководства",
    "wineIn": "Вино в {city}",
    "morePages": "Още страници"
  }
};

export const seoIndex: Record<Locale, SeoIndexCopy> = {
  "es": {
    "cityTitle": "Vino georgiano en España",
    "citySubtitle": "Entrega desde Torrevieja a las ciudades donde más nos piden Saperavi, Kindzmarauli y qvevri.",
    "guidesTitle": "Guías",
    "guidesSubtitle": "Textos cortos para elegir botella y entender el envío en España."
  },
  "en": {
    "cityTitle": "Georgian wine in Spain",
    "citySubtitle": "Delivery from Torrevieja to the cities that order Saperavi, Kindzmarauli and qvevri most.",
    "guidesTitle": "Guides",
    "guidesSubtitle": "Short guides to choose a bottle and understand shipping in Spain."
  },
  "ru": {
    "cityTitle": "Грузинское вино в Испании",
    "citySubtitle": "Доставка из Торревьехи в города, где чаще всего заказывают Саперави, Киндзмараули и квеври.",
    "guidesTitle": "Гиды",
    "guidesSubtitle": "Короткие тексты, чтобы выбрать бутылку и понять доставку по Испании."
  },
  "fr": {
    "cityTitle": "Vin géorgien en Espagne",
    "citySubtitle": "Livraison depuis Torrevieja vers les villes qui commandent le plus Saperavi, Kindzmarauli et qvevri.",
    "guidesTitle": "Guides",
    "guidesSubtitle": "Textes courts pour choisir une bouteille et comprendre la livraison en Espagne."
  },
  "uk": {
    "cityTitle": "Грузинське вино в Іспанії",
    "citySubtitle": "Доставка з Торрев'єхи до міст, де найчастіше замовляють Сапераві, Кіндзмараулі та квеврі.",
    "guidesTitle": "Гіди",
    "guidesSubtitle": "Короткі тексти, щоб обрати пляшку й зрозуміти доставку Іспанією."
  },
  "bg": {
    "cityTitle": "Грузинско вино в Испания",
    "citySubtitle": "Доставка от Торревьеха до градовете, където най-често поръчват Саперави, Киндзмараули и квеври.",
    "guidesTitle": "Ръководства",
    "guidesSubtitle": "Кратки текстове за избор на бутилка и разбиране на доставката в Испания."
  }
};

export const deliveryFaqsByLocale: Record<Locale, SeoFaq[]> = {
  "es": [
    {
      "question": "¿La entrega gratuita es solo en España?",
      "answer": "Sí. A partir de 1 caja la entrega es gratuita solo en España. El envío a Europa se confirma aparte."
    },
    {
      "question": "¿Cuánto cuesta la entrega en Torrevieja?",
      "answer": "1–4 botellas en Torrevieja cuestan 3 €. Desde 1 caja, la entrega es gratuita en España e incluye un sacacorchos."
    },
    {
      "question": "¿En cuánto tiempo llega el vino?",
      "answer": "En España, la entrega está prevista en 48 horas laborables."
    }
  ],
  "en": [
    {
      "question": "Is free delivery only in Spain?",
      "answer": "Yes. From one box, delivery is free in Spain only. Shipping to Europe is confirmed separately."
    },
    {
      "question": "How much is delivery in Torrevieja?",
      "answer": "1–4 bottles in Torrevieja cost €3. From one box, delivery in Spain is free and includes a corkscrew."
    },
    {
      "question": "How long does the wine take to arrive?",
      "answer": "In Spain, delivery is expected within 48 working hours."
    }
  ],
  "ru": [
    {
      "question": "Бесплатная доставка только по Испании?",
      "answer": "Да. От 1 коробки доставка бесплатна только по Испании. Доставка в Европу подтверждается отдельно."
    },
    {
      "question": "Сколько стоит доставка в Торревьехе?",
      "answer": "1–4 бутылки в Торревьехе — 3 €. От 1 коробки доставка по Испании бесплатная и включает штопор."
    },
    {
      "question": "Как быстро приедет вино?",
      "answer": "По Испании — в течение 48 рабочих часов."
    }
  ],
  "fr": [
    {
      "question": "La livraison gratuite est-elle seulement en Espagne ?",
      "answer": "Oui. Dès 1 caisse, la livraison est gratuite en Espagne uniquement. L'Europe est confirmée à part."
    },
    {
      "question": "Combien coûte la livraison à Torrevieja ?",
      "answer": "1–4 bouteilles à Torrevieja coûtent 3 €. Dès 1 caisse, livraison gratuite en Espagne avec tire-bouchon."
    },
    {
      "question": "En combien de temps arrive le vin ?",
      "answer": "En Espagne, livraison prévue sous 48 h ouvrées."
    }
  ],
  "uk": [
    {
      "question": "Безкоштовна доставка лише Іспанією?",
      "answer": "Так. Від 1 коробки доставка безкоштовна лише Іспанією. Європа підтверджується окремо."
    },
    {
      "question": "Скільки коштує доставка в Торрев'єсі?",
      "answer": "1–4 пляшки в Торрев'єсі — 3 €. Від 1 коробки доставка Іспанією безкоштовна і включає штопор."
    },
    {
      "question": "За скільки приїде вино?",
      "answer": "Іспанією — протягом 48 робочих годин."
    }
  ],
  "bg": [
    {
      "question": "Безплатната доставка само в Испания ли е?",
      "answer": "Да. От 1 каса доставката е безплатна само в Испания. Европа се потвърждава отделно."
    },
    {
      "question": "Колко струва доставката в Торревьеха?",
      "answer": "1–4 бутилки в Торревьеха струват 3 €. От 1 каса доставката в Испания е безплатна и включва тирбушон."
    },
    {
      "question": "За колко време пристига виното?",
      "answer": "В Испания доставката е до 48 работни часа."
    }
  ]
};

export const cities: CityPage[] = [
  {
    "slug": "torrevieja",
    "name": "Torrevieja",
    "locales": {
      "es": {
        "title": "Comprar vino en Torrevieja | Georgian Royal Wine",
        "description": "Tienda de vino georgiano en Torrevieja (Costa Blanca). Saperavi, Kindzmarauli, qvevri y Rezo's Wine. Entrega local desde 3 €.",
        "lead": "Georgian Royal Wine está en Torrevieja. Desde aquí salen los pedidos a toda España y la entrega local en La Mata, Los Balcones, Aguas Nuevas, Punta Prima y el centro.",
        "eyebrow": "Envío a Torrevieja",
        "sections": [
          {
            "heading": "Tienda de vino en Torrevieja",
            "paragraphs": [
              "La dirección es Calle Paseo Vistalegre nº8, 6º derecha, 03181 Torrevieja (Alicante). Tel. +34 607 609 474 · sbs@sb-servicio.com.",
              "En Torrevieja, 1–4 botellas cuestan 3 € de entrega. Desde 1 caja, la entrega en España es gratuita e incluye un sacacorchos.",
              "A partir de 1 caja, la entrega es gratuita solo en España, en 48 horas laborables. Europa se cotiza aparte."
            ]
          },
          {
            "heading": "Quién compra vino georgiano en la Costa Blanca",
            "paragraphs": [
              "Torrevieja tiene una comunidad grande de residentes de Rusia, Ucrania, Reino Unido y el norte de Europa. Muchos ya conocen Kindzmarauli, Khvanchkara y Saperavi.",
              "También servimos a particulares españoles y a restaurantes que buscan una carta corta de Georgia."
            ]
          }
        ],
        "faqs": [
          {
            "question": "¿Hay entrega de vino en Torrevieja?",
            "answer": "Sí. 1–4 botellas cuestan 3 €. Desde 1 caja, entrega gratuita en España."
          },
          {
            "question": "¿Dónde está Georgian Royal Wine?",
            "answer": "Calle Paseo Vistalegre nº8, 6º derecha, 03181 Torrevieja. Tel. +34 607 609 474."
          }
        ]
      },
      "en": {
        "title": "Buy wine in Torrevieja | Georgian Royal Wine",
        "description": "Georgian wine shop in Torrevieja, Costa Blanca. Saperavi, Kindzmarauli, qvevri and Rezo's Wine. Local delivery from €3.",
        "lead": "Georgian Royal Wine is based in Torrevieja. Orders ship across Spain from here, with local delivery to La Mata, Los Balcones, Aguas Nuevas, Punta Prima and the centre.",
        "eyebrow": "Delivery in Torrevieja",
        "sections": [
          {
            "heading": "Wine shop in Torrevieja",
            "paragraphs": [
              "Address: Calle Paseo Vistalegre nº8, 6º derecha, 03181 Torrevieja (Alicante). Phone +34 607 609 474 · sbs@sb-servicio.com.",
              "In Torrevieja, 1–4 bottles cost €3 to deliver. From one box, delivery in Spain is free and includes a corkscrew.",
              "From one box, delivery is free in Spain only, within 48 working hours. Europe is priced separately."
            ]
          },
          {
            "heading": "Who buys Georgian wine on the Costa Blanca",
            "paragraphs": [
              "Torrevieja has large communities from Russia, Ukraine, the UK and Northern Europe. Many already know Kindzmarauli, Khvanchkara and Saperavi.",
              "We also serve Spanish buyers and restaurants that want a short Georgian list."
            ]
          }
        ],
        "faqs": [
          {
            "question": "Do you deliver wine in Torrevieja?",
            "answer": "Yes. 1–4 bottles cost €3. From one box, free delivery in Spain."
          },
          {
            "question": "Where is Georgian Royal Wine?",
            "answer": "Calle Paseo Vistalegre nº8, 6º derecha, 03181 Torrevieja. Phone +34 607 609 474."
          }
        ]
      },
      "ru": {
        "title": "Купить вино в Торревьехе | Georgian Royal Wine",
        "description": "Магазин грузинского вина в Торревьехе. Саперави, Киндзмараули, квеври и Rezo's Wine. Доставка по городу от 3 €.",
        "lead": "Georgian Royal Wine — в Торревьехе. Отсюда заказы уходят по всей Испании, а по городу — в Ла Мата, Лос Бальконес, Агуас Нуэвас, Пунта Прима и центр.",
        "eyebrow": "Доставка в Торревьеху",
        "sections": [
          {
            "heading": "Магазин вина в Торревьехе",
            "paragraphs": [
              "Адрес: Calle Paseo Vistalegre nº8, 6º derecha, 03181 Torrevieja (Alicante). Тел. +34 607 609 474 · sbs@sb-servicio.com.",
              "В Торревьехе 1–4 бутылки — 3 € за доставку. От 1 коробки доставка по Испании бесплатная и включает штопор.",
              "От 1 коробки — бесплатно только по Испании, в течение 48 рабочих часов. Европа — отдельно."
            ]
          },
          {
            "heading": "Кто покупает грузинское вино на Коста-Бланке",
            "paragraphs": [
              "В Торревьехе много жителей из России, Украины, Великобритании и Северной Европы. Многие уже знают Киндзмараули, Хванчкару и Саперави.",
              "Мы также работаем с испанскими покупателями и ресторанами, которым нужна короткая грузинская карта."
            ]
          }
        ],
        "faqs": [
          {
            "question": "Есть ли доставка вина по Торревьехе?",
            "answer": "Да. 1–4 бутылки — 3 €. От 1 коробки бесплатно по Испании."
          },
          {
            "question": "Где находится Georgian Royal Wine?",
            "answer": "Calle Paseo Vistalegre nº8, 6º derecha, 03181 Torrevieja. Тел. +34 607 609 474."
          }
        ]
      },
      "fr": {
        "title": "Acheter du vin à Torrevieja | Georgian Royal Wine",
        "description": "Boutique de vin géorgien à Torrevieja. Saperavi, Kindzmarauli, qvevri et Rezo's Wine. Livraison locale dès 3 €.",
        "lead": "Georgian Royal Wine est basé à Torrevieja. Les commandes partent pour toute l'Espagne, avec livraison locale à La Mata, Los Balcones, Aguas Nuevas, Punta Prima et le centre.",
        "eyebrow": "Livraison à Torrevieja",
        "sections": [
          {
            "heading": "Boutique de vin à Torrevieja",
            "paragraphs": [
              "Adresse : Calle Paseo Vistalegre nº8, 6º derecha, 03181 Torrevieja (Alicante). Tél. +34 607 609 474 · sbs@sb-servicio.com.",
              "À Torrevieja, 1–4 bouteilles coûtent 3 € de livraison. Dès 1 caisse, la livraison en Espagne est gratuite et inclut un tire-bouchon.",
              "Dès 1 caisse, livraison gratuite en Espagne uniquement, sous 48 h ouvrées. L'Europe est facturée à part."
            ]
          },
          {
            "heading": "Qui achète du vin géorgien sur la Costa Blanca",
            "paragraphs": [
              "Torrevieja accueille de nombreuses communautés russe, ukrainienne, britannique et d'Europe du Nord. Beaucoup connaissent déjà Kindzmarauli, Khvanchkara et Saperavi.",
              "Nous servons aussi des clients espagnols et des restaurants qui veulent une courte carte géorgienne."
            ]
          }
        ],
        "faqs": [
          {
            "question": "Livrez-vous du vin à Torrevieja ?",
            "answer": "Oui. 1–4 bouteilles coûtent 3 €. Dès 1 caisse, livraison gratuite en Espagne."
          },
          {
            "question": "Où se trouve Georgian Royal Wine ?",
            "answer": "Calle Paseo Vistalegre nº8, 6º derecha, 03181 Torrevieja. Tél. +34 607 609 474."
          }
        ]
      },
      "uk": {
        "title": "Купити вино в Торрев'єсі | Georgian Royal Wine",
        "description": "Магазин грузинського вина в Торрев'єсі. Сапераві, Кіндзмараулі, квеврі та Rezo's Wine. Доставка містом від 3 €.",
        "lead": "Georgian Royal Wine — у Торрев'єсі. Звідси замовлення їдуть по всій Іспанії, а містом — у Ла Мата, Лос Бальконес, Агуас Нуевас, Пунта Пріма та центр.",
        "eyebrow": "Доставка в Торрев'єху",
        "sections": [
          {
            "heading": "Магазин вина в Торрев'єсі",
            "paragraphs": [
              "Адреса: Calle Paseo Vistalegre nº8, 6º derecha, 03181 Torrevieja (Alicante). Тел. +34 607 609 474 · sbs@sb-servicio.com.",
              "У Торрев'єсі 1–4 пляшки — 3 € за доставку. Від 1 коробки доставка Іспанією безкоштовна і включає штопор.",
              "Від 1 коробки — безкоштовно лише по Іспанії, протягом 48 робочих годин. Європа — окремо."
            ]
          },
          {
            "heading": "Хто купує грузинське вино на Коста-Бланці",
            "paragraphs": [
              "У Торрев'єсі багато мешканців з Росії, України, Великої Британії та Північної Європи. Багато хто вже знає Кіндзмараулі, Хванчкару та Сапераві.",
              "Ми також працюємо з іспанськими покупцями та ресторанами, яким потрібна коротка грузинська карта."
            ]
          }
        ],
        "faqs": [
          {
            "question": "Чи є доставка вина в Торрев'єсі?",
            "answer": "Так. 1–4 пляшки — 3 €. Від 1 коробки безкоштовно Іспанією."
          },
          {
            "question": "Де знаходиться Georgian Royal Wine?",
            "answer": "Calle Paseo Vistalegre nº8, 6º derecha, 03181 Torrevieja. Тел. +34 607 609 474."
          }
        ]
      },
      "bg": {
        "title": "Купете вино в Торревьеха | Georgian Royal Wine",
        "description": "Магазин за грузинско вино в Торревьеха. Саперави, Киндзмараули, квеври и Rezo's Wine. Доставка в града от 3 €.",
        "lead": "Georgian Royal Wine е в Торревьеха. Оттук поръчките тръгват за цяла Испания, а в града — към La Mata, Los Balcones, Aguas Nuevas, Punta Prima и центъра.",
        "eyebrow": "Доставка в Торревьеха",
        "sections": [
          {
            "heading": "Магазин за вино в Торревьеха",
            "paragraphs": [
              "Адрес: Calle Paseo Vistalegre nº8, 6º derecha, 03181 Torrevieja (Alicante). Тел. +34 607 609 474 · sbs@sb-servicio.com.",
              "В Торревьеха 1–4 бутилки струват 3 € доставка. От 1 каса доставката в Испания е безплатна и включва тирбушон.",
              "От 1 каса — безплатно само в Испания, до 48 работни часа. Европа се ценообразува отделно."
            ]
          },
          {
            "heading": "Кой купува грузинско вино на Коста Бланка",
            "paragraphs": [
              "В Торревьеха има големи общности от Русия, Украйна, Великобритания и Северна Европа. Мнозина вече познават Киндзмараули, Хванчкара и Саперави.",
              "Работим и с испански клиенти и ресторанти, които искат кратка грузинска листа."
            ]
          }
        ],
        "faqs": [
          {
            "question": "Има ли доставка на вино в Торревьеха?",
            "answer": "Да. 1–4 бутилки струват 3 €. От 1 каса — безплатно в Испания."
          },
          {
            "question": "Къде е Georgian Royal Wine?",
            "answer": "Calle Paseo Vistalegre nº8, 6º derecha, 03181 Torrevieja. Тел. +34 607 609 474."
          }
        ]
      }
    }
  },
  {
    "slug": "alicante",
    "name": "Alicante",
    "locales": {
      "es": {
        "title": "Comprar vino en Alicante | Georgian Royal Wine",
        "description": "Vino georgiano con envío a Alicante, Elche, Santa Pola y San Juan. Entrega gratis en España desde 1 caja.",
        "lead": "Enviamos vino georgiano a Alicante, Elche, Santa Pola y San Juan desde nuestro almacén en Torrevieja. Plazo habitual en España: 48 horas laborables.",
        "eyebrow": "Envío a Alicante",
        "sections": [
          {
            "heading": "Envío de vino a Alicante",
            "paragraphs": [
              "El pedido se prepara en Torrevieja. A partir de 1 caja la entrega es gratuita en España. Por debajo de una caja el coste se confirma al reservar.",
              "Una caja es el formato que más se pide: seis botellas con sacacorchos, y envío gratis en España."
            ]
          },
          {
            "heading": "Qué pedir la primera vez",
            "paragraphs": [
              "Tinto seco: Saperavi o Mukuzani. Semidulce: Kindzmarauli o Khvanchkara. Blanco: Tsinandali, Kisi o un qvevri ámbar.",
            ]
          }
        ],
        "faqs": [
          {
            "question": "¿Enviáis vino a Alicante?",
            "answer": "Sí. Desde Torrevieja, con entrega gratuita en España a partir de 1 caja."
          },
          {
            "question": "¿Cuánto tarda el envío?",
            "answer": "En España, 48 horas laborables."
          }
        ]
      },
      "en": {
        "title": "Buy wine in Alicante | Georgian Royal Wine",
        "description": "Georgian wine delivered to Alicante, Elche, Santa Pola and San Juan. Free delivery in Spain from one box.",
        "lead": "We ship Georgian wine to Alicante, Elche, Santa Pola and San Juan from our warehouse in Torrevieja. Usual Spain timing: 48 working hours.",
        "eyebrow": "Delivery to Alicante",
        "sections": [
          {
            "heading": "Wine delivery to Alicante",
            "paragraphs": [
              "Orders are prepared in Torrevieja. From one box, delivery in Spain is free. Below one box, the cost is confirmed when you order.",
              "A box is the format people order most: six bottles with a corkscrew, and free shipping in Spain."
            ]
          },
          {
            "heading": "What to order first",
            "paragraphs": [
              "Dry red: Saperavi or Mukuzani. Semi-sweet: Kindzmarauli or Khvanchkara. White: Tsinandali, Kisi or amber qvevri.",
            ]
          }
        ],
        "faqs": [
          {
            "question": "Do you deliver wine to Alicante?",
            "answer": "Yes. From Torrevieja, with free delivery in Spain from one box."
          },
          {
            "question": "How long does shipping take?",
            "answer": "In Spain, 48 working hours."
          }
        ]
      },
      "ru": {
        "title": "Купить вино в Alicante | Georgian Royal Wine",
        "description": "Грузинское вино с доставкой в Аликанте, Эльче, Санта-Полу и Сан-Хуан. Бесплатно по Испании от 1 коробки.",
        "lead": "Доставляем грузинское вино в Аликанте, Эльче, Санта-Полу и Сан-Хуан со склада в Торревьехе. Обычно по Испании — 48 рабочих часов.",
        "eyebrow": "Доставка в Alicante",
        "sections": [
          {
            "heading": "Доставка вина в Alicante",
            "paragraphs": [
              "Заказ готовят в Торревьехе. От 1 коробки доставка по Испании бесплатная. Меньше коробки — стоимость подтверждаем при заказе.",
              "Коробка — самый частый формат: шесть бутылок со штопором и бесплатная доставка по Испании."
            ]
          },
          {
            "heading": "Что заказать в первый раз",
            "paragraphs": [
              "Сухое красное: Саперави или Мукузани. Полусладкое: Киндзмараули или Хванчкара. Белое: Цинандали, Киси или янтарный квеври.",
            ]
          }
        ],
        "faqs": [
          {
            "question": "Доставляете ли вино в Alicante?",
            "answer": "Да. Из Торревьехи, бесплатно по Испании от 1 коробки."
          },
          {
            "question": "Сколько идёт доставка?",
            "answer": "По Испании — 48 рабочих часов."
          }
        ]
      },
      "fr": {
        "title": "Acheter du vin à Alicante | Georgian Royal Wine",
        "description": "Vin géorgien livré à Alicante, Elche, Santa Pola et San Juan. Livraison gratuite en Espagne dès 1 caisse.",
        "lead": "Nous livrons du vin géorgien à Alicante, Elche, Santa Pola et San Juan depuis notre entrepôt à Torrevieja. Délai habituel en Espagne : 48 h ouvrées.",
        "eyebrow": "Livraison à Alicante",
        "sections": [
          {
            "heading": "Livraison de vin à Alicante",
            "paragraphs": [
              "La commande est préparée à Torrevieja. Dès 1 caisse, livraison gratuite en Espagne. En dessous d'une caisse, le coût est confirmé à la commande.",
              "La caisse est le format le plus demandé : six bouteilles avec tire-bouchon et livraison gratuite en Espagne."
            ]
          },
          {
            "heading": "Que commander la première fois",
            "paragraphs": [
              "Rouge sec : Saperavi ou Mukuzani. Demi-doux : Kindzmarauli ou Khvanchkara. Blanc : Tsinandali, Kisi ou qvevri ambré.",
            ]
          }
        ],
        "faqs": [
          {
            "question": "Livrez-vous du vin à Alicante ?",
            "answer": "Oui. Depuis Torrevieja, livraison gratuite en Espagne dès 1 caisse."
          },
          {
            "question": "Combien de temps pour la livraison ?",
            "answer": "En Espagne, 48 h ouvrées."
          }
        ]
      },
      "uk": {
        "title": "Купити вино в Alicante | Georgian Royal Wine",
        "description": "Грузинське вино з доставкою в Аліканте, Ельче, Санта-Полу і Сан-Хуан. Безкоштовно Іспанією від 1 коробки.",
        "lead": "Доставляємо грузинське вино в Аліканте, Ельче, Санта-Полу і Сан-Хуан зі складу в Торрев'єсі. Зазвичай Іспанією — 48 робочих годин.",
        "eyebrow": "Доставка в Alicante",
        "sections": [
          {
            "heading": "Доставка вина в Alicante",
            "paragraphs": [
              "Замовлення готують у Торрев'єсі. Від 1 коробки доставка Іспанією безкоштовна. Менше коробки — вартість підтверджуємо при замовленні.",
              "Коробка — найчастіший формат: шість пляшок зі штопором і безкоштовна доставка Іспанією."
            ]
          },
          {
            "heading": "Що замовити вперше",
            "paragraphs": [
              "Сухе червоне: Сапераві або Мукузані. Напівсолодке: Кіндзмараулі або Хванчкара. Біле: Цінандалі, Кісі або бурштиновий квеврі.",
            ]
          }
        ],
        "faqs": [
          {
            "question": "Чи доставляєте вино в Alicante?",
            "answer": "Так. З Торрев'єхи, безкоштовно Іспанією від 1 коробки."
          },
          {
            "question": "Скільки триває доставка?",
            "answer": "Іспанією — 48 робочих годин."
          }
        ]
      },
      "bg": {
        "title": "Купете вино в Alicante | Georgian Royal Wine",
        "description": "Грузинско вино с доставка до Аликанте, Елче, Санта Пола и Сан Хуан. Безплатно в Испания от 1 каса.",
        "lead": "Доставяме грузинско вино до Аликанте, Елче, Санта Пола и Сан Хуан от склада в Торревьеха. Обичайно в Испания: 48 работни часа.",
        "eyebrow": "Доставка до Alicante",
        "sections": [
          {
            "heading": "Доставка на вино до Alicante",
            "paragraphs": [
              "Поръчката се подготвя в Торревьеха. От 1 каса доставката в Испания е безплатна. Под една каса цената се потвърждава при поръчка.",
              "Касата е най-често поръчваният формат: шест бутилки с тирбушон и безплатна доставка в Испания."
            ]
          },
          {
            "heading": "Какво да поръчате за първи път",
            "paragraphs": [
              "Сухо червено: Саперави или Мукузани. Полусладко: Киндзмараули или Хванчкара. Бяло: Цинандали, Киси или кехлибарено квеври.",
            ]
          }
        ],
        "faqs": [
          {
            "question": "Доставяте ли вино до Alicante?",
            "answer": "Да. От Торревьеха, безплатно в Испания от 1 каса."
          },
          {
            "question": "Колко време отнема доставката?",
            "answer": "В Испания — 48 работни часа."
          }
        ]
      }
    }
  },
  {
    "slug": "marbella",
    "name": "Marbella",
    "locales": {
      "es": {
        "title": "Comprar vino en Marbella | Georgian Royal Wine",
        "description": "Vino georgiano con envío a Marbella, Puerto Banús, Estepona y San Pedro. Entrega gratis en España desde 1 caja.",
        "lead": "Enviamos vino georgiano a Marbella, Puerto Banús, Estepona y San Pedro desde nuestro almacén en Torrevieja. Plazo habitual en España: 48 horas laborables.",
        "eyebrow": "Envío a Marbella",
        "sections": [
          {
            "heading": "Envío de vino a Marbella",
            "paragraphs": [
              "El pedido se prepara en Torrevieja. A partir de 1 caja la entrega es gratuita en España. Por debajo de una caja el coste se confirma al reservar.",
              "Una caja es el formato que más se pide: seis botellas con sacacorchos, y envío gratis en España."
            ]
          },
          {
            "heading": "Qué pedir la primera vez",
            "paragraphs": [
              "Tinto seco: Saperavi o Mukuzani. Semidulce: Kindzmarauli o Khvanchkara. Blanco: Tsinandali, Kisi o un qvevri ámbar.",
            ]
          }
        ],
        "faqs": [
          {
            "question": "¿Enviáis vino a Marbella?",
            "answer": "Sí. Desde Torrevieja, con entrega gratuita en España a partir de 1 caja."
          },
          {
            "question": "¿Cuánto tarda el envío?",
            "answer": "En España, 48 horas laborables."
          }
        ]
      },
      "en": {
        "title": "Buy wine in Marbella | Georgian Royal Wine",
        "description": "Georgian wine delivered to Marbella, Puerto Banús, Estepona and San Pedro. Free delivery in Spain from one box.",
        "lead": "We ship Georgian wine to Marbella, Puerto Banús, Estepona and San Pedro from our warehouse in Torrevieja. Usual Spain timing: 48 working hours.",
        "eyebrow": "Delivery to Marbella",
        "sections": [
          {
            "heading": "Wine delivery to Marbella",
            "paragraphs": [
              "Orders are prepared in Torrevieja. From one box, delivery in Spain is free. Below one box, the cost is confirmed when you order.",
              "A box is the format people order most: six bottles with a corkscrew, and free shipping in Spain."
            ]
          },
          {
            "heading": "What to order first",
            "paragraphs": [
              "Dry red: Saperavi or Mukuzani. Semi-sweet: Kindzmarauli or Khvanchkara. White: Tsinandali, Kisi or amber qvevri.",
            ]
          }
        ],
        "faqs": [
          {
            "question": "Do you deliver wine to Marbella?",
            "answer": "Yes. From Torrevieja, with free delivery in Spain from one box."
          },
          {
            "question": "How long does shipping take?",
            "answer": "In Spain, 48 working hours."
          }
        ]
      },
      "ru": {
        "title": "Купить вино в Marbella | Georgian Royal Wine",
        "description": "Грузинское вино с доставкой в Марбелью, Пуэрто-Банус, Эстепону и Сан-Педро. Бесплатно по Испании от 1 коробки.",
        "lead": "Доставляем грузинское вино в Марбелью, Пуэрто-Банус, Эстепону и Сан-Педро со склада в Торревьехе. Обычно по Испании — 48 рабочих часов.",
        "eyebrow": "Доставка в Marbella",
        "sections": [
          {
            "heading": "Доставка вина в Marbella",
            "paragraphs": [
              "Заказ готовят в Торревьехе. От 1 коробки доставка по Испании бесплатная. Меньше коробки — стоимость подтверждаем при заказе.",
              "Коробка — самый частый формат: шесть бутылок со штопором и бесплатная доставка по Испании."
            ]
          },
          {
            "heading": "Что заказать в первый раз",
            "paragraphs": [
              "Сухое красное: Саперави или Мукузани. Полусладкое: Киндзмараули или Хванчкара. Белое: Цинандали, Киси или янтарный квеври.",
            ]
          }
        ],
        "faqs": [
          {
            "question": "Доставляете ли вино в Marbella?",
            "answer": "Да. Из Торревьехи, бесплатно по Испании от 1 коробки."
          },
          {
            "question": "Сколько идёт доставка?",
            "answer": "По Испании — 48 рабочих часов."
          }
        ]
      },
      "fr": {
        "title": "Acheter du vin à Marbella | Georgian Royal Wine",
        "description": "Vin géorgien livré à Marbella, Puerto Banús, Estepona et San Pedro. Livraison gratuite en Espagne dès 1 caisse.",
        "lead": "Nous livrons du vin géorgien à Marbella, Puerto Banús, Estepona et San Pedro depuis notre entrepôt à Torrevieja. Délai habituel en Espagne : 48 h ouvrées.",
        "eyebrow": "Livraison à Marbella",
        "sections": [
          {
            "heading": "Livraison de vin à Marbella",
            "paragraphs": [
              "La commande est préparée à Torrevieja. Dès 1 caisse, livraison gratuite en Espagne. En dessous d'une caisse, le coût est confirmé à la commande.",
              "La caisse est le format le plus demandé : six bouteilles avec tire-bouchon et livraison gratuite en Espagne."
            ]
          },
          {
            "heading": "Que commander la première fois",
            "paragraphs": [
              "Rouge sec : Saperavi ou Mukuzani. Demi-doux : Kindzmarauli ou Khvanchkara. Blanc : Tsinandali, Kisi ou qvevri ambré.",
            ]
          }
        ],
        "faqs": [
          {
            "question": "Livrez-vous du vin à Marbella ?",
            "answer": "Oui. Depuis Torrevieja, livraison gratuite en Espagne dès 1 caisse."
          },
          {
            "question": "Combien de temps pour la livraison ?",
            "answer": "En Espagne, 48 h ouvrées."
          }
        ]
      },
      "uk": {
        "title": "Купити вино в Marbella | Georgian Royal Wine",
        "description": "Грузинське вино з доставкою в Марбелью, Пуерто-Банус, Естепону і Сан-Педро. Безкоштовно Іспанією від 1 коробки.",
        "lead": "Доставляємо грузинське вино в Марбелью, Пуерто-Банус, Естепону і Сан-Педро зі складу в Торрев'єсі. Зазвичай Іспанією — 48 робочих годин.",
        "eyebrow": "Доставка в Marbella",
        "sections": [
          {
            "heading": "Доставка вина в Marbella",
            "paragraphs": [
              "Замовлення готують у Торрев'єсі. Від 1 коробки доставка Іспанією безкоштовна. Менше коробки — вартість підтверджуємо при замовленні.",
              "Коробка — найчастіший формат: шість пляшок зі штопором і безкоштовна доставка Іспанією."
            ]
          },
          {
            "heading": "Що замовити вперше",
            "paragraphs": [
              "Сухе червоне: Сапераві або Мукузані. Напівсолодке: Кіндзмараулі або Хванчкара. Біле: Цінандалі, Кісі або бурштиновий квеврі.",
            ]
          }
        ],
        "faqs": [
          {
            "question": "Чи доставляєте вино в Marbella?",
            "answer": "Так. З Торрев'єхи, безкоштовно Іспанією від 1 коробки."
          },
          {
            "question": "Скільки триває доставка?",
            "answer": "Іспанією — 48 робочих годин."
          }
        ]
      },
      "bg": {
        "title": "Купете вино в Marbella | Georgian Royal Wine",
        "description": "Грузинско вино с доставка до Марбеля, Пуерто Банус, Естепона и Сан Педро. Безплатно в Испания от 1 каса.",
        "lead": "Доставяме грузинско вино до Марбеля, Пуерто Банус, Естепона и Сан Педро от склада в Торревьеха. Обичайно в Испания: 48 работни часа.",
        "eyebrow": "Доставка до Marbella",
        "sections": [
          {
            "heading": "Доставка на вино до Marbella",
            "paragraphs": [
              "Поръчката се подготвя в Торревьеха. От 1 каса доставката в Испания е безплатна. Под една каса цената се потвърждава при поръчка.",
              "Касата е най-често поръчваният формат: шест бутилки с тирбушон и безплатна доставка в Испания."
            ]
          },
          {
            "heading": "Какво да поръчате за първи път",
            "paragraphs": [
              "Сухо червено: Саперави или Мукузани. Полусладко: Киндзмараули или Хванчкара. Бяло: Цинандали, Киси или кехлибарено квеври.",
            ]
          }
        ],
        "faqs": [
          {
            "question": "Доставяте ли вино до Marbella?",
            "answer": "Да. От Торревьеха, безплатно в Испания от 1 каса."
          },
          {
            "question": "Колко време отнема доставката?",
            "answer": "В Испания — 48 работни часа."
          }
        ]
      }
    }
  },
  {
    "slug": "madrid",
    "name": "Madrid",
    "locales": {
      "es": {
        "title": "Comprar vino en Madrid | Georgian Royal Wine",
        "description": "Vino georgiano con envío a Madrid, Chamberí, Salamanca, Tetuán, Las Rozas y Alcobendas. Entrega gratis en España desde 1 caja.",
        "lead": "Enviamos vino georgiano a Madrid, Chamberí, Salamanca, Tetuán, Las Rozas y Alcobendas desde nuestro almacén en Torrevieja. Plazo habitual en España: 48 horas laborables.",
        "eyebrow": "Envío a Madrid",
        "sections": [
          {
            "heading": "Envío de vino a Madrid",
            "paragraphs": [
              "El pedido se prepara en Torrevieja. A partir de 1 caja la entrega es gratuita en España. Por debajo de una caja el coste se confirma al reservar.",
              "Una caja es el formato que más se pide: seis botellas con sacacorchos, y envío gratis en España."
            ]
          },
          {
            "heading": "Qué pedir la primera vez",
            "paragraphs": [
              "Tinto seco: Saperavi o Mukuzani. Semidulce: Kindzmarauli o Khvanchkara. Blanco: Tsinandali, Kisi o un qvevri ámbar.",
            ]
          }
        ],
        "faqs": [
          {
            "question": "¿Enviáis vino a Madrid?",
            "answer": "Sí. Desde Torrevieja, con entrega gratuita en España a partir de 1 caja."
          },
          {
            "question": "¿Cuánto tarda el envío?",
            "answer": "En España, 48 horas laborables."
          }
        ]
      },
      "en": {
        "title": "Buy wine in Madrid | Georgian Royal Wine",
        "description": "Georgian wine delivered to Madrid, Chamberí, Salamanca, Tetuán, Las Rozas and Alcobendas. Free delivery in Spain from one box.",
        "lead": "We ship Georgian wine to Madrid, Chamberí, Salamanca, Tetuán, Las Rozas and Alcobendas from our warehouse in Torrevieja. Usual Spain timing: 48 working hours.",
        "eyebrow": "Delivery to Madrid",
        "sections": [
          {
            "heading": "Wine delivery to Madrid",
            "paragraphs": [
              "Orders are prepared in Torrevieja. From one box, delivery in Spain is free. Below one box, the cost is confirmed when you order.",
              "A box is the format people order most: six bottles with a corkscrew, and free shipping in Spain."
            ]
          },
          {
            "heading": "What to order first",
            "paragraphs": [
              "Dry red: Saperavi or Mukuzani. Semi-sweet: Kindzmarauli or Khvanchkara. White: Tsinandali, Kisi or amber qvevri.",
            ]
          }
        ],
        "faqs": [
          {
            "question": "Do you deliver wine to Madrid?",
            "answer": "Yes. From Torrevieja, with free delivery in Spain from one box."
          },
          {
            "question": "How long does shipping take?",
            "answer": "In Spain, 48 working hours."
          }
        ]
      },
      "ru": {
        "title": "Купить вино в Madrid | Georgian Royal Wine",
        "description": "Грузинское вино с доставкой в Мадрид, Чамбери, Саламанку, Тетуан, Лас-Росас и Алькобендас. Бесплатно по Испании от 1 коробки.",
        "lead": "Доставляем грузинское вино в Мадрид, Чамбери, Саламанку, Тетуан, Лас-Росас и Алькобендас со склада в Торревьехе. Обычно по Испании — 48 рабочих часов.",
        "eyebrow": "Доставка в Madrid",
        "sections": [
          {
            "heading": "Доставка вина в Madrid",
            "paragraphs": [
              "Заказ готовят в Торревьехе. От 1 коробки доставка по Испании бесплатная. Меньше коробки — стоимость подтверждаем при заказе.",
              "Коробка — самый частый формат: шесть бутылок со штопором и бесплатная доставка по Испании."
            ]
          },
          {
            "heading": "Что заказать в первый раз",
            "paragraphs": [
              "Сухое красное: Саперави или Мукузани. Полусладкое: Киндзмараули или Хванчкара. Белое: Цинандали, Киси или янтарный квеври.",
            ]
          }
        ],
        "faqs": [
          {
            "question": "Доставляете ли вино в Madrid?",
            "answer": "Да. Из Торревьехи, бесплатно по Испании от 1 коробки."
          },
          {
            "question": "Сколько идёт доставка?",
            "answer": "По Испании — 48 рабочих часов."
          }
        ]
      },
      "fr": {
        "title": "Acheter du vin à Madrid | Georgian Royal Wine",
        "description": "Vin géorgien livré à Madrid, Chamberí, Salamanca, Tetuán, Las Rozas et Alcobendas. Livraison gratuite en Espagne dès 1 caisse.",
        "lead": "Nous livrons du vin géorgien à Madrid, Chamberí, Salamanca, Tetuán, Las Rozas et Alcobendas depuis notre entrepôt à Torrevieja. Délai habituel en Espagne : 48 h ouvrées.",
        "eyebrow": "Livraison à Madrid",
        "sections": [
          {
            "heading": "Livraison de vin à Madrid",
            "paragraphs": [
              "La commande est préparée à Torrevieja. Dès 1 caisse, livraison gratuite en Espagne. En dessous d'une caisse, le coût est confirmé à la commande.",
              "La caisse est le format le plus demandé : six bouteilles avec tire-bouchon et livraison gratuite en Espagne."
            ]
          },
          {
            "heading": "Que commander la première fois",
            "paragraphs": [
              "Rouge sec : Saperavi ou Mukuzani. Demi-doux : Kindzmarauli ou Khvanchkara. Blanc : Tsinandali, Kisi ou qvevri ambré.",
            ]
          }
        ],
        "faqs": [
          {
            "question": "Livrez-vous du vin à Madrid ?",
            "answer": "Oui. Depuis Torrevieja, livraison gratuite en Espagne dès 1 caisse."
          },
          {
            "question": "Combien de temps pour la livraison ?",
            "answer": "En Espagne, 48 h ouvrées."
          }
        ]
      },
      "uk": {
        "title": "Купити вино в Madrid | Georgian Royal Wine",
        "description": "Грузинське вино з доставкою в Мадрид, Чамбері, Саламанку, Тетуан, Лас-Росас і Алькобендас. Безкоштовно Іспанією від 1 коробки.",
        "lead": "Доставляємо грузинське вино в Мадрид, Чамбері, Саламанку, Тетуан, Лас-Росас і Алькобендас зі складу в Торрев'єсі. Зазвичай Іспанією — 48 робочих годин.",
        "eyebrow": "Доставка в Madrid",
        "sections": [
          {
            "heading": "Доставка вина в Madrid",
            "paragraphs": [
              "Замовлення готують у Торрев'єсі. Від 1 коробки доставка Іспанією безкоштовна. Менше коробки — вартість підтверджуємо при замовленні.",
              "Коробка — найчастіший формат: шість пляшок зі штопором і безкоштовна доставка Іспанією."
            ]
          },
          {
            "heading": "Що замовити вперше",
            "paragraphs": [
              "Сухе червоне: Сапераві або Мукузані. Напівсолодке: Кіндзмараулі або Хванчкара. Біле: Цінандалі, Кісі або бурштиновий квеврі.",
            ]
          }
        ],
        "faqs": [
          {
            "question": "Чи доставляєте вино в Madrid?",
            "answer": "Так. З Торрев'єхи, безкоштовно Іспанією від 1 коробки."
          },
          {
            "question": "Скільки триває доставка?",
            "answer": "Іспанією — 48 робочих годин."
          }
        ]
      },
      "bg": {
        "title": "Купете вино в Madrid | Georgian Royal Wine",
        "description": "Грузинско вино с доставка до Мадрид, Чамбери, Саламанка, Тетуан, Лас Росас и Алкобендас. Безплатно в Испания от 1 каса.",
        "lead": "Доставяме грузинско вино до Мадрид, Чамбери, Саламанка, Тетуан, Лас Росас и Алкобендас от склада в Торревьеха. Обичайно в Испания: 48 работни часа.",
        "eyebrow": "Доставка до Madrid",
        "sections": [
          {
            "heading": "Доставка на вино до Madrid",
            "paragraphs": [
              "Поръчката се подготвя в Торревьеха. От 1 каса доставката в Испания е безплатна. Под една каса цената се потвърждава при поръчка.",
              "Касата е най-често поръчваният формат: шест бутилки с тирбушон и безплатна доставка в Испания."
            ]
          },
          {
            "heading": "Какво да поръчате за първи път",
            "paragraphs": [
              "Сухо червено: Саперави или Мукузани. Полусладко: Киндзмараули или Хванчкара. Бяло: Цинандали, Киси или кехлибарено квеври.",
            ]
          }
        ],
        "faqs": [
          {
            "question": "Доставяте ли вино до Madrid?",
            "answer": "Да. От Торревьеха, безплатно в Испания от 1 каса."
          },
          {
            "question": "Колко време отнема доставката?",
            "answer": "В Испания — 48 работни часа."
          }
        ]
      }
    }
  },
  {
    "slug": "barcelona",
    "name": "Barcelona",
    "locales": {
      "es": {
        "title": "Comprar vino en Barcelona | Georgian Royal Wine",
        "description": "Vino georgiano con envío a Barcelona, Hospitalet, Badalona y el Maresme. Entrega gratis en España desde 1 caja.",
        "lead": "Enviamos vino georgiano a Barcelona, Hospitalet, Badalona y el Maresme desde nuestro almacén en Torrevieja. Plazo habitual en España: 48 horas laborables.",
        "eyebrow": "Envío a Barcelona",
        "sections": [
          {
            "heading": "Envío de vino a Barcelona",
            "paragraphs": [
              "El pedido se prepara en Torrevieja. A partir de 1 caja la entrega es gratuita en España. Por debajo de una caja el coste se confirma al reservar.",
              "Una caja es el formato que más se pide: seis botellas con sacacorchos, y envío gratis en España."
            ]
          },
          {
            "heading": "Qué pedir la primera vez",
            "paragraphs": [
              "Tinto seco: Saperavi o Mukuzani. Semidulce: Kindzmarauli o Khvanchkara. Blanco: Tsinandali, Kisi o un qvevri ámbar.",
            ]
          }
        ],
        "faqs": [
          {
            "question": "¿Enviáis vino a Barcelona?",
            "answer": "Sí. Desde Torrevieja, con entrega gratuita en España a partir de 1 caja."
          },
          {
            "question": "¿Cuánto tarda el envío?",
            "answer": "En España, 48 horas laborables."
          }
        ]
      },
      "en": {
        "title": "Buy wine in Barcelona | Georgian Royal Wine",
        "description": "Georgian wine delivered to Barcelona, Hospitalet, Badalona and the Maresme. Free delivery in Spain from one box.",
        "lead": "We ship Georgian wine to Barcelona, Hospitalet, Badalona and the Maresme from our warehouse in Torrevieja. Usual Spain timing: 48 working hours.",
        "eyebrow": "Delivery to Barcelona",
        "sections": [
          {
            "heading": "Wine delivery to Barcelona",
            "paragraphs": [
              "Orders are prepared in Torrevieja. From one box, delivery in Spain is free. Below one box, the cost is confirmed when you order.",
              "A box is the format people order most: six bottles with a corkscrew, and free shipping in Spain."
            ]
          },
          {
            "heading": "What to order first",
            "paragraphs": [
              "Dry red: Saperavi or Mukuzani. Semi-sweet: Kindzmarauli or Khvanchkara. White: Tsinandali, Kisi or amber qvevri.",
            ]
          }
        ],
        "faqs": [
          {
            "question": "Do you deliver wine to Barcelona?",
            "answer": "Yes. From Torrevieja, with free delivery in Spain from one box."
          },
          {
            "question": "How long does shipping take?",
            "answer": "In Spain, 48 working hours."
          }
        ]
      },
      "ru": {
        "title": "Купить вино в Barcelona | Georgian Royal Wine",
        "description": "Грузинское вино с доставкой в Барселону, Оспиталет, Бадалону и Маресме. Бесплатно по Испании от 1 коробки.",
        "lead": "Доставляем грузинское вино в Барселону, Оспиталет, Бадалону и Маресме со склада в Торревьехе. Обычно по Испании — 48 рабочих часов.",
        "eyebrow": "Доставка в Barcelona",
        "sections": [
          {
            "heading": "Доставка вина в Barcelona",
            "paragraphs": [
              "Заказ готовят в Торревьехе. От 1 коробки доставка по Испании бесплатная. Меньше коробки — стоимость подтверждаем при заказе.",
              "Коробка — самый частый формат: шесть бутылок со штопором и бесплатная доставка по Испании."
            ]
          },
          {
            "heading": "Что заказать в первый раз",
            "paragraphs": [
              "Сухое красное: Саперави или Мукузани. Полусладкое: Киндзмараули или Хванчкара. Белое: Цинандали, Киси или янтарный квеври.",
            ]
          }
        ],
        "faqs": [
          {
            "question": "Доставляете ли вино в Barcelona?",
            "answer": "Да. Из Торревьехи, бесплатно по Испании от 1 коробки."
          },
          {
            "question": "Сколько идёт доставка?",
            "answer": "По Испании — 48 рабочих часов."
          }
        ]
      },
      "fr": {
        "title": "Acheter du vin à Barcelona | Georgian Royal Wine",
        "description": "Vin géorgien livré à Barcelone, Hospitalet, Badalone et le Maresme. Livraison gratuite en Espagne dès 1 caisse.",
        "lead": "Nous livrons du vin géorgien à Barcelone, Hospitalet, Badalone et le Maresme depuis notre entrepôt à Torrevieja. Délai habituel en Espagne : 48 h ouvrées.",
        "eyebrow": "Livraison à Barcelona",
        "sections": [
          {
            "heading": "Livraison de vin à Barcelona",
            "paragraphs": [
              "La commande est préparée à Torrevieja. Dès 1 caisse, livraison gratuite en Espagne. En dessous d'une caisse, le coût est confirmé à la commande.",
              "La caisse est le format le plus demandé : six bouteilles avec tire-bouchon et livraison gratuite en Espagne."
            ]
          },
          {
            "heading": "Que commander la première fois",
            "paragraphs": [
              "Rouge sec : Saperavi ou Mukuzani. Demi-doux : Kindzmarauli ou Khvanchkara. Blanc : Tsinandali, Kisi ou qvevri ambré.",
            ]
          }
        ],
        "faqs": [
          {
            "question": "Livrez-vous du vin à Barcelona ?",
            "answer": "Oui. Depuis Torrevieja, livraison gratuite en Espagne dès 1 caisse."
          },
          {
            "question": "Combien de temps pour la livraison ?",
            "answer": "En Espagne, 48 h ouvrées."
          }
        ]
      },
      "uk": {
        "title": "Купити вино в Barcelona | Georgian Royal Wine",
        "description": "Грузинське вино з доставкою в Барселону, Оспіталет, Бадалону і Маресме. Безкоштовно Іспанією від 1 коробки.",
        "lead": "Доставляємо грузинське вино в Барселону, Оспіталет, Бадалону і Маресме зі складу в Торрев'єсі. Зазвичай Іспанією — 48 робочих годин.",
        "eyebrow": "Доставка в Barcelona",
        "sections": [
          {
            "heading": "Доставка вина в Barcelona",
            "paragraphs": [
              "Замовлення готують у Торрев'єсі. Від 1 коробки доставка Іспанією безкоштовна. Менше коробки — вартість підтверджуємо при замовленні.",
              "Коробка — найчастіший формат: шість пляшок зі штопором і безкоштовна доставка Іспанією."
            ]
          },
          {
            "heading": "Що замовити вперше",
            "paragraphs": [
              "Сухе червоне: Сапераві або Мукузані. Напівсолодке: Кіндзмараулі або Хванчкара. Біле: Цінандалі, Кісі або бурштиновий квеврі.",
            ]
          }
        ],
        "faqs": [
          {
            "question": "Чи доставляєте вино в Barcelona?",
            "answer": "Так. З Торрев'єхи, безкоштовно Іспанією від 1 коробки."
          },
          {
            "question": "Скільки триває доставка?",
            "answer": "Іспанією — 48 робочих годин."
          }
        ]
      },
      "bg": {
        "title": "Купете вино в Barcelona | Georgian Royal Wine",
        "description": "Грузинско вино с доставка до Барселона, Хоспиталет, Бадалона и Маресме. Безплатно в Испания от 1 каса.",
        "lead": "Доставяме грузинско вино до Барселона, Хоспиталет, Бадалона и Маресме от склада в Торревьеха. Обичайно в Испания: 48 работни часа.",
        "eyebrow": "Доставка до Barcelona",
        "sections": [
          {
            "heading": "Доставка на вино до Barcelona",
            "paragraphs": [
              "Поръчката се подготвя в Торревьеха. От 1 каса доставката в Испания е безплатна. Под една каса цената се потвърждава при поръчка.",
              "Касата е най-често поръчваният формат: шест бутилки с тирбушон и безплатна доставка в Испания."
            ]
          },
          {
            "heading": "Какво да поръчате за първи път",
            "paragraphs": [
              "Сухо червено: Саперави или Мукузани. Полусладко: Киндзмараули или Хванчкара. Бяло: Цинандали, Киси или кехлибарено квеври.",
            ]
          }
        ],
        "faqs": [
          {
            "question": "Доставяте ли вино до Barcelona?",
            "answer": "Да. От Торревьеха, безплатно в Испания от 1 каса."
          },
          {
            "question": "Колко време отнема доставката?",
            "answer": "В Испания — 48 работни часа."
          }
        ]
      }
    }
  },
  {
    "slug": "valencia",
    "name": "Valencia",
    "locales": {
      "es": {
        "title": "Comprar vino en Valencia | Georgian Royal Wine",
        "description": "Vino georgiano con envío a Valencia, Torrent, Paterna y Gandía. Entrega gratis en España desde 1 caja.",
        "lead": "Enviamos vino georgiano a Valencia, Torrent, Paterna y Gandía desde nuestro almacén en Torrevieja. Plazo habitual en España: 48 horas laborables.",
        "eyebrow": "Envío a Valencia",
        "sections": [
          {
            "heading": "Envío de vino a Valencia",
            "paragraphs": [
              "El pedido se prepara en Torrevieja. A partir de 1 caja la entrega es gratuita en España. Por debajo de una caja el coste se confirma al reservar.",
              "Una caja es el formato que más se pide: seis botellas con sacacorchos, y envío gratis en España."
            ]
          },
          {
            "heading": "Qué pedir la primera vez",
            "paragraphs": [
              "Tinto seco: Saperavi o Mukuzani. Semidulce: Kindzmarauli o Khvanchkara. Blanco: Tsinandali, Kisi o un qvevri ámbar.",
            ]
          }
        ],
        "faqs": [
          {
            "question": "¿Enviáis vino a Valencia?",
            "answer": "Sí. Desde Torrevieja, con entrega gratuita en España a partir de 1 caja."
          },
          {
            "question": "¿Cuánto tarda el envío?",
            "answer": "En España, 48 horas laborables."
          }
        ]
      },
      "en": {
        "title": "Buy wine in Valencia | Georgian Royal Wine",
        "description": "Georgian wine delivered to Valencia, Torrent, Paterna and Gandía. Free delivery in Spain from one box.",
        "lead": "We ship Georgian wine to Valencia, Torrent, Paterna and Gandía from our warehouse in Torrevieja. Usual Spain timing: 48 working hours.",
        "eyebrow": "Delivery to Valencia",
        "sections": [
          {
            "heading": "Wine delivery to Valencia",
            "paragraphs": [
              "Orders are prepared in Torrevieja. From one box, delivery in Spain is free. Below one box, the cost is confirmed when you order.",
              "A box is the format people order most: six bottles with a corkscrew, and free shipping in Spain."
            ]
          },
          {
            "heading": "What to order first",
            "paragraphs": [
              "Dry red: Saperavi or Mukuzani. Semi-sweet: Kindzmarauli or Khvanchkara. White: Tsinandali, Kisi or amber qvevri.",
            ]
          }
        ],
        "faqs": [
          {
            "question": "Do you deliver wine to Valencia?",
            "answer": "Yes. From Torrevieja, with free delivery in Spain from one box."
          },
          {
            "question": "How long does shipping take?",
            "answer": "In Spain, 48 working hours."
          }
        ]
      },
      "ru": {
        "title": "Купить вино в Valencia | Georgian Royal Wine",
        "description": "Грузинское вино с доставкой в Валенсию, Торрент, Патерну и Гандию. Бесплатно по Испании от 1 коробки.",
        "lead": "Доставляем грузинское вино в Валенсию, Торрент, Патерну и Гандию со склада в Торревьехе. Обычно по Испании — 48 рабочих часов.",
        "eyebrow": "Доставка в Valencia",
        "sections": [
          {
            "heading": "Доставка вина в Valencia",
            "paragraphs": [
              "Заказ готовят в Торревьехе. От 1 коробки доставка по Испании бесплатная. Меньше коробки — стоимость подтверждаем при заказе.",
              "Коробка — самый частый формат: шесть бутылок со штопором и бесплатная доставка по Испании."
            ]
          },
          {
            "heading": "Что заказать в первый раз",
            "paragraphs": [
              "Сухое красное: Саперави или Мукузани. Полусладкое: Киндзмараули или Хванчкара. Белое: Цинандали, Киси или янтарный квеври.",
            ]
          }
        ],
        "faqs": [
          {
            "question": "Доставляете ли вино в Valencia?",
            "answer": "Да. Из Торревьехи, бесплатно по Испании от 1 коробки."
          },
          {
            "question": "Сколько идёт доставка?",
            "answer": "По Испании — 48 рабочих часов."
          }
        ]
      },
      "fr": {
        "title": "Acheter du vin à Valencia | Georgian Royal Wine",
        "description": "Vin géorgien livré à Valence, Torrent, Paterna et Gandía. Livraison gratuite en Espagne dès 1 caisse.",
        "lead": "Nous livrons du vin géorgien à Valence, Torrent, Paterna et Gandía depuis notre entrepôt à Torrevieja. Délai habituel en Espagne : 48 h ouvrées.",
        "eyebrow": "Livraison à Valencia",
        "sections": [
          {
            "heading": "Livraison de vin à Valencia",
            "paragraphs": [
              "La commande est préparée à Torrevieja. Dès 1 caisse, livraison gratuite en Espagne. En dessous d'une caisse, le coût est confirmé à la commande.",
              "La caisse est le format le plus demandé : six bouteilles avec tire-bouchon et livraison gratuite en Espagne."
            ]
          },
          {
            "heading": "Que commander la première fois",
            "paragraphs": [
              "Rouge sec : Saperavi ou Mukuzani. Demi-doux : Kindzmarauli ou Khvanchkara. Blanc : Tsinandali, Kisi ou qvevri ambré.",
            ]
          }
        ],
        "faqs": [
          {
            "question": "Livrez-vous du vin à Valencia ?",
            "answer": "Oui. Depuis Torrevieja, livraison gratuite en Espagne dès 1 caisse."
          },
          {
            "question": "Combien de temps pour la livraison ?",
            "answer": "En Espagne, 48 h ouvrées."
          }
        ]
      },
      "uk": {
        "title": "Купити вино в Valencia | Georgian Royal Wine",
        "description": "Грузинське вино з доставкою в Валенсію, Торрент, Патерну і Гандію. Безкоштовно Іспанією від 1 коробки.",
        "lead": "Доставляємо грузинське вино в Валенсію, Торрент, Патерну і Гандію зі складу в Торрев'єсі. Зазвичай Іспанією — 48 робочих годин.",
        "eyebrow": "Доставка в Valencia",
        "sections": [
          {
            "heading": "Доставка вина в Valencia",
            "paragraphs": [
              "Замовлення готують у Торрев'єсі. Від 1 коробки доставка Іспанією безкоштовна. Менше коробки — вартість підтверджуємо при замовленні.",
              "Коробка — найчастіший формат: шість пляшок зі штопором і безкоштовна доставка Іспанією."
            ]
          },
          {
            "heading": "Що замовити вперше",
            "paragraphs": [
              "Сухе червоне: Сапераві або Мукузані. Напівсолодке: Кіндзмараулі або Хванчкара. Біле: Цінандалі, Кісі або бурштиновий квеврі.",
            ]
          }
        ],
        "faqs": [
          {
            "question": "Чи доставляєте вино в Valencia?",
            "answer": "Так. З Торрев'єхи, безкоштовно Іспанією від 1 коробки."
          },
          {
            "question": "Скільки триває доставка?",
            "answer": "Іспанією — 48 робочих годин."
          }
        ]
      },
      "bg": {
        "title": "Купете вино в Valencia | Georgian Royal Wine",
        "description": "Грузинско вино с доставка до Валенсия, Торент, Патерна и Гандия. Безплатно в Испания от 1 каса.",
        "lead": "Доставяме грузинско вино до Валенсия, Торент, Патерна и Гандия от склада в Торревьеха. Обичайно в Испания: 48 работни часа.",
        "eyebrow": "Доставка до Valencia",
        "sections": [
          {
            "heading": "Доставка на вино до Valencia",
            "paragraphs": [
              "Поръчката се подготвя в Торревьеха. От 1 каса доставката в Испания е безплатна. Под една каса цената се потвърждава при поръчка.",
              "Касата е най-често поръчваният формат: шест бутилки с тирбушон и безплатна доставка в Испания."
            ]
          },
          {
            "heading": "Какво да поръчате за първи път",
            "paragraphs": [
              "Сухо червено: Саперави или Мукузани. Полусладко: Киндзмараули или Хванчкара. Бяло: Цинандали, Киси или кехлибарено квеври.",
            ]
          }
        ],
        "faqs": [
          {
            "question": "Доставяте ли вино до Valencia?",
            "answer": "Да. От Торревьеха, безплатно в Испания от 1 каса."
          },
          {
            "question": "Колко време отнема доставката?",
            "answer": "В Испания — 48 работни часа."
          }
        ]
      }
    }
  },
  {
    "slug": "malaga",
    "name": "Málaga",
    "locales": {
      "es": {
        "title": "Comprar vino en Málaga | Georgian Royal Wine",
        "description": "Vino georgiano con envío a Málaga, Torremolinos, Fuengirola y Benalmádena. Entrega gratis en España desde 1 caja.",
        "lead": "Enviamos vino georgiano a Málaga, Torremolinos, Fuengirola y Benalmádena desde nuestro almacén en Torrevieja. Plazo habitual en España: 48 horas laborables.",
        "eyebrow": "Envío a Málaga",
        "sections": [
          {
            "heading": "Envío de vino a Málaga",
            "paragraphs": [
              "El pedido se prepara en Torrevieja. A partir de 1 caja la entrega es gratuita en España. Por debajo de una caja el coste se confirma al reservar.",
              "Una caja es el formato que más se pide: seis botellas con sacacorchos, y envío gratis en España."
            ]
          },
          {
            "heading": "Qué pedir la primera vez",
            "paragraphs": [
              "Tinto seco: Saperavi o Mukuzani. Semidulce: Kindzmarauli o Khvanchkara. Blanco: Tsinandali, Kisi o un qvevri ámbar.",
            ]
          }
        ],
        "faqs": [
          {
            "question": "¿Enviáis vino a Málaga?",
            "answer": "Sí. Desde Torrevieja, con entrega gratuita en España a partir de 1 caja."
          },
          {
            "question": "¿Cuánto tarda el envío?",
            "answer": "En España, 48 horas laborables."
          }
        ]
      },
      "en": {
        "title": "Buy wine in Málaga | Georgian Royal Wine",
        "description": "Georgian wine delivered to Málaga, Torremolinos, Fuengirola and Benalmádena. Free delivery in Spain from one box.",
        "lead": "We ship Georgian wine to Málaga, Torremolinos, Fuengirola and Benalmádena from our warehouse in Torrevieja. Usual Spain timing: 48 working hours.",
        "eyebrow": "Delivery to Málaga",
        "sections": [
          {
            "heading": "Wine delivery to Málaga",
            "paragraphs": [
              "Orders are prepared in Torrevieja. From one box, delivery in Spain is free. Below one box, the cost is confirmed when you order.",
              "A box is the format people order most: six bottles with a corkscrew, and free shipping in Spain."
            ]
          },
          {
            "heading": "What to order first",
            "paragraphs": [
              "Dry red: Saperavi or Mukuzani. Semi-sweet: Kindzmarauli or Khvanchkara. White: Tsinandali, Kisi or amber qvevri.",
            ]
          }
        ],
        "faqs": [
          {
            "question": "Do you deliver wine to Málaga?",
            "answer": "Yes. From Torrevieja, with free delivery in Spain from one box."
          },
          {
            "question": "How long does shipping take?",
            "answer": "In Spain, 48 working hours."
          }
        ]
      },
      "ru": {
        "title": "Купить вино в Málaga | Georgian Royal Wine",
        "description": "Грузинское вино с доставкой в Малагу, Торремолинос, Фуэнхиролу и Бенальмадену. Бесплатно по Испании от 1 коробки.",
        "lead": "Доставляем грузинское вино в Малагу, Торремолинос, Фуэнхиролу и Бенальмадену со склада в Торревьехе. Обычно по Испании — 48 рабочих часов.",
        "eyebrow": "Доставка в Málaga",
        "sections": [
          {
            "heading": "Доставка вина в Málaga",
            "paragraphs": [
              "Заказ готовят в Торревьехе. От 1 коробки доставка по Испании бесплатная. Меньше коробки — стоимость подтверждаем при заказе.",
              "Коробка — самый частый формат: шесть бутылок со штопором и бесплатная доставка по Испании."
            ]
          },
          {
            "heading": "Что заказать в первый раз",
            "paragraphs": [
              "Сухое красное: Саперави или Мукузани. Полусладкое: Киндзмараули или Хванчкара. Белое: Цинандали, Киси или янтарный квеври.",
            ]
          }
        ],
        "faqs": [
          {
            "question": "Доставляете ли вино в Málaga?",
            "answer": "Да. Из Торревьехи, бесплатно по Испании от 1 коробки."
          },
          {
            "question": "Сколько идёт доставка?",
            "answer": "По Испании — 48 рабочих часов."
          }
        ]
      },
      "fr": {
        "title": "Acheter du vin à Málaga | Georgian Royal Wine",
        "description": "Vin géorgien livré à Malaga, Torremolinos, Fuengirola et Benalmádena. Livraison gratuite en Espagne dès 1 caisse.",
        "lead": "Nous livrons du vin géorgien à Malaga, Torremolinos, Fuengirola et Benalmádena depuis notre entrepôt à Torrevieja. Délai habituel en Espagne : 48 h ouvrées.",
        "eyebrow": "Livraison à Málaga",
        "sections": [
          {
            "heading": "Livraison de vin à Málaga",
            "paragraphs": [
              "La commande est préparée à Torrevieja. Dès 1 caisse, livraison gratuite en Espagne. En dessous d'une caisse, le coût est confirmé à la commande.",
              "La caisse est le format le plus demandé : six bouteilles avec tire-bouchon et livraison gratuite en Espagne."
            ]
          },
          {
            "heading": "Que commander la première fois",
            "paragraphs": [
              "Rouge sec : Saperavi ou Mukuzani. Demi-doux : Kindzmarauli ou Khvanchkara. Blanc : Tsinandali, Kisi ou qvevri ambré.",
            ]
          }
        ],
        "faqs": [
          {
            "question": "Livrez-vous du vin à Málaga ?",
            "answer": "Oui. Depuis Torrevieja, livraison gratuite en Espagne dès 1 caisse."
          },
          {
            "question": "Combien de temps pour la livraison ?",
            "answer": "En Espagne, 48 h ouvrées."
          }
        ]
      },
      "uk": {
        "title": "Купити вино в Málaga | Georgian Royal Wine",
        "description": "Грузинське вино з доставкою в Малагу, Торремолінос, Фуенхіролу і Бенальмадену. Безкоштовно Іспанією від 1 коробки.",
        "lead": "Доставляємо грузинське вино в Малагу, Торремолінос, Фуенхіролу і Бенальмадену зі складу в Торрев'єсі. Зазвичай Іспанією — 48 робочих годин.",
        "eyebrow": "Доставка в Málaga",
        "sections": [
          {
            "heading": "Доставка вина в Málaga",
            "paragraphs": [
              "Замовлення готують у Торрев'єсі. Від 1 коробки доставка Іспанією безкоштовна. Менше коробки — вартість підтверджуємо при замовленні.",
              "Коробка — найчастіший формат: шість пляшок зі штопором і безкоштовна доставка Іспанією."
            ]
          },
          {
            "heading": "Що замовити вперше",
            "paragraphs": [
              "Сухе червоне: Сапераві або Мукузані. Напівсолодке: Кіндзмараулі або Хванчкара. Біле: Цінандалі, Кісі або бурштиновий квеврі.",
            ]
          }
        ],
        "faqs": [
          {
            "question": "Чи доставляєте вино в Málaga?",
            "answer": "Так. З Торрев'єхи, безкоштовно Іспанією від 1 коробки."
          },
          {
            "question": "Скільки триває доставка?",
            "answer": "Іспанією — 48 робочих годин."
          }
        ]
      },
      "bg": {
        "title": "Купете вино в Málaga | Georgian Royal Wine",
        "description": "Грузинско вино с доставка до Малага, Торемолинос, Фуенхирола и Беналмадена. Безплатно в Испания от 1 каса.",
        "lead": "Доставяме грузинско вино до Малага, Торемолинос, Фуенхирола и Беналмадена от склада в Торревьеха. Обичайно в Испания: 48 работни часа.",
        "eyebrow": "Доставка до Málaga",
        "sections": [
          {
            "heading": "Доставка на вино до Málaga",
            "paragraphs": [
              "Поръчката се подготвя в Торревьеха. От 1 каса доставката в Испания е безплатна. Под една каса цената се потвърждава при поръчка.",
              "Касата е най-често поръчваният формат: шест бутилки с тирбушон и безплатна доставка в Испания."
            ]
          },
          {
            "heading": "Какво да поръчате за първи път",
            "paragraphs": [
              "Сухо червено: Саперави или Мукузани. Полусладко: Киндзмараули или Хванчкара. Бяло: Цинандали, Киси или кехлибарено квеври.",
            ]
          }
        ],
        "faqs": [
          {
            "question": "Доставяте ли вино до Málaga?",
            "answer": "Да. От Торревьеха, безплатно в Испания от 1 каса."
          },
          {
            "question": "Колко време отнема доставката?",
            "answer": "В Испания — 48 работни часа."
          }
        ]
      }
    }
  },
  {
    "slug": "benidorm",
    "name": "Benidorm",
    "locales": {
      "es": {
        "title": "Comprar vino en Benidorm | Georgian Royal Wine",
        "description": "Vino georgiano con envío a Benidorm, Altea, La Vila Joiosa y la Cala. Entrega gratis en España desde 1 caja.",
        "lead": "Enviamos vino georgiano a Benidorm, Altea, La Vila Joiosa y la Cala desde nuestro almacén en Torrevieja. Plazo habitual en España: 48 horas laborables.",
        "eyebrow": "Envío a Benidorm",
        "sections": [
          {
            "heading": "Envío de vino a Benidorm",
            "paragraphs": [
              "El pedido se prepara en Torrevieja. A partir de 1 caja la entrega es gratuita en España. Por debajo de una caja el coste se confirma al reservar.",
              "Una caja es el formato que más se pide: seis botellas con sacacorchos, y envío gratis en España."
            ]
          },
          {
            "heading": "Qué pedir la primera vez",
            "paragraphs": [
              "Tinto seco: Saperavi o Mukuzani. Semidulce: Kindzmarauli o Khvanchkara. Blanco: Tsinandali, Kisi o un qvevri ámbar.",
            ]
          }
        ],
        "faqs": [
          {
            "question": "¿Enviáis vino a Benidorm?",
            "answer": "Sí. Desde Torrevieja, con entrega gratuita en España a partir de 1 caja."
          },
          {
            "question": "¿Cuánto tarda el envío?",
            "answer": "En España, 48 horas laborables."
          }
        ]
      },
      "en": {
        "title": "Buy wine in Benidorm | Georgian Royal Wine",
        "description": "Georgian wine delivered to Benidorm, Altea, La Vila Joiosa and la Cala. Free delivery in Spain from one box.",
        "lead": "We ship Georgian wine to Benidorm, Altea, La Vila Joiosa and la Cala from our warehouse in Torrevieja. Usual Spain timing: 48 working hours.",
        "eyebrow": "Delivery to Benidorm",
        "sections": [
          {
            "heading": "Wine delivery to Benidorm",
            "paragraphs": [
              "Orders are prepared in Torrevieja. From one box, delivery in Spain is free. Below one box, the cost is confirmed when you order.",
              "A box is the format people order most: six bottles with a corkscrew, and free shipping in Spain."
            ]
          },
          {
            "heading": "What to order first",
            "paragraphs": [
              "Dry red: Saperavi or Mukuzani. Semi-sweet: Kindzmarauli or Khvanchkara. White: Tsinandali, Kisi or amber qvevri.",
            ]
          }
        ],
        "faqs": [
          {
            "question": "Do you deliver wine to Benidorm?",
            "answer": "Yes. From Torrevieja, with free delivery in Spain from one box."
          },
          {
            "question": "How long does shipping take?",
            "answer": "In Spain, 48 working hours."
          }
        ]
      },
      "ru": {
        "title": "Купить вино в Benidorm | Georgian Royal Wine",
        "description": "Грузинское вино с доставкой в Бенидорм, Альтеа, Ла Вила-Хойоса и Ла Кала. Бесплатно по Испании от 1 коробки.",
        "lead": "Доставляем грузинское вино в Бенидорм, Альтеа, Ла Вила-Хойоса и Ла Кала со склада в Торревьехе. Обычно по Испании — 48 рабочих часов.",
        "eyebrow": "Доставка в Benidorm",
        "sections": [
          {
            "heading": "Доставка вина в Benidorm",
            "paragraphs": [
              "Заказ готовят в Торревьехе. От 1 коробки доставка по Испании бесплатная. Меньше коробки — стоимость подтверждаем при заказе.",
              "Коробка — самый частый формат: шесть бутылок со штопором и бесплатная доставка по Испании."
            ]
          },
          {
            "heading": "Что заказать в первый раз",
            "paragraphs": [
              "Сухое красное: Саперави или Мукузани. Полусладкое: Киндзмараули или Хванчкара. Белое: Цинандали, Киси или янтарный квеври.",
            ]
          }
        ],
        "faqs": [
          {
            "question": "Доставляете ли вино в Benidorm?",
            "answer": "Да. Из Торревьехи, бесплатно по Испании от 1 коробки."
          },
          {
            "question": "Сколько идёт доставка?",
            "answer": "По Испании — 48 рабочих часов."
          }
        ]
      },
      "fr": {
        "title": "Acheter du vin à Benidorm | Georgian Royal Wine",
        "description": "Vin géorgien livré à Benidorm, Altea, La Vila Joiosa et la Cala. Livraison gratuite en Espagne dès 1 caisse.",
        "lead": "Nous livrons du vin géorgien à Benidorm, Altea, La Vila Joiosa et la Cala depuis notre entrepôt à Torrevieja. Délai habituel en Espagne : 48 h ouvrées.",
        "eyebrow": "Livraison à Benidorm",
        "sections": [
          {
            "heading": "Livraison de vin à Benidorm",
            "paragraphs": [
              "La commande est préparée à Torrevieja. Dès 1 caisse, livraison gratuite en Espagne. En dessous d'une caisse, le coût est confirmé à la commande.",
              "La caisse est le format le plus demandé : six bouteilles avec tire-bouchon et livraison gratuite en Espagne."
            ]
          },
          {
            "heading": "Que commander la première fois",
            "paragraphs": [
              "Rouge sec : Saperavi ou Mukuzani. Demi-doux : Kindzmarauli ou Khvanchkara. Blanc : Tsinandali, Kisi ou qvevri ambré.",
            ]
          }
        ],
        "faqs": [
          {
            "question": "Livrez-vous du vin à Benidorm ?",
            "answer": "Oui. Depuis Torrevieja, livraison gratuite en Espagne dès 1 caisse."
          },
          {
            "question": "Combien de temps pour la livraison ?",
            "answer": "En Espagne, 48 h ouvrées."
          }
        ]
      },
      "uk": {
        "title": "Купити вино в Benidorm | Georgian Royal Wine",
        "description": "Грузинське вино з доставкою в Бенідорм, Альтеа, Ла Віла-Хойоса і Ла Кала. Безкоштовно Іспанією від 1 коробки.",
        "lead": "Доставляємо грузинське вино в Бенідорм, Альтеа, Ла Віла-Хойоса і Ла Кала зі складу в Торрев'єсі. Зазвичай Іспанією — 48 робочих годин.",
        "eyebrow": "Доставка в Benidorm",
        "sections": [
          {
            "heading": "Доставка вина в Benidorm",
            "paragraphs": [
              "Замовлення готують у Торрев'єсі. Від 1 коробки доставка Іспанією безкоштовна. Менше коробки — вартість підтверджуємо при замовленні.",
              "Коробка — найчастіший формат: шість пляшок зі штопором і безкоштовна доставка Іспанією."
            ]
          },
          {
            "heading": "Що замовити вперше",
            "paragraphs": [
              "Сухе червоне: Сапераві або Мукузані. Напівсолодке: Кіндзмараулі або Хванчкара. Біле: Цінандалі, Кісі або бурштиновий квеврі.",
            ]
          }
        ],
        "faqs": [
          {
            "question": "Чи доставляєте вино в Benidorm?",
            "answer": "Так. З Торрев'єхи, безкоштовно Іспанією від 1 коробки."
          },
          {
            "question": "Скільки триває доставка?",
            "answer": "Іспанією — 48 робочих годин."
          }
        ]
      },
      "bg": {
        "title": "Купете вино в Benidorm | Georgian Royal Wine",
        "description": "Грузинско вино с доставка до Бенидорм, Алтеа, Ла Вила Хойоса и Ла Кала. Безплатно в Испания от 1 каса.",
        "lead": "Доставяме грузинско вино до Бенидорм, Алтеа, Ла Вила Хойоса и Ла Кала от склада в Торревьеха. Обичайно в Испания: 48 работни часа.",
        "eyebrow": "Доставка до Benidorm",
        "sections": [
          {
            "heading": "Доставка на вино до Benidorm",
            "paragraphs": [
              "Поръчката се подготвя в Торревьеха. От 1 каса доставката в Испания е безплатна. Под една каса цената се потвърждава при поръчка.",
              "Касата е най-често поръчваният формат: шест бутилки с тирбушон и безплатна доставка в Испания."
            ]
          },
          {
            "heading": "Какво да поръчате за първи път",
            "paragraphs": [
              "Сухо червено: Саперави или Мукузани. Полусладко: Киндзмараули или Хванчкара. Бяло: Цинандали, Киси или кехлибарено квеври.",
            ]
          }
        ],
        "faqs": [
          {
            "question": "Доставяте ли вино до Benidorm?",
            "answer": "Да. От Торревьеха, безплатно в Испания от 1 каса."
          },
          {
            "question": "Колко време отнема доставката?",
            "answer": "В Испания — 48 работни часа."
          }
        ]
      }
    }
  }
];

export const guides: GuidePage[] = [
  {
    "slug": "como-comprar-vino-georgiano-en-espana",
    "locales": {
      "es": {
        "title": "Cómo comprar vino georgiano en España",
        "description": "Cómo pedir vino georgiano online en España: qué botella elegir, cómo funciona la caja y la entrega gratuita desde 1 caja.",
        "lead": "Puede comprar vino georgiano en España sin buscar una bodega importadora. Georgian Royal Wine prepara el pedido en Torrevieja y lo envía a domicilio.",
        "eyebrow": "Guía",
        "sections": [
          {
            "heading": "Elija por estilo",
            "paragraphs": [
              "Tinto seco: Saperavi o Mukuzani. Semidulce: Kindzmarauli o Khvanchkara. Blanco: Tsinandali, Kisi o qvevri ámbar."
            ]
          },
          {
            "heading": "Botella o caja",
            "paragraphs": [
              "Puede pedir botellas sueltas y cajas en el mismo carrito. La caja: paga cinco, recibe seis, con sacacorchos, y el envío pasa a ser gratuito en España.",
              "En Torrevieja, 1–4 botellas cuestan 3 €. Europa no entra en el envío gratis."
            ]
          },
          {
            "heading": "Cómo se cierra el pedido",
            "paragraphs": [
              "Añada el vino al carrito, pase al checkout y deje nombre, teléfono y dirección. El pedido se confirma por correo. Tel. +34 607 609 474 · sbs@sb-servicio.com."
            ]
          }
        ],
        "faqs": [
          {
            "question": "¿El envío gratis es para toda Europa?",
            "answer": "No. Solo en España desde 1 caja. Europa se cotiza aparte."
          },
          {
            "question": "¿Cuánto tarda?",
            "answer": "En España, 48 horas laborables."
          }
        ]
      },
      "en": {
        "title": "How to buy Georgian wine in Spain",
        "description": "How to order Georgian wine online in Spain: which bottle to choose, how the box works and free delivery from one box.",
        "lead": "You can buy Georgian wine in Spain without hunting for an importer. Georgian Royal Wine prepares the order in Torrevieja and ships it to your door.",
        "eyebrow": "Guide",
        "sections": [
          {
            "heading": "Choose by style",
            "paragraphs": [
              "Dry red: Saperavi or Mukuzani. Semi-sweet: Kindzmarauli or Khvanchkara. White: Tsinandali, Kisi or amber qvevri."
            ]
          },
          {
            "heading": "Bottle or box",
            "paragraphs": [
              "You can mix single bottles and boxes in one cart. A box: pay for five, receive six, with a corkscrew, and shipping becomes free in Spain.",
              "In Torrevieja, 1–4 bottles cost €3. Europe is not included in free shipping."
            ]
          },
          {
            "heading": "How the order is confirmed",
            "paragraphs": [
              "Add wine to the cart, go to checkout and leave your name, phone and address. The order is confirmed by email. Phone +34 607 609 474 · sbs@sb-servicio.com."
            ]
          }
        ],
        "faqs": [
          {
            "question": "Is free shipping for all of Europe?",
            "answer": "No. Spain only from one box. Europe is priced separately."
          },
          {
            "question": "How long does it take?",
            "answer": "In Spain, 48 working hours."
          }
        ]
      },
      "ru": {
        "title": "Как купить грузинское вино в Испании",
        "description": "Как заказать грузинское вино онлайн в Испании: какую бутылку выбрать, как работает коробка и бесплатная доставка от 1 коробки.",
        "lead": "Купить грузинское вино в Испании можно без поиска импортёра. Georgian Royal Wine готовит заказ в Торревьехе и доставляет на дом.",
        "eyebrow": "Гид",
        "sections": [
          {
            "heading": "Выбирайте по стилю",
            "paragraphs": [
              "Сухое красное: Саперави или Мукузани. Полусладкое: Киндзмараули или Хванчкара. Белое: Цинандали, Киси или янтарный квеври."
            ]
          },
          {
            "heading": "Бутылка или коробка",
            "paragraphs": [
              "Можно смешивать бутылки и коробки в одной корзине. Коробка: платите за пять, получаете шесть, со штопором, и доставка по Испании становится бесплатной.",
              "В Торревьехе 1–4 бутылки стоят 3 €. Европа не входит в бесплатную доставку."
            ]
          },
          {
            "heading": "Как подтверждается заказ",
            "paragraphs": [
              "Добавьте вино в корзину, перейдите к оформлению и укажите имя, телефон и адрес. Заказ подтверждается по почте. Тел. +34 607 609 474 · sbs@sb-servicio.com."
            ]
          }
        ],
        "faqs": [
          {
            "question": "Бесплатная доставка на всю Европу?",
            "answer": "Нет. Только по Испании от 1 коробки. Европа — отдельно."
          },
          {
            "question": "Сколько ждать?",
            "answer": "По Испании — 48 рабочих часов."
          }
        ]
      },
      "fr": {
        "title": "Comment acheter du vin géorgien en Espagne",
        "description": "Comment commander du vin géorgien en ligne en Espagne : quelle bouteille choisir, comment fonctionne la caisse et la livraison gratuite dès 1 caisse.",
        "lead": "Vous pouvez acheter du vin géorgien en Espagne sans chercher un importateur. Georgian Royal Wine prépare la commande à Torrevieja et la livre à domicile.",
        "eyebrow": "Guide",
        "sections": [
          {
            "heading": "Choisissez selon le style",
            "paragraphs": [
              "Rouge sec : Saperavi ou Mukuzani. Demi-doux : Kindzmarauli ou Khvanchkara. Blanc : Tsinandali, Kisi ou qvevri ambré."
            ]
          },
          {
            "heading": "Bouteille ou caisse",
            "paragraphs": [
              "Vous pouvez mixer bouteilles et caisses dans le même panier. La caisse : payez cinq, recevez six, avec tire-bouchon, et la livraison devient gratuite en Espagne.",
              "À Torrevieja, 1–4 bouteilles coûtent 3 €. L'Europe n'est pas incluse dans la livraison gratuite."
            ]
          },
          {
            "heading": "Comment la commande est confirmée",
            "paragraphs": [
              "Ajoutez le vin au panier, passez au checkout et laissez nom, téléphone et adresse. La commande est confirmée par e-mail. Tél. +34 607 609 474 · sbs@sb-servicio.com."
            ]
          }
        ],
        "faqs": [
          {
            "question": "La livraison gratuite concerne-t-elle toute l'Europe ?",
            "answer": "Non. Espagne uniquement dès 1 caisse. L'Europe est facturée à part."
          },
          {
            "question": "Combien de temps ?",
            "answer": "En Espagne, 48 h ouvrées."
          }
        ]
      },
      "uk": {
        "title": "Як купити грузинське вино в Іспанії",
        "description": "Як замовити грузинське вино онлайн в Іспанії: яку пляшку обрати, як працює коробка і безкоштовна доставка від 1 коробки.",
        "lead": "Купити грузинське вино в Іспанії можна без пошуку імпортера. Georgian Royal Wine готує замовлення в Торрев'єсі й доставляє додому.",
        "eyebrow": "Гід",
        "sections": [
          {
            "heading": "Обирайте за стилем",
            "paragraphs": [
              "Сухе червоне: Сапераві або Мукузані. Напівсолодке: Кіндзмараулі або Хванчкара. Біле: Цінандалі, Кісі або бурштиновий квеврі."
            ]
          },
          {
            "heading": "Пляшка чи коробка",
            "paragraphs": [
              "Можна змішувати пляшки й коробки в одному кошику. Коробка: платите за п'ять, отримуєте шість, зі штопором, і доставка Іспанією стає безкоштовною.",
              "У Торрев'єсі 1–4 пляшки коштують 3 €. Європа не входить у безкоштовну доставку."
            ]
          },
          {
            "heading": "Як підтверджується замовлення",
            "paragraphs": [
              "Додайте вино в кошик, перейдіть до оформлення й залиште ім'я, телефон і адресу. Замовлення підтверджується електронною поштою. Тел. +34 607 609 474 · sbs@sb-servicio.com."
            ]
          }
        ],
        "faqs": [
          {
            "question": "Безкоштовна доставка на всю Європу?",
            "answer": "Ні. Лише Іспанією від 1 коробки. Європа — окремо."
          },
          {
            "question": "Скільки чекати?",
            "answer": "Іспанією — 48 робочих годин."
          }
        ]
      },
      "bg": {
        "title": "Как да купите грузинско вино в Испания",
        "description": "Как да поръчате грузинско вино онлайн в Испания: коя бутилка да изберете, как работи касата и безплатната доставка от 1 каса.",
        "lead": "Можете да купите грузинско вино в Испания без да търсите вносител. Georgian Royal Wine подготвя поръчката в Торревьеха и я доставя до дома.",
        "eyebrow": "Ръководство",
        "sections": [
          {
            "heading": "Изберете по стил",
            "paragraphs": [
              "Сухо червено: Саперави или Мукузани. Полусладко: Киндзмараули или Хванчкара. Бяло: Цинандали, Киси или кехлибарено квеври."
            ]
          },
          {
            "heading": "Бутилка или каса",
            "paragraphs": [
              "Можете да комбинирате бутилки и каси в една количка. Касата: плащате пет, получавате шест, с тирбушон, и доставката в Испания става безплатна.",
              "В Торревьеха 1–4 бутилки струват 3 €. Европа не влиза в безплатната доставка."
            ]
          },
          {
            "heading": "Как се потвърждава поръчката",
            "paragraphs": [
              "Добавете виното в количката, преминете към плащане и оставете име, телефон и адрес. Поръчката се потвърждава по имейл. Тел. +34 607 609 474 · sbs@sb-servicio.com."
            ]
          }
        ],
        "faqs": [
          {
            "question": "Безплатната доставка за цяла Европа ли е?",
            "answer": "Не. Само в Испания от 1 каса. Европа се ценообразува отделно."
          },
          {
            "question": "Колко време отнема?",
            "answer": "В Испания — 48 работни часа."
          }
        ]
      }
    }
  },
  {
    "slug": "que-es-el-vino-qvevri",
    "locales": {
      "es": {
        "title": "Qué es el vino qvevri",
        "description": "El qvevri es la tinaja de barro georgiana donde el vino fermenta con los hollejos. Qué sabor tiene y qué botellas hay en GRW.",
        "lead": "Qvevri es la tinaja de barro enterrada en la que, en Georgia, el vino fermenta con pieles y raspón. El resultado suele ser ámbar, tánico y más cercano a un té o a un orejón que a un blanco joven.",
        "eyebrow": "Guía",
        "sections": [
          {
            "heading": "Por qué no es un blanco normal",
            "paragraphs": [
              "Un blanco habitual se separa del hollejo pronto. En el qvevri el mosto sigue en contacto con las pieles: color ámbar, tanino y amargor fino."
            ]
          },
          {
            "heading": "Qué botella pedir primero",
            "paragraphs": [
              "Empiece por un blanco qvevri (Kisi o Khikhvi), no por el Saperavi qvevri, que es tinto y más serio. En la tienda use el filtro Qvevri."
            ]
          },
          {
            "heading": "Con qué comerlo en España",
            "paragraphs": [
              "Queso curado, estofados, setas, frutos secos y cocina con nuez. Una caja mixta con dos qvevri es la forma más barata de probar el estilo."
            ]
          }
        ],
        "faqs": [
          {
            "question": "¿El qvevri es vino naranja?",
            "answer": "Se parece al vino naranja o ámbar: blanco con pieles. El qvevri añade la tinaja de barro georgiana."
          },
          {
            "question": "¿Tenéis qvevri en stock en España?",
            "answer": "Sí. Se envía desde Torrevieja: gratis en España desde 1 caja."
          }
        ]
      },
      "en": {
        "title": "What is qvevri wine",
        "description": "Qvevri is the Georgian clay vessel where wine ferments with the skins. What it tastes like and which bottles GRW stocks.",
        "lead": "Qvevri is the buried clay vessel in Georgia where wine ferments with skins and stems. The result is often amber, tannic and closer to tea or dried apricot than a young white.",
        "eyebrow": "Guide",
        "sections": [
          {
            "heading": "Why it is not a normal white",
            "paragraphs": [
              "A usual white is separated from the skins early. In qvevri the must stays on the skins: amber colour, tannin and a fine bitterness."
            ]
          },
          {
            "heading": "Which bottle to try first",
            "paragraphs": [
              "Start with a white qvevri (Kisi or Khikhvi), not Saperavi qvevri, which is red and more serious. Use the Qvevri filter in the shop."
            ]
          },
          {
            "heading": "What to eat with it in Spain",
            "paragraphs": [
              "Aged cheese, stews, mushrooms, nuts and walnut dishes. A mixed box with two qvevri bottles is the cheapest way to test the style."
            ]
          }
        ],
        "faqs": [
          {
            "question": "Is qvevri orange wine?",
            "answer": "It is close to orange or amber wine: white fermented on skins. Qvevri adds the Georgian clay vessel."
          },
          {
            "question": "Do you stock qvevri in Spain?",
            "answer": "Yes. Shipped from Torrevieja: free in Spain from one box."
          }
        ]
      },
      "ru": {
        "title": "Что такое вино квеври",
        "description": "Квеври — грузинская глиняная амфора, где вино бродит с кожицей. Какой вкус и какие бутылки есть у GRW.",
        "lead": "Квеври — закопанная глиняная амфора в Грузии, где вино бродит с кожицей и гребнями. Часто получается янтарное, танинное вино ближе к чаю или кураге, чем к молодому белому.",
        "eyebrow": "Гид",
        "sections": [
          {
            "heading": "Почему это не обычное белое",
            "paragraphs": [
              "Обычное белое рано отделяют от кожицы. В квеври сусло остаётся на кожице: янтарь, танин и тонкая горечь."
            ]
          },
          {
            "heading": "Какую бутылку взять первой",
            "paragraphs": [
              "Начните с белого квеври (Киси или Хишви), а не с Саперави квеври — это красное и более плотное. В магазине фильтр Qvevri."
            ]
          },
          {
            "heading": "С чем пить в Испании",
            "paragraphs": [
              "Выдержанный сыр, тушёное, грибы, орехи и блюда с грецким орехом. Смешанная коробка с двумя квеври — самый дешёвый способ проверить стиль."
            ]
          }
        ],
        "faqs": [
          {
            "question": "Квеври — это оранжевое вино?",
            "answer": "Близко к оранжевому или янтарному вину: белое на кожице. Квеври добавляет грузинскую глиняную амфору."
          },
          {
            "question": "Есть ли квеври на складе в Испании?",
            "answer": "Да. Отправка из Торревьехи: бесплатно по Испании от 1 коробки."
          }
        ]
      },
      "fr": {
        "title": "Qu'est-ce que le vin qvevri",
        "description": "Le qvevri est la jarre d'argile géorgienne où le vin fermente avec les peaux. Goût et bouteilles disponibles chez GRW.",
        "lead": "Le qvevri est la jarre d'argile enterrée en Géorgie où le vin fermente avec peaux et rafles. Le résultat est souvent ambré, tannique, plus proche du thé ou de l'abricot sec qu'un blanc jeune.",
        "eyebrow": "Guide",
        "sections": [
          {
            "heading": "Pourquoi ce n'est pas un blanc classique",
            "paragraphs": [
              "Un blanc classique est séparé des peaux tôt. Dans le qvevri, le moût reste au contact des peaux : ambre, tannin et amertume fine."
            ]
          },
          {
            "heading": "Quelle bouteille essayer d'abord",
            "paragraphs": [
              "Commencez par un blanc qvevri (Kisi ou Khikhvi), pas le Saperavi qvevri, plus rouge et plus sérieux. Filtre Qvevri dans la boutique."
            ]
          },
          {
            "heading": "Avec quoi le boire en Espagne",
            "paragraphs": [
              "Fromage affiné, ragoûts, champignons, fruits secs et plats aux noix. Une caisse mixte avec deux qvevri est le moyen le moins cher de tester le style."
            ]
          }
        ],
        "faqs": [
          {
            "question": "Le qvevri est-il un vin orange ?",
            "answer": "Proche du vin orange ou ambré : blanc fermenté sur peaux. Le qvevri ajoute la jarre d'argile géorgienne."
          },
          {
            "question": "Avez-vous du qvevri en stock en Espagne ?",
            "answer": "Oui. Expédié depuis Torrevieja : gratuit en Espagne dès 1 caisse."
          }
        ]
      },
      "uk": {
        "title": "Що таке вино квеврі",
        "description": "Квеврі — грузинська глиняна амфора, де вино бродить зі шкіркою. Який смак і які пляшки є в GRW.",
        "lead": "Квеврі — закопана глиняна амфора в Грузії, де вино бродить зі шкіркою й гребенями. Часто виходить бурштинове, танінне вино ближче до чаю чи кураги, ніж до молодого білого.",
        "eyebrow": "Гід",
        "sections": [
          {
            "heading": "Чому це не звичайне біле",
            "paragraphs": [
              "Звичайне біле рано відокремлюють від шкірки. У квеврі сусло лишається на шкірці: бурштин, танін і тонка гіркота."
            ]
          },
          {
            "heading": "Яку пляшку взяти першою",
            "paragraphs": [
              "Почніть із білого квеврі (Кісі або Хіхві), а не з Сапераві квеврі — воно червоне й серйозніше. У магазині фільтр Qvevri."
            ]
          },
          {
            "heading": "З чим пити в Іспанії",
            "paragraphs": [
              "Витриманий сир, тушковане, гриби, горіхи й страви з волоським горіхом. Змішана коробка з двома квеврі — найдешевший спосіб перевірити стиль."
            ]
          }
        ],
        "faqs": [
          {
            "question": "Чи є квеврі помаранчевим вином?",
            "answer": "Близько до помаранчевого чи бурштинового вина: біле на шкірці. Квеврі додає грузинську глиняну амфору."
          },
          {
            "question": "Чи є квеврі на складі в Іспанії?",
            "answer": "Так. Відправка з Торрев'єхи: безкоштовно Іспанією від 1 коробки."
          }
        ]
      },
      "bg": {
        "title": "Какво е вино квеври",
        "description": "Квеври е грузинската глинена амфора, в която виното ферментира с ципите. Какъв вкус има и кои бутилки има GRW.",
        "lead": "Квеври е заровената глинена амфора в Грузия, в която виното ферментира с ципи и чепки. Резултатът често е кехлибарен, танинов и по-близо до чай или сушени кайсии, отколкото до младо бяло.",
        "eyebrow": "Ръководство",
        "sections": [
          {
            "heading": "Защо не е обикновено бяло",
            "paragraphs": [
              "Обикновеното бяло се отделя от ципите рано. В квеври мъстта остава върху ципите: кехлибар, танин и лека горчивина."
            ]
          },
          {
            "heading": "Коя бутилка да опитате първо",
            "paragraphs": [
              "Започнете с бяло квеври (Киси или Хихви), не със Саперави квеври — то е червено и по-сериозно. В магазина използвайте филтъра Qvevri."
            ]
          },
          {
            "heading": "С какво да го пиете в Испания",
            "paragraphs": [
              "Зряло сирене, яхнии, гъби, ядки и ястия с орех. Смесена каса с две квеври е най-евтиният начин да пробвате стила."
            ]
          }
        ],
        "faqs": [
          {
            "question": "Квеври оранжево вино ли е?",
            "answer": "Близко до оранжево или кехлибарено вино: бяло с ципи. Квеври добавя грузинската глинена амфора."
          },
          {
            "question": "Имате ли квеври на склад в Испания?",
            "answer": "Да. Изпраща се от Торревьеха: безплатно в Испания от 1 каса."
          }
        ]
      }
    }
  },
  {
    "slug": "saperavi-kindzmarauli-khvanchkara",
    "locales": {
      "es": {
        "title": "Saperavi, Kindzmarauli y Khvanchkara",
        "description": "Diferencias entre Saperavi, Kindzmarauli y Khvanchkara para pedir vino georgiano en España.",
        "lead": "Estas tres botellas cubren casi todos los primeros pedidos. Una es seca y dos son semidulces, de zonas distintas de Georgia.",
        "eyebrow": "Guía",
        "sections": [
          {
            "heading": "Saperavi",
            "paragraphs": [
              "Uva tinta de Kakheti. Vino seco, oscuro, con ciruela y mora. El tinto para cenar si no busca azúcar."
            ]
          },
          {
            "heading": "Kindzmarauli",
            "paragraphs": [
              "También es Saperavi, pero semidulce, de Kvareli. Se sirve fresco. Es la botella más reconocida fuera de Georgia."
            ]
          },
          {
            "heading": "Khvanchkara",
            "paragraphs": [
              "Semidulce de Racha, con Alexandrouli y Mujuretuli. Más perfumado: rosa y fruta roja. Suele pedirse como la botella de ocasión."
            ]
          }
        ],
        "faqs": [
          {
            "question": "¿Cuál pido si solo voy a comprar una?",
            "answer": "Saperavi si quiere seco. Kindzmarauli si quiere el semidulce clásico. Khvanchkara si quiere el semidulce más aromático."
          },
          {
            "question": "¿Se pueden mezclar en una caja?",
            "answer": "El carrito permite botellas y cajas. Si quiere una mezcla concreta, escríbala en la nota del pedido."
          }
        ]
      },
      "en": {
        "title": "Saperavi, Kindzmarauli and Khvanchkara",
        "description": "Differences between Saperavi, Kindzmarauli and Khvanchkara when ordering Georgian wine in Spain.",
        "lead": "These three bottles cover almost every first order. One is dry and two are semi-sweet, from different regions of Georgia.",
        "eyebrow": "Guide",
        "sections": [
          {
            "heading": "Saperavi",
            "paragraphs": [
              "Red grape from Kakheti. Dry, dark wine with plum and blackberry. The dinner red if you do not want sweetness."
            ]
          },
          {
            "heading": "Kindzmarauli",
            "paragraphs": [
              "Also Saperavi, but semi-sweet, from Kvareli. Serve cool. The bottle most people recognise outside Georgia."
            ]
          },
          {
            "heading": "Khvanchkara",
            "paragraphs": [
              "Semi-sweet from Racha, with Alexandrouli and Mujuretuli. More aromatic: rose and red fruit. Often the special-occasion bottle in the box."
            ]
          }
        ],
        "faqs": [
          {
            "question": "Which one if I only buy one?",
            "answer": "Saperavi if you want dry. Kindzmarauli for the classic semi-sweet. Khvanchkara for the more aromatic semi-sweet."
          },
          {
            "question": "Can I mix them in one box?",
            "answer": "The cart allows bottles and boxes. For a specific mix, write it in the order note."
          }
        ]
      },
      "ru": {
        "title": "Саперави, Киндзмараули и Хванчкара",
        "description": "Разница между Саперави, Киндзмараули и Хванчкарой при заказе грузинского вина в Испании.",
        "lead": "Эти три бутылки закрывают почти все первые заказы. Одна сухая и две полусладкие, из разных зон Грузии.",
        "eyebrow": "Гид",
        "sections": [
          {
            "heading": "Саперави",
            "paragraphs": [
              "Красный сорт из Кахетии. Сухое тёмное вино со сливой и ежевикой. Тинто к ужину, если не нужен сахар."
            ]
          },
          {
            "heading": "Киндзмараули",
            "paragraphs": [
              "Тоже Саперави, но полусладкое, из Кварели. Подают охлаждённым. Самая узнаваемая бутылка за пределами Грузии."
            ]
          },
          {
            "heading": "Хванчкара",
            "paragraphs": [
              "Полусладкое из Рачи, из Александроули и Муджуретули. Более ароматное: роза и красные ягоды. Часто «праздничная» бутылка в коробке."
            ]
          }
        ],
        "faqs": [
          {
            "question": "Какую взять, если только одну?",
            "answer": "Саперави — если сухое. Киндзмараули — классическое полусладкое. Хванчкара — более ароматное полусладкое."
          },
          {
            "question": "Можно ли смешать в одной коробке?",
            "answer": "В корзине можно сочетать бутылки и коробки. Конкретную смесь укажите в заметке к заказу."
          }
        ]
      },
      "fr": {
        "title": "Saperavi, Kindzmarauli et Khvanchkara",
        "description": "Différences entre Saperavi, Kindzmarauli et Khvanchkara pour commander du vin géorgien en Espagne.",
        "lead": "Ces trois bouteilles couvrent presque toutes les premières commandes. Une est sèche et deux sont demi-douces, de régions différentes de Géorgie.",
        "eyebrow": "Guide",
        "sections": [
          {
            "heading": "Saperavi",
            "paragraphs": [
              "Cépage rouge de Kakheti. Vin sec, sombre, prune et mûre. Le rouge de table si vous ne voulez pas de sucre."
            ]
          },
          {
            "heading": "Kindzmarauli",
            "paragraphs": [
              "Toujours du Saperavi, mais demi-doux, de Kvareli. Servir frais. La bouteille la plus reconnue hors de Géorgie."
            ]
          },
          {
            "heading": "Khvanchkara",
            "paragraphs": [
              "Demi-doux de Racha, Alexandrouli et Mujuretuli. Plus parfumé : rose et fruits rouges. Souvent la bouteille d'occasion dans la caisse."
            ]
          }
        ],
        "faqs": [
          {
            "question": "Laquelle si j'en prends une seule ?",
            "answer": "Saperavi si vous voulez sec. Kindzmarauli pour le demi-doux classique. Khvanchkara pour le demi-doux plus aromatique."
          },
          {
            "question": "Peut-on les mélanger dans une caisse ?",
            "answer": "Le panier permet bouteilles et caisses. Pour un mélange précis, notez-le dans la commande."
          }
        ]
      },
      "uk": {
        "title": "Сапераві, Кіндзмараулі та Хванчкара",
        "description": "Різниця між Сапераві, Кіндзмараулі та Хванчкарою при замовленні грузинського вина в Іспанії.",
        "lead": "Ці три пляшки закривають майже всі перші замовлення. Одна суха і дві напівсолодкі, з різних зон Грузії.",
        "eyebrow": "Гід",
        "sections": [
          {
            "heading": "Сапераві",
            "paragraphs": [
              "Червоний сорт з Кахетії. Сухе темне вино зі сливою й ожиною. Червоне до вечері, якщо не потрібен цукор."
            ]
          },
          {
            "heading": "Кіндзмараулі",
            "paragraphs": [
              "Теж Сапераві, але напівсолодке, з Кварелі. Подають охолодженим. Найупізнаваніша пляшка за межами Грузії."
            ]
          },
          {
            "heading": "Хванчкара",
            "paragraphs": [
              "Напівсолодке з Рачі, з Александроулі та Муджуретулі. Більш ароматне: троянда й червоні ягоди. Часто «святкова» пляшка в коробці."
            ]
          }
        ],
        "faqs": [
          {
            "question": "Яку взяти, якщо лише одну?",
            "answer": "Сапераві — якщо сухе. Кіндзмараулі — класичне напівсолодке. Хванчкара — більш ароматне напівсолодке."
          },
          {
            "question": "Чи можна змішати в одній коробці?",
            "answer": "У кошику можна поєднувати пляшки й коробки. Конкретну суміш напишіть у примітці до замовлення."
          }
        ]
      },
      "bg": {
        "title": "Саперави, Киндзмараули и Хванчкара",
        "description": "Разлики между Саперави, Киндзмараули и Хванчкара при поръчка на грузинско вино в Испания.",
        "lead": "Тези три бутилки покриват почти всички първи поръчки. Едната е суха, двете са полусладки, от различни райони на Грузия.",
        "eyebrow": "Ръководство",
        "sections": [
          {
            "heading": "Саперави",
            "paragraphs": [
              "Червен сорт от Кахетия. Сухо, тъмно вино със слива и къпина. Червеното за вечеря, ако не искате захар."
            ]
          },
          {
            "heading": "Киндзмараули",
            "paragraphs": [
              "Също Саперави, но полусладко, от Кварели. Сервира се охладено. Най-разпознаваемата бутилка извън Грузия."
            ]
          },
          {
            "heading": "Хванчкара",
            "paragraphs": [
              "Полусладко от Рача, с Александроули и Муджуретули. По-ароматно: роза и червени плодове. Често специалната бутилка в касата."
            ]
          }
        ],
        "faqs": [
          {
            "question": "Коя да взема, ако е само една?",
            "answer": "Саперави ако искате сухо. Киндзмараули за класическото полусладко. Хванчкара за по-ароматното полусладко."
          },
          {
            "question": "Могат ли да се смесят в една каса?",
            "answer": "Количката позволява бутилки и каси. За конкретна смес я напишете в бележката към поръчката."
          }
        ]
      }
    }
  }
];

export function getCity(slug: string) {
  return cities.find((city) => city.slug === slug);
}

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export function getCityContent(slug: string, locale: Locale) {
  const city = getCity(slug);
  if (!city) return undefined;
  return city.locales[locale] ?? city.locales.es;
}

export function getGuideContent(slug: string, locale: Locale) {
  const guide = getGuide(slug);
  if (!guide) return undefined;
  return guide.locales[locale] ?? guide.locales.es;
}

export function getDeliveryFaqs(locale: Locale) {
  return deliveryFaqsByLocale[locale] ?? deliveryFaqsByLocale.es;
}
