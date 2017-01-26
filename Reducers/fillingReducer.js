const initState = {   
        id:0,
        color:"salmon"
    }
    
const fillColor = (state = [], action) => {
    switch (action.type){
        case 'FILL_COLOR':
            return action.cubeInfo
        default:
            return (state && state.length !== 0) ? state : initState               
    }
}

export default fillColor