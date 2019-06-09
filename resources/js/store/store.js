import React from "react";
import useGlobalHook from "use-global-hook";

import * as actions from "globalHook";

const initialState = {
    homes: null,
    isReady: false,
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
