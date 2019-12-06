import Analyze from '../components/analyze'
import {
    setHandleAnalyze,
    setDate,
    setSelect,
    setAnalyzePageNum,
    setAnalyzePageNow
} from '../actions/actions'
import {connect} from 'react-redux'

const mapStateToProps = state => {
    const {account,password,date,pageNow,pageNum,date1,date2,start,end,list,showlist,accountList,passwordList}=state.AnalyzeState;
    // const {date,pageNow,pageNum} = state;
    // const {account,password} = state.select;
    return {
        date,date1,date2,account,password,pageNow,pageNum,start,end,list,showlist,accountList,passwordList
    }
};
const mapDispatchToProps = dispatch => {
    return {
        changeAnalyzeState:(i)=>{dispatch(setHandleAnalyze(i))},
        // changeDate:()=>{dispatch(setDate())},
        // changeSelect:(i)=>{dispatch(setSelect(i))},
        // changePageNum:(i)=>{dispatch(setAnalyzePageNum(i))},
        // changePageNow:(i)=>{dispatch(setAnalyzePageNow(i))}
    }
};
let VisibleAnalyze=connect(mapStateToProps,mapDispatchToProps)(Analyze);

export default VisibleAnalyze;