export function Intro() {
  return (
    <section className="px-4 py-8 md:py-12 max-w-4xl mx-auto">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          Media Chrétien
        </h1>

        <div className="prose prose-lg md:prose-xl dark:prose-invert mx-auto text-left md:text-center space-y-4">
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 italic leading-relaxed">
            « Comme les prophètes de la Bible, en avril 1993, moi <strong>Kacou Philippe</strong>,
            un homme qui n'avait jamais été dans une église, je reçois en vision la visitation
            d'un Ange qui me commissionne pour un Message destiné à toute la terre, en accomplissement
            de <strong>Matthieu 25:6</strong> et <strong>Apocalypse 12:14</strong>. »
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            Le blog <strong>Media Chrétien</strong> a pour but de proposer des <strong>extraits courts,
            clairs et méditatifs</strong> du Message du prophète Kacou Philippe, afin de faciliter
            la lecture, la réflexion et le partage du Message.
          </p>
          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mt-6">
            👉 Le site complet du Message et des enseignements est disponible sur :{" "}
            <a
              href="https://www.philippekacou.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              philippekacou.org
            </a>
          </p>
        </div>

        {/* CTA WhatsApp */}
        <div className="mt-10">
          <a
            href="https://wa.me/message/PE63FQO747POH1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>Discuter avec nous sur WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
