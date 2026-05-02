import { Link } from 'react-router-dom';
import AppHeader from '../components/shell/AppHeader';
import './MaTontineHubScreen.css';

export default function MaTontineHubScreen() {
  return (
    <div className="ma-tontine-hub">
      <AppHeader title="Ma tontine" subtitle="Tontine Famille Dossou" />
      <div className="ma-tontine-hub__body">
        <Link to="/ma-tontine/membres" className="hub-card">
          <span className="hub-card__icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
              <circle cx="9" cy="8" r="3.5" />
              <circle cx="17" cy="9" r="2.5" />
              <path d="M3.5 20.5c.5-3 3.5-5.5 7-5.5s6.5 2.5 7 5.5" />
            </svg>
          </span>
          <div>
            <p className="hub-card__title">Membres</p>
            <p className="hub-card__desc">Liste, statuts et cotisations</p>
          </div>
          <span className="hub-card__chev" aria-hidden="true">›</span>
        </Link>

        <div className="hub-card hub-card--soon">
          <span className="hub-card__icon hub-card__icon--muted" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v6l3 2" />
            </svg>
          </span>
          <div>
            <p className="hub-card__title">Suivi du tour</p>
            <p className="hub-card__desc">Qui a payé — bientôt</p>
          </div>
        </div>
      </div>
    </div>
  );
}
