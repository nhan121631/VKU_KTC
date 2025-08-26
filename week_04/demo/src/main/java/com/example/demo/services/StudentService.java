package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.Caching;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.demo.dtos.CourseResponseDto;
import com.example.demo.dtos.CreateStudentRequestDto;
import com.example.demo.dtos.DepartmentResponseDto;
import com.example.demo.dtos.StudentPageResponseDto;
import com.example.demo.dtos.StudentResponseDto;
import com.example.demo.dtos.UpdateStudentRequestDto;
import com.example.demo.entities.Course;
import com.example.demo.entities.Department;
import com.example.demo.entities.Student;
import com.example.demo.repositories.DepartmentJpaRepository;
import com.example.demo.repositories.StudentJpaRepository;
import com.example.demo.repositories.StudentProjection;

@Service
public class StudentService {
    private StudentJpaRepository studentJpaRepository;

    @Autowired
    private DepartmentJpaRepository departmentJpaRepository;

    public StudentService(StudentJpaRepository studentJpaRepository) {
        this.studentJpaRepository = studentJpaRepository;
    }

    public CourseResponseDto toResponseDto(Course course) {
        return CourseResponseDto.builder()
                .id(course.getId())
                .name(course.getName())
                .build();
    }

    public DepartmentResponseDto toDepartmentResponseDto(Department department) {
        return DepartmentResponseDto.builder()
                .id(department.getId())
                .name(department.getName())
                .build();
    }

    public StudentResponseDto convertDto(Student student) {
        return StudentResponseDto.builder()
                .id(student.getId())
                .name(student.getName())
                .email(student.getEmail())
                .address(student.getAddress())
                .department(student.getDepartment() != null ? toDepartmentResponseDto(student.getDepartment()) : null)
                .courses(student.getCourses() != null ? student.getCourses().stream()
                        .map(this::toResponseDto)
                        .toList() : null)
                .build();
    }

    // Cache cho danh sách tất cả students
    @Cacheable(value = "allStudents", key = "'all'")
    public List<StudentResponseDto> getAllStudents() {
        System.out.println("Cache miss: Fetching all students from the database");
        List<StudentResponseDto> students = studentJpaRepository.findAll().stream()
                .map(this::convertDto)
                .toList();

        return students;
    }

    // Cache cho từng student - sử dụng positional parameter
    @Cacheable(value = "student", key = "#a0")
    public StudentResponseDto getStudentById(Long id) {
        if (id == null) {
            throw new IllegalArgumentException("Student ID cannot be null");
        }
        System.out.println("Cache miss: Fetching student with id: " + id);
        return studentJpaRepository.findById(id)
                .map(this::convertDto)
                .orElseThrow(() -> new RuntimeException("Student not found with id: " + id));
    }

    // Create student - cache individual và evict all students
    @Caching(put = @CachePut(value = "student", key = "#result.id"), evict = @CacheEvict(value = "allStudents", key = "'all'"))
    public StudentResponseDto createStudent(CreateStudentRequestDto createStudentRequestDto) {
        Student student = new Student();
        student.setName(createStudentRequestDto.getName());
        student.setEmail(createStudentRequestDto.getEmail());
        student.setAddress(createStudentRequestDto.getAddress());
        student.setPassword(createStudentRequestDto.getPassword());

        Department department = departmentJpaRepository.findById(createStudentRequestDto.getDepartmentId())
                .orElseThrow(() -> new RuntimeException("Department not found"));
        student.setDepartment(department);

        Student savedStudent = studentJpaRepository.save(student);
        return convertDto(savedStudent);
    }

    // Update student - cache updated student và evict all students
    @Caching(put = @CachePut(value = "student", key = "#result.id"), evict = @CacheEvict(value = "allStudents", key = "'all'"))
    public StudentResponseDto updateStudent(Long id, UpdateStudentRequestDto student) {
        Student existingStudent = studentJpaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found with id: " + id));
        existingStudent.setName(student.getName());
        existingStudent.setEmail(student.getEmail());
        existingStudent.setAddress(student.getAddress());
        existingStudent.setPassword(student.getPassword());
        return convertDto(studentJpaRepository.save(existingStudent));
    }

    // Delete student - evict specific student và all students list
    @Caching(evict = {
            @CacheEvict(value = "student", key = "#a0"), // Sửa từ #id thành #a0
            @CacheEvict(value = "allStudents", key = "'all'")
    })
    public void deleteStudent(Long id) {
        studentJpaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found with id: " + id));
        studentJpaRepository.deleteById(id);
    }

    // Không cache projection vì thường chỉ dùng cho authentication
    public StudentProjection getStudentByEmail(String email) {
        StudentProjection student = studentJpaRepository.findByEmail(email);
        if (student == null) {
            throw new RuntimeException("Student not found with email: " + email);
        }
        return student;
    }

    // Cache theo name - sử dụng positional parameter để đồng nhất
    @Cacheable(value = "studentByName", key = "#a0") // Sửa từ #name thành #a0
    public StudentResponseDto getStudentByName(String name) {
        Student student = studentJpaRepository.findByName(name);
        if (student == null) {
            throw new RuntimeException("Student not found with name: " + name);
        }
        return convertDto(student);
    }

    // Không cache pagination vì data thay đổi thường xuyên
    public StudentPageResponseDto getStudentPaginated(int pageNumber, int pageSize) {
        Pageable pageable = PageRequest.of(pageNumber, pageSize);
        Page<Student> studentPage = studentJpaRepository.findAll(pageable);
        List<StudentResponseDto> studentDtos = studentPage.getContent().stream()
                .map(this::convertDto)
                .toList();

        return StudentPageResponseDto.builder()
                .data(studentDtos)
                .pageNumber(studentPage.getNumber())
                .pageSize(studentPage.getSize())
                .totalRecords(studentPage.getTotalElements())
                .totalPages(studentPage.getTotalPages())
                .hasNext(studentPage.hasNext())
                .hasPrevious(studentPage.hasPrevious())
                .build();
    }
}