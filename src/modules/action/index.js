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
        axios.get('https://cors-anywhere.herokuapp.com/http://xkcd.com/info.0.json').then((res) => {
            dispatch(currentComic(res.data))
        }).catch(() => {
            alert('No any comic for this value')
        })
    }
}


export function searchComic(value){
    return (dispatch) => {
        axios.get(`https://cors-anywhere.herokuapp.com/http://xkcd.com/${value}/info.0.json`).then((res) => {
            dispatch(currentComic(res.data))
        }).catch(() => {
            alert('No any comic for this value')
        })
    }
}

export function currentComic(comic){
    return {
        type: 'CURRENT_COMIC',
        comic: comic
    }
}


