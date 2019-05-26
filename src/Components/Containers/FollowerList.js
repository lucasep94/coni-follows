import React, {Component} from 'react';
import axios from 'axios';
import Follower from '../Models/Follower';
import './FollowerList.css';

class FollowerList extends Component {

    constructor (props){
        super(props);
        this.getUser = this.getUser.bind(this);        
        this.loadFollowers = this.loadFollowers.bind(this);
        this.http =  axios.create ({
            baseURL: 'https://api.twitch.tv/helix/users?login=omeguis',
            timeout: 1000,
            headers: {'Client-ID': '8q4igphugwwctr8af95qr5424eof64'},
          });
		this.state = {
            followers: [],
            user: {},
            loaded: false,
            lastPage: ''
		};		
    } 

    componentWillMount() {        
        this.getUser();        
    }

    getUser(){
        this.http.get()
		    .then(res => {			
                const user = res.data.data[0];
                this.setState({
                    user: user,
                    loaded: true                    
                });
                this.loadFollowers();
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    loadFollowers(){
        //to_id: 33198924,
        //first: 100
        let params = {
            direction: 'asc',  
            limit: 25
        }
        params.cursor = this.state.lastPage !== '' ? this.state.lastPage : '';        
        //'https://api.twitch.tv/helix/users/follows'
        this.http.get('https://api.twitch.tv/kraken/channels/omeguis/follows',{
                params: params
            })
		    .then(res => {			
                let newArrayFollowers = this.state.followers.concat(res.data.follows);
                
                newArrayFollowers = newArrayFollowers.sort(function(a, b) {
                    a = new Date(a.created_at);
                    b = new Date(b.created_at);
                    return a>b ? 1 : a<b ? -1 : 0;
                });

                this.setState({
                    followers: newArrayFollowers,
                    lastPage: res.data._cursor
                });
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    render(){
        return(
            <div>
                <div className="follower-list">                                
                    { 
                        this.state.followers.map((follower, index) => (
                            <Follower name={follower.user.display_name} position={index + 1} key={index} id={follower.user._id} fromDate={follower.created_at} />
                        ))                    
                    }                                    
                </div>
                <input type="button" value="Load more..." className="btn" onClick={this.loadFollowers}></input>
            </div>
        );    
    }
}

export default FollowerList; // Don’t forget to use export default!