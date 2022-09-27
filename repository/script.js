function error(message){
  document.getElementById('error-container').innerHTML= message;
  document.getElementById('error-container').style.display="block";
  setTimeout(function(){
 document.getElementById('error-container').style.display="none";
}, 4000);//wait 2 seconds
}
function search_file(){
  let input = document.getElementById('search_file_value').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('file-container');
    for (i = 0; i < x.length; i++) { 
        if (!x[i].id.toLowerCase().includes(input)) {
            x[i].style.display="none";
          
        }
        else {
            x[i].style.display="flex";        
         
        }
    }
}
$(document).ready(function() {
		$('#material-tabs').each(function() {

				var $active, $content, $links = $(this).find('a');

				$active = $($links[0]);
				$active.addClass('active');

				$content = $($active[0].hash);

				$links.not($active).each(function() {
						$(this.hash).hide();
				});

				$(this).on('click', 'a', function(e) {

						$active.removeClass('active');
						$content.hide();

						$active = $(this);
						$content = $(this.hash);

						$active.addClass('active');
						$content.show();

						e.preventDefault();
				});
		});
});


require.config({ paths: { 'vs': 'https://unpkg.com/monaco-editor@0.8.3/min/vs' }});
window.MonacoEnvironment = { getWorkerUrl: () => proxy };

let proxy = URL.createObjectURL(new Blob([`
	self.MonacoEnvironment = {
		baseUrl: 'https://unpkg.com/monaco-editor@0.8.3/min/'
	};
	importScripts('https://unpkg.com/monaco-editor@0.8.3/min/vs/base/worker/workerMain.js');
`], { type: 'text/javascript' }));
let editor;

      function change_value(value){
        require(["vs/editor/editor.main"], function () {

const list = document.getElementById("container");
list.style.display="flex"
while (list.hasChildNodes()) {
  list.removeChild(list.firstChild);
}
	window.editor = monaco.editor.create(document.getElementById('container'), {
    value:value,
		language: 'text',
		theme: 'vs-light' ,
    minimap: {
		enabled: true
	}})
          
	})}




