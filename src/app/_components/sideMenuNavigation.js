import React from "react";
import styles from "@/app/_components/components.module.css";
import {
  HiOutlineHome,
  HiOutlineUsers,
  HiMiniViewfinderCircle,
  HiOutlineAcademicCap,
} from "react-icons/hi";
import Link from "next/link";
function SideMenuNavigation() {
  const buttonArray = [
    {
      text: "Button 1",
      icon: <HiOutlineHome />,
      path: "/detection-system/search",
    },
    {
      text: "Button 2",
      icon: <HiOutlineHome />,
      path: "/detection-system/search",
    },
    {
      text: "Button 3",
      icon: <HiOutlineHome />,
      path: "/detection-system/search",
    },
  ];

  return (
    <div className={styles.sideMenu}>
      {buttonArray.map((button, index) => (
        <Link
          className={`${styles.NavLink} ${styles.NoUnderline}`}
          key={index}
          href={button.path}
        >
          <button className={styles.menuButton}>
            {button.icon}
            {button.text}
          </button>
        </Link>
      ))}
    </div>
  );
}

export default SideMenuNavigation;
