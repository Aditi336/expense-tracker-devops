"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// client compoenent  used to fetch the data
const DataFetchServer = (props: any) => {
    const searched = useSearchParams();
    console.log(searched);
    const username = searched.get("name");
    interface ProbData {
        name: string;
        probability: number;
        count: number;
        gender: string;
    }
    if (!username) {
        return (
            <div>
                No username provided
            </div>
        )
    }

    const [Probdata, setProbdata] = useState<ProbData>({
        name: "",
        probability: 0,
        count: 0,
        gender: "female"
    });
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://api.genderize.io/?name=${username}`);
            const data = await res.json();
            console.log(data);
            setProbdata(data);
        }
        fetchData();
    }, [username])

    const confidencePercentage = Probdata.probability * 100;

    return (
        <div>
            <h3>Client side component for fetching data</h3>
            <li>{Probdata.name}</li>
            <li>{Probdata.count}</li>
            <li>{Probdata.gender}</li>
            <li>{confidencePercentage}%</li>
        </div>
    )
}
export default DataFetchServer;