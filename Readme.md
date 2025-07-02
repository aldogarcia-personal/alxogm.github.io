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

Diseñar una **landing page multilingüe (ES/EN)** para presentar el trabajo profesional de la Dra. Alma Xochitl Gonzales Morales. Este sitio debe funcionar como:

- Portafolio académico.
- Espacio de difusión científica.
- Plataforma de enseñanza.
- Archivo público de publicaciones y eventos.

Todo esto con una **interfaz moderna, intuitiva y accesible** tanto para público general como para la comunidad científica.

---

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

## 🧭 Navegación y rutas

La navegación del sitio hace uso del fondo azul oscuro (`#1F2A44`), texto claro (`#F5F5F5`), y elementos activos o hover en azul brillante (`#00B0FF`). El nombre de la doctora está resaltado con púrpura vibrante (`#7C4DFF`) para destacar su identidad.

Las rutas cambian automáticamente según el idioma seleccionado. Se utiliza Tailwind para aplicar estilos y mantener accesibilidad visual:

### Paths en Español:

- `/inicio` — Inicio (landing page)
- `/investigación` — Investigación
- `/divulgación` — Divulgación
- `/enseñanza` — Enseñanza
- `/blog` — Blog
- `/contacto` — Contacto
- `/cv` — Curriculum Vitae

### Paths en Inglés:

- `/home` — Home (landing page)
- `/research` — Research
- `/outreach` — Outreach
- `/teaching` — Teaching
- `/blog` — Blog
- `/contact` — Contact
- `/cv` — Curriculum Vitae

---

## 🧩 Diseño del Navbar

- El **navbar permanece abierto** por defecto en pantallas medianas (`md`) o mayores.
- Se incluye un **botón flotante** para cerrar manualmente el nav en esas pantallas, con tooltip o texto para accesibilidad.
- En móviles, el nav inicia cerrado y puede abrirse con un **botón flotante** que cambia su icono y texto (`Abrir menú` / `✕ Cerrar`).
- Esto mejora la **experiencia de usuario (UX)** y mantiene un diseño adaptable y profesional.

---

## 🏠 Contenido de la Página de Inicio (Landing)

### 🎯 Objetivo de `/home` o `/inicio`

La **landing page** debe ser un **resumen atractivo y funcional del sitio**, una especie de "portada" que:

- Presente rápidamente quién es la doctora.
- Invite a explorar las demás secciones.
- Genere una buena primera impresión.

---

### 🧩 Contenido ideal para `/home`

Aquí tienes un esquema sugerido con componentes que puedes incluir sin repetir demasiado contenido de otras secciones:

#### 1. **Hero Section (encabezado visual impactante)**

- Foto profesional o fondo relacionado con el universo/ciencia.
- Nombre completo.
- Título actual (ej. Investigadora en Óptica Cuántica en UGTO).
- Frase breve inspiradora o resumen de misión personal.
- Botón de llamado a la acción: `Ver CV`, `Explorar investigación`, etc.

#### 2. **Resumen biográfico corto**

- 3–5 líneas explicando quién es, su enfoque actual (óptica cuántica, mapeo del universo), y su labor docente.
- Link a la sección de **Investigación** o **Enseñanza** para ampliar.

#### 3. **Áreas de interés destacadas**

- 3 tarjetas o íconos:

  - Investigación
  - Docencia
  - Divulgación

- Cada uno con botón o link a su respectiva ruta (`/investigación`, `/enseñanza`, `/divulgación`).

#### 4. **Última publicación o charla destacada (opcional)**

- Mostrar una o dos publicaciones recientes o próximas charlas.
- Link a `/divulgación` o `/blog`.

#### 5. **Testimonios / citas (opcional pero elegante)**

- Frase de un colega, alumno, o algo representativo.

#### 6. **Sección de contacto rápida**

- “¿Interesado en colaborar o contactar?” → botón hacia `/contacto`.

---

### ❌ Qué evitar poner en `/home`

Evita sobrecargar con:

- Listado completo de publicaciones (mejor en `/research`).
- Cursos detallados (para `/teaching`).
- Blog completo (solo muestra 1 post destacado).

---

### 🧠 Tip adicional

Piensa en `/home` como la **versión _elevator pitch_** de todo el sitio. Si alguien solo viera esta página, debería poder entender:

- Quién es.
- Qué hace.
- Por qué es relevante.
- Dónde puede saber más.

---

El path `/inicio` (o `/home`) no repite contenido de otras secciones. En su lugar, contiene **resúmenes atractivos e intrigantes** de cada sección:

- 🔬 **Investigación**: "Explora cómo la Dra. González trabaja en el mapeo del universo desde la óptica cuántica."
- 📣 **Divulgación**: "Charlas, eventos y materiales multimedia que acercan la ciencia a la sociedad."
- 👩‍🏫 **Enseñanza**: "Conoce su enfoque pedagógico y cursos impartidos en la Universidad de Guanajuato."
- 📚 **Blog**: "Reflexiones, explicaciones y notas científicas directamente desde el laboratorio."
- 📇 **Contacto y CV**: Accesos directos a su curriculum y medios de comunicación.

Estos resúmenes se presentan en forma de **tarjetas informativas (cards)** o secciones animadas breves, con llamada a la acción ("Descubre más").

---

## 🌐 Idiomas

El sitio está disponible en español e inglés. Los paths y textos se adaptan automáticamente al idioma seleccionado por el usuario.

## 📄 Licencia

Este proyecto es de uso personal y académico. Todos los derechos reservados a Dra. Alma Xochitl Gonzales Morales.
