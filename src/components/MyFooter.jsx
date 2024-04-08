function MyFooter (){
  return(

    <>
    <footer className="bg-warning">
  <section className=" p-2  d-flex flex-row justify-content-around align-items-center gap-2 ">
    <a href="#">
      <span>Contact us</span>
    </a>
    <span>|</span>
    <a href="#">
      <span>Locate nearby store</span>
    </a>
    <span>|</span>
    <a href="#">
      <span>Subscribe news letter</span>
    </a>
  </section>
  <section className=" pb-3 d-flex flex-row justify-content-center align-items-center gap-5 ">
    <a href="#">
      <img src="./images/facebook_facebook logo_icon.png" alt="" />
    </a>
    <a href="#">
      {" "}
      <img src="./images/instagram_instagram logo_icon.png" alt="" />
    </a>
    <a href="#">
      {" "}
      <img src="./images/twitter_icon.png" alt="" />
    </a>
  </section>
</footer>
    
    
    </>
  

  )
}

export default MyFooter