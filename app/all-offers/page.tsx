import Button from "@/components/shared/Button";
import clsx from "clsx";
import OfferCard from "@/components/shared/OfferCard";
import {OfferType} from "@/types/offer";
import ButtonLink from "@/components/shared/ButtonLink";

export default function OffersList() {
  const testOffer: OfferType = {
    id: 1,
    title: "Tite dslfn slfksf",
    description: "ssfsf",
    publicationDate: new Date(),
  }

  return (
    <div className="w-full flex flex-col px-20 py-6">
      <div className="flex flex-col w-full">
        <div className="w-full flex flex-row justify-between">
          <h2 className="text-3xl text-black border-b-6 border-b-blue-300 w-fit">Offres d'emploi</h2>
          <span className="text-black text-xl">15 offres</span>
        </div>
        <div className="my-4 flex flex-row gap-4">
          <ButtonLink text="Techno 1" href="/offers-by-techno/1" />
          <ButtonLink text="Techno 2" href="/offers-by-techno/2" />
        </div>
      </div>

      <div className={clsx(
        "mt-24 w-full " +
        "flex flex-row justify-center flex-wrap gap-3"
      )}>
        <OfferCard offer={testOffer} />
        <OfferCard offer={testOffer} />
        <OfferCard offer={testOffer} />
        <OfferCard offer={testOffer} />
        <OfferCard offer={testOffer} />
        <OfferCard offer={testOffer} />
        <OfferCard offer={testOffer} />
        <OfferCard offer={testOffer} />
      </div>
    </div>
  );
}
