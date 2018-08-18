class Stopwatch extends React.Component {
    constructor() {
        super();
        this.running = false;
        this.state = {
            display: '',
            results: []
        };
        this.reset = this.reset.bind(this)
    }

    reset() {
        this.times = {
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        };
    }
 
    print() {
        this.setState({
         display: this.format(this.times)
        })
    }

    format(times) {
        return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
    }

    start() {
    if (!this.running) {
        this.running = true;
        this.watch = setInterval(() => this.step(), 10);
    }}

    step() {
        if (!this.running) return
        this.calculate();
        this.print();
    }

    calculate() {
        this.times.miliseconds += 1;
        if (this.times.miliseconds >= 100) {
            this.times.seconds += 1;
            this.times.miliseconds = 0;
        }
        if (this.times.seconds >= 60) {
            this.times.minutes += 1;
            this.times.seconds = 0;
        }
    }

    stop() {
        this.running = false;
        clearInterval(this.watch);
    }

    render() {
        return (
        <div className="container">
            <nav className="controls">
                <a href="#" onClick={this.start} className="button">Start</a>
                <a href="#" onClick={this.stop} className="button">Stop</a>
            </nav>
            <div className="stopwatch">
                {this.state.display}
            </div>
            <ul className="results">
                
            </ul>
        </div>);      
    }

};

function pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Stopwach />
            </div>)
        )
    }
};
    
const app = <App/>;
ReactDOM.render (app, document.getElementById('app'));




