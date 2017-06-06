var aCt=$(".tab"),
	aCe=$(".chance");
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
console.log(123);