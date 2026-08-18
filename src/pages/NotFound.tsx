import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 font-pp-neue-corp-compact text-5xl font-semibold text-ink">404</h1>
        <p className="mb-4 text-xl text-muted-foreground font-dm-sans">Cette page s'est perdue en chemin.</p>
        <a href="/" className="text-primary underline hover:text-primary/90 font-dm-sans font-medium">
          Retour à l'accueil
        </a>
      </div>
    </div>
  );
};

export default NotFound;
