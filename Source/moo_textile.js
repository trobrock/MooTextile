/*
---
description: WYSIWYG style editor to output Textile

license: MIT-style

authors:
- Trae Robrock

requires:
- core/1.2.4: '*'

provides: []

...
*/

(function($){
	window.addEvent('domready', function(){
		
		var buttons = {
			bold : 'Bold', 
		};
		
		var textareas = $$('textarea.mootextile');
		if (textareas.length > 0) {
			
			// Inserts the wrapper and controls div
			var w = (new Element('div', {'class' : 'wrapper'})).wraps(textareas[0]);
			var c = (new Element('div', {'class' : 'controls'})).inject(textareas[0], 'before');
			
			// sets the controls size
			var size = textareas[0].getSize();
			c.setStyles({width : size.x});
			
			// insert the controls
			var bold = new Element('a', {href : '#', html : buttons.bold});
			c.grab(bold);
			
			bold.addEvent('click', function(e){
				e.stop();
				var txt = textareas[0].getSelectedText();
				
				if (txt === "") {
					// Insert markup and position the caret
				}
				else {
					// wrap the selection with the markup
				}
			});
		}
		
	});
}(document.id))