import {db} from "../../../config/db";
import { cache } from "react";

const Staticpage=async()=>{
       const doctors=await getAllDoctors();

    return(
        <>
        <div>
            <DoctorList />
        </div>
        </>
    )
}

const DoctorList=async()=>{
    const doctorss=await getAllDoctors();
   return(
        <>
        <div>
            {doctorss.map((doc)=>{
                return (<ul key={doc.doctor_id}>
                    <li>{doc.doctor_name}</li>
                    <li>{doc.specialization}</li>
                </ul>)
            })}
        </div>
        </>
    )
   

}

const getAllDoctors=cache(async()=>{
 const [doctors]=await db.execute("select * from doctors")
    console.log("doctors")
    return doctors;
})
export { Staticpage,getAllDoctors,DoctorList};