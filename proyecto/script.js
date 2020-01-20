let canvas=document.querySelector("canvas")
let ctx=canvas.getContext("2d")
ctx.translate(300,300)
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
    }
    draw() {
        ctx.clearRect(-300,-300,600,600)
        //laberinto
        let rota=this.angulo+(Math.floor(Math.random()*4)*90)
        ctx.rotate(rota*Math.PI/180)
        ctx.fillStyle="#C8FEFE"
ctx.lineWidth="2px"
ctx.strokeStyle="#1EE7E7"
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
ctx.fillStyle="#1EE7E7"
ctx.moveTo(50,-175)
ctx.lineTo(-50,-175)
ctx .arc (0, -175, 50, 0, Math.PI, true)
ctx.fill()
ctx.stroke()
ctx.closePath()

//triangulo direccion
ctx.beginPath()
ctx.fillStyle="#C8FEFE"
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


