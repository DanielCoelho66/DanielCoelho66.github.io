USE db200250436;

CREATE TABLE todoUsers (
	loginUser VARCHAR(255) NOT NULL PRIMARY KEY,
	loginPass VARCHAR(255) NOT NULL
);

INSERT INTO todoUsers (loginUser, loginPass) VALUES ('test', 'testpassword');

SELECT * FROM todoUsers;