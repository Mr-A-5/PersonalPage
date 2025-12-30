import { useEffect } from "react";

export function useTheme(themeName: string) {
  useEffect(() => {
    import(`../themes/theme-${themeName}.css`);
  }, [themeName]);
}
