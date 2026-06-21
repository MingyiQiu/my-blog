type Theme = {
  name: string;
  colors: string[];
};

export const themes = {
  mondrian: {
    name: "Mondrian",
    colors: ["#E53935", "#FDD835", "#1E88E5", "#F5F5F5"],
  },
  monet: {
    name: "Monet",
    colors: ["#5DADE2", "#58D68D", "#F5B041", "#AF7AC5"],
  },
  vangogh: {
    name: "Van Gogh",
    colors: ["#2E86AB", "#F4D35E", "#EE964B", "#C81D25"],
  },
} satisfies Record<string, Theme>;

export type ThemeKey = keyof typeof themes;
