import { Compass, Users, HeartHandshake, Wind, Handshake } from "lucide-react";

const piliers = [
  {
    icon: Compass,
    title: "Découvrir",
    desc: "Explorer les paysages, les villes et les cultures africaines, loin des sentiers battus.",
  },
  {
    icon: Users,
    title: "Rencontrer",
    desc: "Faire de nouvelles rencontres, au sein du groupe comme sur place.",
  },
  {
    icon: HeartHandshake,
    title: "Partager",
    desc: "Vivre des moments authentiques avec les populations locales.",
  },
  {
    icon: Wind,
    title: "Déconnecter",
    desc: "Sortir de la routine, profiter de l'instant et recharger les batteries.",
  },
  {
    icon: Handshake,
    title: "Contribuer",
    desc: "Participer à une dimension solidaire construite avec des acteurs locaux.",
  },
];

const Piliers = () => (
  <section className="py-20">
    <div className="container mx-auto max-w-[1280px] px-6">
      <div className="text-center mb-16">
        <p className="text-sm font-dm-sans uppercase tracking-widest font-bold text-citra-orange mb-3">
          NOTRE PHILOSOPHIE
        </p>
        <h2 className="font-pp-neue-corp-compact font-semibold tracking-tight text-ink text-4xl md:text-6xl mb-4">
          Plus qu'un voyage,<br className="hidden md:block" /> une aventure humaine
        </h2>
        <p className="max-w-xl mx-auto text-lg font-dm-sans font-medium text-ink/70 leading-relaxed">
          Vous venez peut-être seul. Vous repartirez avec une histoire partagée.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {piliers.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group bg-white/70 backdrop-blur-sm rounded-[28px] p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-ink/5"
          >
            <div className="w-12 h-12 rounded-full bg-hazard-yellow flex items-center justify-center mb-5 text-citra-orange group-hover:bg-citra-orange group-hover:text-white transition-colors duration-300">
              <Icon size={22} />
            </div>
            <h3 className="font-pp-neue-corp-compact text-2xl font-semibold text-ink tracking-tight mb-2">
              {title}
            </h3>
            <p className="font-dm-sans text-sm text-ink/70 leading-relaxed">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Piliers;
