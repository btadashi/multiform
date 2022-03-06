import { Container, Icon, Info, Title, Description } from './styles';

type Props = {
  title: string;
  description: string;
  icon: string;
  selected: boolean;
  onCLick: () => void;
}

export function SelectOption({ title, description, icon, selected, onCLick }: Props) {
  return (
    <Container onClick={onCLick} selected={selected}>
      <Icon>{icon}</Icon>
      <Info>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Info>
    </Container>
  );
}