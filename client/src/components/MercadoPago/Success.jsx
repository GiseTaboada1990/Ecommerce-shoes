import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Success() {
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify([]));
  }, []);
  return (
    <div>
      <h1>SUCCESS</h1>
      <Link to="/">
        <button> VOLVER</button>
      </Link>
    </div>
  );
}
