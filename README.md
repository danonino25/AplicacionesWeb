<h1 align="center"> ambg-shop </h1>

<img align="center"  src="https://user-images.githubusercontent.com/30203863/71215319-517d2a80-22af-11ea-9ca8-206a2162c1cb.png"
     alt="HTML image alt text"
     title="avatar_ana"
/>

# Pasos para clonar repositorio: 

Abrir Gith Bash 
--Colocarse en la carpeta destinada para guardadar el proyecto localmente 
```
cd/proyecto_ambg
```

Copiar la dirección URL del repositorio.

https://github.com/danonino25/AplicacionesWeb


Abrir Git Bash.

Cambiar el directorio de trabajo actual a la ubicación en donde se quiere clonar el directorio.

Escribir git clone y peguar la dirección URL que se ha copiado antes.

* git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY

Presionar Entrar para crear el clon local.

> Cloning into `Spoon-Knife`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.


# Instalar dependencias

Los proyectos hechos con angular suelen usar el Angular CLI (Command Line Interpreter), pero siguen dependiendo de npm, así que los pasos para probarlo serían:

Colocarse desde la consola a nivel de la carpeta raíz del proyecto, algo así:

* C:\Users\tuuser\Desktop\proyecto> 

Una vez dentro de dicha carpeta  ejecutar el comando:

* C:\Users\tuuser\Desktop\proyecto> npm install

Este comando instalará las dependencias (en ./node_modules). Una vez se tengan las dependencias bajadas, solo faltará ejecutar

* ng serve

Que ejecutará un servidor web que escucha en el puerto 4200, con lo que se podrá probar la aplicación tal cual está (http://localhost:4200)
