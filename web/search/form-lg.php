<!-- search form DESKTOP -->

<form class="desktop flex-between">

  <!-- where // City Autocomplete -->
  <div class="flex-v">
    <label for="where">Where</label>
    <input id="tags" class="tags" name="where" type="text" placeholder="Anywhere"/>
  </div>

  <!-- when // Datepicker -->
  <div class="flex-v">
    <label for="where">When</label>
    <div class="flex-between">
      <label for="from">From</label>
      <input type="text" id="from" class="from" name="from" placeholder="dd/mm/yyyy">
      <label for="to">to</label>
      <input type="text" id="to" class="from" name="to" placeholder="dd/mm/yyyy">
    </div>
  </div>

  <!-- guests // dropdown -->
  <div class="flex-v">
    <label for="who">Guests</label>
    <select class="select-form" name="who">
      <option value="1">1 Guest</option>
      <option value="2">2 Guests</option>
      <option value="3">3 Guests</option>
      <option value="4">4 Guests</option>
      <option value="5">5 Guests</option>
      <option value="6">6 Guests</option>
      <option value="7">7 Guests</option>
    </select>
  </div>

  <!-- submit -->
  <button id="button-form" class="" type="submit" value="Rechercher">
    <span>Search</span>
  </button>

</form>
