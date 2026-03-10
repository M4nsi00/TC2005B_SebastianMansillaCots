/*
Película(título, año, duración, encolor, presupuesto, nomestudio, idproductor)
Elenco(título, año, nombre, sueldo)
Actor(nombre, dirección, telefono, fechanacimiento, sexo)
Productor(idproductor, nombre, dirección, teléfono)
Estudio(nomestudio, dirección)
*/

/*1.- Actrices de “Las brujas de Salem”.*/
SELECT Nombre
FROM Elenco E, Actor A
WHERE E.nombre = A.nombre
AND A.sexo = "F" AND E.titulo = "Las brujas de Salem";


SELECT Nombre
FROM Elenco
WHERE titulo = "Las brujas de Salem"
AND Nombre IN (Select nombre
				From Actor
				WHERE SEXO = "f");

/*2.- Nombres de los actores que aparecen en películas producidas por MGM en 1995.*/
SELECT Nombre
FROM Elenco E
JOIN Pelicula P on E.titulo = P.titulo AND E.año = P.año
WHERE P.año = 1995 AND P.nomestudio = "MGM";

SELECT Nombre
FROM Elenco
WHERE Titulo IN(SELECT Titulo
               FROM Pelicula
               WHERE AÑO = 1995
               AND Nomestudio = "MGM");

/*3.- Películas que duran más que “Lo que el viento se llevó” (de 1939).*/

SELECT titulo
From Peliculas
Where duracion > (SELECT duracion
                 FROM Peliculas
                 WHERE titulo = ""Lo que el viento se llevó
                 AND año = 1939);


/*4.- Productores que han hecho más películas que George Lucas.*/
SELECT Pr.nombre
FROM Productor Pr
JOIN Pelicual Pl on Pr.id_productor = Pl.id_productor
WHERE COUNT(id_productor) > (SELECT COUNT (id_productor)
                            FROM Productor Pr
                            JOIN Pelicula Pl on Pr.id_productor = Pl.id_productor
                            WHERE Pr.nombre = "George Lucas");


/*5.- Nombres de los productores de las películas en las que ha aparecido Sharon Stone.*/
SELECT Pr.nombre
FROM Productor Pr
INNER JOIN Pelicula Pl ON Pr.id_productor = Pl.id_productor
WHERE Pl.titulo IN(SELECT E.titulo
                   FROM Elenco E
                   WHERE E.nombre='Sharon Stone');

SELECT Pr.nombre
From Porductor Pr
INNER JOIN Pelicula Pl ON Pr.id_productor = Pl.id_productor
INNER JOIN Elenco E ON E.titulo = Pl.titulo
WHERE E.nombre = 'Sharon Stone';

/*6.- Título de las películas que han sido filmadas más de una vez*/
SELECT titulo, COUNT(titulo) as 'Cantidad de veces filmada'
FROM Peliculas
GROUP BY titulo
HAVING COUNT(titulo) > 1;