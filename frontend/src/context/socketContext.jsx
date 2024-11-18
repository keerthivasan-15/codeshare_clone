import { io } from "socket.io-client";
import { createContext, useContext, useEffect, useState } from "react";

const socketContext = createContext();

export const useSocketContext = () => {
    return useContext(socketContext);
}

export const SocketContextProvider = ({children}) => {
    const [socket,setSocket] = useState(null);

    useEffect(()=>{
        const socket = io("http://localhost:5000");
        setSocket(socket);
        return () => socket.disconnect();
    },[]);

    return (
        <socketContext.Provider value={{socket}}>{children}</socketContext.Provider>
    )
}