import axios from "axios";
import { GET_ALL_NGOS } from "./types";

export const getAllNgos = () => dispatch => {
  axios
    .get("http://localhost:4000/ngo")
    .then(response =>
      dispatch({
        type: GET_ALL_NGOS,
        payload: response.data
      })
    )
    .catch(e => console.log(e));
};
