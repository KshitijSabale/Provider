window.onload= ()=>{
    console.log('UnblockWords injected');
    function doit(){
        let title =  document.querySelectorAll('h1.title.style-scope.ytd-video-primary-info-renderer')[0].innerText;
        title = title.trim();
        title = title.toLowerCase();
        let descript = document.getElementById('description').innerText;
        descript = descript.trim();
        descript = descript.toLowerCase();
        lst = [];
        chrome.storage.sync.get(['key1'], function(obj) {
            if(obj.key1){
                lst = obj.key1 ;
            }
            let flag = false ;
            let ind = -1;
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
            console.log(flag);
            if(!flag) document.body.innerHTML = '<h1> <strong>Please Study</strong>  </h1>';
        });
    }
    setTimeout(()=>{
        doit();
    }, 3000);
}


