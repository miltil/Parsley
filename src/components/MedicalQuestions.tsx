import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import ButtonBar from '../components/ButtonBar/ButtonBar';

type MedicalQProps = {
  handleChange: (e: any) => any
  prevStep: () => void
  nextStep: () => void
  values: any
}

function MedicalQuestions({handleChange, prevStep, nextStep, values}: MedicalQProps) {
  return (
    <form>
      <div>Do you smoke any tobacco products?</div>
      <TextField
        id="tobacco"
        onChange={handleChange('tobacco')}
        defaultValue={values.tobacco} />
      <div>Do you drink alcohol?</div>
      <TextField
        id="alcohol"
        onChange={handleChange('alcohol')}
        defaultValue={values.alcohol} />
      <div>Have you regularly used illicit drugs?</div>
      <TextField
        id="drugs"
        onChange={handleChange('drugs')}
        defaultValue={values.drugs} />
      <div>What current medications do you use?</div>
      <TextField
        id="meds"
        onChange={handleChange('meds')}
        defaultValue={values.meds} />
      <div>Medication allergies or reactions</div>
      <TextField
        id="allergies"
        onChange={handleChange('allergies')}
        defaultValue={values.allergies} />
      <div>List any surgeries or hospital stays you have had and their approximate date / year</div>
      <TextField
        id="surgeries"
        onChange={handleChange('surgeries')}
        defaultValue={values.surgeries} />
      <ButtonBar prevStep={prevStep} nextStep={nextStep}/>
    </form>
  );
}

export default MedicalQuestions;
