import { Suspense } from "react";
import DataCard from "./dataCard";
import "./Load"
import Load from "./Load";

// server compoenent  used to fetch the data
const DataFetchServer = async (props: any) => {
    const searched = await props.searchParams;
    const username = searched.name;
    if (!username) {
        return (
            <div>
                No username provided
            </div>
        )
    }

    return (
        <div>
            <h3>Server side component for fetching data</h3>
            <p>The special file loading.js helps you create meaningful Loading UI with React Suspense
                . With this convention, you can show an instant loading state from the server while the 
                content of a route segment loads. The new content is automatically 
                swapped in once rendering is complete.
            </p>
            <div>
                <Suspense fallback={<Load/>}>
                    <DataCard UserName={username}/>
                </Suspense>
            </div>
            

        </div>
    )
}
export default DataFetchServer;