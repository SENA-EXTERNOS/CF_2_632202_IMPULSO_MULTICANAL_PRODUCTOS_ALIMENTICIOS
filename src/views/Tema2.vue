<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Técnicas de limpieza y desinfección

    .row.justify-content-center.mt-5.mb-5
      .col-8.col-lg-2
        figure
          img(src='@/assets/curso/temas/tema2/img1.png', alt='Texto que describa la imagen')
          
        figure
          img(src='@/assets/curso/temas/tema2/img2.png', alt='Texto que describa la imagen').img-animacion3

      .col-11.col-lg-10.mt-3
        p Las técnicas de limpieza y desinfección, son de gran valor para evitar la contaminación de los productos y su deterioro, que puede desencadenar en enfermedades, propagación de microorganismos y todo esto en pérdidas para la compañía. El segundo tema de estudio se describe el proceso de limpieza estructural, proceso de desinfección y manejo de plagas.

    separador

    #t_2_1

    .titulo-segundo.color-acento-contenido.mt-5
      h2 2.1  Limpieza estructural

    .row.justify-content-center
      .col-8.col-lg-2
        figure
          img(src='@/assets/curso/temas/tema2/img1.png', alt='Texto que describa la imagen')
          
        figure
          img(src='@/assets/curso/temas/tema2/img3.png', alt='Texto que describa la imagen').img-animacion4

      .col-11.col-lg-10.mt-3
        p Con el ánimo de evitar la propagación de plagas y conservar los alimentos es fundamental realizar la limpieza de todas las estructuras, siendo necesario conocer los elementos que hacen parte del proceso limpieza de estas, con el propósito de evitar la propagación de plagas y conservar los alimentos.


      .row.mt-5
        p A continuación, se describen los elementos a los que se debe aplicar este procedimiento:

    TabsC.color-primario.mb-5.mt-5
      .py-3.py-md-4(titulo="Pisos")
        .row.mt-5.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img4.png', alt='Texto que describa la imagen')
              
          .col-md-5
            p.mt-5 Se deben utilizar materiales que no absorban o retengan algún tipo de humedad. Por ejemplo, baldosas de cerámica o algún tipo de material esmaltado que permita la fácil circulación. También son importantes elementos o equipos necesarios para rotar los productos y que su proceso de limpieza y desinfección sea lo más fácil posible, ya que, por ejemplo, la rugosidad o grietas aumenta la propagación de plagas.    

      .py-3.py-md-4(titulo="Paredes")
        .row.mt-5.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img5.png', alt='Texto que describa la imagen')
              
          .col-md-5
            p.mt-5 Las paredes deben ser de un material que permite la limpieza de una manera fácil, por lo menos hasta una altura de 1.8 m. Además, se recomienda que en procesos que tienen elevados porcentajes de humedad se utilicen pendientes de hasta 2 % para la circulación del agua con sus debidas rejillas, impidiendo el ingreso de plagas que alteran el producto.

      .py-3.py-md-4(titulo="Techos")
        .row.mt-5.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img6.png', alt='Texto que describa la imagen')
          .col-md-5
            p.mt-5 Al momento de construir una bodega y un cuarto de almacenamiento es fundamental pensar en los techos, estos deben ser de un material resistente, duradero, deben tener una altura adecuada para la circulación del aire. Asimismo, se debe procurar que no se desprendan ningún tipo de elemento ya sea residuos, gotas o demás que puedan alterar los productos alimenticios.

      .py-3.py-md-4(titulo="Puertas y ventanas")
        .row.mt-5.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img7.png', alt='Texto que describa la imagen')
          .col-md-5
            p.mt-5 Las puertas y ventanas deben estar construidas de un material resistente y de fácil desinfección, qué no entre en contacto ni genere elementos tóxicos que puedan generar algún tipo de contaminación a los alimentos, ejemplo de estos pueden ser materiales antioxidantes como aluminio. También se debe procurar unas dimensiones adecuadas para la circulación de equipos y del personal. 
            p Las ventanas deben tener una altura adecuada y ser construidas de tal manera que impida el ingreso de plagas y permita la circulación de aire, de luz (esto si aplica), ya que en situaciones como #[strong cuartos fríos] se procura tener un ambiente completamente aislado de la luz solar con el ánimo de conservar el frío haciendo un uso energético eficiente e impedir el ingreso de plagas. 


      .py-3.py-md-4(titulo="Equipos")
        .row.mt-5.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img8.png', alt='Texto que describa la imagen')
              
          .col-md-5
            p.mt-5 Todos los equipos utilizados deben contar con las mejores prácticas de limpieza y desinfección como lo son estanterías, estibas y en caso de utilizar o demás que impidan la contaminación de los productos.

    separador

    #t_2_2

    .titulo-segundo.color-acento-contenido.mt-5
      h2 2.2  Proceso de desinfección

    .row.row.justify-content-center
      .col-11.col-lg-9
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img9.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p La desinfección es un proceso que se realiza posterior a la limpieza, para eliminar todo tipo de microorganismos o bacterias que pudiesen haber quedado luego de realizar el proceso de limpieza. Se hace una eliminación visible de suciedad, normalmente este proceso se realiza con productos químicos como por ejemplo hipoclorito, dióxido de cloro o sales cuaternarias de amonio. 

    .row.mt-5
      p El almacenamiento de los productos posterior a su uso, es fundamental para la prevención de algún tipo de contaminación en los alimentos. Es importante la identificación de las etiquetas para cambiar el producto químico utilizado durante el año.

    .row.justify-content-center.mt-5
      .col-11.col-lg-7
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Elementos necesarios para la desinfección")
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema2/img10.png', alt='Texto que describa la imagen')

            .col-md-7.mb-4.mb-md-0
              p Al momento de realizar el proceso de desinfección es importante contar con todos los elementos para el adecuado proceso, entre los que están:
              p <i class="fas fa-angle-right" STYLE="Color: orange"></i> Cepillo eléctrico.
              p <i class="fas fa-angle-right" STYLE="Color: orange"></i> Escurridor.
              p <i class="fas fa-angle-right" STYLE="Color: orange"></i> Mangueras.
              p <i class="fas fa-angle-right" STYLE="Color: orange"></i> Escobas.
              p <i class="fas fa-angle-right" STYLE="Color: orange"></i> Cepillos.
              p <i class="fas fa-angle-right" STYLE="Color: orange"></i> Paños de limpieza.
              p <i class="fas fa-angle-right" STYLE="Color: orange"></i> Atomizador.
          
          .row(titulo="Equipo de protección especial")
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema2/img11.png', alt='Texto que describa la imagen')

            .col-md-7.mb-4.mb-md-0
              p <i class="fas fa-angle-right" STYLE="Color: orange"></i> Botas de hule.
              p <i class="fas fa-angle-right" STYLE="Color: orange"></i> Guantes de hule.
              p <i class="fas fa-angle-right" STYLE="Color: orange"></i> Peto.
              p <i class="fas fa-angle-right" STYLE="Color: orange"></i> Mascarilla.
              p <i class="fas fa-angle-right" STYLE="Color: orange"></i> Anteojos.
              p <i class="fas fa-angle-right" STYLE="Color: orange"></i> Cofia.

          .row(titulo="Productos químicos")
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema2/img12.png', alt='Texto que describa la imagen')

            .col-md-7.mb-4.mb-md-0
              p <i class="fas fa-angle-right" STYLE="Color: orange"></i> Detergente líquido biodegradable.
              p <i class="fas fa-angle-right" STYLE="Color: orange"></i> Desinfectantes que puede ser a base de cloro o amonio cuaternario.
              p <i class="fas fa-angle-right" STYLE="Color: orange"></i> Desengrasante biodegradable.


      .col-10.col-lg-5.d-none.d-md-block
        figure
          img(src='@/assets/curso/temas/tema2/img13.png', alt='Texto que describa la imagen').img-animacion5

    .row.mt-5
      h3 Ejemplo de proceso de limpieza para un cuarto frío

      p.mt-4 Para comprender el proceso se muestra un ejemplo del proceso de limpieza y desinfección de un cuarto frío.


    .row.mt-5.justify-content-center
      .col-10.col-lg-3.mt-4
        .tarjeta.tarjeta-slide.abajo.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido
              figure
                img(src='@/assets/curso/temas/tema2/img26.png', alt='Texto que describa la imagen')
            
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img14.png')})`}")

      .col-10.col-lg-3.mt-4
        .tarjeta.tarjeta-slide.abajo.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img15.png')})`}")
            .tarjeta-slide__contenido
              figure
                img(src='@/assets/curso/temas/tema2/img27.png', alt='Texto que describa la imagen')

      .col-10.col-lg-3.mt-4
        .tarjeta.tarjeta-slide.abajo.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img17.png')})`}")
            .tarjeta-slide__contenido
              figure
                img(src='@/assets/curso/temas/tema2/img28.svg', alt='Texto que describa la imagen')

      .col-10.col-lg-3.mt-4
        .tarjeta.tarjeta-slide.abajo.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img16.png')})`}")
            .tarjeta-slide__contenido
              figure
                img(src='@/assets/curso/temas/tema2/img29.svg', alt='Texto que describa la imagen')

    .row.mt-4.justify-content-center
      .col-10.col-lg-3.mt-4
        .tarjeta.tarjeta-slide.abajo.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img18.png')})`}")
            .tarjeta-slide__contenido
              figure
                img(src='@/assets/curso/temas/tema2/img30.png', alt='Texto que describa la imagen')

      .col-10.col-lg-3.mt-4
        .tarjeta.tarjeta-slide.abajo.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img19.png')})`}")
            .tarjeta-slide__contenido
              figure
                img(src='@/assets/curso/temas/tema2/img31.png', alt='Texto que describa la imagen')

      .col-10.col-lg-3.mt-4
        .tarjeta.tarjeta-slide.abajo.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img20.png')})`}")
            .tarjeta-slide__contenido
              figure
                img(src='@/assets/curso/temas/tema2/img32.png', alt='Texto que describa la imagen')

      .col-10.col-lg-3.mt-4
        .tarjeta.tarjeta-slide.abajo.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img21.png')})`}")
            .tarjeta-slide__contenido
              figure
                img(src='@/assets/curso/temas/tema2/img33.png', alt='Texto que describa la imagen')

    .row.justify-content-center.mt-4.mb-5
      .col-10.col-lg-3.mt-4
        .tarjeta.tarjeta-slide.abajo.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img22.png')})`}")
            .tarjeta-slide__contenido
              figure
                img(src='@/assets/curso/temas/tema2/img34.png', alt='Texto que describa la imagen')

      .col-10.col-lg-3.mt-4
        .tarjeta.tarjeta-slide.abajo.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img23.png')})`}")
            .tarjeta-slide__contenido
              figure
                img(src='@/assets/curso/temas/tema2/img35.png', alt='Texto que describa la imagen')

      .col-10.col-lg-3.mt-4
        .tarjeta.tarjeta-slide.abajo.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img24.png')})`}")
            .tarjeta-slide__contenido
              figure
                img(src='@/assets/curso/temas/tema2/img36.png', alt='Texto que describa la imagen')


    separador


    .row.mt-5
      h3 Manejo de plagas

    .row.mt-5.justify-content-center
      .col-11.col-lg-7
        p Las plagas, se pueden presentar donde haya alimentos y puedan alterar el producto. Es muy importante realizar las buenas prácticas de limpieza y desinfección tanto en las bodegas o almacenes, así como en los puntos de expendio o exhibición. Se debe realizar la vigilancia y control de todo tipo de productos o elementos que ingresen al establecimiento, verificar fechas de caducidad, realizar la rotación adecuada, velar por el buen estado de las instalaciones y contar con todas las normas vigentes y elementos de seguridad para evitar la propagación de plagas.

      .col-11.col-lg-5
         figure
          img(src='@/assets/curso/temas/tema2/img25.png', alt='Texto que describa la imagen')


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
