import { Wine } from "@/types/wine";

export const wines: Wine[] = [
  {
    id: "1",
    name: "Château Margaux Reserve",
    slug: "chateau-margaux-reserve",
    category: "red",
    region: "Bordeaux",
    country: "France",
    vintage: 2018,
    price: 189.99,
    description:
      "An exceptional Bordeaux blend with deep complexity and remarkable aging potential. Crafted from carefully selected Cabernet Sauvignon and Merlot grapes from our finest vineyard blocks.",
    tastingNotes: ["Black cherry", "Cedar", "Tobacco", "Dark chocolate"],
    alcohol: "14.5%",
    volume: "750ml",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&h=800&fit=crop",
    featured: true,
    inStock: true,
  },
  {
    id: "2",
    name: "Tuscany Rosso Classico",
    slug: "tuscany-rosso-classico",
    category: "red",
    region: "Tuscany",
    country: "Italy",
    vintage: 2020,
    price: 54.99,
    description:
      "A bold Sangiovese from the rolling hills of Tuscany. Rich ruby color with layers of ripe fruit and earthy undertones that capture the essence of Italian winemaking tradition.",
    tastingNotes: ["Ripe plum", "Leather", "Herbs", "Vanilla"],
    alcohol: "13.5%",
    volume: "750ml",
    image:
      "https://images.unsplash.com/photo-1506377247727-2f5e3b773a8c?w=600&h=800&fit=crop",
    featured: true,
    inStock: true,
  },
  {
    id: "3",
    name: "Napa Valley Cabernet",
    slug: "napa-valley-cabernet",
    category: "red",
    region: "Napa Valley",
    country: "USA",
    vintage: 2019,
    price: 78.99,
    description:
      "Full-bodied California Cabernet Sauvignon with intense dark fruit flavors and silky tannins. Aged 18 months in French oak barrels for depth and structure.",
    tastingNotes: ["Blackberry", "Cassis", "Oak", "Espresso"],
    alcohol: "14.8%",
    volume: "750ml",
    image:
      "https://images.unsplash.com/photo-1553361371-9b22f78e2b9d?w=600&h=800&fit=crop",
    featured: true,
    inStock: true,
  },
  {
    id: "4",
    name: "Chablis Premier Cru",
    slug: "chablis-premier-cru",
    category: "white",
    region: "Burgundy",
    country: "France",
    vintage: 2021,
    price: 62.99,
    description:
      "Elegant Chardonnay from the limestone soils of Chablis. Crisp minerality balanced with subtle citrus and floral notes — perfect for seafood and light cuisine.",
    tastingNotes: ["Green apple", "Lemon zest", "Flint", "White flowers"],
    alcohol: "12.5%",
    volume: "750ml",
    image:
      "https://images.unsplash.com/photo-1474722883778-792e799d2d1d?w=600&h=800&fit=crop",
    featured: false,
    inStock: true,
  },
  {
    id: "5",
    name: "Marlborough Sauvignon Blanc",
    slug: "marlborough-sauvignon-blanc",
    category: "white",
    region: "Marlborough",
    country: "New Zealand",
    vintage: 2022,
    price: 28.99,
    description:
      "Vibrant and aromatic Sauvignon Blanc bursting with tropical fruit and herbaceous character. A refreshing expression of New Zealand's premier wine region.",
    tastingNotes: ["Passion fruit", "Gooseberry", "Grapefruit", "Fresh grass"],
    alcohol: "13%",
    volume: "750ml",
    image:
      "https://images.unsplash.com/photo-1586370434639-0fe43b2d32d7?w=600&h=800&fit=crop",
    featured: true,
    inStock: true,
  },
  {
    id: "6",
    name: "Riesling Spätlese",
    slug: "riesling-spatlese",
    category: "white",
    region: "Mosel",
    country: "Germany",
    vintage: 2020,
    price: 42.99,
    description:
      "A beautifully balanced late-harvest Riesling with perfect harmony between sweetness and acidity. Notes of stone fruit and honey make this a delightful dessert wine.",
    tastingNotes: ["Peach", "Apricot", "Honey", "Mineral"],
    alcohol: "8.5%",
    volume: "750ml",
    image:
      "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=600&h=800&fit=crop",
    featured: false,
    inStock: true,
  },
  {
    id: "7",
    name: "Provence Rosé",
    slug: "provence-rose",
    category: "rosé",
    region: "Provence",
    country: "France",
    vintage: 2023,
    price: 34.99,
    description:
      "Pale salmon-hued rosé from the sun-drenched vineyards of Provence. Light, elegant, and endlessly drinkable — the quintessential summer wine.",
    tastingNotes: ["Strawberry", "Watermelon", "Citrus", "White pepper"],
    alcohol: "12.5%",
    volume: "750ml",
    image:
      "https://images.unsplash.com/photo-1567696153798-9c2a3a0b2c1e?w=600&h=800&fit=crop",
    featured: true,
    inStock: true,
  },
  {
    id: "8",
    name: "Cava Brut Reserva",
    slug: "cava-brut-reserva",
    category: "sparkling",
    region: "Penedès",
    country: "Spain",
    vintage: 2019,
    price: 39.99,
    description:
      "Traditional method sparkling wine with fine persistent bubbles. Aged on lees for 24 months, delivering brioche complexity alongside bright citrus fruit.",
    tastingNotes: ["Green apple", "Brioche", "Almond", "Citrus"],
    alcohol: "11.5%",
    volume: "750ml",
    image:
      "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=600&h=800&fit=crop",
    featured: false,
    inStock: true,
  },
  {
    id: "9",
    name: "Champagne Grand Cru",
    slug: "champagne-grand-cru",
    category: "sparkling",
    region: "Champagne",
    country: "France",
    vintage: 2015,
    price: 124.99,
    description:
      "Prestige cuvée Champagne from Grand Cru vineyards. Complex layers of toasted bread, citrus, and delicate floral aromas define this celebratory masterpiece.",
    tastingNotes: ["Toast", "Lemon", "White peach", "Almond cream"],
    alcohol: "12%",
    volume: "750ml",
    image:
      "https://images.unsplash.com/photo-1594483503267-5fe71b19f6fc?w=600&h=800&fit=crop",
    featured: true,
    inStock: true,
  },
  {
    id: "10",
    name: "Rioja Gran Reserva",
    slug: "rioja-gran-reserva",
    category: "red",
    region: "Rioja",
    country: "Spain",
    vintage: 2016,
    price: 67.99,
    description:
      "Aged five years before release, this Gran Reserva Tempranillo showcases the patience and artistry of Spanish winemaking at its finest.",
    tastingNotes: ["Dried fig", "Vanilla", "Leather", "Spice"],
    alcohol: "14%",
    volume: "750ml",
    image:
      "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=600&h=800&fit=crop",
    featured: false,
    inStock: true,
  },
  {
    id: "11",
    name: "Pinot Noir Willamette",
    slug: "pinot-noir-willamette",
    category: "red",
    region: "Willamette Valley",
    country: "USA",
    vintage: 2021,
    price: 48.99,
    description:
      "Silky Oregon Pinot Noir with bright red fruit and elegant structure. A wine that beautifully expresses the cool-climate terroir of the Pacific Northwest.",
    tastingNotes: ["Cherry", "Raspberry", "Mushroom", "Spice"],
    alcohol: "13.5%",
    volume: "750ml",
    image:
      "https://images.unsplash.com/photo-1585553616433-89dd6d2451f5?w=600&h=800&fit=crop",
    featured: false,
    inStock: true,
  },
  {
    id: "12",
    name: "Barolo DOCG",
    slug: "barolo-docg",
    category: "red",
    region: "Piedmont",
    country: "Italy",
    vintage: 2017,
    price: 95.99,
    description:
      "The king of Italian wines. Nebbiolo from Barolo with powerful tannins, rose petal aromatics, and extraordinary longevity. A collector's essential.",
    tastingNotes: ["Rose", "Tar", "Cherry", "Truffle"],
    alcohol: "14.5%",
    volume: "750ml",
    image:
      "https://images.unsplash.com/photo-1564463836148-4a5b1a3b2c1d?w=600&h=800&fit=crop",
    featured: false,
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
