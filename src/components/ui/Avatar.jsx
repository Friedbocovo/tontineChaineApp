import { MEMBER_STATUS } from '../../theme/memberStatus';
import './Avatar.css';

export default function Avatar({ initials, status }) {
  const tone =
    status === MEMBER_STATUS.LATE
      ? 'avatar--danger'
      : status === MEMBER_STATUS.WINNER
        ? 'avatar--winner'
        : status === MEMBER_STATUS.PAID
          ? 'avatar--success'
          : 'avatar--neutral';

  return (
    <div className={`avatar ${tone}`} aria-hidden="true">
      {initials}
    </div>
  );
}
