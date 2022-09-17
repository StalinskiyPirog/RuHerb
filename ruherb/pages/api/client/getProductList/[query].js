import { FindProductsByText } from "../../../../components/functions/PrismaCRUD";

export default function handler(req, res) {
  const { query } = req.query
  const result = FindProductsByText({text:query})
  res.send(result)
  res.end()
}