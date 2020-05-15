export const findIndex = (i, yOffset, positions) => {
	let target = i;
	const { top, height } = positions[i];
	const bottom = top + height;

	// If moving down
	if (yOffset > 0) {
		const nextItem = positions[i + 1];
		if (nextItem === undefined) return i;

		const swapOffset = distance(bottom, nextItem.top + nextItem.height / 2);
		if (yOffset > swapOffset) target = i + 1;

		// If moving up
	} else if (yOffset < 0) {
		const prevItem = positions[i - 1];
		if (prevItem === undefined) return i;

		const prevBottom = prevItem.top + prevItem.height;
		const swapOffset = distance(top, prevBottom - prevItem.height / 2);
		if (yOffset < -swapOffset) target = i - 1;
	}

	return clamp(0, positions.length, target);
};

export function clamp(min, max, value) {
	if (value < min) {
		return min;
	}
	if (value > max) {
		return max;
	}
	return value;
}

export function distance(a, b) {
	return Math.abs(a - b);
}



export const arrayMove = (array, from, to) => {
	array = array.slice();
    const startIndex = to < 0 ? array.length + to : to;
	const item = array.splice(from, 1)[0];
	array.splice(startIndex, 0, item);
	return array;
};

