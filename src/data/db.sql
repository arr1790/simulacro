DROP DATABASE IF EXISTS escuela;

CREATE DATABASE escuela;
USE escuela;


CREATE TABLE alumnos (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    localidad VARCHAR(200),
    fecha_nacimiento DATE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


-- ALTER TABLE productos ADD COLUMN imagen VARCHAR(200) AFTER descripcion;

INSERT INTO alumnos (nombre, localidad, fecha_nacimiento) 
VALUES 
  ('Juan Pérez', 'Montilla', '2000-05-15'),
  ('María López', 'Cordoba', '1999-08-20'),
  ('Carlos Gómez', 'lucena', '2001-11-10');



CREATE TABLE profesores (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    especialidad VARCHAR(200),
    estado_civil ENUM('SOLTERO', 'CASADO', 'VIUDO'),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
-- ALTER TABLE productos ADD COLUMN imagen VARCHAR(200) AFTER descripcion;

INSERT INTO profesores (nombre, especialidad, estado_civil) 
VALUES 
  ('Ana García', 'Matemáticas', 'CASADO'),
  ('Juan López', 'Inglés', 'SOLTERO'),
  ('Marta Pérez', 'Informática', 'VIUDO');