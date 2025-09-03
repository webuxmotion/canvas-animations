function generateLines(canvas) {
    const lines = [];
    const step = 100;
    const itemsVerticalCount = canvas.width / 100;
    const itemsHorizontalCount = canvas.height / 100;

    // vertical lines
    for (let i = 0; i < itemsVerticalCount; i++) {
      const line = {
        p1: {
          x: i * step,
          y: 0,
        },
        p2: {
          x: i * step,
          y: canvas.height,
        },
      };

      lines.push(line);
    }

    // horizontal lines
    for (let i = 0; i < itemsHorizontalCount; i++) {
      const line = {
        p1: {
          x: 0,
          y: i * step,
        },
        p2: {
          x: canvas.width,
          y: i * step,
        },
      };

      lines.push(line);
    }

    return lines;
  }