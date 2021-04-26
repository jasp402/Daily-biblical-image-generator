# 📖🖼️ Daily Biblical Image Generator

Este proyecto se basa en realizar un scraping a la pagina web 'https://www.bible.com/es/verse-of-the-day'.
la cual genera una imagen diaria con un bersiculo biblico. de hecho por dia se generan varias opciones para un mismo versiculo.

---

### 🎯  Objetivo
La idea fundamental es poder optener las imagnes que se generan diariamente y sus diferentes variaciones en la más alta resolución posible (1280x1280) 

### ⚠️Problemas
- la imagen en la pagina es de (320px, 640px) es necesario encontrar la fuente.
- La pagina no admite handlerLess o extraccion por request.

### 📋 Procedimiento
- Ingresar en la pagina (Usando PuppeteerJS)
- Ubicar las imagnenes
- Extraer la fuente
- Descargar la imagen localmente

# ¿Como usar?
El uso es muy simple solo `clonar`, `instalar` y `ejecutar`. una vez que lo ejecutes se inicializara el navegador (PuppeteerJS) y obtendra las imagenes para ti. 
Estas se almacenan en la carpeta `/assets` con la fecha actual y el codigo de la imagen.

### :octocat:  Clonar
`git clone https://github.com/jasp402/Daily-biblical-image-generator.git`

### 📦 instalar
 `npm install`
 
### :rocket: Ejecutar
`npm start`

# ¿como funciona?
He escrito este articulo para describir paso a paso como fue desarrollado. 

### [Medium - Scraping a bible.com](https://medium.com/@jasp402/mi-experiencia-con-bots-de-automatizaci%C3%B3n-e6a4fa24fe9f)
<img align="left" width="361" height="300" src="https://user-images.githubusercontent.com/8978470/116012319-75612680-a5ef-11eb-84cb-79eea5ebfa04.png">

Lo primero es ver como llega la imagen. si esta esta almacenada directamente en la pagina o proviene de otro servicio. para ello vamos a inspeccionar el elemento. Y esto es más o menos con lo que nos encontramos. la imagen actual tiene una resolución de 420x640 incluso algunas varían. También podemos apreciar que las imágenes están en otro servidor y que son publicas. pero notamos que tienen un código que cambia todos los días… <br>
[leer más...](https://medium.com/@jasp402/scraping-a-https-www-bible-com-d702b380c84e)

<br>
<br>
<br>
<br>
<br>
<br>

# Donar
<img width="545" alt="yellow-button" src="https://user-images.githubusercontent.com/8978470/116011951-2ca86e00-a5ed-11eb-8ed3-34771ed33145.png">

Interesado en contribuir con mis proyectos, puedes invitame un cafe <br>
[buymeacoffee.com/Wjton2s](buymeacoffee.com/Wjton2s)
