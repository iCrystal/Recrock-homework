window.onload=function(){
	var oSea1=document.querySelector("#sea1");
	var oSearch1=document.querySelector("#search1");
	var oShow1=document.querySelector("#show1");
	oSea1.addEventListener('mouseover',function(){
		oSearch1.style.display="block";
		oShow1.style.display="block";
		oSea1.style.opacity="1";

	});
	oSea1.addEventListener('mouseout',function(){
		oSearch1.style.display="none";
		oShow1.style.display="none";
		oSea1.style.opacity="0.7";
	});
	var oSea2=document.querySelector("#sea2");
	var oSearch2=document.querySelector("#search2");
	var oShow2=document.querySelector("#show2");
	oSea2.addEventListener('mouseover',function(){
		oSearch2.style.display="block";
		oShow2.style.display="block";
		oSea2.style.opacity="1";
	});
	oSea2.addEventListener('mouseout',function(){
		oSearch2.style.display="none";
		oShow2.style.display="none";
		oSea2.style.opacity="0.7";
	});
	var oSea3=document.querySelector("#sea3");
	var oSearch3=document.querySelector("#search3");
	var oShow3=document.querySelector("#show3");
	oSea3.addEventListener('mouseover',function(){
		oSearch3.style.display="block";
		oShow3.style.display="block";
		oSea3.style.opacity="1";
	});
	oSea3.addEventListener('mouseout',function(){
		oSearch3.style.display="none";
		oShow3.style.display="none";
		oSea3.style.opacity="0.7";
	});
	var oSea4=document.querySelector("#sea4");
	var oSearch4=document.querySelector("#search4");
	var oShow4=document.querySelector("#show4");
	oSea4.addEventListener('mouseover',function(){
		oSearch4.style.display="block";
		oShow4.style.display="block";
		oSea4.style.opacity="1";
	});
	oSea4.addEventListener('mouseout',function(){
		oSearch4.style.display="none";
		oShow4.style.display="none";
		oSea4.style.opacity="0.7";
	});
}