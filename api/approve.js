const { Payments } = require('@pi-sdk/server');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { paymentId } = req.body;
    console.log("APPROUVE:", paymentId);
    res.status(200).json({ status: "approved" });
  } else {
    res.status(405).end();
  }
}
