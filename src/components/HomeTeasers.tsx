import { Link } from "react-router-dom";
import { ArrowRight, Users, Mail, Shield, HeartHandshake } from "lucide-react";

const teasers = [
  {
    to: "/concept",
    icon: Users,
    label: "Communauté",
    title: "Venez seul. Vivez-le ensemble.",
    body: "En solo, en couple ou entre amis, tout le monde rejoint la même aventure. Le groupe se retrouve directement dans la destination : African Tour s'occupe de créer les conditions pour que chacun trouve naturellement sa place.",
    cta: "Découvrir le concept",
  },
  {
    to: "/contact",
    icon: Mail,
    label: "Contact",
    title: "Une question ? Parlons-en",
    body: "Remplissez notre formulaire et notre équipe vous recontactera sous 24h avec tous les détails pratiques pour que vous partiez l'esprit serein.",
    cta: "Nous contacter",
  },
];

const trustBadges = [
  { icon: Shield, text: "Voyages sécurisés" },
  { icon: Users, text: "Solo, couple ou amis" },
  { icon: HeartHandshake, text: "Solidaires & inclusifs" },
];

const HomeTeasers = () => (
  <section className="py-20">
    <div className="container mx-auto max-w-[1280px] px-6">
      {/* Trust badges strip */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
        {trustBadges.map(({ icon: Icon, text }) => (
          <div
            key={text}
            className="flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm shadow-sm rounded-full text-ink font-dm-sans font-medium text-sm"
          >
            <Icon size={16} className="text-citra-orange" />
            <span>{text}</span>
          </div>
        ))}
      </div>

      {/* Teaser cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {teasers.map(({ to, icon: Icon, label, title, body, cta }) => (
          <Link
            key={to}
            to={to}
            className="group flex flex-col p-8 md:p-12 bg-white/80 backdrop-blur-sm rounded-[32px] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Icon bubble */}
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-hazard-yellow shadow-md mb-6">
              <Icon size={24} className="text-ink" />
            </div>

            <p className="text-xs uppercase tracking-wider font-bold font-dm-sans text-citra-orange mb-3">
              {label}
            </p>

 <h3 className="font-pp-neue-corp-compact font-semibold tracking-tight text-ink text-3xl md:text-5xl mb-4 group-hover:text-citra-orange transition-colors">
              {title}
            </h3>

            <p className="text-base font-dm-sans font-medium text-ink/80 leading-relaxed mb-8 flex-1">
              {body}
            </p>

            <span className="inline-flex items-center gap-2 text-base font-dm-sans font-medium text-citra-orange group-hover:gap-4 transition-all">
              {cta}
              <ArrowRight size={18} />
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default HomeTeasers;
