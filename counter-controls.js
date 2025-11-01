class CounterControls extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });


    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');      

        .controls {
          display: flex;
          border-radius: 8px;
          gap: 10%;
          font-family: 'Inter', sans-serif;
          justify-content: center;
        }
        button {
          color: #37353E;
          border: none;
          font-size: 1.3rem;
          font-weight: bold;
          cursor: pointer;
          height: 30px;
          width: 30%;
          border: 1.5px solid #37353E;
          border-radius: 8px;
        }
        button:not(:last-child) {
          border-right: 1px solid #000;
        }
        button:hover {
          background-color: #D3DAD9;
        }
      </style>
      <div class="controls">
        <button id="minus">-</button>
        <button id="plus">+</button>
      </div>
    `;
  }


  connectedCallback() {
    this.shadowRoot.getElementById('plus')
      .addEventListener('click', () => this.emitChange(1));
    this.shadowRoot.getElementById('minus')
      .addEventListener('click', () => this.emitChange(-1));
  }


  emitChange(delta) {
    this.dispatchEvent(new CustomEvent('count-change', {
      detail: { delta },
      bubbles: true,
      composed: true
    }));
  }
}


customElements.define('counter-controls', CounterControls);
