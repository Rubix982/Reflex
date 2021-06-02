USE REFLEX;
INSERT INTO Teacher (
        Email,
        Password,
        Handle,
        UserName,
        ProfilePicture
    )
VALUES (
        'k180307@nu.edu.pk',
        '$2b$12$BBuMdZosXywisiyEzdm9MOPI8Zrdx27uO7j8wh1TrZ8ASF8t8CwWq',
        'saif',
        'Saif Ul Islam',
        'boy.svg'
    );
INSERT INTO Teacher (
        Email,
        Password,
        Handle,
        UserName,
        ProfilePicture
    )
VALUES (
        'k181090@nu.edu.pk',
        '$2b$12$1GnQUFa9f1b0ScmzVRYtTeMrHcPT/t5pjuDXWc9YekxYWIiEK2Ko6',
        'anas',
        'Muhammad Anas Aziz Siddiqui',
        'boy(1).svg'
    );
INSERT INTO Teacher (
        Email,
        Password,
        Handle,
        UserName,
        ProfilePicture
    )
VALUES (
        'K181270@nu.edu.pk',
        '$2b$12$40nR8Wpzmkku9/sgBrmNEO0PePw4ayKmxV9Z89U/pGkdx70c0jO/u',
        'taha',
        'Muhammad Taha',
        'boy(2).svg'
    );
INSERT INTO Teacher (
        Email,
        Password,
        Handle,
        UserName,
        ProfilePicture
    )
VALUES (
        'johndoe@gmail.com',
        '$2b$12$NS4N3LGS250elIigcwiuUOhqYHB7zJgTGRSen64qx9.c3Hd6ailMO',
        'john',
        'John Doe',
        'boy(4).svg'
    );
INSERT INTO Course (
        Teacher_Handle,
        Description,
        Name,
        Created,
        DisplayPicture
    )
VALUES (
        'saif',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit viverra dapibus. Nam maximus malesuada risus, eu suscipit lacus consectetur vel. Pellentesque ornare risus quis diam tincidunt, et lobortis nunc ultricies. Sed vel erat vitae quam egestas feugiat eget id augue. Etiam congue nec augue quis imperdiet. Nulla facilisi. Nulla facilisi.',
        'Computer Networking',
        now(),
        '2.jpg'
    );
INSERT INTO Course (
        Teacher_Handle,
        Description,
        Name,
        Created,
        DisplayPicture
    )
VALUES (
        'anas',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit viverra dapibus. Nam maximus malesuada risus, eu suscipit lacus consectetur vel. Pellentesque ornare risus quis diam tincidunt, et lobortis nunc ultricies. Sed vel erat vitae quam egestas feugiat eget id augue. Etiam congue nec augue quis imperdiet. Nulla facilisi. Nulla facilisi.',
        'Information Security',
        now(),
        '3.jpg'
    );
INSERT INTO Course (
        Teacher_Handle,
        Description,
        Name,
        Created,
        DisplayPicture
    )
VALUES (
        'taha',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit viverra dapibus. Nam maximus malesuada risus, eu suscipit lacus consectetur vel. Pellentesque ornare risus quis diam tincidunt, et lobortis nunc ultricies. Sed vel erat vitae quam egestas feugiat eget id augue. Etiam congue nec augue quis imperdiet. Nulla facilisi. Nulla facilisi.',
        'Artificial Intelligence',
        now(),
        '4.jpg'
    );
INSERT INTO Course (
        Teacher_Handle,
        Description,
        Name,
        Created,
        DisplayPicture
    )
VALUES (
        'saif',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit viverra dapibus. Nam maximus malesuada risus, eu suscipit lacus consectetur vel. Pellentesque ornare risus quis diam tincidunt, et lobortis nunc ultricies. Sed vel erat vitae quam egestas feugiat eget id augue. Etiam congue nec augue quis imperdiet. Nulla facilisi. Nulla facilisi.',
        'Big Data',
        now(),
        '5.jpg'
    );
INSERT INTO Course (
        Teacher_Handle,
        Description,
        Name,
        Created,
        DisplayPicture
    )
VALUES (
        'saif',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit viverra dapibus. Nam maximus malesuada risus, eu suscipit lacus consectetur vel. Pellentesque ornare risus quis diam tincidunt, et lobortis nunc ultricies. Sed vel erat vitae quam egestas feugiat eget id augue. Etiam congue nec augue quis imperdiet. Nulla facilisi. Nulla facilisi.',
        'Blockchain',
        now(),
        '6.jpg'
    );
INSERT INTO Course (
        Teacher_Handle,
        Description,
        Name,
        Created,
        DisplayPicture
    )
VALUES (
        'saif',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit viverra dapibus. Nam maximus malesuada risus, eu suscipit lacus consectetur vel. Pellentesque ornare risus quis diam tincidunt, et lobortis nunc ultricies. Sed vel erat vitae quam egestas feugiat eget id augue. Etiam congue nec augue quis imperdiet. Nulla facilisi. Nulla facilisi.',
        'Information Retrieval',
        now(),
        '7.jpg'
    );
INSERT INTO Course (
        Teacher_Handle,
        Description,
        Name,
        Created,
        DisplayPicture
    )
VALUES (
        'saif',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit viverra dapibus. Nam maximus malesuada risus, eu suscipit lacus consectetur vel. Pellentesque ornare risus quis diam tincidunt, et lobortis nunc ultricies. Sed vel erat vitae quam egestas feugiat eget id augue. Etiam congue nec augue quis imperdiet. Nulla facilisi. Nulla facilisi.',
        'Deep Learning For Perception',
        now(),
        '8.jpg'
    );