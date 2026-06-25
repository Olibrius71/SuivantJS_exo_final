import {create} from "zustand";
import {persist} from "zustand/middleware";
import {OfferType} from "@/types/offer";

interface SavedOffersStoreType {
  savedOffers: OfferType[];
  addOffer: (offer: OfferType) => void;
  removeOffer: (offer: OfferType) => void;
  isSaved: (offer: OfferType) => boolean;
}

export const useSavedOffersStore = create<SavedOffersStoreType>()(
  persist((set, get) => ({
      savedOffers: [],
      addOffer: (offer: OfferType) => set({ savedOffers: [...get().savedOffers, offer] }),
      removeOffer: (offer: OfferType) => set({ savedOffers: get().savedOffers.filter((o) => o.id !== offer.id) }),
      isSaved: (offer: OfferType) => get().savedOffers.some((o) => o.id === offer.id)
    }),
    {
      name: "saved-offers"
    })
)