
const preguntasBase = [
  {
    imagen: "https://th.bing.com/th/id/R.186790848e37df106eccfebaf5507715?rik=EeLmS%2besskm1sw&riu=http%3a%2f%2fanimeargentina.net%2fwp-content%2fuploads%2f2023%2f07%2frevision-del-anime-haikyuu-no-es-el-anime-deportivo-promedio-1024x680.jpg&ehk=DPy5aiikfjAlaTcZ9bpRXY7eIwwICJ%2bH5zfxlVnyzQc%3d&risl=&pid=ImgRaw&r=0",
    texto: "¿Cómo se llama el equipo protagonista en Haikyuu!!?",
    opciones: ["Nekoma", "Fukurodani", "Karasuno", "Aoba Johsai"],
    correcta: 2,
  },
  {
    imagen: "https://sm.ign.com/t/ign_es/screenshot/default/1134207_hnfc.1200.jpg",
    texto: "En One Piece, ¿cuál es el sueño de Monkey D. Luffy?",
    opciones: [
      "Ser el mejor espadachín",
      "Encontrar el One Piece y ser el Rey de los Piratas",
      "Derrotar a todos los Yonko",
      "Ser el hombre más rico del mundo",
    ],
    correcta: 1,
  },
  {
    imagen: "https://th.bing.com/th/id/R.179d69ff3ec57af0b5a08152d5663031?rik=cdk75DLeN6YIYA&pid=ImgRaw&r=0",
    texto: "¿Quién fue el primer villano principal de Dragon Ball Z?",
    opciones: ["Freezer", "Cell", "Raditz", "Vegeta"],
    correcta: 2,
  },
  {
    imagen: "https://tupersonajefavorito.com/wp-content/uploads/2018/07/Shingeki-no-Kyojin-21.jpg",
    texto: "En Shingeki no Kyojin, ¿cómo se llama el primer muro exterior?",
    opciones: ["María", "Rose", "Sina", "Odín"],
    correcta: 0,
  },
  {
    imagen: "https://th.bing.com/th/id/R.925e4d9c5a3ce740e52397733dd24b9b?rik=ToK8Tyu1NaFFag&riu=http%3a%2f%2fmisiontokyo.com%2fwp-content%2fuploads%2f2022%2f12%2fGuya-scaled.jpg&ehk=UD9jSRHZQJ4Z7kAkCsmGfuvHu9oUAxigugKeCWm5QC8%3d&risl=&pid=ImgRaw&r=0",
    texto: "¿Cuál es el nombre de la respiración que utiliza Tanjiro?",
    opciones: [
      "Respiración del Fuego",
      "Respiración de la Niebla",
      "Respiración del Agua",
      "Respiración del Trueno",
    ],
    correcta: 2,
  },
  {
    imagen: "https://th.bing.com/th/id/R.124a76da3f1a145745510a911dae45bb?rik=6OU8s2tdw7dHdg&riu=http%3a%2f%2fmisiontokyo.com%2fwp-content%2fuploads%2f2020%2f03%2fMy-Hero-1.png&ehk=3P6MvhrPY8HsiUho7Cp3JLZa7xhqfuY79zccaLqYLhk%3d&risl=1&pid=ImgRaw&r=0",
    texto: "En My Hero Academia, ¿cómo se llama el poder de Izuku Midoriya?",
    opciones: ["All For One", "One For All", "Full Cowling", "Blackwhip"],
    correcta: 1,
  },
  {
    imagen: "https://tse1.mm.bing.net/th/id/OIP.NqxPsmmGseg1yDKnQX0GKQHaEY?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
    texto: "En Jujutsu Kaisen, ¿qué espíritu maldito habita en Itadori?",
    opciones: ["Mahito", "Sukuna", "Hanami", "Jogo"],
    correcta: 1,
  },
  {
    imagen: "https://es.web.img2.acsta.net/pictures/16/02/03/17/47/271248.jpg",
    texto: "¿Cómo se llama la zanpakutō de Ichigo Kurosaki?",
    opciones: ["Senbonzakura", "Zangetsu", "Kyōka Suigetsu", "Sode no Shirayuki"],
    correcta: 1,
  },
  {
    imagen: "https://th.bing.com/th/id/R.c5cc315c04ca3d2d375fa1c394c9da5a?rik=MJx4utuGvWEs6g&riu=http%3a%2f%2fimages4.fanpop.com%2fimage%2fphotos%2f18100000%2fFull-Metal-Alchemist-anime-18180971-1680-1050.jpg&ehk=UjgIUDnFkXTgIsYTBxsuJ7%2f89niNIMfng7Gpf4wuLuI%3d&risl=&pid=ImgRaw&r=0",
    texto: "¿Cómo se llama el hermano menor de Edward Elric?",
    opciones: ["Roy", "Alphonse", "Winry", "Hohenheim"],
    correcta: 1,
  },
  {
    imagen: "https://placehold.co/1200x600?text=Death%20Note&bg=1a1a2e&fg=ffffff",
    texto: "¿Cómo se llama el Shinigami que acompaña a Light Yagami?",
    opciones: ["Rem", "Ryuk", "Gelus", "Shidoh"],
    correcta: 1,
  },
  {
    imagen: "https://placehold.co/1200x600?text=Hunter%20x%20Hunter&bg=1a1a2e&fg=ffffff",
    texto: "¿Cómo se llama la prueba inicial para convertirse en cazador?",
    opciones: ["Prueba de Nen", "Examen de Cazador", "Selección de Yorknew", "Certificación Zodiac"],
    correcta: 1,
  },
  {
    imagen: "https://placehold.co/1200x600?text=Tokyo%20Ghoul&bg=1a1a2e&fg=ffffff",
    texto: "¿En qué se convierte Kaneki Ken?",
    opciones: ["Shinigami", "Ghoul", "Vampiro", "Espíritu"],
    correcta: 1,
  },
  {
    imagen: "https://placehold.co/1200x600?text=Fairy%20Tail&bg=1a1a2e&fg=ffffff",
    texto: "¿Cómo se llama el gremio protagonista?",
    opciones: ["Sabertooth", "Fairy Tail", "Blue Pegasus", "Lamia Scale"],
    correcta: 1,
  },
  {
    imagen: "https://placehold.co/1200x600?text=One%20Punch%20Man&bg=1a1a2e&fg=ffffff",
    texto: "¿Cómo se llama el protagonista de One Punch Man?",
    opciones: ["Genos", "Saitama", "Garou", "Bang"],
    correcta: 1,
  },
  {
    imagen: "https://placehold.co/1200x600?text=Sword%20Art%20Online&bg=1a1a2e&fg=ffffff",
    texto: "¿Cómo se apoda el protagonista de Sword Art Online?",
    opciones: ["Asuna", "Kirito", "Klein", "Sugou"],
    correcta: 1,
  },
  {
    imagen: "https://placehold.co/1200x600?text=Neon%20Genesis%20Evangelion&bg=1a1a2e&fg=ffffff",
    texto: "¿Cómo se llama el protagonista de Evangelion?",
    opciones: ["Kaworu Nagisa", "Shinji Ikari", "Gendō Ikari", "Toji Suzuhara"],
    correcta: 1,
  },
  {
    imagen: "https://placehold.co/1200x600?text=Code%20Geass&bg=1a1a2e&fg=ffffff",
    texto: "¿Qué poder obtiene Lelouch Lamperouge?",
    opciones: ["Sharingan", "Geass", "Nen", "Quirk"],
    correcta: 1,
  },
  {
    imagen: "https://placehold.co/1200x600?text=JoJo%27s%20Bizarre%20Adventure&bg=1a1a2e&fg=ffffff",
    texto: "¿Cómo se llaman las manifestaciones de poder en JoJo's?",
    opciones: ["Bankai", "Stands", "Quirks", "Breathing"],
    correcta: 1,
  },
  {
    imagen: "https://placehold.co/1200x600?text=Gintama&bg=1a1a2e&fg=ffffff",
    texto: "¿Cómo se llama el protagonista de Gintama?",
    opciones: ["Hijikata", "Gintoki Sakata", "Katsura", "Okita"],
    correcta: 1,
  },
  {
    imagen: "https://placehold.co/1200x600?text=Black%20Clover&bg=1a1a2e&fg=ffffff",
    texto: "¿Cómo se llama el protagonista de Black Clover?",
    opciones: ["Yuno", "Asta", "Noelle", "Finral"],
    correcta: 1,
  },
  {
    imagen: "https://placehold.co/1200x600?text=Fire%20Force&bg=1a1a2e&fg=ffffff",
    texto: "¿Cómo se llama el protagonista de Fire Force?",
    opciones: ["Arthur Boyle", "Shinra Kusakabe", "Obi", "Viktor Licht"],
    correcta: 1,
  },
  {
    imagen: "https://placehold.co/1200x600?text=Steins;Gate&bg=1a1a2e&fg=ffffff",
    texto: "¿Cuál es el alias del protagonista de Steins;Gate?",
    opciones: ["El Profesor", "Hououin Kyouma", "Mad Scientist", "Kyouma Hououin"],
    correcta: 1,
  },
  {
    imagen: "https://placehold.co/1200x600?text=Cowboy%20Bebop&bg=1a1a2e&fg=ffffff",
    texto: "¿Cómo se llama el protagonista de Cowboy Bebop?",
    opciones: ["Jet Black", "Spike Spiegel", "Vicious", "Ed"],
    correcta: 1,
  },
  {
    imagen: "https://placehold.co/1200x600?text=Vinland%20Saga&bg=1a1a2e&fg=ffffff",
    texto: "¿Cómo se llama el protagonista de Vinland Saga?",
    opciones: ["Askeladd", "Thorfinn", "Thorkell", "Canuto"],
    correcta: 1,
  },
  {
    imagen: "https://placehold.co/1200x600?text=Mob%20Psycho%20100&bg=1a1a2e&fg=ffffff",
    texto: "¿Cuál es el apodo del protagonista de Mob Psycho 100?",
    opciones: ["Reigen", "Mob", "Shigeo", "Teru"],
    correcta: 1,
  },
  {
    imagen: "https://placehold.co/1200x600?text=Blue%20Lock&bg=1a1a2e&fg=ffffff",
    texto: "¿Cómo se llama el protagonista de Blue Lock?",
    opciones: ["Meguru Bachira", "Yoichi Isagi", "Rensuke Kunigami", "Seishiro Nagi"],
    correcta: 1,
  },
  {
    imagen: "https://placehold.co/1200x600?text=Chainsaw%20Man&bg=1a1a2e&fg=ffffff",
    texto: "¿Cómo se llama el protagonista de Chainsaw Man?",
    opciones: ["Aki", "Denji", "Power", "Makima"],
    correcta: 1,
  },
  {
    imagen: "https://placehold.co/1200x600?text=SPY×FAMILY&bg=1a1a2e&fg=ffffff",
    texto: "En SPY×FAMILY, ¿cómo se llama la hija adoptiva de Loid?",
    opciones: ["Yor", "Anya", "Becky", "Fiona"],
    correcta: 1,
  },
  {
    imagen: "https://placehold.co/1200x600?text=Dr.%20Stone&bg=1a1a2e&fg=ffffff",
    texto: "¿Cómo se llama el protagonista de Dr. Stone?",
    opciones: ["Taiju", "Senku Ishigami", "Gen", "Tsukasa"],
    correcta: 1,
  },
  {
    imagen: "https://placehold.co/1200x600?text=The%20Promised%20Neverland&bg=1a1a2e&fg=ffffff",
    texto: "¿Cómo se llama la protagonista principal de The Promised Neverland?",
    opciones: ["Norman", "Emma", "Ray", "Isabella"],
    correcta: 1,
  },
  {
    imagen: "https://placehold.co/1200x600?text=Re:Zero&bg=1a1a2e&fg=ffffff",
    texto: "¿Cómo se llama la oni que acompaña a Subaru?",
    opciones: ["Emilia", "Rem", "Ram", "Beatrice"],
    correcta: 1,
  },
  {
    imagen: "https://placehold.co/1200x600?text=Inuyasha&bg=1a1a2e&fg=ffffff",
    texto: "¿Cómo se llama el protagonista mitad demonio?",
    opciones: ["Sesshomaru", "Inuyasha", "Miroku", "Naraku"],
    correcta: 1,
  },
  {
    imagen: "https://placehold.co/1200x600?text=Yu%20Yu%20Hakusho&bg=1a1a2e&fg=ffffff",
    texto: "¿Cómo se llama el protagonista de Yu Yu Hakusho?",
    opciones: ["Kurama", "Yusuke Urameshi", "Hiei", "Kuwabara"],
    correcta: 1,
  },
  {
    imagen: "https://placehold.co/1200x600?text=Trigun&bg=1a1a2e&fg=ffffff",
    texto: "¿Cómo se llama el protagonista de Trigun?",
    opciones: ["Nicholas D. Wolfwood", "Vash the Stampede", "Legato", "Knives"],
    correcta: 1,
  },
  {
    imagen: "https://placehold.co/1200x600?text=Cardcaptor%20Sakura&bg=1a1a2e&fg=ffffff",
    texto: "¿Cómo se llama la protagonista de Cardcaptor Sakura?",
    opciones: ["Tomoyo", "Sakura Kinomoto", "Meiling", "Rika"],
    correcta: 1,
  },
  {
    imagen: "https://placehold.co/1200x600?text=Sailor%20Moon&bg=1a1a2e&fg=ffffff",
    texto: "¿Cómo se llama la protagonista de Sailor Moon?",
    opciones: ["Ami", "Usagi Tsukino", "Rei", "Makoto"],
    correcta: 1,
  },
  {
    imagen: "https://placehold.co/1200x600?text=Kuroko%20no%20Basket&bg=1a1a2e&fg=ffffff",
    texto: "¿Cómo se llama el protagonista de Kuroko no Basket?",
    opciones: ["Kagami Taiga", "Tetsuya Kuroko", "Aomine Daiki", "Midorima Shintaro"],
    correcta: 1,
  },
  {
    imagen: "https://placehold.co/1200x600?text=Fruits%20Basket&bg=1a1a2e&fg=ffffff",
    texto: "¿Cómo se llama la protagonista de Fruits Basket?",
    opciones: ["Saki", "Tohru Honda", "Arisa", "Kagura"],
    correcta: 1,
  },
  {
    imagen: "https://placehold.co/1200x600?text=Made%20in%20Abyss&bg=1a1a2e&fg=ffffff",
    texto: "¿Cómo se llama la protagonista de Made in Abyss?",
    opciones: ["Nanachi", "Riko", "Prushka", "Marulk"],
    correcta: 1,
  },
  {
    imagen: "https://placehold.co/1200x600?text=Toradora!&bg=1a1a2e&fg=ffffff",
    texto: "¿Cómo se llama la protagonista femenina de Toradora!",
    opciones: ["Minori Kushieda", "Taiga Aisaka", "Ami Kawashima", "Sumire"],
    correcta: 1,
  }
];

// Subconjunto activo y selección del usuario
let preguntas = [];
let selectedCount = 40;

// ====================== Estado del Juego ======================
let indiceActual = 0;
let puntaje = 0;
let seleccionHecha = false;

// ====================== Referencias al DOM ======================
let imgAnime = document.getElementById("anime-image");
let contPregunta = document.getElementById("question");
let contOpciones = document.getElementById("options");
let btnSiguiente = document.getElementById("next-btn");

let txtPreguntaActual = document.getElementById("current-question");
let txtTotalPreguntas = document.getElementById("total-questions");
let txtPuntaje = document.getElementById("score");
let barraProgreso = document.getElementById("progress-bar");
const gameContainer = document.getElementById("game-container");
const startScreen = document.getElementById("start-screen");
const decorativeOverlay = document.getElementById("decorative-overlay");

const IMAGE_FALLBACK = "https://placehold.co/1200x600?text=Imagen%20no%20disponible&bg=1a1a2e&fg=ffffff";
const optionBaseClasses = "p-4 bg-white/10 border-2 border-transparent rounded-xl cursor-pointer transition hover:bg-white/20 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white/50";

// ====================== Inicialización ======================
function iniciarQuiz() {
  // Construye subconjunto si está vacío según la cantidad elegida
  if (preguntas.length === 0) {
    preguntas = getRandomSubset(preguntasBase, selectedCount);
  }
  // Aleatoriza el orden del subconjunto
  mezclarArray(preguntas);

  // Oculta la pantalla inicial y el overlay decorativo; muestra el juego
  if (startScreen) startScreen.classList.add("hidden");
  if (decorativeOverlay) decorativeOverlay.classList.add("hidden");
  gameContainer.classList.remove("hidden");

  txtTotalPreguntas.textContent = preguntas.length;
  indiceActual = 0;
  puntaje = 0;
  txtPuntaje.textContent = puntaje;
  renderPregunta();
  actualizarProgreso();
  if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
}

function mezclarArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// Devuelve un subconjunto aleatorio sin repetición
function getRandomSubset(arr, count) {
  const copy = [...arr];
  mezclarArray(copy);
  const c = Math.min(count, copy.length);
  return copy.slice(0, c);
}

// ====================== Render de Pregunta ======================
function renderPregunta() {
  const p = preguntas[indiceActual];
  seleccionHecha = false;
  btnSiguiente.disabled = true;

  // Actualiza contadores
  txtPreguntaActual.textContent = indiceActual + 1;

  // Imagen y texto
  imgAnime.src = p.imagen;
  imgAnime.alt = "Anime";
  imgAnime.onerror = () => {
    imgAnime.src = IMAGE_FALLBACK;
  };
  contPregunta.textContent = p.texto;

  // Opciones
  contOpciones.innerHTML = "";
  p.opciones.forEach((op, i) => {
    const div = document.createElement("div");
    div.className = optionBaseClasses;
    div.textContent = op;
    div.tabIndex = 0; // accesible por teclado
    div.addEventListener("click", () => seleccionarOpcion(i));
    div.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") seleccionarOpcion(i);
    });
    contOpciones.appendChild(div);
  });
  if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
}

// ====================== Lógica de Selección ======================
function seleccionarOpcion(i) {
  if (seleccionHecha) return; // evitar re-selecciones

  const p = preguntas[indiceActual];
  const opciones = Array.from(contOpciones.children);
  const correcta = p.correcta;

  opciones.forEach((el, idx) => {
    el.classList.add("pointer-events-none", "opacity-50");
    if (idx === correcta) {
      el.classList.add("bg-gradient-to-r", "from-green-500", "to-emerald-600", "text-white");
    }
  });

  const elegida = opciones[i];
  if (i === correcta) {
    puntaje += 1;
    txtPuntaje.textContent = puntaje;
  } else {
    elegida.classList.add("bg-gradient-to-r", "from-red-500", "to-rose-600", "text-white");
  }

  elegida.classList.add("ring-2", "ring-white");
  seleccionHecha = true;
  btnSiguiente.disabled = false;
}

// ====================== Siguiente / Resultado ======================
function siguiente() {
  if (!seleccionHecha) {
    // Si quieres permitir saltar sin responder, comenta este return
    return;
  }

  indiceActual++;
  if (indiceActual < preguntas.length) {
    renderPregunta();
    actualizarProgreso();
  } else {
    mostrarResultado();
  }
}

function actualizarProgreso() {
  const progreso = (indiceActual / preguntas.length) * 100;
  barraProgreso.style.width = `${progreso}%`;
}

function mostrarResultado() {
  // Se llena al 100% cuando se muestra el resultado
  barraProgreso.style.width = "100%";

  const total = preguntas.length;
  const porcentaje = Math.round((puntaje / total) * 100);

  // Crea un contenedor de resultados
  const result = document.createElement("div");
  result.className = "text-center p-6 bg-white/10 rounded-xl border border-white/10";

  const titulo = document.createElement("h2");
  titulo.className = "text-2xl mb-3 text-rose-400 flex items-center justify-center gap-2";
  titulo.innerHTML = '<i data-lucide="trophy" class="w-6 h-6"></i> ¡Resultado final!';

  const score = document.createElement("div");
  score.className = "text-4xl font-bold my-4 bg-gradient-to-r from-rose-500 to-indigo-500 bg-clip-text text-transparent";
  score.textContent = `${puntaje}/${total} (${porcentaje}%)`;

  const mensaje = document.createElement("p");
  mensaje.className = "text-lg text-slate-200 mb-4";
  let textoMsg = "";
  if (porcentaje === 100) textoMsg = "¡Leyenda del anime! 🏆";
  else if (porcentaje >= 80) textoMsg = "¡Excelente! Estás a otro nivel. ⭐";
  else if (porcentaje >= 60) textoMsg = "¡Bien! Vas por buen camino. 👍";
  else if (porcentaje >= 40) textoMsg = "No está mal, ¡puedes mejorar! 🙌";
  else textoMsg = "¡Sigue practicando! 💪";
  mensaje.textContent = textoMsg;

  const btnReiniciar = document.createElement("button");
  btnReiniciar.className = "px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-rose-500 to-indigo-500 shadow transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white/50 flex items-center gap-2 mx-auto";
  btnReiniciar.innerHTML = 'Reintentar <i data-lucide="rotate-cw" class="w-5 h-5"></i>';
  btnReiniciar.addEventListener("click", reiniciar);

  result.appendChild(titulo);
  result.appendChild(score);
  result.appendChild(mensaje);
  result.appendChild(btnReiniciar);

  // Reemplaza el contenido del juego por el resultado
  gameContainer.innerHTML = "";
  gameContainer.appendChild(result);
  if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
}

function reiniciar() {
  // Reconstruimos el HTML básico del juego con Tailwind y reiniciamos estado
  gameContainer.innerHTML = `
    <div class="flex justify-between mb-4 p-4 bg-white/10 rounded-lg text-lg">
      <div class="flex items-center gap-2">
        <i data-lucide="help-circle" class="w-5 h-5"></i>
        <span>Pregunta <span id="current-question">1</span> de <span id="total-questions">${selectedCount}</span></span>
      </div>
      <div class="flex items-center gap-2">
        <i data-lucide="trophy" class="w-5 h-5"></i>
        <span>Puntaje: <span id="score">0</span></span>
      </div>
    </div>

    <div class="w-full h-2 bg-white/20 rounded overflow-hidden">
      <div class="h-full bg-gradient-to-r from-rose-500 to-indigo-500 w-0 transition-all" id="progress-bar"></div>
    </div>

    <div class="mb-6 p-4 bg-white/5 rounded-xl border border-white/10">
      <img id="anime-image" class="w-full h-auto max-h-[60vh] object-contain rounded-lg my-4 border border-white/20 bg-black" src="" alt="Anime" loading="lazy" decoding="async"/>
      <div id="question" class="text-xl mb-4 leading-relaxed"></div>
      <div id="options" class="grid gap-4"></div>
    </div>

    <div class="flex justify-center gap-4 mt-6">
      <button id="next-btn" class="px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-rose-500 to-indigo-500 shadow transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2">
        Siguiente
        <i data-lucide="arrow-right" class="w-5 h-5"></i>
      </button>
    </div>
  `;

  // Se reasigna referencias del DOM luego de reinsertar el HTML
  reassignRefs();
  // Reinicia estado de juego y muestra pantalla inicial para elegir cantidad
  indiceActual = 0;
  puntaje = 0;
  seleccionHecha = false;
  preguntas = [];
  barraProgreso.style.width = "0%";
  // Mostrar selección inicial y ocultar juego
  if (startScreen) startScreen.classList.remove("hidden");
  if (decorativeOverlay) {
    decorativeOverlay.classList.remove("hidden");
    renderOverlayBlobs();
  }
  gameContainer.classList.add("hidden");
}

// Se reasigna referencias post-reinicio
function reassignRefs() {
  imgAnime = document.getElementById("anime-image");
  contPregunta = document.getElementById("question");
  contOpciones = document.getElementById("options");
  btnSiguiente = document.getElementById("next-btn");
  txtPreguntaActual = document.getElementById("current-question");
  txtTotalPreguntas = document.getElementById("total-questions");
  txtPuntaje = document.getElementById("score");
  barraProgreso = document.getElementById("progress-bar");

  btnSiguiente.addEventListener("click", siguiente);
  if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
}

btnSiguiente.addEventListener("click", siguiente);

// Configura la pantalla inicial: listeners y visibilidad
function setupStartScreen() {
  // Oculta el contenedor del juego hasta que el usuario elija
  gameContainer.classList.add("hidden");
  if (!startScreen) return;
  startScreen.classList.remove("hidden");
  if (decorativeOverlay) {
    decorativeOverlay.classList.remove("hidden");
    renderOverlayBlobs();
  }
  const botones = startScreen.querySelectorAll('button[data-count]');
  botones.forEach((btn) => {
    btn.addEventListener('click', () => {
      const val = parseInt(btn.getAttribute('data-count'), 10);
      selectedCount = isNaN(val) ? 40 : val;
      preguntas = getRandomSubset(preguntasBase, selectedCount);
      iniciarQuiz();
    }, { once: true });
  });
  if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
}

// Genera blobs decorativos con posiciones y colores aleatorios
function renderOverlayBlobs() {
  if (!decorativeOverlay) return;
  decorativeOverlay.innerHTML = "";
  const count = Math.floor(Math.random() * 3) + 3; // 3-5 blobs
  const colors = [
    "rgba(99,102,241,0.12)",   // indigo-500
    "rgba(168,85,247,0.12)",   // purple-500
    "rgba(236,72,153,0.12)",   // pink-500
    "rgba(244,63,94,0.10)",    // rose-500
    "rgba(59,130,246,0.10)",   // blue-500
    "rgba(34,197,94,0.10)"     // green-500
  ];
  for (let i = 0; i < count; i++) {
    const blob = document.createElement("div");
    blob.className = "absolute rounded-full filter blur-3xl";
    const size = Math.floor(Math.random() * 10) + 14; // rem ~14-24
    const vw = Math.floor(Math.random() * 80) + 10; // 10-90 vw
    const vh = Math.floor(Math.random() * 80) + 10; // 10-90 vh
    const color = colors[Math.floor(Math.random() * colors.length)];
    blob.style.width = size + "rem";
    blob.style.height = size + "rem";
    blob.style.background = color;
    blob.style.top = vh + "vh";
    blob.style.left = vw + "vw";
    decorativeOverlay.appendChild(blob);
  }
}

// Iniciar flujo mostrando pantalla de selección
setupStartScreen();