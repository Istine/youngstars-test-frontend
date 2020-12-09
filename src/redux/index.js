import { createStore, applyMiddleware } from "redux"
import Reducer from "../redux/reducers"
import create_saga_middleWare from "redux-saga"
import sagas from "./sagas"
import { combineReducers } from "redux"

const saga_middleware = create_saga_middleWare()
const middle_ware = [saga_middleware]

const allReducers = combineReducers({
  Reducer  
})

const store = createStore(allReducers, applyMiddleware(...middle_ware))

saga_middleware.run(sagas)

export default store