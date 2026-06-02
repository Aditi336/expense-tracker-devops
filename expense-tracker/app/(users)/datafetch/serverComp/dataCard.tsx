// server compoenent  used to fetch the data
const DataCard=async({UserName}: { UserName: string })=>{
    
    console.log(UserName,"'poihugyhgfd")

    await new Promise((resolve)=>{
        setTimeout(resolve,500);
    })
  
    const res = await fetch(`https://api.genderize.io/?name=${UserName}`);
    const data =await res.json();
    console.log(data);
    return(
        <div>
            <li>{data?.name}</li>
            <li>{data.count}</li>
            <li>{data.gender}</li>
            <li>{data.probability}</li>
        </div>
    )
}
export default DataCard;