package com.ihub.www.service;

import java.util.List;
import com.ihub.www.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.ihub.www.entity.Employee;
import com.ihub.www.exception.ResourceNotFoundException;
import com.ihub.www.repo.EmployeeRepository;

@Service
public class EmployeeService 
{

    private final UserRepository userRepository;
	@Autowired
	private EmployeeRepository employeeRepository;

    EmployeeService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
	
	public Employee addEmployee(Employee employee)
	{
		return employeeRepository.save(employee);
	}
	
	public List<Employee> getAllEmployees()
	{
		return employeeRepository.findAll();
	}
	
	public Employee getEmployee(Long id)
	{
		return employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Id Not Found"));
	}
	
	public ResponseEntity<Employee> updateEmployee(Long id,Employee employee)
	{
		if(employeeRepository.existsById(id))
		{
			Employee existingEmp = employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Id Not Found"));
			existingEmp.setName(employee.getName());
			existingEmp.setDoj(employee.getDoj());
			existingEmp.setDept(employee.getDept());
			employeeRepository.save(existingEmp);
			return new ResponseEntity<>(existingEmp,HttpStatus.OK);
		}
		else
		{
			return new  ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	public ResponseEntity<HttpStatus> deleteEmployee(Long id)
	{
		Employee employee = employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Id Not Found"));
		employeeRepository.delete(employee);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}















