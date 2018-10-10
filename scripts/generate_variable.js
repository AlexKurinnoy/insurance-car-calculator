
window.addEventListener("change", scan_variable);

function scan_variable() {

	 window.params = {"period_strah": "",
					"mark": "",
					"mark_text": "",
					"model_text": "",
					"model_code": "",
					"model": "",
					"strok_oplat": "",
					"period_obsl": "",
					"year": "",
					"region": "",
					"gPS": "",
					"sto": "",
					"young_man": "",
					"taxi": "",
					"glass": "",
					"pDD": "",
					"theft": "",
					"destroit": "",
					"wear": "",
					"strah_sum": "",
					"bonus": "",
					"comis": "",
					"xxx": "",
					"theft_total": "",
 				};

 	 var checkboxes = document.getElementsByClassName('checkbox');




	 for (var i = 0; i < checkboxes.length; i++){
	 	if (checkboxes[i].checked) { 
	 		if(checkboxes[i].value == 1){params.sto = checkboxes[i].value;}	 
	 		if(checkboxes[i].value == 2){params.young_man = checkboxes[i].value;}
	 		if(checkboxes[i].value == 3){params.taxi = checkboxes[i].value;}
	 		if(checkboxes[i].value == 4){params.glass = checkboxes[i].value;}	
	 		if(checkboxes[i].value == 5){params.pDD = checkboxes[i].value;} 	
	 		if(checkboxes[i].value == 6){params.theft = checkboxes[i].value;} 	
	 		if(checkboxes[i].value == 7){params.destroit = checkboxes[i].value;} 	
	 		if(checkboxes[i].value == 8){params.wear = checkboxes[i].value;} 	
	 		if(checkboxes[i].value == 9){params.xxx = checkboxes[i].value;}
	 		if(checkboxes[i].value == 10){params.theft_total = checkboxes[i].value;}
	 	}
	}	 

	var param_mark = document.getElementById('mark');
	params.mark = param_mark.options[param_mark.selectedIndex].value;
	params.mark_text = param_mark.options[param_mark.selectedIndex].innerHTML;

	var param_model = document.getElementById('model');
	params.model = param_model.options[param_model.selectedIndex].value;
	params.model_text = param_model.options[param_model.selectedIndex].innerHTML;
	params.model_code = param_model.options[param_model.selectedIndex].getAttribute('data-model');

	var param_year = document.getElementById('year');
	params.year = param_year.options[param_year.selectedIndex].value;
		
	var bon_mal = document.getElementsByClassName('bonus_malus');

	if(document.getElementById('period1').checked || document.getElementById('period2').checked){
		for (var v=1; v<=5; v++){
	 		bon_mal[v].setAttribute('disabled', 'disabled');
	 		document.getElementById('bonus3').checked = true;
		}
	}
	else{	
		for (var o =1; o<=5; o++){
			bon_mal[o].removeAttribute("disabled"); 
		}
	}		 	
	var y  = document.getElementsByClassName('period_obsl');	 	
		if (params.year == 2017 || params.year == 2016 ){
			document.getElementById('additional8').setAttribute('checked', 'checked');	
			document.getElementById('additional8').checked = true;
		 	for (var m =2; m<=9; m++){
		 		y[m].setAttribute('disabled', 'disabled');
		 	}	
		 	document.getElementById('period1').setAttribute('checked', 'checked');
		 }
		if(params.year == 2015){
			document.getElementById('additional8').setAttribute('disabled', 'disabled');
			document.getElementById('additional8').checked = true;
		 	y[2].removeAttribute("disabled"); 
		 	for (var m =3; m<=9; m++){
		 		y[m].setAttribute('disabled', 'disabled');
		 	}
		 }
		if(params.year == 2014){
			document.getElementById('additional8').setAttribute('disabled', 'disabled');
			document.getElementById('additional8').checked = true;
		 		y[2].removeAttribute("disabled"); 
		 		y[3].removeAttribute("disabled"); 
		 	for (var m =4; m<=9; m++){
		 		y[m].setAttribute('disabled', 'disabled');
		 	} 	
		 }
		if(params.year == 2013){
			document.getElementById('additional8').removeAttribute("disabled"); 
		 	for (var n =2; n<=4; n++){
		 		y[n].removeAttribute("disabled"); 
		 	}
		 	for (var m =5; m<=9; m++){
		 		y[m].setAttribute('disabled', 'disabled');
		 	}
   		}
		if(params.year == 2012){
			document.getElementById('additional8').removeAttribute("disabled"); 
		 	for (var n =2; n<=5; n++){
		 		y[n].removeAttribute("disabled"); 
		 	}
		 	for (var m =6; m<=9; m++){
		 		y[m].setAttribute('disabled', 'disabled');
		 	}
		}
		if(params.year == 2011){
			document.getElementById('additional8').removeAttribute("disabled"); 
	 		for (var n =2; n<=6; n++){
		 		y[n].removeAttribute("disabled"); 
		 	}
		 	for (var m =7; m<=9; m++){
		 		y[m].setAttribute('disabled', 'disabled');
		 	}
		 }
		if(params.year == 2010){
			document.getElementById('additional8').removeAttribute("disabled"); 
		  	for (var n =2; n<=7; n++){
		 		y[n].removeAttribute("disabled"); 
		 	}		 	
		 	for (var m =8; m<=9; m++){
		 		y[m].setAttribute('disabled', 'disabled');
		 	}
		 }
		if(params.year == 2009){
			document.getElementById('additional8').removeAttribute("disabled"); 
		 	for (var n =2; n<=8; n++){
		 		y[n].removeAttribute("disabled"); 
		 	}
		 	y[9].setAttribute('disabled', 'disabled');
		 }
		if(params.year == 2008 || params.year == 2007 || params.year == 2006 || params.year == 2005 || params.year == 2004 || params.year == 2003 || params.year == 2002 || params.year == 2001){
			document.getElementById('additional8').removeAttribute("disabled"); 
			for (var n =2; n<=9; n++){
		 		y[n].removeAttribute("disabled"); 
		 	}
		 }
		 // Зависимости кнопки Фр. по НЗ як по ін. ризиками (Клас 5) и кнопки Без ризику кражі
		  if (document.getElementById('model').value != 1005 || document.getElementById('additional6').checked) {
		 	document.getElementById('additional9').setAttribute('disabled', 'disabled');
		 	document.getElementById('additional9').checked= false;
		 	}
		  else{document.getElementById('additional9').removeAttribute("disabled");
			}
		// Зависимости кнопки "страхование только на случай угона и тотала" 
			if (document.getElementById('additional10').checked) {
				document.getElementById('additional8').setAttribute('disabled', 'disabled');
		 		document.getElementById('additional8').checked= false;
		 		document.getElementById('additional7').setAttribute('disabled', 'disabled');
		 		document.getElementById('additional7').checked= false;
		 		document.getElementById('additional4').setAttribute('disabled', 'disabled');
		 		document.getElementById('additional4').checked= false;
				}	
			else{document.getElementById('additional8').removeAttribute("disabled");
				 document.getElementById('additional7').removeAttribute("disabled");
			     document.getElementById('additional4').removeAttribute("disabled");
			    }
	
	 var regions = document.getElementsByClassName('region');
	 for (var r = 0; r < regions.length; r++){
	 	if (regions[r].checked) { params.region = regions[r].value;	}	
	 }		
	 var strah = document.getElementsByClassName('period_strah');
	 for (var s = 0; s < strah.length; s++){
	 	if (strah[s].checked) { params.period_strah = strah[s].value;	}	
	 }	
	 var oplata = document.getElementsByClassName('strok_oplat');
	 for (var o = 0; o < oplata.length; o++){
	 	if (oplata[o].checked) { params.strok_oplat = oplata[o].value;	}	
	 }	
	 var obsluga = document.getElementsByClassName('period_obsl');
	 for (var obs = 0; obs < obsluga.length; obs++){
	 	if (obsluga[obs].checked) { params.period_obsl = obsluga[obs].value;	}	
	 }	
	 var bonus = document.getElementsByClassName('bonus_malus');
	 for (var b = 0; b < bonus.length; b++){
	 	if (bonus[b].checked) { params.bonus = bonus[b].value;	}	
	 }	
 	 var comisja = document.getElementsByClassName('comis_nagoroda');
	 for (var c = 0; c < comisja.length; c++){
	 	if (comisja[c].checked) { params.comis = comisja[c].value;	}	
	 }	
	 var instGPS = document.getElementsByClassName('install_gps');
	 for (var g = 0; g < instGPS.length; g++){
	 	if (instGPS[g].checked) { params.gPS = instGPS[g].value;	}	
	 }	

    params.strah_sum = document.getElementById("sum").value;

    document.getElementById('gps3').setAttribute('checked', 'checked');
    document.getElementById('gps2').setAttribute('disabled', 'disabled');

    if (document.getElementById('model').value == 1006) {                       //Если выбрана тачка  Класса 6  - блокирую кнопку "gps не буде" и включаю кнопку "страховик"
     	document.getElementById('gps3').checked = false; 
    	document.getElementById('gps3').setAttribute('disabled', 'disabled');
    	if(params.year == 2017 || params.year == 2016 || params.year == 2015 || params.year == 2014 || params.year == 2013 || params.year == 2012 ){
    		document.getElementById('gps2').removeAttribute("disabled"); 
    	}
    	else{document.getElementById('gps1').checked= true;}
   
     	if (document.getElementById('gps2').checked) {
     		document.getElementById('radio12').checked= true;
     		document.getElementById('oplata1').checked= true;
     		document.getElementById('radio1').setAttribute('disabled', 'disabled');
     		document.getElementById('radio2').setAttribute('disabled', 'disabled');
     		document.getElementById('radio3').setAttribute('disabled', 'disabled');
     		document.getElementById('radio4').setAttribute('disabled', 'disabled');
     		document.getElementById('radio5').setAttribute('disabled', 'disabled');
     		document.getElementById('radio6').setAttribute('disabled', 'disabled');
     		document.getElementById('radio7').setAttribute('disabled', 'disabled');
     		document.getElementById('radio8').setAttribute('disabled', 'disabled');
     		document.getElementById('radio9').setAttribute('disabled', 'disabled');
     		document.getElementById('radio10').setAttribute('disabled', 'disabled');
     		document.getElementById('radio11').setAttribute('disabled', 'disabled');
     		document.getElementById('oplata2').setAttribute('disabled', 'disabled');
     		document.getElementById('oplata3').setAttribute('disabled', 'disabled');
     		document.getElementById('oplata4').setAttribute('disabled', 'disabled');
     	}
     	else{
     		document.getElementById('radio12').setAttribute('checked', 'checked');
     		document.getElementById('radio1').removeAttribute("disabled");
     		document.getElementById('radio2').removeAttribute("disabled");
     		document.getElementById('radio3').removeAttribute("disabled");
     		document.getElementById('radio4').removeAttribute("disabled");
     		document.getElementById('radio5').removeAttribute("disabled");
     		document.getElementById('radio6').removeAttribute("disabled");
     		document.getElementById('radio7').removeAttribute("disabled");
     		document.getElementById('radio8').removeAttribute("disabled");
     		document.getElementById('radio9').removeAttribute("disabled");
     		document.getElementById('radio10').removeAttribute("disabled");
     		document.getElementById('radio11').removeAttribute("disabled");
     		document.getElementById('oplata2').removeAttribute("disabled");
     		document.getElementById('oplata3').removeAttribute("disabled");
     		document.getElementById('oplata4').removeAttribute("disabled");
    		}    	
     	}
    else{ 
    	  document.getElementById('gps2').checked = false; 
    	  document.getElementById('gps2').removeAttribute("checked");
    	  document.getElementById('gps1').setAttribute('checked', 'checked');
    	  document.getElementById('gps3').removeAttribute("disabled"); 
		  document.getElementById('radio1').removeAttribute("disabled");
     	  document.getElementById('radio2').removeAttribute("disabled");
     	  document.getElementById('radio3').removeAttribute("disabled");
     	  document.getElementById('radio4').removeAttribute("disabled");
     	  document.getElementById('radio5').removeAttribute("disabled");
     	  document.getElementById('radio6').removeAttribute("disabled");
     	  document.getElementById('radio7').removeAttribute("disabled");
     	  document.getElementById('radio8').removeAttribute("disabled");
     	  document.getElementById('radio9').removeAttribute("disabled");
     	  document.getElementById('radio10').removeAttribute("disabled");
     	  document.getElementById('radio11').removeAttribute("disabled");
     	  document.getElementById('oplata2').removeAttribute("disabled");
     	  document.getElementById('oplata3').removeAttribute("disabled");
     	  document.getElementById('oplata4').removeAttribute("disabled");
		}
    if (document.getElementById('additional3').checked) { 
     	document.getElementById('additional4').setAttribute('disabled', 'disabled');
     	document.getElementById('additional4').checked= false;
     }
 	 // else{ document.getElementById('additional4').removeAttribute("disabled"); }
 	if(document.getElementById('sum').value == 290386){
 	 	alert("ЭТОТ КЛИЕНТ СТРАХУЕТСЯ БЕСПЛАТНО!");
 	 }




 window.calculate(); 
 
}

function multiplication(){
 	var somevariable = document.getElementsByClassName("someclass");

 	if (somevariable[0].innerHTML=="0,50%") {
	 	for (var i = 0; i <= somevariable.length; i++) {
	 			somevariable[i].innerHTML=(somevariable[i].innerHTML.replace(",", ".")).slice(0, -1);
	 	 		somevariable[i].innerHTML=(((Number(somevariable[i].innerHTML))*2).toFixed(2)).replace(".", ",") + "%";
	 	 	}
	}else{
	 	for (var i = 0; i <= somevariable.length; i++) {
	 			somevariable[i].innerHTML=(somevariable[i].innerHTML.replace(",", ".")).slice(0, -1);
	 			somevariable[i].innerHTML=(((Number(somevariable[i].innerHTML))/2).toFixed(2)).replace(".", ",") + "%";
	 		}
 	}
}