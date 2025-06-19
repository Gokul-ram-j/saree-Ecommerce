import React, { useState } from "react";
import styles from "./FilterMenu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

function FilterMenu({ openSideMenu, setOpenSideMenu }) {
  const [mainFilter, setMainFilter] = useState("Price");
  const [checkedItems, setCheckedItems] = useState({});

  const filterOptionsObj = {
    Price: ["10000 below", "20000 below", "45000 above"],
    "Cotton Sarees": [
      "Khadi",
      "Chanderi",
      "Chettinad",
      "Kota Doria",
      "Venkatagiri",
      "Tangail",
      "Maheshwari",
      "Jamdani",
      "Tant",
    ],
    "Silk Sarees": [
      "Banarasi",
      "Kanjeevaram (Kanchipuram)",
      "Tussar (Kosa)",
      "Mysore",
      "Patola",
      "Raw",
      "Mulberry",
      "Muga",
      "Eri (Ahimsa silk)",
      "Baluchari",
      "Paithani",
      "Gadwal",
    ],
    "Linen Sarees": [
      "Pure Linen Sarees",
      "Linen-Cotton Blend Sarees",
      "Linen-Silk Blend Sarees",
      "Linen tissue",
    ],
    "Jute Sarees": [
      "Pure jute Sarees",
      "Jute Cotton Blend Sarees",
      "Jute-Silk Blend Sarees",
      "Designer or Embroidered Jute Sarees",
    ],
    "Synthetic Fiber": [
      "Georgette Sarees",
      "Chiffon Sarees",
      "Crepe Sarees",
      "Satin Sarees",
      "Net Sarees",
      "Art Silk (Artificial Silk)",
    ],
  };

  const handleCheckboxChange = (filterTitle, value) => {
    setCheckedItems((prev) => ({
      ...prev,
      [filterTitle]: {
        ...prev[filterTitle],
        [value]: !prev[filterTitle]?.[value],
      },
    }));
  };

  return (
    <>
      {openSideMenu && (
        <div className={styles.filterMenuContainer}>
          {/* Close button */}
          <div
            onClick={() => setOpenSideMenu(false)}
            className={styles.filterNavbar}
          >
            <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faXmark} />
          </div>

          <div className={styles.filterOptionContainer}>
            {/* Main filter categories */}
            <div className={styles.mainFilterOptions}>
              {Object.entries(filterOptionsObj).map(([title]) => (
                <div
                  key={title}
                  className={styles.optionItemBox}
                  onClick={() => setMainFilter(title)}
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <p style={{ marginRight: "10px" }}>{title}</p>
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              ))}
            </div>

            {/* Sub filter options */}
            <div className={styles.subFilterOptions}>
              {/* Optional price range slider only for Price */}
              {mainFilter === "Price" && (
                <div className={styles.RangeContainer}>
                  <h3>Price Range</h3>
                  <div style={{ display: "flex", justifyContent: "space-between",width: "90%" }}>
                    <span>₹2000</span>
                    <span>₹50000</span>
                  </div>
                  <input
                    className={styles.inputPriceRange}
                    type="range"
                    min={2000}
                    max={50000}
                  />
                </div>
              )}

              {/* Checkbox list */}
              {filterOptionsObj[mainFilter]?.map((val, index) => (
                <div key={`${mainFilter}-${index}`} className={styles.subOptionItemBox}>
                  <input
                    type="checkbox"
                    id={`checkbox-${mainFilter}-${index}`}
                    name={val}
                    checked={!!checkedItems[mainFilter]?.[val]}
                    onChange={() => handleCheckboxChange(mainFilter, val)}
                  />
                  <label htmlFor={`checkbox-${mainFilter}-${index}`}>{val}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FilterMenu;
