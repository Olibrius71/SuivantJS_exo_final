"use client";
import Title from "@/components/shared/Title";
import {useTechnologiesStore} from "@/stores/technologiesStore";
import {useEffect} from "react";

export default function TitleWithTechno({ idOfTechnology } : { idOfTechnology: number }) {
  const { technologies } = useTechnologiesStore();
  const currentTechno = technologies.find(tech => tech.id === idOfTechnology);

  return (
    <Title titleText={`Offres pour la technologie '${currentTechno?.name}'`} />
  );
}
