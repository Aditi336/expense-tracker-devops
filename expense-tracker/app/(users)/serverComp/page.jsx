const URL = "https://jsonplaceholder.typicode.com/posts";

const serverComp = async () => {
    const res = await fetch(URL);
    const data = await res.json();

    console.log(data);

    return(
        <>
        <h1>Server Component</h1>
        <ul>
           {
            data.map((curElem,index)=>{
                return <li key={index}>{curElem.body}</li>
            })
           }
        </ul>
        </>
    )
};
export default serverComp;