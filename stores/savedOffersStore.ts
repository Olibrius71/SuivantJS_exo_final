import {create} from "zustand";
import {persist} from "zustand/middleware/persist";

interface SavedOffersStoreType {

}

const useSavedOffersStoreType = create<SavedOffersStoreType>()(
  persist((set, get) => ({

    }),
    {
      name: "saved-offers"
    })
)