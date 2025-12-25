"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useAuth } from "@/context/AuthContext";

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Unable to login");
      }

      login(data);
      router.push("/");
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="ocg-auth-wrapper">
        <div className="ocg-auth-card">
          <div className="ocg-auth-header">
            <div className="ocg-section-eyebrow">Welcome back</div>
            <h1 className="ocg-auth-title">Login to your account</h1>
            <p className="ocg-auth-subtitle">
              Access your enrolled courses and continue learning where you left
              off.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="ocg-form-grid">
            <div>
              <label className="text-muted" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="ocg-input mt-2"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="text-muted" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                className="ocg-input mt-2"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && (
              <div
                style={{
                  fontSize: 14,
                  color: "#d32f2f",
                }}
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              className="ocg-btn-primary ocg-btn-block mt-4"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="ocg-auth-footer">
            Don&apos;t have an account?{" "}
            <Link href="/register">Register</Link>
          </div>
        </div>
      </main>
    </>
  );
}
