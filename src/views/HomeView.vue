
<template>
  <div>
    <header>
    <img src="/logo.png" alt="Logo Organisasi" />
      <h1>PUBLIC RELATION HUMANIKA</h1>
    </header>

    <nav>
      <a href="#tentang">Tentang Kami</a>
      <a href="#kontak">Kontak</a>
      <a href="#jobdisk">Jobdisk</a>
      <a href="#program-kerja">Program Kerja</a>
      <a href="#komentar">Tambah Komentar</a>
    </nav>

    <div class="container">
      <section id="tentang" class="about-section">
        <img src="/seal.png" alt="public relation" />
        <div class="text">
          <h2>Tentang Kami</h2>
          <p align="justify">PUBLIC RELATION HUMANIKA adalah salah satu departemen dalam struktur 
            Himpunan Mahasiswa Informatika (HUMANIKA) Universitas Yudharta Pasuruan 
            yang memiliki peran utama sebagai penghubung komunikasi dan informasi 
            antara HUMANIKA dengan pihak internal maupun eksternal.
            Sebagai wajah luar dari HUMANIKA, Public Relation bertugas menjaga 
            citra positif, membangun relasi strategis, dan memastikan informasi organisasi 
            tersampaikan secara baik, tepat sasaran, dan profesional.

</p>
        </div>
      </section>
    </div>

    <div class="container">
      <section id="jobdisk">
        <h2>Jobdisk</h2>
        <ul>
          <li>Melakukan hubungan keorganisasian dengan ikatan mahasiswa Teknik Informatika se-Indonesia.</li>
          <li>Melakukan hubungan keorganisasian dengan ikatan mahasiswa Teknik UYP.</li>
          <li>Membina dan menjaga jaringan dengan alumni melalui kegiatan temu alumni mahasiswa.</li>
          <li>Sebagai jembatan penghubung informasi dengan pihak internal maupun eksternal himpunan.</li>
          <li>Membantu sekretaris dalam penyebaran surat-menyurat (administratif).</li>
        </ul>
      </section>
    </div>

    <div class="container">
      <section id="program-kerja">
        <h2 align="center">Program Kerja</h2>
        <table>
          <thead>
            <tr>
              <th>NAMA PROGRAM</th>
              <th>TUJUAN</th>
              <th>DESKRIPSI PROGRAM</th>
              <th>WAKTU PELAKSANAAN</th>
              <th>SASARAN</th>
              <th>PJ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in programKerja" :key="index">
              <td>{{ item.nama }}</td>
              <td>{{ item.tujuan }}</td>
              <td>{{ item.deskripsi }}</td>
              <td>{{ item.waktu }}</td>
              <td>{{ item.sasaran }}</td>
              <td>{{ item.pj }}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>

    <div class="container">
  <section id="komentar">
    <h2 align="center">Tambah Komentar</h2>
    <form @submit.prevent="submitKomentar">
      <input v-model="nama" placeholder="Nama Anda" required>
      <input v-model="email" placeholder="Email Anda" type="email" required>
      <textarea v-model="pesan" placeholder="Pesan Anda" required></textarea>
      <button type="submit">Kirim Komentar</button>
    </form>
    <div class="komentar-list">
      <div v-for="(item, index) in komentar" :key="index" class="komentar-item">
        <h3>{{ item.nama }}</h3>
        <p>{{ item.pesan }}</p>
      </div>
    </div>
  </section>
</div>

    <section id="kontak">
      <h2>Kontak Kami</h2>
      <p>Email: <a href="mailto:publicrelation@gmail.com">publicrelation@gmail.com</a></p>
      <p>Telepon: <a href="https://api.whatsapp.com/send/?phone=083824420507&text&type=phone_number&app_absent=0">ADMIN</a></p>
      <p>
        Alamat:
        <a href="https://maps.app.goo.gl/sUDzQxesDLizTLX79" target="_blank">
          Sengonagung, Kec. Purwosari, Universitas Yudharta Pasuruan
        </a>
      </p>
    </section>

    <footer>
      <p style="font-size: large; font-weight: bold;">&copy; 2025 Publik Relation. Semua Hak Dilindungi.</p>
    </footer>
  </div>
</template>

<script setup>
const programKerja = [
  {
    nama: 'Bakti Ramadan',
    tujuan: 'Meningkatkan kepedulian sosial dan kebersamaan di bulan Ramadan',
    deskripsi: 'Kegiatan berbagi seperti buka puasa bersama, santunan anak yatim, dan pembagian sembako',
    waktu: 'Ramadan 2025',
    sasaran: 'Masyarakat',
    pj: 'Dev. Publik'
  },
  {
    nama: 'Malam Keakraban (Makrab) Fakultas',
    tujuan: 'Membangun solidaritas dan kebersamaan antar mahasiswa IT dengan prodi Teknik lainnya',
    deskripsi: 'Kegiatan perkenalan, outbond, diskusi, dan hiburan',
    waktu: 'Kondisional',
    sasaran: 'Mahasiswa Fakultas Teknik',
    pj: 'Dev. Publik'
  },
  {
    nama: 'Studi Banding',
    tujuan: 'Menambah wawasan dan membangun relasi dengan organisasi dari institusi lain',
    deskripsi: 'Kunjungan ke universitas lain untuk berbagi pengalaman dan belajar manajemen organisasi',
    waktu: 'Kondisional',
    sasaran: 'Organisasi Kampus Lain',
    pj: 'Dev. Publik'
  },
  {
    nama: 'Turnamen Futsal',
    tujuan: 'Menjalin kekompakan dan meningkatkan sportivitas antar mahasiswa',
    deskripsi: 'Kompetisi futsal antar jurusan atau fakultas dengan sistem turnamen',
    waktu: 'Kondisional',
    sasaran: 'Mahasiswa',
    pj: 'Dev. Publik'
  }
]
import { ref } from 'vue'

const nama = ref('')
const email = ref('')
const pesan = ref('')
const komentar = ref([])

async function submitKomentar() {
  try {
    await fetch('https://api-komentar.<subdomain>.workers.dev/api/komentar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nama: nama.value,
        email: email.value,
        pesan: pesan.value
      })
    })

    
    komentar.value.push({ nama: nama.value, pesan: pesan.value })

    // Reset form
    nama.value = ''
    email.value = ''
    pesan.value = ''
  } catch (err) {
    console.error('Gagal mengirim komentar:', err)
  }
}


</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
  background-image: url('14005763_b642b373-f962-41b8-b237-1173e60b8908_1280_720.jpg');
  background-size: cover;
  background-attachment: fixed;
}
header {
  background-color: #000000;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
header img {
  width: 80px;
  height: auto;
  border-radius: 8px;
}
nav {
  background-color: #333;
  padding: 10px;
  text-align: center;
}
nav a {
  color: #fff;
  margin: 0 15px;
  text-decoration: none;
  font-weight: bold;
  padding: 10px 20px;
  position: relative;
  transition: all 0.3s ease;
}
nav a:hover {
  color: #ffcc00;
  background-color: #555;
  border-radius: 5px;
  transform: translateY(-5px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
}
nav a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  background-color: #ffcc00;
  bottom: 0;
  left: 50%;
  transition: all 0.3s ease;
}
nav a:hover::after {
  width: 100%;
  left: 0;
}
.container {
  width: 80%;
  margin: 20px auto;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
#kontak {
  background-color: #333;
  color: #fff;
  padding: 40px 20px;
  text-align: center;
  margin-top: 20px;
}
#kontak a {
  color: #ffcc00;
  text-decoration: none;
}
#kontak a:hover {
  text-decoration: underline;
}
footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px 0;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}
th {
  background-color: gold;
  color: #000;
}
img {
  width: 300px;
  border-radius: 8px;
}
.about-section {
  display: flex;
  align-items: center;
  gap: 20px;
}
.about-section img {
  flex: 1;
  max-width: 300px;
}
.about-section .text {
  flex: 2;
}
  #komentar form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 500px;
    margin: 0 auto;
  }

  #komentar input, 
  #komentar textarea {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  #komentar button {
    padding: 10px;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .komentar-list {
    margin-top: 20px;
  }

  .komentar-item {
    background-color: #f9f9f9;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 10px;
  }
  @media (max-width: 768px) {
    table {
      display: block;
      overflow-x: auto;
    }
    
    .about-section {
      flex-direction: column;
    }
  }
  button[type="submit"] {
  transition: transform 0.1s ease, background-color 0.3s ease;
  background-color: #333;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  border: none;
}

button[type="submit"]:active {
  transform: scale(0.95); 
  background-color: #555; 
}
</style>