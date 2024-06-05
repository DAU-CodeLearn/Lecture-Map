CREATE SCHEMA IF NOT EXISTS `map` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `map` ;

-- -----------------------------------------------------
-- Table `map`.`classrooms`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `map`.`classrooms` (
  `classroom_id` INT NOT NULL,
  `building` VARCHAR(100) NULL DEFAULT NULL,
  `room_number` VARCHAR(10) NULL DEFAULT NULL,
  PRIMARY KEY (`classroom_id`)
);


-- -----------------------------------------------------
-- Table `map`.`courses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `map`.`courses` (
  `course_id` INT NOT NULL AUTO_INCREMENT,
  `course_name` VARCHAR(100) NULL DEFAULT NULL,
  `credits` INT NULL DEFAULT NULL,
  `department` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`course_id`)
);


-- -----------------------------------------------------
-- Table `map`.`schedule`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `map`.`schedule` (
  `schedule_id` INT NOT NULL AUTO_INCREMENT,
  `course_id` INT NULL DEFAULT NULL,
  `classroom_id` INT NULL DEFAULT NULL,
  `day_of_week` VARCHAR(10) NULL DEFAULT NULL,
  `start_time` TIME NULL DEFAULT NULL,
  `end_time` TIME NULL DEFAULT NULL,
  `is_reserved` TINYINT(1) NULL DEFAULT '0',
  PRIMARY KEY (`schedule_id`),
  INDEX `course_id` (`course_id` ASC) VISIBLE,
  INDEX `classroom_id` (`classroom_id` ASC) VISIBLE,
  CONSTRAINT `schedule_ibfk_1`
    FOREIGN KEY (`course_id`)
    REFERENCES `map`.`courses` (`course_id`),
  CONSTRAINT `schedule_ibfk_2`
    FOREIGN KEY (`classroom_id`)
    REFERENCES `map`.`classrooms` (`classroom_id`)
  );


-- -----------------------------------------------------
-- Table `map`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `map`.`users` (
  `student_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` VARCHAR(100) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `username` VARCHAR(50) NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`student_id`),
  UNIQUE INDEX `username` (`user_id` ASC) VISIBLE,
  UNIQUE INDEX `email` (`username` ASC) VISIBLE
);


-- -----------------------------------------------------
-- Table `map`.`userschedule`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `map`.`userschedule` (
  `user_schedule_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NULL DEFAULT NULL,
  `schedule_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`user_schedule_id`),
  INDEX `user_id` (`user_id` ASC) VISIBLE,
  INDEX `schedule_id` (`schedule_id` ASC) VISIBLE,
  CONSTRAINT `userschedule_ibfk_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `map`.`users` (`student_id`),
  CONSTRAINT `userschedule_ibfk_2`
    FOREIGN KEY (`schedule_id`)
    REFERENCES `map`.`schedule` (`schedule_id`)
  );
