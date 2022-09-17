import nextConnect from "next-connect";

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
})
.post((req, res) => {
  res.status(200).json({ data: 'Успех' });
})
.get((req,res)=>{
  const { query } = req.query;
  res.status(200).json({data: query})
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, 
  },
};