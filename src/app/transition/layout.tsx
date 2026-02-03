import Link from 'next/link';
import Image from 'next/image';

export default function TransitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f0]">
      {/* Header */}
      <header className="bg-white border-b border-[#e5e5e5] h-16 flex-shrink-0">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-full flex items-center justify-between">
          {/* Left - Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/va-logo-official.png"
              alt="VA | U.S. Department of Veterans Affairs"
              width={200}
              height={44}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Center - Breadcrumb */}
          <div className="hidden md:flex items-center gap-2 text-sm">
            <Link href="/" className="text-[#0071bc] hover:underline">
              Home
            </Link>
            <span className="text-[#6b7280]">/</span>
            <span className="text-[#374151]">Transition Journey</span>
          </div>

          {/* Right - Sign In */}
          <Link
            href="/transition/sign-in"
            className="bg-[#0071bc] hover:bg-[#005a9e] text-white text-sm font-medium px-5 py-2 rounded-md transition-colors"
          >
            Sign in
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] py-12 px-6 lg:px-12 flex-shrink-0">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Column 1 */}
            <div>
              <h3 className="text-[13px] font-semibold text-white uppercase tracking-wider mb-4">Contact</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-[#d1d5db] hover:text-white transition-colors">Contact us</a></li>
                <li><a href="#" className="text-sm text-[#d1d5db] hover:text-white transition-colors">Find a VA location</a></li>
                <li><a href="tel:1-800-827-1000" className="text-sm text-[#d1d5db] hover:text-white transition-colors">1-800-827-1000</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-[13px] font-semibold text-white uppercase tracking-wider mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-[#d1d5db] hover:text-white transition-colors">VA benefits</a></li>
                <li><a href="#" className="text-sm text-[#d1d5db] hover:text-white transition-colors">Health care</a></li>
                <li><a href="#" className="text-sm text-[#d1d5db] hover:text-white transition-colors">Education</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-[13px] font-semibold text-white uppercase tracking-wider mb-4">Crisis Support</h3>
              <ul className="space-y-2">
                <li><a href="tel:988" className="text-sm text-[#d1d5db] hover:text-white transition-colors">Call 988, Press 1</a></li>
                <li><a href="sms:838255" className="text-sm text-[#d1d5db] hover:text-white transition-colors">Text 838255</a></li>
                <li><a href="#" className="text-sm text-[#d1d5db] hover:text-white transition-colors">Chat online</a></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h3 className="text-[13px] font-semibold text-white uppercase tracking-wider mb-4">This Demo</h3>
              <ul className="space-y-2">
                <li><a href="https://github.com/friends-innovation-lab/va-transition-journey" target="_blank" rel="noopener noreferrer" className="text-sm text-[#d1d5db] hover:text-white transition-colors">GitHub ↗</a></li>
                <li><a href="https://friendsfromthecity.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[#d1d5db] hover:text-white transition-colors">Friends Innovation Lab ↗</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-[#333] pt-6">
            <p className="text-[13px] text-[#6b7280]">
              © 2026 U.S. Department of Veterans Affairs
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
