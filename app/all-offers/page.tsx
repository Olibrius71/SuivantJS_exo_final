import Button from "@/components/shared/Button";
import clsx from "clsx";
import OfferCard from "@/components/shared/OfferCard";
import {OfferType} from "@/types/offer";
import ButtonLink from "@/components/shared/ButtonLink";
import OffersList from "@/components/shared/OffersList";
import {useOffersStore} from "@/stores/offersStore";
import TechnologiesChoice from "@/app/all-offers/_components/TechnologiesChoice";

export default function AllOffersPage() {
  return (
    <div className="w-full flex flex-col px-20 py-6">
      <div className="flex flex-col w-full">
        <div className="w-full flex flex-row justify-between">
          <h2 className="text-3xl text-black border-b-6 border-b-blue-300 w-fit">Offres d'emploi</h2>
          <span className="text-black text-xl">15 offres</span>
        </div>

        <TechnologiesChoice />
      </div>

      <div className="mt-24 w-full">
        <OffersList />
      </div>

    </div>
  );
}
