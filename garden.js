class Garden{
    rows=0
    columns=0
    name='Garden'
    plant=null
    plants=[]
    constructor(rows,columns,plant){
        this.rows=rows
        this.columns=columns
        
        console.log('Iam before switch')
        switch(plant){
            case 'rose':
                this.plant=new Plant('rose',0,1,'./images/cartoon-rose.png',[0,150,40,15])
                console.log('Iam in switch')
                break
            case 'orchid':
                this.plant=new Plant('orchid',0,1,'./images/cartoon-orchid.png',[80,150,100,15])
                console.log('Iam in switch')
                 break
            case 'tulsi':
                this.plant=new Plant('tulsi',0,3,'./images/cartoon-tulsi.png',[200,145,100,15]) 
                console.log('Iam in switch')
                break
        }
        console.log('Iam after switch')
        this.prepareGarden()


    }
    prepareGarden(){
        this.plants=new Array(this.columns)
        for(let i=0;i<this.columns;i++){
            // first variable is initiated with a value 0
            // the middle portion tells how much to loop; loop it till i<column count.
            // the third portion increment the value of i;so after the last line i is assigned a value (i+1)
            let createBtnclick=false
                console.log('i is :',i)
                for(let j=0;j<this.rows;j++){

                    this.plants[j,i]=new Plant(this.plant.name,this.plant.age,this.plant.growthFactor,this.plant.imgPath,[i*60,j*40,this.plant.rect.w,this.plant.rect.h],this.plant.floweringAge),createBtnclick
                }

           
        }  
        
            
        
        

    
        let btn=document.createElement('button')
      btn.textContent=this.name.toUpperCase()
      document.querySelector('.buttons').appendChild(btn)
      btn.addEventListener('click',()=>{
        this.grow()

      }) 
    }
    grow(){
        this.plants.forEach((itm)=>{
            itm.forEach((rw)=>{
                rw.grow()

            })
        })
    }
    

}