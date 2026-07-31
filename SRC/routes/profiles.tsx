import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { NavBar } from "@/components/NavBar";
import { products, sellers } from "@/data/config";

export const Route = createFileRoute("/profiles")({
  head: () => ({
    meta: [
      { title: "Boutiques et créatrices — Continental" },
      {
        name: "description",
        content:
          "Découvrez les boutiques Continental : créatrices de mode, bijoux et beauté à commander sur WhatsApp.",
      },
      { property: "og:title", content: "Boutiques et créatrices — Continental" },
      {
        property: "og:description",
        content: "Toutes les boutiques partenaires de Continental.",
      },
    ],
  }),
  component: Profiles,
});

function Profiles() {
  return (
    <div className="min-h-screen pb-20 sm:pb-10">
      <NavBar />
      <main className="mx-auto max-w-3xl px-4 py-6">
        <h1 className="font-display text-3xl font-bold">Boutiques</h1>
        <div className="mt-6 space-y-4">
          {sellers.map((s) => (
            <Link
              key={s.id}
              to="/profile/$id"
              params={{ id: s.id }}
              className="surface-card flex items-center gap-4 rounded-2xl p-4 transition-transform duration-200 hover:scale-[1.01]"
            >
              <img
                src={s.avatar}
                alt={s.shopName}
                loading="lazy"
                className="size-16 rounded-full object-cover ring-2 ring-primary/60"
              />
              <div className="min-w-0">
                <h2 className="font-display text-lg font-semibold">{s.shopName}</h2>
                <p className="text-xs text-muted-foreground">@{s.username}</p>
                <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="size-3" /> {s.location}
                </p>
              </div>
              <span className="ml-auto shrink-0 text-sm font-bold text-gold">
                {products.filter((p) => p.sellerId === s.id).length} produits
              </span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
