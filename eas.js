const content = document.querySelector('.content');
const button = document.querySelector('button');

button.addEventListener('click', function(e){
    let boxes = parseInt(prompt("Enter a number between 1 and 100: "));
    console.log('boxes: ' + boxes);
    if(boxes === NaN || boxes > 100 || boxes < 1) { return; };

    boxesSqrd = boxes * boxes;
    console.log('boxes sqrd: ' + boxesSqrd);
    createBoxes(boxesSqrd, boxes);
})

function createBoxes(boxesSqrd, numberOfBoxes){
    
    for(let i = 0; i < boxesSqrd; i++){
        
        const box = document.createElement('div');
        box.className = 'box';
        box.style.height = `calc(1000px / ${numberOfBoxes})`;
        box.style.width = `calc(1000px / ${numberOfBoxes})`;
        content.appendChild(box);

        box.addEventListener('mouseover', function(e){
            box.style.backgroundColor = 'black';
        });
    }

}

