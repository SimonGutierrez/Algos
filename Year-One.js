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
    // [student, clases]
    for (let student of students) {
        if (studentBank[student[0]]) {
            studentBank[student[0]].add(student[1]);
        } else {
            studentBank[student[0]] = new Set();
            studentBank[student[0]].add(student[1]);
        }
    }

    let studentsList = Object.keys(studentBank);

    for (let i = 0; i < studentsList.length - 1; i++) {
        let key1 = studentsList[i];
        for (let j = i + 1; j < studentsList.length; j++) {
            let newSet = [];
            let key2 = studentsList[j];
            studentBank[key1].forEach((currClass) => {
                if (studentBank[key2].has(currClass)) newSet.push(currClass);
            })

            result[`${key1}, ${key2}`] = newSet;
        }
    }

    return result;
 }


 const students1 = [
    ['58', 'Algebra'],
    ['63', 'History'],
    ['67', 'Algebra'],
    ['67', 'Science'],
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
