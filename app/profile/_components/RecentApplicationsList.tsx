"use client";
import { useJobApplicationsStore } from "@/stores/jobApplicationsStore";
import { useOffersStore } from "@/stores/offersStore";

export default function RecentApplicationsList() {
  const { jobApplications } = useJobApplicationsStore();
  const { offers } = useOffersStore();

  if (jobApplications.length === 0) {
    return <p className="text-gray-500 italic mt-4">Aucune candidature pour le moment.</p>;
  }

  return (
    <div className="flex flex-col gap-8 mt-6">
      {jobApplications.map((jobApplication) => {
        const offer = offers.find((o) => o.id === jobApplication.offerId);
        if (!offer) return null;

        const formattedDate = new Date(jobApplication.dateOfApplication).toLocaleDateString("fr-FR");
        const techs = offer.technologiesInvolved?.map((t) => t.name).join(", ");

        return (
          <div key={jobApplication.id} className="border-b border-[#7daaf0] pb-6 flex flex-col gap-2">
            
            <div className="flex items-center gap-2 text-[#3178dc] text-sm font-semibold">
              <span className="material-symbols-outlined">code</span>
              <span>{formattedDate}</span>
            </div>
            
            <h3 className="text-2xl font-bold text-black">{offer.title}</h3>
            
            {techs && (
              <div className="flex items-center gap-2 text-black text-sm font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                <span>{techs}</span>
              </div>
            )}
            
            <p className="text-[#3178dc] text-sm leading-relaxed mt-2 text-justify">
              {jobApplication.message || offer.description}
            </p>

          </div>
        );
      })}
    </div>
  );
}
