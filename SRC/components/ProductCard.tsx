import { ShoppingBag } from "lucide-react";
import { formatPrice, whatsappLink, type Product } from "@/data/config";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="surface-card group relative overflow-hidden rounded-2xl">
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/85 to-transparent p-3 pt-10">
        <h3 className="truncate text-sm font-semibold">{product.name}</h3>
        <p className="text-sm font-bold text-gold">{formatPrice(product)}</p>
        <a
          href={whatsappLink(product)}
          target="_blank"
          rel="noopener noreferrer"
          className="gradient-signature mt-2 flex items-center justify-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold text-primary-foreground opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100"
        >
          <ShoppingBag className="size-3.5" /> Commander
        </a>
      </div>
    </article>
  );
}
