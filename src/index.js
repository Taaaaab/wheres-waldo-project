
let setCurrentChar = '';

const errorMsg = document.querySelector('.errorMsg');

const homer = document.querySelector('.homerImg');
homer.addEventListener('click', () => {
    errorMsg.innerHTML = "";
    homer.classList.add('selectBorder');
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
        box.style.left = (e.pageX - 32 + 'px');
        box.style.top = (e.pageY - 272 + 'px');
        wallpaperBox.append(box);
        console.log(e.clientX);
    }
});