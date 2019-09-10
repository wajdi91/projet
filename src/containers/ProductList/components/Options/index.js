// Dependencies
import React from "react";
import PropTypes from "prop-types";

const Options = ({ toggleFilter, options }) => {
  const {
    showIptv,
    showPinacle,
    showStarsat,
    showSamsat,
    showRecepteur
  } = options;

  return (
    <div className="options">
      <div className="col s8 offset-s2 m4 offset-m4 center category-picker">
        <p>Pick one category</p>
        <input
          checked={showIptv}
          id="iptv-checkbox"
          onChange={() => toggleFilter("showIptv")}
          type="checkbox"
        />
        <label htmlFor="iptv-checkbox">Iptv</label>

        <input
          checked={showRecepteur}
          id="recepteur-checkbox"
          onChange={() => toggleFilter("showRecepteur")}
          type="checkbox"
        />
        <label htmlFor="recepteur-checkbox">Recepteur</label>
      </div>
      <div className="col s8 offset-s2 m4 offset-m4 center size-picker">
        <p>Pick one model</p>
        <input
          checked={showSamsat}
          id="samsat-checkbox"
          onChange={() => toggleFilter("showSamsat")}
          type="checkbox"
        />
        <label htmlFor="samsat-checkbox">Samsat</label>

        <input
          checked={showStarsat}
          id="starsat-checkbox"
          onChange={() => toggleFilter("showStarsat")}
          type="checkbox"
        />
        <label htmlFor="starsat-checkbox">starsat</label>

        <input
          checked={showPinacle}
          id="pinacle-checkbox"
          onChange={() => toggleFilter("showPinacle")}
          type="checkbox"
        />
        <label htmlFor="pinacle-checkbox">pinacle</label>
      </div>
    </div>
  );
};

Options.propTypes = {
  toggleFilter: PropTypes.func.isRequired,
  options: PropTypes.shape({
    showIptv: PropTypes.bool.isRequired,
    showRecepteur: PropTypes.bool.isRequired,
    showPinacle: PropTypes.bool.isRequired,
    showStarsat: PropTypes.bool.isRequired,
    showSamsat: PropTypes.bool.isRequired
  }).isRequired
};

export default Options;
