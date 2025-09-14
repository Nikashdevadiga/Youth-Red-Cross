export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gold to-brown text-white mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-10">
        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-bold mb-2">Youth Red Cross</h2>
          <p>
            Dedicated to humanitarian service, compassion, and community
            support.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-xl font-bold mb-2">Contact Us</h2>
          <p className="break-words text-sm">
            📧{" "}
            <a
              href="https://gpt.karnataka.gov.in/kptmangalore/public/en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              https://gpt.karnataka.gov.in/kptmangalore/public/en
            </a>
          </p>
        </div>

        {/* Column 3 (Activities) */}
        <div>
          <h2 className="text-xl font-bold mb-2">Activities</h2>
          <p>🩸 Blood Donation</p>
          <p>🏥 First Aid Training</p>
          <p>🌱 Plantation</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center p-4 border-t border-yellow-200">
        <p className="italic mb-2">
          “Serving humanity with compassion, responsibility, and unity.”
        </p>
        <p>
          &copy; {new Date().getFullYear()} Youth Red Cross. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
