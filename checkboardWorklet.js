/* checkboardWorklet.js */

registerPaint(
  "headerHighlight",
  class {
    /*
       define if alphatransparency  is allowed alpha
       is set to true by default. If set to false, all
       colors used on the canvas will be fully opaque
    */
    static get contextOptions() {
      return { alpha: true };
    }

    /*
        ctx is the 2D drawing context
        a subset of the HTML5 Canvas API.
    */
    paint(ctx) {
      ctx.fillStyle = "hsla(55, 90%, 60%, 1.0)";
      ctx.fillRect(0, 15, 200, 20); /* order: x, y, w, h */
    }
  }
);

registerPaint(
  "cssPaintFunctionName",
  class {
    static get inputProperties() {
      return ["PropertyName1", "--customPropertyName2"];
    }
    static get inputArguments() {
      return ["<color>"];
    }
    static get contextOptions() {
      return { alpha: true };
    }

    paint(drawingContext, elementSize, styleMap) {
      // Paint code goes here.
    }
  }
);
