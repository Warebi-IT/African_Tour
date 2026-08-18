import { Compass, Users, Handshake, Globe, ArrowRight, Sparkles, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedImpact from "./AnimatedImpact";

const steps = [
  {
    icon: Globe,
    title: "Choisissez votre destination",
    desc: "Sénégal, Maroc et bientôt d'autres pays africains. Consultez le programme détaillé de chaque voyage.",
  },
  {
    icon: Compass,
    title: "Package tout compris",
    desc: "Logement, transport, activités et repas inclus selon le programme. Seul le billet d'avion reste à votre charge.",
  },
  {
    icon: Users,
    title: "Rejoignez le groupe",
    desc: "Seul, en couple ou entre amis : tout le monde se retrouve dans la destination et l'aventure commence ensemble.",
  },
  {
    icon: Handshake,
    title: "Impact solidaire",
    desc: "Un moment du séjour est dédié à une rencontre ou une action avec des acteurs locaux. Voyager avec du sens.",
  },
];

const AboutConcept = () => {
  return (
    <section id="concept" className="w-full overflow-hidden">

      {/* 1. HERO */}
      <div className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-6">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-pastel-peach/10 to-white"></div>
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-pastel-rose/30 rounded-full blur-[120px] animate-float-slow opacity-60"></div>
          <div className="absolute top-40 -left-20 w-[500px] h-[500px] bg-pastel-lime/20 rounded-full blur-[100px] animate-float-slow opacity-60" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="container mx-auto max-w-[1280px] relative z-10 text-center">
          <p className="font-dm-sans text-sm uppercase tracking-widest text-citra-orange font-bold mb-6">
            [ NOTRE RAISON D'ÊTRE ]
          </p>
          <h1 className="font-pp-neue-corp-compact text-6xl md:text-8xl lg:text-[7rem] font-semibold text-ink tracking-tight mb-8 leading-[0.95]">
            Voyager <br/>
            <span className="italic font-medium text-citra-orange">autrement</span>
          </h1>
          <p className="max-w-2xl mx-auto font-dm-sans text-xl md:text-2xl text-ink/70 font-medium leading-relaxed">
            African Tour imagine des voyages de groupe pour découvrir l'Afrique autrement :
            explorer, rencontrer, partager, déconnecter et vivre des expériences qui ont du sens.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-[1280px] px-6">

        {/* 2. LE MANIFESTE EN BENTO GRID */}
        <div className="grid md:grid-cols-12 gap-6 mb-32 max-w-[1200px] mx-auto">
          {/* Main Statement */}
          <div className="md:col-span-8 bg-pastel-sand/40 rounded-[40px] p-10 md:p-14 relative overflow-hidden group border border-white/50 shadow-sm">
            <div className="absolute -top-10 -right-10 p-8 text-white group-hover:scale-110 transition-transform duration-700 opacity-80">
               <Globe size={250} strokeWidth={0.5} />
            </div>
            <div className="relative z-10">
              <h3 className="font-pp-neue-corp-compact text-4xl md:text-5xl font-semibold text-ink mb-6 tracking-tight">
                Plus qu'un voyage,<br/>une <span className="italic text-citra-orange">aventure humaine</span>.
              </h3>
              <p className="font-dm-sans text-lg md:text-xl text-ink/80 leading-relaxed max-w-xl font-medium">
                African Tour n'est pas une agence ordinaire. Nous ne vendons pas seulement un séjour :
                nous organisons des voyages en Afrique pensés pour créer des liens, des rencontres
                et des souvenirs qui durent bien après le retour.
              </p>
            </div>
          </div>

          {/* Stat Box */}
          <div className="md:col-span-4 bg-citra-orange text-white rounded-[40px] p-10 flex flex-col justify-center items-center text-center shadow-lg shadow-citra-orange/20 hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden">
            <p className="font-pp-neue-corp-compact text-7xl font-semibold mb-2 relative z-10">500+</p>
            <p className="font-dm-sans text-sm uppercase tracking-widest font-bold opacity-90 relative z-10">Voyageurs embarqués</p>
          </div>

          {/* Quote Box */}
          <div className="md:col-span-5 bg-ink text-white rounded-[40px] p-10 md:p-12 relative flex flex-col justify-between overflow-hidden group shadow-xl">
             <div className="absolute -bottom-10 -right-10 text-white/5 group-hover:-translate-y-4 group-hover:-translate-x-4 transition-transform duration-700">
                <HeartHandshake size={200} />
             </div>
             <div className="text-citra-orange text-7xl font-serif leading-none mb-4 absolute top-8 left-8 opacity-40">"</div>
             <div className="relative z-10 mt-12">
               <p className="font-dm-sans text-xl md:text-2xl font-medium leading-relaxed mb-8">
                  Une immersion authentique dans la culture, avec une empreinte positive et durable sur les communautés qui nous accueillent.
               </p>
               <span className="inline-block bg-white/10 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                 Ouvert à toutes et tous
               </span>
             </div>
          </div>

          {/* Features List */}
          <div className="md:col-span-7 bg-white rounded-[40px] p-10 md:p-12 flex flex-col justify-center relative overflow-hidden border border-ink/5 shadow-sm hover:shadow-md transition-shadow duration-300">
             <h3 className="font-pp-neue-corp-compact text-3xl font-semibold text-ink mb-8 tracking-tight">L'expérience African Tour</h3>
             <ul className="space-y-5">
               {[
                 "Des voyages en groupe, seul, en couple ou entre amis",
                 "Un package logistique tout inclus (hors vol)",
                 "Une immersion authentique et éthique",
                 "Des actions de solidarité locale, quand le programme le permet"
               ].map((item, i) => (
                 <li key={i} className="flex items-center gap-5 font-dm-sans text-lg text-ink/80 font-medium group">
                   <div className="w-10 h-10 rounded-full bg-pastel-sage/30 flex flex-shrink-0 items-center justify-center text-ink group-hover:bg-citra-orange group-hover:text-white transition-colors duration-300">
                     <Sparkles size={16} />
                   </div>
                   {item}
                 </li>
               ))}
             </ul>
          </div>
        </div>

        {/* 3. COMMENT ÇA FONCTIONNE */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <p className="font-dm-sans text-sm uppercase tracking-wider text-citra-orange font-bold mb-3">
              MÉTHODOLOGIE
            </p>
            <h2 className="font-pp-neue-corp-compact text-5xl md:text-6xl font-semibold text-ink tracking-tight mb-4">
              Comment ça fonctionne ?
            </h2>
            <p className="max-w-xl mx-auto text-lg font-dm-sans font-medium text-ink/70">
              Un parcours simplifié pour vous donner la confiance d'oser l'inconnu en toute sérénité.
            </p>
          </div>

          <div className="max-w-[1000px] mx-auto grid sm:grid-cols-2 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-ink/5 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-pastel-sage/30 rounded-full blur-[40px] hover:bg-pastel-peach/40 transition-all duration-700 pointer-events-none"></div>
                <div className="w-16 h-16 rounded-2xl bg-pastel-sand text-citra-orange flex items-center justify-center mb-6 shadow-sm relative z-10">
                  <s.icon size={28} />
                </div>
                <span className="font-dm-sans text-xs font-bold text-citra-orange uppercase tracking-wider mb-2 block relative z-10">
                  Étape 0{i + 1}
                </span>
                <h3 className="font-pp-neue-corp-compact text-2xl font-semibold text-ink tracking-tight mb-4 relative z-10">
                  {s.title}
                </h3>
                <p className="font-dm-sans text-ink/70 leading-relaxed relative z-10">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 4. SECTION SOLIDAIRE */}
      <div className="relative w-full py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4A301F] to-[#21150F] z-0"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[#B95F3D] rounded-full mix-blend-overlay filter blur-[120px] opacity-40 animate-float-slow"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[80%] bg-[#B4864F] rounded-full mix-blend-overlay filter blur-[150px] opacity-40 animate-float-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[30%] left-[40%] w-[50%] h-[50%] bg-[#E6D5BB] rounded-full mix-blend-overlay filter blur-[100px] opacity-20 animate-float-slow" style={{ animationDelay: '4s' }}></div>

        <div className="absolute inset-0 opacity-70 pointer-events-none z-0">
           <AnimatedImpact />
        </div>

        <div className="container mx-auto max-w-[1280px] px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-10 bg-gradient-to-r from-espresso/40 to-transparent blur-2xl -z-10 rounded-full"></div>

              <p className="font-dm-sans text-sm uppercase tracking-widest text-[#E6D5BB] font-black mb-4 flex items-center gap-2 drop-shadow-md">
                <HeartHandshake size={16} />
                UN PILIER DE L'EXPÉRIENCE
              </p>
              <h2 className="font-pp-neue-corp-compact text-5xl md:text-7xl font-semibold text-white tracking-tight mb-8 leading-[0.95] drop-shadow-xl">
                Voyager, c'est<br/><span className="italic font-medium">aussi partager</span>.
              </h2>
              <p className="font-dm-sans text-xl md:text-2xl text-white leading-relaxed mb-6 font-medium drop-shadow-lg">
                Chez African Tour, nous voulons que nos voyages créent des rencontres qui ont du sens.
              </p>
              <p className="font-dm-sans text-lg text-white/85 leading-relaxed mb-10 drop-shadow-lg">
                Lorsque le programme le permet, nous collaborons avec des associations et des acteurs
                locaux pour organiser des actions solidaires et des moments de partage respectueux des
                réalités locales. Nous ne venons pas simplement observer : nous rencontrons, nous échangeons,
                nous partageons.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-3 bg-white text-citra-orange px-8 py-4 rounded-full font-dm-sans font-black hover:bg-ink hover:text-white transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-xl hover:-translate-y-1">
                Découvrir notre engagement <ArrowRight size={20} />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 lg:ml-10">
              <div className="bg-white/10 backdrop-blur-xl rounded-[32px] p-8 border border-white/30 flex flex-col items-center text-center hover:bg-white/20 transition-all duration-300 shadow-2xl shadow-espresso/10 group hover:-translate-y-2">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6 border border-white/20 shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <Handshake size={32} className="text-white drop-shadow-md" />
                </div>
                <h4 className="font-dm-sans font-bold text-white text-xl mb-3 drop-shadow-md">Rencontre &amp; échange</h4>
                <p className="font-dm-sans text-base text-white/90 font-medium leading-relaxed drop-shadow-sm">
                  Des moments de partage construits avec des associations et acteurs locaux, dans le respect et la réciprocité.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-[32px] p-8 border border-white/30 flex flex-col items-center text-center sm:translate-y-12 hover:bg-white/20 transition-all duration-300 shadow-2xl shadow-espresso/10 mt-6 sm:mt-0 group hover:-translate-y-2">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6 border border-white/20 shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <Users size={32} className="text-white drop-shadow-md" />
                </div>
                <h4 className="font-dm-sans font-bold text-white text-xl mb-3 drop-shadow-md">Une communauté</h4>
                <p className="font-dm-sans text-base text-white/90 font-medium leading-relaxed drop-shadow-sm">
                  Un espace de confiance et de bienveillance, ouvert à toutes et tous, quel que soit votre point de départ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutConcept;
