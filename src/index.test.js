import { expect } from "chai";
import { all, random } from "./index";

describe("starwars-names", () => {
	describe("all", () => {
		it("should be an array of strings", () => {
			expect(all).to.satisfy(isArrayOfStrings);

			const isArrayOfStrings = (array) => {
				return array.every((item) => {
					return typeof item === "string";
				});
			};
		});

		it("should contain `Luke Skywalker`", () => {
			expect(all).to.include("Luke Skywalker");
		});
	});

	describe("random", () => {
		it("should return a random item from the starWars.all", () => {
			let randomItem = random();
			expect(all).to.include(randomItem);
		});

		it("should return an array of random items if passed a number", () => {
			let randomItems = random(3);
			expect(randomItems).to.have.length(3);
			randomItems.forEach((item) => {
				expect(all).to.include(item);
			});
		});
	});
});
