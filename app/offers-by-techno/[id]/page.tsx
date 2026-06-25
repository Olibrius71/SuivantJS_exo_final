import ButtonLink from "@/components/shared/ButtonLink";
import Title from "@/components/shared/Title";
import OfferCard from "@/components/shared/OfferCard";
import {OfferType} from "@/types/offer";
import OffersListByTechno from "@/app/offers-by-techno/[id]/_components/OffersListByTechno";
import TitleWithTechno from "@/app/offers-by-techno/[id]/_components/TitleWithTechno";

export default async function OffersByTechno({ params}: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="flex flex-col gap-16 px-20 py-6">
      <ButtonLink href="/all-offers" text="Voir toutes les offres" iconLeft={<span className="material-symbols-outlined">arrow_back</span>} />
      <TitleWithTechno idOfTechnology={Number(id)} />

      <OffersListByTechno idOfTechnology={Number(id)} />
    </div>
  );
}
