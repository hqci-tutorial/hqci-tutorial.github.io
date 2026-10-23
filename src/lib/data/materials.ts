type Item = {
  title: string;
  description?: string;
  file_path: string;
  when_to_review: "pre" | "post" | "during";
};

type Section = {
  id: string;
  title: string;
  desc: string | null;
  files: Item[];
};

export const Materials: Section[] = [{
  id: "blank-notebooks",
  title: "Exercise Templates",
  desc: "Template Jupyter notebooks for the exercise. Please download them and place them in the exercise folder (instructed in the preparation page). We will cover these during the tutorial.",
  files: [{
    title: "Exercise 1 Notebook",
    description: "A blank template for Exercise 1 (entanglement).",
    file_path: "notebooks/exercise-1-entanglement-blank.ipynb",
    when_to_review: "pre"
  }, {
    title: "Exercise 2 Notebook",
    description: "A blank template for Exercise 2 (search).",
    file_path: "notebooks/exercise-2-search-blank.ipynb",
    when_to_review: "pre"
  }]
}, {
  id: "slides",
  title: "Tutorial Slides",
  desc: "(TBD)",
  files: []
}]