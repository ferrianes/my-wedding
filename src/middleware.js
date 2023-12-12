import { NextResponse } from 'next/server'
import { useRouter } from 'next/router';

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    return NextResponse.next();
}

export const config = {
    matcher: ['/'], // Matches all routes except for root and API routes
};