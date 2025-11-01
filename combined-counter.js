class CombinedCounter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const title = this.getAttribute('title') || 'Lorem Ipsum Title';
    const value = parseInt(this.getAttribute('value')) || 0;


    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');      

        .wrapper {
          padding: 1px;
          font-family: 'Inter', sans-serif;
        }
        counter-display {
          display: block;
        }
      </style>
      <div class="wrapper">
        <counter-display id="display" title="${title}" value="${value}"></counter-display>
        <br>
        <counter-controls id="controls"></counter-controls>
      </div>
    `;
  }


  connectedCallback() {
    const display = this.shadowRoot.getElementById('display');
    const controls = this.shadowRoot.getElementById('controls');

    

    controls.addEventListener('count-change', e => {
      display.count += e.detail.delta;
    });
  }
}


customElements.define('combined-counter', CombinedCounter);
