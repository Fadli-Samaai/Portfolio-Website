export async function GET() {
    try {
        const cvUrl = process.env.CV_DOWNLOAD_URL;
        
        if (!cvUrl) {
            return new Response('CV URL not configured', { 
                status: 500,
                headers: { 'Content-Type': 'text/plain' }
            });
        }

        const response = await fetch(cvUrl);
        
        if (!response.ok) {
            throw new Error(`Failed to fetch CV: ${response.status} ${response.statusText}`);
        }

        const buffer = await response.arrayBuffer();
        
        return new Response(buffer, {
            status: 200,
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'attachment; filename="Fadli_Samaai_CV.pdf"',
                'Content-Length': buffer.byteLength.toString(),
                'Cache-Control': 'public, max-age=3600',
            },
        });
        
    } catch (error) {
        console.error('Error downloading CV:', error);
        return new Response('Failed to download CV', { 
            status: 500,
            headers: { 'Content-Type': 'text/plain' }
        });
    }
}
