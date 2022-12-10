const reducer = (state, action) => {


    if(state === undefined){
        state = {
            count: 10
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

        default: 
            return state;
    }
}

export default reducer;