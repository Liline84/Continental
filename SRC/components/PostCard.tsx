import { Link } from "@tanstack/react-router";
import { ShoppingBag, MapPin } from "lucide-react";
import { formatPrice, getSeller, whatsappLink, type Product } from "@/data/config";

const ratio: Record<Product["format"], string> = {
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  vertical: "aspect-[9/16]",
};

export function PostCard({ product }: { product: Product }) {
  const seller = getSeller(product.sellerId);

  return (
    <article className="surface-card overflow-hidden rounded-3xl">
      <header className="flex items-center gap-3 p-3">
        {seller && (
          <Link to="/profile/$id" params={{ id: seller.id }} className="flex items-center gap-3">
            <img
              src={seller.avatar}
              alt={seller.shopName}
              loading="lazy"
              className="size-10 rounded-full object-cover ring-2 ring-primary/50"
            />
            <span>
              <span className="block text-sm font-semibold">{seller.shopName}</span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="size-3" /> {seller.location}
              </span>
            </span>
          </Link>
        )}
        <span className="ml-auto rounded-full bg-secondary px-3 py-1 text-[11px] text-muted-foreground">
          {product.category}
        </span>
      </header>

      <div className={`relative overflow-hidden ${ratio[product.format]}`}>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {!product.available && (
          <span className="absolute left-3 top-3 rounded-full bg-background/85 px-3 py-1 text-xs font-medium text-muted-foreground">
            Épuisé
          </span>
        )}
      </div>

      <div className="space-y-2 p-4">
        <div className="flex items-baseline justify-between gap-3">
          <h2 className="font-display text-lg font-semibold">{product.name}</h2>
          <span className="shrink-0 text-base font-bold text-gold">
            {formatPrice(product)}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">{product.description}</p>
        <a
          href={whatsappLink(product)}
          target="_blank"
          rel="noopener noreferrer"
          className="gradient-signature mt-2 flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.02] glow"
        >
          <ShoppingBag className="size-4" />
          Commander sur WhatsApp
        </a>
      </div>
    </article>
  );
}
