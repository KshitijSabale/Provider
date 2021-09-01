window.onload = () => {

    let tog = [false, false, false, false, false];
    let list = [
        [],
        [],
        [],
        [],
        []
    ];
    reinject = () => {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function (tabs) {
            chrome.runtime.sendMessage({
                inject: "reinject",
                tabId: tabs[0].id
            }, function (response) {
                if (response.injected === "YES INJECTED")
                    console.log(response.injected);
            });
        });
    }

    // chrome.tabs.query({
    //     currentWindow: true,
    //     active: true
    // }, (tabs) => {
    //     chrome.tabs.reload(tabs[0].id);
    // });
    // console.log(tog);
    // console.log(list);

    chrome.storage.sync.get(null, function (obj) {
        console.log(obj);
    });

    document.getElementById("b1").addEventListener("click", add1);
    document.getElementById("c1").addEventListener("click", clearList1);
    document.getElementById("ul1").addEventListener("click", remove1);
    document.getElementById("b2").addEventListener("click", add2);
    document.getElementById("c2").addEventListener("click", clearList2);
    document.getElementById("ul2").addEventListener("click", remove2);
    document.getElementById("b3").addEventListener("click", add3);
    document.getElementById("c3").addEventListener("click", clearList3);
    document.getElementById("ul3").addEventListener("click", remove3);
    document.getElementById("b4").addEventListener("click", add4);
    document.getElementById("c4").addEventListener("click", clearList4);
    document.getElementById("ul4").addEventListener("click", remove4);
    document.getElementById("a1").addEventListener("click", toggle1);
    document.getElementById("a2").addEventListener("click", toggle2);
    document.getElementById("a3").addEventListener("click", toggle3);
    document.getElementById("a4").addEventListener("click", toggle4);

    chrome.storage.sync.get(["key1"], function (obj) {
        if (obj.key1) {
            list[1] = obj.key1;
            renderList1(list[1]);
        }
    });

    chrome.storage.sync.get(["togg"], function (obj) {
        if (obj.togg) {
            tog[1] = obj.togg[1];
            console.log(tog[1]);
            console.log(obj.togg[1]);
            togg1(list[1]);
        }
    });

    function renderList1(lst) {
        let lt = "";
        for (let i = 0; i < lst.length; i++) {
            lt += `<li value="${i}" >${lst[i]}</li>`;
        }
        if (lt) document.getElementById("ul1").innerHTML = lt;
        else document.getElementById("ul1").innerHTML = "Nothing Added Yet";
    }

    function togg1() {
        if (tog[1] !== false) {
            document.getElementById("a1").classList.add("btn-success");
        } else {
            document.getElementById("a1").classList.remove("btn-success");
            document.getElementById("a1").classList.add("btn");
        }
    }

    function togg4() {
        if (tog[4] !== false) {
            document.getElementById("a4").classList.add("btn-success");

        } else {
            document.getElementById("a4").classList.remove("btn-success");
            document.getElementById("a4").classList.add("btn");

        }
    }

    function togg2() {
        if (tog[2] !== false) {
            document.getElementById("a2").classList.add("btn-success");

        } else {
            document.getElementById("a2").classList.remove("btn-success");
            document.getElementById("a2").classList.add("btn");

        }
    }

    function togg3() {
        if (tog[3] !== false) {
            document.getElementById("a3").classList.add("btn-success");

        } else {
            document.getElementById("a3").classList.remove("btn-success");
            document.getElementById("a3").classList.add("btn");
            
        }
    }

    function toggle1() {
        if (tog[1] === false) {
            console.log("added1");
            document.getElementById("a1").classList.add("btn-success");
            tog[1] = true;
            chrome.storage.sync.set({
                togg: tog
            });
            reinject();
        } else {
            console.log("removed1");
            document.getElementById("a1").classList.remove("btn-success");
            document.getElementById("a1").classList.add("btn");
            tog[1] = false;
            chrome.storage.sync.set({
                togg: tog
            });
            reinject();
        }
    }

    function add1() {
        word = document.getElementById("w1");
        console.log(list[1]);
        if (word.value)
            list[1].push(word.value.trim());
        word.value = '';
        chrome.storage.sync.set({
            key1: list[1]
        }, () => {
            renderList1(list[1]);
            reinject();

        });
    }

    function remove1(e) {
        console.log("del");
        if (list[1].length) {
            list[1].splice(e.target.value, 1);
            chrome.storage.sync.set({
                key1: list[1]
            }, () => {
                renderList1(list[1]);
                reinject();

            });
        }
    }

    function clearList1() {
        console.log("del-all");
        chrome.storage.sync.remove('key1', () => {
            list[1] = [];
            renderList1(list[1]);
            reinject();
        });
    }



    
    chrome.storage.sync.get(["key2"], function (obj) {
        if (obj.key2) {
            list[2] = obj.key2;
            renderList2(list[2]);
        }
    });
    chrome.storage.sync.get(["togg"], function (obj) {
        if (obj.togg) {
            tog[2] = obj.togg[2];
            togg2(list[2]);
        }
    });

    function renderList2(lst) {
        let lt = "";
        for (let i = 0; i < lst.length; i++) {
            lt += `<li value="${i}" >${lst[i]}</li>`;
        }
        if (lt) document.getElementById("ul2").innerHTML = lt;
        else document.getElementById("ul2").innerHTML = "Nothing Added Yet";
    }

    function toggle2() {
        if (tog[2] === false) {
            console.log("added2");
            document.getElementById("a2").classList.add("btn-success");

            tog[2] = true;
            chrome.storage.sync.set({
                togg: tog
            });
            reinject();
        } else {
            console.log("removed2");
            document.getElementById("a2").classList.remove("btn-success");
            document.getElementById("a2").classList.add("btn");

            tog[2] = false;
            chrome.storage.sync.set({
                togg: tog
            });
            reinject();
        }

    }

    function add2() {
        word = document.getElementById("w2");
        console.log(list[2]);
        if (word.value)
            list[2].push(word.value.trim());
        word.value = '';
        chrome.storage.sync.set({
            key2: list[2]
        }, () => {
            renderList2(list[2]);
            reinject();

        });
    }

    function remove2(e) {
        console.log("del");
        if (list[2].length) {
            list[2].splice(e.target.value, 1);
            chrome.storage.sync.set({
                key2: list[2]
            }, () => {
                renderList2(list[2]);
                reinject();

            });
        }
    }

    function clearList2() {
        console.log("del-all");
        chrome.storage.sync.remove('key2', () => {
            list[2] = [];
            renderList2(list[2]);
            reinject();
        });
    }
    
    chrome.storage.sync.get(["key3"], function (obj) {
        if (obj.key3) {
            list[3] = obj.key3;
            renderList3(list[3]);
        }
    });
    chrome.storage.sync.get(["togg"], function (obj) {
        if (obj.togg) {
            tog[3] = obj.togg[3];
            togg3(list[3]);
        }
    });

    function renderList3(lst) {
        let lt = "";
        for (let i = 0; i < lst.length; i++) {
            lt += `<li value="${i}" >${lst[i]}</li>`;
        }
        if (lt) document.getElementById("ul3").innerHTML = lt;
        else document.getElementById("ul3").innerHTML = "Nothing Added Yet";
    }

    function toggle3() {
        if (tog[3] === false) {
            console.log("added3");
            document.getElementById("a3").classList.add("btn-success");
            
            tog[3] = true;
            chrome.storage.sync.set({
                togg: tog
            });
            reinject();
        } else {
            console.log("removed3");
            document.getElementById("a3").classList.remove("btn-success");
            document.getElementById("a3").classList.add("btn");
            tog[3] = false;
            chrome.storage.sync.set({
                togg: tog
            });
            reinject();
        }

    }

    function add3() {
        word = document.getElementById("w3");
        console.log(list[3]);
        if (word.value)
            list[3].push(word.value.trim());
        word.value = '';
        chrome.storage.sync.set({
            key3: list[3]
        }, () => {
            renderList3(list[3]);
            reinject();

        });
    }

    function remove3(e) {
        console.log("del");
        if (list[3].length) {
            list[3].splice(e.target.value, 1);
            chrome.storage.sync.set({
                key3: list[3]
            }, () => {
                renderList3(list[3]);
                reinject();

            });
        }
    }

    function clearList3() {
        console.log("del-all");
        chrome.storage.sync.remove('key3', () => {
            list[3] = [];
            renderList3(list[3]);
            reinject();
        });
    }

    
    chrome.storage.sync.get(["key4"], function (obj) {
        if (obj.key4) {
            list[4] = obj.key4;
            renderList4(list[4]);
        }
    });
    chrome.storage.sync.get(["togg"], function (obj) {
        if (obj.togg) {
            tog[4] = obj.togg[4];
            togg4(list[4]);
        }
    });

    function renderList4(lst) {
        let lt = "";
        for (let i = 0; i < lst.length; i++) {
            lt += `<li value="${i}" >${lst[i]}</li>`;
        }
        if (lt) document.getElementById("ul4").innerHTML = lt;
        else document.getElementById("ul4").innerHTML = "Nothing Added Yet";
    }

    function toggle4() {
        if (tog[4] === false) {
            console.log("added4");
            document.getElementById("a4").classList.add("btn-success");

            tog[4] = true;
            chrome.storage.sync.set({
                togg: tog
            });
            reinject();
        } else {
            console.log("removed4");
            document.getElementById("a4").classList.remove("btn-success");
            document.getElementById("a4").classList.add("btn");

            tog[4] = false;
            chrome.storage.sync.set({
                togg: tog
            });
            reinject();
        }

    }

    function add4() {
        word = document.getElementById("w4");
        console.log(list[4]);
        if (word.value)
            list[4].push(word.value.trim());
        word.value = '';
        chrome.storage.sync.set({
            key4: list[4]
        }, () => {
            renderList4(list[4]);
            reinject();

        });
    }

    function remove4(e) {
        console.log("del");
        if (list[4].length) {
            list[4].splice(e.target.value, 1);
            chrome.storage.sync.set({
                key4: list[4]
            }, () => {
                renderList4(list[4]);
                reinject();

            });
        }
    }

    function clearList4() {
        console.log("del-all");
        chrome.storage.sync.remove('key4', () => {
            list[4] = [];
            renderList4(list[4]);
            reinject();
        });
    }
}