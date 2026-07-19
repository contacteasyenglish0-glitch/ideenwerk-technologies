import Link from 'next/link';

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 md:p-12">
        
        {/* En-tête */}
        <div className="mb-8 border-b border-gray-200 pb-6">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mb-4 transition-colors"
          >
            ← Retour à l'accueil
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Mentions Légales</h1>
          <p className="mt-2 text-gray-600">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
        </div>

        {/* Contenu */}
        <div className="space-y-8 text-gray-700 leading-relaxed">
          
          {/* 1. Éditeur */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Éditeur du site</h2>
            <p>
              Le site <strong>ideenwerk-technologies.vercel.app</strong> est édité par :
            </p>
            <ul className="mt-3 space-y-2 bg-gray-50 p-4 rounded-lg border border-gray-100">
              <li><strong>Nom de l'activité :</strong> Ideenwerk Technologies</li>
              <li><strong>Statut :</strong> Entreprise individuelle / Projet en cours d'immatriculation</li>
              <li><strong>Adresse :</strong> Boulevard du 30 Août, Lomé, Togo</li>
              <li><strong>Téléphone :</strong> +228 96 31 50 29</li>
              <li><strong>Email :</strong> contact@ideenwerk-technologies.tech</li>
              <li><strong>Directeur de la publication :</strong> [Godfriend Koffi Agbevivi]</li>
            </ul>
          </section>

          {/* 2. Hébergeur */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Hébergement</h2>
            <p>Le site est hébergé par :</p>
            <ul className="mt-3 space-y-2 bg-gray-50 p-4 rounded-lg border border-gray-100">
              <li><strong>Société :</strong> Vercel Inc.</li>
              <li><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</li>
              <li><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">vercel.com</a></li>
            </ul>
          </section>

          {/* 3. Propriété intellectuelle */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Propriété intellectuelle</h2>
            <p>
              L'ensemble de ce site relève de la législation togolaise et internationale sur le droit d'auteur et la propriété intellectuelle. 
              Tous les droits de reproduction sont réservés. La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
            </p>
          </section>

          {/* 4. Protection des données (APDP Togo) */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Protection des données personnelles</h2>
            <p>
              Conformément à la loi n° 2019-014 du 28 octobre 2019 relative à la protection des données à caractère personnel au Togo, nous vous informons que les données collectées via notre formulaire de contact sont uniquement destinées à traiter votre demande et ne seront en aucun cas cédées à des tiers.
            </p>
            <p className="mt-2">
              Vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour l'exercer, adressez votre demande à l'adresse email indiquée ci-dessus.
            </p>
          </section>

          {/* 5. Limitation de responsabilité */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Limitation de responsabilité</h2>
            <p>
              Ideenwerk Technologies s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, nous ne pouvons garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition. L'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.
            </p>
          </section>

        </div>

        {/* Pied de page */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Ideenwerk Technologies. Tous droits réservés.</p>
        </div>
      </div>
    </div>
  );
}