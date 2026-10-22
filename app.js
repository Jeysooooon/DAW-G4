// Reglas predefinidas que simulan lo que devolvería un servicio de IA.
// Es solo una orientación de demostración, no un diagnóstico médico.
var ESPECIALIDADES = [
  { nombre: "Odontología", palabras: ["muela", "diente", "encía", "encia", "boca", "dental"] },
  { nombre: "Neurología", palabras: ["cabeza", "migraña", "migrana", "mareo", "jaqueca"] },
  { nombre: "Neumología", palabras: ["tos", "respirar", "pecho", "asma", "pulmón", "pulmon"] },
  { nombre: "Dermatología", palabras: ["piel", "sarpullido", "mancha", "acné", "acne", "roncha"] },
  { nombre: "Ortopedia", palabras: ["rodilla", "espalda", "hueso", "golpe", "fractura", "tobillo"] },
  { nombre: "Oftalmología", palabras: ["ojo", "vista", "visión", "vision"] }
];
var URGENCIAS = ["no puedo respirar", "desmayo", "sangrado fuerte", "dolor de pecho fuerte", "convulsión", "convulsion"];
var HORAS = ["8:00 a. m.", "9:30 a. m.", "11:00 a. m.", "2:00 p. m.", "3:30 p. m."];

var btn = document.getElementById("buscar");
var salida = document.getElementById("resultado");

function escapar(texto) {
  var div = document.createElement("div");
  div.textContent = texto;
  return div.innerHTML;
}

function sugerir(motivo) {
  var t = motivo.toLowerCase();
  for (var i = 0; i < ESPECIALIDADES.length; i++) {
    for (var j = 0; j < ESPECIALIDADES[i].palabras.length; j++) {
      if (t.indexOf(ESPECIALIDADES[i].palabras[j]) !== -1) { return ESPECIALIDADES[i].nombre; }
    }
  }
  return "Medicina general";
}

function esUrgencia(motivo) {
  var t = motivo.toLowerCase();
  return URGENCIAS.some(function (u) { return t.indexOf(u) !== -1; });
}

function fmt(fecha) {
  return fecha.toLocaleDateString("es-HN", { weekday: "long", day: "numeric", month: "long" });
}

btn.addEventListener("click", function () {
  var nombre = document.getElementById("nombre").value.trim();
  var motivo = document.getElementById("motivo").value.trim();
  var valor = document.getElementById("fecha").value;

  if (!nombre || !motivo || !valor) {
    salida.innerHTML = '<p class="error">Completa el nombre, el motivo de consulta y el día preferido.</p>';
    return;
  }
  if (esUrgencia(motivo)) {
    salida.innerHTML = '<div class="panel aviso"><strong>Posible urgencia.</strong> No esperes una cita: acude de inmediato al servicio de emergencias más cercano.</div>';
    return;
  }

  var especialidad = sugerir(motivo);
  var fecha = new Date(valor + "T12:00:00");
  var html = '<div class="panel"><h3>Orientación de la IA (simulada)</h3>' +
    '<p>Para <strong>' + escapar(nombre) + '</strong>, con el motivo "' + escapar(motivo) + '", sugerimos: <strong>' + especialidad + '</strong>.</p>' +
    '<p class="nota">Es solo una orientación. Un profesional de salud debe evaluar el caso.</p></div>' +
    '<div class="panel"><h3>Horarios disponibles el ' + fmt(fecha) + '</h3><div class="horarios" id="horarios">';
  HORAS.forEach(function (h) {
    html += '<button type="button" aria-pressed="false" data-hora="' + h + '">' + h + '</button>';
  });
  html += '</div></div><div id="confirmacion"></div>';
  salida.innerHTML = html;

  var botones = salida.querySelectorAll("#horarios button");
  botones.forEach(function (b) {
    b.addEventListener("click", function () {
      botones.forEach(function (x) { x.setAttribute("aria-pressed", "false"); });
      b.setAttribute("aria-pressed", "true");
      var hora = b.getAttribute("data-hora");
      var antes = new Date(fecha); antes.setDate(antes.getDate() - 1);
      document.getElementById("confirmacion").innerHTML =
        '<div class="panel confirmada"><h3>Cita confirmada (automatización)</h3>' +
        '<p>' + especialidad + ' · ' + fmt(fecha) + ' · ' + hora + '</p>' +
        '<p><strong>Recordatorios programados:</strong></p><ul>' +
        '<li>' + fmt(antes) + ': "Mañana tienes cita de ' + especialidad + ' a las ' + hora + '."</li>' +
        '<li>2 horas antes: "Tu cita es hoy a las ' + hora + '. Llega 10 minutos antes."</li></ul></div>';
    });
  });
});
