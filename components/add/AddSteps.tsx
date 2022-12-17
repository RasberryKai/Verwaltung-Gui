import { Stepper } from "@mantine/core";

export default function AddSteps(props: { activeStep: number; setActiveStep: (step: number) => void }) {
    return (
        <Stepper active={props.activeStep} onStepClick={props.setActiveStep} breakpoint={"sm"}>
            <Stepper.Step label={"General"} description={"General Information about the Item"} />
            <Stepper.Step label={"Details"} description={"Detailed Information about the Item"} />
        </Stepper>
    );
}
