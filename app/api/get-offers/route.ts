import { NextResponse } from "next/server";
import {OfferType} from "@/types/offer";

export function GET() {
  /* il faudrait ici aller récupérer les offres de prismic, moi ici je suis coté serveur, ça n'a pas de sens d'invoquer un composant client ici pour utiliser le store */
  const offersToReturn: OfferType[] = [
    {
      id: 1,
      title: "Tite fzezfz a",
      description: "ESTBZRZRBZE ZRVZERB ztbzrtbz z et bztbz tbz tbztb zrtb ztb z t bzt ",
      publicationDate: new Date(),
    },
    {
      id: 2,
      title: "Tite aera aeaa",
      description: "ESTBZRZRBZE ZRVZERB ztbzrtbz z et bztbz tbz tbztb zrtb ztb z t bzt ",
      publicationDate: new Date(),
    },
    {
      id: 3,
      title: "Tite sdfbbbbbbbbbbb",
      description: "ESTBZRZRBZE ZRVZERB ztbzrtbz z et bztbz tbz tbztb zrtb ztb z t bzt ",
      publicationDate: new Date(),
    },
  ]
  return NextResponse.json({message: "Offres", data: offersToReturn});
}