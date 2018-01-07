import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom';

//import SupportActions from '../Redux/SupportRedux'

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let wait = new Promise((resolve) => setTimeout(resolve, 100));
    wait.then(() => {
      //this.props.getSupport();
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.support) {
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => {
          this.props.history.push('/');
        }}>Go Home
        </button>
        <Link to={"/"}>Go To Home</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //support: state.support,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    //getSupport: () => dispatch(SupportActions.supportRequest())
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(About));