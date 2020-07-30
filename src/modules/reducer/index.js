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
    if(action.type ==='CURRENT_COMIC'){
        return {
            ...state,
            comic: action.comic
        }
    }else{
        return {
            ...state
        }
    }
}

export default mainReducer

