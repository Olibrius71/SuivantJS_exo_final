"use client";
import { useOffersStore } from "@/stores/offersStore";
import OfferCard from "@/components/shared/OfferCard";

  export default function OffersListByTechno({ idOfTechnology }: { idOfTechnology: number }) {
  const { offers } = useOffersStore();

  return (
    <div>
      {offers.filter(offer => offer.technologiesInvolved?.some(tech => tech.id === idOfTechnology)).map(offer => (
        <OfferCard key={offer.id} offer={offer} />
      ))}
    </div>
  );
}
