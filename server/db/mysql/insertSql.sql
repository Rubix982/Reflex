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
        Name,
        Created
    )
VALUES (
        1,
        'saif',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit viverra dapibus. Nam maximus malesuada risus, eu suscipit lacus consectetur vel. Pellentesque ornare risus quis diam tincidunt, et lobortis nunc ultricies. Sed vel erat vitae quam egestas feugiat eget id augue. Etiam congue nec augue quis imperdiet. Nulla facilisi. Nulla facilisi.',
        'Computer Networking',
        now()
    );
INSERT INTO Course (
        _id,
        Teacher_Handle,
        Description,
        Name,
        Created
    )
VALUES (
        2,
        'anas',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit viverra dapibus. Nam maximus malesuada risus, eu suscipit lacus consectetur vel. Pellentesque ornare risus quis diam tincidunt, et lobortis nunc ultricies. Sed vel erat vitae quam egestas feugiat eget id augue. Etiam congue nec augue quis imperdiet. Nulla facilisi. Nulla facilisi.',
        'Information Security',
        now()
    );
INSERT INTO Course (
        _id,
        Teacher_Handle,
        Description,
        Name,
        Created
    )
VALUES (
        3,
        'taha',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit viverra dapibus. Nam maximus malesuada risus, eu suscipit lacus consectetur vel. Pellentesque ornare risus quis diam tincidunt, et lobortis nunc ultricies. Sed vel erat vitae quam egestas feugiat eget id augue. Etiam congue nec augue quis imperdiet. Nulla facilisi. Nulla facilisi.',
        'Artificial Intelligence',
        now()
    );
INSERT INTO Course (
        _id,
        Teacher_Handle,
        Description,
        Name,
        Created
    )
VALUES (
        4,
        'saif',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit viverra dapibus. Nam maximus malesuada risus, eu suscipit lacus consectetur vel. Pellentesque ornare risus quis diam tincidunt, et lobortis nunc ultricies. Sed vel erat vitae quam egestas feugiat eget id augue. Etiam congue nec augue quis imperdiet. Nulla facilisi. Nulla facilisi.',
        'Big Data',
        now()
    );
INSERT INTO Course (
        _id,
        Teacher_Handle,
        Description,
        Name,
        Created
    )
VALUES (
        5,
        'saif',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit viverra dapibus. Nam maximus malesuada risus, eu suscipit lacus consectetur vel. Pellentesque ornare risus quis diam tincidunt, et lobortis nunc ultricies. Sed vel erat vitae quam egestas feugiat eget id augue. Etiam congue nec augue quis imperdiet. Nulla facilisi. Nulla facilisi.',
        'Blockchain',
        now()
    );
INSERT INTO Course (
        _id,
        Teacher_Handle,
        Description,
        Name,
        Created
    )
VALUES (
        6,
        'saif',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit viverra dapibus. Nam maximus malesuada risus, eu suscipit lacus consectetur vel. Pellentesque ornare risus quis diam tincidunt, et lobortis nunc ultricies. Sed vel erat vitae quam egestas feugiat eget id augue. Etiam congue nec augue quis imperdiet. Nulla facilisi. Nulla facilisi.',
        'Information Retrieval',
        now()
    );    
INSERT INTO Course (
        _id,
        Teacher_Handle,
        Description,
        Name,
        Created
    )
VALUES (
        7,
        'saif',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit viverra dapibus. Nam maximus malesuada risus, eu suscipit lacus consectetur vel. Pellentesque ornare risus quis diam tincidunt, et lobortis nunc ultricies. Sed vel erat vitae quam egestas feugiat eget id augue. Etiam congue nec augue quis imperdiet. Nulla facilisi. Nulla facilisi.',
        'Deep Learning For Perception',
        now()
    );    