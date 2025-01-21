import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">&copy; 2025 Juan María.</small>
      <p className="text-xs">
        <span className="font-semibold">Sobre esta web:</span> creada con React
        & Next.js, TypeScript, Tailwind CSS, Framer Motion, Vercel hosting.
      </p>
    </footer>
  );
}