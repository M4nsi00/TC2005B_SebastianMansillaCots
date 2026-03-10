/*
Película (título, año, duración, encolor, presupuesto, nomestudio, idproductor)
Elenco (título, año, nombre, sueldo)
Actor (nombre, dirección, telefono, fechanacimiento, sexo)
Productor (idproductor, nombre, dirección, teléfono)
Estudio (nomestudio, dirección)
*/

/*El ingreso total recibido por cada actor, 
sin importar en cuantas películas haya participado.*/
SELECT Nombre, SUM(sueldo) as 'Ingresos totales'
FROM Elenco
GROUP BY Nombre
ORDER BY SUM(sueldo) DESC;

/*El monto total destinado a películas por cada 
Estudio Cinematográfico, durante la década de los 80's.*/
SELECT nomestudio, SUM(presupuesto)
FROM Película
WHERE año BETWEEN 1980 AND 1989
GROUP BY nomestudio
ORDER BY SUM(presupuesto) DESC;

/*Nombre y sueldo promedio de los actores (sólo hombres) 
que reciben en promedio un pago superior a 5 millones de dolares 
por película. */
SELECT Nombre, AVG(sueldo) as 'Sueldo Promedio'
FROM Elenco,Actor
WHERE Elenco.nombre = Actor.nombre AND Actor.sexo = 'male'
GROUP BY Actor.nombre
HAVING AVG(sueldo) > 5,000,000
ORDER BY AVG(sueldo) DESC;

/*Título y año de producción de las películas con menor presupuesto. 
(Por ejemplo, la película de Titanic se ha producido en varias veces entre la lista de películas estaría la producción de Titanic y el año que fue filmada con menor presupuesto).*/
SELECT titulo, año, MIN(presupuesto) as 'Presupuesto minimo'
FROM Película
GROUP BY titulo
ORDER BY MIN(presupuesto) DESC;

/*Mostrar el sueldo de la actriz mejor pagada.*/
SELECT MAX(sueldo) as 'Presupuesto maximo'
FROM Elenco, Actor
WHERE Elenco.nombre = Actor.nombre AND sexo = 'female';