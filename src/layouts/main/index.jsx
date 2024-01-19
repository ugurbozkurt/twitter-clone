import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Rightbar from "./rightbar";
import { useModal } from "../../store/modal/hooks";
import Modal from "../../modals/";
import { useEffect } from "react";
import { useAppearance } from "../../store/appearance/hooks";

export default function MainLayout() {
  const modal = useModal();
  const appearance = useAppearance();
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--background-primary",
      appearance.backgroundColor.color
    );
    document.documentElement.style.setProperty(
      "--font-color-primary",
      appearance.backgroundColor.fontColor
    );
    document.documentElement.style.setProperty(
      "--section-color-primary",
      appearance.backgroundColor.sectionColor
    );
    document.documentElement.style.setProperty(
      "--hv-color-primary",
      appearance.backgroundColor.hvColor
    );
    document.documentElement.style.setProperty(
      "--color-base-secondary",
      appearance.backgroundColor.baseSecondary
    );
    document.documentElement.style.setProperty(
      "--shadowBox",
      appearance.backgroundColor.boxShadow
    );
    document.documentElement.style.setProperty(
      "--color-primary",
      appearance.colors.primary
    );
    document.documentElement.style.setProperty(
      "--font-size",
      appearance.fontSize + "px"
    );
  }, [appearance]);

  return (
    <div className="w-[1265px] mx-auto flex">
      {modal && <Modal></Modal>}
      <Sidebar></Sidebar>
      <main className="min-w-[600px] border-x float-left border-[color:var(--hv-color-primary)]">
        <Outlet></Outlet>
      </main>
      <Rightbar></Rightbar>
    </div>
  );
}
