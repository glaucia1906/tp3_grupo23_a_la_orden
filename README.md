# A la Orden · Grupo 23

TP3 «Dos sentencias, dos soluciones» · IFTS 29 · Front End · 2026.

Landing conceptual para A la Orden, startup creada por estudiantes del IFTS 16 que organiza pedidos de pequeños emprendimientos de comida y repostería.

## Asignación

**S03-B · Búsqueda.**

- **R3:** Si la búsqueda por nombre encuentra un único pedido, el sistema muestra su detalle y su estado actual.
- **R4:** Si la búsqueda encuentra varios pedidos del mismo nombre, el sistema solicita elegir uno mediante su identificador único, mostrando la fecha como dato auxiliar, antes de abrir su detalle.

Fuente: consigna docente, página 36 del PDF TP3. Entrega indicada: 26/11/2026.

## Ejecutar localmente

Proyecto con Vite, HTML, CSS y JavaScript sin framework. Usar Node.js 24 LTS y npm.

```sh
npm ci
npm run dev
```

Abrir la dirección local que imprime Vite en la terminal. El servidor actualiza la página al guardar cambios. Para detenerlo, usar Ctrl+C. No abrir `index.html` directamente: utilizar el servidor de Vite.

Para generar y revisar la versión de producción:

```sh
npm run build
npm run preview
```

El build genera `dist/`. Las fuentes de Google son opcionales: si no hay conexión, se usan fuentes del sistema.

## Alcance y decisiones

La página presenta dos propuestas y sus diagramas; no ejecuta agentes, no integra IA, no conecta APIs ni implementa un backend. Los botones muestran ejemplos escritos, con datos ficticios, y no realizan búsquedas reales.

R3 muestra detalle y estado si existe exactamente un resultado. R4 exige selección humana por identificador único antes del detalle cuando hay varios. La fecha es auxiliar. El caso sin resultados, la validación de selección y el manejo de errores son decisiones agregadas por el grupo y están identificadas como tales en la página. Una consulta fallida no debe interpretarse como cero coincidencias.

## Integrantes y aportes

Perfiles, fotos y enlaces recuperados del proyecto FrontReact del equipo DragonByte. Los aportes específicos de este TP deben registrarse cuando se realicen; los roles profesionales de las tarjetas no representan tareas asignadas para esta entrega.

| Integrante | Aporte concreto |
| --- | --- |
| Sebastián Fernández | Pendiente registrar aporte a este TP |
| Glaucia Ferreira | Pendiente registrar aporte a este TP |
| Ignacio Grosman | Pendiente registrar aporte a este TP |
| Andrea Maslucan Moreno | Pendiente registrar aporte a este TP |

Las tareas se pueden combinar o rotar según la composición real del grupo.

## Construcción agéntica

- Aplicación utilizada: Codex desktop.
- Modelo: pendiente que el grupo registre el nombre exacto mostrado en el selector; no se infiere a partir del nombre de la aplicación.
- Uso: interpretación de la consigna, propuesta de recorridos y generación de HTML, CSS, JavaScript y documentación.
- Instrucción inicial: avanzar localmente con la landing del grupo 23 a partir de la propuesta conversada.
- Todos los archivos de esta primera versión fueron generados por el agente.
- Iteración: a pedido del grupo se incorporó Vite para desarrollo local y generación de la versión de producción. Se conservaron los contenidos y el diseño, se convirtió la entrada JavaScript a módulo y se actualizaron las instrucciones de ejecución y publicación.
- Próximas correcciones: registrar los pedidos reales del grupo y sus resultados.
- Revisión entre integrantes: pendiente registrar una observación y una mejora concreta surgida de la colaboración.

## Revisión antes de entregar

- [x] Incorporar el **logo original** completo y legible: `public/assets/logo-a-la-orden.webp`, provisto por el grupo como S03.webp.
- [ ] Registrar integrantes, aportes y modelo utilizado; si la aplicación no lo informa, escribir «modelo no informado».
- [x] Mantener las dos sentencias originales y representar sus condiciones. La explicación por todos los integrantes queda para la revisión grupal.
- [x] Verificación técnica de uno, varios y cero resultados; fecha repetida, errores y selección inválida (esta última en pruebas del modelo).
- [x] Verificar controles con clic y los diez desplegables con Enter y barra espaciadora.
- [x] Revisar navegación, foco visible y diagramas en desktop; ampliar revisión a tamaños de tablet y celular.
- [ ] Registrar revisión grupal y evidencia de iteración.
- [ ] Publicar y comprobar repositorio y landing desde una ventana sin sesión.

## Publicación prevista

El compañero que cree el repositorio lo conectará a Vercel. Seleccionar preset **Vite**, comando de build `npm run build` y directorio de salida `dist`. La raíz del proyecto es la carpeta que contiene `package.json`. Subir `package-lock.json` al repositorio; no subir `node_modules/` ni `dist/`. Completar los enlaces luego de publicarlo.

- Repositorio: https://github.com/glaucia1906/Tp3-Grupo23-a-la-orden
- Landing: pendiente.
- Comprobación de enlaces sin sesión: pendiente.

## Archivos

- `index.html`: contenido, diagramas y desplegables nativos.
- `styles.css`: diseño, variantes responsivas y foco accesible.
- `responsive.css`: adaptación de celulares y tablets, controles táctiles y diagramas completos.
- `ENTREGA.md`: guion de explicación, matriz de casos y pasos pendientes de revisión grupal y publicación.
- `main.js`: selección de casos ilustrativos sin acceso a servicios.
- `package.json`: dependencia Vite y comandos de desarrollo, build y vista previa.
- `package-lock.json`: versiones fijadas para instalaciones reproducibles con `npm ci`.
- `.gitignore`: exclusión de dependencias, archivos generados y configuración local.

## Segunda iteración: identidad e interacción

A pedido del grupo se incorporó el logo original S03.webp (sin alterar ni recortar), un favicon SVG simplificado inspirado en su símbolo, modo claro/oscuro y perfiles reales de los cuatro integrantes. Se conservan las identidades diferenciadas: A la Orden es la startup destinataria; DragonByte / Grupo 23 presenta la propuesta.

Los diagramas permiten seleccionar cinco escenarios, avanzar, retroceder, reiniciar y consultar cada nodo. R4 mantiene el detalle inaccesible hasta elegir un identificador válido; las fechas pueden coincidir. Cambiar de escenario o reiniciar borra la selección. Los datos son ficticios y se calculan localmente; no hay automatización real. Los diagramas originales permanecen como alternativa cuando JavaScript no se ejecuta.

El tema se inicia según la preferencia guardada o del sistema y se guarda en localStorage. Si el almacenamiento está bloqueado, el cambio sigue funcionando durante la sesión. Las animaciones de entrada y de pasos respetan prefers-reduced-motion. Los perfiles conservan sus descripciones y GitHub; no se inventaron aportes al TP.

Archivos agregados: enhancements.css (temas, interacción y animación), interactive-flows.js (controles), flow-model.js (reglas de simulación), public/favicon.svg y public/assets/ (logo y fotos).

## Verificación de esta iteración

- `npm test`: cuatro pruebas de lógica aprobadas (R3, selección obligatoria de R4, fechas coincidentes y errores).
- `npm run build`: compilación de producción aprobada.
- Navegador: selección PED-1087 y detalle correcto; cambio de escenario elimina la selección; tema claro persiste al recargar; imágenes cargadas; perfil abierto y cerrado con Enter.
- Revisión visual en escritorio (1366 × 900) y panel angosto. Sin desbordamiento horizontal detectado en escritorio.
- La revisión conjunta del grupo y la publicación siguen pendientes.

## Iteración responsive y cierre local

Pedido del grupo: adaptar a tablets y celulares y avanzar con los faltantes de entrega.

Problema detectado: la elipse decorativa desbordaba en anchos pequeños y la disposición de dos columnas reducía la legibilidad del flujo en tablets verticales. Cambio: se redujo la elipse, se usa una columna para las soluciones hasta 900 px, tarjetas de perfil individuales en celular, tipografía adaptable y controles táctiles de al menos 44 px. Los estilos se cargan desde HTML para conservar la presentación aun sin JavaScript.

Se añadió «Ver diagrama completo» a ambos flujos para consultar todas las ramas sin cambiar escenarios. Esto complementa la simulación paso a paso.

Verificación: 320, 375, 430, 768, 820, 1024 y 1366 px sin desborde horizontal; diez desplegables probados con Enter/Espacio; selección por identificador en tablet con fechas coincidentes. Son pruebas en navegador con viewport emulado, no una certificación en dispositivos físicos.

Ver [ENTREGA.md](ENTREGA.md) para el guion y los pendientes que requieren datos reales del grupo. No se atribuyen revisiones a otros integrantes sin su confirmación. No se realizaron commits ni push de esta iteración.

## Corrección de estilos y contraste · 19/11/2026

El grupo detectó texto ilegible en los botones de escenarios al usar el tema oscuro. La sección tiene fondo verde permanente, pero sus botones heredaban variables globales invertidas por el tema. Se fijaron colores propios para estados normal, seleccionado, hover y foco, y se mejoró la legibilidad de controles deshabilitados.

La revisión adicional encontró desborde interno en las etiquetas de nodos a 320–360 px. Se reemplazó esa distribución por una grilla de dos columnas y se ajustaron límites de campos, leyendas y textos largos. Los controles de escenarios conservan un mínimo de 44 px de alto.

Verificación: revisión de las tres hojas de estilos; navegador en ambos temas, con desplegables abiertos; comprobación de anchos desde 320 hasta 1680 px y de límites 380/381, 650/651 y 900/901. Sin desborde horizontal ni recortes de texto en los controles medidos tras la corrección. Inspección visual en celular (360 px) y tablet (820 px). Comprobación de contraste de textos renderizados sobre fondos sólidos en ambos temas, sin fallos detectados en esa comprobación; no equivale a una auditoría integral de accesibilidad ni a pruebas en dispositivos físicos.
