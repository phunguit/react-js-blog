import React, { Component } from 'react';
import { connect } from 'react-redux';

import { AcToLogin } from '../actions/index';

class UserControl extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }
  }  

  handleChange = (e) => {
    var { name, value } = e.target;
    
    this.setState({
      [name]: value
    });    
  }

  handleSubmit = (e) => {
    e.preventDefault();

    var { username, password } = this.state;
    this.props.handleLogin(username, password);
  }

  render() {

    return (
      <div className="row bg-faded p-4 my-4">
        <div className="box">
          <div className="col-lg-12">
            { this.getFormLogin() }
          </div>
        </div>
      </div>
    );
  }

  getFormLogin = () => {
    var { username, password } = this.state;
    var { user } = this.props;

    var xhtml = <h2>You are logged!</h2>;
    if(!user.isLogin) {
      xhtml = <div>
                <hr />
                <h2 className="intro-text text-center">Login <strong>form</strong></h2>
                <hr />
                <form role="form" onSubmit={ this.handleSubmit }>
                  <div className="row">
                    <div className="form-group col-lg-10">
                      <label>UserName</label>
                      <input name='username' type="text" className="form-control" value={ username } onChange={ this.handleChange } />
                    </div>
                    <div className="form-group col-lg-10">
                      <label>Password</label>
                      <input name='password' type="password" className="form-control" value={ password } onChange={ this.handleChange } />
                    </div>
                    <div className="clearfix" />
                    <div className="form-group col-lg-12">
                        <input type="hidden" name="save" defaultValue="contact" />
                        <button type="submit" className="btn btn-default">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
    }
    return xhtml;
  }
}
var mapStateToProps = (state) => {
  var { user } = state;
  return {
      user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin: (username, password) => {
      dispatch(AcToLogin(username, password));
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserControl);