import { NavLink, useLocation } from 'react-router-dom';
import './BottomNav.css';

const items = [
  {
    to: '/',
    label: 'Accueil',
    end: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="M3 9.5 12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V9.5z" />
      </svg>
    ),
  },
  {
    to: '/ma-tontine',
    label: 'Ma Tontine',
    match: 'prefix',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <circle cx="9" cy="8" r="3.5" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3.5 20.5c.5-3 3.5-5.5 7-5.5s6.5 2.5 7 5.5" />
        <path d="M17 13.5c2.5.5 4.5 2.2 5 4.5" />
      </svg>
    ),
  },
  {
    to: '/paiements',
    label: 'Paiements',
    match: 'prefix',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </svg>
    ),
  },
  {
    to: '/profil',
    label: 'Profil',
    match: 'prefix',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 20.5c.8-4 4.5-6.5 7-6.5s6.2 2.5 7 6.5" />
      </svg>
    ),
  },
];

export default function BottomNav() {
  const { pathname } = useLocation();

  const isActive = (to, match, end) => {
    if (to === '/') return pathname === '/';
    if (match === 'prefix' || !end) {
      return pathname === to || pathname.startsWith(`${to}/`);
    }
    return pathname === to;
  };

  return (
    <nav className="bottom-nav" aria-label="Navigation principale">
      {items.map(({ to, label, icon, end, match }) => (
        <NavLink
          key={to}
          to={to}
          end={!!end}
          className={() =>
            `bottom-nav__link${isActive(to, match, end) ? ' bottom-nav__link--active' : ''}`
          }
        >
          <span className="bottom-nav__icon">{icon}</span>
          <span className="bottom-nav__bar" aria-hidden="true" />
          <span className="bottom-nav__label">{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
