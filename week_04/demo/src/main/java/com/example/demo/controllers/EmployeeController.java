package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dtos.Employee.CreateRequestEmployeeDto;
import com.example.demo.dtos.Employee.EmployeeResponseDto;
import com.example.demo.dtos.Employee.UpdateRequestDto;
import com.example.demo.services.EmployeeService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("api/employees")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @PostMapping
    public ResponseEntity<EmployeeResponseDto> createEmployee(@RequestBody @Valid CreateRequestEmployeeDto requestDto) {
        EmployeeResponseDto createdEmployee = employeeService.save(requestDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdEmployee);
    }

    @GetMapping
    public ResponseEntity<List<EmployeeResponseDto>> getAllEmployees() {
        List<EmployeeResponseDto> employees = employeeService.findAll();
        return ResponseEntity.ok(employees);
    }

    @GetMapping("/{id}")
    public ResponseEntity<EmployeeResponseDto> getEmployeeById(@PathVariable("id") Long id) {
        EmployeeResponseDto employee = employeeService.findById(id);
        return ResponseEntity.ok(employee);
    }

    @PutMapping("/{id}")
    public ResponseEntity<EmployeeResponseDto> updateEmployee(@PathVariable("id") Long id,
            @RequestBody @Valid UpdateRequestDto updateRequestDto) {
        EmployeeResponseDto updatedEmployee = employeeService.update(id, updateRequestDto);
        return ResponseEntity.ok(updatedEmployee);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<EmployeeResponseDto> deleteEmployee(@PathVariable("id") Long id) {
        EmployeeResponseDto deletedEmployee = employeeService.delete(id);
        return ResponseEntity.ok(deletedEmployee);
    }

}
