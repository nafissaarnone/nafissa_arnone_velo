<script setup>
import Barchart from '../components/Barchart.vue'
import Barchart2 from '../components/Barchart2.vue'
import Barchart3 from '../components/Barchart3.vue'
import DoughnutChart from '../components/DoughnutChart.vue'
</script>

<template>
  <div class="container textc marge">
    <h1> Datavisualisation accident vélo
    </h1>
  </div>

  <img src="@/assets/vélo.jpeg" class="marge imgc">
  <div class="container marge margin-left">
    <h2 class="taillet">DDes centaines de cyclistes subissent un accident de vélo chaque année. Ils se voient tués dans un accident de la
    circulation et sont victimes de la mort sur la route. L’accident n’est pas causé par le vélo lui-même mais par celui qui
    le conduit ou par un autre automobiliste. Zoom sur les causes d’accidents de vélo les plus fréquentes et leurs origines.
    </h2>
  </div>

  <div class="container marge margin-left">
    <h2 class="taillet">Ce n’est que seulement dans 30 % des cas qu’on enregistre l’intervention d’un autre usager de la voie publique dans le
    cas des accidents de vélo. Il est le plus souvent question d’un conflit de trajectoire (46 % des cas) dans lequel 1/3 en
    intersection, d’une façon récurrente, les cyclistes avouent ne pas avoir été vus par l’antagoniste ou d’une perte de
    contrôle. La menace est l’angle mort des poids lourds, bus, cars, et des véhicules utilitaires. Ces collisions sont pour
    la plupart fatales au cycliste. Il peut s’agir d’un accident impliquant un camion ou une camionnette. Dans la majorité
    des cas, l’antagoniste heurte le cycliste par l’arrière : ce qui confirme que la bonne co-visibilité que procure le
    double sens cyclable est un atout en faveur de la sécurité et ne constitue en aucun cas une source de danger.
    
    Dans ce cas précis, plusieurs victimes d’accidents sur la route sont enregistrées, du conducteur du véhicule aux
    passagers ainsi que le cycliste. Lors d’un accident impliquant également cycliste et automobiliste, cela peut arriver
    lorsque la distance de sécurité entre les deux usagers n’est pas suffisante, notamment lors du dépassement d’un cycliste
    sur une ligne continue.
    </h2>
  </div>

  


  <main class="fondBlanc graph">

    <DoughnutChart />
  </main>

  <div class="container marge margin-left">
    <h2 class="taillet">On constate qu’on a environ 84% des accidents de vélos (entre 2005 et 2017) qui ont eu lieu en
      agglomération.
      C’est un nombre énorme et cela prouve que rouler en agglomération en vélo est bien plus dangereux.
    </h2>
  </div>

  <div class="container marge margin-left">
    <h2 class="taillet">Pour expliquer cela, on peut analyser la situation dans laquelle ont eu lieu tous ses accidents
      en
      agglomération.

    </h2>
  </div>

  <main class="fondBlanc">
    <Barchart />
  </main>

  

  <div class="container marge margin-left">
    <h2 class="taillet">Par la suite il s'agit ici d'analyser les données les mêmes données mais sur pistes cyclables.
    </h2>
  </div>

  <main class="fondBlanc">
    <Barchart3 />
  </main>
  <div class="container marge margin-left">
    <h2 class="taillet">tout d'abord que remarque t-on sur ce graphique? on remarque que sur piste cyclable il y a énormément de blessé léger. On constate que depuis 2005 aucune personne n'a été tué sur une piste cyclabe
    </h2>
  </div>

  <img src="@/assets/vélo3.webp" class="marge imgc">

 
  
  <div class="container marge margin-left">
    <h2 class="taillet">Pour conclure la pratique du vélo demeure une pratique fonctionnelle tant pour les piétons que pour les cyclistes. En effet, plus les
    cyclistes sont nombreux sur la voie publique, plus ils sont bien identifies par les automobilistes et on peut constater
    une chute exceptionnelle du taux d’accidents. Les villes dans lesquelles les vélos en libre-service ont vu le taux des
    accidents de circulation liés au vélo diminué considérablement. Aussi, des efforts ont été fournis pour permettre aux
    cyclistes de s’habituer au trafic urbain comme la création des voies cyclables et des zones de rencontres.
    
    Les accidents de vélo sont beaucoup plus dangereux que les accidents d’automobiles. Il est donc important de s’adapter à
    la situation routière afin de ne pas être une victime des accidents mortel de vélo.
    </h2>
  </div>
</template>

<style scoped>
.fondBlanc {
  background-color: rgb(133, 133, 133);
}

.titre {
  color: rgb(0, 0, 0);
}

.marge {
  padding-bottom: 50px;
}

.margin-left {
  margin-left: 60px;
}

.textc {
  text-align: center;
}

.imgc {
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.tailleti {
  font-size: 21px;
}

.taillet {
  font-size: 16px;
  margin-right: 40px;
  padding-top: 20px;
}

.graph {
  width: 750px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}
</style>
