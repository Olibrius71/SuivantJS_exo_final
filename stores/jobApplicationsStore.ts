import {create} from "zustand";
import {persist} from "zustand/middleware";
import {JobApplicationType} from "@/types/job-application";

interface JobApplicationsStoreType {
  jobApplications: JobApplicationType[];
  addJobApplication: (jobApplication: JobApplicationType) => void;
  removeJobApplication: (jobApplication: JobApplicationType) => void;
}

export const useJobApplicationsStore = create<JobApplicationsStoreType>()(
  persist((set, get) => ({
    jobApplications: [],
    addJobApplication: (jobApplication: JobApplicationType) => {},
    removeJobApplication: (jobApplication: JobApplicationType) => {},
  }),
  {
    name: "job-applications"
  })
)