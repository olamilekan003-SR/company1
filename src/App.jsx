import './index.css';

function App() {
  return (
    <div>
      
      <nav>
        <h1>LEKDAS GLOBAL VENTURE</h1>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav> 

    
      <header id="home">
        <div>
          <h2>Precision Gates , Doors & Food Grinding Machines</h2>
          <p>Custom gates, sturdy doors, and reliable grinders for pepper, yam, and more.</p>
        </div>
      </header>

      
      <section id="about">
        <h2>About Us</h2>
        <p>
          At LEKDAS GLOBAL VENTURE, we specialize in creating durable metal gates, strong doors, 
          and efficient food grinding machines. With years of experience, we blend engineering 
          expertise and craftsmanship to deliver products that last.
        </p>
      </section>

      
      <section id="why-us">
        <h2>Why Choose Us</h2>
        <ul className="features">
          <li>✅ Skilled Engineers</li>
          <li>✅ High-Quality Materials</li>
          <li>✅ Affordable Pricing</li>
          <li>✅ Quick Delivery</li>
        </ul>
      </section>

      
      <section id="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="card"><h3>Gates Fabrication</h3><p>Custom metal gates for homes and businesses.</p></div>
          <div className="card"><h3>Doors Manufacturing</h3><p>Durable doors with custom designs.</p></div>
          <div className="card"><h3>Food Grinding Machines</h3><p>Efficient grinders for pepper, yam, shi.</p></div>
          <div className="card"><h3>Repairs & Custom Orders</h3><p>Maintenance and bespoke builds.</p></div>
        </div>
      </section>

      
      <section id="products">
        <h2>Our Products</h2>
        <div className="product-cards">
          <div className="card"><h3>Metal Gate</h3><p>Sturdy, secure, custom-designed.</p></div>
          <div className="card"><h3>Door</h3><p>Built to last with quality materials.</p></div>
          <div className="card"><h3>Pepper Grinder</h3><p>High-efficiency for home or commercial.</p></div>
          <div className="card"><h3>Yam Grinder</h3><p>Durable, easy to use.</p></div>
          <div className="card"><h3>Shi Grinder</h3><p>Compact, reliable.</p></div>
        </div>
      </section>

      
      <section id="portfolio">
        <h2>Our Portfolio</h2>
        <div className="portfolio-gallery">
          <div className="portfolio-item">Gate Project</div>
          <div className="portfolio-item">Door Project</div>
          <div className="portfolio-item">Pepper Grinder</div>
          <div className="portfolio-item">Yam Grinder</div>
        </div>
      </section>

      
      <section id="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonials">
          <blockquote>“The gate we ordered was exactly what we needed. Strong and beautiful!” – Aleilo O.</blockquote>
          <blockquote>“My pepper grinder has been working perfectly for 2 years now.” – Olubolade A.</blockquote>
          <blockquote>“Quick delivery and great customer service.” – Grace L.</blockquote>
        </div>
      </section>

      
      <section id="cta" className="cta-banner">
        <h2>Looking for Durable Gates and Reliable Grinders?</h2>
      </section>

      
      <section id="contact">
        <h2>Contact & Place an Order</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Product Type (Gate/Door/Grinder)" required />
          <input type="number" placeholder="Quantity" required />
          <input type="text" placeholder="Delivery Address" required />
          <textarea placeholder="Additional Details"></textarea>
          <button type="submit">Submit Order</button>
        </form>
        <div className="contact-info">
          <p>Phone: +234 80 284 434</p>
          <p>Email: owolabioluwaseyi16@gmail.com</p>
          <p>Address: no 24 Barrister Ogunlewe Street Off Bayeku Road Igbogbo Ikorodu Lagos state</p>
        </div>
      </section>


      
      <footer className="footer">
        <div className="footer-links">
          <a href="#home">Home</a><a href="#about">About</a><a href="#services">Services</a>
          <a href="#products">Products</a><a href="#portfolio">Portfolio</a><a href="#contact">Contact</a>
        </div>
        <p>© {new Date().getFullYear()} LEKDAS GLOBAL VENTURE. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

