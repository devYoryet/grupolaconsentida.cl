export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a2e1a' }}>
      <div style={{ textAlign: 'center', color: 'white' }}>
        <h1 style={{ fontSize: '3rem', fontFamily: 'serif', marginBottom: '1rem' }}>404</h1>
        <p style={{ color: '#a8a29e' }}>Page not found</p>
        <a href="/" style={{ color: '#d97706', marginTop: '1rem', display: 'inline-block' }}>
          Go Home
        </a>
      </div>
    </div>
  );
}
