import bed from "/src/assets/images/bed1.jpeg";
import mirror from "/src/assets/images/mirror.jpeg";
function Home() {
    return (
        <>
              <section classNameName="hero" style={ {backgroundColor:"#b1b0af", height: "100vh", backgroundSize: "cover", backgroundPosition: "center" }}>
    <div className="hero-text" style={{color: "black", textAlign: "center", paddingTop: "5vh" }}>
      <h1>Modern Bedroom</h1>
      <p>We Make Your Dreams Real!</p>
      <img src={bed} alt="Bedroom" style={{ width: "1000px", height: "600px",  marginTop: "15px" }} />
    </div>
  </section>
  <section style={{ fontFamily: "Arial, sans-serif", padding: "40px", backgroundColor: "#fff" }}>

  <div style={{ borderLeft: "3px solid #f4c10f", paddingLeft: "20px", marginBottom: "20px" }}>
  <h2 style={{ fontSize: "32px", fontWeight: "bold", margin: 0 }}>About Us</h2>
</div>


<p style={{ maxWidth: "100%", fontSize: "16px", color: "#444", lineHeight: 1.8 }}>

    Interior design is the art and science of enhancing the interior of a building to achieve a healthier and more aesthetically
    pleasing environment for the people using the space. An interior designer is someone who plans, researches, coordinates,
    and manages such projects. Interior design is a multifaceted profession that includes conceptual development, space planning,
    site inspections, programming, research, communicating with the stakeholders of a project, construction management, and
    execution of the design.
  </p>

  <a
  href="#"
  style={{
    display: "inline-flex",
    alignItems: "center",
    backgroundColor: "#000",
    color: "#fff",
    textDecoration: "none",
    padding: "12px 16px",
    marginTop: "20px"
  }}
>
  <span style={{ marginRight: "12px", fontWeight: "bold" }}>Read More</span>
  <span style={{ backgroundColor: "#f4c10f", padding: "6px 10px" }}>&#8594;</span>
</a>

 
</section>

        </>
    );
}
export default Home;