/**
 * Crane Worldwide — Mapbox theme (layers cannot use CSS variables).
 * Keep in sync with assets/crane-design-system.css :root brand tokens.
 */
(function (global) {
  var MAP_THEME = {
    cluster: {
      /** Translucent Crane blue — map shows through; keep ≥ ~0.65 for legibility */
      color: "rgba(0, 58, 143, 0.7)",
      /** Slightly soft green ring so it matches the glassy fill */
      stroke: "rgba(0, 166, 81, 0.92)",
      strokeWidth: 4
    },
    marker: {
      /** Unclustered pin / circle — Crane green */
      default: "#00A651",
      active: "#33C877",
      /** Pin edge in SVG; halos can use rgba from this family */
      pinStroke: "#006F3C"
    },
    /** For rgba() strings in glow/halos */
    blueRgb: "0, 58, 143"
  };

  global.MAP_THEME = MAP_THEME;
  global.CRANE_MAP_THEME = MAP_THEME;

  if (typeof module !== "undefined" && module.exports) {
    module.exports = { MAP_THEME: MAP_THEME, CRANE_MAP_THEME: MAP_THEME };
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : this);
