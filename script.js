//your JS code here. If required.
const student = {
	name : "Rahil"
}
function getKeys(obj) {
	return obj.key();
}

const fn = getKeys(student);

console.log(fn);