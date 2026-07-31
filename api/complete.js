export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    const { paymentId, txid } = req.body;
    console.log("Compléter paiement:", paymentId, txid);
    
    return res.status(200).json({ status: "success" }); // <-- TRÈS IMPORTANT
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erreur serveur' });
  }
}
