import { Outlet } from "react-router-dom";
// 네비게이션
import NavigationBar from "@/components/NavigationBar";

export default function MainLayout() {
  return (
    <div className="flex flex-col h-screen">
      <header className="">
        <NavigationBar />
      </header>

      <div className="flex justify-center items-center h-full mx-20 bg-gray-200">
        <main className="flex px-[10vw] py-[2vh]">
          <Outlet />
        </main>
      </div>

      <footer>
        <div className="flex justify-center items-center p-4">
          &copy; 2024 AskAnything. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
