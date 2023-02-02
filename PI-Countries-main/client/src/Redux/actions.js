
import axios from "axios";
import {  GET_ALL_COUNTRIES,GET_COUNTRIES_BY_ID,GET_COUNTRIES_BY_NAME,GET_ACTIVITIES, ADD_NEW_ACTIVITY, FILTER_BY_REGION,FILTER_BY_ACTIVITY,ORDER_BY_NAME,ORDER_BY_POPULATION} from "./actionType";

//las accio0nes ---> son objetos {type:GET_ALL_COUNTRIES, payload:info extra}
//actionsCreators ---> son funciones creadoras de acciones

//Funcion creadora de acciones para mostar los poekmons en el

export const getCountries = () => {
  return async function (dispatch) {
    // es aca donde surge la conexion del front y el backed. funcion para traer todos los countries del backi

    try {
      const allCountries = await axios.get('http://localhost:3001/countries');
      if (allCountries.data) {
        return dispatch({
          type: GET_ALL_COUNTRIES,
          payload: allCountries.data
      
        })
      }
      
    } catch (error) {
      return error;
      
    }
    
  }
};

export const getCountriesByName = (name) => {
  return async function (dispatch) {
    // es aca donde surge la conexion del front y el backed. funcion para traer todos los countries del backi

    try {
      const countriesByName = await axios.get(`http://localhost:3001/countries?name=${name}`);
      return dispatch({
        type: GET_COUNTRIES_BY_NAME,
        payload: countriesByName.data
      
      })
      
      
    } catch (error) {
      return error;
      
    }
    
  }
};

export const getCountriesByid = (id) => {
  return async function (dispatch) {
    // es aca donde surge la conexion del front y el backed. funcion para traer todos los countries del backi

    try {
      const countriesByName = await axios.get(`http://localhost:3001/countries/${id}`);
      return dispatch({
        type: GET_COUNTRIES_BY_ID,
        payload: countriesByName.data
      
      })
      
      
    } catch (error) {
      return error;
      
    }
    
  }
};

export const getActivities = () => {
  return async function (dispatch) {
    try {

      const infoActivities = await axios.get("htttp://localhost:3001/activity");
      return dispatch({
        type: GET_ACTIVITIES,
        payload: infoActivities.data
      })
      
    } catch (error) {
      return error
      
    }
  }
};

export const addActivity = (payload) => {
  return async function (dispatch) {
    try {
      
      const newActivity = await axios.post("http://localhost:3001/activity", payload);
      return dispatch({
        type: ADD_NEW_ACTIVITY,
        payload: newActivity.data,
      })
    } catch (error) {
      
    }
  }

};

export const filterCountriesByRegion = (payload) => {
  return {
    type: FILTER_BY_REGION,
    payload
  }
};

export const filterCountriesByActivity = (payload) => {
  return {
    type: FILTER_BY_ACTIVITY,
    payload,
  }
};

export const orderCountriesByName = (payload) => {
  return {
    type: ORDER_BY_NAME,
    payload,
  }
};
export const orderCountriesByPopulation = (payload) => {
  return {
    type: ORDER_BY_POPULATION,
    payload,
  }
};

