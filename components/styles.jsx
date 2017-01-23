const randomPickableColors = ['blue', 'yellow']

const style = {
    //Feature or component style could be defined here
    cubeStyle: {
        width: "40px",
        height: "40px",
        margin: "5px"
    }
};


function getRandomColorsInRange(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    const color = randomPickableColors[number]
    
    return color
}

export { 
    style,
    getRandomColorsInRange
}
