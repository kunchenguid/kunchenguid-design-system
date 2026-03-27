(function () {
  "use strict";

  /**
   * Bracket Annotation Processor
   *
   * Finds [bracketed text] in elements with the `data-annotate` attribute
   * and wraps them in <span class="annotation">[text]</span>.
   */
  function processAnnotations() {
    var elements = document.querySelectorAll("[data-annotate]");
    elements.forEach(function (el) {
      if (el.querySelector(".annotation")) return; // already processed
      el.innerHTML = el.innerHTML.replace(
        /\[([^\]]+)\]/g,
        '<span class="annotation">[$1]</span>',
      );
    });
  }

  document.addEventListener("DOMContentLoaded", processAnnotations);

  // Expose for external use
  if (typeof window !== "undefined") {
    window.DesignSystem = { processAnnotations: processAnnotations };
  }
})();
