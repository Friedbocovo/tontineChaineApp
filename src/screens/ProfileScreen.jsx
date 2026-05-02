import AppHeader from '../components/shell/AppHeader';
import './ProfileScreen.css';

export default function ProfileScreen() {
  return (
    <div className="profile-screen">
      <AppHeader title="Profil" subtitle="Compte et sécurité" />
      <div className="profile-screen__body">
        <div className="prof-block">
          <div className="prof-avatar" aria-hidden="true">
            FD
          </div>
          <p className="prof-name">Fatou Dossou</p>
          <p className="prof-phone">+229 97 00 00 00</p>
          <span className="prof-badge">Membre certifié</span>
        </div>

        <section className="prof-section">
          <div className="prof-section__head">
            <h2 className="prof-h2">Comptes Mobile Money</h2>
            <button type="button" className="prof-link">
              Gérer
            </button>
          </div>
          <div className="prof-row">
            <span>MTN MoMo</span>
            <span className="prof-muted">•••• 42</span>
          </div>
          <div className="prof-row">
            <span>Moov Money</span>
            <span className="prof-muted">•••• 18</span>
          </div>
        </section>

        <section className="prof-section">
          <h2 className="prof-h2">Sécurité</h2>
          <div className="prof-row">
            <span>Code PIN</span>
            <button type="button" className="prof-link">
              Modifier
            </button>
          </div>
          <div className="prof-row">
            <span>Biométrie</span>
            <span className="prof-toggle" aria-label="Activé">
              ON
            </span>
          </div>
        </section>

        <section className="prof-info-card">
          <p>
            Vos transactions sont ancrées sur un registre distribué : traçabilité et confiance pour votre cercle.
          </p>
          <button type="button" className="prof-link prof-link--on-dark">
            En savoir plus
          </button>
        </section>

        <button type="button" className="prof-logout">
          Se déconnecter
        </button>
        <p className="prof-version">Version 0.1.0 · TontineChain</p>
      </div>
    </div>
  );
}
