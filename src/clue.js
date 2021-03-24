// ITERATION 1

// Suspects Collection
const suspectsArray = [];

const mrGreen = {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 45,
    description: "He has a lot of connections",
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: "green"
}


const drOrchid = {
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Scientist",
    age: 26,
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color:"white"
}

const profPlum = {
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Designer",
    age: 22,
    description: "Billionaire video game designer",
    image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
    color: "purple"
}

const missScarlet = {
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "Actor",
    age: 31,
    desrciption: "She is an A-list movie star with a dark past",
    image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "red"
}

const mrsPeacock = {
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Socialité",
    age: 36,
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    color: "blue"
}

const mrMustard = {
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Retired Football player",
    age: 62,
    description: "He is a former football player who tries to get by on his former glory",
    image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
    color: "yellow"
}

suspectsArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard)
console.log(suspectsArray);


// Rooms Collection
const roomsArray = [];

const room1 = {
    name: "Dining Room"
}
const room2 ={
    name: "Conservatory"
}
const room3 ={
    name: "Kitchen"
}
const room4 ={
    name: "Study"
}
const room5 ={
    name: "Library"
}
const room6 ={
    name: "Billiard Room"
}
const room7 ={
    name: "Lounge"
}
const room8 ={
    name: "Ballroom"
}
const room9 ={
    name: "Hall"
}
const room10 ={
    name: "Spa"
}
const room11 ={
    name: "Living Room"
}
const room12 ={
    name: "Observatory"
}
const room13 ={
    name: "Theater"
}
const room14 ={
    name: "Guest House"
}
const room15 ={
    name: "Patio"
}
 roomsArray.push(room1, room2, room3, room4, room5, room6, room7, room8, room9, room10, room11, room12, room13, room14, room15);
 console.log(roomsArray);


// Weapons Collection
const weaponsArray = [];

const weapon1 = {
    name: "rope",
    weight: 10
}
const weapon2 = {
    name: "knife",
    weight:8
}
const weapon3 = {
    name: "candlestick",
    weight:2
}
const weapon4 = {
    name:"dumbbell",
    weight:30
}
const weapon5 = {
    name:"poison",
    weight:2
}
const weapon6 = {
    name:"axe",
    weight:15
}
const weapon7 = {
    name:"bat",
    weight:13
}
const weapon8 = {
    name:"trophy",
    weight:25
}
const weapon9 = {
    name:"pistol",
    weight:20
}

weaponsArray.push(weapon1, weapon2, weapon3, weapon4, weapon5, weapon6, weapon7, weapon8, weapon9);
console.log(weaponsArray);

// ITERATION 2
// create a function to randomly select one element from each card stack
function selectRandom(array) {
    let random= array[Math.floor(Math.random()*array.length)];
    return random
}

/* you could:
const randomSuspect = selectRandom(suspectsArray), 
then console.log(randomSuspect) 
but since this variable is declared outside the function, you cannot use it IN the other functions
*/



//create a function that takes no arguement and returns 3 objects (suspect,room,weapon)
function pickMystery(){
    /*further to above comment if you declared randomSuspect here, you could replace the 
    selectRandom(suspectsArray) function with the variable name */

    return {
        suspect:selectRandom(suspectsArray) ,
        room: selectRandom(roomsArray),
        weapon: selectRandom(weaponsArray)
        
    }
}

console.log(pickMystery());


// ITERATION 3
// declare a function that recieves an envelope object(such as the one returned by pickMystery function) as an arguement
// and returns 1stname 2ndname killed Mr.Boddy using weapon in the room

function revealMystery(object) {
    const randomSuspect = selectRandom(suspectsArray)
    const randomRoom = selectRandom(roomsArray)
    const randomWeapon = selectRandom(weaponsArray)

    return `${randomSuspect.firstName} ${randomSuspect.lastName} killed Mr. Boddy using the ${randomWeapon.name} in the ${randomRoom.name}!`
}

console.log(revealMystery(pickMystery()));