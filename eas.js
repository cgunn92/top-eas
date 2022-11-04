const content = document.querySelector('.content');
const button = document.querySelector('button');

for(let i = 0; i < 25; i++){
    const box = document.createElement('div');
    box.className = 'box';
    box.textContent = 'Im a box';
    content.appendChild(box);
}