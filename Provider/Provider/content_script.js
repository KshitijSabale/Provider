call = ()=>{ultimate =()=>{
    let tog =[];
    chrome.storage.sync.get(["togg"], function (obj) {
        if (obj.togg) {
            tog = obj.togg;
            if(document.body.innerText === 'Please Study'){
                chrome.runtime.sendMessage({send: "reload"}, function(response) {
                    console.log(response.received);
                });
            }
            let title =  document.querySelectorAll('h1.title.style-scope.ytd-video-primary-info-renderer')[0].innerText;
            title = title.trim();
            title = title.toLowerCase();
            // console.log(title);
            let descript = document.querySelector("div#description.style-scope.ytd-video-secondary-info-renderer").innerText;
            descript = descript.trim();
            descript = descript.toLowerCase();
            // console.log(descript);
            let channel =  document.querySelectorAll('ytd-channel-name#channel-name')[0].innerText;
            if(channel===null)channel = document.querySelector('#container.style-scope ytd-channel-name').innerText;            
            channel = channel.trim();
            channel = channel.toLowerCase();
            // console.log(channel);
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
                        if(flag)document.body.innerHTML = '<h1> <strong style = "color : red;font-size: 24px;text-align:center">Please Study</strong>  </h1>';
                        if(flag) return ;
                    }
                });
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
                        if(flag) document.body.innerHTML = '<h1> <strong style = "color : red;font-size: 24px;text-align:center">Please Study</strong>  </h1>';
                    }    
                });
            }
            if(tog[1] && tog[3]){
                console.log("entered tog1 and tog3");
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
                                    console.log(ind);
                                    if(ind>=0){flag=true;return;}
                                }
                            }
                        }
                        check(title,lst);
                        check(descript,lst);
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
                                            console.log(ind);
                                            if(ind2>=0){flag2=true;return;}
                                        }
                                    }
                                }
                                check(channel,lst2);
                                console.log(flag);
                                console.log(flag2);
                                if(!(flag && flag2))console.log('UnBlock Channel and Word injected');
                                if(!(flag && flag2)) document.body.innerHTML = '<h1> <strong style = "color : red;font-size: 24px;text-align:center">Please Study</strong>  </h1>';
                            }    
                        });
                    }  
                });
            }
            if(tog[1]){
                console.log("entered tog1");
                let lst=[];
                let flag = false ;
                let ind = -1;
                chrome.storage.sync.get(['key1'], function(obj) {
                    // if(obj.key1){
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
                        if(!flag) document.body.innerHTML = '<h1> <strong style = "color : red;font-size: 24px;text-align:center">Please Study</strong>  </h1>';
                    // }    
                });
            }
            if(tog[3]){
                console.log("entered tog3");
                let lst=[];
                let flag = false ;
                let ind = -1;
                chrome.storage.sync.get(['key3'], function(obj) {
                    // console.log(obj.key3);
                    // if(obj.key3){
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
                        console.log(flag);
                        if(!flag) console.log('UnBlockChannel injected');
                        if(!flag) document.body.innerHTML = '<h1> <strong style = "color : red;font-size: 24px;text-align:center">Please Study</strong>  </h1>';
                    // }    
                });
            }
            // console.log(tog);
            console.log("finished");
        }
    });
}
setTimeout(()=>{
    ultimate();
}, 3000);
}
call();

