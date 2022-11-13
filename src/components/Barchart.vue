<script setup>
import { reactive } from 'vue';

// Import d'un graphique type barChart
import { Bar } from 'vue-chartjs'

// Import des objets du graphique de la bibliothèque ChartJs
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

// Eléments utilisés par notre graphique
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


// Propriétés du graphique Utilisés dans le template (props)
// On définit pour chacune son type de données et sa valeur par défaut
// On peut utiliser une grande variété de types, voire des objets
const propChart = defineProps({
    chartId: { type: String, default: 'bar-chart' }, // Id du graphique
    datasetIdKey: { type: String, default: 'label' }, // id du dataSet
    width: { type: Number, default: 350 }, // Hauteur du graphe
    height: { type: Number, default: 150 }, // Largeur du graphe
    cssClasses: { type: String, default: '' }, // Classes css utilisées
    styles: { type: Object, default: () => { } }, // Styles utilisés
    plugins: { type: Object, default: () => { } }  // plugins utilisés
})

// Données injectées dans le graphique
let chartData = reactive({
    // Etiquettes l'axe 
    labels: ['Sur chaussée', 'Sur piste cyclable', 'Null', 'Sur trottoir', 'Sur accotement'],
    // Valeurs des données du graphique
    datasets: [{
        // Etiquette du jeu de données à projeter
        label: 'En agglomération',
        // Valeurs des données (statiques pour l'exemple)
        data: [45692, 3740, 3568, 1429, 352],
        // Couleur de la barra affectée à chaque valeur
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
        ],
        // Couleur de la bordure affectée à chaque valur
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
        ],
        // Epaisseur de la bordure
        borderWidth: 1
    }]
});

// Options du graphique
// Les principales utilisées, ils en existe beaucoup d'autres
// voir documentation
let chartOptions = reactive({
    // Aspect responsive du graphique
    responsive: true,
    // type de projetction utilisée :
    // x: verticale
    // y : horizontale
    indexAxis: 'x',

    // Echelles du graphique
    // Valeurs maximales des axes
    scales: {
        // axe des ordonnées
        y: {
            // Valeur max des y fixées à 100
            suggestedMax: 100,
            // graduation de l'axe y
            ticks: {
                // Police
                font: {
                    size: 16
                }
            }
        },
        // axe des abscisses
        x: {
            // graduation de l'axe x
            ticks: {
                // Police
                font: {
                    size: 16
                }
            }
        }
    },

    // Les plugins
    plugins: {
        // Lengende des données
        legend: {
            // Label des données
            labels: {
                color: "green",
                font: {
                    size: 16
                }
            },
        },
        // Titre du graphique      
        title: {
            // Affichage
            display: true,
            // Libellé du graphique
            text: 'Chartjs - BarChart',
            // Couleur du text
            color: "blue",
            // Police du texte
            font: {
                size: 20
            }
        }
    }
});

</script>

<template>
    <!-- 
        chart-options : Options du graphique
        chart-data : données du graphique
        chart-id : Identifiant du graphique
        dataset-id-key : Identifiant des données
        plugins : plugins utilisés
        css-classes : Classes css utilisées
        styles : styles css utilisés
        width : largeur du graphique
        height : hauteur du graphique
    -->
    <Bar :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId" :dataset-id-key="datasetIdKey"
        :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width" :height="height" />
</template>