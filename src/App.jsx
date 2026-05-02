import { Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import HomeScreen from './screens/HomeScreen';
import MaTontineHubScreen from './screens/MaTontineHubScreen';
import MembersScreen from './screens/MembersScreen';
import PaymentsScreen from './screens/PaymentsScreen';
import ProfileScreen from './screens/ProfileScreen';

export default function App() {
  return (
    <Routes>
      <Route path="/membres" element={<Navigate to="/ma-tontine/membres" replace />} />
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/ma-tontine" element={<MaTontineHubScreen />} />
        <Route path="/ma-tontine/membres" element={<MembersScreen />} />
        <Route path="/paiements" element={<PaymentsScreen />} />
        <Route path="/profil" element={<ProfileScreen />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
