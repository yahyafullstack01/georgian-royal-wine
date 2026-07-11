export type WineCategory = "red" | "white" | "rosé" | "sparkling";

export interface Wine {
  id: string;
  name: string;
  slug: string;
  category: WineCategory;
  region: string;
  country: string;
  vintage: number;
  price: number;
  description: string;
  tastingNotes: string[];
  alcohol: string;
  volume: string;
  image: string;
  featured?: boolean;
  inStock: boolean;
}

export interface CartItem {
  wine: Wine;
  quantity: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface CheckoutFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}
