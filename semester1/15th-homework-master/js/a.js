window.onload=function() {
	var oOne=document.querySelector("#one");
	var oTwo=document.querySelector("#two");
	var oThree=document.querySelector("#three");
	var replaceTwo=document.querySelector("#replace_one");
	var replaceOne=document.querySelector("#replace_two");
	var oProme=document.querySelector("#prome");
	oOne.addEventListener('click',function(){
		oOne.style.backgroundColor="white";
		oTwo.style.backgroundColor="#865b71";
		oThree.style.backgroundColor="#865b71";
		replaceOne.style.display="none";
		oProme.style.display="block";
		replaceTwo.style.display="none";
	});
	oTwo.addEventListener('click',function(){
		oTwo.style.backgroundColor="white";
		oOne.style.backgroundColor="#865b71";
		oThree.style.backgroundColor="#865b71";
		replaceOne.style.display="block";
		oProme.style.display="none";
		replaceTwo.style.display="none";
	});
	oThree.addEventListener('click',function(){
		oThree.style.backgroundColor="white";
		oOne.style.backgroundColor="#865b71";
		oTwo.style.backgroundColor="#865b71";
		replaceTwo.style.display="block";
		replaceOne.style.display="none";
		oProme.style.display="none";
	});
} 