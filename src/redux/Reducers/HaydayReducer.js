import { GET_GAME_TIMELINE,GET_NEWS_SECTION } from '../ActionType';
 
let initialState = {
    GameTimeline : null,
    NewsSection :  null

}

const HayDayRecuder = (state = initialState, action) => {
   switch(action.type) {
       case GET_GAME_TIMELINE: {
           return {...state, GameTimeline : action.payload} ;
       }
       case GET_NEWS_SECTION: {
           return {...state, NewsSection : action.payload} ;
       }
       default : {
           return {...state};
       }

   }
}
export default HayDayRecuder;