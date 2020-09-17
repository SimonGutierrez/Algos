/*
turn this: [
 ['58', 'Algebra'],
 ['63', 'History'],
 ['67', 'Algebra'],
 ['58', 'Science'],
 ['63', 'Science'],
]

 into this:
 {
     '58, 63': ['Science'],
     '58, 67': ['Algebra'],
     '63, 67': [],
 }

 Match each student if they are taking the same class, if no classes match then [];
 */


 const findStudents = (students) => {
    let studentBank = {};
    let result = {};

    for (let [student, course] of students) {
        if (studentBank[student]) {
            studentBank[student].add(course);
        } else {
            studentBank[student] = new Set();
            studentBank[student].add(course);
        }
    }

    let studentsList = Object.keys(studentBank);

    for (let i = 0; i < studentsList.length - 1; i++) {
        let student1 = studentsList[i];
        for (let j = i + 1; j < studentsList.length; j++) {
            let filteredCourses = [];
            let student2 = studentsList[j];

            studentBank[student1].forEach((currClass) => {
                if (studentBank[student2].has(currClass)) filteredCourses.push(currClass);
            })

            result[`${student1}, ${student2}`] = filteredCourses;
        }
    }

    return result;
 }


 const students1 = [
    ['58', 'Algebra'],
    ['63', 'History'],
    ['67', 'Algebra'],
    ['58', 'Science'],
    ['63', 'Science'],
   ]

console.log(findStudents(students1))

/*
{
    '58, 63': ['Science'],
    '58, 67': ['Algebra'],
    '63, 54': [],
}
*/
