import { combineReducers } from 'redux';
import counter from '../modules/counter';
import todos from '../modules/todos';
//리듀서를 합치는 작업은 리덕스에 내장되어있는 combineReducers라는 함수를 사용
const rootReducer = combineReducers({
    counter,
    todos
});

export default rootReducer;