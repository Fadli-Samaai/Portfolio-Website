export async function GET() {
console.log('=== CV Download API Called ===');
    
    try {
        // Check environment variable
        const cvUrl = process.env.CV_DOWNLOAD_URL;
        console.log('Environment variable status:', cvUrl ? 'Set' : 'Not set');
        console.log('URL length:', cvUrl ? cvUrl.length : 0);
        
        if (!cvUrl) {
            console.error('CV_DOWNLOAD_URL environment variable is missing');
            return new Response('CV URL not configured', { 
                status: 500,
                headers: { 'Content-Type': 'text/plain' }
            });
        }

        console.log('Fetching from URL...');
        
        // Fetch the file from Supabase storage with timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
        
        const response = await fetch(cvUrl, {
            signal: controller.signal,
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; CV-Downloader/1.0)',
            }
        });
        
        clearTimeout(timeoutId);
        
        console.log('Fetch response status:', response.status);
        console.log('Fetch response headers:', Object.fromEntries(response.headers.entries()));
        
        if (!response.ok) {
            console.error(`Fetch failed: ${response.status} ${response.statusText}`);
            return new Response(`Failed to fetch CV: ${response.status} ${response.statusText}`, { 
                status: response.status,
                headers: { 'Content-Type': 'text/plain' }
            });
        }

        // Check content type
        const contentType = response.headers.get('content-type');
        console.log('Content type:', contentType);
        
        if (!contentType || !contentType.includes('pdf')) {
            console.warn('Unexpected content type:', contentType);
        }

        // Get the file as a buffer
        console.log('Converting to buffer...');
        const buffer = await response.arrayBuffer();
        console.log('Buffer size:', buffer.byteLength, 'bytes');
        
        if (buffer.byteLength === 0) {
            console.error('Empty file received');
            return new Response('Empty file received', { 
                status: 500,
                headers: { 'Content-Type': 'text/plain' }
            });
        }

        console.log('Sending file to client...');
        
        // Return the file with appropriate headers for download
        return new Response(buffer, {
            status: 200,
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'attachment; filename="Fadli_Samaai_CV.pdf"',
                'Content-Length': buffer.byteLength.toString(),
                'Cache-Control': 'no-cache',
                'X-Content-Type-Options': 'nosniff',
            },
        });
        
    } catch (error) {
        console.error('=== CV Download Error ===');
        console.error('Error type:', error.name);
        console.error('Error message:', error.message);
        console.error('Error stack:', error.stack);
        
        let errorMessage = 'Failed to download CV';
        let statusCode = 500;
        
        if (error.name === 'AbortError') {
            errorMessage = 'Download timeout - file too large or server slow';
            statusCode = 504;
        } else if (error.message.includes('fetch')) {
            errorMessage = 'Unable to fetch file from storage';
            statusCode = 502;
        }
        
        return new Response(errorMessage, { 
            status: statusCode,
            headers: { 'Content-Type': 'text/plain' }
        });
    }
}
