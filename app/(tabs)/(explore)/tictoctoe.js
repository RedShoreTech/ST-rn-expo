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

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) return;
        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? 'X' : 'O';
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }

	const winner = calculateWinner(squares);
	let status;
	if (winner) {
		status = "Winner: " + winner;
	}
	else {
		status = "Next player: " + (xIsNext ? "X" : "O");
	}
    return (
        <div style={styles.board}>
            <div>{status}</div>
            <div style={styles.boardRow}>
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div style={styles.boardRow}>
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div style={styles.boardRow}>
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </div>
    );
};

const TicTacToe = () => {
	return (
    <>
      <div style={styles.game}>
        <Board />
      </div>
      <div>
        <ol>{/* todo */}</ol>
      </div>
    </>
	)
};

const styles = StyleSheet.create({
  square: {
    background: '#7a7', // 设置方格的背景颜色为浅绿色
    border: '2px solid #999', // 设置2像素宽的实线边框，颜色为深灰色
    float: 'left', // 使方格向左浮动，以便它们能够并排排列
    fontSize: 18, // 设置方格内文字的字体大小为18像素
    fontWeight: 'bold', // 设置方格内文字为粗体
    // lineHeight: 34, // 这行被注释掉了，原本用于设置行高
    height: 34, // 设置方格的高度为34像素
    marginRight: -1, // 右边距为-1像素，用于抵消边框重叠
    marginTop: -1, // 上边距为-1像素，用于抵消边框重叠
    padding: 0, // 设置内边距为0
    width: 34, // 设置方格的宽度为34像素
  },
  board: {
    display: 'flex', // 使用flexbox布局
    flexDirection: 'column', // 设置flex容器的主轴方向为垂直
    alignItems: 'center', // 在交叉轴（水平方向）上居中对齐子元素
  },
  boardRow: {
    display: 'flex', // 使用flexbox布局
    flexDirection: 'row', // 设置flex容器的主轴方向为水平
  },
  game: {
    display: 'flex', // 使用flexbox布局
    justifyContent: 'center', // 在主轴（水平方向）上居中对齐子元素
    alignItems: 'center', // 在交叉轴（垂直方向）上居中对齐子元素
    height: '100%', // 设置高度为父容器的100%
  },
});

export default TicTacToe;