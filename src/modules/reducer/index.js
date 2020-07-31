/**
 * 
 * Code implementation
 * @Author Ananth Gunasekarapandiyan
 * @Email ananth1626p@gmail.com
 * 
 */

let defaultState = {
    comic: null,
    status: ''
}

const mainReducer = (state = defaultState, action)=>{
    switch (action.type) {
    case 'COMIC_REQUESTED':
        return {
            status: 'waiting'
        }
    case 'COMIC_RECEIVED':
        return {
            ...state,
            status: 'received',
            comic: action.payload
        }
    case 'COMIC_FAILED':
        return {
            status: 'failed', 
            error: action.error
        }
    default:
        return state
    }
}

export default mainReducer

