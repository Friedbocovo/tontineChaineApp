import { Link } from 'react-router-dom';
import AppHeader from '../components/shell/AppHeader';
import { formatMontant } from '../data/tontineData';
import './HomeScreen.css';

export default function HomeScreen() {
  return (
    <div className="home-screen">
      <AppHeader />
      <div className="home-screen__body">
        <p className="home-screen__greet">Bonjour, Fatou !</p>
        <p className="home-screen__lead">Voici l&apos;état de vos épargnes collectives.</p>

        <section className="home-card home-card--payout">
          <p className="home-card__label">Prochaine réception</p>
          <p className="home-card__text">
            Vous recevez la cagnotte dans <strong>3 tours !</strong>
          </p>
          <p className="home-card__amount">{formatMontant(750000)}</p>
        </section>

        <section className="home-card home-card--due">
          <p className="home-card__chip">Échéance : 15 oct.</p>
          <p className="home-card__text">
            Prochaine cotisation : <strong>50 000 FCFA</strong>
          </p>
          <Link to="/paiements" className="home-card__btn home-card__btn--primary">
            Payer maintenant
          </Link>
        </section>

        <section className="home-card home-card--progress">
          <p className="home-card__label home-card__label--dark">Progression du cycle</p>
          <p className="home-card__cycle">
            <strong>8 / 12</strong> mois
          </p>
          <div className="home-card__bar" role="progressbar" aria-valuenow={8} aria-valuemin={0} aria-valuemax={12}>
            <span className="home-card__bar-fill" style={{ width: `${(8 / 12) * 100}%` }} />
          </div>
        </section>

        <div className="home-screen__section-head">
          <h2 className="home-screen__h2">Mes tontines</h2>
          <span className="home-screen__link">Voir tout</span>
        </div>
        <ul className="home-mini-list">
          <li>
            <span>Commerce Grand Marché</span>
            <span className="home-mini-list__badge home-mini-list__badge--ok">Payé</span>
          </li>
          <li>
            <span>Cercle Famille</span>
            <span className="home-mini-list__badge home-mini-list__badge--wait">En attente</span>
          </li>
          <li>
            <span>Projet immobilier 2024</span>
            <span className="home-mini-list__badge home-mini-list__badge--ok">Payé</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
