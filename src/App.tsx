import { Route, Routes } from 'react-router';

import { RootLayout } from '@/layouts/RootLayout';
import { AboutPage } from '@/pages/AboutPage';
import { BusinessPage } from '@/pages/BusinessPage';
import { ContactPage } from '@/pages/ContactPage';
import { DirectoryPage } from '@/pages/DirectoryPage';
import { EducationPage } from '@/pages/EducationPage';
import { ExplorePage } from '@/pages/ExplorePage';
import { GovernmentPage } from '@/pages/GovernmentPage';
import { HealthPage } from '@/pages/HealthPage';
import { HomePage } from '@/pages/HomePage';
import { JobsPage } from '@/pages/JobsPage';
import { LocationsPage } from '@/pages/LocationsPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { OrganisationPage } from '@/pages/OrganisationPage';
import { SearchPage } from '@/pages/SearchPage';
import { ServiceDetailPage } from '@/pages/ServiceDetailPage';
import { SubmitPage } from '@/pages/SubmitPage';
import { VerificationPage } from '@/pages/VerificationPage';

/**
 * Route table for the portal.
 *
 * Every route renders inside `RootLayout`, which supplies the header and
 * footer. The eight information areas come first, each followed by its detail
 * route, then the platform pages the footer links to.
 *
 * A detail route whose slug is not in the content module renders the
 * not-found page, so a stale or mistyped link fails visibly rather than
 * rendering an empty frame.
 */
export function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />

        <Route path="government" element={<GovernmentPage />} />
        <Route path="government/:slug" element={<ServiceDetailPage />} />
        <Route path="jobs" element={<JobsPage />} />
        <Route path="education" element={<EducationPage />} />
        <Route path="health" element={<HealthPage />} />
        <Route path="business" element={<BusinessPage />} />
        <Route path="explore" element={<ExplorePage />} />
        <Route path="directory" element={<DirectoryPage />} />
        {/* Declared before the slug route for readability; React Router ranks
            the static segment higher regardless of order. */}
        <Route path="directory/locations" element={<LocationsPage />} />
        <Route path="directory/:slug" element={<OrganisationPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="search" element={<SearchPage />} />

        <Route path="how-verification-works" element={<VerificationPage />} />
        <Route path="submit" element={<SubmitPage />} />
        <Route path="contact" element={<ContactPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
