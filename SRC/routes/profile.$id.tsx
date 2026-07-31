import { createFileRoute, notFound } from "@tanstack/react-router";
import { MapPin, MessageCircle } from "lucide-react";
import { NavBar } from "@/components/NavBar";
import { ProductCard } from "@/components/ProductCard";
import { categories, getSeller, products, stories } from "@/data/config";

export const Route = createFileRoute("/profile/$id")({
  loader: ({ params }) => {
    const seller = getSeller(params.id);
    if (!seller) throw notFound();
    return seller;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.shopName ?? "Boutique"} — Continental` },
      { name: "description", content: loaderData?.bio ?? "Boutique Continental" },
      { property: "og:title", content: `${loaderData?.shopName ?? "Boutique"} — Continental` },
      { property: "og:description", content: loaderData?.bio ?? "Boutique Continental" },
    ],
  }),
  component: Profile,
});

function Profile() {
  const seller = Route.useLoaderData();
  const items = products.filter((p) => p.sellerId === seller.id);
  const storyCount = stories.filter((s) => s.sellerId === seller.id).length;
  const cats = categories.filter((c) => items.some((p) => p.category === c));

  return (
    <div className="min-h-screen pb-20 sm:pb-10">
      <NavBar />

      <div className="relative z-0 h-40 overflow-hidden sm:h-56">
        <img
          src={seller.banner}
          alt={`Bannière ${seller.shopName}`}
          width={1920}
          height={512}
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      <main className="relative z-20 mx-auto max-w-5xl px-4">
        <div className="relative z-20 -mt-14 flex flex-col items-start gap-4 sm:flex-row sm:items-end">

          <img
            src={seller.avatar}
            alt={seller.shopName}
            width={512}
            height={512}
            className="size-28 rounded-full object-cover ring-4 ring-primary/70 glow"
          />

          <div className="flex-1">
            <h1 className="font-display text-3xl font-bold">{seller.shopName}</h1>
            <p className="text-sm text-muted-foreground">@{seller.username}</p>
          </div>
          <a
            href={`https://wa.me/${seller.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-signature flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            <MessageCircle className="size-4" /> Contacter
          </a>
        </div>

        <p className="mt-4 max-w-xl text-sm text-muted-foreground">{seller.bio}</p>
        <p className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin className="size-3" /> {seller.location}
        </p>

        <dl className="mt-5 grid grid-cols-3 gap-3">
          {[
            ["Produits", items.length],
            ["Stories", storyCount],
            ["Catégories", cats.length],
          ].map(([label, value]) => (
            <div key={label as string} className="surface-card rounded-2xl p-4 text-center">
              <dt className="text-xs text-muted-foreground">{label}</dt>
              <dd className="font-display text-2xl font-bold text-gold">{value}</dd>
            </div>
          ))}
        </dl>

        <h2 className="mt-8 font-display text-xl font-semibold">Galerie produits</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </main>
    </div>
  );
}
