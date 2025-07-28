package com.example.demo.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.dtos.CreateStudentRequestDto;
import com.example.demo.dtos.StudentResponseDto;
import com.example.demo.dtos.UpdateStudentRequestDto;
import com.example.demo.entities.Student;
import com.example.demo.repositories.StudentJpaRepository;

@Service
public class StudentService {
    private StudentJpaRepository studentJpaRepository;

    public StudentService(StudentJpaRepository studentJpaRepository) {
        this.studentJpaRepository = studentJpaRepository;
    }

    public StudentResponseDto convertDto(Student student) {
        return StudentResponseDto.builder()
                .id(student.getId())
                .name(student.getName())
                .email(student.getEmail())
                .address(student.getAddress())
                .build();
    }

    public List<StudentResponseDto> getAllStudents() {
        List<StudentResponseDto> students = studentJpaRepository.findAll().stream()
                .map(this::convertDto)
                .toList();
        return students;
    }

    public StudentResponseDto getStudentById(Long id) {
        return studentJpaRepository.findById(id)
                .map(this::convertDto)
                .orElseThrow(() -> new RuntimeException("Student not found with id: " + id));
    }

    // public Student getStudentById(Long id) {
    // return studentJpaRepository.findById(id).orElse(null);
    // }.name(student.getName()).email(student.getEmail()).address(student.getAddress()).build()).toList();

    // }

    public StudentResponseDto createStudent(CreateStudentRequestDto createStudentRequestDto) {
        Student student = new Student();
        student.setName(createStudentRequestDto.getName());
        student.setEmail(createStudentRequestDto.getEmail());
        student.setAddress(createStudentRequestDto.getAddress());
        student.setPassword(createStudentRequestDto.getPassword());

        Student savedStudent = studentJpaRepository.save(student);
        return convertDto(savedStudent);
    }

    public StudentResponseDto updateStudent(Long id, UpdateStudentRequestDto student) {
        Student existingStudent = studentJpaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found with id: " + id));
        existingStudent.setName(student.getName());
        existingStudent.setEmail(student.getEmail());
        existingStudent.setAddress(student.getAddress());
        existingStudent.setPassword(student.getPassword());
        return convertDto(studentJpaRepository.save(existingStudent));
    }

    public void deleteStudent(Long id) {
        studentJpaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found with id: " + id));
        studentJpaRepository.deleteById(id);
    }
}
