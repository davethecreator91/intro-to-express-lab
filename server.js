// Import Express
const express = require('express');

// Create an Express app
const app = express();


// Define routes here:

//Greetings
app.get('/greetings/:name', (req, res) => {
    res.send(`<h1>Hello there ${req.params.name} !</h1>`);
  });

app.get('/roll/:number', (req, res) => {
    const number = Number(req.params.number);

    let randomNumber = Math.floor(Math.random() * number)

    if (isNaN(number)) {
       return res.send(`<h1>Please Input a Number</h1>`)
    }
    res.send(`<h1>You rolled a ${randomNumber}</h1>`);

    console.log(randomNumber);
    
});

//collectibles


const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];


app.get('/collectibles/:stuff',(req,res) => {
    let stuff = req.params.stuff;
    let inCollection = collectibles.find(item => item.name === stuff);

    if (inCollection) {
       return res.send(`So, you want the ${inCollection.name}? For ${inCollection.price} it can be yours!`);
    }
    else {
        return  res.send(`${stuff} is not yet in stock. Check back soon!`)
        }
    }
);

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get('/shoes', (req,res) => {

    const shoe = req.params.shoe
    const minPrice = req.query.min-price
    const maxPrice = req.query.max-price
    const type = req.query.type

// min price displays shoes above price queried

minPriceShoes = shoes.find(item => item > minPrice)

res.send(minPrice)
// max price displays shoes below price queried

maxPriceShoes = shoes.find(item => item < maxPrice)

// type displays shoes of a specified tyle

typeShoes = shoes.find(item => item === shoes.type)

    // req.send(req.param.shoes);
});



// Practice

// app.get('/shoes/:size', (req, res) => {
//     res.send(`<h1>Your wear a ${req.params.size} shoe</h1>`);
// });









// app.get('/shirts/:size', (req,res) => {
//     res.send(`<h1>Your shirt size is ${req.params.size}</h1>`)
// });







































































// Listen on port 3000

app.listen(3000, () => {
    console.log('Listening on port 3001')
  })

// app.listen(3001)