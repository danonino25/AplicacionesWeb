<h1 > ambg-shop </h1>

<img  src="https://user-images.githubusercontent.com/30203863/71215319-517d2a80-22af-11ea-9ca8-206a2162c1cb.png"
     alt="HTML image alt text"
     title="avatar_ana"
/>

# Pasos para clonar repositorio: 


Copiar la dirección URL del repositorio.

```
https://github.com/danonino25/AplicacionesWeb
```

Abrir Gith Bash 
Cambiar el directorio de trabajo actual a la ubicación en donde se quiere clonar el directorio. 
```
cd/proyecto_ambg
```

Escribir git clone y peguar la dirección URL que se ha copiado antes.
```
 git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```
Presionar Entrar para crear el clon local.


# Instalar dependencias

Los proyectos hechos con angular suelen usar el Angular CLI (Command Line Interpreter), pero siguen dependiendo de npm, así que los pasos para probarlo serían:

Una vez dentro de dicha carpeta  ejecutar el comando:
```
npm install
```
Este comando instalará las dependencias (en ./node_modules). 

# Levantar el servidor JSON
```
json-server --watch db.json
```
# Inicar el servidor
```
 ng serve
```

Que ejecutará un servidor web que escucha en el puerto 4200, con lo que se podrá probar la aplicación tal cual está:
```
(http://localhost:4200)
```
