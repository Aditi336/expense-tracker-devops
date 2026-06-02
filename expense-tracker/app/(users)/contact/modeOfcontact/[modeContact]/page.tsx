const SingleProfile=async(props:any)=>{
    const user= await props.params;
    console.log(user);
    return(
        <>
        <div>
            {/* user gets a object "{ modeContact: 'thapa' }" from the params. 
            To access the only value u need use the key given from the folder name inside the bracket */}
            <h1>Dynamic user = {user.modeContact}</h1>
        </div>
        </>
    )
}
export default SingleProfile