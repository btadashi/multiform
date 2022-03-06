import { useEffect } from 'react';
/**Importamos Link de dentro do react-router-dom */
import { useNavigate, Link } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext';

import { SelectOption } from '../../components/SelectOption';

import { Theme } from '../../components/Theme';
import { Container } from './styles';

export function FormStep2() {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === '') {
      navigate('/');
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2,
      });
    }
  }, []);

  function handleNextStep() {
    if (state.name !== '') {
      navigate('/step3');
    } else {
      alert("Preencha os dados")
    }
  }

  function setLevel(level: number) {
    dispatch({
      type: FormActions.setLevel,
      payload: level,
    });
  }

  return (
    <Theme>
      <Container>
        <p>Passo 2/3</p>
        <h1>{state.name}, o que melhor descreve você?</h1>
        <p>Escolha a opção que melhor condiz com seu estado atual, profissionalmente.</p>

        <hr />
        <SelectOption
          title="Sou iniciante"
          description="Comecei a programar há menos de 2 anos"
          icon="🥳"
          selected={state.level === 0}
          onCLick={() => setLevel(0)}
        />
        <SelectOption
          title="Sou programador"
          description="Já programo há mais de 2 anos"
          icon="😎"
          selected={state.level === 1}
          onCLick={() => setLevel(1)}
        />

        <Link className="backButton" to="/">Voltar</Link>
        <button onClick={handleNextStep}>Próximo</button>
      </Container>
    </Theme>
  );
}