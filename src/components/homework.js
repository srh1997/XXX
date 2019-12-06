import React from "react";
// import Calculator from "./calculator";
import visibleCalculator from '../containers/visibleCalculator'
import visibleAnalyze from '../containers/visibleAnalyze'
import Analyze from "./analyze";
import Header from "../containers/visibleHeader";
import header from "../style/header.module.scss";
import {Link,Route,BrowserRouter as Router} from 'react-router-dom'
const Homework = ({order,setPageOrder}) => {
    // function toPage(i){
    //     // this.setState({order:i});
    // }
    //     const display1=(order===1?{display:'block'}:{display:'none'});
    //     const display2=(order===2?{display:'block'}:{display:'none'});
    const clickedStyle={
        border: '1px solid #dddddd',
        borderRadius: '4px 4px 0 0',
        borderBottom: '1px solid white',
        color:'#31a0ef',
        fontWeight:'bold'
    };
    const notClickedStyle={
        border:'none',
        color:'#aaaaaa'
    };
    const style1=order===1?clickedStyle:notClickedStyle;
    const style2=order===2?clickedStyle:notClickedStyle;
        return (
            <div>
                    <Header/>


                <Router>
                    <div className={header.link}>
                    <Link to='/'
                          onClick={()=>setPageOrder(1)}
                          style={style1} >首页</Link>
                    <Link to='/analyze'
                          onClick={()=>setPageOrder(2)}
                          style={style2}>收入分析</Link>
                    </div>
                    <div>
                    <Route path='/' exact component={visibleCalculator}/>
                    <Route path='/analyze' component={visibleAnalyze}/>
                    </div>
                </Router>
            </div>
                )


};

export default Homework;