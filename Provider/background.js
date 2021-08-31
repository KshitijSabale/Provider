console.log('1');

ultimate =()=>{
    window.onload= ()=>{
    let tog =[];
    chrome.storage.sync.get(["togg"], function (obj) {
        if (obj.togg) {
            tog = obj.togg;
            console.log(tog);
            let title =  document.querySelectorAll('h1.title.style-scope.ytd-video-primary-info-renderer')[0].innerText;
            title = title.trim();
            title = title.toLowerCase();
            let descript = document.getElementById('description').innerText;
            descript = descript.trim();
            descript = descript.toLowerCase();
            let channel =  document.querySelectorAll('ytd-channel-name#channel-name')[0].innerText;
            console.log(channel);
            channel = channel.trim();
            channel = channel.toLowerCase();
            if(tog[4]){
                console.log("entered tog4");
                let lst=[];
                let flag = false ;
                let ind = -1;
                chrome.storage.sync.get(['key4'], function(obj) {
                    if(obj.key4){
                        lst = obj.key4 ;
                        function check(str,lst){
                            if(lst){
                                for(let i=0;i<lst.length;i++){
                                    ind = str.search(lst[i].toLowerCase());
                                    if(ind>=0){flag=true;break;}
                                }
                            }
                        }
                        check(channel,lst);
                        if(flag) console.log('BlockChannel injected');
                        if(flag) document.body.innerHTML = '<h1> <strong>Please Study</strong>  </h1>';
                    }
                });
                if(flag) return ;
            }
            if(tog[2]){
                console.log("entered tog2");
                let lst=[];
                let flag = false ;
                let ind = -1;
                chrome.storage.sync.get(['key2'], function(obj) {
                    if(obj.key2){
                        lst = obj.key2 ;
                        function check(str,lst){
                            if(lst){
                                for(let i=0;i<lst.length;i++){
                                    ind = str.search(lst[i].toLowerCase());
                                    if(ind>=0){flag=true;break;}
                                }
                            }
                        }
                        check(title,lst);
                        check(descript,lst);
                        if(flag) console.log('BlockWord injected');
                        if(flag) document.body.innerHTML = '<h1> <strong>Please Study</strong>  </h1>';
                    }    
                });
                if(flag) return ;
            }
            if(tog[1] && tog[3]){
                console.log("entered tog1 and tog3");
                let lst1=[];
                let flag1 = false ;
                let ind1 = -1;
                chrome.storage.sync.get(['key1'], function(obj) {
                    if(obj.key1){
                        lst1 = obj.key1 ;
                        function check(str,lst){
                            if(lst){
                                for(let i=0;i<lst.length;i++){
                                    ind1 = str.search(lst[i].toLowerCase());
                                    if(ind1>=0){flag1=true;break;}
                                }
                            }
                        }
                        check(title,lst1);
                        check(descript,lst1);
                    }    
                });
                let lst2=[];
                let flag2 = false ;
                let ind2 = -1;
                chrome.storage.sync.get(['key3'], function(obj) {
                    if(obj.key3){
                        lst2 = obj.key3 ;
                        function check(str,lst){
                            if(lst){
                                for(let i=0;i<lst.length;i++){
                                    ind2= str.search(lst[i].toLowerCase());
                                    if(ind2>=0){flag2=true;break;}
                                }
                            }
                        }
                        check(channel,lst2);
                    }    
                });
                if(!(flag1 && flag2))console.log('UnBlock Channel and Word injected');
                if(flag1 && flag2) return ;
                else document.body.innerHTML = '<h1> <strong>Please Study</strong>  </h1>';
            }
            if(tog[1]){
                console.log("entered tog1");
                let lst=[];
                let flag = false ;
                let ind = -1;
                chrome.storage.sync.get(['key1'], function(obj) {
                    if(obj.key1){
                        lst = obj.key1 ;
                        function check(str,lst){
                            if(lst){
                                for(let i=0;i<lst.length;i++){
                                    ind = str.search(lst[i].toLowerCase());
                                    if(ind>=0){flag=true;break;}
                                }
                            }
                        }
                        check(title,lst);
                        check(descript,lst);
                        if(!flag) console.log('UnBlockWord injected');
                        if(!flag) document.body.innerHTML = '<h1> <strong>Please Study</strong>  </h1>';
                    }    
                });
                if(flag) return ;
            }
            if(tog[3]){
                console.log("entered tog3");
                let lst=[];
                let flag = false ;
                let ind = -1;
                chrome.storage.sync.get(['key3'], function(obj) {
                    if(obj.key3){
                        lst = obj.key3 ;
                        function check(str,lst){
                            if(lst){
                                for(let i=0;i<lst.length;i++){
                                    ind = str.search(lst[i].toLowerCase());
                                    if(ind>=0){flag=true;break;}
                                }
                            }
                        }
                        check(channel,lst);
                        if(!flag) console.log('UnBlockChannel injected');
                        if(!flag) document.body.innerHTML = '<h1> <strong>Please Study</strong>  </h1>';
                    }    
                });
                if(flag) return ;
            }
            console.log(tog);
            console.log("finished");
        }
    });

    
}
}



chrome.tabs.onActivated.addListener((activeInfo)=>{
    if(activeInfo.tabId ){
        chrome.tabs.get(activeInfo.tabId,(tab)=>{
            let urll = tab.url;
            urll = urll.split('?')[0];
            console.log(urll);
            if(urll==="https://www.youtube.com/watch"){
                console.log("onActivated injected contentScript");
                // chrome.scripting.executeScript(
                // {
                //     target: {tabId: activeInfo.tabId},
                //     func: ultimate,
                //     // files:['content_script.js'],
                // });
                chrome.tabs.reload(activeInfo.tabId);
            }
        });
    }
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
    // console.log(changeInfo);
    if(tab.active && changeInfo.title && tab.status ==="complete")
        console.log(changeInfo.title);
    if (tab.active && changeInfo.title) {
        let curUrl = tab.url.split('?')[0];
        if (curUrl==="https://www.youtube.com/watch") {
            console.log("onUpdated injected contentScript");    
            chrome.scripting.executeScript(
            {
                target: {tabId: tabId},
                func: ultimate,
            });
            // chrome.tabs.reload(tabId);
        }
    }
});


chrome.webNavigation.onCommitted.addListener((details) => {
    if (["reload", "link", "typed", "generated"].includes(details.transitionType) ) {
        console.log(details);
        chrome.webNavigation.onCompleted.addListener(function onComplete() {
            let urll = details.url;
            urll = urll.split('?')[0];
            if(urll==="https://www.youtube.com/watch"){
                console.log("webNavigation injected contentScript");    
                chrome.scripting.executeScript(
                    {
                        target: {tabId: details.tabId},
                        func: ultimate,
                        // files:['content_script.js'],
                    });
                }
            chrome.webNavigation.onCompleted.removeListener(onComplete);
        });
    }
});



// if(tog[1]){
//     console.log('UnBlockWords injected');
//     chrome.storage.sync.get(['key1'], function(obj) {
//     if(obj.key1){
//         lst[1] = obj.key1 ;
//     }
//     let ind = -1;
//     function check(str,lst){
//         if(lst){
//             for(let i=0;i<lst.length;i++){
//                 ind = str.search(lst[i].toLowerCase());
//                 if(ind>=0){flag[1]=true;break;}
//             }
//         }
//     }
//     check(title,lst[1]);
//     check(descript,lst[1]);
//     console.log(flag);   
//     });
// }

// filters = () =>{
//     let tog =[];
//     chrome.storage.sync.get(["togg"], function (obj) {
//         if (obj.togg) {
//             tog = obj.togg;
//         }
//     });
//     UnBlockWords = ()=>{
//         if(tog[1]){
//         console.log('UnBlockWords injected');
//         function doit(){
//             let title =  document.querySelectorAll('h1.title.style-scope.ytd-video-primary-info-renderer')[0].innerText;
//             title = title.trim();
//             title = title.toLowerCase();
//             let descript = document.getElementById('description').innerText;
//             descript = descript.trim();
//             descript = descript.toLowerCase();
            
//             lst = [];
//             chrome.storage.sync.get(['key1'], function(obj) {
//                 if(obj.key1){
//                     lst = obj.key1 ;
//                 }
//                 let flag = false ;
//                 let ind = -1;
//                 function check(str,lst){
//                     if(lst){
//                         for(let i=0;i<lst.length;i++){
//                             ind = str.search(lst[i].toLowerCase());
//                             if(ind>=0){flag=true;break;}
//                         }
//                     }
//                 }
//                 check(title,lst);
//                 check(descript,lst);
//                 console.log(flag);
//                 if(!flag) document.body.innerHTML = '<h1> <strong>Please Study</strong>  </h1>';
                
//             },()=>{
//                 BlockWords();
//             });
//         }
//         setTimeout(()=>{
//             doit();
//         }, 10000);
//         }else{
//             BlockWords();
//         }
//     }
    
//     BlockWords = ()=>{
//         if(tog[2]){
//         console.log('BlockWords injected');
//         function doit(){
//             let title =  document.querySelectorAll('ytd-channel-name#channel-name')[0].innerText;
//             title = title.trim();
//             title = title.toLowerCase();
//             let descript = document.getElementById('description').innerText;
//             descript = descript.trim();
//             descript = descript.toLowerCase();
//             lst = [];
//             chrome.storage.sync.get(['key2'], function(obj) {
//                 if(obj.key2){
//                     lst = obj.key2 ;
//                 }
//                 let flag = false ;
//                 let ind = -1;
//                 function check(str,lst){
//                     if(lst){
//                         for(let i=0;i<lst.length;i++){
//                             ind = str.search(lst[i].toLowerCase());
//                             if(ind>=0){flag=true;break;}
//                         }
//                     }
//                 }
//                 check(title,lst);
//                 check(descript,lst);
//                 console.log(flag);
//                 if(flag) document.body.innerHTML = '<h1> <strong>Please Study</strong>  </h1>';
//                 UnBlockChannels();
//             },()=>{
//                 UnBlockChannels();
//             });
//         }
//         setTimeout(()=>{
//             doit();
            
//         }, 10000);
//         }else{
//             UnBlockChannels();
//         }
//     }
    
//     UnBlockChannels = ()=>{
//         if(tog[3]){
//         console.log('UnBlockChannels injected');
//         function doit(){
//             let channel =  document.querySelectorAll('ytd-channel-name#channel-name')[0].innerText;
//             console.log(channel);
//             channel = channel.trim();
//             channel = channel.toLowerCase();
//             // let descript = document.getElementById('description').innerText;
//             // descript = descript.trim();
//             // descript = descript.toLowerCase();
//             // lst = [];
//             chrome.storage.sync.get(['key3'], function(obj) {
//                 if(obj.key3){
//                     lst = obj.key3 ;
//                 }
//                 let flag = false ;
//                 let ind = -1;
//                 function check(str,lst){
//                     if(lst){
//                         for(let i=0;i<lst.length;i++){
//                             ind = str.search(lst[i].toLowerCase());
//                             if(ind>=0){flag=true;break;}
//                         }
//                     }
//                 }
//                 check(title,lst);
//                 // check(descript,lst);
//                 console.log(flag);
//                 if(!flag) document.body.innerHTML = '<h1> <strong>Please Study</strong>  </h1>';
                
//             },()=>{
//                 BlockChannels();
//             });
//         }
//         setTimeout(()=>{
//             doit();
//         }, 10000);
//         }else{
//             BlockChannels();
//         }
//     }
    
//     BlockChannels = ()=>{
//         if(tog[4]){
//         console.log('BlockChannels injected');
//         function doit(){
//             let channel =  document.querySelectorAll('ytd-channel-name.style-scope ytd-video-owner-renderer')[0].innerText;
//             console.log(channel);
//             channel = channel.trim();
//             channel = channel.toLowerCase();
//             // let descript = document.getElementById('description').innerText;
//             // descript = descript.trim();
//             // descript = descript.toLowerCase();
//             // lst = [];
//             chrome.storage.sync.get(['key4'], function(obj) {
//                 if(obj.key4){
//                     lst = obj.key4 ;
//                 }
//                 let flag = false ;
//                 let ind = -1;
//                 function check(str,lst){
//                     if(lst){
//                         for(let i=0;i<lst.length;i++){
//                             ind = str.search(lst[i].toLowerCase());
//                             if(ind>=0){flag=true;break;}
//                         }
//                     }
//                 }
//                 check(title,lst);
//                 // check(descript,lst);
//                 console.log(flag);
//                 if(flag) document.body.innerHTML = '<h1> <strong>Please Study</strong>  </h1>';
//             });
//         }
//         setTimeout(()=>{
//             doit();
//         }, 10000);
//         }
//     }
//     UnBlockWords();
// }



    
    











