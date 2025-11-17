import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
    try {
        const { username, password } = await request.json();

        const filePath = path.join(process.cwd(), 'data', 'accounts.json');
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(fileContents);

        const account = data.accounts.find((acc) => acc.email === username && acc.password === password);

        if (account) {
            const { password: _, ...accountWithoutPassword } = account;

            return NextResponse.json({
                success: true,
                message: 'Login successful',
                user: accountWithoutPassword,
                role: account.role
            });
        } else {
            return NextResponse.json(
                {
                    success: false,
                    message: 'Invalid username or password'
                },
                { status: 401 }
            );
        }
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: 'An error occurred during login'
            },
            { status: 500 }
        );
    }
}
