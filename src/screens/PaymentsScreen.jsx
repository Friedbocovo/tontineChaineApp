import { Link } from 'react-router-dom';
import AppHeader from '../components/shell/AppHeader';
import './PaymentsScreen.css';

export default function PaymentsScreen() {
  return (
    <div className="payments-screen">
      <AppHeader title="Paiements" subtitle="Historique et règlements" />
      <div className="payments-screen__body">
        <section className="pay-hero">
          <p className="pay-hero__label">Total cotisé</p>
          <p className="pay-hero__amount">450 000 FCFA</p>
          <div className="pay-hero__pills">
            <span>12 paiements</span>
            <span>1 réception</span>
          </div>
        </section>

        <div className="pay-tabs">
          <button type="button" className="pay-tabs__btn pay-tabs__btn--on">
            Mes paiements
          </button>
          <button type="button" className="pay-tabs__btn" disabled>
            Mes réceptions
          </button>
        </div>

        <div className="pay-chips">
          <span className="pay-chips__c pay-chips__c--active">Tout</span>
          <span className="pay-chips__c">Ce mois</span>
          <span className="pay-chips__c">Cycle actuel</span>
        </div>

        <ul className="pay-list">
          {[
            { cycle: 8, date: '12 oct. 2023 — 14:20', amount: '50 000 FCFA', ok: true },
            { cycle: 9, date: '12 sept. 2023 — 09:05', amount: '50 000 FCFA', ok: true },
            { cycle: 10, date: 'En cours', amount: '50 000 FCFA', ok: false },
          ].map((row) => (
            <li key={row.cycle} className="pay-row">
              <div className="pay-row__icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 19V5M5 12l7-7 7 7" />
                </svg>
              </div>
              <div className="pay-row__mid">
                <p className="pay-row__title">Cotisation cycle {row.cycle}</p>
                <p className="pay-row__date">{row.date}</p>
              </div>
              <div className="pay-row__right">
                <span className="pay-row__amt">{row.amount}</span>
                <span className={`pay-row__st ${row.ok ? 'pay-row__st--ok' : 'pay-row__st--pend'}`}>
                  {row.ok ? 'Validé' : 'En cours'}
                </span>
              </div>
            </li>
          ))}
        </ul>

        <Link to="/" className="payments-screen__back">
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
