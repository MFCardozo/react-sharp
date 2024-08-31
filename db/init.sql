-- CREATE DATABASE IF NOT EXISTS rrhh;


CREATE TABLE IF NOT EXISTS employee (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    doc_number VARCHAR(20) UNIQUE NOT NULL,
    date_of_birth DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS hour_register (
    id SERIAL PRIMARY KEY,
    date_register DATE NOT NULL,
    start_hour TIME,
    end_hour TIME NOT NULL,
    employee_id INTEGER NOT NULL,
    FOREIGN KEY (employee_id) REFERENCES employee(id)
);

-- para test
INSERT INTO employee (name, last_name, doc_number, date_of_birth)
VALUES ('John', 'Doe', '123456789', '1990-01-01');