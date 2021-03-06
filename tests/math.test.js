const { calculateTip, celsiusToFahrenheit, fahrenheitToCelsius, add } = require("../src/math")

test("Should calculate total with tip", () => {
    const total = calculateTip(10, .3)

    expect(total).toBe(13)
    // if (total !== 13) {
    //     throw new Error('Total tip shoud be 13, Got ' + total)
    // }
})

test("Should calculate total with default tip", () => {
    const total = calculateTip(10)

    expect(total).toBe(13)
})

test("Should calculate celsius to fahrenheit ", () => {
    const fahrenheit = celsiusToFahrenheit(0)

    expect(fahrenheit).toBe(32)
})

test("Should calculate fahrenheit to celsius", () => {
    const celsius = fahrenheitToCelsius(32)

    expect(celsius).toBe(0)
})

// test("async test demo", (done) => {
//     setTimeout(()=> {
//         expect(1).toBe(2)
//         done()
//     }, 2000)
// })  

test("Should add two numbers", (done) => {
    add(2,3).then((sum) => {
        expect(sum).toBe(5)
        done()
    })
})

test("Should add two numbers asunc/await", async () => {
    const sum = await add(2,3)

    expect(sum).toBe(5)
})