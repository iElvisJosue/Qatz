export const USER_SCORES = "userScores";
export const DATA_USER = "dataUser";
export const MAX_RATING = 18;

export const IMAGES_CATS = [
  "./Profile/Cat__1.png",
  "./Profile/Cat__2.png",
  "./Profile/Cat__3.png",
  "./Profile/Cat__4.png",
  "./Profile/Cat__5.png",
  "./Profile/Cat__6.png",
  "./Profile/Cat__7.png",
  "./Profile/Cat__8.png",
  "./Profile/Cat__9.png",
  "./Profile/Cat__10.png",
  "./Profile/Cat__11.png",
  "./Profile/Cat__12.png",
  "./Profile/Cat__13.png",
  "./Profile/Cat__14.png",
  "./Profile/Cat__15.png",
  "./Profile/Cat__16.png",
  "./Profile/Cat__17.png",
  "./Profile/Cat__18.png",
];

export function setDataUser(userName, userImage) {
  const dataUser = {
    userName,
    userImage,
    levels: {
      levelBeginner: {
        image: "./Levels/Novato.png",
        imageAlt: "Imagen del nivel Novato",
        name: "Novato",
        class: "Beginner",
        levelQuestions: [
          {
            image: "./Questions/Beginner/1.jpg",
            title:
              "¿Cuál es el animal que se considera el pariente más cercano del gato doméstico?",
            answers: ["A) Perro.", "B) León.", "C) Tigre.", "D) Lince."],
            answer: 0,
            curiousFact:
              "Los gatos y los perros comparten un ancestro común hace más de 40 millones de años. A pesar de sus diferencias, comparten rasgos similares debido a esta relación genética.",
          },
          {
            image: "./Questions/Beginner/2.jpg",
            title: "¿Cuántos bigotes en promedio tiene un gato?",
            answers: ["A) 10", "B) 18", "C) 24", "D) 30"],
            answer: 2,
            curiousFact:
              "Los gatos tienen 12 bigotes en cada lado de su rostro. Estos bigotes, llamados 'vibrissae', son sensibles al tacto y les ayudan a navegar en su entorno y medir espacios estrechos.",
          },
          {
            image: "./Questions/Beginner/3.jpg",
            title: "¿Cuál es el sentido más agudo en un gato?",
            answers: ["A) Vista.", "B) Olfato.", "C) Oído.", "D) Tacto."],
            answer: 2,
            curiousFact:
              "Los gatos tienen un agudo sentido del oído y pueden oír sonidos ultrasónicos que son inaudibles para los humanos. Esto les ayuda en la caza y a detectar presas o peligros.",
          },
          {
            image: "./Questions/Beginner/4.jpg",
            title: "¿Cuántas horas en promedio duerme un gato al día?",
            answers: [
              "A) 4-6 horas.",
              "B) 8-10 horas.",
              "C) 12-14 horas.",
              "D) 16-18 horas.",
            ],
            answer: 3,
            curiousFact:
              "Los gatos son conocidos por ser excelentes durmientes. Duermen tanto para conservar energía como para permitir la regeneración celular. ¡Algunos gatos incluso pueden dormir hasta 20 horas al día!",
          },
          {
            image: "./Questions/Beginner/5.jpg",
            title: "¿Cuál es la raza de gato más grande del mundo?",
            answers: [
              "A) Siamés.",
              "B) Persa.",
              "C) Maine Coon.",
              "D) Bengalí.",
            ],
            answer: 2,
            curiousFact:
              "El Maine Coon es famoso por su gran tamaño. Algunos ejemplares adultos pueden llegar a pesar más de 13 kilogramos y medir más de 1 metro de largo, incluyendo la cola. Son conocidos cariñosamente como 'gigantes amables' debido a su naturaleza dócil y amigable.",
          },
        ],
        score: 0,
        progress: 0,
        difficulty: 1,
      },
      levelFeline: {
        image: "./Levels/Curioso.png",
        imageAlt: "Imagen del nivel Felino Curioso",
        name: "Felino Curioso",
        class: "Feline",
        levelQuestions: [
          {
            image: "./Questions/Feline/1.jpg",
            title:
              "¿Cuál de las siguientes afirmaciones sobre los bigotes de los gatos es cierta?",
            answers: [
              "A) Los gatos tienen bigotes en sus patas traseras.",
              "B) Los bigotes de los gatos son completamente rígidos.",
              "C) Los gatos pueden mover sus bigotes voluntariamente.",
              "D) Los bigotes de los gatos son solo decorativos.",
            ],
            answer: 1,
            curiousFact:
              "Los bigotes de los gatos son altamente sensibles y rígidos. Ayudan a los gatos a medir espacios estrechos y detectar cambios en su entorno.",
          },
          {
            image: "./Questions/Feline/2.jpg",
            title: "¿Cuántos músculos tiene aproximadamente un oído de gato?",
            answers: ["A) 5", "B) 10", "C) 15", "D) 30"],
            answer: 3,
            curiousFact:
              "Los oídos de los gatos son increíblemente móviles gracias a sus 30 músculos. Esto les permite girar sus oídos 180 grados en cualquier dirección.",
          },
          {
            image: "./Questions/Feline/3.jpg",
            title:
              "¿Cuál es el nombre del gato más famoso de Internet, conocido por su expresión gruñona?",
            answers: [
              "A) Whiskers.",
              "B) Grumpy Cat.",
              "C) Snickers.",
              "D) Fluffy.",
            ],
            answer: 1,
            curiousFact:
              "Grumpy Cat, cuyo nombre real era Tardar Sauce, se volvió famoso en internet debido a su expresión facial perpetuamente gruñona.",
          },
          {
            image: "./Questions/Feline/4.jpg",
            title: "¿Qué porcentaje de su vida pasan los gatos durmiendo?",
            answers: ["A) 90%", "B) 60%", "C) 80%", "D) 70%"],
            answer: 3,
            curiousFact:
              "Los gatos son conocidos por ser grandes durmientes, y en promedio, pasan alrededor del 70% de sus vidas durmiendo. Los gatitos jóvenes y los gatos mayores tienden a dormir aún más.",
          },
          {
            image: "./Questions/Feline/5.jpg",
            title:
              "¿Qué hacen los gatos cuando amasan con sus patas delanteras?",
            answers: [
              "A) Preparan la comida.",
              "B) Muestran afecto.",
              "C) Estiran sus garras.",
              "D) Limpian sus patas.",
            ],
            answer: 1,
            curiousFact:
              "Cuando los gatos amasan con sus patas delanteras en tu regazo o en una manta, es un gesto de cariño/afecto que a menudo se asocia con la lactancia materna en los gatitos.",
          },
          {
            image: "./Questions/Feline/6.jpg",
            title:
              "¿Qué parte del cuerpo de un gato no tiene papilas gustativas?",
            answers: ["A) Lengua.", "B) Nariz.", "C) Pies.", "D) Orejas."],
            answer: 2,
            curiousFact:
              "Los gatos no tienen papilas gustativas en sus pies, lo que les permite caminar sobre superficies calientes o ásperas sin molestias excesivas.",
          },
        ],
        score: 0,
        progress: 0,
        difficulty: 3,
      },
      levelKitty: {
        image: "./Levels/Experto.png",
        imageAlt: "Imagen del nivel Gatito Experto",
        name: "Gatito Experto",
        class: "Kitty",
        levelQuestions: [
          {
            image: "./Questions/Kitty/1.jpg",
            title:
              "¿Cuál es la esperanza de vida promedio de un gato doméstico?",
            answers: [
              "A) 5-8 años.",
              "B) 10-12 años.",
              "C) 15-18 años.",
              "D) 20-22 años.",
            ],
            answer: 2,
            curiousFact:
              "Los gatos domésticos bien cuidados pueden vivir hasta 15-18 años e incluso más. Algunos gatos han superado los 20 años.",
          },
          {
            image: "./Questions/Kitty/2.jpg",
            title: "¿Qué parte del cuerpo de un gato se considera su 'pulgar'?",
            answers: [
              "A) Cola.",
              "B) Orejas.",
              "C) Pata trasera.",
              "D) Pata delantera.",
            ],
            answer: 2,
            curiousFact:
              "El 'pulgar' de un gato se refiere a su pata delantera, que tiene un hueso extra que le da un aspecto similar a un pulgar, conocido como 'polidactilia'.",
          },
          {
            image: "./Questions/Kitty/3.jpg",
            title:
              "¿Qué parte del cuerpo de un gato no tiene la capacidad de sentir dolor?",
            answers: ["A) Cola.", "B) Orejas.", "C) Pata.", "D) Nariz."],
            answer: 0,
            curiousFact:
              "La cola de un gato es una extensión de su columna vertebral y está compuesta por vértebras y tejido conectivo. Aunque no puede sentir dolor en la cola en sí, pueden experimentar dolor en la base de la misma.",
          },
          {
            image: "./Questions/Kitty/4.jpg",
            title:
              "¿Cuál es la velocidad máxima a la que puede correr un gato doméstico?",
            answers: ["A) 40 km/h", "B) 48 km/h", "C) 64 km/h", "D) 56 km/h"],
            answer: 3,
            curiousFact:
              "Los gatos son depredadores ágiles y pueden alcanzar velocidades sorprendentes de hasta 56 km/h en distancias cortas gracias a su potente musculatura",
          },
          {
            image: "./Questions/Kitty/5.jpg",
            title: "¿Cuál es la raza de gato más rara y menos común?",
            answers: ["A) Siamese.", "B) Sphynx.", "C) Ragdoll.", "D) Bengal."],
            answer: 1,
            curiousFact:
              "La raza Sphynx es conocida por su falta de pelaje. Aunque parecen desnudos, en realidad tienen una fina capa de vello que les da su apariencia distintiva.",
          },
          {
            image: "./Questions/Kitty/6.jpg",
            title: "¿Qué sustancia en el chocolate es tóxica para los gatos?",
            answers: [
              "A) Cafeína.",
              "B) Teobromina.",
              "C) Sacarina.",
              "D) Ácido ascórbico.",
            ],
            answer: 1,
            curiousFact:
              "La teobromina es una sustancia presente en el chocolate que es tóxica para los gatos (y perros). Deben evitar el consumo de chocolate.",
          },
          {
            image: "./Questions/Kitty/7.jpg",
            title:
              "¿Cuál es el nombre del órgano que los gatos tienen en la parte superior de su paladar y que les permite detectar olores en el aire cuando respiran?",
            answers: [
              "A) Órgano de Jacobson.",
              "B) Órgano de Golgi.",
              "C) Órgano de Ruffini.",
              "D) Órgano de Meissner.",
            ],
            answer: 0,
            curiousFact:
              "El Órgano de Jacobson, también conocido como el órgano vomeronasal, permite a los gatos detectar feromonas y olores en el aire.",
          },
        ],
        score: 0,
        progress: 0,
        difficulty: 5,
      },
      levelRaces: {
        image: "./Levels/Razas.png",
        imageAlt: "Imagen del nivel Amante de Razas",
        name: "Amante de Razas",
        class: "Races",
        levelQuestions: [
          {
            image: "./Questions/Races/1.jpg",
            title:
              "¿Cuál de las siguientes razas de gatos se caracteriza por su pelaje largo y esponjoso?",
            answers: [
              "A) Sphynx.",
              "B) Siamese.",
              "C) Maine Coon.",
              "D) Bengal.",
            ],
            answer: 2,
            curiousFact:
              "El Maine Coon es una de las razas de gatos más grandes y se caracteriza por su pelaje largo y suave. Son conocidos como 'gatos mapache' debido a la forma de su cola y la textura de su pelaje. Además, son amigables y cariñosos.",
          },
          {
            image: "./Questions/Races/2.jpg",
            title:
              "¿Cuál de las siguientes razas de gatos es conocida por 'no tener cola'?",
            answers: [
              "A) Manx.",
              "B) Persian.",
              "C) Ragdoll.",
              "D) American Curl.",
            ],
            answer: 0,
            curiousFact:
              "Los gatos Manx son una raza distintiva conocida por su falta de cola o por tener una cola muy corta. Tienen cuerpos compactos y musculosos, orejas medianas a grandes y pelaje suave en una variedad de colores y patrones. Son conocidos por ser juguetones, inteligentes y cariñosos con sus dueños.",
          },
          {
            image: "./Questions/Races/3.jpg",
            title:
              "¿Qué raza de gato se originó en Tailandia y se caracteriza por su pelaje de color claro con puntos oscuros en las orejas, cara, patas y cola?",
            answers: [
              "A) Scottish Fold.",
              "B) Bengal.",
              "C) Siamese.",
              "D) Russian Blue.",
            ],
            answer: 2,
            curiousFact:
              "Los gatos Siameses son conocidos por su apariencia elegante y su pelaje de color claro con puntos oscuros. También son conocidos por ser muy vocales y expresivos, comunicándose con sus dueños de manera constante.",
          },
          {
            image: "./Questions/Races/4.jpg",
            title:
              "¿Qué raza de gato es famosa por tener un pelaje rizado y orejas dobladas hacia adelante?",
            answers: [
              "A) Abyssinian.",
              "B) Maine Coon.",
              "C) Sphynx.",
              "D) Scottish Fold.",
            ],
            answer: 3,
            curiousFact:
              "Los gatos Scottish Fold tienen un pelaje rizado y suave que se asemeja al terciopelo. Además de su pelaje único, tienen orejas pequeñas y dobladas hacia adelante. Son gatos juguetones y enérgicos.",
          },
          {
            image: "./Questions/Races/5.jpg",
            title:
              "¿Qué raza de gato es famosa por tener un pelaje moteado que se asemeja al de un leopardo?",
            answers: [
              "A) Bengal.",
              "B) Persian.",
              "C) Abyssinian.",
              "D) Burmese.",
            ],
            answer: 0,
            curiousFact:
              "Los gatos Bengal tienen un pelaje moteado que se asemeja al de un leopardo. Esta raza se desarrolló cruzando gatos domésticos con leopardos asiáticos. Son activos y necesitan mucho ejercicio.",
          },
          {
            image: "./Questions/Races/6.jpg",
            title:
              "¿Cuál de las siguientes razas de gatos es conocida por su pelaje largo y sedoso, así como por sus ojos de color azul intenso?",
            answers: [
              "A) Ragdoll.",
              "B) Siamese.",
              "C) Manx.",
              "D) Scottish Fold.",
            ],
            answer: 0,
            curiousFact:
              "Los gatos Ragdoll tienen un pelaje largo y sedoso que se asemeja a una muñeca de trapo, de ahí su nombre. También son conocidos por ser gatos grandes y suaves, y suelen relajarse completamente cuando se les sostiene, lo que les da su nombre.",
          },
          {
            image: "./Questions/Races/7.jpg",
            title:
              "¿Cuál de las siguientes razas de gatos es originaria de Egipto y tiene un aspecto exótico?",
            answers: [
              "A) Persa",
              "B) Savannah",
              "C) Maine Coon",
              "D) Abisinio",
            ],
            answer: 3,
            curiousFact:
              "Los gatos Abisinios tienen un pelaje corto y denso con un patrón de rayas que les da un aspecto salvaje. A menudo se les llama 'gatos de la selva'.",
          },
        ],
        score: 0,
        progress: 0,
        difficulty: 4,
      },
      levelCuriosities: {
        image: "./Levels/Curiosidades.png",
        imageAlt: "Imagen del nivel Curiosidades Felinas",
        name: "Curiosidades Felinas",
        class: "Curiosities",
        levelQuestions: [
          {
            image: "./Questions/Curiosities/1.jpg",
            title:
              "¿Qué parte del cuerpo de los gatos les ayuda a mantener el equilibrio?",
            answers: [
              "A) Las orejas.",
              "B) La cola.",
              "C) Los Bigotes.",
              "D) Las Patas.",
            ],
            answer: 1,
            curiousFact:
              "Los gatos usan su cola como un contrapeso para equilibrarse cuando saltan o caminan por superficies estrechas. La cola también les ayuda a comunicar su estado de ánimo y sus intenciones a otros gatos y humanos.",
          },
          {
            image: "./Questions/Curiosities/2.jpg",
            title: "¿Qué tipo de sueño tienen los gatos?",
            answers: [
              "A) Sueño ligero.",
              "B) Sueño profundo.",
              "C) Sueño REM.",
              "D) Sueño lúcido.",
            ],
            answer: 2,
            curiousFact:
              "Los gatos duermen una media de 16 horas al día, pero solo el 25% de ese tiempo lo pasan en sueño REM, que es la fase en la que se producen los sueños. En esta fase, los gatos pueden mover sus ojos, sus patas y su cola, e incluso maullar o ronronear.",
          },
          {
            image: "./Questions/Curiosities/3.jpg",
            title:
              "¿Qué nombre reciben los grupos de gatos salvajes o callejeros?",
            answers: [
              "A) Manadas.",
              "B) Colonias.",
              "C) Clanes.",
              "D) Bandas.",
            ],
            answer: 1,
            curiousFact:
              "Los gatos salvajes o callejeros suelen vivir en grupos llamados colonias, que se forman por afinidad y parentesco entre los individuos. Las colonias tienen una estructura jerárquica y territorial, y se ayudan entre sí para conseguir comida y protegerse de los depredadores.",
          },
          {
            image: "./Questions/Curiosities/4.jpg",
            title:
              "¿Qué enfermedad de los gatos se transmite por la saliva y puede afectar a los humanos?",
            answers: [
              "A) Toxoplasmosis.",
              "B) Rabia.",
              "C) Leucemia felina.",
              "D) Sarna.",
            ],
            answer: 1,
            curiousFact:
              "La rabia es una enfermedad viral que afecta al sistema nervioso central y que puede ser mortal si no se trata a tiempo. Los gatos pueden contraer la rabia por el contacto con animales infectados, como murciélagos, zorros o perros. La rabia se transmite por la saliva, por lo que una mordedura o un arañazo de un gato rabioso puede contagiar a los humanos.",
          },
          {
            image: "./Questions/Curiosities/5.jpg",
            title: "¿Qué tipo de uñas tienen los gatos?",
            answers: [
              "A) Fijas.",
              "B) Regenerativas.",
              "C) Venenosas.",
              "D) Retráctiles.",
            ],
            answer: 3,
            curiousFact:
              "Los gatos tienen uñas retráctiles, lo que significa que pueden sacarlas o esconderlas según les convenga. Las uñas les sirven para cazar, trepar, rascarse o defenderse. Los gatos afilan sus uñas con superficies ásperas para mantenerlas en buen estado y eliminar las capas muertas.",
          },
          {
            image: "./Questions/Curiosities/6.jpg",
            title:
              "¿Cuál es la razón principal por la que los gatos ronronean?",
            answers: [
              "A) Para comunicarse con otros gatos.",
              "B) Porque están felices y relajados.",
              "C) Para mostrar amor.",
              "D) Para pedir comida.",
            ],
            answer: 1,
            curiousFact:
              "Los gatos a menudo ronronean cuando se sienten cómodos y contentos.",
          },
        ],
        score: 0,
        progress: 0,
        difficulty: 4,
      },
      levelHealth: {
        image: "./Levels/Salud.png",
        imageAlt: "Imagen del nivel Salud Gatuna",
        name: "Salud Gatuna",
        class: "Health",
        levelQuestions: [
          {
            image: "./Questions/Health/1.jpg",
            title:
              "¿Cuál es un signo común de que un gato podría estar experimentando una infección del tracto urinario?",
            answers: [
              "A) Ronroneo excesivo.",
              "B) Pérdida de apetito.",
              "C) Pelo erizado.",
              "D) Ronquidos.",
            ],
            answer: 1,
            curiousFact:
              "Un síntoma común de infección del tracto urinario en gatos es la pérdida de apetito. Además, los gatos pueden mostrar signos de dolor al orinar.Las infecciones del tracto urinario son comunes en gatos y pueden ser graves. Si observas que tu gato tiene dificultades para orinar o muestra signos de dolor al hacerlo, debes consultar a un veterinario de inmediato.",
          },
          {
            image: "./Questions/Health/2.jpg",
            title:
              "¿Cuál es una causa común de la formación de bolas de pelo en gatos?",
            answers: [
              "A) Comer demasiado rápido.",
              "B) Beber agua fría.",
              "C) Falta de ejercicio.",
              "D) Lamido excesivo.",
            ],
            answer: 3,
            curiousFact:
              "Las bolas de pelo se forman cuando los gatos se lamen en exceso y tragan pelo suelto. Estas pueden ser problemáticas si son demasiado grandes para que el gato las pase de manera segura. Se pueden tomar medidas para prevenirlas, como cepillar regularmente al gato y ofrecerle alimentos específicos para el control de bolas de pelo.",
          },
          {
            image: "./Questions/Health/3.jpg",
            title:
              " ¿Qué planta es tóxica para los gatos y puede causar vómitos y diarrea si la ingieren?",
            answers: ["A) Albahaca.", "B) Romero.", "C) Lirio.", "D) Orégano."],
            answer: 2,
            curiousFact:
              "El lirio es altamente tóxico para los gatos y puede causar problemas gastrointestinales graves si se ingiere. Pero no es la unica, muchas plantas son tóxicas para los gatos, por lo que es importante mantenerlas fuera de su alcance. El envenenamiento por plantas es una causa común de emergencias veterinarias en gatos.",
          },
          {
            image: "./Questions/Health/4.jpg",
            title:
              "¿Cuál es un signo de que un gato podría tener gusanos intestinales?",
            answers: [
              "A) Falta de apetito.",
              "B) Babeo excesivo.",
              "C) Vómitos frecuentes.",
              "D) Ronquidos al dormir.",
            ],
            answer: 2,
            curiousFact:
              "Los gusanos intestinales pueden causar vómitos en los gatos, junto con otros síntomas gastrointestinales. Los gusanos intestinales son parásitos comunes en gatos, y su tratamiento es importante para prevenir problemas de salud más graves.",
          },
          {
            image: "./Questions/Health/5.jpg",
            title:
              "¿Cuál de los siguientes alimentos es tóxico para los gatos y puede causar daño renal?",
            answers: [
              "A) Uvas.",
              "B) Manzanas.",
              "C) Zanahorias.",
              "D) Fresas.",
            ],
            answer: 0,
            curiousFact:
              "Las uvas y las pasas son altamente tóxicas para los gatos y pueden causar daño renal. Aunque muchas frutas y verduras son seguras para los gatos, algunas pueden ser peligrosas, por lo que es importante conocer qué alimentos evitar.",
          },
          {
            image: "./Questions/Health/6.jpg",
            title:
              "¿Cuál es un signo de que un gato podría estar experimentando estrés?",
            answers: [
              "A) Ronroneo constante.",
              "B) Comer en exceso.",
              "C) Marcado con orina.",
              "D) Lengua seca.",
            ],
            answer: 2,
            curiousFact:
              "Los gatos estresados a menudo marcan su territorio con orina. El estrés en los gatos puede ser causado por varios factores, y es importante identificar y abordar la causa subyacente.",
          },
          {
            image: "./Questions/Health/7.jpg",
            title:
              "¿Cuál de las siguientes actividades es esencial para mantener a un gato en forma y saludable?",
            answers: [
              "A) Alimentarlo solo 3 veces al día.",
              "B) Jugar con juguetes interactivos.",
              "C) Darle un alimento saludable.",
              "D) Dormir todo el día.",
            ],
            answer: 1,
            curiousFact:
              "Los gatos son animales juguetones por naturaleza, y el juego puede ayudar a prevenir la obesidad y mantener su mente activa.",
          },
          {
            image: "./Questions/Health/8.jpg",
            title:
              "¿Qué es la esterilización en gatos y cuál es uno de los beneficios de este procedimiento?",
            answers: [
              "A) Un tipo de operación de corazón.",
              "B) Un tratamiento contra las pulgas.",
              "C) La eliminación de los ovarios y el útero.",
              "D) Un tratamiento para el mal aliento.",
            ],
            answer: 2,
            curiousFact:
              "La esterilización en gatos es una cirugía que implica la eliminación de los órganos reproductores femeninos, y uno de los beneficios es prevenir la reproducción no deseada.",
          },
        ],
        score: 0,
        progress: 0,
        difficulty: 6,
      },
      levelMyths: {
        image: "./Levels/Mitos.png",
        imageAlt: "Imagen del nivel Mitos y Leyendas",
        name: "Mitos y Leyendas",
        class: "Myths",
        levelQuestions: [
          {
            image: "./Questions/Myths/1.jpg",
            title: "¿Es cierto que los gatos siempre caen de pie?",
            answers: [
              "A) Sí, siempre lo hacen.",
              "B) No, solo caen de pie a veces.",
              "C) No, los gatos no caen de pie.",
              "D) Si, pero solo cuando ellos se lanzan",
            ],
            answer: 1,
            curiousFact:
              "Los gatos tienen un reflejo de enderezamiento llamado 'derechoespaldas', pero no siempre funcionará. Depende de la altura desde la que caigan y de su capacidad para darse cuenta de la caída a tiempo.",
          },
          {
            image: "./Questions/Myths/2.jpg",
            title: "¿Los gatos pueden ver en la oscuridad completa?",
            answers: [
              "A) Sí, siempre pueden ver en la oscuridad.",
              "B) No, los gatos son ciegos en la oscuridad.",
              "C) Solo pueden ver en la oscuridad si tienen ojos claros.",
              "D) Pueden ver en la oscuridad, pero no en blanco y negro.",
            ],
            answer: 0,
            curiousFact:
              "Los gatos tienen una excelente visión nocturna gracias a las células especializadas en sus ojos llamadas bastones, que les permiten ver con poca luz.",
          },
          {
            image: "./Questions/Myths/3.jpg",
            title: "¿Los gatos siempre odian el agua?",
            answers: [
              "A) Los gatos solo toleran el agua caliente.",
              "B) Sí, todos los gatos odian el agua.",
              "C) No, algunos gatos pueden disfrutar del agua.",
              "D) Solo los gatos de pelo largo toleran el agua.",
            ],
            answer: 2,
            curiousFact:
              "Si bien muchos gatos no son fans del agua, algunos gatos domesticados se acostumbran al agua desde temprana edad y pueden incluso disfrutar de nadar.",
          },
          {
            image: "./Questions/Myths/4.jpg",
            title: "¿Los gatos tienen 9 vidas?",
            answers: [
              "A) Sí, todos los gatos tienen 9 vidas.",
              "B) No, los gatos solo tienen una vida como cualquier otro animal.",
              "C) Los gatos tienen 7 vidas.",
              "D) Los gatos pueden tener un número variable de vidas.",
            ],
            answer: 1,
            curiousFact:
              "El mito de las 9 vidas es una creencia popular, pero los gatos tienen una sola vida como cualquier otro ser vivo.",
          },
          {
            image: "./Questions/Myths/5.jpg",
            title: "¿Los gatos negros son de mala suerte?",
            answers: [
              "A) Solo si el gato cruza tu camino.",
              "B) Los gatos negros solo traen mala suerte en ciertas culturas.",
              "C) Sí, los gatos negros siempre traen mala suerte.",
              "D) No, es un mito sin fundamento.",
            ],
            answer: 3,
            curiousFact:
              "En muchas culturas, los gatos negros son símbolos de buena suerte, y el mito de la mala suerte se ha desacreditado a lo largo de los años.",
          },
          {
            image: "./Questions/Myths/6.jpg",
            title:
              "¿Los gatos siempre son solitarios y no les gustan los compañeros felinos?",
            answers: [
              "A) Sí, los gatos siempre prefieren estar solos.",
              "B) Los gatos solo toleran la compañía de gatos de su misma raza.",
              "C) No, algunos gatos disfrutan de la compañía de otros gatos.",
              "D) Los gatos solo se llevan bien con los que quieren.",
            ],
            answer: 2,
            curiousFact:
              "Muchos gatos pueden llevarse bien con otros gatos si se introducen adecuadamente y se les da tiempo para acostumbrarse a la presencia del otro.",
          },
        ],
        score: 0,
        progress: 0,
        difficulty: 3,
      },
      levelMaster: {
        image: "./Levels/Maestro.png",
        imageAlt: "Imagen del nivel Maestro Felino",
        name: "Maestro Felino",
        class: "Master",
        levelQuestions: [
          {
            image: "./Questions/Master/1.jpg",
            title:
              "¿Qué parte del cuerpo de un gato se usa comúnmente para medir su temperatura?",
            answers: ["A) Orejas.", "B) Cola.", "C) Patas.", "D) Nariz."],
            answer: 0,
            curiousFact:
              "Las orejas de un gato son una buena indicación de su temperatura corporal. Si las orejas están frías al tacto, el gato podría estar sintiendo frío.",
          },
          {
            image: "./Questions/Master/2.jpg",
            title: "¿Qué raza de gatos tiene los ojos de diferentes colores?",
            answers: ["A) Siamés.", "B) Angora.", "C) Van Turco.", "D) Persa."],
            answer: 2,
            curiousFact:
              "Los gatos Van Turco tienen los ojos de diferentes colores, generalmente uno azul y otro verde o ámbar. Este fenómeno se llama heterocromía y se debe a una variación en la distribución de la melanina, el pigmento que da color al pelo y a los ojos. Los gatos Van Turco son originarios de Turquía y tienen el pelo blanco con manchas rojizas o negras en la cabeza y la cola.",
          },
          {
            image: "./Questions/Master/3.jpg",
            title:
              "¿Qué causa que los ojos de un gato brillen en la oscuridad?",
            answers: [
              "A) Reflejo de la luz lunar.",
              "B) Capa de células fotosensibles.",
              "C) Bioluminiscencia.",
              "D) Reflejo de la luz solar.",
            ],
            answer: 1,
            curiousFact:
              "Los ojos de los gatos brillan en la oscuridad debido a una capa especial de células llamada tapetum lucidum, que refleja la luz y mejora la visión en condiciones de poca luz. Este es el motivo por el que sus ojos parecen brillar en la oscuridad cuando se les ilumina con luz directa.",
          },
          {
            image: "./Questions/Master/4.jpg",
            title:
              "¿Cuál es el tiempo de gestación promedio de una gata embarazada?",
            answers: [
              "A) 4 semanas",
              "B) 6 semanas",
              "C) 8 semanas",
              "D) 10 semanas",
            ],
            answer: 1,
            curiousFact:
              "El tiempo de gestación promedio de una gata embarazada es de aproximadamente 6 semanas, aunque puede variar ligeramente. Después de este período, dará a luz a una camada de gatitos.",
          },
          {
            image: "./Questions/Master/5.jpg",
            title:
              "¿Cuantos años vivió el gato más antiguo registrado en la historia?",
            answers: [
              "A) 18 años.",
              "B) 24 años.",
              "C) 28 años.",
              "D) 32 años.",
            ],
            answer: 3,
            curiousFact:
              "El gato más antiguo registrado en la historia vivió hasta la increíble edad de 32 años. Su longevidad se debió en parte a la atención veterinaria adecuada y un estilo de vida saludable.",
          },
          {
            image: "./Questions/Master/6.jpg",
            title:
              "¿Qué adaptación especial tienen los gatos en sus pupilas que les permite ver en diferentes condiciones de luz?",
            answers: [
              "A) Pupilas cuadradas.",
              "B) Pupilas triangulares.",
              "C) Pupilas circulares.",
              "D) Pupilas hexagonales.",
            ],
            answer: 1,
            curiousFact:
              "Los gatos tienen pupilas triangulares, que pueden cambiar de tamaño para adaptarse a diferentes condiciones de luz. Se estrechan en la luz brillante y se dilatan en la oscuridad, lo que les proporciona una excelente visión nocturna.",
          },
          {
            image: "./Questions/Master/7.jpg",
            title: "¿Cuántos dientes en promedio tiene un gato adulto?",
            answers: ["A) 30", "B) 28", "C) 32", "D) 40"],
            answer: 0,
            curiousFact:
              "Un gato adulto típicamente tiene alrededor de 30 dientes, que incluyen incisivos, caninos, premolares y molares. Estos dientes desempeñan un papel importante en su capacidad para cazar y alimentarse.",
          },
          {
            image: "./Questions/Master/8.jpg",
            title: "¿En qué parte del gato se encuentra la 'galera'",
            answers: ["A) Cabeza.", "B) Pecho.", "C) Cola.", "D) Cuello."],
            answer: 3,
            curiousFact:
              "La 'galera' de un gato se refiere a la parte del pelaje que se encuentra en el cuello. Algunos gatos tienen una franja de pelo más larga en esta área, que se asemeja a una galera o corbata.",
          },
          {
            image: "./Questions/Master/9.jpg",
            title:
              "¿Cuál es el nombre de la condición genética que da a algunos gatos ojos de diferentes colores?",
            answers: [
              "A) Monocromía.",
              "B) Policromía.",
              "C) Tricromía.",
              "D) Heterocromía.",
            ],
            answer: 3,
            curiousFact:
              "La heterocromía es la condición genética que causa que algunos gatos tengan ojos de diferentes colores. Puede ser un rasgo hereditario o aparecer como una característica única en algunos gatos.",
          },
          {
            image: "./Questions/Master/10.jpg",
            title:
              "¿Qué órgano de los gatos les permite producir ronroneos cuando están contentos o relajados?",
            answers: ["A) Lengua.", "B) Laringe.", "C) Nariz.", "D) Garganta."],
            answer: 1,
            curiousFact:
              "El ronroneo de los gatos se produce debido a la vibración de la laringe, que está ubicada en la garganta. Los gatos pueden ronronear cuando están contentos, relajados o incluso cuando están enfermos o heridos como una forma de autorreparación.",
          },
        ],
        score: 0,
        progress: 0,
        difficulty: 7,
      },
    },
    medals: {
      medalBeginner: {
        name: "¡Esto apenas comienza!",
        image: "./Medals/Novato.png",
        description:
          "Responde correctamente todas las preguntas del nivel Novato.",
        isObtained: false,
      },
      medalFeline: {
        name: "¡Amante de lo curioso!",
        image: "./Medals/FelinoCurioso.png",
        description:
          "Responde correctamente todas las preguntas del nivel Felino Curioso.",
        isObtained: false,
      },
      medalKitty: {
        name: "¿No hay algo más difícil?",
        image: "./Medals/GatitoExperto.png",
        description:
          "Responde correctamente todas las preguntas del nivel Gatito Experto.",
        isObtained: false,
      },
      medalRaces: {
        name: "¡Las razas no son problema!",
        image: "./Medals/AmanteDeRazas.png",
        description:
          "Responde correctamente todas las preguntas del nivel Amante de Razas.",
        isObtained: false,
      },
      medalCuriosities: {
        name: "¡Nada que no sepa!",
        image: "./Medals/CuriosidadesFelinas.png",
        description:
          "Responde correctamente todas las preguntas del nivel Curiosidades Felinas.",
        isObtained: false,
      },
      medalHealth: {
        name: "¡Veterinario Gatuno!",
        image: "./Medals/SaludGatuna.png",
        description:
          "Responde correctamente todas las preguntas del nivel Salud Gatuna.",
        isObtained: false,
      },
      medalMyths: {
        name: "¡Lo sé todo!",
        image: "./Medals/MitosLeyendas.png",
        description:
          "Responde correctamente todas las preguntas del nivel Mitos y Leyendas.",
        isObtained: false,
      },
      medalMaster: {
        name: "¡Uno con los gatos!",
        image: "./Medals/Maestro.png",
        description:
          "Responde correctamente todas las preguntas del nivel Maestro.",
        isObtained: false,
      },
      medalEnthusiastic: {
        name: "¡Nada puede detenerme!",
        image: "./Medals/Entusiasta.png",
        description: "Completa la mitad de las preguntas.",
        isObtained: false,
      },
      medalAmazing: {
        name: "¡Más, más, más!",
        image: "./Medals/Impresionante.png",
        description: "Obtén 20 preguntas correctas.",
        isObtained: false,
      },
      medalExpert: {
        name: "¡Experto Felino!",
        image: "./Medals/Experto.png",
        description: "Obtén 40 preguntas correctas.",
        isObtained: false,
      },
      medalKingQueen: {
        name: "¡QATZ Master!",
        image: "./Medals/ReyReina.png",
        description: "Consigue una puntuación perfecta en todos los niveles.",
        isObtained: false,
      },
    },
  };
  localStorage.setItem(DATA_USER, JSON.stringify(dataUser));
}

export function setUserScores() {
  const userScores = {
    user1: {
      userName: "GatoAmigo",
      userImage: 0,
      userScore: 500,
    },
    user2: {
      userName: "Ronroneo",
      userImage: 1,
      userScore: 460,
    },
    user3: {
      userName: "MiauFelino",
      userImage: 2,
      userScore: 450,
    },
    user4: {
      userName: "BigotesCat",
      userImage: 3,
      userScore: 420,
    },
    user5: {
      userName: "GarraSuave",
      userImage: 4,
      userScore: 400,
    },
    user6: {
      userName: "GatitoPardo",
      userImage: 5,
      userScore: 390,
    },
    user7: {
      userName: "PurrfectCat",
      userImage: 6,
      userScore: 480,
    },
    user8: {
      userName: "PataVeloz",
      userImage: 7,
      userScore: 360,
    },
    user9: {
      userName: "PelusaMiau",
      userImage: 8,
      userScore: 430,
    },
    user10: {
      userName: "MeowMaster",
      userImage: 9,
      userScore: 330,
    },
    user11: {
      userName: "HolaMiau",
      userImage: 10,
      userScore: 340,
    },
    user12: {
      userName: "RonrónFino",
      userImage: 11,
      userScore: 350,
    },
    user13: {
      userName: "GatoGris",
      userImage: 12,
      userScore: 370,
    },
    user14: {
      userName: "MiauChispa",
      userImage: 13,
      userScore: 490,
    },
    user15: {
      userName: "ColaEsponja",
      userImage: 14,
      userScore: 380,
    },
    user16: {
      userName: "GarraÁgil",
      userImage: 15,
      userScore: 410,
    },
    user17: {
      userName: "GatitoSano",
      userImage: 16,
      userScore: 440,
    },
    user18: {
      userName: "Ronroneador",
      userImage: 17,
      userScore: 470,
    },
  };
  localStorage.setItem(USER_SCORES, JSON.stringify(userScores));
}

export function getUserTotalScore(contentDataUser) {
  const arrTotalLevels = Object.values(contentDataUser.levels);
  const arrLevelScore = arrTotalLevels.map((currentLevel) => {
    return currentLevel.score;
  });
  const userTotalScore = arrLevelScore.reduce(
    (total, value) => total + value,
    0
  );
  return userTotalScore;
}

export function setSortUserScores(userScores) {
  const arrScores = Object.entries(userScores);
  const sortScores = arrScores.sort((a, b) => b[1].userScore - a[1].userScore);
  return sortScores;
}

export function checkMedalQuestionsCorrect(
  contentDataUser,
  updateContentDataUser
) {
  const arrUserScore = Object.values(contentDataUser.levels);
  const arrAllScores = arrUserScore.map((e) => {
    return e.score;
  });
  const totalUserScore = arrAllScores.reduce((a, b) => a + b);
  if (totalUserScore === 200)
    setMedalQuestionsCorrect(
      contentDataUser,
      updateContentDataUser,
      "medalAmazing"
    );
  if (totalUserScore === 270)
    setMedalQuestionsCorrect(
      contentDataUser,
      updateContentDataUser,
      "medalEnthusiastic"
    );
  if (totalUserScore === 400)
    setMedalQuestionsCorrect(
      contentDataUser,
      updateContentDataUser,
      "medalExpert"
    );
  if (totalUserScore === 550)
    setMedalQuestionsCorrect(
      contentDataUser,
      updateContentDataUser,
      "medalKingQueen"
    );
}

export function setMedalQuestionsCorrect(
  contentDataUser,
  updateContentDataUser,
  nameMedal
) {
  contentDataUser.medals[nameMedal].isObtained = true;
  localStorage.setItem(DATA_USER, JSON.stringify(contentDataUser));
  const updateMedalTwentyQuestionsCorrect = JSON.parse(
    localStorage.getItem(DATA_USER)
  );
  updateContentDataUser(updateMedalTwentyQuestionsCorrect);
}

export function addNewUserScores(userName, userImage) {
  const userScores = JSON.parse(localStorage.getItem("userScores"));
  const totalUserScores = Object.keys(userScores).length;
  const nameUser = `user${totalUserScores + 1}`;
  userScores[nameUser] = {
    userName,
    userImage,
    userScore: 0,
  };
  localStorage.setItem("userScores", JSON.stringify(userScores));
}

export function checkValueInput(e) {
  const regExpUserName = /^[a-zA-Z0-9]+$/;
  return regExpUserName.test(e) ? e : false;
}
