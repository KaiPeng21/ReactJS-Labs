function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// ===== Data Structure =====

// Data Structure for storing vehicle info
var VRow = function VRow(year, model, price, link) {
  _classCallCheck(this, VRow);

  this.year = year;
  this.model = model;
  this.price = price;
  this.link = link;
};

;

// Data Structure for stroring a vehicle table

var VTable = function VTable(vehicleType, vrowArr) {
  _classCallCheck(this, VTable);

  this.vehicleType = vehicleType;
  this.vrowArr = vrowArr;
};

;

// ===== Data Sets =====

// Testing Data
var cars = [new VRow(2013, "A", 32000, "#"), new VRow(2011, "B", 4400, "#"), new VRow(2016, "B", 15500, "#")];
var trucks = [new VRow(2013, "D", 18000, "#"), new VRow(2013, "E", 5200, "#")];
var convertibles = [new VRow(2013, "E", 2000, "#"), new VRow(2013, "G", 6000, "#"), new VRow(2013, "H", 12500, "#"), new VRow(2013, "M", 50000, "#")];

var data = [new VTable('Car', cars), new VTable('Trucks', trucks), new VTable('Convertibles', convertibles)];

// ===== React Components =====

// Buynow
// This creates the "Buy Now" pushbutton
// props: 
// - link (a link to the vehicle info page)
function Buynow(props) {
  return React.createElement(
    "a",
    { href: props.link, "class": "btn btn-info" },
    "Buy Now"
  );
}

// VehicleHead
// This creates the vehicle table head component
// props: 
// - (none)
function VehicleHead(props) {
  return React.createElement(
    "thead",
    null,
    React.createElement(
      "tr",
      null,
      React.createElement(
        "th",
        null,
        "Year"
      ),
      React.createElement(
        "th",
        null,
        "Model"
      ),
      React.createElement(
        "th",
        null,
        "Price"
      ),
      React.createElement(
        "th",
        null,
        "Buy"
      )
    )
  );
}

// VehicleRow
// This creates the vehicle table data row component
// props:
// - vrow (a VRow Object)
function VehicleRow(props) {
  return React.createElement(
    "tr",
    null,
    React.createElement(
      "td",
      null,
      props.vrow.year
    ),
    React.createElement(
      "td",
      null,
      props.vrow.model
    ),
    React.createElement(
      "td",
      null,
      "$",
      props.vrow.price
    ),
    React.createElement(
      "td",
      null,
      React.createElement(Buynow, { link: props.vrow.link })
    )
  );
}

// VehicleBody
// This creates the vehicle table body (data rows) component
// props:
// bodyArr (array of VRow Objects)
function VehicleBody(props) {
  var body = [];
  for (var i = 0; i < props.bodyArr.length; i++) {
    var row = React.createElement(VehicleRow, { vrow: props.bodyArr[i] });
    body.push(row);
  }
  return React.createElement(
    "tbody",
    null,
    body
  );
}

// VehicleTable
// This creates a complete vehicle table
// props:
// vehicleType
// bodyArr (array of VRow Objects)
function VehicleTable(props) {
  var id = props.vehicleType;

  return React.createElement(
    "div",
    { "class": "container", id: id },
    React.createElement(
      "table",
      { "class": "table table-sm table-fixed" },
      React.createElement(
        "caption",
        null,
        props.vehicleType
      ),
      React.createElement(VehicleHead, null),
      React.createElement(VehicleBody, { bodyArr: props.bodyArr })
    )
  );
}

// VehicleTables
// This creates many vehicle table (for car, truck, convertibles...)
// props:
// - data (array of VRow Table Objects)
function VehicleTables(props) {
  var tables = [];

  for (var i = 0; i < props.data.length; i++) {
    var table = React.createElement(VehicleTable, { vehicleType: props.data[i].vehicleType, bodyArr: props.data[i].vrowArr });

    tables.push(table);
  }

  return React.createElement(
    "div",
    null,
    tables
  );
}

// Welcome Block
// Create the welcome message at the top
// props: (none)
function Welcome(props) {
  return React.createElement(
    "div",
    { "class": "container" },
    React.createElement(
      "h1",
      null,
      "Welcome to React Transportation"
    ),
    React.createElement(
      "p",
      null,
      "The best place to buy vehicles online"
    )
  );
}

// Selection List
// Create a selection list for the select type input
// props:
// - optionList (array of options)
function SelectionList(props) {
  var options = [React.createElement(
    "option",
    { value: "All" },
    "All"
  )];
  for (var i = 0; i < props.optionList.length; i++) {
    var val = props.optionList[i];
    options.push(React.createElement(
      "option",
      { value: val },
      val
    ));
  }
  return React.createElement(
    "select",
    { "class": "form-control", id: "sel_cars" },
    options
  );
}

// Option Form
// create the check box and the selection list
// props:
// - data (array of VRow Table Objects)
function OptionForm(props) {
  var optionList = props.data.map(function (x) {
    return x.vehicleType;
  });

  return React.createElement(
    "div",
    { "class": "container" },
    React.createElement(
      "h2",
      null,
      "Choose Options"
    ),
    React.createElement(
      "div",
      { "class": "checkbox", id: "cb_new_only" },
      React.createElement(
        "label",
        null,
        React.createElement("input", { type: "checkbox", value: "" }),
        " New Only"
      )
    ),
    React.createElement(
      "div",
      { "class": "form-group" },
      React.createElement(
        "label",
        { "for": "sel_cars" },
        "Select Type"
      ),
      React.createElement(SelectionList, { optionList: optionList })
    )
  );
}

function ReactVehicleApp() {
  return React.createElement(
    "div",
    { "class": "container" },
    React.createElement(Welcome, null),
    React.createElement(OptionForm, { data: data }),
    React.createElement(VehicleTables, { data: data })
  );
}

ReactDOM.render(React.createElement(ReactVehicleApp, null), document.getElementById("root"));

// === JQuery for Select Type ====

var types = data.map(function (x) {
  return x.vehicleType;
});

$(document).ready(function () {
  $("#sel_cars").click(function () {
    var sel = document.getElementById("sel_cars");
    var selectedID = sel.options[sel.selectedIndex].text;

    console.log(types);

    if (selectedID == 'All') {
      for (var i = 0; i < types.length; i++) {
        $("#" + types[i]).fadeIn();
      }
    } else {
      for (var i = 0; i < types.length; i++) {
        if (types[i] == selectedID) {
          $("#" + types[i]).fadeIn();
        } else {
          $("#" + types[i]).fadeOut();
        }
      }
    }
  });
});