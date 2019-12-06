import React from "react";
import A from '../style/analyze.module.scss'
const Analyze = ({   date,
                     date1,
                     date2,
                     account,
                     password,
                     pageNow,
                     pageNum,
                     start,
                     end,
                     list,
                     showlist,
                     accountList,
                     passwordList,
                     changeAnalyzeState,
                     }) => {

    //fetch获取数据
    function getData(){
        let list=[];
        let showlist=[];
        let url='http://pre.zhushang.net/Supplychain/getDataForHavePost';
        fetch(url,{
            mode:'cors',
            method:'post',
            body:'type=1&page=1&num=20',
            headers:{
                "Content-type":"application/x-www-form-urlencoded"
            }
        })
            .then((res)=>{
                console.log(res);
                return res.json();
            })
            .then((data)=>{
                list=data.slice();
                showlist=data.slice();
                pageNum=1+parseInt(showlist.length/7);
                // this.setState({list,showlist})
                changeAnalyzeState({list,showlist,pageNum,date:new Date().toLocaleString()});
                // changePageNum(pageNum);
                // changePageNow(1);
                // changeDate();
            })
    }
    //更新数据、日期
    function update() {
        getData();
        // this.setState({date:new Date().toLocaleString()});

    }
    //根据所有筛选条件进行检索
    function search(){
        if(date1 && date2 && date1>date2){
            alert('Invalid Date Input');
            return;
        }
        let arr=[];
        for (let k of list){
            let time=k.create_time.slice(0,10);
            if (((date1===''&&date2==='')
                ||(date1===''&&time<=date2)
                ||(date2===''&&time>=date1)
                ||(time<=date2&&time>=date1))&&(k.password===password||password==='密码')
                &&(k.account===account||account==='账号')){
                arr.push(k);
            }
        }
        showlist=arr;
        pageNow=1;
        pageNum=parseInt(arr.length/7)+1;
        start=0;
        end=(showlist.length>=7?7:showlist.length);
        // this.setState({pageNum,showlist,pageNow,start,end})
        changeAnalyzeState({pageNum,showlist,pageNow,start,end});
        // changePageNow(pageNow);
        // changePageNum(pageNum);
    }
    function pageUp() {
        if(pageNow===1)return;
        pageNow-=1;
        start-=7;
        end=start+7;
        // this.setState({pageNow,start,end});
        changeAnalyzeState({pageNow,start,end});

    }

    function pageDown() {
        if (pageNow===pageNum)return;
        pageNow++;
        start+=7;
        end=(pageNow===pageNum)?list.length-1:start+7;
        changeAnalyzeState({pageNow,start,end});
    }
     function chgDate1(e){
        // this.setState({date1:e.target.value})
        // changeAnalyzeState({date1,date2,account,password,pageNow,pageNum,start,end,list,showlist});
         changeAnalyzeState({date1:e.target.value});

    }

    function chgDate2(e){
        // this.setState({date2:e.target.value})
        changeAnalyzeState({date2:e.target.value});

    }
    function chgSelect1(s1){
        changeAnalyzeState({account:s1.target.value});
    }
    function chgSelect2(s2){
        changeAnalyzeState({password:s2.target.value});
    }
        const select1=accountList.slice().map((account,index)=>{
                return (
                    <option key={index} value={account}>{account}</option>
                )
            }
        );
        const select2=passwordList.slice().map((password,index)=>{
                return (
                    <option key={index} value={password}>{password}</option>
                )
            }
        );
        const showList=showlist.slice(start,end).map((item,index)=>{
            return (
                <div key={index} className={A.text}>
                    <span className={A.id}>{item.id}</span>
                    <span className={A.create_time}>{item.create_time}</span>
                    <span className={A.pay_money}>{item.pay_money}</span>
                    <span className={A.openid}>{item.openid}</span>
                    <span className={A.name}>{item.name}</span>
                    <span className={A.type}>{item.type}</span>
                    <span className={A.use_where}>{item.user_where}</span>
                    <span className={A.package}>{item.package}</span>
                    <span className={A.order_no}>{item.order_no}</span>
                    <span className={A.expire_date}>{item.expire_date}</span>
                    <span className={A.phone}>{item.phone}</span>
                    <span className={A.zihao}>{item.zihao}</span>
                    <span className={A.account}>{item.account}</span>
                    <span className={A.password}>{item.password}</span>
                </div>
            )
        });
        return (
            <div className={A.containers}>
                <div className={A.searchBar}>
                    <select value={account} onChange={(s1)=>chgSelect1(s1)}>{select1}</select>
                    <select value={password} onChange={(s2)=>chgSelect2(s2)}>{select2}</select>
                    <span>日期选择</span>
                    <input type="date"  onChange={(e)=>chgDate1(e)}/>
                    <span>-</span>
                    <input type="date"  onChange={(e)=>chgDate2(e)}/>
                        <div  className={A.btn1} onClick={()=>search()}>查询</div>
                        <div  className={A.btn2} onClick={()=>update()}>同步</div>
                    <span>交易上次手动同步时间：{date}</span>
                </div>
                <div className={A.data}>
                    <div className={A.header}>
                        <span className={A.id}>序号</span>
                        <span className={A.create_time}>创建时间</span>
                        <span className={A.pay_money}>支付金额</span>
                        <span className={A.openid}>开发号</span>
                        <span className={A.name}>名称</span>
                        <span className={A.type}>类型号</span>
                        <span className={A.use_where}>使用方式</span>
                        <span className={A.package}>包号</span>
                        <span className={A.order_no}>订单号</span>
                        <span className={A.expire_date}>有效日期至</span>
                        <span className={A.phone}>电话</span>
                        <span className={A.zihao}>字号</span>
                        <span className={A.account}>账号</span>
                        <span className={A.password}>密码</span>
                    </div>
                    <div>{showList}</div>
                    <div className={A.pageUpAndDown}>
                        <div className={A.pageControl}>
                            <button onClick={()=>pageUp()}>上一页</button>
                            <span>{pageNow}/{pageNum}</span>
                            <button onClick={()=>pageDown()}>下一页</button>
                        </div>
                    </div>

                </div>
            </div>

        )

};

export default Analyze;