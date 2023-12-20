import axios from "axios";

const baseurl = "http://localhost:3001";

const create_person = (newPerson) => {
  return axios.post(`${baseurl}/persons`, newPerson);
};

const delete_person = (id) => {
  return axios.delete(`${baseurl}/persons/${id}`);
};

const edit_person = (id, newPerson) => {
  return axios.put(`${baseurl}/persons/${id}`, newPerson);
};

export default { create_person, delete_person, edit_person };

