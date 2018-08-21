class Stopwatch extends React.Component {
    constructor() {
        super();
        this.state = {
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0,
                running: false
            },
        };
    }

    reset() {
        this.setState({
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            }
        });
    }
 
    print() {
        this.setState({
         display: this.format(this.times)
        })
    }

    format(times) {
        return `${pad0(this.state.times.minutes)}:${pad0(this.state.times.seconds)}:${pad0(Math.floor(this.state.times.miliseconds))}`;
    }

    start() {
    if (!this.state.running) {
        this.setState({
            running: true
        })
        this.watch = setInterval(() => this.step(), 10);
    }}

    step() {
        if (!this.state.running) return
        this.calculate();
        this.print();
    }

    calculate() {
        this.state.times.miliseconds += 1;
        if (this.state.times.miliseconds >= 100) {
            this.state.times.seconds += 1;
            this.state.times.miliseconds = 0;
        }
        if (this.state.times.seconds >= 60) {
            this.state.times.minutes += 1;
            this.state.times.seconds = 0;
        }
    }

    stop() {
        this.setState({
            running: false
        })
        clearInterval(this.watch);
    }

    pad0(value) {
        let result = value.toString();
        if (result.length < 2) {
            result = '0' + result;
        }
        return result;
    }

    render() {
        return (
        <div className="container">
            <nav className="controls">
                <a href="#" onClick={event => this.start()} className="button">Start</a>
                <a href="#" onClick={event => this.stop()} className="button">Stop</a>
            </nav>
            <div className="stopwatch">
                {this.format(this.state.times)}
            </div>
        </div>);      
    }

};


class App extends React.Component {
    render() {
        return (
            <div>
                <Stopwach/>
            </div>)
        )
    }
};
    
const app = <App/>;
ReactDOM.render (app, document.getElementById('app'));




