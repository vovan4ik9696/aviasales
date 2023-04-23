import React from "react";

import classes from "../Filters/Filters.module.scss";

const FiltersItem = ({ filterData: { label, checked, value } }) => {
  return (
    <li className={classes["filters__item"]}>
      <input
        className={classes["filters__checkbox"]}
        type="checkbox"
        name={value}
        value={value}
        id={value}
      />
      <label htmlFor={value}>{label}</label>
    </li>
  );
};

export default FiltersItem;
