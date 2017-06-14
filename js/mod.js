var jobFairData={
	"jofaiId": 0
}
var jofaiEnterInfoId=1,
	cuurentPage=1,
	pagesize=3, 
	urlHref=window.location.href,
	guid="RuMJ18Oc0kEv39vVlQjhFKNeodYYDujA";

function turnMoth(month){
	switch (month) {
	case "一月":
		month = "01";
		break
	case "二月":
		month = "02";
		break
	case "三月":
		month = "03";
		break
	case "四月":
		month = "04";
		break
	case "五月":
		month = "05";
		break
	case "六月":
		month = "06";
		break
	case "七月":
		month = "07";
		break
	case "八月":
		month = "08";
		break
	case "九月":
		month = "09";
		break
	case "十月":
		month = "10";
		break
	case "十一月":
		month = "11";
		break
	case "十二月":
		month = "12";
		break
	case "Jan":
		month = "01";
		break	
	case "Feb":
		month = "02";
		break	
	case "Mar":
		month = "03";
		break
	case "Apr":
		month = "04";
		break
	case "May":
		month = "05";
		break	
	case "Jun":
		month = "06";
		break	
	case "June":
		month = "06";
		break
	case "Jul":
		month = "07";
		break
	case "Aug":
		month = "08";
		break	
	case "Sep":
		month = "09";
		break	
	case "Oct":
		month = "10";
		break
	case "Nov":
		month = "11";
		break	
	case "Dec":
		month = "12";
		break
	default:
	}
	return month;
}
function show(num){
	var $id=num.jofaiId,$date=num.jofaiDate,$start=num.jofaiStartime,$end=num.jofaiEndtime,$type=num.jofaiType,$statu=num.jofaiStatus,$major=num.jofaiMajors,$person=num.jofaiPersons,$location=num.jofaiLocation;
	console.log($id,$date,$start,$end)
	var a=$date.split(",")[0].trim().split(" ")[0].trim(),
		b=$date.split(",")[0].trim().split(" ")[1].trim(),
		c=$date.split(",")[1].trim(),
		d=c+"-"+this.turnMoth(a)+"-"+b,
		e=$start.split(" ")[3].trim(),
		f=$end.split(" ")[3].trim();
	var type = $type ? "宣讲会" : "供需会",
		statu = $statu ? "申请" : "通过";
	var $el=$(".jofai_list");
		$el.append("<div class=\"el fair jobfair\">"
					+"<span class=\"t1\">"+d+"</span>"
					+"<span class=\"t2\">"+e+"</span>"
					+"<span class=\"t3\">"+f+"</span>"
					+"<span class=\"t4\">"+type+"</span>"
					+"<span class=\"t5\">"+statu+"</span>"
					+"<span class=\"t6\">"+$major+"</span>"
					+"<span class=\"t7\">"+$person+"</span>"
					+"<span class=\"t8\">"+$location+"</span>"
					+"<input style='display:none' value="+$id+">"
					+"<span class=\"t9\" value='修改'><a>"+"修改"+"</a></span>"
					+"</div>");
		// mod_jobfair()
}
// function mod_jobfair(){
	
	var $cl=$(".jofai_list .t9"),
		$fair=$(".jobfair");
	console.log($cl.length);
	for(var i=0;i<$cl.length;i++){
		$cl[i].click(function(){
			
		})
	}
// 初始数据
$.ajax({
		url : 'http://192.168.1.139:8080/SchoolMatesSystem/jofai/getJobfair',
		async : false,
		data : {
			"jofaiEnterInfoId":jofaiEnterInfoId,
		    "cuurentPage":cuurentPage,
		    "pagesize":pagesize,
		    "guid":guid,
		},
		type : 'post',
		success : function(data) {
			var json= JSON.parse(data);
			if (json.code == 200) {
				var list = json.data;
				// console.log(list);
				if (list.length > 0) {
					// $('#proExpPreview_id div:first').empty();
					for (var i = 0; i < list.length; i++) {
						jobFairData = list[i];
						show(jobFairData);
						var x=jobFairData.jofaiId;
						console.log("这里"+i,x);
						// mod_jobfair(x)
						// var att=$(".job_fair .jofai_list .t9");
						
						// console.log(x)
						// createFirstDiv(projectExperience);
					}
				}
			}else if(json.code==404){
				// $("#proExpPreview_id div:first").empty();
				// createPreOEmptyDiv();
				// $("#proExpPreview_id").css("display","block");
			}
		},
		error : function() {
			alert("访问服务器失败！");
		},
	})


//保存
$(".job_fair .save").click(function(){
		var month=$(".job_fair .first .getMonth").val(),
			day=$(".job_fair .first .getData").val();
		jobFairData.jofaiId=$(".job_fair .jofai_list input").val();
		jobFairData.jofaiDate=("2017/"+month+"/"+day).trim();
		//都改成年月日
		jobFairData.jofaiStartime=$(".job_fair .second input").val();
		jobFairData.jofaiEndtime=$(".job_fair .third input").val();
		jobFairData.jofaiMajors=$(".job_fair .fifth input").val();
		jobFairData.jofaiPersons=$(".job_fair .sixth input").val();
		jobFairData.jofaiType=$(".job_fair .fourth .xuan").val()=="宣讲会" ? 1 :0;
		$.ajax({
			url:"http://192.168.1.139:8080/SchoolMatesSystem/jofai/savejofai",
			async : false,
			data:jobFairData,
			type:'post',
			success: function(data){
				var jsonMap = JSON.parse(data);
					if (jsonMap.code == 200) {
						alert("成功");
					}
			},
			error : function(){
				alert("访问服务器失败！")
			}

		})
		console.log(jobFairData.jofaiDate,jobFairData.jofaiStartime,jobFairData.jofaiEndtime,jobFairData.jofaiMajors,jobFairData.jofaiDate,jobFairData.jofaiPersons)
})

$.ajax({
	url:"http://192.168.1.139:8080/SchoolMatesSystem/jofai/updateJobfair",
	type:"post",
	dataType:"JSON",
	data:{
		"jofaiEnterInfoId":jofaiEnterInfoId,
	    "cuurentPage":cuurentPage,
	    "pagesize":pagesize,
	    "guid":guid,
	}
}).done(function(data){
	console.log("修改成功！");
})

$.ajax({
	url:"http://192.168.1.139:8080/SchoolMatesSystem/jofai/getJobfair",
	type:"post",
	dataType:"JSON",
	data:{
		"jofaiEnterInfoId":jofaiEnterInfoId,
	    "cuurentPage":cuurentPage,
	    "pagesize":pagesize,
	    "guid":guid,
	}
}).done(function(data){
	console.log(data);
})