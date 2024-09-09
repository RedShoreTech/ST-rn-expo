import React from 'react';
import { StyleSheet } from 'react-native';
import { useState } from 'react';

function Square({ value, onSquareClick }) {
    return (
        <button style={styles.square} onClick={onSquareClick}>
            {value}
        </button>
    )
}

const TicTacToe = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(i) {
        const nextSquares = squares.slice();
        nextSquares[i] = 'X';
        setSquares(nextSquares);
    }

    return (
        <>
            <div>
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div>
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div>
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>
    );
};

const styles = StyleSheet.create({
  square: {
    background: '#7a7',
    border: '2px solid #999',
    float: 'left',
    fontSize: 18,
    fontWeight: 'bold',
    // lineHeight: 34,
    height: 34,
    marginRight: -1,
    marginTop: -1,
    padding: 0,
    width: 34,
  },
});

export default TicTacToe;