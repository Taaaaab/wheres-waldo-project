import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, doc } from 'firebase/firestore'

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
    // remove target box from previous selection
    if (document.querySelector('.targetBox')) {
        document.querySelector('.targetBox').remove();
    }
    // create target box around user click
    const box = document.createElement('div');
    let x = e.clientX;
    let y = e.clientY;
    box.style.left = `${x - e.target.offsetLeft - 100}px`;
    box.style.top = `${y - e.target.offsetTop - 10}px`;
    box.classList.add('targetBox');
    box.innerHTML = 'Which character?';
    // add characters to target box
    const homerImg = document.createElement('img');
    homerImg.classList.add('characterTarget');
    homerImg.src = '../src/homer.jpg';
    box.appendChild(homerImg);
    const apuImg = document.createElement('img');
    apuImg.classList.add('characterTarget');
    apuImg.src = '../src/apu.jpg';
    box.appendChild(apuImg);
    const bartImg = document.createElement('img');
    bartImg.classList.add('characterTarget');
    bartImg.src = '../src/bart.jpg';
    box.appendChild(bartImg);

    // add target box to wallpaper
    wallpaperBox.append(box);

    // store user click location
    storeUserClick(e);

    // have user select character within target box
    homerImg.addEventListener('click', () => {
        apuImg.classList.remove('characterHighlight');
        bartImg.classList.remove('characterHighlight');

        homerImg.classList.add('characterHighlight');
        matchUserToHomer(userClickArray, charLocationArray);
    });
    apuImg.addEventListener('click', () => {
        homerImg.classList.remove('characterHighlight');
        bartImg.classList.remove('characterHighlight');

        apuImg.classList.add('characterHighlight');
        matchUserToApu(userClickArray, charLocationArray);
    });
    bartImg.addEventListener('click', () => {
        homerImg.classList.remove('characterHighlight');
        apuImg.classList.remove('characterHighlight');

        bartImg.classList.add('characterHighlight');
        matchUserToBart(userClickArray, charLocationArray);
    });
    
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

function matchUserToHomer(userArray, fireArray) {
    let userPosX = userArray[0];
    let dbPosX = fireArray[0][4].Array;

    let userPosY = userArray[1];
    let dbPosY = fireArray[0][3].array;
  
    console.log(userPosX, userPosY);
    console.log(dbPosX);
    console.log(dbPosY);
    if ( dbPosX.includes(userPosX) && dbPosY.includes(userPosY) ) {
        console.log('Homer Found!');
        const homerFound = document.createElement('div');
        homerFound.classList.add('homerFound');
        wallpaperBox.append(homerFound);

        const characterHomer = document.querySelector('.characterHomer');
        characterHomer.innerHTML = 'Homer Found!'
        return 
    } else {
        console.log('Homer not found');
        return 
    }
};

function matchUserToApu(userArray, fireArray) {
    let userPosX = userArray[0];
    let dbPosX = fireArray[0][0].apu;

    let userPosY = userArray[1];
    let dbPosY = fireArray[0][2].apuY;
  
    console.log(userPosX, userPosY);
    console.log(dbPosX);
    console.log(dbPosY);
    if ( dbPosX.includes(userPosX) && dbPosY.includes(userPosY) ) {
        console.log('Apu Found!');
        const apuFound = document.createElement('div');
        apuFound.classList.add('apuFound');
        wallpaperBox.append(apuFound);

        const characterApu = document.querySelector('.characterApu');
        characterApu.innerHTML = 'Apu Found!'
        return 
    } else {
        console.log('Apu not found');
        return 
    }
};

function matchUserToBart(userArray, fireArray) {
    let userPosX = userArray[0];
    let dbPosX = fireArray[0][1].bartX;

    let userPosY = userArray[1];
    let dbPosY = fireArray[0][5].bartY;
  
    console.log(userPosX, userPosY);
    console.log(dbPosX);
    console.log(dbPosY);
    if ( dbPosX.includes(userPosX) && dbPosY.includes(userPosY) ) {
        console.log('Bart Found!');
        const bartFound = document.createElement('div');
        bartFound.classList.add('bartFound');
        wallpaperBox.append(bartFound);

        const characterBart = document.querySelector('.characterBart');
        characterBart.innerHTML = 'Bart Found!'
        return 
    } else {
        console.log('Bart not found');
        return 
    }
};

const timerTitle = document.getElementById('timerTitle');
const timer = document.getElementById('timer');
let timerInterval;

window.onload = function() {
    startTimer();

};

function startTimer() {
    // First we start by clearing the existing timer, in case of a restart
    clearInterval(timerInterval);
    // Then we clear the variables
    let second = 0,
      minute = 0,
      hour = 0;
    
    // Next we set a interval every 1000 ms
    timerInterval = setInterval(function () {
    
    // Check to see if paused
    stopTimer();
    // Next, we add a new second since one second is passed
    second++;
    
    // We set the timer text to include a two digit representation
      timer.innerHTML =
        (hour ? hour + ':' : '') +
        (minute < 10 ? '0' + minute : minute) +
        ':' +
        (second < 10 ? '0' + second : second);
        
      // We check if the second equals 60 "one minute"
      if (second == 60) {
        // If so, we add a minute and reset our seconds to 0
        minute++;
        second = 0;
      }
  
      // If we hit 60 minutes "one hour" we reset the minutes and plus an hour
      if (minute == 60) {
        hour++;
        minute = 0;
      }
    }, 1000);
    
};

function stopTimer() {
    if (document.querySelector('.characterHomer').innerHTML === 'Homer Found!' &&
    document.querySelector('.characterApu').innerHTML === 'Apu Found!' &&
    document.querySelector('.characterBart').innerHTML === 'Bart Found!') {
        clearInterval(timerInterval);
        timerInterval = undefined;
        timerTitle.innerHTML = 'Time to find all 3 characters:';
    }
}