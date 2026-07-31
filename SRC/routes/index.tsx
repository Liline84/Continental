import { createFileRoute, Link } from "@tanstack/react-router";
import { NavBar } from "@/components/NavBar";
import { Stories } from "@/components/Stories";
import { PostCard } from "@/components/PostCard";
import { categories, products, site } from "@/data/config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Continental — Boutique sociale premium pour femmes" },
      { name: "description", content: site.description },
      { property: "og:title", content: "Continental — Boutique sociale premium" },
      { property: "og:description", content: site.description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen pb-20 sm:pb-10">
      <NavBar />
      <Stories />

      <main className="mx-auto max-w-xl px-4 py-6">
        <h1 className="sr-only">Continental — {site.tagline}</h1>

        <div className="no-scrollbar mb-6 flex gap-2 overflow-x-auto">
          {categories.map((c) => (
            <Link
              key={c}
              to="/explore"
              search={{ q: c }}
              className="shrink-0 rounded-full border border-border bg-secondary px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
            >
              {c}
            </Link>
          ))}
        </div>

        <div className="space-y-6">
          {products.map((p) => (
            <PostCard key={p.id} product={p} />
          ))}
        </div>
      </main>
    </div>
  );
}
