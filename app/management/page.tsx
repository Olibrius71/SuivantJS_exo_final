import Link from "next/link";

export default function ManagementDashboardPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-black">Tableau de bord de gestion</h1>
      
      <div className="grid sm:grid-cols-2 gap-6">
        <Link 
          href="/management/offers" 
          className="group p-6 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm bg-white dark:bg-zinc-900 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all flex flex-col"
        >
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Gérer les Offres</h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm flex-1">
            Créer de nouvelles offres d'emploi, mettre à jour les descriptions, et supprimer les postes obsolètes.
          </p>
        </Link>

        <Link 
          href="/management/technologies" 
          className="group p-6 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm bg-white dark:bg-zinc-900 hover:blue-500 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all flex flex-col"
        >
          <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
          </div>
          <h2 className="text-xl font-semibold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Gérer les Technologies</h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm flex-1">
            Ajouter ou supprimer des compétences et technologies pouvant être associées aux offres d'emploi.
          </p>
        </Link>
      </div>
    </div>
  );
}
