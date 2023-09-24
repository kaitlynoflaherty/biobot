import kitsData from '../../data/kits.json';

export default function handler(req, res) {
  const { query } = req.query;
  const filteredKits = kitsData.filter((kit) =>
    kit.label_id.toLowerCase().includes(query.toLowerCase())
  );
  res.status(200).json(filteredKits);
}