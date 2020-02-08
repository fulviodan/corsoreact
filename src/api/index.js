import axios from "axios";

axios.defaults.baseURL = "http://192.168.2.183:8080/ds4biz/generic-db/0.1";

export function getPeople() {
  return axios
    .get("/persona", {
      params: {
        _order: "ASC"
      }
    })
    .then(response => {
      // handle success
      return response;
    })
    .catch(error => {
      // handle error
      console.error(error);
    })
    .finally(() => {
      // always executed
    });
}

export function createPerson({ name, surname }) {
  return axios
    .post("/persona", {
      name,
      surname
    })
    .then(response => {
      // handle success
      return response;
    })
    .catch(error => {
      // handle error
      console.error(error);
    })
    .finally(() => {
      // always executed
    });
}
export function deletePerson(_id) {
  return axios
    .delete(`/persona/${_id}`)
    .then(response => {
      // handle success
      return response;
    })
    .catch(error => {
      // handle error
      console.error(error);
    })
    .finally(() => {
      // always executed
    });
}
