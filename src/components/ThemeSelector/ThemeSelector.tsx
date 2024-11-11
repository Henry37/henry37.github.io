import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';
import { ThemeSelectorContainer, ThemeSelectorButton } from './ThemeSelector.styles';

export const ThemeSelector: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <ThemeSelectorContainer>
      <ThemeSelectorButton
        selected={theme === 'light'}
        type="button"
        onClick={() => {
          setTheme('light');
        }}
      >
        Light
      </ThemeSelectorButton>
      <ThemeSelectorButton
        selected={theme === 'dark'}
        type="button"
        onClick={() => {
          setTheme('dark');
        }}
      >
        Dark
      </ThemeSelectorButton>
    </ThemeSelectorContainer>
  );
};
