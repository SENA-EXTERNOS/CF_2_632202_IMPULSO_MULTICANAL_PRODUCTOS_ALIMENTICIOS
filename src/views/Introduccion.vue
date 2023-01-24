<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bloque-texto-g.color-acento-botones.p-4.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/intruduccion/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Apreciado aprendiz, bienvenido a este componente formativo donde conocerá sobre la cadena de suministro, que está comprendida por el almacenamiento, el transporte y la comercialización, además, contiene las buenas prácticas de manufactura y el control de temperatura fundamentales para garantizar la calidad de los productos que serán entregados al cliente final; con la implementación de las diferentes técnicas de almacenamiento, la aplicación de normas de higiene y de seguridad en el trabajo, se puede garantizar que los productos se conserven durante la cadena de suministro. También conocerá las etapas, elementos y demás aspectos asociados a la cadena de suministro, a través de ejemplos que le permitirán acercarse a escenarios reales para interiorizar mejor los conceptos.

    .row.mt-5
      p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.

    .row.mt-5.mb-5
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/CvMyAmFWZps" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Almacenar productos alimenticios

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
