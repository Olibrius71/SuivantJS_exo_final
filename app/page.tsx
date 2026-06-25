import Image from "next/image";
import OfferCard from "@/components/shared/OfferCard";
import {OfferType} from "@/types/offer";
import Button from "@/components/shared/Button";
import ButtonLink from "@/components/shared/ButtonLink";
import Title from "@/components/shared/Title";
import {useOffersStore} from "@/stores/offersStore";
import OffersList from "@/components/shared/OffersList";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full">
        <Image src="/home-img.png" alt="image" width={1600} height={430} />
      </div>

      <div className="flex flex-col px-10 py-4 gap-12">
        <Title titleText="Nos dernières opportunités" />

        <OffersList />

        <div className="flex flex-col items-center">
          <ButtonLink text="Voir toutes les offres" href="/all-offers" />
        </div>
      </div>
    </div>
  );
}
