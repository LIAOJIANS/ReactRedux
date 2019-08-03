import React, { Component } from 'react'

export default class App extends Component {
    state = {
        count: 0
    }
    add = () => {
        // 1、获取要操作的数据
        const number = this.select.value*1
        // 2、拿到数据进行增加
        const count = this.state.count + number
        // 3、更新数据
        this.setState({ count })
    }
    del = () => {
        // 1、获取要操作的数据
        const number = this.select.value*1
        // 2、拿到数据进行减
        const count = this.state.count - number
        // 3、更新数据
        this.setState({ count })
    }
    ou = () => {
        // 1、获取要操作的数据
        const number = this.select.value*1
        // 2、 判断是否是偶数
        if (number%2 === 0) {
            const count = this.state.count + number
            // 3、 更新数据
            this.setState({ count })
        }
    }
    acany = () => {
        // 1、获取要操作的数据
        const number = this.select.value*1
        // 2、判断是否是奇数
        if (number%2 !== 0) {
           const count = this.state.count - number
            // 3、 更新数据
            this.setState({ count })
        }
    }
   render() {
        const { count } = this.state
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

