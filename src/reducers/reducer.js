const reducer = (state, action) => {


    if(state === undefined){
        state = {
            count: 10, 
            favorite:[]
        }
    }


    switch(action.type){

        case "INCREMENT": 
            return {
                ...state, 
                count: state.count + action.data
            }

        case "DECREMENT": 
            return {
                ...state, 
                count: state.count - action.data
            }
            case "ADD_TO_FAVORITE": 
            // console.log(action.data)
            return {
                ...state, 
                favorite:state.favorite.concat(action.data)
            }

        default: 
            return state;
    }
}

export default reducer;