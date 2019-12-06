
export const CHANGE_PAGE_ORDER='CHANGE_PAGE_ORDER';
export const INPUT_CALCULATOR='INPUT_CALCULATOR';
export const HANDLE_ANALYZE='HANDLE_ANALYZE';
export const SET_DATE_SELECT='SET_DATE_SELECT';
export const SET_SELECT='SET_SELECT';
export const SET_ANALYZE_PAGENUM='SET_ANALYZE_PAGENUM';
export const SET_ANALYZE_PAGENOW='SET_ANALYZE_PAGENOW'
export const SET_SHOWLIST='SET_SHOWLIST';
export const SET_DATALIST='SET_DATALIST';
export const SET_DATE='SET_DATE';

export const selectList={
  ACCOUNT:'ACCOUNT',
  PASSWORD:'PASSWORD'
};
//
// export function pageOrder(i) {
//     return {
//         type:CHANGE_PAGE_ORDER,
//         num:i
//     }
// }
//
// export function setInputCalculator(item) {
//     return {
//         type:INPUT_CALCULATOR,
//         item
//     }
// }
// //
// export function setHandleAnalyze(item) {
//     return {
//         type:HANDLE_ANALYZE,
//         item
//     }
// }
//
// export function setDateSelect(index) {
//     return {
//         type:SET_DATE_SELECT,
//         index
//     }
// }
//
// export function setDate() {
//     return {
//         type:SET_DATE,
//     }
// }
//
//
// export function setSelect(item) {
//     return {
//         type:SET_SELECT,
//         item
//     }
// }
//
// export function setAnalyzePageNum(num) {
//     return {
//         type:SET_ANALYZE_PAGENUM,
//         num
//     }
// }
//
// export function setAnalyzePageNow(num) {
//     return {
//         type:SET_ANALYZE_PAGENUM,
//         num
//     }
// }

//高阶函数
function createAction(type,...argNames) {

    return function (...arg) {
        let action={type};
        argNames.forEach((item,index)=>{
           action[item]=arg[index];
        });
        return action;
    };
}

export const setDate=createAction(SET_DATE);
export const setAnalyzePageNow=createAction(SET_ANALYZE_PAGENOW,'num');
export const setAnalyzePageNum=createAction(SET_ANALYZE_PAGENUM,'num');
export const setSelect=createAction(SET_SELECT,'item');
export const pageOrder=createAction(CHANGE_PAGE_ORDER,'num');
export const setInputCalculator=createAction(INPUT_CALCULATOR,'item');
export const setHandleAnalyze=createAction(HANDLE_ANALYZE,'item');
