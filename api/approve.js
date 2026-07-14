export default async function handler(req, res) {
  // Important pour que Vercel lise le JSON
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { paymentId } = req.body;
  console.log("APPROUVE:", paymentId);

  // On répond direct à Pi pour qu'il ne bloque pas
  return res.status(200).json({ status: "approved" });
}
