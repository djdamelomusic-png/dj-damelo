export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { paymentId, txid } = req.body;
    console.log("COMPLETE:", paymentId, txid);
    res.status(200).json({ status: "completed" });
  } else {
    res.status(405).end();
  }
}
