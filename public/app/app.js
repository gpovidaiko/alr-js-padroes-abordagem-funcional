import { notasSercive } from "./nota/service.js";
import './utils/array-helpers.js';
import { debounceTime, partialize, pipe, takeUntil } from "./utils/operators.js";

const operations = pipe(
	partialize(takeUntil, 3),
	partialize(debounceTime, 500)
);

const action = operations(
	() => notasSercive
		.sumItems('2143')
		.then(console.log)
		.catch(console.log)
)

document
	.querySelector('#myButton')
	.onclick = action;
