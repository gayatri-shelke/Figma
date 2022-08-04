import './App.css';
// import Recipe from './component/Recipe.js'
// import { Button } from '@material-ui/core';


function App() {
  return (
<div>
<img className='Topbar' src='TOPBAR 1 (1).png'></img>

  <nav class="navbar navbar-expand-lg ">
  <img className='Logo' src={require('./image/Logo.png')}/>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
  
      <a className="nav-link" href="#">THISMONTH</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">SKIN</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">HAIR</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#">BATH</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">SALE</a>
      </li>
      <button className='login'>LOG IN </button>
    </ul>
  </div>
</nav>
<div className='main-div'>
<h1 className='head'>Look good without<br/> leaving your house.</h1>
<p className='paragraph'>
Upbox is the easiest way to look your best without <br/>having to hunt for the perfect makeup combination.<br/> Our stylists curate the latest trends and send them<br/> directly to your door every month.
</p>
<button className='sign'>SIGN UP </button>
<img className='Box' src='BOX.png'></img>
</div>
<h1 className='heading'>Pick your plan</h1>
<div class="container">
          <div class="row justify-content-center ">
            <div class="col-12 col-sm-6 col-lg-6 ">
              <div class="card text-center">
                <div class="card-body">
                  <h5 class="card-title ">Monthly</h5>
                  <h6 class="card-subtitle mb-2 text-muted ">$18/mo</h6>
                  <div class="text-center">
                    <button type="button" class="btn">
                      FIND YOUR BOX
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-6  ">
              <div class="card1 text-center">
                <div class="card-body">
                  <h5 class="card-title">Yearly</h5>
                  <h6 class="card-subtitle mb-2 text-muted">$15/mo</h6>
                  <div class="text-center">
                    <button type="button" class="btn">
                      FIND YOUR BOX
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className='paragraph_1'>Your plan auto-renews at the end of 30 days from the 1st day you signed-up.</p>

          <h1 className='head1'>How it works?</h1>
          <div className='container'>
          <img className='image' src='photo.png'/>
          <img className='image1' src={require('./image/1.png')}/>

          <h className='heading_1'>Setup your profile & preferences</h>
          <p className='paragraph_2'>Once you create an account, you can start to<br/> 
          tell us your likes and dislikes so we can tailor<br/>
           the experience just for you.</p>
        </div>
          <div className='container'>
              <img className='image_one' src={require('./image/box2.png')} />
              <img className='image_two' src={require('./image/2.png')} />
              <h className='heading_3'>Review yourcustom box</h>
              <p className='paragraph_3'>Once we get to know you, we will show you the<br/> box we’ve crafted. This is your chance to<br/> approve it before we ship it to your house.</p>
          </div>
          <div className='container'>
              <img className='beauty_image' src={require('./image/photo_1.png')} />
              <img className='image_three' src={require('./image/3.png')} />

              <h className='heading_4'>Try it on at home</h>
              <p className='paragraph_4'>Your box will arrive within 3-5 days (usually sooner) and you get the joy to unbox your Upbox. Try it all on and send back whatever you’re not in love with.</p>
              <button className='butn_1'>TRY IT FOR YOURSELF</button>
          </div>
          
          

      </div>

  );
}

export default App;

// <img className='doubt' src={require('./image/art3.png')} />

// <div className='cont'>

//               <img className='img1' src={require('./image/img1.png')}/>
//               <img className='img2' src={require('./image/img2.png')}/>
//               <img className='img3' src={require('./image/img3.png')}/>
//               <img className='img4' src={require('./image/img4.png')}/>
//               <p className='paragraph_img1'>How to rock the lip look<br/> that turns heads</p>
//               <p className='paragraph_img2'>Find the perfect shade<br/> for the season</p>
//               <p className='paragraph_img3'>The 5 eye shadow<br/> secrets you never knew</p>
//               <p className='paragraph_img4'>The pro-tips for at home<br/> hair dying</p>
//               <button className='button_1'>FOLLOW US ON INSTAGRAM</button>
//           </div>