package com.example.demo.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dtos.CreateStudentRequestDto;
import com.example.demo.dtos.StudentResponseDto;
import com.example.demo.dtos.UpdateStudentRequestDto;
import com.example.demo.services.StudentService;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/students")
public class StudentController {
    // @Autowired
    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping
    public List<StudentResponseDto> getAllStudents() {
        return studentService.getAllStudents();
    }

    @GetMapping("/{id}")
    public StudentResponseDto getStudentById(@PathVariable("id") Long id) {
        return studentService.getStudentById(id);
    }

    @PostMapping
    public StudentResponseDto createStudent(@RequestBody @Valid CreateStudentRequestDto createStudentRequestDto) {
        return studentService.createStudent(createStudentRequestDto);
    }

    @PatchMapping("/{id}")
    public StudentResponseDto updateStudent(@PathVariable("id") Long id,
            @RequestBody @Valid UpdateStudentRequestDto updateStudentRequestDto) {
        return studentService.updateStudent(id, updateStudentRequestDto);
    }

    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable("id") Long id) {
    studentService.deleteStudent(id);
    }

}
