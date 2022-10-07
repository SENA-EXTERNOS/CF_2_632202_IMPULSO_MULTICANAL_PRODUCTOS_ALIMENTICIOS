export default {
  global: {
    componenteFormativo: 'Cadena de suministro de alimentos',
    descripcionCurso:
      'El sector de alimentos comprende diferentes etapas cómo la producción, la transformación en el sector industrial, el transporte, que juega un papel fundamental en la conservación de alimentos y finalmente la comercialización, donde se destacan diferentes elementos como la exhibición y rotación adecuada de los productos, haciendo uso eficiente de los diferentes canales hasta llegar al cliente final.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.png'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-6.png'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-7.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Tipos de almacenamiento ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Almacenamiento con temperatura controlada',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Almacenamiento en seco',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Técnicas de limpieza y desinfección',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Limpieza estructural',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Proceso de desinfección',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Manejo de plagas',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Cadena de frío',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Importancia de la cadena de frío',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Vehículos utilizados',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Puntos de venta',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Separación de desechos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Contaminación cruzada',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Separación de desechos',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Disposición final de residuos',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Normatividad de SST',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Seguridad y salud en el trabajo',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Elementos de protección',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Medidas de prevención',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Seguridad y salud en el trabajo',
      referencia: 'Ruiz, M. (2016). La seguridad laboral en un hipermercado',
      tipo: 'Tesis',
      link:
        'https://drive.google.com/file/d/1Xwh8Y_5tYPIlBkzxv9hIKdesWgoimwv4/view?usp=sharing',
    },
    {
      tema: 'Tipos de almacenamiento',
      referencia:
        'Ramírez, N. (2010). Estandarización y control de calidad en procesos de recibo, almacenamiento, distribución y servida de alimentos.',
      tipo: 'Tesis',
      link:
        'https://drive.google.com/file/d/1w_Vg9N8Ml9VcTPCBV9tbKVuJQapDOIoD/view?usp=sharing',
    },
  ],
  glosario: [
    {
      termino: 'Alimento Perecedero',
      significado:
        ' aquellos que inician su descomposición de manera rápida y sencilla. Este deterioro está determinado por factores como la temperatura, la presión o la humedad.',
    },
    {
      termino: 'Contaminado',
      significado:
        'producto, objeto o superficie que contiene microorganismos.',
    },
    {
      termino: 'Desecho',
      significado:
        'representa a todos aquellos objetos, sustancias o materiales que sobran o restan de algo que ha sido trabajado, procesado o consumido y que ya no posee algún tipo de uso, es decir, es inservible y, por tanto, necesita ser eliminado.',
    },
    {
      termino: 'Desinfección',
      significado:
        'la reducción del número de microorganismos presentes en el medioambiente, por medio de agentes químicos y/o métodos físicos, a un nivel que no comprometa la inocuidad o la aptitud del alimento.',
    },
    {
      termino: 'Estéril',
      significado:
        'objeto o superficie libre de toda clase de microorganismos.',
    },
    {
      termino: 'Inocuidad',
      significado:
        'característica que garantiza que los alimentos que consumimos no causan daño a nuestra salud, es decir, que durante su producción se aplicaron medidas de higiene para reducir el riesgo de que los alimentos se contaminen.',
    },
    {
      termino: 'Limpieza',
      significado:
        'eliminación de tierra, residuos de alimentos, suciedad, grasa u otras materias objetables.',
    },
    {
      termino: 'Patógeno',
      significado:
        'es un microorganismo que genera una enfermedad o que es perjudicial para la salud.',
    },
    {
      termino: 'Peligro',
      significado:
        'un agente biológico, químico o físico presente en el alimento, o bien la condición en que este se halla, que puede causar un efecto adverso para la salud.',
    },
    {
      termino: 'Seguridad',
      significado:
        'es un estado en el cual los peligros y las condiciones que pueden provocar daños de tipo físico, psicológico o material son controlados para preservar la salud y el bienestar de los individuos y de la comunidad.',
    },
    {
      termino: 'Transporte',
      significado:
        'forma parte de la logística, es el conjunto de medios y métodos que permiten organizar un servicio o una empresa.',
    },
  ],
  referencias: [
    {
      referencia:
        'Díaz, A. & Uría, R. (2009). Buenas prácticas de manufactura: una guía para pequeños y medianos agroempresarios, (No. IICA Q03-14). Editorial IICA',
      link: '',
    },
    {
      referencia:
        'Garcia, A. & Uribe M. (2005). Limpieza y desinfección de superficies. Editorial SENA',
      link: '',
    },
    {
      referencia:
        'Molano, L. (1997). Alternativas de Vida, Compostaje y reciclaje. Editorial SENA',
      link: '',
    },
    {
      referencia:
        'Parra, F. y Abizaid, O. (2021). “La formalización de la población recicladora en Colombia como prestadora del servicio público de reciclaje. Logros, oportunidades, restricciones y amenazas. Nota técnica de WIEGO n.º 12. Manchester, Reino Unido: WIEGO',
      link: '',
    },
    {
      referencia: 'Safetya. (2015).',
      link: 'https://safetya.co/todo-sobre-el-sg-sst/ ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
