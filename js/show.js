$.fn.extend({
	myMethod : function(num){
		_data=num.data;
		// _this=this;


	},
	show : function(arr){
		for(var i=0;i<arr.length;i++){

			var $date=arr[i].jofaiDate,$start=arr[i].jofaiStartime,$end=arr[i].jofaiEndtime,$type=arr[i].jofaiType,$statu=arr[i].jofaiStatus,$major=arr[i].jofaiMajors,$person=arr[i].jofaiPersons,$location=arr[i].jofaiLocation;
			var $el=$(".el.fair.jobfair").eq(i);

		}
	}
})
console.log($(".el.fair.jobfair"))
$.ajax({
	type:"post",
	url:"http://192.168.1.140:8080/SchoolMatesSystem/JobFairView/getallEnterJofai",
	dataType:"JSON",
	data:{
		"pageSize":3,"currentPage":1
	}
}).done(function(data){
	console.log(data);
	console.log(data.data[0].enterInfoCmptyId);
})