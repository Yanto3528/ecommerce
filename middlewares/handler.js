import nextConnect from "next-connect";

const handler = nextConnect({
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  },
});

export default handler;

// {
//   onNoMatch: (req, res) => {
//     return res.status(405).json({ error: `Method ${req.method} not allowed` });
//   },
// }
