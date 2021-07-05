import ButtonBar from '../components/ButtonBar/ButtonBar';
import CheckBox from '@material-ui/core/Checkbox';

type SubmitProps = {
  handleChange: (e: any) => any
  handleSubmit: () => any
  prevStep: () => void
  checkedValue: boolean
}

function Submit({handleSubmit, handleChange, prevStep, checkedValue}: SubmitProps) {
  const terms = `Nullam quis risus eget urna mollis ornare vel eu leo.
    Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat
    a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada
    magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet
    non magna. Etiam porta sem malesuada magna mollis euismod. Nullam quis risus
    eget urna mollis ornare vel eu leo. Praesent commodo cursus magna, vel scelerisque
    nisl consectetur et. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus
    auctor fringilla.`
  return (
    <div>
      Terms
      <div>
        {terms}
      </div>
      I agree <CheckBox />
      <ButtonBar prevStep={prevStep} submit={handleSubmit}/>
    </div>
  );
}

export default Submit;
