import { GET_ALL_COUNTRIES, GET_COUNTRIES_BY_ID, GET_COUNTRIES_BY_NAME, GET_ACTIVITIES, ADD_NEW_ACTIVITY,FILTER_BY_REGION } from "./actionType";


const initialState = {

  countries: [],
  allCountries: [],
  activities: [],
  countryDetail:{},
  
}

export default function reducer(state = initialState, action) {
  


  switch (action.type) {
  
    case GET_ALL_COUNTRIES:
      return { ...state, countries: action.payload, allCountries: action.payload };
    
    case GET_COUNTRIES_BY_NAME:
      return { ...state, countries: action.payload };
    
    case GET_COUNTRIES_BY_ID:
      return { ...state, countryDetail: action.payload };
    
    case GET_ACTIVITIES:
      return { ...state, activities: action.payload };
    
    case ADD_NEW_ACTIVITY:
      return { ...state };
    
    case FILTER_BY_REGION:
      
    
    
    
    default:
      return state;
}




}