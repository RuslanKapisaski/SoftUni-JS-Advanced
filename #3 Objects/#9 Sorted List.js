// Success:75/100
function createSortedList() {
	return {
		_sortedCollection: [],
		_sortArr: (a, b) => a - b,

		add: function (element) {
			if (typeof element !== "number") {
				console.log("Invalid input");
				exit(0);
			}
			this._sortedCollection.push(element);
			this.size = this._sortedCollection.length;
			return this._sortedCollection.sort(this._sortArr);
		},

		remove: function removeElementAtIndex(index) {
			if (this._sortedCollection.size < index) {
				console.log("Invalid Idex!");
				exit(0);
			}
			this._sortedCollection.splice(index, 1);
			this._sortedCollection.sort(this._sortArr);
			this.size = this._sortedCollection.length;
		},

		get: function getValueAtPosition(index) {
			if (this._sortedCollection.size < index || index < 0) {
				console.log("Invalid position!");
				exit(0);
			}
			return this._sortedCollection[index];
		},
		size: 0,
	};
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
