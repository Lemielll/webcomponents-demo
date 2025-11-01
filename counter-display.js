class CounterDisplay extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.title = this.getAttribute('title') || 'Lorem Ipsum Title';
    this.value = parseInt(this.getAttribute('value')) || 0;


    this.shadowRoot.innerHTML = `
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
      
        .display {
          background: linear-gradient(to right, #37353E 0%, #44444E 100%);
          padding: 12px;
          font-family: 'Inter', sans-serif;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);
          color: #D3DAD9;
          display: flex;
          flex-direction: column;
          font-size: 2vw;
          align-items: center;
        }
        .title {
          font-size: 1.5rem;
          margin-bottom: 4px;
          font-weight: 600;
        }
        hr {
          border: none;
          border-top: 2px solid #D3DAD9;
          width: 100%;
          margin: 6px 0;
        }
        .value {
          font-size: 2rem;
          font-weight: 600;
        }
        .number {
          font-weight: bold;
          font-style: italic;
        }
      </style>
      <div class="display">
        <div class="title">${this.title}</div>
        <hr>
        <div class="value">Value: <span class="number">${this.value}</span></div>
      </div>
    `;
  }


  set count(val) {
    this.value = val;
    this.shadowRoot.querySelector('.number').textContent = val;
  }


  get count() {
    return this.value;
  }
}


customElements.define('counter-display', CounterDisplay);
