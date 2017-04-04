var names = ['suraj', 'siddhartha', 'srujan'];

var person = {
	name: 'kyatham',
	greet: function() {
		names.forEach((name) => {
			console.log(this.name + 'says hi to ' + name);
		});
	}
}