document.getElementById("btn").addEventListener("click", function () {
    var ans = document.getElementById("btn").value;
    if (document.getElementById("answer").value == ans) {
      document.getElementById("sum").innerHTML = "You've gotten it correct! It is " + ans;
    } else {
      document.getElementById("sum").innerHTML = "Ohno, this is a wrong answer, it is " + ans;
    }
  });