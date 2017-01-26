
const initState = {
        isFiltered: false,
        colorValue: "blue"
    }
const filterColor = (state, action) => {
    
    switch (action.type) {
        case 'FILTER_COLOR':
            return {
                isFiltered: action.filter.isFiltered,
                colorValue: action.filter.colorValue
            }
                
        default:
            return initState
    }
}

export default filterColor