import mysql from "mysql2/promise";

export const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"Aditi@9036",
    database:"hospital"
})

try{
    const connection=await db.getConnection();
    console.log("connected successfully")
}catch(err){
    console.log(err)
}
