import Button from "@/components/shared/Button";
import clsx from "clsx";
import OfferCard from "@/components/shared/OfferCard";
import {OfferType} from "@/types/offer";
import ButtonLink from "@/components/shared/ButtonLink";
import OffersList from "@/components/shared/OffersList";
import {useOffersStore} from "@/stores/offersStore";
import TechnologiesChoice from "@/app/all-offers/_components/TechnologiesChoice";
import TitleWithOffersCount from "@/app/all-offers/_components/TitleWithOffersCount";

export default function AllOffersPage() {
  return (
    <div className="w-full flex flex-col px-20 py-6">
      <div className="flex flex-col w-full">
        <TitleWithOffersCount />
        
        <TechnologiesChoice />
      </div>

      <div className="mt-24 w-full">
        <OffersList />
      </div>

    </div>
  );
}
