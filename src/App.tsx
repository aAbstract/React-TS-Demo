import { HashRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// eager loaded screens
import LoadingScreen from './components/common/LoadingScreen'

// lazy loaded screens
const Home = lazy(() => import('./views/Home'));
const Semesters = lazy(() => import('./views/Semesters'));

// component entry point
export default function App() {
  return (
    <HashRouter>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Semesters" element={<Semesters />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}