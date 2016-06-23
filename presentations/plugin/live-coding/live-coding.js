/**
 * LiveCoding 0.2 for Reveal.js
 * Vincent De Oliveira
 */
var LiveCoding = (function() {
	if ( (!('innerText' in document.createElement('a'))) && ('getSelection' in window) ) {
    HTMLElement.prototype.__defineGetter__("innerText", function() {
        var selection = window.getSelection(),
            ranges    = [],
            str;

        // Save existing selections.
        for (var i = 0; i < selection.rangeCount; i++) {
            ranges[i] = selection.getRangeAt(i);
        }

        // Deselect everything.
        selection.removeAllRanges();

        // Select `el` and all child nodes.
        // 'this' is the element .innerText got called on
        selection.selectAllChildren(this);

        // Get the string representation of the selected nodes.
        str = selection.toString();

        // Deselect everything. Again.
        selection.removeAllRanges();

        // Restore all formerly existing selections.
        for (var i = 0; i < ranges.length; i++) {
            selection.addRange(ranges[i]);
        }

        // Oh look, this is what we wanted.
        // String representation of the element, close to as rendered.
        return str;
    });
    
    HTMLElement.prototype.__defineSetter__("innerText", function(str) {
        this.innerHTML = str.replace(/\n/g, "<br />");
    });
}
	
	// All <code> with ".liveCoding" class
	var codeElementList = document.querySelectorAll('code.liveCoding');

	for (var i = 0; i < codeElementList.length; i++) {
		update(codeElementList[i]);

		// update when keyUp
		codeElementList[i].addEventListener('keyup', function() {
			update(this);
		});
	}

	/**
	 * Update
	 */
	function update(codeElement) {

		if (codeElement.attributes.getNamedItem('data-livecoding-id')){
			var demoElementId = codeElement.attributes.getNamedItem('data-livecoding-id').nodeValue;
		}
		else {
			return false;
		}
		var demoElement = document.getElementById(demoElementId);

		// highlight.js and prism.js
		var isCSS = hasAtLeastOneClass(codeElement, ['css', 'language-css']);
		var isMarkup = hasAtLeastOneClass(codeElement, ['xml', 'language-markup', 'language-xml', 'language-html', 'language-svg']);

		// if it's CSS
		if (isCSS) {
			var cssRules = codeElement.textContent;

			// if PrefixFree is here
			if (typeof PrefixFree !== "undefined") {
				// prefix code
				cssRules = PrefixFree.prefixCSS(cssRules);
			}

			// cleanup
			cssRules = cssRules.replace(/^\s+/g,'').replace(/\s+$/g,'');
			var reg = /(\{|\})/g;
			cssRules = cssRules.split(reg);
			for (var i = 0; i < cssRules.length - 1; i+=4) {
				var selectors = cssRules[i].split(',');
				for (var j = 0; j < selectors.length; j++) {
					selectors[j] = '#' + demoElementId + ' ' + selectors[j];
				}
				cssRules[i] = selectors.join(',');
			}
			cssRules = cssRules.join('');

			// if <style id="liveCoding_9999"> doesn't exist, create it
			var styleElement = document.getElementById('liveCoding_' + demoElementId);
			if (styleElement === null) {
				styleElement = document.createElement('style');
				styleElement.setAttribute('id','liveCoding_' + demoElementId);
				insertAfter(demoElement, styleElement);
			}
			styleElement.innerHTML = cssRules;

		// else, if it's markup (HTML, SVG, XML...)
		} else if (isMarkup) {
			// replace content 
			demoElement.innerHTML = codeElement.innerText;
		}
		
		function hasAtLeastOneClass(element, classList) {
			for (var i=0; i<classList.length; i++) {
				if (element.classList.contains(classList[i])) {
					return true;
				}
			}
			return false;
		}
		
		function insertAfter(referenceNode, newNode) {
			referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
		}
	}

})();
