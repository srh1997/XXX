import React from "react";
import calculator from '../style/calculator.module.scss'

const Calculator = ({isOver,result,numPost,numPre,mark,counting,fontSize,btn_group,changeCalState}) => {
    //计算器按键处理
    function clickHandler(btn){
        let kind;
        if(!isNaN(btn))kind='Number';
        else if (btn==='+'||btn==='-'||btn==='×'||btn==='÷'||btn==='%')kind='Mark';
        else kind=btn;
        // let {isOver,result,numPost,numPre,mark,counting}=this.state;
        function numHandler() {
            if(isOver){
                isOver=false;
                result=parseFloat(btn);
            }
            else {
                if (result=='0')result='';
                result=result+btn;

            }
            numPost=result;
        }
        function markHandler() {
            if(isOver){
                numPre=result;
            }
            mark=btn;
            numPre=result;
            isOver=true;

        }
        function pointHandler() {
            if(result[result.length-1]==='.')return;
            result= result+'.';

        }
        function reverseHandler() {
            result=0-result;

        }
        function ACHandler() {  //Ok
            result='0';
            mark='';
            numPre=0;
            numPost=0;
        }
        function equalHandler() {
            new Promise((resolve,reject) =>{
                counting=true;
                setTimeout(function () {
                    resolve();
                },1500)
            }).then(()=>{
                numPost = parseFloat(numPost);
                numPre = parseFloat(numPre);
                switch (mark) {
                    case "+":
                        result = numPre + numPost;
                        break;
                    case "-":
                        result = numPre - numPost;
                        break;
                    case "×":
                        result = numPre * numPost;
                        break;
                    case "÷":
                        result = numPre / numPost;
                        break;
                    case "%":
                        result = numPre % numPost;
                        break;
                }
                isOver = true;
                let newVal = result * 10e5;
                if (newVal - parseInt(newVal)) {
                    result = result.toFixed(5);
                }
                counting=false;
                // this.setState({counting,numPre,numPost,result,isOver});
                changeCalState({isOver,result,numPost,numPre,mark,counting,fontSize,btn_group,changeCalState});
            });

        }
        switch (kind) {
            case 'Number':numHandler();
                break;
            case 'Mark':markHandler();
                break;
            case '.':pointHandler();
                break;
            case '+/-':reverseHandler();
                break;
            case 'AC':ACHandler();
                break;
            case '=':equalHandler.call(this);
                break;
        };
        let newFontSize=(100-20*parseInt(result.length/4))+'px';
        if(result.length>16)newFontSize='20px';
        fontSize={fontSize:newFontSize};
        changeCalState({isOver,result,numPost,numPre,mark,counting,fontSize,btn_group,changeCalState});
    }
        let rotate='';
        // const {counting,result,fontSize}=this.state;
        const btnList=btn_group.slice().map((btn,index) =>{
            return(
                <button key={index} id={btn} onClick={()=>clickHandler(btn)}>{btn}</button>
            )
        });
        if(counting){
            rotate=(<div className={calculator.rotate}>
                <div className={calculator.app}/>
                <div className={calculator.app}/>
                <div className={calculator.app}/>
                <div className={calculator.app}/>
                <div className={calculator.app}/>
                <div className={calculator.app}/>
                <div className={calculator.app}/>
                <div className={calculator.app}/>
                <div className={calculator.app}/>
                <div className={calculator.app}/>
                <div className={calculator.app}/>
                <div className={calculator.app}/>
                <div className={calculator.circle}/>
            </div>);
        }

        return (
            <div className={calculator.container}>
                <div className={calculator.result}>
                    <span className={calculator.num} style={fontSize}>{result}</span>
                </div>
                <div className={calculator.btnPart}>
                    {btnList}
                </div>
                <div>{rotate}</div>
            </div>
        )

}
export default Calculator;