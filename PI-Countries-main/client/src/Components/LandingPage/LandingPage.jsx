import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <h1>CountriesApp</h1>

      <Link to="/home">
        <button>WELCOME!!!</button>
      </Link>
    </div>
  );
}
