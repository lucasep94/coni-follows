import React, { Component } from 'react';
import './Header.css'
class Header extends Component {
  render() {
	
	let linkStyle_1 = this.props.active === "1" ? "active" : "";
	let linkStyle_2 = this.props.active === "2" ? "active" : "";
	let linkStyle_3 = this.props.active === "3" ? "active" : "";
	let linkStyle_4 = this.props.active === "4" ? "active" : "";
	
    return (

		<ul>
			<li data-url="1" className={linkStyle_1} onClick={this.props.clickMenu}>Menu 1</li>
			<li data-url="2" className={linkStyle_2} onClick={this.props.clickMenu}>Menu 2</li>
			<li data-url="3" className={linkStyle_3} onClick={this.props.clickMenu}>Menu 3</li>
			<li data-url="4" className={linkStyle_4} onClick={this.props.clickMenu}>Menu 4</li>
		</ul>
	);
  }
}

export default Header;