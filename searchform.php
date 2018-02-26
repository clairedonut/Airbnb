<main>
    <div class="ui-widget">
      <label for="tags">Tags: </label>
      <input id="tags">
    </div>

  <!-- <input id="cities"/> -->
  <!-- <label for="from">From</label>
  <input type="text" id="from" name="from">
  <label for="to">to</label>
  <input type="text" id="to" name="to"> -->


  <h1>
    <span>Airbnb</span><br />
    Book unique homes and experience a city like local.
  </h1>

  <!-- Search Form MOBILE -->

  <form class="mobile">
    <img src="img/icons/search-18x18.png" alt="search icon" />
    <p>Anywhere · Anytime · 1 guest</p>
  </form>

  <!-- Search Form TABLET -->

  <form class="tablet">
    <div>
      <p class="desktop">Where</p>
      <img src="img/icons/search-18x18.png" alt="search icon" />
      <!-- <p>Anywhere</p> -->
      <input id="cities" name="where" type="text" placeholder="Anywhere"/>
    </div>
    <div>
      <p class="desktop">When</p>
      <img src="img/icons/calendar.png" alt="search icon" />
      <!-- <p>Anytime</p> -->
      <label for="from">From</label>
      <input type="text" id="from" name="from">
      <label for="to">to</label>
      <input type="text" id="to" name="to">
    </div>
    <div class="hide"> <!-- hidden @mediaquery desktop-->
      <img src="img/icons/guests.png" alt="search icon" />
      <p>1 guest</p>
    </div>
    <div class="desktop flex-between">  <!-- display @mediaquery desktop-->
      <div>
        <p class>Guests</p>
        <p class="hide">1 guest</p>
        <select name="1 guest" id="guests">
          <option>1 guest</option>
          <option>2 guests</option>
          <option>3 guests</option>
          <option>4 guests</option>
        </select>
      </div>
      <button id="button-form" class="desktop" type="submit" value="Rechercher">
        <span>Search</span>
      </button>       <!-- mediaquery // only visible in desktop -->
    </div>


  </form>

  <!-- search form // DESKTOP -->
  <form class="desktop">

    <div class="desktop-label-form">
      <label for="where">Anywhere</label>
      <input id="cities" name="where" type="text" placeholder="Partout"/>
      <!-- <input  name="where" type="text" placeholder="Partout"/> -->
    </div>

    <div class="desktop-label-form">
      <!-- <label for="when">Anytime</label>
      <input  name="when" type="text" placeholder="Dates indifférentes"/> -->
      <label for="from">From</label>
      <input type="text" id="from" name="from">
      <label for="to">to</label>
      <input type="text" id="to" name="to">
    </div>

    <div class="desktop-label-form">
      <label for="who">1 guest</label>
      <select class="select-form" name="who">
        <option value="1">1 Voyageur</option>
        <option value="2">2 Voyageurs</option>
        <option value="3">3 Voyageurs</option>
        <option value="4">4 Voyageurs</option>
        <option value="5">5 Voyageurs</option>
        <option value="6">6 Voyageurs</option>
        <option value="7">7 Voyageurs</option>
      </select>
    </div>

  </form>
