"use client";

import { useState } from "react";
import { useOffersStore } from "@/stores/offersStore";
import { useJobApplicationsStore } from "@/stores/jobApplicationsStore";
import Button from "@/components/shared/Button";
import ButtonLink from "@/components/shared/ButtonLink";
import Title from "@/components/shared/Title";
import Link from "next/link";

export default function OfferDetailsClient({ offerId }: { offerId: number }) {
  const { offers } = useOffersStore();
  const { addJobApplication } = useJobApplicationsStore();
  
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const offer = offers.find((o) => o.id === offerId);

  if (!offer) {
    return (
      <div className="min-h-screen bg-[#f9f9f9] p-8 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Offre introuvable</h1>
        <ButtonLink href="/management/offers" text="< Retour aux offres" />
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message) return;

    const randomId: number = Math.random() * 1000;

    addJobApplication({
      id: randomId,
      offerId: offer.id,
      message,
      dateOfApplication: new Date()
    });
    setSubmitted(true);
  };

  const formattedDate = new Date(offer.publicationDate).toLocaleDateString("fr-FR");

  return (
    <div className="min-h-screen bg-[#f9f9f9] py-12 px-6 sm:px-12 md:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <ButtonLink href="/management/offers" text="< Voir toutes les offres" className="!px-4 !py-2 !text-sm" />
        </div>

        <div className="mb-4">
          <h1 className="text-[40px] text-[#11244d] font-semibold mb-2">{offer.title}</h1>
          <div className="w-full flex h-[2px]">
            <div className="w-1/3 bg-[#3178dc]"></div>
            <div className="w-2/3 bg-gray-300"></div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[#3178dc] text-sm font-medium mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
          <span>{formattedDate}</span>
        </div>

        {offer.technologiesInvolved && offer.technologiesInvolved.length > 0 && (
          <div className="flex gap-3 mb-12">
            {offer.technologiesInvolved.map(tech => (
              <span key={tech.id} className="text-[#3178dc] border border-[#3178dc] px-4 py-1 text-sm font-medium">
                {tech.name}
              </span>
            ))}
          </div>
        )}

        <div className="border-l-[3px] border-l-gray-300 pl-6 mb-16">
          <h3 className="text-[#3178dc] font-bold text-xl mb-4">Description</h3>
          <p className="text-gray-800 text-sm leading-relaxed whitespace-pre-wrap">
            {offer.description}
          </p>
        </div>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-8 rounded flex flex-col items-center">
            <h3 className="text-xl font-bold mb-2">Candidature envoyée !</h3>
            <p>Votre candidature a bien été enregistrée pour cette offre.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col items-end w-full mb-16">
            <textarea
              className="w-full border border-blue-300 p-4 min-h-[180px] outline-none focus:ring-2 focus:ring-[#3178dc] mb-4 bg-white text-gray-800 resize-y"
              placeholder="Postuler à cette offre ..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <Button type="submit" text="Envoyer" className="!px-10 !py-2 !text-base" />
          </form>
        )}

        <Link href="/mentions">
        <div className="text-sm text-[#3178dc] border-b border-[#3178dc] w-fit cursor-pointer pb-0.5 hover:opacity-80 transition">
          Mentions légales
        </div>
        </Link>
      </div>
    </div>
  );
}
