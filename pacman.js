class Pacman {
    constructor(x,y,width , height , speed){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.direction = DIRECTION_RIGHT
    }
    moveProcess(){
        this.changeDirectionIfP()
        this.moveForwards()
        if (this.checkCollision){
            moveBackwards()
        }

    }
    eat(){

    }

    moveForwards(){
        switch(this.direction){
            case DIRECTION_RIGHT:
                this.x =+ this.speed
                break;
             case DIRECTION_LEFT:
                this.x =+ this.speed
                break;
             case DIRECTION_UP:
                this.y =+ this.speed
                break;
             case DIRECTION_DOWN:
                this.y =+ this.speed
                break;
        }

    }
    
    moveBackwards(){

    }
    checkCollision(){

    }
    checkGhostCollision(){

    }
    changeAnimation(){

    }

    changeDirectionIfP(){

    }
    drar(){

    }

    getMapX(){
        return parseInt(this.x/oneBlockSize);

    }
    getMapY(){
        return parseInt(this.y/oneBlockSize)

    }
}
