import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const RegisterView = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);
  const { push } = useRouter();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle register logic here
    push("/auth/login");
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
    const result = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (result.status === 200) {
      event.target.reset();
      setIsLoading(false);
      push("/auth/login");
    } else {
      setIsLoading(false);
      setError(result.status === 400 ? "Email already exists" : "");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-primary">Register Account</h1>
        <p className="mb-8 text-center text-gray-600">Create an account to access SEO Audit.</p>
        {error && (
          <div role="alert" className="mb-4 alert alert-error">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-current shrink-0" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{error}</span>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input type="text" id="name" placeholder="Enter your name" className="w-full bg-slate-100 input input-bordered" required />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input type="email" id="email" placeholder="Enter your email" className="w-full bg-slate-100 input input-bordered" required />
          </div>

          {/* Password Field */}
          <div className="relative mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input type={showPassword ? "text" : "password"} id="password" placeholder="Enter your password" className="w-full bg-slate-100 input input-bordered" required />
            <button type="button" onClick={togglePasswordVisibility} className="absolute text-gray-600 -translate-y-1 top-1/2 right-3 hover:text-primary focus:outline-none">
              {showPassword ? <i className="ri-eye-line"></i> : <i className="ri-eye-off-line"></i>}
            </button>
          </div>

          {/* Confirm Password Field */}
          {/* <div className="relative mb-4">
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input type={showConfirmPassword ? "text" : "password"} id="confirm-password" placeholder="Confirm your password" className="w-full bg-slate-100 input input-bordered" required />
            <button type="button" onClick={toggleConfirmPasswordVisibility} className="absolute text-gray-600 -translate-y-1 top-1/2 right-3 hover:text-primary focus:outline-none">
              {showConfirmPassword ? <i className="ri-eye-line"></i> : <i className="ri-eye-off-line"></i>}
            </button>
          </div> */}

          {/* Register Button */}
          <div className="mb-6">
            <button type="submit" className="w-full text-white border-none btn bg-primary" disabled={isLoading}>
              {isLoading ? "Loading..." : "Register"}
            </button>
          </div>
        </form>

        {/* Additional Links */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link className="text-primary" href="/auth/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterView;
