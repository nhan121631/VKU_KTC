package com.example.demo.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Employee;

@Repository
public interface EmployeeJpaRepository extends JpaRepository<Employee, Long> {

    Employee findByEmail(String email);

    @Query("SELECT e FROM Employee e WHERE e.isActive = true")
    List<Employee> findAllAndActiveTrue();

    @Query("SELECT e from Employee e Where e.id = :id and e.isActive = true")
    Optional<Employee> findByIdAndActiveTrue(@Param("id") Long id);

    // Define any custom query methods if needed
    // For example, you can add methods to find employees by name, department, etc.

    // Example:
    // List<Employee> findByDepartmentId(Long departmentId);

}