import { Container } from "./style";

interface ButtonDarkModeProps {
  darkMode: boolean;
  setDarkMode: (v: boolean) => void;
}

export function ButtonDarkMode({ darkMode, setDarkMode }: ButtonDarkModeProps) {
  return (
    <Container>
      <p>Dark mode</p>
      <label className="switch">
        <input type="checkbox" onClick={() => setDarkMode(!darkMode)} />
        <span className="slider round"></span>
      </label>
    </Container>
  );
}
