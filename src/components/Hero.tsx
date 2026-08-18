import { useState } from "react";
import { Link } from "react-router-dom";
import { Compass, Sparkles } from "lucide-react";
import heroBg from "@/assets/dest-senegal.jpg";
import imgPirogues from "@/assets/pirogues.jpeg";
import imgMaroc from "@/assets/dest-maroc.jpg";
import imgTanzanie from "@/assets/dest-tanzanie.jpg";

const Hero = () => {
  const [activeImg, setActiveImg] = useState<number | null>(null);

  const handleImgClick = (index: number) => {
    setActiveImg(activeImg === index ? null : index);
  };

  return (
    <section
      id="accueil"
      className="relative z-0 w-full h-[100dvh] flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 bg-transparent"
    >
      {/* Background Image (Behind Everything) */}
      <div className="absolute inset-0 w-full h-full z-[-2]">
        <img src={heroBg} alt="Coucher de soleil sur la côte sénégalaise" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/70 via-espresso/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 via-transparent to-transparent" />
      </div>

      {/*
        Left Content (Text)
      */}
      <div className="relative z-10 w-full lg:w-[70%] xl:w-[75%] flex flex-col items-start text-left mt-24 lg:mt-[15vh] pointer-events-none pr-0 lg:pr-12">

        {/* Badges */}
        <div className="flex flex-col gap-3 mb-6 pointer-events-none">
          <div className="uppercase tracking-[0.2em] text-xs font-dm-sans font-bold text-white/90 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm w-max border border-white/20">
            Découvrir • Rencontrer • Partager
          </div>
          <Link to="/avis" className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm w-max hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300 pointer-events-auto cursor-pointer border border-white/20">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#D9A876]">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
            </svg>
            <span className="font-dm-sans text-sm font-bold text-white">4.93 / 5</span>
            <span className="font-dm-sans text-sm text-white/70 mx-0.5">•</span>
            <span className="font-dm-sans text-sm font-medium text-white/80">200+ avis</span>
          </Link>
        </div>

        {/* Headline */}
        <h1 className="font-pp-neue-corp-compact text-white text-4xl md:text-6xl lg:text-[4rem] xl:text-[5rem] tracking-tight mb-8 leading-[1.05]">
          <span className="block font-semibold">Vivez l'Afrique</span>
          <span className="block font-medium italic text-[#D9A876] mt-1">autrement.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/90 font-dm-sans text-base md:text-lg max-w-lg font-medium leading-relaxed mb-12">
          Des voyages en groupe, des rencontres authentiques et des expériences qui restent
          bien après le retour. Seul, en couple ou entre amis, l'aventure commence ensemble.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pointer-events-auto">
          <Link
            to="/voyages"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-citra-orange text-white px-8 py-4 rounded-full text-base font-dm-sans font-bold transition-transform hover:scale-105 shadow-[0_8px_30px_rgba(185,95,61,0.4)]"
          >
            <Compass size={20} strokeWidth={2.5} />
            Découvrir nos voyages
          </Link>
          <Link
            to="/concept"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full text-base font-dm-sans font-bold transition-all hover:bg-white/20 shadow-lg hover:shadow-xl hover:scale-105 border border-white/20"
          >
            <Sparkles size={20} strokeWidth={2.5} />
            Découvrir African Tour
          </Link>
        </div>

      </div>

      {/*
        Right Content (Photos)
        A beautiful collage of photos perfectly balancing the right edge.
      */}
      <div className="relative z-10 w-full lg:w-[30%] xl:w-[25%] mt-[5vh] lg:mt-[15vh] hidden lg:flex justify-center lg:justify-end pointer-events-none">
        <div className="relative w-full max-w-[320px] md:max-w-[400px] aspect-[3/4]">

           {/* Backdrop for active image */}
           {activeImg !== null && (
             <div
               className="fixed inset-0 z-40 bg-espresso/40 backdrop-blur-md cursor-pointer pointer-events-auto transition-all duration-500"
               onClick={() => setActiveImg(null)}
             />
           )}

           {/* Third Photo (Top Right, Behind) -> z-0 */}
           <div
             onClick={() => handleImgClick(0)}
             className={`absolute -top-12 -right-12 w-3/4 aspect-square rounded-[2rem] overflow-hidden shadow-xl border-[6px] border-white transition-all duration-500 pointer-events-auto cursor-pointer
               ${activeImg === 0 ? 'z-50 scale-125 rotate-0 shadow-2xl' : 'z-0 rotate-12 hover:rotate-6 hover:scale-[1.05] opacity-90 hover:opacity-100'}
             `}
           >
             <img src={imgMaroc} alt="Patio traditionnel à Marrakech" className="w-full h-full object-cover" />
           </div>

           {/* Main Photo (Tall) -> z-10 */}
           <div
             onClick={() => handleImgClick(1)}
             className={`absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-white transition-all duration-500 pointer-events-auto cursor-pointer
               ${activeImg === 1 ? 'z-50 scale-[1.15] rotate-0' : 'z-10 rotate-3 hover:rotate-1 hover:scale-[1.02]'}
             `}
           >
             <img src={imgPirogues} alt="Pirogues colorées sur une plage au Sénégal" className="w-full h-full object-cover" />
           </div>

           {/* Overlapping Photo (Square/Small) -> z-20 */}
           <div
             onClick={() => handleImgClick(2)}
             className={`absolute -bottom-8 -left-12 w-2/3 aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-white transition-all duration-500 pointer-events-auto cursor-pointer
               ${activeImg === 2 ? 'z-50 scale-[1.35] rotate-0 -translate-y-8 translate-x-8' : 'z-20 -rotate-6 hover:-rotate-2 hover:scale-[1.05]'}
             `}
           >
             <img src={imgTanzanie} alt="Savane et Kilimandjaro en Tanzanie" className="w-full h-full object-cover" />
           </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
