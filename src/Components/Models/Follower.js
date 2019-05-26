import React, {Component} from 'react';
import Moment from 'react-moment';
import './Follower.css';

class Follower extends Component {

    render(){
        return(
            <div className="follower-item">
                <div className="cono-logo"></div>
                <div className="detail">
                    <div className="follower-name">
                        <span> #{this.props.position} {this.props.name}</span>
                    </div>
                    <div className="follower-date">
                        <Moment format="DD/MM/YYYY HH:mm:ss"> 
                            {this.props.fromDate.toString()} 
                        </Moment>
                    </div>
                </div>
            </div>
        );
    }
}
export default Follower; // Don’t forget to use export default!