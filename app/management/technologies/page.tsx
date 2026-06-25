"use client";
import { useState } from "react";
import { useTechnologiesStore } from "@/stores/technologiesStore";
import { TechnologyType } from "@/types/technology";

export default function TechnologiesManagementPage() {
  const { technologies, addTechnology, removeTechnology } = useTechnologiesStore();
  const [name, setName] = useState("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;
    
    const newTech: TechnologyType = {
      id: Date.now(),
      name,
    };
    
    addTechnology(newTech);
    setName("");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Gérer les Technologies</h1>
      
      <form onSubmit={handleAdd} className="mb-8 p-6 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm bg-white dark:bg-zinc-900">
        <h2 className="text-xl font-semibold mb-4 text-zinc-800 dark:text-zinc-100">Ajouter une Nouvelle Technologie</h2>
        <div className="flex gap-4 items-end">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1 text-zinc-600 dark:text-zinc-400">Nom</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2.5 border border-zinc-300 dark:border-zinc-700 rounded-lg dark:bg-zinc-950 focus:ring-2 focus:ring-blue-500 focus:outline-none transition" 
              placeholder="ex. React"
              required 
            />
          </div>
          <button type="submit" className="bg-blue-600 text-white font-medium px-5 py-2.5 rounded-lg hover:bg-blue-700 transition active:scale-95 h-[46px]">
            Ajouter
          </button>
        </div>
      </form>

      <div>
        <h2 className="text-xl font-semibold mb-4 text-zinc-800 dark:text-zinc-100">Technologies Actuelles</h2>
        {technologies.length === 0 ? (
          <div className="text-center p-8 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-dashed border-zinc-300 dark:border-zinc-700">
            <p className="text-zinc-500 dark:text-zinc-400">Aucune technologie trouvée. Ajoutez-en une ci-dessus !</p>
          </div>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {technologies.map(tech => (
              <li key={tech.id} className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl flex justify-between items-center bg-white dark:bg-zinc-900 shadow-sm transition hover:shadow-md">
                <span className="font-medium text-zinc-800 dark:text-zinc-100">{tech.name}</span>
                <button 
                  onClick={() => removeTechnology(tech.id)}
                  className="bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 dark:bg-red-500/10 dark:text-red-400 dark:hover:bg-red-500/20 px-3 py-1.5 rounded-lg transition text-xs font-medium active:scale-95"
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
