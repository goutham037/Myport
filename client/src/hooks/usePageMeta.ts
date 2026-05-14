import { useEffect } from "react";

const DEFAULT_DESC =
  "Sharan — Lead AI Developer @ Sociovia. AI growth infrastructure: ads optimization, CRM, conversational AI, backend automation.";
export function usePageMeta(title: string, description: string = DEFAULT_DESC) {
  useEffect(() => {
    const full = title.toLowerCase().includes("sharan") ? title : `${title} · Sharan Goutham`;
    document.title = full;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", description);
  }, [title, description]);
}
