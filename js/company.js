var aLi=$("header li"),
	aCh=$(".choose"),
	aRev=$(".rev_list"),
	aMain=$(".ch_main");
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
			aMain[i].style.display="none";
		}
		aMain[this.index].style.display="block";
	}
}