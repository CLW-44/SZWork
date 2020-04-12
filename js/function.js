
function changeMa(v){
	page=page+v;
	if (page<0){
		page=Ma.length-1;
	}else if (page>=Ma.length){
		page=0;
	}
	var text=document.getElementById("team-text");
	text.innerHTML=Ma[page];
}
function changeHi(v){
	page=page+v;
	if (page<0){
		page=Hi.length-1;
	}else if (page>=Hi.length){
		page=0;
	}
	var text=document.getElementById("team-text");
	text.innerHTML=Hi[page];
}
function changeSi(v){
	page=page+v;
	if (page<0){
		page=Si.length-1;
	}else if (page>=Si.length){
		page=0;
	}
	var text=document.getElementById("team-text");
	text.innerHTML=Si[page];
}
function changeM(v){
	page=page+v;
	if (page<0){
		page=M.length-1;
	}else if (page>=M.length){
		page=0;
	}
	var text=document.getElementById("team-text");
	text.innerHTML=M[page];
}

function initial(){
	//0
	Qust[0][0] = "辩证唯物主义认为，运动和静止的关系是（）";
	Ans[0][0][0] = "动者恒动，静者恒静"; Ans[0][0][1] = "运动是绝对的，静止是相对的"; 
	Ans[0][0][2] = "运动和静止都是绝对的"; Ans[0][0][3] = "静止和运动都是相对的"; 
	Ans[0][0][4] = "b";
	
	Qust[0][1] = "有一则箴言：“在溪水和岩石的斗争中，胜利的总是溪水，不是因为力量，而是因为坚持。”“坚持就是胜利”的哲理在于（）";
	Ans[0][1][0] = "必然性通过偶然性开辟道路"; Ans[0][1][1] = "肯定中包含着否定的因素";
	Ans[0][1][2] = "量变必然引起质变";Ans[0][1][3] = "有其因必有其果";
	Ans[0][1][4] = "c";
	
	Qust[0][2] = "恩格斯说:“人的智力是按照人如何学会改变自然界而发展的”。这说明()";
	Ans[0][2][0] = "人的智力为自然界立法";Ans[0][2][1] = "自然界是人的智力发展的现实基础";
	Ans[0][2][2] = "实践锻炼和提高了主体的认识能力";Ans[0][2][3] = "自然界的改变决定了认识能力的改变";
	Ans[0][2][4] = "c";
	
	//1
	Qust[1][0] = "第一次鸦片战争后，中国逐步演变为";
	Ans[1][0][0] = "封建主义性质的国家";Ans[1][0][1] = "半殖民地半资本主义性质的国家";
	Ans[1][0][2] = "资本主义性质的国家";Ans[1][0][3] = "半殖民地半封建性质的国家";
	Ans[1][0][4] = "d";
	
	Qust[1][1] = "中国近代史的起点是";
	Ans[1][1][0] = "第一次鸦片战争";Ans[1][1][1] = "第二次鸦片战争";
	Ans[1][1][2] = "中日甲午战争";Ans[1][1][3] = "八国联军侵华战争";
	Ans[1][1][4] = "a";
	
	Qust[1][2] = "在近代中国错综复杂的社会矛盾中，最主要的矛盾是";
	Ans[1][2][0] = "无产阶级和资产阶级的矛盾";Ans[1][2][1] = "封建主义和人民大众的矛盾";
	Ans[1][2][2] = "农民阶级和地主阶级的矛盾";Ans[1][2][3] = "帝国主义和中华民族的矛盾";
	Ans[1][2][4] = "d";
	
	//2
	Qust[2][0] = "()是个体的人生活动对社会、他人所具有的价值。";
	Ans[2][0][0] = "人生的自我价值";Ans[2][0][1] = "人生的社会价值";
	Ans[2][0][2] = "价值观";Ans[2][0][3] = "价值标准";
	Ans[2][0][4] = "b";
	
	
	Qust[2][1] = "以下关于理想、幻想、空想的表述正确的是（）。";
	Ans[2][1][0] = "理想是个人对幻想空想的改进";Ans[2][1][1] = "理想源于实践具有实现可能是对未来的向往和追求";
	Ans[2][1][2] = "理想是永恒的，幻想和空想可以随时间的变化而变化";Ans[2][1][3] = "知识渊博的人具有崇高的理想，而空想幻想则源于无知";
	Ans[2][1][4] = "b";
	
	
	Qust[2][2] = "个人品德是个体对某种道德要求认同和践履的结果，集中体现了道德认知、道德情感、道德意志、道德信念和()的内在统一。";
	Ans[2][2][0] = "道德实践";Ans[2][2][1] = "道德行为";
	Ans[2][2][2] = "道德表现";Ans[2][2][3] = "道德内容";
	Ans[2][2][4] = "b";
	
	//3
	Qust[3][0] = "部署全面建成小康社会的会议是（ ）";
	Ans[3][0][0] = "十八届三中全会";Ans[3][0][1] = "十八届四中全会";
	Ans[3][0][2] = "十八届五中全会";Ans[3][0][3] = "十八届六中全会";
	Ans[3][0][4] = "c";
	
	Qust[3][1] = "习近平新时代中国特色社会主义思想在（）会议上被确立为党的指导思想";
	Ans[3][1][0] = "十八大";Ans[3][1][1] = "十八届六中全会";
	Ans[3][1][2] = "十九大";Ans[3][1][3] = "十四大";
	Ans[3][1][4] = "c";
	
	Qust[3][2] = "习近平新时代中国特色社会主义思想的理论主题是（  ）";
	Ans[3][2][0] = "什么是社会主义，怎样建设社会主义？";Ans[3][2][1] = "建设一个什么样的党，怎样建设党？";
	Ans[3][2][2] = "实现什么样的发展，怎样发展？";Ans[3][2][3] = "新时代坚持和发展什么样的中国特色社会主义，怎样坚持和发展中国特色社会主义？";
	Ans[3][2][4] = "d";
	
}

function add(n){
	var qustion,answer;
	for (var i=0;i<QuestionNum/4;i=i+1){
		
		qustion = "".concat("<p>",i+1+n*3,'、',Qust[n][i],"</p>");
		answer = "";
		
		answer = answer+"<input type=\"radio\" value=\"a\" name=\"t"+(i+n*3)+"\"/>A."+Ans[n][i][0]+"<br><br>";
		answer = answer+"<input type=\"radio\" value=\"b\" name=\"t"+(i+n*3)+"\"/>B."+Ans[n][i][1]+"<br><br>";
		answer = answer+"<input type=\"radio\" value=\"c\" name=\"t"+(i+n*3)+"\"/>C."+Ans[n][i][2]+"<br><br>";
		answer = answer+"<input type=\"radio\" value=\"d\" name=\"t"+(i+n*3)+"\"/>D."+Ans[n][i][3]+"<br><br>";
		text = text+qustion+answer;	
	}
}

function judge(){
	var ok = window.confirm("确认提交吗？");
	if (ok){
		var result=0,ychoose;
		var value
		for(var i=0;i<4; i=i+1){
			for(var j=0;j<QuestionNum/4; j=j+1){
				ychoose=document.getElementsByName("t"+(j+i*3));
				
				
				for(var k=0;k<4;k=k+1){
					if(ychoose[k].checked == true){
		
						value = ychoose[k].value;
					}
				}

				if (value==Ans[i][j][4]){
					result=result+1;
					value="";
				}
			}
		}
		var textObj=document.getElementById("team-text");
		textObj.innerHTML="你一共做对:"+result+"道<br>";
		textObj=document.getElementById("subm");
		textObj.innerHTML="你一共做错:"+(QuestionNum-result)+"道<br>";
		textObj.style="text-align: left;";
	}
}