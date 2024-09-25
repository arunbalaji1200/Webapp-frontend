import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Dropdown, DropdownButton, Pagination, Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import GsdService from "../Services/GsdService";

const Viewform =()=> {
    const[view,setView]=useState([]);
    const[head,setHead]=useState([]);
    const[filter1,setFilter]=useState([]);
    const[repairlaptop,setRepairlaptop]=useState(false);

    const [sort, setSort] = useState(null);
    const [pageSize, setPageSize] = useState(0);
    var [currentPage, setCurrentPage] = useState(0);
    const [totalElement, setTotalElement] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    let pageSizes = 2;

    const navigate=useNavigate();
    console.log(view);

    useEffect(() =>{
        const getView = async ()=>{
            const {data}=await GsdService.getForm(currentPage,pageSizes);
            console.log(data);
            setView(data.forms);
            console.log(view);
            setHead(data.forms[0]);
            console.log(head);
            setFilter(data.forms);
            console.log(filter1);
            setTotalElement(data.totalItems);
            setTotalPages(data.totalPages);
            setPageSize(data.pagesize);
            console.log(pageSize);
        }
        getView();
        // const getNewlaptop=async()=>{
        //     const {data}=await GsdService.getNewlapid(id);
        //     console.log(data);
        //     setNewlaptop(data);
        // }
        // getNewlaptop(id);
    },[currentPage],{});

    const onPrevPage = () => {
        if (-1 === currentPage - 1) {
            return setCurrentPage(0);
        }
        else {
            return setCurrentPage(currentPage - 1);
        }
    }
    const onNextPage=()=>{
        if(totalPages===currentPage+1){
            return ;
        }
        else{
            return setCurrentPage(currentPage+1)
        }
         
    }

    
    const column = Object.getOwnPropertyNames(head);
    const renderedhead=column.map((view)=>{
        
    return(
            <th key={view}>{view}</th>
            // <th key={view?view:"N/A"}><button type="button" onClick={() => setSort({view})}>{view}</button></th>
        );
    });

    var repairfil = view.filter(vi => {
        if(vi.newlaptop === null){
            return "null";
        }else{
            return repairfil;
        }
    });
    var newfil = view.filter(vi => {
        if(vi.repairlaptop === null){
            return "null";
        }else{
            return newfil;
        }
    });

    function newlap(){
        setFilter(newfil);
    }

    function repairlap(){
        setFilter(repairfil);
    }

    function removefilter(){
        setFilter(view);
    }
    
    const renderform= filter1.map((item,index)=>{  
        return(
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.requesttype}</td>
                <td>{item.requestingfor}</td>
                <td>{item.description}</td>
                <td>{item.status}</td>
                <td>{item.comments}</td>
                <td>{item.newlaptop?<Button onClick={() => {  navigate(`/viewnewlap/${item.newlaptop.id}`); }}>view</Button>:"N/A"}</td>
                <td>{item.repairlaptop?<Button onClick={() => { navigate(`/viewrepairlap/${item.repairlaptop.id}`); }}>view</Button>:"N/A"}</td>
                <td>{<Button onClick={() => { navigate(`/updatestatus/${item.id}`); }}>update status</Button>}</td>
            </tr>
        );
    });

    return ( 
        <div>
           <div className="flex flex-left"> <DropdownButton as={ButtonGroup} title="Filter By" id="bg-nested-dropdown">
                    <Dropdown.Item onClick={() => repairlap()}>repairlaptop</Dropdown.Item>
                    <Dropdown.Item onClick={() => newlap()}>newlaptop</Dropdown.Item>
                    <Dropdown.Item onClick={() => removefilter()}>remove filter</Dropdown.Item>
            </DropdownButton> 
            </div>
            <Button className="mb-3 mt-3" onClick={()=>navigate('/index')}>Home</Button>
            <Table striped bordered>
                <thead className='table-light'>
                    <tr>
                        {renderedhead}
                    </tr>
                </thead>
                <tbody>
                    {renderform}
                </tbody>
            </Table>
            <div className="col-md-12 list ">
                {/* <div className="mt-3">
                {"Items per Page: "}
                <select onChange={handlePageSizeChange} value={pageSize}>
                    {pageSizes.map((size) => (
                    <option key={size} value={size}>
                        {size}
                    </option>
                    ))}
                </select>
                        </div> */}
            <Pagination>
                <Pagination.Prev  onClick={() => onPrevPage()}/>
                <Pagination.Item >{currentPage+1}</Pagination.Item>
                <Pagination.Item>{totalPages}</Pagination.Item>
                <Pagination.Next onClick={() => onNextPage()}/>
            </Pagination>
                {/* <div className="text-center">
                <div role="navigation" className="ui pagination pointing secondary menu">
                    <button tabIndex="0" value="1" aria-label="Previous item"
                        type="prevItem" className="item"
                        onClick={() => onPrevPage()}>⟨</button>
                    <button tabIndex="0" value="1" type="pageItem" className="active item">{currentPage + 1}</button>
                    <button tabIndex="0" value="2" aria-label="Next item" type="nextItem" className="item" onClick={() => onNextPage()}>⟩</button></div>
                </div> */}
            </div>
        </div>
     );
}

export default Viewform;