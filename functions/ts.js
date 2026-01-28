export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const q = (url.searchParams.get("q") || "").trim();

  const key = (env.TS_KEY || "").trim(); // 例: 201604

  if (!key) {
    return new Response(JSON.stringify({ ok:false }), {
      headers: { "content-type": "application/json; charset=utf-8" }
    });
  }

  const ok = q === key;

  if (!ok) {
    return new Response(JSON.stringify({ ok:false }), {
      headers: { "content-type": "application/json; charset=utf-8" }
    });
  }

  return new Response(JSON.stringify({
    ok: true,
    hits: [
      { title: "旧ページ（2016年）", url: "index_2016.html", note: "※通信状況により、古いページが表示されることがあります。" }
    ]
  }), {
    headers: { "content-type": "application/json; charset=utf-8" }
  });
}
