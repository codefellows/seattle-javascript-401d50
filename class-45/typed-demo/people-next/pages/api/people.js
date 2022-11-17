export default function handler(req, res) {
  console.log(req.query);
  res.status(200).json([{name: "Jacob", id: 1}, {name: 'John', id: 2}])
}
