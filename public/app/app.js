import { notasSercive } from "./nota/service.js";
import './utils/array-helpers.js';
import { debounceTime, partialize, pipe, takeUntil } from "./utils/operators.js";
import { retry, timeoutPromise } from "./utils/promise-helpers.js";

const operations = pipe(
	partialize(takeUntil, 3),
	partialize(debounceTime, 500)
);

const action = operations(
	() => retry(
			3,
			3000,
			() => 
			timeoutPromise(
				200, 
				notasSercive.sumItems('2143')
			) 
		)
		.then(console.log)
		.catch(console.log)
)

document
	.querySelector('#myButton')
	.onclick = action;
