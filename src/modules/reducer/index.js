/**
 * 
 * Code implementation
 * @Author Ananth Gunasekarapandiyan
 * @Email ananth1626p@gmail.com
 * 
 */

let defaultState = {
    comic: null
}

const mainReducer = (state = defaultState, action)=>{
    switch (action.type) {
    case 'CURRENT_COMIC':
        return {
            ...state,
            comic: action.comic
        }
    default:
        return state
    }
}

export default mainReducer

