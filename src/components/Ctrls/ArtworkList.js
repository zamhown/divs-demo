import React from 'react';
import ArtworkListItemWide from './ArtworkListItemWide.js';
import '../../css/ArtworkList.css';

class ArtworkList extends React.Component {
    constructor(){
        super();
        this.state={
            arr:[1,2,3,4,5]
        }
    }

    render() {
        let items=[];
        for(var i=0;i<this.state.arr.length;i++){
            items.push(<ArtworkListItemWide index={i} title={this.props.title}
                                            hasEditBtn={this.props.hasEditBtn}
                                            hasDelBtn={this.props.hasDelBtn}
                                            hasAuthor={this.props.hasAuthor}
                                            hasTag={this.props.hasTag}
            />);
        }
        return (
            <div className="text-left artworkList">
                <ul className="list-group">
                    {items}
                </ul>
            </div>
        );
    }
}

export default ArtworkList;


