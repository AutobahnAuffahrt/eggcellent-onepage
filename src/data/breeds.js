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
      'TODO'
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
    name: 'Deutsches Buschhuhn',
    description: 'Das Deutsche Buschhuhn ist eine seltene, alte deutsche Rasse, die ursprünglich in dichten Wäldern lebte. Diese wendigen Hühner sind wahre Überlebenskünstler und können fast fliegen.',
    image: '/images/breeds/buschhuhn.jpg',
    animationImage: '/images/animations/buschhuhn-walking.png',
    ourChickens: [
      'TODO',
      'TODO',
      'TODO'
    ],
    specialties: [
      'Seltene deutsche Rasse',
      'Sehr gute Flieger',
      'Wetterfest und anspruchslos',
      'Lebhaft und aufmerksam',
      'Kleine, weiße Eier'
    ]
  },
  {
    id: 3,
    name: 'Brahma',
    description: 'Brahma Hühner sind wahre Riesen unter den Hühnern. Diese majestätischen Tiere mit ihren befiederten Füßen sind sanfte Giganten und beeindrucken durch ihre imposante Erscheinung.',
    image: '/images/breeds/brahma.jpg',
    animationImage: '/images/animations/brahma-walking.png',
    ourChickens: [
      'TODO',
      'TODO',
      'TODO'
    ],
    specialties: [
      'Größte Hühnerrasse der Welt',
      'Befiederte Füße',
      'Sehr ruhig und gelassen',
      'Gute Winterleger',
      'Große, braune Eier'
    ]
  }
]

// Coop information - static content about the chicken house
export const coopInfo = {
  title: 'Unser Hühnerhaus',
  description: 'Ein selbstgebautes Zuhause für unsere gefiederten Freunde',
  sections: [
    {
      title: 'Das Dach',
      content: 'Wetterfestes Blechdach in Blau-Weiß, sorgt für optimalen Schutz vor Regen und Schnee. Die Dachneigung gewährleistet einen guten Wasserablauf.',
      image: '/images/coop/coop_01.png'
    },
    {
      title: 'Belüftung',
      content: 'Durchdachtes Lüftungssystem mit verstellbaren Öffnungen sorgt für frische Luft ohne Zugluft. Wichtig für die Gesundheit der Hühner.',
      image: '/images/coop/coop_02.png'
    },
    {
      title: 'Sitzstangen',
      content: 'Hochwertige Holzstangen in unterschiedlichen Höhen bieten allen Hühnern ihren bevorzugten Schlafplatz. Abgerundete Kanten schonen die Füße.',
      image: '/images/coop/coop_04.png'
    },
    {
      title: 'Nistboxen',
      content: 'Gemütliche Nistboxen mit weicher Einstreu laden zum Eierlegen ein. Ausreichend Privatsphäre für entspannte Hühner.',
      image: '/images/coop/coop_03.png'
    },
    {
      title: 'Außenbereich',
      content: 'Großzügiger Auslauf mit Schutz vor Raubvögeln. Verschiedene Versteckmöglichkeiten und Scharrbereiche für artgerechte Haltung.',
      image: '/images/coop/coop_05.png'
    }
  ],
  buildInfo: {
    year: '2024',
    materials: ['Holz (Fichtenbretter)', 'Blechdach (verzinkt)', 'Maschendraht', 'Dachpappe'],
    size: '3m x 2m x 2m (L x B x H)',
    features: ['Automatische Türöffnung', 'Isolierte Wände', 'Legenester mit Rolleier-System']
  }
}
