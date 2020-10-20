import React from "react";
import { Services } from "./http-services";
import { CustomMap } from "./CustomMap";
import "./stylesheets/main.scss";

export class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCountries: [],
    };
    console.log(props.children);
  }

  render() {
    const Children = () => this.props.children;
    const CountriesList = () =>
      this.state.allCountries.map((countriy, index) => (
        <div key={index}>{countriy.name}</div>
      ));

    return <CustomMap allCountries={this.state.allCountries} />;
  }

  componentDidMount() {
    Services.getAllCountries().then((results) => {
      console.log(results.data);
      this.setState({
        allCountries: results.data,
      });
    });
  }
}
