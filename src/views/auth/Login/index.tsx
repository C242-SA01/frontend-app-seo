import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const LoginViews = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const { push } = useRouter();
  const handlerLogin = () => {
    push("/");
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center text-primary">SEO Audit Login</h1>
          <p className="mb-8 text-center text-gray-600">Welcome back! Please login to your account.</p>

          <form>
            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input type="email" id="email" placeholder="Enter your email" className="w-full bg-slate-100 input input-bordered" />
            </div>

            {/* Password Field */}
            <div className="relative mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input type={showPassword ? "text" : "password"} id="password" placeholder="Enter your password" className="w-full input input-bordered bg-slate-100" />
              {/* Toggle Button */}
              <button type="button" onClick={togglePasswordVisibility} className="absolute text-gray-600 -translate-y-1 top-1/2 right-3 hover:text-primary focus:outline-none">
                {showPassword ? <i className="ri-eye-line"></i> : <i className="ri-eye-off-line"></i>}
              </button>
            </div>

            {/* Login Button */}
            <div className="mb-6">
              <button onClick={() => handlerLogin()} type="submit" className="w-full text-white border-none btn bg-primary">
                Login
              </button>
            </div>
          </form>

          {/* Additional Links */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don’t have an account?{" "}
              <Link className="font-semibold text-primary" href={"/auth/register"}>
                Sign Up
              </Link>
            </p>
            <p className="mt-2 text-sm text-gray-600">
              <a href="/forgot-password" className="font-semibold text-primary">
                Forgot Password?
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginViews;
