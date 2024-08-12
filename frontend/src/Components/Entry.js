import { useEffect, useState } from 'react'
const Entry = () => {
    const [id, setId] = useState('')
    const Submit = async (e) => {
        e.preventDefault();
        // let res = fetch("http://localhost:5000/api/user", {
        let res = fetch("https://library-in-out-system-backend.vercel.app/api/user", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                RegId: id,
                InTime: `${new Date().getHours() ? new Date().getHours() % 12 : "12"}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
                OutTime: ""
            })
        })
        setId('')
    }

    return (
        <>
            <div className="sm:w-screen md:w-1/2 lg:w-2/3 sm:p-4 bg-fuchsia-200 mb-0 sm:h-1/2  h-1/3 md:h-full" style={{ backgroundColor: "#F8F9FA", color: '#2C3E50' }} >
                <div className="bg-white
                rounded md:rounded-3xl flex justify-center items-center h-full sm:p-1" style={{ backgroundColor: "#E3F2FD" }}>
                    <form method='POST' onSubmit={Submit}>
                        <div className="md:flex justify-center items-center space-x-2 space-y-2">
                            <div className=" w-fit grid justify-center items-center">
                                <label className="font-bold  sm:text-2xl">Enter Your Registration ID:- </label>
                                <input className="border border-gray-800 rounded-sm place-content-center md:h-8 sm:text-xl font-normal" type="text" placeholder="PCE21CSXXXX" value={id} onChange={(e) => {
                                    setId(e.target.value)
                                }} />
                            </div>
                            <div>
                                <button className="shadow-xl w-fit
                                p-1 md:p-2  text-white border-2 border-blue-950 rounded-full  hover:border-2 bg-blue-950 hover:bg-white hover:text-blue-950" type='Submit' >Enter
                                    <i className="fa-solid md:mx-2 fa-arrow-right-to-bracket"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div >
            </div >
        </>)
}
export default Entry