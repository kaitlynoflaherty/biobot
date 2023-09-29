import kitsData from '../../data/kits.json';

export default function handler(req, res) {
  const { query } = req.query;

  // if no query return 400
  if (!query) {
    return res.status(400).json({ error: 'Label parameter is required.' });
  }

  const filteredKits = kitsData.filter((kit) =>
    kit.label_id.toLowerCase() == (query.toLowerCase())
  );

  // if no match return 404 
  if (filteredKits.length === 0) {
    return res.status(404).json({ error: 'Kit not found.' });
  }

  res.status(200).json(filteredKits);
}