class opott extends HTMLElement {
  async connectedCallback() {
    const response = await fetch("/elements/authors/opott.html");
    if (response.ok) {
      const headerContent = await response.text();
      this.innerHTML = headerContent;
      this.querySelectorAll("img").forEach((img) => {
        img.setAttribute("loading", "lazy");
      });
    } else {
      console.error("Failed to load", response.statusText);
    }
  }
}

customElements.define("author-opott", opott);