import React from 'react';
import './ModalSearch.css';

const ModalSearch = (props) => {
    return (
        <div className="ModalSearch">
            <div className={"ModalSearchContainer " + (props.loading ? "" : "h-100")}>
                <div className={"ModalSearchContent " + (props.loading ? "" : "h-100")}>
                    <div style={{ "overflow-y": "auto", "height": "100%" }}>
                        {props.children}
                    </div>
                </div>
            </div>
            <div className="ModalSearchBackdrop" onClick={props.closeModal}></div>
        </div>
    );
}

export default ModalSearch;