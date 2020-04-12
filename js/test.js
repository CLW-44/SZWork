var Qust = new Array();
var Ans = new Array();
var num=1,i,text="<h2>小测试</h2>";
const QuestionNum=12;

for (i=0;i<4;i=i+1){
	Qust[i] = new Array();
	Ans[i] = new Array();
	for (var j=0;j<4;j=j+1){
		Ans[i][j] = new Array();
	}
	
}

window.onload = function(){
	initial()
	for (var n=0;n<4;n=n+1){
		add(n);
	}
	var textObj=document.getElementById("team-text");
	textObj.innerHTML=text;		
}


