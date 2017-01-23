const fillColor = (state, action) => {
    const initState = {
        id:0,
        color:"salmon"
    }
    switch (action.type){
        case 'FILL_COLOR':
            return action.cubeInfo
        default:
            return initState       
    }
}

export default fillColor