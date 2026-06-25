"use client";
import {OfferType} from "@/types/offer";
import OfferCard from "@/components/shared/OfferCard";
import {useOffersStore} from "@/stores/offersStore";

export default function OffersList() {
  const {offers} = useOffersStore();

  return (
    <div className="flex flex-row justify-center flex-wrap gap-3">
      {offers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} />
      ))}
    </div>
  );
}
