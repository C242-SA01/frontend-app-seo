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
    // const data = {
    //   name: event.target.name.value,
    //   email: event.target.email.value,
    //   password: event.target.password.value,
    // };
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
        setError(res.error);
      }
    } catch (error: any) {
      setIsLoading(false);
      setError(error);
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
