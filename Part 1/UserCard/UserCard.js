const currentDocument = document.currentScript.ownerDocument;

class UserCard extends HTMLElement {
  constructor() {
    // If you define a constructor, always call super() first as it is required by the CE spec.
    super();

    // Setup a click listener on <user-card>
    this.addEventListener('click', e => {
      this.toggleCard();
    });
  }

  // Called when element is inserted in DOM
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });

    // Select the template and clone it. Finally attach the cloned node to the shadowDOM's root.
    // Current document needs to be defined to get DOM access to imported HTML
    const template = currentDocument.querySelector('#user-card-template');
    const instance = template.content.cloneNode(true);
    shadowRoot.appendChild(instance);

    // Extract the attribute user-id from our element.
    // Note that we are going to specify our cards like:
    // <user-card user-id="1"></user-card>
    const userId = this.getAttribute('user-id');

    // Fetch the data for that user Id from the API and call the render method with this data
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.text())
      .then((responseText) => {
        this.render(JSON.parse(responseText));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render(userData) {
    // Fill the respective areas of the card using DOM manipulation APIs
    // All of our components elements reside under shadow dom. So we created a this.shadowRoot property
    // We use this property to call selectors so that the DOM is searched only under this subtree
    this.shadowRoot.querySelector('.card__full-name').innerHTML = userData.name;
    this.shadowRoot.querySelector('.card__user-name').innerHTML = userData.username;
    this.shadowRoot.querySelector('.card__website').innerHTML = userData.website;
    this.shadowRoot.querySelector('.card__address').innerHTML = `<h4>Address</h4>
      ${userData.address.suite}, <br />
      ${userData.address.street},<br />
      ${userData.address.city},<br />
      Zipcode: ${userData.address.zipcode}`
  }

  toggleCard() {
    let elem = this.shadowRoot.querySelector('.card__hidden-content');
    let btn = this.shadowRoot.querySelector('.card__details-btn');

    // if elem has "card __block-content" class, remove class, otherwise add it.
    elem.classList.toggle('card__block-content');
    // if elem has "card __block-content" class, the text of button will be "Less Details",
    // otherwise will be "More Details"
    btn.innerHTML = elem.classList.contains('card__block-content') ? 'Less Details' : 'More Details';
  }
}

customElements.define('user-card', UserCard);
