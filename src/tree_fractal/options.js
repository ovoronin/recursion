const options = {
  maxDepth: 15,
  angleR: 0.3,
  angleL: 0.3,
  len: 0.75
}

function getValue(id) {
  return Number(document.getElementById(id)?.value);
}

function setValue(id, value) {
  document.getElementById(id).value = value;
}

function setOptions() {
  for (const [key, value] of Object.entries(options)) {
    setValue(key, value);
  }
}

function getOptions() {
  for (const key of Object.keys(options)) {
    options[key] = getValue(key);
  }
}

