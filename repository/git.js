const $ = id => document.getElementById(id);


window.addEventListener('hashchange', function(e) {
if(e.oldURL.replace("https://console.krios.studio/repository/#", '').replace($('repository').innerHTML+"/","") ===  ""){
 console.log("m")
}
  else{
    console.log(e.oldURL.replace("https://console.krios.studio/repository/#", '').replace($('repository').innerHTML+"/",""));
    
if(e.oldURL.replace("https://console.krios.studio/repository/#", '').replace($('repository').innerHTML+"/","") === $('repository').innerHTML){
  console.log("same name")
}
    else{
      $(e.oldURL.replace("https://console.krios.studio/repository/#", '').replace($('repository').innerHTML+"/","")).style.background="none";  
    }
    
  }
  
var hash = window.location.hash.replace(/#/g, '').replace($('repository').innerHTML+"/","");
  $("filepath").innerHTML= "~/"+hash;
  $("filename").innerHTML= hash.split("/")[hash.split("/").length - 1];
  
 
read(hash)
});






let oid;
  let worker = new Worker("./worker.js");
  const portal = new MagicPortal(worker);
  // worker.addEventListener("message", ({ data }) => console.log(data));

  const mainThread = {

    async progress(evt) {
      
      if(evt.loaded === evt.total){

  
       document.getElementsByClassName("loader")[0].style.display = "none";
         document.getElementsByClassName("loader")[1].style.display = "none";
       
      }
      else{
        if(evt.total === undefined){

       document.getElementsByClassName("loader")[0].style.display = "block";
         document.getElementsByClassName("loader")[1].style.display = "block";
       
        }
        else{

       
        }
        
        
      }
      
      return;
    },
    async fill(url) {
      let username = window.prompt("Username:");
      let password = window.prompt("Password:");
      return { username, password };
    },
    async rejected({ url, auth }) {
      window.alert("Authentication rejected");
      return;
    }
  };
  portal.set("mainThread", mainThread, {
    void: ["print", "progress", "rejected"]
  });

  async function doCloneAndStuff() {
    // $("log").textContent = "CLONE:\n";

    await workerThread.setDir("/");

    await workerThread.clone({
      corsProxy: "https://cors.isomorphic-git.org",
      url: "https://git.krios.studio/"+$("repository").innerHTML
    });

    let branches = await workerThread.listBranches({ remote: "origin" });


let commits = await workerThread.log({});
commits.forEach(function(commit){
if (oid === undefined){
  oid = commit.oid;
  document.cookie = "oid="+oid;
}
else{}});

  var obj={"files":{}}  
    
    let files = await workerThread.listFiles({});

  let image = "https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@master/icons/";
function addfile(file){
  if(document.getElementById(file.split("/")[0])){}
  else{
    if (file.split("/").length > 1){
         document.getElementById("mainForm").innerHTML += `
  <input
        type="hidden"
        name="project[files][${file.split("/")[0]}]"
        
      />
  `
    $("files").innerHTML +=  `<div data-tippy="${file}"  id="${file.split("/")[0]}" class="file-container" onclick="window.location.hash='${$("repository").innerHTML+"/"+file.split("/")[0]}'">
<div class="file-inner-container"><img src="https://codesandbox.io/static/media/folderOpen.6913563c.svg" onerror="this.onerror=null;this.src='https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@master/icons/file.svg';"
/>${file.split("/")[0]}</div></div>`
  }
  else{
       document.getElementById("mainForm").innerHTML += `
  <input
        type="hidden"
        name="project[files][${file.split("/")[0]}]"
        
      />
  `
    $("files").innerHTML +=  `<div data-tippy="${file}" id="${file.split("/")[0]}" class="file-container" onclick="window.location.hash='${$("repository").innerHTML+"/"+file.split("/")[0]}'">
<div class="file-inner-container"><img src="${image + file.split('.')[file.split('.').length -1]+'.svg'}" onerror="this.onerror=null;this.src='https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@master/icons/file.svg';"
/>${file.split("/")[0]}</div></div>`
  }
  }
  


    }
    
files.forEach(file => 
 addfile(file)
);
     var hash = window.location.hash.replace(/#/g, '').replace($('repository').innerHTML+"/","");

    if(hash === $('repository').innerHTML){
      
       var oid = getCookie("oid");

    await workerThread.setDir("/");
try{
      let read = await workerThread.read({
      oid:oid,
      filepath:"README.md",
    });
  var enc = new TextDecoder("utf-8");
  document.getElementById('container').style.display="none";
     document.getElementById('markdown-container').style.display="flex";
  document.getElementById('markdown').innerHTML =
      marked.parse(enc.decode(read.blob));
}
      catch(e){
   //       document.getElementById('container').style.display="block";
   // change_value(e)
      }

      
    }
    else{
 $("filepath").innerHTML= "~/"+hash;
  $("filename").innerHTML= hash.split("/")[hash.split("/").length - 1];
   
      if(hash !== ""){read(hash);console.log(hash)}
    }
    
  }

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


 async function read(filepath) {
   document.getElementById('markdown-container').style.display="none";
   document.getElementById('container').style.display="flex";
    var oid = getCookie("oid");

    await workerThread.setDir("/");
try{
      let read = await workerThread.read({
      oid:oid,
      filepath:filepath,
    });
var enc = new TextDecoder("utf-8");
change_value(enc.decode(read.blob));
}
   catch(e){
      change_value(e)
   }
  
   
  }
function close_file_content(){
  document.getElementById('file_content').className = 'file_content';
}
  (async () => {
    const workerThread = await portal.get("workerThread");
var z = window.location.hash.replace(/#/g, '');
var user = z.split('/')[0];
var name = z.split('/')[1];
$("repository").innerHTML = user+"/"+name;
$("file-photo").src="https://avatars.dicebear.com/api/personas/"+ user+name+".svg?background=%231f292e";
 window.workerThread = workerThread;
window.worker = worker;
       
 doCloneAndStuff();

  })();
