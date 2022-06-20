import React from "react";
import footerStyle from "../../styles/Footer.module.css";
function CustomFooter() {
  return (
    <div className={footerStyle.footer_container}>
      <div className={footerStyle.footer_wrapper}>CustomFooter</div>
    </div>
  );
}

export default CustomFooter;
