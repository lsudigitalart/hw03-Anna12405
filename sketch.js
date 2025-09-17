function setup() {

  createCanvas(400, 400);
  noLoop(); 
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  // Anna's HW
  // lots of loops
  // 11 x 10 = 110

  background(200); 

  const cols = 11; // cols
  const rows = 10; // rows
  const margin = 30; // empty space

  // area inside margins
  const usableW = width - margin * 2;
  const usableH = height - margin * 2;

  // count while drawing
  let count = 0;

  // go through rows and cols
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      count++;

      // get x,y for this cell
      const x = margin + (col + 0.5) * (usableW / cols);
      const y = margin + (row + 0.5) * (usableH / rows);

      // size based on how far from middle
      const centerX = width / 2;
      const centerY = height / 2;
      const dx = x - centerX;
      const dy = y - centerY;
      const distance = sqrt(dx * dx + dy * dy);

      // how big the circle can be
      const cellSize = min(usableW / cols, usableH / rows);
      const maxRadius = cellSize * 0.45;

      // smaller if far away
      const r = map(distance, 0, sqrt(sq(centerX) + sq(centerY)), maxRadius, maxRadius * 0.4);

      // color simple math
      const hue = (col * 25 + row * 10) % 360; // hue
      const sat = 60; // saturation
      const bri = 90 - (distance / (sqrt(sq(centerX) + sq(centerY)))) * 40; // brightness

      noStroke();
      fill(hue, sat, bri);
      circle(x, y, r * 2);

      // tiny dot inside
      fill((hue + 60) % 360, sat * 0.6, min(100, bri + 5));
      circle(x + r * 0.12, y - r * 0.08, r * 0.35);
    }
  }
  }

