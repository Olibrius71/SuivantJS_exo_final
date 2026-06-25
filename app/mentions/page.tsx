import Title from "@/components/shared/Title";

export default function Mentions() {
  return (
    <div className="w-full h-[90vh] flex flex-col items-start justify-evenly px-20 py-8">
      <Title titleText="Mentions légales" />

      <div className="flex flex-col gap-5">
        <h2 className="text-blue-600 text-xl">Notation du projet</h2>
        <p className="text-lg text-black">
          La note sur ce projet devra forcément être entre 18 et 20, dans le cas contraire, des poursuites seront entamées contre vous.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <h2 className="text-blue-600 text-xl">Droits d'auteur</h2>
        <p className="text-lg text-black">
          Une utilisation de ce projet à des fins commerciales est strictement interdite, enfreindre cette règle vous forcerait à me verser des royalites d'une valeur de 95% du chiffre d&apos;affaire réalisé avec ce projet
        </p>
      </div>
    </div>
  );
}
