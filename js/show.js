$.fn.extend({
	myMethod : function(num){
		
		_data=num.data;
		// _this=this;
		
		this.show(_data);
	},
	turnMoth : function(month){
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
	},
	show : function(arr){
		for(var i=0;i<arr.length;i++){
			var $date=arr[i].jofaiDate,$start=arr[i].jofaiStartime,$end=arr[i].jofaiEndtime,$type=arr[i].jofaiType,$statu=arr[i].jofaiStatus,$major=arr[i].jofaiMajors,$person=arr[i].jofaiPersons,$location=arr[i].jofaiLocation;
			var a=$date.split(",")[0].trim().split(" ")[0].trim(),
				b=$date.split(",")[0].trim().split(" ")[1].trim(),
				c=$date.split(",")[1].trim(),
				d=c+"-"+this.turnMoth(a)+"-"+b,
				e=$start.split(" ")[3].trim(),
				f=$end.split(" ")[3].trim();
			var type = $type ? "宣讲会" : "供需会",
				statu = $statu ? "申请" : "通过";
			// console.log(arr[0].jofaiDate,arr[1].jofaiDate,arr[2].jofaiDate);
			// var $cl=$(".jofai_list .t9"),
			// 	$fair=$(".jobfair");
			// 	$cl[i].index=i;
			// $cl[i].onclick=function(){
			// 	console.log("这是"+this.index);
			// 	$fair[this.index].querySelector("span.t5").innerText==" ";
			// }
				// console.log(l);
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
						+"<span class=\"t9\"><a>"+"修改"+"</a></span>"
						+"</div>")
			
			
		}
	}
})
var jofaiEnterInfoId=1,
	cuurentPage=1,
	pagesize=1, 
	urlHref=window.location.href,
	guid="RuMJ18Oc0kEv39vVlQjhFKNeodYYDujA"; //urlHref.split("#")[1];
$.ajax({
	type:"post",
	// url:"http://192.168.1.140:8080/SchoolMatesSystem/JobFairView/getallEnterJofai",
	url:"http://192.168.1.139:8080/SchoolMatesSystem/jofai/getJobfair",
	dataType:"JSON",
	data:{
		// "pageSize":3,
		// "currentPage":1
		"jofaiEnterInfoId":jofaiEnterInfoId,
	    "cuurentPage":cuurentPage,
	    "pagesize":pagesize,
	    "guid":guid,
	}
}).done(function(data){
	console.log(data);
	$("body").myMethod(data);
})
