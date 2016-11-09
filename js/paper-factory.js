
project.importSVG('./img/factory.svg');

var group = paper.project.importSVG(document.getElementById('campingsvg'), { expandShapes: true });
var yeti = paper.project.importSVG('./img/yeti.svg');
var camper = paper.project.importSVG('./img/character.svg');

project.importSVG('./img/character.svg');


//console.log(project.activeLayer.children);

//console.log(group.children == project.activeLayer); // true

//console.log(JSON.stringify(group.children[0].data));
//console.log(JSON.stringify(yeti.children[0].data));


