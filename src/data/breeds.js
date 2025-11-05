// Chicken breed data for the eggcellent onepage
export const breeds = [
  {
    id: 1,
    name: 'Orpington',
    description: 'Orpington Hühner sind bekannt für ihr ruhiges, freundliches Wesen und ihre beeindruckende Größe. Diese robusten Hühner sind sowohl als Fleisch- als auch als Legehühner beliebt und eignen sich hervorragend für Anfänger.',
    image: '/images/breeds/Orpington_01.png',
    animationImage: '/images/animations/orpington-walking.png',
    ourChickens: [
      'Laura',
      'Lala',
      'Sansa'
    ],
    specialties: [
      'Sehr ruhig und zutraulich',
      'Gute Winterleger',
      'Hervorragende Bruthenne',
      'Robust und wetterhart',
      'Große, braune Eier'
    ]
  },
  {
    id: 2,
    name: 'Sussex',
    description: 'Das Sussex-Huhn ist eine alte englische Rasse, die für ihre hervorragenden Legeleistungen bekannt ist. Diese Hühner sind freundlich, robust und anpassungsfähig.',
    image: '/images/breeds/Sussex_01.png',
    animationImage: '/images/animations/sussex-walking.png',
    ourChickens: [
      'Hennelore',
      'Arya',
      'Sugar'
    ],
    specialties: [
      'Sehr gute Legeleistung',
      'Freundlich und zutraulich',
      'Robust und wetterfest',
      'Anpassungsfähig',
      'Große, cremefarbene Eier'
    ]
  },
  {
    id: 3,
    name: 'Brahma',
    description: 'Brahma Hühner sind wahre Riesen unter den Hühnern. Diese majestätischen Tiere mit ihren befiederten Füßen sind sanfte Giganten und beeindrucken durch ihre imposante Erscheinung.',
    image: '/images/breeds/Brahma_01.png',
    animationImage: '/images/animations/brahma-walking.png',
    ourChickens: [
      'Cersei',
      'Dame',
      'Misha'
    ],
    specialties: [
      'Größte Hühnerrasse der Welt',
      'Befiederte Füße',
      'Sehr ruhig und gelassen',
      'Gute Winterleger',
      'Große, braune Eier'
    ]
  },
  {
    id: 4,
    name: 'Cream Legbar',
    description: 'Cream Legbar Hühner sind bekannt für ihre außergewöhnliche Fähigkeit, blaue Eier zu legen. Diese lebhaften und aktiven Hühner sind nicht nur produktive Legehennen, sondern auch eine attraktive Ergänzung für jeden Garten.',
    image: '/images/breeds/Cream_Legbar_01.png',
    animationImage: '/images/animations/cream_legbar-walking.png',
    ourChickens: [
      'Luna',
      'Blue',
      'Sky'
    ],
    specialties: [
      'Legt blaue Eier',
      'Sehr aktiv und neugierig',
      'Gute Legeleistung',
      'Attraktive Federzeichnung',
      'Freundlich und sozial'
    ]
  },
  {
    id: 5,
    name: 'Zwerg-Wyandotte',
    description: 'Zwerg-Wyandotten sind kleine, kompakte und sehr robuste Hühner mit einer auffälligen, schönen Federzeichnung. Sie sind freundlich, neugierig und eignen sich besonders gut für kleinere Gärten oder als Haustiere.',
    image: '/images/breeds/zwerg_wyandotte_01.png',
    animationImage: '/images/animations/zwerg_wyandotte.png',
    ourChickens: [
      'Lilly',
      'Dotty',
      'Mimi'
    ],
    specialties: [
      'Kompakte Größe, ideal für kleine Gärten',
      'Sehr freundliches und neugieriges Wesen',
      'Schöne, auffällige Federzeichnung',
      'Gute Legeleistung trotz kleiner Größe',
      'Robust und wetterfest'
    ]
  },
  {
    id: 6,
    name: 'Schwedisches Blumenhuhn',
    description: 'Schwedische Blumenhühner sind eine alte, robuste Rasse aus Schweden, die für ihre auffälligen Farben und Muster bekannt ist. Sie sind freundlich, anpassungsfähig und legen Eier in verschiedenen Farbtönen.',
    image: '/images/breeds/Schwedisches_Blümenhuhn_01.png',
    animationImage: '/images/animations/schwedisches_blumenhuhn-walking.png',
    ourChickens: [
      'Blomma',
      'Freja',
      'Astrid'
    ],
    specialties: [
      'Sehr robuste und gesunde Rasse',
      'Vielfältige, bunte Federzeichnung',
      'Freundlich und neugierig',
      'Anpassungsfähig an verschiedene Klimazonen',
      'Legt Eier in unterschiedlichen Farben'
    ]
  }
]

// Coop information - static content about the chicken house
export const coopInfo = {
  title: 'Unser Hühnerhaus',
  description: 'Ein selbstgebautes Zuhause für unsere gefiederten Freunde',
  sections: [
    {
      title: 'Der Stall',
      content: 'In Blau und Weiß gehalten, bietet der geräumige Stall ausreichend Platz für unsere Hühner. Die Tür im Hühner design rundet das Gesamtbild ab.',
      image: '/images/coop/coop_02.png'
    },
    {
      title: 'Das Dach',
      content: 'Wetterfestes Dach aus Dachschindeln und Dachblechen, sorgt für optimalen Schutz vor Regen und Schnee. Die Dachneigung gewährleistet einen guten Wasserablauf.',
      image: '/images/coop/coop_01.png'
    },
    {
      title: 'Sitzstangen',
      content: 'Die Sitzstangen sind extra abgerundet und bieten einen guten Halt für die Nacht.',
      image: '/images/coop/coop_04.png'
    },
    {
      title: 'Nistboxen',
      content: 'Die Gemütlichen Nistboxen sind aus Katzenklos gebaut und bieten den Hühnern einen ruhigen Ort zum Eierlegen.',
      image: '/images/coop/coop_03.png'
    },
    {
      title: 'Elektronische Hühnerklappe',
      content: 'Die elektronische Hühnerklappe ermöglicht den Hühnern einen einfachen Zugang zum Außenbereich, während sie gleichzeitig vor Raubvögeln schützt. Sie öffnet und schließt sich automatisch bei Sonnenaufgang und Sonnenuntergang.',
      image: '/images/coop/coop_05.png'
    }
  ],
  buildInfo: {
    year: '2024',
    materials: ['Holz (Fichtenbretter)', 'Blechdach (Aluminum)', 'Dachrinne (Kunststoff)', 'Dachschindeln (Bitumen)'],
    size: '282cm x 210cm x 260cm (L x B x H)',
    features: ['Automatische Hühnerklappe', 'Sitzstangen erhöht', 'Legenester aus Katzenklo']
  }
}
