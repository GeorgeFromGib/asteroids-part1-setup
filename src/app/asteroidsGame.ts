
import P5 from "p5";
import { sketch } from "./p5-sketch";

export class AsteroidsGame {
  _angle:number=0;

  constructor() {
    new P5((p) => sketch(p, this.setup, this.gameLoop));
  }

  public setup=(p5: P5)=> {
    // Creating and positioning the canvas
    const canvas = p5.createCanvas(p5.windowWidth*0.8, p5.windowHeight*0.8);
    canvas.parent("app");

    // Configuring the canvas
    p5.background("black");
  }

  public gameLoop=(p5: P5)=> {
    p5.background("black");
    
    //advance rotation angle
    this._angle+=p5.PI/90;
    
    //Draw the spaceship
    p5.noFill();
    p5.stroke('white');
    p5.translate(p5.width / 2, p5.height / 2);
    p5.rotate(this._angle)
    p5.scale(2);

    p5.beginShape();
    p5.vertex(0, -10);
    p5.vertex(8, 10);
    p5.vertex(4, 6);
    p5.vertex(-4, 6);
    p5.vertex(-8, 10);
    p5.endShape(p5.CLOSE);
  }
}

