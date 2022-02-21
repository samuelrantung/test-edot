function NumberOne() {
  for (var i = 1; i <= 100; i++) {
    var text = "";
    if (i % 3 == 0) text += "Fizz";
    if (i % 5 == 0) text += "Buzz";
    if (text == "") {
      text = i;
    }
    console.log(text);
  }
}

function NumberTwo(params) {
  var num =
    "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(
      " "
    );
  var tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");

  function convertIntegerToWords(input) {
    if (input < 20) return num[input];
    var digit = input % 10;
    if (input < 100)
      return tens[~~(input / 10) - 2] + (digit ? " " + num[digit] : "");
    if (input < 1000)
      return (
        num[~~(input / 100)] +
        " hundred" +
        (input % 100 == 0 ? "" : " " + convertIntegerToWords(input % 100))
      );
    return (
      convertIntegerToWords(~~(input / 1000)) +
      " thousand" +
      (input % 1000 != 0 ? " " + convertIntegerToWords(input % 1000) : "")
    );
  }
  var output = convertIntegerToWords(params);
  console.log(output);
}

function NumberThree(z, y) {
  function Multiply(a, b) {
    if (a == 1) {
      return b;
    } else if (a > 1) {
      return b + Multiply(a - 1, b);
    }
  }
  var hasilPerkalian = Multiply(z, y);
  console.log(hasilPerkalian);
}

function NumberFour(params) {
  var x = 0,
    y = 1,
    next;
  for (var i = 0; i < params; i++) {
    console.log(x);
    next = x + y;
    x = y;
    y = next;
  }
}

// NumberOne();
// NumberTwo(123456); //Ubah parameter ini
// NumberThree(5, 10); //Ubah parameter ini
//NumberFour(10); //Ubah parameter ini
