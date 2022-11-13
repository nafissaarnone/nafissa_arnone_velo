export const getVillageois = () => {
    //    à commenter : let rq = "https://jsongaulois.jmfino.fr/listeVillageois.php"
    let rq = "listeVillageois.json"
    // Requête concernée
    return fetch(rq)            // on renvoie la requête à qui la demande
        .then(response => {
            return response.json()  // résultat de la requête en json
        })
        .catch(error => { throw error } // Cas d'erreur
        )
}

// Promesse de recherche pour les vidéos
export const getVideos = () => {
    //   à commenter     let rq = "https://jsonvideo.jmfino.fr/listeVideo.php"
    let rq = "listeVideos.json"

    return fetch(rq)
        .then(response => {
            return response.json()
        })
        .catch(error => { throw error }
        )
}

export const getGares = (dep) => {
    let rq = "https://ressources.data.sncf.com/api/records/1.0/search/"
        + "?dataset=liste-des-gares"
        + "&q=departemen=" + dep
        + "&rows=100"
        + "&lang=FR"
        + "&facet=voyageurs"

    return fetch(rq)
        .then(response => {
            return response.json()
        })
        .catch(error => { throw error }
        )
}