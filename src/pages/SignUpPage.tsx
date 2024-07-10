import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repassword, setRepassword] = useState<string>("");
  const [referral, setReferral] = useState<string>("");

  const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Perform sign-up logic here (validate, API call, etc.)
    // For demonstration, log form values
    console.log("Fullname:", fullname);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Re-entered Password:", repassword);
    console.log("Referral code:", referral);

    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white mt-12">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-deceiver mb-6">Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="fullname">
              Fullname <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullname"
              className="w-full p-2 border border-grey rounded"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-grey rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="password">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-grey rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="repassword">
              Re-enter Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="repassword"
              className="w-full p-2 border border-grey rounded"
              value={repassword}
              onChange={(e) => setRepassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="referral">
              Referral code (optional)
            </label>
            <input
              type="text"
              id="referral"
              className="w-full p-2 border border-grey rounded"
              value={referral}
              onChange={(e) => setReferral(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-secondary transition-colors"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-deceiver">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-primary primary hover:text-secondary"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
