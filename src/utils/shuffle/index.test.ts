import shuffle from '.';

describe('shuffle', () => {
	it('returns an array with same length after being shuffled', () => {
		const array = [1, 2, 3];
		shuffle(array);
		expect(array).toHaveLength(3);
	});
	it('returns an array with the same elements after being shuffled', () => {
		const array = [1, 2, 3];
		shuffle(array);
		expect(array).toContain(1 && 2 && 3);
	});
});
