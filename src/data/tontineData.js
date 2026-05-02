import { MEMBER_STATUS } from '../theme/memberStatus';

/** Résumé affiché en entête (mock Phase 2) */
export const memberDashboardSummary = {
  title: 'Tontine Famille Dossou',
  tourCurrent: 3,
  tourTotal: 8,
  cotisationFcfa: 25000,
  cagnotteFcfa: 175000,
  nextTourLabel: '15 mai',
  incident: {
    title: 'Incident de paiement',
    message:
      "Kofi Mensah n'a pas cotisé depuis 3 jours. Relance automatique envoyée.",
    cta: 'Voir les options de gestion',
  },
};

export const members = [
  {
    id: 1,
    name: 'Jean Kouassi',
    initials: 'JK',
    status: MEMBER_STATUS.PAID,
    tourLabel: 'Tour 1',
    amount: 5000,
    daysLate: 0,
  },
  {
    id: 2,
    name: 'Awa Traoré',
    initials: 'AT',
    status: MEMBER_STATUS.LATE,
    tourLabel: 'Tour 2',
    amount: 5000,
    daysLate: 3,
  },
  {
    id: 3,
    name: 'Koffi Mensah',
    initials: 'KM',
    status: MEMBER_STATUS.PENDING,
    tourLabel: 'Tour 3',
    amount: 5000,
    daysLate: 0,
  },
  {
    id: 4,
    name: 'Fatou Diallo',
    initials: 'FD',
    status: MEMBER_STATUS.PAID,
    tourLabel: 'Tour 3',
    amount: 5000,
    daysLate: 0,
  },
  {
    id: 5,
    name: 'Kossi Adji',
    initials: 'KA',
    status: MEMBER_STATUS.WINNER,
    tourLabel: 'Tour 3',
    amount: 5000,
    daysLate: 0,
  },
];
export function formatMontant(value) {
  return new Intl.NumberFormat('fr-FR').format(value) + ' FCFA';
}

/** Format court « 25 000 F » pour cartes d'en-tête */
export function formatMontantCourt(value) {
  return (
    new Intl.NumberFormat('fr-FR').format(value).replace(/\u202f/g, ' ') + ' F'
  );
}

export { MEMBER_STATUS } from '../theme/memberStatus';