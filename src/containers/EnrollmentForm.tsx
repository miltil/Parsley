import * as React from 'react';
import Demographics from '../components/Demographics';
import Conditions from '../components/Conditions';
import MedicalQuestions from '../components/MedicalQuestions';
import Summary from '../components/Summary';
import Submit from '../components/Submit';

export interface EnrollmentFormState {
  step: number,
  firstName: string,
  lastName: string,
  gender: string,
  dob: string,
  email: string,
  phone: string,
  address: string,
  city: string,
  state: string,
  zip: string,
  maritalStatus: string,
  tobacco: string,
  alcohol: string,
  drugs: string,
  meds: string,
  allergies: string,
  surgeries: string,
  checked: boolean,
}

export default class EnrollmentForm extends React.Component <{}, EnrollmentFormState> {

  constructor() {
    super({});
    this.state = {
    step: 1,
      firstName: '',
      lastName: '',
      gender: '',
      dob: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      maritalStatus: '',
      tobacco: '',
      alcohol: '',
      drugs: '',
      meds: '',
      allergies: '',
      surgeries: '',
      checked: false,
    }
  }

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 })
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 })
  }

  handleChange = (input: string) => (e: any) => {
    this.setState({...this.state, [input]: e.target.value});
  }

  handleSubmit = () => {
    console.log(JSON.stringify(this.state));
    alert('You have successfully enrolled!')
  }

  render() {
    const {
      step,
      firstName,
      lastName,
      gender,
      dob,
      email,
      phone,
      address,
      city,
      state,
      zip,
      maritalStatus,
      tobacco,
      alcohol,
      drugs,
      meds,
      allergies,
      surgeries,
      checked,
    } = this.state;
    const demographicValues = {
      firstName,
      lastName,
      gender,
      dob,
      email,
      phone,
      address,
      city,
      state,
      zip,
      maritalStatus
    }
    const medicalQuestionValues = {
      tobacco,
      alcohol,
      drugs,
      meds,
      allergies,
      surgeries,
    }
    const checkedValue = {checked}

    let currentStep;

    switch (step) {
      case 1:
        currentStep = (
          <Demographics
            values={demographicValues}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
          />
        )
        break;
      case 2:
        currentStep = (
          <Conditions
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
          />
        )
        break;
      case 3:
        currentStep = (
          <MedicalQuestions
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={medicalQuestionValues}
          />
        )
        break;
      case 4:
        currentStep = (
          <Summary
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={this.state}
          />
        )
        break;
      case 5:
        currentStep = (
          <Submit
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            checkedValue={checkedValue.checked}
          />
        )
    }
    return (
      <div>
        <h1>THE ENROLLMENT FORM</h1>
        {currentStep}
      </div>
    )
  }
}
