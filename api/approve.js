res.setHeader('Access-Control-Allow-Origin', '*');
export default async function handler(req, res) {
  // 👇👇 COLLE CES 2 LIGNES ICI 👇👇
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    const { paymentId } = req.body;
    console.log("Approuver paiement:", paymentId);
    
    return res.status(200).json({ success: true });
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erreur serveur' });
  }
}
