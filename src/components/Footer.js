import React from "React";
import FilterLink from "../containers/FilterLink";

const Footer = () => (
  <p>
    Show: <FilterLink filter="SHOW_ALL">ALL</FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">SHOW_ACTIVE</FilterLink>
    {", "}
    <FileList filter="SHOW_COMPLETED">SHOW_COMPLETED</FileList>
  </p>
);

export default Footer;
