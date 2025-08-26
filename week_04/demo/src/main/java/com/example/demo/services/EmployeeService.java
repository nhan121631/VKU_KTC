package com.example.demo.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.dtos.Employee.CreateRequestEmployeeDto;
import com.example.demo.dtos.Employee.EmployeeResponseDto;
import com.example.demo.dtos.Employee.UpdateRequestDto;
import com.example.demo.entities.Employee;
import com.example.demo.repositories.EmployeeJpaRepository;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeJpaRepository employeeRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    private EmployeeResponseDto convertToDto(Employee employee) {
        return EmployeeResponseDto.builder()
                .fullName(employee.getFullName())
                .email(employee.getEmail())
                .dateOfBirth(employee.getDateOfBirth())
                .gender(employee.getGender())
                .phoneNumber(employee.getPhoneNumber())
                .isActive(employee.isActive())
                .createdDate(employee.getCreatedDate())
                .updatedAt(employee.getUpdatedAt())
                .build();
    }

    private boolean isEmailExists(String email) {
        return employeeRepository.findByEmail(email) != null;
    }

    public EmployeeResponseDto save(CreateRequestEmployeeDto requestDto) {
        Employee employee = new Employee();
        employee.setFullName(requestDto.getFullName());
        employee.setEmail(requestDto.getEmail());
        employee.setDateOfBirth(requestDto.getDateOfBirth());
        employee.setGender(requestDto.getGender());
        employee.setPhoneNumber(requestDto.getPhoneNumber());
        employee.setHashedPassword(passwordEncoder.encode(requestDto.getPassword()));
        employee.setActive(true); // Default to active
        if (isEmailExists(requestDto.getEmail())) {
            throw new IllegalArgumentException("Email already exists");
        }
        Employee savedEmployee = employeeRepository.save(employee);

        return convertToDto(savedEmployee);
    }

    public List<EmployeeResponseDto> findAll() {
        return employeeRepository.findAllAndActiveTrue().stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    public EmployeeResponseDto findById(Long id) {
        Employee employee = employeeRepository.findByIdAndActiveTrue(id)
                .orElseThrow(() -> new IllegalArgumentException("Employee not found"));
        return convertToDto(employee);
    }

    public EmployeeResponseDto update(Long id, UpdateRequestDto updateRequestDto) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Employee not found"));

        employee.setFullName(updateRequestDto.getFullName());
        employee.setDateOfBirth(updateRequestDto.getDateOfBirth());
        employee.setGender(updateRequestDto.getGender());
        employee.setPhoneNumber(updateRequestDto.getPhoneNumber());
        employee.setHashedPassword(passwordEncoder.encode(updateRequestDto.getPassword()));
        employee.setActive(updateRequestDto.isActive());

        Employee updatedEmployee = employeeRepository.save(employee);
        return convertToDto(updatedEmployee);
    }

    public EmployeeResponseDto delete(Long id) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Employee not found"));
        employeeRepository.delete(employee);
        return convertToDto(employee);
    }
}
