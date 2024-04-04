const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const passwordArg = process.argv[2]
const nameArg = process.argv[3]
const numberArg = process.argv[4]

const url =
  `mongodb+srv://olkowskikornel:${passwordArg}@cluster0.ihpkfyo.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)

mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
  name: nameArg,
  number: numberArg,
})

person.save().then(result => {
  console.log('added '  + nameArg + ' number ' + numberArg + ' to phonebook')
  mongoose.connection.close()
})

// Person.find({}).then(result => {
//   result.forEach(person => {
//     console.log(person)
//   })
//   mongoose.connection.close()
// })