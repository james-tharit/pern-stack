create table if not EXISTS postgres.public.friends(
	user_id serial primary key,
	first_name varchar (50) not null,
	last_name varchar(50) not null,
	date_of_birth date not null,
	email varchar(255) unique not null,
	create_on TIMESTAMP not null DEFAULT CURRENT_TIMESTAMP
);