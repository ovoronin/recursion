function draw() {
  const canvas = document.getElementById("canvas");
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  getOptions();

  const ctx = canvas.getContext("2d");
  ctx.strokeStyle = "green";
  let count = 0;

  function draw_branch(x, y, angle, len, depth) {
    if (depth >= options.maxDepth) {
      return;
    }
    //console.trace();
    const newX = x + len * Math.sin(angle);
    const newY = y - len * Math.cos(angle);
    ctx.moveTo(x, y);
    ctx.lineTo(newX, newY);
    count++;

    draw_branch(newX, newY, angle + options.angleR, len * options.len, depth + 1);
    draw_branch(newX, newY, angle - options.angleL, len * options.len, depth + 1);
  }

  function draw_iterative() {
    const nodes = [];
    nodes.push([canvas.width / 2, canvas.height, 0, canvas.height / 5, 0]);

    while (nodes.length) {
      const [x, y, angle, len, depth] = nodes[nodes.length - 1];
      nodes.pop();

      if (depth >= options.maxDepth) {
        continue;
      }

      const newX = x + len * Math.sin(angle);
      const newY = y - len * Math.cos(angle);
      ctx.moveTo(x, y);
      ctx.lineTo(newX, newY);
      count++;

      nodes.push([newX, newY, angle + options.angleR, len * options.len, depth+1]);
      nodes.push([newX, newY, angle - options.angleL, len * options.len, depth+1]);
    }
  }

  console.time();
  ctx.beginPath();
  draw_branch(canvas.width / 2, canvas.height, 0, canvas.height / 5, 0);
  //draw_iterative();
  ctx.stroke();
  console.log(count);
  console.timeEnd();
}

function setEventHandlers() {
  for (const key of Object.keys(options)) {
    document.getElementById(key).addEventListener('input', () => draw());
  }
}

setOptions();
setEventHandlers();
draw();