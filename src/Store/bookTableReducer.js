import StudentData from "../StudentsData.json";
export const UPDATE_STUDENT = "UPDATE_STUDENT_LIST";

const studentArr = StudentData.map((data) => {
  return {
    RollNumber: data.RollNumber,
    Name: data.Name,
    Class: data.Class,
    Age: data.Age,
    Address: data.Address,
  };
});

export const initialState = {
  studentList: studentArr,
};

export const updateStudentList = (student) => ({
  type: UPDATE_STUDENT,
  payload: student,
});

export const studentTableReducer = (state = initialState, action) => {
  if (action.type === UPDATE_STUDENT) {
    let tempState = [...state.studentList];

    tempState[action.payload.index] = action.payload.data;
    console.log(tempState);
    return {
      ...state,
      studentList: tempState,
    };
  }
};
