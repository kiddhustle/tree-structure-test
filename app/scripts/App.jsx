import React from 'react';
import {pad} from './Utils';
// components

const App = React.createClass({
	propTypes:{
		dataUri:React.PropTypes.string
	},
	getInitialState:function(){
		return {
			advertisers:new Map()
		};
	},
	componentDidMount:function(){
		console.log('componentDidMount')
	},
	componentWillUnmount:function(){
		console.log('componentWillUnmount')
	},
	onSubmit:function(e){
		e.preventDefault();
		console.log('onSubmit');
		let advertiser = this.refs.advertiser.value;
		let brand = this.refs.brand.value;
		let product = this.refs.product.value;
		let newState = this.state;
		// logic
		// add advertiser
		if(!newState.advertisers.has( advertiser )){
			newState.advertisers.set(advertiser, new Map());
		}
		// add brand
		if(!newState.advertisers.get(advertiser).has(brand) ){
			newState.advertisers.get(advertiser).set(brand, new Map());
		}
		// add product
		if(!newState.advertisers.get(advertiser).get(brand).has(product) ){
			newState.advertisers.get(advertiser).get(brand).set(product, []);
		}
		// add timestamp
		let dObj = new Date();
		// let datetime = dObj.toISOString();
		let date = [pad(dObj.getDate()), pad(dObj.getMonth()+1), dObj.getFullYear()].join('/');
		let time = [pad(dObj.getHours()), pad(dObj.getMinutes()), pad(dObj.getSeconds())].join(':');
		newState.advertisers.get(advertiser).get(brand).get(product).push( date+' '+time );
		this.setState(newState, function(){
			console.log('submitted');
		});
		
	},
	_renderLine:function(spaces, text){
		let spaceChar = '&nbsp;';
		let padding = spaceChar.repeat(spaces) + '->';
		return {
			__html:padding + text
		};
	},
	render:function(){
		let output = [];
		// advertiser
		for (let adPair of this.state.advertisers.entries() ){
			output.push( (<p dangerouslySetInnerHTML={this._renderLine(5, adPair[0])}></p>) );
			// brand
			for (let brandPair of adPair[1]){
				output.push( (<p dangerouslySetInnerHTML={this._renderLine(10, brandPair[0])}></p>) ); 
				// product
				for (let productPair of brandPair[1]){
					output.push( (<p dangerouslySetInnerHTML={this._renderLine(15, productPair[0])}></p>) );
					// timestamp 
					productPair[1].forEach((timestamp)=>{
						output.push( (<p key={timestamp} dangerouslySetInnerHTML={this._renderLine(20, timestamp)}></p>) );
					});
				}
			}
			
		}
		return (
			<div>
			<h1>Entry form</h1>
				<form onSubmit={this.onSubmit}>
					<table className="table">
						<tr>
							<th scope="row"><label htmlFor="advertiser">Advertiser</label></th>
							<td><input type="text" id="advertiser" ref="advertiser" required="required" /></td>
						</tr>
						<tr>
							<th scope="row"><label htmlFor="brand">Brand</label></th>
							<td><input type="text" id="brand" ref="brand" required="required" /></td>
						</tr>
						<tr>
							<th scope="row"><label htmlFor="product">Product</label></th>
							<td><input type="text" id="product" ref="product" required="required" /></td>
						</tr>
						<tr>
							<td colSpan="2">
							<input type="submit" value="Add" ref="btn" className="btn" />
							</td>
						</tr>
					</table>
				</form>
				<h2>Output</h2>
				<div>{output}</div>
			</div>
			
		);
	}
});
export default App;