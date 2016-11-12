//Aliases
var Container = PIXI.Container,
    autoDetextRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite,
    TextureCache = PIXI.TextureCache,
    Rectangle = PIXI.Rectangle;


//Create a Pixi stage and renderer 
var stage = new PIXI.Container();
var renderer = PIXI.autoDetectRenderer(2610, 1668);
renderer.plugins.interaction.autoPreventDefault = false;
//Background color
renderer.backgroundColor = 0xD8E6FF;
//Add the canvas to the HTML document, add the renderer.view to the DOM
document.body.appendChild(renderer.view);

//Adding content
//load an image and run the `setup` function when it's done
loader
  .add([
    "img/baseMap-larger.png",
    "sprites/SantaF_test1.png",
    "sprites/SantaF_test1.json"
  ])
  .on("progress", loadProgressHandler)
  .load(setup);

//Tracking Loading Progress
function loadProgressHandler(loader, resource) {
  //Display the file `url` currently being loaded
  console.log("loading: " + resource.url); 
  //Display the precentage of files currently loaded
  console.log("progress: " + loader.progress + "%"); 

  //If you gave your files names as the first argument 
  //of the `add` method, you can access them like this
  //console.log("loading: " + resource.name);
}


var movie;

function setup() {
  console.log("setup");
  
  //BaseMap Texture
  var basemap = new Sprite(
    resources["img/baseMap-larger.png"].texture
  );
  //Add the cat to the stage
  stage.addChild(basemap);
  
  //Create the 'tileset' sprite from the texture
  //var texture = TextureCache["sprites/SantaF_test1.png"];
  //Create rectangle
  //var rect = new Rectangle(192, 128, 64, 64);
  //texture.frame = rect;
  //var rocket = new Sprite(texture);
  //Position rocket sprite on the canvas
  //rocket.x=32;rocket.y=32;
  //stage.addChild(rocket);
  
  //Create an arraw of textures from an image path
  var frames = [];
  
  for (var i = 0; i < 39; i++) {
    var val = i < 10 ? '0' + i : i;
    frames.push(PIXI.Texture.fromFrame('animation00' + val));
  }
  
  // create a MovieClip (brings back memories from the days of Flash, right ?)
    movie = new PIXI.extras.MovieClip(frames);
  
  /*
     * A MovieClip inherits all the properties of a PIXI sprite
     * so you can change its position, its anchor, mask it, etc
     */
    movie.position.set(300);

    movie.anchor.set(0.5);
    movie.animationSpeed = .5;

    movie.play();

    stage.addChild(movie);

    animate();
}
  
function animate() {
  
  //Render the stage
  renderer.render(stage);
  requestAnimationFrame(animate);
  
  console.log("All files loaded");
}