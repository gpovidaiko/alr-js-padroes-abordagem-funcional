import { notasSercive } from "./nota/service.js";
import './utils/array-helpers.js';

document
.querySelector('#myButton')
.onclick = () =>
	notasSercive
	.sumItems('2143')
	.then(console.log)
	.catch(console.log);