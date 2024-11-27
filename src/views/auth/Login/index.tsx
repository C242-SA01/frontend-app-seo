import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const LoginViews = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const { push, query } = useRouter();
  const callbackUrl: any = query.callbackUrl || "/";
  const handlerLogin = () => {
    push("/");
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: event.target.email.value,
        password: event.target.password.value,
        callbackUrl: "/",
      });
      if (!res?.error) {
        setIsLoading(false);
        push(callbackUrl);
      } else {
        setIsLoading(false);
        setError("Email or password is incorrect");
      }
    } catch (error: any) {
      setIsLoading(false);
      setError("Email or password is incorrect");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center text-primary">SEO Audit Login</h1>
          <p className="mb-8 text-center text-gray-600">Welcome back! Please login to your account.</p>
          {error && (
            <div role="alert" className="mb-4 alert alert-error">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-current shrink-0" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{error}</span>
            </div>
          )}
          <form onSubmit={handleSubmit}>
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
              <button type="submit" className="w-full text-white border-none btn bg-primary :hover:bg-primary-focus">
                Login
              </button>
            </div>
          </form>

          {/* Additional Links */}
          <div className="text-center">
            <p>Or</p>
            {/* Tombol Sign In dengan Google */}
            <div className="mt-4 mb-2">
              <button
                onClick={() => signIn("google", { callbackUrl, redirect: false })}
                className="flex items-center justify-center w-full px-4 py-2 text-white transition-all duration-200 bg-red-500 rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-3">
                  <path d="M21.8 10.23H12v3.55h5.6c-.42 2.22-2.42 3.84-5.6 3.84-3.3 0-5.99-2.66-5.99-5.94s2.69-5.94 5.99-5.94c1.44 0 2.75.52 3.78 1.37l2.64-2.5C16.88 2.45 14.56 1.5 12 1.5 6.6 1.5 2.25 5.7 2.25 11S6.6 20.5 12 20.5c5.68 0 9.75-3.86 9.75-9.41 0-.66-.1-1.31-.25-1.86z" />
                </svg>
                Sign in with Google
              </button>
            </div>

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
