import { useState } from "react";
import { X } from "lucide-react";
import { stories, type Story } from "@/data/config";

export function Stories() {
  const [active, setActive] = useState<Story | null>(null);

  return (
    <section aria-label="Stories des boutiques" className="border-b border-border">
      <div className="no-scrollbar mx-auto flex max-w-xl gap-4 overflow-x-auto px-4 py-4">
        {stories.map((s) => (
          <button
            key={s.id}
            onClick={() => setActive(s)}
            className="flex w-16 shrink-0 flex-col items-center gap-1.5"
          >
            <span className="story-ring grid size-16 place-items-center rounded-full p-[2px]">
              <span className="grid size-full place-items-center rounded-full bg-background p-[2px]">
                <img
                  src={s.avatar}
                  alt={s.name}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="size-full rounded-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </span>
            </span>
            <span className="w-full truncate text-center text-[11px] text-muted-foreground">
              {s.name}
            </span>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-black/90 p-4"
          onClick={() => setActive(null)}
          role="dialog"
          aria-label={`Story ${active.name}`}
        >
          <button
            className="absolute right-4 top-4 rounded-full bg-secondary p-2 text-foreground"
            aria-label="Fermer"
          >
            <X className="size-5" />
          </button>
          <figure className="max-h-[85vh] w-full max-w-sm overflow-hidden rounded-3xl surface-card">
            <img
              src={active.media}
              alt={active.name}
              className="max-h-[75vh] w-full object-cover"
            />
            <figcaption className="flex items-center gap-2 p-3 text-sm">
              <img src={active.avatar} alt="" className="size-8 rounded-full object-cover" />
              <span className="font-medium">{active.name}</span>
              <span className="ml-auto text-xs text-muted-foreground">
                {active.publishedAt}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
