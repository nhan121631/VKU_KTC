package com.example.demo.dtos.Employee;

import java.time.LocalDate;
import java.time.LocalDateTime;

import com.example.demo.enums.Gender;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class EmployeeResponseDto {
    // private Long id;
    private String fullName;
    private String email;
    private LocalDate dateOfBirth;
    private Gender gender;
    private String phoneNumber;
    private boolean isActive;
    private LocalDateTime createdDate;
    private LocalDateTime updatedAt;
}
