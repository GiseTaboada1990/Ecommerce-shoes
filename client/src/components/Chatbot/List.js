import React from "react";

import "./List.css";

const List = (props) => {
  console.log(props);
  const linkMarkup = props.options.map((link) => (
    <li key={link.id} className="link-list-item">
      {link.text}
    </li>
  ));

  return <ul className="link-list">{linkMarkup}</ul>;
};

export default List;
