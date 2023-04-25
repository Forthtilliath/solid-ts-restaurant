import { Button } from "./Button";

type Props = {
  onClick: () => void;
};

export function NextButton(props: Props) {
  return <Button onClick={props.onClick} d="M9 5l7 7-7 7" label="Suivant" />;
}
