export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    if (request.method === 'POST' && url.pathname === '/api/komentar') {
      const body = await request.json()

      // Menyisipkan data ke tabel "komentar"
      await env.DB.prepare(
        `INSERT INTO komentar (nama, email, pesan) VALUES (?, ?, ?)`
      ).bind(body.nama, body.email, body.pesan).run()

      return new Response("Komentar berhasil disimpan", { status: 200 })
    }

    return new Response("Not Found", { status: 404 })
  }
}
