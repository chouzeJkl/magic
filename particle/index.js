import React from 'react';
import Particle from './particle';

export default class ParticleCanvas extends React.Component {
  componentDidMount() {
    const particle = new Particle(this.canvas);
    // 初始化的圆数量
    particle.init(36);
  }
  render() {
    return (
      <div>
        <canvas ref={(canvas) => { this.canvas = canvas; }} />
      </div>
    );
  }
}