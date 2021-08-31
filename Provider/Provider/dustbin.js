
//    <!-- Optional JavaScript -->
//    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
//    <!-- <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
//    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
//    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script> -->
 

// console.log("start");

// console.log('background script injected');
    // chrome.tabs.query({active: true, currentWindow: true}).then(([tab]) => {
            // chrome.scripting.executeScript(
            // {
            // target: {tabId: tab.id},
            // files: ['content_script.js'],
            // });
    //     })
// chrome.tabs.onActivated.addListener( ()=>{
//     chrome.tabs.query({active: true, currentWindow: true}).then(([tab]) => {
//          chrome.scripting.executeScript(
//           {
//             target: {tabId: tab.id},
//             files: ['content_script.js'],
//           });
//         console.log('background script injected');
//       })
// });
// chrome.tabs.onUpdated.addListener( ()=>{
//     chrome.tabs.query({active: true, currentWindow: true}).then(([tab]) => {
//          chrome.scripting.executeScript(
//           {
//             target: {tabId: tab.id},
//             files: ['content_script.js'],
//           });
//         console.log('background script injected');
//       })
// });
// throw new Error("lol");
// console.log("end");
// chrome.browserAction.onClicked.addListener(()=>{
// chrome.tabs.executeScript(null,{code: 'demo.js' });
// });




// {
//     "manifest_version": 3,
//     "name": "Provider",
//     "version": "1.0",
//     "background": {
//       "service_worker": "background.js"
//     },
//     "description": "Prevents You From wasting time on youtube ",
//     "icons": {
//         "16": "icon16.png",
//         "48": "icon48.png",
//         "128": "icon128.png"
//     },

//     "action": {
//     "default_title": "Provider",
//     "default_popup": "popup.html"
//     },
//     "permissions": [
//         "storage",
//         "tabs",
//         "scripting"
//       ],
    //   "content_security_policy": {
    //     "extension_pages": "script-src 'self'; object-src 'self'; script-src-elem 'self' 'unsafe-inline'  https://maxcdn.bootstrapcdn.com;"
    //   },
//     "content_scripts": [{
//         "matches":["https://www.youtube.com/*"],
//         "js":["content_script.js"],
//         "run_at":"document_end"    
//     }]
    
//   }





// document.addEventListener('DOMContentLoaded', (event) => {
//     //the event occurred
//     console.log(10101);
//     function doit(){
//         let title = document.querySelectorAll('h1.title.style-scope.ytd-video-primary-info-renderer')[0].innerText;
//         title = title.trim();
//         title = title.toLowerCase();
//         console.log(title);
//         lst = [];
//         chrome.storage.sync.get(['key'], function(obj) {
//             if(obj.key){
//                 lst = obj.key ;
//             }
//             let flag = false ;
//             let ind = -1;
//             function check(str,lst){
//                 console.log(lst);
//                 if(lst){
//                     for(let i=0;i<lst.length;i++){
//                         ind = str.search(lst[i].toLowerCase());
//                         console.log(ind);
//                         if(ind>=0){flag=true;break;}
//                     }
//                 }
//             }
//             check(title,lst);
//             console.log(flag);
//             if(!flag)
//                 document.body.innerHTML = '<h1> <strong>Please Study</strong>  </h1>';

//         });
        
//     }
//     doit();
// });
// document.getElementById('description').value



// Pick one (or none)
// "browser_action": {...},

// // Optional
// "background": {
//     // Recommended
//     "persistent": false,
//     // Optional
//     "service_worker": ...
// },
// "incognito": "not_allowed",
// "omnibox": {
//     "keyword": "aString"
// },
// "permissions": ["tabs"],