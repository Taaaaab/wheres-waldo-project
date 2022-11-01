
let setCurrentChar = '';

const errorMsg = document.querySelector('.errorMsg');

const homer = document.querySelector('.homerImg');
homer.addEventListener('click', () => {
    errorMsg.innerHTML = "";
    setCurrentChar = 'homer'
});

const wallpaperBox = document.querySelector('.wallpaperBox');

const wallpaper = document.querySelector('.wallpaper');
wallpaper.addEventListener('click', (e) => {
    if(setCurrentChar === '') {
        errorMsg.innerHTML = "Select a character first!"
    } else {
        const box = document.createElement('div');
        box.classList.add('targetBox');
        let xPosition = e.clientX;
        let yPosition = e.clientY;
        box.style.left = xPosition;
        // box.style.top = `${yPosition}`
        wallpaperBox.append(box);
        console.log(xPosition);
    }
});