if (!Array.prototype.$flatMap) {
	Array.prototype.$flatMap = function(fn) {
		return this.map(fn).reduce((destinyArray, array) => destinyArray.concat(array), []);
	}
}