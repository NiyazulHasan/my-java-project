

import React from 'react';
import './EmployeeModal.css';

const EmployeeModal = ({ employee, closeModal }) => {
    if (!employee) return null;

    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h4 className="modal-title text-center">Details</h4>
                <p><strong>ID:</strong> {employee.id}</p>
                <p><strong>Name:</strong> {employee.name}</p>
                <p><strong>Date of Joining:</strong> {employee.doj}</p>
                <p><strong>Department:</strong> {employee.dept.deptName}</p>
                <p><strong>Designation:</strong> {employee.dept.designation}</p>
                <button className="btn btn-danger" onClick={closeModal}>Close</button>
            </div>
        </div>
    );
};

export default EmployeeModal;
