export interface JobApplicationType {   // Application veut dire candidature à une offre en anglais
  id: number,
  offerId: number,
  message?: string,
  dateOfApplication: Date
}
