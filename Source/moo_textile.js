/*
---
description: WYSIWYG style editor to output Textile

license: MIT-style

authors:
- Trae Robrock

requires:
- core/1.2.4: '*'

provides: [MooTextile]

...
*/

var MooTextile = new Class({
	Implements : [Options, Events], 
	options : {}, 
	markup : {
		bold : '*', 
		italic : '_', 
	}, 
	buttons : {
		bold : 'bold', 
		italic : 'italic', 
	},
	
	initialize : function(options){
		this.setOptions(options);
		this.elements = $$('textarea.mootextile');
		this.markup = $H(this.markup);
		this.buttons = $H(this.buttons);
		this.wrapper();
	},
	
	wrapper : function(){
		this.elements.each(function(e){
			var wrapper = Elements.from('<div class="mootextile-wrapper"></div>');
			wrapper.pop().wraps(e);
		});
	},
	
	injectControls : function(){
		this.elements.each(function(e){
			var controls = Elements.from('<div class="mooextile-controls"></div>');
			controls = controls.pop().inject(e, 'before');
			controls.addEvent('click', function(ele){
				ele.stop();
				this.insertMarkup(e.target, ele);
			}.bind(this));
			controls.setStyle('width', e.getSize().x);
			
			this.injectButtons(controls);
		}.bind(this));
	},
	
	injectButtons : function(controls){
		this.buttons.each(function(buttonText){
			var button = new Element('a', {
				href : '#', 
				html : buttonText, 
			});
			controls.grab(button);
		});
	},
	
	insertMarkup : function(button, textarea){
		var buttonText = button.get('html');
		var selected = textarea.getSelectedText();
		if (selected === "") {
			textarea.insertAtCursor(markup.bold + markup.bold);
			textarea.setCaretPosition(textarea.getSelectionEnd() - marup.bold.length);
		}
		else {
			textarea.insertAtCursor(markup.bold + selected + markup.bold);
		}
	},
});