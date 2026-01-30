import { FC } from 'react';
import Link from 'next/link';

const UnauthorizedPage: FC = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <section
        className="w-full h-screen bg-white p-8 text-center shadow-lg"
        aria-labelledby="unauthorized-title"
      >
        <h1
          id="unauthorized-title"
          className="mb-4 text-6xl font-bold text-red-500"
        >
          401
        </h1>

        <h2 className="mb-2 text-2xl font-semibold text-gray-800">
          Unauthorized Access
        </h2>

        <p className="mb-6 text-gray-600">
          You don&apos;t have permission to access this page. Please login with the
          correct account.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Go Home
          </Link>

          <Link
            href="/login"
            className="rounded-lg border border-gray-300 px-5 py-2 text-gray-700 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Login
          </Link>
        </div>
      </section>
    </main>
  );
};

export default UnauthorizedPage;
