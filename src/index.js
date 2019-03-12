var React = require('react');
var ReactDOM = require('react-dom');

class CmAclgList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cm_aclgs: [],
    };

    this.loadAjax = this.loadAjax.bind(this);
  }

  loadAjax() {
    return fetch(this.props.url)
      .then((response) => response.json())
      .then((responseJson) =>
        this.setState({
          cm_aclgs: responseJson.cm_aclgs,
        })
      )
      .catch((error) => {
        console.error(error);
      });
  }

  componentWillMount() {
    this.loadAjax();
  }

  render() {
    const cm_aclg_list = this.state.cm_aclgs.map((e) => <li>{e.al_cdsqsk}</li>);
    return(
      <ul>
        {cm_aclg_list}
      </ul>
    );
  }
}

// ========================================

ReactDOM.render(
  <CmAclgList url="http://localhost:3000/_api/cm_aclgs/20925836" />,
  document.getElementById('root')
);