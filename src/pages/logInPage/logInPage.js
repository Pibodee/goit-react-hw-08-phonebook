import LogInForm from 'components/LogInForm/LogInForm';
import { Container, Hero } from 'pages/PagesStyles.styled.';
export function Loginpage() {
  return (
    <Container>
      <Hero>Please, log in</Hero>
      <LogInForm />
    </Container>
  );
}
