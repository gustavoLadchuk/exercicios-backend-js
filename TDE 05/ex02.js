const faker = require("@faker-js/faker")

function getDadosFake()
{
    const nome = faker.faker.person.fullName()
    const email = faker.faker.internet.email()
    const dataNascimento = faker.faker.date.birthdate()

    console.log("Nome: " + nome)
    console.log("Email:" + email)
    console.log("Data de nascimento: " + dataNascimento)
}

getDadosFake()