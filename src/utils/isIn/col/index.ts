import { GRID, NUMBERS } from 'typings';

interface IInput {
	col: number;
	grid: GRID;
	value: NUMBERS;
}

/**
 * Function return true if value already in current grid col
 * @param props Object with 9X9 Sudoku grid, col index and value
 * @returns
 */

const isInCol = (props: IInput): boolean => {
	const { col, grid, value } = props;
  for (let i = 0; i < 9; i++){
    if (value === grid[i][col]){
      return true;
    }
  }
  return false;
};

export default isInCol;
