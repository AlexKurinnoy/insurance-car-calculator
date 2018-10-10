window.onload = loadcars();


function loadcars() {

  var get_mark = document.getElementById('mark');  //Получаю поле марки

  for (var i = 0; i < cars.SrdItems[0].SrdItems.length; i++) {   //перебираю в базе объекты содержащие название тачки

    var x = cars.SrdItems[0].SrdItems[i].Datastr;	       //Заганяю название тачки в переменную
    var option = document.createElement("option");			// создаю новый элемент списка марок
    option.value = cars.SrdItems[0].SrdItems[i].Code;      //присваиваю value значение поля Code:
    //console.log(i);
    option.text = x;
    option.id = i;										//присваиваю айдишнику порядковый номер (он будет номером элемента в масиве)	

    if (x === 'Toyota') {
      option.setAttribute("selected", "selected");
    }

    get_mark.add(option);
  }


  add_model();
}




function add_model() {                                       //вешаю функцию на событие выбора марки        

  document.getElementById('model').innerHTML = '';         //чищу список моделей

  var sel = document.getElementById("mark"); 				// Получаем список марок

  var val = sel.options[sel.selectedIndex].id; 			//получаю айдишник выбраной марки он соответствуе номеру елемента в масиве марок

  //alert(sel.options[sel.selectedIndex].value);   

  var get_model = document.getElementById('model');      //получаю поле модели     

  for (var j = 0; j < cars.SrdItems[0].SrdItems[val].SrdItems.length; j++) {   
    var z = cars.SrdItems[0].SrdItems[val].SrdItems[j].Datastr;
    window.opt = document.createElement("option");
    opt.value = cars.SrdItems[0].SrdItems[val].SrdItems[j].SrdItems[0].Code;
    /*console.log(z);*/
    opt.text = z;


    opt.setAttribute("data-model", cars.SrdItems[0].SrdItems[val].SrdItems[j].Code);



    if (j === 0) {
      opt.setAttribute("selected", "selected");
    };

    get_model.add(opt);
  }

}










