-- Ideamagix Review Test Assignment
-- Database dump included as requested in the submission guidelines.
-- The webpage itself is static and does not require a database connection.

CREATE DATABASE IF NOT EXISTS ideamagix_test;
USE ideamagix_test;

CREATE TABLE IF NOT EXISTS contact_submissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    phone VARCHAR(30) NOT NULL,
    treatment_requirement TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
