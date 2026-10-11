
import { useEffect, useState } from 'react';
import { getBackendHealth } from './services/healthService';
import './App.css';

function App() {
  const [health, setHealth] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;

    async function checkBackend() {
      try {
        const data = await getBackendHealth();

        if (active) {
          setHealth(data);
          setError('');
        }
      } catch (err) {
        if (active) {
          setError(
            err.response
              ? `Backend returned HTTP ${err.response.status}.`
              : 'Unable to connect to the backend. Check that Spring Boot is running.'
          );
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    checkBackend();

    return () => {
      active = false;
    };
  }, []);

  return (
    <main className="app-container">
      <section className="health-card">
        <h1>Smart Day</h1>
        <p className="subtitle">
          Your personal calendar and daily task planner
        </p>

        <div className="status-panel" aria-live="polite">
          <h2>Backend connectivity</h2>

          {loading && <p>Checking backend connection...</p>}

          {!loading && health && (
            <div>
              <p className="success">
                ● Connected — {health.status}
              </p>
              <p>Service: {health.service}</p>
            </div>
          )}

          {!loading && error && (
            <p className="error">{error}</p>
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
