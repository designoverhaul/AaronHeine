import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const SITEGROUND_IP = '35.215.119.21';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Proxy WordPress content requests to SiteGround
  if (pathname.startsWith('/wp-content/') || pathname.startsWith('/wp-json/')) {
    const url = new URL(request.url);
    const proxyUrl = `https://${SITEGROUND_IP}${pathname}${url.search}`;
    
    try {
      // Forward the request to SiteGround with proper Host header
      const response = await fetch(proxyUrl, {
        method: request.method,
        headers: {
          ...Object.fromEntries(request.headers.entries()),
          'Host': 'aaronheine.com',
          'X-Forwarded-Host': 'aaronheine.com',
          'X-Forwarded-Proto': 'https',
        },
        body: request.method !== 'GET' && request.method !== 'HEAD' 
          ? await request.arrayBuffer()
          : undefined,
      });
      
      const headers = new Headers(response.headers);
      // Remove headers that might conflict
      headers.delete('transfer-encoding');
      
      return new NextResponse(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers,
      });
    } catch (error) {
      console.error('Proxy error:', error);
      return new NextResponse('Proxy Error', { status: 502 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/wp-content/:path*', '/wp-json/:path*'],
};

