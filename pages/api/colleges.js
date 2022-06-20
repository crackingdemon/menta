import data from "../../data/data";

export default function handler(req, res) {
    if (req.method === "GET") {
        res.status(200).json(data);
    }
}