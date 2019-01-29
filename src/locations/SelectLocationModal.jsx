import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectLocationModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      location: this.props.location,
      show: this.props.show
    }
  }

  locationClicked(e){
    this.setState({location: e.currentTarget.dataset.value});
  }

  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }
    debugger
    return (
      <div>
        <div className="backdrop modal-backdrop">
        </div>
        <div className="modal fade in select-location-modal" id="myModal">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="myModalLabel">Please select the location</h4>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-4">
                    <div className={'location ' + (this.state.location == "Chennai" ? "selected" : "")} onClick={this.locationClicked.bind(this)} data-value="Chennai">
                      Chennai
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className={"location " + (this.state.location == "Trichy" ? "selected" : "")} onClick={this.locationClicked.bind(this)} data-value="Trichy">
                      Trichy
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className={"location " + (this.state.location == "Madurai" ? "selected" : "")} onClick={this.locationClicked.bind(this)} data-value="Madurai">
                      Madurai
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={() => this.props.locationSelected(this.state.location)}>Select</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SelectLocationModal.propTypes = {
  onClose: PropTypes.func,
  show: PropTypes.bool,
  children: PropTypes.node,
  location: PropTypes.string
};

export default SelectLocationModal;
