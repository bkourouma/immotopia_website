/**
 * React Router Configuration
 */

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import { ProtectedRoute } from './ProtectedRoute';

import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import BlogListPage from '../pages/blog/BlogListPage';
import BlogEditPage from '../pages/blog/BlogEditPage';
import GuidesListPage from '../pages/guides/GuidesListPage';
import GuidesEditPage from '../pages/guides/GuidesEditPage';
import FAQListPage from '../pages/faq/FAQListPage';
import FAQEditPage from '../pages/faq/FAQEditPage';
import MediaPage from '../pages/media/MediaPage';
import SettingsPage from '../pages/settings/SettingsPage';
import AdminLayout from '../components/layout/AdminLayout';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<LoginPage />} />
          
          {/* Protected routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <DashboardPage />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/blog"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <BlogListPage />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/blog/new"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <BlogEditPage />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/blog/:id/edit"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <BlogEditPage />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/guides"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <GuidesListPage />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/guides/new"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <GuidesEditPage />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/guides/:id/edit"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <GuidesEditPage />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/faq"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <FAQListPage />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/faq/new"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <FAQEditPage />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/faq/:id/edit"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <FAQEditPage />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/media"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <MediaPage />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <SettingsPage />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          
          {/* Default redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

