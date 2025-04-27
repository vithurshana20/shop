function Contact(){
    return(

        <>
       <section style={{ padding: "40px", fontFamily: "Arial, sans-serif", backgroundColor: "#f4f4f4" }}>
  <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
    <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
      We'd Love to Hear From You
    </h2>
      <p style={{
  fontSize: "16px",
  color: "#444"
}}
>Feel free to reach out with any questions or comments, and we'll get back to you as soon as possible.</p>

      <form action="#" method="POST" style={{marginTop: "30px", textAlign: "left"}}>
      <label
  htmlFor="name"
  style={{
    fontSize: "16px",
    display: "block",
    marginBottom: "8px"
  }}
>
  Your Name
</label>
<input
  type="text"
  id="name"
  name="name"
  placeholder="Your Name"
  required
  style={{
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    marginBottom: "20px",
    border: "1px solid #ddd",
    borderRadius: "4px"
  }}
/>

<label
  htmlFor="email"
  style={{
    fontSize: "16px",
    display: "block",
    marginBottom: "8px"
  }}
>
  Your Email
</label>
<input
  type="email"
  id="email"
  name="email"
  placeholder="Your Email"
  required
  style={{
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    marginBottom: "20px",
    border: "1px solid #ddd",
    borderRadius: "4px"
  }}
/>

<label
  htmlFor="message"
  style={{
    fontSize: "16px",
    display: "block",
    marginBottom: "8px"
  }}
>
  Your Message
</label>
<textarea
  id="message"
  name="message"
  placeholder="Your Message"
  rows={6}
  required
  style={{
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    marginBottom: "20px",
    border: "1px solid #ddd",
    borderRadius: "4px"
  }}
/>


<button
  type="submit"
  style={{
    backgroundColor: "#f4c10f",
    color: "#fff",
    padding: "12px 20px",
    fontSize: "16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  }}
>
  Send Message
</button>
      </form>
    </div>
  </section>
        
        
        </>
    )
}
export default Contact