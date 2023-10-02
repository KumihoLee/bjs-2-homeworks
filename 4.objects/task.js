function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

const student1 = new Student("Anna", "female", 19);
const student2 = new Student("Igor", "male", 21);

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if (this.excluded) {
		return;
	}
	this.marks.push(...marks);
}

Student.prototype.getAverage = function() {
	if (this.marks === undefined || this.marks.length === 0) {
		return 0;
	}

	let total = 0;
	for (let i = 0; i < this.marks.length; i++) {
		total += this.marks[i];
	}

	let average = total / this.marks.length;
	return average;
}

Student.prototype.exclude = function(reason) {
	delete this.marks;
	delete this.subject;
	this.excluded = reason;
}