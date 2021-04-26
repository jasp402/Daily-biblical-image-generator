# 📖🖼️ Daily Biblical Image Generator

Este proyecto se basa en realizar un scraping a la página web 'https://www.bible.com/es/verse-of-the-day'.
la cual genera una imagen diaria con un versículo bíblico. de hecho, por día se generan varias opciones para un mismo versículo.

---

### 🎯  Objetivo
La idea fundamental es poder obtener las imágenes que se generan diariamente y sus diferentes variaciones en la más alta resolución posible (1280x1280) 

### ⚠️Problemas
- la imagen en la página es de (320px, 640px) es necesario encontrar la fuente.
- La página no admite handlerLess o extracción por request.

### 📋 Procedimiento
- Ingresar en la página (Usando PuppeteerJS)
- Ubicar las imágenes
- Extraer la fuente
- Descargar la imagen localmente

# ¿Como usar?
El uso es muy simple solo `clonar`, `instalar` y `ejecutar`. una vez que lo ejecutes se inicializara el navegador (PuppeteerJS) y obtendrá las imágenes para ti. 
Estas se almacenan en la carpeta `/assets` con la fecha actual y el código de la imagen.

### :octocat:  Clonar
`git clone https://github.com/jasp402/Daily-biblical-image-generator.git`

### 📦 instalar
 `npm install`
 
### :rocket: Ejecutar
`npm start`

# ¿cómo funciona?
He escrito este articulo para describir paso a paso como fue desarrollado. 

### [Medium - Scraping a bible.com](https://medium.com/@jasp402/mi-experiencia-con-bots-de-automatizaci%C3%B3n-e6a4fa24fe9f)
<img align="left" width="361" height="300" src="https://user-images.githubusercontent.com/8978470/116012319-75612680-a5ef-11eb-84cb-79eea5ebfa04.png">

Lo primero es ver cómo llega la imagen. si esta esta almacenada directamente en la página o proviene de otro servicio. para ello vamos a inspeccionar el elemento. Y esto es más o menos con lo que nos encontramos. la imagen actual tiene una resolución de 420x640 incluso algunas varían. También podemos apreciar que las imágenes están en otro servidor y que son públicas. pero notamos que tienen un código que cambia todos los días…  
<br>
[leer más...](https://medium.com/@jasp402/scraping-a-https-www-bible-com-d702b380c84e)

<br>
<br>
<br>
<br>
<br>
<br>

# Donar
<img width="545" alt="yellow-button" src="https://user-images.githubusercontent.com/8978470/116011951-2ca86e00-a5ed-11eb-8ed3-34771ed33145.png">

Interesado en contribuir con mis proyectos, puedes invitar me un café <br>
[buymeacoffee.com/Wjton2s](buymeacoffee.com/Wjton2s)
