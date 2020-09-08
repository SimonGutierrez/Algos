/*
create a function that will sort our places by the search string in order of :
1. name,
2. address,
3. desc
*/
const fetch = require('node-fetch');

let placesList = [
    {
        name: 'example',
        address: '1000 64 way',
        desc: 'a good place to start key-word'
    },
    {
        name: 'example2',
        address: '2000 46 way key-word',
        desc: 'a good place to continue'
    },
    {
        name: 'example3 key-word',
        address: '3000 67 way',
        desc: 'a good place to keep going '
    },
    {
        name: 'example4',
        address: '4000 76 way',
        desc: 'a good place to end key-word'
    },
];

const searchWord = 'key-word';
// this is making the assumption that users can only search whole words and not single letters;
const sortbySearch = (places, search) => {
    let names = [];
    let address = [];
    let desc = [];

    for (let i = 0; i < places.length; i++) {
         let currPlace = places[i];
         let currName = currPlace.name.split(' ');
         let currAddress = currPlace.address.split(' ');
         let currDesc = currPlace.desc.split(' ');

         if (currName.includes(search)) {
             names.push(currPlace);
        } else if (currAddress.includes(search)) {
            address.push(currPlace);
        } else if (currDesc.includes(search)) {
            desc.push(currPlace);
        }
    }

    return names.concat(address.concat(desc));
}

// console.log(sortbySearch(placesList, searchWord));

const openSourceDataNYC = 'https://data.cityofnewyork.us/resource/cwjy-rrh3.json'
const makeAPICall = async (api) => {
    // fetch(api)
    // .then(response => response.json())
    // .then(data => console.log(data));

    try {
        const response = await fetch(api);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

console.log(makeAPICall(openSourceDataNYC));
