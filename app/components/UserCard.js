import React, { Component } from 'react';
import ISO from 'api/ISO';

export default class UserCard extends Component {

    onRemoveUser() {
      this.props.onRemoveUser(this.props.currentUser);
    }

    render() {
      const { photo, email, name, gender, region, age } = this.props.user;
      const flagClassName = `flag-icon flag-icon-${ISO(region)}`;
      const genderSign = gender == 'female' ? 'fa fa-venus' : 'fa fa-mars';
      const card =
        <div className="card text-center">
          <div className="card-block">
            <h4 className="card-title">{ name }  <i className = { genderSign }></i> </h4>
            <h4> <i className="fa fa-heart mr-1"></i> { age } </h4>
            <p>
              <a href={`mailto:${email}?Subject=Hello%20${name}`} target="_top">
                <i className = "fa fa-envelope"/> - { email }
              </a>
            </p>
            <p className="card-text"><small className="text-muted"> { region }  <span className = {flagClassName}> </span> </small> </p>
            <i className = 'removeIcon fa fa-remove fa-2x float-right hvr-grow' onClick = { ::this.onRemoveUser }> </i>
          </div>
        </div>;
      return card;
    }
}
