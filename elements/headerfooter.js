class DynHeader extends HTMLElement {
  async connectedCallback() {
    const response = await fetch("../elements/header.html");
    if (response.ok) {
      const headerContent = await response.text();
      this.innerHTML = headerContent;
      this.querySelectorAll("img").forEach((img) => {
        img.setAttribute("loading", "lazy");
      });
    } else {
      console.error("Failed to load header:", response.statusText);
    }
  }
}

class DynFooter extends HTMLElement {
  async connectedCallback() {
    const response = await fetch("../elements/footer.html");
    if (response.ok) {
      const footerContent = await response.text();
      this.innerHTML = footerContent;
      this.querySelectorAll("img").forEach((img) => {
        img.setAttribute("loading", "lazy");
      });
    } else {
      console.error("Failed to load footer:", response.statusText);
    }
  }
}

customElements.define("dyn-header", DynHeader);
customElements.define("dyn-footer", DynFooter);
