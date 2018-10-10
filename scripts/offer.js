(function (window, $, undefined) {
  "use strict";



  $(document).ready(function () {
    var calc = JSON.parse(localStorage.getItem("mh2_forprint"));

    var payments_text = ["1 платіж", "2 платежі", "4 платежі", "12 платежів"];


    var result = calc.results["4605"].result;

    $("#model").text(calc.params.mark_text + " " + calc.params.model_text);
    $("#year").text(calc.params.year);
    $("#strsum").text(result.strsum.toLocaleString("uk-UA", { maximumFractionDigits: 0 }));




    $.each(result.tars0, function (i, tar0) {

      var p;
      var tar, plat;

      for (p = 0; p <= 3; p = p + 1) {

        /*периодичность*/
        tar = tar0 * calc.k13s[(p + 1).toString()];


        /* 5% франшиза 5-ый клас */
        if (i != 7 || result.k17 != 1.05) {
          tar = tar * result.k17;
        }

        /*нулевая фр. по угону*/
        if (i != 0) {
          tar = tar * result.k15;
        }

        if (result.k5 == 2 && i < 2) {
          tar = 0;
        }

        tar = Math.round(tar * 100) / 100;
        plat = Math.round(tar * result.strsum) / 100;

        if (tar == 0) {
          $("#prd" + p.toString() + " td.tar" + i.toString()).text("-");
          $("#prd" + p.toString() + " td.plat" + i.toString()).text("-");

        } else {
          $("#prd" + p.toString() + " td.tar" + i.toString()).text(tar);
          $("#prd" + p.toString() + " td.plat" + i.toString()).text(plat.toLocaleString("uk-UA", { maximumFractionDigits: 0 }));
        }

      }

    }); /*end $.each(result.basetars,...) */


    var excludes = [];/*["01_86_15", "01_86_16", "01_86_7", "01_8_68", "01_8_69", "01_8_70", "01_8_71", "01_52_4", "01_52_4", "01_54_91", "01_54_92", "01_54_93", "01_54_94", "01_54_95",
      "01_54_96", "01_54_97", "01_54_98", "01_54_99", "01_54_100", "01_54_101", "01_54_102", "01_54_103", "01_54_104", "01_54_105", "01_54_106", "01_54_107", "01_54_108", "01_54_109",
      "01_54_110", "01_54_111", "01_54_112", "01_54_113", "01_54_114", "01_54_115", "01_45_1", "01_45_10", "01_45_11", "01_45_12", "01_45_13", "01_45_14", "01_45_16", "01_45_17",
      "01_45_18", "01_45_19", "01_45_20", "01_45_2", "01_45_21", "01_45_22", "01_45_23", "01_45_24", "01_45_28", "01_45_29", "01_45_3", "01_45_37", "01_45_38", "01_45_39",
      "01_45_4", "01_45_5", "01_45_6", "01_45_7", "01_45_8", "01_45_9", "01_44_5"];*/


    if (calc.params.xxx == "9") {
      $("#fr").text("дорівнює франшизі за іншими ризиками.");
    }
    else if (excludes.indexOf(calc.params.model_code) >= 0) {
      if (calc.params.gPS == "3") {
        $("#fr").text("15 %");
      }
      else {
        $("#fr").text("10 %");
      }
    }
    else if (calc.params.model == "1005") {
      $("#fr").text("5 %");
    }
    else {
      $("#fr").text("дорівнює франшизі за іншими ризиками.");
    }

    if (calc.params.gPS == "2") {
      $("#prd1, #prd2, #prd3").hide();
    }



    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (dd < 10) {
      dd = "0" + dd
    }

    if (mm < 10) {
      mm = "0" + mm
    }

    today = dd + "." + mm + "." + yyyy;

    $("#dt1").text(today.substring(0, 1));
    $("#dt2").text(today.substring(1, 2));
    $("#dt3").text(today.substring(3, 4));
    $("#dt4").text(today.substring(4, 5));
    $("#dt5").text(today.substring(6, 7));
    $("#dt6").text(today.substring(7, 8));
    $("#dt7").text(today.substring(8, 9));
    $("#dt8").text(today.substring(9, 10));



    var mngr = "";
    if (localStorage.getItem("mh_mngr")) {
      mngr = JSON.parse(localStorage.getItem("mh_mngr"));
      if (mngr.length > 5) {
        $("#mngr").val(mngr);
      }
    }

    $("#mngr").change(function () {
      if ($(this).val().length > 5) {
        localStorage.setItem("mh_mngr", JSON.stringify($(this).val()));
      }
    });

    autosizeInput(document.querySelector("#mngr"));
    autosizeInput(document.querySelector("#p1"));
    autosizeInput(document.querySelector("#p2"));
    autosizeInput(document.querySelector("#p3"));
    autosizeInput(document.querySelector("#name"));

  });


}(window, jQuery));