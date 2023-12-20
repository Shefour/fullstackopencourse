import axios from "axios";

const baseurl = "http://localhost:3001";

const create_person = async (newPerson) => {
  try {
    const existingPerson = await axios.get(`${baseurl}/persons?name=${newPerson.name}`);

    if (existingPerson.data.length > 0) {
      const shouldUpdate = window.confirm(
        `${newPerson.name} is already added to the phonebook. Replace the old number with a new one?`
      );

      if (shouldUpdate) {
        const personToUpdate = existingPerson.data[0];
        const updatedPerson = { ...personToUpdate, number: newPerson.number };

        await axios.put(`${baseurl}/persons/${personToUpdate.id}`, updatedPerson);
        return updatedPerson;
      } else {
        // User chose not to update, return the existing person
        return existingPerson.data[0];
      }
    } else {
      // Person doesn't exist, create a new one
      const response = await axios.post(`${baseurl}/persons`, newPerson);
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};

const delete_person = (id) => {
  return axios.delete(`${baseurl}/persons/${id}`);
};

export default { create_person, delete_person };
