import { Component, ReactNode } from "react";
import { ParticlesComponent } from "../components/particles";

export default class extends Component {
  public render(): ReactNode {
    return (
      <>
        <div className="container">
          <ParticlesComponent />
        </div>
      </>
    );
  }
}
