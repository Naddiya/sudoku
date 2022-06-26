import { NUMBERS, SQUARE } from 'typings';

interface IInput {
	square: SQUARE;
	value: NUMBERS;
}

/**
 * Function return true if value already used in current grid square
 * @param props Object with 3x3 square and value
 * @returns 
 */

const isInSquare = (props: IInput): boolean => {
	const { square, value } = props;

	return [...square[0], ...square[1], ...square[2]].includes(value);
};

export default isInSquare;
