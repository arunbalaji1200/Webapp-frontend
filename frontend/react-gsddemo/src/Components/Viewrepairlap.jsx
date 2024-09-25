import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import GsdService from "../Services/GsdService";

const Viewrepairlaptop =()=> {
    const[repairlap,setRepairlap]=useState({});
    const{id}=useParams();
    const navigate=useNavigate();

    useEffect(() =>{
        const getRepairlap =async(id)=>{
            const{data}=await GsdService.getRepairlapid(id);
            setRepairlap(data);
        }
        getRepairlap(id);
    },[]);

    const Homehandler=()=>{
        navigate('/viewform');
    }

    return (  
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset md-3 mt-5 rounded shadow p-3 mb-5 bg-white">
                    <div><label>ID:</label>{repairlap.id}</div>
                    <div><label>Model:</label>{repairlap.model}</div>
                    <div><label>Warranty:</label>{repairlap.warranty}</div>
                    <div><label>Repair Location:</label>{repairlap.repairloc}</div>
                    <div><label>Slot:</label>{repairlap.slot}</div>
                    <Button onClick={Homehandler}>back</Button>
                </div>
            </div>
        </div>

    );
}

export default Viewrepairlaptop;