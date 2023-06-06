import { useState } from "react"
import { SimpleContext } from "../../context/simple-context"
import { useDashboardContext } from "../../context/dashboard-context"

export const  Example = () => {

    const [state, setState] = useState<string>()
    const ctx = useDashboardContext()
    console.log("Example render")

    return(
        <>
        <h1> STATE: {state}</h1>
        <button onClick = {() => setState("nowy stan" + new Date().toLocaleString())}> ZMIANA STANU</button>
        </>
    )

}