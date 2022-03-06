import { ChangeEvent, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext';

import { Theme } from '../../components/Theme';
import { Container } from './styles';

export function FormStep3() {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === '') {
      navigate('/');
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3,
      });
    }
  }, []);

  function handleNextStep() {
    if (state.email !== '' && state.github !== '') {
      console.log(state);
    } else {
      alert("Preencha os dados");
    }
  }

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value,
    });
  }

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value,
    });
  }

  function handleGithubChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value,
    });
  }


  return (
    <Theme>
      <Container>
        <p>Passo 3/3</p>
        <h1>Legal, {state.name}! Onde te achamos?</h1>
        <p>Preencha as informações para conseguir entrar em contato.</p>

        <hr />

        <label>
          Qual seu e-mail?
          <input
            type="text"
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>
        <label>
          Qual seu Github?
          <input
            type="url"
            value={state.github}
            onChange={handleGithubChange}
          />
        </label>

        <Link className="backButton" to="/step2">Voltar</Link>
        <button onClick={handleNextStep}>Finalizar Cadastro</button>
      </Container>
    </Theme>
  );
}