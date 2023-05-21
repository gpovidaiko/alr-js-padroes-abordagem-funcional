export const partialize = (fn, ...args) => 
	fn.bind(null, ...args);

export const compose = (...fns) => 
	value => fns.reduceRight((previous, fn) => fn(previous), value);

export const pipe = (...fns) => 
	value => fns.reduce((previous, fn) => fn(previous), value);
