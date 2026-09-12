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
  "Carry the approved ESTA confirmation: application 18J5046Q25924Z69, valid until 31 January 2027.",
  "Check New Zealand transit requirements for Auckland, including NZeTA/NZTD if applicable.",
  "Carry photo ID and the credit card needed for Aida Plaza Hotel check-in.",
  "Save Aida Plaza Hotel confirmation number 6187488521 and PIN 7238 somewhere secure.",
  "Review the hotel cancellation deadline before 11:59 PM on September 12, 2026.",
  "Check in with Air New Zealand, American Airlines, and Delta as each flight opens.",
  "Confirm whether checked baggage is tagged through at each transit point.",
  "Keep airline references handy: BIGKVH, LKDMUI, and JPXBUF.",
  "Register for the invitation-only ANZ Lounge experience before Dreamforce.",
  "Arrive at Melbourne airport 3 hours before the 8:35 AM international departure.",
  "Keep Webjet support numbers saved for Australia and overseas."
];

var expensesStorageKey = "usaTripExpenses";
var expenseExchangeRateStorageKey = "usaTripExpenseUsdAudRate";
var defaultUsdToAudRate = 1.52;
var expenses = loadExpenses();

function loadExpenses() {
  try {
    var storedExpenses = JSON.parse(localStorage.getItem(expensesStorageKey));
    return Array.isArray(storedExpenses) ? storedExpenses : [];
  } catch (error) {
    return [];
  }
}

function saveExpenses() {
  localStorage.setItem(expensesStorageKey, JSON.stringify(expenses));
}

function loadExpenseExchangeRate() {
  var storedRate = Number(localStorage.getItem(expenseExchangeRateStorageKey));
  return Number.isFinite(storedRate) && storedRate > 0 ? storedRate : defaultUsdToAudRate;
}

function saveExpenseExchangeRate(rate) {
  localStorage.setItem(expenseExchangeRateStorageKey, String(rate));
}

function getExpenseUsdAmount(expense) {
  return Number(expense.amountUsd || expense.amount || 0);
}

function formatCurrency(amount, currency) {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: currency
  }).format(amount);
}

function formatExpenseDate(dateValue) {
  if (!dateValue) {
    return "No date";
  }
  var date = new Date(dateValue + "T00:00:00");
  return date.toLocaleDateString("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}

function getTodayDateValue() {
  var today = new Date();
  var month = String(today.getMonth() + 1).padStart(2, "0");
  var day = String(today.getDate()).padStart(2, "0");
  return today.getFullYear() + "-" + month + "-" + day;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, function (character) {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&#039;"
    }[character];
  });
}

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

function setupTabs() {
  var triggers = Array.prototype.slice.call(document.querySelectorAll("[data-tab-target]"));
  var buttons = Array.prototype.slice.call(document.querySelectorAll(".tab-button[data-tab-target]"));
  var panels = Array.prototype.slice.call(document.querySelectorAll("[data-tab-panel]"));
  var fallbackTab = "overview";

  function showTab(tabName, shouldUpdateHash) {
    var hasPanel = panels.some(function (panel) {
      return panel.getAttribute("data-tab-panel") === tabName;
    });
    var activeTab = hasPanel ? tabName : fallbackTab;

    buttons.forEach(function (button) {
      var isActive = button.getAttribute("data-tab-target") === activeTab;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    panels.forEach(function (panel) {
      panel.classList.toggle("active", panel.getAttribute("data-tab-panel") === activeTab);
    });

    if (shouldUpdateHash) {
      history.replaceState(null, "", "#" + activeTab);
    }
  }

  triggers.forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      showTab(trigger.getAttribute("data-tab-target"), true);
    });
  });

  window.addEventListener("hashchange", function () {
    showTab(window.location.hash.replace("#", ""), false);
  });

  showTab(window.location.hash.replace("#", "") || fallbackTab, false);
  window.showDashboardTab = showTab;
}

function setupDashboardSearch() {
  var input = document.getElementById("dashboardSearch");
  var clearButton = document.getElementById("dashboardSearchClear");
  var status = document.getElementById("dashboardSearchStatus");
  var panels = Array.prototype.slice.call(document.querySelectorAll("[data-tab-panel]"));

  function getTabLabel(tabName) {
    var button = document.querySelector(".tab-button[data-tab-target=\"" + tabName + "\"]");
    return button ? button.textContent : tabName;
  }

  function clearMatches() {
    panels.forEach(function (panel) {
      panel.classList.remove("search-match");
    });
  }

  function runSearch() {
    var query = input.value.trim().toLowerCase();
    clearMatches();

    if (!query) {
      status.textContent = "Type to search across all tabs.";
      return;
    }

    var matches = panels.filter(function (panel) {
      return panel.textContent.toLowerCase().indexOf(query) !== -1;
    });

    if (!matches.length) {
      status.textContent = "No matches found.";
      return;
    }

    var firstMatch = matches[0];
    var tabName = firstMatch.getAttribute("data-tab-panel");
    window.showDashboardTab(tabName, true);
    firstMatch.classList.add("search-match");
    status.textContent = matches.length + (matches.length === 1 ? " tab" : " tabs") + " matched. Showing " + getTabLabel(tabName) + ".";
  }

  input.addEventListener("input", runSearch);
  clearButton.addEventListener("click", function () {
    input.value = "";
    clearMatches();
    status.textContent = "Type to search across all tabs.";
    input.focus();
  });
}

function setupDreamforceRefresh() {
  var button = document.getElementById("dreamforceRefreshButton");
  var status = document.getElementById("dreamforceRefreshStatus");
  var catalogUrl = "https://reg.salesforce.com/flow/plus/df26/sessioncatalog/page/catalog";
  var readerUrl = "https://r.jina.ai/" + catalogUrl;
  var checkedStorageKey = "dreamforceLastCheckedAt";
  var updatesStorageKey = "dreamforceSessionUpdates";

  function normalizeSessionTitle(value) {
    return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  }

  function ensureLocationColumn() {
    Array.prototype.slice.call(document.querySelectorAll(".session-table")).forEach(function (table) {
      var headerRow = table.querySelector("thead tr");
      if (headerRow && headerRow.children.length === 3) {
        var locationHeader = document.createElement("th");
        locationHeader.textContent = "Location";
        headerRow.appendChild(locationHeader);
      }
      Array.prototype.slice.call(table.querySelectorAll("tbody tr")).forEach(function (row) {
        if (row.children.length === 3) {
          var locationCell = document.createElement("td");
          locationCell.textContent = "TBD";
          row.appendChild(locationCell);
        }
      });
    });
  }

  function getSessionRows() {
    return Array.prototype.slice.call(document.querySelectorAll(".session-table tbody tr")).map(function (row) {
      return {
        row: row,
        timeCell: row.children[0],
        titleCell: row.children[2],
        locationCell: row.children[3],
        key: normalizeSessionTitle(row.children[2].textContent)
      };
    });
  }

  function applySavedUpdates() {
    var updates = {};
    try {
      updates = JSON.parse(localStorage.getItem(updatesStorageKey)) || {};
    } catch (error) {
      updates = {};
    }
    getSessionRows().forEach(function (session) {
      var update = updates[session.key];
      if (!update) {
        return;
      }
      session.timeCell.textContent = update.time || session.timeCell.textContent;
      session.locationCell.textContent = update.location || session.locationCell.textContent;
      session.row.classList.add("session-updated");
    });
  }

  function findSessionUpdate(catalogText, title) {
    var index = catalogText.toLowerCase().indexOf(title.toLowerCase());
    if (index === -1) {
      return null;
    }
    var nearby = catalogText.slice(Math.max(0, index - 700), index + title.length + 1100);
    var timeMatch = nearby.match(/(?:Tuesday|Wednesday|Thursday), September (?:15|16|17)\s+\d{1,2}:\d{2}\s+[AP]M\s+-\s+\d{1,2}:\d{2}\s+[AP]M\s+PDT/i);
    var locationMatch = nearby.match(/\n([A-Z][^\n]*(?:Moscone|Campground|Theater|Room|Workshop|Lodge|Hall|Park|Hotel|Oracle Park|Dreampark)[^\n]*)\n/i);
    return {
      time: timeMatch ? timeMatch[0] : "",
      location: locationMatch ? locationMatch[1].trim() : ""
    };
  }

  function renderStatus() {
    var lastCheckedAt = localStorage.getItem(checkedStorageKey);
    if (!lastCheckedAt) {
      status.textContent = "Not checked from this dashboard yet.";
      return;
    }
    var checkedDate = new Date(lastCheckedAt);
    status.textContent = "Last checked " + checkedDate.toLocaleString("en-AU") + ". Saved matching live catalog updates are shown in the tables.";
  }

  button.addEventListener("click", function () {
    var originalText = button.textContent;
    button.textContent = "Checking...";
    button.disabled = true;
    status.textContent = "Checking Salesforce live catalog for updated Dreamforce timings and locations...";

    fetch(readerUrl, { cache: "no-store" })
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Catalog check failed with status " + response.status);
        }
        return response.text();
      })
      .then(function (catalogText) {
        var updates = {};
        var matched = 0;
        var changed = 0;

        getSessionRows().forEach(function (session) {
          var found = findSessionUpdate(catalogText, session.titleCell.textContent);
          if (!found || (!found.time && !found.location)) {
            return;
          }
          matched += 1;
          updates[session.key] = found;
          if (found.time && found.time !== session.timeCell.textContent) {
            session.timeCell.textContent = found.time;
            changed += 1;
          }
          if (found.location && found.location !== session.locationCell.textContent) {
            session.locationCell.textContent = found.location;
            changed += 1;
          }
          session.row.classList.add("session-updated");
        });

        localStorage.setItem(updatesStorageKey, JSON.stringify(updates));
        localStorage.setItem(checkedStorageKey, new Date().toISOString());
        renderStatus();
        status.textContent += " Matched " + matched + " listed sessions; refreshed " + changed + " table fields.";
      })
      .catch(function () {
        status.textContent = "Could not automatically read the live catalog from this browser. Opening Salesforce catalog so you can check manually.";
        window.open(catalogUrl, "_blank", "noopener");
      })
      .finally(function () {
        button.textContent = originalText;
        button.disabled = false;
      });
  });

  ensureLocationColumn();
  applySavedUpdates();
  renderStatus();
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

function getTopExpenseCategory() {
  var categoryTotals = expenses.reduce(function (totals, expense) {
    totals[expense.category] = (totals[expense.category] || 0) + getExpenseUsdAmount(expense);
    return totals;
  }, {});
  var topCategory = Object.keys(categoryTotals).sort(function (a, b) {
    return categoryTotals[b] - categoryTotals[a];
  })[0];
  return topCategory ? topCategory + " " + formatCurrency(categoryTotals[topCategory], "USD") : "None yet";
}

function renderExpenses() {
  var list = document.getElementById("expenseList");
  var exchangeRate = loadExpenseExchangeRate();
  var totalUsd = expenses.reduce(function (sum, expense) {
    return sum + getExpenseUsdAmount(expense);
  }, 0);
  var totalAud = totalUsd * exchangeRate;
  var topCategory = getTopExpenseCategory();

  document.getElementById("expenseCount").textContent = expenses.length + (expenses.length === 1 ? " item" : " items");
  document.getElementById("expenseTotalUsd").textContent = formatCurrency(totalUsd, "USD");
  document.getElementById("expenseTotalAud").textContent = formatCurrency(totalAud, "AUD");
  document.getElementById("expenseTopCategory").textContent = topCategory;
  document.getElementById("overviewExpenseTotalUsd").textContent = formatCurrency(totalUsd, "USD");
  document.getElementById("overviewExpenseTotalAud").textContent = formatCurrency(totalAud, "AUD");
  document.getElementById("overviewExpenseCount").textContent = expenses.length + (expenses.length === 1 ? " item" : " items");
  document.getElementById("overviewExpenseTopCategory").textContent = "Top category: " + topCategory.toLowerCase();

  if (!expenses.length) {
    list.innerHTML = "<div class=\"empty-expenses\">No expenses added yet.</div>";
    return;
  }

  list.innerHTML = expenses.map(function (expense) {
    var notes = expense.notes ? "<span>" + escapeHtml(expense.notes) + "</span>" : "";
    var amountUsd = getExpenseUsdAmount(expense);
    var amountAud = amountUsd * exchangeRate;
    return (
      "<article class=\"expense-row\">" +
      "<div><strong>" + escapeHtml(expense.vendor) + "</strong><span>" + formatExpenseDate(expense.date) + " - " + escapeHtml(expense.category) + "</span>" + notes + "</div>" +
      "<div><strong>" + formatCurrency(amountUsd, "USD") + "</strong><span>" + formatCurrency(amountAud, "AUD") + "</span><button type=\"button\" data-expense-id=\"" + expense.id + "\">Remove</button></div>" +
      "</article>"
    );
  }).join("");
}

function setupExpenses() {
  var form = document.getElementById("expenseForm");
  var dateInput = document.getElementById("expenseDate");
  var exchangeRateInput = document.getElementById("expenseExchangeRate");
  dateInput.value = getTodayDateValue();
  exchangeRateInput.value = loadExpenseExchangeRate();

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var amountUsd = Number(document.getElementById("expenseAmount").value);
    var exchangeRate = Number(exchangeRateInput.value);
    var vendor = document.getElementById("expenseVendor").value.trim();
    if (!vendor || !Number.isFinite(amountUsd) || amountUsd <= 0 || !Number.isFinite(exchangeRate) || exchangeRate <= 0) {
      return;
    }
    saveExpenseExchangeRate(exchangeRate);

    expenses.unshift({
      id: Date.now().toString(),
      date: dateInput.value,
      category: document.getElementById("expenseCategory").value,
      vendor: vendor,
      amountUsd: amountUsd,
      notes: document.getElementById("expenseNotes").value.trim()
    });
    saveExpenses();
    renderExpenses();
    form.reset();
    dateInput.value = getTodayDateValue();
    exchangeRateInput.value = loadExpenseExchangeRate();
  });

  exchangeRateInput.addEventListener("change", function () {
    var exchangeRate = Number(exchangeRateInput.value);
    if (!Number.isFinite(exchangeRate) || exchangeRate <= 0) {
      exchangeRateInput.value = loadExpenseExchangeRate();
      return;
    }
    saveExpenseExchangeRate(exchangeRate);
    renderExpenses();
  });

  document.getElementById("expenseList").addEventListener("click", function (event) {
    var expenseId = event.target.getAttribute("data-expense-id");
    if (!expenseId) {
      return;
    }
    expenses = expenses.filter(function (expense) {
      return expense.id !== expenseId;
    });
    saveExpenses();
    renderExpenses();
  });

  renderExpenses();
}

renderTimeline();
renderAccommodation();
renderFlightDetails();
renderImportantInfo();
renderChecklist();
setupExpenses();
setupTabs();
setupDashboardSearch();
setupDreamforceRefresh();
