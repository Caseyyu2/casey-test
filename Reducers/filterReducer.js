//import { getRandomColorsInRange } from '../components/styles'

const filterColor = (state, action) => {
    const initState = {
        initFilter: "blue"
    }
    switch (action.type) {
        case 'FILTER_COLOR':
            return {initFilter: action.filter}
        default:
            return initState
    }
}

export default filterColor