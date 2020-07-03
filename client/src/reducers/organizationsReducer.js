import { GET_ALL_NGOS } from "../actions/types";

const initialState = {
  organizations: [],
  organization: {}
};

const organizationReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case GET_ALL_NGOS:
      return { ...state, organizations: payload };
    default:
      return state;
  }
};
export default organizationReducer;
