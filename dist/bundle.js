"use strict";

(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw a.code = "MODULE_NOT_FOUND", a;
        }

        var p = n[i] = {
          exports: {}
        };
        e[i][0].call(p.exports, function (r) {
          var n = e[i][1][r];
          return o(n || r);
        }, p, p.exports, r, e, n, t);
      }

      return n[i].exports;
    }

    for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) {
      o(t[i]);
    }

    return o;
  }

  return r;
})()({
  1: [function (require, module, exports) {
    //console.log("init"); //mf
    var fields = document.querySelectorAll(".field");
    var dateField = document.querySelector(".date-wrapper");
    var fullDate = Date.now();
    var today = new Date(fullDate).toLocaleString();
    var dateNow = today.substring(0, 10);
    dateField.innerText = dateNow;
    var timeNow = today.substring(today.length - 8);
    var timeNowSc = timeNow.substr(0, 2) + timeNow.substr(3, 2) + timeNow.substr(6, 2);

    function displayTime() {
      var fullDate = Date.now();
      var today = new Date(fullDate).toLocaleString();
      var dateNow = today.substring(0, 10);
      dateField.innerText = dateNow;
      var timeNow = today.substring(today.length - 8);
      var timeNowSc = timeNow.substr(0, 2) + timeNow.substr(3, 2) + timeNow.substr(6, 2);
      var i = 0;
      fields.forEach(function (field) {
        field.innerText = timeNowSc[i];
        i++;
      });
    }

    setInterval(displayTime, 1000);
  }, {}]
}, {}, [1]);