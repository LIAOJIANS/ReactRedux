import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class Counter extends Component {

    propTypes = {
        count: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired
    }
    add = () => {
        // 1、获取要操作的数据
        const number = this.select.value*1
        // 2、更新redux上的值
        this.props.increment(number)
    }
    del = () => {
        // 1、获取要操作的数据
        const number = this.select.value*1
        // 2、更新redux上的值
        this.props.decrement(number)
    }
    ou = () => {
        // 1、获取要操作的数据
        const number = this.select.value*1
        // 2、 判断是否是偶数
        if (number%2 === 0) {
            this.props.increment(number)
        }
    }
    acany = () => {
        // 1、获取要操作的数据
        const number = this.select.value*1
        // 2、判断是否是奇数
        if (number%2 !== 0) {
            this.props.increment(number)
        }
    }
   render() {
        const { count } = this.props
       return (
           <div>
                <p>click { count } times</p>
               <select ref={ select => this.select = select }>
                   <option value="1">1</option>
                   <option value="2">2</option>
                   <option value="3">3</option>
                   <option value="4">4</option>
               </select>&nbsp;
               <button onClick={ this.add }>+</button>&nbsp;
               <button onClick={ this.del }>-</button>&nbsp;
               <button onClick={ this.ou }>ou</button>&nbsp;
               <button onClick={ this.acany } >acany</button>
           </div>
       )
   }
}

