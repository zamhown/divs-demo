import React from 'react';

class ArtworkListItemWide extends React.Component {
    constructor(){
        super();
    }

    render() {
        let editBtn=<a className="btn btn-default" href="#">编辑</a>;
        let delBtn=<button className="btn btn-danger">删除</button>;
        return (
            <li className="list-group-item row">
                <div className="col-md-8">
                    <a className="h4" href="artwork.html">{this.props.title+(this.props.index*1+1)}</a>
                    <p className="input-sm row">
                        <span className="alert-info col-md-3">类别：平面设计 </span>
                        <span className="alert-info col-md-3">赞数：0 </span>
                        <span className="alert-info col-md-3">评论数：0 </span>
                        <span className="alert-info col-md-3">发表时间：0000-00-00 </span>
                    </p>
                </div>
                <div className="col-md-4 text-right">
                    {this.props.hasEditBtn?editBtn:undefined}&nbsp;&nbsp;
                    {this.props.hasDelBtn?delBtn:undefined}
                </div>
            </li>
        );
    }
}

export default ArtworkListItemWide;

