var restart = document.querySelector('#b');

var squares = document.querySelectorAll('td');

function clearBoard() {
    for(let i = 0; i < squares.length; i++) {
        squares[i].textContent = '';
    }
}

restart.addEventListener('click',clearBoard);