import React, { useReducer } from "react";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import reducer, { initialState } from "./reducers";
import {
  addOne,
  applyNumber,
  reset,
  memoryPlus,
  memoryReset,
  memorySave,
  changeOperation,
} from "./actions";

function App() {
  const [state, dispatchState] = useReducer(reducer, initialState);

  const addOneHandler = () => {
    dispatchState(addOne());
  };

  const applyNumberHandler = (e) => {
    dispatchState(applyNumber(Number(e.target.value)));
  };

  const operationHandler = (e) => {
    dispatchState(changeOperation(e.target.value));
  };
  const resetHandler = () => {
    dispatchState(reset());
  };
  const memoryResetHandler = () => {
    dispatchState(memoryReset());
  };
  const memoryRecallHandler = () => {
    dispatchState(memorySave());
  };
  const memorySaveHandeler = () => {
    dispatchState(memoryPlus());
  };
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton onClick={memorySaveHandeler} value={"M+"} />
              <CalcButton onClick={memoryRecallHandler} value={"MR"} />
              <CalcButton onClick={memoryResetHandler} value={"MC"} />
            </div>

            <div className="row">
              <CalcButton onClick={applyNumberHandler} value={1} />
              <CalcButton onClick={applyNumberHandler} value={2} />
              <CalcButton onClick={applyNumberHandler} value={3} />
            </div>

            <div className="row">
              <CalcButton onClick={applyNumberHandler} value={4} />
              <CalcButton onClick={applyNumberHandler} value={5} />
              <CalcButton onClick={applyNumberHandler} value={6} />
            </div>

            <div className="row">
              <CalcButton onClick={applyNumberHandler} value={7} />
              <CalcButton onClick={applyNumberHandler} value={8} />
              <CalcButton onClick={applyNumberHandler} value={9} />
            </div>

            <div className="row">
              <CalcButton onClick={operationHandler} value={"+"} />
              <CalcButton onClick={operationHandler} value={"*"} />
              <CalcButton onClick={operationHandler} value={"-"} />
            </div>

            <div className="row ce_button">
              <CalcButton onClick={resetHandler} value={"CE"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
