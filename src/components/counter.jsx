
import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.value
    };

    handle_increment = product => {
        console.log(product);
        this.setState({ value: this.state.value + 1 })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h4>{this.props.id}</h4>
                <span className={this.get_badge_classes()}>{this.formatCount()}</span>
                <button
                    onClick={() => this.handle_increment()}
                    className='btn btn-secondary btn-'>Increment
                </button>
            </div>
        );
    }

    get_badge_classes() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const { value: count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter; 