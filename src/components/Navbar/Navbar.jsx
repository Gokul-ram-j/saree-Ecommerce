import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faCartShopping,
  faHeart,
  faPhoneVolume,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const CategoryNavbar = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    "Hands of Manufacture"
  );

  //  category list
  const categories = ["Hands of Manufacture", "Domestic", "Bulk Products"];

  return (
    <div className={styles.categoryNavContainer}>
      <div className={styles.categoryItems}>
        <ul>
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                borderBottom:
                  selectedCategory === category ? "5px solid #F53E32" : "",
                cursor: "pointer",
              }}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.contactInfo}>
        <p>
          <FontAwesomeIcon icon={faPhoneVolume} />
          <span
            style={{ paddingLeft: "10px" }}
            className={styles.contactInfoNumber}
          >
            123-456-7890
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

// search box -- company logo -- account info

const MainNavbar = () => {
  //  category list
    const categories = [
  "ALL",
  "COTTON",
  "SILK",
  "LINEN",
  "JUTE",
  "SYNTHETIC",
  "BLENDED",
  "WEAVING TECHNIQUE",
  "OCCASION & AESTHETIC"
];

  const [isCategoryListOpen, setIsCategoryListOpen] = useState(false);
  return (
    <div className={styles.mainNavbarContainer}>
      {/* logo and company name */}
      <div className={styles.logoContainer}>
        <img src="/images/logo.png" alt="Company Logo" />
        <div className={styles.companyContext}>
          <h3>Sarees</h3>
          <p>A Treasure of Hertitage</p>
        </div>
      </div>
      {/* search box */}
      <div className={styles.searchBoxContainer}>
        <input
          className={styles.searchBox}
          placeholder="Search for items..."
          type="text"
        />
        <div className={styles.categoryBtn} >
          <button onClick={() => setIsCategoryListOpen(!isCategoryListOpen)}>
            <span className={styles.categoryContext}>All Categories{" "}</span>
            <span>
              <FontAwesomeIcon

                style={{ color: "#F53E32", fontSize: "0.8rem" }}
                icon={isCategoryListOpen?faAngleUp:faAngleDown}
              />
            </span>
          </button>
          {isCategoryListOpen && <ul className={styles.categoryList}>
            {categories.map((category) => (
              <li  key={category} className={styles.categoryItem}>
                {category}
              </li>
            ))}
          </ul>}
        </div>
        <button className={styles.searchBtn}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      {/* account info */}
      <div className={styles.accountInfoContainer}>
        <div className={styles.infoWrapper}>
          <FontAwesomeIcon icon={faUser} />
          Account
        </div>
        <div className={styles.infoWrapper}>
          <FontAwesomeIcon icon={faHeart} />
          Wishlist
        </div>
        <div className={styles.infoWrapper}>
          <FontAwesomeIcon icon={faCartShopping} />
          Cart
        </div>
      </div>
    </div>
  );
};

function Navbar() {
  return (
    <>
      <CategoryNavbar />
      <MainNavbar />
    </>
  );
}

export default Navbar;
