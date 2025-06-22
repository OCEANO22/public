import { Hono } from 'hono';


type D1Database = any; 

type Bindings = {
  ASSETS: any
  DB: D1Database
}

const app = new Hono<{ Bindings: Bindings }>();
app.get("/api/publics", async (c) => {
  try {
    
    const res = await c.env.DB.prepare("SELECT * FROM komentar").all(); 
    return c.json(res.results);
  } catch (error) {
    console.error("Error fetching publics:", error);
    return c.json({ error: "Failed to fetch publics" }, 500);
  }
});

app.post("/api/publics/komentar", async (c) => {
  const newId = crypto.randomUUID();
  const input = await c.req.json<any>();
  await c.env.DB.prepare(
    `
    INSERT INTO komentar (id, nama, email, pesan)
VALUES ("${newId}", "${input.nama}", "${input.email}", "${input.pesan}");
  `
  ).run();

  return c.json({
    message: "komentar berhasil disimpan",
    id: newId,
  });
});
export default app;

//async function o() {
  //try {
    // Replace <subdomain> with your actual subdomain
    //await fetch("https://api-komentar.public.workers.dev/api/komentar", {
      //method: "POST",
      //headers: {
        //"Content-Type": "application/json"
      //},
      //body: JSON.stringify({
        //nama: n.value,
        //email: s.value,
        //pesan: r.value
      //})
    //});
    //i.value.push({
      //nama: n.value,
      //pesan: r.value
    //});
    //n.value = "";
    //s.value = "";
    //r.value = "";
  //} catch (a) {
    //console.error("Gagal mengirim komentar:", a);
  //}
//}
//app.get('/api', (c) => {
  //return c.text('hi');
//})

//app.get('/api/komentar', async (c) => {
  //let { results } = await c.env.DB.prepare("SELECT * FROM komentar").all()
  //return c.json(results)
//})

//app.get('*', (c) => c.env.ASSETS.fetch(c.req.raw));

//export default app;

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