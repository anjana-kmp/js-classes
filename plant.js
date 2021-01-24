class Plant{
    age = 0;
    name = '';
    growthFactor = 0;
    image='';
    rect={
      x:0,y:0,
      w:0,h:0
    };
    constructor(name,age,growthFactor,imgPath,rect){
      this.rect.x=rect[0]
      this.rect.y=rect[1]
      this.rect.w=rect[2]
      this.rect.h=rect[3]

      this.name=name
      this.age=age
      this.growthFactor=growthFactor

      this.image=new Image();
      this.image.src=imgPath;
      this.image.onload=()=>{
        let canvas = document.querySelector('#plant-canvas');
        let ctx = canvas.getContext('2d');
        ctx.drawImage(this.image,this.rect.x,this.rect.y,this.rect.w,this.rect.h*this.age);
       
      }

    }
     grow(){
       this.age+=this.growthFactor 
       let canvas = document.querySelector('#plant-canvas');
       let ctx = canvas.getContext('2d');
      ctx.clearRect(this.rect.x,this.rect.y,this.rect.w,this.rect.h*this.age);
      ctx.drawImage(this.image,this.rect.x,this.rect.y,this.rect.w,this.rect.h*this.age);

    }

}
