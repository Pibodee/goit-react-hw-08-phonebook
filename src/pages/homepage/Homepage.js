import { Container, Hero, Invitation } from '../PagesStyles.styled.';

export function Homepage() {
  return (
    <Container>
      <Hero>Wellcome to PhoneBook App!</Hero>
      <Invitation>Log in to get access to Your personal phonebook!</Invitation>
      <Invitation>New here? Register to crate Your own phonebook!</Invitation>
    </Container>
  );
}
