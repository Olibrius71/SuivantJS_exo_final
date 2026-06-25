import Title from "@/components/shared/Title";
import {useSavedOffersStore} from "@/stores/savedOffersStore";
import OfferCard from "@/components/shared/OfferCard";
import {useJobApplicationsStore} from "@/stores/jobApplicationsStore";
import SavedOffersList from "@/app/profile/_components/SavedOffersList";
import RecentApplicationsList from "@/app/profile/_components/RecentApplicationsList";

export default function Profile() {

  return (
    <div className="flex flex-col gap-16 px-20 py-6">
      <Title titleText="Bienvenue" />

      <div>
        <h2 className="text-2xl text-blue-600">Offres enregistrées</h2>
      </div>

      <div className="flex flex-row justify-center flex-wrap gap-3">
        <SavedOffersList />
      </div>

      <div>
        <h2 className="text-2xl text-blue-600">Historique des candidatures</h2>
        <RecentApplicationsList />
      </div>
    </div>
  );
}
