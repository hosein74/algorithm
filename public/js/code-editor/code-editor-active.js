(function ($) {
 "use strict";
		var editor_one = CodeMirror.fromTextArea(document.getElementById("code1"), {
					 lineNumbers: true,
					 matchBrackets: true,
					 styleActiveLine: true,
					 theme:"ambiance"
				 });
})(jQuery); 