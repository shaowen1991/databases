CREATE DATABASE chat;

USE chat;

-- /*  Execute this file from the command line by typing:
--  *    mysql -u root < server/schema.sql
--  *  to create the database and the tables.*/

-- ---
-- Globals
-- ---
-- SET FOREIGN_KEY_CHECKS=0;
-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

-- ---
-- Table 'users'
-- 
-- ---

-- DROP TABLE IF EXISTS users;
		
-- CREATE TABLE users (
--   id INTEGER NOT NULL AUTO_INCREMENT,
--   name CHAR(25),
--   PRIMARY KEY (id)
-- );

-- ---
-- Table 'messages'
-- 
-- ---

DROP TABLE IF EXISTS messages;
		
CREATE TABLE messages (
  id INTEGER NOT NULL AUTO_INCREMENT,
  text CHAR(255),
  createAt datetime NOT NULL DEFAULT NOW(),
  username CHAR(25),
  roomname CHAR(255),
  -- room_id INTEGER NOT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'rooms'
-- 
-- ---

-- DROP TABLE IF EXISTS rooms;
		
-- CREATE TABLE rooms (
--   id INTEGER NOT NULL AUTO_INCREMENT,
--   name CHAR(25),
--   PRIMARY KEY (id)
-- );

-- ---
-- Table 'friends'
-- 
-- ---

-- DROP TABLE IF EXISTS friends;
		
-- CREATE TABLE friends (
--   id INTEGER NOT NULL AUTO_INCREMENT,
--   user_1_id INTEGER NULL,
--   user_2_id INTEGER NULL,
--   PRIMARY KEY (id)
-- );

-- ---
-- Foreign Keys 
-- ---

-- ALTER TABLE messages ADD FOREIGN KEY (user_id) REFERENCES users (id);
-- ALTER TABLE messages ADD FOREIGN KEY (room_id) REFERENCES rooms (id);
-- ALTER TABLE friends ADD FOREIGN KEY (user_1_id) REFERENCES users (id);
-- ALTER TABLE friends ADD FOREIGN KEY (user_2_id) REFERENCES users (id);


-- ---
-- Table Properties
-- ---

-- ALTER TABLE users ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE messages ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE rooms ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE friends ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO users (id,name) VALUES
-- (NULL,'jack');
-- INSERT INTO users (id,name) VALUES
-- (NULL,'amy');
-- INSERT INTO rooms (id,name) VALUES
-- (NULL,'lobby');
-- INSERT INTO messages (id,text,createAt,user_id,room_id) VALUES 
-- (NULL,'hello world','today',
-- (SELECT id FROM users WHERE name = 'jack'), 
-- (SELECT id FROM rooms WHERE name = 'lobby'));


-- INSERT INTO messages (id,text,createAt,user_id,room_id) VALUES 
-- (NULL, message.text,,
-- (SELECT id FROM users WHERE name = 'jack'), 
-- (SELECT id FROM rooms WHERE name = 'lobby'));