export function ArrowUpRight({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function ArrowDown({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 5v14" />
      <path d="m6 13 6 6 6-6" />
    </svg>
  );
}

export function Plus({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function Star({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2c.4 4.9 5.1 9.6 10 10-4.9.4-9.6 5.1-10 10-.4-4.9-5.1-9.6-10-10 4.9-.4 9.6-5.1 10-10Z" />
    </svg>
  );
}

export function Social({ name, size = 16 }) {
  const paths = {
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </>
    ),
    linkedin: (
      <>
        <path d="M4.5 9v10M4.5 5.5v.01" />
        <path d="M10 19v-6a3 3 0 0 1 6 0v6" />
        <path d="M10 19V9" />
      </>
    ),
    x: (
      <>
        <path d="m4 4 16 16M20 4 4 20" />
      </>
    ),
    facebook: (
      <>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </>
    ),
    youtube: (
      <>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </>
    ),
    pinterest: (
      <>
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.63 7.85 6.35 9.31-.09-.79-.17-2.01.03-2.87.19-.8 1.25-5.28 1.25-5.28s-.32-.64-.32-1.58c0-1.48.86-2.58 1.93-2.58.91 0 1.34.68 1.34 1.5 0 .91-.58 2.27-.88 3.53-.25 1.06.53 1.92 1.57 1.92 1.88 0 3.33-1.99 3.33-4.86 0-2.54-1.83-4.32-4.45-4.32-3.04 0-4.82 2.28-4.82 4.63 0 .92.35 1.9.79 2.43.09.11.1.2.07.31-.09.38-.29 1.18-.33 1.36-.05.23-.17.28-.41.16-1.54-.72-2.51-2.99-2.51-4.8 0-3.9 2.84-7.48 8.16-7.48 4.28 0 7.6 3.05 7.6 7.12 0 4.25-2.68 7.68-6.4 7.68-1.25 0-2.43-.65-2.83-1.42l-.77 2.94c-.28 1.07-1.04 2.4-1.55 3.22A9.97 9.97 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" fill="currentColor" stroke="none" />
      </>
    ),
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name] ?? paths.x}
    </svg>
  );
}
