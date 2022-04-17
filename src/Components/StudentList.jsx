import React,{useEffect} from "react";
import {updateStudentList} from "../Store/bookTableReducer";
import { useStore } from '../Store/Store';
import {useNavigate} from "react-router-dom";


export const StudentList=(props)=>{

    const [globalState, dispatch] = useStore();
    let navigate = useNavigate()
  

     const dispatchAction=(data,index)=>{
        navigate("/studentDetails/"+index)
        
         }
    
    return(<>
       <div>
         <div className="tableRow tableHeader" >
          <div>Roll No.</div>
          <div>Name</div>
          <div>Class</div>
          <div>Age</div>
          </div>
         {globalState.studentList.map((data,index)=>{
          return <>
              <div className="tableRow" onClick={()=>{dispatchAction(data,index)}}>
                <div>{data.RollNumber}</div>
                <div>{data.Name}</div>
                <div>{data.Class}</div>
                <div>{data.Age}</div>
                </div> 
             </>
         })}
       </div>
        
    </>)
}

export default StudentList;