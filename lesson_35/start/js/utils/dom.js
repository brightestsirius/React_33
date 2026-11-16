export const createElement = (tag, className, text) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
};

// [`Роман`, `Драма`] -> [{ value: `Роман`, label: `Драма` }, ...]
export const toOptions = (values) => values.map((value) => ({ value, label: value }));

export const renderOptions = (select, options) => {
  options.forEach(({ value, label }) => {
    select.append(new Option(label, value));
  });
};
