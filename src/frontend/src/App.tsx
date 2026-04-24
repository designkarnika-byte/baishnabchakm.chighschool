import { RouterProvider, createRouter } from "@tanstack/react-router";
import { Outlet, createRootRoute, createRoute } from "@tanstack/react-router";
import { Loader2 } from "lucide-react";
import { Suspense, lazy } from "react";
import { AdminRoute } from "./components/AdminRoute";
import { Layout } from "./components/Layout";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";
import { LanguageProvider } from "./contexts/LanguageContext";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const AdmissionsPage = lazy(() => import("./pages/AdmissionsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NoticeBoardPage = lazy(() => import("./pages/NoticeBoardPage"));
const NoticeDetailPage = lazy(() => import("./pages/NoticeDetailPage"));
const TeachersPage = lazy(() => import("./pages/TeachersPage"));
const StudentsPage = lazy(() => import("./pages/StudentsPage"));
const AdminPage = lazy(() => import("./pages/AdminPage"));

const PageLoader = () => (
  <div className="flex min-h-[50vh] items-center justify-center">
    <Loader2 className="h-8 w-8 animate-spin text-primary" />
  </div>
);

const rootRoute = createRootRoute({
  component: () => (
    <LanguageProvider>
      <AuthProvider>
        <Layout>
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </Layout>
      </AuthProvider>
    </LanguageProvider>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <HomePage />,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: () => <AboutPage />,
});

const admissionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admissions",
  component: () => <AdmissionsPage />,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: () => <ContactPage />,
});

const noticesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/notices",
  component: () => <NoticeBoardPage />,
});

const noticeDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/notices/$id",
  component: () => <NoticeDetailPage />,
});

const teachersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/teachers",
  component: () => (
    <ProtectedRoute>
      <TeachersPage />
    </ProtectedRoute>
  ),
});

const studentsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/students",
  component: () => (
    <ProtectedRoute>
      <StudentsPage />
    </ProtectedRoute>
  ),
});

const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin",
  component: () => (
    <AdminRoute>
      <AdminPage />
    </AdminRoute>
  ),
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  admissionsRoute,
  contactRoute,
  noticesRoute,
  noticeDetailRoute,
  teachersRoute,
  studentsRoute,
  adminRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
