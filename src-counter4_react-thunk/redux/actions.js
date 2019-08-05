import { INCREMENT,DECREMENT } from '../redux/action-type'


export const increment = (number) => ({ type:INCREMENT, data: number })

export const decrement = (number) => ({ type:DECREMENT, data: number })


// 异步redux
export const incrementAsync = (number) => {
    return dispatch => {
         setTimeout(() => {
            dispatch(increment(number))
        }, 1000)
    }
}
