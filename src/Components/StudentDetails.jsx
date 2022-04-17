import React,{useState,useEffect} from "react";
import {updateStudentList} from "../Store/bookTableReducer";
import { useStore } from '../Store/Store';
import { useParams } from "react-router-dom";

export const StudentDetails=(props)=>{

   let [studentData,setStudentData]=useState({ "RollNumber":0,
   "Name": "",
   "Class":"" ,
   "Age": "",
   "Address": ""
})

let { index } = useParams();

const [globalState, dispatch] = useStore();

    useEffect(()=>{
        
    
     setStudentData(globalState.studentList[index])



    },[])

    const saveData=()=>{
        let payload={
                 data:studentData,
                 index:index
             }
             
            dispatch(updateStudentList(payload));
    }

    return(<>
          <div>
           <div>Student Details</div>
            <div>
                <label>RollNumber:</label><input type="text" value={studentData.RollNumber} onChange={(e)=>{
                     let tempData={...studentData};
                     tempData.RollNumber=e.target.value;
                     setStudentData(tempData);
                }}/>
            </div>
            <div>
                <label>Name:</label><input type="text" value={studentData.Name} onChange={(e)=>{
                     let tempData={...studentData};
                     tempData.Name=e.target.value;
                     setStudentData(tempData);
                }}/>
            </div>
            <div>
                <label>Class:</label><input type="text" value={studentData.Class} onChange={(e)=>{
                     let tempData={...studentData};
                     tempData.Class=e.target.value;
                     setStudentData(tempData);
                }}/>
            </div>
            <div>
                <label>Age:</label><input type="text" value={studentData.Age} onChange={(e)=>{
                     let tempData={...studentData};
                     tempData.Age=e.target.value;
                     setStudentData(tempData);
                }}/>
            </div>
            <div>
                <label>Address:</label><input type="text" value={studentData.Address} 
                onChange={(e)=>{
                    let tempData={...studentData};
                    tempData.Address=e.target.value;
                    setStudentData(tempData);
               }}/>
            </div>
            <div>
                <button onClick={()=>{saveData()}}>Save</button>
            </div>
          </div>
    </>)
}

export default StudentDetails;