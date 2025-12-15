import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import useWheelNavigation from "./hooks/useWheelNavigation";
import MetaHandler from "./MetaHandler";

export default function App() {
  useWheelNavigation(); // 👈 magic line

  return (
    <>
      <MetaHandler />
      <Background />
      <Navbar />

      <main className="pt-16">
        <Outlet />
      </main>
    </>
  );
}
