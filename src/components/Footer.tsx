import { Link } from "react-router-dom";
import AnimatedLogo from "@/components/AnimatedLogo";
import { Instagram, Mail } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Footer = () => {
  return (
    <footer className="py-16 mt-20 bg-espresso text-cream-card">
      <div className="container mx-auto max-w-[1280px] px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-full bg-cream-card flex items-center justify-center shrink-0 p-2">
                <AnimatedLogo className="h-full w-full" />
              </div>
 <span className="font-pp-neue-corp-compact text-3xl font-semibold tracking-tight text-cream-card leading-none">
                African <span className="italic font-medium text-[#D9A876]">Tour</span>
              </span>
            </div>
            <p className="text-cream-card/80 text-sm font-dm-sans font-medium leading-relaxed">
              Des voyages de groupe immersifs en Afrique : découvrir, rencontrer,
              partager, déconnecter et contribuer. Une aventure humaine, avant tout.
            </p>
          </div>

          {/* Links */}
          <div>
 <h4 className="font-pp-neue-corp-compact text-2xl font-semibold text-cream-card tracking-tight mb-4">
              Navigation
            </h4>
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
              <ul className="space-y-3">
                {[
                  { label: "Accueil", to: "/" },
                  { label: "Voyages", to: "/voyages" },
                  { label: "Concept", to: "/concept" },
                  { label: "Galerie", to: "/galerie" },
                  { label: "Contact", to: "/contact" },
                ].map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm font-dm-sans font-medium text-cream-card/70 hover:text-citra-orange transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {[
                  { label: "Mentions Légales", to: "/mentions-legales" },
                  { label: "Confidentialité", to: "/politique-confidentialite" },
                  { label: "CGV", to: "/cgv" },
                ].map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm font-dm-sans font-medium text-cream-card/70 hover:text-citra-orange transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
 <h4 className="font-pp-neue-corp-compact text-2xl font-semibold text-cream-card tracking-tight mb-4">
              Nous suivre
            </h4>
            <div className="flex gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://www.instagram.com/africantour.voyages/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full shadow-sm bg-white/10 flex items-center justify-center text-cream-card hover:bg-citra-orange hover:text-ink hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                </TooltipTrigger>
                <TooltipContent className="bg-ink border-cream-card/10 text-cream-card font-dm-sans">
                  <p>Instagram</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://www.tiktok.com/@africantour.voyages"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full shadow-sm bg-white/10 flex items-center justify-center text-cream-card hover:bg-citra-orange hover:text-ink hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                    aria-label="TikTok"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                    </svg>
                  </a>
                </TooltipTrigger>
                <TooltipContent className="bg-ink border-cream-card/10 text-cream-card font-dm-sans">
                  <p>TikTok</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="mailto:contact@africantour.com"
                    className="w-12 h-12 rounded-full shadow-sm bg-white/10 flex items-center justify-center text-cream-card hover:bg-citra-orange hover:text-ink hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                </TooltipTrigger>
                <TooltipContent className="bg-ink border-cream-card/10 text-cream-card font-dm-sans">
                  <p>Email</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>

        <div className="pt-8 text-left md:text-center mt-8 border-t border-cream-card/10">
          <p className="text-xs font-dm-sans font-medium uppercase tracking-widest text-cream-card/60">
            © {new Date().getFullYear()} AFRICAN TOUR. TOUS DROITS RÉSERVÉS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
