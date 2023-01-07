/*
Membeli makan siang dan menabung

Rusli adalah seorang anak sekolah di SD Beever
Setiap harinya, Rusli diberikan uang jajan oleh orang tuanya 
sebesar Rp. 10.000,- rupiah.

Rusli bisa menabung atau membeli makanan di sekolahnya untuk
makan siang. Kita telah diberikan catatan keuangan Rusli
dalam bentuk text biasa, dan kita diminta menghitung
jumlah uang tabungan Rusli per harinya dan total tabungannya.

OUTPUT:
{
    Senin: 2000,
    Selasa: 5500,
    Rabu: 3500,
    Kamis: 7000,
    Jumat: 5500,
    TotalTabungan: 23500
}

*/
const counter = (food, price, money) => {
  for (let i = 0; i < price.length; i++) {
    for (let j = 0; j < food.length; j++) {
      if (price[i].nama === food[j]) money -= price[i].harga;
    }
  }
  return money;
};

const split = (str, operator) => {
  let res = [];
  let temp = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === operator || i === str.length - 1) {
      if (i === str.length - 1) temp += str[i];
      res.push(temp);
      temp = "";
    } else temp += str[i];
  }
  return res;
};

function jumlahTabungan(listHarga, history) {
  let obj = {};
  let total = 0;

  const splitRes = split(history, ".");
  let day = [];
  for (let i = 0; i < splitRes.length; i++) {
    let temp = split(splitRes[i], "-");
    day.push(temp);
  }

  for (let i = 0; i < day.length; i++) {
    let food = split(day[i][1], ",");
    const money = counter(food, listHarga, 10000);
    obj[day[i][0]] = money;
  }

  let res = Object.values(obj);

  for (let i = 0; i < res.length; i++) {
    total += res[i];
  }

  obj["TotalTabungan"] = total;

  return obj;
}

var hargaMakanan = [
  {
    nama: "ayam",
    harga: 5000,
  },
  {
    nama: "nasi",
    harga: 2000,
  },
  {
    nama: "cola",
    harga: 1000,
  },
  {
    nama: "chiki",
    harga: 1500,
  },
  {
    nama: "hotdog",
    harga: 3000,
  },
  {
    nama: "aqua",
    harga: 2000,
  },
];

var historyPembelian = `Senin-ayam,nasi,cola.Selasa-chiki,hotdog.Rabu-ayam,chiki.Kamis-hotdog.Jumat-chiki,cola,nasi`;
console.log(jumlahTabungan(hargaMakanan, historyPembelian));
