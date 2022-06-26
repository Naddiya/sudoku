import { GRID, NUMBERS } from 'typings';


interface IInput {
	grid: GRID;
	row: number;
	value: NUMBERS;
}

/**
 * Function return true if value already in current grid row
 * @param props Object with 9X9 Sudoku grid, row index and value
 * @returns 
 */

const isInRow = (props: IInput): boolean => {
	const { grid, row, value } = props;
	return grid[row].includes(value);
};

export default isInRow;
