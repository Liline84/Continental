import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { NavBar } from "@/components/NavBar";
import { ProductCard } from "@/components/ProductCard";
import { categories, getSeller, products } from "@/data/config";

type Search = { q?: string | undefined };

export const Route = createFileRoute("/explore")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    q: typeof s["q"] === "string" ? s["q"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Explorer les produits — Continental" },
      {
        name: "description",
        content:
          "Recherchez et filtrez robes, sacs, chaussures, bijoux et cosmétiques des boutiques Continental.",
      },
      { property: "og:title", content: "Explorer les produits — Continental" },
      {
        property: "og:description",
        content: "Recherche instantanée par produit, catégorie ou boutique.",
      },
    ],
  }),
  component: Explore,
});

function Explore() {
  const { q = "" } = Route.useSearch();
  const navigate = useNavigate({ from: "/explore" });
  const setQ = (value: string) =>
    navigate({ search: { q: value || undefined }, replace: true });

  const term = q.trim().toLowerCase();
  const results = products.filter((p) => {
    if (!term) return true;
    const seller = getSeller(p.sellerId);
    return [p.name, p.category, p.description, seller?.shopName, seller?.username]
      .filter(Boolean)
      .some((v) => v!.toLowerCase().includes(term));
  });

  return (
    <div className="min-h-screen pb-20 sm:pb-10">
      <NavBar />
      <main className="mx-auto max-w-5xl px-4 py-6">
        <h1 className="font-display text-3xl font-bold">Explorer</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Recherche instantanée par produit, catégorie, boutique ou description.
        </p>

        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Robe, sac, Maison Aya…"
          aria-label="Filtrer les produits"
          className="mt-4 w-full rounded-full border border-border bg-secondary px-5 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
        />

        <div className="no-scrollbar mt-4 flex gap-2 overflow-x-auto">
          <button
            onClick={() => setQ("")}
            className={`shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
              !q ? "border-primary bg-secondary text-foreground" : "border-border text-muted-foreground"
            }`}
          >
            Tout
          </button>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setQ(c)}
              className={`shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                q === c
                  ? "border-primary bg-secondary text-foreground"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {results.length === 0 ? (
          <p className="py-16 text-center text-sm text-muted-foreground">
            Aucun résultat pour « {q} ».
          </p>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
