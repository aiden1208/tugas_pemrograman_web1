const form = document.querySelector("#formPendaftaran");
const tabelMahasiswa = document.querySelector("#tabelMahasiswa");

// Menghitung jumlah data awal
let nomor = tabelMahasiswa.rows.length + 1;

// Ketika tombol Daftar diklik
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Mengambil data dari form
  const nim = document.querySelector("#nim").value.trim();
  const namaDepan = document.querySelector("#namaDepan").value.trim();
  const namaBelakang = document.querySelector("#namaBelakang").value.trim();
  const password = document.querySelector("#password").value;
  const jenisKelamin = document.querySelector("#jenisKelamin").value;
  const status = document.querySelector('input[name="status"]:checked');

  // Validasi NIM
  if (nim === "") {
    alert("NIM wajib diisi!");
    return;
  }

  // Memeriksa NIM yang sama
  const semuaBaris = tabelMahasiswa.querySelectorAll("tr");

  for (let baris of semuaBaris) {
    const nimTabel = baris.cells[1].textContent.trim();

    if (nimTabel === nim) {
      alert("NIM sudah terdaftar! Gunakan NIM lain.");
      return;
    }
  }

  // Validasi nama
  if (namaDepan === "" || namaBelakang === "") {
    alert("Nama depan dan belakang wajib diisi!");
    return;
  }

  // Validasi password
  if (password.length < 6) {
    alert("Password minimal harus 6 karakter!");
    return;
  }

  // Validasi jenis kelamin
  if (jenisKelamin === "") {
    alert("Silakan pilih jenis kelamin!");
    return;
  }

  // Validasi status
  if (!status) {
    alert("Silakan pilih status!");
    return;
  }

  // Menggabungkan nama
  const namaLengkap = namaDepan + " " + namaBelakang;

  // Membuat baris baru
  const barisBaru = document.createElement("tr");

  const dataMahasiswa = [nomor, nim, namaLengkap, "Teknik Informatika"];

  // Memasukkan data ke dalam tabel
  dataMahasiswa.forEach(function (data) {
    const kolom = document.createElement("td");
    kolom.textContent = data;
    barisBaru.appendChild(kolom);
  });

  tabelMahasiswa.appendChild(barisBaru);

  // Pesan berhasil
  alert("Pendaftaran berhasil! Selamat datang, " + namaLengkap);

  // Menambah nomor urut
  nomor++;

  // Mengosongkan form
  form.reset();
});
