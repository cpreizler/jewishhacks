Vue.component('site-header', {
  template: `<header>
      <nav class="navbar navbar-expand-md navbar-light bg-img fixed-top">
        <a class="navbar-brand" href="index.html"> </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto classic-font" style="margin-left: 20%; color: white; line-height: 30px">
              <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>                   
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="hacks" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hacks</a>
                <div class="dropdown-menu" aria-labelledby="hacks">
                  <a class="dropdown-item" href="bmi-calc-women.html">Tech</a>
                  <a class="dropdown-item" href="bmr-calc-women.html">Food</a>                  
                  <a class="dropdown-item" href="https://www.muscleandfitness.com/">Fitness</a>
                  <a class="dropdown-item" href="https://www.muscleandfitness.com/">Car</a>
                  <a class="dropdown-item" href="https://www.muscleandfitness.com/">Cleaning</a>
                  <a class="dropdown-item" href="https://www.muscleandfitness.com/">School</a>
                  <a class="dropdown-item" href="https://www.muscleandfitness.com/">Money</a>
                  <a class="dropdown-item" href="https://www.muscleandfitness.com/">Random</a>
                </div>
              </li>   
              <li class="nav-item"><a class="nav-link" href="gadgets.html">Cool Gadgets</a></li> 
              <li class="nav-item"><a class="nav-link" href="contact.html">Submit a Hack</a></li>  <!--chance to be featured...-->                                          
              <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
          
              <li class="nav-item show-tooltip">
                <a href="https://1000lifehacks.com/?random=1" data-toggle = "tooltip" title = "Click to see a random hack" data-placement = "bottom">
                  <img src="retweet.jpg" width="30" height="30" style="margin-top: 7; margin-left: 10%"></img>
                </a>
              </li>
            </ul>
        </div>      
      </nav>           
  <p style="color:gray; font-size:16px; margin-top: 3%; margin-left: 20%;">{{ pageName }}</p>
</header>`,
  props: ['pageName']
});

var app = new Vue({
  el: '#app'
})
