'use client';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="es">
      <body>
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a2e1a' }}>
          <div style={{ textAlign: 'center', color: 'white' }}>
            <h1 style={{ fontSize: '2rem', fontFamily: 'serif', marginBottom: '1rem' }}>Something went wrong</h1>
            <button
              onClick={() => reset()}
              style={{ color: '#d97706', background: 'none', border: '1px solid #d97706', padding: '0.5rem 1rem', cursor: 'pointer' }}
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
