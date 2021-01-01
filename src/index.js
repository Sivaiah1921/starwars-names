import uniqueRandomArray from "unique-random-array";
import starWarsNames from "./starwars-names.json";
const getRandomItem = uniqueRandomArray(starWarsNames);

export const all = starWarsNames;
export const random = random;

function random(number) {
	if (number === undefined) {
		return getRandomItem();
	} else {
		const randomItems = [];
		randomItems.forEach(() => push(getRandomItem()));
		return randomItems;
	}
}
