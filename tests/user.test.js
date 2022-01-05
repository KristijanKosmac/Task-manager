const request = require('supertest')
const app = require("../src/app")

test('Shoud sign up a new user', async () => {
    await request(app).post('/users').send({
        name: 'Andrew',
        email: "andrew@emaple.com",
        password: "MyPass777!"
    }).expect(201)
})