# Cierre de entrega · Grupo 23

Fecha indicada en la consigna: **26/11/2026**. Canal: confirmar con el docente.

## Estado

La landing está implementada y verificada localmente. La entrega no se declara completa hasta registrar los aportes reales, el modelo utilizado y la publicación final. No se realizaron commits ni push durante esta iteración, por pedido del usuario; estos cambios todavía deben ser revisados y subidos por el grupo.

## Guion breve para explicar la propuesta

1. **Startup:** A la Orden organiza pedidos de emprendimientos gastronómicos. La creó el IFTS 16; DragonByte / Grupo 23 del IFTS 29 propone las soluciones del bloque S03-B.
2. **R3:** exactamente una coincidencia por nombre permite mostrar su detalle y estado actual. Consultar no cambia el estado.
3. **R4:** varias coincidencias exigen elegir por identificador único antes de abrir el detalle. La fecha es auxiliar; dos pedidos pueden compartirla.
4. **Agente y herramienta:** el futuro agente consultaría el registro de pedidos. La página solo explica y simula el recorrido con datos ficticios.
5. **Participación humana:** en R4 la persona elige. Ante un error de consulta se propone pedir revisión humana, sin inventar resultados.
6. **Decisiones propias:** cero resultados, derivación entre reglas, validación del identificador y manejo de fallos. No son consecuencias obligatorias de las sentencias.

## Recorrido de revisión entre integrantes

| Caso | Resultado que deben explicar |
| --- | --- |
| R3, un pedido | Mostrar detalle y estado del único registro. |
| R3, varios | Derivar a R4; no elegir uno automáticamente. |
| R4, un pedido | Derivar a R3. |
| R4, varios sin seleccionar | Esperar a la persona; no abrir detalle. |
| R4, PED-1087 seleccionado | Abrir únicamente PED-1087 después de validar la elección. |
| R4, misma fecha | Elegir por identificador; la fecha no distingue los pedidos. |
| Sin resultados | Pedir revisar el nombre, como decisión del grupo. |
| Error de consulta | Pedir revisión humana; un error no significa cero resultados. |

En cada flujo, abrir también «Ver diagrama completo» y explicar las ramas Sí/No. Recorrer navegación, desplegables, tema y perfiles tanto con clic como con teclado.

## Registro grupal pendiente

Completar con hechos reales después de la revisión. No sustituye los aportes individuales del README.

- Fecha y participantes: pendiente.
- Observación detectada por un integrante: pendiente.
- Pedido de mejora formulado al agente: pendiente.
- Cambio realizado y motivo: pendiente.
- Quién lo volvió a comprobar y resultado: pendiente.

## Publicación y entrega

1. El grupo revisa y sube los cambios locales cuando lo decida.
2. Glaucia conecta el repositorio en Vercel: Vite, raíz del repositorio, build `npm run build`, salida `dist`.
3. Incorporar la URL real al README, sin usar el enlace localhost.
4. Abrir repositorio y landing en una ventana sin sesión. Verificar que no pidan acceso y que la versión publicada incluya el diagrama completo y la adaptación responsive.
5. Volver a probar logo, perfiles, dos diagramas y selección humana en el sitio publicado.
6. Enviar al docente el enlace del repositorio y de la landing por el canal indicado.

Repositorio: https://github.com/glaucia1906/Tp3-Grupo23-a-la-orden

Landing: pendiente de recibir o generar su URL mediante la publicación del grupo.

## Evidencia técnica de esta iteración

- Build de Vite y cuatro pruebas de lógica aprobados.
- Anchos emulados: 320, 375, 430, 768, 820, 1024 y 1366 px; sin desborde horizontal tras corregir la elipse decorativa.
- Revisión visual de celular a 375 px y tablet a 768 px; tema claro y oscuro.
- Diez desplegables: apertura con Enter y cierre con Espacio.
- R4 en tablet: selección PED-1087 con fecha repetida y detalle correcto.
- Esta prueba usa tamaños de navegador emulados, no dispositivos físicos ni todos los navegadores móviles.
