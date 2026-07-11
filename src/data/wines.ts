import { Wine } from "@/types/wine";

export const wines: Wine[] = [
  {
    id: "1",
    name: "GRW Saperavi",
    slug: "grw-saperavi",
    category: "red",
    region: "Kakheti",
    country: "Georgia",
    vintage: 2021,
    price: 24.99,
    description:
      "A bold, deep-ruby Saperavi from the heart of Kakheti. Rich dark fruit, structured tannins, and a long finish — the quintessential Georgian red grape in its finest expression.",
    tastingNotes: ["Blackberry", "Plum", "Spice", "Dark chocolate"],
    alcohol: "13.5%",
    volume: "750ml",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&h=800&fit=crop",
    featured: true,
    inStock: true,
  },
  {
    id: "2",
    name: "Kindzmarauli",
    slug: "kindzmarauli",
    category: "red",
    region: "Kvareli, Kakheti",
    country: "Georgia",
    vintage: 2022,
    price: 19.99,
    description:
      "Semi-sweet red wine from the Kindzmarauli micro-zone. Velvety texture with notes of ripe cherry and pomegranate — a beloved Georgian classic.",
    tastingNotes: ["Cherry", "Pomegranate", "Velvet", "Honey"],
    alcohol: "12%",
    volume: "750ml",
    image:
      "https://images.unsplash.com/photo-1506377247727-2f5e3b773a8c?w=600&h=800&fit=crop",
    featured: true,
    inStock: true,
  },
  {
    id: "3",
    name: "Mukuzani",
    slug: "mukuzani",
    category: "red",
    region: "Gurjaani, Kakheti",
    country: "Georgia",
    vintage: 2020,
    price: 29.99,
    description:
      "Dry red wine aged in oak from the Mukuzani appellation. Full-bodied Saperavi with exceptional depth, crafted for connoisseurs who appreciate premium Georgian terroir.",
    tastingNotes: ["Black currant", "Oak", "Leather", "Tobacco"],
    alcohol: "13.8%",
    volume: "750ml",
    image:
      "https://images.unsplash.com/photo-1553361371-9b22f78e2b9d?w=600&h=800&fit=crop",
    featured: true,
    inStock: true,
  },
  {
    id: "4",
    name: "Khvanchkara",
    slug: "khvanchkara",
    category: "red",
    region: "Racha",
    country: "Georgia",
    vintage: 2022,
    price: 34.99,
    description:
      "Semi-sweet blend of Alexandrouli and Mujuretuli from the Racha region. Naturally semi-sweet with vibrant ruby color — a rare treasure from Georgia's mountain vineyards.",
    tastingNotes: ["Raspberry", "Rose", "Wild berries", "Silk"],
    alcohol: "12.5%",
    volume: "750ml",
    image:
      "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=600&h=800&fit=crop",
    featured: true,
    inStock: true,
  },
  {
    id: "5",
    name: "Tsinandali",
    slug: "tsinandali",
    category: "white",
    region: "Telavi, Kakheti",
    country: "Georgia",
    vintage: 2022,
    price: 18.99,
    description:
      "Classic dry white blend of Rkatsiteli and Mtsvane from the Tsinandali appellation. Elegant straw color with floral aromas and crisp, refreshing acidity.",
    tastingNotes: ["Green apple", "Pear", "White flowers", "Mineral"],
    alcohol: "12.5%",
    volume: "750ml",
    image:
      "https://images.unsplash.com/photo-1474722883778-792e799d2d1d?w=600&h=800&fit=crop",
    featured: true,
    inStock: true,
  },
  {
    id: "6",
    name: "Rkatsiteli Classic",
    slug: "rkatsiteli-classic",
    category: "white",
    region: "Kakheti",
    country: "Georgia",
    vintage: 2023,
    price: 14.99,
    description:
      "Pure Rkatsiteli — Georgia's most planted white grape. Fresh, aromatic, and versatile, showcasing the Alazani Valley's unique terroir in every glass.",
    tastingNotes: ["Citrus", "Quince", "Herbs", "Almond"],
    alcohol: "12%",
    volume: "750ml",
    image:
      "https://images.unsplash.com/photo-1586370434639-0fe43b2d32d7?w=600&h=800&fit=crop",
    featured: true,
    inStock: true,
  },
  {
    id: "7",
    name: "Mtsvane Qvevri",
    slug: "mtsvane-qvevri",
    category: "white",
    region: "Kakheti",
    country: "Georgia",
    vintage: 2021,
    price: 26.99,
    description:
      "Amber wine fermented and aged in traditional qvevri clay vessels. Complex aromas of dried apricot, walnut, and honey — UNESCO heritage winemaking at its finest.",
    tastingNotes: ["Apricot", "Walnut", "Honey", "Tea"],
    alcohol: "13%",
    volume: "750ml",
    image:
      "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=600&h=800&fit=crop",
    featured: false,
    inStock: true,
  },
  {
    id: "8",
    name: "Kisi Amber",
    slug: "kisi-amber",
    category: "white",
    region: "Kakheti",
    country: "Georgia",
    vintage: 2021,
    price: 32.99,
    description:
      "Rare Kisi grape variety vinified in qvevri. Deep amber hue with layers of tropical fruit, spice, and a distinctive tannic structure unique to Georgian amber wines.",
    tastingNotes: ["Mango", "Spice", "Dried fruit", "Orange peel"],
    alcohol: "13.5%",
    volume: "750ml",
    image:
      "https://images.unsplash.com/photo-1567696153798-9c2a3a0b2c1e?w=600&h=800&fit=crop",
    featured: false,
    inStock: true,
  },
  {
    id: "9",
    name: "Alazani Valley Red",
    slug: "alazani-valley-red",
    category: "red",
    region: "Alazani Valley, Kakheti",
    country: "Georgia",
    vintage: 2022,
    price: 16.99,
    description:
      "Semi-sweet red from the sun-drenched Alazani Valley. Approachable and fruit-forward — an excellent introduction to the warmth of Georgian winemaking.",
    tastingNotes: ["Red berries", "Jam", "Soft tannins", "Sweet finish"],
    alcohol: "11.5%",
    volume: "750ml",
    image:
      "https://images.unsplash.com/photo-1585553616433-89dd6d2451f5?w=600&h=800&fit=crop",
    featured: true,
    inStock: true,
  },
  {
    id: "10",
    name: "Pirosmani",
    slug: "pirosmani",
    category: "red",
    region: "Kakheti",
    country: "Georgia",
    vintage: 2022,
    price: 15.99,
    description:
      "Named after the legendary Georgian artist, this semi-sweet red celebrates Georgian culture. Smooth, fruity, and perfect for festive occasions.",
    tastingNotes: ["Cherry", "Plum", "Vanilla", "Soft spice"],
    alcohol: "12%",
    volume: "750ml",
    image:
      "https://images.unsplash.com/photo-1564463836148-4a5b1a3b2c1d?w=600&h=800&fit=crop",
    featured: false,
    inStock: true,
  },
  {
    id: "11",
    name: "Georgian Rosé",
    slug: "georgian-rose",
    category: "rosé",
    region: "Kakheti",
    country: "Georgia",
    vintage: 2023,
    price: 16.99,
    description:
      "Delicate rosé with a pale salmon hue, crafted from select Georgian grapes. Light, floral, and refreshing — perfect for warm evenings.",
    tastingNotes: ["Strawberry", "Rose petal", "Citrus", "Mineral"],
    alcohol: "11.5%",
    volume: "750ml",
    image:
      "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=600&h=800&fit=crop",
    featured: false,
    inStock: true,
  },
  {
    id: "12",
    name: "GRW Brut Sparkling",
    slug: "grw-brut-sparkling",
    category: "sparkling",
    region: "Kakheti",
    country: "Georgia",
    vintage: 2022,
    price: 22.99,
    description:
      "Elegant Georgian sparkling wine with fine persistent bubbles. Crisp and celebratory — ideal for toasting the rich heritage of Georgian Royal Wine.",
    tastingNotes: ["Green apple", "Citrus", "Brioche", "Mineral"],
    alcohol: "11.5%",
    volume: "750ml",
    image:
      "https://images.unsplash.com/photo-1594483503267-5fe71b19f6fc?w=600&h=800&fit=crop",
    featured: true,
    inStock: false,
  },
];

export function getWineBySlug(slug: string): Wine | undefined {
  return wines.find((w) => w.slug === slug);
}

export function getFeaturedWines(): Wine[] {
  return wines.filter((w) => w.featured);
}

export function getWinesByCategory(category: string): Wine[] {
  if (category === "all") return wines;
  return wines.filter((w) => w.category === category);
}
