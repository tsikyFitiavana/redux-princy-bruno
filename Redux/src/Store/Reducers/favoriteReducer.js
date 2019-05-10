

const initialState = {
  favoritesFilm: [
    {
      favoris: false,
      id: 1,
      image: "images/pic06.jpg",
      title: "Star Wars VIII - Les derniers Jedi",
      description: "Nouvel épisode de la saga. Les héros du Réveil de la force rejoignent les figures légendaires de la galaxie dans une aventure épique qui révèle des secrets ancestraux sur la Force et entraîne de choquantes révélations sur le passé…",

    },
    {
      favoris: false,
      id: 2,
      image: "images/pic06.jpg",
      title: "harry potter",
      description: "Nouvel épisode de la saga. Les héros du Réveil de la force rejoignent les figures légendaires de la galaxie dans une aventure épique qui révèle des secrets ancestraux sur la Force et entraîne de choquantes révélations sur le passé…",

    },
    {
      favoris: false,
      id: 3,
      image: "images/pic01.jpg",
      title: "capitaine america",
      description: "Nouvel épisode de la saga. Les héros du Réveil de la force rejoignent les figures légendaires de la galaxie dans une aventure épique qui révèle des secrets ancestraux sur la Force et entraîne de choquantes révélations sur le passé…",

    },
    {
      favoris: false,
      id: 4,
      image: "images/pic04.jpg",
      title: "avangers",
      description: "Nouvel épisode de la saga. Les héros du Réveil de la force rejoignent les figures légendaires de la galaxie dans une aventure épique qui révèle des secrets ancestraux sur la Force et entraîne de choquantes révélations sur le passé…",

    }


  ]
}

function toggleFavorite(state = initialState, action) {
  let nextState = {}
  let k=0
  let h=0
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      for (let i = 0; i < state.favoritesFilm.length; i++) {
        if (action.value === state.favoritesFilm[i].id) {
          state.favoritesFilm[i].favoris = true
          k=i
          console.log("etat favoris :" + state.favoritesFilm[i].favoris)
          nextState = {
            ...state,
            favoritesFilm: [state.favoritesFilm[i]]
          }
        }
      }
      for(let j=0;j<state.favoritesFilm.length;j++){
        if(j!==k){
          nextState.favoritesFilm.push(state.favoritesFilm[j])
        }
      }
      return nextState
    case 'TOGGLE_NONFAVORITE':
      for (let i = 0; i < state.favoritesFilm.length; i++) {
        if (action.value === state.favoritesFilm[i].id) {
          state.favoritesFilm[i].favoris = false
          h=i
          console.log("etat nonfavoris :" + state.favoritesFilm[i].favoris)
          nextState = {
            ...state,
            favoritesFilm:[state.favoritesFilm[i]]
            
          }
        }
      }
      for(let j=0;j<state.favoritesFilm.length;j++){
        if(j!==h){
          nextState.favoritesFilm.push(state.favoritesFilm[j])
        }
      }
      return nextState
    default:
      return state
  }
}

export default toggleFavorite