# Blog FrontEnd (HTML y SASS)

## Tabla de Contenidos

- [Descripción](#descripción)
- [Contenido del Proyecto](#contenido-del-proyecto)
- [Estructura de Archivos](#estructura-de-archivos)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Uso](#uso)
- [Instalación](#instalación)
- [Autores](#autores)

## Descripción

Este es un proyecto de blog FrontEnd que utiliza múltiples archivos HTML y SASS para crear una 
experiencia de usuario completa. El blog incluye páginas para artículos, novedades, inicio de sesión 
y registro.

## Contenido del Proyecto
- `Registro.html`: Página de registro de usuarios.
- `Login.html`: Página de inicio de sesión.
- `Blog.html`: Página del blog principal.
- `Article.html`: Página de un artículo específico.

[Revisa el resultado final aqui]()

![Wireframe - 4](https://github.com/VickyAzola/BlogFrontEndCompleto-DesafioLatam/assets/116470398/9ac683bf-81e5-4331-ba11-3e9e51403c8d)
![Wireframe - 5](https://github.com/VickyAzola/BlogFrontEndCompleto-DesafioLatam/assets/116470398/edc34023-ff5d-4283-b1f0-7dee8a9fc08f)


## Estructura de Archivos

```plaintext
BlogFrontEndCompleto-DesafioLatam/
├── assets/
│   ├── css/
│   │   └── main.css
│   │
│   ├── img/
│   │   ├── logos/
│   │   │   ├── adl.png
│   │   │   ├── bootstrap-logo.png
│   │   │   ├── css.png
│   │   │   ├── google.png
│   │   │   ├── html.png
│   │   │   ├── js.png
│   │   │   ├── react.png
│   │   │   └── vue.png
│   │   │
│   │   └── posts/
│   │       ├── api-js.png 
│   │       ├── bootstrap.png 
│   │       ├── Etiquetas-semánticas-HTML.png 
│   │       ├── Herencia-JS.png
│   │       ├── reactComponents.png 
│   │       ├── sass.jpg
│   │       └── vue-components.png 
│   │
│   ├── js/
│   │    
│   └── scss/
│       ├── abstracts/
│       │   ├── _mixins.scss
│       │   └── _variables.scss
│       │ 
│       ├── base/
│       │   ├── _reset.scss
│       │   └── _typography.scss
│       │ 
│       ├── components/
│       │   ├── _article.scss
│       │   ├── _buttons.scss
│       │   ├── _horizontalCard.scss
│       │   ├── _inputs.scss
│       │   ├── _logo.scss
│       │   ├── _subscription.scss
│       │   ├── _subtitle.scss
│       │   ├── _user.scss
│       │   ├── _verticalCard.scss
│       │   └── _widget.scss
│       │ 
│       ├── layout/
│       │   ├── _containers.scss
│       │   ├── _footer.scss
│       │   └── _form-login.scss
│       │ 
│       ├── pages/
│       ├── themes/
│       │   └── _theme.scss
│       │ 
│       ├── vendors/
│       └── main.scss
│
├── Blog.html
├── Article.html
├── Login.html
└── Registro.html
```

## Tecnologías Utilizadas

- **HTML5**: Para la estructura del sitio web.
- **SASS**: Para el diseño y la presentación del sitio web. Los archivos SASS están organizados siguiendo la metodología 7-1 para mantener el código modular y fácil de mantener.
- **Google Fonts**: Biblioteca de fuentes de texto. Se utilizo:
  - [Poppins](https://fonts.google.com/specimen/Poppins?query=Poppins)

## Uso
- **Registro**: La pantalla de `Registro.html` permite crear una cuenta en caso de no tener una.
- **Iniciar Sesión**: La pantalla `Login.html` permite iniciar sesión con la cuenta creada.
- **Novedades**: Muestra las últimas novedades en desarrollo front-end con una tarjeta principal
  que puedes seleccionar para leer el articulo completo y varias tarjetas pequeñas a su lado.
- **Artículos Populares**: Sección dedicada a los artículos más populares del blog.
- **Categorías**: Diferentes categorías de temas como HTML, CSS, JavaScript, React, Vue, y Bootstrap.

## Instalación

1. **Clonar el repositorio**:
    ```bash
    git clone git@github.com:VickyAzola/BlogFrontEndCompleto-DesafioLatam.git
    ```
2. **Navega al directorio del proyecto**
    ```bash
    cd BlogFrontEndCompleto-DesafioLatam
    ```
3. Abrir `index.html` en tu navegadorpara ver el sitio web.

## Autores

- **Desarrollador Principal**: [Victoria Azola Silva](https://github.com/VickyAzola) - Responsable del desarrollo del código.
- **Diseñador**: [Desafío Latam](https://desafiolatam.com/admision/?utm_term=desafio%20latam&utm_campaign=Brand&utm_source=adwords&utm_medium=ppc&hsa_acc=1239562006&hsa_cam=16998643182&hsa_grp=136655824715&hsa_ad=596057942540&hsa_src=g&hsa_tgt=kwd-340546658839&hsa_kw=desafio%20latam&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAjwvvmzBhA2EiwAtHVrbzEJGJPqUuTuFDuNIFtSh4eKqGXcLXmCO9u12vwlU553fGXV93Q5zxoCGmEQAvD_BwE) - Responsable del diseño gráfico y visual del proyecto.
