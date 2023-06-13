export interface Category {
  name: string;
  slug: string;
}

export const categories: Category[] = [
  { name: "Thermique", slug: "t" },
  { name: "Hybride", slug: "h" },
  { name: "Plug-in Hybride", slug: "ph" },
  { name: "Électrique", slug: "e" },
];