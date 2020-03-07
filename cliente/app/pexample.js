
origenX = 0
origenY = 0
let initialCircle;
let radio = 50;
i = 1;
function setup() {
    createCanvas(800, 800)
    origenX = this.width / 2
    origenY = this.width / 2
    //origenX = 2;
    //origenY = 2;
    initialCircle = new Circle(origenX, origenY, radio)
    

}

function draw() {
   
    if(i === 1) {

        console.log(cos(20));
        console.log(Math.cos(20))

        cicle = new Circle(origenX,origenY,radio  );
        cicle.draw();
        circlew = new Circle(origenX + radio,origenY, radio);
        circlew.draw();

        let res = cicle.calcularInterseccion1(circlew.x, circlew.y, circlew.radio);

        console.log(res);
        console.log(res[0]);

        console.log(res[1]);

        circlenuevo = new Circle(res[0] + origenX, res[1] + origenY, circlew.radio)
        circlenuevo.draw();

        let res2 = cicle.calcularInterseccion2(circlew.x, circlew.y, circlew.radio);

        console.log(res2);
        console.log(res2[0]);

        console.log(res2[1]);

        circlenuevo2 = new Circle(res2[0] + origenX, res2[1] + origenY, circlew.radio)
        circlenuevo2.draw();

        i++;
    }

}


class Circle {
    constructor(a, b, radio) {
        this.x = a;
        this.y = b;
        this.radio = radio;
    }

    draw() {
        noFill();
        ellipse(this.x, this.y, this.radio * 2, this.radio * 2);
    }

    calcularInterseccion1(x2, y2, R2) {
        console.log("X1: " + this.x );
        console.log("Y1: " + this.y );
        console.log("X2: " +  x2 );
        console.log("Y2: " + y2 );

        let d = this.calcularDistanciaEntreCentros(x2, y2);
        console.log("Disntacia entre centros: " + d);

        let Xt = (x2 - this.x);
        console.log("Xt: " + Xt);
        
        let alfa = Math.acos((Math.pow(this.radio, 2) + Math.pow(d, 2) - Math.pow(R2, 2) )/ (2 * this.radio * d));
        console.log("Alfa: ", alfa);

        let tetha = Math.acos(Xt/d);
        console.log("Tetha: ", tetha);


        let yy = this.radio * Math.sin(alfa);
        let xx = this.radio * Math.cos(alfa);


        console.log("YY" + yy);
        console.log("XX" + xx);

        
        let yi = (xx * Math.sin(tetha)) + (yy * Math.cos(tetha));
        let xi = (xx * Math.cos(tetha)) - (yy * Math.sin(tetha));
        
        console.log("intersección en X: " + xi);
        console.log("intersección en Y: " + yi);
        

        return [xi, yi]

        
    }

    calcularInterseccion2(x2, y2, R2) {
        console.log("X1: " + this.x );
        console.log("Y1: " + this.y );
        console.log("X2: " +  x2 );
        console.log("Y2: " + y2 );

        let d = this.calcularDistanciaEntreCentros(x2, y2);
        console.log("Disntacia entre centros: " + d);

        let Xt = (x2 - this.x);
        console.log("Xt: " + Xt);
        
        let alfa = Math.acos((Math.pow(this.radio, 2) + Math.pow(d, 2) - Math.pow(R2, 2) )/ (2 * this.radio * d));
        console.log("Alfa: ", alfa);

        let tetha = Math.acos(Xt/d);
        console.log("Tetha: ", tetha);


        let yy = this.radio * Math.sin(alfa);
        let xx = this.radio * Math.cos(alfa);
        console.log("YY" + yy);
        console.log("XX" + xx);

        
        let yi = (xx * Math.sin(tetha)) - (yy * Math.cos(tetha));
        let xi = (xx * Math.cos(tetha)) + (yy * Math.sin(tetha));
        
        console.log("intersección en X: " + xi);
        console.log("intersección en Y: " + yi);
        

        return [xi, yi]

        
    }

    calcularDistanciaEntreCentros(x2, y2) {
        console.log("X1: " + this.x );
        console.log("Y1: " + this.y );
        console.log("X2: " +  x2 );
        console.log("Y2: " + y2 );
        return Math.sqrt(Math.pow((this.x - x2), 2) + Math.pow((this.y - y2), 2));
    }

}