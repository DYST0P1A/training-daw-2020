'use strict'

let data = [{
        "state": "Colorado",
        "republic": "18719",
        "democracy": "165"
    },
    {
        "state": "Wyoming",
        "republic": "60711",
        "democracy": "76681"
    },
    {
        "state": "California",
        "republic": "99677",
        "democracy": "76681"
    },
    {
        "state": "North Dakota",
        "republic": "7141",
        "democracy": "38213"
    },
    {
        "state": "Georgia",
        "republic": "63646",
        "democracy": "70995"
    },
    {
        "state": "Virginia",
        "republic": "22790",
        "democracy": "13213"
    },
    {
        "state": "New York",
        "republic": "22598",
        "democracy": "74049"
    },
    {
        "state": "Oregon",
        "republic": "23730",
        "democracy": "82882"
    },
]


// for (let i = 0; i < data.length; i++) {
//     //console.log(`${data[i]}`)
//     console.log(JSON.stringify(data[i]))
// }


// let print = function(item) {
//     console.log(item)
// }
// data.forEach(print)

// data.forEach(item => console.log(item))


// let republicVotes = data.map(value => parseInt(value.republic))
// let republicState = data.map(value => value.state)

// votos republic > democracy
// let filtered = data
//     .filter(state => parseInt(state.republic) > parseInt(state.democracy))
//     .map(value => value.state)


// let filtered = data
//     .map(state => parseInt(state.republic))
// filtered = filtered
//     .reduce((total, value) => total + value)
// console.log(filtered)


//total votos republicanos en los estados que haya ganado
let totalVotesRepublic = data
    .filter(state => parseInt(state.republic) > parseInt(state.democracy))
    .map(value => parseInt(value.republic))
    .reduce((total, value) => total + value)
console.log(totalVotesRepublic)