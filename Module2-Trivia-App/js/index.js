var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Question
// the question text component
// props:
// - value1: multiplicand in the question
// - value2: multiplier in the question
var Question = function (_React$Component) {
  _inherits(Question, _React$Component);

  function Question() {
    _classCallCheck(this, Question);

    return _possibleConstructorReturn(this, (Question.__proto__ || Object.getPrototypeOf(Question)).apply(this, arguments));
  }

  _createClass(Question, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "center",
        null,
        React.createElement(
          "h1",
          { className: "question" },
          "What is ",
          this.props.value1,
          " x ",
          this.props.value2,
          " ?"
        )
      );
    }
  }]);

  return Question;
}(React.Component);

// Button
// multiple choice button
// props:
// - id: the button id number
// - clickHandle: button click event handler
// - value: value of this 


var Button = function (_React$Component2) {
  _inherits(Button, _React$Component2);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement(
        "button",
        { className: "btn btn-info option", onClick: function onClick() {
            return _this3.props.clickHandle(_this3.props.id);
          } },
        this.props.value
      );
    }
  }]);

  return Button;
}(React.Component);

// ButtonGroup
// group of Buttons
// props:
// - options: array of possible answer
// - clickHandle: button click event handler


var ButtonGroup = function (_React$Component3) {
  _inherits(ButtonGroup, _React$Component3);

  function ButtonGroup() {
    _classCallCheck(this, ButtonGroup);

    return _possibleConstructorReturn(this, (ButtonGroup.__proto__ || Object.getPrototypeOf(ButtonGroup)).apply(this, arguments));
  }

  _createClass(ButtonGroup, [{
    key: "render",
    value: function render() {
      var buttons = [];
      for (var i = 0; i < 4; i++) {
        buttons.push(React.createElement(Button, { id: i, value: this.props.options[i], clickHandle: this.props.clickHandle }));
      }

      return React.createElement(
        "center",
        null,
        React.createElement(
          "div",
          { className: "btn-group-vertical" },
          buttons
        )
      );
    }
  }]);

  return ButtonGroup;
}(React.Component);

// Counter
// props:
// - name: name of the counter (correct or incorrect)
// - value: counter value


var Counter = function (_React$Component4) {
  _inherits(Counter, _React$Component4);

  function Counter(props) {
    _classCallCheck(this, Counter);

    return _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));
  }

  _createClass(Counter, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "center",
        null,
        React.createElement(
          "h2",
          { className: "counter" },
          this.props.name,
          ": ",
          this.props.value
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

// Trivia App
// props: none
// state:
// - value1: value used in multiplication question
// - value2: value used in multiplication question
// - answer: answer to value1 * value2
// - answerOption: the button id given the correct answer
// - options: possible multiple choices
// - correctCount: counting the number of correct answers
// - incorrectCount: counting the number of incorrect answers


var App = function (_React$Component5) {
  _inherits(App, _React$Component5);

  function App(props) {
    _classCallCheck(this, App);

    var _this6 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    var value1 = Math.floor(Math.random() * 10 + 1);
    var value2 = Math.floor(Math.random() * 10 + 1);
    var answer = value1 * value2;
    var answerOption = Math.floor(Math.random() * 4);
    var options = [answer, answer, answer, answer];
    for (var i = 0; i < 4; i++) {
      if (i != answerOption) {
        while (options[i] == answer) {
          options[i] = Math.floor(Math.random() * 10 + 1) * Math.floor(Math.random() * 10 + 1);
        }
      }
    }

    _this6.state = {
      value1: value1,
      value2: value2,
      options: options,
      answer: answer,
      answerOption: answerOption,
      correctCount: 0,
      incorrectCount: 0
    };

    _this6.clickHandle = _this6.clickHandle.bind(_this6);
    return _this6;
  }

  _createClass(App, [{
    key: "clickHandle",
    value: function clickHandle(id) {
      // determine if the click is correct
      var correct = id === this.state.answerOption;

      // generate new question and options
      var value1 = Math.floor(Math.random() * 10 + 1);
      var value2 = Math.floor(Math.random() * 10 + 1);
      var answer = value1 * value2;
      var answerOption = Math.floor(Math.random() * 4);
      var options = [answer, answer, answer, answer];
      for (var i = 0; i < 4; i++) {
        if (i != answerOption) {
          while (options[i] == answer) {
            options[i] = Math.floor(Math.random() * 10 + 1) * Math.floor(Math.random() * 10 + 1);
          }
        }
      }

      // update state
      this.setState(function (prevState, props) {
        return {
          value1: value1,
          value2: value2,
          options: options,
          answer: answer,
          answerOption: answerOption,
          correctCount: correct ? prevState.correctCount + 1 : prevState.correctCount,
          incorrectCount: correct ? prevState.incorrectCount : prevState.incorrectCount + 1
        };
      });
    }
  }, {
    key: "render",
    value: function render() {

      return React.createElement(
        "div",
        { className: "container" },
        React.createElement(Question, { value1: this.state.value1, value2: this.state.value2 }),
        React.createElement(ButtonGroup, { options: this.state.options, clickHandle: this.clickHandle }),
        React.createElement(Counter, { name: "Correct", value: this.state.correctCount }),
        React.createElement(Counter, { name: "Incorrect", value: this.state.incorrectCount })
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));