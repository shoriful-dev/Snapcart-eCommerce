import { auth } from '@/auth';
import connectDB from '@/lib/db';
import User from '@/models/user.model';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const { role, mobile } = await req.json();
    const session = await auth();

    // Session check
    if (!session || !session.user?.email) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    // Validation
    if (!role || !mobile) {
      return NextResponse.json(
        { message: 'Role and mobile are required' },
        { status: 400 },
      );
    }

    if (mobile.length !== 11) {
      return NextResponse.json(
        { message: 'Mobile number must be 11 digits' },
        { status: 400 },
      );
    }

    // Valid roles check
    const validRoles = ['admin', 'user', 'deliveryBoy'];
    if (!validRoles.includes(role)) {
      return NextResponse.json({ message: 'Invalid role' }, { status: 400 });
    }

    const user = await User.findOneAndUpdate(
      { email: session.user.email },
      { role, mobile },
      { new: true, runValidators: true },
    );

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const userResponse = {
      id: user._id,
      email: user.email,
      mobile: user.mobile,
      role: user.role,
      name: user.name,
    };

    return NextResponse.json(
      {
        message: 'User updated successfully',
        user: userResponse,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('Edit role and mobile error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 },
    );
  }
}
