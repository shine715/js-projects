


var setN = document.getElementById("setN");

setN.addEventListener("change",function(){
	node=document.getElementById("container")
	while (node.hasChildNodes()) {
    	node.removeChild(node.lastChild);
	}
	var Myn = setN.value;
	console.log(Myn);
	for(var i=0;i<Math.pow(Myn,2);i++){
		
		
		var myGrid=document.createElement("div");
		myGrid.textContent=i+1;
		document.getElementById("container").appendChild(myGrid);
		
		var myGridWidth=1/Myn*0.9*800+'px';
		var myGridHeight=1/Myn*0.9*800+'px';
		var myGridMargin=0.1/(Myn+1)*800+'px';
		console.log(myGridHeight);
		console.log(myGridMargin);
		myGrid.className="nn";
		myGrid.style.height=myGridHeight;
		myGrid.style.width=myGridWidth;
		myGrid.style.margin=myGridMargin;
	}
})