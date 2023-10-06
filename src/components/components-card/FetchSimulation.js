const FetchSimulation = (dateBase, time) => {
    return new Promise((resolve, rejact) => {
        setTimeout(() => {
            resolve(dateBase);
            rejact(new Error("algo salio mal"))
        }, time)
    })
}

export default FetchSimulation;