'use client';

export default function ActualitesPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-blue-50 to-sky-100 py-20 text-center md:py-32">
        <div className="container mx-auto max-w-4xl px-6">
          <h1 className="mb-6 text-4xl font-extrabold text-gray-900 md:text-5xl">
            Actualités ImmoTopia
          </h1>
          <p className="text-lg text-gray-600 md:text-xl">
            Suivez les dernières nouveautés et mises à jour d'ImmoTopia.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-12 text-center">
            <p className="text-lg text-gray-600">
              Actualités à venir prochainement...
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
