CREATE TABLE `php_ajax`.`user` 
    ( `id` INT NOT NULL AUTO_INCREMENT ,
    `name` VARCHAR(255) NOT NULL , 
    `age` INT(2) NOT NULL , 
    `country` VARCHAR(255) NOT NULL , 
    `email` VARCHAR(255) NOT NULL , 
    PRIMARY KEY (`id`)) ENGINE = InnoDB; 
    
INSERT INTO `user` (`id`, `name`, `age`, `country`, `email`) 
    VALUES 
        (NULL, 'Blackwell', '25', 'Haiti', 'black@gmail.com'), 
        (NULL, 'Monica Frye', '50', 'Austria', 'dennis@gmail.com'), 
        (NULL, 'Evangeline Walker', '30', 'Belgium', 'hamilton@gmail.com'), 
        (NULL, 'Allyson Osborne', '65', 'Vanuatu', 'sears@gmail.com'), 
        (NULL, 'James Mitchell', '19', 'Luxemburgo', 'martha@gmail.com'), 
        (NULL, 'Maynard Bean', '66', 'France', 'maynard@gmail.com'), 
        (NULL, 'Minerva Solomon', '50', 'Congo', 'hamilton@gmail.com');