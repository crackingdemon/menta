import data from "../../data/data";

export default function handler(req, res) {
    const { clg } = req.query;
    console.log(clg);
    if (clg.length > 2) {
        res.status(400).json({ data: 'error' });
    } else if (clg.length == 1) {
        if (data[clg[0]]) {
            res.status(200).json(data[clg[0]]);
        } else {
            res.status(400).json({ data: 'error' });
        }
    }
    else if (clg.length == 2) {
        if (data[clg[0]]) {
            if (data[clg[0]][clg[1]]) {
                res.status(200).json(data[clg[0]][clg[1]]);
            } else {
                res.status(400).json({ data: 'error' });
            }
        } else {
            res.status(400).json({ data: 'error' });
        }
    }
}