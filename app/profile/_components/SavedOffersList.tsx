"use client";
import {useSavedOffersStore} from "@/stores/savedOffersStore";
import OfferCard from "@/components/shared/OfferCard";

export default function SavedOffersList() {
  const { savedOffers } = useSavedOffersStore();

  return (
    <div>
      {savedOffers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} />
      ))}
    </div>
  );
}
