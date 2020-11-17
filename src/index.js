import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const wins = [
    [0, 7, 14, 21], [0, 8, 16, 24], [0, 1, 2, 3], [1, 8, 15, 22], [1, 9, 17, 25], [1, 2, 3, 4],
    [2, 9, 16, 23], [2, 10, 18, 26], [2, 3, 4, 5], [3, 9, 15, 21], [3, 10, 17, 24], [3, 11, 19, 27],
    [3, 4, 5, 6], [4, 10, 16, 22], [4, 11, 18, 25], [5, 11, 17, 23], [5, 12, 19, 26], [6, 12, 18, 24],
    [6, 13, 20, 27], [7, 14, 21, 28], [7, 15, 23, 31], [7, 8, 9, 10], [8, 15, 22, 29], [8, 16, 24, 32],
    [8, 9, 10, 11], [9, 16, 23, 30], [9, 17, 25, 33], [9, 10, 11, 12], [10, 16, 22, 28], [10, 17, 24, 31],
    [10, 18, 26, 34], [10, 11, 12, 13], [11, 17, 23, 29], [11, 18, 25, 32], [12, 18, 24, 30], [12, 19, 26, 33],
    [13, 19, 25, 31], [13, 20, 27, 34], [14, 21, 28, 35], [14, 22, 30, 38], [14, 15, 16, 17], [15, 22, 29, 36],
    [15, 23, 31, 39], [15, 16, 17, 18], [16, 23, 30, 37], [16, 24, 32, 40], [16, 17, 18, 19], [17, 23, 29, 35],
    [17, 24, 31, 38], [17, 25, 33, 41], [17, 18, 19, 20], [18, 24, 30, 36], [18, 25, 32, 39], [19, 25, 31, 37],
    [19, 26, 33, 40], [20, 26, 32, 38], [20, 27, 34, 41], [21, 22, 23, 24], [22, 23, 24, 25], [23, 24, 25, 26],
    [24, 25, 26, 27], [28, 29, 30, 31], [29, 30, 31, 32], [30, 31, 32, 33], [31, 32, 33, 34], [35, 36, 37, 38],
    [36, 37, 38, 39], [37, 38, 39, 40], [38, 39, 40, 41]
]

class Square extends React.Component {
    render() {
        if (this.props.withCounter) {
            return (
                <div className="square">
                    <div className={`counter counter-${this.props.withCounter}`} />
                </div>
            );
        }

        return (<div className="square" onClick={ this.props.handleClick } />);
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            squares: Array(42).fill(null),
            player: "red",
            winner: null
        };
    }

    handleClick(idx) {
        if (this.state.winner) {
            return;
        }

        const player = this.state.player;
        const nextPlayer = player === "red" ? "yellow" : "red";

        const squares = this.state.squares.slice();
        squares[idx] = player;

        this.setState({ squares: squares, player: nextPlayer, winner: checkForWin(squares) });
    }

    handleReset() {
        this.setState({
            squares: Array(42).fill(null),
            player: "red",
            winner: null
        });
    }

    square(idx) {
        if (this.state.squares[idx]) {
            return (<Square withCounter={ this.state.squares[idx] } />);
        } else {
            return (<Square handleClick={ () => this.handleClick(idx) } />);
        }
    }

    row(startIdx) {
        return (
            <div className="board-row">
                { this.square(startIdx) }
                { this.square(startIdx + 1) }
                { this.square(startIdx + 2) }
                { this.square(startIdx + 3) }
                { this.square(startIdx + 4) }
                { this.square(startIdx + 5) }
                { this.square(startIdx + 6) }
            </div>
        );
    }

    gameStatus() {
        if (this.state.winner) {
            return (
                <div className="status">
                    <p>{ this.state.winner } won!</p>
                    <button onClick={ () => this.handleReset() }>Play Again</button>
                </div>
            );
        } else {
            return (
                <div className="status">
                    <p>{ this.state.player }'s turn</p>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="game">
                <div className="board">
                    { this.row(0) }
                    { this.row(7) }
                    { this.row(14) }
                    { this.row(21) }
                    { this.row(28) }
                    { this.row(35) }
                </div>
                { this.gameStatus() }
            </div>
        );
    }
}

function checkForWin(squares) {
    for (const line of wins) {
        if(!squares[line[0]]) {
            continue;
        }

        if (squares[line[0]] === squares[line[1]] &&
            squares[line[1]] === squares[line[2]] &&
            squares[line[2]] === squares[line[3]]
        ) {
            return squares[line[0]];
        }
    }

    return null;
}

ReactDOM.render(<Board />, document.getElementById('root'));
