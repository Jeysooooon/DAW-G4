# Grupo 4 · Desarrollo web que conecta las tecnologías emergentes
**Asignatura:** Desarrollo de Aplicaciones Web (UJCV) · **Producto:** CitaYa, sistema de citas médicas automatizado

## 1. Función de HTML, CSS y JavaScript
- **HTML:** estructura y significado del contenido (títulos, secciones, formularios).
- **CSS:** aspecto y diseño adaptable a celular y computadora.
- **JavaScript:** lógica en el navegador; reacciona a lo que hace el usuario.

## 2. Comunicación con servicios externos (APIs)
La interfaz recibe los datos, JavaScript los valida y, con una API (hoy se usa sobre todo `fetch`), los envía a un servidor. El servidor guarda las claves y se conecta a los servicios de IA, a la agenda y a los mensajes. Según MDN, Fetch es el reemplazo moderno de XMLHttpRequest.

## 3. Diseño adaptable, accesibilidad, rendimiento y seguridad
- **Adaptable:** la página se acomoda a cualquier tamaño de pantalla.
- **Accesibilidad:** etiquetas en formularios, buen contraste, uso con teclado y avisos para lectores de pantalla.
- **Rendimiento:** archivos livianos para cargar rápido.
- **Seguridad:** validar lo que escribe el usuario y nunca poner claves API en la página. En salud, además, proteger la privacidad de los datos.

## 4. Propuesta: CitaYa (IA + automatización)
- **Problema:** pedir citas es lento, hay dudas sobre qué especialista elegir y se pierden citas por olvido.
- **Solución:** la IA orienta sobre la especialidad y la automatización reserva el horario y envía recordatorios.
- **Funciones:** orientación con IA, reserva automática, recordatorios (24 h y 2 h antes), diseño accesible.
- **Riesgos:** privacidad de datos de salud, errores de la IA (solo orienta) y manejo de emergencias.
- **Demo:** la IA está simulada con reglas predefinidas; no hay API real ni datos reales.

## 5. Fuentes (consultadas el 22/10/2026)
1. MDN Web Docs, Learn web development: https://developer.mozilla.org/en-US/docs/Learn
2. MDN Web Docs, XMLHttpRequest API (menciona a Fetch como su reemplazo): https://developer.mozilla.org/docs/Web/API/XMLHttpRequest_API
3. web.dev (Google), accesibilidad, rendimiento y diseño adaptable: https://web.dev/
