import React, { Component } from 'react';

class UserControl extends Component {
  render() {
    return (
      <div className="row bg-faded p-4 my-4">
        <div className="box">
          <div className="col-lg-12">
            <hr />
            <h2 className="intro-text text-center">Login <strong>form</strong>
            </h2>
            <hr />
            <form role="form">
              <div className="row">
                <div className="form-group col-lg-10">
                  <label>UserName</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group col-lg-10">
                  <label>Password</label>
                  <input type="password" className="form-control" />
                </div>
                <div className="clearfix" />
                <div className="form-group col-lg-12">
                    <input type="hidden" name="save" defaultValue="contact" />
                    <button type="submit" className="btn btn-default">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UserControl;