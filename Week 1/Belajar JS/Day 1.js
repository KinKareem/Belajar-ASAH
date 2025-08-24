// ============================== Materi 1 ================================

// Varibael js dibuat menggunakan  const dan let
// Dapat Diubah menggunakan let
// let nama = "Kin";
// nama = "Kintan";
// console.log(nama);

// Tidak dapat diubah menggunakan const
// const score = 100;
// console.log(score);


// ============================== Materi 2 ===========================
//#Tipe Data Undifined (Tanpa Nilai)--------
// let score;
// console.log(score); // undefined

// #Tipe Data Number (+, -, *, /, %)-------
// let a = 10;
// let b = 5;

// console.log(a + b); // 15
// console.log(a - b); // 5
// console.log(a * b); // 50
// console.log(a / b); // 2
// console.log(a % b); // 0

//#Tipe Data increment dan decrement (++, --)-------
// let score = 10;
// score++; // Menambah 1
// console.log(score); // 11

// score--; // Mengurangi 1
// console.log(score); // 10

// #Tipe Data String (" ", ' ', ` `)------
// let firstName = "Kintan";
// console.log(firstName); // Kintan

// #Tipe Data Boolean (true, false)-------
// let waifu = true;
// console.log(waifu); // true
// let isMarried = false;
// console.log(isMarried); // false

// #Tipe Data Null (Tidak ada nilai)------
// let empty = null;
// console.log(empty); // null

// ============================== Materi 3 ===========================
// #Fungsi Dasar------
// function greet() {
//     console.log("Hello, Kin!");
// }

// greet(); // Memanggil fungsi greet

// #Parameter Fungsi dan Argumen------
function greetWaifu(waifu) {
    console.log(`Hello, ${waifu}!`);
}

greetWaifu("Mahiru"); //