import React from "react";
import "./App.css";
import BusinessList from "./Components/BusinessList";
import SearchBar from "./Components/SearchBar";
import Yelp from "./util/yelp";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            businesses: [],
        };

        this.searchYelp = this.searchYelp.bind(this);
    }

    //runs ascyn request 'search' from Yelp.js then updates business state
    searchYelp = (term, location, sortBy) => {
        Yelp.search(term, location, sortBy).then((businesses) => {
            this.setState({ businesses: businesses });
        });
    };

    render() {
        return (
            <div className="App">
                <h1>hungry</h1>
                <SearchBar searchYelp={this.searchYelp} />
                <BusinessList businesses={this.state.businesses} />
            </div>
        );
    }
}

export default App;
