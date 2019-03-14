var _isSubmiting = false;
$("#submit").click(function() {

	if(_isSubmiting == true) {
		alert("正在保存，请勿重复提交");
		return;
	}
	var namej = $(this).parent().find("input[name='name']");
	var emailj = $(this).parent().find("input[name='email']");
	var phoneJ = $(this).parent().find("input[name='phone']");
	var messageJ = $(this).parent().find("textarea[name='message']");
	var name = namej.val();
	var email = emailj.val();
	var phone = phoneJ.val();
	var message = messageJ.val();

	if(!name || !email || !phone || !message || !name.replace(/ /g, "") || !email.replace(/ /g, "") || !phone.replace(/ /g, "") || !message.replace(/ /g, "")) {
		alert("请填写完整信息哦");
		return;
	}
	var _message = "姓名：" + name + "</br>邮箱=" + email + "</br>手机号=" + phone + "</br>留言=" + message;
	//?token=gits-pages-contacts-me&website=Git主页数据提交&message=内容&time=20180723";
	var url = "https://api.jiangjiesheng.cn/"; //api.jiangjiesheng.cn/ 专用https转发一下同时处理跨域
	url += "service/mail/mailsender"; //jiangjiesheng.cn下的服务
	//ispost 转发的话就不会再加跨域头了
	//由于从腾讯云转发到阿里云，中间配置去掉域名和ip，导致post参数不能中转
	_isSubmiting = true;
	$.ajax({
		url: url,
		dataType: "json",
		data: {
			token: "gits-pages-contacts-me",
			website: "Git主页数据提交",
			message: _message,
			time: getNowFormatDate(),
			ispost: "true"
		},
		success: function(res) {
			_isSubmiting = false;
			if(res.code == 200) {
				namej.val(null);
				emailj.val(null);
				phoneJ.val(null);
				messageJ.val(null);
				setTimeout(function() {
					alert("提交成功!系统已经通知我了,稍后我会和您取得联系，谢谢！")
				}, 0);
				return;
			} else {
				alert("抱歉:提交失败!(" + res.message + ")");
			}
		},error:function(){
			_isSubmiting = false;
			alert("抱歉:提交失败!(服务器内部错误)");
		}
	});

	function getNowFormatDate() {
		var date = new Date();
		var seperator1 = "-";
		var seperator2 = ":";
		var month = date.getMonth() + 1;
		var strDate = date.getDate();
		if(month >= 1 && month <= 9) {
			month = "0" + month;
		}
		if(strDate >= 0 && strDate <= 9) {
			strDate = "0" + strDate;
		}
		var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
			" " + date.getHours() + seperator2 + date.getMinutes() +
			seperator2 + date.getSeconds();
		return currentdate;
	}

});