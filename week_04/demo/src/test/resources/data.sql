-- Dữ liệu mẫu cho hệ thống quản lý sinh viên (H2 compatible)

-- Insert Roles (auto-increment ID)
INSERT INTO roles (code, name) VALUES 
('ADMIN', 'Administrator'),
('USER', 'User'),
('STUDENT', 'Student'),
('TEACHER', 'Teacher');

-- Insert User Profiles (auto-increment ID)
INSERT INTO user_profiles (full_name, email, address) VALUES 
('Nguyễn Văn Admin', 'admin@ktc.edu.vn', 'Hà Nội'),
('Trần Thị User', 'user@ktc.edu.vn', 'Hồ Chí Minh'),
('Lê Văn Teacher', 'teacher@ktc.edu.vn', 'Đà Nẵng'),
('Phạm Thị Student', 'student@ktc.edu.vn', 'Cần Thơ');

-- Insert Users (auto-increment ID)
INSERT INTO users (username, password, profile_id) VALUES 
('admin', 'admin123', 1),
('user', 'user123', 2),
('teacher', 'teacher123', 3),
('student', 'student123', 4);

-- Insert User Roles mapping
INSERT INTO user_roles (user_id, role_id) VALUES 
(1, 1), -- admin có role ADMIN
(1, 2), -- admin cũng có role USER
(2, 2), -- user có role USER
(3, 4), -- teacher có role TEACHER
(3, 2), -- teacher cũng có role USER
(4, 3), -- student có role STUDENT
(4, 2); -- student cũng có role USER

-- Insert Departments (auto-increment ID)
INSERT INTO departments (name) VALUES 
('Công nghệ Thông tin'),
('Quản trị Kinh doanh'),
('Kế toán'),
('Marketing'),
('Ngôn ngữ Anh');

-- Insert Courses (auto-increment ID)
INSERT INTO courses (name) VALUES 
('Lập trình Java'),
('Cơ sở dữ liệu'),
('Phát triển Web'),
('Quản trị học'),
('Marketing căn bản'),
('Kế toán tài chính'),
('Tiếng Anh giao tiếp'),
('Tin học văn phòng');

-- Insert Students (auto-increment ID)
INSERT INTO students (name, email, address, password, department_id) VALUES 
('Nguyễn Văn An', 'an.nguyen@student.ktc.edu.vn', 'Quận 1, TP.HCM', 'password123', 1),
('Trần Thị Bình', 'binh.tran@student.ktc.edu.vn', 'Quận 2, TP.HCM', 'password123', 1),
('Lê Văn Cường', 'cuong.le@student.ktc.edu.vn', 'Quận 3, TP.HCM', 'password123', 2),
('Phạm Thị Dung', 'dung.pham@student.ktc.edu.vn', 'Quận 4, TP.HCM', 'password123', 2),
('Hoàng Văn Em', 'em.hoang@student.ktc.edu.vn', 'Quận 5, TP.HCM', 'password123', 3);

-- Insert Student-Course mapping
INSERT INTO student_courses (student_id, course_id) VALUES 
-- Sinh viên IT
(1, 1), (1, 2), (1, 3), (1, 8), -- An học Java, Database, Web, Tin học văn phòng
(2, 1), (2, 2), (2, 7), (2, 8), -- Bình học Java, Database, Tiếng Anh, Tin học văn phòng

-- Sinh viên Quản trị
(3, 4), (3, 5), (3, 7), (3, 8), -- Cường học Quản trị, Marketing, Tiếng Anh, Tin học văn phòng
(4, 4), (4, 6), (4, 7), (4, 8), -- Dung học Quản trị, Kế toán, Tiếng Anh, Tin học văn phòng

-- Sinh viên Kế toán
(5, 6), (5, 7), (5, 8), (5, 4); -- Em học Kế toán, Tiếng Anh, Tin học văn phòng, Quản trị
