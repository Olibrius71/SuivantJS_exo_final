"use client";
import {useJobApplicationsStore} from "@/stores/jobApplicationsStore";

export default function RecentApplicationsList() {
  const { jobApplications} = useJobApplicationsStore();

  return (
    <div>
      {jobApplications.map((jobApplication) => (
        <div key={jobApplication.id} >d</div>
      ))}
    </div>
  );
}
