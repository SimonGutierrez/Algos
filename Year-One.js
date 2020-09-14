/*
turn this: [
 ['58', 'Algebra'],
 ['63', 'History'],
 ['67', 'Algebra'],
 ['58', 'Science'],
 ['63', 'Science'],
 ['54', 'Religon']
]

 into this:
 {
     '58, 63': ['Science'],
     '58, 67': ['Algebra'],
     '63, 54': [],
     ...
 }

 Match each student if they are taking the same class, if no classes match then [];
 */


 const findStudents = (students) => {
    let studentBank = {};
    let result = {};

    for (let student of students) {
        if (studentBank[student[0]]) {
            studentBank[student[0]].push(student[1]);
        } else {
            studentBank[student[0]] = [student[1]];
        }
    }

    let studentsList = Object.keys(studentBank);

    for (let i = 0; i < studentsList.length - 1; i++) {
        let key1 = studentsList[i];
        for (let j = i + 1; j < studentsList.length; j++) {
            let key2 = studentsList[j];

            result[`${key1}, ${key2}`] = studentBank[key1].filter(currClass => studentBank[key2].includes(currClass))
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
    ['54', 'Religon']
   ]

console.log(findStudents(students1))
/*
{
    '58, 63': ['Science'],
    '58, 67': ['Algebra'],
    '63, 54': [],
    ...
}
*/
