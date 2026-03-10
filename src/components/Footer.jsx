import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">

        <div>
          <h3 className="text-xl font-bold text-white mb-4">
            ChefBazaar
          </h3>
          <p>
            Discover delicious meals prepared by expert chefs.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Links</h4>
          <ul className="space-y-2">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/all-meal">Meals</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Resources</h4>
          <ul className="space-y-2">
            <li>Blog</li>
            <li>Help Center</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Follow Us</h4>
          <div className="flex gap-4 text-2xl">
            <span>🌐</span>
            <span>🐦</span>
            <span>📘</span>
          </div>
        </div>

      </div>

      <div className="text-center mt-12 border-t border-gray-700 pt-6 text-sm">
        © {new Date().getFullYear()} CostaVida. All rights reserved.
      </div>

    </footer>
  );
}