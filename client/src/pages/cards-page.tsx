import { PageLayout } from "@/components/site/PageLayout";
import VintageBusinessCard from "@/components/VintageBusinessCard";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function CardsPage() {
  usePageMeta("Vintage cards — Sharan", "Vintage business card collection showcase.");

  return (
    <PageLayout>
      <VintageBusinessCard />
    </PageLayout>
  );
}
