# AmbgShop

<img src="https://user-images.githubusercontent.com/30203863/71215319-517d2a80-22af-11ea-9ca8-206a2162c1cb.png"
     alt="HTML image alt text"
     title="avatar_ana"
/>

# Pasos para descargar repositorio: 

Encima de la lista de archivos, hacer clic en  Código.
![image](https://github.com/danonino25/AplicacionesWeb/assets/116208398/8d6a8df7-75ad-4e9e-8c48-df27a537cee6)

Copiar la dirección URL del repositorio.

![image](https://github.com/danonino25/AplicacionesWeb/assets/116208398/9ce0661c-456c-4c78-a234-daec32b21c29)


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
