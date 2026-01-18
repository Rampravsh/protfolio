import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import MetaHandler from "./MetaHandler";

export default function App() {

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
