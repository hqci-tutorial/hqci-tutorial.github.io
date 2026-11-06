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

const copyright_text = `Copyrighted images in the original slides are removed; some are replaced with links.`

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
  title: "Tutorial Slides and Handouts",
  desc: "Lecture portion contents",
  files: [{
    title: "Handouts",
    description: "Handouts (printed version will be distributed).",
    file_path: "files/hqci-tutorial-handout.pdf",
    when_to_review: "during"
  // },{
  //   title: "Session 1 Slides",
  //   description: "The slides for Session 1 (lecture part)." + copyright_text,
  //   file_path: "files/hqci-tutorial-handout.pdf",
  //   when_to_review: "during"
  // },{
  //   title: "Session 2 Slides",
  //   description: "The slides for Session 2 (research part)." + copyright_text,
  //   file_path: "files/hqci-tutorial-handout.pdf",
  //   when_to_review: "during"
  },
]
}]