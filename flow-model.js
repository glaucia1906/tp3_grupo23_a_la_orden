// Datos ficticios y recorridos pedagógicos. No consulta servicios ni modifica pedidos.
export const scenarios = {
  one: 'Un pedido', many: 'Varios pedidos', none: 'Sin resultados',
  same: 'Mismo nombre y fecha', error: 'Error de consulta'
};

const node = (id, title, kind, explanation, output) => ({ id, title, kind, explanation, output });
export function makeFlow(rule, scenario, selected = '') {
  const isMany = scenario === 'many' || scenario === 'same';
  const sameDate = scenario === 'same';
  const orders = isMany ? [
    { id: 'PED-1042', date: '18/11/2026', detail: 'Torta de chocolate · 1 unidad', status: 'Confirmado' },
    { id: 'PED-1087', date: sameDate ? '18/11/2026' : '20/11/2026', detail: 'Docena de alfajores · 2 unidades', status: 'Pendiente' }
  ] : [];
  const chosen = orders.find(order => order.id === selected);
  const steps = [
    node('start', 'Buscar por nombre', 'person', 'La persona necesita consultar un pedido e ingresa el nombre. En este ejemplo usamos Lucía Pérez.', 'Entrada: nombre = Lucía Pérez'),
    node('query', 'Consultar el registro', 'agent', 'El futuro agente consultaría una herramienta de registro. Pediría las coincidencias por nombre y sus datos, sin cambiar ningún estado.', 'Herramienta propuesta: registro de pedidos')
  ];
  if (scenario === 'error') {
    steps.push(node('error', 'Solicitar revisión humana', 'exception', 'La herramienta no responde. Proponemos informar el error y derivar a una persona responsable. No puede suponerse que hay cero pedidos.', 'Fin: consulta no resuelta. Decisión del grupo.'));
    return { steps, orders, branch: 'ERROR → revisión humana', alternative: 'La cantidad de resultados es desconocida; no se evalúa R3 ni R4.' };
  }
  const count = isMany ? 2 : scenario === 'one' ? 1 : 0;
  steps.push(node('decision', rule === 'r3' ? '¿Hay exactamente un pedido?' : '¿Hay varios pedidos?', 'decision', `El registro devuelve ${count} ${count === 1 ? 'coincidencia' : 'coincidencias'}. ${rule === 'r3' ? 'R3 exige exactamente una.' : 'R4 exige más de una.'}`, `Resultado consultado: ${count}. No se elige por nombre o fecha si hay varios.`));
  const applies = rule === 'r3' ? count === 1 : count > 1;
  const branch = applies ? 'SÍ → se cumple la condición' : 'NO → alternativa del grupo';
  const alternative = rule === 'r3'
    ? 'Si la condición no se cumple: con varios resultados se continúa en R4; con cero se pide revisar el nombre (decisión del grupo).'
    : 'Si la condición no se cumple: con un resultado se continúa en R3; con cero se pide revisar el nombre (decisión del grupo).';
  if (count === 0) {
    steps.push(node('empty', 'Pedir revisar el nombre', 'exception', 'Ninguna de las dos sentencias define cero resultados. El grupo propone informar que no se encontraron pedidos y pedir revisar la búsqueda.', 'Fin: sin resultados. No se inventa un pedido.'));
  } else if (!applies) {
    steps.push(node('handoff', rule === 'r3' ? 'Continuar con el flujo R4' : 'Continuar con el flujo R3', 'person', rule === 'r3' ? 'Hay varias coincidencias. Se necesita una selección por identificador antes de abrir el detalle. Explorá este escenario en el segundo diagrama.' : 'Hay una sola coincidencia. El primer diagrama explica cómo mostrar el detalle y estado actual.', 'Fin de este recorrido: derivación al otro flujo, propuesta por el grupo.'));
  } else if (rule === 'r3') {
    steps.push(node('detail', 'Mostrar detalle y estado', 'result', 'Se encontró únicamente PED-1042. El agente mostraría el detalle del registro y su estado actual. Consultar no significa confirmar ni modificar el pedido.', 'PED-1042 · Torta de chocolate · 1 unidad · Confirmado'));
  } else {
    steps.push(node('list', 'Mostrar identificadores y fechas', 'agent', sameDate ? 'Ambos pedidos tienen el mismo nombre y la misma fecha. La fecha no permite distinguirlos: el identificador único sigue siendo obligatorio.' : 'El agente muestra PED-1042 y PED-1087, cada uno con su fecha auxiliar. Todavía no abre el detalle de ninguno.', orders.map(order => `${order.id} · ${order.date}`).join(' / ')));
    steps.push(node('choose', 'La persona elige un identificador', 'person', 'La elección corresponde a la persona. Seleccioná un identificador en el panel de este paso para continuar. El agente no elige el primero ni el más reciente.', chosen ? `Selección: ${chosen.id}` : 'En espera de selección humana. Ningún detalle abierto.'));
    if (chosen) {
      steps.push(node('validate', 'Comprobar la selección', 'decision', 'Como decisión del grupo, se verifica que el identificador elegido pertenezca a los resultados. Si fuera inválido o dejara de estar disponible, se pediría seleccionar de nuevo.', `${chosen.id} pertenece a los resultados → selección válida.`));
      steps.push(node('detail', 'Abrir el detalle elegido', 'result', 'La elección ya está hecha y validada. Ahora se puede abrir únicamente el pedido seleccionado; no se modifica su estado.', `${chosen.id} · ${chosen.detail} · ${chosen.status}`));
    }
  }
  return { steps, orders, branch, alternative };
}
