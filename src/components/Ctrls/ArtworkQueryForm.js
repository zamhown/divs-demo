import React from 'react';
import '../../css/ArtworkQueryForm.css';

class ArtworkQueryForm extends React.Component {
    constructor(){
        super();
        this.state={
            activeType:''
        };
    }

    onRadioChange(str){
        this.setState({activeType:str});
    }

    render() {
        return (
            <div id="query_form" className="form_style text-left">
                <div className="form-style">
                    <table className="table_style" border="0px" style={{width: '100%'}}>
                        <tr>
                            <td style={{width:'12%'}}>
                                <label className="label_style">类型:</label>
                            </td>
                            <td className="types">
                                <label className={this.state.activeType == 'all'?'activeType':undefined}><span>所有</span><input type="radio" onChange={this.onRadioChange.bind(this,"all")}/></label>
                                <label className={this.state.activeType == 'pmsj'?'activeType':undefined}><span>平面设计</span><input type="radio" onChange={this.onRadioChange.bind(this,"pmsj")}/></label>
                                <label className={this.state.activeType == 'sysx'?'activeType':undefined}><span>摄影摄像</span><input type="radio" onChange={this.onRadioChange.bind(this,"sysx")}/></label>
                                <label className={this.state.activeType == 'yshq'?'activeType':undefined}><span>影视后期</span><input type="radio" onChange={this.onRadioChange.bind(this,"yshq")}/></label>
                                <label className={this.state.activeType == 'fl'?'activeType':undefined}><span>Flash动画</span><input type="radio" onChange={this.onRadioChange.bind(this,"fl")}/></label>
                                <label className={this.state.activeType == 'jhsj'?'activeType':undefined}><span>交互设计</span><input type="radio" onChange={this.onRadioChange.bind(this,"jhsj")}/></label>
                                <label className={this.state.activeType == '3dsj'?'activeType':undefined}><span>3D设计</span><input type="radio" onChange={this.onRadioChange.bind(this,"3dsj")}/></label>
                                <label className={this.state.activeType == 'xmtyy'?'activeType':undefined}><span>新媒体运营</span><input type="radio" onChange={this.onRadioChange.bind(this,"xmtyy")}/></label>
                                <label className={this.state.activeType == 'wzkf'?'activeType':undefined}><span>网站开发</span><input type="radio" onChange={this.onRadioChange.bind(this,"wzkf")}/></label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="label_style">搜索:&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            </td>

                            <td colspan="4">
                                <span className="search-btn-wrapper">
                                    <input className="form-control" type="search" placeholder="请输入标题或作者名称的关键字" />
                                </span>
                            </td>
                            <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                            <td>
                                <button className="btn btn-primary">查询</button>
                            </td>
                        </tr>
                        <tr>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default ArtworkQueryForm;
