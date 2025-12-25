"use client";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#courses", label: "Courses" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { user, logout } = useAuth();
  const pathname = usePathname();

  return (
    <header id="home" className="ocg-header" >
      <div className="ocg-header-main">
     
        <div className="ocg-container ocg-header-main-inner">
          <div className="ocg-logo" style={{ fontSize: 14 }}>
            <h1>Tax Sapphire</h1>
          </div>
          <nav className="ocg-nav">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`ocg-nav-link${active ? " ocg-nav-link-active" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="ocg-header-actions">
            {user ? (
              <>
                <span style={{ fontSize: 13, marginRight: 4 }}>
                  Hi, {user.name || "Learner"}
                </span>
                <button
                  type="button"
                  className="ocg-btn-outline"
                  onClick={logout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="ocg-btn-outline">
                  Login
                </Link>
                <Link href="/register" className="ocg-btn-primary">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
