import React from 'react'
import "../App.css";
const AboutUs = () => {
  return (
    <section class="section-about  " style={{marginTop:"10%"}}>
    <div class="container">
        <div class="row" style={{display:"flex",flexDirection:"row"}}>
            <div class="col-md-6" style={{marginLeft:"12%",marginRight:"4%",fontSize:"12px",color:"lightgray"}}>
                <strong class="section-subtitle"></strong>
                <h2 class="section-title section-about-title">About Us</h2>
                <p>Back Combined General Trading &amp; Contracting Company (BACK), is a construction contractor that is committed to delivering quality services. We are a group of hard-working and devoted individuals that
                    have come together as a team, with the shared goal of improving the standards of construction and projects maintenance in the vast and competitive market of Kuwait.</p>
                <p>Back Combined addresses the needs of projects and owners by providing management services and expertise tailored to the project needs. Our team applies and integrates comprehensive projects controls
                    to manage the critical issues of time, cost, scope, quality and safety.</p>
                <p>Parallel to delivering achievement-driven services, Back Combined is dedicated to building strong and cordial partnerships with clients and customers. We are confident in our expertise and tenacity and
                    take pleasure in building dreams.</p>
                <p>We guarantee an experience that will leave you content and satisfied. Our professional ethics and the caliber of our service are what make our organization unique and distinct.</p>
                <p>With BACK on your team, you will have access to our experience and expertise which will ensure management and completion of your project in a time and budget efficient manner.</p>
                <div class="experience-box">
                    <div class="experience-content">
                        <div class="experience-number"></div>
                        <div class="experience-info wow fadeInDown"></div>
                    </div>
                </div>

            </div>
            <div class="col-md-5 col-md-offset-1" style={{marginTop:"-6%",width:"100%"}}>
                <div class="dots-image">

                    <img alt="" class="about-img img-responsive" src="https://th.bing.com/th/id/OIP.xF_4PncmAHg3RK0OeahwBwHaE8?w=290&h=193&c=7&r=0&o=5&dpr=1.1&pid=1.7" style={{height:"300%"}}/>
                    <div class="dots"></div>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default AboutUs