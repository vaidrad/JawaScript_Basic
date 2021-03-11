function renderOutline(rowLetter) {
    for(i=0;i<10;i++){
        var board = document.createElement('div');
        board.classList.add("cell", "outline");
        board.innerText = rowLetter[i];
        document.getElementById("chessBoard").appendChild(board)
    }
}

function renderBoard(rowNum, chessFigures){
    var board = document.createElement('div');
    board.classList.add("cell", "outline");
    board.innerText = rowNum;
    document.getElementById("chessBoard").appendChild(board)
    for(i=0;i<8;i++){
        board = document.createElement('div');
        board.classList.add("cell");
        board.innerText = chessFigures[i];
        document.getElementById("chessBoard").appendChild(board)
        if(cell){
            board.classList.add("white");
            cell = !cell;
        } else{
            board.classList.add("black");
            cell = !cell;
        }
    }
    board = document.createElement('div');
    board.classList.add("cell", "outline");
    board.innerText = rowNum;
    document.getElementById("chessBoard").appendChild(board);
    cell = !cell;
}

var cell = true; //Переменная для цветка клетки. Истина для белой

// var board = document.createElement('div')
renderOutline(["", "A", "B", "C", "D", "E", "F", "G", "H", ""]);
renderBoard("1", ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"]);
renderBoard("2", ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"]);
for(j=3;j<=6;j++){
    renderBoard(j, ["", "", "", "", "", "", "", ""]);
}
renderBoard("1", ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"]);
renderBoard("2", ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"]);
renderOutline(["", "A", "B", "C", "D", "E", "F", "G", "H", ""]);

//Можно было еще заморочиться и чтобы при изменении размера доски менялись и шрифты, но это не по заданию, смысл. 
// Адаптив готов, там только шрифты доделать если захочется.