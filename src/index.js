import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Board extends React.Component {
    render() {
        return (
            <div className="board">
                <div className="board-row">
                    <div className="square" />
                    <div className="square" />
                    <div className="square" />
                    <div className="square" />
                    <div className="square" />
                    <div className="square" />
                    <div className="square" />
                </div>
                <div className="board-row">
                    <div className="square" />
                    <div className="square" />
                    <div className="square" />
                    <div className="square" />
                    <div className="square" />
                    <div className="square" />
                    <div className="square" />
                </div>
                <div className="board-row">
                    <div className="square" />
                    <div className="square" />
                    <div className="square" />
                    <div className="square" />
                    <div className="square" />
                    <div className="square" />
                    <div className="square" />
                </div>
                <div className="board-row">
                    <div className="square" />
                    <div className="square" />
                    <div className="square" />
                    <div className="square" />
                    <div className="square" />
                    <div className="square" />
                    <div className="square" />
                </div>
                <div className="board-row">
                    <div className="square" />
                    <div className="square" />
                    <div className="square" />
                    <div className="square" />
                    <div className="square" />
                    <div className="square" />
                    <div className="square" />
                </div>
                <div className="board-row">
                    <div className="square" />
                    <div className="square" />
                    <div className="square" />
                    <div className="square" />
                    <div className="square" />
                    <div className="square" />
                    <div className="square" />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Board />, document.getElementById('root'));
