function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marks) {
  if (this.hasOwnProperty("marks")) {
    for (let element of marks) {
      this.marks.push(element);
    }
  }
};

Student.prototype.getAverage = function () {
  if (!this.hasOwnProperty("marks") || !this.marks.length) {
    return 0;
  } else {
    return this.marks.reduce((acc, element, index, arr) => {
      acc += element;
      if (index >= arr.length - 1) {
        return acc / arr.length;
      } else {
        return acc;
      }
    }, 0);
  }
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};

let student1 = new Student("Николай", "мужской", 23);
let student2 = new Student("Мария", "женский", 20);
let student3 = new Student("Олег", "мужской", 21);
