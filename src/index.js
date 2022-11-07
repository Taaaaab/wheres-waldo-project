import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCeAPLqSmgf1RwkukFhUyqCA9gdDLofmeM",
    authDomain: "wheres-waldo-64ad0.firebaseapp.com",
    projectId: "wheres-waldo-64ad0",
    storageBucket: "wheres-waldo-64ad0.appspot.com",
    messagingSenderId: "669960801547",
    appId: "1:669960801547:web:5cd32ea4cbe8b73b0a660e"
  };

// initialize firebase app
initializeApp(firebaseConfig);
// init firebase services
const db = getFirestore();
// collection ref
const colRef = collection(db, 'char-locations');
// get collection data
let charLocationArray = [];

getDocs(colRef)
  .then((snapshot) => {
    let myArray = []
    snapshot.docs.forEach((doc) => {
        myArray.push({ ...doc.data(), id: doc.id })
    })
    return charLocationArray.push(myArray);
  })
  .catch(err => {
    console.log(err.message);
});

let userClickArray = [];

const wallpaperBox = document.querySelector('.wallpaperBox');

const wallpaper = document.querySelector('.wallpaper');
wallpaper.addEventListener('click', (e) => {
    if (document.querySelector('.targetBox')) {
        document.querySelector('.targetBox').remove();
    }
    const box = document.createElement('div');
    let x = e.clientX;
    let y = e.clientY;
    box.style.left = `${x - e.target.offsetLeft - 60}px`;
    box.style.top = `${y - e.target.offsetTop - 180}px`;
    box.classList.add('targetBox');
    box.innerHTML = 'Homer';
    wallpaperBox.append(box);
    
    storeUserClick(e);
    matchUserToDatabase(userClickArray, charLocationArray);
});

function storeUserClick(e) {
    userClickArray = [];
    let x = e.clientX;
    let y = e.clientY;
    let xPos = (x - e.target.offsetLeft);
    let yPos = (y - e.target.offsetTop);
  
    userClickArray = [xPos, yPos];
    
    return userClickArray;
};

function matchUserToDatabase(userArray, fireArray) {
    let userPosX = userArray[0];
    let dbPosX = fireArray[0][0].Array;
    console.log(userPosX);
    console.log(dbPosX);
    if (dbPosX.includes(userPosX)) {
        console.log('Match Found!');
        return 
    } else {
        console.log('No match');
        return 
    }
};
