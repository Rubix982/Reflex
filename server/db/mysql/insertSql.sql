USE REFLEX;
INSERT INTO Teacher (
        Email,
        Password,
        Handle,
        UserName
    )
VALUES (
        'k180307@nu.edu.pk',
        '$2y$12$zk4LgpuQZqVygsd9r7XAFuJtuRTafn4ZMNqwF8lgGbdRK13XnHMLm',
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
        '$2y$12$RO2p00CDB.XZAG/hl.mrQepiuyLTbtosBFUolBbz0rImAfz0btxcC',
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
        '$2y$12$hY/eEcnJEVmnmEJNVLtXQOviaFiKzgBW/ok5YQRGXuE0TGQvwEP.S',
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
        '$2y$12$aqEixiND.okFFVW7Wlr0WuqWz7HEgKgTj8x/BErCKkKtyQQuYTU2.',
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