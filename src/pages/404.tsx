import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        {/* Illustration */}
        <div className="mb-8">
          <img src="/404.png" alt="404 Illustration" className="w-64 mx-auto" />
        </div>

        {/* Error Message */}
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <p className="mt-4 text-xl font-semibold text-gray-800">Oops! Page not found.</p>
        <p className="mt-2 text-gray-600">The page you’re looking for doesn’t exist or has been moved.</p>

        {/* Button to Home */}
        <div className="mt-6">
          <Link href="/" className="px-6 py-3 text-white transition duration-300 rounded-lg bg-primary hover:bg-primary-focus">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
