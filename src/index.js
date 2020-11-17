import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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
            player: "red"
        };
    }

    handleClick(idx) {
        const player = this.state.player;
        const nextPlayer = player === "red" ? "yellow" : "red";

        const squares = this.state.squares.slice();
        squares[idx] = player;

        this.setState({ squares: squares, player: nextPlayer });
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

    render() {
        return (
            <div className="board">
                { this.row(0) }
                { this.row(7) }
                { this.row(14) }
                { this.row(21) }
                { this.row(28) }
                { this.row(35) }
            </div>
        );
    }
}

ReactDOM.render(<Board />, document.getElementById('root'));
