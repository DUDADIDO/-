import { Outlet } from "react-router-dom";
// 네비게이션
import NavigationBar from "@/components/NavigationBar";
import SideBar from "@/components/SideBar";

export default function MainLayout() {
  return (
    <div className="flex flex-col h-screen">
      <header className="">
        <NavigationBar />
      </header>

      <div className="flex flex-1">
        <aside className="w-[15vh] p-4">
          <SideBar />
        </aside>
        <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
