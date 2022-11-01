
let setCurrentChar = '';

const wallpaperBox = document.querySelector('.wallpaperBox');

const wallpaper = document.querySelector('.wallpaper');
wallpaper.addEventListener('click', (e) => {
    if (document.querySelector('.targetBox')) {
        document.querySelector('.targetBox').remove();
    }
    const box = document.createElement('div');
    box.classList.add('targetBox');
    box.style.left = (e.pageX - 32 + 'px');
    box.style.top = (e.pageY - 272 + 'px');
    wallpaperBox.append(box);
    
});