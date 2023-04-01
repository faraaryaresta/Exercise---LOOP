let jumlahKlik = 0;
let konfirmasi = "Apakah anda mau mengulang?";

while(true) {
    if (confirm(konfirmasi)) {
        jumlahKlik++
    } else {
        document.write(`Perulangan sudah dilakukan sebanyak ${jumlahKlik} kali`) 
        break;
    }
}