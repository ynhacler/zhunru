
$(function(){
    var userInfo = {
        id:window.localStorage.getItem('id'),
        prePw:window.localStorage.getItem('prePw'),
        init:function(){
            /*
            if(!userInfo.id || !userInfo.prePw){
                window.localStorage.setItem('id',userInfo.id='');
                window.localStorage.setItem('prePw',userInfo.prePw='');
            }*/
            if(window.localStorage.length == 2){
                userInfo.id = window.localStorage.getItem('id');
                userInfo.prePw = window.localStorage.getItem('prePw');
            }
            $('#zhanghao').val(userInfo.id);
            $('#mimaqianzhui').val(userInfo.prePw);
        },
        Add:function(u,p){
            window.localStorage.setItem('id', u);
            window.localStorage.setItem('prePw', p);
        },
        Del:function(){
            window.localStorage.removeItem("id");
            window.localStorage.removeItem("prePw");
        },
    };
    userInfo.init();

    $('#btn1').click(function(){
        var u = $('#zhanghao').val();
        var p = $('#mimaqianzhui').val();
        userInfo.Add(u,p);
        userInfo.init();
    });

    var state = $('#state');
    $('#send').click(function () {//给对象绑定事件
        chrome.tabs.query({active:true, currentWindow:true}, function (tab) {//获取当前tab
            //向tab发送请求
            chrome.tabs.sendMessage(tab[0].id, { 
                action: "send",
                keyword: userInfo.id+";"+userInfo.prePw+$('#dynamic').val()
            }, function (response) {
                console.log(response);
                state.html(response.state)
            });
        });
    });
    $('#btn2').click(function () {
        chrome.tabs.query({active:true, currentWindow:true}, function (tab) {
            chrome.tabs.sendMessage(tab[0].id, {  
               action: "submit"   
            }, function (response) {
                state.html(response.state)
            });
        });
    });


})

/*
(function(){

    

    $account = $('un-userName');
    $prePassword = $('un-password');
    $btn = $('un-login');
    //alert($btn);

    //pop.html
    $p_zhanghao = $('zhanghao');
    $p_mimaqianzhui = $('mimaqianzhui');
    $p_btn1 = $('btn1');
    $p_dynamic = $('dynamic');
    $p_btn2 = $('btn2');
    alert($p_btn2);
})();

*/


/*
(function () {
    var $ = function (id) {
        return document.getElementById(id);
    };
    var Tasks = {
        show: function (obj) {
            obj.className = '';
            return this;
        },
        hide: function (obj) {
            obj.className = 'hide';
            return this;
        },
        $addNewItem: $('add-new-item'),
        $addNewItemInput: $('add-new-item-input'),
        $itemList: $('item-list'),
        $newItemTitle: $('new-item-title'),
        init: function () {
            //打开添加文本框
            Tasks.$addNewItem.addEventListener('click', function () {
                Tasks.show(Tasks.$addNewItemInput).hide(Tasks.$addNewItem);
                Tasks.$newItemTitle.focus();
            }, true);
            //回车添加任务
            Tasks.$newItemTitle.addEventListener('keyup', function (ev) {
                var ev = ev || window.event;
                if (ev.keyCode == 13) {
                    //TODO:写入本地数据
                    var task = Tasks.$newItemTitle.value;
                    Tasks.AppendHtml(task);
                    Tasks.$newItemTitle.value = '';
                    Tasks.hide(Tasks.$addNewItemInput).show(Tasks.$addNewItem);
                }
                ev.preventDefault();
            }, true);
            //取消添加
            Tasks.$newItemTitle.addEventListener('blur', function () {
                Tasks.$newItemTitle.value = '';
                Tasks.hide(Tasks.$addNewItemInput).show(Tasks.$addNewItem);
            }, true);
            //TODO 初始化数据，加载本地数据，生成html
        },
        //增加
        Add: function () {
            //TODO
        },
        //修改
        Edit: function () {
            //TODO
        },
        //删除
        Del: function () {
            //TODO
        },
        AppendHtml: function (title) {
            var oDiv = document.createElement('div');
            oDiv.className = 'item item-todo';
            var oInput = document.createElement('input');
            oInput.type = 'checkbox';
            var oTitle = document.createElement('span');
            oTitle.innerHTML = title;
            oDiv.appendChild(oInput);
            oDiv.appendChild(oTitle);
            Tasks.$itemList.appendChild(oDiv);
            oDiv.addEventListener('click', function () {
                //TODO
            }, true);
        },
        RemoveHtml: function () {
            //TODO
        }
    }
    Tasks.init();
})();

*/