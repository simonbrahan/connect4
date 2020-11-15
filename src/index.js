import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    render() {
        console.log(this.props.counter);
        if (this.props.counter) {
            return (
                <div className="square">
                    <div className={`counter counter-${this.props.counter}`} />
                </div>
            );
        }

        return (<div className="square" />);
    }
}

class Board extends React.Component {
    render() {
        return (
            <div className="board">
                <div className="board-row">
                    <Square counter="yellow" />
                    <Square />
                    <Square counter="red" />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                </div>
                <div className="board-row">
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                </div>
                <div className="board-row">
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                </div>
                <div className="board-row">
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                </div>
                <div className="board-row">
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                </div>
                <div className="board-row">
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Board />, document.getElementById('root'));
