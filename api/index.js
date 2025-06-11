export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    // GET data komentar
    if (url.pathname === "/api/komentar" && request.method === "GET") {
      const { results } = await env.DB.prepare("SELECT * FROM komentar").all()
      return Response.json(results)
    }

    // POST komentar baru
    if (url.pathname === "/api/komentar" && request.method === "POST") {
      const body = await request.json()
      await env.DB.prepare(
        "INSERT INTO komentar (nama, pesan) VALUES (?, ?)"
      ).bind(body.nama, body.pesan).run()

      return new Response("Komentar berhasil ditambahkan", { status: 200 })
    }

    return new Response("Not Found", { status: 404 })
  }
}