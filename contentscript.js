var z_u = $('#un-userName');
var z_p = $('#un-password');
var z_b = $('#un-login');

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
            z_b.submit();
            sendResponse({state:'提交成功！'});
        }
    }
);
