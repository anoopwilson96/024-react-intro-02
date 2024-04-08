function MyHeader(){
  return(
<header>
  <div className="header1">
    <div className="logoAicon d-flex flex-row justify-content-between align-items-center">
      <div>
        <div className=" container d-flex flex-row justify-content-between align-items-center gap-2 ">
          <img id="logo" src="./images/logo.png" alt="logo" />
          <span id="logoText">DressStore</span>
        </div>
        <div>
          <p className="text-center text-wrap ">Shop with us !!</p>
        </div>
      </div>
      <div className="Search">
        <input type="text" placeholder="Search here" />
        <input type="button" defaultValue="Submit" />
      </div>
      <nav className=" d-flex flex-row gap-2  ">
        <li>
          <a href="#">
            <span className="material-symbols-outlined  text-black">
              account_circle
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="material-symbols-outlined text-black ">stars</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="material-symbols-outlined text-black">
              shopping_cart_checkout
            </span>
          </a>
        </li>
        <li id="menuButton">
          <a href="#">
            <span className="material-symbols-outlined text-black">menu</span>
          </a>
        </li>
      </nav>
    </div>
  </div>
</header>


  );
}

export default MyHeader