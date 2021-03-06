import axios from "axios";
import { BASE_URL } from "../config";

export const ADD_ORGANIZATION_START = "ADD_ORGANIZATION_START";
export const ADD_ORGANIZATION_SUCCESS = "ADD_ORGANIZATION_SUCCESS";
export const ADD_ORGANIZATION_FAILURE = "ADD_ORGANIZATION_FAILURE";

export const addOrganization = newOrganization => dispatch => {
  dispatch({ type: ADD_ORGANIZATION_START });
  return axios
    .post(`${BASE_URL}/organizations/new-organization`, newOrganization, {
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
    .then(res => {
      dispatch({ type: ADD_ORGANIZATION_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_ORGANIZATION_FAILURE, payload: err });
    });
};

export const ORGANIZATION_SEARCH_START = "ORGANIZATION_SEARCH_START";
export const ORGANIZATION_SEARCH_SUCCESS = "ORGANIZATION_SEARCH_SUCCESS";
export const ORGANIZATION_SEARCH_FAILURE = "ORGANIZATION_SEARCH_FAILURE";

export const searchOrganizations = query => dispatch => {
  dispatch({ type: ORGANIZATION_SEARCH_START });

  const nameSearch = encodeURI(query.name);
  const locationSearch = encodeURI(query.location);
  const urlString = `${BASE_URL}/organizations/search?name=${nameSearch}&location=${locationSearch}&lead=${
    query.leads
  }`;

  return axios
    .get(urlString, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
    .then(res => {
      dispatch({ type: ORGANIZATION_SEARCH_SUCCESS, payload: res });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ORGANIZATION_SEARCH_FAILURE, payload: err });
    });
};
// GET_ORGANIZATION, GET_ORGANIZATION_SUCCESS, GET_ORGANIZATION_FAILURE, getOrganizationById

export const GET_ORGANIZATION = "GET_ORGANIZATION";
export const GET_ORGANIZATION_SUCCESS = "GET_ORGANIZATION_SUCCESS";
export const GET_ORGANIZATION_FAILURE = "GET_ORGANIZATION_FAILURE";

export const getOrganizationById = orgId => dispatch => {
  dispatch({ type: GET_ORGANIZATION });

  return axios
    .get(`${BASE_URL}/organizations/${orgId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
    .then(res => {
      dispatch({ type: GET_ORGANIZATION_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: GET_ORGANIZATION_FAILURE, payload: err });
    });
};

export const GET_ALL_ORGANIZATIONS = "GET_ALL_ORGANIZATIONS";
export const GET_ALL_ORGANIZATIONS_SUCCESS = "GET_ALL_ORGANIZATIONS_SUCCESS";
export const GET_ALL_ORGANIZATIONS_FAILURE = "GET_ALL_ORGANIZATIONS_FAILURE";

export const getAllOrganizations = lead => dispatch => {
  dispatch({ type: GET_ALL_ORGANIZATIONS });

  return axios
    .get(`${BASE_URL}/organizations/organizations-list?lead=${lead}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
    .then(res => {
      dispatch({ type: GET_ALL_ORGANIZATIONS_SUCCESS, payload: res });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: GET_ALL_ORGANIZATIONS_FAILURE, payload: err });
    });
};

export const DELETE_ORGANIZATION_START = "DELETE_ORGANIZATION_START";
export const DELETE_ORGANIZATION_SUCCESS = "DELETE_ORGANIZATION_SUCCESS";
export const DELETE_ORGANIZATION_FAILURE = "DELETE_ORGANIZATION_FAILURE";

export const deleteOrganization = organizationId => dispatch => {
  dispatch({ type: DELETE_ORGANIZATION_START });

  return axios
    .delete(`${BASE_URL}/organizations/organization/${organizationId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
    .then(res => {
      dispatch({ type: DELETE_ORGANIZATION_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: DELETE_ORGANIZATION_FAILURE, payload: err });
    });
};

export const UPDATE_ORGANIZATION = "UPDATE_ORGANIZATION";
export const UPDATE_ORGANIZATION_SUCCESS = "UPDATE_ORGANIZATION_SUCCESS";
export const UPDATE_ORGANIZATION_FAILURE = "UPDATE_ORGANIZATION_FAILURE";

export const updateOrganization = organization => dispatch => {
  dispatch({ type: UPDATE_ORGANIZATION });
  return axios
    .put(
      `${BASE_URL}/organizations/update-organization/${organization.id}
    `,
      organization,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.getItem("token")}`
        }
      }
    )
    .then(res => {
      dispatch({ type: UPDATE_ORGANIZATION_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: UPDATE_ORGANIZATION_FAILURE, payload: err });
    });
};

export const GET_NEXT_ORGS_START = "GET_NEXT_ORGS_START";
export const GET_NEXT_ORGS_SUCCESS = "GET_NEXT_ORGS_SUCCESS";
export const GET_NEXT_ORGS_FAILURE = "GET_NEXT_ORGS_FAILURE";

export const getNextOrgPage = nextLink => dispatch => {
  dispatch({ type: GET_NEXT_ORGS_START });
  return axios
    .get(nextLink, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
    .then(res => {
      dispatch({ type: GET_NEXT_ORGS_SUCCESS, payload: res });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: GET_NEXT_ORGS_FAILURE, payload: err });
    });
};

export const CLEAR_DELETED_ORGS = "CLEAR_DELETED_ORGS";

export const clearDeletedOrgs = () => dispatch => {
  dispatch({ type: CLEAR_DELETED_ORGS });
};

export const CLEAR_ADDED_ORGS = "CLEAR_ADDED_ORGS";

export const clearAddedOrgs = () => dispatch => {
  dispatch({ type: CLEAR_ADDED_ORGS });
};

export const updateOrganizationSuccess = () => dispatch => {
  dispatch({ type: UPDATE_ORGANIZATION_SUCCESS });
};

export const updateOrganizationFailure = () => dispatch => {
  dispatch({ type: UPDATE_ORGANIZATION_FAILURE });
};

export const CLEAR_ORGANIZATION_UPDATED = "CLEAR_ORGANIZATION_UPDATED";
export const clearOrganizationUpdated = () => dispatch => {
  dispatch({ type: CLEAR_ORGANIZATION_UPDATED });
};
