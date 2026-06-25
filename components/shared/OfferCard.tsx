"use client";
import clsx from "clsx";
import {OfferType} from "@/types/offer";
import {useSavedOffersStore} from "@/stores/savedOffersStore";

export default function OfferCard({offer}: {offer: OfferType}) {
  const { addOffer, removeOffer, isSaved } = useSavedOffersStore()

  return (
    <div className={clsx(
      "w-96 h-60 bg-black border-4 border-red-400"
    )}>
      <div className="w-full h-full flex flex-col items-start justify-evenly py-4 px-5">
        <div className="w-full flex flex-row justify-between">
          <span className="text-xl">{offer.title}</span>
          {isSaved(offer) ? (
            <span className="material-symbols-outlined cursor-pointer" onClick={() => removeOffer(offer)}>keep_off</span>
          ) : (
            <span className="material-symbols-outlined cursor-pointer" onClick={() => addOffer(offer)}>keep</span>
          )}
        </div>

        <div>
          <span className="material-symbols-outlined">calendar_month</span>
          <span className="ms-2">{offer.publicationDate.toDateString()}</span>
        </div>

        <div>
          <span className="material-symbols-outlined">code</span>
          <span className="ms-2">{offer.technologiesInvolved?.map((t) => t.name).join(", ")}</span>
        </div>

        <div>
          <p className="text-lg">{offer.description}</p>
        </div>
      </div>
    </div>
  );
}
