import { RouterProvider, createBrowserRouter } from "react-router-dom";

// 레이아웃
import MainLayout from "@/layout/MainLayout.jsx";
import LoginLayout from "@/layout/LoginLayout.jsx";

// 페이지
import MainPage from "@/pages/MainPage.jsx";
import CommunityPage from "@/pages/CommunityPage.jsx";
import ExpertPage from "@/pages/ExpertPage.jsx";
import LoginPage from "@/pages/LoginPage.jsx";
import MyPage from "@/pages/MyPage.jsx";
import OneOnOnePage from "@/pages/OneOnOnePage.jsx";
import QuestionPage from "@/pages/QuestionPage.jsx";
import ServiceCenterPage from "@/pages/ServiceCenterPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/community", element: <CommunityPage /> },
      { path: "/expert", element: <ExpertPage /> },
      { path: "/mypage", element: <MyPage /> },
      { path: "/one-on-one", element: <OneOnOnePage /> },
      { path: "/question", element: <QuestionPage /> },
      { path: "/service-center", element: <ServiceCenterPage /> },
    ],
  },
  {
    path: "/login",
    element: <LoginLayout />,
    children: [{ path: "", element: <LoginPage /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
