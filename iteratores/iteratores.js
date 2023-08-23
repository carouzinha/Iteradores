const hobbies = ['ler','jogar volei','ouvir musica','dormir'];
hobbies.forEach(function(hobby){
    console.log('Ola, eu sou o hobby,'+hobby+'!');
});
const nomeDoLivro = hobbies.map(function(hobby){
    return 'O incrivel mundo de '+ hobby;
});
console.log(nomeDoLivro)

const catalogos =['o varão que mudou minha vida','um caso perdido','verity']
const catalogo = catalogos.map(function(catalogos){
    return 'o meu catalogo tem: '+ catalogos;
});
console.log(catalogo)

const dHobbies = hobbies.filter(function (hobby) {
    return hobby[0] === 'd';
});

console.log(dHobbies);

const filterHobbies = hobbies.filter(function (hobby) {
    return hobby[0] === 'l';
});

console.log(filterHobbies);

const runningPosition = hobbies.findIndex(function(hobby) {
    return hobby === 'ler';
    });
    console.log("Ler está na posição: " + runningPosition);

const RunningPosition = hobbies.findIndex(function (hobby) {
    return hobby === 'ouvir musica';
});
console.log("Ouvir musica está na posição: " + RunningPosition);

const allHobbies = hobbies.reduce(function(accumulator, hobby) {
    return accumulator + " e " + hobby; }, "");
    
    console.log("Meus hobbies são: " + allHobbies);

const DicasDeHobbies = hobbies.reduce(function (accumulator, hobby) {
    return accumulator + " e " + hobby;
}, "");

console.log("Você pode testar hobbies como: " + allHobbies);

const hasVHobby = hobbies.some(function(hobby) {
    return hobby[0] === 'v'; });
    
    console.log("Eu tenho um hobby que começa com 'v'? " + hasVHobby);

const has3Hobby = hobbies.some(function (hobby) {
    return hobby.length < 3;
});
console.log("Eu tenho um hobby que tem 3 letras? " + has3Hobby);

const allShort = hobbies.every(function(hobby) { return hobby.length < 15; });
console.log("Todos os meus hobbies têm menos de 15 letras? " + allShort);

const allMinisculas = hobbies.every(function(hobby) { return hobby === hobby.toLowerCase(); });
console.log("Todos os meus hobbies têm letras minisculas? " + allMinisculas);


//adaptei para seis letras 
const sixLetterHobby = hobbies.find(function(hobby) {
    return hobby.length === 6; });
    console.log("Meu primeiro hobby com 5 letras é: " + sixLetterHobby);

//adaptei para letra s

const SLetterHobby = hobbies.find(function(hobby) {
    return hobby.includes("s"); });
    console.log("Meu hobby com a letra S é: " + SLetterHobby);

const firstThreeHobbies = hobbies.slice(0, 3); console.log("Meus três primeiros hobbies são: ",
firstThreeHobbies);

const firstFourHobbies = hobbies.slice(1, 4); console.log("Meus hobbies do segundo ao quarto são: ",
firstFourHobbies);
