import React, {Component} from 'react';
import {connect} from 'react-redux';
import SupportActions from '../Redux/SupportRedux'
import Colors from '../Themes/Colors';
import {withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {title: ""};
  }

  componentDidMount() {
    let wait = new Promise((resolve) => setTimeout(resolve, 1000));
    wait.then(() => {
      this.props.getSupport();
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.support && nextProps.support.payload) {
      this.setState({title: nextProps.support.payload.title});
    }
  }

  render() {
    return (
      <div style={{color: Colors.blue.shade_600}}>{this.state.title}
        <button onClick={() => {
          this.props.history.push('/about');
        }}>Go About
        </button>
        <Link to={"/about"}>Go About Second</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    support: state.support,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSupport: () => dispatch(SupportActions.supportRequest())
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));