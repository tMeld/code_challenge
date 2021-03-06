import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";
import Home from "./home/home.js";
import "./index.scss";

class App extends Component {
    render() {
        return (
        	<div>
        		<Header BrandName="Brocollo and Co."/>
        		<Home />
        		<Footer Copyrights = "@ 2016 Broccoli and Co. All rights reversed" />
        	</div>
        );
    }
}

ReactDOM.render(<App />,document.getElementById("main"));
