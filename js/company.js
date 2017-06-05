// console.log($("header li").length);
// console.log($(".choose"));
var aLi=$("header li");
var aCh=$(".choose");
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