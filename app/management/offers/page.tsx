"use client";
import { useState } from "react";
import { useOffersStore } from "@/stores/offersStore";
import { useTechnologiesStore } from "@/stores/technologiesStore";
import { OfferType } from "@/types/offer";
import {TechnologyType} from "@/types/technology";

export default function OffersManagementPage() {
  const { offers, addOffer, removeOffer } = useOffersStore();
  const { technologies } = useTechnologiesStore();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedTechs, setSelectedTechs] = useState<number[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) return;
    
    const newOffer: OfferType = {
      id: Date.now(),
      title,
      description,
      publicationDate: new Date(),
      technologiesInvolved: technologies.filter(t => selectedTechs.includes(t.id)),
    };
    
    addOffer(newOffer);
    setTitle("");
    setDescription("");
    setSelectedTechs([]);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-black">Gérer les Offres</h1>
      
      <form onSubmit={handleAdd} className="mb-8 p-6 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm bg-white dark:bg-zinc-900">
        <h2 className="text-xl font-semibold mb-4 text-zinc-800 dark:text-zinc-100">Ajouter une Nouvelle Offre</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-zinc-600 dark:text-zinc-400">Titre</label>
          <input 
            type="text" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2.5 border border-zinc-300 dark:border-zinc-700 rounded-lg dark:bg-zinc-950 focus:ring-2 focus:ring-blue-500 focus:outline-none transition" 
            placeholder="ex. Développeur Frontend"
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-zinc-600 dark:text-zinc-400">Description</label>
          <textarea 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2.5 border border-zinc-300 dark:border-zinc-700 rounded-lg dark:bg-zinc-950 h-32 focus:ring-2 focus:ring-blue-500 focus:outline-none transition" 
            placeholder="Décrivez le rôle..."
            required 
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2 text-zinc-600 dark:text-zinc-400">Technologies</label>
          {technologies.length === 0 ? (
            <p className="text-sm text-zinc-500">Aucune technologie disponible. Ajoutez-en dans la page de gestion des technologies.</p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {technologies.map(tech => (
                <label key={tech.id} className="flex items-center gap-2 px-3 py-2 border border-zinc-200 dark:border-zinc-700 rounded-lg cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800 transition select-none">
                  <input 
                    type="checkbox" 
                    checked={selectedTechs.includes(tech.id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedTechs(prev => [...prev, tech.id]);
                      } else {
                        setSelectedTechs(prev => prev.filter(id => id !== tech.id));
                      }
                    }}
                    className="rounded text-blue-600 focus:ring-blue-500 bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 w-4 h-4 cursor-pointer"
                  />
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{tech.name}</span>
                </label>
              ))}
            </div>
          )}
        </div>
        <button type="submit" className="bg-blue-600 text-white font-medium px-5 py-2.5 rounded-lg hover:bg-blue-700 transition active:scale-95">
          Ajouter l'Offre
        </button>
      </form>

      <div>
        <h2 className="text-xl font-semibold mb-4   text-black">Offres Actuelles</h2>
        {offers.length === 0 ? (
          <div className="text-center p-8 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-dashed border-zinc-300 dark:border-zinc-700">
            <p className="text-zinc-500 dark:text-zinc-400">Aucune offre trouvée. Ajoutez-en une ci-dessus !</p>
          </div>
        ) : (
          <ul className="space-y-4">
            {offers.map(offer => (
              <li key={offer.id} className="p-5 border border-zinc-200 dark:border-zinc-800 rounded-xl flex flex-col sm:flex-row justify-between sm:items-start gap-4 bg-white dark:bg-zinc-900 shadow-sm transition hover:shadow-md">
                <div>
                  <h3 className="font-bold text-lg text-zinc-800 dark:text-zinc-100">{offer.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-2 line-clamp-2">{offer.description}</p>
                  {offer.technologiesInvolved && offer.technologiesInvolved.length > 0 && (
                    <div className="flex gap-2 mt-3 flex-wrap">
                      {offer.technologiesInvolved.map((tech: TechnologyType) => (
                        <span key={tech.id} className="text-xs font-medium px-2 py-1 bg-blue-50 text-blue-600 border border-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800/50 rounded-md">
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <button 
                  onClick={() => removeOffer(offer.id)}
                  className="bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 dark:bg-red-500/10 dark:text-red-400 dark:hover:bg-red-500/20 font-medium px-4 py-2 rounded-lg transition text-sm whitespace-nowrap active:scale-95"
                >
                  Supprimer
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
