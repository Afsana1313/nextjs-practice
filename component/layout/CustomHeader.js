import React from "react";
import styles from "../../styles/Header.module.css";
import { useRouter } from "next/router";

//import "../../styles/demo.css";
function CustomHeader() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <div className="logo">
          <Link href="/">Logo</Link>
        </div>
        <nav>
          <ul className={styles.nav_ul}>
            <li>
              <Link href="/contact_us">Contact US</Link>
            </li>
            <li>
              <Link href="/about_us">About US</Link>
            </li>
            <li>
              <Link href="/shallow">Shalllow routing example</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
const Link = ({ children, href }) => {
  return <a href={href}>{children}</a>;
};
export default CustomHeader;
