import { Link } from 'react-router-dom';
import './AppHeader.css';

export default function AppHeader({ title, subtitle }) {
  return (
    <header className="app-header">
      <div className="app-header__row">
        <Link to="/profil" className="app-header__avatar" aria-label="Profil">
          <span aria-hidden="true">FD</span>
        </Link>
        {title ? (
          <div className="app-header__titles">
            {title ? <h1 className="app-header__title">{title}</h1> : null}
            {subtitle ? <p className="app-header__sub">{subtitle}</p> : null}
          </div>
        ) : (
          <div className="app-header__spacer" />
        )}
        <button type="button" className="app-header__bell" aria-label="Notifications">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </button>
      </div>
    </header>
  );
}
