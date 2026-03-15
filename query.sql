create table marca
(
    id int primary key auto_increment,
    marca varchar(30)
);

create table productos
(
    id int primary key auto_increment,
    producto varchar(30),
    descripcion varchar(30),
    precio decimal(10,2),
    stock int,
    garantia tinyint,
    id_marca int,
    foreign key (id_marca) references marca(id)
);

