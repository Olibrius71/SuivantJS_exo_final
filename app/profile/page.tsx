import Title from "@/components/shared/Title";
import {useSavedOffersStore} from "@/stores/savedOffersStore";
import OfferCard from "@/components/shared/OfferCard";
import {useJobApplicationsStore} from "@/stores/jobApplicationsStore";

export default function Profile() {
  const { savedOffers } = useSavedOffersStore();
  const { jobApplications} = useJobApplicationsStore();

  return (
    <div className="flex flex-col gap-16 px-20 py-6">
      <Title titleText="Bienvenue" />

      <div>
        <h2 className="text-2xl text-blue-600">Offres enregistrées</h2>
      </div>

      <div className="flex flex-row justify-center flex-wrap gap-3">
        {savedOffers.map((offer) => (
          <OfferCard key={offer.id} offer={offer} />
        ))}
      </div>

      <div>
        <h2 className="text-2xl text-blue-600">Historique des candidatures</h2>
        {jobApplications.map((jobApplication) => (
          <div key={jobApplication.id} >d</div>
        ))}
      </div>
    </div>
  );
}
