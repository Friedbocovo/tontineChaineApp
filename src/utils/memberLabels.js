import { MEMBER_STATUS } from '../theme/memberStatus';

const LABELS = {
  [MEMBER_STATUS.PAID]: 'Payé',
  [MEMBER_STATUS.PENDING]: 'En attente',
  [MEMBER_STATUS.LATE]: 'En retard',
  [MEMBER_STATUS.WINNER]: 'Bénéficiaire',
};

export function getMemberStatusLabel(status) {
  return LABELS[status] ?? status;
}
