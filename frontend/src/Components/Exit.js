import { useEffect, useState } from "react"
import ExitCard from './ExitCard'
const Exit = () => {
    const [data, setData] = useState([])
    const fetching = async () => {
        await fetch("http://localhost:5000/api/db", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(async (res) => {
            res = await res.json()
            setData(res)
        }).catch((e) => {
            console.log(e);
        })
    }
    useEffect(() => {
        fetching()
    }, [data])
    return (
        <>
            <div className="bg-fuchsia-200 sm:p-4 sm:w-screen md:w-1/2 lg:w-1/3 p-4 sm:h-1/2 md:h-full h-2/3 text-blue-950" style={{ backgroundColor: "#F0F3F4" }}>
                <div className="h-full overflow-auto w-full ">
                    <div className="bg-white rounded-2xl p-1 sm:p-2 text-center  w-full  top-0 sticky flex justify-center items-center z-20">
                        <div className="shadow-md border p-1 rounded-lg bg-slate-300 w-1/3 min-w-fit z-10">
                            <p className="md:font-bold font-medium">Currently in</p>
                            <p>{data.length}</p>
                        </div>
                        <hr className="h-2 w-full z-0 absolute" />
                        {/* <div className="shadow-md border p-1 rounded-lg bg-slate-300 w-1/3" >
                            <p className="md:font-bold font-medium">Total</p>
                            <p>{data.length}</p>
                        </div> */}
                    </div>
                    <div className="overflow-auto sm:pt-1 pb-12">
                        {data.map((val) => {
                            return <>
                                <ExitCard id={val.RegId} InTime={val.InTime} />
                            </>
                        })}
                    </div>
                </div>
            </div>

        </>)
}
export default Exit