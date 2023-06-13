function hacerPregunta(pregunta, opciones, respuestaCorrecta) {

  let mensaje = pregunta + "\n";
  for (let i = 0; i < opciones.length; i++) {
    mensaje += (i + 1) + ". " + opciones[i] + "\n";
  }
  let respuestaJugador = prompt(mensaje);

  if (respuestaJugador.toLowerCase() === respuestaCorrecta.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

let preguntas = [
  {
      pregunta: "¿Cuál es el equipo más ganador de champions?",
      opciones: ["Real Madrid", "Milan", "Liverpool"],
      respuesta: "1"
  },
  {
      pregunta: "¿Cuál es el país que ha ganado más Copas del Mundo?",
      opciones: ["Brasil", "Alemania", "Argentina"],
      respuesta: "1"
  },
  {
      pregunta: "¿En qué país se celebró el Mundial de Fútbol 2018?",
      opciones: ["Rusia", "Francia", "Brasil"],
      respuesta: "1"
  },
  {
      pregunta: "¿Que jugador ganó más balones de oro?",
      opciones: ["Benzema", "Cristiano ronaldo", "Lionel Messi"],
      respuesta: "3"
  },
  {
      pregunta: "¿Quien es el máximo goleador de la historia del futbol?",
      opciones: ["Pelé", "Cristiano ronaldo", "Lionel Messi"],
      respuesta: "2"
  },
  {
      pregunta: "¿Que jugador Argentino es apodado como la brujita",
      opciones: ["Sebastian Veron", "Pablo Aimar", "Clemente Rodriguez"],
      respuesta: "1"
  },
  {
      pregunta: "¿Como se llama el estadio del FC Barcelona?",
      opciones: ["Bernabeu", "Camp nou", "Mestalla"],
      respuesta: "2"
  },
  {
      pregunta: "¿Que jugador es el máximo goleador de la champions?",
      opciones: ["Messi", "Cristiano ronaldo", "Haaland"],
      respuesta: "2"
  },
  {
      pregunta: "¿Quien disputó la final de la champions 2015?",
      opciones: ["Barcelona vs Juventus", "Real Madrid vs Liverpool", "Bayern Munich vs Borussia Dortmund"],
      respuesta: "1"
  },
  {
      pregunta: "¿Que equipo ganó Premier League en 2012",
      opciones: ["Chelsea", "Liverpool", "Manchester City"],
      respuesta: "3"
  }
];


let respuestasCorrectas = 0;

let respuestasIncorrectas = [];

for (let i = 0; i < preguntas.length; i++) {
  let preguntaActual = preguntas[i].pregunta;
  let opcionesActual = preguntas[i].opciones;
  let respuestaCorrectaActual = preguntas[i].respuesta;

  if (hacerPregunta(preguntaActual, opcionesActual, respuestaCorrectaActual)) {
    respuestasCorrectas++;
  } else {
    respuestasIncorrectas.push(preguntaActual);
  }
}

let preguntasIncorrectas = preguntas.filter(function(pregunta) {
  return respuestasIncorrectas.includes(pregunta.pregunta);
});

alert("Juego terminado. Respuestas correctas: " + respuestasCorrectas);

let mensajeRespuestasIncorrectas = "Preguntas con respuestas incorrectas:\n";
for (let j = 0; j < respuestasIncorrectas.length; j++) {
  mensajeRespuestasIncorrectas += "- " + respuestasIncorrectas[j] + "\n";
}

alert(mensajeRespuestasIncorrectas);