import bed from "/src/assets/images/bed1.jpeg";

function Home() {
    return (
        <>
            <div
      style={{
        backgroundImage: `url(${bed})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        position: 'relative',
      }}
    ><div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(7, 6, 6, 0.5)', // Dark overlay
    }}
  ></div>
  <div style={{ position: 'relative', zIndex: 1 }}>
        
        <h1 style={{ fontSize: '64px', fontWeight: 'bold', margin: '10px 0' }}>
        Modern Bedroom
        </h1>
        <p style={{ fontSize: '18px', marginBottom: '20px' }}>
        We Make Your Dreams Real!
        </p>
        <div
        style={{
          position: 'absolute',
          bottom: '20px',
          fontSize: '12px',
          letterSpacing: '2px',
          transform: 'rotate(-90deg)',
        }}
      >
       
      </div>
    </div>

    </div>
   <section>

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