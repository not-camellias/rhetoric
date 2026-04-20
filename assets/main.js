
function wrapWordsPreservingFormatting(element) {
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);

  let node;
  const textNodes = [];

  // Collect all text nodes
  while ((node = walker.nextNode())) {
    textNodes.push(node);
  }

  textNodes.forEach(textNode => {
    const parts = textNode.textContent.split(/(\s+)/); // keep spaces

    const fragment = document.createDocumentFragment();

    parts.forEach(part => {
      if (part.trim() === "") {
        // whitespace — keep exactly as-is
        fragment.appendChild(document.createTextNode(part));
      } else {
        // wrap actual words only
        const span = document.createElement("span");
        span.className = "fade-word";
        span.textContent = part;
        fragment.appendChild(span);
      }
    });

    textNode.parentNode.replaceChild(fragment, textNode);
  });
}

const essay = document.querySelector(".essay");
wrapWordsPreservingFormatting(essay);

const spans = essay.querySelectorAll(".fade-word");

// independent fading loops
spans.forEach(span => {
  const startDelay = Math.random() * 2000;
  const cycle = 1500 + Math.random() * 2000;

  setTimeout(() => {
    setInterval(() => {
      span.classList.toggle("visible");
    }, cycle);
  }, startDelay);
});

//shoutout copilot