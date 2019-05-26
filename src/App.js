import React, {Component} from 'react';
import './App.css';
import FollowerList from './Components/Containers/FollowerList'

class App extends Component {
  constructor (props){
		super(props)
		
		this.changePage = this.changePage.bind(this)
		this.state = {
			currentPage: "1"
		}
  }
  
  changePage = function (e) {		
		let pageIndex = e.target.dataset.url;
		this.setState((state, props) => ({
		  currentPage: pageIndex
		}));
  }  
  
  render(){

    return (
      <div className="App">
        <div className="App-header"></div>
        <div className="App-body">
          <h1 className="body-title">Followers order by date</h1>
          <FollowerList />
        </div>
      </div>
    );
  }
}

export default App;
