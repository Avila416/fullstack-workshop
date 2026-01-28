-- Schema for Task Manager
-- This file is automatically executed by Spring Boot on startup

CREATE TABLE tasks (
                       id BIGINT AUTO_INCREMENT PRIMARY KEY,
                       title VARCHAR(255),
                       description TEXT,
                       status VARCHAR(20),
                       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- Insert sample data (optional)
INSERT INTO tasks (title, description, status) VALUES
                                                   ('Learn Spring Boot', 'Complete the Spring Boot tutorial', 'IN_PROGRESS'),
                                                   ('Build REST API', 'Create RESTful endpoints', 'PENDING'),
                                                   ('Write Tests', 'Add unit and integration tests', 'PENDING');