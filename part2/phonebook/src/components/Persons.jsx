const Persons = ({persons, filter, deletePerson}) => {
    return (
        <div>
            {persons.filter(person =>person.name.toUpperCase().includes(filter.toUpperCase())).map(person => <div key={person.id}> {person.name} {person.number} <button onClick={() => deletePerson(person.id)}>delete {person.id}</button></div>)}
        </div>
    )
}
export default Persons