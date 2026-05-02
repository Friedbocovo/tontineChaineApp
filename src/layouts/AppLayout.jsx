import { Outlet } from 'react-router-dom';
import BottomNav from '../components/navigation/BottomNav';
import '../styles/app-shell.css';
import './AppLayout.css';

export default function AppLayout() {
  return (
    <div className="app-shell">
      <main className="app-shell__main">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}
