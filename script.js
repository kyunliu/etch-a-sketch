const container = document.getElementById('container');

function hoverChange(e){
    e.target.classList.add('hovered')
}

function resetBoard(){
    const grids = container.querySelectorAll('.grid');
    grids.forEach(grid => grid.classList.remove('hovered'));
}

const clearButton = document.getElementById('clear');
let numPrompts = 0;

clearButton.addEventListener("click", () => {
    if (numPrompts >= 100){
        alert("You have reached the maximum nuber of resets. Please refresh.")
        return;
    }

    const userConfirmation = prompt('Are you sure you want to clear this board? Type "64" to clear.')
    if (userConfirmation === "64"){
        resetBoard();
        numPrompts++;
    } 
    console.log(numPrompts);
});


for(let i=0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let j=0; j < 16; j++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        grid.addEventListener('mouseover', hoverChange);
    
        row.appendChild(grid);
    }

    container.appendChild(row);
}