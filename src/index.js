import './js/common';
import Q from 'q';

const promise = new Promise ((resolve, reject) => {
	setTimeout(() => resolve('success'), 3000);
});

const promise2 = new Promise ((resolve, reject) => {
	setTimeout(() => resolve('success'), 5000);
});

Q.all([promise, promise2])
	.spread((a, s) => {
		console.log(a);
		console.log(s);
	}).done();