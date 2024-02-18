SET NAMES utf8;
USE nest;

DELETE FROM User;

INSERT INTO User(
    email,
    token
)VALUES
(
"admin@gmail.com",
"admin"
);