const misProductos = [
  {
    id: 1,
    nombre: "El Silmarillion",
    precio: 8000,
    img: "../libros/elSilmarillion.webp",
    categoria: "libros",
    descripcion: "El Silmarillion cuenta la historia de la Primera Edad, el antiguo drama del que hablan los personajes de El Señor de los Anillos, y en cuyos acontecimientos algunos de ellos tomaron parte, como Elrond y Galadriel' Una obra de auténtica imaginación, una visión inspirada, legendaria o mítica, del interminable conflicto entre el deseo de poder y la capacidad de crear. EDICIÓN REVISADA",
    stock: 50
  },
  { id: 2, nombre: "La historia de Beren y Lúthien", precio: 8000, img: "../libros/berenYLuthien.webp", categoria: "libros", descripcion: "El relato de Beren y Lúthien era, o se convirtió, en un elemento esencial en la evolución de El Silmarillion, los mitos y leyendas de la Primera Edad del Mundo concebidos por J.R.R. Tolkien. El autor escribió el relato durante el año siguiente a su regreso de Francia y de la batalla del Somme a finales de 1916.Esencial para la historia y sin haber sido nunca alterado, el elemento central del relato es el destino que ensombrece el amor de Beren y Lúthien, dado que Beren era un hombre mortal y Lúthien una elfa inmortal, cuyo padre, un gran señor elfo, en clara oposición a Beren, impuso a éste una tarea imposible que debía llevar a cabo si quería desposar a Lúthien. Éste es el núcleo de la leyenda, que acaba conduciendo al absolutamente heroico intento de Beren y Lúthien de robarle un Silmaril al más malvado de todos los seres: Melkor, también llamado Morgoth, el Enemigo Oscuro.En este libros Christopher Tolkien ha intentado extraer la historia de Beren y Lúthien del contexto narrativo más amplio al que pertenecía, pero la propia historia había ido cambiando mientras desarrollaba nuevas asociaciones dentro de la mitología. Para ilustrar una parte del proceso a través del cual este «Gran Relato» de la Tierra Media evolucionó a través de los años, Christopher ha narrado la historia en palabras de su padre ofreciendo, en primer lugar, su forma original, y a continuación pasajes en prosa y verso de textos posteriores. Presentados en conjunto por vez primera, revelan aspectos argumentales y estilísticos de la historia, que se perdieron más tarde.", stock: 50 },
  { id: 3, nombre: "Los hijos de Húrin", precio: 9000, img: "../libros/losHijosDeHurin.webp", categoria: "libros", descripcion: "Los hijos de Húrin es uno de los grandes relatos que fundamentan la historia de la Tierra Media y se sitúa en la Primera Edad, cuando elfos, hombres y enanos llevaban unos pocos siglos sobre la tierra. Junto con las historia de Beren y Lúthien, es la historia más mencionada en El Señor de los Anillos y en El Silmarillion como referente del heroísmo y la tragedia en la lucha contra el Mal, en la Primera Edad encarnado en la figura de Morgoth. Una historia trágica de amores imposibles, pasiones incomprendidas y guerras sin cuartel entre el Bien y el Mal. Con hombres, elfos, enanos, orcos y dragones.", stock: 50 },
  { id: 4, nombre: "Cuentos inconclusos de Númenor y la Tierra Media", precio: 10000, img: "../libros/cuentosInconclusosDeNumerorYLaTierraMedia.webp", categoria: "libros", descripcion: "Cuentos Inconclusos es una colección de relatos sobre la Historia de la Tierra Media desde los Primeros Días hasta el fin de la Guerra del Anillo, pasando por la Segunda Edad y el levantamiento de Sauron, en los que se refieren sucesos que más adelante se narrarán en El Silmarillion y en El Señor de los Anillos. El libros se concentra en el territorio de la Tierra Media,y comprende elementos tales como el animado discurso en que Gandalf explica cómo llegó a enviar a los Enanos a la famosa reunión en Bolsón Cerrado, la emergencia de Ulmo, el dios del mar, ante los ojos de Tuor en la costa de Beleriand, una descripción detallada de la organización militar de los Jinetes de Rohan, y el viaje de los Jinetes Negros durante la búsqueda del Anillo. Cuentos Inconclusos también contiene el único relato que se conserva sobre el extenso pasado, anterior a su caída, de Númenor, y todo lo que se sabe sobre los Cinco Magos, las Palantíri y la leyenda de Amroth.", stock: 50 },
  { id: 5, nombre: "La caída de Gondolin", precio: 18000, img: "../libros/laCaidaDeGondolin.webp", categoria: "libros", descripcion: "En el Cuento de La Caída de Gondolin chocan dos de los principales poderes del mundo. Por un lado está Morgoth, el mal más absoluto, que está al mando de un enorme poder militar que controla desde su fortaleza en Angband. En su oposición está Ulmo, el segundo Vala más poderoso. Trabaja secretamente en la Tierra Media para apoyar a los Noldor, el grupo de elfos entre los que se contaban Húrin y Túrin Turambar.  En el centro de este conflicto entre deidades se encuentra la ciudad de Gondolin, bella pero escondida más allá de toda posibilidad de ser descubierta. Fue construida y habitada por elfos Noldor que se rebelaron contra el poder divino y huyeron desde Valinor, la tierra de los dioses, a la Tierra Media. Turgon, el rey de Gondolin, es el principal objeto tanto del odio como el miedo de Morgoth, quien trata en vano de descubrir la ciudad, escondida como por arte de magia. En este mundo entra Tuor, el primo de Túrin, como instrumento para hacer cumplir los planes de Ulmo. Guiado por el dios desde la invisibilidad, Tuor parte de la tierra donde nació y emprende un peligroso viaje en busca de Gondolin. En uno de los momentos más fascinantes de la historia de la Tierra Media, Ulmo se persona ante él, emergiendo del mar en medio de una tormenta. En Gondolin Tuor madura; se casa con Idril, y tienen a su hijo Eärendel. Después llega el terrible final. Debido a un acto de traición suprema, Morgoth se entera de cómo lanzar un ataque devastador a la ciudad, valiéndose de balrogs, dragones e incontables orcos. En este libros Christopher Tolkien ha intentado extraer la historia de La Caída de Gondolin de la extensa obra en la cual estaba entretejida. Para ilustrar una parte del proceso a través del cual este «Gran Relato» de la Tierra Media evolucionó a través de los años, Christopher ha narrado la historia en palabras de su padre.", stock: 50 },
  { id: 6, nombre: "El Hobbit", precio: 16000, img: "../libros/elHobbit.webp", categoria: "libros", descripcion: "Smaug parecía profundamente dormido cuando Bilbo espió una vez más desde la entrada. ¡Pero fingía estar dormido! ¡Estaba vigilando la entrada del túnel!... Sacado de su cómodo agujero-hobbit por Gandalf y una banda de enanos, Bilbo se encuentra de pronto en medio de una conspiración que pretende apoderarse del tesoro de Smaug el magnífico, un enorme y muy peligroso Dragón.", stock: 50 },
  { id: 7, nombre: "El Señor de los Anillos, la comunidad del anillo", precio: 17000, img: "../libros/laComiunidadDelAnillo.webp", categoria: "libros", descripcion: "En la adormecida e idílica Comarca, un joven hobbit recibe un encargo: custodiar el Anillo Único y emprender el viaje para su destrucción en la Grieta del Destino. Acompañado por magos, hombres, elfos y enanos, atravesará la Tierra Media y se internará en las sombras de Mordor, perseguido siempre por las huestes de Sauron, el Señor Oscuro, dispuesto a recuperar su creación para establecer el dominio definitivo del Mal.", stock: 50 },
  { id: 8, nombre: "El Señor de los Anillos, las dos torres", precio: 17000, img: "../libros/lasDosTorres.webp", categoria: "libros", descripcion: "La compañía se ha disuelto y sus integrantes emprenden caminos separados. Frodo y Sam continúan solos su viaje a lo largo del río Anduin, perseguidos por la sombra misteriosa de un ser extraño que también ambiciona la posesión del anillo. Mientras, hombres, elfos y enanos se preparan para la batalla final contra las fuerzas del señor del mal.", stock: 50 },
  { id: 9, nombre: "El Señor de los Anillos, el retorno del rey", precio: 17000, img: "../libros/elRetornoDelRey.webp", categoria: "libros", descripcion: "La última parte del viaje de Frodo y SamLos ejércitos del Señor Oscuro van extendiendo cada vez más su maléfica sombra por la Tierra Media. Hombres, elfos y enanos unen sus fuerzas para presentar batalla a Sauron y sus huestes. Ajenos a estos preparativos, Frodo y Sam siguen adentrándose en el país de Mordor en su heroico viaje para destruir el Anillo de Poder en las Grietas del Destino.", stock: 50 },
  { id: 10, nombre: "Las aventuras de Tom Bombadil y otros poemas de El libro Rojo.", precio: 17000, img: "../libros/lasAventurasDeTomBombadilYOtrosPoemasDeElLibroRojo.webp", categoria: "libros", descripcion: "Una obra ilustrada que hará las delicias de los amantes de la Tierra Media. Tom Bombadil es bajito y de rostro rubicundo, alegre y despreocupado, de buen corazón pero indiferente hacia los problemas del mundo exterior. Es señor del Bosque Viejo, donde tiene un poder absoluto. Este espléndido y divertido poema nos ofrece acompañarle en sus aventuras y descubrir una nueva vertiente del talento del maestro de la fantasía de todos los tiempos.", stock: 50 },
  { id: 11, nombre: "La Ultima Cancion de Bilbo", precio: 15000, img: "../libros/laUltimaCancionDeBilbo.jpg", categoria: "libros", descripcion: "Bilbo Bolsón, famoso aventurero hobbit y Portador del Anillo Único, llega a los Puertos Grises para embarcar en la nave blanca que parte hacia el oeste. Es aquí donde compone su última canción, en la que reflexiona sobre su marcha de la Tierra Media y la travesía que lo llevará a las Tierras Imperecederas, más allá del ocaso. Conmovedora y lírica, esta canción expresa tanto el anhelo por levar el ancla en este último viaje como una afectuosa despedida para los amigos que se quedan atrás.", stock: 50 },
  { id: 12, nombre: "El libro de los cuentos perdidos 1", precio: 14000, img: "../libros/elLibroDeLosCuentosPerdidos1.jpg", categoria: "libros", descripcion: "El libros de los Cuentos Perdidos se publica en dos volúmenes. Este primer volumen contiene los cuentos de Valinor. Cada cuento es seguido de un comentario -un ensayo breve-, y de algún poema relacionado con el texto, y en cada uno de los volúmenes hay abundante información sobre el vocabulario y los nombres de las primeras lenguas élficas.", stock: 50 },
  { id: 13, nombre: "El libro de los cuentos perdidos 2", precio: 14000, img: "../libros/elLibroDeLosCuentosPerdidos2.jpg", categoria: "libros", descripcion: "El libros de los Cuentos Perdidos se publica en dos volúmenes. Este segundo volumen incluye Beren y Lúthíen, Túrin y el Dragón, y las historias del Collar de los Enanos y la Caída de Gondoíin. Cada cuento es seguido de un comentario -un ensayo breve-, y de algún poema relacionado con el texto, y en cada uno de los volúmenes hay abundante información sobre el vocabulario y los nombres de las primeras lenguas élficas.", stock: 50 },
  { id: 14, nombre: "Las baladas de Beleriand", precio: 8000, img: "../libros/lasBaladasDeBeleriand.jpg", categoria: "libros", descripcion: "La Balada de los Hijos de Húrin fue sustituida por la Balada de Leithian, «Liberación del cautiverio», en la que el autor da forma poética a otra importante leyenda de los Días Antiguos. Aunque constituye la principal fuente del relato corto en prosa de Beren y Lúthien que figura en El Silmarillion, también ésta quedó incompleta. En ella se cuenta, no obstante, la búsqueda del Silmaril, y el relato sólo se interrumpe tras el encuentro con Morgoth en su fortaleza subterránea. Muchos años después, cuando ya había terminado El Señor de los Anillos, J.R.R. Tolkien volvió sobre la Balada de Leithian y empezó una nueva versión, que es dada igualmente aquí. Las baladas están acompañadas de comentarios sobre la evolución de la historia de los Días Antiguos, desarrollada en gran parte durante los años en los que el autor las escribió.", stock: 50 },
  { id: 15, nombre: "La formación de la Tierra Media", precio: 9500, img: "../libros/laFormacionDeLaTierraMedia.webp", categoria: "libros", descripcion: "El libros incluye el primer mapa de Beleriand, los Anales de Valinor y los Anales de Beleriand, fragmentos de las traducciones deAelfwine,El Silmarillion original escrito en 1926, y laQuenta Noldorinwa de 1930, la única versión de los mitos y legendas de la Primera Edad que J.R.R Tolkien llegó a completar.", stock: 50 },
  { id: 16, nombre: "El camino perdido y otros escritos", precio: 10000, img: "../libros/elCaminoPerdidoYOtrosEscritos.webp", categoria: "libros", descripcion: "Contiene sustancial información sobre la caída de Númenor, sobre la historia del marinero Ælfwine, ya esbozada en El libros de los cuentos perdidos, sobre Valinor y la Tierra Media que configuran los primeros manuscritos de El Silmarillion, las etimologías, un análisis completo de las raíces lingüísticas de las palabras Élficas y un apéndice completo de árboles genealógicos y listas de nombres.", stock: 50 },
  { id: 17, nombre: "El retorno de la Sombra", precio: 12000, img: "../libros/elRetornoDeLaSombra.webp", categoria: "libros", descripcion: "Christopher Tolkien Describe, Citando Notas Y Borradores, La Intrincada Evolución De La Comunidad Del Anillo Y La Gradual Emergencia De Las Concepciones Que Transformaron Lo Que Iba A Ser Un libros Mucho Más Corto: Una Secuela De El Hobbit. La Historia Concluye En El Punto En Que J. R. R. Tolkien Abandona El Relato Durante Largo Tiempo, Cuando La Compañía Del Anillo, En La Que Todavía Faltan Legolas Y Gimli, Se Encuentra Ante La Tumba De Balin, En Las Minas De Moria. Mitología.", stock: 50 },
  { id: 18, nombre: "La traición de Isengard", precio: 10000, img: "../libros/laTraicionDeIsengard.jpg", categoria: "libros", descripcion: "En breves esbozos y borradores a lápiz se asiste a la primera aparición de Galadriel, las primeras ideas sobre la historia de Gondor, el encuentro original de Aragorn y Éowyn, cuyo significado cambiará más tarde totalmente. Muchas de las primeras ideas y concepciones desaparecen a medida que la historia sigue sus propios caminos, como el relato de la captura de Frodo y el episodio en que Sam Gamyi lo rescata de Minas Morgul, escrito mucho antes de que J.R.R. Tolkien llegara a ese punto en la redacción de El Señor de los Anillos. Una característica importante de este libros es la historia de cómo nació el mapa original, redibujado en fases sucesivas, y que durante mucho tiempo fue la base de la geografía de la Tierra Media.", stock: 50 },
  { id: 19, nombre: "La Guerra del Anillo", precio: 12000, img: "../libros/laGuerraDelAnillo.webp", categoria: "libros", descripcion: "Se denomina Guerra del Anillo a la gran guerra que se libró a finales de la Tercera Edad en la Tierra Media entre Sauron y su ejército y los Pueblos Libres. El inicio de la Guerra del Anillo tiene lugar tras la celebración del Concilio de Elrond (25 de octubre de 3018), pues fue allí donde se decidió que el Anillo de Sauron debía ser destruido y se elaboró el plan para llevar esto a cabo. Sin embargo, otros textos sitúan el inicio de esta guerra en el doble ataque de Sauron al Bosque Negro y a Osgiliath (20 de junio de 3018). Durante la Guerra del Anillo, Sauron lanzó una ofensiva global que afectó a toda la Tierra Media, atacando lugares tan distantes como pueden ser Erebor, Lórien, Cuernavilla o Minas Tirith. A lo largo de este conflicto, se produjeron múltiples batallas más como son la de los Vados del Isen, la de Isengard, la Batalla de Cuernavilla, la Batalla de Pelargir, la Batalla de los Campos del Pelennor y la Batalla del Morannon. Tras la muerte de Saruman, concluyó la Guerra del Anillo. Al ser destruido el Anillo Único, se produjo la Caída de Barad-dûr y la desaparición de Sauron", stock: 50 },
  { id: 20, nombre: "El fin de la Tercera Edad", precio: 9500, img: "../libros/elFinDeLaTerceraEdad.webp", categoria: "libros", descripcion: "Después deEl Retorno de la Sombra, La Traición de Isengard yLa Guerra del Anillo, conEl fin de la Tercera Edad, Christopher Tolkien recoge la historia de cómo J.R.R. Tolkien escribióEl Señor de los Anillos. Christopher Tolkien empieza con el rescate de Frodo por Sam de la Torre de Cirith Ungol, y explica una versión muy distinta de El Saneamiento de la comarca.", stock: 50 },
  { id: 21, nombre: "La caída de Númenor", precio: 5000, img: "../libros/laCaidaDeNumenor.webp", categoria: "libros", descripcion: "Surgido del Gran Mar y regalado a los Hombres de la Tierra Media como recompensa por ayudar a los angelicales Valar y los Elfos en la derrota y captura del Señor Oscuro Morgoth, el reino se convirtió en un centro de influencia y riqueza; pero a medida que aumentaba el poder de los Númenóreanos, inevitablemente se sembraría la semilla de su caída, que culminaría en la Última Alianza de Elfos y Hombres.", stock: 50 },
  { id: 22, nombre: "El anillo de Morgoth", precio: 15000, img: "../libros/elAnilloDeMorgoth.jpg", categoria: "libros", descripcion: "En El Anillo de Morgoth, Christopher Tolkien describe y documenta la última parte de la historia de El Silmarillion desde el momento en que su padre retomó «la cuestión de los Días Antiguos» tras concluir El Señor de los Anillos. El volumen incluye el texto de los Anales de Aman, el «Reino Bendecido» de Occidente, que constituyen la siguiente versión de los «Anales de Valinor», presentados en El camino perdido y otros escritos y cuenta las dificultades que tuvo que superar Tolkien en sus últimos años a medida que nuevas y radicales ideas —que presagiaban un cataclismo en las antiguas narraciones— brotaban en el corazón de la mitología.", stock: 50 },
  { id: 23, nombre: "La Guerra de las Joyas", precio: 8000, img: "../libros/laGuerraDeLasJoyas.webp", categoria: "libros", descripcion: "EnLa guerra de las Joyas, J.R.R. Tolkien retoma los hechos narrados en la historia de El Silmarillion desde el punto en que se interrumpía enEl anillo de Morgoth. La historia se traslada de nuevo a la Tierra Media y al devastador conflicto que enfrenta a los Altos Elfos y sus aliados, los Hombres con el poder del Señor Oscuro.", stock: 50 },
  { id: 24, nombre: "Los pueblos de la Tierra Media", precio: 9000, img: "../libros/losPueblosDeLaTierraMedia.webp", categoria: "libros", descripcion: "Cuando J.R.R. Tolkien dejó de ladoEl Silmarillion en 1937, el desarrollo de la «mitología» de las últimas Edades apenas había comenzado. Fue en los Apéndices deEl Señor de los Anillos donde surgió una estructura histórica comprensible y una cronología de la Segunda y Tercera Edad, abarcando todos los hilos que confluirían enLa Guerra del Anillo. Es bien conocido el retraso en la publicación deEl Retorno del Rey por la dificultad que encontró en redactar esos Apéndices. Pero enLos Pueblos de la Tierra Media Christopher Tolkien demuestra que existía una estructura original en escritos sueltos y en notas que difieren de la versión publicada. En estos textos tempranos se ve la evolución de la estructura cronológica de las últimas Edades, los calendarios, las genealogías de los hobbits y el lenguaje Oestron o Lengua Común.", stock: 50 },
  { id: 25, nombre: "Trilogia de El Señor de los Anillos", precio: 10000, img: "../peliculas/trilogiaLOTR.jpg", categoria: "peliculas", descripcion: "Trilogia de El Señor de los Anillos, theatrical versions en Blu-Ray", stock: 50 },
  { id: 26, nombre: "Trilogia de El Hobbit", precio: 10000, img: "../peliculas/trilogiaElHobbit.jpg", categoria: "peliculas", descripcion: "Trilogia de El Hobbit, extended edition en Blu-Ray", stock: 50},
  { id: 27, nombre: "Middle Earth 6-Film Ultimate Collector's Edition", precio: 30000, img: "../peliculas/ultimateCollector.jpg", categoria: "peliculas", descripcion: "Edicion de coleccion de las dos trilogias de la tierra media, 4K Ultra HD + Blu-ray + Digital", stock: 50 },
  { id: 28, nombre: "B.S.O. de El Señor de los Anillos: La Comunidad del Anillo (2001)", precio: 2500, img: "../musica/laComunidad.jpg", categoria: "musica", descripcion: "Banda sonora de La Comunidad del Anillo compuesta por Howard Shore", stock: 50 },
  { id: 29, nombre: "B.S.O. de El Señor de los Anillos: Las Dos Torres (2002)", precio: 2500, img: "../musica/lasDosTorres.jpg", categoria: "musica", descripcion: "Banda sonora de Las Dos Torres compuesta por Howard Shore", stock: 50 },
  { id: 30, nombre: "B.S.O. de El Señor de los Anillos: El Retorno del Rey (2003)", precio: 2500, img: "../musica/elRetornoDelRey.webp", categoria: "musica", descripcion: "Banda sonora de El Retorno del Rey compuesta por Howard Shore", stock: 50 },
  { id: 31, nombre: "The Hobbit: An Unexpected Journey (Original Motion Picture Soundtrack) [Special Edition]", precio: 2500, img: "../musica/unViajeInesperado.webp", categoria: "musica", descripcion: "Banda sonora de The Hobbit: An Unexpected Journey compuesta por Howard Shore", stock: 50 },
  { id: 32, nombre: "The Hobbit: The Desolation of Smaug (Original Motion Picture Soundtrack) [Special Edition]", precio: 2500, img: "../musica/laDesolacionDeSmaug.webp", categoria: "musica", descripcion: "Banda sonora de The Hobbit: The Desolation of Smaug compuesta por Howard Shore", stock: 50 },
  { id: 33, nombre: "The Hobbit: The Battle of the Five Armies (Original Motion Picture Soundtrack) [Special Edition]", precio: 2500, img: "../musica/laBatallaDeLos5Ejercitos.webp", categoria: "musica", descripcion: "Banda sonora de The Hobbit: The Battle of the Five Armies compuesta por Howard Shore", stock: 50 },
  { id: 34, nombre: "The Ring of Fire (Piano Collection)", precio: 2500, img: "../musica/theRingOfFire.webp", categoria: "musica", descripcion: "Tres iconicas canciones de la trilogia de El Señor de los Anillos interpretadas en Piano por el compositor Howard Shore", stock: 50 },
  { id: 35, nombre: "Chop Tolkien", precio: 7500, img: "../merch/chopTolkien.png", categoria: "merch", descripcion: "Taza de cerámica con acabado brillante. Es apto microondas. (se recomienda no usar en lava vajilla o con esponja de acero)", stock: 50 },
  { id: 36, nombre: "Taza El Señor de los Anillos", precio: 3500, img: "../merch/tazaLOTR.webp", categoria: "merch", descripcion: "Taza Cerámica El Señor De Los Anillos", stock: 50 },
  { id: 37, nombre: "Taza Magica El Señor De Los Anillos", precio: 3500, img: "../merch/tazaMagicaLOTR.jpg", categoria: "merch", descripcion: "Taza magica que cambia de negro a la imagen con poner la bebida caliente", stock: 50 },
  { id: 38, nombre: "Remera Señor De Los Anillos Ring", precio: 9500, img: "../merch/remeraAnillo.webp", categoria: "merch", descripcion: "Remera talle unico con la inscripciones del anillo unico", stock: 50 },
  { id: 39, nombre: "Remera Sauron", precio: 9000, img: "../merch/remeraSauron.webp", categoria: "merch", descripcion: "Remera talle unico de Sauron", stock: 50 },
  { id: 40, nombre: "Remera Mordor", precio: 9000, img: "../merch/remeraMordor.webp", categoria: "merch", descripcion: "Remera talle unico de Mordor", stock: 50 },

]

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(misProductos);
    }, 500)
  })
}

export const getProductosByID = (productoID) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(misProductos.find(item => item.id == productoID));
  }, 500)
  })
}

export const getProductosByCategory = (productosCategory) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(misProductos.filter(item => item.categoria === productosCategory))
    }, 500)
  })
}