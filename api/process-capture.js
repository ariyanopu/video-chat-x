export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' });
  try {
    const body = req.body;
    if (!body || !body.token || !body.chat_id || !body.mode) {
      return res.status(400).json({ ok: false, error: 'missing fields' });
    }
    console.log('capture request (logged):', {
      mode: body.mode,
      chat_id: body.chat_id,
      origin: body.origin,
      time: new Date().toISOString()
    });
    return res.json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, error: 'server error' });
  }
}
