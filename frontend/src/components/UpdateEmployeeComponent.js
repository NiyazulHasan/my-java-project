import { useState,useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function UpdateEmployeeComponent()
{
    let navigate = useNavigate();

    const [name,setName]=useState("");
    const [doj,setDoj]=useState("");
    const [department,setDepartment]=useState({deptName:"",designation:""})
    const {id}=useParams();

    const handleCancel=(e)=>{
        e.preventDefault();
        navigate("/employees");
    }

    useEffect((e)=>{
        
        EmployeeService.getEmployeeById(id).then(res=>{
            setName(res.data.name);
            setDoj(res.data.doj);
            setDepartment({
                deptName: res.data.dept.deptName,
                designation:res.data.dept.designation
            })
        })
        
    },[])

    const handleSubmit=(e)=>{
        e.preventDefault();

        const updatedEmployee={
            name,
            doj,
            dept:{
                deptName:department.deptName,
                designation:department.designation
            }
        }

        EmployeeService.updateEmployee(id,updatedEmployee).then(res=>{
            navigate("/employees");
        })
    }


    return (
        <div className="card col-md-6 offset-3">
            <h5 className="text-center pt-3">Update Employee</h5>
            <div className="card-body">
                <form>
                    <label className="my-2">Name:</label>
                    <input type="text" name="name" id="name" className="form-control" autoComplete="off"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}/>

                    <label className="my-2">DOJ:</label>
                    <input type="text" name="doj" id="doj" className="form-control" autoComplete="off"
                    value={doj}
                    onChange={(e)=>setDoj(e.target.value)}/>

                    <label className="my-2">Department:</label>
                    <input type="text" name="deptName" id="deptName" className="form-control" autoComplete="off"
                    value={department.deptName}
                    onChange={(e)=>setDepartment({...department,deptName:e.target.value})}/>

                    <label className="my-2">Designation:</label>
                    <input type="text" name="designation" id="designation" className="form-control" autoComplete="off"
                    value={department.designation}
                    onChange={(e)=>setDepartment({...department,designation:e.target.value})}/>
                    
                    <button className="btn btn-danger mt-3" onClick={handleCancel}> cancel</button>
                    <button className="btn btn-success mt-3 float-end" onClick={handleSubmit}> submit </button>
                </form>
            </div>
        </div>
    )
}
export default UpdateEmployeeComponent;
