import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MemberCard from '../components/members/MemberCard';
import {
  members,
  formatMontant,
  formatMontantCourt,
  memberDashboardSummary,
} from '../data/tontineData';
import { MEMBER_STATUS } from '../theme/memberStatus';
import { getMemberStatusLabel } from '../utils/memberLabels';
import './MembersScreen.css';

export default function MembersScreen() {
  const navigate = useNavigate();
  const [memberList] = useState(members);
  const [selectedMember, setSelectedMember] = useState(null);

  const summary = memberDashboardSummary;
  const tourBadge = `Tour ${summary.tourCurrent}/${summary.tourTotal}`;
 
  return (
    <div className="membres-screen">

      <header className="membres-header">
        <div className="membres-header__top">
          <button
            type="button"
            className="membres-header__back"
            aria-label="Retour"
            onClick={() => navigate('/ma-tontine')}
          >
            &#8592;
          </button>
          <h1 className="membres-header__title">{summary.title}</h1>
          <span className="membres-header__badge">{tourBadge}</span>
        </div>

        <div className="membres-header__meta">
          <div className="meta-card">
            <p className="meta-card__label">Cotisation</p>
            <p className="meta-card__value">
              {formatMontantCourt(summary.cotisationFcfa)}
            </p>
          </div>
          <div className="meta-card">
            <p className="meta-card__label">Cagnotte</p>
            <p className="meta-card__value">
              {formatMontantCourt(summary.cagnotteFcfa)}
            </p>
          </div>
          <div className="meta-card">
            <p className="meta-card__label">Prochain tour</p>
            <p className="meta-card__value">{summary.nextTourLabel}</p>
          </div>
        </div>
      </header>

      {summary.incident && (
        <div className="membres-incident" role="status">
          <div className="membres-incident__icon" aria-hidden="true">
            !
          </div>
          <div className="membres-incident__body">
            <p className="membres-incident__title">{summary.incident.title}</p>
            <p className="membres-incident__text">{summary.incident.message}</p>
            <button type="button" className="membres-incident__cta">
              {summary.incident.cta}
            </button>
          </div>
        </div>
      )}
 
      {/* ── Section header ── */}
      <div className="membres-section-header">
        <span className="membres-section-title">Membres ({memberList.length})</span>
        <button className="membres-add-btn">+ Ajouter</button>
      </div>
 
      {/* ── Liste des membres ── */}
      <div className="membres-list">
        {memberList.map((member) => (
          <MemberCard
            key={member.id}
            member={member}
            onClick={setSelectedMember}
          />
        ))}
      </div>
 
      {/* ── Modal détail membre ── */}
      {selectedMember && (
        <div className="modal-overlay" onClick={() => setSelectedMember(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div
                className="modal-avatar"
                style={{
                  background:
                    selectedMember.status === MEMBER_STATUS.LATE
                      ? '#FCEBEB'
                      : '#E1F5EE',
                  color:
                    selectedMember.status === MEMBER_STATUS.LATE
                      ? '#E24B4A'
                      : '#0F6E56',
                }}
              >
                {selectedMember.initials}
              </div>
              <div>
                <p className="modal-name">{selectedMember.name}</p>
                <p className="modal-sub">{selectedMember.tourLabel}</p>
              </div>
            </div>
            <div className="modal-divider" />
            <div className="modal-row">
              <span className="modal-key">Montant dû</span>
              <span className="modal-val">{formatMontant(selectedMember.amount)}</span>
            </div>
            <div className="modal-row">
              <span className="modal-key">Statut</span>
              <span className="modal-val">{getMemberStatusLabel(selectedMember.status)}</span>
            </div>
            {selectedMember.daysLate > 0 && (
              <div className="modal-row">
                <span className="modal-key">Retard</span>
                <span className="modal-val modal-val--danger">{selectedMember.daysLate} jours</span>
              </div>
            )}
            <button className="modal-close" onClick={() => setSelectedMember(null)}>
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
 
