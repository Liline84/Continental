/**
 * ============================================================
 *  CONTINENTAL — FICHIER DE CONFIGURATION CENTRALISÉ
 * ------------------------------------------------------------
 *  Tout le contenu du site est généré à partir de ce fichier.
 *  Modifiez uniquement ce fichier pour ajouter / retirer :
 *  vendeurs, stories, produits et catégories.
 *  Aucune base de données, aucun backend, aucune connexion.
 * ============================================================
 */

import pDress from "@/assets/p-dress.jpg";
import pBag from "@/assets/p-bag.jpg";
import pHeels from "@/assets/p-heels.jpg";
import pJewelry from "@/assets/p-jewelry.jpg";
import pCosmetics from "@/assets/p-cosmetics.jpg";
import pAccessories from "@/assets/p-accessories.jpg";
import a1 from "@/assets/a-1.jpg";
import a2 from "@/assets/a-2.jpg";
import a3 from "@/assets/a-3.jpg";
import banner from "@/assets/banner.jpg";

export type Seller = {
  id: string;
  shopName: string;
  username: string;
  avatar: string;
  banner: string;
  bio: string;
  whatsapp: string;
  location: string;
  socials: { instagram?: string; tiktok?: string; facebook?: string };
};

export type Story = {
  id: string;
  sellerId: string;
  name: string;
  avatar: string;
  media: string;
  publishedAt: string;
};

export type Product = {
  id: string;
  sellerId: string;
  name: string;
  price: number;
  currency: string;
  description: string;
  category: string;
  image: string;
  gallery?: string[];
  available: boolean;
  whatsapp: string;
  format: "square" | "portrait" | "vertical";
};

export const site = {
  name: "Continental",
  tagline: "La vitrine premium des créatrices",
  description:
    "Continental — boutique sociale premium : robes, sacs, chaussures, bijoux et cosmétiques. Commandez directement sur WhatsApp.",
};

export const categories = [
  "Robes",
  "Sacs",
  "Chaussures",
  "Accessoires",
  "Cosmétiques",
  "Bijoux",
];

export const sellers: Seller[] = [
  {
    id: "maison-aya",
    shopName: "Maison Aya",
    username: "maison.aya",
    avatar: a1,
    banner,
    bio: "Robes de soirée et pièces couture faites main. Livraison partout en Afrique de l'Ouest.",
    whatsapp: "22507000001",
    location: "Abidjan, Côte d'Ivoire",
    socials: { instagram: "maison.aya", tiktok: "maison.aya" },
  },
  {
    id: "or-eclat",
    shopName: "Or & Éclat",
    username: "or.eclat",
    avatar: a2,
    banner,
    bio: "Bijoux plaqués or et pièces signature pour les femmes qui brillent.",
    whatsapp: "22507000002",
    location: "Dakar, Sénégal",
    socials: { instagram: "or.eclat" },
  },
  {
    id: "velvet-beauty",
    shopName: "Velvet Beauty",
    username: "velvet.beauty",
    avatar: a3,
    banner,
    bio: "Cosmétiques, parfums et accessoires tendance sélectionnés avec soin.",
    whatsapp: "22507000003",
    location: "Cotonou, Bénin",
    socials: { instagram: "velvet.beauty", facebook: "velvetbeauty" },
  },
];

export const stories: Story[] = [
  {
    id: "s1",
    sellerId: "maison-aya",
    name: "Maison Aya",
    avatar: a1,
    media: pDress,
    publishedAt: "2026-07-30",
  },
  {
    id: "s2",
    sellerId: "or-eclat",
    name: "Or & Éclat",
    avatar: a2,
    media: pJewelry,
    publishedAt: "2026-07-30",
  },
  {
    id: "s3",
    sellerId: "velvet-beauty",
    name: "Velvet Beauty",
    avatar: a3,
    media: pCosmetics,
    publishedAt: "2026-07-29",
  },
  {
    id: "s4",
    sellerId: "maison-aya",
    name: "Nouveautés",
    avatar: a1,
    media: pHeels,
    publishedAt: "2026-07-29",
  },
  {
    id: "s5",
    sellerId: "velvet-beauty",
    name: "Sélection",
    avatar: a3,
    media: pAccessories,
    publishedAt: "2026-07-28",
  },
];

export const products: Product[] = [
  {
    id: "p1",
    sellerId: "maison-aya",
    name: "Robe satin Aurore",
    price: 65000,
    currency: "FCFA",
    description:
      "Robe longue en satin fluide, coupe sirène, finition main. Disponible du 36 au 44.",
    category: "Robes",
    image: pDress,
    gallery: [pDress, pHeels],
    available: true,
    whatsapp: "22507000001",
    format: "portrait",
  },
  {
    id: "p2",
    sellerId: "or-eclat",
    name: "Parure Éclat doré",
    price: 28000,
    currency: "FCFA",
    description:
      "Collier et boucles d'oreilles plaqués or 18 carats, pierres serties à la main.",
    category: "Bijoux",
    image: pJewelry,
    available: true,
    whatsapp: "22507000002",
    format: "square",
  },
  {
    id: "p3",
    sellerId: "maison-aya",
    name: "Escarpins Néon",
    price: 42000,
    currency: "FCFA",
    description:
      "Escarpins pointus en cuir verni, talon 10 cm, confort renforcé.",
    category: "Chaussures",
    image: pHeels,
    available: true,
    whatsapp: "22507000001",
    format: "portrait",
  },
  {
    id: "p4",
    sellerId: "velvet-beauty",
    name: "Coffret Rouge Velvet",
    price: 19500,
    currency: "FCFA",
    description:
      "Rouge à lèvres mat longue tenue et eau de parfum florale, coffret cadeau.",
    category: "Cosmétiques",
    image: pCosmetics,
    available: true,
    whatsapp: "22507000003",
    format: "square",
  },
  {
    id: "p5",
    sellerId: "or-eclat",
    name: "Sac Continental Cuir",
    price: 78000,
    currency: "FCFA",
    description:
      "Sac à main en cuir grainé, finitions dorées, doublure satinée, format bureau.",
    category: "Sacs",
    image: pBag,
    available: true,
    whatsapp: "22507000002",
    format: "square",
  },
  {
    id: "p6",
    sellerId: "velvet-beauty",
    name: "Duo Foulard & Lunettes",
    price: 15000,
    currency: "FCFA",
    description:
      "Foulard en soie imprimé et lunettes de soleil verres violets, édition limitée.",
    category: "Accessoires",
    image: pAccessories,
    available: false,
    whatsapp: "22507000003",
    format: "portrait",
  },
];

export const getSeller = (id: string) => sellers.find((s) => s.id === id);

export const formatPrice = (p: Product) =>
  `${p.price.toLocaleString("fr-FR")} ${p.currency}`;

export const whatsappLink = (p: Product) => {
  const seller = getSeller(p.sellerId);
  const text = `Bonjour ${seller?.shopName ?? ""} 👋\nJe suis intéressé(e) par : ${p.name}\nPrix : ${formatPrice(p)}\nVu sur Continental.`;
  return `https://wa.me/${p.whatsapp}?text=${encodeURIComponent(text)}`;
};
