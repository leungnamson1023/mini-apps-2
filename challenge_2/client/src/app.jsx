import React from 'react';
import FormOne from './FormOne';
import FormTwo from './FormTwo';
import FormThree from './FormThree';
import Confirm from './Confirm';
import ajax from './ajax';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initial: false,
      formOne: false,
      formTwo: false,
      formThree: false,
      name: '',
      email: '',
      password: '',
      addressLineOne: '',
      addressLineTwo: '',
      city: '',
      state: '',
      zip: 0,
      credit: 0,
      expiry: '',
      cvv: 0,
      billZip: 0,
    };
    this.secondClick = this.secondClick.bind(this);
    this.thirdClick = this.thirdClick.bind(this);
    this.confirmClick = this.confirmClick.bind(this);
    this.finalClick = this.finalClick.bind(this);
    this.handleChangeFormOneName = this.handleChangeFormOneName.bind(this);
    this.handleChangeFormOneEmail = this.handleChangeFormOneEmail.bind(this);
    this.handleChangeFormOnePassword = this.handleChangeFormOnePassword.bind(this);
    this.handleChangeFormTwoAddressOne = this.handleChangeFormTwoAddressOne.bind(this);
    this.handleChangeFormTwoAddressTwo = this.handleChangeFormTwoAddressTwo.bind(this);
    this.handleChangeFormTwoCity = this.handleChangeFormTwoCity.bind(this);
    this.handleChangeFormTwoState = this.handleChangeFormTwoState.bind(this);
    this.handleChangeFormTwoZip = this.handleChangeFormTwoZip.bind(this);
    this.handleChangeFormThreeCredit = this.handleChangeFormThreeCredit.bind(this);
    this.handleChangeFormThreeExpiry = this.handleChangeFormThreeExpiry.bind(this);
    this.handleChangeFormThreeCVV = this.handleChangeFormThreeCVV.bind(this);
    this.handleChangeFormThreeBillZip = this.handleChangeFormThreeBillZip.bind(this);
  }

  firstClick() {
    this.setState({ initial: !this.state.initial });
  }

  secondClick() {
    this.setState({ initial: !this.state.initial });
    this.setState({ formOne: !this.state.formOne });
  }

  thirdClick() {
    this.setState({ formOne: !this.state.formOne });
    this.setState({ formTwo: !this.state.formTwo });
  }

  confirmClick() {
    this.setState({ formTwo: !this.state.formTwo });
    this.setState({ formThree: !this.state.formThree });
  }

  finalClick() {
    const obj = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      addressLineOne: this.state.addressLineOne,
      addressLineTwo: this.state.addressLineTwo,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      credit: this.state.credit,
      expiry: this.state.expiry,
      cvv: this.state.cvv,
      billZip: this.state.billZip,
    };
    ajax(obj);
    this.setState({ formThree: !this.state.formThree });
  }

  handleChangeFormOneName(e) {
    this.setState({ name: e.target.value });
  }

  handleChangeFormOneEmail(e) {
    this.setState({ email: e.target.value });
  }

  handleChangeFormOnePassword(e) {
    this.setState({ password: e.target.value });
  }

  handleChangeFormTwoAddressOne(e) {
    this.setState({ addressLineOne: e.target.value });
  }

  handleChangeFormTwoAddressTwo(e) {
    this.setState({ addressLineTwo: e.target.value });
  }

  handleChangeFormTwoCity(e) {
    this.setState({ city: e.target.value });
  }

  handleChangeFormTwoState(e) {
    this.setState({ state: e.target.value });
  }

  handleChangeFormTwoZip(e) {
    this.setState({ zip: e.target.value });
  }

  handleChangeFormThreeCredit(e) {
    this.setState({ credit: e.target.value });
  }

  handleChangeFormThreeExpiry(e) {
    this.setState({ expiry: e.target.value });
  }

  handleChangeFormThreeCVV(e) {
    this.setState({ cvv: e.target.value });
  }

  handleChangeFormThreeBillZip(e) {
    this.setState({ billZip: e.target.value });
  }

  render() {
    return (
      <div>
        {!this.state.initial ?
          <div>
            <button onClick={() => this.firstClick()}> Click me! </button>
            <div>HomePage</div>
          </div>
        : null
        }
        {this.state.initial ?
          <FormOne
            updateName={this.handleChangeFormOneName}
            updateEmail={this.handleChangeFormOneEmail}
            updatePassword={this.handleChangeFormOnePassword}
            click={this.secondClick}
          /> : null
        }
        {this.state.formOne ?
          <FormTwo
            updateAddressOne={this.handleChangeFormTwoAddressOne}
            updateAddressTwo={this.handleChangeFormTwoAddressTwo}
            updateCity={this.handleChangeFormTwoCity}
            updateState={this.handleChangeFormTwoState}
            updateZip={this.handleChangeFormTwoZip}
            click={this.thirdClick}
          /> : null
        }
        {this.state.formTwo ?
          <FormThree
            updateCredit={this.handleChangeFormThreeCredit}
            updateExpiry={this.handleChangeFormThreeExpiry}
            updateCVV={this.handleChangeFormThreeCVV}
            updateBillZip={this.handleChangeFormThreeBillZip}
            click={this.confirmClick}
          /> : null
        }
        {this.state.formThree ?
          <Confirm
            name={this.state.name}
            email={this.state.email}
            password={this.state.password}
            addressLineOne={this.state.addressLineOne}
            addressLineTwo={this.state.addressLineTwo}
            city={this.state.city}
            state={this.state.state}
            zip={this.state.zip}
            credit={this.state.credit}
            expiry={this.state.expiry}
            cvv={this.state.cvv}
            billZip={this.state.billZip}
            click={this.finalClick}
          /> : null
        }
      </div>
    );
  }
}

export default App;
