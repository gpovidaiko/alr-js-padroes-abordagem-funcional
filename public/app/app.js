import { notasSercive } from "./nota/service.js";
import './utils/array-helpers.js';
import { EventEmitter } from "./utils/event-emitter.js";
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
		.then(total => EventEmitter.emit('itensTotalizados', total))
		.catch(console.log)
)

document
	.querySelector('#myButton')
	.onclick = action;
