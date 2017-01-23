import { getRandomColorsInRange } from '../components/styles'

function fillColor() {
    
    let cubeInfo = []
    for (let i=0; i<9; i++)
    {
        cubeInfo.push({
            id:i,
            color: getRandomColorsInRange(0,1)
        })
    }
    
    return {
        type: 'FILL_COLOR',
        cubeInfo,
    }
}

export default fillColor;