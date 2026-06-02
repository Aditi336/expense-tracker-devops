import ProductList from "./productlistpage";

const Product=async(props:any)=>{
    const searched=await props.searchParams;
    console.log(searched);

    const category=searched?.category||"laptop";
    const sort=searched?.sort||"asc";
    const page=searched?.page||2;

    return(
        <>
        <h1>searchParams</h1>
        <ul>
            <li>{category}</li>
            <li>{sort}</li>
            <li>{page}</li>
        </ul>
        <div>
            <ProductList/>
        </div>
        </>
        
    )

}
export default Product;