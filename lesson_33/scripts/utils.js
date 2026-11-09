export const renderNestedList = (data) => {
  const ancestors = new WeakSet();

  const renderList = (collection) => {
    const list = document.createElement("ul");
    const isArray = Array.isArray(collection);

    ancestors.add(collection);

    for (const key of Object.keys(collection)) {
      const value = collection[key];
      const item = document.createElement("li");
      const label = isArray ? `[${key}]` : key;

      item.textContent = `${label}: `;

      if (value !== null && typeof value === "object") {
        if (ancestors.has(value)) {
          item.textContent += "[циклічне посилання]";
        } else if (Object.keys(value).length === 0) {
          item.textContent += Array.isArray(value) ? "[]" : "{}";
        } else {
          item.appendChild(renderList(value));
        }
      } else {
        item.textContent +=
          typeof value === "string" ? JSON.stringify(value) : String(value);
      }

      list.appendChild(item);
    }

    ancestors.delete(collection);
    return list;
  };

  return renderList(data);
};
