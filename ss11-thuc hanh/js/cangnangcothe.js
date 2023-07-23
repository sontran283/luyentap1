// bmi = weight / ( height *height );
let weight = +prompt("nhap can nang");
let height = +prompt("nhap chieu cao");
let bmi = weight / (height * height);
if (bmi < 18.5) {
    alert("gay");
} else if (bmi < 25) {
    alert("binh thuong");
} else if (bmi < 30) {
    alert("tien beo phi");
} else if (bmi < 35) {
    alert("beo cap do 3");
} else if (bmi < 40) {
    alert("beo cap do 2");
} else {
    alert("beo cap do 3");
}

