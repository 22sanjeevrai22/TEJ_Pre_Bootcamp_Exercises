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
