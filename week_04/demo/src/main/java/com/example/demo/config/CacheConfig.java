package com.example.demo.config;

import java.util.Arrays;

import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.concurrent.ConcurrentMapCacheManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableCaching
public class CacheConfig {

    @Bean
    public CacheManager cacheManager() {
        ConcurrentMapCacheManager cacheManager = new ConcurrentMapCacheManager();

        // Định nghĩa tất cả cache names được sử dụng trong application
        cacheManager.setCacheNames(Arrays.asList(
                "student", // Cache cho getStudentById()
                "allStudents", // Cache cho getAllStudents()
                "studentByName" // Cache cho getStudentByName()
        ));

        // Cho phép tạo cache động nếu cần (tùy chọn)
        cacheManager.setAllowNullValues(false);

        return cacheManager;
    }
}