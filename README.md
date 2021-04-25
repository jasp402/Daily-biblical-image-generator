#📖🖼️ Daily Biblical Image Generator

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
Si te interesa saber todos los detalles puedes ver este video de como fue creado 
y leer este articulo escrito en Medium donde se descompone parte por parte. 

# Donar
<img width="545" alt="yellow-button" src="https://user-images.githubusercontent.com/8978470/116011951-2ca86e00-a5ed-11eb-8ed3-34771ed33145.png">

Interesado en contribuir con mis proyectos, puedes invitame un cafe <br>
[buymeacoffee.com/Wjton2s](buymeacoffee.com/Wjton2s)
