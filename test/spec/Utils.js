import {pad} from '../../Utils.js';
import {expect} from 'chai';


describe('utils', function(){
	it('pad function', function(){
		let input = 3;
		let expected = '003';
		expect(pad(input, 3)).to.equal(expected);
	});
});
