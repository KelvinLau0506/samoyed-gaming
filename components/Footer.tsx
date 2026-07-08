export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-black">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-3">

          <div>
            <h2 className="text-3xl font-bold text-cyan-400">
              Samoyed Gaming
            </h2>

            <p className="mt-4 text-gray-400">
              Professional Game Top-up Platform in Malaysia.
              Fast • Safe • Trusted.
            </p >
          </div>

          <div>
            <h3 className="text-xl font-bold">
              Contact
            </h3>

            <div className="mt-4 space-y-2 text-gray-400">

              <p>📱 WhatsApp: +60 10-786 6876</p >

              <p>💬 WeChat: SMY05061010</p >

              <p>📷 Instagram: @samoyed_studio</p >

              <p>📘 Facebook: Samoyed Gaming</p >

            </div>

          </div>

          <div>
            <h3 className="text-xl font-bold">
              Support
            </h3>

            <div className="mt-4 space-y-2 text-gray-400">

              <p>✔ 24/7 Customer Service</p >

              <p>✔ Fast Delivery</p >

              <p>✔ Secure Payment</p >

              <p>✔ Trusted Seller</p >

            </div>

          </div>

        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-gray-500">

          © 2026 Samoyed Gaming. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}