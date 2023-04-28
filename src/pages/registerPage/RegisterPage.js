import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import { Container, Hero } from 'pages/PagesStyles.styled.';

export function Registerpage() {
  return (
    <Container>
      <Hero>Register to start</Hero>
      <RegistrationForm />
    </Container>
  );
}
