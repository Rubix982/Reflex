USE REFLEX;
INSERT INTO Teacher (
        Email,
        Password,
        Handle,
        UserName
    )
VALUES (
        'k180307@nu.edu.pk',
        '$2b$12$BBuMdZosXywisiyEzdm9MOPI8Zrdx27uO7j8wh1TrZ8ASF8t8CwWq',
        'saif',
        'Saif Ul Islam'
    );
INSERT INTO Teacher (
        Email,
        Password,
        Handle,
        UserName
    )
VALUES (
        'k181090@nu.edu.pk',
        '$2b$12$1GnQUFa9f1b0ScmzVRYtTeMrHcPT/t5pjuDXWc9YekxYWIiEK2Ko6',
        'anas',
        'Muhammad Anas Aziz Siddiqui'
    );
INSERT INTO Teacher (
        Email,
        Password,
        Handle,
        UserName
    )
VALUES (
        'K181270@nu.edu.pk',
        '$2b$12$40nR8Wpzmkku9/sgBrmNEO0PePw4ayKmxV9Z89U/pGkdx70c0jO/u',
        'taha',
        'Muhammad Taha'
    );
INSERT INTO Teacher (
        Email,
        Password,
        Handle,
        UserName
    )
VALUES (
        'johndoe@gmail.com',
        '$2b$12$NS4N3LGS250elIigcwiuUOhqYHB7zJgTGRSen64qx9.c3Hd6ailMO',
        'john',
        'John Doe'
    );
INSERT INTO Course (
        _id,
        Teacher_Handle,
        Description,
        Name
    )
VALUES (
        1,
        'saif',
        'This is a description',
        'Computer Networking'
    );
INSERT INTO Course (
        _id,
        Teacher_Handle,
        Description,
        Name
    )
VALUES (
        2,
        'anas',
        'This is a description',
        'Information Security'
    );
INSERT INTO Course (
        _id,
        Teacher_Handle,
        Description,
        Name
    )
VALUES (
        3,
        'taha',
        'This is a description',
        'Artificial Intelligence'
    );