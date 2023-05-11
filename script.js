const container = document.getElementById('container');

function hoverChange(e){
    e.target.classList.add('hovered')
}

function resetBoard(){
    const grids = container.querySelectorAll('.grid');
    grids.forEach(grid => grid.classList.remove('hovered'));
}

const clearButton = document.getElementById('clear');

clearButton.addEventListener("click", () => {
    const userConfirmation = prompt('Are you sure you want to clear this board? Type "64" to clear.')
    if (userConfirmation === "64"){
        resetBoard();
    } 
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