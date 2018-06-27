var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var activities = ["Science Lab", "Swimming", "Cooking", "Painting"];

var restrictions = [{ code: "a", content: "Dietary Restriction" }, { code: "b", content: "Physical Disabilities" }, { code: "c", content: "Medical Needs" }];

// props:
// - id
// - title
// - value
// - handle

var InputField = function (_React$Component) {
  _inherits(InputField, _React$Component);

  function InputField(props) {
    _classCallCheck(this, InputField);

    return _possibleConstructorReturn(this, (InputField.__proto__ || Object.getPrototypeOf(InputField)).call(this, props));
  }

  _createClass(InputField, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(
          "label",
          { htmlFor: this.props.id },
          this.props.title,
          ":"
        ),
        React.createElement("input", {
          type: "text",
          className: "form-control",
          id: this.props.id,
          placeholder: 'Enter ' + this.props.title,
          value: this.props.value,
          onChange: this.props.handle })
      );
    }
  }]);

  return InputField;
}(React.Component);

// props:
// - id
// - title
// - optionList
// - value
// - handle


var SelectInput = function (_React$Component2) {
  _inherits(SelectInput, _React$Component2);

  function SelectInput(props) {
    _classCallCheck(this, SelectInput);

    return _possibleConstructorReturn(this, (SelectInput.__proto__ || Object.getPrototypeOf(SelectInput)).call(this, props));
  }

  _createClass(SelectInput, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(
          "label",
          { htmlFor: this.props.id },
          this.props.title,
          ":"
        ),
        React.createElement(
          "select",
          {
            className: "form-control",
            id: this.props.id,
            value: this.props.value,
            onChange: this.props.handle },
          this.props.optionList.map(function (item, ind) {
            return React.createElement(
              "option",
              { key: ind, value: item },
              item
            );
          })
        )
      );
    }
  }]);

  return SelectInput;
}(React.Component);

// props:
// - id
// - code
// - checkname
// - checked
// - handle


var CheckBox = function (_React$Component3) {
  _inherits(CheckBox, _React$Component3);

  function CheckBox() {
    _classCallCheck(this, CheckBox);

    return _possibleConstructorReturn(this, (CheckBox.__proto__ || Object.getPrototypeOf(CheckBox)).apply(this, arguments));
  }

  _createClass(CheckBox, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "form-check" },
        React.createElement(
          "label",
          { className: "form-check-label" },
          React.createElement("input", {
            id: this.props.id,
            type: "checkbox",
            className: "form-check-input",
            code: this.props.code,
            checked: this.props.checked,
            onChange: this.props.handle
          }),
          this.props.checkname
        )
      );
    }
  }]);

  return CheckBox;
}(React.Component);

// props:
// - id
// - description
// - checkList
// - value
// - handle


var CheckBoxes = function (_React$Component4) {
  _inherits(CheckBoxes, _React$Component4);

  function CheckBoxes(props) {
    _classCallCheck(this, CheckBoxes);

    return _possibleConstructorReturn(this, (CheckBoxes.__proto__ || Object.getPrototypeOf(CheckBoxes)).call(this, props));
  }

  _createClass(CheckBoxes, [{
    key: "render",
    value: function render() {
      var _this5 = this;

      return React.createElement(
        "div",
        { id: this.props.id },
        React.createElement(
          "label",
          { htmlFor: this.props.id },
          this.props.description
        ),
        this.props.checkList.map(function (item, ind) {
          return React.createElement(CheckBox, {
            key: ind,
            id: ind,
            checkname: item.code + ') ' + item.content,
            checked: _this5.props.value[ind],
            code: item.code,
            handle: _this5.props.handle
          });
        })
      );
    }
  }]);

  return CheckBoxes;
}(React.Component);

// props:
// - handle


var SubmitButton = function (_React$Component5) {
  _inherits(SubmitButton, _React$Component5);

  function SubmitButton() {
    _classCallCheck(this, SubmitButton);

    return _possibleConstructorReturn(this, (SubmitButton.__proto__ || Object.getPrototypeOf(SubmitButton)).apply(this, arguments));
  }

  _createClass(SubmitButton, [{
    key: "render",
    value: function render() {
      var _this7 = this;

      var style = {
        'marginTop': '20px',
        'marginBottom': '20px'
      };

      return React.createElement(
        "button",
        {
          style: style,
          className: "btn btn-info",
          onClick: function onClick() {
            return _this7.props.handle();
          } },
        "Add"
      );
    }
  }]);

  return SubmitButton;
}(React.Component);

// props
// - handle
// - rowid


var RemoveButton = function (_React$Component6) {
  _inherits(RemoveButton, _React$Component6);

  function RemoveButton() {
    _classCallCheck(this, RemoveButton);

    return _possibleConstructorReturn(this, (RemoveButton.__proto__ || Object.getPrototypeOf(RemoveButton)).apply(this, arguments));
  }

  _createClass(RemoveButton, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "button",
        {
          className: "btn btn-warning",
          "data-rowid": this.props.rowid,
          onClick: this.props.handle },
        "delete"
      );
    }
  }]);

  return RemoveButton;
}(React.Component);

var ResultTableHead = function (_React$Component7) {
  _inherits(ResultTableHead, _React$Component7);

  function ResultTableHead() {
    _classCallCheck(this, ResultTableHead);

    return _possibleConstructorReturn(this, (ResultTableHead.__proto__ || Object.getPrototypeOf(ResultTableHead)).apply(this, arguments));
  }

  _createClass(ResultTableHead, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "thead",
        null,
        React.createElement(
          "tr",
          null,
          React.createElement(
            "th",
            null,
            "Remove"
          ),
          React.createElement(
            "th",
            null,
            "First Name"
          ),
          React.createElement(
            "th",
            null,
            "Last Name"
          ),
          React.createElement(
            "th",
            null,
            "Activity"
          ),
          React.createElement(
            "th",
            null,
            "Restrictions"
          )
        )
      );
    }
  }]);

  return ResultTableHead;
}(React.Component);

var ResultTableRow = function (_React$Component8) {
  _inherits(ResultTableRow, _React$Component8);

  function ResultTableRow() {
    _classCallCheck(this, ResultTableRow);

    return _possibleConstructorReturn(this, (ResultTableRow.__proto__ || Object.getPrototypeOf(ResultTableRow)).apply(this, arguments));
  }

  _createClass(ResultTableRow, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "tr",
        { id: this.props.id },
        React.createElement(
          "td",
          null,
          React.createElement(RemoveButton, {
            rowid: this.props.id,
            handle: this.props.handle })
        ),
        React.createElement(
          "td",
          null,
          this.props.firstname
        ),
        React.createElement(
          "td",
          null,
          this.props.lastname
        ),
        React.createElement(
          "td",
          null,
          this.props.activity
        ),
        React.createElement(
          "td",
          null,
          this.props.restrictions
        )
      );
    }
  }]);

  return ResultTableRow;
}(React.Component);

var ResultTableBody = function (_React$Component9) {
  _inherits(ResultTableBody, _React$Component9);

  function ResultTableBody() {
    _classCallCheck(this, ResultTableBody);

    return _possibleConstructorReturn(this, (ResultTableBody.__proto__ || Object.getPrototypeOf(ResultTableBody)).apply(this, arguments));
  }

  _createClass(ResultTableBody, [{
    key: "render",
    value: function render() {
      var _this12 = this;

      return React.createElement(
        "tbody",
        null,
        this.props.resultList.map(function (item, ind) {
          return React.createElement(ResultTableRow, { key: ind,
            id: item.id,
            firstname: item.firstname,
            lastname: item.lastname,
            activity: item.activity,
            restrictions: item.restrictions,
            handle: function handle() {
              _this12.props.handle(ind);
            } });
        })
      );
    }
  }]);

  return ResultTableBody;
}(React.Component);

var ResultTable = function (_React$Component10) {
  _inherits(ResultTable, _React$Component10);

  function ResultTable() {
    _classCallCheck(this, ResultTable);

    return _possibleConstructorReturn(this, (ResultTable.__proto__ || Object.getPrototypeOf(ResultTable)).apply(this, arguments));
  }

  _createClass(ResultTable, [{
    key: "render",
    value: function render() {
      var style = {
        'backgroundcolor': '#f3f3f3',
        'margintop': '20px'
      };

      return React.createElement(
        "table",
        { style: style, className: "table table-bordered" },
        React.createElement(ResultTableHead, null),
        React.createElement(ResultTableBody, {
          resultList: this.props.resultList,
          handle: this.props.handle })
      );
    }
  }]);

  return ResultTable;
}(React.Component);

var App = function (_React$Component11) {
  _inherits(App, _React$Component11);

  function App(props) {
    _classCallCheck(this, App);

    var _this14 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this14.state = {
      nextPID: 0,
      resultList: [],
      codeMap: restrictions.map(function (items, ind) {
        return items.code;
      }),
      firstname: '',
      lastname: '',
      activity: activities[0],
      restrictions: restrictions.map(function (items, ind) {
        return false;
      })
    };

    _this14.firstnameChangeHandle = _this14.firstnameChangeHandle.bind(_this14);
    _this14.lastnameChangeHandle = _this14.lastnameChangeHandle.bind(_this14);
    _this14.activityChangeHandle = _this14.activityChangeHandle.bind(_this14);
    _this14.restrictionChangeHandle = _this14.restrictionChangeHandle.bind(_this14);
    _this14.addResultHandle = _this14.addResultHandle.bind(_this14);
    _this14.removeResultHandle = _this14.removeResultHandle.bind(_this14);
    return _this14;
  }

  _createClass(App, [{
    key: "firstnameChangeHandle",
    value: function firstnameChangeHandle(event) {
      this.setState({ firstname: event.target.value });
    }
  }, {
    key: "lastnameChangeHandle",
    value: function lastnameChangeHandle(event) {
      this.setState({ lastname: event.target.value });
    }
  }, {
    key: "activityChangeHandle",
    value: function activityChangeHandle(event) {
      this.setState({ activity: event.target.value });
    }
  }, {
    key: "restrictionChangeHandle",
    value: function restrictionChangeHandle(event) {

      var cid = event.target.id;
      var checked = event.target.checked;

      this.setState(function (prevState, props) {

        var nextRestrictions = prevState.restrictions.slice();
        nextRestrictions[cid] = checked;
        return {
          restrictions: nextRestrictions
        };
      });
    }
  }, {
    key: "addResultHandle",
    value: function addResultHandle() {
      var _this15 = this;

      this.setState(function (prevState, props) {
        var resultListCopy = _this15.state.resultList.slice();

        var restrictionsContent = [];
        for (var i = 0; i < _this15.state.restrictions.length; i++) {
          if (_this15.state.restrictions[i]) {
            restrictionsContent.push(_this15.state.codeMap[i]);
          }
        }
        restrictionsContent = restrictionsContent.join(', ');

        resultListCopy.push({
          id: _this15.state.nextPID,
          firstname: _this15.state.firstname,
          lastname: _this15.state.lastname,
          activity: _this15.state.activity,
          restrictions: restrictionsContent
        });

        return {
          nextPID: prevState.nextPID + 1,
          resultList: resultListCopy,
          firstname: '',
          lastname: '',
          activity: activities[0],
          restrictions: restrictions.map(function (items, ind) {
            return false;
          })
        };
      });
    }
  }, {
    key: "removeResultHandle",
    value: function removeResultHandle(index) {

      var updatedResultList = this.state.resultList.slice();
      updatedResultList.splice(index, 1);

      this.setState({
        resultList: updatedResultList
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "h1",
          null,
          "Activity Registration"
        ),
        React.createElement(InputField, {
          id: "firstname",
          title: "First Name",
          value: this.state.firstname,
          handle: this.firstnameChangeHandle }),
        React.createElement(InputField, {
          id: "lastname",
          title: "Last Name",
          value: this.state.lastname,
          handle: this.lastnameChangeHandle }),
        React.createElement(SelectInput, {
          id: "activity",
          title: "Activity",
          value: this.state.activity,
          handle: this.activityChangeHandle,
          optionList: activities
        }),
        React.createElement(CheckBoxes, {
          id: "restriction",
          description: "Check all apply:",
          value: this.state.restrictions,
          handle: this.restrictionChangeHandle,
          checkList: restrictions
        }),
        React.createElement(SubmitButton, { handle: this.addResultHandle }),
        React.createElement(ResultTable, {
          resultList: this.state.resultList,
          handle: this.removeResultHandle
        })
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));