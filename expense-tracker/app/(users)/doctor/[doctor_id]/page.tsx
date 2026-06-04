import { notFound } from "next/navigation"
import {getAllDoctors} from "../../static/page"
interface doctorProps{
        doctor_id:number
        doctor_name:string
        specialization:string
        experience_years:number
    }
const DoctorById=async(props:any)=>{
    let doctorId= await (props.params);
    // doctorId=Number(doctorId)
    const doctorss=(await getAllDoctors()) as doctorProps[];
    const ID= Number(doctorId.doctor_id)

    const filtered_doc=doctorss
            .filter(doc=>doc.doctor_id===ID)
    if(filtered_doc.length==0){
        return notFound();
    }
    
   return(
        <>
        <div>
            {filtered_doc
            .map((doc:doctorProps)=>{
                return (<ul key={doc.doctor_id}>
                    <li>{doc.doctor_name}</li>
                    <li>{doc.specialization}</li>
                    <li>{doc.doctor_id}</li>
                </ul>)
            })}
        </div>
        </>
    )
   

}
export default DoctorById;
