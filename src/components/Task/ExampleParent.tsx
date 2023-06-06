import { useContext, useState } from "react"
import { Example } from "./Example"
import { SimpleContext } from "../../context/simple-context"
import React from "react";
interface Props {
    children: React.ReactNode;
  }

const ExampleMemo = React.memo(Example)
export const  ExampleParent = () => {
    const [state, setState] = useState<string>()
    const context = useContext(SimpleContext)

console.log("ExampleParent render")
    return(
        <>
            <button onClick = {() => context.setMessage("nowy stan" + new Date().toLocaleString())}> ZMIANA STANU KONTEKSTU</button>

            <button onClick = {() => setState("nowy stan" + new Date().toLocaleString())}> ZMIANA STANU PARENTA</button>

          {/* <Example/> */}
          <ExampleMemo/>
        </>
    )

}