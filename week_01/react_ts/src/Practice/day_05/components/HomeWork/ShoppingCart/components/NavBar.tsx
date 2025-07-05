import { IoMenu } from "react-icons/io5";
import styles from "./Product.module.css";
import { FaSearch } from "react-icons/fa";
import { CartIcon } from "./CartIcon";
import { CartDropdown } from "./CartDropdown";
import React from "react";

export const NavBar = () => {
  const [activeDropdown, setActiveDropdown] = React.useState(false);
  const onMouseEnter = () => setActiveDropdown(true);
  const onMouseLeave = () => setActiveDropdown(false);

  return (
    <div className={styles.containerNavBar}>
      <div className={styles.navLinksHidden}>
        <IoMenu />
      </div>
      <img className={styles.logo} src="/images/Day5/logo.bin"></img>
      <div className={styles.navLinks}>
        <IoMenu /> Danh mục sản phẩm
      </div>
      <div className={styles.search}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Tìm kiếm sản phẩm..."
        />
        <i>
          <FaSearch />
        </i>
      </div>
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{ position: "relative", display: "inline-block" }}
      >
        <CartIcon quantity={1} />
        <CartDropdown isActiveDropdown={activeDropdown} />
      </div>
    </div>
  );
};
