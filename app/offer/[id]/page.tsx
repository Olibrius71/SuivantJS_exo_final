import OfferDetailsClient from "./_components/OfferDetailsClient";

export default async function OfferDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <OfferDetailsClient offerId={Number(id)} />;
}
