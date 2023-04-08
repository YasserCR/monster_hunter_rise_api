-- Crear tabla weapons
CREATE TABLE weapons (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  damage INT NOT NULL,
  element VARCHAR(255),
  sharpness VARCHAR(255),
  affinity INT,
  defense INT,
  rarity INT NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insertar algunos ejemplos de armas
INSERT INTO weapons (name, damage, element, sharpness, affinity, defense, rarity)
VALUES ('Great Sword', 1152, NULL, 'white', -30, 0, 7),
       ('Long Sword', 957, 'fire', 'blue', 20, 0, 6),
       ('Dual Blades', 322, 'ice', 'green', 25, 0, 6);
      
DROP TABLE weapons;

-- Crear tabla armor
CREATE TABLE armor (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  defense INT NOT NULL,
  fireRes INT,
  waterRes INT,
  thunderRes INT,
  iceRes INT,
  dragonRes INT,
  rarity INT NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insertar algunos ejemplos de armaduras
INSERT INTO armor (name, defense, fireRes, waterRes, thunderRes, iceRes, dragonRes, rarity)
VALUES ('Rathalos Helm', 96, 2, -2, 4, -4, 0, 7),
       ('Kushala Cista', 108, 4, 0, -4, 0, -4, 7),
       ('Tigrex Braces', 84, -4, 0, 4, 0, 0, 6);
      
DROP TABLE armor;

-- Crear tabla monsters
CREATE TABLE monsters (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(255) NOT NULL,
  weakness VARCHAR(255),
  habitat VARCHAR(255),
  size VARCHAR(255),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insertar algunos ejemplos de monstruos
INSERT INTO monsters (name, type, weakness, habitat, size)
VALUES ('Rathalos', 'Flying Wyvern', 'dragon', 'Ancestral Steppe', 'Large'),
       ('Kushala Daora', 'Elder Dragon', 'ice', 'Old Volcano', 'Large'),
       ('Great Jagras', 'Fanged Wyvern', 'fire', 'Ancient Forest', 'Medium');

DROP TABLE monsters;

-- Crear tabla skills
CREATE TABLE skills (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insertar algunos ejemplos de habilidades
INSERT INTO skills (name, description)
VALUES ('Attack Boost', 'Increases attack power and affinity.'),
       ('Stamina Surge', 'Increases maximum stamina and the rate at which it recovers.'),
       ('Fire Resistance', 'Decreases damage taken from fire-based attacks.');

DROP TABLE skills;
      
-- Crear tabla jewels
CREATE TABLE jewels (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slotLevel INT NOT NULL,
  skillName VARCHAR(255) NOT NULL,
  skillValue INT NOT NULL,
  rarity INT NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
  
INSERT INTO jewels (name, slotLevel, skillName, skillValue, rarity)
VALUES ('Critical Jewel', 1, 'Critical Eye', 2, 2),
       ('Expert Jewel', 2, 'Critical Eye', 1, 3),
       ('Handicraft Jewel', 3, 'Handicraft', 1, 4);
      
DROP TABLE jewels; 

      -- Crear tabla items
CREATE TABLE items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  rarity INT NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insertar algunos ejemplos de objetos
INSERT INTO items (name, description, rarity)
VALUES ('Potion', 'Restores a small amount of health.', 1),
       ('Mega Potion', 'Restores a moderate amount of health.', 2),
       ('Max Potion', 'Fully restores health.', 3);
       
DROP TABLE items;