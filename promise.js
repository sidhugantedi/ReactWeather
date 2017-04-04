// function getTempPromise(location) {
// 	return new Promise(function(resolve, reject) {
// 		resolve(79);
// 		reject('This city is not found');
// 	});
// }

// getTempPromise('New Jersey').then function(temp) {
// 	console.log('promise success', temp);
// }, function(err) {
// 	console..log('promise error', err);
// });

function addPromise (a,b) {
	return new Promise(function(resolve, reject) {
		if(typeof a === 'number' && typeof b === 'number') {
			resolve(a + b);
		}
		else {
			reject('two inputs must be numbers');
		}
	});
}

addPromise(2,4).then (function(sum) {
	console.log('success', sum);
}, function(err) {
	console.log('error', err);
});

addPromise('andrew', 5).then(function(sum) {
	console.log('success', sum);
}, function(err) {
	console.log('must be two numbers', err);
});