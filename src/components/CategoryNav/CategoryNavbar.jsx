import React, { useState } from "react";
import styles from "./CategoryNavbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import ProductSection from "../CategoryItems/ProductSection";
import FilterMenu from "../FilterMenu/FilterMenu";

function DropDown({ title, items, onClick }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className={styles.dropdown}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => onClick(title)}
      >
        <button className={styles.dropbtn}>{title}</button>
        {isOpen && items.length > 0 && (
          <div className={styles.dropdownContent}>
            {items.map((item, index) => (
              <a key={index} href="#">
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

function CategoryNavbar() {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const [categories, setCategories] = useState([
    {
      title: "ALL",
      items: [],
    },
    {
      title: "COTTON",
      items: [
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
    },
    {
      title: "SILK",
      items: [
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
    },
    {
      title: "LINEN",
      items: [
        "Pure Linen Sarees",
        "Linen-Cotton Blend Sarees",
        "Linen-Silk Blend Sarees",
        "Linen Tissue",
      ],
    },
    {
      title: "JUTE",
      items: [
        "Pure Jute Sarees",
        "Jute Cotton Blend Sarees",
        "Jute-Silk Blend Sarees",
        "Designer or Embroidered Jute Sarees",
      ],
    },
    {
      title: "SYNTHETIC",
      items: [
        "Georgette Sarees",
        "Chiffon Sarees",
        "Crepe Sarees",
        "Satin Sarees",
        "Net Sarees",
        "Art Silk (Artificial Silk)",
      ],
    },
    {
      title: "BLENDED",
      items: [
        "Cotton-Silk Sarees",
        "Silk-Polyester Sarees",
        "Organza Sarees",
        "Tulle Sarees",
        "Viscose Sarees",
        "Velvet Sarees",
      ],
    },
    {
      title: "WEAVING TECHNIQUE",
      items: [
        "Handloom Sarees",
        "Ikat / Tie & Dye",
        "Light Cotton & Dotted Patterns",
      ],
    },
    {
      title: "OCCASION & AESTHETIC",
      items: [
        "Bridal / Wedding Sarees",
        "Festival Sarees",
        "Daily Wear Sarees",
        "Casual / Formal",
        "Office / College Wear",
        "Temple Sarees",
        "Minimalistic / Plain Sarees",
        "Zari Work",
      ],
    },
  ]);

  const moveToFront = (clickedTitle) => {
    setCategories((prev) => {
      const clicked = prev.find((cat) => cat.title === clickedTitle);
      const others = prev.filter((cat) => cat.title !== clickedTitle);
      return [clicked, ...others];
    });
  };

  return (
    <>
      <div className={styles.MainContainer}>
        <div className={styles.categoryNavbarContainer}>
          {categories.map((cat, index) => (
            <DropDown
              key={cat.title}
              title={cat.title}
              items={cat.items}
              onClick={moveToFront}
            />
          ))}
        </div>
        <button
          onClick={() => setOpenSideMenu(!openSideMenu)}
          className={styles.filterBtn}
        >
          <FontAwesomeIcon icon={faFilter} />
          <span className={styles.filterBtnContext}> Filter</span>
        </button>
      </div>
      <ProductSection items={categories[0].items} />
      <FilterMenu
        openSideMenu={openSideMenu}
        setOpenSideMenu={setOpenSideMenu}
      />
    </>
  );
}

export default CategoryNavbar;
