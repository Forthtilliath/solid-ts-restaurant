import { Button } from "./Button";

type Props = {
  onClick: () => void;
};

export function PrevButton(props: Props) {
  return (
    <Button onClick={props.onClick} d="M15 19l-7-7 7-7" label="Précédent" />
  );
}
