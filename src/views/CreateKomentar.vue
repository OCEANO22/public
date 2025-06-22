<script setup>
import { ref } from 'vue'

const nama = ref('')
const email = ref('')
const pesan = ref('')
const komentar = ref([])

async function submitKomentar() {
  try {
      await fetch('/api/komentar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nama: nama.value,
        email: email.value,
        pesan: pesan.value
      })
    })

    
    komentar.value.push({ nama: nama.value,email: email.value, pesan: pesan.value })

    // Reset form
    nama.value = ''
    email.value = ''
    pesan.value = ''
  } catch (err) {
    console.error('Gagal mengirim komentar:', err)
  }
}
</script>

