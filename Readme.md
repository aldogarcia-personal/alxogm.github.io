# 🌌 Portafolio Científico - Dra. Alma Xochitl Gonzales Morales 🌌

Sitio web personal de una física especializada en óptica cuántica, docencia e investigación. Este proyecto busca presentar su trabajo académico, materiales de enseñanza y actividades de divulgación, con una identidad visual profesional, moderna y científica.

## Requerimientos Técnicos

- Internacionalización con i18next y archivos de traducción JSON para español e inglés.
- Estado global del idioma gestionado con Zustand, sincronizado con i18next y persistido en localStorage.
- Rutas dinámicas con React Router v6+, adaptando los paths y etiquetas de navegación según el idioma seleccionado.
- Redirección automática de la ruta raíz (`/`) a la página principal correspondiente al idioma (`/inicio` o `/home`).
- Hooks personalizados para sincronizar idioma y rutas: `useSyncI18nWithStore` y `useSyncLanguageRoutes`.
- Persistencia automática de la preferencia de idioma entre sesiones del usuario.
- Navegación dinámica en el componente `Nav`, mostrando enlaces y etiquetas según el idioma, con soporte para iconos (Material UI o FontAwesome).
- Estilos aplicados con Tailwind CSS, combinados con componentes de Material UI para la interfaz.
- Validación y manejo de errores en la carga de archivos de traducción.
- Código organizado y desacoplado: rutas, hooks, store y componentes separados para facilitar mantenimiento y escalabilidad.

## 🎯 Objetivo

Crear una landing page multilingüe (ES/EN) que funcione como portafolio académico y espacio de difusión de materiales científicos y educativos, con una interfaz clara, elegante y accesible.

## 🎨 Paleta de Colores

La siguiente paleta fue seleccionada para transmitir profesionalismo, seriedad científica y un toque moderno relacionado con la física y el universo:

| Rol del color             | Color (HEX) | Descripción                                                     |
| ------------------------- | ----------- | --------------------------------------------------------------- |
| **Fondo Principal**       | `#1F2A44`   | Azul oscuro profundo, profesional y sobrio                      |
| **Texto Principal**       | `#F5F5F5`   | Gris claro, para una lectura cómoda y contrastada               |
| **Color Primario (UI)**   | `#00B0FF`   | Azul brillante, asociado a tecnología y precisión               |
| **Acento Secundario**     | `#FF6F00`   | Naranja cálido, para llamados a la acción o detalles destacados |
| **Elemento Científico**   | `#00695C`   | Verde esmeralda oscuro, moderno y connotación de naturaleza     |
| **Detalles Tecnológicos** | `#B0BEC5`   | Gris metálico, para bordes, sombras o decoraciones sutiles      |
| **Elemento Destacado**    | `#7C4DFF`   | Púrpura vibrante, para identidad personal, logotipo o títulos   |

## 🧭 Navegación

La navegación del sitio hace uso del fondo azul oscuro (`#1F2A44`), texto claro (`#F5F5F5`), y elementos activos o hover en azul brillante (`#00B0FF`). El nombre de la doctora está resaltado con púrpura vibrante (`#7C4DFF`) para destacar su identidad.

## 🌐 Idiomas

El sitio está disponible en español e inglés. Los paths y textos se adaptan automáticamente al idioma seleccionado por el usuario.

## 📄 Licencia

Este proyecto es de uso personal y académico. Todos los derechos reservados a Dra. Alma Xochitl Gonzales Morales.
