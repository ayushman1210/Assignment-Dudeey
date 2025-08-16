
const { query } = require('../db/db');

const addrider = async function (req, res) {
	const { name, rating, lat, long } = req.body;
	try {
		const result = await query(
			'INSERT INTO riders (name, rating, lat, long) VALUES ($1, $2, $3, $4) RETURNING *',
			[name, rating, lat, long]
		);
        console.log('error')
		res.status(201).json(result.rows[0]);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}



const getrider = async function (req, res) {
	const { lat, long } = req.query;
	if (!lat || !long) {
		return res.status(400).json({ error: 'latitude and longitude are required in query' });
	}
	try {
		const result = await query(`
			SELECT * FROM (
				SELECT *,
					(6371 * acos(
						cos(radians($1)) * cos(radians(lat)) *
						cos(radians(long) - radians($2)) +
						sin(radians($1)) * sin(radians(lat))
					)) AS distance
				FROM riders
			) AS sub
			WHERE distance < 5
			ORDER BY distance ASC
		`, [lat, long]);
		res.json(result.rows);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

module.exports = { addrider, getrider }