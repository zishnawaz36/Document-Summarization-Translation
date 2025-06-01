import axios from "axios";
import { useNavigate } from "react-router-dom";
import React,{useState,useEffect} from "react";
function Logout(){
    const navigate = useNavigate();
    useEffect(()=>{
        const logoutuser = async() => {
            const response  = await axios.post("http://localhost:4000//project/logout");
                console.log("Api response :",response.data);
                navigate("/login");

        }
         logoutuser();
    },[]);
   
    return(
        <>
        </>
    )
}
export default Logout;