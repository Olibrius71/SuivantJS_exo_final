export interface OfferType {
  id: number,
  title: string,
  description: string,
  publicationDate: Date,
  technologiesInvolved?: Technology[]
}