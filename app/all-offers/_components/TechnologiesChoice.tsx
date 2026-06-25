"use client";

import {useTechnologiesStore} from "@/stores/technologiesStore";
import ButtonLink from "@/components/shared/ButtonLink";

export default function TechnologiesChoice() {
  const { technologies } = useTechnologiesStore();

  return (
    <div className="my-4 flex flex-row gap-4">
      {technologies.map((technology) => (
        <ButtonLink key={technology.id} text={technology.name} href={`/offers-by-techno/${technology.id}`} />
      ))}
    </div>
  );
}
