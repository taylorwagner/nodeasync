let number = 21;
let baseURL = "http://numbersapi.com";

async function part1() {
    let data = await $.getJSON(`${baseURL}/${number}?json`);
    console.log(data);
}
part1();

const numbers = [28, 40, 1];
async function part2() {
    let data = await $.getJSON(`${baseURL}/${numbers}?json`);
    console.log(data);
}
part2();

async function part3() {
    let facts = await Promise.all(
        Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${number}?json`))
    );
    facts.forEach(data => {
        $('body').append(`<p>${data.text}</p>`);
    });
}
part3();