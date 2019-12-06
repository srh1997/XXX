import {combineReducers} from 'redux'
import {
    CHANGE_PAGE_ORDER,
    INPUT_CALCULATOR,
    HANDLE_ANALYZE,
    SET_DATE,
    SET_SELECT,
    SET_ANALYZE_PAGENUM
} from "../actions/actions";

function deepClone(obj) {
    if(obj instanceof Date)return new Date();
    let result=Array.isArray(obj)?[]:{};
    for (let k in obj){
        if(obj.hasOwnProperty(k)){
            if(typeof obj[k] === 'object' && obj[k] !== null){
                result[k]=deepClone(obj[k])
            }
            else {
                result[k]=obj[k];
            }
        }
    }
    return result;
}

function setPage(state = 1,action) {
    switch (action.type) {
        case CHANGE_PAGE_ORDER:
            return action.num;
        default:
            return state;
    }
}
function CalState(
    state = {btn_group:['AC','+/-','%','÷','7','8','9','×','4','5','6','-','1','2','3','+','0','.','='],
        result:0,
        numPre:0,
        numPost:0,
        mark:'',
        isOver:false,
        counting:false,
        font_Size:{fontSize:'100px'}},action){
    switch (action.type) {
        case INPUT_CALCULATOR:
            return action.item;
        default:
            return state;
    }


}

function AnalyzeState(state = {},action){
    switch (action.type) {
        case HANDLE_ANALYZE:
            {
                let newState=deepClone(state);
                let propsNames=Object.getOwnPropertyNames(action.item);
                for (let key of propsNames){
                    newState[key]=action.item[key];
                }
                return newState;
            }
        default:
            return state;
    }
}
function date(state = new Date().toLocaleString(),action){
    switch (action.type) {
        case SET_DATE:
            return new Date().toLocaleString();
        default:
            return state;
    }
}
function select(state = {account:'账号',password:'密码'},action){
    switch (action.type) {
        case SET_SELECT:{
            let newState={...state};
            newState[action.item.name]=action.item.value;
            return newState;
        }
        default:
            return state;
    }
}
function pageNum(state =  1,action){
    switch (action.type) {
        case SET_ANALYZE_PAGENUM:{
            return action.num;
        }
        default:
            return state;

    }
}
function pageNow(state = 1 , action){
    switch (action.type) {
        case SET_ANALYZE_PAGENUM:{
            return action.num;
        }
        default:
            return state;

    }
}
let reducer=combineReducers({
    order:setPage,
    CalState,
    AnalyzeState,
    // date,
    // select,
    // pageNow,
    // pageNum
});

export default reducer;