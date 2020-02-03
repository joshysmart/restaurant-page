const body = () => {
 const home = () => `
  <div id="home">
   <h2>Discover the pleasures of</h2>
   <p>Dining with us</p>
  </div>
 `
 const about = () => `
  <div id="about">
   <h3>About us</h3>
   <p>Id facere debitis quaerat veritatis sed dolores quod doloribus nulla at harum quibusdam placeat numquam ex, eius consequatur, modi minima maxime illo.
   Similique unde aut eaque? Natus omnis similique hic earum tempora vero maxime vel quaerat quasi eveniet totam, veritatis perferendis porro? Veritatis ab a modi porro nemo vitae sit excepturi dolorum.
   Expedita, ipsa ex alias dolores aperiam eaque accusamus eos esse? Totam nesciunt, adipisci ut aliquam illo nisi similique facilis labore saepe quasi unde, ex ab dolor quae deleniti, minus expedita.</p>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id facere debitis quaerat veritatis sed dolores quod doloribus nulla at harum quibusdam placeat  quaerat quasi eveniet totam, veritatis perferendis porro? Veritatis ab a modi porro nemo vitae sit excepturi dolorum.
   Expedita, ipsa ex alias dolores aperiam eaque accusamus eos esse? Totam nesciunt, adipisci ut aliquam illo nisi similique facilis labore saepe quasi unde, ex ab dolor quae deleniti, minus expedita.</p>
  </div> 
 `

 const contact = () => `
  <div id="contact">
   <div class="contact-form">
    <div class="contact-us">
     <h3>Contact Us</h3>
     <p>Please fill out this quick form and we will be in touch.</p>
    </div>
    <form action="">
     <input type="text" name="" id="" placeholder="Name">
     <input type="text" name="" id="" placeholder="Your email address ">
     <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
    </form>
   </div>

   <div class="connect">
    <div class="phone">
     <h3>Connect with us</h3>
     <p>For support and enquiries:</p>
     <p>Email us at support@joshyfoods.com</p>
     <p>Phone +234 xxx xxx xxxx</p>
    </div>

    <div class="address">
     <h3>Address</h3>
     <p>Magnam vero, vitae repellat culpa explicabo fuga at quos tenetur cupiditate sed.</p>
    </div>
   </div>
  </div> 
 `

 const menu = () => `
  <div id="menu">
   <div class="our-menu">
    <h3>Our menu</h3>
    <p>We offer the folllowing delicacies:</p>
   </div>
   <ul>
    <li>Rice</li>
    <li>Beans</li>
    <li>Yam</li>
    <li>Pasta</li>
    <li>Sause</li>
    <li>Fish</li>
    <li>Chicken</li>
    <li>Turkey</li>
    <li>Beef</li>
    <li>Seafood</li>
    <li>Snacks</li>
    <li>Drinks</li>
   </ul>
  </div>
  </div>
 `
 return { home, about, contact, menu }
}

export default body