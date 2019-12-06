import Header from "../components/headers";
import {connect} from 'react-redux'
import {pageOrder} from "../actions/actions";

const mapStateToProps = ({order}) => {
    return {
        order
    }
};

let VisibleHeader=connect(mapStateToProps)(Header);

export default VisibleHeader;