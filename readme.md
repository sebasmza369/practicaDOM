# Ejercicio Práctico: Manipulación del DOM con JavaScript

Tomando como base el código HTML provisto para la página de un producto, realizá las siguientes modificaciones utilizando JavaScript para dinamizar el contenido.

## 🛠️ Preparación del entorno (Git Clone)

Antes de empezar a trabajar, debés descargar el proyecto en tu computadora local siguiendo estos pasos:

1. **Abrí la terminal (desde VS Code o pro afuera)** (o consola de comandos) en la carpeta de tu computadora donde quieras guardar el proyecto.

2. **Cloná el repositorio** ejecutando el siguiente comando:

    ```bash
    git clone https://github.com/santiagoverrier-neoland/practicaDOM.git
    ```

3. **Ingresá a la carpeta** que se acaba de crear:

    ```bash
    cd practicaDOM
    ```

4. **Eliminá la referencia** al repositorio original para poder conectar el proyecto con uno propio:

    ```bash
    git remote remove origin
    ```

5. **Creá un nuevo repositorio** en tu cuenta de GitHub.

    Ejemplo:

    ```text
    tp-dom-nombre-apellido
    ```

6. **Conectá el proyecto local** con tu nuevo repositorio:

    ```bash
    git remote add origin https://github.com/TU-USUARIO/tp-dom-nombre-apellido.git
    ```

7. **Abrí el proyecto** en tu editor de código.

8. **Cuando finalices el ejercicio**, realizá los comandos necesarios para guardar y subir los cambios a GitHub.

    ```bash
    git add .
    git commit -m "Entrega ejercicio DOM"
    git push -u origin main
    ```

## 📋 Consignas a realizar

### 1. Modificación de Contenido y Atributos

* **Cambiar la imagen de portada:** Modificá el recurso de la imagen principal utilizando su atributo correspondiente. *Tip:* El elemento cuenta con el id `"imagenPortada"`.
* **Actualizar enlace de contacto:** Cambiá la dirección de destino (URL) del enlace "Contactar". *Tip:* Podés hacerlo modificando el atributo o directamente a través de la propiedad del objeto de la etiqueta HTML.
* **Definir el modelo del producto:** Reemplazá el subtítulo genérico *"notebook"* por el nombre de un modelo de computadora que inventes.
* **Actualizar el título principal:** Cambiá el texto genérico *"venta de computadoras"* por un título comercial más real y atractivo (inventado por vos).
* **Redactar la descripción:** Cambiá el párrafo de relleno por un texto real sobre el producto (podés buscar información o descripciones reales en la web para inspirarte).

### 2. Estilos y Estructura

* **Estilar el título principal:** Modificá el diseño del título principal desde JavaScript aplicándole color, un tamaño de fuente adecuado, entre otros estilos.
* **Agregar el precio del producto:** Creá dinámicamente el elemento HTML correspondiente para el precio, asignale un valor comercial y agregalo a la estructura de la página.

### 3. Interactividad y Eventos

* **Botón de especificaciones:** Capturá el botón de especificaciones técnicas y asignale un evento `"click"` para que, al presionarlo, despliegue o muestre las características detalladas del equipo.
* **Formulario "Mantenerme informado":** Configurá el formulario para que, al momento de hacer clic en el botón de envío, se capture el valor ingresado por el usuario (simulando la preparación de los datos para su posterior envío).
