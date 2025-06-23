const reguest = (endpoint) => {
    fetch(endpoint)
        .then((result) => {
            return result.json();
        })
        .then((result) => {
            result.results.forEach(character => {
                console.log(`${character.name}, Species: ${character.species}`);
            });
        });
};

reguest('https://rickandmortyapi.com/api/character/?page=1')
reguest('https://rickandmortyapi.com/api/character/?page=10')
reguest('https://rickandmortyapi.com/api/character/?page=4')
reguest('https://rickandmortyapi.com/api/character/?page=6')
reguest('https://rickandmortyapi.com/api/character/?page=12')