//function setcolor
let Ships = class {
    constructor(id, name,  size, skin){
        this.id = id;
        this.name = name;
        this.size = size;
        this.skin = skin;
        //this.color= setColor();
    }
    getColor() {if (this.name=='Cacca'){return  this.color='brown' } else {return this.color='yellow'}} 
}
module.exports = Ships;