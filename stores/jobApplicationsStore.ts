import {create} from "zustand";
import {persist} from "zustand/middleware/persist";

interface JobApplicationsStoreType {

}

export const useJobApplicationsStore = create<JobApplicationsStoreType>()(
  persist((set, get) => ({

  }),
  {
    name: "job-applications"
  })
)