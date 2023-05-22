export const handleStatus = res =>
	res.ok ? res.json() : Promise.reject(res.statusText);

export const log = res => {
	console.log(res);
	return res;
}

export const timeoutPromise = (milliseconds, promise) => {
	const timeoutPromise = new Promise((resolve, reject) => 
		setTimeout(() => reject(`Limite da promise excedido (limite: ${milliseconds} ms)`), milliseconds)
	);
	return Promise.race([promise, timeoutPromise]);
}

export const delay = milliseconds => data => 
	new Promise(
		(resolve, reject) => setTimeout(() => resolve(data), milliseconds)
	)

export const retry = (retries, milliseconds, fn) => 
	fn().catch(err => {
		console.log(retries);
		return delay(milliseconds)().then(() =>
			retries > 1 
				? retry(retries - 1, milliseconds, fn) 
				: Promise.reject(err)
		)
	})
