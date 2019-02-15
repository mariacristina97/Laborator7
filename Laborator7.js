//Ex 1
var a = 1;
function b()
{
a = 10;
return;
}
b();
console.log('a=' + a);


//Ex 2
for (var i = 0; i < 5; i++) 
{
	(function(i)
	{
		setTimeout(function() 
		{ 
			console.log(i); 
		}, i * 1000 );
	})(i);	
}


//Ex 3
setTimeout(function()
{
	try 
	{
		throw new Error('example')
	}
	catch (err) 
	{
		console.log(err)
	}
}, 1000);


//Ex 4
//ES5
function Animal(type)
{
	this.type = type;
	this.color = color;
}
Animal.prototype.getColor = function()
{
	return this.color;
};

function Fish()
{
	Animal.call(this,type);
	this.fishType = fishType;
}
Fish.prototype = Object.create(Animal.prototype);
Fish.prototype.constructor = Fish;
Fish.prototype.getFishType = function()
{	
	return this.fishType;
};

function Dog()
{
    Animal.call(this,type);
    this.dogType = dogType;
}
Dog.prototype = Object.create(Dog.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.getDogType = function()
{
    return this.dogType;
};

function DogType(typeName)
{
	this.typeName = typeName;
	this.furColor = furColor;
}
DogType.prototype.getFurColor=function()
{
    return this.furColor;
};

//ES6
// class Animal
// {
// 	constructor(type)
// 	{
// 		this.type = type;
// 		this.color = color;
// 	}
// 	getColor()
// 	{
// 		return this.color;
// 	}
// }

// class Fish extends Animal
// {
// 	constructor()
// 	{
// 		super(type);
// 		this.fishType = fishType;
// 	}
// 	getFishType()
// 	{
// 		return this.fishType;
// 	}
// }

// class Dog extends Animal
// {
//     constructor()
//     {
//         super(type);
//         this.dogType = dogType;
//     }
//     getDogType()
//     {
//         return this.dogType;
//     }
// }

// class DogType
// {
//     constructor(typeName)
//     {
//         this.typeName = typeName;
//         this.furColor = furColor;
//     }
//     getFurColor()
//     {
//         return  this.furColor;
//     }
// }


//Ex 5
function nonBlocking() 
{
  setTimeout(function() 
  {
    let a = 0;
    setTimeout(() => 
    {
      for (let i = 0; i < 1000; i++) 
      {
        setTimeout(() => 
        {
          for (let j = 0; j < i * 1000; j++) 
          {
            if (i < j) 
            {
              a++;
            }
          }
        }, 0);
      }
    }, 0);
  }, 0);
}


//Ex 6
var pos = 0;
function Move()
{
	var elem = document.getElementById("Animation");
    pos++;

    if(pos >= 15)
    {
    	 pos = 0;
    	 elem.style.left = 0;
    }
    else
    {
    	elem.style.left = pos + '20px';
    } 
}

function Reset()
{
	var elem = document.getElementById("Animation");
	elem.style = 0; 
}