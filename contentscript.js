var z_u = $('#UserName');
var z_p = $('#PassWord');
var z_b = $('.login-an');

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.action == "send") {
            var zz = request.keyword.split(';');
            z_u.focus();
            z_u.val(zz[0]);
            z_u.blur();
            z_p.val(zz[1]);
            sendResponse({state:'填写成功！'});
        }
        if (request.action == "submit") {
            z_b.click();
            sendResponse({state:'提交成功！'});
        }
    }
);
