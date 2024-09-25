import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import GsdService from "../Services/GsdService";

const HomeComponent=() => {
    const[role,setRole]=useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        const getUsers= async ()=>{
            const {data} = await GsdService.getRole();
            console.log(data);
            setRole(data);
        }
        getUsers();
    }, []);

    const renderedrole=role.map((rol)=>{
        return(
             <tr key={rol.id}>
                <td>{rol.id}</td>
                 <td>{rol.name}</td>
                 <td>{<button className='btn btn-info' onClick={() => { navigate(`/view/${rol.id}`); }}>view_usernames</button>}</td>
                 {/* <td>
                 <button className='btn btn-info' onClick={() => { Navigate(`/updatefunc/`); }}>update</button>
                     &nbsp;&nbsp;
                     <button className='btn btn-danger' onClick={() => { 
                         const confirm=window.confirm("Do you want to delete?")
                        //   if(confirm===true){
                        //      deleteUser(user.id)
                        //   }
                          }}>Delete</button>
                 </td> */}
             </tr>
 
         );
     });

    return (

        <div>
         <h2>User Management</h2>
            <Button className="mb-3" onClick={()=>navigate('/index')}>Home</Button>
            <div className='row'>
                <Table striped bordered hover>
                    <thead className='table-light'>
                        <tr>
                            <th>#</th>
                            <th>role</th>
                            <th>view</th>
                            {/* <th>Actions</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {renderedrole}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default HomeComponent;