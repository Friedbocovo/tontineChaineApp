import Avatar from '../ui/Avatar';
import Badge from '../ui/Badge';
import { MEMBER_STATUS } from '../../theme/memberStatus';
import { formatMontant } from '../../data/tontineData';
import './MemberCard.css';

const statusConfig = {
  [MEMBER_STATUS.PAID]: {
    label: 'Payé',
    variant: 'paid',
  },
  [MEMBER_STATUS.PENDING]: {
    label: 'En attente',
    variant: 'pending',
  },
  [MEMBER_STATUS.LATE]: {
    label: 'En retard',
    variant: 'late',
  },
  [MEMBER_STATUS.WINNER]: {
    label: 'Bénéficiaire',
    variant: 'winner',
    prefix: '*',
  },
};

export default function MemberCard({ member, onClick }) {
  const config =
    statusConfig[member.status] || statusConfig[MEMBER_STATUS.PENDING];

  const cardClass = [
    'member-card',
    member.status === MEMBER_STATUS.WINNER && 'member-card--winner',
    member.status === MEMBER_STATUS.LATE && 'member-card--incident',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={cardClass} onClick={() => onClick?.(member)}>
      <Avatar initials={member.initials} status={member.status} />

      <div className="member-card__info">
        <p className="member-card__name">{member.name}</p>

        {/* Tour masqué tant que la logique on-chain / cycle n'est pas figée */}
      </div>

      <div className="member-card__right">
        <Badge
          label={config.label}
          variant={config.variant}
          prefix={config.prefix}
        />

        <span
          className="member-card__amount"
          style={
            member.status === MEMBER_STATUS.LATE
              ? { color: '#E24B4A' }
              : undefined
          }
        >
          {formatMontant(member.amount)}
        </span>
      </div>
    </div>
  );
}
