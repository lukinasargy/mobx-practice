import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { action, makeObservable, observable } from 'mobx';
// @observer
export const CounterClass = observer(class extends Component {
    // @observable
    count = 5;
    constructor(props) {
        super(props);
        makeObservable(this, { 
            count: observable,
            dec: action,
            inc:action.bound
        });
        this.count = props.initialCount ?? 0;
    }

    render() {
        return (
            <div>
                <button onClick={this.dec}>-</button>
                <span>{this.count}</span>
                <button onClick={this.inc}>+</button>
            </div>
        )
    }
    // @action /*context is not lost */
    dec = () => this.count--
    // @action.bound /*context lost */
    inc() {
        this.count++
    }
})
// import React, { Component } from 'react';
// export class CounterClass extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: props.initialCount ?? 0
//         }
//         this.inc = this.inc.bind(this)
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={this.dec}>-</button>
//                 <span>{this.state.count}</span>
//                 <button onClick={this.inc}>+</button>
//             </div>
//         )
//     }
//     dec = () => this.setState(prevState => ({
//         count: prevState.count - 1
//     })
//     )
//     inc() {
//         this.setState(prevState => ({
//             count: prevState.count + 1
//         }))
//     }
// }