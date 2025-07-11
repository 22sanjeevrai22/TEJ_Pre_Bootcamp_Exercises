let classRoom = [
  {
    Marnie: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: true },
      { Thursday: true },
      { Friday: true },
    ],
  },
  {
    Lena: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: true },
      { Thursday: false },
      { Friday: true },
    ],
  },
  {
    Shoshanna: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: false },
      { Thursday: true },
      { Friday: false },
    ],
  },
  {
    Jessa: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: false },
      { Thursday: false },
      { Friday: true },
    ],
  },
];

// YOUR CODE BELOW
const attendanceCheck = (searchDay) => {
  let attendance = {};
  classRoom.forEach((student, index) => {
    const studentName = Object.keys(student)[0];
    const studentData = Object.values(student)[0];
    studentData.forEach((dayData, index) => {
      const dayName = Object.keys(dayData)[0];
      const dayBoolean = Object.values(dayData)[0];
      if (dayBoolean) {
        if (!attendance[dayName]) {
          attendance[dayName] = [];
        }
        attendance[dayName].push(studentName);
      }
    });
  });

  return attendance[searchDay];
};


// YOUR CODE BELOW
function attendanceCheck2(day){
    let newArray=[]
    for(let i=0;i<classRoom.length;i++){
        let keys=Object.keys(classRoom[i])
        let a=classRoom[i][keys]
        for(let key of a){
            if(key[day]){
                newArray.push(keys[0])
            }
        }
     } 
    return newArray
}
console.log(attendanceCheck("Friday"));
