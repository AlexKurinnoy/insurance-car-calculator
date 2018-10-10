(function () {
  "use strict";

  var sheduled_recalculate = 0;
  var calc = {};
  var frs = 8;

  var $table_conatiner;
  var $error_conatiner;
  var result_table = {};

  calc.products = ['4605'];


  calc.classes = {
    '1001': 'Клас 1',
    '1002': 'Клас 2',
    '1003': 'Клас 3',
    '1004': 'Клас 4',
    '1005': 'Клас 5',
    '1006': 'Клас 6'
  };

  calc.tariffs = {
    '4605': {
      '1001': [7.25, null, 5.75, 5.40, 5.00, 4.50, 4.20, 3.90],
      '1002': [6.20, null, 5.20, 4.80, 4.25, 3.85, 3.55, 3.30],
      '1003': [6.00, null, 4.75, 4.05, 3.50, 2.75, 2.45, 2.20],
      '1004': [5.65, null, 4.50, 3.80, 3.30, 2.60, 2.30, 2.05],
      '1005': [4.90, 4.50, 3.90, 3.30, 2.95, 2.45, 2.15, 2.00],
      '1006': [5.45, 5.10, 4.55, 4.08, 3.55, 3.25, 2.95, 2.75]
    }
  };

  calc.k1s = { '1': 0.94, '2': 1.0, '3': 1.07, '4': 1.18 };
  calc.k2s = { '1': 1.0, '2': 0.93, '3': 0.85 };
  calc.k3s = { '': 0.9, '1': 1.0 };
  calc.k4s = { '': 1.00, '2': 1.4 };
  calc.k5s = { '': 1.00, '3': 2 };
  calc.k6s = 1.00;
  calc.k7s = { '3': 1.4, '4': 1.2, '5': 1.1, '6': 1.0, '7': 0.9, '8': 0.85 };
  calc.k8s = 1.00;
  calc.k9s = { '1': 0.9, '2': 1.0, '3': 1.0 };
  calc.k10s = { '1': 0.20, '2': 0.30, '3': 0.40, '4': 0.50, '5': 0.60, '6': 0.70, '7': 0.75, '8': 0.80, '9': 0.85, '10': 0.90, '11': 0.95, '12': 1.00 };

  calc.k11s0 = [1, 1, 1.07, 1.15, 1.20, 1.30, 1.40, 1.50, 1.60, 1.70, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  calc.k11s = [
    [1, 1, null, null, null, null, null, null, null, null],
    [1, 1, null, null, null, null, null, null, null, null],
    [1, 1, 1.07, null, null, null, null, null, null, null],
    [1, 1, 1.07, 1.15, null, null, null, null, null, null],
    [1, 1.05, 1.07, 1.15, 1.20, null, null, null, null, null],
    [1, 1.10, 1.12, 1.15, 1.20, 1.30, null, null, null, null],
    [1, 1.15, 1.18, 1.20, 1.20, 1.30, 1.40, null, null, null],
    [1, 1.20, 1.24, 1.26, 1.26, 1.30, 1.40, 1.50, null, null],
    [1, 1.25, 1.30, 1.32, 1.32, 1.37, 1.40, 1.50, 1.60, null],
    [1, 1.30, 1.37, 1.40, 1.40, 1.43, 1.47, 1.50, 1.60, 1.70]
  ];

  calc.k12s = 1.00;
  calc.k13s = { '1': 0.95, '2': 1.0, '3': 1.05, '4': 1.10 };
  calc.k14s = 1.00;
  calc.k15s = { '': 1.00, '4': 1.06 };
  calc.k16s = { '': 1.00, '5': 0.96 };
  calc.k17s = { '': 1.00, '6': 0.92 };
  calc.k18s = { '': 1.00, '7': 0.96 };
  calc.kUnds = { '': 1.00, '10': 0.6 };

  var msg_errors = function (s) {
    $error_conatiner.text(s);
    $error_conatiner.show();
  };


  var recalc = function () {
    var params = window.params;
    calc.params = params;
    calc.results = {};
    calc.errors = false;

    $table_conatiner.hide();
    $error_conatiner.hide();
    //console.log(calc.params);

    $.each(calc.products, function (n, product) {
      var result = {};


      result.k1 = calc.k1s[params.comis];
      result.k2 = calc.k2s[params.region];
      result.k3 = calc.k3s[params.sto];
      result.k4 = calc.k4s[params.young_man];
      result.k5 = calc.k5s[params.taxi];
      result.k6 = calc.k6s;
      result.k7 = calc.k7s[params.bonus];
      result.k8 = calc.k8s;
      result.k9 = calc.k9s[params.gPS];
      result.k10 = calc.k10s[params.period_strah];


      if (isNaN(params.year)) {
        msg_errors("Оберіть рік");
        return;
      }

      var age = (new Date()).getFullYear() - Number(params.year);

      if (params.wear == "") {
        result.k11 = 1;
      }
      else if (params.period_obsl === "0") {
        result.k11 = calc.k11s0[age];
      } else {
        result.k11 = calc.k11s[age][Number(params.period_obsl)];
      }
      result.k12 = calc.k12s;
      result.k13 = calc.k13s[params.strok_oplat];
      result.k14 = calc.k14s;
      result.k15 = calc.k15s[params.glass];
      result.k16 = calc.k16s[params.pDD];
      result.k17 = calc.k17s[params.theft];

      result.kUnd = calc.kUnds[params.theft_total];

      if (params.xxx === "9") result.k17 = 1.05;

      result.k18 = calc.k18s[params.destroit];


      if (isNaN(params.strah_sum) || Number(params.strah_sum) <= 0) {
        msg_errors("Введіть страхову суму");
        return;
      };

      result.strsum = Number(params.strah_sum);


      if (!calc.tariffs[product].hasOwnProperty(params.model)) {
        msg_errors("Оберіть марку");
        return;
      };
      result.basetars = calc.tariffs[product][params.model];

      result.tars = [];
      result.tars0 = [];
      result.plat = [];
      $.each(result.basetars, function (i, basetar) {
        result.tars0[i] = basetar *
          result.k1 *
          result.k2 *
          result.k3 *
          result.k4 *
          result.k5 *
          result.k6 *
          result.k7 *
          result.k8 *
          result.k9 *
          result.k10 *
          result.k11 *
          result.k12 *
          /* result.k13 */
          result.k14 *
          /* result.k15 */
          result.k16 *
          /*result.k17 * */
          result.k18 *
          result.kUnd;

        /*периодичность*/
        result.tars[i] = result.tars0[i] * result.k13;
        if (i != 7 || result.k17 != 1.05) result.tars[i] = result.tars[i] * result.k17;

        /*нулевая фр. по угону*/
        if (i != 0) {
          result.tars[i] = result.tars[i] * result.k15;
        }

        if (result.k5 == 2 && i < 2) {
          result.tars[i] = 0;
        }

        result.tars[i] = Math.round(result.tars[i] * 100) / 100;
        result.plat[i] = Math.round(result.tars[i] * result.strsum) / 100;

        result_table[product].$prod.text(product);
        result_table[product].$klass.text(calc.classes[params.model]);
        if (result.tars[i] == 0) {
          result_table[product].$tars[i].text("-");
          result_table[product].$plats[i].text("");

        } else {
          result_table[product].$tars[i].text(result.tars[i]);
          result_table[product].$plats[i].text(result.plat[i]);
        }

        result_table[product].$thprod.text(product);

        var i;
        for (i = 1; i <= 18; i = i + 1) {
          result_table[product]["$k" + i].text(result["k" + i]);
        }
        result_table[product]["KUND"].text(result.kUnd);




      }); /*end $.each(result.basetars,...) */




      //console.log(result);




      calc.results[product] = {};
      calc.results[product].result = result;




    }); /*end $.each(calc.products,...) */


    //console.log(calc);

    localStorage.removeItem("mh2_forprint");
    localStorage.setItem("mh2_forprint", JSON.stringify(calc));

    $table_conatiner.show();
    sheduled_recalculate = 0;


  };

  var init = function () {
    window.calculate = function () {
      if (sheduled_recalculate === 0) {
        sheduled_recalculate = setTimeout(recalc, 100);
        sheduled_recalculate = 1;
      }
    };

    $table_conatiner = $('#table_conatiner').hide();
    $error_conatiner = $('#error_container').hide();


    $.each(calc.products, function (n, product) {
      result_table[product] = {};

      result_table[product].$tr = $table_conatiner.find('tr#tr'.concat(product));
      result_table[product].$prod = result_table[product].$tr.find('td.prod');

      result_table[product].$thprod = $("#th_" + product);

      var i;
      for (i = 1; i <= 18; i = i + 1) {
        result_table[product]["$k" + i] = $("#K" + i + "_" + product);
      }
      result_table[product]["KUND"] = $("#KUND_" + product);

      result_table[product].$klass = result_table[product].$tr.find('td.klass');
      result_table[product].$tars = [];
      result_table[product].$plats = [];

      var i = 0;
      for (i = 0; i < frs; i = i + 1) {
        result_table[product].$tars[i] = result_table[product].$tr.find('span.tar'.concat(i.toString()));
        result_table[product].$plats[i] = result_table[product].$tr.find('span.plat'.concat(i.toString()));
      }

    });

    setTimeout(window.scan_variable, 200);

  };

  $(document).ready(function () {
    init();
  });



})();