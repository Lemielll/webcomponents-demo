class ProfileCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.name = this.getAttribute('name') || 'Fulan';
        this.nim = this.getAttribute('nim') || 'xx/xxxxxx/xx/xxxxx';
        this.avatar = this.getAttribute('avatar') || 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png';
        this.github = this.getAttribute('github') || 'https://github.com/';
        this.linkedin = this.getAttribute('linkedin') || 'https://id.linkedin.com/';

        this.shadowRoot.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

            .container {
                background: linear-gradient(to right, #37353E 0%, #44444E 100%);
                padding: 12px;
                border-radius: 8px;
                box-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);
                color: #D3DAD9;
                font-family: 'Inter', sans-serif;
                display: flex;
                flex-direction: row;
                width: 600px;
                height: 200px;
                }
            .avatar {
                width: 200px;
                height: 200px;
                margin-right: 20px; 
            }
            .info {
                font-size: 1.2rem;
                width: 100%;
            }
            p {
                margin: 10px;
            }
            img {
                border-radius: 8px;
                /* image harus 1:1 */
                width: 200px;
                height: 200px;
            }
            a {
                color: inherit;
            }
        </style>
        <div class="container">
            <div class="avatar">
                <img src="${this.avatar}" alt="Avatar">
            </div>
            <div class="info">
                <div style="height: 75%;">
                    <p><span style="font-weight: bold;">Nama: </span>  ${this.name}</p>
                    <p><span style="font-weight: bold;">NIM: </span> ${this.nim}</p>
                </div>
                <hr>
                <div class="links" style ="font-weight: bold; float: right; font-size: 0.9rem;">
                    <a href="${this.github}" target="_blank">GitHub</a> | <a href="${this.linkedin}" target="_blank">LinkedIn</a>
                </div>  
            </div>

        </div>
        `;
    }
}

customElements.define('profile-card', ProfileCard);