var timeline = [
  ["Mon 14 Sep", "Melbourne to San Francisco", "Air New Zealand via Auckland. Depart MEL 8:35 AM and arrive SFO 12:55 PM local time."],
  ["Mon 14 Sep", "Aida Plaza Hotel check-in", "Check-in window is 1:00 PM to midnight at 1087 Market Street."],
  ["Tue 15 Sep", "Dreamforce begins", "Salesforce Dreamforce opens in San Francisco."],
  ["Thu 17 Sep", "San Francisco to Birmingham", "American Airlines via Miami. Depart SFO 11:27 AM and arrive BHM 11:10 PM local time."],
  ["Fri 18 Sep - Fri 25 Sep", "Birmingham family visit", "Time with parents in Birmingham, Alabama."],
  ["Fri 25 Sep - Sun 27 Sep", "Birmingham to Melbourne", "Delta via Atlanta and Los Angeles. Arrive MEL Sunday 27 September at 7:50 AM."]
];

var bookedFlights = [
  {
    title: "Flight 1",
    route: "Melbourne to San Francisco",
    airlineRef: "BIGKVH",
    baggage: "2 checked bags at 23kg each, 5kg carry-on",
    seat: "Seat 49C on Auckland to San Francisco",
    transit: "5h 35m in Auckland",
    segments: [
      {
        flight: "Air New Zealand NZ120",
        depart: "MEL Mon 14 Sep 2026, 8:35 AM",
        arrive: "AKL Mon 14 Sep 2026, 2:15 PM",
        duration: "3h 40m"
      },
      {
        flight: "Air New Zealand NZ8",
        depart: "AKL Mon 14 Sep 2026, 7:50 PM",
        arrive: "SFO Mon 14 Sep 2026, 12:55 PM",
        duration: "12h 5m"
      }
    ]
  },
  {
    title: "Flight 2",
    route: "San Francisco to Birmingham",
    airlineRef: "LKDMUI",
    baggage: "1 checked bag at 23kg, 5kg carry-on",
    seat: "No seat shown in itinerary",
    transit: "1h 48m in Miami",
    segments: [
      {
        flight: "American Airlines AA773",
        depart: "SFO Thu 17 Sep 2026, 11:27 AM",
        arrive: "MIA Thu 17 Sep 2026, 8:17 PM",
        duration: "5h 50m"
      },
      {
        flight: "American Airlines AA3427",
        depart: "MIA Thu 17 Sep 2026, 10:05 PM",
        arrive: "BHM Thu 17 Sep 2026, 11:10 PM",
        duration: "2h 5m"
      }
    ]
  },
  {
    title: "Flight 3",
    route: "Birmingham to Melbourne",
    airlineRef: "JPXBUF",
    baggage: "1 checked bag at 23kg, 5kg carry-on",
    seat: "No seat shown in itinerary",
    transit: "1h 14m in Atlanta, 2h 23m in Los Angeles",
    segments: [
      {
        flight: "Delta Air Lines DL3163",
        depart: "BHM Fri 25 Sep 2026, 3:57 PM",
        arrive: "ATL Fri 25 Sep 2026, 5:56 PM",
        duration: "0h 59m"
      },
      {
        flight: "Delta Air Lines DL763",
        depart: "ATL Fri 25 Sep 2026, 7:10 PM",
        arrive: "LAX Fri 25 Sep 2026, 8:37 PM",
        duration: "4h 27m"
      },
      {
        flight: "Delta Air Lines DL11",
        depart: "LAX Fri 25 Sep 2026, 11:00 PM",
        arrive: "MEL Sun 27 Sep 2026, 7:50 AM",
        duration: "15h 50m"
      }
    ]
  }
];

var accommodation = {
  property: "Aida Plaza Hotel",
  status: "Confirmed",
  destination: "San Francisco",
  dates: "Mon 14 Sep - Thu 17 Sep 2026",
  nights: "3 nights",
  guests: "1 adult, 1 room",
  address: "1087 Market Street, San Francisco, CA 94103, United States",
  checkIn: "Mon, Sep 14, 2026, 13:00 - 00:00",
  checkOut: "Thu, Sep 17, 2026, 11:00",
  room: "Standard Room with One Double Bed",
  guestName: "Irfan Iqbal",
  maxCapacity: "2 adults",
  mealPlan: "No meal is included in this room rate.",
  facilities: "Private bathroom, toilet, bath or shower, towels, TV, telephone, radio, heating, carpeted floor, cable channels, alarm clock, wireless internet, hand sanitizer.",
  confirmationNumber: "6187488521",
  pin: "7238",
  contactPhone: "+1 760 307 4229",
  price: "approx. AUD 976 / US$699",
  payment: "Booking.com will charge your card automatically. Total upcoming payments: US$699. Total paid: US$0.",
  cancellation: "Free cancellation until 1 day before arrival. Full refund before 11:59 PM on Sep 12, 2026. From Sep 13, cancellation fee is the first night; no-show fee is the same.",
  propertyNotes: "Photo ID and credit card are required at check-in. Pets are not allowed; service dogs are permitted. Special requests are subject to availability and additional charges may apply.",
  airportNote: "Booking.com estimates SFO to the property as a 17 minute / 21 km drive."
};

var importantInfo = [
  {
    title: "Passport and visa checks",
    body: "For international travel, Webjet says your passport should be valid for at least 6 months beyond your return date to Australia. Check visa and transit requirements for your destination and each transit point."
  },
  {
    title: "USA ESTA",
    body: "Webjet states passengers travelling to the USA should apply for travel authorisation at least three days before scheduled departure from Australia. Travellers can be denied boarding without it."
  },
  {
    title: "New Zealand transit",
    body: "Because the outbound route transits Auckland, check whether NZeTA or New Zealand Traveller Declaration requirements apply to your passport and transit situation."
  },
  {
    title: "Airport arrival",
    body: "For international flights, Webjet recommends arriving 3 hours before departure, with extra time during peak periods."
  },
  {
    title: "Online check-in",
    body: "Air New Zealand online check-in generally opens 24 hours before departure and closes 60 minutes before international flights. Check each airline directly for final rules."
  },
  {
    title: "Baggage at connections",
    body: "For multi-destination or transit itineraries, Webjet warns that checked baggage may not always be checked through. Confirm this at each airport check-in."
  },
  {
    title: "Seat selection",
    body: "Webjet does not guarantee seats selected during booking. Your itinerary shows seat 49C only on Auckland to San Francisco."
  },
  {
    title: "Changes within 24 hours",
    body: "If changing a booking within 24 hours of departure, Webjet says to contact its Service Centre or messaging support."
  }
];

var checklist = [
  "Confirm passport validity extends at least 6 months beyond return to Australia.",
  "Apply for or verify USA ESTA at least 3 days before departure.",
  "Check New Zealand transit requirements for Auckland, including NZeTA/NZTD if applicable.",
  "Carry photo ID and the credit card needed for Aida Plaza Hotel check-in.",
  "Save Aida Plaza Hotel confirmation number 6187488521 and PIN 7238 somewhere secure.",
  "Review the hotel cancellation deadline before 11:59 PM on September 12, 2026.",
  "Check in with Air New Zealand, American Airlines, and Delta as each flight opens.",
  "Confirm whether checked baggage is tagged through at each transit point.",
  "Keep airline references handy: BIGKVH, LKDMUI, and JPXBUF.",
  "Arrive at Melbourne airport 3 hours before the 8:35 AM international departure.",
  "Keep Webjet support numbers saved for Australia and overseas."
];

function renderTimeline() {
  var container = document.getElementById("timeline");
  container.innerHTML = "";
  timeline.forEach(function (item) {
    var article = document.createElement("article");
    article.className = "timeline-item";
    article.innerHTML = "<small>" + item[0] + "</small><div><strong>" + item[1] + "</strong><span>" + item[2] + "</span></div>";
    container.appendChild(article);
  });
}

function renderAccommodation() {
  var grid = document.getElementById("accommodationGrid");
  var highlights = [
    ["Property", accommodation.property],
    ["Dates", accommodation.dates],
    ["Stay", accommodation.nights + " - " + accommodation.guests],
    ["Address", accommodation.address],
    ["Check-in", accommodation.checkIn],
    ["Check-out", accommodation.checkOut],
    ["Room", accommodation.room],
    ["Guest", accommodation.guestName],
    ["Confirmation", accommodation.confirmationNumber],
    ["PIN", accommodation.pin],
    ["Property phone", accommodation.contactPhone],
    ["Price", accommodation.price]
  ];
  var detailRows = [
    ["Payment", accommodation.payment],
    ["Cancellation", accommodation.cancellation],
    ["Meal plan", accommodation.mealPlan],
    ["Room facilities", accommodation.facilities],
    ["Property notes", accommodation.propertyNotes],
    ["Airport transfer note", accommodation.airportNote]
  ];
  var highlightHtml = highlights.map(function (item) {
    return "<div><dt>" + item[0] + "</dt><dd>" + item[1] + "</dd></div>";
  }).join("");
  var detailHtml = detailRows.map(function (item) {
    return "<article class=\"info-card\"><h3>" + item[0] + "</h3><p>" + item[1] + "</p></article>";
  }).join("");
  grid.innerHTML =
    "<div class=\"accommodation-main\">" +
    "<h3>" + accommodation.property + "</h3>" +
    "<p>" + accommodation.status + " - " + accommodation.destination + "</p>" +
    "<dl class=\"booking-list compact-list\">" + highlightHtml + "</dl>" +
    "</div>" +
    "<div class=\"accommodation-details\">" + detailHtml + "</div>";
}

function renderFlightDetails() {
  var grid = document.getElementById("flightGrid");
  grid.innerHTML = "";
  bookedFlights.forEach(function (flight) {
    var card = document.createElement("article");
    var segmentHtml = flight.segments.map(function (segment) {
      return "<li><strong>" + segment.flight + "</strong><span>Depart: " + segment.depart + "</span><span>Arrive: " + segment.arrive + "</span><span>Duration: " + segment.duration + "</span></li>";
    }).join("");
    card.className = "flight-card";
    card.innerHTML =
      "<h3>" + flight.title + "</h3>" +
      "<div class=\"route-line\">" + flight.route + "</div>" +
      "<ul class=\"segment-list\">" + segmentHtml + "</ul>" +
      "<ul class=\"detail-list\">" +
      "<li><span>Airline ref</span><strong>" + flight.airlineRef + "</strong></li>" +
      "<li><span>Transit</span><strong>" + flight.transit + "</strong></li>" +
      "<li><span>Baggage</span><strong>" + flight.baggage + "</strong></li>" +
      "<li><span>Seat</span><strong>" + flight.seat + "</strong></li>" +
      "</ul>";
    grid.appendChild(card);
  });
}

function renderImportantInfo() {
  var grid = document.getElementById("importantInfo");
  grid.innerHTML = "";
  importantInfo.forEach(function (info) {
    var card = document.createElement("article");
    card.className = "info-card";
    card.innerHTML = "<h3>" + info.title + "</h3><p>" + info.body + "</p>";
    grid.appendChild(card);
  });
}

function renderChecklist() {
  var list = document.getElementById("checklist");
  list.innerHTML = "";
  checklist.forEach(function (item) {
    var li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

renderTimeline();
renderAccommodation();
renderFlightDetails();
renderImportantInfo();
renderChecklist();
