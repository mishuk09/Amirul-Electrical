'use client';

import { useState } from 'react';

/** Add the named file under public/images; missing photos retain a designed placeholder. */
export function Photo({ src, alt, label, className = '' }: {
  src: string; alt: string; label: string; className?: string;
}) {
  const [missing, setMissing] = useState(false);
  return <div className={`photo ${className}`}>
    <div className="photo-placeholder" role={missing ? 'img' : undefined} aria-label={missing ? `${label} — demo image placeholder` : undefined}>
      <svg viewBox="0 0 160 160" aria-hidden="true"><path d="M93 16 44 88h34l-11 56 49-77H83z" /></svg>
      <span>{label}</span><small>YOUR PROJECT PHOTO HERE</small>
    </div>
    {!missing && <img src={src} alt={alt} onError={() => setMissing(true)} />}
  </div>;
}
