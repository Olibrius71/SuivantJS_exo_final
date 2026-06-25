import Image from "next/image";
import OfferCard from "@/components/shared/OfferCard";
import {OfferType} from "@/types/offer";
import Button from "@/components/shared/Button";
import ButtonLink from "@/components/shared/ButtonLink";
import Title from "@/components/shared/Title";

export default function Home() {
  const testOffer: OfferType = {
    id: 1,
    title: "Tite dslfn slfksf",
    description: "ssfsf",
    publicationDate: new Date(),
  }

  return (
    <div className="w-full flex flex-col">
      <div className="w-full">
        <Image src="/home-img.png" alt="image" width={1600} height={430} />
      </div>

      <div className="flex flex-col px-10 py-4 gap-12">
        <Title titleText="Nos dernières opportunités" />

        <div className="flex flex-row justify-center flex-wrap gap-3">
          <OfferCard offer={testOffer} />
          <OfferCard offer={testOffer} />
          <OfferCard offer={testOffer} />
          <OfferCard offer={testOffer} />
          <OfferCard offer={testOffer} />
          <OfferCard offer={testOffer} />
          <OfferCard offer={testOffer} />
          <OfferCard offer={testOffer} />
        </div>

        <div className="flex flex-col items-center">
          <ButtonLink text="Voir toutes les offres" href="/all-offers" />
        </div>
      </div>
    </div>
  );
}
