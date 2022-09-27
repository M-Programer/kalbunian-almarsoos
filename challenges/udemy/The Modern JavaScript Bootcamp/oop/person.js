class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })

        return bio
    }
    setName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
}

class Student extends Person {
    constructor (firstName, lastName, age, grade, likes = []) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }
    getBio() {
        return `${this.firstName + this.lastName} is ${this.grade > 70 ? `passing` : `failing`} the class.`
    }
    updateGradeBy(n) {
        this.grade += n
    }
}

const student = new Student(`Mahmoud`, `Yousef`, 13, 71)
console.log(student.getBio())
student.updateGradeBy(-5)
console.log(student.getBio())