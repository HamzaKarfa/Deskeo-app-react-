const initialState = {
  SelectDay :{
    phrase: 'Phrase du jour',
    image:null
  }
}
   
function rootReducer(state = initialState, action) {
    let newState = null

    switch (action.type) {
      case 'ADD_PHRASE':
        newState = {
          ...state,
          SelectDay : {
            phrase : action.payload.phrases_of_day,
            image: action.payload.image
          }
        }
        console.log(newState)
        return newState
        default: 
            return state
    
    }
      
  };

  export default rootReducer;
  