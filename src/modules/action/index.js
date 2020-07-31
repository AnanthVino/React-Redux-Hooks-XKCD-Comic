/**
 * 
 * Code implementation
 * @Author Ananth Gunasekarapandiyan
 * @Email ananth1626p@gmail.com
 * 
 */

import axios from 'axios'

export function loadComic(){
    return (dispatch) => {
        dispatch({
            type: 'COMIC_REQUESTED',
        })

        axios.get('https://cors-anywhere.herokuapp.com/http://xkcd.com/info.0.json').then((res) => {
            dispatch(currentComic(res.data))
        }).catch(error => dispatch({
            type: 'COMIC_FAILED',
            payload: error
        })
        )
    }
}


export function searchComic(value){
    return (dispatch) => {
        dispatch({
            type: 'COMIC_REQUESTED',
        })

        axios.get(`https://cors-anywhere.herokuapp.com/http://xkcd.com/${value}/info.0.json`).then((res) => {
            dispatch(currentComic(res.data))
        }).catch(error => dispatch({
            type: 'COMIC_FAILED',
            payload: error
        })
        )
    }
}

export function currentComic(payload){
    return {
        type: 'COMIC_RECEIVED',
        payload: payload
    }
}


