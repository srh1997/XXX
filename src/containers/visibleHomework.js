import Homework from "../components/homework";
import {connect} from 'react-redux'
import {pageOrder} from "../actions/actions";

const mapStateToProps = state => {
  return {
      order:state.order
  }
};
const mapDispatchToProps = dispatch => {
    return {
        setPageOrder:(i)=>{dispatch(pageOrder(i))}
    }
};
let VisibleHomework=connect(mapStateToProps,mapDispatchToProps)(Homework);

export default VisibleHomework;