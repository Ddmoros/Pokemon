

const decrementCount = (num) => {
    return{
        type:"DECREMENT",
        data:num
    }
}

export default decrementCount