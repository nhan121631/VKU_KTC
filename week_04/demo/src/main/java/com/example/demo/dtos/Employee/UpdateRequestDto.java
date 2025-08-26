package com.example.demo.dtos.Employee;

import java.time.LocalDate;

import org.hibernate.validator.constraints.Length;

import com.example.demo.enums.Gender;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UpdateRequestDto {
    @Length(min = 4, message = "Full name must be at least 4 characters long")
    @Length(max = 160, message = "Full name must be at most 160  characters long")
    private String fullName;

    private LocalDate dateOfBirth;
    private Gender gender;
    @NotBlank(message = "Phone number is required")
    @Pattern(regexp = "^\\d{10}$", message = "Phone number must be valid")
    private String phoneNumber;
    @NotNull(message = "Password is required")
    private String password;

    private boolean active;
}
