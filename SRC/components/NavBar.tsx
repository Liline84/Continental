import { Link, useRouterState, useNavigate } from "@tanstack/react-router";
import { Home, Compass, Store, Search } from "lucide-react";
import { useState } from "react";
import { site } from "@/data/config";

export function NavBar() {
  const [q, setQ] = useState("");
  const navigate = useNavigate();
  const path = useRouterState({ select: (s) => s.location.pathname });

  const links = [
    { to: "/", label: "Accueil", icon: Home },
    { to: "/explore", label: "Explorer", icon: Compass },
    { to: "/profiles", label: "Boutiques", icon: Store },
  ] as const;

  return (
    <header className="glass sticky top-0 z-50">
      <nav className="mx-auto flex h-16 max-w-5xl items-center gap-3 px-4">
        <Link to="/" className="shrink-0">
          <span className="font-display text-signature text-2xl font-bold tracking-tight">
            {site.name}
          </span>
        </Link>

        <form
          className="relative ml-auto min-w-0 flex-1 sm:max-w-xs"
          onSubmit={(e) => {
            e.preventDefault();
            navigate({ to: "/explore", search: { q } });
          }}
        >
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Rechercher…"
            aria-label="Rechercher un produit"
            className="w-full rounded-full border border-border bg-secondary py-2 pl-9 pr-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
          />
        </form>

        <div className="hidden items-center gap-1 sm:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                path === l.to
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile bottom bar */}
      <div className="glass fixed inset-x-0 bottom-0 z-50 flex justify-around border-t border-border py-2 sm:hidden">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className={`flex flex-col items-center gap-1 px-4 text-[11px] transition-colors ${
              path === l.to ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <l.icon className="size-5" />
            {l.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
