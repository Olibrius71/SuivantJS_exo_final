"use client";

import {useOffersStore} from "@/stores/offersStore";

export default function TitleWithOffersCount() {
  const { offers } = useOffersStore();

  return (
    <div className="w-full flex flex-row justify-between">
      <h2 className="text-3xl text-black border-b-6 border-b-blue-300 w-fit">Offres d'emploi</h2>
      <span className="text-black text-xl">{offers.length} offres</span>
    </div>
  );
}
