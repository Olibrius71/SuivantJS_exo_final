"use client";
import OfferCard from "@/components/shared/OfferCard";
import {useOffersStore} from "@/stores/offersStore";
import Button from "@/components/shared/Button";
import {useEffect, useState} from "react";
import {OfferType} from "@/types/offer";

export default function OffersList() {
  const {offers} = useOffersStore();
  const [offersToDisplay, setOffersToDisplay] = useState<OfferType[]>([]);
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(3);

  useEffect(() => {
    setOffersToDisplay(offers.slice(minIndex, maxIndex));
  }, [offers, minIndex, maxIndex]);

  const goToPreviousPage = () => {
    if (minIndex > 0) {
      setMinIndex(minIndex - 3);
      setMaxIndex(maxIndex - 3);
    }
  }

  const goToNextPage = () => {
    setMinIndex(minIndex + 3);
    setMaxIndex(maxIndex + 3);
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row justify-center flex-wrap gap-3">
        {offersToDisplay.map((offer) => (
          <OfferCard key={offer.id} offer={offer} />
        ))}
      </div>
      
      <div className="flex flex-row justify-center gap-6">
        <Button text="" iconLeft={<span className="material-symbols-outlined">arrow_left</span>} onClick={goToPreviousPage}/>
        <span className="text-xl text-black">De la {minIndex + 1}e offre à la {maxIndex}e</span>
        <Button text="" iconLeft={<span className="material-symbols-outlined">arrow_right</span>} onClick={goToNextPage} />
      </div>
      
    </div>
  );
}
