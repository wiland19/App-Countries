import React, { useState, useEffect } from "react";
//hooks react-redux
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../Redux/actions";
import { Link } from "react-router-dom";

export default function Home() {
  //declaro la variable del dispatch
  const dispatch = useDispatch();

  //Map state to Props, en la constante allCountries traer todo lo que esta en el estado countries[]
  const allCountries = useSelector((state) => state.countries);

  //traer del estado los pokemons cuando el componente se monta con useEffect

  useEffect(() => {
    dispatch(getCountries()); //MapDispatch tO Props
  }, []); // array de dependendias para no tener un bucle infinito de llamados

  function handleRefresh(e) {
    e.preventDefault();
    dispatch(getCountries());
  }

  return (
    <div>
      <Link to="/countries">Created Activity</Link>
      <h1>APP COUNTRIES</h1>
      <button
        onClick={(e) => {
          handleRefresh(e);
        }}
      >
        Refresh...
      </button>

      {/* filtrado por continente */}
      <div>
        <select>
          <option>Continents...</option>
          <option value="All">All.</option>
          <option value="Afr">Africa.</option>
          <option value="Ame">Americas.</option>
          <option value="Asi">Asia.</option>
          <option value="Eur">Europa.</option>
          <option value="Oce">Oceania.</option>
          <option value="Pol">Polar.</option>
        </select>

        <select>
          <option></option>
        </select>

        {/* Order Alphabetic */}
        <select>
          <option>Order by Name</option>
          <option value="Asc">A-Z</option>
          <option value="Desc">Z-A</option>
        </select>

        <select>
          <option>Order by Population</option>
          <option value="Lower">A-Z</option>
          <option value="Higher">A-Z</option>
        </select>

        <select>
          <option value="Types">Types...</option>
        </select>
      </div>
    </div>
  );
}
