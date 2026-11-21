import { initFlows } from './interactive-flows.js';

initFlows();

const themeButton = document.querySelector('.theme-toggle');
function syncTheme() {
  const dark = document.documentElement.dataset.theme === 'dark';
  themeButton.setAttribute('aria-pressed', String(dark));
  themeButton.setAttribute('aria-label', dark ? 'Activar modo claro' : 'Activar modo oscuro');
  themeButton.innerHTML = `<span aria-hidden="true">${dark ? '☀' : '☾'}</span><span>${dark ? 'Modo claro' : 'Modo oscuro'}</span>`;
  document.querySelector('meta[name="theme-color"]').content = dark ? '#102724' : '#faf8f2';
}
themeButton.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem('a-la-orden-theme', theme); } catch { /* La preferencia funciona en esta página aunque el almacenamiento no esté disponible. */ }
  syncTheme();
});
syncTheme();

const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.solution, .profile-card, .section-head, .brand-story').forEach(element => {
    element.classList.add('reveal'); observer.observe(element);
  });
  reducedMotion.addEventListener('change', event => {
    if (event.matches) { document.querySelectorAll('.reveal').forEach(element => element.classList.add('revealed')); observer.disconnect(); }
  });
}

const cases = {
  one: ['APLICA R3', 'Lucía tiene un único pedido registrado.', 'La búsqueda devuelve PED-1042. El agente mostraría su detalle y su estado actual, sin pedir elegir entre resultados.', 'La condición de R3 se cumple; la de R4 no.'],
  many: ['APLICA R4', 'Un nombre devuelve dos pedidos distintos.', 'La lista mostraría PED-1042 · 18/11/2026 y PED-1087 · 20/11/2026. La persona elegiría un identificador antes de abrir su detalle.', 'La condición de R3 no se cumple; la de R4 sí. Sin elección, no se abre ningún detalle.'],
  none: ['DECISIÓN DEL GRUPO', 'La búsqueda no encuentra coincidencias.', 'El agente informaría que no hay resultados y pediría revisar el nombre. No mostraría un pedido inventado ni cambiaría ningún registro.', 'No se cumple la condición de R3 ni la de R4. Esta alternativa es una propuesta del grupo.'],
  same: ['CASO LÍMITE · R4', 'Dos pedidos comparten nombre y fecha.', 'PED-1042 y PED-1043 corresponden a Lucía Pérez y tienen fecha 18/11/2026. La persona debe elegir por identificador único; la fecha es solamente un dato auxiliar.', 'El agente no selecciona automáticamente por fecha ni por posición en la lista.'],
  error: ['EXCEPCIÓN · REVISIÓN HUMANA', 'El registro de pedidos no responde.', 'El agente informaría que no pudo completar la consulta y pediría revisión a una persona responsable. Un error de consulta no equivale a cero resultados.', 'Decisión del grupo para ambos flujos: no inventar detalles, estados ni coincidencias.']
};
const fields = ['case-tag', 'case-title', 'case-description', 'case-rule'];
document.querySelectorAll('[data-case]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-case]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    cases[button.dataset.case].forEach((text, index) => { document.getElementById(fields[index]).textContent = text; });
  });
});
