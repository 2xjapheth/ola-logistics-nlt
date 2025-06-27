
import React from "react";
import { Phone, Mail } from "lucide-react";

export default function App() {
  return (
    <main>
      <header style={{ backgroundColor: '#000', color: '#fff', padding: '1rem', display: 'flex', justifyContent: 'space-between' }}>
        <h1>OLA LOGISTICS NLT</h1>
        <div>
          <span style={{ marginRight: '1rem' }}>📞 08022229374</span>
          <span>✉️ Olatunji77yusuf@gmail.com</span>
        </div>
      </header>

      <section style={{ background: 'linear-gradient(to right, #1a1a1a, #333)', color: '#fff', padding: '3rem', textAlign: 'center' }}>
        <h2>Driven by Excellence</h2>
        <p>Reliable transportation solutions for your personal, corporate, or intercity logistics.</p>
      </section>

      <section style={{ padding: '2rem' }}>
        <h2>Our Fleet</h2>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <div><img src="/fleet/prado.jpg" alt="Prado" width="200" /><p>Prado</p></div>
          <div><img src="/fleet/gwagon.jpg" alt="G-Wagon" width="200" /><p>G-Wagon</p></div>
          <div><img src="/fleet/coaster.jpg" alt="Coaster Bus" width="200" /><p>Coaster Bus</p></div>
        </div>
      </section>

      <section style={{ backgroundColor: '#f9f9f9', padding: '2rem' }}>
        <h2>Contact Us</h2>
        <form style={{ maxWidth: '400px', margin: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required />
          <button type="submit" style={{ backgroundColor: '#ffc107', padding: '0.5rem' }}>Send Message</button>
        </form>
      </section>

      <footer style={{ backgroundColor: '#000', color: '#fff', textAlign: 'center', padding: '1rem' }}>
        &copy; {new Date().getFullYear()} OLA LOGISTICS NLT. All rights reserved.
      </footer>
    </main>
  );
}
