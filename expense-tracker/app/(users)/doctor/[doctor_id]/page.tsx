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
    
   return(
        <>
        <div>
            {doctorss
            .filter(doc=>doc.doctor_id===ID)
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
