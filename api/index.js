import { Hono } from 'hono';

const app = new Hono();

app.get('/api', (c) => {
  return c.text('hi');
})

app.get('/api/komentar', async (c) => {
  let { results } = await c.env.DB.prepare("SELECT * FROM komentar").all()
  return c.json(results)
})

app.get('*', (c) => c.env.ASSETS.fetch(c.req.raw));

export default app;

    //if (request.method === 'POST' && url.pathname === '/api/komentar') {
      //try {
        //const body = await request.json()
        //console.log("Data masuk:", body)

        //await env.DB.prepare(
          //`INSERT INTO komentar (nama, email, pesan) VALUES (?, ?, ?)`
        //).bind(body.nama, body.email, body.pesan).run()

        //return new Response("Komentar berhasil disimpan", { status: 200 })
      //} catch (err) {
        //console.error("Gagal menyimpan komentar:", err)
        //return new Response("Terjadi kesalahan server", { status: 500 })
      //}
    //}

    //return new Response("Not Found", { status: 404 })
  //}}