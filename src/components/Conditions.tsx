import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import ButtonBar from '../components/ButtonBar/ButtonBar';

type ConditionsProps = {
  handleChange: (e: any) => {}
  prevStep: () => void
  nextStep: () => void
}

function Conditions({handleChange, prevStep, nextStep}: ConditionsProps) {
  return (
    <div>
      What conditions do you have?
      <ButtonBar prevStep={prevStep} nextStep={nextStep}/>
    </div>
  );
}

export default Conditions;
