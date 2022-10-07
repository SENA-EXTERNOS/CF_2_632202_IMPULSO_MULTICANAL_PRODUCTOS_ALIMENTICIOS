<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Cadena de frío

    .row.justify-content-center.mt-5.mb-5
      .col-8.col-lg-2
        figure
          img(src='@/assets/curso/temas/tema3/img1.png', alt='Texto que describa la imagen')
          
        figure
          img(src='@/assets/curso/temas/tema3/img2.png', alt='Texto que describa la imagen').img-animacion6

      .col-11.col-lg-10.mt-3
        p Para garantizar la calidad de un producto alimenticio perecedero hasta el momento en que lo recibe el cliente final, es necesario cuidar y mantener la cadena de frío de acuerdo con las características del alimento. En este tercer tema se reconocen los aspectos importantes de la cadena de frío, los cuidados y vehículos para el transporte de alimentos y cómo mantenerlos en el punto de venta.


    separador

    #t_3_1

    .titulo-segundo.color-acento-contenido.mt-5
      h2 3.1  Importancia de la cadena de frío

    .row.mt-5
      p Para conocer porqué es importante mantener la cadena de frío, ver el siguiente vídeo. 

    .row.mt-3
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video


    separador


    #t_3_2

    .titulo-segundo.color-acento-contenido.mt-5
      h2 3.2  Vehículos utilizados

    .row.mt-5
      p Con el fin de garantizar la temperatura óptima de los productos y la calidad de los alimentos se debe utilizar un vehículo especializado, entre los siguientes:

    TabsA.color-primario.mt-3
      .tarjeta.color-primario--borde.p-4(titulo="Vehículos isotérmicos:")
        .row.justify-content-center
          .col-10.col-lg-7
            p.mt-5 Son vehículos que cuentan con un sistema de aislamiento del calor externo, sin embargo, no generan frío, por lo tanto, en algún momento la temperatura externa se equilibrará con la interna. 
          .col-10.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema3/img3.png', alt='Texto que describa la imagen')

      .tarjeta.color-primario--borde.p-4(titulo="Vehículos con equipo autónomo:")
        .row.justify-content-center
          .col-10.col-lg-7
            p.mt-5 Cuentan con todo un equipo destinado a la producción de frío que garantiza la calidad de los alimentos, como por ejemplo hielo seco.
          .col-10.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema3/img4.png', alt='Texto que describa la imagen')

      .tarjeta.color-primario--borde.p-4(titulo="Vehículos con placas:")
        .row.justify-content-center
          .col-10.col-lg-7
            p.mt-5 Las placas o paneles contienen geles que permiten acumular el calor y prolongar la congelación de los productos alimenticios.
          .col-10.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema3/img5.png', alt='Texto que describa la imagen')
    
    .row.mt-5.justify-content-center
      .col-11.col-lg-10
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema3/img6.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Tipos de vehículo
                  p Para conocer la lista de vehículos utilizados para transporte de alimentos con su respectiva capacidad, explorar el siguiente documento.  
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Tipos_de_vehículos.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    #t_3_3

    .titulo-segundo.color-acento-contenido.mt-5
      h2 3.3  Puntos de venta

    .row.justify-content-center.mt-5
      .col-11.col-lg-8
        .cajon.color-acento-botones.p-4
          p Cuando los productos finalmente llegan al punto de venta pueden almacenarse o exhibirse dependiendo del tipo de producto y las dimensiones del lugar de venta. Pueden llegar a un cuarto frigorífico, cuarto frío o directamente a los congeladores y cámaras refrigeradas para la exhibición del producto. Es fundamental el uso de los equipos y contenedores como estibas, contenedores, es decir, el embalaje debe ser el adecuado y garantizar la circulación de aire.     
        p.mt-3 Entre las cámaras de exposición o exhibición se tienen diferentes tipos, pueden tener puertas o no, pero siempre procurando conservar una temperatura ideal hasta que el cliente o consumidor final tome el producto y se encargue de llevarlo en el menor tiempo posible hasta su hogar, donde finalmente será consumido. 

      .col-10.col-lg-4.mt-3
        figure
          img(src='@/assets/curso/temas/tema3/img7.png', alt='Texto que describa la imagen')

</template>

<script>
export default {
  name: 'Tema3',
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
