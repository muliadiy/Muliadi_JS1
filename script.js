// Contoh program javascript menggunakan if
var angka = 3;
if(angka < 10) {
    console.log(angka + "lebih kecil dari 10");
}
// jika true maka keluar "angka + "lebih kecil dari 10", tetapi jika false maka hasilnya akan kosong"


// Contoh program javascript menggunakan else
var angka = 4;
if (angka % 2 == 0) {
    console.log(angka + "merupakan bilangan genap");
} else {
    console.log(angka + "merupakan bilangan ganjil");
}
// jika true maka akan keluar angka + "merupakan bilangan genap", tetapi jika false maka hasilnya angka + "merupakan bilangan ganjil"


// Contoh program javascript menggunakan nested if 
var a = 18;
var b = 14;

if (a == 16){
    if (b == 12){
        console.log("ini adalah jika a = 18 b = 14");
    }else {
        console.log("ini adalah jika a = 18 dan b bukan 14");
    }
}else {
    console.log("ini adalah jika a salah");
}


// Contoh program javascript menggunakan switch case
var item = prompt("masukkan nama bahan makanan : \n contoh: telur, susu, daging, nasi, jagung, singkong");

switch(item){
    case "telur" :
        alert("Bahan Protein");
        break;
    case "susu" :
        alert("Bahan Protein");
        break;
    case "daging" :
        alert("Bahan Protein");
        break;
    case "nasi" :
        alert("Bahan Karbohidrat");
        break;
    case "jagung" :
        alert("Bahan Karbohidrat");
        break;
    case "singkong" :
        alert("Bahan Karbohidrat");
        break;
    default :
        alert("nama bahan makanan yang dimasukkan salah");
    break;
}


// Contoh program javascript menggunakan for statement
var jumlahRumah = 6;
var rumahKosong = 3;
var noRumah = 1;

for(noRumah = 4; noRumah <= jumlahRumah; noRumah++ ) {
    console.log("Rumah No. " + noRumah + "Sedang kosong" );
}


// Contoh program javascript menggunakan while
var nilaiAwal = 1;

while(nilaiAwal <= 10){
    console.log("Universitas Samudra" + nilaiAwal + "%");
nilaiAwal++;
}


// Contoh program javascript menggunakan do while
 var angka = 1;
do {
    console.log("anak ke" + angka);
    angka++
} while (angka <= 15);

// Contoh program javascript menggunakan function
function jumlahVolumeDuaKubus(x, y) {
    var volumeX;
    var volumeY;
    var jumlah;

    volumeX = x * x * x;
    volumeY = y * y * y;

    jumlah = volumeX + volumeY;

    return jumlah;
}

console.log(jumlahVolumeDuaKubus(16, 12));