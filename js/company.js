var aLi=$("header li"),
	aCh=$(".choose"),
	aRev=$(".rev_list"),
	aMain=$(".ch_main"),
	aCt=$(".tab"),
	aCe=$(".chance");
for(var i=0;i<aLi.length;i++){
	aLi[i].index=i;
	aLi[i].onclick=function(){
		for(var i=0;i<aLi.length;i++){
			aLi[i].setAttribute("class","none");
			aCh[i].style.display="none";
		}
		this.setAttribute("class","active");
		aCh[this.index].style.display="block";
	}
}
console.log(1230);
// index
for(var i=0;i<aCt.length;i++){

		aCt[i].index=i;
		aCt[i].onclick=function(){
			for(var i=0;i<aCt.length;i++){
				aCt[i].setAttribute("class","tab");
				aCe[i].style.display="none";
			}
			this.setAttribute("class","act");
			aCe[this.index].style.display="block";

		}
	}
	$(".two").css("margin-left","-5px");
console.log(123044);
for(var i=0;i<aRev.length;i++){
	aRev[i].index=i;
	aRev[i].onclick=function(){
		for(var i=0;i<aRev.length;i++){
			aRev[i].setAttribute("class","rev_list")
			aMain[i].style.display="none";
		}
		this.setAttribute("class","rev_act")
		aMain[this.index].style.display="block";
	}
}
// console.log($(".pag li")[1])

// $.ajax({
//     type:"post",
//     url:"http://192.168.1.140:8080/SchoolMatesSystem/JobFairView/getallEnterJofai",
//     dataType:"JSON",
//     data:{"pageSize":1,"currentPage":1},
//     success:function (data) {
//         console.log(data);
//     },
//     error:function () {
//         console.log("失败");
//     }
// })