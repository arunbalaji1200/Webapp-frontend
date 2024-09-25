import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import GsdService from "../Services/GsdService";

const  ViewUsersComponent=() => {
    const[role,setRole]=useState([]);
    const[user,setUser]=useState([]);
    const { id } = useParams();
    const navigate=useNavigate();
    useEffect(() => {
        const getUsers= async (id)=>{
            const {data} = await GsdService.getRoleId(id);
            console.log(data);
            setRole(data);
            setUser(data.user);
        }
        getUsers(id);
    }, [id]);

    const deleteUser = (id) => {
        GsdService.deleteUsers(id);
        setUser(user.filter(user=>user.id!==id));
        navigate('/home');
    }

    console.log(user);
    const rendereduser=user.map((use)=>{
        return(
             <tr key={use.id}>
                 <td>{use.userName}</td>
                 <td>{use.name}</td>
                 <td>{use.createdOn}</td>
                 <td>{use.active.toString()}</td>
                 {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                 <td>
                 <button className='btn btn-info' onClick={() => { navigate(`/update/${use.id}`); }}>update</button>
                     &nbsp;&nbsp;
                     <button className='btn btn-danger' onClick={() => { 
                         const confirm=window.confirm("Do you want to delete?")
                          if(confirm===true){
                             deleteUser(use.id)
                          }
                          }}>Delete</button>
                 </td>
             </tr>
 
         );
     });

    
 

    return (

        <div>
            <h2>UI</h2>
            <div className='row'>
                <Table striped bordered>
                    <thead className='table-light'>
                        <tr>
                            <th>Role</th>
                            <th>USERS</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={role.id}>
                            <th>{role.name}</th>
                            <Table style={{marginBottom:0}} striped >
                            <thead className='table-light'>
                                    <tr>
                                        <th>username</th>
                                        <th>name</th>
                                        <th>createdon</th>
                                        <th>active</th>
                                        <th>Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>{rendereduser}</tbody>     
                            </Table>
                            <td><button className='btn btn-success' onClick={() => { navigate(`/add/${role.id}`); } }>AddUser</button></td>
                        </tr>
                    </tbody>
                    <button className='btn btn-info' onClick={() => { navigate("/home"); } }>back</button>
                </Table>
            </div>
        </div>
    );
}

export default ViewUsersComponent;