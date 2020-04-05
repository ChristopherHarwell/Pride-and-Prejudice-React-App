import React from "react";
import { checkPropTypes } from "prop-types";

const Title = ({ name }) => {
  return <h2 className="title">{name}</h2>;
};

export default Title;
