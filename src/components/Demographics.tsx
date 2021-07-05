import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import ButtonBar from '../components/ButtonBar/ButtonBar';

type DemographicProps = {
  handleChange: (e: any) => any
  nextStep: () => void
  values: any
}

function Demographics({handleChange, nextStep, values}: DemographicProps) {
  return (
    <form>
      <TextField
        label="First Name"
        onChange={handleChange('firstName')}
        defaultValue={values.firstName} />
      <TextField
        label="Last Name"
        onChange={handleChange('lastName')}
        defaultValue={values.lastName} />
      <TextField
        label="Gender"
        onChange={handleChange('gender')}
        defaultValue={values.gender} />
      <TextField
        label="Date of Birth"
        onChange={handleChange('dob')}
        defaultValue={values.dob} />
      <TextField
        label="Email"
        onChange={handleChange('email')}
        defaultValue={values.email} />
      <TextField
        label="Phone Number"
        onChange={handleChange('phone')}
        defaultValue={values.phone} />
      <TextField
        label="Street Address"
        onChange={handleChange('address')}
        defaultValue={values.address} />
      <TextField
        label="City"
        onChange={handleChange('city')}
        defaultValue={values.city} />
      <TextField
        label="State"
        onChange={handleChange('state')}
        defaultValue={values.state} />
      <TextField
        label="ZIP Code"
        onChange={handleChange('zip')}
        defaultValue={values.zip} />
      <FormControl
        onChange={handleChange('maritalStatus')}
        defaultValue={values.maritalStatus}>
        <InputLabel id="marital-status">Marital Status</InputLabel>
        <Select
          id="marital-status"
        >
          <MenuItem value={'married'}>Married</MenuItem>
          <MenuItem value={'single'}>Single</MenuItem>
          <MenuItem value={'divorced'}>Divorced</MenuItem>
          <MenuItem value={'lifePartner'}>Life Partner</MenuItem>
          <MenuItem value={'separated'}>Separated</MenuItem>
          <MenuItem value={'widowed'}>Widowed</MenuItem>
          <MenuItem value={'other'}>Other</MenuItem>
        </Select>
      </FormControl>
      <ButtonBar nextStep={nextStep}/>
    </form>
  );
}

export default Demographics;
