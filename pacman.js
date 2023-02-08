class Pacman {
    constructor(x,y,width , height , speed){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.direction = DIRECTION_RIGHT
        this.nextDirection = this.direction
        this.currentFrame = 1
        this.FrameCount = 7;
        setInterval(() => {
            this.changeAnimation();
        },100);
        
    }
    moveProcess()
    {
        this.changeDirectionIfP();
        this.moveForwards();
        if (this.checkCollision())
        {
            this.moveBackwards();
            return;
        }

    }
    eat(){

    }

    moveForwards(){
        switch(this.direction){
            case DIRECTION_RIGHT:
                this.x += this.speed
                break;
            case DIRECTION_LEFT:
                this.x -= this.speed
                break;
            case DIRECTION_UP:
                this.y -= this.speed
                break;
            case DIRECTION_DOWN:
                this.y += this.speed
                break;
        };

    }
    
    moveBackwards(){
        switch(this.direction){
            case DIRECTION_RIGHT:
                this.x -= this.speed
                break;
            case DIRECTION_LEFT:
                this.x += this.speed
                break;
            case DIRECTION_UP:
                this.y += this.speed
                break;
            case DIRECTION_DOWN:
                this.y -= this.speed
                break;
        }

    }
    
    checkCollision(){ 
        let isCollided = false;
        if(
            map[this.getMapY()][this.getMapX()] == 1 ||
            map[this.getMapYRSide()][this.getMapX()] == 1 ||
            map[this.getMapY()][this.getMapXRSide()] == 1 ||
            map[this.getMapYRSide()][this.getMapXRSide()] == 1 
        ){
            return true;
        }
        return false;

    }
    checkGhostCollision(){}


    changeAnimation(){
        this.currentFrame =
            this.currentFrame == this.FrameCount ? 1 : this.currentFrame +1;
    }

    changeDirectionIfP(){
        if (this.direction == this.nextDirection) return;
        let tempDirection = this.direction;

        this.direction = this.nextDirection;
        this.moveForwards();
        if (this.checkCollision()) {
            this.moveBackwards();
            this.direction = tempDirection;
        } 
        else 
        {
            this.moveBackwards();
        }
        

    };
    draw()
    {
        canvasContext.save();
        canvasContext.translate(
            this.x + oneBlockSize/2,
            this.y + oneBlockSize/2
            );
        canvasContext.rotate((this.nextDirection * 90 * Math.PI) / 180);

        canvasContext.translate(
            -this.x - oneBlockSize/2,
            -this.y - oneBlockSize/2
            );

        canvasContext.drawImage(
            pacmanFrames,
            (this.currentFrame-1) * oneBlockSize,
            0,
            oneBlockSize,
            oneBlockSize,
            this.x,
            this.y,
            this.width,
            this.height

        );
        canvasContext.restore();

    };

    getMapX(){
        return parseInt(this.x/oneBlockSize);

    }
    getMapY(){
        return parseInt(this.y/oneBlockSize);

    }
    getMapXRSide(){
        return parseInt((this.x + 0.99999 * oneBlockSize)/ oneBlockSize);

    }
    getMapYRSide(){
        return parseInt((this.y + 0.99999 * oneBlockSize)/ oneBlockSize);

    }
}
