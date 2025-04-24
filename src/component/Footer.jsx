function Footer(){

    return(
        <footer style={{
            backgroundColor: "#000", 
            color: "#fff", 
            padding: "40px 0", 
            fontFamily: "Arial, sans-serif", 
            fontSize: "14px", 
            textAlign: "center"
          }}
          >
            <div className="container" style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
          >
              <div className="col-lg-12" style={{ width: "100%" }}
              >
                <p style={{margin: "0"}}>
                  &copy; 2036
                  <a href="#" style={{
            color: "#f4c10f",
            textDecoration: "none",
            fontWeight: "bold"
          }}
          >Tale SEO Agency</a>.
                  All rights reserved.
                  <br/>
                  Design:
                  <a
                    href="https://templatemo.com"
                    target="_blank"
                    style={{
                      color: "#f4c10f",
                      textDecoration: "none",
                      fontWeight: "normal",
                      fontSize: "13px"
                    }}
                    
                  >
                    TemplateMo
                  </a>
                </p>
              </div>
            </div>
          </footer>
    )
}
export default Footer