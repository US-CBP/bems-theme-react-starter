import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TomisTextField from 'TomisApp/TomisTextField';
import TomisAutocomplete from 'TomisApp/TomisAutocomplete';
import TomisHeading from 'TomisApp/TomisHeading';
import CowAndActionableIntelligenceSection from 'common/CowAndActionableIntelligenceSection';
import CaseInfoGrid from 'common/grids/CaseInfoGrid';

class PlanningDataSectionRender extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { yesNoValue, handleChangeYesNo, isCloneable } = this.props;
        return (
            <div>
                <div className="flex-row">
                    <div className="flex-1">
                        <TomisAutocomplete floatingLabelText="Named Operation" hintText="Type Named Operation" isCloneable={isCloneable} />
                    </div>
                    <div className="flex-1">
                        <TomisAutocomplete floatingLabelText="Category*" isCloneable={isCloneable} disabledClone={true} />
                    </div>
                    <div className="flex-1">
                        <TomisAutocomplete floatingLabelText="Type*" isCloneable={isCloneable} disabledClone={true} />
                    </div>
                </div>
                <div className="flex-row">
                    <div className="flex-1">
                        <TomisAutocomplete floatingLabelText="Sub type*" isCloneable={isCloneable} disabledClone={true} />
                    </div>
                    <div className="flex-1" />
                    <div className="flex-1" />
                </div>
                <br />
                <CowAndActionableIntelligenceSection {...this.props} />
                <br />
                <br />
                <CaseInfoGrid />
                <br />
            </div>
        );
    }
}

export default PlanningDataSectionRender;
