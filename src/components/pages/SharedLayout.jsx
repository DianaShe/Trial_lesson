import { Outlet } from "react-router";
import { useEffect, useState } from "react";
import SideBar from "../SideBar";
import Navigation from "../Navigation";

const SharedLayout = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="flex gap-6 bg-gray-200 ">
      <div className="w-full md:w-2/3 bg-white rounded-lg min-h-screen">
        <div className=" flex flex-col items-end gap-1.5 h-11 bg-emerald-600 py-2.5 px-4 md:hidden">
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white"
          >
            ☰
          </button>
        </div>
        <div
          className={`
          fixed inset-0 bg-black/50 z-40
          transition-opacity duration-300
          ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
          onClick={() => setOpen(false)}
        />
        <nav
          className={`
          fixed top-0 right-0 h-full w-72 bg-white z-50
          transform transition-transform duration-300 p-6
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
        >
          {/* Header */}
          <div className="flex items-center justify-between py-4 border-b">
            <span className="font-semibold text-emerald-600">
              Trial lesson A2
            </span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          <Navigation setOpen={setOpen} />
        </nav>
        <div className="p-4">
          <Outlet />
        </div>
      </div>
      <SideBar />
    </div>
  );
};

export default SharedLayout;
