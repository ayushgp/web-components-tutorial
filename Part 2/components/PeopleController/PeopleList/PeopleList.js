(function () {
  const currentDocument = document.currentScript.ownerDocument;

  function _createPersonListElement(self, person) {
    let li = currentDocument.createElement('LI');
    li.innerHTML = person.name;
    li.className = 'people-list__name'
    li.onclick = () => {
      let event = new CustomEvent("PersonClicked", {
        detail: {
          personId: person.id
        },
        bubbles: true
      });
      self.dispatchEvent(event);
    }
    return li;
  }

  class PeopleList extends HTMLElement {
    constructor() {
      // If you define a constructor, always call super() first as it is required by the CE spec.
      super();

      // A private property that we'll use to keep track of list
      let _list = [];

      // Use defineProperty to define a prop on this object, ie, the component.
      // Whenever list is set, call render. This way when the parent component sets some data 
      // on the child object, we can automatically update the child.
      Object.defineProperty(this, 'list', {
        get: () => _list,
        set: (list) => {
          _list = list;
          this.render();
        }
      });
    }

    connectedCallback() {
      // Create a Shadow DOM using our template
      const shadowRoot = this.attachShadow({ mode: 'open' });
      const template = currentDocument.querySelector('#people-list-template');
      const instance = template.content.cloneNode(true);
      shadowRoot.appendChild(instance);
    }

    render() {
      let ulElement = this.shadowRoot.querySelector('.people-list__list');
      ulElement.innerHTML = '';

      this.list.forEach(person => {
        let li = _createPersonListElement(this, person);
        ulElement.appendChild(li);
      });
    }
  }

  customElements.define('people-list', PeopleList);
})();