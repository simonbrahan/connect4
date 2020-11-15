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

        return (<div className="square" />);
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            squares: [
                "red", null, "yellow", null, null, null, null, null, null, null, null, null, null, null,
                null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                null, null, null, null, null, null, null, null, null, null, null, null, null, null
            ]
        }
    }

    square(counter) {
        if (counter) {
            return (<Square withCounter={counter} />);
        } else {
            return (<Square />);
        }
    }

    row(counters) {
        return (
            <div className="board-row">
                { this.square(counters[0]) }
                { this.square(counters[1]) }
                { this.square(counters[2]) }
                { this.square(counters[3]) }
                { this.square(counters[4]) }
                { this.square(counters[5]) }
                { this.square(counters[6]) }
            </div>
        );
    }

    render() {
        return (
            <div className="board">
                {this.row(this.state.squares.slice(0, 7))}
                {this.row(this.state.squares.slice(8, 14))}
                {this.row(this.state.squares.slice(15, 21))}
                {this.row(this.state.squares.slice(22, 28))}
                {this.row(this.state.squares.slice(29, 35))}
                {this.row(this.state.squares.slice(36, 42))}
            </div>
        );
    }
}

ReactDOM.render(<Board />, document.getElementById('root'));
