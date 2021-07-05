import ButtonBar from '../components/ButtonBar/ButtonBar';

type SummaryProps = {
    values: any
    prevStep: () => void
    nextStep: () => void
}

function Summary({values, prevStep, nextStep}: SummaryProps) {
  const summaryDisplay = Object.keys(values).map((keyName, i) => (
    <li key={keyName}>
        <span>{keyName}: {values[keyName]}</span>
    </li>
  ))

  return (
    <div>
        Summary
        {summaryDisplay}
        <ButtonBar prevStep={prevStep} nextStep={nextStep}/>
    </div>
  );
}

export default Summary;
