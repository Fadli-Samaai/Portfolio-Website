import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/api/download-cv', async (req, res) => {
    const cvUrl = process.env.CV_DOWNLOAD_URL;
    if (!cvUrl) return res.status(500).send('CV URL not configured');

    try {
        const response = await fetch(cvUrl);
        if (!response.ok) return res.status(response.status).send('Failed to fetch CV');

        const buffer = await response.buffer();
        res.set({
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Fadli_Samaai_CV.pdf"',
        'Content-Length': buffer.length,
        });
        res.send(buffer);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
    });

    app.listen(PORT, () => {
});