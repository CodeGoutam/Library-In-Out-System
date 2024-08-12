const ExitCard = (props) => {
    const Exit = async () => {
        await fetch("https://library-in-out-system-backend.vercel.app/api/exit", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                RegId: props.id,
                OutTime: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
            })
        })
            .then(async (res) => {
                res = await res.json();
            })
            .catch((error) => {
                console.log("Caught Some Error")
            })
    }
    return (
        <>
            <div className="sm:m-3 flex justify-between items-center bg-white rounded-full sm:font-medium font-serif p-1 m-1">
                <div className="ms-3" >
                    <p>Registration ID :- {props.id}</p>
                    <div className="flex">
                        <p>Entry :</p>
                        <p className="font-normal">{props.InTime}</p>
                    </div>

                </div>
                <button className="font-medium sm:font-bold  rounded-full p-2 border-2 m-2 hover:text-red-600 bg-red-600 hover:bg-white hover:shadow-md z-10 shadow-md text-white" type="submit" onClick={Exit}>Exit</button>
            </div>

        </>)
}

export default ExitCard