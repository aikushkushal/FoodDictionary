-- Database schema for Food Dictionary

-- Table for storing user information
CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table for storing ingredient information
CREATE TABLE ingredients (
    ingredient_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL UNIQUE,
    calories INT,
    protein DECIMAL(5, 2),
    fat DECIMAL(5, 2),
    carbs DECIMAL(5, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table for storing analysis results
CREATE TABLE analysis_results (
    result_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    ingredient_id INT,
    analysis_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    result JSON,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (ingredient_id) REFERENCES ingredients(ingredient_id)
);

-- Table for storing dietary classifications
CREATE TABLE dietary_classifications (
    classification_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT
);

-- Table to link users to dietary classifications
CREATE TABLE user_dietary_classifications (
    user_id INT,
    classification_id INT,
    PRIMARY KEY (user_id, classification_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (classification_id) REFERENCES dietary_classifications(classification_id)
);
