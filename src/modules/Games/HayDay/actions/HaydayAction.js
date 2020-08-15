// import { GET_GAME_TIMELINE, GET_NEWS_SECTION } from "../../../redux/ActionTypes";
import { GET_GAME_TIMELINE, GET_NEWS_SECTION } from "../../../../redux/ActionType";



export const getGameTimeLine = () => async (dispatch) => {
    try {

        let data = await (await fetch('https://ps-data-store.s3-us-west-2.amazonaws.com/frontend-assignment/assignment-paragh-1.json', {
            method: 'GET',
            headers: {
              'Access-Control-Allow-Origin': '*'
            }
          })).json();
        // let data = 'enw';
        dispatch({ type: GET_GAME_TIMELINE, payload: data });
    }
    catch (e) {
        console.log(e);
    }
};

export const getNewsSection = () => async (dispatch) => {
     try {
        let data = await (await fetch('https://ps-data-store.s3-us-west-2.amazonaws.com/frontend-assignment/assignment-paragh-2.json', {
            method: 'GET',
            headers: {
              'Access-Control-Allow-Origin': '*'
            }
          })).json();
         dispatch({type : GET_NEWS_SECTION, payload : data});
     }
     catch(e) {
         console.log(e);
     }
};
