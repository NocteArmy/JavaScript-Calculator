$(document).ready(() => {
  var inputs = [];
  var inputStr = "";
  var answer = null;

  $("#all-clear").on('click', () => {
    inputs = [];
    inputStr = "";
    answer = null;
    $("#new-input").html("0");
    $("#inputs").html("0");
  });
  $("#clear-element").on('click', () => {
    if(answer === 'error') { return null; }
    if(answer) { return null; }
    if(inputStr.length > 1) {
      inputStr = inputStr.substr(0, inputStr.length - 1);
      $("#new-input").html(inputStr);
    } else if($("#new-input").html() !== "0") {
      inputStr = "";
      $("#new-input").html("0");
    } else {
      if(inputs.length > 0) {
        inputs.pop();
        if(inputs.length > 0) {
          $("#inputs").html(inputs.join(""));
        } else {
          $("#inputs").html("0");
        }
      }
    }
  });
  $("#equals").on('click', () => {
    if(answer === 'error') { return null; }
    if(inputStr.length === 0) {
      return null;
    } else {
      inputs.push(inputStr);
      inputStr = "";
      $("#inputs").html(inputs.join(""));
      if(inputs.length < 3) {
        $("#new-input").html("Please reset");
        $("#inputs").html("Error 1");
        answer = "error";
    } else {
        try {
          answer = eval(inputs.join("").replace("X", "*"));
          if(answer === Infinity) {
            $("#new-input").html("Please reset");
            $("#inputs").html("Error 2");
            answer = "error";
            inputs = [];
          } else {
            $("#inputs").html($("#inputs").html() + "=");
            if(answer.toString().length > 10) {
              $("#new-input").html((Math.round(answer * 10000000) / 10000000).toString());
            } else {
              $("#new-input").html(answer.toString());
            }
            inputs = [];
          }
        } catch(err) {
          console.log(err);
          $("#new-input").html("Please reset");
          $("#inputs").html("Error 1");
          answer = "error";
        }
      }
    }
  });
  $("#divide").on('click', () => {
    if(answer === 'error') { return null; }
    if(answer) {
      inputs = [answer];
      answer = null;
      inputStr = "";
      inputs.push("/");
      $("#inputs").html(inputs.join(""));
      $("#new-input").html("0");
    } else {
      if(inputStr.length === 0) { return null; }
      inputs.push(inputStr);
      inputStr = "";
      inputs.push("/");
      $("#inputs").html(inputs.join(""));
      $("#new-input").html("0");
    } 
  });
  $("#multiply").on('click', () => {
    if(answer === 'error') { return null; }
    if(answer) {
      inputs = [answer];
      answer = null;
      inputStr = "";
      inputs.push("X");
      $("#inputs").html(inputs.join(""));
      $("#new-input").html("0");
    } else {
      if(inputStr.length === 0) { return null; }
      inputs.push(inputStr);
      inputStr = "";
      inputs.push("X");
      $("#inputs").html(inputs.join(""));
      $("#new-input").html("0");
    } 
  });
  $("#add").on('click', () => {
    if(answer === 'error') { return null; }
    if(answer) {
      inputs = [answer];
      answer = null;
      inputStr = "";
      inputs.push("+");
      $("#inputs").html(inputs.join(""));
      $("#new-input").html("0");
    } else {
      if(inputStr.length === 0) { return null; }
      inputs.push(inputStr);
      inputStr = "";
      inputs.push("+");
      $("#inputs").html(inputs.join(""));
      $("#new-input").html("0");
    } 
  });
  $("#subtract").on('click', () => {
    if(answer === 'error') { return null; }
    if(answer) {
      inputs = [answer];
      answer = null;
      inputStr = "";
      inputs.push("-");
      $("#inputs").html(inputs.join(""));
      $("#new-input").html("0");
    } else {
      if(inputStr.length === 0) { return null; }
      inputs.push(inputStr);
      inputStr = "";
      inputs.push("-");
      $("#inputs").html(inputs.join(""));
      $("#new-input").html("0");
    } 
  });
  $("#decimal").on('click', () => {
    if(answer === 'error') { return null; }
    if(answer) {
      answer = null;
      $("#inputs").html("0");
    }
    if($("#new-input").html() === "0") {
      inputStr += "0.";
      $("#new-input").html(inputStr);
    } else {
      inputStr += ".";
      $("#new-input").html(inputStr);
    }
  });
  $("#zero").on('click', () => {
    if(answer === 'error') { return null; }
    if($("#new-input").html() === "0") {
      return null;
    } else {
      if(answer) {
        answer = null;
        $("#inputs").html("0");
      }
      inputStr += "0";
      $("#new-input").html(inputStr);
    }
  });
  $("#one").on('click', () => {
    if(answer === 'error') { return null; }
    if(answer) {
      answer = null;
      $("#inputs").html("0");
    }
    inputStr += "1";
    $("#new-input").html(inputStr);
  });
  $("#two").on('click', () => {
    if(answer === 'error') { return null; }
    if(answer) {
      answer = null;
      $("#inputs").html("0");
    }
    inputStr += "2";
    $("#new-input").html(inputStr);
  });
  $("#three").on('click', () => {
    if(answer === 'error') { return null; }
    if(answer) {
      answer = null;
      $("#inputs").html("0");
    }
    inputStr += "3";
    $("#new-input").html(inputStr);
  });
  $("#four").on('click', () => {
    if(answer === 'error') { return null; }
    if(answer) {
      answer = null;
      $("#inputs").html("0");
    }
    inputStr += "4";
    $("#new-input").html(inputStr);
  });
  $("#five").on('click', () => {
    if(answer === 'error') { return null; }
    if(answer) {
      answer = null;
      $("#inputs").html("0");
    }
    inputStr += "5";
    $("#new-input").html(inputStr);
  });
  $("#six").on('click', () => {
    if(answer === 'error') { return null; }
    if(answer) {
      answer = null;
      $("#inputs").html("0");
    }
    inputStr += "6";
    $("#new-input").html(inputStr);
  });
  $("#seven").on('click', () => {
    if(answer === 'error') { return null; }
    if(answer) {
      answer = null;
      $("#inputs").html("0");
    }
    inputStr += "7";
    $("#new-input").html(inputStr);
  });
  $("#eight").on('click', () => {
    if(answer === 'error') { return null; }
    if(answer) {
      answer = null;
      $("#inputs").html("0");
    }
    inputStr += "8";
    $("#new-input").html(inputStr);
  });
  $("#nine").on('click', () => {
    if(answer === 'error') { return null; }
    if(answer) {
      answer = null;
      $("#inputs").html("0");
    }
    inputStr += "9";
    $("#new-input").html(inputStr);
  });
});