// src/app/api/observations/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getObservations } from '@/lib/api';

export async function GET(request: NextRequest) {

    const page = request.nextUrl.searchParams.get('page') || 1;
    const per_page = request.nextUrl.searchParams.get('per_page') || 10000;

    const data = await getObservations(Number(page), Number(per_page));

    return NextResponse.json(data);
}