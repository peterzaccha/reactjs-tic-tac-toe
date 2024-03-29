class TicTacToe {
    players;
    winner;
    grid;
    currentPlayer;
    gameOver;

    constructor() {
        this.players = ['X', 'O'];
        this.winner = null;
        this.grid = Array(9).fill(null);
        this.currentPlayer = this.players[Math.round(Math.random())];
        this.gameOver = false
    }


    play(i) {
        if (!this.gameOver && this.grid[i] === null) {
            this.grid[i] = this.currentPlayer;
            this.switchPlayer();
            this.calculateGameOver();
            this.calculateWinner();
            return true;
        }
        return false;
    }

    switchPlayer() {
        this.currentPlayer === this.players[0] ?
            this.currentPlayer = this.players[1] :
            this.currentPlayer = this.players[0];
    }

    calculateGameOver() {
        if (
            !this.grid.includes(null)
        ) {
            this.gameOver = true;
        }
    }

    calculateWinner() {

    }
}

export default TicTacToe;
