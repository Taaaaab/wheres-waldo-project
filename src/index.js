
let setCurrentChar = '';

const wallpaperBox = document.querySelector('.wallpaperBox');

const wallpaper = document.querySelector('.wallpaper');
wallpaper.addEventListener('click', (e) => {
    if (document.querySelector('.targetBox')) {
        document.querySelector('.targetBox').remove();
    }
    const box = document.createElement('div');
    let x = e.clientX - 20;
    let y = e.clientY - 30;
    box.style.left = `${x}px`;
    box.style.top = `${y}px`;
    box.classList.add('targetBox');
    box.innerHTML = 'Homer';
    wallpaperBox.append(box);
    
});