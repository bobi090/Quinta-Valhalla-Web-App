import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <main className="flex-grow flex items-center justify-center py-32 px-6 text-center bg-surface">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-20 h-20 rounded-full bg-surface-container text-secondary flex items-center justify-center mx-auto shadow-xs border border-secondary/30">
          <Compass size={38} strokeWidth={1.5} />
        </div>
        <h1 className="font-serif text-4xl text-primary font-semibold">
          Error 404 · Este rincón no existe
        </h1>
        <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
          La página que buscás fue movida o no está disponible.
        </p>
        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-surface font-sans text-xs font-semibold uppercase tracking-wider hover:bg-secondary hover:text-white transition-all shadow-sm"
          >
            <Home size={16} />
            <span>Volver al inicio</span>
          </Link>
        </div>
      </div>
    </main>
  );
};
