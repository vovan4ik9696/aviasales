import React from "react";

import classes from "../SortList/SortList.module.scss";

const SortItem = ({ sortTab: { label, active } }) => {
  const classList = active
    ? `${classes["sort__item"]} ${classes["sort__item--active"]}`
    : classes["sort__item"];
  return <li className={classList}>{label}</li>;
};

export default SortItem;
