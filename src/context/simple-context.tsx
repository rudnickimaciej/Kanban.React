import React, { useState } from "react";

type SimpleContextProps = {
    message: string;
    setMessage: React.Dispatch<React.SetStateAction<string>>
}
interface Props {
    children: React.ReactNode;
  }
export const SimpleContext = React.createContext<SimpleContextProps>({} as SimpleContextProps)

export const SimpleContextProvider:React.FC<Props> =({children}) => {
    const [message, setMessage] = useState<string>("Initial message");

    // setInterval(function () {setMessage(`New message ( ${new Date().toLocaleString()})`)}, 5000);
    return(
        <SimpleContext.Provider value = {
            {
                message,
                setMessage
            }
        }>
            {children}
        </SimpleContext.Provider>
    )
}

