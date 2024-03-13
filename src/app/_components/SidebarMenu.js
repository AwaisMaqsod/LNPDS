import React from "react";
import styles from "@/app/_components/components.module.css";
import SideMenuNavigation from "./sideMenuNavigation";
function SidebarMenu() {
  return (
    <div className={styles.sidebarMenu}>
      <h1>side menu</h1>
      <p>all modules here</p>
      <SideMenuNavigation />
    </div>
  );
}

export default SidebarMenu;
