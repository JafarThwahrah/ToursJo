import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

export default class PaymentForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form>
          <div className="checkOutForm">
            <input
              className="inputField inputFieldNumber m-4"
              type="tel"
              name="number"
              placeholder="Card Number"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />

            <input
              className="inputField m-4"
              type="tel"
              name="name"
              placeholder="Cardholder name"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />

            <input
              className="inputField m-4"
              type="tel"
              name="expiry"
              placeholder="Expiry date"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <input
              className="inputField m-4"
              type="tel"
              name="cvc"
              placeholder="cvc"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-primary btn-lg btn-block w-25 m-4"
                type="submit">
                Continue to checkout
              </button>
            </div>
            {/* <div>
            <Button
              style={{ margin: "1rem" }}
              type="submit"
              className="btnCheckout"
              variant="contained">
              Check Out
            </Button>
          </div> */}
          </div>
        </form>
      </div>
    );
  }
}
