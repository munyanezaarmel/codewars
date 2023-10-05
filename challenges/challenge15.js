const capitaliseString = function (string) {
  const exceptions = ["a", "an", "but", "on", "and"];
  const capitalise = string
    .toLowerCase()
    .split(" ")
    .map((el) =>
      exceptions.includes(el) ? el : el[0].toUpperCase() + el.slice(1)
    )
    .join(" ");
  return capitalise;
};
console.log(capitaliseString("this is a title case"));
console.log(capitaliseString("this is a title and is too long"));
console.log(capitaliseString("this is on TITLE and is but LONG"));
