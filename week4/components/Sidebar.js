import Component from './Component.js';

class Sidebar extends Component {

  constructor (props) {
    super(props);
  }

  render () {
   
    let responseHTML = '';

    this.props.menu.forEach( (item) => {
      // TODO: Add (concatenate) the value of each item to the variable responseHTML. Each should be wrapped in <li></li>

      // Sets each item in between "<li>"
      responseHTML += '<li>' + item + "<li>";
    });

    // Sets the entire string between "<ul>"
    responseHTML = "<ul>" + responseHTML + "<ul>";

    return responseHTML;
  }
}

export default Sidebar;
