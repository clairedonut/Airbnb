// Date picker
$( function() {
    var dateFormat = "dd/mm/yy",
      from = $( ".from" )
        .datepicker({
          defaultDate: "+1w",
          changeMonth: true,
          numberOfMonths: 2
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
        }),
      to = $( ".to" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 2
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
      });

    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }

      return date;
    }

  } );

  // Autocomplete Jquery

  $( function() {
    var availableTags = [
      "Abu Dhabi",
      "Agra",
      "Amman",
      "Amsterdam",
      "Antalya",
      "Auckland",
      "Baku",
      "Bangkok",
      "Barcelona",
      "Beijing",
      "Berlin",
      "Brussels",
      "Bucharest",
      "Budapest",
      "Buenos Aires",
      "Burgas",
      "Cairo",
      "Cancun",
      "Chennai",
      "Chiang Mai",
      "Christchurch",
      "Delhi",
      "Denpasar",
      "Djerba",
      "Doha",
      "Dubai",
      "Dublin",
      "East Province",
      "Edirne",
      "Florence",
      "Frankfurt",
      "Guangzhou",
      "Guilin",
      "Hangzhou",
      "Hanoi",
      "Harare",
      "Ho Chi Minh City",
      "Hong Kong",
      "Honolulu",
      "Istanbul",
      "Jaipur",
      "Jakarta",
      "Johannesburg",
      "Kiev",
      "Kolkata",
      "Kuala Lumpur",
      "Las Vegas",
      "Lima",
      "Lisbon",
      "London",
      "Los Angeles",
      "Macau",
      "Madrid",
      "Manama",
      "Manila",
      "Marrakech",
      "Mecca",
      "Melbourne",
      "Mexico City",
      "Miami",
      "Milan",
      "Moscow",
      "Mugla",
      "Mumbai",
      "Munich",
      "Nairobi",
      "Nanjing",
      "New York City",
      "Nice",
      "Orlando",
      "Paris",
      "Pattaya",
      "Phuket",
      "Prague",
      "Punta Cana",
      "Rio de Janeiro",
      "Riyadh",
      "Rome",
      "San Francisco",
      "Sao Paulo",
      "Seoul",
      "Shanghai",
      "Sharm el-Sheikh",
      "Shenzhen",
      "Siem Reap",
      "Singapore",
      "Sofia",
      "Sousse",
      "St Petersburg",
      "Suzhou",
      "Sydney",
      "Taipei City",
      "Tokyo",
      "Toronto",
      "Vancouver",
      "Venice",
      "Vienna",
      "Warsaw"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });

    $( ".tags" ).autocomplete({
      source: availableTags
    });
  } );
