/*
 *	Name: valid.js
 *	Description: A JavaScript Validation Library that requires no JavaScript setup for validation.
 *
 *	Author: Devlin Junker
 *
 *	Last Modified: November 4th, 2012
 *	
 *	This program is free software: you can redistribute it and/or modify
 *	it under the terms of the GNU General Public License as published by
 *	the Free Software Foundation, either version 3 of the License, or
 *	(at your option) any later version.
 *
 *	This program is distributed in the hope that it will be useful,
 *	but WITHOUT ANY WARRANTY; without even the implied warranty of
 *	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
var tmpFunction  = window.onload ? window.onload : null;

window.onload = function(){
	var i, j = 0;
	var inputs = new Array();
	var input;
	var rules;
	var ruleParts;
	var rule;
	var value;
	
	var nodeList = document.getElementsByTagName('input');
	
	for ( i = 0; i < nodeList.length; i++){
		inputs.push(nodeList.item(i));
	}
	
	nodeList = document.getElementsByTagName('textfield');
	
	for ( i = 0; i < nodeList.length; i++){
		inputs.push(nodeList.item(i));
	}
	
	for ( i = 0; i < inputs.length; i++){
		input = inputs[i];
		
		validation = input.attributes.getNamedItem('validation');
		
		rules = validation.split(';');
		
		for(j = 0; j < rules.length; j++){			
			ruleParts = rules[j].split(:);
			
			rule = ruleParts[0];
			value = ruleParts[1];
			
			switch(rule){
				case "RegExp":				
					
					break;
				case "MinLength":
					
					break;
				case "MaxLength":
				
					break;
				case "Required":
					
					break;
				default:
					console("Validation Rule: "+rule+" with value:"+value+" Not Understood!");
					break;
			}
		}
	}
	
	if (tmpFunction) tmpFunction();
}