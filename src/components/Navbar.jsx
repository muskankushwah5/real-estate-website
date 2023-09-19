import React from 'react'
import "../App.css";

const Navbar = () => {
  return (
    <div style={{width:"100%",height:"100%"}}>
    <header class="navbar boxed js-navbar" style={{width:"100%",height:"100%"}}>

    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
</button>


    <a class="brand" href="">

                    <img alt="" src="https://backcombined.com/wp-content/uploads/2022/05/Untitled-2-1.png"/>
    <div class="brand-info">
        <div class="brand-name"></div>
        <div class="brand-text"></div>
    </div>

    

</a>


    <div class="social-list hidden-xs">


        <a target="_blank" class="fa fa-instagram" href=""></a>


        <a target="_blank" href="" class="icon ion-social-facebook"></a>




        <a target="_blank" href="" class="icon ion-social-linkedin"></a>




    </div>
</header>

    </div>
  )
}

export default Navbar