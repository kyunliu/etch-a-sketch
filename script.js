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
    const userConfirmation = prompt('Type the amount of squares you would like. (Max is 100)')
    if(userConfirmation <= 100){
        resetBoard();
        createGrid(userConfirmation);
    }else{
        alert('Grid size must be 100 or less.');
    }
});

function createGrid(userConfirmation = 16){
    container.innerHTML = '';
    for(let i=0; i < userConfirmation; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for (let j=0; j < userConfirmation; j++) {
            const grid = document.createElement('div');
            grid.classList.add('grid');
            grid.addEventListener('mouseover', hoverChange);
        
            row.appendChild(grid);
        }

        container.appendChild(row);
    }
}

createGrid();

