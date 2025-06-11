export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    if (request.method === 'POST' && url.pathname === '/api/komentar') {
      try {
        const body = await request.json()
        console.log("Data masuk:", body)

        await env.DB.prepare(
          `INSERT INTO komentar (nama, email, pesan) VALUES (?, ?, ?)`
        ).bind(body.nama, body.email, body.pesan).run()

        return new Response("Komentar berhasil disimpan", { status: 200 })
      } catch (err) {
        console.error("Gagal menyimpan komentar:", err)
        return new Response("Terjadi kesalahan server", { status: 500 })
      }
    }

    return new Response("Not Found", { status: 404 })
  }}