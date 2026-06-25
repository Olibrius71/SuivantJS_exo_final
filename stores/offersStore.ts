import { create } from "zustand";
import { persist } from "zustand/middleware";
import { OfferType } from "@/types/offer";

interface OffersStoreType {
  offers: OfferType[];
  addOffer: (offer: OfferType) => void;
  removeOffer: (id: number) => void;
}

export const useOffersStore = create<OffersStoreType>()(
  persist(
    (set, get) => ({
      offers: [], // Initialize with existing list
      addOffer: (offer: OfferType) => set({ offers: [...get().offers, offer] }),
      removeOffer: (id: number) => set({ offers: get().offers.filter((o) => o.id !== id) }),
    }),
    {
      name: "management-offers"
    }
  )
);
