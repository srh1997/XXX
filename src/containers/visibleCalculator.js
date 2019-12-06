import Calculator from "../components/calculator";
import {connect} from 'react-redux'
import {setInputCalculator} from "../actions/actions";

const mapStateToProps = state => {
    const {isOver,result,numPost,numPre,mark,counting,fontSize,btn_group}=state.CalState;
    return {
        isOver,result,numPost,numPre,mark,counting,fontSize,btn_group
    }
};
const mapDispatchToProps = dispatch => {
    return {
        changeCalState:(i)=>{dispatch(setInputCalculator(i))}
    }
};
let VisibleCalculator=connect(mapStateToProps,mapDispatchToProps)(Calculator);

export default VisibleCalculator;