import ButtonLink from "@/components/shared/ButtonLink";
import Title from "@/components/shared/Title";
import OfferCard from "@/components/shared/OfferCard";
import {OfferType} from "@/types/offer";

export default function OffersByTechno() {
  const testOffer: OfferType = {
    id: 1,
    title: "Tite dslfn slfksf",
    description: "ssfsf",
    publicationDate: new Date(),
  }

  return (
    <div className="flex flex-col gap-16 px-20 py-6">
      <ButtonLink href="/all-offers" text="Voir toutes les offres" iconLeft={<span className="material-symbols-outlined">arrow_back</span>} />
      <Title titleText="Offres pour la technologie ''" />

      <div className="flex flex-row justify-center flex-wrap gap-3">
        <OfferCard offer={testOffer} />
        <OfferCard offer={testOffer} />
        <OfferCard offer={testOffer} />

      </div>
    </div>
  );
}
