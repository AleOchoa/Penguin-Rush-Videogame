let canvas=document.querySelector("canvas")
let ctx=canvas.getContext("2d")
ctx.translate(300,300)
let movimientos=[[],["r"],["u"],["l"],["d"],["l","r"],["u","d"],["r","d"],["l","u"],["l","d"],["l","r","u"],["l","u","d"],["r","u","d"],["l","r","d"]]
class Laberinto{
    constructor(){
        this.premio={
            x:1,
            y:5
        }
        this.inicio={
            x:6,
            y:6
        }
        this.angulo=0
        this.tablero=[[7,8,7,2,7,13,8],[5,10,9,7,9,3,3],[14,6,8,10,8,1,1],[3,7,11,7,9,10,11],[7,9,10,9,7,6,11],[11,8,7,8,5,1,5],[3,10,9,10,12,9,3]]
    }
    draw() {
        ctx.clearRect(-300,-300,600,600)
        //laberinto
        let rota=this.angulo+(Math.floor(Math.random()*4)*90)
        ctx.rotate(rota*Math.PI/180)
        ctx.fillStyle="#9CEAEF"
ctx.lineWidth="5px"
ctx.strokeStyle="#07BEB8"
ctx.fillRect(-175,-175,350,350)
ctx.strokeRect(-175,-175,350,350)
ctx.beginPath()
ctx.moveTo(-175,-75)
ctx.lineTo(-125,-75)
ctx.moveTo(-175,25)
ctx.lineTo(-125,25)
ctx.lineTo(-125,-25)
ctx.lineTo(25,-25)
ctx.moveTo(-25,-25)
ctx.lineTo(-25,25)
ctx.moveTo(-125,-125)
ctx.lineTo(-75,-125)
ctx.lineTo(-75,-25)
ctx.moveTo(-25,-75)
ctx.lineTo(-25,-125)
ctx.lineTo(25,-125)
ctx.lineTo(25,-175)
ctx.moveTo(175,-125)
ctx.lineTo(125,-125)
ctx.moveTo(175,-25)
ctx.lineTo(125,-25)
ctx.moveTo(175,125)
ctx.lineTo(75,125)
ctx.lineTo(75,75)
ctx.lineTo(125,75)
ctx.moveTo(125,25)
ctx.lineTo(25,25)
ctx.lineTo(25,125)
ctx.moveTo(25,75)
ctx.lineTo(-125,75)
ctx.moveTo(-75,25)
ctx.lineTo(-75,175)
ctx.moveTo(-125,125)
ctx.lineTo(-25,125)
ctx.moveTo(75,25)
ctx.lineTo(75,-125)
ctx.moveTo(125,-75)
ctx.lineTo(25,-75)
ctx.stroke()
ctx.closePath()

//medio circulo superior
ctx.beginPath()
ctx.fillStyle="#07BEB8"
ctx.moveTo(50,-175)
ctx.lineTo(-50,-175)
ctx .arc (0, -175, 50, 0, Math.PI, true)
ctx.fill()
ctx.stroke()
ctx.closePath()

//triangulo direccion
ctx.beginPath()
ctx.fillStyle="#9CEAEF"
ctx.moveTo(-20,-190)
ctx.lineTo(20,-190)
ctx.lineTo(0,-210)
ctx.lineTo(-20,-190)
ctx.fill()
ctx.stroke()
ctx.closePath()
    }
}

let lab=new Laberinto()
lab.draw()

class Player{
    constructor(x0,y0,tipo){
        this.x=x0,
        this.y=y0,
        this.img=new Image()
        this.img.src="./Imagenes/4PINGUINOS.png"
        this.img.onload=()=>{
            this.draw()
        }
        this.tipo=tipo

    }
    draw(){
        ctx.drawImage(this.img,(150*this.tipo)+100,0,50,50,this.x,this.y,40,40)
    }
    moveDown(){
        this.y+=50
        ctx.drawImage(this.img,(150*this.tipo)+100,0,50,50,this.x,this.y,40,40)
    }
    moveUp(){
        this.y-=50
        ctx.drawImage(this.img,(150*this.tipo)+100,150,50,50,this.x,this.y,40,40)
    }
    moveLeft(){
        this.x-=50
        ctx.drawImage(this.img,(150*this.tipo)+100,50,50,50,this.x,this.y,40,40)
    }
    moveRight(){
        this.x+=50
        ctx.drawImage(this.img,(150*this.tipo)+100,100,50,50,this.x,this.y,40,40)
    }
}

let p1=new Player(-175+(lab.inicio.x*50),-175+(lab.inicio.y*50),0)
p1.draw()
let p2=new Player(125,125,1)
p2.draw()

