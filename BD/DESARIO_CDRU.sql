	CREATE TABLE  `meusistema` . `usuario`(
			`usuario_id` INT NOT NULL AUTO_INCREMENT,
            `usuario_nome` VARCHAR(150),
            `usuario_login` VARCHAR(200),
            `usuario_senha`VARCHAR(50),
						PRIMARY KEY (`usuario_id`)
);

	INSERT INTO `meusistema`.`usuario`(`usuario_nome`,`usuario_login`,`usuario_senha`)
    VALUES ("nanda","nandamarinho","nanda123");

    INSERT INTO `meusistema`.`usuario`(`usuario_nome`,`usuario_login`,`usuario_senha`)
    VALUES ("rapha","raphabuono","rapha123");
    
    INSERT INTO `meusistema`.`usuario`(`usuario_nome`,`usuario_login`,`usuario_senha`)
    VALUES ("ike","ikemarinho","ike123");
    
    INSERT INTO `meusistema`.`usuario`(`usuario_nome`,`usuario_login`,`usuario_senha`)
    VALUES ("bella","bellamarinho","bella123");
    
	SELECT * FROM `usuario`;
    
    UPDATE usuario SET usuario_nome = "nandamae" WHERE usuario_id = 1;
    UPDATE usuario SET usuario_nome = "ikefilho" WHERE usuario_id = 3;
    
    DELETE FROM usuario WHERE usuario_id = 1
    
    
    
    

            