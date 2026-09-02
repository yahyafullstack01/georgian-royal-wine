export type WineCategory = "red" | "white" | "rose";
export type WineCollection = "rezos" | "qvevri";
export type WineFilter = "all" | WineCategory | WineCollection;

export interface Wine {
  id: string;
  slug: string;
  category: WineCategory;
  collections: WineCollection[];
  vintage?: number;
  price: number;
  alcohol: string;
  volume: string;
  image: string;
  featured?: boolean;
  inStock: boolean;
}

export interface WineContent {
  name: string;
  classification: string;
  region: string;
  country: string;
  grape: string;
  grapesSourced: string;
  servingTemperature: string;
  storageTemperature: string;
  color?: string;
  aroma?: string;
  taste?: string;
  tastingNotes?: string;
  subregion?: string;
  microzone?: string;
  vinification?: string;
  alcohol?: string;
  vintage?: string;
  pairing?: string;
}

export interface CartItem {
  wine: Wine;
  /** Extra single bottles (starts at 0). */
  bottles: number;
  /** Boxes of 5 paid + 1 free = 6 bottles (starts at 0). */
  boxes: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export type CustomerType = "business" | "individual";
export type BusinessType =
  | "restaurant"
  | "retailer"
  | "distributor"
  | "partner"
  | "other";

export interface CheckoutFormData {
  customerType: CustomerType;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  businessType: BusinessType | "";
  address: string;
  houseNumber: string;
  apartment?: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  notes: string;
}
