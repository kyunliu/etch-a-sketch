const container = document.getElementById('container');

function hoverChange(e){
    e.target.classList.add('hovered')
}

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