import SidebarMenu from "../_components/SidebarMenu";
import styles from "@/app/_components/components.module.css";
import RightSideMenu from "../_components/RightSideMenu";
export default function DetectionLayout({ children }) {
  return (
    <div className={styles.AppLayout}>
      <SidebarMenu />
      <main className={styles.mainSection}>{children}</main>
      <RightSideMenu />
    </div>
  );
}
