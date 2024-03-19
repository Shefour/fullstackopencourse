import axios from "axios";

const baseurl = "/api/persons";

const create_person = async (newPerson) => {
    const existingPerson = await axios.get(`${baseurl}?name=${newPerson.name}`);

    if (existingPerson.data.length > 0) {
      const shouldUpdate = window.confirm(
        `${newPerson.name} is already added to the phonebook. Replace the old number with a new one?`
      );

      if (shouldUpdate) {
        const personToUpdate = existingPerson.data[0];
        const updatedPerson = { ...personToUpdate, number: newPerson.number };

        await axios.put(`${baseurl}/${personToUpdate.id}`, updatedPerson);
        return updatedPerson;
      } else {
        // User chose not to update, return the existing person
        return existingPerson.data[0];
      }
    } else {
      // Person doesn't exist, create a new one
      const response = await axios.post(`${baseurl}`, newPerson);
      return response.data;
    }
  };

const delete_person = (id) => {
  return axios.delete(`${baseurl}/${id}`);
};

export default { create_person, delete_person };
