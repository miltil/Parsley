import Button from '@material-ui/core/Button';
import './ButtonBar.css';

type ButtonProps = {
  prevStep?: () => void
  nextStep?: () => void
  submit?: () => void
}

function ButtonBar({prevStep, nextStep, submit}: ButtonProps) {
  return (
    <div>
      {prevStep && <div className={"prevButton"}><Button onClick={prevStep}>PREV</Button></div>}
      {nextStep && <div className={"nextButton"}><Button onClick={nextStep}>NEXT</Button></div>}
      {submit && <div className={"nextButton"}><Button onClick={submit}>SUBMIT</Button></div>}
    </div>
  );
}

export default ButtonBar;
