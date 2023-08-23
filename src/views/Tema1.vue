<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Tipos de almacenamiento 

    .row.justify-content-center
      .col-8.col-lg-2
        figure
          img(src='@/assets/curso/temas/tema1/img1.png', alt='Texto que describa la imagen')
          
        figure
          img(src='@/assets/curso/temas/tema1/img2.png', alt='Texto que describa la imagen').img-animacion1

      .col-11.col-lg-10.mt-3
        p  En la producción y comercialización de alimentos es necesario implementar la cadena de suministros, además de garantizar la conservación y calidad del producto hasta llegar al cliente final. En este primer tema de estudio se describen los tipos de almacenamiento que pueden darse a temperatura controlada y en seco, también cómo realizar la disposición de los productos. 
    
    .row.mt-5.justify-content-center
      .col-11.col-lg-7
        p Se debe tener en cuenta que, al momento de almacenar alimentos, es importante clasificar si son ‘perecederos o no perecederos’. En esta clasificación se encuentran los productos que requieren climatización, es decir, una temperatura específica que permita conservar las propiedades organolépticas. Es aquí donde juega un papel fundamental el control de la temperatura y es importante reconocer los conceptos de ‘refrigeración y congelación’. Estos procedimientos permiten conservar los alimentos cómo las verduras y carnes que deben estar a una temperatura específica para evitar brotes de infección o enfermedad por algún microorganismo; se debe tener en cuenta que también existen productos que no requieren este tipo de ambiente cómo los productos secos, por ejemplo, los granos de maíz, frijol, garbanzo, lenteja pequeña, azúcar, entre otros. Si estos tipos de productos sufren algún tipo de contaminación o deterioro es por el mal manejo o la rotación de estos, de ese modo es fundamental revisar las fechas de caducidad y algún tipo de vector que pueda deteriorar el producto en el proceso de almacenamiento y comercialización.  

      .col-11.col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/img3.png', alt='Texto que describa la imagen')

    separador


    #t_1_1

    .titulo-segundo.color-acento-contenido.mt-5
      h2 1.1  Almacenamiento con temperatura controlada


    .row.justify-content-center
      .col-8.col-lg-2.mb-5
        figure
          img(src='@/assets/curso/temas/tema1/img1.png', alt='Texto que describa la imagen')
          
        figure
          img(src='@/assets/curso/temas/tema1/img4.png', alt='Texto que describa la imagen').img-animacion2

      .col-11.col-lg-10
        p  El primer tipo de almacenamiento está asociado a la temperatura en la que se deben tener los alimentos para cuidar que sus propiedades no se vean afectadas, a continuación, se describen los dos tipos de temperatura controlada: congelación y refrigeración.
        p.mt-3 Entre las técnicas de conservación, la más utilizada es mediante el frío, y se clasifican en congelación y refrigeración. Dependiendo el tipo de producto, las características de conservación, se considera la disposición final que tendrá, entre otros factores, se puede optar por una técnica u otra.

    TabsB.color-primario
      .py-4.py-md-5(titulo="Congelación" :icono="require('@/assets/curso/temas/tema1/img5.png')")
        .row.justify-content-center
          .col-11.col-lg-7
            p.mt-3 Este proceso se refiere al almacenamiento de productos en su punto de fusión y depende del tipo de alimento, es importante mantener está temperatura o una similar durante todo el proceso de transporte y de exhibición del producto. Se deben contemplar tiempos de congelación, ya que mantener productos alimenticios durante largos periodos de tiempo conlleva a la pérdida de vitaminas y propiedades.
            p.mt-3 Es fundamental hacer recomendaciones de la correcta manipulación de los alimentos al cliente final, es decir, después de generar la entrega por parte del distribuidor al consumidor. Se deben consumir los productos en el menor tiempo posible, ya que se perdió la cadena de frío.
            p.mt-3 Un ejemplo de almacenamiento en congelación es dónde se almacenan productos como carnes de res, pollo, cerdo, pescado, entre otros.
        
          .col-10.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema1/img8.png', alt='Texto que describa la imagen')

      .py-4.py-md-5(titulo="Refrigeración" :icono="require('@/assets/curso/temas/tema1/img6.png')")
        .row.justify-content-center
          .col-11.col-lg-7
            p Este tipo de conservación se realiza con productos que requieren mantener una temperatura determinada, pero que al ser sometidos a temperaturas extremas hasta el punto de la congelación pierden sus propiedades. Es por ello por lo que se deben mantener frescos y es importante monitorear y revisar constantemente la temperatura. Es necesario que en las cámaras de conservación se utilicen dispositivos que permitan regular la temperatura entre los productos que se someten a este tipo de conservación, que suele darse entre los 0 y 6 grados Celsius. El tipo de productos que necesitan refrigeración son las frutas y verduras.
        
          .col-10.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema1/img9.png', alt='Texto que describa la imagen')

      .py-4.py-md-5(titulo="Temperaturas y <br> conservación de alimentos" :icono="require('@/assets/curso/temas/tema1/img7.png')")
        .row.justify-content-center
          .col-11.col-lg-7
            p El control de la humedad es fundamental en un proceso de conservación en frío porque determina la calidad de los alimentos, puesto que una humedad alta puede favorecer la propagación de hongos y bacterias. Ver tabla 1. 
            p A continuación, se presentan algunos ejemplos de las temperaturas para garantizar la conservación de los alimentos.
           
            .titulo-sexto.color-acento-contenido.mb-1.mt-4
              h5 Tabla 1
            i Ejemplos temperaturas
            
            .tabla-a.color-primario.mt-5
              table
                caption Referencia Nota. Tomada y adaptada de Ramírez N 2010. Estandarización y control de calidad en procesos de recibo, almacenamiento, distribución y recibo de alimentos. pág. 36
                thead
                  tr
                    th Producto
                    th Temperatura de almacenamiento
                    th Humedad relativa requerida
                    th Tiempo de almacenamiento
                tbody
                  tr
                    td Carnes de Res
                    td -10.0 °C 
                    td 80-85 %
                    td 21 días 
                  tr
                    td Manzanas
                    td 1.1 hasta 4.4 °C 
                    td 90 %
                    td 3-8 meses
                  tr
                    td Mantequilla 
                    td -11.0 hasta -9.0 °C 
                    td 80-85 % 
                    td 6 meses
                  tr
                    td Piñas 
                    td 7.2 hasta 12.2 °C 
                    td 85-90 % 
                    td 3 hasta 12 semanas        
          
          .col-10.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema1/img10.png', alt='Texto que describa la imagen')

    separador

    #t_1_2

    .titulo-segundo.color-acento-contenido.mt-5
      h2 1.2  Almacenamiento en seco

    .row.mt-5.justify-content-center
      .col-11.col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/img11.png', alt='Texto que describa la imagen')

      .col-11.col-lg-7
        p Se debe tener en cuenta que al momento de conservar los alimentos, es fundamental determinar la cantidad de agua que estos tienen, ya que, esto depende el tipo de conservación que se realizará, tal cómo se presenta en el proceso de congelación y refrigeración, determina el punto óptimo al cual se debe conservar un alimento para que no pierda sus propiedades. 

        .cajon.color-cajon1.p-3
          p Cuando se habla de almacenamiento en seco, se refiere que los alimentos que lo conforman son los que tienen un #[b nivel de agua relativamente bajo]. Por esto precisamente desde la producción se someten a diferentes técnicas para eliminar la cantidad de agua que tengan, por ejemplo, secarlos por completo en silos o aumentar los tiempos de exposición al sol, y así garantizar que no se presenten microorganismos o reproducción de bacterias que puedan alterar los alimentos. 

    .row.my-5
      p Es así como se debe tener en cuenta las técnicas de limpieza y desinfección, los procesos que se deben realizar asociados a la higiene en los lugares y equipos que tengan contacto con alimentos, además del manejo de plagas. Así que ampliemos la información:

    .row
      P Visualicemos un comparativo entre almacenamiento en seco y el de temperatura controlada, explorar haciendo clic en cada imagen. 

    .row.justify-content-center.mt-3
      H2.text-center Tipos de Almacenamiento

    .tarjeta.p-5(titulo="Ejemplo - 1")
      .imgCont.m-auto
        .row.justify-content-center.mb-4
          ImagenInfografica.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema1/img15.png', alt='', style='')

            .tarjeta.tarjeta--gris.p-4(x="6.5%" y="35%" numero="" style='border-radius: 10px')
              p Apropiado para alimentos con un bajo nivel de agua.

            .tarjeta.tarjeta--gris.p-4(x="20%" y="35%" numero="" style='border-radius: 10px')
              p A granel, se utilizan contenedores masivos como silos o graneros.

            .tarjeta.tarjeta--gris.p-4(x="33%" y="35%" numero="" style='border-radius: 10px')
              p A través de sacos apilados entre sí.

            .tarjeta.tarjeta--gris.p-4(x="67%" y="35%" numero="" style='border-radius: 10px')
              p Congelación: temperaturas entre -18 °C y 0 °C

            .tarjeta.tarjeta--gris.p-4(x="80%" y="35%" numero="" style='border-radius: 10px')
              p Refrigeración:temperaturas entre 0 °C y 10 °C

            .tarjeta.tarjeta--gris.p-4(x="93.5%" y="35%" numero="" style='border-radius: 10px')
              p Apropiado para alimentos que exigen mantener cierto nivel de agua


    
    .row.mt-5
      p Así mismo, se describen las técnicas de almacenamiento en seco.

    TabsA.color-primario.mt-5
      .tarjeta.color-primario--borde.p-4(titulo="Almacenamiento en sacos")
        .row.justify-content-center
          .col-10.col-lg-7
            p Este tipo de almacenamiento utiliza el empaque principal de los productos, conocidos como sacos, que pueden ser de diferentes materiales como por ejemplo fibra o lona y son apilados entre sí, también se puede hacer uso de estibas, facilitando el uso de equipos como montacargas para su transporte y rotación en las bodegas. Además, es fundamental garantizar unas condiciones mínimas para la circulación de aire y seguridad de los trabajadores.
          .col-10.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema1/img12.png', alt='Texto que describa la imagen')

      .tarjeta.color-primario--borde.p-4(titulo="Almacenamiento a granel")
        .row.justify-content-center
          .col-10.col-lg-7
            p Se procede con la disposición de los granos o cereales en contenedores masivos, que pueden ser graneros, silos u otro tipo de elementos, y con el paso de los días se van tomando pequeñas porciones de producto para su posterior empaque o distribución.
          .col-10.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema1/img13.png', alt='Texto que describa la imagen')

      .tarjeta.color-primario--borde.p-4(titulo="Disposición de los <br>productos")
        .row.justify-content-center
          .col-10.col-lg-7
            p Sin importar el tipo de almacenamiento, ya sea con control de temperatura o almacenamiento en seco, es indispensable realizar una disposición de los productos de forma adecuada, conservando unas distancias para la circulación del aire, así como distancias mínimas de seguridad para circulación de los empleados encargados de la manipulación de los alimentos o de los equipos utilizados para realizar la rotación de estos.
          .col-10.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema1/img14.png', alt='Texto que describa la imagen')


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
