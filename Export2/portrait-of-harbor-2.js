(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"portrait_of_harbor_2_atlas_", frames: [[6874,2040,299,34],[4488,2416,364,281],[7976,1537,122,34],[6107,2004,387,377],[7976,1272,195,34],[6874,2238,410,324],[8097,0,95,34],[7286,2412,374,337],[7976,1429,172,34],[6511,2380,326,365],[7976,1501,134,34],[5138,2416,280,338],[4202,0,500,1000],[6210,1002,500,1000],[4704,1002,500,1000],[6210,0,500,1000],[5708,1002,500,1000],[5708,0,500,1000],[5206,1002,500,1000],[6712,1002,500,1000],[4202,1002,500,1000],[4704,0,500,1000],[6712,0,500,1000],[7214,0,500,1000],[5206,0,500,1000],[7976,1236,199,34],[4854,2416,282,359],[7976,1308,195,34],[6496,2004,376,374],[0,0,4200,2550],[4583,2004,379,410],[7716,0,379,410],[7214,1002,379,410],[7595,1236,379,410],[4964,2004,379,410],[5345,2004,379,410],[7214,1826,379,410],[5726,2004,379,410],[7716,412,379,410],[7214,1414,379,410],[7595,1648,379,410],[4202,2004,379,410],[7716,824,379,410],[4202,2416,284,368],[7976,1344,194,34],[6874,2004,307,34],[6107,2383,402,324],[7595,2060,390,350],[7976,1465,149,34],[7662,2412,384,281],[7595,1002,119,34],[7976,1380,139,47],[5420,2416,414,179]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.AFGHANISTAN = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Afghanistan_1 = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CHAD = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.chad_1 = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ETHIOPIA = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.ethiopia_1 = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.IRAN = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.iran_1 = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.JORDAN = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.jordan_1 = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.KENYA = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.kenya_1 = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Layer1 = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Layer1_1 = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Layer1_2 = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Layer1_3 = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Layer1_4 = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Layer1_5 = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Layer1_6 = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Layer1_7 = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Layer1_8 = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Layer1_9 = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Layer1_10 = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Layer1_11 = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Layer1_12 = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.LEBANON = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.lebanon_1 = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.PAKISTAN = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.pakistan_1 = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.Portrait_1_consudan = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.Refugeesinthiscountry1070854Greatestrelocationdesti = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.Refugeesinthiscountry1188631Greatestrelocationdesti = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.Refugeesinthiscountry1561162Greatestrelocationdesti = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.Refugeesinthiscountry1767291Greatestrelocationdesti = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.Refugeesinthiscountry2054441Greatestrelocationdesti = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.Refugeesinthiscountry2754540Greatestrelocationdesti = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.Refugeesinthiscountry3735966Greatestrelocationdesti = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.Refugeesinthiscountry369540Greatestrelocationdestina = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.Refugeesinthiscountry369540Greatestrelocationdestina_1 = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.Refugeesinthiscountry553912Greatestrelocationdestina = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.Refugeesinthiscountry6753569Greatestrelocationdesti = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.Refugeesinthiscountry664118Greatestrelocationdestina = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.Refugeesinthiscountry736086Greatestrelocationdestina = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.somalia = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.SOMALIA_1 = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.SOUTHSUDAN = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.southsudan = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.sudan = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.SUDAN_1 = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.syria = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.SYRIA_1 = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.Turkey = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.turkey_1 = function() {
	this.spriteSheet = ss["portrait_of_harbor_2_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.HomeButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB7DsIgKgDIgGgDIgEgFIhni6IhpC6IgEAFIgGAEIgKACIgRAAIgTgBQgHgBgDgCQgCgDABgFQAAgFAFgIICAjWIh6jPIgGgNQgBgFADgDQADgDAHAAIAUgBIASABIAKACQAEABACACIAEAFIBkCvIBjivIAEgFQACgCADgBIAKgCIAQgBIATABQAHABADACQADADgBAFQgBAFgEAIIh5DOIB+DXQAFAIABAFQABAFgEADQgDACgHABIgUABIgSAAg");
	this.shape.setTransform(41.4,49.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AmpGqIAAtTINTAAIAANTg");
	this.shape_1.setTransform(42.6,42.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20.2,0,42.6,94.3);


(lib.turkeypsd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// turkey.psd
	this.instance = new lib.Turkey();
	this.instance.parent = this;
	this.instance.setTransform(180,433);

	this.instance_1 = new lib.turkey_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(43,124);

	this.instance_2 = new lib.Refugeesinthiscountry2754540Greatestrelocationdesti();
	this.instance_2.parent = this;
	this.instance_2.setTransform(56,529);

	this.instance_3 = new lib.Layer1_1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,500,1000);


(lib.syriapsd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// syria.psd
	this.instance = new lib.syria();
	this.instance.parent = this;
	this.instance.setTransform(58,83);

	this.instance_1 = new lib.SYRIA_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(191,435);

	this.instance_2 = new lib.Refugeesinthiscountry6753569Greatestrelocationdesti();
	this.instance_2.parent = this;
	this.instance_2.setTransform(56,529);

	this.instance_3 = new lib.Layer1_2();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,500,1000);


(lib.sudanpsd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sudan.psd
	this.instance = new lib.sudan();
	this.instance.parent = this;
	this.instance.setTransform(55,40);

	this.instance_1 = new lib.SUDAN_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(174,435);

	this.instance_2 = new lib.Refugeesinthiscountry3735966Greatestrelocationdesti();
	this.instance_2.parent = this;
	this.instance_2.setTransform(56,529);

	this.instance_3 = new lib.Layer1_3();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,500,1000);


(lib.southsudanpsd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// south sudan.psd
	this.instance = new lib.southsudan();
	this.instance.parent = this;
	this.instance.setTransform(49,40);

	this.instance_1 = new lib.SOUTHSUDAN();
	this.instance_1.parent = this;
	this.instance_1.setTransform(95,435);

	this.instance_2 = new lib.Refugeesinthiscountry2054441Greatestrelocationdesti();
	this.instance_2.parent = this;
	this.instance_2.setTransform(56,529);

	this.instance_3 = new lib.Layer1_4();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,500,1000);


(lib.somaliapsd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// somalia.psd
	this.instance = new lib.somalia();
	this.instance.parent = this;
	this.instance.setTransform(108,25);

	this.instance_1 = new lib.SOMALIA_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(153,435);

	this.instance_2 = new lib.Refugeesinthiscountry1188631Greatestrelocationdesti();
	this.instance_2.parent = this;
	this.instance_2.setTransform(56,529);

	this.instance_3 = new lib.Layer1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,500,1000);


(lib.pakistanpsd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pakistan.psd
	this.instance = new lib.PAKISTAN();
	this.instance.parent = this;
	this.instance.setTransform(152,435);

	this.instance_1 = new lib.Refugeesinthiscountry1561162Greatestrelocationdesti();
	this.instance_1.parent = this;
	this.instance_1.setTransform(56,529);

	this.instance_2 = new lib.pakistan_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(62,33);

	this.instance_3 = new lib.Layer1_5();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,500,1000);


(lib.lebanonpsd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lebanon.psd
	this.instance = new lib.LEBANON();
	this.instance.parent = this;
	this.instance.setTransform(150,435);

	this.instance_1 = new lib.lebanon_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(109,34);

	this.instance_2 = new lib.Refugeesinthiscountry1070854Greatestrelocationdesti();
	this.instance_2.parent = this;
	this.instance_2.setTransform(56,529);

	this.instance_3 = new lib.Layer1_6();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,500,1000);


(lib.kenyapsd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// kenya.psd
	this.instance = new lib.KENYA();
	this.instance.parent = this;
	this.instance.setTransform(184,435);

	this.instance_1 = new lib.kenya_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(110,55);

	this.instance_2 = new lib.Refugeesinthiscountry553912Greatestrelocationdestina();
	this.instance_2.parent = this;
	this.instance_2.setTransform(56,529);

	this.instance_3 = new lib.Layer1_7();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,500,1000);


(lib.jordanpsd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// jordan.psd
	this.instance = new lib.JORDAN();
	this.instance.parent = this;
	this.instance.setTransform(162,435);

	this.instance_1 = new lib.jordan_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(87,28);

	this.instance_2 = new lib.Refugeesinthiscountry664118Greatestrelocationdestina();
	this.instance_2.parent = this;
	this.instance_2.setTransform(56,529);

	this.instance_3 = new lib.Layer1_8();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,500,1000);


(lib.iranpsd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// iran.psd
	this.instance = new lib.IRAN();
	this.instance.parent = this;
	this.instance.setTransform(202,435);

	this.instance_1 = new lib.iran_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(63,38);

	this.instance_2 = new lib.Refugeesinthiscountry369540Greatestrelocationdestina();
	this.instance_2.parent = this;
	this.instance_2.setTransform(56,529);

	this.instance_3 = new lib.Layer1_9();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,500,1000);


(lib.ethiopiapsd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ethiopia.psd
	this.instance = new lib.ETHIOPIA();
	this.instance.parent = this;
	this.instance.setTransform(154,435);

	this.instance_1 = new lib.ethiopia_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(45,53);

	this.instance_2 = new lib.Refugeesinthiscountry736086Greatestrelocationdestina();
	this.instance_2.parent = this;
	this.instance_2.setTransform(56,529);

	this.instance_3 = new lib.Layer1_10();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,500,1000);


(lib.chadpsd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// chad.psd
	this.instance = new lib.CHAD();
	this.instance.parent = this;
	this.instance.setTransform(189,435);

	this.instance_1 = new lib.chad_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,30);

	this.instance_2 = new lib.Refugeesinthiscountry369540Greatestrelocationdestina_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(56,529);

	this.instance_3 = new lib.Layer1_11();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,500,1000);


(lib.afghanpsd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// afghan.psd
	this.instance = new lib.AFGHANISTAN();
	this.instance.parent = this;
	this.instance.setTransform(99,435);

	this.instance_1 = new lib.Refugeesinthiscountry1767291Greatestrelocationdesti();
	this.instance_1.parent = this;
	this.instance_1.setTransform(56,529);

	this.instance_2 = new lib.Afghanistan_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(68,52);

	this.instance_3 = new lib.Layer1_12();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,500,1000);


(lib.redxtralong2ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// red-xtralong2.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9F2214").s().p("AIgOlIgJgCIgMgDIgtgLQgagHgRgJQgKgBgSgDIgUgFIgOgHQgmgRgmgWIgFACQgSgKghgMQgkgNgPgIQgDgBgDAAIgEAAQgSgKgcgIIgXgMIgVgKIgXgIQgcgKgOgKQgMABgOgGQgSgHgIgCQgDgBgFABIgIAAIgGgEIgEgEQgIABgDgCIgHgFIgIgEQgCgCgGAAIgIgBIgHgFIgIgEQgCgBgTgBQgNgBgHgKIgSgCIgTgDQgRAAgGgCIgKgFQgGgDgVgBQgSAAgJgHQgJABglgJQgcgHgNAJQgBAHgEADQgDAEgFAAQgEAAgEgEQgFgEgEgCQgJgEgOgEQgRgEgJABQgDAAgGAEQgGACgCAAQgGAAgKgHQgKgFgGgBQgFAAgHADIgIADQgHgBgIgIQgFgFgCgGIgFAAIgDAAQgIgKgWgIQgTgHgUgCIgMgEQgUgGgUgQIgggdQAAgDgBgDIgCgDQgFgEgIgIIgOgMQAAgDgEgGQgFgGABgEIgQgbQgOgSgDgJQgDgGgCgPQAAgPgFgIQAEgNABgXIAFgqIgCgDQAAAAAAgBQgBgBAAAAQAAgBABAAQAAgBAAAAQAKgFADgPQAGgSADgEQACgCAFgDIAGgEQAGgFAEgHIAGgMQAXgEAegSQAkgXAOgEIAGAAQAIgDARgEIAZgGQAHgHAPAAIAdABIAXgBQAIAAAOgBIAWgCQAKAAAOAFIAWAGQAEABAHgBIAMgBQAHACAKAJQAJAJAEACQAVgBAHAGIACAOQACAGAGAFQAIAFAWgKQAQgIACAQQAKAKAYAHIApALIAbAKIAaAKIAaAHQAOAEAIAGQAKAAALAEIATAKQAPAGAsANQAmALAUANQAcAEApAcQAQACAUAMQAaAOAGADIAVAGIADABIAAgBIABAAIACABIACAEIAFAAQABAAAAAAQABAAABAAQAAAAABAAQAAABAAAAIAFAGQAAABABAAQAAABABAAQAAAAABgBQABAAAAgBQAEAFAKABQAJABAGAHIAEAEQADACAGAAQAEAAAIAJQAGACAFADIARAJQAAgDADgDIAEgDIADgIQABgDgEgIIgHgNIACgCQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQgHgKAAgEIgDgOIgFgJIgFgIIACgCQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAAAgBIgGgEQgCgDgBgGIgDgKIgDgHIAAgCIgHgWQgJgagNgfQgEgUgMgcIgTgyQgfhZgRgvIgchJQgRgrgHggQADgEAAgGQAAgCgDgCQgDgBgBgEQAAAAAAgBQgBAAAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAAAQgYhVgKgtQAAgBAAAAQAAgBAAgBQAAAAABAAQAAAAAAAAQABgBABAAQAAAAAAAAQAAgBABAAQAAgBgBAAIgXhZIgIgmQAAAAgBgBQAAAAAAgBQAAAAAAAAQgBAAAAgBIgBgBQgBAAAAgBQAAAAAAgBQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAQABgBAAAAIgDgKQgCgPgKgfQgHgfgDgPQACgHgCgJIgBgFIgEgGIgDgJQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIADgBQABgCgFgNQgFgOAAgGIgCgWQAAgOgDgKQAMAbARABQADgJgFgVQgEgWACgJIgIgcIgGgeQgGgfgDghQgBgGgDABQgBgfgFgjIgGg0IAAgTQACAXAGAqIAeCsIAEAPQABAPAFAcQAGAfAFATQADAMAHAEQAIADAJgHQABgNgEgSQgGgVgBgIIAHgHQAEgBAFACQADALAMA0QAKAmALASQgBADAEAQQAEADAHADIADgDQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQgEgRABgnQABgjgHgVIAMgUQgHgggGgQQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAIABgCIgMg3QgHgdACgXQAEAOAEAeQAEAdAEAOQABADAEABIAEAEQABANAHAdIAJAvQAFADAEgCQAFgCgDgIQABAAABAAQAAABAAAAQABABAAAAQAAABAAAAIAAAGQABAAABAAQAAgBABAAQAAgBAAAAQABgBAAgBIAIAiQAAAAABABQAAAAABABQAAAAABAAQABAAAAAAQABAAABAAQABgBAAAAQABAAAAgBQAAAAABAAQgDgIgBgLIgCgSIgDgJQgEgFgBgDIABgEIAAgEQAAgCgCgEIgDgEIAAgGIABgFQgBgHgHgQQgFgPgCgHQAAgGACgNQACgMgDgHQAGADAAAHIABANQADAPAMAfQAKAeACANQAFAAACgCIAFgHIgFgUQgBgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQgKgkgEgVIADgFQACgDAFACIAAgGQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAgBQADgCgBgGQgCgFACgCQgGgMgDgYQgDgYgIgPQAMAUAKAxQAAABAAAAQAAABAAAAQABAAAAAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAABAAAAQABAEgBAHIgBAJQABAEADAFIAFAIQACAEABAJIAEANIAHALQAEAGAAAGIAFACQACABACADQACAAADgDQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABABQAAABAAAAQABABAAAAQgBAAAAABQAAAAgBAAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQABADADACIAFADQgCANAKAYQAAAAABAAQAAABAAgBQAAAAABAAQAAgBABgBQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAABQAAAEADAJQAEAKAEACQABAHADALQAEALAAAJQAAAAABABQAAAAAAAAQABABAAAAQABAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAEAGACAGIADAPQAEADAFAIQADAHAAAIQAFgBAAgFIgBgIQAFACgDAQQADAHATAiQAQAaAHATQAAACAEADQADACgBADQAAABAAAAQAAAAABAAQAAABAAAAQABAAAAgBIABgBIANAoQAJAbALAFQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAEACAEALQACAHAGACQACAGAHAXQAEARAHAJIABAHQABADgCACQAPATgCAPQAcBAAuB8QAvCGAaA6QACAVANAeIAcBHIAFAWQAEAOAGAJIAgBtIAQA3IAQAyQAAAXAIApIAOBGIACAQIgBAHQgDAMgBAGIAAAJIAAAJQAAAKgHAUQgFASgBAMIgBATQgBAJgDAFQgFANgHAJQgJAQgOALQgMAKgTAIIgXAKQgEACgJAAIgPAAQgIAFgFABIggABQgVABgKACIgGABIgJgBgAEQplQAAAGADgDQADgEgFgBQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAgAEEqLQgCAGAEALIAHATQACAAACgDQACgBAEABQAAgFgDgHQgDgHAAgIQgDgBgBgDIgBgHQgFAAgDgIQgDgJgFACQACALgDAJQABACAEgCIADAAIABAAg");
	this.shape.setTransform(1254,231.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9F2214").s().p("AgCgEQAHAFgDAEIgEgJg");
	this.shape_1.setTransform(1255.4,135.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9F2214").s().p("AADAnQAAgUgGgGQAAgBAAAAQABgBAAAAQAAAAAAABQAAAAAAABIAAgVQgBgPgFgJIAFAAQgCgZAEgFQABAEgBASQgBAPAEAEIgCAHQADANABAZQACAbADAMQgHgFABgTg");
	this.shape_2.setTransform(1271.8,138.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9F2214").s().p("AABAAIgBAAQgDAAADgGQACABAAAHIAAAFIgBgHg");
	this.shape_3.setTransform(1272.8,145.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9F2214").s().p("AADAaQgBgHgCgBQAAAAgBABQAAAAAAAAQgBABAAABQAAABAAABQAAAAAAABQgBABAAAAQgBAAAAAAQgBAAgBAAQADgEgCgEQAAAAABAAQAAAAABAAQAAABABAAQAAAAABAAIgCgSQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAQgEgDACgKQABgOgBgJQADALADAYIADAhQgDAAgBgIg");
	this.shape_4.setTransform(1262.4,145.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9F2214").s().p("AgCAHQACgDgBgGQgCgIAAgCQADADABAJQAAAIADAGQgEgGgCgBg");
	this.shape_5.setTransform(1253.8,165.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9F2214").s().p("AAAgFQABABABAEQAAAEgBACQgDgEACgHg");
	this.shape_6.setTransform(1250.1,134.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9F2214").s().p("AAAAAQAAgFABACIAAAHIAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAgBAAgBg");
	this.shape_7.setTransform(1256.5,136.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9F2214").s().p("AAAgJIABAJQABAIgBACQgCgHABgMg");
	this.shape_8.setTransform(1257.2,136);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9F2214").s().p("AgBAAQAAgFADABQAAABAAAAQAAAAAAABQAAAAAAAAQAAABgBAAIgBAAIAAADQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBgBAAgEg");
	this.shape_9.setTransform(1271.1,140.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9F2214").s().p("AAAABIAAgGQACABgBAKQgBgCAAgDg");
	this.shape_10.setTransform(1269.7,141.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9F2214").s().p("AgBgFQACgBAAAFIABAHQgCgDgBgIg");
	this.shape_11.setTransform(1268.5,143.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#9F2214").s().p("AgBAAIABgLQABADgBAIQAAAIACAEQgDgEAAgIg");
	this.shape_12.setTransform(1274.2,144);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9F2214").s().p("AAAACIgCgGQACAAABAEIACAFQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_13.setTransform(1256.4,147.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#9F2214").s().p("AAAABIgBgIQABACABAFIABAIQgCgBAAgGg");
	this.shape_14.setTransform(1274.7,146.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#9F2214").s().p("AAAABIgCgHQACgDABAHIACAKQgCgCgBgFg");
	this.shape_15.setTransform(1273,147.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#9F2214").s().p("AAAABIgBgHQAFAHgDAGQgBgBAAgFg");
	this.shape_16.setTransform(1259.6,148.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#9F2214").s().p("AgBgEQABAAAAABQAAAAAAABQAAAAABABQAAAAAAABQABADgBACQgCgDAAgGg");
	this.shape_17.setTransform(1275.3,148.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#9F2214").s().p("AgBAKQgCgLADgJIgCgCQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBgFABgHQAAgCAAAAQAAgBAAABQAAAAABACQAAACAAACQACAKABAPQABARACAJQgEgGgBgNg");
	this.shape_18.setTransform(1269.1,147.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#9F2214").s().p("AgCAAQABgBAAAAQABAAAAgBQAAAAAAAAQABAAABAAIABAEIgDABQgCAAAAgDg");
	this.shape_19.setTransform(1274.1,154.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#9F2214").s().p("AAAABQgCgPgEgGQADgCACALQACALACACIAAAJIADAFQABADgBADQgFgFgBgQg");
	this.shape_20.setTransform(1274.5,166.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#9F2214").s().p("AgBAAQgDgLACgFQAAAHACAKQAEALAAAFIgFgRg");
	this.shape_21.setTransform(1264,171.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#9F2214").s().p("AgDgHQADABABAFIACAJQgEgEgCgLg");
	this.shape_22.setTransform(1290.7,171.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#9F2214").s().p("AAAABQgCgDACgCQABABABAIIgCgEg");
	this.shape_23.setTransform(1286.1,174.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#9F2214").s().p("AAAABIgBgEQABgBAAABQAAAAAAAAQABAAAAABQAAABAAABQABADgBACQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBg");
	this.shape_24.setTransform(1292,177.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#9F2214").s().p("AgBAAQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAAAIACAEIAAAFQgCgCgBgDg");
	this.shape_25.setTransform(1291.6,178.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#9F2214").s().p("AgBgDQAAAAABAAQAAABAAAAQAAAAABABQAAAAABABQABABgBADQgCgBgBgGg");
	this.shape_26.setTransform(1263,200.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#9F2214").s().p("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");
	this.shape_27.setTransform(657.2,273.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#9F2214").s().p("AADgUQgBALgDAeQgCgcAGgNg");
	this.shape_28.setTransform(45.7,551.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#9F2214").s().p("Ag0DAQAShAACgbIALggQANhAAfh0IAchcQAQg1AKglQgCAbgdBZIgUBCQgHAdgDAXIgbBkQgWBVgDAgIgFgCQgYBvgLAbQADgRAVhVg");
	this.shape_29.setTransform(33.9,533.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#9F2214").s().p("AABgHQASg6gTBDQAAABAAABQgBABAAAAQAAABAAAAQAAAAABAAIAAgEQADADgMAeQAAgGAKgkg");
	this.shape_30.setTransform(42.8,500.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#9F2214").s().p("AAAgDIAYhSIAVg/QABAGgLAfQgKAgACAEQABABAGgQQAFgOABAGIgFAPIgGARQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAgBIAAgFQgLAfgMAtQABgGgCgBQgDAUgPAqQgUA3gKAlQALgxAhhng");
	this.shape_31.setTransform(51.5,507);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#9F2214").s().p("AgCAFQARgmAHgWIgJAhQgGAKgKAaIgTAqQAFgSAPghg");
	this.shape_32.setTransform(89.5,436.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#9F2214").s().p("AgBABQADgRACgGQAAARgHAcQgCgDAEgTg");
	this.shape_33.setTransform(49.7,557.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#9F2214").s().p("AgEAQIAHgfQAFgHgHAXQgDARgCAAIAAgCg");
	this.shape_34.setTransform(45.2,549);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#9F2214").s().p("AAAgCIAKgnQgEAVgFATIgKArQACgRAHgbg");
	this.shape_35.setTransform(44.3,549.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#9F2214").s().p("AgHAWQADgKABgCIADAAIADgPIAEgSQABAIgHAWQgEARgCAAIgCgCg");
	this.shape_36.setTransform(37.2,523);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#9F2214").s().p("AgBADIAJgcQgCAKgEANIgIAdQgBgFAGgTg");
	this.shape_37.setTransform(40.3,518.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#9F2214").s().p("AgDAJIAKgjIgLA1IgBAAQgDAAAFgSg");
	this.shape_38.setTransform(43.2,512.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#9F2214").s().p("AAAACQANgnAEgSQgDAWgMAjIgSA2QADgQANgmg");
	this.shape_39.setTransform(39.6,505.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#9F2214").s().p("AgBAEIAGgaQACACgEAQIgHAbQgBgDAEgQg");
	this.shape_40.setTransform(59.3,503);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#9F2214").s().p("AALgnQgBAIgIAaIgMAtQAEgYARg3g");
	this.shape_41.setTransform(42.8,494.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#9F2214").s().p("AgFAOIAQgzQgBAIgIAbQgIAagBALIgDADQgCAAAHgYg");
	this.shape_42.setTransform(45.4,491.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#9F2214").s().p("AgBAAQAFgSAFgKQAAAEgHAVIgKAgQABgLAGgSg");
	this.shape_43.setTransform(58.2,496.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#9F2214").s().p("AgBAAQAFgQADgGQgCANgLAgQAAgEAFgTg");
	this.shape_44.setTransform(45.6,484.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#9F2214").s().p("AgfBmQAShEAOguQAbhKAOgtQgIAigSA1IggBdIgBAIIgDANQgHAXgKAdIgEAKIAKgeg");
	this.shape_45.setTransform(48.8,494.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#9F2214").s().p("AgFAMIAJgYQAGgBgKAVQgBAFgCAAIgCgBg");
	this.shape_46.setTransform(57.9,456.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#9F2214").s().p("AgZA1QAZg2ABgJIAUgjIAKgaQAFgPAHgKQgIAbggBCQghBHgMAdQAAgHARglg");
	this.shape_47.setTransform(80.8,406.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#9F2214").s().p("AAAgBQAWgsANgXIgjBJQgYAygKAOIAihGg");
	this.shape_48.setTransform(97,399.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#9F2214").s().p("AgDAFIAWgqQgJAbgcAwQACgJANgYg");
	this.shape_49.setTransform(86.5,362.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#9F2214").s().p("AgCADIANgXQgCAHgHANQgHAPgFAGQgBgCAJgQg");
	this.shape_50.setTransform(96.2,355.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#9F2214").s().p("AgCACQAJgQAFgGQABAEgYAlQgCgBALgSg");
	this.shape_51.setTransform(101.6,336.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#9F2214").s().p("AgMAUIAZgoQgTApgFAAIgBgBg");
	this.shape_52.setTransform(105.7,330.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#9F2214").s().p("AgCACQAGgLAHgGQgEAIgRAXQAAgDAIgLg");
	this.shape_53.setTransform(168.4,297.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26.1,6.1,1305.4,557.3);


(lib.redxshort2ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// red-xshort2.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9F2214").s().p("AIgOlIgJgBIgMgEIgtgMQgagFgRgKQgJgBgTgDIgUgFIgOgGQgmgSgngWIgEACQgSgLghgLQgkgMgQgJQgDgCgCABIgFAAQgRgKgcgHIgXgNIgVgKIgWgJQgdgJgOgKQgMABgOgFQgSgIgIgCQgDgBgGABIgIAAIgEgEIgFgDQgHgBgEgBIgIgFIgHgEQgDgCgFAAIgIgBIgHgEIgHgFQgDgBgTgBQgNgBgIgKIgRgCIgTgEQgRABgFgCIgLgFQgGgDgVgBQgRAAgKgHQgJABglgJQgdgHgMAJQgBAHgEAEQgDADgFAAQgDAAgFgDQgFgFgEgCQgJgFgOgDQgQgFgKACQgDAAgGADQgGAEgCgBQgFAAgLgGQgKgHgGAAQgEAAgIADIgIADQgHgBgHgHQgHgGgBgGIgFAAIgDAAQgIgKgVgIQgUgGgUgDIgMgEQgUgGgUgQIgggeQAAgCgBgCIgBgFQgGgDgJgIIgNgLQAAgEgFgGQgEgFABgFIgQgbQgOgSgEgIQgCgHgBgQQgCgOgEgIQAEgNACgXIADgqIgBgDQAAgBAAAAQgBgBAAAAQAAgBABAAQAAAAAAgBQAKgFADgPQAGgSADgEQACgCAEgDIAIgEQAEgFAFgIIAHgLQAWgEAegSQAlgXANgEIAHAAQAHgDARgDIAZgHQAIgHAOAAIAdAAIAXAAQAIABAOgCIAWgCQAJAAAPAFIAWAGQAEABAIgBIALgBQAHACAKAIQAJAKAEACQAVgBAHAGIADAOQABAHAGAEQAIAEAWgKQAQgGACAPQAKALAYAGIApALIAaAKIAaAKIAbAGQAOAFAIAGQAKAAALAEIATAKQAOAGAuANQAlAMAUANQAcADApAcQAQACAVAMQAZAPAGACIAWAGIACABIAAgBIABAAIACABIACAEIAFAAQABAAAAAAQABAAABAAQAAAAABAAQAAABAAAAIAFAGQAAABABAAQAAABABAAQAAAAABgBQABAAAAgBQAEAFAKABQAJABAHAGIADAFQACACAHAAQAEAAAIAJQAGABAGAEIARAJQAAgDACgDIAEgDIAEgIQAAgDgFgJIgFgMIABgBQAAgBABAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQgHgLgBgDIgCgOIgFgJIgFgIIACgDQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAgBgBIgFgDQgCgEgCgGIgCgKIgDgHIAAgCIgHgWQgJgagOgfQgDgTgMgdIgTgyQgfhagRguIgchJQgQgrgIggQACgDACgHQgBgDgEgBQgDgBAAgEQAAAAgBgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAgBAAAAQABAAAAgBQAAAAAAgBQgYhUgKgtQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQABgBABAAQAAAAAAAAQABgBAAAAQAAgBAAgBIgYhYIgJgmQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBAAAAAAIgBgCQgBgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIgCgKQgCgPgKgfQgHgfgDgPQACgGgCgKIgCgFIgDgFIgDgKQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIACAAQAAgEgEgMQgEgPgBgFIgBgWQgBgPgDgIQAMAaASABQADgIgGgXQgFgVADgJIgIgcIgGgeQgGgfgDgiQgBgFgEABQAAgegFgkIgGg0IABgSQABAWAHArIAdCrIAEAPQABAOAFAdQAGAfAEATQAEAMAHAEQAJAEAIgJQABgMgEgSQgGgVgBgIIAHgHQAEgCAFADQADAKANA1QAIAmAMASQgBADAEAPQAEAEAIADIACgDQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQgEgRABgnQABgigIgWIANgUQgGgggHgQQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIACgBIgNg4QgFgdABgXQADAOAFAfQAFAcADAOQACACADACIAEADQABANAGAeIAKAvQAEADAFgDQAFgBgDgJQABABABAAQAAABAAAAQABABAAAAQAAABAAABIABAFQAAAAABAAQAAgBABAAQAAgBAAAAQAAgBAAgBIAJAiQAAAAABABQAAAAABAAQAAABABAAQABAAABAAQAAAAABAAQABgBAAAAQABAAAAgBQAAAAAAAAQgCgIgBgLIgCgSIgEgJQgDgFAAgDIAAgEIABgEQAAgCgDgEIgDgEIAAgGIAAgFQAAgIgHgPQgFgPgBgIQgCgEADgOQACgMgCgHQAFACAAAIIABAOQADAOALAfQALAeACANQAFABACgEIAGgFIgHgVQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgLgjgEgVIADgFQACgCAEABIABgFQAAgBAAgBQAAAAAAAAQAAgBgBAAQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQADgDgBgFQgCgGACgCQgGgLgDgZQgEgYgGgOQALATAKAxQAAABAAAAQAAABAAAAQABAAAAAAQABAAAAAAQABAAAAgBQAAAAABAAQAAAAAAAAQAAABAAAAQACAEgCAHIgBAJQABAFADAEIAFAJQACADACAJIADANIAHALQAEAGgBAGIAGACQACABACAEQACgBADgDQAAgBABAAQAAgBABAAQAAAAABAAQABABAAAAQAAABABAAQAAABAAAAQgBAAAAABQAAAAgBAAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQABADADACIAFAEQgBAMAJAYQAAAAABAAQAAABAAgBQAAAAABAAQAAgBAAAAQABgBAAgBQABAAAAAAQAAAAABAAQAAAAAAABQgBAEAEAJQADAJAFACQAAAIAEALQAEALAAAJQAAAAABABQAAAAAAABQABAAAAAAQABAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAFAGABAGIADAPQAFAEADAHQAEAHABAIQADgBABgFIgBgIQAFACgEAQQADAHAVAiQAPAaAGATQABACAEADQADADgBADQAAAAAAAAQAAAAABAAQAAABAAAAQABAAAAgBIABgBIAOAoQAJAbAKAFQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAEADAEAKQACAHAGACQACAGAHAYQAFAQAGAJIABAGQABAFgCABQAPASgCAQQAcBAAuB9QAvCFAaA6QACAVANAeIAcBHIAFAWQAEAOAGAJIAgBuIAQA2IAQAxQAAAYAIApIAOBGIACAQIgCAHQgCALgBAIIABAIIAAAJQgBAKgHAUQgFASgCAMIAAATQgBAIgCAGQgGANgHAKQgJAOgOAMQgMAKgTAIIgXALQgEABgJAAIgPAAQgIAFgGABIgeACQgWAAgKACIgGABIgJgBgAEPplQABAGAEgDQACgDgFgCQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAgAEEqLQgCAGAEAMIAHASQACAAACgCQADgCACABQABgGgDgHQgDgHAAgGQgDgCgBgDIgBgIQgEABgEgIQgDgJgFACQACALgDAJQABACAEgCIADAAIABAAgAGVmRIABAAIgBAAg");
	this.shape.setTransform(425.3,102.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9F2214").s().p("AgCgEQAHAFgDAEIgEgJg");
	this.shape_1.setTransform(426.7,6.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9F2214").s().p("AADAnQAAgUgGgGQABgEAAAEIAAgVQgBgPgFgJIAFAAQgCgZAEgFQABAEgBASQgBAPAEAEIgCAHQADANABAZQACAbADAMQgHgFABgTg");
	this.shape_2.setTransform(443.1,8.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9F2214").s().p("AABAAIgBAAQgDAAADgGQACABAAAHIAAAFIgBgHg");
	this.shape_3.setTransform(444.1,16);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9F2214").s().p("AADAbQgBgIgCAAQAAAAgBAAQAAAAAAAAQAAABgBABQAAAAAAABQAAABAAABQgBABAAAAQgBAAAAAAQgBAAAAAAQABgEgBgDQAAgBABAAQAAAAABABQABAAAAAAQABAAAAABIgCgTQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAQgEgDACgKQACgOgCgJQADALADAYIACAiQgCgBgBgHg");
	this.shape_4.setTransform(433.7,16.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9F2214").s().p("AgCAHQACgEgBgFQgCgIAAgDQADAEABAJQAAAIADAFQgEgFgCgBg");
	this.shape_5.setTransform(425.1,35.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9F2214").s().p("AAAgFQABABABAEQAAAEgBACQgDgEACgHg");
	this.shape_6.setTransform(421.4,5.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9F2214").s().p("AgBAAQAAgFACACIAAAHIAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAgBgBgBg");
	this.shape_7.setTransform(427.8,6.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9F2214").s().p("AAAgJIABAJQABAIgBACQgCgHABgMg");
	this.shape_8.setTransform(428.5,6.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9F2214").s().p("AgBAAQAAgFADABQAAABAAAAQAAAAAAABQAAAAAAAAQAAABgBAAIgBAAIAAADQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBgBAAgEg");
	this.shape_9.setTransform(442.4,11.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9F2214").s().p("AAAABIAAgGQACABgBAKQgBgCAAgDg");
	this.shape_10.setTransform(441,12.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9F2214").s().p("AgBgFQACgBABAFIAAAHQgCgDgBgIg");
	this.shape_11.setTransform(439.8,13.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#9F2214").s().p("AgBAAIABgLQABADgBAIQAAAIACAEQgDgEAAgIg");
	this.shape_12.setTransform(445.5,14.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9F2214").s().p("AAAACIgCgGQACAAABAEIACAFQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_13.setTransform(427.7,18.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#9F2214").s().p("AgBgHQABACABAFIABAIQgCgBgBgOg");
	this.shape_14.setTransform(446,17);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#9F2214").s().p("AAAABIgCgHQACgDABAHIACAKQgCgCgBgFg");
	this.shape_15.setTransform(444.3,17.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#9F2214").s().p("AAAABIgBgHQAFAHgDAGQgBgBAAgFg");
	this.shape_16.setTransform(430.9,19.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#9F2214").s().p("AgBgEQABAAAAABQAAAAAAABQAAAAABABQAAAAAAABQABADgBACQgCgDAAgGg");
	this.shape_17.setTransform(446.6,19);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#9F2214").s().p("AgBAKQgCgLADgJIgCgCQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBgFABgHQAAgCAAAAQAAgBAAABQAAAAABACQAAACAAACQACAKABAPQABARACAJQgEgGgBgNg");
	this.shape_18.setTransform(440.4,17.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#9F2214").s().p("AgCAAQABgBAAAAQABAAAAgBQAAAAAAAAQABAAABAAIABAEIgDABQgCAAAAgDg");
	this.shape_19.setTransform(445.4,25.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#9F2214").s().p("AAAABQgCgPgEgGQADgCACALQACALACACIAAAJIADAFQABADgBADQgFgFgBgQg");
	this.shape_20.setTransform(445.8,37.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#9F2214").s().p("AgBAAQgDgLACgFQAAAHACAKQAEALAAAFIgFgRg");
	this.shape_21.setTransform(435.3,42.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#9F2214").s().p("AgDgHQADABABAFIACAJQgEgEgCgLg");
	this.shape_22.setTransform(462,42.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#9F2214").s().p("AAAABQgCgDACgCQABABABAIIgCgEg");
	this.shape_23.setTransform(457.4,45.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#9F2214").s().p("AAAABIgBgEQABgBAAABQAAAAAAAAQABAAAAABQAAABAAABQACADgCACQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBg");
	this.shape_24.setTransform(463.3,48.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#9F2214").s().p("AgBAAQAAAAAAgBQAAgBAAgBQAAAAABgBQAAAAAAAAIACAEIAAAFQgCgCgBgDg");
	this.shape_25.setTransform(462.9,49.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#9F2214").s().p("AgBgDQABAAACADQABACgBACQgCgBgBgGg");
	this.shape_26.setTransform(434.3,71.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#9F2214").s().p("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");
	this.shape_27.setTransform(224.8,125.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#9F2214").s().p("AAAACQgBgGABgCQACAEAAAIIgBABIgBgFg");
	this.shape_28.setTransform(41.4,228.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#9F2214").s().p("AgQA+QAHgWgCgIIAGgKQACgWAKgjQAOgtADgOQADAKgLAcQgKAZADANIAAAAIgJAgQgGAXABAPIgFgBQgIAkgGAIQAAgHAIgag");
	this.shape_29.setTransform(27,220.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#9F2214").s().p("AAAgDQAGgQgGATQAAAAAAABQAAAAAAAAQAAAAAAAAQABAAAAgBQADACgFAJQgCgDADgLg");
	this.shape_30.setTransform(29.7,209.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#9F2214").s().p("AgEgBIAOgtQACACgEAKQgCAKACACQACABACgFQAAgBABgBQABAAAAgBQABAAAAAAQABABAAAAIgCAFIgCAFIgBgCIgCgCQgEAKgDAOQAAgBgBAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQABAGgGANQgIAQgCAMQAAgPALghg");
	this.shape_31.setTransform(39.5,213.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#9F2214").s().p("AAAABQAFgKABgHIAAAGQgBAEACABQgFADgCAHIgGAMQAAgGAGgKg");
	this.shape_32.setTransform(58.4,194.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#9F2214").s().p("AgBAAQABgFABgBQACAFgDAIQgBgBAAgGg");
	this.shape_33.setTransform(46.2,231.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#9F2214").s().p("AgBAFIABgJQAEgCgCAHQgCAFAAAAIgBgBg");
	this.shape_34.setTransform(40.6,227.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#9F2214").s().p("AAAAAIADgMQAAAKgFAPQAAgEACgJg");
	this.shape_35.setTransform(39.9,227.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#9F2214").s().p("AgDAGQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAAAIACAAQABgCAAgCIABgFQACADgCAGQgCAEgCAAIgCgBg");
	this.shape_36.setTransform(28.7,216.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#9F2214").s().p("AAAABIACgJQABAEgEAMQgBgBACgGg");
	this.shape_37.setTransform(30.7,215.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#9F2214").s().p("AgBACIADgKIgCARQgCgBABgGg");
	this.shape_38.setTransform(32.5,214.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#9F2214").s().p("AAAAAQAFgLAAgGQACAIgFAKIgGARQAAgGAEgMg");
	this.shape_39.setTransform(27.7,210.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#9F2214").s().p("AAGgTQABAKgMAdQADgSAIgVg");
	this.shape_40.setTransform(42.1,214.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#9F2214").s().p("AgBABIABgIQACACgBAFIgBAIQgBgCAAgFg");
	this.shape_41.setTransform(45.7,213.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#9F2214").s().p("AAAABIACgNQACADgCAJIgEANQAAgDACgJg");
	this.shape_42.setTransform(28.6,207.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#9F2214").s().p("AADgLQAAADgCAIIgBAMIgBAAQgDAAAHgXg");
	this.shape_43.setTransform(30.5,206.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#9F2214").s().p("AAAAAQAAgGACgCQACADgFAOQgBgEACgFg");
	this.shape_44.setTransform(43.4,211.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#9F2214").s().p("AAAAAQABgFABgCQABAFgDAKQgCgCACgGg");
	this.shape_45.setTransform(29.2,203.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#9F2214").s().p("AgJAhQADgPAGgVIAMgmQABAKgGATQgHAUgFAIIABADIAAAEIgHATIACgJg");
	this.shape_46.setTransform(34.2,208.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#9F2214").s().p("AgCAEIACgHQAGABgEAGIgCAAIgCAAg");
	this.shape_47.setTransform(34.5,195.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#9F2214").s().p("AgIARQAIgRAAgEIAGgKQABgMAGgFQAAAKgLAVQgLAWgCAKIAAAAQgDAAAGgPg");
	this.shape_48.setTransform(42.9,179.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#9F2214").s().p("AAAAAQAGgPAEgGIgJAXQgFAQgFAEQAFgHAEgPg");
	this.shape_49.setTransform(55,180.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#9F2214").s().p("AgBABIAGgNQAAAKgJAPQgBgDAEgJg");
	this.shape_50.setTransform(35.6,161);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#9F2214").s().p("AAAABIADgHQAAADgCADQgBAGgCABQgBgBADgFg");
	this.shape_51.setTransform(41.9,160.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#9F2214").s().p("AgBAAQACgFADgBQACACgIALQgCgBADgGg");
	this.shape_52.setTransform(40.5,152.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#9F2214").s().p("AgDAGIAIgMQgBAFgCAEQgCAEgCAAIgBgBg");
	this.shape_53.setTransform(42.2,150.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#9F2214").s().p("AgBAAQABgDADgCQAAAFgEAGQgBgDABgDg");
	this.shape_54.setTransform(81.1,151.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(24.5,2.5,478.3,229.8);


(lib.redlong2ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// red-long2.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9F2214").s().p("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QAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBgBQAEgDgDgFQgCgGACgDQgHgMgDgbQgDgbgIgQQAKAUANA4QAAAAAAABQAAAAABAAQAAABAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAAAAAAAQAAABAAAAQACAEgBAHIAAALQACAJAIAKIAEAOIADAOIAIAMQAEAHgBAGIAGACQACABACAEQADAAACgDQAAgBABgBQABAAAAAAQABgBAAABQABAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQgBABAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAQACAEAHAFQAAAKAEALIAHAUQAAAAABAAQAAAAAAAAQAAAAABgBQAAAAABgBQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABABQgBAFADAKQAEAKAFACQABAJAEAMQAFAMABAJQAAABABAAQAAABAAAAQABAAAAAAQABAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAFAGACAIIAEAQQALAIADAUQAEgBgBgFIgBgJQAEABAAAHIgBALQAFANAVAfQASAbAHAWQABACAFAEQAEADgCADQABAAAAABQAAAAAAAAQAAAAABAAQAAAAAAAAIABgBIAQArQAMAeALAFQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAAAQgBgBgBAAQAAAAgBAAQAAAAAAAAQgBAAAAABQADADAFAKQAEAKAFABIALAgQAGATAIAIQADAMgCADQAQAUgBAQQAlBPAzCAIBVDYIA3CqIAFAYQADAQAHAKIAHAcIAJCVIgDAeIgLAbQgIARgIANQgLARgLALQgMALgNAJQgLAFgLAEIgQAHIgGABQgMAFgIACQgOADghACQggADgPAEIgXAIIgGABIgGABgAH0okQABAHACgDQADgFgFgBQABABgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAgAHkpNQgBAHAGAMIAHAUQAEgBABgCQACgCAEABQAAgFgEgIQgDgIAAgIQgGgBgBgLQgFAAgDgIQgEgJgFABQACANgCAKQAAAAABAAQAAABABAAQABAAAAgBQABAAABAAIADgBIAAAAgAKJk9IAAAAIAAAAgAKIk9IABAAIgBAAg");
	this.shape.setTransform(791.4,117.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9F2214").s().p("AgCgEQAHAGgDADIgEgJg");
	this.shape_1.setTransform(814.2,24.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9F2214").s().p("AADArQAAgWgGgHQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAAACIgBgXQgBgSgFgKIAFAAQgDgaAFgHQABAEgBAUQgBARAEAFIgBAIQABAJABALIACAVQACAeAEAOQgHgGAAgVg");
	this.shape_2.setTransform(830.7,27.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9F2214").s().p("AABgBIgBgBIAAABQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgFQABABABAIIAAAKIgBgLg");
	this.shape_3.setTransform(831.8,35.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9F2214").s().p("AADAdQgBgIgCgBQAAAAgBABQAAAAAAAAQAAABgBABQAAABAAABQAAAEgEgBQADgEgCgFQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABIgCgLIgBgJQABAAAAAAQABABAAAAQABAAAAAAQAAAAABAAQgEgEABgLQACgPgDgJQAEALADAbIADAlQgCgBgBgIg");
	this.shape_4.setTransform(821.5,35.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9F2214").s().p("AABALQAAgBgBgBQAAAAAAgBQAAAAAAAAQgBAAAAgBQABgDgBgHIgCgLQADAEAAAJQABAKADAGIgDgEg");
	this.shape_5.setTransform(813.5,57.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9F2214").s().p("AAAgFQABAAABAFQAAAFgBABQgCgDABgIg");
	this.shape_6.setTransform(808.9,23.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9F2214").s().p("AAAAAQAAgFABABIAAAIIgBABQAAAAAAgFg");
	this.shape_7.setTransform(815.3,25.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9F2214").s().p("AAAgKIABALQABAIgBACQgCgHABgOg");
	this.shape_8.setTransform(816.1,25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9F2214").s().p("AgBAAQAAgGADACQABADgDAAIAAADQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQgCgCAAgEg");
	this.shape_9.setTransform(830,29.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9F2214").s().p("AAAABIAAgGQAAAAABAFIAAAGQgBgCAAgDg");
	this.shape_10.setTransform(828.6,31.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9F2214").s().p("AgBgFQACgBABAFIAAAIIgDgMg");
	this.shape_11.setTransform(827.4,32.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#9F2214").s().p("AgBAAIABgMQAAAEAAAIQAAAJACAEQgDgEAAgJg");
	this.shape_12.setTransform(833.3,33.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9F2214").s().p("AAAABIgCgGQACAAABAFIACAGQgDgBAAgEg");
	this.shape_13.setTransform(815.5,37.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#9F2214").s().p("AAAACIgBgKQABACABAGIABAJQgCgBAAgGg");
	this.shape_14.setTransform(833.7,36.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#9F2214").s().p("AAAABIgCgIQACgDABAHIACAMQgCgCgBgGg");
	this.shape_15.setTransform(832.1,37.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#9F2214").s().p("AAAABIgBgIQABADABAEQABAFgBADQgBgCAAgFg");
	this.shape_16.setTransform(818.7,38.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#9F2214").s().p("AgBgEQABAAABAEQACAEgBABQgDgDAAgGg");
	this.shape_17.setTransform(834.4,38.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#9F2214").s().p("AgBALQgCgNACgJIgBgCIgBgDIgBgNQAAgBAAgBQAAgBAAABQAAABABABQAAACAAADQADAJAAASQACASAEALQgFgGgCgPg");
	this.shape_18.setTransform(828.2,37.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#9F2214").s().p("AgBAAQAAgBADgBIAAAFIgBAAQgCAAAAgDg");
	this.shape_19.setTransform(833.5,45.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#9F2214").s().p("AAAACQgDgSgEgGQADgCADAMQACAMADACIgBAKIAEAFQACAEgCADQgEgFgDgRg");
	this.shape_20.setTransform(834.4,58.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#9F2214").s().p("AgBAAQgEgNACgEQAAAGADALQAFANAAAGIgGgTg");
	this.shape_21.setTransform(824.2,64.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#9F2214").s().p("AgDgHQADABABAFIADAJQgEgDgDgMg");
	this.shape_22.setTransform(851,63.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#9F2214").s().p("AAAABQgCgDABgCQAAAAABAAQAAABAAAAQAAAAAAABQAAABAAABIACAFQgCgBAAgDg");
	this.shape_23.setTransform(846.6,67.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#9F2214").s().p("AAAABIgBgFQABAAABAEQACADgBACQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAgBAAgBg");
	this.shape_24.setTransform(852.7,70.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#9F2214").s().p("AgBAAQgBgEACAAIACAEIAAAFQgCgCgBgDg");
	this.shape_25.setTransform(852.4,71.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#9F2214").s().p("AgCgDQACAAACACQABACAAAEQgDgCgCgGg");
	this.shape_26.setTransform(825.1,96);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#9F2214").s().p("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");
	this.shape_27.setTransform(440,119.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#9F2214").s().p("AgCADQACgKAEgEQgBAHgFAPIgBABQgBAAACgJg");
	this.shape_28.setTransform(43.3,238.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#9F2214").s().p("Ag8BkQAYgnABgKIAMgQQAMgbALgUIAegvIA8heQgCAJgMAUIgWAgQgdAqgGAUIgfAzQgWAmgJAZIgEgCIgVAnQgOAZgHAIQADgIAagugAATgeIgBADIgBACIACgFgAATgeIAAgBIAAABIAAAAgAATgeIAAAAg");
	this.shape_29.setTransform(33.6,223.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#9F2214").s().p("AADgEQASgagVAeQgCAFADgEQABABgEAHIgIAIQAAgEANgRg");
	this.shape_30.setTransform(43.8,206.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#9F2214").s().p("AgBgCQAng4AKgQQABAEgLAPQgLAQABADQABACAHgIQAFgHABAFIgGAHIgGAIQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIAAgEQgLAQgPAWQABgDgBgCQgDAKgRAVQgVAdgKARQAKgZAlg0g");
	this.shape_31.setTransform(51.3,214);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#9F2214").s().p("AgCACQARgSAHgJIgKASQgGACgKALIgRAUQAEgKAPgOg");
	this.shape_32.setTransform(88.1,185.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#9F2214").s().p("AgBAAQADgJADgCQAAAJgJAOQgBgDAEgJg");
	this.shape_33.setTransform(46.5,243.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#9F2214").s().p("AgFAIIAJgQQAEgCgHALQgDAIgCAAIgBgBg");
	this.shape_34.setTransform(43,237.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#9F2214").s().p("AAAAAIAMgVQgGAQgRAbIALgWg");
	this.shape_35.setTransform(42.1,237.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#9F2214").s().p("AgIAKQADgFACgBIADABIADgHQACgFADgEQABAFgIAKQgEAIgDAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBgBAAg");
	this.shape_36.setTransform(37.4,218.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#9F2214").s().p("AgDAEIALgRIgOAbQgDAAAGgKg");
	this.shape_37.setTransform(43.5,214.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#9F2214").s().p("AAAABQAPgSAEgLQgEANgOASIgTAaQAEgKAOgSg");
	this.shape_38.setTransform(40.7,208.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#9F2214").s().p("AgBABIAHgMQABACgEAIIgIANQgBgCAFgJg");
	this.shape_39.setTransform(58.3,214.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#9F2214").s().p("AgBABIAOgVQgBAGgJANIgOAWQABgGAJgOg");
	this.shape_40.setTransform(44.4,202.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#9F2214").s().p("AgFAHIARgaQgDAKgSAcIgCABQgCAAAIgNg");
	this.shape_41.setTransform(46.8,202);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#9F2214").s().p("AAJgNQAAADgIAJIgKAPQAJgTAJgIg");
	this.shape_42.setTransform(57.8,210.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#9F2214").s().p("AgBAAQAFgJAEgCQgDAIgMAPQAAgDAGgJg");
	this.shape_43.setTransform(47.4,197.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#9F2214").s().p("AgjA0QAQgaAVgfIArg8QgHAPgVAfQgVAegOAPIgBAEIgEAHIgVAdIAJgOg");
	this.shape_44.setTransform(49.7,205.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#9F2214").s().p("AgFAFIAJgLQAFACgJAKIgCABQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBg");
	this.shape_45.setTransform(60.1,184.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#9F2214").s().p("AgYAXQAYgZACgFIASgPQAMgRAKgGQgHANggAfQgfAdgMASQgFAAAVgXg");
	this.shape_46.setTransform(82.7,161.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#9F2214").s().p("AABAAQAVgWAKgIIggAhQgVAXgKAFQAMgJAUgWg");
	this.shape_47.setTransform(96.4,164);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#9F2214").s().p("AgBABIAMgKQgDAFgGAFQgGAHgGACQAAgCAJgHg");
	this.shape_48.setTransform(98.6,133.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#9F2214").s().p("AgCAAQAJgHAEgCQAAADgIAGIgNAKQgBgDAJgHg");
	this.shape_49.setTransform(104.1,122.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#9F2214").s().p("AgKAIIAVgQQgPARgFAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_50.setTransform(107.7,120.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#9F2214").s().p("AgCAAQAFgFAGgBQgEAEgNAJQABgDAFgEg");
	this.shape_51.setTransform(156.9,125.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(24.6,6.7,866.8,238.4);


(lib.redlong1ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// red-long1.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9F2214").s().p("AqnPMQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBgBgBAAIgEgCQgHAAgNgBIgTgBQgCgDgIgCQgHgCgCgEIgPgGIgRgGQgWgGgIgFQgGgEgKgMQgKgLgIgEQgEgNgMgUQgPgagFgLQgFgBAAgEQAFgKgEgOQgGgSABgGIADgIIAEgHQABgHAAgJIAAgOQASgRAQghQAUgoAIgLIAGgEQAFgHANgNIASgVQACgKAMgJIAagRIATgPIASgOQALgLAGgEQAIgFAOgGIAXgKQADgBAGgGIAIgHQAIgEAMACQAOABAEgBQAPgNALgCIAKAKQAGAEAIAAQAJgCAKgWQAIgQAMAKQAPACAWgLIAmgUIAzgWIAYgNQANgIAKgBQAGgHALgEIAUgHQARgIAmgYQAhgWAWgHQAWgUAvgQQALgLAXgKQAagMAHgEIATgOQAKgJAHgEQAEgCAJgDIARgNQALgIAIgEIATgIQALgEAGgIQASgIAogdQApgeAXgKIAJgDQAJgFAegWQAWgRARgFQAbgTAUgNIATgNIACgBIAIgDQACgFAIgEIAOgGQAEgCADgFIAFgHIAKgDIABgEQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQAFgEABgEQABgFgDgEQgCgDgHgDIgKgEIAAgDQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAgBAAIgHgBQgFgCgFgEIgKgHIgWgMIgegQIgVgPIkhidQgpgXgggVQAAgEgFgGQgDgCgDABQgDABgDgCQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQhIgsgzgkQgBgBAAAAQgBgBAAAAQgBgBABAAQAAAAAAgBQAAAAAAgBQABAAgBgBQAAAAAAgBQAAAAgBgBIgpgZIgsgdIgjgYQAAgBgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgDAAQAAgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBgBIgKgGQgOgMgdgSQgfgTgMgKQgEgHgHgGQgDgCgKgEIgJgFQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIABgCQgCgDgMgIIgTgMQgXgXgOgLQAbAPAPgMQgEgIgUgPQgUgOgEgJQgjgWgUgQQg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");
	this.shape.setTransform(798.6,126.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9F2214").s().p("AgEgBQAKAAgBADIgJgDg");
	this.shape_1.setTransform(719.4,31.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9F2214").s().p("AAbAhQgNgQgJgCIgQgQQgMgNgJgEIADgEQgTgSgBgIQAEACAMAQQALANAFABIAEAIQAJAGAHAGIAPAQQAVAWALAHQgJAAgOgQg");
	this.shape_2.setTransform(733.9,22.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9F2214").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQgDACgCgHQACgBAGAGIADAEIgGgFg");
	this.shape_3.setTransform(739.6,27.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9F2214").s().p("AAKAWIgDgDQAAgBAAAAQABAAAAAAQABgBAAAAQABAAABAAIgOgNIADgBQgFgBgHgJQgIgMgIgGQALAFATAUIAbAZQgDABgGgFQgGgGgDACQAAAAAAAAQAAABAAAAQAAABABABQAAAAABABQAAABABABQAAABAAAAQAAABgBAAQAAABgBAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_4.setTransform(731.9,34.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9F2214").s().p("AADAHQAAgEgGgDIgJgIQAFABAHAHQAHAGAGADQgHgCgDAAg");
	this.shape_5.setTransform(739.7,56.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9F2214").s().p("AgEgDQACAAADADQAEACAAACQgFAAgEgHg");
	this.shape_6.setTransform(714.6,33.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9F2214").s().p("AAAABQgFgDAEgBIAFAGIgBABQgBAAAAAAQAAAAgBgBQAAAAgBgBQAAAAAAgBg");
	this.shape_7.setTransform(720.5,30.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9F2214").s().p("AgHgHIAIAHIAHAIQgGgDgJgMg");
	this.shape_8.setTransform(721,30.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9F2214").s().p("AgBACQgEgEAEgCQABACgBACQAAABAAAAQABAAAAAAQAAABAAAAQABAAAAAAIADADIgBAAQgDAAgBgDg");
	this.shape_9.setTransform(734.8,24.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9F2214").s().p("AgEgDQACAAACADIAFAEQgEAAgFgHg");
	this.shape_10.setTransform(734.7,27);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9F2214").s().p("AgFgCQACgDADAEIAGAFIgLgGg");
	this.shape_11.setTransform(734.8,28.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#9F2214").s().p("AgBABIgHgJQADABAFAHQAGAHAEACQgGgBgFgHg");
	this.shape_12.setTransform(739.8,25.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9F2214").s().p("AgFgCQACgBADADIAGADIgBAAQgDAAgHgFg");
	this.shape_13.setTransform(728.7,40.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#9F2214").s().p("AAAACIgHgGIAHAEIAIAFIgBAAQgDAAgEgDg");
	this.shape_14.setTransform(741.7,27.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#9F2214").s().p("AAAABIgHgEQABgEAGAFIAIAHIgIgEg");
	this.shape_15.setTransform(741.1,29.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#9F2214").s().p("AAAABIgFgFQAJADACAGIAAAAQgCAAgEgEg");
	this.shape_16.setTransform(731.8,39.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#9F2214").s().p("AgEgCQACAAADACIAEADQgEAAgFgFg");
	this.shape_17.setTransform(743.6,28.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#9F2214").s().p("AAFAKQgIgJgFgIQgEAAgCgCIgIgKQgEgFAIAIQAIAGAMAMQAOANAJAGQgKgCgKgJg");
	this.shape_18.setTransform(738.2,31.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#9F2214").s().p("AgDABQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBABAAIADADQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAAAAAIgDgCg");
	this.shape_19.setTransform(747.7,34.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#9F2214").s().p("AABADQgPgMgGgDQABgDAKAIQAKAHADAAIAGAHIAGADQAEABABADQgIgBgMgKg");
	this.shape_20.setTransform(756.5,44);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#9F2214").s().p("AgBACQgMgHgBgGQAEAGAKAGQALAGAEAEIgQgJg");
	this.shape_21.setTransform(752.5,55.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#9F2214").s().p("AgHgDQACgBAFADIAIAFIgCAAQgGAAgHgHg");
	this.shape_22.setTransform(772.7,37.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#9F2214").s().p("AAAACQgDgCgBgBQACgCAHAGIgBAAIgEgBg");
	this.shape_23.setTransform(771.6,43.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#9F2214").s().p("AABACIgFgDQACgCADACQADACABACIgBAAIgDgBg");
	this.shape_24.setTransform(778.1,41.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#9F2214").s().p("AgBACQgEgCACgDQAEADADAEQgDAAgCgCg");
	this.shape_25.setTransform(778.9,42.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#9F2214").s().p("AgEAAQACgCACABQAEABABACIgBAAQgDAAgFgCg");
	this.shape_26.setTransform(773.4,78.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#9F2214").s().p("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");
	this.shape_27.setTransform(429.7,115.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#9F2214").s().p("AgCAAQAIgFAFABQgFAEgOAFIgBAAQgCAAAJgFg");
	this.shape_28.setTransform(25.2,166.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#9F2214").s().p("AhkAfQAlgJAKgHIASgCQAggNA9gQQBGgUAbgJQgNAKgwAMQgxALgOALQgIABAGgCIgxANQgmALgVALIgBgEQg8ARgOAAQAKgEAsgLg");
	this.shape_29.setTransform(27.7,149.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#9F2214").s().p("AAEgBQAfgJgjAKQgHADAHgCQAAACgIACIgJABQACgDATgEg");
	this.shape_30.setTransform(45.4,143.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#9F2214").s().p("AABgCIBOgVQgCADgRAFQgRAFgBADQAAABAJgBQAJgCgDAEIgIABIgJADQgBgBAAAAQAAAAAAAAQABgBAAAAQAAAAABgBIABgCIgVAGIgUAGQADgDAAgCQgIAGgYAFQgfAFgTAHQAWgKA5gQg");
	this.shape_31.setTransform(46.2,154.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#9F2214").s().p("AgCAAQAWgDALgFIgRAIQgGAAgOADQgSAFgGAAQAJgEATgEg");
	this.shape_32.setTransform(90.2,154.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#9F2214").s().p("AAAgBQAIgCAEAAQgHAFgQADQACgDAJgDg");
	this.shape_33.setTransform(24.1,172.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#9F2214").s().p("AgIABIARgDQAEABgMADIgIABQgBAAAAAAQgBAAAAAAQAAgBAAAAQABAAAAgBg");
	this.shape_34.setTransform(25.9,165.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#9F2214").s().p("AABAAIAWgGQgNAGgfAHIAWgHg");
	this.shape_35.setTransform(25.5,164.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#9F2214").s().p("AgLAAQAGgBABADIAHgCQAEgCAFgBQgCADgMADIgGABQgFAAACgEg");
	this.shape_36.setTransform(33.8,148.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#9F2214").s().p("AgBAAIAPgDQgGADgVAEQABgBALgDg");
	this.shape_37.setTransform(37.1,149);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#9F2214").s().p("AgEAAIASgFIgaALQgCgDAKgDg");
	this.shape_38.setTransform(40.5,149.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#9F2214").s().p("AAAAAQAUgDAKgFQgKAHgUADIgdAHQAIgEAVgFg");
	this.shape_39.setTransform(42,143.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#9F2214").s().p("AgCAAIAOgFQAAADgIACIgPAGQABgDAIgDg");
	this.shape_40.setTransform(51,159.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#9F2214").s().p("AgBAAIAVgHQgDAEgOADIgWAIQAEgDAOgFg");
	this.shape_41.setTransform(47.8,141.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#9F2214").s().p("AgHABIAbgIQgEADgOAEIgTAHQgGgBAQgFg");
	this.shape_42.setTransform(49.9,142.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#9F2214").s().p("AAAAAQAIgDAEgBQgJAFgOADQABgCAKgCg");
	this.shape_43.setTransform(52.8,139.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#9F2214").s().p("Ag1ARQAXgJAkgJIBAgTQgOAIgfAJQgdAIgWADIgDADIgHACQgMAEgQADIgFABIAQgEg");
	this.shape_44.setTransform(50.1,146.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#9F2214").s().p("AgGAAIANgDQACAEgLADQgEgBAAgDg");
	this.shape_45.setTransform(69.1,137.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#9F2214").s().p("AgdAHQAegHAEgDIAVgDIAOgFQAIgEAGABQgNAHgmAHQgpAKgPAGQgDgDAbgGg");
	this.shape_46.setTransform(97.6,131.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#9F2214").s().p("AgnAJQAOgBAagIQAbgHAMgCIgpAMQgZAHgLAAIgCgBg");
	this.shape_47.setTransform(107.4,141.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#9F2214").s().p("AgDAAIAYgFQgLAGgeAFQADgDAOgDg");
	this.shape_48.setTransform(115.8,112.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#9F2214").s().p("AgLADQABgDAWgCQgDACgJABQgGACgEAAIgBAAg");
	this.shape_49.setTransform(122.5,116.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#9F2214").s().p("AgBAAQAJgDAEABQAAACgKAAIgNADQgBgCALgBg");
	this.shape_50.setTransform(131.4,109.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#9F2214").s().p("AgMABQAMgCANgBQgIACgHACIgGABQgBAAgBAAQgBAAAAAAQAAgBgBAAQAAgBAAAAg");
	this.shape_51.setTransform(135,109.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#9F2214").s().p("AgBAAQAGgDAFABQgGADgOACQACgCAHgBg");
	this.shape_52.setTransform(174.3,135.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.3,17.4,875,207);


(lib.nubluextralong2ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// nu-blue-xtralong2.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0071BC").s().p("AJUNqIgMgCIgvgDQgagCgTgGIgcABIgVgCIgPgDQgqgLgogPIgEADQgQgGgmgHQgogGgOgGQgEgBgCABIgEACQgRgHgfgDIglgMIgigHQgggFgNgGQgMADgQgDQgSgFgKgBIgGACIgIABIgGgCIgFgCIgLAAIgIgEIgIgDIgIAAIgIAAIgJgDIgHgDIgWACQgNABgJgIIglABQgRADgGgBIgLgDQgGgBgVACQgRADgLgFQgJACglgCQgegDgKAMQAAAPgLABQgDABgFgDIgKgFQgIgCgQgCQgTgBgIADIgIAFQgFAEgCAAQgGABgLgEQgLgFgGABQgFABgGAEIgHAEQgHABgJgGQgHgGgDgFIgEABIgEAAQgJgIgXgEQgTgDgVABIgNgBQgVgDgWgNIglgXIgEgIIgPgJQgKgGgGgDQgBgDgFgFQgFgFAAgFQgEgFgGgHIgMgMQgQgPgFgIQgEgFgDgPQgEgOgGgHQACgOgCgXQgEgfAAgKIgCgDQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAJgGABgPQACgTADgFQACgEAJgHQAEgGADgIIAFgNQAWgIAagXQAfgcAMgHIAIgBQAGgEARgHIAYgLQAFgIAOgCIAdgFQANgDAJgBQAIgBAOgEIAVgGQAKgBAOABIAYADIALgCIAKgDQAJABAKAGQALAIAEABQAUgEAJAEQADAFACAIQACAHAHADQAJADAUgOQAOgKAFAPQALAJAZACIArAEQASACAlAIIAbACQAPABAJAGQAJgDAMAEIAUAGQANADAyAFQAmAEAWAKQAcgCAuAUQAQAAAWAIQAbAKAHABIAWACIADAAIgBAAIACAAIACAAIADADIAEAAQADgBACABIAFAFQADADABgEQAFAFAKgBQAJgBAIAGIAEADIAGACIADgBQAEgBAKAIQAEAAAIACIASAGQAAgDACgDIADgEQACgFAAgEQAAgCgGgIIgIgLQgBAAAAgBQAAAAABAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAgBQgJgJgBgCIgFgPIgGgIIgHgHIACgCQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAIgGgEQgDgDgCgFIgEgKIgEgGIgMgWQgPgcgRgYQgHgTgQgaIgcgtIhHh+IgphDQgXgngNgfQACgDgBgHQgBgDgDAAQgEgBgBgDQAAgBgBAAQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAgBQgphYgOghQAAgBgBgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQgZg4gOgbQgGgNgIgXIgDgCQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABAAIABgDIgEgJQgGgPgOgcIgSgsQAAgGgDgJIgDgGIgEgEIgEgIQgBAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAIACgBQAAgEgGgLQgHgNgCgFQgGgegGgPQAPAYASgCQACgJgJgUQgJgVABgIIgYg4QgJgXgLgmQgCgFgDABQgGgcgLgkIgLghIgEgRIgDgSQAFAVAOApIA0CVIANAdQANArAUAuQAGALAIACQAIACAIgJQgBgNgJgRQgJgTgCgJIAGgHQADgCAFABQAGAKAVAyQAQAkAOAPQAAAEACAFIAFAJQAEACAIACIACgDQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQgHgRgGgmQgFgjgLgUIAJgVIgJgWQgHgOgFgJQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAIACgCIgWg0QgLgdgDgWQAGANAKAdQAKAcAGANQABACAJAEQADANALAcQAOAfAEANQAFACADgDQAEgDgDgIQAAABABAAQAAABABAAQAAAAAAABQAAAAABABIABAFQABAAAAAAQABAAAAgBQAAAAAAgBQABgBAAgBIAOAgQAAAAAAABQABAAAAAAQABAAABABQAAAAABgBQAEAAAAgDQgDgHgDgLIgGgRQgBgEgEgEIgFgIIAAgDIgBgEIgDgFIgEgFQAAgGgBgEQgCgIgIgNQgJgOgCgIQgBgEgBgOQAAgMgEgHQAGACACAHIADANQAFAOAQAdQAQAaAEANQAFAAACgDIAEgHIgKgTQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAAAAAQgBAAAAgBQgQgggHgVQABgBABgEQACgDAEABIgBgGQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAAAAAAAIgEACQADgDgDgFQgCgFABgDQgHgKgHgXQgIgYgJgMQAOAQASAvQAAABAAAAQAAABABAAQAAAAAAAAQABAAAAAAQABAAAAgBQAAAAABAAQAAAAAAAAQABABAAAAQACADAAAHIABAJQACAIAJAIIAGAMQADAIADAEIAIAJQAFAGAAAFIAGACQADAAACADQACAAACgEQAAAAABgBQAAgBABAAQAAAAABAAQAAAAABABQABAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQgBAAAAAAQAAAAgBABQAAAAAAAAQAAABAAAAQACADAIADQABANAOAWQAAABAAAAQABAAAAAAQAAgBAAAAQAAgBABgBQAAAAAAgBQAAgBABAAQAAAAABAAQAAAAABABQgBAFAFAIQAGAIAEABQACAHAGALQAFAKACAJQAAABABAAQAAABAAAAQABAAAAAAQABgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAQAAAAABAAQAIAIAFARQAFACAFAHQAFAHACAHQADgCAAgEIgDgIQAFABAAARIAeAjQATAXALASQABACAEACQAEACgBADQAAABAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBIAVAlQAOAZALAEQAAABAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAEACAFAJQAFAIAFAAIAOAcQAHAQAJAGQADALgBACQASAPAAAQQAnA5BDB0QBHB6AjA2QAGARASAdIAoBBIAJAWQAGANAIAHQAQAgAiBHIAaAzIAYAtQAEAYAPAnIAaBCIAFAQIAAACIAAAFQgBAMABAGIADARQABALgDAUQgCAUABALQADAagBAHQgDAMgFAMQgHARgMAOQgIAJgSAOIgWAOQgDACgJACIgPADIgGAEIgGAEQgHACgXAFQgWAEgJAEQgEABgLABIgGABIgDAAgABBpZQACAGADgEQACgDgFgBQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAgAAup8QAAAGAGALIAKARIAEgEQACgCADABQAAgGgEgGQgEgGgBgHQgEgBgBgDIgDgHQgEABgFgHQgFgHgEACQAEALgCAJQACABADgCIADgBIAAAAg");
	this.shape.setTransform(1274,231.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0071BC").s().p("AgDgDQAIAEgCADIgGgHg");
	this.shape_1.setTransform(1249.2,142.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0071BC").s().p("AAHAnQgDgTgGgGIgEgUQgEgPgGgJIAEgBIgDgPQgBgKACgEQABAEACARQACAPAFAEIgBAHQAFAMAGAYQAGAbAFALQgHgEgDgSgAgCAOIAAAAIAAABIAAgBgAgCAOIAAAAg");
	this.shape_2.setTransform(1266,141.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0071BC").s().p("AAAAAQAAAAAAAAQAAgBAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAgBIAAgEQACAAACAHIABAGIgDgHg");
	this.shape_3.setTransform(1268,148.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0071BC").s().p("AAGAZQgCgHgDAAQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAABQAAADgCAAIAAgEIgBgEQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAABIgFgSIAEABQgEgDgBgKQAAgNgEgIQAHAIAFAYIAJAhQgDAAgCgIg");
	this.shape_4.setTransform(1257.9,150.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0071BC").s().p("AAAAHQAAgDgCgGQgDgHAAgDQAEADABAJQADAIADAFg");
	this.shape_5.setTransform(1252.7,171.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0071BC").s().p("AgBgEQABAAABAEQACAEgBABQgDgCAAgHg");
	this.shape_6.setTransform(1243.8,142.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0071BC").s().p("AgBAAQgBgEACABIACAHIgBAAQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAgBgBgBg");
	this.shape_7.setTransform(1250.3,142.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0071BC").s().p("AgBgJQABADABAHQACAGgBADQgCgGgBgNg");
	this.shape_8.setTransform(1251,142.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0071BC").s().p("AgBAAQgBgEAEAAQAAABAAAAQAAAAAAABQgBAAAAABQgBAAAAABIABACQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQgCAAgBgFg");
	this.shape_9.setTransform(1265.4,144.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0071BC").s().p("AgCgEQACgBABAEIACAGQgCgBgDgIg");
	this.shape_10.setTransform(1263.3,147.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0071BC").s().p("AgCAAIgBgLQADADAAAIQAAAIADAEQgDgEgCgIg");
	this.shape_11.setTransform(1269.2,147.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0071BC").s().p("AAAACIgDgGQADAAABAEIADAFIgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAgBAAAAg");
	this.shape_12.setTransform(1252.2,153.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0071BC").s().p("AAAACIgDgJQADADAEAMQgDgBgBgFg");
	this.shape_13.setTransform(1270,149.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0071BC").s().p("AAAABIgDgHQACgDACAHIADAJQgCgBgCgFg");
	this.shape_14.setTransform(1268.5,150.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0071BC").s().p("AAAABIgBgHQAFAHgCAGQgCgBAAgFg");
	this.shape_15.setTransform(1255.5,154.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0071BC").s().p("AgCgDQACAAABADQACACgBADQgCgDgCgFg");
	this.shape_16.setTransform(1270.9,151.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0071BC").s().p("AAAALQgDgLABgKIgDgBIgBgCQgCgFAAgHQAAgBAAgBQAAAAAAAAQAAABABABQAAACABACQAEAJADAPQAEAQAEAJQgGgFgDgMg");
	this.shape_17.setTransform(1264.7,151.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0071BC").s().p("AgCAAQACgBABgBIACAFIgCAAQgCAAgBgDg");
	this.shape_18.setTransform(1271,157.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0071BC").s().p("AAAABQgEgPgFgFQADgCAEAKQADALADABIABAJIAEAEQACADgBADQgGgEgEgPg");
	this.shape_19.setTransform(1273.3,169.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0071BC").s().p("AgBAAQgGgKACgFQAAAGAFAKQAGAKAAAFIgHgQg");
	this.shape_20.setTransform(1264,176.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0071BC").s().p("AgEgGQADAAACAFIAEAIQgGgDgDgKg");
	this.shape_21.setTransform(1290.2,171.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0071BC").s().p("AAAABQgCgCABgCQACgBACAIIgDgDg");
	this.shape_22.setTransform(1286.3,175.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0071BC").s().p("AAAABIgCgEQACgBABAEQACACgBACIAAAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_23.setTransform(1292.5,177);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0071BC").s().p("AAAgEIADAJQgJgHAGgCg");
	this.shape_24.setTransform(1292.4,178.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0071BC").s().p("AgCgCQABgBAAAAQABABAAAAQAAAAAAAAQABABAAABQACABAAADQgDgBgCgFg");
	this.shape_25.setTransform(1268.1,204.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0071BC").s().p("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");
	this.shape_26.setTransform(661.7,128.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0071BC").s().p("AgEACQAKgLAHgDIgMAMIgLAMIgBABQgCAAAJgLg");
	this.shape_27.setTransform(44,190);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0071BC").s().p("AixCAIAmgfIAkgdQAQgNAJgJIAZgQQAvgoBQg2ICHhaQgLAMgZASIgwAeIgyAgQgaATgLANQgLAHALgJQhmBGgtAuIgDgFIgzApIgZAUIgUAPQAJgLAWgQg");
	this.shape_28.setTransform(44,170.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0071BC").s().p("AAGgEQArgZgxAeQgJAGAJgFQAAACgLAGQgKAGgEABQADgFAcgQg");
	this.shape_29.setTransform(68,153.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0071BC").s().p("AAAgEIBvhCQgDADgYAQQgYAOgBAFQAAABAOgHQALgGgDAFIgLAHIgOAHQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAgBIADgDQgZAOgiAVQAFgFgBgBQgMALghATQgrAYgbATQAlgdBJgug");
	this.shape_30.setTransform(70.8,163.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0071BC").s().p("AgEABQAigOAQgJIgNAJQgJAFgDADQgJABgVAKIgkARQANgJAcgNg");
	this.shape_31.setTransform(135.4,141.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0071BC").s().p("AgBAAQALgKAEgCQgGAJgVAQQAAgEAMgJg");
	this.shape_32.setTransform(44,196.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0071BC").s().p("AgLAHIAWgPQAGgBgQALQgKAHgCAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_33.setTransform(44.6,188.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0071BC").s().p("AABgBQATgPAJgFQgRAQgoAbQAJgIAUgPg");
	this.shape_34.setTransform(43.8,187.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0071BC").s().p("AgQAJQAGgFADAAIACACIAKgIIAMgJQgDAGgQAKQgKAHgDAAQgBAAAAAAQAAAAAAgBQgBAAABgBQAAAAAAgBg");
	this.shape_35.setTransform(51.9,165.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0071BC").s().p("AgCABIAVgNQgGAGgKAGIgVANQABgDAPgJg");
	this.shape_36.setTransform(56.8,163.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0071BC").s().p("AgHADIAagQIgkAbQgEgBAOgKg");
	this.shape_37.setTransform(61.7,162.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0071BC").s().p("AgBAAIAWgMQANgIAIgGQgLALgfASIgpAYQAMgKAcgRg");
	this.shape_38.setTransform(63,154.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0071BC").s().p("AgBAAIAxgeQgJAIgjAVIgzAgQAUgPAagQg");
	this.shape_39.setTransform(71.6,167);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0071BC").s().p("AgDABIATgMQAAADgLAHIgUANQAAgDAMgIg");
	this.shape_40.setTransform(78.4,166.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0071BC").s().p("AgCABIAfgUQgEAGgUAMIghAVQAGgGAUgNg");
	this.shape_41.setTransform(71.2,149.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0071BC").s().p("AAcgSQgLAKgqAaIgBABQgHAAA9glg");
	this.shape_42.setTransform(74.5,149.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0071BC").s().p("AgBAAQAOgKAJgDQgEAGgnAVQAIgHAMgHg");
	this.shape_43.setTransform(81,161.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0071BC").s().p("AAAAAIARgKQgIAHgaAOQACgDAPgIg");
	this.shape_44.setTransform(78.4,144.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0071BC").s().p("AgoAZQAkgZAwgdIBdg2QgZAUgoAWQgsAagdAPIgGAFIgIAGIh5BJIBgg7g");
	this.shape_45.setTransform(71.7,155.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0071BC").s().p("AgKAEIAUgJQAFAEgSAHIgDAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_46.setTransform(102.5,133.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0071BC").s().p("AgtATQAtgVAGgEIAhgLQAIgDANgIQAMgGALgCQgYAOg3AWQg5AXgcAOQADgEAhgOg");
	this.shape_47.setTransform(145.6,115.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0071BC").s().p("AABAAQApgSATgGIg/AbQgrATgPADQAUgHApgSg");
	this.shape_48.setTransform(160.8,121.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0071BC").s().p("AgEABIAlgOQgSAMgvAPQAGgFAWgIg");
	this.shape_49.setTransform(173.1,88.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0071BC").s().p("AATgHQgGAEgMAEQgMAGgHABQACgEAjgLg");
	this.shape_50.setTransform(183.4,89.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0071BC").s().p("AgCAAQAOgFAHgCQgBADgPAEIgVAHQgBgCARgFg");
	this.shape_51.setTransform(197.3,79.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#0071BC").s().p("AgTAFIAngLQgeANgHAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBg");
	this.shape_52.setTransform(203,78.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0071BC").s().p("AgDAAQALgEAIgBQgHAFgYAGQABgDALgDg");
	this.shape_53.setTransform(264.2,93.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(23,7.4,1330.7,311.8);


(lib.nublueshort1ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// nu-blue-short1.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0071BC").s().p("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");
	this.shape.setTransform(399.2,98);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0071BC").s().p("AgEgDQAKADgBAEIgJgHg");
	this.shape_1.setTransform(355.3,25.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0071BC").s().p("AAVAmQgJgSgKgDIgBgBIAAgBIABABIgMgUQgKgPgJgHIAEgCQgPgYAAgHQAEADAJATQAIAQAGACIACAIQALALAOAXQAQAaALALQgJgCgLgUg");
	this.shape_2.setTransform(371.3,19.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0071BC").s().p("AAAAAQgEgGAEAHQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAAAgBgBIgBgEQACAAAEAHIADAEIgFgGg");
	this.shape_3.setTransform(375.9,26.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0071BC").s().p("AAQAZQgFgGgDAAQgCABACAEQABABAAABQAAABAAAAQAAABgBAAQAAAAgBAAIgCgDQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAAAABgBQAAAAAAAAQABAAABAAQAAAAABAAIgLgRIAEAAQgGgCgEgKQgGgPgHgHQAKAHAPAYQASAcAEADIgBABQgCAAgFgHg");
	this.shape_4.setTransform(367,31.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0071BC").s().p("AABAIQABgEgEgFQgHgHgBgDQAGADAEAHQAGAJAFAEQgHgEgDAAg");
	this.shape_5.setTransform(370.2,54.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0071BC").s().p("AgEgEQADAAADAEQACADAAACQgEgBgEgIg");
	this.shape_6.setTransform(350.1,27.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0071BC").s().p("AAAABQgEgFAEABIADAGIgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_7.setTransform(356.5,25.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0071BC").s().p("AgFgJQADADADAGIAFAKQgFgFgGgOg");
	this.shape_8.setTransform(357.1,25.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0071BC").s().p("AgBABQgDgFAEgBQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAAAIgBACIACACQAAAAABABQAAAAAAAAQABABAAAAQAAABABAAIgBABQgDAAgBgFg");
	this.shape_9.setTransform(371.7,22.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0071BC").s().p("AgEgDQACgCACAEIAFAGIgJgIg");
	this.shape_10.setTransform(370.9,26.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0071BC").s().p("AgBABIgGgLQADACAEAIQAEAIAEADQgGgCgDgIg");
	this.shape_11.setTransform(376.5,24.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0071BC").s().p("AAAACIgFgFQADgBACADIAGAFIgCAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBgBAAg");
	this.shape_12.setTransform(362.8,36.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0071BC").s().p("AAAACIgGgIQADABADAFIAHAHQgDAAgEgFg");
	this.shape_13.setTransform(378.1,26.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0071BC").s().p("AAAABIgGgFQABgEAFAGIAHAJQgDgBgEgFg");
	this.shape_14.setTransform(377.2,28.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0071BC").s().p("AAAACIgEgHQAIAFABAGQgCAAgDgEg");
	this.shape_15.setTransform(366.1,36.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0071BC").s().p("AgDgDQACAAACADQADACAAACQgEgBgDgGg");
	this.shape_16.setTransform(379.8,28.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0071BC").s().p("AAEAMQgIgMgDgJQgDAAgCgDIgHgLQgBgCAAAAQAAgBABABQAAAAABACQABABACADQAHAHAKAPQAMARAHAHQgIgEgJgLg");
	this.shape_17.setTransform(373.8,30.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0071BC").s().p("AgCABIACgDIADAEIgDABQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAgBAAAAg");
	this.shape_18.setTransform(382.6,35.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0071BC").s().p("AAAACQgLgPgGgEQACgDAIAKQAIAKADAAIAFAJIAFADQADADABADQgIgCgKgOg");
	this.shape_19.setTransform(389.4,46.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0071BC").s().p("AgBAAQgKgIAAgGQADAGAIAIQAKAKACAFIgNgPg");
	this.shape_20.setTransform(383.1,56.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0071BC").s().p("AgHgFQADAAAEAEIAIAHQgHgBgIgKg");
	this.shape_21.setTransform(406.9,44.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0071BC").s().p("AAAABQgDgBAAgDQACgBAFAIIgEgDg");
	this.shape_22.setTransform(404.7,49.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0071BC").s().p("AAAABIgDgEQACgBACADQADADAAACIAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBgBgBg");
	this.shape_23.setTransform(411.5,49.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0071BC").s().p("AgBABQgEgCAEgCIAFAIQgDgBgCgDg");
	this.shape_24.setTransform(411.9,51.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0071BC").s().p("AgDgCQACgBACACQADABAAADQgDgBgEgEg");
	this.shape_25.setTransform(398,85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0071BC").s().p("AZ/FwIgigFQgNgBgNgCQgJgCgRgBQgRgBgIgBQgLgCgPgGIgagKQgRAAgHgCQgKgCgJgJQgLgLgEgCIgRgBQgJgCgGgEIgCgOQgCgIgHgFQgJgEgZAIQgSAGgCgQQgLgLgcgIIgugMQgogOgUgFIgdgGQgRgEgJgGQgLABgNgEIgWgJQgSgFg0gJQgsgHgYgJQghAAg1gUQgSAAgbgIQgggJgJgCIgagCQgQgBgJgCIgPgFIgYgBQgQgBgJgDIgXgHQgNgEgLACQgUgGg5gGIgqgFQgcgEgPgEIgKgEQgKgCgrgDQgfgDgSgIQhDgFhCgNQgYABgigFIg4gJQgPgCgdgBQgfgBgOgBQgTgGgLgBQgIgBgPABIgXAAIhSgJQgNgBgZAAIgngBIgNgCIgOgDIgSABQgTAAghgDIg4gEQh1gGgjAAQgUgDgqgBIhCAAIiygEIgxAAIgwABQg1ABgqgEQgDgEgIgCQgDAAgDACQgCADgEgBQgBABgBAAQAAgBgBAAQgBAAAAAAQAAgBAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIhRgEIhPgDQgBAAgBAAQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAgBgBAAQhJgCgkABIgugCQgBAAAAABQgBAAAAAAQAAAAgBAAQAAABAAAAIgCABIgEgCQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAgBgBAAIgMAAQgUgBgjADIg3ACIgIgDIgKgBIgOADIgLABQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAIAAgCQgEgCgPACIgXACIgagCQgQgCgLACQAggJAFgRQgKgEgZACQgbADgJgEQg6ALhVACQgGAAABAEQgWgBgQACIglAFQg4AIgWABIBIgLIBIgJQBYgHA3gJIAzgBIA8gDQAPgBAGgHQAGgHgIgKQgOgEgXACQgaADgJgBQgFgFgBgCQgCgEAEgFQAVgDA5gDQAwgCAXgHQAEACAHgBIAMgBIALgKQgGgDAAgEQgVABgugIQgqgIgcADQgLgJgKgGQgoADgVAEQAAABgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgCgDIhFAJQglADgcgDQASgCAmgDQAkgCARgDQADgBADgDIAEgEQAPABAngDQAegDAdAAQAEgEgBgFQgCgFgKABQACgCADAAIAHAAQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAIArgCQADgBAAgDQAAgBABAAQAAgBgBgBQAAAAAAgBQgBAAAAgBQgKABgOgBIgXgBIgMACIgLADIgFgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAIgIACIgHACIgGgBIgGgBQgKAAgUAEQgTAFgKAAIgXgDQgOgDgKACQAEgFAJAAIASAAIA7gJIAdgGIAagCQACgEgDgDIgGgGQgSABgJACQgBABAAAAQgBAAAAABQAAAAAAAAQAAABABAAQAAAAAAABQABAAAAAAQAAABgBAAQAAAAgBAAIgjAEIgmAFIgGgFQgDgCADgEIgHgBQgBAAgBABQgBAAAAAAQAAAAAAAAQgBAAABAAQAAABABABQAAAAAAABQABAAAAABQAAAAgBAAQgDgDgHABQgHACgDgCQgPAFgfABQgfACgTAGQAXgJBCgHQABAAAAAAQABgBABAAQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAFgBAIACIANABQAGgBAGgCIALgEIARgCQAMgBAFgBIAPgGQAIgDAIABIADgFQACgDAFgBQABgBgEgEQgBAAgBgBQAAAAAAgBQAAAAAAgBQABgBABAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQAAABAAAAQAAABABAAQAAAAAAAAQABAAAAAAQAEAAADgDIAGgEQAPADAhgFQABAAAAAAQAAgBAAAAQAAAAAAgBQgBAAgBgBQgBAAAAAAQgBgBAAAAQAAgBABAAQAAgBABAAQAFACANgCQAMgCAEgEQAJACAPgCQAQgCALABQAEAAgBgDQgBAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQAIgDAKAAIASAAQAPgJAWADQAAgEgFgBIgMgBQAFgGATAIIA6gNQAkgIAcgBQADAAAFgDQAFgDADACQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIA3gCQAlgCAKgIQABAAABAAQAAABAAAAQABAAAAAAQAAABgBAAQAAAAgBABQAAAAAAABQAAAAAAABQAAAAABABQAEgDAOgBQALAAAEgFIAnACQAXABANgFIAJACQAFAAACACQAcgHARAGQAqgCBWgCIGGAFQAZAFApAAIA/gCIATADQAKABAIgDIBXAGQA1AEAdgDQAWAFAiACIA6ABIAXADQANADAIAAIATgCQALABAbAFQAYAFANAAIAVgBQAMgBAIABIBIAKQAvAFAfAAQAHAAAMADQANADAGAAQAHAAANgCQAKAAAdAFQAaAEANAAQAMABAaAGIAoADQAXABANAFQAVgCAgAGQAfAEAbAJIAFgDQANAFAbABQAbABAMAEQAFABADgEQAMAFAXgBQAYAHAqAGQAoAFAVAIQAPgDAWAEIAmAHQADAAAIgBIAKgBQAGAAAKAFQACABAFAAIAHAAQAEABAIADIALAEQAEABAHAAIALAAIAMAEIALAFQADABAbAAQATABAMAKIAZACIAbADIAQABIAPABQAGABAKAFQAIACAeACQAYACAOAHQAOAAAyANQApALAQgIQABgHAFgEQAFgDAGABQAFAAAGAFIAMAHQAOAGASAGQAYAGAMABIAMgDQAHgCAEABQAHABAOAIQANAJAJABQAGABAJgCIALgBQAJADAKAJQAIAHACAGQACACADAAIAGABQAQAVBIAUIAQAGQAWAJAbAYQAHAHAfAfQgBADADAGIAQAQIAQAPQAAADAFAIQAEAGgCAFQAEALANAVIAKAPQAFAJACAGQADAHgBAQQgBAOADAJQgGALgHAXQgHAdgFALIABAEQABABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgMADgIANQgJAQgFAEQgCACgHABIgJACQgGAEgHAGIgKAKQgcgBglAKQguAOgOABQgGgCgDABQgHABgVgBQgUAAgLACQgGAEgLAAIgIgBgA5Xj8QAAAAABgBQAAAAAAgBQABAAAAgBQgBgBAAgBQAAgBAAAAQgBgBAAgBQAAAAABAAQAAgBAAAAQAHADAPgCIAZgEQAAgDgCgCQgBgDABgDQgGgBgJACQgKACgJgCQgDADgDABIgKAAQAAAEgMACQgKADAAAFIADAAQAMAAALAEgA4lkNQAAABABAAQAAAAAAAAQAAABABAAQAAAAAAABQAIAAgEgEIgDgBQAAAAgBAAQAAAAgBABQAAAAgBAAQAAABAAAAg");
	this.shape_26.setTransform(212.4,86.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0071BC").s().p("AgBAAQAEgEACACQgCACgHADQgBAAAEgDg");
	this.shape_27.setTransform(11.9,84);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0071BC").s().p("AgoAIQgfAEgHgDQAFgCAWgBQAUgBAEgFIAJACQAQgFAfgCQAjgCAPgEQgGAGgZABQgZAAgHAHQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAABAAIABgBIgaADQgTADgLAFg");
	this.shape_28.setTransform(13.7,67.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0071BC").s().p("AgJABQACgBAJgBQARgBgTACIgBAAIABAAQAAABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgFgBg");
	this.shape_29.setTransform(22.7,66.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0071BC").s().p("AAUAGIABgEIgVADIACgEQgEAEgMgBQgPgBgKACQALgFAdgCIAngEQgBACgIACQgJABgBACQAAAAABABQAAAAAAAAQABABABAAQABAAABAAQAEAAgBAEQgEgCgFABg");
	this.shape_30.setTransform(22.6,76.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0071BC").s().p("AgDABQgJABgCgBQAEgCAJABQALAAAFgCIgEACIgEADQgDgDgHABg");
	this.shape_31.setTransform(44.2,86.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0071BC").s().p("AgFACQABgCAEAAQAEgBACABQgDACgFAAIgDAAg");
	this.shape_32.setTransform(11.2,89.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0071BC").s().p("AgEAAIAIgBQADACgHABIAAAAQgCAAAAAAQgBgBgBAAQAAAAAAgBQAAAAAAAAg");
	this.shape_33.setTransform(12.3,82.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0071BC").s().p("AgKABQADgBAIAAIAKgBQgHADgJAAIgFgBg");
	this.shape_34.setTransform(12,82.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0071BC").s().p("AgFgBQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABIABABIADgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQgBACgFAAIgBAAQgFAAABgDg");
	this.shape_35.setTransform(16.7,68);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0071BC").s().p("AAAAAIAHAAQgDABgKAAQAAgBAGAAg");
	this.shape_36.setTransform(18.4,69.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0071BC").s().p("AgCAAIAJgBQgBABgMACQgBgCAFAAg");
	this.shape_37.setTransform(20,70.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0071BC").s().p("AgOACQAEgCAKAAQALAAAEgBQgFADgKAAIgOAAg");
	this.shape_38.setTransform(21,64.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0071BC").s().p("AAAAAIAGgCQAAACgFABIgGACQABgCAEgBg");
	this.shape_39.setTransform(24.8,82.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0071BC").s().p("AAAAAIALgCQgCACgHABIgMACQADgCAHgBg");
	this.shape_40.setTransform(24,64.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0071BC").s().p("AgDAAIANgCQgCACgHAAIgJADQgDgDAIAAg");
	this.shape_41.setTransform(25,65.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0071BC").s().p("AAIAAQgBABgGAAIgIABQAJgFAGADg");
	this.shape_42.setTransform(26,79.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0071BC").s().p("AAAAAQAEgBACABQgDACgIAAQAAgCAFAAg");
	this.shape_43.setTransform(26.6,63.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0071BC").s().p("AgbADQALgDATgBIAhgDQgIAEgQABQgOACgLgCQgBADgEAAIgOABQgIgBANgBg");
	this.shape_44.setTransform(24.9,69.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0071BC").s().p("AgDgBIAGgBQABAEgFABQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBAAAAgBg");
	this.shape_45.setTransform(34.8,65.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0071BC").s().p("AgOAAQAOAAADgDIAKADIAIgCQAEgCADACQgHADgTAAQgVAAgIADQgBgDAOgBg");
	this.shape_46.setTransform(49.2,65.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0071BC").s().p("AgTAAQAGABANgBQAOgBAGABIgUABIgIABQgIAAgDgCg");
	this.shape_47.setTransform(53.4,77);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0071BC").s().p("AgKACQACgCAIAAIALgBQgFADgLAAIgFAAg");
	this.shape_48.setTransform(59.5,50.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0071BC").s().p("AgGAAQABgCAMACIgHABIgBABIgFgCg");
	this.shape_49.setTransform(62.5,55.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0071BC").s().p("AgGABQABgBAFAAQAFgBACABQgBACgFgBIgHAAg");
	this.shape_50.setTransform(67.5,50.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0071BC").s().p("AgFgBQAFAAAHABQgEABgDABIgCAAQgEAAABgDg");
	this.shape_51.setTransform(69.2,51.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#0071BC").s().p("AAAAAQADgBACABQgCACgHAAQABgCADAAg");
	this.shape_52.setTransform(86.3,84.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.8,13.9,495.8,155.1);


(lib.nubluelong2ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// nu-blue-long2.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0071BC").s().p("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AAAAQAAAAgBAAQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBAAAAAAQACgDgDgGQgDgGABgDQgKgNgJgbQgIgdgLgOQAKANAKAVIASAqQAAAAABABQAAAAABABQAAAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAABQAAAAABAAQACAEAAAIIACAMQAEAJAKAJIAGAPIAHAOIAJALQAHAGAAAHIAGACQADABADAEQACAAACgFQAAgBAAgBQABAAAAAAQABgBAAABQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAAAAAQAAABAAAAQAAAAAAABQACADAEACIAFADQADAOAPAbQABABAAAAQABAAAAAAQAAAAAAgBQAAgBABgBQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAABAAQgBAGAGAKQAHAKAFACQACAIAHAMQAHAMACAKQABABAAABQABAAAAAAQABABABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQAAAAABAAQAFAGAEAIIAHAPQAOALAFARQADgBgBgFIgDgKQAEABACAIIABAMQAJALAaAgQAWAbANAVQABADAGADQADACAAAEQAAABAAAAQABAAAAAAQAAAAAAAAQABAAAAAAIABgBIAYArQARAeANAFQAAABAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAgBABQAFACAGALQAGAJAFABIARAhQAJATAKAIQAFAMgBADQAUATABARQA1BRBICAICrFEIAIAUIAGAVIAPArIAiBSIAAACIgBARQgCAKAFAJIABA/IgBAUQgCAUgEARQgEAKgEAKQgFAKgIAJQgJAHgPAIIgkAQIgHACQgOAEgMACQgfADgNAEIgPAHQgIACgKABIgEAAgAF7oTQACAGACgEQADgEgGgBQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAgAFko9QABAHAGAMIAMAVQADgBACgDQAAgBABAAQAAAAABgBQAAAAABAAQABAAABAAQgBgGgFgHQgEgIgDgIQgGgCgDgLQgDABgHgJQgFgIgEACQAEALAAANQABACAEgDIADgBIAAAAg");
	this.shape.setTransform(679.4,124.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0071BC").s().p("AgDgEQAJAFgDAEIgGgJg");
	this.shape_1.setTransform(683,36);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0071BC").s().p("AAIAuQgDgWgHgHIgBgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAIAAABIgGgXQgEgSgHgKIAFgBQgHgdACgHQADAFACAUQADATAFAEIgBAJQAJAWAFAVQAHAfAGAOQgIgFgEgWg");
	this.shape_2.setTransform(700,35.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0071BC").s().p("AAAAAQAAgBAAAAQAAgBAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBAAgBIAAgEQACAAACAJIABAIIgDgJg");
	this.shape_3.setTransform(702.4,44.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0071BC").s().p("AAHAeQgDgIgDAAQgBAAAAAFQABAEgCgBIgBgEQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBgBAAQABgBAAAAQAAAAABAAQABAAAAABQAAAAAAAAIgCgLIgDgJQAAAAABAAQAAABABAAQAAAAABAAQAAAAAAAAQgEgDgBgNQgBgQgEgJQAHAKAHAdQAIAgADAGQgCAAgEgJg");
	this.shape_4.setTransform(692.3,46.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0071BC").s().p("AAAAIQAAgEgCgGQgEgJAAgDQAFAEABAJQADALAEAFQgFgGgCgBg");
	this.shape_5.setTransform(688.7,70.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0071BC").s().p("AgCgFQACAAABAFQACAEgBACQgEgDAAgIg");
	this.shape_6.setTransform(677.5,35.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0071BC").s().p("AgBABQgBgGACABIACAJIgBAAQgBAAgBgEg");
	this.shape_7.setTransform(684.1,36.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0071BC").s().p("AgCgLIADALQACAJAAADQgDgHgCgQg");
	this.shape_8.setTransform(684.8,36);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0071BC").s().p("AgBAAQgBgFAEAAQAAABAAAAQAAABAAABQgBAAAAAAQgBABAAAAIABADQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQgCgBgBgFg");
	this.shape_9.setTransform(699.5,38.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0071BC").s().p("AAAABIgBgGQABAAAAAEIACAHQgCgCAAgDg");
	this.shape_10.setTransform(698.5,40.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0071BC").s().p("AgCgFQACgCABAFIACAIIgFgLg");
	this.shape_11.setTransform(697.6,42.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0071BC").s().p("AgBAAIgCgNQADAEAAAJQACAKACAEQgEgFgBgJg");
	this.shape_12.setTransform(703.5,42.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0071BC").s().p("AAAACIgDgHQACAAACAFIADAGIAAAAQgDAAgBgEg");
	this.shape_13.setTransform(686.7,49.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0071BC").s().p("AgEgIQADACABAGIAFAJQgEgBgFgQg");
	this.shape_14.setTransform(704.4,44.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0071BC").s().p("AAAABIgEgIQACgDACAHIAFAMQgCgCgDgGg");
	this.shape_15.setTransform(703,46.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0071BC").s().p("AAAABIgCgIQAGAIgBAHQgCgBgBgGgAgCgHIAAAAIAAAAg");
	this.shape_16.setTransform(690.1,50.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0071BC").s().p("AgCgEQACAAABAEQACADAAACQgDgCgCgHg");
	this.shape_17.setTransform(705.6,47.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0071BC").s().p("AAAANQgEgOAAgKQgDgBgBgEIgDgNQgBgHADAMQAFAKAFARIALAeQgHgGgFgOg");
	this.shape_18.setTransform(699.2,46.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0071BC").s().p("AgCAAQABgCACAAIACAEIgDABQgBAAgBgDg");
	this.shape_19.setTransform(706.1,55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0071BC").s().p("AAAACQgGgTgFgGQACgCAFAMQAGANACABIACAKIAFAGQACADgBAEQgGgFgGgRg");
	this.shape_20.setTransform(709.6,68.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0071BC").s().p("AgCAAQgGgMABgGQABAHAGALQAHANABAGIgKgTg");
	this.shape_21.setTransform(700.7,76);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0071BC").s().p("AgEgHQACAAADAGIAEAJQgFgDgEgMg");
	this.shape_22.setTransform(727.2,71.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0071BC").s().p("AAAABQgCgCAAgDQACAAADAJIgDgEg");
	this.shape_23.setTransform(723.5,76);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0071BC").s().p("AAAABIgCgFQACgBACAFQACADgBACIgBAAQAAAAAAAAQgBAAAAgBQAAAAgBgBQAAgBAAgBg");
	this.shape_24.setTransform(730.1,78.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0071BC").s().p("AAAgFQACAFABAFQgKgHAHgDg");
	this.shape_25.setTransform(730.2,79.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0071BC").s().p("AgDgDQADAAABADQADABgBADQgDgBgDgGg");
	this.shape_26.setTransform(707.6,109);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0071BC").s().p("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");
	this.shape_27.setTransform(375.8,77.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0071BC").s().p("AgCABQAEgHAEgBQgCAFgIAKIgBAAQgBAAAEgHg");
	this.shape_28.setTransform(36.6,146.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0071BC").s().p("AhIA9QAcgYADgHIAPgJQAagcAogeQAmgcAhgcQgHANgkAZQgiAYgKAOIgBADQgCABgBABQgBAAAAAAQgBABABgBQAAAAABgBIgiAbQgaAXgOASIgDgEIgbAZQgSAOgIAEQAHgIAfgZg");
	this.shape_29.setTransform(31.3,130.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0071BC").s().p("AACgCQAYgSgaAUQgDACADgBQAAACgFAEIgIAEQABgEAOgJg");
	this.shape_30.setTransform(44,119.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0071BC").s().p("AAAgCIA5gqQAAACgNALQgMAJAAADQABABAHgEQAGgEAAAFIgHAEIgHAEQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIABgDQgNAJgRANQABgDgBgBQgEAHgTAMQgXAOgNANQAUgXAkgZg");
	this.shape_31.setTransform(48.7,128.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0071BC").s().p("AgCABQARgJAIgGIgLAMQgGABgKAGIgSAKQAFgGAPgIg");
	this.shape_32.setTransform(85.8,117.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0071BC").s().p("AAAAAQAEgGADgBQgCAHgLAIQgBgDAHgFg");
	this.shape_33.setTransform(38.3,152.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0071BC").s().p("AgGAEIALgJQAFAAgJAHQgEAEgCAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBg");
	this.shape_34.setTransform(36.7,145.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0071BC").s().p("AAAgBIAQgLQgJALgWAOIAPgOg");
	this.shape_35.setTransform(36,144.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0071BC").s().p("AgJAFQAFgFACAEIAFgFQACgDAFgCQgBAEgJAFQgFAEgCAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAg");
	this.shape_36.setTransform(35.9,127.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0071BC").s().p("AgBABIALgIQgDAEgFADIgLAJQABgDAHgFg");
	this.shape_37.setTransform(39,126.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0071BC").s().p("AgEABIAOgKIgSASQgDgBAHgHg");
	this.shape_38.setTransform(42,126.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0071BC").s().p("AAAAAQAQgKAGgGQgGAJgPAJIgWAPQAFgGAQgLg");
	this.shape_39.setTransform(40.8,119.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0071BC").s().p("AAYgTQgDAGgSANIgaAUQANgOAigZg");
	this.shape_40.setTransform(50.2,131.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0071BC").s().p("AgCABIAJgIQABACgFAFIgKAJQAAgDAFgFg");
	this.shape_41.setTransform(54.8,132.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0071BC").s().p("AAAABIAPgNQgCAEgKAIIgRANQADgEALgIg");
	this.shape_42.setTransform(45.1,116.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0071BC").s().p("AgFADIATgPQgEAHgVARIgBABQgEAAALgKg");
	this.shape_43.setTransform(47.3,116.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0071BC").s().p("AAAAAQAGgGAFgCQgBAFgUAMIAKgJg");
	this.shape_44.setTransform(55.1,128);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0071BC").s().p("AAAAAQAGgFADgCQgEAGgNAJQABgDAHgFg");
	this.shape_45.setTransform(48.7,113.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0071BC").s().p("AgoAgQASgQAagTIAwgjQgKALgXASQgWAQgRAIIgCAEIgEAEIgZAQIALgHg");
	this.shape_46.setTransform(49.1,120.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0071BC").s().p("AgFADIAKgHQAEAEgJAFIgBAAQgBAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAg");
	this.shape_47.setTransform(62,106.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0071BC").s().p("AgXANQAXgOADgEIASgHIAKgIQAGgFAGgBQgKAKgeAQQghASgMAJQgDgCAWgMg");
	this.shape_48.setTransform(85.2,94.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0071BC").s().p("AAAAAQAWgMAKgEIggATQgWANgJABQALgEAUgNg");
	this.shape_49.setTransform(96.5,101);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0071BC").s().p("AgCABIATgLQgIAKgZALQACgEAMgGg");
	this.shape_50.setTransform(95.9,71.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0071BC").s().p("AAKgFQgDADgGADQgGAEgEABQAAgEATgHg");
	this.shape_51.setTransform(102.8,74.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#0071BC").s().p("AgBAAQAIgEAEgBQgBACgIADIgLAFQgBgCAJgDg");
	this.shape_52.setTransform(109,65.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0071BC").s().p("AgKADQAKgEALgDQgGAEgGADQgEACgDAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_53.setTransform(112.3,64.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0071BC").s().p("AgBAAQAEgDAFgBQgDAEgMAFQAAgDAGgCg");
	this.shape_54.setTransform(152.9,83.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20.2,7,765.9,203.7);


(lib.nubluelong1ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// nu-blue-long1.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0071BC").s().p("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ABABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBgFADACQACAGAKAJQAJAJAGABQAGAIALALQALALAHAKQAAAAABABQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBQABAAAAAAQAAgBABAAQAAAAAAABQAIAEAGAIIANAPQAHACAJAHQAJAHAFAIQADgCgDgFIgHgKQAHAAAIAUQAMALAmAaQAhAWAUAUQACACAHACQAFACABAEIACAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIApAoQAcAbAOACQABABAAAAQAAABAAAAQAAABAAAAQgBAAAAAAQgBgBAAAAQgBABAAAAQAAAAgBABQAAAAAAABQAGACAKAJQAJAJAFgBIAdAeQARARAMAGQAKANAAACQAKAFAJAJQAMAKAEAJQBOBCB+B5IBnBkICdChIAPAUIAQAVQAMAPAYAcIBDBNIACAEIAGAUQADAMAIAJIAfBUIACALQAFAVAAAXQAAAOgDAKQgDAMgFAMQgNARgdAZIgLAIIgOAHIgfAPQgjANgPAIQgKAIgHADQgJAGgMADIgPACIgRABQgvABgUADIgiAFQgUAEgNABIiAAFQhbADgrAFIgRABIgNgBIgUAAIgWAFIgqABQgcAAgOACQgHABgNgCIgVgBIgrAEQgZACgOgEQgvALhKgKIgEADQgPgCgdADQgcADgOgCQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAIgDADQgKgCgJABIgTACQgbgEgtACQgrABgWgEQgPAFgZAAIgpgBIgKADQgIACgDAAQgEABgFgCIgJgCIgHABIgJABIgMgCIgNgDIgMACQgIABgDAAQgFAAgIgCQgJgDgEAAIgfAEQgUADgPgIQgJACgRAAIgdACQgZAEgJAAIgRgDQgKgBgfADQgaADgPgFQgOACg3gDQgtgDgPALQABAHgFAEQgEAEgHABIgBAAQgFAAgGgDgABro8QAAAAABABQAAAAAAABQAAAAgBAAQAAABAAAAQAFAGAAgFQABgEgFAAIgBAAgABFpfQACAHAMALIATASQADgBAAgDQABgDAEgBQgDgGgIgGQgIgHgEgJQgEAAgDgCIgHgJQgEADgJgIQgIgIgEAEQAIAJAFAOQABABAAAAQABAAABAAQAAgBABAAQAAgBABAAIACgDIABABg");
	this.shape.setTransform(833.6,111);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0071BC").s().p("AgEgEQAKAEgBAFIgJgJg");
	this.shape_1.setTransform(797.9,25.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0071BC").s().p("AAYAuQgMgVgJgGIgOgZQgMgTgJgIIAEgCQgQgeAAgHQAEAFAKAVQAIATAHADIACAKQAQAUANAWQASAfALAOQgJgDgMgYg");
	this.shape_2.setTransform(814.4,20.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0071BC").s().p("AAAAAQgDgFADAFQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBgBIgBgFQACAAAFAIIAEAHIgGgIg");
	this.shape_3.setTransform(819.6,28.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0071BC").s().p("AASAeQgGgIgDABQgBABACAFQABABAAAAQAAABAAABQAAAAgBAAQAAABgBAAIgCgEQgBgDgCgCQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABABQgCgGgFgFIgGgJQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAQgGgEgFgMQgHgQgIgJQAKAIASAdQATAhAGAFIgBAAQgCAAgGgIg");
	this.shape_4.setTransform(810.5,33.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0071BC").s().p("AACAJQAAgFgFgGIgIgLQAFACAGAKQAHALAFAEIgKgFg");
	this.shape_5.setTransform(815.6,59.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0071BC").s().p("AgEgGQACABADAFQADAEAAADQgFgEgDgJg");
	this.shape_6.setTransform(792.5,26.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0071BC").s().p("AAAABQgEgGAEABIADAIIgBABQgBAAgBgEg");
	this.shape_7.setTransform(799.1,25.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0071BC").s().p("AgGgLIAHALQAFAJABADQgHgIgGgPg");
	this.shape_8.setTransform(799.7,24.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0071BC").s().p("AgCAAQgDgFAFAAQABACgCADIACACIADAEQgEAAgCgGg");
	this.shape_9.setTransform(815,23.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0071BC").s().p("AAAACIgDgHQACAAAGALQgEgBgBgDg");
	this.shape_10.setTransform(814.6,26.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0071BC").s().p("AgFgFQADgCACAFIAGAIQgCgBgJgKg");
	this.shape_11.setTransform(814.3,28.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0071BC").s().p("AgBABIgHgOQAEADAEAKQAEAKAFADQgGgDgEgJg");
	this.shape_12.setTransform(820.1,26.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0071BC").s().p("AAAABIgHgHQAAgEAHAHIAIALQgDgBgFgGg");
	this.shape_13.setTransform(821,30.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0071BC").s().p("AAAABIgFgHIAGAGQAEAEAAADQgCAAgDgGg");
	this.shape_14.setTransform(809.8,38.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0071BC").s().p("AgEgEQACAAADAEQAEADAAACQgEgBgFgIg");
	this.shape_15.setTransform(823.8,31.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0071BC").s().p("AAFANQgJgNgEgLIgDgBIgCgCQgFgGgDgIQgEgIAIANIATAaQANATAJAKQgJgFgKgOg");
	this.shape_16.setTransform(817.5,32.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0071BC").s().p("AgDAAQAAgBADgCIAEAFIgDACQgBAAgDgEg");
	this.shape_17.setTransform(827.2,39.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0071BC").s().p("AABACQgNgRgIgFQABgDALALQAKAMADAAIAFALIAHAFQAEACAAAEQgIgDgMgRg");
	this.shape_18.setTransform(835.5,52.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0071BC").s().p("AgCABQgKgLgCgHQAEAHAKAKQALAMADAGIgQgRg");
	this.shape_19.setTransform(829.6,62.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0071BC").s().p("AgIgGQADAAAFAFIAJAIQgIgCgJgLg");
	this.shape_20.setTransform(854.2,51.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0071BC").s().p("AAAACIgEgFQACgCADAEQADADABADIgBAAQgBAAgDgDg");
	this.shape_21.setTransform(859.6,57.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0071BC").s().p("AgBABQgFgDAEgCQADAEAEAGQgEgCgCgDg");
	this.shape_22.setTransform(860.3,59.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0071BC").s().p("AgEgCQACgBADACQADACABADQgDgBgGgFg");
	this.shape_23.setTransform(848.5,95.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0071BC").s().p("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ACAdAMIAzAEIA4AFIAjACQAVAAAKACQALACAWAGQATAEA8AFQAyAEAeAIQAcACAkAFIBGAOQAqAIAXACQAhADARgEQAAgGAJgDQAJgEANACQALABANAFIAbAKQAdAIAnAJQAxALAaADIAWgBQAOgBAIABQAPADAeAKQAeALARACQANADARAAIAWAAQAUAFAWALQATAKAFAGQAGACAFABIAMACQAKAGAXAJIAyAQQAtAQA+AQIAhAKQAaAIAgANQAXAKAbAPIBZAzQAAACADADIAFAGQAcAOAuAcQABADAMAKQALAIgBAFQAMAOAhAbIAXAUQAQANAGAGQAHAJAEARQADAQAMALQgKALgEAXQgEAggEAKIAEAEQABABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgXgBgKAMQgNAQgIACQgEACgMgBIgRAAQgLACgLAFIgQAIQgggGgkgDgEg0igAYQgTAFgTABQgFAEgHACIgVADQAAAFgXAFQgWAFACAGQAbgGAZABQAFgCgCgDQgBgBAAgBQAAAAAAAAQAAAAAAgBQAAAAABAAQAOAAAggGIAygMQABgDgFgCQgBAAAAgBQgBAAAAgBQAAAAABgBQAAgBABgBQgNABgUAEgEgz2gAWQARgDgIgCQgHgCgFAFIACAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAgBABg");
	this.shape_24.setTransform(445,101.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0071BC").s().p("AgDAAQAJgFAFABQgFAEgPAFIAAAAQgDAAAJgFg");
	this.shape_25.setTransform(24.4,138.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0071BC").s().p("AiiApQALgFAugJQAngJAKgGIASgCQAVgIAbgHIAygLQBFgOAigKQgOAJgzAJQguAJgRAJIgBAAIAAAAIgCABIg2ALQgmALgYAKIAAgEQg+AQgPAAIgBAAg");
	this.shape_26.setTransform(27.9,120.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0071BC").s().p("AgTAFQADgCAUgEQAigHgnAIIgCABIADAAQgBACgIACIgHAAIgDAAg");
	this.shape_27.setTransform(46.5,116);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0071BC").s().p("AACgBIBRgSQgCADgSAEQgRAEgCADQAAACAKgCQAIgBgDAEIgIABIgKABQAAAAAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAIACgCIgXADIgUAGQADgDAAgCQgJAGgZADQggAFgUAFQAXgJA9gMg");
	this.shape_28.setTransform(46.6,126.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0071BC").s().p("AgCAAQAXgDALgDIgRAHQgHgBgOACQgUAFgGAAQAKgFAUgCg");
	this.shape_29.setTransform(92,128.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0071BC").s().p("AAAAAQAIgDAEAAQgHAEgQADQABgCAKgCg");
	this.shape_30.setTransform(23,144.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0071BC").s().p("AgIABIARgDQAEACgNACIgHABQgBAAgBAAQAAAAAAAAQAAAAAAgBQAAAAABgBg");
	this.shape_31.setTransform(25.2,137.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0071BC").s().p("AABAAIAWgFQgOAFgfAGQAHgDAQgDg");
	this.shape_32.setTransform(24.7,136.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0071BC").s().p("AgMAAQAFAAACAAIABACIAIgCIAJgCQgCACgNADIgHAAQgFAAACgDg");
	this.shape_33.setTransform(34.2,120.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0071BC").s().p("AgBAAIAPgDQgEADgIABIgQADQACgCALgCg");
	this.shape_34.setTransform(37.6,120.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0071BC").s().p("AgFAAIAUgEQgHAEgVAFQgCgDAKgCg");
	this.shape_35.setTransform(41,121.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0071BC").s().p("AAAAAQAWgCAJgEQgLAGgUACIgeAFQAIgDAWgEg");
	this.shape_36.setTransform(43,115.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0071BC").s().p("AgCAAIAOgEQAAADgIABIgPAFQABgCAIgDg");
	this.shape_37.setTransform(51.3,131.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0071BC").s().p("AAWgGQgEAEgOACIgZAHQAJgFAigIg");
	this.shape_38.setTransform(49,113.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0071BC").s().p("AgHAAIAcgGQgFADgOADIgUAHQgHgCASgFg");
	this.shape_39.setTransform(51.2,114.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0071BC").s().p("AAAAAQAJgDAEAAQgHAEgSADQACgDAKgBg");
	this.shape_40.setTransform(54.3,112.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0071BC").s().p("Ag4ANQAZgHAmgIIBDgPQgNAGgjAJQgfAGgWACIgEADQgCABgFABIgdAGIgGABIARgFg");
	this.shape_41.setTransform(51.1,119);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0071BC").s().p("AgGAAIANgDQADAEgMADQgEgBAAgDg");
	this.shape_42.setTransform(71.3,110.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0071BC").s().p("AgfAEQAggFAEgDIAXgBIAOgFQAJgCAGABQgOAGgoAFQgqAHgRAFQgDgCAcgGg");
	this.shape_43.setTransform(101.2,106.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0071BC").s().p("AgpAGQAOAAAcgGQAdgFAMgBIgrAIQgWAFgMAAIgGgBg");
	this.shape_44.setTransform(110.7,116.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0071BC").s().p("AgDAAIAagEQgNAFgfAFQAEgEAOgCg");
	this.shape_45.setTransform(121.4,88.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0071BC").s().p("AgMACQABgBAKgBIAOgCQgFACgHABIgJACIgEgBg");
	this.shape_46.setTransform(128,92.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0071BC").s().p("AgBAAQAKgCAEABQgBABgJABIgPACQAAgDALAAg");
	this.shape_47.setTransform(137.7,86);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0071BC").s().p("AgMAAQAMgCANAAQgHACgIACIgGABQgBAAgBgBQgBAAAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_48.setTransform(141.5,86.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0071BC").s().p("AgBAAQAHgCAFABQgGACgPACQACgDAHAAg");
	this.shape_49.setTransform(180.3,114.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.7,13.3,947.1,181.4);


(lib.greenshort2ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// green-short2.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#285538").s().p("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AAAAQAAAAgBAAQAAAAAAgBQgHglgCgXQACgBACgDQACgDAEACIABgGQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAAAAAAAQgBABgBAAQAAAAgBAAQAAABgBAAQAAAAAAgBQADgCgBgGQgCgGADgCQgFgNgBgZQgBgagGgQQAJAUAGA2QAAABAAAAQAAABAAAAQABAAAAAAQAAABABgBQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAABABQAAADgCAHQgBAHAAADQABAJAHAKIACAOIACAOQACAEAEAHQADAHgBAGIAFADQADABABAEQACAAADgDQABgBAAAAQABgBAAAAQABAAABABQAAAAABAAQAAABAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAgBABQAAAAAAAAQgBAAAAAAQAAABAAAAQABAEAHAFQgBAJACALIAFATQAAABABAAQAAAAAAAAQABAAAAAAQAAgBABgBQAAAAAAgBQABAAAAgBQABAAAAABQABAAAAAAQgCAFADAKQADAKAEACQAAAIACAMQADAMAAAJQAAABAAAAQABABAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAgBABAAQAAAAAAABQABAAAAAAQADAGABAHIACAPQALAMAAAQQADAAABgFIAAgIQAFACgFARQAEALAQAhQAOAbAFAVQAAADAEAEQADADgBADIABABIABgCIALArQAIAdAKAHQgBABAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAEADACAKQADAJAEACQACAGAFAaQAEASAGAJQABAMgBACQANAUgEAPQAaBMAiCBQArCnANAsIAOBMIALAsQAHAZACAQIACAYQABAOAGALIAIA5IAFAeQABARgCAJQgFA0AAAqQgDAJgDAUIgIAZQgMAhgQATQgKAMgfASQgJAHgFADQgFADgLACIgJACIgKAAQgcAAgNACIgUAFQgLADgIABIgmACIgBAAIgFgBgAIoodQADgDgFgCQAAAAAAABQAAAAAAAAQgBAAAAABQAAAAgBgBQABAHADgDgAIbpJQgCAFADANIAFAUQADAAADgCQACgCADABQABgFgDgHQgCgIABgHQgEgCgBgDIAAgIQgFAAgCgJQgDgJgFABQABAKgEALQAAABABAAQAAABABAAQAAAAABAAQABAAABgBIADAAIABAAg");
	this.shape.setTransform(404.8,100);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#285538").s().p("AgCgEQAHAGgEADQgBgGgCgDg");
	this.shape_1.setTransform(436.9,7.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#285538").s().p("AAAAoQADgVgGgGQABgEAAAFIABgXQABgQgEgKIAEABIABgRQABgLADgEQABAFgDATQgCAPAEAFIgDAIQACANgBAaQgBAcACAOQgFgHABgUg");
	this.shape_2.setTransform(452.9,11.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#285538").s().p("AABAAIgBAAIAAAAQgDAAADgHQACACAAAHIgBAGIAAgIg");
	this.shape_3.setTransform(453.3,18.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#285538").s().p("AADAbQAAgHgDgBQAAAAAAAAQAAABAAAAQgBABAAAAQAAABAAABQAAABgBABQAAAAgBABQAAAAgBAAQAAAAgBAAIABgFQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBgBgBQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAIAAgKIgBgJQAAAAABABQAAAAAAAAQAAAAABAAQAAAAAAAAQgCgDABgKQAEgOgCgKQAEALAAAaIgBAjQgCAAAAgJg");
	this.shape_4.setTransform(442.7,18.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#285538").s().p("AgCAGQACgCgBgHIAAgKQACAEAAAIQAAAKACAFQgDgFgCgDg");
	this.shape_5.setTransform(432.7,37.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#285538").s().p("AAAgFQABABAAAEQABAFgCABQgCgFACgGg");
	this.shape_6.setTransform(431.7,5.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#285538").s().p("AAAAAQAAgFACACIgBAHIgBABQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAgBABgBg");
	this.shape_7.setTransform(437.9,7.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#285538").s().p("AAAgKIABALIgBAKQgBgIABgNg");
	this.shape_8.setTransform(438.7,7.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#285538").s().p("AgBAAQAAgGAEACQAAABgBAAQAAABAAAAQgBAAgBABQAAAAAAAAIAAACQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgCgBABgEg");
	this.shape_9.setTransform(452.1,13.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#285538").s().p("AAAABIAAgGQACABgBAKQgBgCAAgDg");
	this.shape_10.setTransform(450.5,15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#285538").s().p("AgBgFQACAAABAEIgBAHg");
	this.shape_11.setTransform(449.2,16.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#285538").s().p("AAAAAIABgLQABADgBAIQgBAJABADQgCgEABgIg");
	this.shape_12.setTransform(454.8,17.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#285538").s().p("AAAgPQADANgCASQgDgGACgZg");
	this.shape_13.setTransform(439.8,17.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#285538").s().p("AAAACIgBgHQABABABAEIABAGQgCgBAAgDg");
	this.shape_14.setTransform(436.8,19.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#285538").s().p("AAAABIgBgJQACAEABANQgCgCAAgGg");
	this.shape_15.setTransform(455.1,20);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#285538").s().p("AAAABIgBgIQACgCABAHIAAALQgBgCgBgGg");
	this.shape_16.setTransform(453.4,20.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#285538").s().p("AAAABIAAgHQAEAIgEAFQgBgBABgFg");
	this.shape_17.setTransform(439.9,20.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#285538").s().p("AAAgEQABAAAAAEQABAEgBABQgCgEABgFg");
	this.shape_18.setTransform(455.5,22.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#285538").s().p("AgBAKQgBgMADgJIgBgCQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIABgMQAAgBAAgBQAAAAAAAAQAAABAAACQAAABAAADQACALgBAOIACAdQgEgHAAgOg");
	this.shape_19.setTransform(449.4,20.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#285538").s().p("AgCAAQACgCACAAIAAAFIgBAAQgDAAAAgDg");
	this.shape_20.setTransform(453.8,28.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#285538").s().p("AgBACQAAgRgDgHQADgBABAMQAAAMADABIgCAKIADAFQACAEgCACQgEgFgBgQg");
	this.shape_21.setTransform(453.3,41);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#285538").s().p("AgBAAQgCgMADgFQgBAGACALQACANAAAFIgEgSg");
	this.shape_22.setTransform(442.4,45.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#285538").s().p("AgCgHQACABABAGIACAIQgEgEgBgLg");
	this.shape_23.setTransform(469,47.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#285538").s().p("AAAgEQACAAAAAJQgFgFADgEg");
	this.shape_24.setTransform(464.1,50.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#285538").s().p("AAAABIgBgFQACAAAAAEQABAEgBABQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBg");
	this.shape_25.setTransform(469.9,54);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#285538").s().p("AAAAAQgBgEACAAIABAJQgCgCAAgDg");
	this.shape_26.setTransform(469.3,55.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#285538").s().p("AgBgDQAAAAABAAQAAAAAAABQAAAAABABQAAAAABABQABACgBACQgCgBgBgGg");
	this.shape_27.setTransform(439.2,75.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#285538").s().p("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DADABQAKgHANgFQAPgHALAAIBGgaQAlgNAigKIAkgMIBugdIAlgIIBwgXICVgdQAeABAugHIBKgMIAWAAQAMAAAIgEIBngFQBEgCAbgEQASACAxAAIBEAAIAaADQAQACALgBIAVgCQAOABAeAFQAdAFAPAAIAYgBQAPgBAIABIBVAOQAsAGAuAEQAJABAOADQAPAEAGABQAIAAAQAAQASABAbAHQAjAHAKACQAIABANAEIAWAGIAuAIQAbAEAOAIQAXACAmAKQApAKAZAMIAFgBQAOAGAfAGQAfAHAOAGQAFABAEgCQANAHAaAEQAbAOAuAOQAwAOATAMQARABAZAJIApARQAEABAIAAIAMACQAIADAJAGQAFADALADQAIADAQALQAIAEARADQAFACAHAFIALAIIAhAJQAVAGAMANQAKADARAHIAdALIASAGIARAFQAFACALAJQAIAEAhAMQAaAJANAMQASAGAxAaQAqAZATgDQADgGAGgCQAGgCAHADQAFACAGAHIALALIAhAXQAZAPALAEQAEACAJAAQAJABADABQAHAEANANQANAMAJADQAGADALACIALADQAKAFAIANQAHAKAAAHQACACAEAAIAFADQALAZBIAvQAIAFAHAIQAXAUAUAdIAfAzQgCACABAIIANAVIANAVQgBACADAKQACAIgDADQACANAIAZIAGATQADALABAHQAAAHgFAPQgEAOABALQgKAIgMAUQgQAbgHAIQACAGgDACQgOgCgLALQgOAMgGACQgDABgGgCIgLAAQgHABgJAEIgNAGQgdgMgpgDgA7+AAQgJAHgJADQgBAFgEACIgKAGQACAEgKAIQgKAIADADQAOgHAOgDQACgBgDgDQgBgBAAgBQAAAAgBgBQAAAAAAAAQAAAAAAgBQAIgBAOgKIAXgRQgBgCgDgBQgDgBABgEQgIADgIAFgA7lgDQAIgEgFgBQgFgBgBAFIABgBIACACg");
	this.shape_28.setTransform(238.2,73.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#285538").s().p("AgBAAQACgFADAAQgBAEgFAGIAAABQgBAAACgGg");
	this.shape_29.setTransform(31.8,119.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#285538").s().p("AgsAmQASgMACgIIAJgEQANgPAbgUQAjgaAKgJQgCAHgIAGIgRALQgVAOgFALIgYASQgQAOgIAMIgDgEQgbAWgIACQAEgFAVgOg");
	this.shape_30.setTransform(24.9,103.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#285538").s().p("AAAAAQAWgQgYARQAAABAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABACgEACIgFACQAAgCAJgGg");
	this.shape_31.setTransform(33,97.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#285538").s().p("AAAgBIAkgaQAAADgIAGQgIAGABADQABABAFgCQABgBAAAAQABAAAAAAQABAAAAABQABAAAAABIgEACQgDABgCABIAAgCIAAgBQgJAEgKAJQAAgBABAAQAAgBAAAAQAAgBgBAAQAAgBAAgBQgDAGgLAGQgQAIgIAIQAIgMAbgRg");
	this.shape_32.setTransform(38,106.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#285538").s().p("AgBAAQAKgEAFgFIgGAJQgEgBgGAEQgIAGgDABQADgFAJgFg");
	this.shape_33.setTransform(63.3,102.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#285538").s().p("AAAAAQADgEACAAQgBAFgHAEQgBgCAEgDg");
	this.shape_34.setTransform(34,124.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#285538").s().p("AgDACIAGgFQAEABgGAEIgDACQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBg");
	this.shape_35.setTransform(31.6,117.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#285538").s().p("AAAAAQAGgGAEgBQgGAHgNAIIAJgIg");
	this.shape_36.setTransform(31,117.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#285538").s().p("AgFACQADgCACACIACgCIAEgEQAAAEgGADIgDACQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_37.setTransform(28,102.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#285538").s().p("AAAAAIAGgEQgBADgDACIgHAEQAAgBAFgEg");
	this.shape_38.setTransform(30.3,102.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#285538").s().p("AgCAAIAIgFIgKALQgDgCAFgEg");
	this.shape_39.setTransform(32.5,102.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#285538").s().p("AAAABQAKgGAEgEQgEAHgJAEIgOAJQADgEAKgGg");
	this.shape_40.setTransform(30.5,97);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#285538").s().p("AgBAAIAFgFQABADgDACIgFAGQgBgDADgDg");
	this.shape_41.setTransform(43.2,110.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#285538").s().p("AAAAAIAJgIQAAAEgGAEIgLAIQABgDAHgFg");
	this.shape_42.setTransform(33.1,94.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#285538").s().p("AgDACIAMgJQgBADgGAEIgIAIQgEAAAHgGg");
	this.shape_43.setTransform(34.9,95.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#285538").s().p("AAAAAQADgEAEgBQAAAEgNAHQACgEAEgCg");
	this.shape_44.setTransform(42.7,106.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#285538").s().p("AAAAAIAFgEQgBAEgIAFQAAgCAEgDg");
	this.shape_45.setTransform(35.3,92.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#285538").s().p("AgYATQAKgJARgMQAUgNAJgJQgFAJgOALQgNAJgLAEIgBADIgDADQgFAFgIAEIgDABIAHgGg");
	this.shape_46.setTransform(36.8,99.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#285538").s().p("AgDABIAGgEQADADgGAEQgCgBgBgCg");
	this.shape_47.setTransform(43.9,89.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#285538").s().p("AgOAIQAOgJABgDIAMgEIAGgFQADgEAEABQgFAHgTAJQgUALgGAHQgDgCANgIg");
	this.shape_48.setTransform(58.4,82);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#285538").s().p("AgSALQAHgDAMgIQAMgIAHgCIgUAMQgLAJgHAAIAAAAg");
	this.shape_49.setTransform(67.7,89.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#285538").s().p("AgBAAIALgHQgFAIgOAHQABgEAHgEg");
	this.shape_50.setTransform(61.8,62.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#285538").s().p("AAAAAIAGgDQgFAHgGAAQgBgCAGgCg");
	this.shape_51.setTransform(67.1,66);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#285538").s().p("AgBgBQAEgCADAAQABABgFACIgHAEQgBgDAFgCg");
	this.shape_52.setTransform(69.9,58.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#285538").s().p("AgGACQAGgDAHgCQgDADgEADIgDABQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAg");
	this.shape_53.setTransform(72,58.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#285538").s().p("AgBAAQADgDADABQgCACgGADQgBgCADgBg");
	this.shape_54.setTransform(102.9,80.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.9,4.6,476.9,185.4);


(lib.turkeyai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#81958F").s().p("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");
	this.shape.setTransform(299.2,225.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmjDHQAMgEAbgEIAUAAQAJgBANACIAdAFQATAFAKAAQARAAAMgJQALgIAIgQQAMgZADglIAFggQADgSAGgMQAPgZABglIACgiIAAghQACgsALgWQAIgRAOgJQANgKARgGQAwgRAzgDQAvgCA0AKQAwAJAtATQAeAMA3AbQAoAUBpAxQAiARARAKQATALgPgFQgngThEgeQhTgkgvgWIhIgeQgqgPgngGQgugIgqACQgbACgUAEIgXAFIgWAHQgNAEgKAGQgKAHgJALQgOASgDAgQgCAMgBAwQgCArgHAWIgGARIgHAOQgFAKgEAUIgFAjQgDAVgFAOQgHAUgKAMQgLAQgSAEQgQACgUgFIgkgIQg0gHhHAaQAYgJASgFg");
	this.shape_1.setTransform(274.9,389.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#81958F").s().p("ACZD0QhDgKg9gdQg3gag0grQgVgSgYgZIgoguQgXgegkg1QgagmgVgUQgTgUgZgMIgcgLIgjgIIhRgRIgUgBIgIACIgIAEIgEADIgEAEIgGAFIgHAIQgTAWgKAJQgdAbgfAMQgPAGgRADQgTADgPgCIgRgDIgPgEIgOgGIgHgEIgHgEIgOgJQgIgGgGgGIgagdIgGgHIgGgGIgBgBIgBAAIAAgBIgBAAQgFAAgRAFIghAMIAigPIAVgHIAEgCIABAAIABAAIACABIABAAIAAAAIAEAEIAIAIQAHAJAaAYIAZARIARAHIAbAIQAVACAUgEQAdgGAegVQALgIARgQIAggkIAJgHIAPgKIAGgCQAHgBAKAAIAeADIAnAHIAsAJQAfAGAbANQAZALAXAWQAUAUAaAjIA1BJQAkAtAiAfQAqAmArAZQBoA7BqgCQAPAAApgEIAbgFIA0gOIBDgdQAtgUAYgGQANgEAPgBIATAAQAFAAAKACQAtAMAbgCQAdgCAWgMQAWgKAUgYQAegmAMg+IAHgqIAAgBIABgBIAAAAIACgEQANgXAHgdQAFgSADgZIADg/IAAgGIABgDIAAgBIAAgDIACgFQACgKALgCIAdgFQAQgBAEACQAEABgJAEIgeAMIgGACIAAAAQgDACAAAEIAAAyQgBAcgCAPQgEAcgJAaIgNAfIgBACIgBAJQgHBIgaAvQgPAdgUASQgXAVgcAKQgZAKgfACIgfgDIghgHIgQgDIgQAAQgKACgQAEQgTAGg5AZIgbAMIg9AUQgGACgbAFQgmAGgmAAQgdAAgegDg");
	this.shape_2.setTransform(186.5,403.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#81958F").s().p("AiHBWIEJgVIAGAJIidANgACCBBIhbiOIACgFIBeCTIgFAAgAgvgRQAVgIAQgJQAZgSASgiIAGAJQgTAggbAQQgPAIgZAIQgWAFgdAFQAhgIASgGgAAnhNg");
	this.shape_3.setTransform(111.3,361.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#81958F").s().p("ADsgdQgbgWgOgJIgfAfQgdAYgiAMQgjAOgmABQgnAAgkgPIgYgFIgLgCIgMgBQgXgBglADIhVAKQhCAHgzgEIAqgBIArgFIBUgMQAzgHAZgBIARABIAQABIAPADIAHACIAEABIAIACQAfALAiACQAiABAggKQAhgLAcgUQAPgKAMgNIAMgNIgEgCIgCgBIAAAAIAAgCIACgEIAIAFIABgBIAGgFIABgBIAEAIIAAAAIgBABIgDADQARANAeAcIA8A1IAzAvg");
	this.shape_4.setTransform(897.4,55.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#81958F").s().p("AgdA2QgdgPgTgUQgOgOgOgVQgRgcgKgfQAYAyAcAbQAWAWAfARQAeAQAfAGQAbAGAbAAQAVAAASACQAOACgPAAIg0ADIgGAAQgzAAgugWg");
	this.shape_5.setTransform(985.7,138.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#81958F").s().p("ABsDPQACgRAAgMIgDg8QgKhCgbg3Qgbg5gwg8QgpgyhChAQA5AuAmAlQA3A6AkBMIAFALIAPAmQALAkADAYQALBMgOBDIADgcg");
	this.shape_6.setTransform(969.6,85.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#81958F").s().p("ADZB1IgpgpIgpgqIgmgpIgTgUIgRgQQgigegqgUQgqgUgtgIQglgGgoAAIgkgBQgKgBgDgBQgBAAAAgBQAAAAAAAAQAAAAABAAQABAAABgBIAlgDQAugDApAFQAtAGAnAPIAnARQACABgJgGIgdgQQgmgQgagGQgjgIgngCQAjABAfAGQAyAKAoAVQAoAUAmAhIATASIAVAWQAeAhAMANIBCBYQgBAQACAQg");
	this.shape_7.setTransform(1014,155.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#81958F").s().p("AB5DYQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQABgCgBgGIgBgXQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAgBAAIgdgYQgkgbgRgWQgagfgEgjIgCglIgEghQgDgWgLgdQgQgtgdgiQgTgVgPgLIgSgMIgRgKQAVAJAYARQAYASATAYQAlAvAMBBQAGAhACAZIABAOIACAMIADALIAFALQAMAWATAUQANAMAfAaIAXAZIADADIgCAfQgEAGgCAAIAAAAg");
	this.shape_8.setTransform(1021.7,320.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AisBIQgPgGgKgLIgKgMIgYggIgFgGQgDgDgMgHIAMAGIAJAJIALAOIAOARQATAWASAEQATAFAZgRIATgPIAvguIAZgUIAJgGQAmgZAugKQArgKAzAEQAsAEA2ANQhPgSg/AEQgrADgiANQglANgjAbQgHAFgYAWIgZAaIgVATQgPALgMADQgHADgIAAQgHAAgHgDg");
	this.shape_9.setTransform(919.8,339.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#81958F").s().p("Ai2GdQgRgEgLgLQAMAIANACQAMACAQgBQAagEAfgPQAPgIAOgKIAfgWIAdgTIBfglQApgTAagcIANgQIAGgIIALgSIADgJIAEgJQABgGAAgFIABgfIgEgHIgOgeQgtgjgNgMIgNgMIgFgGIgDgEIgFgHIgDgHQgHgNgBgNIAAgBIAAgDIAAgGIgEgpQgIg8gVgsQgWgxgkglIgSgQIgggXQgMgIgDgJQgDgJAEgHQADgFADgBQADgFAFgBIAEAAIAAgBIAFgHIACgDIAAAAIASgiIAKgXIAHgVIgLAhIgWAuIAAAAIgBABIgBACQgEAFgDACQgEAEgBAEQgEALAJAIIAKAGIAFADIAMAJQArAfAeAsQAcAoAPA4QAMAsAEA1IAAAFIAAADIAAAFIACAHQADAIAFAIIADAFIBYBKIALAqIgBAqIgEANQgDAJgCAEIgHAMIgPAWIgSAUQgNAMgHAFQglAbg8ASIgtAQIgNAGIgkAZQgWAPgLAFQgcAPgcAEQgLACgJAAQgNAAgKgDg");
	this.shape_10.setTransform(1019.5,323.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ADrBbIgvgGIgfgHIghgIIghgMQhZgjhBgwIgqgaQgagMgYgCQgegEgcAHQgVAGgLAFIgiAQIAbgPQAPgHALgEQAagKAbgBQA3gDAzAgQghgZgggJQgRgFgTgBQgPgBgWACQgQACgWAGIgkAOQgkAQglANQAegMAsgVQAhgRAdgGQA2gKAtARQASAGAQALIAZAUIAuAjQAgAWAPAJIAvAXIAUAHQAgAMANADQApAKAPACIBEAHQARABAWgBQAcAAAPgBIgkAEIgiACg");
	this.shape_11.setTransform(692.5,376.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#81958F").s().p("Ax3DKQAZgGAsgNIB0goQAfgLAWgKQAngTAqgYQAcgQAggWIAugdQArgZAegQQAtgWAegKQA2gSA0gEQAigDAoAEIAsAFIA3AKQBCAJBGgHQBLgHBUgaQgTAJAEACQADABAYgEQA4gLBegnIA9gbIgJgLIgBgCIAAAAIALgKIAAABIABACIABABIACAEIAHAIIAEgCIANgGIAFAQIAAAAIgCABIgKAFIAFAHIARASQAKAKAIAGQAoAgAuABQAsABAtgdQAggUAlgnIASgRQAFgFAKgHQAbgXAogHQAkgHA2AJQAtAIA8ASIA4ASIA7ARQBIAUA7ABQBHACBBgYIARgGIAAgTIAGgBIABgBIAAAAIALgDIACgBIABAPIAMgGIACgBIAAAAIACAAIAAAAIAAgBQADALAGAKQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAIgXALIADAdQAEArAPAfQALAXAPAQIAPAOQABAEgNgHQgRgJgPgTQgXgcgKgtQgEgVgCgWQgvARguAFQgzAFg0gHQgsgGgxgOQgcgIg3gSIhNgYQgogLgggFQgjgGgdADQgcACgYAMIgMAGIgQAMIgLAKIgCADIgxAuQgjAegZAKQghAQgkgBQggAAgjgTQgLgFgTgPIgNgMIgNgNIgLgOIhSApQhgAshSAWQgnAMg6AJQg5AIgtgBQg5gBgugIIg7gKIgSgCQhHgGhIAQQgbAGgqAOQgVAIgwAVIhEAlIhMApQguAYgjAOQghAPgzAPQhXAbhHARQgQAEhAAMQg/AJgTABQBSgKBWgYg");
	this.shape_12.setTransform(866,366.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#81958F").s().p("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");
	this.shape_13.setTransform(546.6,212.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#81958F").s().p("ACGBKQgngdgfgTQg7gjgrgWQgwgZhHggQAeAJBJAhQAfAOAFABQAGABgegSIgmgUQA7AdAoAaQBQAuA7A4IAAAAQgDAAgVgPg");
	this.shape_14.setTransform(331.2,381.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AC2BIQhLgcgIgCIiJg8QgwgWgSgGQgkgOgfgGQgPgFgCgBQgCgCAJABQAYABAsANIAxASICcBBQBHAhARALQAJAFAAABIAAAAIgHgCg");
	this.shape_15.setTransform(300.4,380.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#81958F").s().p("AC2CrQgngcgggnIgQgUIgOgWIgUgfQgkg1g1gsQgvgohCgkQgjgThIgiQgxgYgPgJQgSgKAaAIQAjAKBCAZQAmARAwAZIBUA1QBJA2AxBQIAOAWIAQAYIASAWIASAUQAZAbArAdIAoAZQALAGgTgEQAVAMALAEIARAIIARAGQhLgRhAgvg");
	this.shape_16.setTransform(332.9,410.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#81958F").s().p("AgQCSIgfgEIglgLIgzgTIg0gWIgDgCIgOgGQgSgIgGgGQgHgGAEgFQAEgFAPgEIglgIIgHgCIgogGIg1AEIhNAKIilAkQAMgLAJgKIACgDIABgCIgGgEIg+APQgmALgaAGQgkAKgNAAQgGAAgCgEQgIAAgBgBIBjgfIAvgUQA1gXAVgLIBpgzQgDAIAegIIA1gTQAvgSgMASQAJgJAXgIIASgGQAIgDgBgBQAQgBgHAKQgEAGgNALQgKAJAHgBQAFgBAugPQAVgHAIgFQADgCACgFQAFgOAUgBQANABAJAFIAJADQAFACgGACIgeAKIASgFIgHAFQgGAFgCAFQgCAFAGAHQAFAHAKAEIAEABIABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAUAFIAGABIAHgBQAFAEAEAHIAJANQAMARASAFQgIgNAFgEQACgBAEgBIAJgDQAMgEACgMIAAgFQgBgDgCgCIgIgIQgIgHgBgDIAAgDIAAgBIABgDIAAgBIAIgNIAGgIIAMgLIAKgHIAJgFIATgJQAFgDAHgBIArgLIAOgBIANgBQAbgCAZAGQAXAFAXAMQAmAWATAkIAfACQASACATgCQARgCARgKIg8gGQghgEgMABQA4gbBUAEQAZACAoAFIA3AGQABgBAGgCQA3AaBkA1IA6AgQAcASANARQgCAGgVAIIgdAKIgsgNQgegHgWAAQgRAGgmAAIg/gCQgigBgKAFQgNAFAPAQQgzADgcgLQgOgFgWgSQgQgPgUgDQgSgBgPADQgKADgLAEIgDABIgDABQgGACgEAAQgNACgOgFQgTgDgRgWIgNgTQgPgVgSgHQgTgIgHAGQgCACACAFIAIAPIgPAOIgFgDIgIgCIgDgCIABADIAKAQQAHAKANAOIARATQADAIgCAMIgMAdQgMAJgHABQgFAAAAgGIAGgOQAEgNABgIQAEgQgBgFQgCgHgEgHIgIgGQAAAAgBgBQgBAAAAABQgBAAAAAAQgBABAAABQABAHgDAIIgPAiQgGAPgCAJQgDANgIAIQgSAOghAAIgRAAgABGgfIgOADIgIADIAHAEIAPAIIACgFQADgFAKgFQgBgDgIAAIgGAAg");
	this.shape_17.setTransform(96.2,120.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AArAVIgbgGQglgIgWgOIgPgLQgIgGAEgCIB+A0IgVgFg");
	this.shape_18.setTransform(85,123.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#81958F").s().p("AgCASIgNgSQgCgCABgCIADgMQABgGACABIAFADIAEABIAPAMIACAEIABAEQABAIgCAFQgDAFgFABIgBAAQgFAAgEgEg");
	this.shape_19.setTransform(87.7,114.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#81958F").s().p("AgCgEIAfgOIAQAEIgjAOIgWAHQgSAGgOAGQARgMAZgLg");
	this.shape_20.setTransform(97.6,104.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#81958F").s().p("AAGAEQgugLgSgCQAXACAhABQAdADAgAKQgGADgKAAQgPAAgWgGg");
	this.shape_21.setTransform(162.6,70.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#81958F").s().p("AgHACQgWgJARAAQANgCAGAGIANAKIgFABQgIAAgOgGg");
	this.shape_22.setTransform(142.9,81.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#81958F").s().p("AgDACQgLgFgKgBQAXgGAZAKIgNAHIgCAAQgFAAgHgFg");
	this.shape_23.setTransform(149.6,87.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#81958F").s().p("AgNAMIgLgXIAkABQAPAEgDADQgBACgMADQgLADAAACQAAADARACg");
	this.shape_24.setTransform(139.2,85.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#81958F").s().p("AgcABQgEgJARACIAZAEIAUAGQgRADgNAAQgRAAgLgGg");
	this.shape_25.setTransform(114.6,79.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAjgUIgxAeIgUALQAXgbAugOg");
	this.shape_26.setTransform(94.7,78.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#81958F").s().p("AAzAQIAAAAIAPABIgIABQgGAAgBgCgAgJAIQgwgIgIgRQAcgCAlAHQAuAKACAMIADAGQgwgGgMgCg");
	this.shape_27.setTransform(114.2,85.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgCACIgkANQAMgMALgDQAHgCAKAAQALAAAGgDQAKgFALgPQgBAKgEAGQgEAFgHAEIgbASIgKAIg");
	this.shape_28.setTransform(78,101.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#81958F").s().p("AhFAlQAFgJACgTQACgOAFgMQAIgSAXgaQACANAWgNQAMgBANgEQAHgLAWgEQANgBAagBQAHAAADAEQACADgBAEQgFAKgVACQgZgHgSAGIgIADIgFADIgFAJQgjAzgTAXQghAnghASQAYgaAKgWg");
	this.shape_29.setTransform(97.3,94.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#81958F").s().p("ABxDoQgOgHgTgGQgSgGgJgBIgGgBIgHAAIgCAAIgFgCQgEgHACgOQADgMAIgKQAIgIAPgKIAOgHIARgFQAjgLBkgXIB8gcQAjgLAMgEIAKgDIABgBIgBAAIgQgBQgZgBgSgEIANAAIAHgCQAHgCANAAQATAAATADQALgBADgFIAFgEQACgDAFgDIAFgDIAIgEIAagHIAsgHQAhgFAigCIAFgDIj/gSIhQgNIgGgBIgIgEIgegOIg2gaIhugtIgwgQIgugMIgtgLQAJAMgJAFQgHACgYgBIgpgCQgXgBgMAEQgTgMgmgBQgUgBgsADIgPAGQgKAFADAEQAQgCASACIAiAGQgHANgigFQg0gIgMAAIAVgNQgZAAgfgDQgUgCgngIQhJgNglAPQAgAJAZAKQgNACghACIgvAFQgfAHgNAIQgGACgNAJIgOAQQgSAYgHAXQAOgMAVgbQASgXAagHIAKgDIAIABQAIADABAGQABAGgHAFIgOAKIgdATIgFADQghAbghAoIg2BEQgSAXgJAKIgXAWQgQANgoAOQgVgGgnAJQgQADgkALQgeAJgkAPQgcgEgWgFQAfgNAcgPIAogZIAMgJQAfgXAQgOIAqgnQAFgHgGACIgRAJQgKAGAAgDQgBgDASgTQAEgBAIADQAGACAIgEQAIgMACgLIACgRQAFgVAngjIAggKQAfgjAaglIAUgWIAXgVIAZgPIA5gYQAwgNBDgEQAjgCA6ABIAsgCQAQAAAhACQASgMA4gDIAwAAQAcAAAQgDIAAALQATgIAlAKIA7ARIAeARQACAGgNABIgdgBQgrgDAOARQAVAJAZADIAqADQAbACAOAEQAWAEASANIArARQASAGAIABIAYAFIAeAJQALAAgEgIQgFgJAHgDQAdANARAKQAVAOANAJIAhAXIAXAMQABABAOACIGvAlIBSAGIh7AWIh5AcIgaAKIgJAFQAGABAIACIAzARQAaAEAVACIAbAAIAzgHIABgCIAOgJIAcgPIAIgDID4gjIkHA7IgUAGQgFADgBACIAAABIAEABQAGACAKAAIg5ABIgHABIgDAAQgBABABAAIAOgBIgCABIg0AQQgpAOgOABQgKACgHgFQgEgCgJgMQBVgJAcgIIACAAIgRgBIgIAAIgegEIABAAIgCAAIABAAIgBAAIAAAAIjXAgQinAYhGANQgJALgPAMQgNgJgzABQgWAAgXADIgeAFIgFABIgIAHIABABIAMAKIAQgEIASgEQAsgGAOACQARADgmATIgtAJQAbAWAMAVQgQgNgVgLg");
	this.shape_30.setTransform(159.9,93.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#81958F").s().p("AgEABQgFgBgMgCIgPgEQACgFAZABQATACAbAJQgCABgWgCQgNAAAJAGIALAFIgYgKg");
	this.shape_31.setTransform(72.2,130.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAMAJIgYgFQgKgFAEgDQAHgCACgCIAdALQADAGgJAAIgCAAg");
	this.shape_32.setTransform(81.6,119.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#81958F").s().p("AgKAHQgDgFAMgHIAGgGQADACAAADIABADIAAABIgBAAIABABIACACQACADgEACQgDABgCACIgDADIgBAAQgHAAgDgFg");
	this.shape_33.setTransform(82.2,112.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#335C64").s().p("EAFHAiHQgngcgRhEQgUhUgOgVQgwhKAQg+QAPg4BFg2QASgOAygtQApgkADgpQADgpghgqQgcgkgkAKIhDAfQgnASgwA1Qg1A5gcAQQhSAwhdgfQgvgPhvhGQhOgyhFAHQhDAGhHA9Qg3AugiAjQgtAvgeAuQgWAigmAbQgPALg7AkQhdA4imAVQhZAKgsAGQhMALg1ASQh0AnhggkQhZghg1hZQhSiHijhZQg3gehbgnQh4gzgdgOQhSgnhUgKQhegKhNAeQg1AWgEBQIgDBEQgDAmgNAYQgJAOgEAcIgHAtQgJAmgPAQQgUAUglgLQg4gShBASQgaAHhUAlQh1AzhygkQhjgghNhZQgWgagjgzQgkgzgTgXQhEhPhrgVQhwgWgUABQg+AAgzAyIgvAyQgfAWgbglQgqg4gzgFQgmgEhDAbQgvATgTACQgoADgJgnQgIglAmgOIBFgOQCHgaAagKQBVggAqhPIjOAMQh4AHhTAEQgsACgIgCQgdgFgGggQgGgeATgTQAPgQAggGQARgEAkgBQAegGACgeQACgggcgWQgVgQgigIQgzgLgZgtQgYg5gPgcQgfg9AAgcQABgqA1gmQAcgUgEgtQgEgwgogQQgfgMgqgaQgugfgYgOQhWgyhNAGQhRAHgfgzQgegyAZhYQADgLgCgSIgFgeQgNgsgCgVQgEglAmgQQAfgNAeAaIAzAsQATALAWAcIAkAvQAvA0BHgaIhEhDQgjgmgLgfQgfhPByhJQAOgJADgMQADgOgNgQQhliDgOhLQgWh4B/hzQhUgFhiAUQhoAagyAJQg+ALgVgPQgYgTgEhJQgEhHAYhuQAciBADguQAIhtA3hHQA2hGBmgnIAvgSQAZgRAAglIhpALQg8AGgrACQg7ADgPgCQgqgHgUghQgWglASglQAIgPAmgsQAsg0AUgwQAYg4gEg9QgFhEBBguQBUg9AChBQAChBhPhDQgqgjAAgcQABgZAog0QAagjAtgXQAYgMA7gVQA2gSAagPQAogYAXglIC1AAQAlA7AtAWQAyAZBEgQQBagXApASQA5AYACBoQABA5AiA2QAiA2A3AhQD/CaEMA8QCHAeE1AGQEgAGCbAtQBWAZBCgMQBXgQAphPQAYguArgiQAZgUA9gkQAwgbBuhJQBlhCA7ghQDNhwCUg0QDHhGC0ADQBmADCvAJQDJAKBMACQBBADAugTQAzgWAggyIA9AAIAYAdQAPARADANQAqCpBPAzQBQA0CfgpQBTgXAvAbQAtAbAaBSQAmB9AvAWQAtAWCHgmQA7gQA1ASQA0ASAnAvQAYAeAwAYQBGAjAGAEQAvAfBhgHQBigHArAbQB7BOCIAKQCAAKCRgyQCJgwBqgHQCEgJB5AwQBoAqA5AJQBfAPBNgpQBog2DXhdQC+hZBuhgQAUgSASgHQAWgJAVAGQA+ASCKgRQCDgQBGAbQAcAMAegKQAcgIAXgaQA0g6A1AOQAjAJA+A3QC2CjBPBMQB4BxAoBVQA8CChACRQg2B6BTBqQBSBqCIgIQBTgEBAAcQBAAbAzA/QAXAdAnAlIBAA/IAAAeQgSgBglgLQgogNgQgCQg/gHgVBQQgWBTgZAeQgmAthOgFQgfgCgJAeQgIAbAQAaQAkA5AQBUIARCQQAGA2AdBXQAmByAHAcQAqCphcB5QgUAbAJAdQAJAcAhAQQBJAiAjA/QAfA4AFBWQADAuAlAoQARASA7AtIAAAeQgWA0hJAbQgoAOgUAIQgiAOgUASQhBA5gkgHQgtgIAGhnQADgygfgXQgegWgnAVQhcAyhygSQgogHg7gSIhkgeQhrgfhDAEQhfAEhBBEQhABCggAHQgzAMgzhOQgVgggjAMIg+AgQiIBBhoAZQiHAfh1gZQh7gbh1AZQhoAVhzBCQhLArgeAPQg9AfgxARQj6BTiaAFQjcAIixh+QhihGh0A7QguAXhHAbIh4AtQh6AxhSABQhtAChdhLQg2grguAUQgwAUgMBPQgLBGgBASQgCAyASAmQARAjgDAWQgEAdgjAPQhFAegwBRQgvBhgcAtgEhGRgPgQAvALCXA6QAeALAXgEQAigFAGgoQACgJgMgNIgVgVQgWgaAzgPQBogfArBGIASAgQAMAPAVgEQBMgOCsAOQCmAOBigWQgLgLg/geQgngTAFghQAFggAigUQAWgNArgJQBBgPBdgSICegeQg5AAg/ghQhHgrglgUQiDhFicgbQiSgZiZANQhqgBg3ADQhhAHgnAxQhZBvhjBXQhoBbh+BJQA6gTA+AAQAwAAAyAMg");
	this.shape_34.setTransform(521.8,219.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.7,1040.6,448.1);


(lib.syriaai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#42210B").s().p("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");
	this.shape.setTransform(351,257.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6E2405").s().p("EgqKAnVIhcgiIhUhMIiJiqIhMhCIgwgZIgrhVIgiheIhGghIhLAAIhAApIgpAgIAAgpIASgIIAFgSIASgGIAAgJIAPggIASAAIARgaIgJhJIgIggIAIhIIAJAAIAFgHIgOgyIAJggIAmgpIgHgSIAAg3IAhhpIBKgyIAWgJIAzggIAoAJIAXgQIAJAAIAhgoIAogRIAAgYIALAAIBAgjIBRhOIAggJIAGAAIAJgGIAAhOIgPgTIg/gYIANgLIAIgaIAhgmIAXgqIAKAAIAXgoIAIAAIAAgJIAvAJIB0AAIAAAJIAnAIIAfgIIAmAIIAZAPIAfAJIAfgJIAIgGIAAgpIgbgpIhEg7IAZguIAJgJIA9gSIAAg3IBSgJIA0gPIASgaIAhgGIAHgRIArAIIAhhJIASgRIAJAJIAPgSIgqgmIAbgpIAKgpIg9g6IAAgPIAJgRIAhgvIgSgaIhpAAIAAgRIgIhBIhJAAIgSgRIAJgXIAXgIIARgYIAJggIBRAPIAAgvIgZggIhJgJIAQggIAAgSIgfgIIgIgHIghAAIgSAPIgIASIggAOIkTgoIgSi8IBSjJIAYktIgvjkIgphBIApg3IBAibIAyjDIAnAAIAgAJIARAXIAAAyIApARIAOAOIARAgIAYASIAIAAIAOgSIASg/IAPgYIARgIIAxAIIAXggIBRgxIAOiIIAJggIAIgRIAPgJIAjAJIAfgYIA3gIICCARIAggJIAAg9IhZiKIgJgIIgOgvIgJgSIAJgxIAGgPIARgSIAXg3IgQggIAAgpIAZgQIARAAIBJiLIAQgYIAIAAIBJAvIApAiIBxABIAAAPIAhAgIApAJIAGAJIgPAXIAJApIAPgIIAaAAIAvApIBfAAICVAkIBQAiIAWgiIAwgWIB8gJIErhdIAwgnIAngOIA+gJICcAJIBuAtIAmAwIAYAnIAYAOIAtBBIAZAXIBmAfICjAfIB3AwICiAAIBngcIATAJIFSgyIA1gTIAxgiIAUAAIBJgXIBbgJIBggyIBbgXIAXggIAggSIASgXIA3gbICJggIBkgvIAPAAIARAoIBBAAIA/gHIBbAgIAPAOIAxASIBqgQIByAAIBAApICMgCIBBgGIBgAGIApgOIB7ghIBpghIAPAAIBDg5IBAhAIAqAAIAOAoIApAJIgQAYIAAAwIApAAIAABZIAFAaICMAIIj6CIIlJHBIoECRIiRR/IhwJIIjCGSIg3AgIiZAaIhAA3IggAJIi5BoIl7CiIgGAOIkCA6IAGAAIhfBAIifBRIq8FQIiQA6IgyAoIg3AmIgfAIIhRApIixBAImECwIlPCCIgJAXIh6ApInpDZIgoAXIhBAAIjBBVIhfA0IiPAPgEgtNAO5IADABIgDAEgEgtKAO6g");
	this.shape_1.setTransform(353.9,260.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,702,514.7);


(lib.sudanai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sudan.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754C24").s().p("AhUBnIAFgKIgFAKIgOAaIAOgagAhaBtIATgpQAOgfgKARIgbA2IAdg9IgYgcIAGgCIAigIIAZgGIgmBNIAOggIgGALQgEAEgOAeQgGAMATgqQATgmgNAYQgIAPABgGIgNAbIgKATQAPgfAFgKQAFgJgCACIgTAlIAMgaIgLAUIgLAWIgBABIAAgBgAgFglIgMgQQAEgGAKgWIADgHIACAEQgJAVAIgQIgLAaIAJgQIADgFIACgBQABAAgCAHIAFgJIgGgHIAFgMQAOghgKATQAFgKACgGIAJALIgDAHIgIATIgHANIACADIgQAkIAYAfQgFAAgSAFIgOADIgGABgAA4gRIgtg4IASgnIBGBWQgEgBgjAJIgEABIABABIgDAAIgDAAIAFgBgAAbhzQAIgOAAACIgBAGIACgEIgHANg");
	this.shape.setTransform(770.4,231.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgBAFIAFgNIgBAGIgGALIACgEg");
	this.shape_1.setTransform(766.2,231.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#754C24").s().p("AgJAUQACgHAMgaQAKgRgIAWIgHAOIgKAQIABgCg");
	this.shape_2.setTransform(772,220.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#754C24").s().p("AhAAbIADgEIBygyIgCgBIAEACIAKAFIgGgDIh6A1QAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAAAAAg");
	this.shape_3.setTransform(770.1,239.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#754C24").s().p("AAEgNIACgBQAAAFgFAKQgEAKABADIgDABg");
	this.shape_4.setTransform(763.3,240.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCAAQACgEADAAIgDAHIgBACQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAgBg");
	this.shape_5.setTransform(767,227.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#754C24").s().p("ABEBGQgGgDgXgFIgYgHIACgDIBJATIhGgWIBnAdgAhTBDIg0ADIA+g8IgbgNIgMgGQADACgKgFIAyASIgDADIACABIACAAIABABIAFgCIgHgDIAhgfQAEgEADgCQABgFgGgGQgFgHAEgGIAEAMIAEAJIABgNIABgPQABgTAQAFIAIAWIAKgBIAKgCIARgHQAIgDACAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAIgBAEIAAABIgPAnIALgEIAAABQADAFAHgEQAJgIADAAQAFgGADgGQADgHAFgGQAKADAAAMQgCAJgHANIgMATQgGAHADACIAYgMQATgMAEgIIgOAFIAKgNIAGAFQAEABAJgGQgNALADACQACABAJgDIAGgBIgbAPQAHgHgCAAQgDAAgPAHQABAGgJAHIgDADIgCABIgvAcIgPAEIAGgFQADgCABgDQABgCAKgJQgKAEgFgBQgDAAgEgEIgGACIgFAOIgDgBIAAgBIADgJQgBgCgDAKIgBABIgMgFIgNAEIgFAAIAaAOIgxANIgtAKQAOgEgDAAgAAAA6IACgCIAAABIgCABgAANAxIAQgGIgJAGIgDABQgGABgJAFIALgHgAAEAjIACABIgDALIAAAAIABAAIABAAIgBABIgDAFIAAAAIgCABgAAFAvIABgBIAPgDIgIAGIgKADIACgFg");
	this.shape_6.setTransform(766,227);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B25538").s().p("AgHgCIgBgCIADAAIAHACIABgCIAGAHIgBADg");
	this.shape_7.setTransform(766.4,232.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#754C24").s().p("AgTgYIBKASIAAg/IARA/IAFACQABAAABABQAAAAgBAAQAAAAgBAAQgCgBgCAAIBAAQIgGgBIhMgRIAAAxIAYAXIADADIhjApgAiIg9IA+ARIAAABIgdgIIAAAAIABADIAAABIAVBPIABABIAAABIgYAXgAhIglIgCgGIAOAEIAAACQAfAHgZgHQAPADgVgFIABgiIAIAHIgqgrIAaAaIAygUIAAABIAfAIQgFAMgGAUIgSAeIgEAFIAAAAIAAAAIAAABIAAgBIAAADIgpgKIAAArgAAwheIgSARIAUgVIgDACIAIgIIAAAjg");
	this.shape_8.setTransform(766.3,234);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#754C24").s().p("AAMBGIgBgBIggh6IgMAKIAagbIAGgEIgDAEIAmCRg");
	this.shape_9.setTransform(775.9,227.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAAAAQADgCACABIgHADIgCAAIAEgCg");
	this.shape_10.setTransform(768.4,228.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#754C24").s().p("AAmBJIAFAGIgLgPIgQgTIheAAIAAgBIgFAHIgUAbQAIgOAcgmIASgYIANgNIALAAIgGgKIABAAIgBAAIAAgBIgBAAIAAAAIABAAIAPgKQAOgKgOAJIgQAKIAAABIgIAFIADgDIgBABIACgCIABAAIACgDIAAgBIACgCQASgWAJgQIAbgkQgHAMAEACQABABAFgBIAJgJQAEgGAFgDIgPARQAFgDARgOQANgLgBAIIgPAQQACACAHAAIAMgBQAQAAgKAKQAMgFAFgBQAHAAAFgCIgMAGQALgFgDADIAEBzIg5gWQAUAJgUgIIAQAHIAcALIgmgOIgeAmIgKgNIAiAuIgIgMIAJAMIAJANIALAPIgegngAgegVIAOATIALAOIANgRQgKgEACAAIAFABIgdgNIAAgDgAgfgVIAAAAIgDACg");
	this.shape_11.setTransform(767.9,233.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#754C24").s().p("AgCBlIABjIIABgBIACgDIAAAAIAADPg");
	this.shape_12.setTransform(774.7,230.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B25538").s().p("AgBADIABgEIgCgCIABgBQADACABADIgBACIgCACg");
	this.shape_13.setTransform(764.7,231.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#754C24").s().p("ABUBgIgBgBIABABIAJALgAAMANIAiAlIAOAQIgMgNIAWAZQAOAQgZgcIAGAHIgQgSIgGgGIAoAuIgDgEIADAFIgegiIhLAGIABgCIAFgJQALgRgJANIgUAcIgQAVgAhZhlIgDgFIAsAyQgBgCgBgBQgBgBgBgBQAAAAABAAQAAAAABABIAKAMIgHgJIA7BGIhlhygAgxg7IgEgEIAEAEIACACg");
	this.shape_14.setTransform(663.7,16.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#754C24").s().p("AgoBpIAOgRQgBgBgFAEIgHAEIgCAAIBIjIIAAgBIAAAEIAAAAIACAUIAAgEIACAVIgBgEIABAKIAAAAIACAOIgBgLIAGALIAAACIgFABIAAADIAFAzIAAAAIAAAAIg4BJQAIgLgBAAIgEACIgQATIAMgPIgQASQgIAJgBAAIAAgCg");
	this.shape_15.setTransform(660.8,17);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#754C24").s().p("ABLgIIgCgCIAKALIilAKg");
	this.shape_16.setTransform(665.8,28.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#754C24").s().p("AgbCPIgEAAIgDAAQgMgBgHgDIgFgCIgCgCIAAAAIALgwIgBACQgaAjgHgMQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgFAJgLQgOAMABgHQABgFAJgRIANgWQADgIgOAHQACgEAJgLIAXARIAJgqIADgMIAAgGIAAgBIgcAlIgDADQAJgKgEgBQgKAIgGACIAGAEIgCABIgKADIAEgHIgDgBIgEgEIgFgGIANAJIAGgOQAFgKgCgHQgGgBgDgHQgEgGABgJIABgVIAbgOIACgBIAAgEIADAAIAlgJQACgBADgYIgHACIgCAAIgwALIgHgJIBAgQIAFgOQAAAKgCAOQgDAOgBAHQgCAIADAAIARhEIACgFIgDBtIgEhLQgFAPgBAMIABAAIAJAwIAKgGIAmgfIgPAPQACgCgJALQgJAMAJgHIAqgsIgeAkQgGAHgJAPQgHAHgPAUQgMAPgHAHQACgDgFAJIgFAIQgLANgJADQgDABgEAEIAPALIgCAFIgBAAIBEgRIgBAAIAcgnIABAGIACALQACAHADACQABAAAAAAQABABAAAAQABAAAAAAQABgBABAAIAFgDQgBAEgFAEQgEADgGADIg1AXIgNAKIgLANIAigEIAogNQAJgEAJgHQgCAIgDAHIgEAHIgFAHQgFAIgJAHIgIAGIgKAGQgJAFgMAEQgJADgLADIgKABIgIABIgJgBgAgzBKQgIAMAJgEIADgCIACgIIACgKIgIAMg");
	this.shape_17.setTransform(760.6,229.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgGADQAAgDABgCIAIgDQAGgEgFAGIgJALIgBgFg");
	this.shape_18.setTransform(760.3,228.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#754C24").s().p("AgSgHQAGgFABgDIAFgKIA8AsIgBAAIgDAQIgBAHgAg1ggIAjAZIgJAHIgDAAQgQAAgHgggAgSgHgAgGgZIgWgQQAFADAJACQALABAAAFIgDAFg");
	this.shape_19.setTransform(752.2,238);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#754C24").s().p("AgDAIIAAgEIAEgKQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAAAAAQACABAAAEIgBAGQAAABgBAAQAAABgBAAQAAABgBAAQAAAAAAAAIgDABIAAAAg");
	this.shape_20.setTransform(764.9,227.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#754C24").s().p("AgCADIAFgJQAAAAAAAAQAAAAAAAAQAAAAAAABQAAABAAABIgBAFQgDAFgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAgBAAgBg");
	this.shape_21.setTransform(767.1,221.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#754C24").s().p("AgQAEIgEgFQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAFgEIAIABQALACACgBQAEgDgPgNQAPAJAKAMQgJAPgLALQgHgLgKgJg");
	this.shape_22.setTransform(769.5,224.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAIgCQgBAAAAAAQAAgBABAAQAAAAACAAQABAAABABIAFACIghAEg");
	this.shape_23.setTransform(766.8,232);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#754C24").s().p("AAAAKIAAgFIAAgeIABAOIgBAQIABAJIgBAMg");
	this.shape_24.setTransform(763.1,223.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgFAJQAEgIgBgBIAJgJQgLAPAFgEIgHAIIABgBg");
	this.shape_25.setTransform(761,232.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#754C24").s().p("AgDBZQgCgBAGgMQADABASgUIALgNIAEgDIABgBIADgDIgmAxIgBABIgCACIgCABIgBgBgAgYgbIABgCIASADQgMgCgHABgAgjggIAbgyIgEgDQADACAFgGIgEAHIAIAJIgXAsgAgoghIAFABIgBADgAgjgggAAAhJIACgDIgBgDIADgBIgCAEIABAEIAAABIAAAAg");
	this.shape_26.setTransform(756,231.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#754C24").s().p("Ah3geQAAgQAEgOIAAgBIAFgRQAGgMAGgIQAIgMAPgKIggA9IBGAQIADgEIAAAAIgJgCIgBAAIgGAAIARgfQgBAEALAJIAIAHQgGAIgEACQgFAAgEADIAPADIgBAFIANADIADgFIAhgsIAegjQgJALACABIAFgCIAHgKQAEgGAFgEIgOASIASgUQAKgNgCAFIgMASQAAABAAAAQAAAAABAAQAAAAAAAAQAAAAABgBIACAAQAHAEAGAHIAcBeIADADIhegHIBFA+QACACgCAEQgCAJgMAMIhKAYIgDACIh+AwgAhJBOIACABIAFAIIADgDIAFgIIAAADIAIgQQAFgKAPgdQAEgMgIARIgFAHIACgGQAAAAAAgBQAAAAAAABQgBAAAAABQgBABgBACIgRAmIAJgaIAEgJgAAEgcIgBACIgCACIAEAGIADALIAOgFQABAAABAAQAAAAABAAQAAAAAAgBQAAAAAAgBQABgCgEgFIgLgJIgDgBgAgKgqIgJgCIAFgPQAIAHACgBIgFALg");
	this.shape_27.setTransform(762.4,234.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgGADQAGgFAHgDIgNALg");
	this.shape_28.setTransform(757.8,231.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#754C24").s().p("AgKALIAAgGQACgHAQgLQAFgBgDAGQgDAGgIAIIgIAIg");
	this.shape_29.setTransform(751.6,237.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B25538").s().p("AAXAWQAAgCADgDIAAgCQgBgFgHAAQgKABgBgBQgEgCgFgHQgFgGgFgBIgHAAIgHABQgFgEABgEQACgBAGACQAFAAACgHIACgCIAJACQAGANAdAUIAAADIgFAFg");
	this.shape_30.setTransform(760.6,229.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#754C24").s().p("AgbBxIgBgBIAAgBIAAgDIgBAAIAChBIABgFIAAgCIABgCIABgDIgBACIADgRIABgGIBChcIAzBRIAZgGIgEABIAFgCIgJBYIgTgJIgQgFIgCgBIgBgBIgBAAIAAgBIAAAAIAGhAIgCABIgBAAIgGA+IAAABIAAAAIgDgBIgJgEIAKADIgNgGIgeAoIg0ASgAAZBgIABgBIAAAAIABAAIAAACIgBAAIgBgBgAg2A0IgGAIIgSgcQgJAAgfAGQgKACAngJIADgfIAbAJIgKgEQgPgGAFABIAQgWQAFAFgWgdIgMgRQAQATALASIAGAGIgkgxIA7gVIACgCIABAAIAAgIIACgMQABAPgBAUQgBAUABAOQABACAAgZQAAgbABACQABgBAAAAQABAAAAAAQABAAAAAAQAAAAABAAQACAIgCAmQABgFABAQQABAPABgLIAEgiQACgVADgFIgDBJIgGAcIgoA3IgNAQgAgVAKIAAAAg");
	this.shape_31.setTransform(715.5,57.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#754C24").s().p("AgrgNIACAKIAAADIAAAAQAAABABAAQAAAAAAAAQABAAAAAAQABABABAAIBJgaIAGAJIACACIhQAcIgDABIgCAAIAAABIAAACIgCAGg");
	this.shape_32.setTransform(716.9,72.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgDgCQAEgBAFAEIgIACIgBAAQgEAAAEgFg");
	this.shape_33.setTransform(717.4,57);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#754C24").s().p("AgpB0IABADIADALIgbACgAgqBqQgBgLgIghQAAgCAAgBQgBgBAAAAQAAABABACQAAACAAADQACANgBgGIgQhBIAIAQIgGghIAAAAIACgBIgHgDIgCAFIAAgBIABgEIgCAHIAAABIABgDIgBAGIgBABIAAAAIABAAIgBABIAAAAIAAACIAAgCQgBAFABAHIAAAGIAAgBIAAACIAAAGIgBgKQgBgOABgFIADgKIAAAAIABAAIAAAAIABgEQAGgVADgZIALgtQgBAOADAAIAIgCQACgEABgIQABgIAFgEIgGAWQAEgFAKgSQAGgIADgBQAFgBAFAGIgGAXIAVAMIAFADQATAOAKAPQANASACASQABASgJAIQAGADAFAGIAEAIIADAIQABAFADAEIgMgFQAFAEACACIhvBOgAgygWQgFAEgHACIgEACIgCAAIAAAAIAAABIAFAAQAJgBAFgCQAIgDAAgCQABgBAAAAQAAgBgBAAQAAAAAAAAQgBAAgBAAIgHABgAhJAZIABAGgAhHgDIACgDIADAOgAhJgBIABgBIAAgBIABAAIgBACIgBAAg");
	this.shape_34.setTransform(720.3,61.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#754C24").s().p("AAAAJIAAgPIAAgEIABAGIgBALIAAAEIAAgCg");
	this.shape_35.setTransform(713.1,45.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B25538").s().p("AADAEIgIgBIgCgBIgBgCIABgDIACgBQARAAgEAJIgCAAg");
	this.shape_36.setTransform(713,59.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#754C24").s().p("AhHAoQgJgIgDgBQAHgIAEgCIAKgGQALgFABgCQgHgCgCgEIgCgCQAAgBgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAIAAgBIACgBQADgCgWAAIAAAAIgMAAIgVgCQAVgDAYAEQAKAAgCgCIhGgHIgMgDQAQAAATADQAUADAOAAQACgCgZgCQgagDABgCQgBgGABAAIAGgBIgEgBQAlgCAKgBQAHgBAXgKQADAEAMAEIARAGIAFADIACAAIgBAAIACABIABAAIABAAIAfADIAoACIAKABIAxACIABAAIABABIABABQAAAEgKAJQgPgDgUgBQgUgCAVADIgWgBIgNgBQAXACABABIAGACIADABIgHABIAIABIAAAAIAQAAIgMAAIgEAAQADABANACIAFgDIABgBIABAAIABABIAdAAIAAAAIABgCIAAAAIACABIADAEIAAAIIgBAIQgBAKgEAFIgDAEIAEABIiMgbIgDAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgDABIgMAFIgMAHQgMAJgKAJIgFACQgFAAgFgFgAhNgZQgBAAAAgBQAAAAABAAQAAAAABgBQACAAACAAIgggCIAbAEIAAAAg");
	this.shape_37.setTransform(742.3,133);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgFAAQgIgBAIAAIAPABIgHACIgIgCg");
	this.shape_38.setTransform(741.5,131.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#754C24").s().p("AgGAAQgCAAAAAAQgBAAAAAAQABAAABAAQACAAACAAQAJAAACAAQABABABAAQAAAAAAAAQAAAAAAAAQgBAAgBAAIgOgBg");
	this.shape_39.setTransform(738,130.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#754C24").s().p("AgGAAQgBAAAAAAQAAAAAAAAQABAAAAAAQABAAABAAIAFgBQAGABABAAQAAABAAAAQAAAAgBAAQAAABgBAAQgBAAgBAAg");
	this.shape_40.setTransform(731.5,130.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#754C24").s().p("AAAACQgKgFgDADIgCgFIAfAFIgBAFIgDABQgFAAgHgEg");
	this.shape_41.setTransform(733,129.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#754C24").s().p("AACAEIgFgFIgCgEIAFAFIAGAHg");
	this.shape_42.setTransform(741.5,129.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgGgCQAGgCAHAHIgKAAQgFAAACgFg");
	this.shape_43.setTransform(745.6,127);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#754C24").s().p("AAAAiIgTgEIAZgtIgLgNIgDgFIAQAQIgCACQAMAMACAAIgUAlg");
	this.shape_44.setTransform(736.2,125.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgKARIADgIIAIgKIALgQQABgBgLARQgKAPAEgEIgHAIIABgBg");
	this.shape_45.setTransform(740.3,131.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#754C24").s().p("ABEA+IgTACIhDgWIABAAIBCAVIATgCQABgBgCgRIgBgDIAGAhIAAABQgCAAgCgMgAAygtIANA9IADAYgAg6hFQgNgDgBgBIALABIAVAFIgCAAIgQgCg");
	this.shape_46.setTransform(736.9,135.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#754C24").s().p("AgCB4IhJADIAKgfIAGgJIAmgCIgHgRIgBgFIAKgKIgFgHIgBAJIgJABIgigLIgIAGQgCACAFgJIAigpIgKgEQABAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAIgIAAQgRgFAIgBIAOgBIAGgHIAAAAIADAEIgEAFIAKAHIABgCIgDAAIABgCIAAgBIABgBIgBgBQgPgZgXgCQgSgSgMgTQALAAARgGIAXgJIBAANIADgCIAHgKIAIgKIAAAAIAAAAIAAAAQgMgFgOgDIgrgMIgFAIIgBAAIgEgWIgBAAIAUgCIBIAXQgDACgIALIAHAEQATAJAOAPIASBVIAGAEIgDAGIAGAAQADACgLABIgEAHIAMAAIABAEQADACAHABQgOgBACADQAAABAJAGQAHAFgCAAIgegIQAKgCgCgCIgGgDIgTAgIANAHQgKAGgLACIgBACQABAFgEgCIgpAmgAANA9IADAFQACACAGADIAGABIgKgLIgCAAIgFAAgABPAqQAIABAFgCIgKgDgAgbAYIAOACIAGgBIgMgOIgJgCIgEgCgAgMAQIACgEIgIgBIAGAFgAgVAHIAIACIAEABIAFgIQACAAgKgCIgXgDIANAKIgCgCgAggAFIAEAAIgCgCIgDgCgAgmgHIAAABIACgEIAAgBgAgogGIABAAIgCACQgEgBAFgBg");
	this.shape_47.setTransform(745.3,130.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#754C24").s().p("AgHAAIgDAAQAFAAAAgBQAWACgJABQgHgCgIAAg");
	this.shape_48.setTransform(727.6,129.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#754C24").s().p("AgOAAQgOgDAjAEIALABg");
	this.shape_49.setTransform(753.8,132.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B25538").s().p("AgHAYQgBgCABgFIABgFQgCgOABgHIACgFIABgGQAAgDADAAIADACIADAAIAEACIgBADIgDADQgCADgBANQgBANgDAIIgCAAg");
	this.shape_50.setTransform(741.6,132.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#754C24").s().p("AhoAPIAFgDQANgFgIADQgJACANgGQAWgJAHgCIAOgFIAAAEIADABQAEABAFgBIgBAFIgBALIAAADIACAGQADAIADADIAGAGQADAEAFABQAKAGAMACIALgEIAIgGIAHgHIggAzgAiIAaQAFgEAMgFQgOAGAEgCIATgKIAGAEQgcAMgEAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAgAAoATQgBgFgCgCIgWgPIgKgJIgGgHIgBgBIABAAIAFgDIAOgGIB3gqIhwA4IAjAHIgVAgIABgFgAhoAPgABTgCIgCgBIgVgFIACgCIAMAFIAIACIADABgABEgIIgFgBIAFABgAA8gIgAgxgfQgEgEgigGQgOgHAvALQAnAJgYgIQgPgFAGgBQAEAAgigJIgUgHQAUAEAYAJQAKADgCgBIhCgZIgLgEQAQAEARAHQATAIANADQADABgYgKQgZgJACgBQAAgBAAgBQAAgBAAAAQAAgBABAAQAAAAAAAAQAIAAAjAPQgDgCATAGIArgeIAAABIArAdQgJAEALgEIA4gXIhCAeQgoAUgSAGQAGgCgVAJIgKAEg");
	this.shape_51.setTransform(778.8,232);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AADADIgIgDQgHgDAIACIANAEIgGAAg");
	this.shape_52.setTransform(779.4,228.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#754C24").s().p("AAOBcQgOgIAAAAIgZimIAPAdIgGgmIAqBTIgRgFQADABABACIAAAFIgXgwIAWCOIADADIgBAAg");
	this.shape_53.setTransform(792.9,228.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgBAAQACgDACAAIgEAGIgBABIABgEg");
	this.shape_54.setTransform(781.5,225.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgNAPIACgGQAAgBABAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQAGgDAGgEQAGgIAIgGIgOAPQgNAOAIgEQgIAIgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBABAAg");
	this.shape_55.setTransform(777.6,230.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#754C24").s().p("AgOAZQgIgFAAgQQADACAGABIAHgDQAGgEAHgJIAKgNIAEgEQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQgFAJgEAMIAEgJIAFgJIgFAJIgFALIgBACIgFALIABgEIgHAOIAAAAIAAAAQAAAAAAAAQABAAAAAAQAAABgBAAQAAAAAAABIgDADQgDACgEAAQgDAAgCgCg");
	this.shape_56.setTransform(774.2,237.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#754C24").s().p("AhEB6IgCAFIAHgeQgBAKABgDQACgCADgPIAAgBIABAAQgEAQABAJIAFgOIgBAQQgBAAAAAAQgBAAgBAAQAAABAAAAQgBAAAAAAQgCADgBAKQADgbgIAWgAgpBxQgCgCgBgEQgCgFgBgNIgKgDIABgFIAGgaQAAAAAAAAQABAAAAAAQAAAAAAABQABABAAABIgBgTIACgdIABgGIgCgBIABgHIgBAAIABgCIAAACIAAAAIAEgGIADgHIAAgBIAAAAIgCABIgDAEIABgDQABgBAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAIgHAMIgBAEIACgDIACABIgDAHIgCgBIgPAeIABgEQAEgLgDgBIgEABIgHABQgJADgHgDQgIgEACgIIgEgIIBBgdIABgCIAGgMIAAAAIAkhKIAAAAIABgBIAAgDIAGgDIAKAAQAIABAEACQAIADAFAFQAPAMAAAQQAIgDAGACQADABAHAFIAIAHQAFAFAFAAIgNAFQAPgCgGAJIgFAGQAAABgBABQAAAAAAABQgBAAAAABQABAAAAAAIgMAHQgJACgKgCQgIgCgOAFIgLgWQgCABACgBIgFACIANBNIAGAEIgGgDIAOAJIhXA2IgBABIABARIBnhAIALAFIAAABIhyBHIgBAAIgCAAgAgdgUIgKACIgDAXIAAAHIgBAPQAEgMAEgBIAcgGIgBgJQAAAAAAgBQAAAAABAAQAAAAABAAQABAAABAAIgEgXIgVAFgAgrgRIABAAIAAgBIAAAAgAgngSQAIgEAAgBIgDAAIgEADIAAgBIACgCIAJgMIAAgBIABgBQADgFgBgCQgBgCgGAIIgGANIgBABIgBABIgBAEIAAABIACgCIgBACgAgDgaIACADIABgEIgDABgAAZg7IAFgCIgHgMgAhbBPIABAAIgFAMgAhaBPIAJgRIgCADIAHgRIAGgNIgEAJIAFgFIASgkIADAAIgLA8IgBAIQgBALADAEgAAighQgDgBAGgDIAEgBIAEAHIgLgCg");
	this.shape_57.setTransform(783.6,231.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#754C24").s().p("AAHADIgOgFIgCgBQABAAABABQABAAAAAAQABAAAAAAQAAgBAAAAQARAHgCAAIgDgBg");
	this.shape_58.setTransform(766.4,223.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#B25538").s().p("AgBAIIgCgBIgCAAQgBAAAAAAQAAABAAgBQAAAAgBgBQAAAAAAgBIAEgNIADAGIAEACQADACABAFIgBACg");
	this.shape_59.setTransform(779.2,229.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#754C24").s().p("AgfBsIAGgiIgFAXQgFAagBgCIgDABQAAABgBAAQgBAAAAgBQgBAAAAAAQAAgBgBgBQgDgGABgIQACgJAHgWIgBABIgDgBQgDgBgDgEIggglQAVgIgIACQgyARgIABIBFgXIAlgMIABgEIAJgnIAHgwIABgCIAAAHIAFgcQgGAsAGgnIADgVQAEgXAAACIABAGIABgFQgIBEgFAfIgIAvIAOgFIAOgEQARgFAIgCIAdgJQAEgBACgBQABgBABAAQABAAgBAAQgBAAgCABQgJACAOgFQAogNgCACIgPAGQAPgEgOAFIgjAMIhRAaIgDAMIAAABIAAABIgBACIAAACIgBADIABgEIgCAIIABgEIgHAdIgBACIAHgbIgDAQIAAACIgCAKIgHAmQgCALAHgsIAAgGIAAADIABgFQAFghgFAaQgDAQAAgGIgFAfIgEAUQADgaAEgSQACgJgBAAIgQBRQACgQAFgSg");
	this.shape_60.setTransform(787.5,225.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#754C24").s().p("AAKgLIACABQgCAEgKAHQgHAIAAACIgEABg");
	this.shape_61.setTransform(779.7,232.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgOALIAAAAIAcgQIAAgGIABAJIAAACIAAgCIAAgBIgcAPg");
	this.shape_62.setTransform(783.6,222.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AAEAMIAFgZIAGgCIABAAIgFAfIgCgBIACABIgHgEgAgPgCIABgDIAJgDIgCALIAEADIgMgIg");
	this.shape_63.setTransform(787.3,226.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#754C24").s().p("AgqAcIgCgRIAAgCIBAgkIAOALIABAAIhNAsgAAjgQIABgBIAIAHIABABIgKgHgAAjgQIAAAAg");
	this.shape_64.setTransform(791.4,235);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#754C24").s().p("AgIBVQgDgYgBAAIADgCIANgIIgCgBIgJgIIAGgEIAFgDIACAHIARACIAUABIgGAiIgDgCIgoAYIgCgQgAhbA/IgFABIgGACIADgBIABAAIANhOIgegYIASANIgEgEIBJgqIABgQQABgGADALIgBgSIAAAAIADgBIAWB7IAMgNIADgEIABAAIAZgdIAGgGIgEAFIAMgNIATgXQACgCgTAZIgRAYIATgTQAOgPAFgJIgKAKIAJgMQAEAAAJgJQgLANACAAIAKgGQAGgEgBABIgWAWQAFgJgCACQgDABgLALQAAADgFAMQgFALABACIATgNIgJAIIAUA3IggABIAPAAIAOAAIAiAAQgRACguAAIgKAAIAFgbIgTAGIgeALIAJgMIANgRQgSASAKgOIgYAbIAAAAIADgFIgDgBIAAACIAAAEIgBABIgCgRQgDgSABASIADARIhbAegAgMA9IAAAAIAAAAgAgOArIACAAIAAAEIgBABIgBgFgAArAtIAAAAgAgNAoIAAgBIABgBIAAAAIABgBIAAABIAKgDIgHAHIgBgCIgDADg");
	this.shape_65.setTransform(787.2,222.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#754C24").s().p("AAAAGIgBgCIgFgCQABgCADgCIAFgEQADgFABAEIgEAGQgCADAAAFIABADIgCgEg");
	this.shape_66.setTransform(781.8,239.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#B25538").s().p("AgEADIgBgEIABgCIAEgBIAGAGIAAADg");
	this.shape_67.setTransform(786.1,226.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#754C24").s().p("AgHBGIACANIg3gYIADgCIgFADIAFgEIgqAZIAJgGIgTALQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAABgBIAngXIAOgJIgDgqIgCgBIgVgIIBFAbIAKAyIgBgFIAHAqIABAHIgKg2gAgCBYIgBgFIgBgDIABADIABAFIACANgAhmBSIADgBIgDABIgUAMgAB7BVIgJgCIgCgBIgQgGIAAgCIAbALIAAAAgABWBGQARAHgbgKIg0gWIgmgPIgShXIBcAqIAcgRIAIBqIgKgEgAA9gPIACABQACgBACgBQABgBAAgBQABAAgBAAQAAAAgBAAIABgBIgHAEgAA9gPIAAAAIAJgGIgJAGgAhogFIAVAIgAgig6IAAgCIgDgNQAGAYgHggIgEgVIgEgVIABABIANBBg");
	this.shape_68.setTransform(788.2,205.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#754C24").s().p("AAMgHQARgJgUANIgNAHIgPAIg");
	this.shape_69.setTransform(798.1,201.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#754C24").s().p("Ag1gKIABgBIABAAIAYgSIgBAAIBMAdIAAAAIAGAeg");
	this.shape_70.setTransform(783.6,215.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#754C24").s().p("AgtAiIADAJIgBABIgCgKgAgqArgAgwAQIAAAAIBIg7IAZAKIhbBMgAgwAPIAAABIAAAAg");
	this.shape_71.setTransform(793.5,216);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#754C24").s().p("ABmBTQACABABAAQABABAAAAQAAAAAAgBQgBAAgBAAIgCgBIAAAAIgJgDIAAAAIgRhpIAMgJIABAAIATB3IAOAFIASAGIgmgNgAgJBaIgGgbIgCgMQABACAAABQABABAAABQAAAAAAAAQAAgBAAgBIgDgLIABABIAAgBIAAAAIAAAAIAbAJIgEgaIAMgJIgLAHIAEgEIgcAWIAAAAIADgDIgDgBQgBgCAAABIAAACIABADIAAAAIAAABIgBAAIAAgBIAAAAIAAAAIgBABIABAAIAAAAIAAAAIgBAAIAAAAIhWgjIAMAFIgEgCIgJgEQgrgQAOAFIAOAEIAAABIBQhBIAAABIABAFIgCgQQgBgMACAMIgDgVICKA2QANgKgSAOIgvAjQgIAFANgIQADgCABgBQACgBAAAAQAAgBgBABQAAABgDACIAOgKIAYgSQAHgFg0AnIAKBCIAeAKIgYgGIALADIgWgHIAFACIAfALIgugOIgcgLQgEgDgWgIIAAABIApARIACAAIgiAeIgBgBg");
	this.shape_72.setTransform(788.6,203.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#B25538").s().p("AgCAAIABgBIACgBIACACIgBACIgCABg");
	this.shape_73.setTransform(786.7,208.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#754C24").s().p("Eg3iAkQIADAHIABgBIAKgDIARgJIARgNIAPgQIAEgFIAAABIABAAIAIgKIgBAAIgFgBIACgwIAGgBIABgCIgUguIgBAAIgBAAIAAAAIgDABIgPAGIgBAAIgIgHIAEAIIgBABIAAAAIgHgVIgCAAIgTAAIgOgPIgCgBIAPAQIgwAEIgSAKQgMAHgIAIIgJAJIgKAMIgKANIgdgOIALgSIAcgfIAJgHIAggTIAjgHIgcgeIDCAfIABAAIABABIADgBIAAgBIAEAAIASAAQAYABAUAFIAKADIAFAAIAJgGIAjAEIAmgXIABAAIAEgDIgBgFIABgTQAAgUADgUQACgVAHgTQAFgOAIgRIgGgCIAAgVQACgUAEgRIAEgNIAHgRIAEgIIANgUQALgOANgNIAHgFIgCh6IAAgVIABgDIAAAAIAjANIAJgTIACgCIABgBIADgFIAAgCIAAgBIABgBIAkgwIAqgNIAAgBIADgCIABgEIAAgBIAAAAIABgBIAAAAIgBgRIAAgKIADgUQACgNAEgLIAFgLIADgGIAAAAIADgIQAFgPAJgPIAAAAQAKgbAWgWIAIgIIACgCIAEgEIASgMIAagOIAagKQAHgBACABIAGADIABgBIABAAIACgEQAAAAAAgBQABgBAAAAQAAgBABAAQAAAAAAAAIATgCQAPgBAMABIAHAAIABABIACAAIAAgGIADgBIAOgBIAZABIAFABIAMgCIAEgBIAMgDQASgFAOAAIALAAIAOgGIAfgJQASgEAYgBIAVgEIAPgBIAYgGIABAAIABAHIAEAAIABAAIACAAIABABIABAAIgCAaIABAEQAGAXAGAPIAlhRIAGAAIAhAHQASAFARAJIAIAEIAQALIAQANIAEAFIAVgZIAoCUIAEAGQAIAKAJAOIAIAOIABABIAAABIAAABIAXAgIAQAZQAFAHACAFIACAHQgBADgJgKIArA/IAfBLIABACIABABIAFAFIAGADIAHABIABAAIA3ASIgCgBIABAAIABAAIAHgBIACgCIABgBIABAAIA9ghQAjgRAOgEQAVgHAegCIArgBIAdAAIGnAUIACADIBACBIAMADICSAFIAEAAIACAAIABABIAPACIACAAIAIgEIABgEIAKgMIAZgcIASgUIADhFIBGgBIABgBIAIgHQARgMASgGIASgGIASgEQAKgBAQAA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QAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAIAAAAIgTgYIAgg0IAOgVQAIgJAKgIQASgQAYgGIASgFIATADIgBAEIABAAIABAAIAGACQAEABAGAAIAJABIADABQAAAAAAAAQAAAAABABQAAAAAAABQAAAAAAABIAFABIAHACIABAAIABADIAAAAIADABIAKABQADABAEgDIACAAQAKgBAJABIADAAIAjgGIAIACIAFgPIgBgCIACgCIAFgSIAKgcIAMgZIA0gQQAXgHANgCQALgBAMABIAMAAIAIAAIABAAIACgIIACgBIgFgPIAWgWIAsgCIAFABIACAAIAGACIAHACIARAMIAEgGIARgSIACAAIACABIADABIAFAAIALgEIADAAIABAAIAKAMIAPgTIACABIALADIAFAGIABABIACgBIADgBIADAAQACgBAEABIgDAAIAMACIAIgIIAHAEQAFACAEAIIAAAAIABAAIAFACQAJAHAHgBIgBAAIAAABIABgBIAAAAIABgCIABgEIAFgHIAEgOIAGgGQAFgCAKgBIAIAAIAEgCIAEgCIABgBQACgFAJgLIALgQIAHgRIAbgqQAKgNAHgGQAHgHAKgGIASgKQAZgOAKgFIgNgtIBmg7Ih6CWIgKAOIgFAJIgSAuIAAAAIAAABIAAABQgCANgEALIgLAXIgFAJIAAABIgQgIIgRgGIAZAcIgJALIgDACIgBACIgBAAIgBABIgCAAIgFABQgFACgDACQgCADAAAFQgBAHgCACIgBADIAAACIgCACIgEAGIgKAKIgGAEIgJAFQgRAIgSAAIgCAIIhKAfIAAgBIACgVIAAgMIgCACIgLALIgHAEIgCACIgKAFIgMAFIAAABIgCABIgJAFQgEACgEABIgEAAIgBAAIAAgDQgMAFgMAAIgKAAIgTgEIgHAYQgLAFgGAAIgDAAIgFAAIgDgBIgGACIgigBIgMAAIgIACQAAAIgCAIIgBAGIgEAGIgCADIAEARIgcAhIgBAAIgGAKIgEADIgCAEIgDADIAAgBIgIgEIgBAAIAAACIgJAYIgBADIgFAIIgVAkIgggZQgCgCgDgBIgPgIIgFgEIgQAFIgOABIgFgBIAAABIgJADQgFADgEgBIgSgBIgJAAQgHAAgCgBIAAgBQgDgFgFgDIgBAAIgCAFIgFAHIgEAKQgCAFABAFQABAEACAEIACgBIACAFIABABIACAFQADAIABAJIAAAJIAEADIAEARIgnANQAAAHAOALIADADIgQgJIgBALIAPAKIABAAIABAAIgFAMIABAEIACAEIgDAFIgIAKQgNANgEAEIgIACIgDAPQgCAKABAGIAAACIAAABIAAABIACABIAFAFIADAFIAKAEIAKAOIgjAaIAGAEIAJAEIAYAJIgIAjIACAHIABAEIAAACIAGADIADACIAAABIgBABIgBAFQgBAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIAEAAIABABIAAABIgDADQgVASgMARIgBACIgBAAIAAAAIgBAFIgcBbIABgIIgCANIABgFQgBAGgCAFIgBADIgBACIgBADIAAAEIgBAHQgDAJgDAFIgGAMIgBABIgBADIgGAZIgEAKIgCADIgdAzIAAABIgEARIgYBLIgBAJIAAADQAAAHgDAHIgEAKIgBACQgCAMgEANIgJAVIgEAMIgQAoQgIAVgDADQgEAGgGADIgXALIAAAAIAJA+IABAHIACAIIABAQIACAgIATCRQAJA5AGAZQAHAZAEgQQAFgPACg+IAKBUQA2gMg2ANIAAAAIADAJQgCABAJAAQAJABgCABIAAAeIACAGIAAADIgCANQgCAQgGAUIgLAjIgXBDIAKAdQADAJACAMIAOBtIglgjQgFAIgGAGIgEAHIgCADIgBABIgCACQgCACgEAJIgKAfIgCAKIgBAOIgDAQIgcBLIgNAAIgDALQgGASgGALQgJATgPAOIgGASIgCAHIAAACIgRA1QgCACgDATIgFALQATARALAUIggAWIgFA1QgBAFgIAQIgCAEIAAAAIgCAKQgDALgIALIg5gVIgDAuIAAABIgBAAIgCAAIgIgBIgKgBIgIgCIgNgFIgWgMIgDgHQgKADgUACIgIABIgHAAIAAAAIgDABQgRAFgOAAIgJABIgDAAIgBACIgBABIgEABIgBAAIAAgDIgBAAIgLgDIgLAAIgBAGIgDAFIgHABIgHgBIgFAGQgMAUgKAPQgQAVgIANQgEAIgJANIgMAUQgPAZgLAQQACAGAAAHQgBAOgHAJQgFAHgJAGIgGgCIgUAjQACAIgBAMIgDAJIgCABIgCACIABAEIgCABIgEACIgIABQAAABAAAAQgBAAAAABQAAABAAAAQgBABAA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ABgDIAPgVIAagIIACgBIAGgCIAJgHIAJgGIADgHIABAAIACACIAAAAIgCgCIAFgIIAIgKIAAAAIABAAIAAgCIAFgRIAFgHIACgHQACgFgBgEIgFgLIAAgKQABgPADgJIADgIIAAgBIAFgIIABgEIAAgBIAFgOIAEgGIgBAAIghgKIgDADIgFAOIgBACIAAAAIgBADIgBACIgCACIgCADIgGATIgDARIgBAQIABAHIABAHIgCAJIgDAEIAAAAIADAEIgCgCIABABIgBAAIAAABIgFAEIgCAKIAAABIACAAIgHgBIgBABIADADIgHAEIgJARIgFANIAAAAIgjgLIgYAgIgBAEIgCADIgBACIgCACIgIAPIAAABIgBAAIgXgJIgCgBIAAABIgBADIAAADIgDALIgBAAIgBABIACABIABByIANANIAAABIgBgBIgBgBIACACIgOgIIAAAKIgNAJQgKAJgMANIgDAEIgEANIAAgJIgCADIgIAOIgEAQIgBAMIgDAhIAAAHIAGADIACAAIAAAAIgBACIgCAEIAAABIAAAAIAAACIAAABIgBgBgA1EcyIAAABIACAHIACAAIgEgIgEguVAbrIAKgEIAAgBIACgFIAAAAIAEACQAFgDgCgCIgIABIgCAAIAAAAIgHAAIgCAMIAAAAgEgtzAaYIAEADIgBgBIgFgEgEgtwAaaIgBAAIgDgBgEgvPAY2IAAgBIAAgBgEgscAX0IgFgFIgMgDgEguDAXKIgBAAIgEAMIgBADIAAAAIAgAKIABAAIABgDIAAgBIADgJIAEgIQAGgMAKgIIAGgFIACgBIACgBIAWgNIANgEIACgBQABAAAAAAQABgBAAAAQAAAAABABQAAAAAAAAIADABIACAAIAAAAIACgDQABAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIAUgBQAIAAAMgBIABAAIgBgEIACAAIACABIAPgBIAJgCIAEABIgKgUIgLADIgBAAIgEgMIgEgBIgCAAIAAAFIgvABQgBAAAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAABgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgFgCQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAIgHACIgfANIgKAGIgFAEIgOALIgJANIgIALIgBACIAAABIAAAAIAAgBIABABIABABIAAAAIAGAGIgGgGIAAAAIgCACIgDAEIgCAGIACgFgEgrTAWJIAAAAIAHAOIAFABIAEABIABgBIAJAAIAAAAIAGgCQAHgCAKgBIAAAAIABAAIAAAAIABAAIAGgCIAFgCIAQgEIgBAAQgJgFgLgEIAAAPIAAgOIAAgBIgHgCIgMgCIgIAAIAAACIgFgCIADAAIgFAAIACAAQgKADgJAEIgGAEIAAgBgEgouAVpQgQABgVAGIAJAJIgFAFQATgHANgCQAFgCAPgBIACAAIAAgBIAAAAIASgGIABgBIgBgBIgHAAIgBAAIgLACIAAgDIgFAAIgPABgAdQK+IAkAjIAPgLIgBAAIgcgogAeXLGIABAAIAdgVIgBgBgAe7K3IgBgBIgEgGIgBAAgAOcK0IAFABIgCgCIgDgBgAMvJ5IgYAiIAEAAIABgBIAUgBIAYghgANVJ4IAEAUIABALIAMgBIACAAIAXgDIgBgKIgDgRgAdZKSIACgCIABgBIAAABIACgBIACgBIADgCIABAAIAIgGIAUgjIgGgIIAAAAIgEACIgGAEIgCABIAAABIAAAAIABABgAfcKQIgJgEIgBAAIAKAEgAOdKPIAfgEIASgDQAHgBABgDQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAIgHgEIgfgEIgTgBIACAXgAfjKMIgBAAIACAAIgBAAgANQJKQABAKgCAMIAAAGIAAAAIAAABIABAAIAAACIABACIAhguQgCgNgEgOgAfLHZIgiARIgEAHIgHANIgoBWIAKAPIA2hcIALgVIAEgHIAOgVIgIADgEAgXAHmIADAAIAKgZIgEAAgEAkFADXIAAAAIgKgtIAAAAgEAnxgDSIAEABIAAgCIgBAAgEAvagb4IALgCIALgVgEAuhgctIARgPIgOgEgEAv6gd/QAGABAHgBIAAgVIgTgYgEAzuge9IAGgBIgFgCgEAxGgfEIAGgCIADgRgEA1ZgfOIALgCIgGgEgEAxQgfbIAHABIgDgIgEg3iAkQIgBgCIgBgCIgDgLIADALIABACIABACgEg2hAjhIgBAAIhUgMIAAAAIBTAJIAAAAIAEAAIAAAAIADAAIAAADgEg5SAizIABgDIBbAqgEg34AjVIACAAIAAAEgEg34AjVIAAAAIAAgBIAAAAIAAABgEg2uAiwIAAAAIgBgFIgBAFIAAAAIAAAAIAAAAIAAAAIAAAAIABgFIgRgmIAEgBIAjAlIgBAFIgKABIAAAAIAEgBIABABIABAGIAAAAIAAACIgCAXgEg3wAi2IABAAIgDALIACgLgEg3eAhxIABAAIAhAjIAAACgEgwWAfSIgBgBIACABgAUEewIBZASIhXABgEgwsAc5IAFgEIADgBIAFAEIAAABIAAAAIgOAxgEgweAc3IAAAAIABAAgEgweAc3IAAAAIAAAAgEgt/AYwIABABIAAABgAM1LJIADABgAMuLIIAEAAIADABgAdvJkIAAgBIABAAIABgBIAAABIAAABIgBAAIgBAAgAdvJkIAAAAg");
	this.shape_74.setTransform(449.2,495.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AhVE5Ii6gDIgfgbIh9hqQhFg8AWAMIDRClICtAAIANACQAPADAKgIIAygxIDEjrIAIgHQAFgEACgFQADgGAFgOIAnhPIAJgJIDZjFIjcDRIgaA3IgJAXQgFAQgEAHIgHAIIgIAJIhABPIiCCiIguAvQgIAIgFADQgGADgLAAIgQgCg");
	this.shape_75.setTransform(465.6,644);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#754C24").s().p("ApEJlQgBgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIAAgGIAAgBIgBgBIAAgBIAJgQIBpiDIA4hGIARgTIAAgBIAAgCIA3hwIC5itIgFgNIgDgQIAAgBIgCABIAAgBIAAgCIgCgMQgCgSACgsIADhjIAAgGIAAAAIAAgBIgEgEImJlUIKGACIAwiHID0ABIAlABQAUABANADQAcAGAXAOIAUAMIAQAMQAHAGAKAMIAPAVIACAGIADAKIAIAWIAFAaQADAigIAaIgFARIgCAEQgBAEgBABIgRAPIgBAEIgCAIIgOAwIgCAHIgOBnIAAACIAAABIgBgBIAAgFIAHhlIAPg8IABgEIARgQQALgggCgiQAAgMgEgPIgHgZIgGgOIAAgDIAAgCIgEgHIgIgLQgKgMgIgFQgPgLgRgJQgSgKgYgHQgUgGgjgBIg9AAIi5ABIgMABIguBtIA0AAIgeAeIAeAAIh9B9QAAgLABgJIADgOIBbhbIhHACIgJgBIAHABIgUAAIgCAYQAAAWAEARIABAEIAAABIABACIABACIAAAGIgBADIgBACIgBAGIghAiIADggIAEgOIAAgBIAAgBIABAAIAAgDIgBgFQgEgXAAgWIACgVInHALIFCEIIADADIADACIALAIIADADIAAAEIgBB5QgBAnACAPIABAJIAAACIACAAIAAABIAAAAIABAFIAhgfIA5ggIgNA8IAlgWIgkCgIgYgkIAXhmIgQAKIgqAmIAHAMIAOAWIAOAUIgOA/Ig3hWIivCaIgFAIIgpBMIgCAEIgDAGIgDAHIgFAJIgEADIjGDiIgCAAIgFADIgBAAIgCgBg");
	this.shape_76.setTransform(513.7,599.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#754C24").s().p("ACyCGIhjhiIgBAAIAAgBIgBAAIhgh3IhDgWIACAKIACAWIgGA8IAAABIgGgIIAIg2IgDggIhYgdIgIgLIBfAcIgCgeIAFAfIBLAXIBjB5IABAAIABAAIAAABIAbAbIBABPIAIARgAi7iMIAKAEIBTBzIgBAIIAAAAgAhegVg");
	this.shape_77.setTransform(577.2,627.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#754C24").s().p("AndAyIgBgfIABAfIAAApgAnghMIIGgLQDsgFDPACQhrAOjxABIpjABIAABdg");
	this.shape_78.setTransform(194.2,67.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#754C24").s().p("AA3AJIhZgCIhNgDIhWgGQgTgFA7AAIB3gBQAVgBARACIAhACIBDAGQAuAFA5ACQgaABg5AAIhBAAg");
	this.shape_79.setTransform(143.8,176.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#754C24").s().p("AgEjuIALB6QACAqgFBlQgEB9AABXQgMjEAIkZg");
	this.shape_80.setTransform(171.2,123.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#754C24").s().p("AgzhtIAcAAIAoACIAaADQALAAgCACIgPACIgkAGIggAFQAFAsADgkIApACIgnABIACBNIggBvg");
	this.shape_81.setTransform(125.5,190.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#754C24").s().p("AjnAoIAAgGIADgCIAIgFIAMgPIAFgFIACgCIADgBQAIAAAFABQAFAEAJgBIAPgBIADADIAEAAIAZAEQAcAEAKgBIAcgDIAKgCIARgJQAKgEAGgDQAWgIAngBIAKAAIAEABIANADIAXAFIAYABIAYAFQAiAJANACIAMACIAGACIAGAAQAGABAGgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAgBAAAAIAAgDIADg0IAAA6IAAACIgDAAIgFABIgJAAIgSgCIgTgDIgmgGQgIgCgNgBIgWgBIgqgHIgRABIgRACQgPABgPAGIgaANQgMAHgLABIgPABQgYADgLgCIgegFIgNgCQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAIgDgCIgDgBIgDABQgGABgGgBIgGgCIgGgCQgGgBgGABQgFADgDAEIgHAIIgFADIgIADIgDAAIgCAAg");
	this.shape_82.setTransform(91,381.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("Ag0DYIAQgcIAEgDIACgCIACACIgCABIgFAEIgQAaIgDAEIgCABgAgFCuIgDgDIAFgEIAAAAIAAgBIgGACIgBABIAAAAIgCAAIAAABIgCABIAAgBIgBAAIgEAIIgIAIIAAAAIAAAAIgBgBIAAAAIgCgCIABAAIAGgNIAFgBIAAAAIAAAAIABAAIABgBIAAAAIAAgCIABgCIABAAIgBgBQgEgGgCgHQgHgIgDgKQgCgHgBgEIAAgCIAAgBIAFAAQgHgNABgPIAAgBIgHgFIgDgDIgGgGQgIgIgFgJIgGgMIAAgCIgEgFQgFgIgCgJIgFgWIAFgKIADgJIgFAAIADAAIgDAAIgDAAIAAgCIgBgEQgCgFgBAAIgGgPQADgNANgWIACgBIAEgFIAKgOIAOgTIAWgVIACgDIAMgPIAIgGIAXgMIABgBIAIgJQAJgJAKgEIAKgDIAVgOIABAAIAAABIAAAAIgPALQgJAFgBAAQgNAEgGAHIgIAIIgEAFIAAAAIAAABIAAAAIgBAAIgCABIgUALIgJAHIgKAPIgCABIgBACIgDACIgQARIgPATIgNAUIgCACQgMAUgEAMIABAFIAFAKQAAAAAAABQABAAAAAAQAAABABAAQAAAAABAAIABADIACAFIAAAAIACgDIAAAAIAGADIAAABIAAABIAAAAIgEAKIgFAJIAEASQADAKADAEIAGAJIgEgOIANAXIgGgGIgDgDIAAAAIAFALIABABIAGACIgCgFIA/APIgEADIgQgEIgBAAIgogJIADAIIAEAGIAFADIADACIgBgDIAAgBIgBgCIAAgHIALAMIgBgCIgBgCIAAAAIgBgIIAIAOIgCACIAGAFIAAAAIgDgFIAEAAIACAAIABAAIAJgCQAFgDAGgEIALACQgJAIgJAFQgIACgHAAIgCAAIAAAAIgCAAIAAAAIgHAAIgBAEIAAAGIABADIgEgCIACAVIACAAIAAACIABAFIAAgDIAIADIAAgCIASALIgSgJQgBAKACAJIABACIAFAEIAEAEIABAAIgBgGIACAEIAFgIIACgDIADAAIACgBIABgCIAAgCIABgBIACgCIABAAIgBAFIgBABIgDAGIACAAIABgBQAAgEADgBIAFgEIgKAUIAAABIgDAGIACADIAAABIAAABIAAgBIAGAOIgGgIIgBgBIgBgCIgCgDIgCADIAAgIIAAgDIgBgFIgCAFIACACIgBADIAEAKIgBgBIACAEIAAAAIABgBIAUASIABAKgAAGCUIgEAEIABADIAFgKIgCADgAgUC0IABgCIAJgJIACACIgQAQgAgVB1IgFgNIAAgFIAEABIACARgAgaBiIACgGIABgBIABAJgAhGARIAMgMIgCADIAFgFIgGAMIgCgBIgEAHgABZjYIAAAAIAAAAIABgBIAGgBIABgBIAAgBIAAACIAAAAIgCABIgFABg");
	this.shape_83.setTransform(27.5,480.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#754C24").s().p("AklE/IABgBIAAgBIACAEIAAABIgBAAIgOAMgAkfFEIgBgCIAAgBIABgBIAFgDIAJgGIAIgCIAEgDIAIgJIABgCIAAgDIADgKIAAgGIgygmIgBAAIAqAfIABAAIABAAIABABIABgCIgCgCIABAAIAFgBIgBAAIgCADIAFADIAAgFIABgBIAAgBIgCAAIgBABIARgRIAJgTIACgDIAAAAIACgBIABgBIABgDIAAgDIgBgKIABgHIAAgCIAAgBIgBgBIgBgDIABgCIAHgVIgBgBIgBgBIgDgCIgBgBIABgBIgBgMIABgdIABgHIAAgDIABgCIgDgBIgVAAIgSAHIgPADIgQABIgNgBIgIgBIgBAAIAAAAIAFgbIAAABIABAAIAHABIAKAAIANgBIAJgCIADgBIgMAGIAQgIIAIgDIAAAAIgBgBIgEgEIAFAAIABgDIgGgEIACgBIAFACIgBADIAEAEIAAAAIABAAIAAAAIABAAIADgDIAEgCIgGgCIgDABIABgBIgHgDIARgIIgCgIIAPgFIASgSIgDAIIgFAFIgDACIgHADIgLAMIARgJIgKAMQAIgGAHgIIABgBIADgKIABgBIADgDIADgCIADgFIADgJIAAAAIAbAKIgCADIgBADIgBADIAEAAIAuAHIAVAAIAYgDIADAAIASgDQAMgEAQgIIARgIQALgEAJAAIAbgBIgBABIgBABIAAAAIABAAIAEABQAIACATACIAGABIAEAAIADACIAOADIAdAFIAbAEQAUACAXAAIAnAAIACAAIACAAIAEAAIAKgBIAFgBIADAAQAAAAAAgBQABAAAAAAQAAAAAAgBQAAAAAAAAIAGguQAXifAMgJQABgWADgGIAEgJIAAgCIAAAfIgCAYIgdDbIgBACIgBAAIgWAEIgCAAIgdADQgiADgPgBIgPAAIgIgCIgIAAIg4gLIgEgDIgIAAQgRgBgPgCIgEgBIgCAAIgBgBIAAAAIABAAIABgBIABgBIgYABIgOACIgPAIQgXALgRAEIgQADIgCAAIgFAAQgcAFgUgCIgYgEIgXgEIgDgCQgGACgFgDIAAABIgKAaIABACIgCALIAAABIABABIADABQABAAgBABIAAACIgBAMQAAAMgDAUIgCANIAHAEIAAACIgIAWIgBACIACAEIABABIAAAAIgBABIAAACIgCAVIgDAEIAAAAIgBAAIgBABIgCACIgEAIQgGAMgDADIgOAMIABAAIABAAIgBABIAAABIgCAJQgCAJgGAMIgJAJIgFADIgEABIgIACIgQAJIgBAAIAAgCgAjsBNIABAAIADgCIAAgCIgEAEgAkiFCIABgBIAAgBIABABIAAAAIgCACgAkiFCgAkNBRIAEgCIACAAIgBACgAkHBPIACgCIAAAAIAAAAIAGgDIABABIAAABIgCACIgBACIABABIAAAAgAkBBIIABgBIAFABIgCABgAkEBHIABAAIACACgAj7BIgAkGBFIABAAIAAABgAkVBBIAAAAIgBAAgAj0A5IgGgGIgHgGIgEgEIAEAEIAHAGIgEACIg6gjQAQAAANAHIAHAEIAFADIAAABIAEACIACADIAEADIgzgvQAVAAAUAJIAKAGIAFAEIABAAIACACIAVAUIADADIAAABIgBABIgDADIgFAGIAAABIgGAHgAkpAzIAAAAIAFACIgFgCgAE4lNQACA8gBAbIgBAUIgBAGIgCADg");
	this.shape_84.setTransform(92.9,385.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("ACYDRQgCgHgHgLIgTgfIgQgdIgfg6IgCABIABgDIgGgLIAIgHIgBgCIgIAGIABADIgDADIABgFIgBAAIgDACIACgJIgBgCIACgCIAAAAIg8iAQgDgIgEgFQgCgDgJgGIgEgDIAAABIAAgBIAAAAIgDgCIgBAAIABgBIABgBIgBgBQgDgGgFgGQgFgGgIgFIAAABIAAgBIgBAAIgFgCIAAgBIAAAAIAEgKIABAAIACABIADgCIADAFIAFADQAFAEAGAGIAFAHIAEAHIAMAHQAEADAGAJIAZAqIAOAaIAyBSIgCACIAhA6IAdAxQAOAWAFAKQAEAMADAaQgDgSgEgOQgDgJgOgUIhKhtIgGAFIAqBTIAPAcQANAXACAHIAHBjgABRAuIgBADIAAADIADgDIgCgDIABgEIgYgiIAOAZIAAABIgBAFIAGAMIADgCIgIgPIAAAAgAA9AoIAEAJIgHADgABIAigAg/ibIgBgBIgDgDIgEgFIgIgOQgBgDgFgCIgHgFIgHgEIgGgGIgQgLQgGgCgDgDIgKgYQgCgFgIgKIgLgOIAAAAIgEgFIABAMIgIgUIAHAIIAAgFIgFgIQgEgIgIgFIgDAQIABgMIgDALIAAgQIABAAIACAAIgFgEIADgDIAEACIABABQAKAGAFAJIAFAHIABAFIABABIAKALQAOAQADAIIAJAUQACADAFACIAHAEIANAJQACACAMAIQAEABADAEIAFAIIAFAIIAFAFIABABIgDAKg");
	this.shape_85.setTransform(82,645.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#754C24").s().p("AEsO1IAAAAIAAgBIARguIAFgVIAAgDIABgBIAAgBIABAAIABgRIgFhzIgIgFIABAhIgBAFIAAAAIgQACIAKgBIgDgsIgIgFIAIAOIABABIgQgQIgEgGIgGgEIgPgPIAQALIgIgOIg2gKIAWBkIgYhkIACAAIgBgGIA/AOIANAYIALAIIgEg8IhFgaIgVgFIgZgCIgSADIAAgFIgCgCIgHgFIgFgDIgCgBIgGgCQgEgBgCgCIgOgOIgDgLIACgRIAAgEIAAgCIASh0IAAgDIABgLQgBgTgFgPIgMgiIgZgOIABAGQADAVAAAQIgCAaIAAgCIgBAAIgsgBIAAgSQgBgRgCgNQgEgSgFgKIgEAAIAAgCIAEAAIAAAAIgDgIIABgEIgDABIAAgBIAAAAIgKADIgCgCIgJgNIgBgCIgCAZIgEACQgMgBgJACIgQAEIgTAIIgQALIgHAGIAAAAIgWgfIAAgBIADgCIAbgQIAJgFIAXgHIAOgDQAOgCAMABIAEgBIgEgBIgCgBQADgHABgOIAAgBIAAAAIAAgLIgBgGIAAgDIgBgBIgFgGIgEgDIgDgBIgBgBQgCgDADgHIAGgJIAFgLIANgsIAAgBIABgKIABgCIgBgPQgDgPgIgNIgEgGIgWgWIgSgDIgVgGIgVgKIgYgLQgCgBgEgDIgGgFIg/giIgBgBIgBABIAAABIgCADIgCAGQgGABgHgBIgFAIIgCACIgCADIgCAFIAAABIgBAEIAAgBIAAABIgEAJIgGALIgGAeIgWgHIgGAHIgDgEIgGgGIgBgBIABAAIABgCIgEgBIABADIABAAIgBAAIAGAQIgBABIgJgTIAAAAIgJgEIgHAAQgSABgNAFIgUg3QAYgIAXgBIAUAAIAAAAIAAAAIASgcIABAMIABgFIgCgGIABAAIABAAIACAAIAJgVIACgDIAAgDIgCAGIgNAUIgShBIAAgBIgEgQIAAgBIABAAIACABIALAFIAmARIAGACIABgCIABAAIABgDIgKgUIgBAAIAAgDIgKgTIATgVIAeA6IgIAMIADAEIABAAIANAIIABgEIAEgLIACgRIAAgEIAAgBIAYABIAAABIgBANIgBALIgCAGIAIgOIAAgBIAUAIIAAABIAGgLIABgBIAAgCIACAAIADgDIAAgBIgUAIIArgjQgGAKgIAHIgEAEIgBABIgBAAIgDAFIAVgIIAMgaIgSgOIAQANIACgCIAAgBIACAAIAFgMIAAgBIgGgCIgBgBIAYAKIgBAAIgJAVIAAAAIgLAaIgVAJIgDAEIgBABIAAABIgBABIgHAPIgLAMIgJAJIAMAGIABABIAKAFIAFAFIACACIACABIAIADIAPAHIAfAPQAGADAHABIAiAHIApAnIAHALQANAVAFAVQADAPAAAIIAAALIgDAYIgOAwIgEAHIgCAEIABACIACAAIACADIABABIAAACIABANIAAAFIAGASIADAMIAkAYIABABIAlAYIANAoQAKAcgDAeIgCAUIgcB1IAAAEIABAEIAIAKIAQAKIABABIABAAIABACIABACIAAAEIAQAAIAPACIADAAIAGABQAMACAKAEIBMAcIADBGIAPAKIACBqIgBAMIgBALIAAACIgBAAIgCAJQgBAJgFAMIgIAVIgJAVIgBABgAA+FGIAAAAIABAAIAAgBIgBABIAAAAgAAQE/IABACIAAAAIAAgDIgDAAgAAZE9IABACIAJgCgAjlAhIABAEIACgEQACgDACgCIgCAAIgEAAIgCAAgAj3AcIgBAEIgFABIAFAAIABAAIAAACIAKgGIgBAGIATgfIAAAAIAGgBIAAADIABgBIAAgIIAAAAIADAAIADAAIAAAAIgEgEIgCACIAAgBIABgCIgBgCIAAgCIACADIAKgQIAAgCIAAgEIAAAAIADAAIAKgPIAFgBIAAAAIABgBIgDgEIAAABIAAAAIgDAFIgPgGIgBAAIgEgCIgGAKIAAABIgGAJIAAAAIgFAJIAIAJIAAABIgJgKIgCADIAAABIAAAAIgBACIgFAYIADAAIAFAAIgJAIIgDAQIABAAIgBAAIAAAAIgDAAIgBgBIgBAAIAAgBIAEgBIABgBIAAAAIgCgHIgDADIAAgFIgDAHIADgCIAAAGgAjRgIIAEAEIACgFIABgFgAEkMMIAEgBIgEABIgEABgAEELDIASALIAKAKIAKARIABACgAgRIaIABgBIAxgQIANglQADgJABgHIABgGQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAgBIgDgBIAsANIABAAIAAABIgCAGIgGAUIgYBAIhLARgAgZGwIAIBqIgFACgAgRIagAAJGoIAAgBIACAAIAAABgAhAGAIgCgDIgBgCIgBgBIACADIACADIAJAMgAALFcIADAAIAAACIgKAAgAAPFaIAAAAIAYgKIACADIAAAAIgDAKIgXABgAkeCYIAAAAIACgDIABAAIAAgBIgBABIgCADIAAAAgAkbCUIABgCIgBADIgCACgAjWgDIAAABIgFAGIgGABgAjVgLIABABIAAAEIAAAAgAjaggIAFAAIAAAAgAjzhSIAAAAIARgUIABABIgRATIgBAAIAAAAgAgWjDIAAgQIgTAAIAiAAIABAPIhiAfgAgsjgIAAgBIgEgYIADgHIgEAAIABAHIgHAXIAAABIgBADIgBgEIAAAAIgGgnIAAgCIAAgBIgFgcIAIAGIAEAJIABAGIAAAAIABADIABAHIAAAAIACAJIACAAIgBgJIAAAAIgBAAIABgCIAAgFIgBgCIgBgCIAAgBIAAAAIgBgBIgEgJIgDgFIgEgFIgBgDIgBAAIgDgDIABAHIgEgEIgCgBIgEgDIAAAAIACgBIgDAAIAAAAIgPgIIgBADIgCAEIgBAAIgegPIgKgBIADAXIAAAAIAAABIADAbIAAABIAAAAIgEgcIgBAAIAAgBIgFABIAAAAIAAAAIAAAAIACgVIAAABIABgEIABAAIgBgDIAAgCIAAAAIAAAAIgBgKIACgBIABgCIAAAAIABgIIAAAAIABgHIAMADIADgBIARgEIgDgNIgcAKIABgCIAbgJIAAgBIAAAAIgEgUIAHAEIAFAEIgCgLIgFgFIABgCIAAAAIgHgDIgCgCIABABIgTgIIgBAAIgTgIQAKACALAEIANAFIgJgIIgBAAIAIgJIADACIADARIALAHIgCgOIAOAMIAAgBIgQgTIACAIIgMgKIgDgOIANAQIgEgYIAhAoIgBACIACgBIABAAIAIgFIANgKIAFgDIABgCIABgBQAEgFACgBIAEgBIAFgEIABgBIAEgBIABAAQAAABAAAAQABAAAAAAQAAAAABgBQAAAAABAAIACAAIADgBIARgIIALgIIAagXIAEAEIAJALIgBAAIgjAdIgRAJIgLAEIgDABIgCAAIgBAAQgEAAgBACIgCACIgDAAQgCABgCADIgBABIgEADIgHAGIgSALIgBABIgBABIgGACIgBACIgCACIgDACIAKAKIAtAyIAFgQIAOgJIgKAjIAKAMIgOAAIgLAoIASAoIgQgBIgIgSIgFARIAAAAIgCAGgAgkktIAAAAIAAAOIAHgWIgqgvIACAFIgLAEIgCgEIgBAFIgCAKIAIAGQAKAHAHAIIABAAIACADIADAEIABAAIAAgBIAAgBIABgCIABAEIgCAAIABADIACADIgBgGIAKgBIAAgBIABAAIAAgCIABgCgAhsk3IAAgBIADgEIAAgBIgDgBQgKgCgKgBgAiKlRIABAAQAKAAALACIAAAAIgDgBIgOgDIgEgBIAAACIgBAAgAh5lgIgCAAIAIACIAHACIAHADIABAEIAAAAIABgDIgCgBIgCgLgAhgl1IAAAAIgEACIADACIABABIABACIAAADIgBAFIgBAHIgCAHIADACIABAAIACgKIAAgFIAAgCIAAAAIgDgOIACAAIAAgBgAhQlqIAAAAIgBABIAAABIAAADIAIgCIgFgGIgCgCIgBgBgAhll2IAAABIAAAAIAFAAIgCgJIgDAIgAiBj3IAAAAIABAAIAAAAgAgwj5gAiLlHIAAAAIAAAAgAihlKIAFgGIAAAAIgFAGgAiHlpIACgBIgCACIgBAAIABgBgAiFlqIAEgFIAAAAIgEAFgAhvmIIgdgMIAAAAIgNgGIAPAEIAAAAQAJADAIAEIAKAHIgDADgAhvmIIABgBIAAABgAhvmIgAhwmWIABABIAGAFIgFAGIAAABgAhpmQgABOoCIABgBIAWgjIAFgIIAEgLIAAgBIABgDIACgJQACgIAAgKIAAgNIgHgVIACgLIgIgJIAGAUIgHAnIgSg6IAEgLIgCgGIARAQIgNgrIAaAbIADgRIgsgQIAAABQgBACAEADQAEAFAAABIACAMIACAHIAAACIgLgMIAJAdIgCAHIgBACIgCADIgGAMIgBABIAAABIAAgBIgBgBIgDgKIgBgCIAAgBIAAgBIgNgCIABgBIAEgEIAEgRIgCgHIgDgHIgCgKQAAgCgDgEIgCgDIgEABIgLADIgGgHIgTACIgKgUIAFAAIAJgBIACgBIgDgBIgPgDIAAAAIgBAAIgQgBIgIABIgJACQgJABgJAEQgHADgJAFIgHAFIgNgSIAOgJIAKgFIAMgEIABgBQAPgFAQAAIAKAAIANABIALACIABAAIAGAPIADgMIARAFIgLgaIAEgLIAPAEIgHghIgogdIAXA4IAAAAIAFANIgGAVIgEgCIgFgBIgmhfIACAAIgCgBIAAABIhMgLIAegIIAXAFQAPADAOAGIAQAJIADAEIgLgfIABAAIgBgBIAAABIhhgNIAngJIAaAFQASAEAQAIQAKAFAIAFIATAOIAkAcIAPBNIAFgCQAKgDAGgDIAMgIIArggQAEgDABgDIAQgwIgEgPIgJAJIgFAEQAAABgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIgDgCIgEgDIgYgYIAGAFIADACIACABIAAABIABgBIAVgRIADgCIADAAIACgCIgBgEIAEABIACgCQACgBAEgHIAEgMIgBAAIABgDIgSgPIAJAHIAAAAIABAAIAOgKIgBgEIgDgEIABAAIAJAEIAAABIACgCIAIgFIAAABIAAgBIABAAIAEgCQAIgGABABQACAAgEAHIgHAHIgFAGIAGAJIgBACIgBAEIgGAQIABAAIgEANIgCACIANA1IgWAuIgEAIIgHAIIgzAqQgFADgTAHIgBAAIAsAQIgKAxIACACIAAAwIgDAWIgEAQIgJAWIgZAlIAAAAgAAwrfIAFADIABgFIgCgJIAAgBgAAup8IgCgHIgBgCIAAgBIAKABQgDADgCAHIgBABgAgcqBIgBgBIAAAAIABABIAAAAIAAABgABTqNgAgtq4IA3gFIADAGIAAAAIABAAIABAAIACABIAOgCIAEAAIAFAFgACTt/IAAgBIABAAIAPgDIACAKgACjugIgCgCIgKgJIAKAJIACACg");
	this.shape_86.setTransform(44.1,516.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#754C24").s().p("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ALQgFAFgFACIgKAJIgVAVIgGAHIgFAHIgBADIAAgBQgBAEAAAIIABABIADAJQAAAEgCACIgEABIgCABQgGgBgGADIgFADIgHAGQgJAKgBANIALAeQAGAPADAPIACAIIAAABIgBACIgfANIgOAFIgdAGIAhgDIAPgEIAkgLIACgDIgBgIIgHgeIgKghQADgKAFgFQAFgFAIgDQAIgDAHACIACAAIABgBIAEgBQACgBABgFIgDgLIgBAAIACgOIAJgKIAWgSIALgIQAEgCAHgIIAFgFQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIACgDIAHgDQAEgBAEAAIAHABQAAAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAIAIgFIAAgCIAAgGIgBgOIAAgHQgBAAAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAIADgCIANgIQAEgCACgCIADgGIAEgHIACgCIADgDIAAgDIgEgKIABgIIAEgIIADgHIABgDIAAABIAAACIgDAIIgEAHIAAAJIAEAGIABAEIAAADQgBACgEADIgFAOQgCACgFACQgGAEgFAFIgDADIgBAAIACABQgCACACAFIACAOIAAAJIgCABIgIAHIgHAAQgEgBgKAGIgDACIgCABIgFAHQgFAHgFAEIgCAAIgBABIgIAHQgKAIgKALIgEAFIgCACIAAACIAAABIgBAGIAAAHIABABQACAHAAAEQAAAFgDACIgDABIgEACQgGgBgIAEIgHAEIgEACIgBABIgBAAIgCADIAAACIAAAAIAAABIABABIANAmQAGAeAAAPIgCACIgCABIgmARIgLAEIgkAHIgYAGIgLADIgCACIgBAAIgEgDIgHAIIgGATIAIAFIAQALIACAPIgDAaIAAAMIABAHIAAAHIAFAFIABACQAMgCAOAAIgZANIABABIgBACIgDABIgDABQgFADgDAEIAAABIAAAAIgBAAIADAFIAEAFIAHAIIABgBIABgBIADgBQACgBAEAAIAHABIAfALIgDAOIALALIAAAFIgBAFIgGAKIgDAGIAgAqIAAAAIgBABIgTAMQgKAFgPAFIAAAAIgEAGIgHAHQgGAHgKAHIgLAGIgEACIgHABIgEAAIgDABIgGAHIgDADIgEABQgGACgCAEIgFAGIgBABIgLAJIgIAFIgFACQgHAEgCABIgDAFIgBADIgIAIQgLAMgCAGIgBABIAEAFIgBAcIAAADIAAAAIAHAEQAJAIAJAJIAfAjIAHgEIgPAvIAHAHIgFADIAMAZIgZgCIgKgBIgFAAIgKAAIgKAGIABABIAIAHIgEAFIAFgBIAAAAIAAAAIgBABIAAABIA+ABIABAPIgvAeIABAAIAAABIAUAXIAAAAIgCADIgEAFIgCADIgCACIgKAWIgRAHIAAAAIgCACIgFAJIgDAEIgCABIgCACIgBACIAAAKIgDgDIgDAFQgJAMgHAEIgJAFIgRAHIgIACIgNABIgDADQgFAGgGAFIgFgFIgFABIgBACIABABIADACIgDgCIgCACIABgBIgCACIABgBIgDANIgGANIgDAEIgBAAIAAACIgFACIgHAOIgBAFIgHANIgIAPIgBAGIgCAHIABADQABADgBAFQABAEAEADQACACABAFIACACIAEABIAJABIAAAAIAjgKIABAAIAAgBIgLgtIAFABIATADQARADAJgDIAEgLIAAgBIA3AgIALAHIAFAEIARAIQALAGAMAFQANAHAOADIAPADIALALIADADIADAEIADAEQAFAHACAKIACAJIAAAHIgBAFIgOAsIgFAMQgBAFgCABIgFAFQgFAHgCAFQgBAFACABQADAAAEACIAIALIAAABIABAHQAAAHgBAIIACgBIABADIAFASIABADIAAAAIABAFIAAACIAAABIAAAAIgGABIgBABIABACIACADIAHAMIACACIAAABIAIgDIAAABIAAABIABAHIAFANIACANIACANIAbgIIAkAYIAFAPQADAMgBAMIAAAFIgPBGIAGgBIgHAFIgLAyIgGAeIgBADIAEASIADAGIAcAfQAEADAJADIANAFIAJAGIAKAKIAAALIAqgGIAGAAIAFAAIADAAIADABIAtAPIADA3IARAKIADBaIAAAAIAAABIgBABIAAAFQgCAJgJAYIgIAWIAAABIAAAAIgxgQIAQAyIAeggIgSAzIAEAHIAJAOIAAADIAGAHQAOAQAEALIAGAQIABABIAAABIACACQABACAFACIAPAJIACADIANAHIADACIAKAOIADADIACABIAAAAIgTA5IAAABIAAABIAdgSIAKgYIARAJIAKAIIAKALIAAABIACABIABACIAVAOIAFAHQAKALAMAUIBbCQIgEACIAjA7IASAcQASAcAEAMQADAOAFAfIADAZIAAACIAAACIAAAGQAGAiAAAUQAAAKgHAPQgDAIgKAQIAAACIAaADIgvAkIADACIAHACIgBABIAAABQgCAHACADIABADIAAACIABgBQACgCADAAIACABIABACIAAADIgBADIgDAFIgCACIgCACIgCAMIAAAFIAAACIAAABIAAABIAFAJQAHATgEAUQgDAPgGALIgSAgIgSABIgHAHIgDAGIgIAIIAUAYIACAQIABAQIAAADIgBACIAAADIAAACIAAgCQACAWgGATQgDALgIANIAAABIgBAAIAAABIABgBIgGALIgBABIABgCIgCADIABAAIAAAAIACACIABAAIAEAFIAGAIQAEAEAMADIAKAFIAAABIAVgEIAIABIgEgEIAMAEQAFACAFADIAKAGIADADIADABIAYgBQAJAAAIADQACAAADAEQAFAFAEACIgBAAIAGABIAEAAQAFgBADACIAPAFIAQADIAPAGIACABIAEAAQAFgBADgBIAGgCIAEAEIADADIAJADIADAAIADABIAOgHIAEgEIACgBIgGgJIAAAAIAIAGIAEgIIgMAAIAAAAIgBAAIgDAAIAQgEIAAAEIAogDIAEgBICRg+IAGgEIgCh7IAsCSIgBADIglAiIhcApIgFACQgaANgmAWIgEgGIgGAFIgKAGIgfAPgEgxkA2SIANAIIABAAQAQAFADAAIgkgTgEgwWAxkQAIAKAeANIAKgQIgLgPIgSgIgEgwAAxSIAJABIgEgFgEg0nAqtIgFAGIABABIAKgGIgEgCIgBAAIgBABgEg4dAePQACgCABgGIAAgHIgCAAgEg4UAeNIAEgNIgJAAQADAJACAEgEg4NAdiIAAAMIgCANIAIgZgEg5XAcDIASgBIAEgBIgRgFIgCAAgEg9CAZuIAAABIgBADIABgDIABgBIgBAAgEg9MAZeIALALIAEAAIAPAAIATAAIApgNIACgBIAAAAIABgBIAAgMIADgBIAMgDQANgFAFgHIACgRIAAgCIAuAYIAEACIAJAFIAlAPIAVAGIgVgIIgkgSIgJgFIgEgDIgwgdIAAACIgDAPQgGAGgPACIgRABIADAVIAAABIAAAAIgBAAIgoAMIAAAAIgDABIADgBIgRgBIgDAAIgGAGIgEgGIgBAAQgKAAgHADgEg9bAYjIAAAAIABgCIgBAAIgDABIAAAAgEg9XAYHIAAACIABgCIAAgBgEg+bAW3IAEgBIgEAAgEg8lAWtIgEAHIgHACIAUABIABgCIAAgGIADADIADgGIgGgGIAAAJIgEgHgEg88AWoIgGAHIAAAGIAIgOgEg8bAWmIAAgEIgJgFgEg81AWkIAAABIACgCQAIgLAGgBIABAAIABgBQAEgDACgFIAAgGIABAFIgBgFIAAAAIAAgBgEg8bAWiIAEACIAGgHIgDgGIACAAIAEAAIACgGIABgIIAAgCIAAAAIAGABIABAAIAQABIgGgKIAEAGIgEgHIAJAKIgBAAIAAABIACAAIABgBIADgIIgMgGIgEAAIgBABIAAAAIABABIgBgBIgBABIAAABIAAAAIgBABIgDAEIgFAEIAAgBIAAABIgBAAIABgDIgFABQgEACgDgBIgHAAIgDgBIAAAAIADABIgBAAIgBAAIgBAAIAAABIABAAIAIARIgIAAgEg7dAVoIgBACIgDAJQgFAFgIACIgJAAIAbAMIAEgCIAGgHIACgFIACgDIgPgNgEg7+AV7IAAAAIABAAIgBgBgEg79AV6IAAAAIABAAIAAgBgEg6aAUIIAAAPIABAEIgEACIgIAIIgJAOIgDABIABAYIgKAJIAGgDIAEgFIABAEIAEgCIAFgNIAAAAIAAgBIAAAAIABgBIAFgDIAIgMIADgEIAOgKIgCgcIgVgCgEg6lATsIgCgIIAAAAIgBAAIAAgDIAAAAIAAgEIABAAIAAgBIgBgEIgCgCIAAgBIgBAAQgEgDgEgBIgEgBIAAABIABADIgBAGIANADIACAHIgJgBIAAAAIAMAJgEg66ATZIAAAAIAAAAgEg7jATCIAFACQAJgNABgIgEg62AS2IAAADIABgLIAAAAIABgHIAMADIAFACIAAAAIgXgYIgHACIgCgIIAAgBIgBAAIgBABIAAgBIgBAAIAAAAIAAAAIAAAAIgBAAIABAAIACgCIACgDIgHgEIgDACIAAAAIgBgBIgBgDIgKgFIAJgEIgBgCIgEgEIgBAGIgDAEIABgKIABAAIABgBIgCgBIgCgCIAEgFIgCgOIABAAIABACIACADQAAABAAAAQABAAAAAAQAAAAgBAAQAAABAAAAIAAADIgBADIADgDIABgJIgJgLIACAKIgDgBIgEgFQgCgFABgBQACgIAKgNIACAAQAGgNAQgNIALgKIAEgFIAEgGIAHgEIAPgGIADgBIAJgGIABgCIAKgKQAGgDAHAAQADgBAGgFIgFABIgNgNIAAAAIgDAAIgEABQgHACgDADIgGAIIgKAIIgFADIgOAFIgFADIgCABIgJANIgBABIgCACIgOAMQgQAPgGANIgCABQgMAQgCAIQgBAAAAAAQAAABABAAQAAABAAAAQAAABABAAIACADIAEAFQAAABABAAQAAAAAAAAQABABAAAAQAAAAABAAIACADIACADIADADIAAADQgBAGgDAFIgCAFIABADIAEAFIADACIACALIACAFIgDAAIAAABIABADIAJgBIADAHIAAABIABAAIACABIAKAFIAMANIgCAAgEg5+ASsIABACIADgCgEg7+ARjIACABIghAkIArgnIgCgBIgBAAIgWgDgEg7VARyIABABIABgBIgCAAgEgsnA4IIgCgCIAJgCIgHAEgEgsFA39IACgBIAAACgEg3uAEtIgGgWQgCgOABgOIABgGIAAgFQgBgKABgNQACgMAEgNIADgHIACgGIAHgMIAKgRIACgDIABgBIAAAAIACgCIAQgTIAOgMIAFgDIAhhoIAXA9IACgBIAQgJIgEgCQAAAAgBgBQAAAAAAAAQAAAAAAAAQABAAAAAAIAHgFQALgIAJgEQANgHAJgCQAKgDANgBIAZAAQAPAAALACIAHACIAAAAIAAABIAQABIAnAFIACAAIAIgEIAOgHIAJgEQAhgNAlgEIAsgDIAIAAIAAAAIAJABIAJABIAMADIADAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAgBIABkEQABlWAFklQgMh2gElLIgIrqIHNgIIACAOQALgHAEgBIgBgKIAGj8QAHksgBhtIAIklIC7AFQAlAFgzADQgnADh0ACIAFEcQACBxACBCQAEBXAEAWQAGAaAJg9QAEh1AAhqIgBkXIJVgOQEygHDaAKQEfAECSgIIEogNQAZgFgIgEQgFgCgcgDQhCgIAPgIQGwgEFRAOIHOAaQgGALgDAHIAAABIAAAAIADgEIgQAoIALAAIgQALIAFgLQphAJtAgBI3rgEIAAGIQAKhOAHAeQAGAaAEBwQACBVACClIAEEcIiqADQhCAChDADIhSgEIhegDQgFCqABEgIACHRQACAJAHB+QAFBiAHgfQgDibAEiXIAHk3QASBAgHE2QgOIlAAAoIgQjOQgBDUgHE8IgIEjIgBABIgCABQgGABgKgCIgQgEIgvgOQgJgDgGAAIgRAAQgIAAgHgCIgXgGIgJAAQgwABgYAJIgcAPQgHADgDAAIgNACQgSACgIgBIgbgFIgYgDIgGgEIgRABIgIAAIgIgDQgIgBgHABQgDAAgEAEIgHAFQgHAJgEACIgFAEIgEABIgDACIgCABQgEADgHAIIgCAGIgBADIgDAAIgBACIgDgCIgDAJIABAAIAFgHIADABIgBAAIABgBIABgCIAJAAIgFAEIgBAAIgNALIAAgGIgBAFIgDgBIgCACIgCgCIgLABIgJAFIgJAJIgGAHQgEAGgCAGQgCAIAAAHIAAAGIACgFIAEASQgEgGgCgGIgBAKQgBAIADAHIAEAJIhYAuQgHgMgEgMgEg1YABZIgBgEIgEADIABAAIAEABgEA/egPgIAAgLIgCgNIACAJIAAACIAAAFQABAFgBAGQgBAMgEAIQAEgKABgNgEA9ngPSIgPABIAKgEIgCgCIgDgEIAEAAIgDgDIAcgOIABAAIAJgEIAAgBIABgJIAAgBIABgFIAAgBIABgHIgYgPIAAAAIAYAOIADgdIgVgYIACAAIAAAAIAAAAIACgIIABAAIgBgCIAEADIgDgBIARATIABAHQAEATgHARIAFACIAAABIABgBIAAgBIAEgiIAAgBIgBgBIgHgIIgCgHQgGgIgJgFIgCgCQgIgEgHgCIgBgBIgBABIAAgBIgCAAIgBAAIAAAAIgFgBIAAAKIAAAJIACgDIgJAbIgHANIgBABIgJAWIAPAZQAEAHAEAEIgDACIgIgLIgQgdIADgHIgEAEIABgbIgBAAIgCgBIgFAMIAAAFIAAAEIAAAAIgBAMIABABIAEgDIADgDIAAAUIgHgOIgBAAIAAASIgBgCIgEgMIgIAFIgMAFQgKAEgIAAIgUABIgCAAIgBAAIAAAAIABgVIAAACIAAAAIAEAAQAJAAAKgBIAFgBIAGAMIAHgLIABAAIgDgGIgCgDIABADIABAAIgLAFIgHgOIABABIABgZIAOAeIgBgSIADgBIgEgFIAAgDIgBAAIAAgBIABABIgBgBIAFACIgCAAIABABIAHABIAAAAIgBACIgFgDIADAGIASgFIgKguIABAAIALAvIAUgoIAAgBQAAgLgGgMIAAAAIgMAJIAAgBIAKgMIgGgJIgCgCIAPgNIgEgFQgFgFgKgFIgQgIIgRAEIACAFIACANIABAJIABgBIAFABIAEADIAAAAIABABIAAAAQACACADABIANADIgBAAIAAACIAAAAIACAQIgBABIAAgEIgHgBIgCgBIAAAAIgEgBIgCAAIAAAAIAAAAIgGgDIAAAAIgBgBIAAABIAAABIABABIACAEIABABIACADIAAAAIACgBIAAABIgCACIgPAaIgBABIgDAHIAGAJIAAAAIAAAFIAAgBIgEgCIgFgGIADgFIgFgHIABgKIALgHIAAAAIACgBIAAgHIAAAAIgBgGIADgGIgDACIAAAEIgBACIAAABIgBAAIgEAHIgBABIgFAKIAAAAIgBABIgDAEIADAFIAAAJIgGgIIgFAJIAAAAIgDAEIAAAAIgBACIANAbIgWgXIAAgBIgFgEIAAAAIgDgEQgKAGgHACIgDACIAAgBIAAgBIgBgCIgKgZIAAAAIAAAAIgOACIAAgEQgCgQADgNIAAgBIABgHIAAAAIACgJIAJgMIAHAHIgOAgIAAAAIARgdIgDgDIAFgLIgIgBIgDAEIgBABIgFgFIgrgDIABgBIANgIIAQAAIABAAIgHgIIAcAAIAIAHIAFAAIgDACIAGAHIADgFIgBgEIgFAAIACgCIAJgFIACgBIgaABIgCgDIhCgEIACgBIAXgOIAXABIgIgJIAIABIAPAAQgHgEgEgDIgPgTIgIgLQgMgOgMgKIgWgPIgBAKIgDAOIgFAMIgngRIAAgBIAAgCQADgGABgIQACgIgCgKIgBgEIAAAAIAAAAIAAAAIgCACIgCAJIgIgFIAFgDIgBgBIgFADIABABIgaATIAYgTIABgBIgTgOIAAAAIgUgPQAAgGgCgGIgCgIIglgGIgFAvIAFACIAAABIAAABIgFAOIAAABIAAABIgBAAIgBADIADAAIgBgDIAiAFIghgCQACAHAEAGIAFAHIAAAAIgiAdIgJgMQgKgQgCgRIgDgNIgBAAIAAgDIAAAAIAJg2IgDADIAAgBIgBAAIgBABIgDADIgogkIAJgJIgHgFIgBgDIgCAAIAAgBIAAgBIAAgCIAAgLQgBgFgDgEIgFgGIgBAAIAAAAIgBgBQgDgMAGgJQADgFABgFIAAgNQAAgKgDgOQgCgFgDgGIgHgKIgCgDIgCgFIgIgNIgCACIAAgEIAAgBIgIgIIgIgBIAAAAIADgdIAAgFIgBgRQAAgLgDgOIgFgNIgJgPIgEgMIgxAlIhAgrQgKgGgLgLIgDgDIAAgBIAHgHIAPAVIAtgFIgJgBIgfgXIBQASIACAAIgJg4IACgCIgDgDIABAFIgBAAIgOALIgNgIIgHgGIgDgDIgFgFIgCgJIAKANIAXgDIgEgNIAPASIgDgUIAAgBIgHAAIgKgHIAOAEIAAgDIgHgBIACgCIAFABIgBgNIADAPIAAACIAAAAIACACIAFgCIABgBIAFgCQAEgIgDgGIAAAAIADgBIACAAIAMgCIABgBIgBgCIgUAAIgGABIAAgUIAAAAIAAg6IAOgBIACAVQAEgGAAgHIgCgKQgDgDABgCIABgDIAAgCIgBgFIgCgBIgOAHIAAgTIAHAAIgFgHIAAAGIgGgMIAGAGIgBgBIgCgIIAAgCIgBgBIgJgPIgEgDIgCgCIABABIABAAIADADIgGgKIgBgDIAAAAIAHgCIgLgGIgBAEIgEgDIABgBIAAAAIgBAAIAAAAIAAABIADAFIAAADIAAAAIAAAAIABAAIAAAAIABAAIAAgBIAAAAIABABIAAAAIAPAVIhSAFQAHgKAJgIQAGgHANgIIAqgaIgBgEQgEgJAAgFIAAgIQAAgFgCgGIgFgPQgEgJAAgGQgCgGACgJIAAgDIgKABIAFghIgEAAIAGgXIgFABIAJgWIAAAAIgEAVIABAAIABAAIAJgCIABAAIAAABIAIAVIgTACIgBgMIgCANIADgBIABADIABAQQABAEgBACIAAAIIAegEIgUg1IgBAAIgHgTIgBgBIAAAAIgBgEIgDgIIABgBIgBgDIAAgBIAAgEIABgBIAAgBIAAgBIgGgDIAHADIALADIgIADIgCAAIAAAAIAFgBIAEgBIAAAAIACgBIgBAAIABAAIACgBIgCABIACABIADgCIAAgBIABgGIAAgHIgCgFQgBgDAAgDIACgOIgBgMIgDgGIgCgEIgHgLQgCgGgBgIIgBgHIgCgHIgDgDIgGgMIgGgFQgBgBABgFIAAgKIAAgDIAAgEIgDgEIgCgFIAAgFIAAgDIgCgGIgDgEIAAgBIAAAAIABgCIgBABIAHgFIACgCIABgFIACABIACAAIABgBIABAAIAHgHIAAAAIAEgDIABgBIAIgGIgBgBIgGgBIgCABIgBgBIAAAAIgBgBIAAAAIAAAAIAAAAIAAACIgPAQIAAgBIAAABIAAABIAAAAIgLAMIAAgBIgDgOIABgHIgDgHIAAgEIAAgCIgSAgIgCAAIgbgJIgmhDIgEgFIACgBIgHgXIgShYIBagqIACAAIAbA6IAEgGIgBAAIgBgBIAAAAIAHgJIgBgCIgagbIgEgJIgNgZIgbhEIgCABIgCABIgXARIgwgJIgCAAIAThDIACgEIAAgGIABAAIAEACIgEgGIAEACIAAgBIgDgEIAPAGIgCAAIgCACIgDABIgEAAIgBAAIAbAfIAAgHQACgGgCgDIgGgFQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAIACgEIAAgCIgKgDIAAgBIABgBIABgEIgIgBIgEgCIgBAAIgBAAIAOgNIgJgZIgCgEIAAgHIgFgKIABAAQAEABABAIIgBABIADAFIADAHIACADIAKgGIgXgaIABAAIAAgBIgCgTIAAgBQgBAEgCACIACgJIgOgKIAFgBIACgCIgCgBIgDgBIgDABIgGACIgCAAIAAgBIASgIIAAAAIgRAGIgBACIAAAAIgEACIAAABIgCAAIAAABIgBAAIAAgBIgCACIgBgCIACAAIAAAAIgBgBIAAAAIAAAAIAGgJIgBgEIgTgvIgCgEIAAAAIACgBQAGgDAHgBIAVgGIABAAIABABIABAAIAAgBIABABIABAAIAAgCIgBABIAAgHIACAFIAGgNIgMAAIgCgcIgFgFIgIgMIgDgGIgFgHIgDgFIgFgDIgHgCIgGgEIgEgHIgCgBIgIAAIABABIAAACIgFgDIAEAAIgBgDQgCgDgEgBIAAgBIgHAHIAAgHIgCAAIgCABIgBAAIgBgBIgGgCIABgBIgEgFIAAgBIAAAAIgGgDIgCgCIgIgCQgGgCgFgFIgJgLIgCgBIgdAwQABgRAGgSQAFgJAFgHIAEgEIgCgCIgCgBQgDgBgEAAIgEAAIgCgBIgDgCIgIgFIgJgCIgSgCQgFgBgHgHQgIgJgOgUIgRgMIgCgBIAAAAIABgCIABgCIgCgBIgBgBIgBAAIAFgFIABgCIAAgBIgBgBQgEgIgOgIIgJgGQgEgEgDgEIgFgUIgHgRIgCgDIgCgCIgEgCIgBgDIgGgHIgLgKIgEAFIA3g8IABAAIAPAPIABABIAFAFIAAABIAAAAQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIAAABIABAAIAAABQAFAEAEAGIAFAIIAHAOIAAABIAFAQQABACAGAFIAFADIANAPIATAdIAAAEIAIALIAEABIAMADIAPAHIAQAFIAnARIgIAGIACABIAFAGQADADADABIAEABIABABIADABIAEADIAFAAIAOAIIAKAAIAXATIAAABIAAAAIABABIAAACIADACIAEABIAEACIAMAKQAGAHAHAJIAIAOQABAEACACIAFAEIADAEIA/AAIglBTIABARIgEAEIABACIABANIgCAMIgCAHIACAGQAEAMAAAOIAAAEIABAGIABABIAIAPIAIAQIADAEIACACIADAJIADAFIAIAKIABACIAAAAIAAABIgHAEIAAAAIABACIAEAGIAEAEIAPARIAQAeQgBACACAQIADAbIAHAVIABAHIABABIAAACIAEAGIABAEIADAIIASAYIAKgJIAFAGIAHANIAGARIAFARIAAAAIAFAMQAAgCAEAJIAAACIAAABIABACIAAADIABADIABABIAAABIAAAAQADAEAAADIAMAdIgCAGIAWgBIAAACIAAADIAAASQgEAagMATQgIAOgNALIgFAFIAEAMIABAHIABADIACALIAAABIABADIAAABIgBADIAAACIACABIAFALIAJAbIAAACIABAEIADAFQAFAJAEAOIAFAbIAAAFIAAAJIAAAEIgBAEIABADIAAAAIAAABIABAPIAAAEIgKBIIgLAGIAAABIABAKIAAAEIAAAMIgBACIAAAFIAEARQADALACAKIAAAEIAAACIAhB/QAEAVAAAQIgBAKIAAABIgBAEIAAACIAAACIAAAAIABAGIAAAOIAKAUIgWA1IADAFIAFAOIAGAdIAAAMIABAFIABABIAAABIAEAGQAHAPADANQADANABAMIABASIAAAOIAAAHIABADQAGAJADAIIAFALIAAAAQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAIAHAKQAIAQADAdQACAMAAALIgDAUIgDAXIgBADIAAACIAEAAIAAAAIAAABIABADIAAABQAMgDANAAIBFAAIAKAiIACABIAGAEIAJACIAFAGIAFADQAFAGABAEIABACIABABQALARAEAIQANAHAOAJIAdAU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");
	this.shape_87.setTransform(406.3,366.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#754C24").s().p("AAtAXIgngaIgDgCIgCgCIAAAAIgCAAQgEAAABAEIABADIAmAhIgnghIgBgBIgBgBIhOgqIgDgBIAAAAIgCgBIgIgFIAAABQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQADgEAJACIADABIABAAIBTAoIABAAIBfBLQgMgHgpgdg");
	this.shape_88.setTransform(408,668.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AhWgEQhrhZAdARQASAKA8AnIB0BcIB8ABIAJABIAGABQABABAAAAQABAAAAAAQAAABAAAAQAAAAAAAAIgGACIgSACIh6AFIhvhTg");
	this.shape_89.setTransform(437.2,663.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#754C24").s().p("AlpCiQgCgTgGAHIgEgTIgBgEIgCgCIgBAAIAJhjIFAjJIEECJIBtBaQAoAiANAPQAZAciBhXIhKg4Ijyh9IknC1IgSCGg");
	this.shape_90.setTransform(401.6,648.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#754C24").s().p("AhvBKIAFgDIgEACIB/hWIgfgEIg4gCIgEgBICrgtIABAAIgMAIIALgIIgtAeQglAZA3gmIgVANIAdgTIgdATIggAWIAEABIAIABIgGAAIhzBLQgaASA4gmIAVgPQgYAQAGgFQgDADgCABQgBABAAgBQABAAACgCQADgCAEgDIgUAOIAKgHQAJgHgUANIgRAMIgSANIAAgBgABkhCIACAAIgaARIAYgRgABwhKIgBABIgFADIAGgEg");
	this.shape_91.setTransform(36.6,437.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#754C24").s().p("AgVgrIAVADIA9BlIABABIAAgdIACAEIgBAJIAAACIAAAGIAAALIAAgBIAAAfIAAgKIABANgAA/BHIAAgIIgBAAgAASglIAYADIATAgIAAAigAA9gCIAAgDIABgaIgUgDIgKgQIAeAQIAAAAIAAABIABAAIAAgBIAAAAIAHAEIgHgEIAIAEIgIgBIAAAAIAAAUIAAALgAA9gCgAAAgoIgYgnQAGAEARAIIABABIAAAAIASAdgAgWgrIgCgEIAGAAIADADQABAAgBABQAAAAAAAAQAAAAgBAAQgBAAAAAAIgFAAgAgvg2QgRgFAHgBIAVAEQABgCgFgEIgIgIQgMgKAPABQgMgFgDgFQgFgFgFgDIANAGIgHgFQgBgBABAAQAAAAAAAAQAAAAABAAQABAAAAABIAJACIAcAtIgWgFg");
	this.shape_92.setTransform(32.5,439.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#B25538").s().p("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QAGgTAIgUQABgCAAgGQAEgKAMgPIAGgHQADgCADgHQACgDAHgEIAKgGIAKgJIACgBQAEABAHANIAFADQAEACgBADIgDAGIgIAJIgBACQgIAGgDAEQgeApAFAVINDAAQAUANAdAVICHBjIAGAAIDOgWIAmhvIACAAIAAgIIAFAAIAjhkICMgZIAOgCIAPgCQALgCAAgBQAFAAA/gMIB5kNIAeAIIBcAaIC8ioQAeAbAAACQAEAGADAMQADAMgBAFIgBAHQgBADABAEIADABIADgCQACABACAKQAEAIANALIgBADQgEAAgCAEIAAACIAGACIACADIACACIACgBIABgDIABgCIAJAAIAIASIgBAGIgDAAQgDgBgGgHQgFgFgDAAQgCACgCAIIAAAKIACACIAEgCIAEAAQAHAPACABIADAAIACgBQgBgDgCgCIgDgDIABgDIAJACQASACAGALIAOAZIAGAEIAHAHIAFAGQADADACAAQAJABAJAJQAJAKAFAAQAFABAJgFQAIgGAFAAQAGAAAJAEIAOAEIAKABIAKABIAMAGQAHAEAPAEIAQAQIACAEIAGAFQADADAEARIAHAUQADAEANAIQANAJAEAGQAAADgCADIgCAEIAGAGIAJAHIASAaQAOASAJADQAFABAJAAIANABQAEABAJAHQADACAEAAIAFABIAKAIIAHAIQAEAHAFACIALAFQAIACACACIACAEIADAEIAFACIAEAGIADABIACgBQAAgDADgCIADAAIACABIACAFIACACIAKAAIACAHQADACAGACIAIAEQACABAFAIQAHAPAEAEIAJAJQAFAFACAFQACAFAAAKIgHAEIACAAIgBAEIAAAJQgEAGgEgCQgEgDgCAAIgDAAIgBACIAAADQABAEAKAEQAKAEABAEQACAFgFAJQgEAIAAAEQACACABAFQABAFgCACIgEADQgIgCgHADIgBAEIABADQACABADgBIABABIABACQAEACAEgBIAIgDIADABIABABQABADgCACIADAWIgJACQgEACgBAFIABACQADABADgCQAEgDACABQAFAAAAAJIAAALQAEAEAFAPQAFAQgDADIgCACIgJgCIgBACIgBACQABAFAIAAIAMAAIADAFIgDAGIgDAGQADAEAHADIgCAIIAAAIIAFAFQADADABADQABADgBAFIAFACQAEABABABQAGAGAQAyIAMAbIAJARIAEAKIASAUIAUAVQATAUAFAMQACAFABAIQACAFAEAEIgBAEIgCABIAAAIQAAAEgEACIgHABIgDgBQgEACAAAEIgCgBIgGgPQgDgJgBgEIABgBQACADAEAFQAEAEADACQABgFgCgDQgIgIgCgFQgDgMgDgFIgFAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAIgCgfQgIgFgEACIgJAJQAEAHgBABIgCAJQgBAGgEAHIgFAIQgBADAFAGIgCABIgGgCIgGAAQgCACgBAFQgFAKAFADQAGAFABAEIgBAIQgBAGABABQAFAEABACIABAMIAEAIQADAFAAADQABADAAAIIABAFQAEABABAFIAAAGIACAFIACAFIgBAHIAEAVIAEAGQABACAAADIAAAHIADAGIACAFQAAAHgDALIAGAGQAFAFAHAOIACAMQABAJADAHIAGAKQAEAGABAFQAAAHgDAPIACAHIACAFIgOAGIgDAAIAAgCQAGgCABgCIgCgCIgDAAIgCABIgDAHQgDAIADAHIAEAOQAAAFgDAHQgDAIAAAEQAAANAEAZIgBAQQgBAJABAHQABAGADAKIAGAQIABAOQAAAIABAEIAEALQACAHAAAGIgBABQgBAAAAgBQAAAAgBgBQAAAAgBAAQAAgBAAAAIgIAGIACAJQgDAEAJAPIANAVIABALQADADAEAHQAEAGAEADQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAABIgBADIADADQABAGgCAEIACACIADgEQACAFgCAFIgDAKQgBAFACADIACAGIgCABIgEABQAEAIgBANIgBANQABAAAAAAQABAAABABQAAAAAAAAQABABAAAAIgBADIgHAAIgEgDIgDAAIAAAFQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAIgDAEQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQgBAHABAJIgCACIgHgHIAAgDIgDgBIgBABQgBAHAHAFIAIAHQAAAUADAFIALARQAAACACADQACAEACABQAEAGAAAVIAIAbIAHANQAFAHABAJQADAMgBAaQABAGAEAOIAAAGIABAGQAAAAABAAQAAAAABAAQAAABABAAQABABAAAAIAFAPIAAAFIADABQAGAGAEAOIAEAEIAEAFQADAHABAMQABAKgBAIQgBACgHAKQgEAIADAJQAMAIgCAKQgCAQACAFQACAHAHAHIAMAJQAFAFAGAOQAGAPgBAGIACADIACgCIABgDQACAAAHAJQAIAHAFgJIAEAAIAFADIAEACQAEABAKgDIAFACQABAAABAAQAAABABAAQABAAAAgBQABAAAAAAIAEgDIAIgBQADgBAGgGIgBAHQAHAIAMgBQANgCAFAGIAAACQgCABAAAEIABAGQAAACgDADIgDAHIAFALQAAAAABAAQAAAAABAAQAAgBABAAQABgBAAAAIAGgPQgDgDAAgDIAAgEIADABQAGAHgCAGQgDAIABACIACADQACACAGACQAMAHAIAEIAVAIQAEABAXAQQANAIARAYQARAZALAHIAQALQAMAJABADIgMAGQgEACAAAMIAIAAIgFAIIABACIACgCIADAAQADAGACACIAOAJIAOAHQAMAIAIAAIAGgBQAIABADgBQAFgCADgHQACgDgBgEIAAgHQACgCALAAQABAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAIACgBIAFAFIgQAEQgCACAAADQAFAFgGAIQgEAFgHADIgLABQgHAAgCABIgBADIAEACIAagFQAHADAKAIIANADIAOADQADAAAHgEIAAgDIgDgCIgFgCQABgDAFgCQAJACAFAJQAGAHgEAJIAGACQAAAAABAAQABAAAAABQABAAAAABQAAAAABAAIAAADIgFABIgCACIABACIAMAGIAIACQAGAAACgBIABgCIgBgDIABgCQADABADAFQADAEAAACQgCABgBADQAAAEAEAFIACAKIAEADQAGgCADgJQADgJgEgEQgEgDgCgDIABgBIAFAEIAFAGIAKAHQADACADAHQADAHAAAEQgGADAEAGIgnAmQgOANgGAJQgGAJgHAPIgTArQgEAJgBALQgBAFgIANIgJATQgCADgNADQgNADgEAGIgDAQQgBADgEAFQgBAHgCACQgJAEgNgHIgIAJIgDgJQgDgHgDgCIgFAGIgRAAQgBAAgEACIgFAEQAAAGgCAHQgBAHAAAIIACAKQgKgCgHACIgBgUQgBgRgDgDIgCgBQgDADgGADQgGADgDgBIgGgEIgBABIgJALQgHAKgBAEIAEAHIgBABQgEAEgEABIgHAEIgJAEIgDACIgIABIgBAAQgDACgLAAIgEgFIgCgLQgBgDgIgFIgYADIgGAHQAEAIAAALIgFAFIgCALIgBAMQgDACgFgDIgFADQgwACgFABQgHABguARIgEAQIABAAQgBAEADAHIAJADQADADgBAEQAAACgKACIgCADIABAEIgCABIABAGIgCADIADAGIAEACIABACIgDAEIgIABIgKAQIABAFIAAABIgEADIgFAJIgFAJIgIgBIgDACIgJAaIgPgIQgEgCgIgGQgHgGgGgCIgcAJIgNgBQgGgBgIAJQgVABgLABIgDgBQgEgOgKABQgDACgDAAIgFgCIgIgBQgDAAgEgFIgDAAQgHABgIAPIAGAFIACANQABAIgDAEIgJAEQgBAFgEAHQgCAGAMAKIAAAEQgFAKAEAIQAFAJAAAGQAAAFgGAMQABADAMALIABADQgFABgFAIIgHACQgDACgDAKQAAACAEAFQABACgDAEQgOARgFADQgDACgTABQgBABgCAEIAAAFIAFAIIAAACIgHAiQgDAOAHAUQACADAEADIAFAGIADAHQACAEADACIALAEIACADQgDAEgFAcQgHACAAADQgBAEAEAJQAEAKgBAIIAGAAIABACIgCADQgJAGgIAIQgMALgCAHIgCAMIgHAYQgKAegLAoIgBABIgCAGIgDAHQABAIgFAKIgIAPQgEALgGAYIgCACQgUAdgLAaQgCAHgDANIgJAYIgPAyIgEAOIAAANIgIAMQABANgGAPQgJAVgCAGIgBACIgHAPQgEALgBAGQgEAVgNACQgSADgGAIIgNARQAGAkAFAoIACAZIABABIACAtIAEAfIAKBqIALB6IACACIAEANIAFAOIAGAEQgBAIgRAzIgXBAIgLAOIgBACQACANACAFIAHAPIAGATIADAJQADAFAAAFIgFAIIgFAHIgEACQgCAHgLANIgKANQgOAxgJAXQgBAEAAAJIABANIgEAJIgJAAIgWA2IgLAiQgGANgQALQgDAGgMAvIgBADIgJAmQgHAYgCANIAAABIgJAVQgFALAAAIIACADQAMANABAFQABAFgDAKIAAAeQAAAXgBAEIgFALQgDAFgBAFQACAGgCADIgLgBQgIAAgCgBQgCgFABgEQgCgEgFgCIgHgEIgFgBQgJADgCAAIgLgDQgDgBgPADIgQAIIggAGIgKAEIgLAEIgQADIgLADIgJgEQgKAEgGgCQgGgDgDABQgEAEgHABIgBACQAEAQgGAJQgFACgNgBIgBACQgQAegIAMQgQAWgHAQIgUAiQgVAmgKANIgEAIQAOASgSAMQgIgBgEABIgdA2IAEAGQADAEgDAIQgDAKgFAAIgJgBIgCADQAAAQgEAGQgIAPgDACIgLAJIglAdIgJAEQgNAJgGAGIgOATQgLARgBAEQgBAFAEAPQAGATAGACQADAIAAAFIgCANQgBAJACAQQgBAIgFALIgIASIAAAIQABAHgBACIgLAUQgCAFgGAIIgKAMIAAAAIgCACQgBAGgJAUIgJATQACAGALANQAJAMACAMQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgBAKgGAWQgGAWgCALIgIAZQgBAEABAEIAEABIgBAGQABAEAHAHQAAAFgNAQQgQARgCAEIgDAJQgBAEgKAJQgKAKgCAIIgKABQgIAAgOATQgBgBgDgDQADgPgEgHIgHABQgCgBgMgPIgPgTQgKgFgEgEIgagYIgGgEQgeAYgMAGQgWAOgIAOQgFALgMATIgOAZIgYAaIgOAOQgCACgCARIgEAJQgCAEAAAEIAEAEQAHAAACACIAIAOIgBAGQgFAEgEALQgFAMABAGIADAIQAEAMAFAUIAIAfIAFAUIgCANIgBAKIgEALIgCAIQgDAHgjAYQgKAHgBAXIgBAiIAAABQABANgBAEIgHALQgCAFgBAJIgOAmIgGAUIgDAHIgWBCQgCAHAFAsIhWgJIAChYQAAgMANgXQANgXALgLQAKgHAAhOIgChOIgogEIgZgrIhZhgIhLhfIiCgrQAAgMADgNIAFglIgekFIgZgzQgCgFAAgHQgBgPAIgHQAIgJACgTIAAgcIAHgzQAGguAAgNQAAgNAKgkQALgjABgHIAEgTQAFgLANgJQANgKgKgKQgJgJgLABIkQAAQADALgCAUQgCARAGASIAGATIgBAUQgEAHgEAJQgEAKAAAFIkYACIB5BnQALAKABAGQADAKgIDMQAAAIAgAwIAfAvIgrAZIjfDOIghBBIgJAYQgGAQgIAGQgIAGhiB4IhhB2IgwAwQgKAJgJACQgJACgRgDIi4AAIjqi4IivhbIi8B5IgPCaIjCAHQgQAAgKAEQgHADgFADQgNAMgMAUIAAgDIgIAAIAAAFQgtAxgWAdQgPAUAAARIgeAcIlMAAIhDiDQihgHgUAAQiKgFgcAAQg+AAgNAFQgEACg6AfQg4AdgKADQgZAIgmgPIh2gpQgOgEgIgNIgQgeQgIgQgQgqIgOgmIgegvIgrg1IgTgbQgMgUgJgIQgKgKgNgpIgMgnQgGgFgEgHQgCgEgKgCQgJgDgFgBIgbAGQgMAJgHgBIgTgBQgSAFgKgBQgQgBgdAMQgeAMgSgBQgLgBgKAEQgMAEgIAAQgFAAgJAEQgHADgIgCIgBAAIgKAEQgEAAgIgEQgHgDgDAAQgJAHgJgEQgJAFgIAAIgPgBQgEAAgKAFIgKAGIgEAKQgCAGgDAEQgDAEgCAIQgDAIgCAFIgCACQgFAHAGAOQAGARgDAIQgGASgGAHQgCABgEAQQgFAQgMANQgEAEgEALQgDAHgOAIQgNAHgMALQgHAGgGACIgOADIgEAJQgCAEgFADQgFAEgIABIgEgBIAAABIAEABIgECJIgGAKQgIALgGAEQgKAIgcAKIgEAIQgDAJAEAIQAGAJgBAKQAAAGgCANQgDAMgRAhQgFAMAAApQAAAMAFApIACAoQgyAbgUAIQgNAEgoAZIgmAXQgCgEgFABQgDAAgDADQAAADgJAFIgIgFgEg5yAKGIABgDIgDAAg");
	this.shape_93.setTransform(408.7,371.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#754C24").s().p("AAaBHQgbgkgKgQQAAABAAABQABAAAAAAQAAABgBgBQAAAAAAgBIAOAXIgBABQgEADgFALIgDAEIgCAHIgBACIAAgBIABgBIACgNIABgMIgBgEIgGgaIABACIgBgCIAAAAIgBgBIgGgUIgGAEIAAAAIgPAHIgDgEIgCAAIAAAAIAPgJIABAAIAAgBIAIgFIgBgBIABgDIABgGIAEgJIADAHIAFARQACAKABAAQABgGADgDIADgCQADgFADghQAIgPgIAwIgEAZQAAAGAEgPQAEgMABAAIABADQABAEAJgiIAHgTQgDAVgKAWQgDAIACAAQAQgpALgYIAHgKQgEAOgKATQgIAQgFAOQABADAKgWQALgZACACQAIACAAADQACAIgVAgQADgDgBAGIgDAKIgCAIQAAACAGgEIAXgXQAQgQALAGIgNATIgJAMIgLAVIgRA9gAg+gtQgagjAEABIABABIAYAhQgBAAAAAAQAAAAAAAAQAAAAAAABQABABABABIABADIgFgGg");
	this.shape_94.setTransform(795.2,254.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#754C24").s().p("AgGAIQAEgOADAAIADABQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAIgHALQgCAEgCAAIgCAAg");
	this.shape_95.setTransform(791.6,273.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgBAAQABgOAAAEIABAJIgCANQABgTgBAHg");
	this.shape_96.setTransform(795.8,255.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#754C24").s().p("AgDAhQACgjgCgEIgBAGIgBgCIAAgQIABgOIABAOIACgGQABgGACAAQACAAACANQgDABgBAJIgCARQgBAXgBAAIgBAAg");
	this.shape_97.setTransform(795.7,248.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#754C24").s().p("AAWB4QgCANgCgHIgCgGQAAgBAAgBQAAgBgBAAQAAAAAAgBQgBAAAAAAIAAgNQABgJAEgIQAEgHABgUQAAgBAAgBQAAgBgBAAQAAgBAAAAQgBAAAAABIgEAJQgCAGgCABQgCABABgHQgCgFgDAHQgFAKgCACQgCAHgBAHIgEAPQgHAAgCgJQgBgJACgPIAEgXQABgKgGgCQgFAGgRALQgJAFgDAFQgFAHADAKIAQgGIgDARQgIgFgFgCQgIgCgGAIQAIgPgJgGIgVgJQgOgGABgDQABgCAHgDIAWgFQAAAPAFADQAGADAQgHQgHgIgDgMQgDgKAAgKIgGg2IAMAAIgXgFIAZAFIAvg5IAHARIgFgNQgEgIgOglIAOAcIBIADIgNAdIAAAAIgGAIIgFAAIACgGIgEABIABAFIgDAAIAAgFIgTAEIgKAAIABADIgEABIAHAJIACAFQAEANAAADIgHAJIAHAEIAAADQADAAAEgDIACgCIgRAVQgCADAAADQABAEgGALQANgJADABQACABAEAHIAEgeIACgNQgBASACgIIABgOIgUgaIgBgBIgDgKIAJgDIATABIAAABQgBAnADgLQgBAUgBgHQgBgCAAgBQAAgBAAgBQAAAAgBAAQAAAAAAABIAAAEIgCgDIAAAEQABAzABgcIAAgYIA+BSQgJgMABACIgyg2IgBAFIAAACIgEBbIgBALQgBAGgCAAQgCABgBgIQgBAOgEAEIgFALgAAshAIABAAIAAABIgBABIAAgCgAAthAg");
	this.shape_98.setTransform(791,260.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#754C24").s().p("AgEAHQAFgFADgHIABgDQgBAEABACQgDAFgDAEIgDACIAAgCg");
	this.shape_99.setTransform(801.8,246.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#B25538").s().p("AgBAEQgHgBgBgDIAAgCIACgBIABAAQADAAAGACQAGABABADIgBABIgKAAg");
	this.shape_100.setTransform(794.7,258.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#754C24").s().p("AhiBwQAFgDASgcIADgGIA9ARIABAtgAg5A6QgIgCgRgNQgBgGACgGIAAgCIABgCIAIgEIgHgIIACgCIgdALIgUAHIARgHIAZg7IgLgFQgTgMAAgKQAUAFARAGIAOghQAIAHgBALIgIAUIALACIAEgHIAIgCQABgHACgaQACgZACgNIAHgMQADAQgEATQgGAUAEAOQADACACgZQACgbAEACQAIgBABACQAEAHgHAmQABgEABAIIABAPIgZAPIAHAJIALAOIACACIBHggIgmgsQAMgPACgFQAAACgGAOQgDAMARgSQgDgGADgHIADgLIAIgIIAHgEIAGABQAGADAEAFIAIAHIAIAJIAJANIAIAOIAPAmIAEAAIgEAEQgCACgEABIhlAbIgBAAIAAAAIAAABIgBAAIAAgBIgIAAQgIABgHAEIAAAAIgDABIgGAFIgDADIgEAXIANAEIAAAEIgOgEIABgEIgCgBIAAgKIgDAJIgIgCIgCACIgBABIAJADQgCALgBAOQgDAEgHAAQgEAAgHgCgAhbARIAIgDIAHgDIAOghIgCgDIgIgDgAgeA4IABgQIAAgIIACABIgDAYgAgbAhgAghAfIACgEIADABIAAABIgBADgAgcAcgAARhXIABABIgCADgAAShWg");
	this.shape_101.setTransform(803,260.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgBADIABgIQACgIAAAIIgCAPIgBgHg");
	this.shape_102.setTransform(800.4,260.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#754C24").s().p("AgoBbIgFgNIBNiZQgCgCgBgGQgBgFgDgCIAMAFQAHADACAFIhVCnIAAABIgBAAg");
	this.shape_103.setTransform(813.7,266.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#754C24").s().p("AgEACIALgFIgBACIgMAFg");
	this.shape_104.setTransform(801.2,260.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AAAABIgBAAQgBAAAAAAQgBgBABAAQAAAAABAAQABAAABAAIAFABIgLAAg");
	this.shape_105.setTransform(806.1,259.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#754C24").s().p("AgDgPQADAEACALIAVgMIgtAcQgBgVAUgKg");
	this.shape_106.setTransform(796.1,264.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgIAMIAAAAIACgEIAIAEIgCgVIAEAUIgBACIgBgBIAAAEgAACgKIAAAAIAHgFIAAAAIgEAHIADABIAAABg");
	this.shape_107.setTransform(800.6,261.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#754C24").s().p("AgIARIgEgFQgCgCgBgEIAJgQIACgFIABgDIAAAAIALgBIAAABIADABIACACIABACIABAEIAAAJQAAAFABAEQgBAEgEADQgEADgFABIgBAAQgEAAgFgDg");
	this.shape_108.setTransform(790.7,262.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#754C24").s().p("AhRBqIAHgNIAKgTQgGAAgFgBQgHADgDAHQgDAJgGADQgTgQACgRQACgLAMgMIASgOQAIgHgCAAIgMACIA4gNIgBACIAAAAQACgCAEgBIABAAIgIANIABABIAKAJIgCAXIgWgKIgBAAIgOAgIgCAAIgCAAIAhhBIAAAAIgOAFIAJAEIgdA4IABAAIgIASIAGgIIADgHIACAAIgDAFIgIAKIBGgMIAnAFIgBgDQgBgBAAgBQAAgBAAAAQAAAAAAAAQABAAAAABQAKASgHgPIAGgLIgvAIIgugGIA/gLIgfgcIABgBIADADIAYgDIADABIAIAEIAKgmIACgHQgWAHgIAAIgIACQAAADgCAEIgGABQgCACAAADIAAACIAAABIgBAHIgBAIIAAAAIgGgFIACgZIALgCIAAAAIAEgCIgBAAIgBAAIABAAIADgEIACgCIgBAAIgCAAQgJAEgEADIgCgBIgBAEIgFACIAEgGQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAgBIACgCIADgBIABgBIABAAIgBAAIAWglIgTgGIAAgBIgMACIgIgIIgNgpIAAgBIAAgCIAfgGIAaAHIABgDIAUAJIgVgGIAAABIAWAPIAAABIgBADIABgBIABgDIgBAAIAFgHIAAAAIgEAHIACABIAAAAIAFgHIgDgBIALgWQAZAKAOASQAEAFACAFQAJABADALQAHAAAHAFQAKAIAGABIgMAFQAOgDgGAIIgFAGQAAABgBABQAAAAAAABQAAAAAAABQAAAAAAAAIgMAIQgIADgKgDIABADQADAIACABIgbAAIAJADIghBAIAVgEQgKAJgQAFIgDAFIAugIIAMASIALgCQgCAKgEgCIgFgGIjDAiQAKgMAAACgAhKBdIAAAAIABgBgAgpAjIAGgMIAEgEIgDgBgAgOAGIAAABIAAgBIAAAAIAAAAgAgQAGIABAAIABAAIgBgBIgBABgAg7BKIAKAAIACAAIgNADgAgvBKgAiDAfIgEAAIgCABIgBAAIBFgQIgCABIg5ANIAOgBIgOAIQgCgFgBgBgAgNAZIAAABIAAgBgAhBgFIgEgBIAogBQgDACgVABIgMgBgAgPgIIAAAAIACAAIgCAAg");
	this.shape_109.setTransform(802.4,260.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#754C24").s().p("AgBAJIABgHIAAgHIAAgFQABAHABAAQgCAOgBAAIAAgCg");
	this.shape_110.setTransform(802.4,246.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#B25538").s().p("AAKAGIgDgCIgDADQgFgBgDACIgCgHQgBgBgGgDIgBgCQAEgCAJACQABgFADgBIACACIABAAQACADAAADQAAABAAABQAAABAAAAQAAAAABAAQAAAAAAABQAEACABAIIgCABIgCgGg");
	this.shape_111.setTransform(801.1,260.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#754C24").s().p("AhrBvQgBgBgEgCQgGgBgBgCQgJgGASgRQADAAAIgDQAHgDAEAAQALgJABgCQAAgBgBAAQAAAAAAAAQgBAAgBAAQgBAAgBABQgRAHAAgDQAGgBAIgHQAGgGADgEQgMABAAgQQADgBABgHQABgEAVgEQACgCgPABIgVABQANgEgHgCIgZgFIgOgDIDShyIgDAEIAHgKIg4BUIgJAMIgOAUQgXAfgQASQgmApgnAXgAAHACIAbgkIAOgPQgUAbAAACQAFgEAGgCQAGgDAYgWQAJgEgJAKQgHAIgQAMIgTAQQgBAAAAAAQAAABAAAAQgBAAABAAQAAAAAAAAIALgFQALgGACABQAAAAAAAAQAAAAAAABQAAAAgBABQAAAAAAABQgHAGAjgTIATgGQgQAMgZAHQgIADACACQAtgOAWgFIANAAIhDASQgBACAZgFQAZgGAAAEIACAFQABADgBACQgGAFgnABQAIABgTADIgIABIhFAlgAAHACIAAAAg");
	this.shape_112.setTransform(793.6,255);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgHABIAPgBIgIABg");
	this.shape_113.setTransform(793.2,255.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#754C24").s().p("AgUAEQgFgHAKgHQAPgEAFABIARACQACABgHAHQgKAGACADIgOAIQgKgCgFgIg");
	this.shape_114.setTransform(780.8,258.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#754C24").s().p("AADgEQALgCgOAJIgHACg");
	this.shape_115.setTransform(780.9,261);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#754C24").s().p("AAbiOIABANIguEDIACgBIgIAKIgDAEg");
	this.shape_116.setTransform(787.7,254.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#754C24").s().p("AgmBbIAcicQABgCADAIQACADAAgHIAAgPIgFgcQAIgHAGAhIAEAWQACAJACgCQAAgFAEgVIAAgeIgFANIgCgPIAFgCQAEgDAAgKQABARADgBQACgBAHgIQAFgIAAACIgIAeQgCgJgCABQgDADgDAPQAGAEAFAMQAFAOACABIAKgWQgJAZgDASIAEgDIAFgIQACgEAAgEIAAgIIANgfQALAXgaApIgDABIgBACIABgBIgCABQgEADgLAQIgMAPIgCAIIAAAAIABgUQgBAAgBgWQgCAOgDAAIgBgBIgBAAIgKA4IgCADIAUgeIAAAAIgDAEIABAAIgBAAIguBGIgEAGIgJANIABgCIgGAIQgBACgBABQgBACAAAAQAAAAAAgBQABgBABgCIgEAFgAAWADIADgEIAMgRIABgBIACgDIgCADIgBABIgMARIgKAOIgBABIAIgLg");
	this.shape_117.setTransform(793,253.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#754C24").s().p("AgGACQgGgBADgBIAPAAIAFgBIgGADIgGAAIgFAAg");
	this.shape_118.setTransform(807.4,254.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#754C24").s().p("AgKADIgGgFIALAAQAMgBAHABQAGACgEABQgMADgHAAIgHgBg");
	this.shape_119.setTransform(781,256.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,818.8,733.7);


(lib.southsudanai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// south-sudan.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8C6239").s().p("ABrBYIAVAQIghgXIACABIgYgRIAGAEIgDgCIgcgUIAAAAIAzgYIgLAAIhPgBIAMAIIAAAAIACACIgIgGIACABIAIAGIgCgBIAHAEIgBAAIADACIgOgLIALAIIgDgCIAOAJIgCgBIAJAGIhfAsIgCABIgBABIABgCIAAgBIgDADIgHAEIAKgKIgJhEIAUACIAEAAQAhAAgIABIATAAIgTgOIAEADIgFgDIgrgfIgJAFIAEAlIgMgBIgVgBIASAAIgCgBQgCAAACAAIAGAAIgYgBIAEAAIgugBIBJggIgBgDIAAgCIgBgHIAAgBIAIAGIgDgCIADACIAAAAICohOIgBABIimBNIgBAAIADACICehJIADgDIADgDIgSAYIgKAOIANgOIADgCIAMBhIACAAIAUACIAAABIAFABIgbACIAJBHIAMAKIgYgQgABJBBIgFgEgAAWAfIACACIgCgCIAAAAIgBgBIABABgAASAbIgDgCIADACgAhIglIgBgBIgDgCIABAAIgJgHIABACIgigaIACABIgBAAIAUAOIgDgDIAbATIgLgIQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIAEABIAMAJIABAGIAAABgAhNgpIgGgEIAGAEg");
	this.shape.setTransform(107,385.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B07E09").s().p("AgBgDIADADIgDAFg");
	this.shape_1.setTransform(108.2,387.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8C6239").s().p("EAO0A4/QgEgGgCgGQgGgMgBgQIABgOIgJgFIgBgBIgBgBIgCgBIgCgCIgCgCIgkgGIADgGIgCABIgDAAIgCgBIgHgEIgDAAIgFABIgZgKIgBAAIgCABIgMAOIgCACIgCAAIgGgBIgJABQgtALgJABQgPACgPgHQgKgFAAgIQACgEAAgGQABgNAAgMIgCgXIAAhFIgEgUIAAgCIAAgCIACgEIADgIIgFAIIgBADIAAgBIAAAAIgEgMQgEgJAAgFIAAgIQAAgGgBgBIgCgEIgBgBIgCgBQgEgBgEABIgOAFQgDADgEAAIgBgBIgBAAIgDgBIgFgDIgLgJQgFgDgCABIgEADIgBAAIgCAAIgTgGIgMgIIgCgCIgCgBIgDgFQgFgGgEgBQgFgCgEAAIgFAAIgBgBIAAAAIgCgBIgFgBIgCgCIgHgFIgOAAIgEgBQgGgBABgCIgCgFIgBgBIgEgCIgDgCQgDgBgDADIgIgGIgSgLIgEgCIgDABIgGAAIgMgCIgGgBIAAAAIgBAAIgNAOIgBgBIgBAAIgCgCQgTgQgFgOIgEgPIgBgJIgDgHIAEgCIADgCIgCgBIghgUIgCgCIgGgRQgGgPAAgFIAAgBIgGAAQgXgHgLgFQgRgMgLgPQgJgNgIgVIgDgJIgCgEIAAgBIgIgGIgBgBIgCAAQgEABgDgBIgEgDIgJgGIgRgMIgOgIIgNgIIgFgHIgBgCIgBgfIgCgFIAAgBIAMgGIgBgBIgNADIgTABIgggIQgMgFgJgJIgHgIIgFgCIgNgJIgTgTIgFgOQgGgRgBgRQAAgLACgKIAAgCQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIABgSIABgCIAKgCIABAAIAAgCIAAgDIADgPIAAAAIgLgHIgBgBIAAgBIACgHIgDgBQgIgCgIgFIgNgJIgMgLIgEgGIAAAAIgEgGIgGgKQgCgCgHgEQgFgCgGgBIgGgEIAvBZIhrhWIAAAAIgBAAIAAABIgEAMIgLAsIgBADQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgLAAAAAHIAGAHIgDAGIgYAfIgNALIgIAHIgJAFIgRAHIgLACQgKADgBACQgCADgCAJQgBAGgCAGQgFAGgEADIgGACIgDgBIgCgCIgMgEQgEADgDAAIABAJIAAAFIAAACIgBACIgBAEQgEAJgHAJIgPAVIgrAMIgCABIgBAAIgIACIgRADIgRgBQgJgCgGgCIgHgDIgPgIIgEgDIgOgOIgNgOIgIgFIgSgYIhnAAIAMgzIgBgBIgHABIgIAAIgDgBIgEACQgCABgFgBQgFgCgCAEIgGgEIgBAAIgNAFQgQAHgMACQgYAFgXgGQgRgGgQgKIgCgCIgCAFIgBAAIgQgGIgCgBIgeA+QgLAEgKACIgKACIgCAAIAAAAIgCgNIgQgFIgCgBIAAAAIAAABIAAABIgBAAIAAACIgBAAIAAABIAWATIgBAAIAAABIAAAAIhgAmIgIADIATANIgNAdIgZAMIgNAGIgKACIgIABIgYAIIgHACIgIABIgCAAIgKAAQgLAAgMgEIgggUIgEAHIgTgLQgFgCgFgEIgIgLQAAgFgGgKIgCgJIgIgKIgEgBIABgCIgRgUIgDAQIgEAaIgGAAIgTgCQgZgDgIgHQgWgOgTgQIgJgIIgCgCIAAAAIgEAEIAAAAIgBAAIgBgBIgLgGIgFgDIgLgMIAAgBIgBgBIADgHIABgDQAAgBAAAAQAAgBAAAAQgBAAAAgBQgBAAAAAAIgIgCIgEAAIgCADIgHAGIgDADIghgTIgBgBIgCgEIAAgBIgUgIIgNgmIgFgOIgNAAIgCgtIgHAKIgDAGIAKgWIgCgjQgGAFgDANIAAgDQAAgKgCgGIACBUIgWABIgKgBIgOgBQgTgDgQgJQgPgIgPgOIg5gZIgPgZIgKgRIgDgPQgDgPABgLIABgGIgFgRIgCgPIAAgFIgCgYIgOgGQgFgDgLgMIgDgEIAAgCIABgEQgLgPgEgIIgCgEIACgFIAAgDIAAgBIgJgUIABgCIAAgBIAIgEIAAgHIg9AaQgLgGgIgHQgDgCgFgGIgBgCIgCgCIgCAAIgEgDIgSgXIgBgBIgBgBIgBAAIgGAAIgGgFIgJgMIgIgPIgEgKIgHgHIgBgBIgBgBIgBgCIgFgGIgEgFIAAgBIgCAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBIgDgDQgOgNgGgJQgJgNgFgOQgDgLgCgTIAAgGIABABIAAAAIgBgBIgBgBIABgBIACgBIgIgJIgBgIQgBgEgDgCIgDgDIgKgHIgBAAIAAABIgCABIgNAKQgHAFgBAAQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAgCgGIgCgJIAGgLIgLgDIgPgQQgOgPgGgHIgGgIIgMgXIgFgOIgDgOIgMgTQgGgPAHAIQgHgKgIgSIgKgcIgCgOIgBgRIAAgCIgDgBQgEgLgDgRIgBgUQgBgMACgNQABgLAEgMIAMgfIAAgBIgBABIACgKIAAAAIgIgJIAAgBQABgGgBgHIAAAAIAKgOIABgBIAAAAIgCgEIgVgZIAAgDIgBgGIgEgJIgGAAIAAgBIACgDIgBgDIgIgKIgDgDIgDgBIgKgEIAAgBIgNgKIgKgLIgDgEIgLABIgCAAIgEAAIgOgCIgEgFIgCgCIAAgBIADgKIgMgDIgFgCIgMgFIgWgPIgGgKIgMgCIgFgCIgWgOIgGACIgIgGQgFgDgDgEIgbgHIgBAAIAAABIgFABIgJgBIgGgCIgNgGQgPgHgIgIIgHgKIgFgKIgSg0IgEgBIAAAAIgGAAQgDgDgDgBQgEgBgDABIgGAFIgBAAIgBAAIgEACIgMADIgSABIgPgBIgEgBIgDgBIgQgGIgMgGQgIAAgBgEQgDgCgIABIgDAAIgCgBIgJgBQgNgCgRgHIgugTIALgQQAWgfAOgaIg6AgQgIgOgDgQIAAgBIglgOIgCgBIgBAAIAAgBIgBgCIgGgSIgBgCIgCAAQgCAAgDAFIgGAWIgEAJIAAABIgBAAIgCgDIgDgIQgDgLABgNIABgMIADgKIARgbIAMgXIgBgDIgEgQIgCgBIgJgCIgOgFIgOgHIgSgOIgTgVIgGgHQgDgDgDgCIgFgDIgbgTIgPgOIgHgJIgIgMIgGgMIgCgNQgBgGAAgHIAAgIIAAgIIAEgSQADgJAEgHIAIgOIAIgKIADgCIgggKIAAgCIACgIIAFgPQAGgPAHgKIAQgYIAEgHQACgHAGgHIACgDIgFgBQgTgGgQgMIgLgJIgIgNIgFgIIgGAJIgIgFIAIgRIgDgJIgCgMIgKAOIgCADIAAAAIgXgPIgHgHIgSgCIgTgMQgRgLgKgOIgOgSIgMgWIgEgKQgEgLgBgPQgCgMACgOIACgJIgBAAIgFACIgIgHQAAgBgBAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAEgEQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAgBgBIgBgCIgBgEQgGAAgCgCIAAgCIAAACIgBgBIgBgCIg4gHIgZgVIABAAIgLgFIgJgGI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EgMIAAgBIARAcIAFgpIAbgLIgXA+IgmAIIABghIgDgCIgBAAIgDgCIgBAmIAHgBIgCAuIAKAAIgCgCIACAAIAMgBIAAAAIgZBGIADhDIgNgBIgOgOQgJgDgKgGIgFgDIgGgFIgCgCIAJgCIgXgVIgBABIAAgCIgOgNQgIACgIAAQgUABgUgLIgLgHIgBgBIgGAEQgGACgKADIgFABIgDABIgEAEQgDACgCABQgGACgGgBIgGgBIgBgBIgBAAIgCACIgEAFIgEADIgLAFQgUAGgVgFQgOgEgOgJIAGADIgIgEIACABIgEgCIgBAAQgPgBgPgGIAMACIAMABIADAAIAJAAIACgBIAEADIACABIAAAAQAPAIASACQAPABAMgGIAGgDIAEgDIAEgHIACgBIABgBIAAAAIAHACQAGABADgCQAFAAAEgCIAHgEIAKgDIAGgCIgNgDIARgFIgBgBIAEAAIACAAIgJgEIADAEIgMgEIAegJIgFgBIgBgBIgGAAQgDAEgIADIgLAEIgIACQgIAIgDABQgIACgGgBIgHgCQgEgBgCAEIgEAFIgEADIgHADQgNAEgOgEQgJgCgIgFIgJgFIgEgDQgKABgIgCQgKAHgNABQgKABgJgDIgIAGQAEAFACAJQACAJgCALQgDAMgDAGIgGAKQAAANgIALIAAABQAHAIACALQADAPgGASQgGAKgJAJIgBACIgBAJIAAALIABALIAAABIABABIACAAIAAABIADAQIAAABIgBABIgCAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAABAAAAIgBABIgBADIAAABIABACIABACIAAACIgGAJIABgBQgGAIgHAEIgFADQABAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgHABIgCACIgCABQgCABgEAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAFgFQADgEADgFIAAAAIgBgBIgEAAIgFAEIgGADQgEABgFAAIgHAAIgFAAQgBAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABQABgEACAKQAFAKgFAKIgBAEIgEADQgDAFgFACQgFADgIgBIgBAAIgEANQgFAQgNAFIABAAIgNAFIACAIIgDALIgFAIQgEAEgHAFIgKAFIAAADIABAFQgBAEACAGIAFAMIABAFIAAADIgBAEQgBAFgDADIAMAOQAJALAFAHQAJgEAKACQALACAHAJIADAAIADABIABACIABgBQAHgHAKgCQAJgCALAEIACABIACACIABgBIANAJIgBgBIACABIgBAAIAKADIAGADQAJgCAIABQALADAIAEQAMAFARANIADABIAGABQAGADADAEIAHAIQAFAEAEgGIAGgBIADAAIABgBIABAAQAEgDAHgCQAFgCAGAAIAGABIADAAIACgBIAFgHIAHgHIAGgDIAJgBQALAAALAEQALgDAPAEIgZh3IACAJIgCgNIgBAAIAAAAIABAAIAFgCIA6gCIAEABIghCCQAHAEAGAGIAUABIAFABIADAEIAHAIIACAFIACADIAJADQADgCAGgBQAEgEAFgBQAEgCAFABIAHACIACAAQALgCAIADIAHAFIAEABIAFgBIAHgCIAFAAQAOACAKAJIAEADIBRheIAAAAIAGAEIABABIABAAIhWBcIAFAHIABAAIAHAIIAFABQAKADAHAFIAGAFIAAABIAOASIAJAFQAGgBAFACQAHABAJAGQAKAHAHAHIAWARIAKAMIgBAAIgBgBIAAAAIAAAAIABABIACACIAIAHIAJAQIAVgBIAQACQAIACAHAFQAKAFAFALQAFAJADAMIACAIIABAAIAFAHIAEAGIAHAGIAZAdQALAOAFANQARAcgQgaQgJgPgKgNIgPgSIgKgKIgCgCIAAABIAHAGIAUAXIAGAJIALAQQAMAUAEAMQADAHAAAJIAAAPIACAXIAAAUQAAAOgDAGIACABQAHADAHAFQAQAMAHAQIAPAIIALAIIAQAEIAJAEIAYARIAIAOIgEgIIgBgEIgHgFQgWgTAZAQIADACIALASIADAHIAAAQIADAJIA8gpIADADIAAAAIABABIgRALIAAAAIABACIgIAFIgBgBIgmAYIAAABIAAABIABAFIgBAPIAGAGIADAEIABABIgDgBIAAAAIgGgGIgBgBIgBADIABADIgBAAIgBgBIAAABIgBABIgBADIACACIAFAHIAAAAIAAABIACAAIABAAIAOAGIABABIgBgCIAKAEIAFAEIAHAJQAFAHABAHIAHAHQARAAAkAJIAxAQIAEACIABAAQAMABAJAEIABAAIABABIABABIAFADIABABQANANAFAGIAEAFIACAFIAAAFIgBADQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAIgOAFIgBAAIABAAIADABIASAHQALgBAHAEIAEACIAFAGIAGAMIAFAPIgBAAIABAAIAAABIABAAIAAAAIAAgBIAAAAIgBgBIABgBIAAgCIABADIACACIAFAIIABAGQAAAHgDAGIgBACIAAACIgBAIIgBABIACAEIAAAFIAAAFIgBADQAAABAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAIABANAEIALgBQAIgIAHgBQAIAAAKAFQAIAFAKAIIAQAOIAQANIAAAAIgDAKIgKgGIgQgMQgUgTgMgEQgJgFgIADIgHAEIgGAFIgMACIgUgEIgEAAIgCAAIAAgFQAAAAAAAAQAAAAAAAAQgBABAAABQAAAAgBABIgBAFQAAAAAAAAQAAAAAAABQAAAAAAAAQABAAAAAAIAJADIgKgCIgBgBIAAgCIABgEIgBgMIgBgCIAAgBIACgMQADgGAAgEQACgIgDgHIgGgKIAFACQAGAFACAFIACAIQAAAAAAAAQAAAAAAAAQABgBAAAAQAAgBABgBIABgJIgCgFIgDgHIgCgBIAAAAIAAAAIABgBIgBABIAAgCIgEgQQgDgJgIgHQgFgFgJgBQgGAAgCABQgBAAAAAAQgZgHgCAEIABACIARAJIAJACIAEACIACABIABABIABABIAAADIABABIABACIACADIADAUQABAFADAEIACADIAAABIACACQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABIABAFIAAAJQAAAFgCAEIgCADIABADIgBAIIAAACIACAGQABAEgBAHIAAADIAYAJIAMABIAFgEQABgBAEgBIAHgBIAIACIAJABIAEACIADACIAMAKIANALQAIAHAHADQAHACAFAGIAIgZIAHADIAGAFIAFgJIAAAAQAJAKABAFIABAKICzADIgEAHIhWAAIBTAGIgsBRIAAAAIADACIAshTIAEABIguBUIADADIADADIAKACIgBgCQgBAAAAgBQAAAAAAAAQAAAAABAAQAAAAABAAIAFACIACACIABABQAAgDAGANIABACIADAEIADAEIADgHIABANIgEgGIgDAGIAKAUIAAABIAAAAIABAAIAAgBIAPAfIAGAFQADACACAHIABADIABgCIAFgEIgGAKIAAgEIgBABIgCADIgGASQgFAJgCABIgJAIQgDACAAAJIACAMIADANIABAAIAAAAIgDAGQgDAIAAAYQAAgBAAAAQAAgBgBAAQAAAAAAABQgBAAAAABIALAEIAAAAIgRgDIgEAGIgFADIgLACIgDACIgCADQgDAKgBAYIAGAGQgBAKAFAOIAEALIACAIIAAABIABAAIgBAAIAAAAIAAABIgEALQgEALgBAJQAAAGACAEIACAEIACALIACABIAEAVIAWAGIAFgCIgBABIABABIABAAIAMACIgMAAIAAAAIAAAAIAAAAIAAAAIgDAAIAAACIAAABIAAAAIgBADIAFAEIAAAAIABgBIACgCIgCACIgIALIgBAFIABAJIACAFQAFAJAAAJQABAGgGAMIgHAQQgCALABAGIABADIABACIAFAOQABAEAAAFIAAAJIgBAIIAGAQQAOAZAGAPIAJAVIA5BbIABABIAAACIgDAcIACATQADANAHAJQAFAHAGAEIBJAvQAkAUhCg2IA0AlIAXgTIADALIADgDIAIAiIACAAIAHABIACABIgCAAIgCgBIgCAAIgFgBIABAHIAJAJIACACIgDAGIgCAAIgCgBIgBAAIgRgEQgNgEgXgJIgYAYIAWAPIgEgEQgJgIAEABIAtAfIAAAAIABAAIABABIAAAAIgFAHIgBAAIAAAAIgFAIIAFgJIAAAAIAAAAIgBAAIgDAGIgBAAIgCgBIgDgCIgfgRIgZgQIg3A2QhBBCAogeQieCWkQEJIiYCTIgIAIIgMAOQgLAOgMAMIjgDyQghAsgrArQgLALgHALIgEAFIgCADIgDABIgJAHIh2B5IgGAHQgBAEgEADIgGAGQgNAMgTAVIghAkIghAkIgHAKIgJAJIgSASIgxA0QgDACgDgBIhqgGIgagCIgEgBIgEABIgJAAQgIABgJgBIhqgFIgCgBIgYgPIhjhFIgDABIhNAzQgOAJgUAHIgfAKIgrAJIgUAGIgQAEQgaAJgOgBIjoAMIglAWIguAcIhKAtIgCACIAAADIACABQAFAGADALQACAMAAAQIAAAHIgCALIgNAiIhIgIQgHAAgBgCIgEgCIgKgBIgDAAIgDAAQgLgCgIgEIgNgGIAAgQQgBgKgHgGQgEgFgDAAIgFABIgEABQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAIgCAAIgIACIgIgCQgCgBgDADQgEACgCgBIgKABIgKAAIgFgBIgEABIgJgCIgDgDQgHgEgEgHIgDgIIgPhHIgHgNQgGgJgNgPQgUgXgXgVIgLAIIgCABIgFAGQgRATgFAEIgHAEQgDAIgIAIIgKAKIgOAJQgGADgFABIgGACIgMAAIgNACIgxAUIgFABIgBACIgXANIgaARQgCABgDgBIgFgDIhvg6IgigSIAdAWQgXgNgbgQIgVgNQgLgGgHgBQgFgCgMgBIg5ABIgUAKIgCADIgBABIgCACIgVARIgHAHQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgFAAIgIABIgFAGIgEAEQgGAGgGAEIgDABIgLAGQgNAHgLADQgKADgKAAIAAAAIAEAlQABAPAAALQAAAKgDALIgIAeIgGAPIgBADIgBAAIgOgFIgEgCIgDgCIgcgLIgtB5gEAQZA4jIAFgGIgCgBIgCAAgEAgEA3zIAAAAIABgDIgBADgEAdyA3SIACgCIADgRgEAcaAyUIAMADIAiAPIAOAKQAHAFAJAKIAPAQIAFAMQAYAaARAVQAYAdANAYQAGAJAHATIARAFIAJgHIASgOIC+hvIEGgLIAHgBIAXgHIAEAAIABgBIAAAAIAAAAIAAgBIBHgRQARgEAFgDIBJgsIBNgYQAnAFAkAaIBaBDIBRAGIAdAAIAGABIADACIACAAIAwAFIAEAAIAPACIACAAIACAAIAngkIACgDIADgDIAAgBIAEgEIBohmIADgDIABgBIAEgDIAKgMIB8hxIAUgQIABgBIAFgFQAHgIAMgKICjidICzi7IAIgJIFGklIgJACQBihRB5hvQA9g4AlggIA8g0IgigVIgggTIgDgCIgSgOQgRgRgIgQQgMgZgDgcIgCgPIAAgLIgKgLIgBgBIgTgdQARAfgIgFIADAHIgBABIgBAAIgDgDIgGgIQgWgegYgqIgWgnIgDgXIAAgDIgBgBIAAgBIgCgFIgOgnIAAgBIAAgBIABAAIABgCIABgBIABAAIAAgBIAAgBIgBgDIAAgFIgBgCIgCgDIADADIgHgHIgBgFIADgkIABgHIABgCIAAgBIABAAIAAgCIACgEIABgHQABgBAFACIgBgCIgBAAIgBgGQgBgHAAgQQAAgQADgOIACgJIgQABIgCAHIgCAZIABAWIACAPQAFAEAAAEIgBgDIgEgEIgBgBIAAAAIgBgGIgCgKIAAAHQgDgVAEgXIADgQIgLAAIAAABIgDgJIAAAAIgBgUIABgWIAEgQIgEgMQgFgZABgRIgIgJQABgfAFgRIADgJIAGgIIAIgVIAAgBIABABIABABIAHAIIABgHIgCgPQgBgLACgMQABgJABgEIACgDIgxgyIAEgJIgBAAQgPAAgQgDIgLgDIgYgLIgDgCIgFgEIgNgLIgEgDIgNgQIgJgGIgNgNIABgBIgNgPIgFgIIgDgHIAAgBIgBAAIAAgBIAAgBIgEgKQgDgCgGgGIgFgEIgCgCIgBgBIgBgBIAAAAIgMALIgHgBQgCAAgEgFIgCgEIgCgCQgHgGgEAAIgLgJIgVgWIgBgCIgBgBIgCgIIgGgMIgBgHIgDgEIAAgCQAAgGgDgHIgBgCIAAgBIgFAFIgEgEIgHgJIAAAAIgEgFIgHgMIgDgIIgBgBIgCgIIgEgOIAAAAIgOADIABAEIACAHIAEAOQAFAMAIAMIADAEIAAAAIABAAIADgBIgEABIAAAAIgDACIABAAIACgCIAJALIAEAFIgCACIAAAAIgEgEIgKgMIgFgHIgIgOIgHgSIgEgOIAAgBIABAAIADgBIAOgEIACAAIASgFIgIgZIgBgFIgBgCIAFAEIgDgFIABAAIACABIAAABIAAAEIAAgBIAGAWIACAFIAIgCIgEgIIgIgSQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBgBIgDgBIgBgGIAAgJIgBgBIgBABIgBABIgBABIACgIIAAABIABgxIgOATIAAABIgBACIgBABIgBACIgBACIgCAEIgBAEIgBACIgBABIgHAOIgMAcIgngPIgQgEIgygBIgbgbIAGAFIgIgHIgCAGIABgDIgEAJIACgGIgBgBIgFgCIAAAAIADgJIgEgEIAKgMIABgEIgUAZIAOAOIgBAAIAaAcIAuACIAMACIASAGIAfALIABABIABAAIAAAAIgBACIAAABIgBAAIgBgBIgwgOQgFgBgDAAIAEgBIgDAAIgyAAIghghIAIAGIgUgSIAZgeIAIgXIAAAAIABgDIgdgjQgLAFgFADIgBABIACgCIAEgEIABgCQAFgHACgEIAAgBIgZgTIgCABIAAgBIgDABIACAAIgDABIgCAAIA3giIgBAAIg9AlIgHAEIBAgoIAFgDIgFADIhAAoIgWAOIABAAIAagQIABAAIAGgDIACgBIADgCIAAABIADgBIgpAZIAAgBIAAgBIAAAAIAAAAIAAABIgIAFIgBgCIAAAAIAAgBIgSALIgCgDIAZgRIgCgDIgRgEIgBgBIgWgQIgBgBIgEgCIgKgGQgFgDgDgDQgFgFAAgMQgVgHgRgLQgOgIgJgJIgKgKIgdgkIBRhFQgCgBgJgCQgWgFgugBIgDgUIgBgDQAAgCgGgHIgJgKIAPgPQAugsAJgZIAHgRIgHABQgIABgPAIIgLAGIAGgFQAHgGAIgKIgdAFIgVBHIgBAAIgBAAIgIADQgLgBgRgDQgSgDgUgJQgLgGgSgQIgXgaIABgBIgBAAIgBgDIgCgCIgzgXIAAghIgbgUIgQAHQgUAIgNABQgPADgMgCIgagFIgCgBIAAABIgngPIgIgEIgKgHIACACIgIgGIgBgBIgBAAIAAAAIgDgEIAAABIgEACIgTAKIgUAIIgJADIgLABIgDACQAAgBAAAAQAAAAAAAAQgBgBgBAAQgBAAgCAAQgKAAgIgDIgZgBIgBAAIAAAXIhlhUIAggzIgdAIIAwhGIAAABIAAADIgBAMQgEATgNAZIgBACIB5gfIABgBIAAAAIh/g+IAAAAIgBgBIABABIgEgCQgFgCgBABIgaAfIADAWIgFgNIgKAGIgMAOIAUAjIAYguIABgEIgEAOIgLAvIAGgBIgGAHIAFAIIgJACIgJAmIgagRIjNgBICUhoIgTggQgHADgMAIIhCAwIgDgDQgWgagKgQIBkhYIhxgJIgBAAIgFgCIgBgCIgBgKIgDgcIAFgbQACgKAEgMIAGgMIAHgLIAAAAIACAAIAJABIAJAEIAMg0IgHACIAJgLIgCAJIBcgbIg1gnIgDgCIgBgBIAChXIAxAFIABAAIAAABIAfAqIB5iJIgJgzIAGAWQAEAJAEAFIADAEIAGgVQgKgVgcgXIBXAgIgBgCIgDgEIAsgMIABgDIAAgDIAEgqIgHgMIAIgBIADgjQAWABAWAGQAKgFAKgCIAKgDIAGgBIABAAIAAAAIASBQIAsAIIADgMQACgIAAgKIgBhnIBNA5IgzBAIBcg2IAGgRIABAAIAFABIAIAEIgUAMIAAAAIgJAdIgJAfIAMAQIAEgCIACgDIAMgVIAbgzIAAAAIABAAIAAABIABAAIACACIAOAHIACgUIAtgNQASgQAVgHQAOALADgKQACgJABABIAXgEIABAAIAAABIAAAAIABgBIARgGQAFgCAGgBIAKgBIAFAAIAlgeIACABIAAgRQAAgTgCgTIgCgWIAAgCIgEgYQgBgXAEgXIAEgZQADgTABgYIgDg8IABgXIADgXIgLjdIAAgEQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAAAgBAAIifgXIAEhOIgBAAIAGikQABgfAUgpIAEgJIAMgWQAJgQAHgJIANgUIAJgJQADgCABgFIADggQACgaAAg4IgCAAQgEAIgCAeIgDBAIgCAMIgDAEIgEADIgFAHIgPASQgHAJgBgDIAdgnIACgFIACgKIABgjIABhAIgbgEIhChuIiXicIhxiLIkUhYIACheIABgSIALhQIgBgFIgwmUIgmhLIgEgMIgBgDIgDgOQgDgJAAgKQgDgUACgVQACgZALgZQAFgOAKgOIACgDIAAgrIAMhgIAHg8IADgnIAGglQAGgcANgsIAIgYIjTgBQAEAUAAAUIgBAhIg5AjIAZARIAMAHIgFALQAGADgYgIIgagHIgZgGIgWgCIgVBxIgjAAQgwAAhJgEIgggCIgRgBIgGAAIA3A5IAHAKIABABIACAFIABAGIADAXIgQFFIAAAOIgBgKIAAgTIgCAXIABAGQAAADABADIBEBlIBQBuIACAHIiVBZIgVARIgJAMIgUATIkzEhIguBUIgJAYQgHAVgJAQQgPAbgSASIgHAGIgDACIgCACIABgBIACgBIgBABIh4CCQhFBOhvCIIgwAwIgMALIhMBEQgdAdgaALQgcANgxACIlkABIgDgBImilTIj3iBIjeCUIA1gcQASgJgHAHQgGAGgdAVIgjAWIgEAWIAAABIAAACIgkEUIgBACIjpgBQhJACgkADIg9AFIgCAAIAAABIgEAAQgRACgKAJIguAuIguA7IgGgDIgpA0IgCAEIgBACIgBAAIAAAAIABAAIgBAFIAAABIAAAAIgBAAIgBgBIgfBFIhQBMIkUAKImXgBIhtjUIirgKIh5gHIh8gFIjMgFIgLABIhuA3IhBAfIgyAUQgXAHggAAQgegBgZgGIgYgFIjmhRQgegLgUgPQgWgRgQgaQgKgOgFgLIgdg+IgdhIIgWg/IgshGIhKheQgIgKgGgKIgWghQgLgQgHgIIgJgLIgKgMQgGgKgIgQIgrh1IgJACIgFADIgBABIgEACIgFACIgZAIQgQADgQgCIgEAAIgCgBIgFAAIgIAAIgJACIgIACQgHADgJAAIgVACIgDgBIAAABIgBAAIgHAAQgLACgZAJQgcAKgXAGQgXAFgQABQgLABgMgBIgFAAIAAAAIgIAEQgPAFgPADIgPACIgFACQgOAGgLABIgPABIgCAAIAAgBIgYAFIgDgCIgEAAIgGADIgDAAIgCAAIgGgBQgJgBgRgFIgLgEIgDAAIgCABQgEAEgFgBIgDgBIgBAAIgGADQgDABgHAAIgKAAIgLADIgBABIgBAEIgFAKIgEAKIgCAHIAIAgQAEASgBASQgCAOgHAWQgJAYgIANIgGAIIAAAAIgCAFQgGAYgKASQgKAUgQAUIgCADIgBACQgFAMgHALIgIALIgOAPIgGAFQgJAHgMAHIgNAIIgIAGIgDACIgFAEQgZAVgPAIIgKAEQgGAHgGAGIgDDNIgmA7IgUAVIgXASIgHAEIgEADIAAAUIgEAkIgCALQgDAOgHASIgaA3IgCAKIgBAEIAAAtIAGAuQADAWABARIABAUIgJBjIAAACIgDAFIgLANQgMAMgPAKIhEAlIhTAoIg7AmIgBAAIACAEIAEARIAFAZIgJAbIgBACIhagKQAEALAPAWIANARIAMgTQgBAQgCAIIgBAFIABAAIABABIAAABIACACIACACIgFAFIgDADIgGAcIgWAMIgCAHIAAACIADABQAEADADAAIACAAIABABIABAAIABAAIAGAAQAOgBALABIAbABIgBgGQAMgEAMgBIgXgvIB+BAQALAFAOAMIADADIAFAFIAJALIABABQASgFAWgCIARgDIASACIAMACIACAAIAAAIIABAAIAfACQARACAQADIAHACQACAAAAAGIA3ACIANAEQAYAHAWAJIAcAKIATAiIAHANIAGAPIABACIABAAIADAFQAIANAFANQAEALABAJIADAOIACACQANAMAMAPQAIALAGAKIAiAXQAXAQATAUQAHAIAIAMIAGALIAAABIAAABIgdATQADALAEAIIAmg8IgKgHIAPgBIAMgSIAOAIIAGAFIABABIAEADIBVgDIgHBIIBABfIgSAiIAAAOIALAZIgIBCIgbAiIgDAHIgCAFIAsANIgKAkIAQAbIADAKIAEAJIASAMIAAAAIAEgCIANALIAWAEIANAQIAIABIAHgLIBGAuIBNgVIggAtIAEACQALAFAHAGIAHAFIAAAAIAQAFIAGABIAJgBIAOADIAGADIACABIABAAIgCAIIAAAAIACAAIAXgUIANAaIAOAEIATAKIADACQAJAFAGAGQAIAHAHAJIgJgKIAFAHIAAABIAAAAIAAACIAAACIgCACIAKADIABAAIABAAIABAAIABABIAfAKIAaAeIAFACIADABIgBAFIALANIAYADQATAEAOAGIAAADIgBADIgEANIACACIAGAGIAWgMIARARIACADQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgWAYQAHAHAAADIABAEIAEAHIAAABIABgBIACAAIACgBIASgFIACAAIAAAAIABADIAHAWIAAABIAAAAIgBABIAAABIAAABIABADIABAEIACAGIAIATIALAbIAAABIAFgBIAAgEIABABIAAACIANgCIAkAVIAOAgIAEACIAhALIAJAMIAAABIAUAJIABABIABAAIAAAAIgBgBIACAAIAFABIAKADIAFACIAAggIBqB2IAFAbQAEAVgBAOQgBATgGASQgKAbgVAWQgKAKgMAJIgCACIgBAAIgOgSIgIgKIgUgYIgEgEIgCgDIgLgLIgBgBIgDABIAnA7IAPACIAAAXIADAFIgDACIAAAbIgHAKIAAADIAGAHQAPAEAKAEIAJAFIABABIAAAAIgBACIABAAIANAFIAHADIABAEIADACIABABQABAAAAABQAAAAABAAQAAAAAAAAQABAAAAAAIAFgBIADABIAEADQAGAEAHAHIAMAMIAGAHIABADIABADIAAACIgBADQgBAEADADIACACIAEgBQADgDADACIARANIAGAGIAMARIAJASIAGATIACAIIABAXIgCAWIgEAOIgBADIgEAGIAGADIAAACIAAAAIAFABIALADIABAAQAKgDALAAIAOACQAIACADgBIAJAAIABABIABAAIgJgGIgCgCIABAAIATABIAEABIABAAIAOADIAiANIAIAEIADAAIAUAIQAhANAVAbIAIAMIAAAAIAEAIQACACAAADIABALQAAACAEABIAFACIACgBIADgBIAFgBIABAAIAIAEIAPAJIADACIAAAAIABABIABACQgBAEAFACIAEAEQAAAAABAAQAAAAABAAQAAAAABgBQAAAAABAAIADgBIAQAEIANAFQAWAJATASQAIAIAGAIIAIACIAEABQALADAKAFIAGAEIAHAFIANALIAFAVIAHAMIAAAAIAAABIANgIIAAAAIABABIABABIADgBIAFgCIABAAIABABIABACIAFAFIAFAEIACABIACACQAJAJADAIIgBAEIgFgDIgBAAIAAABIgBAAIgBABIAIAGIAMAMIAFADIAHAKQAIAKAGAKIAFALIABAIIABAEIAAAAIgBABIgCACIgCACIAAAAIAGAHQAEAEgFAHIAAAAIACAGIABABIAAAAIABAAIACgDQACgCADABIADACIApAkIAGAjIAAABIAIAzIgKAKIAAACQgCATgIARIgKASIgEAGIgBAHIAAAAIgBAEIgFALIAPAUIABBKIAEABIAPgGIAGAMIAVASIACACIAEACQAWANAMANQAGAGAGAJIAFAIIABADIABABIAAAAIgHAGIABAAIAEAEQASAMARAVIANAQIAFAJIgKAFIgEADQgCAAgBABQAAAAgBAAQAAABAAAAQAAAAABAAIAAABIABAAIAAABIABAAIARgEIACgBIAAAAIABACIAEAMIABAHIAAAFQAJAFAHAGIAIAIIAKALIAIAMIAFAJIAMABQARACAOAEQATAHAMAIIANAJIAiAgIAIALIAEAHIAHAOIgBACIgBABIAAABIADADIAJgBIADAAQgBgBAAAAQAAAAABAAQAAAAABABQABAAABABIABABIACAAIAGAFIALAJIAJAJIAIAKQAHAJADAIIAJAUIAGAVIAAAAIhIAXIgNAIIgDACIgIALIAZADIBTgCIAAASIBEASIAKAFIAGAAIAOACIABAAIgBACIAAAHIALAHIAPANIAFAGIAMgdIA6AWIARA8IgaARIAPAGIAXAyIgQg0IAHABIABgBIADAAIAFAAIACgBQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAABIAPAIQAIAFAGAFQAJAJACADIACAHIADAIIACAEIACADIgBAAIgNAEIAEAFIAAAAIAQgDIACgBIACAAQAGgCATgBQAbgBAYAHQAUAGARAMIALAFIAHAFIAGAEIAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAAgCIACgFIADgEIAFgBIADgBIAIgPIAIgLIAKgNQAMgMARgKIAQgHIAEgRIAZggIABgBIATgaIASgMQAWgPAbgFIAagWIBVAAIAeATIANAJIARASIAOAVIADAFIAEgDIAOgFQAGgDAIgCQAQgEAOAAQAOAAANADIARACIAYAJQAKAEALAHIAOAKIADACIADADIADADIA0AVIACAFIAaAMQAJgMAKgLIgUAKIBMiQQAKgTARgRIAmgoIASACQAGgFAJgCQALgFAIgBIA7gMIADADIAJgGIA1AsIAUAEIAAAAIACgIIACAAIACABIAMAEIAFACQAAAAABABQAAAAAAAAQgBABAAAAQgBAAgBABQgBAAACAAIACAAIAOAEQAJADAIAFIAJAEIAFAEIADAAQASAHAQAJQATAKAMAMIAJALIAFAAIAJABIABAAIACABIACAFIAIADIAFgCIADgCIAHADQAOAGAKAHIAaAXIAOAUQAHAMAFAOQAGARAAAOQACAQgDAPIgGAZIgDAJIACABIAfASQARAMAOANQAPAPANARIAEAFIANAWIAEAKIADAHIAAABIgDAFQAAABgBAAQAAAAAAABQAAAAABAAQAAABAAAAIADAAQAEAAACADIAKAHIABABIAKAIQAIAGAGAHIAIALIABAAIABADIACADIAAABIAAABIACAGIAEAFIAJAAIABABIAAAAIAEABIACABIAEABIAWAMIAMAIIASAPQAOAOAIARIAIAQIAEARIAAAGIACACIAIAKIABABIABABIAGAKIAAABIABABIgBABIAAAEIABADIAAgBIABAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIAKAAIABABQAOABALADQAMAEAMAHIAFADIAKACQAIACARAHIAQAJIACACIAAAAIACAAIAIACIAKAEQAPAHAVAPQACABABAEQACABAFgLIAEgIIABAAIACABIAGABQAGACAKABIAcAFIANAMQAGAEAIALIAKANIAIAPQAMAZAFAQIADALIABAHIgCAKIAEAMIAFATIAGAbIgBgBIgBADIgCAHIgCADQAAAAAAAAQAAABAAAAQABAAAAABQABAAAAAAQADABADgCIAAAAIABAAIAMgHIADAAIADABIABABIABAAIAAggIABgFIAcgBIAHgBIACgBIABgCIAAgBIAHAAIAJACIAKAEIAQAJIAGAGIACgCIACgDIABgBIABABIBGA7IAEgnIgcgMIgDgBIA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AAAgEgXiApZIgBAAIAIgPIAOANIgKACIgIAAIgDAAgEgXNApXgEgXbApKIgJgJQAMABAXgGIAGgBIggAOIAAABgEgXrApDIAAgDIAEABIABAFIACADgEBIdAeuIADAAIAAAAIABgBIAAAAIACAAIABAAIgBAAIAAAAIgBABIgCAAIgDAAgEBIaAeuIgCgBIgBAAIABAAIAHABIgDAAIgCAAgEBIWAetIABAAIgBAAgEBIjAetIABAAIAAAAIAAAAIgBAAgEBIkAetIAAgBIAAABIAAAAgEBDBAYwIABgJIgBAOIAAgFgEBECAV4IgBAAIABAAIAAAAgEBEeAUYIgBgBIABAAIABABgEBEcAUXIABAAIAAAAgEBERAPkIgDAAIADgGIAEAAIgEAGgEBBZAPfIABgBIABACIAAAAgEBBOAPfgEBBXAPegEBBXAO7IgHgFIgIgEIARgzQASAAAQAFIgkA3gEA9zAObIgCgCIgBgBIgEACIAHgDIAIAOIgCACgEA9jAONIAAgBIAAAAIgDgDIAAgBIgBAAIAEgDIAAAAIADADIgCADIgBABIADADgEA9YANiIgCgBIgEgBIgTgMIAAAAIAAAAIAAAAIgBgBIABgBIgBAAIABAAIAAAAIAAABIAAAAIABAAIABAAIADACIABABIAOAIIADABIACABIABAAIAAAAIgBACgEA89ANTIABABIAAAAgEA9dANSIgDgBIgBgBIgNgIIAAAAIAFgEIABgBIAEgEIAEgDIACgBIgEADIAHgGIAAAAIgHAFIAKgHIAAAAIAAAAIAAAAIACgBIgBABIAFgEIgKAggEA9KANJIgBgCIgBAAIABAAIgBgBIABABIAAAAIAAAAIAAAAIADABIAAABIgDgCIACACIAAAAIgBABgEA9MANIgEA9YAM9IgDACgEA9YAM9gEA9jAM1IgLAIgEA9iAM2IABgBIgBABIgBABgEA9mAMzIACgBIgDACgEA6dALFIgDADIgCABgEA0RACIIAAAAIABgCIABAAIgCACIAAAAgEA0RACIIAAAAgEA0TACGgEhEkgC6IAAAAgEhFygC7IgQgGIgngWIgBgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAgBIAAABIABABIAnAWIAQAGIACAAIAAgBIABABIgDABIgBAAgEhFugC9IAAAAIAAAAIAAAAgEhGpgDcIACgFIABgEIgCgCIgtgwIgEAAIgJACIgEABIgBgCIgIgJQgUgVgOgbQgYgzAHg5IACAAQgIA4AZA0QAOAbAUATIAGgFIgFAEIgBACIAHAJIACACIAEgBIALgCIABAAIAvAzIgEALgEAyAgFjIANgDIA6gkIAEAIQAFAIAGAGIhJAOIgKAHgEAvWgIpIACgFIAAgBIADAGIgCABIgDABgEAvbgIpg");
	this.shape_2.setTransform(464.5,373.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B07E09").s().p("EAORA33QAKgYgBgHIgEgFQgngKgIgHQgMgLABgkQAAgFgEgIQgEgIgEgCQgDAAgEACQgFACgBADIgFAQQgJAcgZgJQgfgLgCABIgcASQgQAJgOAGQgKAEgLAAQgNgCABgKQAFgGAKgYQAKgZgBgGIgNhMQgBgHgJgXQgEgLACgYQAAgGgHgHQgPgGgbAOQgLAGgPgNQgQgQgHgBQgKAHgDAAQgFgBgIgLQgJgLgEgCQgFgCgJgBIgOgDQgEAAgGgGQgGgGgGgBQgSACgEgCQgHgLgFgEQgHgIgKADQgNAKgVAEQgUgPADgRQADgUgEgEIgigoQABgfgDgDQgPgNgPgBQgUABgOgBQgVgNgFgYIgHgaQgcgWgOgIQgFgDgLgCQgMAAgFgCIgDgGIAIgOIAIgQQAAgNgYgWQgXgWgLABIgbAFQgHAEgKAAQgEgDgDgFIgGgHQgDgDgHgCQgHgDgEgEQgEgNAEgJQgCgHACgLQABgLgDgFQACgCAHgqIgHgHQgEgFAAgDIAEgHQALgHAGgHQAJgLgIgIQgFgFgKABQgLABgDgBQgHgLgHgFIgFgBQgLAMgIgCQgEgBgJgPQgJgSgDgDQgEgEgOgFQgOgGgHABQgIgLgMgCQgMgCgFgHIgDAAIgGAGQgEAEgDAAIgEgBQgLgPgPAHIgIgGIgPALIgGgBQAAgGgIgKIgNgNQgDAAgFAJQgFAIgFABIgJgBIgEAFQAEAJAAAMQgBAOABADIADAJQACAGAAAFIgHAHQgRAGgCATQgDAZgGAJIgCACIgKAPQgHAJgGADIgaAIQgMADgEATIgDAQQgDAMgCAEQgRAXgSgFQgDgEgFgCIgSgFQgKAGgEgBQgCAFADASQACAGgEAGQgMADgMAEQgHACgJgLQgMgPgIgDQgHgOgKgDIgPgaIgBgCQgQgIgPAGQgCgCgNAAIAEgOIgBgGIgFgCQgHADgIgCQgJgBgFgGIAAgNQgBgDgXgKQgMALgLACQgKACgRgDQgMAFgGgBIgKgDIgIAGQgFgCgIgFQgJgGgFgCQgDAAgGAJQgMAGgIgDQgGgBgLgJQgGgEgBgFQAFgGgBgIQAAgFgDgKQgEgDgEgJQgEgJgDgCIgHAAIgIAHIgIAIQgDADgNAAQgOAAgGAEIgCADIAAAQQgNAAgEAEIgBADIAHAOQgDAGgMAUQgKAPgCAMIgPAEQgJABgFADQgDAAgEgEIgNABQgGABgCAMQgDAOgFAEQgEADgIgCIgNgDIghAJIgMAPIgIAPQgBADACALIgCAEIgIADQgFACgIARQgCABgOAAQgCACgLAFQgLADgCAAQgDgDgJABIgKAAIgDgBIgGgGIgBgEQAFgKgDgMQgDgMgJgGIgPgIQgJgIgOABQgQADgIAAIgTAGQgHgBgPgBQgOAAgHgCQgPgYgYgIIgIgDQgGgCgCgDIgBgFIAJgQQAEgJgLgGIgTgEIgHAHIgGAFIgHAHIgIAHIgNgeIgPgGQgGgUgBgTQAAgXAJgNIgBgFIgFgCQgDACgYgDQgIABgOgFIgFAGQgBgEgKgFQgIgFgFgCQgDACgBAIQgCAIgCACIgKAAQgDgCgGgBQgFgBgDABQgYACgHgDQgKgEgKgQIgKgKQgQgKgBgDIgPAGIgHgEIgCgDQgBgDACgEIADgFQABgGgHgRQgGgPAFgGQgGgNACgGQAEgHAGAAQADgCgBgLIgBgRQgFgEgFgUQgEgSgJgDQgHgBgLAEQgMADgHgCQgKgKAAgDIAHgJQgFgJgHgWQgDgLgRgPQgLgJgPgCIgeABQgIAAgKAHQgGgDgIgMQgGgKgOgDQgFgFgEgLQgDgKACgHQgEgMgCgBIgOgFQgCgBgFgGIgHgJQgYgOAAgRIAAgcQgDgGgFgCIgKgGIgWgZQgBgVgIgIQgBgCgYgPIgFADIgCgIIgGgFIgVgFQgSgRgCgNQgEgTgCgEQgLgHgOgaQgOgZAAgMIAJgIIAAgDQgIgMgGgFQgHgbADgPIANgmQADgRADgHQANgQADgFQAEgIgJgUQACgEAIgIIgBgFQgYgXgKAYIgDgCIgGgSQANgSgLgOQgOgLgCgHIAFgJQABgEgLgPIgPgTIgUgJQgQgHgBgEQACgDAKAAIAFgFQgBgDgEgEQgFgCgEAAQgBACgJgBQgNgPAAgDIgLgFQgBgCgJACQgIABgDABIgPACIgLgMQgBgCgGAAIgJgCIgFgGQADgJgBgFQgTgeggAWIgDgBIgSgLQgLgHACgJIgDgHQgEgEgJAAQgHAAgGACQgBADgNAFIgTgHQgOgEAAgHIgCglQgEgbgNgFIgIAAIgWgMQgYgLgFABQgGABgEAFIgKABQgPgOgPADQgNAMgEABQgDAAgLgGQgLgHgKACQgIgLgNAAQgSACgLgFIgRgaQgCgCAAgFIABgHIgFgQIgLgMQgNgBgOAPQgRAQgEACIgDgCIgEgGQgEgMAKgTQACgDAOgHIASgLQANgJALgVQANgYgOgJQgJgDgIAFQgKAHgEgBQgPgHABgVIACgXQgDgFgHgBQgKgCgDgDQgDgIgPgDIgXgCQgIgCgOgQQgRgVgFgEIgWgOQgSgNgBgCQgCgJAJgIQAKgJABgGIgMgGIgNgVQAEgTAFgHIAWAAIADgEIAAgQQAAgSACgGQACgDAGgEQAHgEABgDIABgJIACgLIAEgEIAKADQAGABAEgCQgDgGADgIIARgPQAMgLgDgNIgGgHQgMgBgKgLQgPgQgDgCQgDgCgJACQgIAAgCgCQgHgIgHgCIgUABQgOgBgGgEQgDgFAAgHQAAgIgCgBQgYgIgJADIgIgGQADgFgCgHQgCgEgNgHQgMgIgBgDIAFgJIgDgGIgHgEIgVAAIgVgCQgGgFgIgLQgMgPADgOQADgTgBgJIgDgDQgFAGgGABIgDgBQgRgRgFgDQgCgCACgDQAJgHACgEQgLgRAGgIQAGgKgCgFQgEgLgWAAQgYACgFgBIgFgFQgBgCABgEIADgGIgFgIIgngDIgEgEQACgGgDgEIgMgBQgJgCgCgCIABgFQAJgGAAgDIgEgEIgWgHQgHgJgHAAIgSAAQgKgDgFAAIgEgEIAJgKQADgMgCgBQgEgFgPgCIgWgBQgLgEgGAAQgBgCABgEIAAgGQgIgEgKACIgIAGQgGgCgFgPQgEgEgJgBIgFADQgJABgIgEQgIgFgDgIIgIAAQgIAAgJgGIgKADIgFgCIgCgEQACgFgCgFIgGgEIgHAKIgIgEIgCgDIADgLQgEgEgGgDQgCACgHgFQgHgFgDgDIgHgDIgNgCIgBAGIgDADIgXgBIgDgIIgIgHIgIAEQgDgEAEgMIgCgDIgEgBIgHADIgJgJQgGgHgNgIQgDABgEAFIgQAAIgIgNIgJAAQgGgDgFgQQgGgSAEgGQgGgFgFgLQACgIgBgCQgGgFgEABQgFAFgFgCIgDgFIAAgFQgJgFgDgKIgGgBIACgJIgMgDQgFgEgLgBQgLgBgBgBIgGgIQgDgDgGABIgEACIgDAAQgGgDgCgHQAGgJgEgTQgCgQgGgLQgGgDgEgFIgBgCIACgGIALgJQAPgFACgCQADgGgBg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ACgPgBIAAAHQAGAOgLAMQgLAMgOgJQgCAfgQAGQgGADgMADIgBABIADAOQgDANgGAGQgFAFgNAHIABANQABAHAFAMQADALgJAJQAEAGAMANQALANAEAJIADgBQAUgLAOATIAFAAIAEAEIAIgCQAEgHAJgBQAIgBAIADIALAIIAAgCIAHAEIASAIQAVgHAoAgQATABAIARIABABIAEADQAIgGAKAAQAOgLAUAFIADgBQAHgRAOgBQALgBAMAHQAJgEAMADQAMAFAIAJIAGABIgFAAIgGABQAKgBAUADQAFAFACAIIAFAIIABgEIADAEIALAEQACgDAHAAQAMgMAQAIQAXgEAJALIAGACIAJgDQAOACAKAQIAIAIIgIgFIALAMIACAAQALgBAIAHIADADIAOAVIAUAKQAKgBAHAFIAPALQADAEAJAHQAJAFAEAFIAIALIgDgCIANANQAAADALARIAYgBQAZAFAEADQAFAFAIAfQAEACAEAFQAEAHAAADQAQAHAaAoQAVAigBANIABAsQABAYgIANIAGAIQARADAPANQAQAMAFANIAAACQAJADASAOIAPADQAEABAJAIIAMAJIAFAKIAAARQAGAGgBANQAAAHgDAFIACAEIgBgBIABACIgDgFQADAGABAGQAQAHAHARQAGgCAEABQAEABANAGQAFACAFAHQAEAGAAAGIAMAMIACACIAQAAQAJAAAmAKQAnAKAIAGQAHAAAHACIACABIADABIAAAAIAFAEQAcAYgHALIgTAGQAGACASAHQAPgBAIAIQAGAFADANQADAMADADQAGAGAAAJQAAAJgFAHIABACIgCALQAEAIgEANQAKABAPAEIANgBQASgVAcAWIAqAhQAKACAFALIACACIAAASIABABIAAgBIABACQACADACACIgBAAIAQAJQAUAdAFgCQASgJAZgBQAYgBASAIQAIAEAFAJIAEAHQALAFAEAHIABADIAAAAIABABQAOACAFAKIAHANIAJAPIgKAVIADAEIAKAKQAJAKAIAEQAIAEAFALQAFAJgCAJQgEACgCANQgDANgOAJQgEAEADALIAEAPQABAGgCADIgEAHQgCAKgBATQgBAHgJAFQgNAAgDADQgCAHAAAaIAGAFQAAAHAHAQQAGAOgBAIQAAAHgEALIgEASQgBAGACAMIACAAIABAOIADACQAGgCACACQACACAGAEQAFADABADIAAAHQgFAVAEAJQAHARABAHQABAHgGANQgHAQAAAHQgBAHAHAKQAGAJgGAQIBpCrIgEAhQgBAXALAHIBEAwIBGAuQAFACgCAOQADADADAHIgEACIr3K+QgQAUgfAgIgwAyQgMAPhCBFIhZBbQgzAzgpAlQgFAEgGAIIgLAMIgMAIIh7ByIgGAHIgFAGQgQAOgWAWIgkAlIgjAiIgGAKIgQAPQgKAIgGAGIgwAxIhjgIIgngFIgCAAQgSAAgagCIgsgDIgtgDQgLgGg8gtIg5grIgCABIhbA4QgPAJgkAJIg2ANIgRAFQgfALgOABIjCAJIgvACIisBlIgGAGIABABQALAHACAcQACAZgFAMIgFAMQg1gFgFgCIgCgDQgEgBgMgBQgKAAgGgDQAAgSgMgOQgNgRgSAAQgDACgHABQgHABgEACQgHgEgOACQgQABgFgBQgEgDgFggIgFglQgEgfhNhLIgCgBIgGgQQgFgFgOAAQgPABABALIAAAMIgHAGIgHAEIgSASIgFAHIgLAEQgGADgDADQAAAKgJAIQgLAJgIAAQgPAAgEABQgMADgRAGIgeALQgKADgNAJIgVAOQg9gfgrgaIg9gkQgWgNgMgEQgNgDgWgBIhCAAIgCAAQgDADgZAMQgZAOgGAOIgDACQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAgBgBAAQgWgCgDAEQgDADgKATQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAQgRAJgGACQgMADgMgHIgGAAIgcAgQgDARgFAKQgDAHgLARQgEABgEAEQAAAIgJANQgKANgBAHIgIAEIgRAtQgLgNAIgUg");
	this.shape_3.setTransform(472.9,375.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,930.2,747.5);


(lib.somaliaai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// somalia.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#42210B").s().p("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PQAWgNAbgJIAagGQAIgDARgHQAagLAWgDIAYgBIAMABIAYAGIAYAJIACABIAAAAIABAAIACABIALABQAoAJAgANQAUAIARAMIABgBIABgBIABgDIABgCIACgBIABAAIAOADIAAAAIAEAAIAoAJQAbAEAQAHQAkANAaAbQAMANAGAMQAIANAGAUIAFAeQABAYgFAWIgBADIAAABIgCACIgHAFIgEABIAAABIAAANIAAAWQgDAXgHAUQgIAXgQAYQgHAKgMANIgHAKIAAAKIgGAcIgHASIgBABIAAABIABAAQAQAVAIAWQANAggEAlIgLAuIgOAfIgCAFIgBAAIABAeIgBAOQgCAIgCgGQgBgDgDgRIgGgdIgJgCIgDAAIABAFQACAUgBAVIgBA5IABASIACANIAEADIABABIAAAAIAAABIABABIAAAAIABAAIABABIAGAFIACACIANABQASACARAIIAVANIAKAJIAEAEIgfAnIACgCIAAAAIAAgBIgBAAIgFgGQgSgMgJgDQgNgDgLAAQAAAOgEANIgBAFQABAAgBAAIgQAAIgKA3IgIAXIgCAEIgBACIgCAAIgNgEIAAABIAAABIABACIADAMIAAAEQgHAJgKAKQgTAPgTAHQgPAHgRAEgAVBG+IACgoIgbggIBIAgIgDAfIgEAUIgBADIgMAZQgLAWgHAFIgEACQgLAAAGhEgARUGvIAAgBIABABIABABIAAAAIgCgBgARjF3IALgBQAMAAAQgHIghA2gARjF3g");
	this.shape.setTransform(437.3,52.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#42210B").s().p("AgOAEICqivQBXhbBahfQg4BTjkD0QiDCMhGBRQgEAIAAAFQgHAPg5A5QASgbAyg6IAFgJIi5CxQCIikC2i/g");
	this.shape_1.setTransform(302.7,323.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#42210B").s().p("AjuAsIABABIAJgIIAAAAIAIgJQASgSAPgJQALgGAQgHIAWgHIAAACIAfgPQAngUAlgJQArgLAuAFQAuAEApATIAkAUIACACQAPgDAMAAIAXACIAGABIgGAXIAFgUIgIgCIgMgBIgSAAIgNACIAJAHIABABIAAAAIgFAKIgBABIABgCIgUgMIgBAAIgNAEIgPAIIgCABIgBABIAAAAIgCgEIAAAAIACgBIAXgLIADgBIgdgOQgmgPgrgDQgrgDgmAMQgjAKgiATIglAWIgBAAIABABIgBAAIAAAAIgMADQgMAFgLAGQgOAJgNAOIgJAKIAAABIgIAKQgOgKgNgPg");
	this.shape_2.setTransform(352.6,48.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#42210B").s().p("ACwCaQgbgHgcgQIgxgbQgWgOgZgUIgngjIgnghQgYgUgMgHIgVgOIgOgOIgCgCIgZgWQgOgJgNgHQgfgOgHgFQgcgQgQgZQgJgQgEgPIAAgBIAAAAIAAAAIABAAIAAAAIAAAAIAAABQAEAOAKAQQAQAYAbARQAJAFAOAGIAQAHQAQAIALAIQAPALAKAKIAHAHIAJAJQAEADARALQAHAEAZAUIAkAcQA3AvASAOIArAaIAtAXIAZAJIBDAVIApAWg");
	this.shape_3.setTransform(164.5,163.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#42210B").s().p("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");
	this.shape_4.setTransform(202.4,75.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#42210B").s().p("AigDxQAFgKATgdQATgbAFgPQAFgNAKgRIALgUIAOgbQAJgXgQAOQAMgSAGgMIACgDIACgGIAJgSIAGgIIADgCIAHgBQAAAAABAAQAAAAAAgBQAAAAABAAQAAgBAAAAIAJgOIACgEQACgOAHgOQAJgWASgRIAHgFIABgBIADgCQAFgCAEgHIAEgEIACgDIgDgBQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIABgBIAAgFIADgIIAFgMIABgCIAHgNIAJgMIAAAAIADgEIABgBIAAgBIAFgLQAKgZAYgRQARgMAQgFIAPgFIAFgBIAEgBIAAAAIAAADQgMADAFAAIgCACIgQAGIgTALQgPAKgKAMQgMAQgGARIADACIgBACIgHAMIgCADIgCACIgEAHIgFAKIgFANIgBAHIAAACIAAACIAHACIAEAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgBACQgGAPgGAGIgDADQgDADgDABIgCABIAMgEIAHAWIAAABIgDABQgMAFgGAEIgHAFIgIAHIgPAWIgEAGIABAQQACAOAFALIADAGIgUALIAAAAIgBgCIgBgBIgBgEQgEgJgCgIIgDgJIgFAIIgJATIgQAoQgJAUgBAFIgRAYQgLAPgHANQgHANgVAXIgZAcIgNAMIgBABQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAABgCgABRATIgFgBIgGAAIADgBIACgBIAEgCIACAFIABABgABEATIABgBIAAAAIADgBIgCABIgBABgABGASIAAAAgABZiaIAOAEIgCgBIAEACIABAAIAAABIgRgGgABOijIAAAAIAGAEg");
	this.shape_5.setTransform(55.8,710.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#42210B").s().p("Egd3Ai1QAAioAMiyIAXjkQAOiIAGhVQAIiMgCi0QAMAaAIg+IAGhOQACgeANgXQAHgMAKgLIAXgVIA/g6QAcgZAdgdQAVgXAagfIAjgrQAggmgDAPQAAAHgNAcQgRAkgXAlQAggmAjgxIA2hOICBi+QAJgLAJgRIATgaQALgPAEgMQAHgPAJgOIArg0IgtApQgLAMgEAIIgLARQgGAJgJAJIgKAKQgHAGAGgIIAMgUIAHgLIABgEIAVgmQAEgIgJAHQgGAFgJAJIgKANIgGAJIgDADIAMgWQAKgOAHgKIASgUIAUgUQAXgZAagKQAMgFARgCIAfgBIASAAIBwgLQA+gEAzgWQAVgKATgDIAUgBIASAAQAGAAACgBIAEgCIABgCIAFgFQAUgTANgRIALgTIAHgUQAFgUAEgKQAHgOAJgMQAOgSAggWIApgbQARgKAYgNQBPgsBdgfQApgOAwgMIBYgUQAVgFAagEIAsgGQAZgEAXgCQAegBAbAEIANABIBIAAQAiABA+AEIAuACIAsACQAWABAXgBIAxAAQAHAAAFgFIATgUIBEhGIOfu6ICOiHICJiFQAlgkAdgeIBDhDIBJhLQiQACiRADIhFACIgagBQgZgCgbgHIjYhBQiPgrjJg4IlchiQkXhmA6gGQAjgECbAVIoGivIgSgGIgSgHII6CeQAOgHiHg1QjOhRgjgQIidgvQBHgIDIA7QCUArEbBmIHsCzQB1ArBqAkIgdgHQgfgGA9AdIA1AYQAPAHAZAHQAIADABABQABABAAAAQAAABAAAAQAAABgBAAQgBAAgBABQgVAEgkgGQAYAHAYACIAZABICDACIh8ADQgfABgRgCQgZgDgZgHInHiIQiegwiog1ILsD9IApANQAnAMAugBIF5gEIAWgXIAEgEIABAAIACADIAKAIIAGAEIgDgBIAEAMIAFABIgEADIAGAOIgBADIgDAMIAAADIgEAAIgLAAIgRAAQh1B7g9BBQiKCRhDBJIxLSxIgPAPQgJAHgKADQgEACgQACIimAFIA+gHQALgDgHgCQgFgCgpgEQhdgGgqgBIg+AAQgOAAgOABIgIABIgdgCQgbgCgyALIhLASIhIAZQggALgeANQgiAOgkATIAYgGQg6AZgzAfQAsgcApgWQg2APg4AdIgjATIgiAVQgKAHgFAGQgEAFgCAFIgDAOIgPAiQgHAQgNAUQgTAbgfAeIgSAQQgPALgNAGQgdANgjAAIgJAAIgHABQgEABgHAEIgRAHIgTAHQgTAHgWAFIgoAIIikARIgEAAQgMABgFADIgHAGIgGAHIgZAVIgCACIgBACIgDAEQgGALgRAWIgbAdIghAnQhLBZgpA0QgaAhggAsQglA0gcAiQgoAxgpAqQgVAWgcAYIgKAJIghAiQgLAJgCAEQgGAHgCAJQgCAIAAALIAAAZIAECRIgTgTIgJG8QgChIgGABQgDAAgEAdQgEgUABgdIADhUQgVgUgbCNQgXB9gRDIIAChxQABg2gBgqIgKDbQgICVgIBxQgJCKgIAXQgCAHgCAAQgIAAgJhhgAdt7qQAFgGAAgEIAGAMQgDgCgIAAgAWL85IgWgGIgdgKIgOgFIAxAPQAdAIAfAAIBsgCIhrAEQgXAAgWgEg");
	this.shape_6.setTransform(191.2,403.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#42210B").s().p("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");
	this.shape_7.setTransform(291.4,421.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B25538").s().p("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");
	this.shape_8.setTransform(290,376);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,576.6,745.5);


(lib.pakistanai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pakistan.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("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AAIAAgBIgGADIgcATIgTAQQgRAOgSAHIgNAFIgOACIAAAAIgDAJIgEAMIgLBBIgFATIgHAUQgHARgOASIgBABIAAAAIAAABIgBABIgEAFIgPAWQgGALgJAVQgIAWgOAyIgLAnIgMAkQgEARACALIAAADIABADQAIAEAEADQANALAOAIIAHAMIAJAIIACACIABACIgBACIgEAIIgLANQgLAJgCADIgHAJIABgBQAQgIAVgGIAdgEIAqgBIAIABIAEAAIAEgBQAIgGABgJIAAgJQABgFACgEIAEgEIAGgEIAGgCIAFgBIANgBIAagBQAPABAOAEQAQAFANAOIABABIAKgIQARgOAYgGQAMgDAKgBIBBgGQAwgBAvAIQAeAHAUAGQAeAKAKAAQAMgBAIgIIAIgJQALgJAIgEQAVgJAYAFQASADAQAIIAXALIAVAIQAIgOAJgLQAJgLAQgLQANgJASgHQAPgFATgDIASgBIAJAAIAIAAQAOABAtAGQAwAHBAANIBuAZIBAANIAWACIAHACQAEAAAFADQAIAEAFAJIADAIIABAFIAEACQADABAOgEIABgBIAAgBIgBgCIgDgNQgBgKAGgGIADgDIAGgDQAJgFAKgCIAJgCIAugEQAdgBAUABIAuAEIAKABIgOgPIAAgBIABAAIAKgJQAKgJAGgDQATgMAUgFQAQgFAXgBQARAAATACQAMABAVAEIAeAEQAoAEAegGIATgCIASgFQAVgIAWgBIAeABQASABAqgIIBAgLQAagCAZAEIAPAEIAHADQABACgNAAQgZAAgTADQgbAEgmANQgwAPgZACQACACARgBQAWgCAdgIIAngJQAagFAXAAQAhABAZALQAbAMAWAaQAQAUAaAHIAhAHQAYAFATAOQAYAQAKAcQAIAXgDAaIgDAVIgBAFIAAACIgBAFQgDALgDAHQgIAYABAKIACAIIABACIACAAIBIAJIDCAhIgJBGIgDARIgJAcIgBACIAAABIAAACIgDALQgBAHAEAEIAIAJIADADIASAeQAOAdAWAzIARAjQAIAQAIANIAGAIIACACIACAAIAEADQAVANARASQAKAMAHAOIAJASIABAEIACAHQABAEAEACIAGACQAFABADACQAHACgHAFIgLAFQgLAEgGgBQgLgBgCgNIgCgLIgFgNQgKgTgNgNQgLgKgOgKIgG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");
	this.shape.setTransform(266.4,520.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AABBEQgjgBgcgPIgPgJIgNgKQgNgJgNgGQgagMgkgBIjSgGIgUABQgPAAgJgDQgMgEgIgMIgEgFIgCgCQAAAAAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAQgIABgHAGQgGAGgEAJQgDAGAAAMIgBAKIAAALIAAgLIABgRIABgIQAGgTAQgGQAEgCADABQAEABABACQAJAMAJAFQAJAFARAAIAXgBIDYACQAUABANACQAWACAmAZQAkAZAYABQAfAFAjgIQAjgIAXgXQAwgtBFgVQAZgIAngHIAggFQAUgDAKAGQAMAGgCAWQAAANADAGQADAKALAFQAGACANADIASAEIATACQALABAJgFQAGgCAJgIIAIgKIAMgRQAIgMgDAKIgPAZIgGAIQgLAMgOADQgLADgRgCIgZgEQgUgFgKgHQgIgFgDgKQgCgIAAgJIgBgMQAAgFgDgDQgBgCgFgBIgLgBIgdAFQgjAHgbAHQhMAWgvAtQgTAUggAKQgZAIgfAAIgGAAg");
	this.shape_1.setTransform(392.2,646.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AkxEKIgNgSIgEgFIhrAMQgOACgXgEQgmgKgagYQgNgLgKgPQgJgMgIgRQgHgSgEgRIgDgUIgBgFIgQgOQgNgNgLgRQgRgXgNgaIgSgnIgehKIgVguIAAgBIgLgSQgSgegGgfQgGgeAHghQAFgYAUgiIAGgLIAAAAIAAgBIABAAIADACIACABIAAAAIgCACIgFALQgRAggFAaQgCAMAAASQABASADAMQAIAcARAbIAbAuIAsBnIATAmQAQAcAPARQAIAMAQAOIAHAFIAFgCIAAABIAAADIAAACIAFAEIAJAFIABAAIABAAIgLARQAEASAEAJQALAdATATQAVAWAdAJQAEABAKACIAPADIAHABIBogOIAMgCIAMgJIACAEIABACIAFAAIgBAGQAGAMANARIA8BMIA+gbQAggNAbgaQAXgVARgeQAJgOAEgMIAGgMIAGgKQAIgJAMgBIAxAEQATAAAWgFQAdgIASgNQAWgQAOgVQALgSAHgVIAGgiIAAgBIgGAAQgSgBgQgEIgTgHQgJgDgLgGIgRgLIgagaIgKgOQACgCABgBQABAAAAgBQAAAAAAABQgBAAgCABIAcgSIAAACIAQAUIALAKIANAKQAOAJARADQAMAEAPABIAHAAIAAg8IAAgCIAAgBIAjADIAAACIgBAGIABA0IABAAIDDAMIAVADQAMADAGAEIAEAEIATAPIATALQAeAPAnAIQAeAFAcgBQAwgDArgRQAXgKAYgPQABgBABgBQABAAAAAAQABgBAAABQAAAAAAABQgBACgHAIIgZATQgLAHgJAEIgYALQgpANgvAAQgxgBgsgRQgdgMgWgQIgMgKIgBAAQgDgDgKgBIjVgEIAAADQgCATgGAUIgIAYIgNAZQgRAagcAVQgZASghAJQgaAHgZgBIgrgFIgDAAIgBAAIAAAAIgBACIgCAFIgBABIAAAAIgCAFQgHAPgIAOQgUAhgaAXQgeAcgmAQIhZAkgArLj5IBCAOIghhvIAjBwIgCgBIABAFg");
	this.shape_2.setTransform(332.4,655.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("ACGAqIgmgHIgZgJQgwgRghgnQgNACgSAFIgpAIQgfAFgYACQAfgFAfgKIAvgOIAOgCIAGgBIAAAAIABAAQAgAoAxATQAMAFAMAEIAWAFIARAEIABAAIgCAFgABvABIAAAAIABAAIAAAAIgCADgAgJgpIAAAAIAAAAg");
	this.shape_3.setTransform(227.8,600.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AlPBXIgBgGIAAgBIADAAIASgDQAVgFARgKQAVgMAPgSIAJgLIgBAAIgCABIgBAAIgDgKIAAAAIABAAIALgCIACAAIAFgKIACgDQAEABgDgBIAGADIAAAAIAAABIgCAEIgCADIANgCQARgCATgFQAUgGAUgKIAbgRIAIgHIADgBIABgBIABAAIAXgBIAkgBQAXAAAlABQAsADAmgBQA4gDAtgOIAhgLQANgFAPgDQAegHAegBQgiACgjAKIhCAWQgrANgyACQgeACgtgBQgpgBgQABIg7ADIgCAAIAAABQgMAKgOAIQgNAIgPAGIggALIgzAJIgHAJQgSAXgYAOQgXAOgXAEIgQADg");
	this.shape_4.setTransform(512.9,35.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AByBYQgHgQgCgUIgDglQgDgQgHgMQgKgXgWgQQgYgRgmgJIgxgHQgggDgeAHIAkAPIgGgPIAGAKIAEAGIgEgBIACADIgpgSIADAAIgEgCQAcgJAegBIAiABQAYACAPAEQArAJAcAfQAMAPAHATQAGANACAVIAAAfIAFAnIAAACIgDgGg");
	this.shape_5.setTransform(628,25.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AiYAmQAKgGARgPIAGgGIABgBIAJgHQAMgIAQgJQAdgSAngJQAigIAqACIApADIAqAIIAOAEIACAAIABABIALAEIABAAIABAAIgCAHIABgDIgBAAIgegIIgTgDIgUgDQgRgCgZAAQg1AAgsAQQgZAJgbAQIgZARIgOAKQgNAKgOAFQgMAEgKAAQAKgCAMgIg");
	this.shape_6.setTransform(577.3,4.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AAbCKQgEgLgIgFQgEgCgFAAIgKgBQgNgBgFgGQgEgGAFgNIACgFIAAgBIAAgBIABgBIAPggQAJgcgCgZQgCgXgOgeIgHgLIgGgNIgDgJIgEgRIgBgMIgBgDIAAgPIAAgVQABgEABAGQACAKABALIABAMIAAACIAJAaIALAWQAPAZAHAUQAGAWgBAVQgBARgFASIgHAVQgBACAAABQgBABAAAAQAAABABgBQAAAAABgBIAJgVQAKgYAAgaQABgmgagqIgDgJIgEgJIAFALIADAGQAbAtgBAmQAAAUgHAXQgDANgOAcIgCADIAAAAIAAACIgBACIAAAEQgCAFACADQADADAFABIAJABQAHABADALIAIAbIgIgSg");
	this.shape_7.setTransform(645.5,42.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("ACHAuIgagRQgogahFgIIg8gJQgdgEgdgHIg0gOQgcgIgSgDQgJgDAEgCQAEgBAQABQAUACBDAQQAWAGAiAFIA3AJQAwAHAiANQAVAKAMAJIAYATIAKAGQAYAMAXgJIALgEIAFgBQAGAAAIADIgLgCQgEAAgDABIgGAEIgJADQgKADgJAAQgUAAgQgLg");
	this.shape_8.setTransform(603.6,127.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABdDIIgigFIgOgGQgEgBgDgEIgHgGQgFgFgFgJIgFgLIgJgiIgCgMQgZgMgUgXQgMgNgTgeIgQgZIgRgbQgJgPgDgOQgFgQAHgQQAHgSAfgoIAPgVIAAgBIgBgDIghgkIAhAjIACADIAAgBIABAAIAFABIgCAAIgCAAIAAABIAAABIgBACQgCAEgLAPIgSAZQgLAPgFAMQgIASABAMQABALAKASQAHANAKAPIASAaQAHAMAIAMQAXAhAZAPIALAGIACgBIAAAAIABADIABAAIADABIABAAIAAABIAAAAIgCAFIgCAAIABAIIAIAgQAEANAHAKQAFAGAIAGIAIAEIAGACQAHADAMACIAqAIg");
	this.shape_9.setTransform(573.2,202.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AEIBFQgOgCgYgGIgJgDQgVAHgVAAQggAAgcgPQgNgHgMgKIgGgFIgNgIQgPgJgSgFQgXgGhFgLIhugYQg1gOgeAAIgRAAIgSACIgmAHQgjAJgdANIguAZQgGAEgDAEQgCAEABAEIACAFIgGgIQgCgFADgFQADgEAFgEIAIgHIAUgQQATgLAQgIQAlgRAwgJIAWgDIAVgBQASAAAbAFQARADAgAIIA2ANQAmAIBAAKQAwAJAZAPIANAJIAGAEIAJAIQAQAMAVAHQAWAHAVgCQALgBAKgDIABgEIABABIAEACIANgGIACgBIABgBIABAAIAIAPIAAABIAdAHIAUACIAUABIAKAAIApgKQALgFAKgHIAIgFIAKgFQgJAKgLAHQgbAVgjAEQgLACgMAAQgOAAgPgCgAGQAZIAOgRIAXghQADgFAFgDQgEAEgEAHIgLASQgOAVgOAKIACgCgADWADIAAAAIAAAAIABABIAAABg");
	this.shape_10.setTransform(603.3,133.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiHCgQAegRAogMQAdgJAfgEIArgEIAAgFQgEgjAEgkIAIgfQADgKAKgUQASglAfgrQAOgUAcgiIA4hFQgUAeghArQghAsgOAVQgdAsgNAgQgFAMgDAKIgDAMIgBARQgBAjAMA0IgCAEIgzAIQgmAHgYAHQgbAJgWAKQgcANgUARQASgRAWgMQAUgMAagKIA5gTIA0gLIABAAIAAgFIgBgEIAAADQACAFgFABIgKABIgVACQgTACgUAEIgkAJIghAKQgmAOgWARQgeAVgUAbQAbgqAsgZg");
	this.shape_11.setTransform(565.3,340.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AA5NcIAIgNQAJgRAEgSIADgTIAAggIgLgzIgCgHIAAgIIADgHIALggQAEgRACgTQACgkgJghQgJgcgOgZIgCgDIgBgBIgBgCIgBgBIgEgGQgGgKABgJQAAgIAFgIIAGgJIAFgGIAUgZIgQAAIgHgCIACgfIABAAIATAAIAUgCIAFgBIAIgPIAFgOIABgBIAAgBIAAAAIAAgBIAcAMIAAAAIgBACIgEAIQAWgIAYgNIAfgPQASgJANgEIAHgCIALgEQAFgBAHgDQAVgKAPgSQAPgRAIgVQAJgagCgYQgBgQgIgSIgMgSQgMgSgQgPQgQgQgwghIgCgBIgFgDIgLgGQgMgFgPgBQgTAAgWAKIgNAGIgNACQgkAEgVgOIACgBIgBAAIAGgBIgBgDIgCgDIgBgCIgBgCIgDADIATgYIACgJQADgTABgPQAAgPgCgTQgDgUgGgNQgHgSgRgOIgKgIIgCABIgFAEQgJACgRgHQgJgEgOgIIgdgRIgKALQgDADgCAEIgRAgIAAAAIADAPIgBABIgKADIgEgVIgYgFIgCAAIgBgBIADgLIAAgBIgBgBIABABIAVACIgEgOQgHgXgRgRQgLgLgOgGIgEgCIgCgBIgBAAIAAgBQgDgBgGgGIgYgmIgEgFIgFgIQgEgEgBgEQAAgEADgFIAGgIIATgdIAKgVQAIgVgCgYQgCgPgDgIIgDgKIgIgPIgKgPIgggkQgIgKABgJQAAgIAJgLIAXgZIAZgZQAOgPAJgTQAKgYAAgXIABgdIgWgZIgBgBIAAAAIgHgHIgPgMIgHgEQgOgIgSgBIgEAAIgDAAIgGACIgPAAQgLAAgDgBQgDgCgBgEIgCgHIgBgUIgBgEIAAgCIgCgHQgIgggPgWQgGgKgIgJIAAABQgBAOgFARQgMAmghAaIgEgSQAYgTALgbQAHgOACgMIACgNIAAgDQgKgKgNgIQgVgNgcgJIgEgTQAiAIAcAQQAWAOAPAQQASATAMAZQAKAUAGAaIABAHIABAGIACAGQABACAEABIAFABIAGAAIACAAIALAAQAOACARAHQAWAKASAUIABABIAAgBIAbBEQgBAegMAYQgKAWgQARIgTATIgHAGIgLAMIgCACIgKAKQgDAEgBAEQgBAEADAGIAkAuQARAYAEAdQACALgBAJQAAAMgCAGIgEARIgFAMQgHAQgLAOIgDAFIgCACIgBACIgDAEQgEAEgCAFQgCADAEAGIAVAiQAGAJAFAFIACABIABABIABAAIAAAAIABAAIAEACQANAFAMALQAMAKAHALQAKAPAGATIADANIADABQABAEAFgKIAKgUIAKgUIAMgOQAhAUAUALIARAIIALACIAGgBIACgBIABgBIAEADQATANANATQAJAPAHAVQAGATABAXQACAVgFAgQAHgBACgBIADgBIAGgCQAXgJAPgCIAPgCIARAAIASADIAQAFIAIADIAXAOIAtAhQApAhAWAnIAEAFIAFAKIAJAcIACAZIgBAVQgFAkgSAfQgVAighAUIgTAKQgIAEgPADIgMADQgOAFgdANQgqATgeAJQgPAEgJABIgDAAIgTAXIgeAfQgFAFAAAHIABAGIAMAYQAGAMAFANQAKAbACAdQADAegGAcQgDAPgEANIgFANIgEAJIgDAGIgBAHIABADIAAABIADAOQAGAbABAVIAAAQIgDASQgEAVgHAPQgJATgSAWIglAvgAA4GYIABAAIgCAZIABgZgAA7F5QAAgGAAAGgAA8AtIAEABIgCABIgCgCgABAAuIAAAAgAmFuQIAIADIAaCAIgGAFgAljsNg");
	this.shape_12.setTransform(593.6,224);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("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gagFIgEgCQgXAKgXACQgRABgWgFIgVgFIgKgEIgkgGQgRgBgOABQgLABgLAEIgTALIgDADQghAZgZANQglASgnAIQgqAGgpgHIgogIQgsgIgvAFQgWACgZAGIhBARQgMABABgCQABgBANgDIAggMIAfgMQApgNAngEQAcgBASABQAKABANACIAZAEQAUAEAZAAQAVAAAXgEQAngJAggVIAagRIAUgRIARgOIAMgJIAGgEQgBgCgGAAQgIAAgMAEIgTAMIgWAQQggAWgfALQgmANgkgDQgQgBgTgEIgWgEQhSgPhdAgIgWAIQgLAEgSAEQgWAFgjADQgZAChKgBIgqABIhHAEIgFABQgLAEgIAIQgZAVgjALQgNAEgSADIgYADQgRACgFAEIgBABIgCACIgBACIgEALQgKARgSAMQgPAKgTAFIgIABIgJACQgIAAgHAEIgGAFIgCACIgCACIgBACIAAABIglBMIgFAGQgggMgbgFIgPgGIgCAAIgEABQgMAFgQAVIgSAZQgIALgOAPIgOAOIgKAHQgMAIgFAHQgHAKACAIQAEAMARAOIASALIAPARQARAVAGAaIABAHIADACQAWAOALATQAOATAEAbIABAJIgBAPQAAAAAAAAQAAABAAAAQAAAAABAAQAAABABAAIAMALIADACIAMASIAJASQAEALACALQACAKAAALIgBAUQgCAPgEAQIgJAcQADAJADgDIAGgJIACgCIAGgPIAJgXIAGgPQADgDAAAJIgCAKIgMArQgCADABAEIAAACIAAAAIABAEIAFAgQADAfgFAhQgFAggNAfQgaA8g3AmIglAVQgCAJgFAMQgJAXgPARQgMAOgQAMIgMAIIgCABIAAABIgHADQgGADgCAGQgBAFABAJIACAEIACAFQAHATAFAXQAHAogGAqQgDARgFASIgLAhQgQAkgbAeQgvAwhAAWQgjAMggACQglABgjgMIjDhGQgNgEgGABQgFAAgCACIgGAIIgEAIQgBAFABADQAEAKAOAKIAYAPQARAMAOAPQAFAIAPAcIArBcIASAqQAHAXADATQAFAWgGAWQgGAXgRAQQgRAQgVAJIgcAJIgUAGIgDAAIgFAHQgPARgUAKQgYANgeADQgTACgggBIgYABIgHABQgMADgHAFQgIAFgFAJQgFAGAAAHQgCAKAEALQAAABABABQAAAAAAABQABAAAAAAQABAAAAAAQACAAABgEIADgIIAJgKQAGgGAJAAIAFgBIALABIAXABQAVACASAAQAagCAQgEQAYgGAYgPQARgKANgNIADgBIABAAIAAAAIAAgCIAAAAIAAgBIAFgFQADgFAKgOIABgBIAFADIAAABIgBABIgPATIgCACQASgFAQgHQARgHAQgMQAQgNAMgPQAMgQAHgTQAFgSABgVQAAgWgEgRQgCgOgLgaIhDiaQgQglgsgdIgNgJIgDgDIgCgBIgEgGIAEAEIAMAIQAuAcATAfIBOCjQALAaADATQAEAWgCAUQAAAUgIAUQgHATgOATQgMAOgRANQgeAWgtAKIgFACQgNAMgRAKQgWANgXAGQgVAGgTABQgOAAglgBIgUAAIgIACIgCACQgBAAAAAAQAAABABAAQAAABAAAAQAAABABAAQgEgCgEABQgEAAgDAFIgDAEQgBAFABAMIABAdQAAASgCAQQgGAlgSAeIg9BTIgFAIQgGAJgDAJQgBAHABAGIABAFIAKAeQANAlAFAdIAHAeQAEAcAAAUQAAAZgJAYIgEALIgQAgQggA/gmAqQgYAcgaAUQgTAOgQAJQgWAMgaAFQgfAGgagEQgegEgZgNQgJgEgMgJIgTgOIgQgRIgDgCIgCAAIgCABIgGAAQgCACgOgEQgYgFgRgKIgPgKIgVgTIgBgBIgCgBIgKgEIgCgBIgBgBQgSgLgIAAQgEgBgDACIgEAHQgFAGgFAEIgDADIg3AoQgOAIgJAJIgNALIgWAQIgIAEIABADIAGAOIACAKIABARQABARgHARQgFALgIAKQgIAJgKAGQgJAGgOAFIgHACQhlAlhOAGQgxAEgwgGIgXgFQgYgFgNgIQgPgHgKgNIgGgHIAAAAQgQAGgLAMIgFAHIgWAoQgWAlgfAaQgNANgWANIgVALIgHAIQgDAFgCAIIgWB4IgRCiQgDAXABAWQgEACgCAKQgCAIAAAFIgBAKIABACIAAACIAHAgIACAWQABAZgJAZQgKAagTAXQgVAXgdAOQgeAPgsABIgogCIgbgDQhAgCgtAMQgMACgOAGIgfAOQgmAOghAIQhHAShPgCQgTABgqgCIg7gGQg6gEgoADQgkADgZAJQgQAFANAAQgBABAAAAQgBAAAAABQAAAAABAAQAAAAABAAIAOgCQAegGAjABQAaAAAYACIA8AGQBQALBLgGQBXgHBMgfIAhgPQAOgFALgDQAXgGAegDQAbgBAZABIAYACIARABIASABQAxABArgRQAUgLgSAOQgfAVguAFQgWACgOAAIgLAAIgTAAQgeACgWADQgfACgaAHQgMADgNAGIgmAQQhSAhhfAFQguADgogDIhRgJQhMgJg3AIQgeAEgaAJIgZAMQgZANgYAIQgjAKgkAAQgUAAgTgDgAh8IYIALAKQAbAaAgALQAkANAkgGQAegFAbgPIARgKIAUgPQAxgmAng/IAdgzQAUghABgoQABgTgDgSIgDgRIgGggIgahXQgDgOACgJQADgJADgEIACgFIA+hcQAOgaAEgeQACgOAAgSIgCgdQACAhgEAZQgFAfgQAaIhBBYQgJANgCAJQgEAKABAKIACAPIAFAPIAPAzIALA5QAGAsgKAiQgEAPgMAUIgPAaQgRAdgNARQglA1gyAgQgPAKgWAIQgWAJgYAAQgZABgYgKQgXgJgSgOQgHgGgJgJIgGgHIgMgOIgEgFIgBABIgDABIgGACIgEABIgGAAIgIgBQgMgDgMgFIgGACQgTAFgVgDQAPAMAQAJQATAIAZADIAFAAIACgBIAAAAIABAAIAHgGIACAAIAFABIAHAFIABAAIAAAAIABABgAszKRIAAgFIAFAFIgFAAgApCI8IACABIgBACgApAI9IAAAAgAIPjBIABgBIAEgGIABgBIACADIgEAEIgEABgAITjCgAHokLIAAgCIAAABIABABgAfDuIIALgJIABALg");
	this.shape_13.setTransform(350.2,231.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AA2BYIgTgIQgLgFgKgIQgLgJgHgJIgPgUQgJgQgFgRQgFgQgCgRIgBgBIAAgBIAEgBIAAABIABABIANArIAOAaQAGAIAFAGIAOANQAIAGAHAEIAQAIIAXAHIAMACIhOiEQAdALAQAOIgGgFIgLgHIgOgHIgHgDIBOCCIgHgBIAGALgAgqAzIgBgBIACACIAAAAIAAABIgBgCgAhWALIgBAAIgBgCIACgFIADgEIArhYIAaACQABgBgegGIgOAYIANgaIBSAMQAEAAAEACIACAMIgBAAIgCgCIgCAAIgDAAIhMgJIgXAsIgYAsIgCAEgAgsgHIgDgBIAEgBIAAACg");
	this.shape_14.setTransform(439.7,638.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ABAArIgngIIgPgGQgKgFgFgHQgJgKgDgIQgDgHgCgKIAAgJIgBAAIg3ALQggAHgbAKIgPAFQgCgBAHgEQASgLAmgLQAUgHAagFIAWgFIAAAAIACAAIAKgEIAAABIAAACIAAABIABADIAAAJQABALADAJQAFAMAKAIQAJAFAKAEQAKADAPABIATADQALACAJAAQAOgCAJgEQAKgGAGgGIAFgGIANgQQAIgKgFALIgHAPIAAAAIgBABIgIALIgIAHQgEAEgGADIgLAFIgKADIgKABg");
	this.shape_15.setTransform(426.8,646.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("Ag7E5IgigHQgVgFgOgFIgMgGIgOgIQgOgKgMgOQgJgLgGgOIgHgTQgCgHgBgNQAAgCAAAAQAAgBAAgBQAAAAAAAAQAAAAABABIADANIAKAaIAIAMQAKAQAPAKIAOAKIAPAHQANAFALACIA7AGIAFAAIAEAAIAKgBIAbgGQAJgCAGgEIAPgIIAXgWIALgMIgDADIAAgBIAAAAIADgEIAEgJIALABIABAAIAFgBQATgDARgJIARgLIAOgMQARgTAOgeIglg2IgDADIgBABQABAAAAAAQAAAAgBAAQAAAAgBABQAAAAgCAAIAAABIAAAAIgTgOIABAAIABgBIABgBIAKgKIgVgeIAWAbIAAAAIACAAIAHgHIAIgKIgFgUIgGgRIgKgSQgGgIgLgLIgKgJIABgbQAOAIAMALQAMALAHANQANATAGAUQAFgJACgKIAHgdQgRgxgLgdIgVgwQgLgegDgXIgBgIIAAgFIAAgCIgEgbQgDgSAJAVQgFgkgRglQAUAiAKAjQADAOABAJIAHAdQAFAQAPAjIAYA1IAXBDIgJAhQgEATgJAOIgJAQIAAAAIgLAOQgGAJgIAGIAAAAIA2BDQgQAjgVAWQgSARgUAKQgPAHgHACIgVAEIgGgBIgJAKQgNARgUANQgMAIgNAEIgSAGIgRADIgJAAgABdgkIAKAHIgHBigABngdIAAAAg");
	this.shape_16.setTransform(439.2,626.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#335C64").s().p("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");
	this.shape_17.setTransform(346.5,342.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.8,0,695.1,692.1);


(lib.lebanonai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lebanon.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAFBnQgUgPgGgGIgcgYIAAgBIgBgBIAAgDQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAABAAIAAAAIAIgHIAVgYIAVgfIAJgTQAKgWAEgUQAEgTABgZIAAgUQABAJgBANQAAALgBALIgEAXQgFAUgKAWQgGAOgNAWIgXAcIgQAPIAAABIABABIABAAIA+A0IAkAdg");
	this.shape.setTransform(572.3,144.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAeAOIg5gGIhDgMIgBAAIAAgBQgDgBgDABQABgGAIgDIAAABIAEACIBfAVIAdACQAhADAhgEQgcAEgaAAIgSgBg");
	this.shape_1.setTransform(521.3,314.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgsBHQAHgMADgJIAGgXQAEgUgDgYIgDgWQAAgMAFgJQAHgJANgGQAFgDASgHQASgJAfgEQgVAEgLADIgdANQgRAHgJAKQgJAMACATQAGAjgHAdQgGAUgIAPQgKAQgOAOQARgTAFgJg");
	this.shape_2.setTransform(373.8,407.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("ACnDXQAEgQAAgHQAAgEgDADQgJAUgDADIAJgdIAAgEIACgGIAEgjQADgugNgrQgThCg0g5QgUgVgXgSIgqgdQgkgWgrgRQgcgKgngMIgfgJIAAgBIgCgBIgBgBIgGgFIAHADIAjAKIBDAWQAuARAjAUIArAdQAYASAVAWQA2A6AUBGQANAvgDAuIgDAZIgEAUIgHAaIgCAEg");
	this.shape_3.setTransform(499.8,370.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AhzNYQAIgPASgPQALgJAXgLQAYgOALgIQAigYAbgiQAZggARgrQAGgOAIgaQAIgWAIgQQAJgUALgPQALgQAQgOQAdgaAqgLIAKgEQAFAAAGgDQAJgFAJgJQALgJASgVIADgDIgCgEQgKgZgSgSQgQgPgZgQQgXgQgOgOQgQgTgNgUQgWgpgIgzQgDgQgDghQgCgcAHgTQAIgZAVgPQATgOAcgGIAEgBIAAgFQgBgQgEgNQgEgNgIgRQgOgZgYgYQgSgRgcgZIgugnQg0gugYgpQgTgbgFgYQgGgcAHgdQAHgWAJgNQALgOAUgJQAXgKALgKQATgQAGgYQAGgWgKgZQgIgTgRgSQgKgLgWgRIhjhJQgqgdgUgUQgRgQgHgMIgKgSIgQgwIgBgDIgBgCIgKgBQgUgCgTgOIgQANIgBgBIgJgFQgHgEgHgGIgLgPQgFgIgEgLQAFAMAEAHQAFAHAHAHQAJAIAFADIAJAEIAAAAIACgBIAPgMQAUANAUADIAKABIATA2IAFAKIAFAJQAJAMAPAOQAXAUAoAcIBkBIQAWASALAKQASAUAIAVQALAagIAZQgGAYgVASQgLAJgVAKQgTAJgJANQgJAMgGAWQgHAcAGAZQAGAXARAaQAMAWAUAVIAqAoIAuAnQAdAYARARQAbAbANAZQAHANAGASQAEAQABARIABAOIgNADQgQADgKAFQgMAFgKAJQgUARgEAcIAAAcIADAfQADAgAIAbQARA9AsAlIAMAJIAMAJQAQALALAKQAdAYAMAgIADAIIgGAGQgSAUgLAKQgIAJgMAFQgIAEgEABIgKACQgoAKgcAZQgdAYgSAnIgQAkQgIAYgHARQgSAsgZAfQgcAkgiAYIgjAUQgVAKgOALQgRANgJAQQgFAIgDAJQADgJAEgIg");
	this.shape_4.setTransform(552,183);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgDA0IjOhIIDOBGQApAPBKgFQAfgBAYgSQAXgSALgdQAHgUABgNQABgMgCgLQADANgCAOQgCASgIARQgSApgiANQgNAHgYABQgTABgTAAIgHAAQgmAAgegLg");
	this.shape_5.setTransform(477.4,387.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("ACAIFQALgwgHgzQgIgygYguQgYgugngmQglgngwgaIgYgMIgCgBIgWARIAEALIgCgBIgEgIIgIAGIgBAAIAJgHQgGgRgJgPIgHgDIgbgGIgUgEIgBAAQgRgCgRgBIgdAAIAAgCIACAAIADAAIAUAAQAUABAUADIAAAAIAMACQAUADAUAHQgOgZgTgSIABgCIAQASIAOAVIAEAHIAIACIAXAJIAIADIAOAHQAwAYAmAjQAoAkAaAtQAaAtALAyQALA0gJAyQgJAzgZAuQgaAvgnAlIgCAAQBMhJAVhegAmmB/IgBgBIADABgAiPBaIAJgYIACgEIAHgrIAAAHIgHAjIgCAFIgJAYIgBAFIgBACgAlYA8IAAgDIABgGIAAAAIgBAGIAAADIgBACgAlWAoIABAAIAAAAIACAAIgBABIgBAAIgBAAIgBAIIAAABIABgKgAlTApIgBAAIAAAAIABgBIAAAAIAAABIAAAAIAAABIgCAHgAh8AIIAAAKIgBABgAh8AFIABgUIABgYIgBAYIgBAUIAAADgAh5gwQABglABgPQACgSADgMQAEgLAEgHQAEgHAHgHIARgPQAJgGARgJIAmgUIAAgBIAAAAIACgBQAngRAjgbQArghAcgqQAPgYAKgYQAGgOADgLIADgLIAAAAIABgEIgBgBIAAgCIAAgDIgCgHQAAgDADgCIAJgIIAEABIACAAIAAABIAOgEQAxgNAngYQA3ghAhg1QAdgvALg5IAIgGQgGAlgOAjQgQAngcAjQgaAhgkAXQgcAUgjAOIgdAKIgOAEIgFABIgGACQgEABABADIAAAEIgCAJQgMAogVAhQgWAjgbAZIgbAXIgbATIhfAyQgQAHgKAIQgTAOgIAQQgJAUgCAlIgDAugAEioMIgCgBIgPgJIAAgCIABABIACABIAMAIIADADgAEbpGQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAABAAAAIgBAKIgCAKQADgMAAgIgAGiqrIgCAHIiCBsgAGgqkg");
	this.shape_6.setTransform(368.7,456.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("Ag9CXQAKh9AThZQANg2ARg1QAHgXANgdIAWgxQAUgrAOgtQgOAygWAwIgXAzQgIAUgKAiQgRAzgLA3QgRBVgKB7QgHBjgIBng");
	this.shape_7.setTransform(45.6,638.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("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AAgBIAAAAIABAAIAAgBIgBgBIAAAAIgCgNIAAgHQABgUACgIIACgNIAIgjQAEgNAEgIQAHgPAFgGQANgSAXgQQATgNAZgMIAxgSQAQgFAkgIIAHgBIAEgBIABAAIAKgDIADgGIAAAAIAWgwIgeAiIAAAAIgSAUIgBAAIgBAAIAAAAIgLgCIgjgFIgKADIgaAJIgaALQgYAKgXAQQgUAPgSAWQgGAIgIAOQgGAKgEAMQgJAagDAYIgDAeIAAAEIAAABIABABIAKALIgBgBIAAABIgDABIgBACIgDABIAAABIAAABIABADIAAABIgIgCIgXALIgRALIAHAOIgHgOIgCABIgBABIAAgBgAfnB0QALAEANADQgQgHgRgFIgagHgAeZAbIA1APIAjAJIAHADIhcgiIgdgKIhMgaQAvAaA3ARgAWrArIAHAFIALgNIABgBIACgCIgHgFIgBAAIACgCIgBAAIACgBIgDgCIgDADIADACIAAAAIgBABIgCgDIgIAIIgDADIgCABIAAAAIAAABIgCgCIgBgDIAAABIgCgDIAAAAIgYghIAFgFIgMgIIg2geQgegPgggKQgogMgnAAQgpAAgqAMIgbAeIAhgJQAlgLAnAAQAnABAjAKQAZAHAhAQIA0AbQAVAPAHAGIAPAQIAFADIABABIAAAAIACABgEAhPAASIABAKIgBgNIgBAAIgBABIgDAAIgEAAIgoABIAHADIAagBIALgBgAWuASIAAAAIgBABIAAAAIABAAIACACIAAgBIgCgCIABgCIAAAAIgBACgAXUAAIgIASIAHgIIAVgVQAvgtA6gUQAbgJAggEIgGgJIgYAEQgLACgZAIQgXAJgKAGQgKAEgWAOIgeAWIgUATIABAAIAAABIAAAAIAAACIABACIAAAAgAWvAQIACABIACABIgDgCgAc8hDIAJACQBYAeAlALIiAgwIgZgIIATANgAbChSIAeADIgBgBIgggDQgYgBgXACIABABQAQgCARAAIAQABgAbmhYIAIACIgJgKIgIgBIAJAJgAbWhZIAOABIgJgJIgNgCIAIAKgAI2LjgAI2LjIgCgEIACAEgAMuEfIgBAAIABAAIABABgAVkBzIAEgHIABAAIgFAHgAVpBrIAAAAIABAAIgBAAIAAABIABgBIAAAAIgBABIgBAAIABgBgAVrBpIABgCIABAAIgBABIABgBIgCADIABgCIgCACgAVvBkIgBABIAFgGIgEAFIgCADgAWrArgAWqAqIAAAAIABABgAWmAjIgBgBIABACgAW4AbgEAPbg2WQgdgDgngOQgmgNgSAAQgNgBgKADIgGACIgCABIgDADIgYAWIgIgBIgHgCIgXgOIAVANIAGACIAKABIAagXIAGgDIAFgCQAMgDAOABQAPACAQAEIAgALQATAGARAEQASAEAUAAQArACAhgYQAOgKANgPIANgOIgCACQgYAhgfAPQgTAJgTACIgWABIgQgBgEAL4g2sIgCgBIACABIAHAFgEAS4g3VQgdgSgWABQgUAAgOAPIgDAEIADgEIADgEQARgPAZAEQAUADAYARIgEgDg");
	this.shape_8.setTransform(275.7,378.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AnjEnIAAAAIABAAIARgFIADAAIgDgLIgBgHIgCgFIgZgCIgHgCIgDAAIgHgCQAAgBANAEIAGABIAAAAIAYACIAFATIABADIBOgPQAcgHAigQQArgVAngfIAkgcQAPgNALgHQAagUAagOQAdgQAZgIIAbgHIAlgIQA1gNAvgbQAxgbArgvQAkgqAag3QAMgVATgUQAPgSAYgRQAZgSAxgaIA8gWIA9gUQgeAKg1AXQgrASgiASQgjATgYAUQgYAVgOAXIgIAPQgGAMgJARQgRAegWAbQguA4hAAjQgfAPgiALQgVAHghAHQgmAJgfAQQgiAPgiAbIgkAeQgXATgcATQg7Akg/AQIhPAOIgLADIgDABIgGACIgCAAgAn/EEIABABIABABIACABIACACIgGgFgAn+EFg");
	this.shape_9.setTransform(264.8,612.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AhZAEIgvgDIgkgFIAeADQAiAEAkABQAZACA1gBIBRgCIBKgEQAJABATAAIgvADIguACQgzACgpAAQg3AAgmgDgAisgEIgQgCIAQACg");
	this.shape_10.setTransform(27.7,727.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("Ag1DwIgigEIhkgUQABgWADgmIADgfIAGgdQADgKAHgOIAIgNIAJgLQARgTAZgNQARgIAWgIIAjgMIAPgFIALgFQAJgGADgFIAFgHIATgvQATgtATgcQAdgqAogWQAHgEAPgGIAGgCIADgBIAGgCIACgBIACAAIAIgBIABAAIgJACIgBAAIgDABIgFACIgDAAIgFADQgQAGgFAEQgoAWgcApQgUAcgRAoIgWA0QgGAMgKAHIgPAHIgWAHIgvAQQglAQgTATIgNAPIgKASIgEAJIgIAeQgGAjgCA/IBYATIBEAIQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgWgCg");
	this.shape_11.setTransform(18.8,703.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AChH0IAAgBQgJgPgPgMQgGgGgRgMIgbgUQgbgXgTgeQgRgcgLgjQgJgegEgkIgCgxIABgTQADgVAIgQQAHgQAQgPQAOgMASgIIAQgGIgCgJQgEgOgGgKQgMgWgVgWQgQgOgbgYIgugoIgtgsQgWgYgSgdQgTgfgGgcQgHgdAJgjQAIggAPgQQAIgHAOgJIAYgMQAIgEADgDIALgIIAEgEIADgEIAGgIQALgSgHgVQgGgUgSgRIglggIgOgLIAPALQAbAWAKAJQASATAGATQAGAWgKASIgGAIIgDAEIgFAEIgWAPIgXAMQgNAHgIAJQgQAQgIAgQgJAiAHAdQAGAcAUAeQASAdAVAXIAWAXIAXAVIAuAoQAbAXAQAQQAXAXALAVQAFAJAFAPIACAJIAQgEIgCACIgOAEIABANIgBACIgCgOIgPAFQgRAIgOANQgdAZgGAoIAAAcIACAoQAFAnAIAaQAJAhASAeQASAeAbAXIAbAVIAXARQAQAOAJAPIAAAAIAGALIgBACIgGgMgABUBoIANgRIADAAIgPATIgBgCgABUBoIAAAAg");
	this.shape_12.setTransform(562.5,174.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgaHvQgVgZgxgRIgxgQQgkgJgWgHQhJgWg1goQgdgXgTgaQgVgdgHgiQgHgiAGgkQAEghAOgiQAMgeAUgiIAUgeIAUgZQASgYAUgWIELkpQA1g8BBgPQAigJAlADIAjAGIAhAKQAQAFAfAEIARACIADABIAEAAQAHABALgBQAlgDAUgaQAKgNAEgQIACgRIgCgXIACAIIACAOIgBAQQAAAGgDAKIgHAOQgJAPgMAJQgPAJgQAFQgUADgPgCIhBgKIgbgIQgfgJgcAAQg9gCg0AjQgYAPgWAXIjrECQgsAxgXAbQgqAygYAtQghBAgEA0QgDAeAHAeQAHAdASAaQAgAsA8AhQAfARAaAJIAeALIAbAHQA9ARAbAMQARAIARALQAQALAIALIAEAFIgIgJg");
	this.shape_13.setTransform(493.9,330.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AFIPvIAOgYQAHgOAJgMQAbglAjgbQgYgcgRghQgUgogLgxQgIglgDgpIgBglQgBgeAIgeQAIgiARgbQAMgTAPgPIgRgPIhjhbQgTgTgNgSQgQgVgLgTQgagrgJgsQgIgtALgwQAIghAOgZQAOgYAYgUIAZgRIhbhDQgxgjgagXQgYgXgRgYIgJgPIgEgHIgDgMIgEAAQgKABgHgCQgXgIgOgKQgXgPgSgWQgOgRgNgYIgBgDIgBgCIgCgEIgBgFQgFgNgFgGQgGgJgLgEQgMgEgGAAQgLAAgGAHIgGAHIgDABIgEACIgQADIgUACQgjgBgggTIgRgMIgEgDQgPgOgTAEQgHACgKAEIgFABIgDACIgaAGQgbAFgWgEQgcgEgZgOIgLgHIgFgEIgRgOQgUgWgKgRIgHgPIgFgTQgEgUADgVQAGgeATgZQALgOAOgOQAXgVAagPQAggUAzgYQAHgDAIgGIAOgJIAPgMQAKgLAAgKQABgHgHgQIgOgaQgHgNgEgNQgNgjAJgkQAEgQAKgRQAHgMALgMIACgDIAMgLIgMALIgFAGQgWAagIAhQgDARACAVQABAPAGARIAMAZIAMAXQAHAQAAAHQAAAKgLALIgLAKIgFAEIAFgEIALgKQALgKAAgLQABgJgHgPIgNgYQgHgNgFgNQgEgPgDgRQgBgWAEgPQAFgSAIgPQAHgNALgMQAIgJAKgIQAMgKAMgHIALgFIAAgCIgCgWIgtgDQgTgCgOgGQgTgJgJgKIgLgMIgFgHIgBgCIAEAGIAJAKIAKAKIANAIQAJAFAUAGIARACIAQABIAZACIgBgPIABgBIAGgBIgDABIAAAAIAAACIACAOIANAAIAAAAIABAAIgBACIAAABIgCgBIgLAAIADATIAAAAIAAABQAWgIAXAAQAfAAAeAPIAFAEIAGABIAAAAIARAEIASAIIASAJQAPAKAHAIQACAEAAADQAAAFgDAFIAAABIgBABIArAkIACABIgOAEIgBgBIgkgeIgGAIIgUAYQgDAFgEAJIgBAEIBHgTIAHAFIhRAVIAAgBIABgDIACgDIgNADIgBAAIACgGIAEgIIAJgPIAagcIAAgBIgCgCIgrghIghgWIgLgFQgOAAgQADIg+AMIgBgMIgHAEQgIAEgOALIgRARQgUAYgGAdQgEAQACARQACAPAFAOIAKAWIAOAbQAJATgBALQAAAIgEAHIgKAMIgIAIIgFADIgCACIgDADQgMAIgUALQg0AZggATQgcASgSASQgPAOgKANQgIAMgEALIgEAOQgDAKAAAIIAAASQACAMACAFIADAIIAJATQALAQAQAPIANALQALAJAJAEQAVALAbADQAVABAWgEIATgFIAJgEQAMgFAKgBQAWgFATASIADADIABAAIACACQAJAIAJAEQANAIAOADQAQAFASgBIASgCIAEgBIAHgCIABgBIAAAAIACAAIACgCIAIgIQAIgJAMABQAIAAAOAFQAMAFAJAMQAHAKAEAOIAEAKIABACIAAACIABACQALAVAOARQAQATAXAQQAIAGAOAGQANAGgBgBQAIACAMgBIAFAAIAEAOIAEAKIAKAQQAOAVAZAYQAYAXAxAiIBBAvQAPALANALIARgLIADAAIABABIABAAIAFAFIgEAAIgSAKIAJAHIAJAJIABACIAAAAIAHgDIgHADIgGAEIgBABIAAgBIgBgBIgCgCIgCgCIgBgCIgOgKIgBACIgYAQQgYATgPAXQgNAXgIAhQgMAuAIAqQAHArAYAqQANAXAMAPIAsA1IBVBOIAVASIARgOQAXgUAdgLQAUgJAggGIgFAFQgbAGgWAKQgeAOgZAWIgHAIIAMAMQANAOAEAJQABAEABAFIBQhoIAGgBIhWBuIAAgFIgEAFQABgIgBgEQgDgJgMgNIgOgOQgTAVgOAaQgOAdgFAjIgCAQIAAAmIADAlQAGAsAKAkQANAtAYAoQANAWAQATIANgIQAdgSAWgIIAVgHIACgCIAUgUIgEAVIAMgMIgHAdIAAAAIgFAVIAAABIgSBNIARhtIADgBIAAAAIgBgDIgBgBIgBAFIgHACIgJAJIgBAAIgEgEIgWAHQgdAMgVANIgDACQANAOAPANQAIAIALAHIAPAMIAPALIACADIABABIAAAAIAAAAIAAABIgKAHIgEgEIg9gwIgQgRQglAagfAqIgcAtQgOAcgGAQQAIgZALgYgAoKm4IgBgBIgMgXIgFgPQAFAVANASgAoZogIgEAPIgCAKQACgMAEgOIAAABgAlfq2IgyAZIAXgLIAdgPIAFgDgAlPrAIgJAGIAFgDIAEgDIACgBgAhwu5IArAhIACACIABgBIAAgBIABgBIABgBIAAgBIAAgBIAAgBIABAAQgBgEgGgFQgHgIgSgJQgPgIgNgEIgEgCIgBAAgAj5vKIABAMIA2gMIAVgEQgRgEgRAAQgWAAgUAIgAkjvBIAHgGIgKAJIgCABg");
	this.shape_14.setTransform(519,132.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#335C64").s().p("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");
	this.shape_15.setTransform(293.1,368.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,583.1,742.1);


(lib.kenyaai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// kenya.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("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");
	this.shape.setTransform(257.8,442.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ai0DZQAOgiAEgWQADgTgDgMIgKgdQgWg4ANg5IAJgdIAKgVIAMgTIAKgLQADgFAIgHIALgKQAsgkBCgMIA5gIQAfgEAZgIQAagHAUgPQAWgOAQgZIAMgUIAJgNQAHgMgBAKIgUAoIgJAOQgXAeggAQQgPAHgVAHQgUAGgRADIgnAGIglAGQgnAKghATQgiAUgWAiQgXAigFApQgEApANAqIAIAaQADANgCAPQgEAZgNAfQgRAlgaAnQAUggAPgjg");
	this.shape_1.setTransform(430.3,500.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AjMIcQAig/APgiQAbg2AKgxIgRAMIgZANIggAKIglAFQgjACglgOIAXgUIgOgEICqiXIADANIifCOQAXAHAWgBQAdAAAcgLQATgIAUgOIAYgVIAAgBQACgSgBgUQgBgZgGgeIAVgTQALApgBAoIAEgFIASgeQAUgnAYhBQAMghATg+IAehXQAJgYAHgPIANgdIAAAAIgCgCIABAAIAAgBIADgCIACgCIAHgGQALgJAPgQIAUgXQAigqAegyQAPgXAOgaIANgdQAJgVAGgQQAOgmABghQABgUgDgQIgLgpIgBgHIAAgIIgBgIIABgHQADgPAEgGQAHgQAOgHIAGgDIAFgCQAEgBACACQACACgCAFIgDAMQgHAHgDAMIAAADIAAABIAAAFIAAADQAAADABAGIADAHIAAABIAKAgQAFAQABAJQAEAXgCAbQgDAtgWA3IgJAVIg7BoQgWAfgSAXIgYAbQgRAUgNALIgJAIIgPAcQgKAWgaBEIgnBnQgLAcgLAbQgQAkgNAYIgVAiQgRAXgPARIgCACQgDAUgFAUQgJAjgPAhQgLAYgRAeQgTAggiAxQgfAsgJAOQAIgSAgg7gAAgipIABABIAGAJIgHgKg");
	this.shape_2.setTransform(399,561.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("ACMBoIgcgDIgzgQIgbgMQgkgTgqgfQgTgPgoggIg0grIgUgbIgJgKIAfAVICkCFIAdASIAQAJIAoAQIAbAHQAXADANAAIARgBIAJgBIgMACIgGABIgWABIgFgBg");
	this.shape_3.setTransform(331.1,631.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("ACGAaQgygahBgbIgcgLIgagKQgXgHgZgFQg4gKhaAAQAxgLA0ACQA9ACAtAUQBgAoCdBhQg0gfgtgXg");
	this.shape_4.setTransform(197.7,38.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgBASQgJAAgMgCIgRgEQgPgFgNgHIgngRIAYAFQAVAGAQADIAVADIBBACQA1gBAKACQAPADgwAFQgpAHgaAAIgFAAg");
	this.shape_5.setTransform(286.3,65.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("Ah6hgIBIAnQAaARAuArIAuArIA3Azg");
	this.shape_6.setTransform(254.5,41.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("ACTAjIgNgFIgTgIIgIgEIgYgMIgNgEIgOgDIg0gGQgeAAg0AEQg0ADgSAAQgSAAAIgDQAMgFBBgLQASgEAggEIAagEQAFgDgfAAQgjAAg6AGQA/gIApgBIAdgBIAlAEIAnAIQAHACAMAGIAJAEIALAFIADAEIAFAIIAIAMQAKANALALg");
	this.shape_7.setTransform(307.2,61.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AACgJIBQgcIBIgVQAIABgCADQgCACgLAGQgWAMgmAMIhNAZIg7AUQhFAVgqAPQBGgjBcghg");
	this.shape_8.setTransform(426,32.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAtg7IADgDIgBAAIgDABQgGADgMACQgRAEgYgCIgugGIAvADQAfAAATgFIAZgJIAAABIgUAjQgWAjgRAaQgOAXgRAXg");
	this.shape_9.setTransform(508.8,56.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AmBBpIgEADgAlkBTQAMgJALgFQANgHAHgCIAAAAQgrAYgdAVgAkzA+QgCgCgEAAIAEgCQA0gbAxgUQA6gWCkg3IBXgdQAWgGAVgDQAsgGAlAJQAkAJAfAUQARAMAKAIIAWAVIAEAFIAWAcQATAaAEAQIg5g6IgGgFQgagYgdgPQgggRgjgEQgkgDgnAIQgQAEgvARQgoAPg5ASQhuAhhDAXIg7ATQgYAHgEgCQgHACgEAAIgCAAgAk5A8g");
	this.shape_10.setTransform(429.2,28.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgCAAQAShagGiZQAOBIgEBdQgICzABBjIgOihIgTDNQgCiUAUhgg");
	this.shape_11.setTransform(466.4,186.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("Aj+HIQgCgxAJgsIANg1IACgHQAJgbAJgTQAVgxAug7IBNhdQA8hIA1hMQgHAVAOgKQANgJAcghIBJhiIBtilQgZg+gEgtIgBgHIgBgDIgDAAIgFABIgHgBQgQgEgfgTIg3glIgLgNQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAAAAAAAIgDAAIgngEQghgDgRABIgZAAIgbADIg2AJIhIAKQgXABgTgDQgRgEgOgHQgOgHgQgNQgUgTgJgTQgIgPANAGQAGACAgAXQAOAJAMAGQAQAFALACQANAEAMABQARABASgBIBMgLIArgFIAogBQAZABA1AHIAVACQABAAAAABQAAAAABAAQAAABAAAAQABABAAAAIAKAQIAEACIASAQQA3AvATAGIAHADIACgBIADAAIAAACIACAGIALAjIAXAwQAJARAFAHIiJDfIgrBGIgtBCQgTAcgcAkIgYAhIgaAfIhiBxQg2BAgTAiQgaAsgKAuIgEAZIgFBaQgEBYgEArg");
	this.shape_12.setTransform(500.7,93.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("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");
	this.shape_13.setTransform(265.2,192.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AikBdIAAgBIABgCIAHgSIAHgZQAAgGgNAVIgOAaIgBAAIAAAAIAJgRIAdg2IAUggIAPgVIASgTIAJgIQANgLAOgJIAKgFIAbgKIAMgDIADAAQAYgEATADQAVACAVAKIARAJIAOAKIANALIAIAJIANARIAOAZIAHAQIAFATQgBACgEgIIgGgNIgMgXIgNgUQgPgSgPgLIgagQQgRgIgTgDQgUgDgSACIgQADIgOAEIgXAKIgQALQgNAJgHAIIgIAIIgOAUQgLAQgOAaIgjBLQgCAFgDACg");
	this.shape_14.setTransform(454.1,459.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ah6BMQAAAAgBAAQAAgBABAAQAAgBABAAQABgBACAAIArgMQAwgKAegMQAWgJATgNQAVgOAJgMQATgSANgWIAMgWIAFgFQABAAgBAFIgDANIgIAUQgFANgMAUQgVAZgcAPQgZAQggAIQgRAFgkAHIgvAGQgJAAgCgBg");
	this.shape_15.setTransform(441.5,482);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AiehSIgBgDIAAgBIAdgGIACgBIAAACIABAHIAPECIAqgqIgQAKQgSAJAEgGIAdgcQAkgkAVgtIAJgTIAPgjQAJgWAKgPIACgEIgBgBIAaATIgCACIgnBJQgKATgLARIBdheQAGgHANgWQAQgeAFgeIADgcQABgNgBgLIgEgpQgBgHgCgIIAAgJQAAgDACgCQACgDAIACQAGgBAFAAIABADIABADIAAABIAAAAIAJAqQAHA2gMAwQgNAngNAUQgMAVgdAdIjUDXg");
	this.shape_16.setTransform(460.3,477.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#507282").s().p("EANDAw+QgugKhNhEQhQhNgcgWQhTg/jPiSQi7iFhlhPQglgegjg0Qgpg9gWgWQgNgNgcgOQgggQgHgEQgggZA2g2QBShShShsQg9hQh1g9Qjjh2l6jaQmzj7iohbQjyiDhBglQithih7hVQiBhjhPgyQiQhahhAPIgCifQAAhfADhAQABgVAWh9QARhegNgzQgbhqAwiKQAsh9BWhmQAdgjAphFIBGh2QBbiQBdgiQAzgSAIgTQADgIgDg1QgEgzA8g9QBFhHAKggQAUg/ANhQQAFglAMhqQAFgvgvhIQg4hUgJgqQgZh9hahlQgtgvgSgWQgdgjgHgfQgKgsgghAQgqhTgIgWQgcgvgEg3QAAgVAcgpQAYglgIgdQgKgegkgSQgKgFg5gTQgtgQgRgtQgGgSgLgGQgOgJgjADQARgugthPQgZgsgFgNQgMgeAHgUQAPglAsgtQAagZAzgtQBmhiCigOQBfgIDOALQBAAAB1gFQB8gFA4AAIBagBQA0ABAlAFQAaAEAiAtQAlAyAeAKQA+AWBSAFQArADBpgCQDEgEBjAqQCNA7CgBuQCMBfCAByQBGA+AtAaQA/AjBOAIQAVACCJgMQBvgKAiAUQA1AfBTAMQAmAGBwAHQBfAGAzAMQBMASAwAqQAMg2BQhhQArg0BPhaQBDhUChhFQBagnCwhAQBlgqBNBIQAWAVAsAxQAqArAnAVQA3AdBPgGICIgWQAbgFBZAMQBKAKAngUQhnCog2BUQheCUhPBdIhhBsQg2A8gcApQhOBwABCKIADLxQACHVAAEcQAAAwgJDmQgGCmAIBmQAYEpCyDFQByB9AbAzQA9BvhCBZQg9BSheAyQh4BAhKg+QgQAjgJAbQgYgZgZglQAzBqADAMQAaBPgrAnQgIhggnA3QgJAMgqBXQgYAxgxAWQgjAQhFAIQh7AQg0BXQgxBTApBkQARAog9BlQg3BcgsAgQgbAUghBQQgIASgzCKQglBigYApQgjA5gfgMQAXBbhQB8IhBBkQgjA7gKAuQgngagbAZIgXATQgKAGgMAAIgMgBg");
	this.shape_17.setTransform(261.8,314.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.4,1,529.8,640.8);


(lib.jordanai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// jordan.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("EgXrAkvIgIgCImOhhQjng4jXg2QmEhiiTgyIABAHIgJgKIgCgBIAAgCIgNgPIAPACIAFgZQABAGACAUID1ApID4A7QCIAfCvAiQBqARDtAtIDnAtIANADIAJACICCgBQABAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAIBxheQAvgmAfgdQAcgZgGABQgGAAgtAeQB/hqByhbICChkQARgNAKgKIAIgKIBAhiIA8hVQBIhnA+hmIBPiCQANgOAPgHQAKgFAXgFQCCgcCzgpQBlgbDygyIE1g+IAHgDQAHgDAHgGQAGgFADgHIAIgSQBQi7AMgjQAQguhMCZQATg8AyiDIBBiNQAPgfAXgUQAPgNAOgGQAKgEgFAEIgUATQgWAXgMAaIgOAiIgPAmQACAAAOgdIAOghQALgZARgRQAJgLANgIIAMgIICJhQQBmhBBrhLIAKgHIAFgEIAEgFQACgCgDgFIgMgKIhthuIiti/QhLhgAdAbQAVATBVBdQBfBmAYAYQArArg4hJQh8iRg/hDQgogrgkghQglghgjgkIhDhLIhuiAQiZizhghtQhchngugyQg2g6hPhQIiTiYIgdgkQgEgFgBgDIgJgZIgDgLIABgMQADgIAJgHIAOgHQALgFACACQABACgLAHIgGAFIgFAGQgEAGAAAFQABAHADAGQgCgFAAgGQgBgFAFgHQADgEAFgCIA3gdIHviLQExhVDPhCQA1gVAggWQA8gdDkhHQEJg5BHgSQB1gdHBh9QhbAfAsgHQARgDBtgaQBVgTgKAGQgKAGhqAiQBigdBRgTQBogZAbgJQgCAJoOChQjMA9ghANQgvASDJg0QB8gfDXhBIE5hgQAIgDAHgEQAPgHAOgNICKiCQBFhBAtglQA1gmhLBNIjXDSQgQAOgPAIIgRAIIo8CrIk6BcQjHA5AcgQQlkB3nOB8Ir2DNQgEABAAAEQAAACADADIDwDtQAyA2A2BCIBQBkQBpCEB2CJQgUgiBCBKIBMBVIBjBzIDbECQB8CPA0A6IA6BDIAEAIQADAGADAKQADAKAAAFQACAIgFAKQgGALgOAPQgEADgJAGImXDwQgIAGgEAEQgHAHgDAFIgEAIIjFHRQgKATgNAMQgNANgSAJIgSAHIgJACIlZBEQi6Anh+AfQh6AdBygTQhlAUhRAOIiAAXIgIADIgHAFIgKARQiDDVhACFQBgihBKh4IAshHIACgCIABgCIAEgCIAOgCIBIgOIhSAUIgDAEIAAAAIgBACIkrILIgMARQgQAUghAbIoYGqIgeAhgEgtvAfBIAPAFIgCALgEgtgAfGIAAAAg");
	this.shape.setTransform(293.6,434.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABoBqQidith6h6IhOhTQgrguARANICDCEQBsBuA2A8QBkBtCrDLQhVhhhghqg");
	this.shape_1.setTransform(316.8,336.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AIfJ+IgCgRIgJgXIgDgDIh0iAQh/iVjmkGIlWmLQhch2h3iHQgqgwgDgGQgFgKAlAhICCCPQA/BFBKBWIMIOZIABABIABACIABADQAFAMACAQIABANIgBAGIAAgLg");
	this.shape_2.setTransform(373.8,393.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AhpArQAGgKAGgFIAkgWQBmg9BVgvIjbCIIgFAEQgEAGgDAHIgcA0g");
	this.shape_3.setTransform(391.5,485.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("ADRCXQgWgVgZgVQgkgfg7gnIgCgCIgEACQgXAJgWgDQgOgCgMgHIgKgGIgLACQgpAKgXgGQgPgDgMgHIgNgJIgKgJQgKgLgGgNQgHgRgBgYIAAgBIgBgBIgCgDIgcgkQgRgXgKgaQgFgOgEgQIAAgEIgBgBIABAAIABAAIAAAAIABADIAFASQAJAaAPAWIAQAVIAVAYIAEAGIAAABIABABQABAPAEAOQAFAOAFAJIAMAOQAIAIALAGQANAHAJABQAMADANAAQAQgBAMgDIAPgDIAEgDIAAgBIAAAAIABAAIAEADIAAAAIACgBIAAAAIAAAAIAAABIAAACIABAAQALAIAMAEIAOACIANAAQALgBAMgFIgQgKIgCgCIgBAAIgBAAIAHgMIgEAHIADACIAOAJIAGAEIAEgCQAJgFAIgHIAJgKIgBgBIAAgBIAGAFIgDAEIgNANIgNAIQAxAiAsAmQAhAeAPAQQANANAKAMIAEAFg");
	this.shape_4.setTransform(171.8,143.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AhVBAIgLgDIgHgBIASACQAHABAFgHIAfgdQAlgeAygeQApgYAPgFQAMgGgsAbQg5AlgyAmIgaAUQgHAHgFACIgFABIgEAAg");
	this.shape_5.setTransform(270.8,163.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("ACJAcIAeAGgABjAWIhLgIIgkgGIgbgIIgKgDQhAgZg1gFQAuABA0APIAqAOQAUAGAYAEIBBAKIA2ALIgmgGg");
	this.shape_6.setTransform(226.4,160.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AiMBWQANgLA6glIA8gpQABgCgWAMIhRAwIAtgbIAsgcIBZg5IBLgdIjNCCQhKArgEAAIABgBg");
	this.shape_7.setTransform(289,149.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("ACahhQAZgJhcA5IiHBTIhvBBQDPiJBqg7g");
	this.shape_8.setTransform(424.4,67.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA3hDIgGgVIgEgJQgCgFgGABIgRAJIiABSICLhdIAKgEQADAAAEAFIAEAKIAbBZIAdBvIg1ivg");
	this.shape_9.setTransform(518.7,19.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("ADHh9QBfg3AdgKIivBuIjJB7QjuCRgOgCIgPAFIgCAAg");
	this.shape_10.setTransform(430.4,59.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhTByQgGgDgEgLIgJgmQgEgUgJgcQgIgcgMglIgOgsQgEgQAAgDIAAgCIABABIABAAIADANIAOAnQAOApALAmIAXBMQADAHAGADQAFACAIgBQAEAAADgCICfgsIihA2IDVg0QhqAghBAPQgfAIgRACIgHABQgHAAgEgDg");
	this.shape_11.setTransform(571.6,157.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AISLDQAJgTgBgYQAAgFgCgEIgriPQgdhegPguQgTg5gjhiQgdhNgXhHQgkhvg+jYQAWA2gtiwIhWk4IgCgFIgEgGQgKgMgHgFQgGgDgHgCIgMAAQgLABgNAEIgkAXInvE4QhfA5AegaQAegbCZhgQBHgpCKhTIDKh+IACgBIARgDQALgBAIABIALAEIAIAFQAGAFAIAIIAGAIICIHGQBnFUAwCkQAvCfAWBSIAsCdIAAAEIABABIAAADQABAFgBAFQgBAXgLAQQgIAMgNAJQAPgLAIgPg");
	this.shape_12.setTransform(515.3,73.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("EguUAwtQAHgOABgQQABgIgBgHIAAgMIgBgSQAAgRAFgQIAHgPIADgHIAHgLQALgNAGgJQAIgMACgLQADgNgGgMIgZgdIgHgGIAAgBIgDgJQgBgKAGgRIAQgkQAHgRAHgXQAMglAHgtIANhQQAGgeARgxIAQgoQAKgbAFgRQAQg0gCguIgCgYIgDgXQgFgYAHgMQACgGAIgGIAJgFQAJgEAEgKQADgHAAgIIACghQAGgxAQgjQAUgqAfgdQARgQAFgNQAFgOgCgWQgBgOgFgUQgDgRgEgQQgNgqgEgVQgDgRACgNQACgRAIgLQAGgJACgFQACgFABgKIACgdQAFgbAPgXQASgcAAgeQAAgdgVgcIgQgVQgHgNAAgMQAAgMAJgMIANgQIAEgGQAPgXAFghIAHg5QAPhsBEhnQARgZARgVIARgZQAHgOABgPIgBgPIgBgOQAAgOADgOQAGgbAYgRIAPgIQAKgGADgFQAJgKgDgWQgGgmAEgbQAEgfASgbQASgaAcgRQANgHAFgFQAKgIACgKQADgGAAgPIAAgWQABgKgBgLIAAgUQACgUAJgTQAEgKASgZQAOgTAJgQQAWgogCgpQAAgUgGgWQgHgWgJgRQgLgSgRgOIgQgNQgIgHgFgIQgMgSACgUQAAgOALgZIARglQAMgWANgKIBShGIALgJQAFgFAHAAQAIAAADAHQACAEABAJQABARgBAkQAAAKACADQAFAGAHgDQADgCAGgIIAHgLQAHgLgBgPIAAgbQACgUAHggIALg0IAIg1QAEgcgHgXIgHgaIgEgbQgDgXADgeQABgOAIgnQAHgcADgXQAFgaABgZIABgaIADgbIAXg/QAEgKgCgIQgCgIgKgHIgIgGIgIgHQgRgTgCgiIAAgtQgBgRACgEQABgBADAQIAAgiQgBgggCgMQgDgOgFgMIgFgLIgEgKQgDgJADgHQACgFADgCIADgDIAHgIQAFgIABgLIABgPIgBgbQgCgagGgcIgMgvQgEgLABgHQABgEACgEIAEgIIAEgKIAPg4QAEghAFgOIAKgbIAGgcQAHggAHgOQAJgSACgPQACgSgKgTIgEgIIgBgKQgBgKACgOQADgWgBgIQAAgOgCgQQgIglgDgRQgEgcAHgTIAIgVQABgIgEgOIgFgTIgBgFIABgDIAAgBIAAgCQAHgYAIgzIAIgzIAAgBIABgDIgBgFQAAgIgFgHIgEgGIgCgCQgIgMACgMQABgMALgRQANgWABgVQACgWgLgVIgFgKIgDgFIgBgDQgEgGAAgGQgBgOAIgNIAIgKIAMgHIAJgDQAJgEAEgEIAGgIIACgFIADgIQAFgMAPgFQALgEAXgCQARgBAMgIICUhfIABgBIABAAQAHgBAIAFIAIAGIAEAFIAHAFQANAKARADQAKACASgBQAVABAaAJIAwAQIAJACQAGACADADQAFAEAHAKQAEAHAEALIACAJIACAMQACAKADAFQAFALALAEIAJADIAFAAIAJgCQAOgEAEAAQANgBAEAIQADAHAAALIgBATIACAOIABAHQADAMAGAMQAFALAIAMIAPATQARAUAHAPIALAnIACAJQACAFAEADQAIAFALgBQANAAAbgFIAPgCIADAAIANACQAHACAEADIAFAEIABAAIADACQACACAFACQAIABAGgDQAHgCAHgIIAEgEQADgDACAAIAHACIAoAcQA6AoAtAqQAXAUAXAZIAVAYIAVAaIAPARQAIAHALADQAGACAQAAIAUABQAfACAkAMIgggOQgHgEALABQAPABAWAGIAcAJQAVAHANADQAVAFA/AGQA8AHAkAJQAgAHASACIA0AIIAyAJIAyAJIAOADQAIABAGgEIAKgKIAKgKIAngkQAWgSAwghIBFgmQAsgZAggVQBUgzBUg3IFWjaIBOg3QA4gogUAJQhbA8hbA4Ii6ByQAhggC6hyIFhjYIh2BUQB6hNC4hwIE9jBQCrhpCIhVQCYhfB9hWIkvCvQBkhBDyiZIE0jAIArgbIAMgFQAIgCAEAFQAFAGAFASIBfFFQA6DGAnBzQgchogziwIhVkhIgThCQgDgOgJgQQgFgJgIABQgFAAgJAEIgOAGIhLAuQhPAuADgJQAEgGA+gqIBUg3QACgCAJgCIAMgEQAGgBAGAAQAHAAAGAFQAFAFAKAQIA5DCIAwCsQA/DqBBDfQA9DQBCDYIAZBUIACAHIABAQQAAATgLALQgJAKgRAHIgqAMIgGADIAAAAIA9C6QAEAJAHABIAHgBIDCg4QASgFAPgCQASgBAOAGQANAHAJARQAIANAFASIAiBtQAFARACAMQABAQgGANQgEAJgOAOIjZDCQANgXg7ApQg3AnhpBVQgGAFgIADQgGADgLADIiAAeIBYg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");
	this.shape_13.setTransform(300.8,317);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AAuBuIg1g1QgFgFgHgIIgZgfIgGgNQgBgBAAAAQAAgBAAABQAAAAAAABQAAAAAAABIACAKIABADIAeAoIAVAYIgVgXIgfgpIgIgcIgCgHIAAgHQAAgHACgJIAGgOIACgDIACgCIA7gqIAvgNQAHgBgzASIg5AqIgDAGQgFAHgBAIQgBAGABAJIAKAfQABADAEAFIAIAKIAYAdIA+BAgAADBOIAHAHg");
	this.shape_14.setTransform(282.8,304.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ABhBhIgngkIiFiCIgKgMQgKgJgDgFIgDgEIAEADIAnAgICYCZQAJALgBAAIgFgDg");
	this.shape_15.setTransform(300.6,316.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AhABCQgGgEgPgNIgcgYIgBgBIgEgDIgSgRQgCgEAAgBIAGgCICugwQBXgXgaANIAkgFIjvBFIgIACIgEABQAAACADAEIAEAFIAbAeQATAUgCAAIgDgBg");
	this.shape_16.setTransform(307.6,304.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#507282").s().p("EgYRAzRIgrgLI1kkIIAAgzQAWgWgEgiQgHhKAwgyQAJgJAAgKQABgLgKgGQgegTAAgfQABgVAPgfQAUgqANg3QAHgcAMhIQAGghAOgoIAdhHQAUguAHgkQAIgsgHgqQgEgaADgOQAFgVAXgKQAHgDACgIIACgOQAHh+BOhEQAQgOABgXQABgNgEgcQgEgXgOgxQgJghAAgUQAAgcARgXQAEgFABgKIABgTQACghATgeQAog/gvg2QgSgVAAgTQgBgTASgUQAVgWAHglIAJhBQAUiIBqiEQAUgZgEgfQgIhHA5gbQANgHAEgLQADgJgDgQQgUh2Bhg1QAXgNAAgaIAAgzQgCgrAcgmQAfgoALgfQAPgpgKgrQgHgdgLgTQgMgWgVgPQgzgmAag5QAMgcAHgNQAMgYANgLIAxgnIAvgpQAJgIAIAFQAIAFABANQABARgCAiIAAALQABAHAFACQAHACAFgFIAIgKQAMgQgBgRQgBgbAIgmQAKgqAEgVIAKg8QADgigJgcQgSg3ARhIIAPhEQAHgnABggQABgnATg2QAJgbgRgKQgegSgIgiIgGhAIgDg1QgCgfgKgUQgJgUAAgLQgBgRAPgNQAGgFACgKIAAgSQAAgugThDIgGgUQgDgMAFgIQAMgXAFgtQAGgvAJgTQAHgPAHgiQAGggAJgPQAIgPABgLQABgOgIgOQgJgRAGgrQAEgVgMg/QgKg0AQgfQAFgJgGgSQgHgTADgMQAIgdAQhiQACgIgHgGQgagfAbgrQAOgXgBgVQAAgVgPgWQgNgUAKgaQAJgaAYgJIAMgEQAHgEACgFQAHgZAXgKQALgFAhgDQAJgBAKgFIAQgLQBZg0ApggQAKgGAOAEQAMAEALALQASATAfgCQAZgBAkAMIA7ATQALACAMATQANATACATQADAVAHAGQAIAGAUgGQAbgIAKAHQAKAIgCAcQgDAzAiAoQAVAZAHAMQANAWgBAXQAAATAXgEIAvgIQAagBATAQQAGAGAHgKQANgQAOADQAHABAUAOQCQBgBRBrQANASATgBQA7gCBKAdQAgANAyAGIBVALQANACAlAJQAfAHARACQAeADAzALIBRAPQALACAJgKQApguBIgtQApgaBTgyIYdvkIL3njQAZgPAGACQAHADAIAaIF4UOQAHAXgGAKQgFAKgXAGQgyAMgGALQgGAKAQAyIAbBSQARAxAJAhQAGATAKAFQAJAEATgGIDbg+QARgGAJAFQAJAFAFAQQARA8AZBHQAIAXgSARImIFxQgNAMgXAHMgoWAL9IhTAZQgYAHARASIAWAXQA4A5BxBxQBlBmBBBHQBiBtCICeIDnEPIIJJgQAVAYgBAHQgBAHgdAQImBDgQglAVgSAqIi8G+QgJAWgOALQgOALgXAEIvFDGQgTADgNAKQgMAJgKARQhjCsjJFWQgKARgTAQIghAbIoKGjIgMALg");
	this.shape_17.setTransform(298.2,333.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,0,598.7,669.8);


(lib.iranai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// iran.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373737").s().p("AgsgQIgCgDIgGgCQgMgEABgHIAEAAIARAQIA0AvIACgCIAygmIAAgBIgDgFIAFAGIg0AoIgCACg");
	this.shape.setTransform(200.8,444.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373737").s().p("AgkggIACAAIAAgBIAAAAIAAAAIAAAAIBHBBIgBACg");
	this.shape_1.setTransform(198,444.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373737").s().p("AgDgEQACAEADABIACAEQgFgDgCgGg");
	this.shape_2.setTransform(205.1,441.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373737").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_3.setTransform(201,443);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373737").s().p("AggAkIgBgBIAFgEIADgSIAAABIgJASIgIgKIgKgdIA2gWIABAAIAXgJIAcA4IgGgDIgKgJIAGAPIgBgBIgHgFIghgcIgBACIgVASIAFACIAOgFIgBABIAFAAIgJAHIAHACIgCAAIgPAFIgHAOIgBgHIgFAFIgCAIgAgoAPIAIAJIgDgJIgBgDgAgZANIACgFIAAADIAEgEIgFgBgAACgXIgHAHIAHgDIABgBIAEgBIgEgEg");
	this.shape_4.setTransform(201.4,439);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373737").s().p("AATAYIgCgIIABABIgxgtIABgBIA1AyIgFgEIAOANQgMgDgBgDg");
	this.shape_5.setTransform(205,439.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373737").s().p("AgMAWIABAAIAAgDIABACIAAgBIAGgEIgFgLIAJAFIgDAFIADgDIgNgRIAEAKIgIgFIABAJIAAACIgBABIADAEIgEAKIAAgBIgBgCIADgHIgDgDIABAAIABgBIgEgEIgSAEIAGgOIgSADQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAIARgGIAJgYIAIASIBDgaIgmBBIgBABIgNAAIAAAAIgDgMIgEAIIAAACIABAEIgRAHIgFAAIgFACgAghgCIATgFIABAAIgCgFIgRAGIgBAEgAgVALIACACIAAAAIgBACIgDABIgBAAIgCgBIgDABg");
	this.shape_6.setTransform(203.6,441.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373737").s().p("AAABrIgEgBIgBgCIhGghIADgEIAGgLIgRgrIADgCIAjA6IAAgBIAagMIADADIABAAIAAgCIAJgEIgDgBIAYgMIgKAIIAJgDIALgJIAGgCIAAgHIgJAIIgDgEIAAAAIgCgBIAAAAIgJAKIgLABIgEAEIAAgCIABgBIgEAAIACAAIABABIAAAAIgDADIgFgEIgCAAIgBAAIgGADIAPAHIgKAEIgLgJIAGgCIgMgGIAAAAIgDgBIgBABIABACIgTgBIABglIgYgUIACABIAIADIAEAGIAFAAQAFACAAAEIAAAEIAGAGIADAAIAGAIIAQAPIAAAAIADADIAJgEIALgJIgVAKIABgCIAAAAIgCgDQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBIABgBIgEADIgLgSIAFAAIgFgCIADgEIAAgCIgBACIAAgCIABgGIAAAAQgFgGgCgCIgBgEIAJAAIABAAIAAAAIgBAAIgCgBIADAAIAAgCIgBgBQgEgCgDgDIAAgBIANgLIgWgBIAFAHIAEAFIgPAMQgFgEgHgEIgBACIgGgEIgDgPIAcABIg6hCIBjA0IAAAAIAAAAIAfARIgTAAIAJAIIgGgBIADADIADgCIAPAAIAAABIAEABQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAIABABIAAgFIgNgHIAOABIAAgLIABAAIABAAIABAAIAAAAIgBALIAHAAIgGgLIAAgDIADgBIAIAPIABAAIgHgNIAAAAIABgBIAFAIIACgVIAAAAIABgBIABABIABABIAGACIAeBCIAFAHIAJAMIhnBRIAAAAIgDABIgBAAgAgdBMIAEABIAEgDIgEgBgAgTBFIADAAIADgCIgCABIAAgBIgBAAIgBAAgAAlAmIgDAHIAAADIACgBIACgDIAHgNIAAgCgAAiAZIAAAEIAMgJIgDgCgAAqAdIADgCIABgGgAgRAXIABABIACgDIAAAAIABgBIAEgBIAKgJIAAgBIgDAAIgBAAIgMAJIAAACIgDABIAAgBIAAABIgDgDIgCAAIADAEIACgBIABABIAAAAIAAAAgAA2AVIADABIAAgBIABAAIgBgCIABgFgAA7AGIgFAEIAAADIAEgDIABgBIAAgEgAACAMIAAABIAIgDIgCAAgAgOAKIABACIABgBIAIgEIAAAAIAAgCIgBAAIACgBIAAACIAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBAAIgBgCIgCACIAAgBIAAABIgEAEIgBgBgAADAGIABABIAAAAIAAAAIAAAAIADgBIgCgDIAAgBgAAggCIAAABIAAgBgAAXgHIgBgBIAFgDIAAAAIAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIAAAAIgCgCIgBAAIADAAIAAgCIgEAAIABACIgGgBIAAgBIgBAAIgCABIADAAIgBAHIACABIAEABgAgSgLIgBAAIAAAAIABABIABgCIAAAAIAAAAgAgVgOIAAABIACAAIgBgBgAgWgNIAAAAIAAAAIAAgBIABAAIgBgBIAAABIAAAAgAgNgRIACAAIgBABIAAAAIABABIABACIAEgDIAAAAIAAgBIgBgBIgHgBIABABIgCAAIACABgAAOgZIAFACQAEACAFAEIABACIABAAIgOgNgAASgSIAAABIAFAAIgCgEgAgbgSIgBgBIAAAAIgCgCIgBAAIAAgBIAAABIABAAIAAABIACABIgDAAIAAABIAEAAgAgRgUIABAAIABgCQgCgBgFgBIAFAEgAgJgUIACAAIAAgDgAAwgVIABABIABgDIgFgEIgGgCIAAAFIAEACIACgCQAAABAAAAQAAAAABABQAAAAABAAQAAABABAAgAgPgUIABAAIAAgBgAAAgZQAAABAAAAQAAAAAAABQABAAAAAAQABABAAAAIADgCIgCgBIgBAAIgCgDgAgSgfIgFAGIAAABIABAAIAHgHIgDAAIAEgFIACABIABAAIgBABIgDADIANABIgFgFIAHABIAAAEIAIAAIgIgIIgUgBIgIAIIgHAAIACAFIAFgFgAAygeIABgGIgEAAgAgJA0gAggAuIgHgFIAEAAIADAFIAAAAIACABIgEACgAAWAjIABACIgIADgAgRAWIACAAIgBABgAgRAWgAASgQgAgngcIAAAAgAgKgjIgBAAIABgDIADADg");
	this.shape_7.setTransform(202.8,443.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373737").s().p("AgwAkIADgGIgCgBIBThBIAAAAIAFACIhaBHgAAbASIAVgyIgFgBIgCgBIADgCIAGAEIgCAeIgUAVgAApgiIAAAAg");
	this.shape_8.setTransform(204.4,446.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373737").s().p("AA1AaIABAAIg1gvIABgCIA4AyIgEgBIABACgAg2ASIA5gtIgCAEIABAAIg2AqgAg4APIACADIgBABQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAAAABgBgAg2ASg");
	this.shape_9.setTransform(201.7,439.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373737").s().p("AAAgCIABABIACADIgBABQgGgDAEgCg");
	this.shape_10.setTransform(195.2,440.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373737").s().p("AgFAAIgBgEQADABAKAIQgKgDgCgCg");
	this.shape_11.setTransform(206.4,441.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373737").s().p("AgKANQADgEADgBIATgEIAAgBIAFACIABACIgCgCIgBABIAAABIgYAFIgDABIgBAAgAAPADIgcgMIABAIIACABIgEACIgBAAIgDgMIgCgCIAHADIgBgDIAeANIgBACg");
	this.shape_12.setTransform(201,445.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373737").s().p("AgFAEIABgBIAEgFIACgHIAAgBIAEACIgHANIACAGg");
	this.shape_13.setTransform(204.4,445.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373737").s().p("AAGAHIgBgBIgGgGIABAAIgLgLQAGADAFAGIAMAOQgCAAgEgFg");
	this.shape_14.setTransform(205.8,448.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#373737").s().p("AJrVyIgLgHIgBgCIANAKIAHAMgAJeVoIgEgGIgSgUIgYgMIglgMIgkgBIgOAHIAGAGIABABIACAAIAHAEIgHgCIAEADIABABIAAABIAAAAIAAgBIgFgCIgCgBIgBgBIgBAAIAEAAIgCgBIgDgBIgCgBIADACIAAABIAAgBIAAABIAEAEIAGAJIgLgNIgCAAIgQgBIACAAIADgCIABAAIAJAAIABAAIgBgBIgBAAIgBAAIAAAAIABAAIgBgBIAAAAIgBAAIgBAAIABAAIgFABIgCABIgEgBIABAAIAIgEIhphbIgUgWIgegSIgTgPIgigUIgNgMIg1gZIgpgNIgDAGIgFAGIADAKIgOAuIgVAWIgEADIAEgFIgEAFIADgLIARgQIANgsIgBgFIgSATIACALIgNAjIgHAHIAEgEIgFAEIAQgqIgCgHIACAAIACgCIgFgEIABAGIgYASIgfAHIgKgBIgBAAIAGAAIgHAAIAZgIIAQgEIAYgSIABAAIgVgPIgXAlIgKACIgLAAIAFAAIgGAAIATgGIAWgkIgXgRIAKABIAQAMIAFgIIgCgFIAGgBIACAGIgHALIATAOIAEAIIAAABIAAAAIAAgBIABgBIgBgEIgCgCIABgBIgCgMIAEAKIAPgQIgFgQIAAAAIgdADIgCgFIAdgDIgEgMIgagYIgbgLIgJgBIATAIIASArIgGABIgQgnIgggOIARABIAAAAIgRgIIAcAEIAcAMIAdAZIAFAPIALAEIAJgUIgBgQIgBgBIAAgDIAAAAIgDgVIAAAMIgFASIACgKIAAACIAAgEIAAACIgEgYIgZgeIARAKIAOARIgBgDIACADIgBgIIgOgJIgNgPIAXAOIgJgUIgQgRIgIgGIgBAAIgHgKIAAABIAAABIgBgEIgFgIIgCgBIAAgBIgLgTIAJAJIgGgRIgKgRIgNgQIAGAXIggAuIgfATIAOgMIgBgEIAOgIIAcgrIgIghIgEgCIgBgBIgCgCIgBAMIgFgQIgCAPIgGgUIAGAEIgBgCIACABIgDgIIAFADIABgPIgNgJIgEgKIAHAFIgGgGIARAMIAGg9IhaAWIgGAAIgEAEQgEADgBgBIgBgCIAAgEIgBgCIgCgBIgBgCIgBgGIgKgZIgRgSIgFgDIgcgwIgIAGIgBABIAAAAIgBACIgCAGIgcA6IgYAAIgJADIABgDIgNAAIAJgEIABgEIgKAAIAMgFIAVhUIgGgGIgVgGIAEABIANgCIAEAAIgVgGIAEAAIANgCIAJABIABAAIALABIAUAJIASAQIAFAIIAEgEIAXgdIAAgfIgCAEIgIAMIAJgXIgBgIIABgFIABAAIgCgDIAAAIIAAABIgGAOIgIANIAIgUIgCgbIABADIgBgFIAAACIgHgNIADAEIAMAUIgBgOIgIgOIADAEIACADIAIANIADgQIACgYIgGgfIgLgQIgMgEIgFAIIgNAOIgQAOIglAJIAQgMIgSAEIAlgaIACgQIAFACIABAAIABgFIgDgDIgDgBIAAgCIgHABIAHABIgBAHIgUgEIgGgEIAUAAIgMgDIgFgDIAYAAIACgMIgBgBIgaAAIAKgHIASAAIAgAUIACgGIACggIgDgPIAFgEIACgBIAAADIADAQIgCAjIgDAHIAIANIAsgKIATgkIADgTIABgFIAAgRIgCAJIgBgSIgBgCIgBAAIABgEIAAgFIgHgRIAGAJIgHgQIgBABIAAAAIgCgGIgBgBIgBACIADAGIgBAAIgDABIgBAAIgBACIgBADQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAIgFAKIgCgLIABgBIABgEIAAgFIACgBIABgBIAEgBIACgBIgDgIIABACIgCgDIABABIgEgFIgKgDIAGAeIgBABIgBABIgDAHIgHgpIAGACIgBgHIABAAIALAEIgHgHIgEADIgBAAIAAAAIgGgBIAAgBIgDgBIgPgIIARADIgBgGIgLgIIADABIAMAIIACACIgCgIIgMgJIAIADIANALIACACIgFAEIACADIACABIgCAAIABABIAFgFIAAgBIgDgDIAugkIgCAIIAAAAIgpAgIAKAMIABAEIANAEIANgJIAHgrIAAgDIADgDIACgNIABAUIgHAuIgMAIIAHACIAmg1IAEgTIAFgNIgIACIgLgFIgEAFIgYALIAGgJIgIADIAKgQIAFACIgHALIAFgCIAJgHIgCAAIgFgCIAAgCIgDgCIgCACIgOgFIgOgJIAMAFIgCAAIAFACIgDgCIAJAAIAAAAIALAEIgCACIAEABIABgBIADABIAFAAIgHgDIgBACIgDgCIACgFIgNABIgEgCIgOgJIAKAGIgBAAIAFABIgEgBIAZgBIANgVIglg1IAIACIAjAzIgNAVIAFAAIAXgUIAAgiIgygSIgGgIIA+AVIAAAyIABABIgBABIAAACIgBAHIAQABIAUgHIgHAFIAGgDIgHAGIALgDIgDACIACgBIACgCIACAAIgBABIAEgBIAAAAIAJgCIAbgPIAfg5IgFgGIgLATIgBACIgCAHIgCgKIAAgBIANgVIgUgXIAHAtIgDAIIgJgyIAEgEIgEgEIABAAIANgfIgFgWIgKgVIhCABIgMAHIgDABIgFgCIATgKIBFgBIAFAIIgCgIIgWgZIgRgQIgIgMIgDAJIgGAIIgCAMIgGgCIAAABIgKAHIAIgIIgCgBIABAAIAAgBIADAAIADgEIgBACIACgCIAAgBIgBABIABgCIAAgDIgHAJIgBgBIAEgFIgBACIACgDIgBABIAGgOIgCALIADgEIACgEIAAACIACgCIADgNIgCgDIgBAAIAAABIAAgCIgCgDIAEgYIAAgBIgCgHIgDAPIgBgNIABgCIgBAAIAAACIgCAMIgBgOIADAAIAAgCIABAAIABgDIgDgDIAAgGIAAAAIgCACIAAABIABABIABACIAAABIACACIgCgCIABAFIgDAAIgBgJIAAAAIABgCIAAgBIgBABIgRALIAEAAIgEABIgBAAIgDACIAEgCIASgBIAAACIgjABIANgCIgNAAIAPgDIATgMIAAAAIAAAAIAAAAIAAABIAAAAIAAgBIAAAAIAHgKIgCAEIADgFIAAgBIAAgBIAAgCIABAFIABgDIAAACIAAAAIABgBIAAgDIgBACIAAgBIAAgBIABgEIAAAEIAAgCIAAAAIAGgfIhLAAIgQBwIBDAUIgCACIACAAIgIAGIAGgGIhCgTIARh2IBPgBIgIAqIADAPIgBAHIACgBIAOgFIgNgBIAIgCIAJAAIAHgDIgQADIgHAAIAdgGIgGADIAHgCIgLAGIABAAIAggEIAXgXIADgDIgLAHIARgRIgFAIIgBACIAFgDIAQgPIAPgbIAEgiIgQgiIgfgWIgngEIgOAHIAAABIAPAMIAGAeIgDgHIACAHIgGgPIgEgGIABABIgCgDIABACIgDgDIAAAAIgDgDIADADIgJgGIADAAIAGAEIADAEIAGAHIgBAAIACACIgDgQIgPgMIgBgBIgJAEIABAAIgDABIACgBIgEACIADgCIAJgFIgMgKIgNgDIgGgCIAAgBIABAAIAHACIAMACIAMALIAAAAIABAAIAOgHIAoADIAgAXIAQAiIgDAjIgPAbIgRAQIgGADIgBADIgYAXIghAFIgEAAIgQAHIgEABIgCAJIAFAQIgDAPIAAAAIAKAQIASAPIAWAZIAGAaIAUAnIgEAqIAKALIgiA+IgRAJIgMAGIgIACIgTAHIgEADIgcAIIAAACIgGAOIgEAUIgqA6IgOgFIgIAFIAMAXIgDAMIAFALIAAANIgBALIgEAUIgEAJIgBADIgPAcIgtAKIAJAPIAHAgIgBAaIgGAaIAAA2IgYAfIgHAFIAcAvIAEADIATATIALAbIABAJIAAAAIABACIADgCIACgBIABgBIABgBIAFAAIBigYIgIBKIACABIAIAfIABABIAWAbIAKASIAIAWIABAFIAAABIANASIAZAZIANAdIADACIAEA8IgJATIApANIA2AaIANANIAiAUIASAOIAfATIAUAWIBpBcIAQgJIAlADIAkAMIAZANIASAVIADAGgACQRqIACgCIACgFIgIgCgAA1N0IADACIgCgKgAgwMtIAAABIAAgBgAgqMtIAOgCIgHAAgAi6MLIAEgBIgEAAgAigMGIgHAEIAGAAIADgGgAilMBIgLAHIAUgJIAVgqIACgHIgBABIgMAKIARgWIgDAGIgBAFIAEgEIAJgHIgFgIIgHgHIgBgBIgIgFIgJgFIgJgDIgJgBIgBAAIgBgBIgCAAIABABIAKAIIgXBWIAbgLgAhfJ4IAAACIABgFgAiLIUIgZASIASgEIASgQIAIgKIAEgFIgOgBIABABIADAGIgGgHIACAAIgCgHIAEAAIgGgGIgBgDIAAAAIAAABIABACIACAGIgEAAIAAACIAEAFIgFAAgAhqH/IADABIgCgDgAh8H8IALAAIgIgCIAJACIACgEIgTgLgAiMHmIACABIADAKIABgHIgEgDIgCgFgAgwFvIAFAHIgCgGIgFgCgAgkF1IABAAIACgBIgEgBgAg+FeIAAAAIABAAIACgCIgCgBIgCgCgAAWEXIgCADIAGACIAJgCIABgHIABgDIgCABIgGAFIgEAAQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAgAApEYIARgFIgPgEgAAKEVIADACIACgCIABgBgAAHENIgCADIAOADIAEgBIAHgFIAGgGIADgHIAAgFIgVASIACAAIgDABIABgBgAArEPIAQABIgBABIAEAAIgDgBIAEgBIgTgFgAA/EPIADABIADgCIADgCgACOB5IgNAeIATAWIAEgjIgMgXgABMAHIACAEIADgLIgDgJgABLgdIABABIABACIABAAIABgHIgCgIgABGgmIABAEIABAAIABACIADgQIAAgBIgBAAIAAAAIgGAKIAAAAIABAAgAB3SNgABrRpIACgDIgBAFgABQRlIgJgGIAOABIAMgBIACAFIgOACgABnRegABVQzIgBgCIAFAEgABlPWIgRgcIAQAPIAAAAIACANIAAALgAAUPUIgJhUIgQgJIgIAAIghAQIANgNIAHgEIgZAMIAOgNIATgKIAagHIAbAGIADAIIgDgBIgJgDIgCAAIgQgDIgWAFIAKABIATAKIABAHIABABIgBgBIAIBOIAAABIABADIgRALgABkPJgAAmNrIgDgBIgIgXIAGAGIgFgGIAHAFIAHAVgAgjMyIAHAAIgNACgAg3MvIgBgBIACACIAAABgAihKtIAAgEIAJALgAihKtgAiLIUIADgDIgDAGgAjOHzIgMAAIAagVIAbAAIgLAHIgOAAIgQAOIAAAAIAZAAIADAAIAJAFIgtABgAi6HyIAIgGIADABIAJAFIgPABgAimHygAiyHsIgGgCIAIgFIAJAAIgLAHgAilHeIA6gmIABAFIAAAAIgzAhgAhqG9gAgkGZIgHgQIAIAMIABABIADAHIAAADIgEASgAg2GJgAhIFmIgQgIIAVAFIABAGgAAYDzIACgDIAAAGgAB6CaIAAAAIABAGIgCADIACgEIgDAEgAB5CDIhTgrIADgBIBRApIABABIAEABIABgGIABAHIgCgBIgFAVIABABIgBACIAAgBIAAgCIAAgBIAAADIAAABIgEAEIgBABIACgCIgDAEgAB7CYgAA7AtgABJAbIABgCIgBAEgABGgVgABKg1IAAACIAAAAIAAABIAAgBIgBACgAA3hnIAAgBIAAABgAgiipIABABIACADgAg2i1IgEABIADgCIAAAAIgGADIADgCIgDAAIABAAIADgCIABAAIgBAAIABABIACgBIABAAIAGgBIAHgCIAAAAIgBgCIgHgCIgGAFIAAABIgBAAIAAAAIABABIABAAIAAAAIgBAAIgCAAIABgBIgBAAIgBAAIgBAAIACAAIgDgCIADABIAGgFIgHgBIgWAHIgGAAIAcgJIAJACIADgDIgVgfIgcgYIgKgCIAAAAIACACIgCgBIADADIgFgDIAEADIgRgHIAKACIgKgEIAKACIgLgKIgdgLIAAA7IgCgCIAAg6IgMgEIgTAAIAHAQIgCAUIgCgCIAAgBIACgRIgIgQIgLABIgNAGIACACIACAAIABABIACAAIgBAAIAYAYIgBACIACACIgDAQIgIAQIABgHIgDAHIAAgCIgBADIgBgSIACAAIgBgIIADAIIgCAAIAAAOIAJgOIACgRIgZgZIgBAAIgBgCIgDABIAAgBIgYAAIgRAXIAAABIgFADIATgbIg9gBIAAA9IgCAAIAAg/IBBABIAXgiIgWAPIACgDIAZgRIAJgOIgEgUIgSgTIgDgDIgEgGIAJAHIASAUIAEATIAJgNIgYgeIAAABIAAgCIgBgBIAAACIgBgDIAAAFIgIgQIAHAKIABAAIgGgLIAGAHIgBgIIgDgSIgIgYIgagjIgogEIABAIIAFAIIADAMIABAGIABAEIgEgIIgDgNIgDgEIAAAGIAAgBIAAACIAAgBIAEAFIgCgCIgCgCIAAABIACABIAEAIIACAJIgIgQIAAAAIgBgBIAAgCIgBgBIAAADIgHgGIgBgBIAAgBIgBgBIgBAAIAAgLIgFACIgBABIgBAAIAAAAIAAAAIAAgCIgBAAIAAAAIgKgiIADAEIAAAAIAAAAIgBgEIACACIAGAGIAJAKIABgIIAJgVIACgdIgJgXIgMgXIgOgVIgUgLIABABIAGAIIgHgIIACABIgEgCIACABIgEgCIABACIADACIAGAHIgHgGIABAAIgDgDIACADIgFgDIABgBIAAgBIgCgBIAAgBIAAgBIgBgBIgDAAIADABIgDAAIAEACIAAACIgBAAIACABIgUAgIgBADIAAgGIAIgLIALgTIgDgCIACABIgEgCIACABIgPgDIANAAIgNgCIAPAAIgIgHIgagEIgDAAIACAAIgDAAIgBAAIgBAAIgMgBIAIgBIgBAAIABAAIAKAAIAbAEIALAJIABABIADgYIgDgWIgLAPIADgIIAFgHIgBgEIgBADIAAAEIAAgDIgDAHIgFAGIAHgRIAAgNIABAFIABADIAAgIIABAEIADAGIADgfIgRghIgJgEIgEgFIAPAIIARAhIgDAkIAAABIAEAYIgEAZIAaAPIAaAsIAJAXIgCAeIgIAWIgCAHIAAACIAIAJIAAAAIAqAEIAaAkIAJAYIADATIAAAMIAZAgIAkgzIABB1IAeAMIAOALIAMADIAcAZIAWAfIAEgFIAbABIAJgDIAjACIgIABIAHAAIgRADIgRASIADgFIgEADIAFgKIACADIAIgJIACgBIAAAAIABgBIAEgBIgVgBIgJADIgagBIgFAEIADAEIAAAAIABAAIALADIARALIgFgCIgCgCIgKgGIgLgCIACAFIgDgBIABACIgFgCIADAAIABAAIAAgBIABAAIgBAAIgDAAIgEABIADAAIgIACIARANIACADgAgvi/IAFABIgCgDgAAMjEIABAAIAEgCIAAAAIgCABIABgBIgBAAgAjNk3IgCACIgaAkIAUAAIARgIIAKgBIgFgKIgDgFIgBAJIAAgKIgBgCIAAAJIgBgBIgIgTIAFAHIgDgJIAHAKIAAgNIAAgCIgHAFIgCACgAiXkVIgBhwIghAwIAIALIgRALIAAADIAAAQIAFAHIAGALIAUAAgAjMk7IAIgFIgBgEgAjElGIABAEIAAABIAPgKIgGgIgAksnTIAAALIAFAEIABABIgBgDIAAAAIgEgNgAkrnTIABABIACACIABABIgCgFIAAAAgAkonUIACADIAAAAIABACIAAgFIgDAAgAk1nRIAHgDIABgKIgQgRgAksnVIADgBIADAAIgFgGgAgginIgBgBIgGgOIADAAIgBgBIAVAFIAEADIgYgHIAGAQgABui0IgCgCIADADgAhUi3IAFgBIAUAAIABAAIABABgAgsi4gABji5IACAAIACABgABVi6IAAAAIgCgBIAAAAIACgBIACgBIADgCIgCACIADgBIADgBIgHAEIALABIADACgAgEjDIgVADIAHgDIAOgBIAKAEgAgGjFIAEABIgBAAgAj7j3IAUgQIAEAAIAAAAIALgBIACABIADAAIgCABIAWALIgSgSIADAAIAUAVIgFgDIAEAEIgdgPIgOABIgYASgAjYkNIAGgBIABABIgPAEgAjRkNgAjXliIgOgTIAGAFIAKAOIgTA7IgDACgAlHmwIABgBIAFgEIABgBIARgPIADABIgTAQIgBAAIgHAHIgNAFgAlImxIAMgWIgHgCIAEgCIAEABIACgDIgDABIgDABIgFgBIACAAIALgEIgCADIADgBIgCAFIAJACIABAAIAAABIgBABIgKgCIgNAWIgCABIgNAGgAkunHgAk2nOIABgBIAAABgAl1piIgPgUIgMgFIACAAIADAAIABAAIAHADIACADIACACIgBgBIANARIAAACIABACIgBgBIAAAVIgBABIgBAEgAlepogAlfprgAmMrfIgEAMIADgRIgBgGIgUgNIACAAIgDgBIABABIgZAAIAHgBIgIAAIAOgFIASgBIABABIgBABIgJABIgIAAIgHADIATgBIASALIAAgBIABACIABAAIgDgHIABAFIgDgGIgIgHIACAAIAJAHIACAFIgBgEIADAIIgCgEIABAEIADADIAAACIgDgCIABAFIgBAFIACgGIABgCIACABIgBACIgGARgAmFrkIAAAAIgBgCIABACIgCgCIAAgCIADACIgBgBIABAAIgCgEIgBADIgCgBIACgFIgCgGIgLgIIgEAAIgBgBIABgBIABAAIgBgBIAAAAIABgCIgBAAIgCABIgBABIAAAAIAAABIAAgBIgBABIgKgIIAAAAIAEACIAHAFIABgBIACgBIgBgBIAKgPIACgPIAAgBIAAACIABADIAAADIAAABIAAADIAAAAIAAABIgBADIgKAQIAHgEIAIgKIgCgJIgBgGIAFANIALgOIAEg1IgdghIgOgJIACAGIACADIgEgEIAAABIACAEIgSgUIAFADIgEgFIAMAHIgBgCIgcgjIgIACIAFADIALAcIgEgHIADAIIgHgLIABAAIgBgBIABAAIgDgEIAEAEIgHgQIgFgEIgIACIAAADIgCAHIgCAAIADgHIgBgDIgHABIADAIIACABIAAABIgFgBIAAARIgCAFIABgXIgQgGIAEAAIAMAEIAAAAIgEgGIACAAIgCgBIADAAIAJgCIgCgJIAAAAIgBAAIgBgBIAAgDIAAAAIgBAAIABACIAAABIAAABIAAAAIAAgCIgHgFIAAAAIgDgCIgWgCIAJADIACACIABAAIgBAAIAAAAIgEgCIACACIgRgGIAIABIgIgDIAfADIAEAEIAAAAIAEADIAAgDIABAAIAAABIAAgBIAAAAIAAAAIAAgBIAAAAIABgCIAHgTIgHghIgGAKIgUAQIAHgHIAAAAIgIAGIAGgGIAFgOIgKghIACACIgBgCIAFAEIAUAQIABAEIAAgBIAKgQIgGgkIgZgeIgTgQIgdgNIgCAAIANAKIADAWIAAADIABAHIgDAPIAAgDIAAgCIABgKIAAgHIgBgDIgCgVIgOgKIgEAAIgBAAIABADIAAABIAAAAIAAACIAAAAIABADIABACIgGgKIgDgCIABAAIAEAAIgDgHIgOgKIgcAGIgDABIgDAAIAGgDIAcgFIANAJIgFgKIgOgKIgZgMIABgBIgBAAIADgDIAHgQIABgBIAAAAIgHASIgDACIARAIIAVAPIAGALIABAAIABADIACAFIAJgBIAeANIATAQIAZAeIAHAlIgMATIAHAjIgHAUIAAABIAAAAIABAHIALAIIAKgCIAdAkIACAFIARALIAcAhIgDA2IgNAQIAFAPIgCALIAIAFIACADIgGgDIgEgCIgBgBIgBAEIAGANIADANIgFgLIABADIAAACIACAGgAmIr1IACADIAAAAIAAgCIgEgDgAmOsDIgHAEIACABIABAAIANAIIACgKIgEgNgAmit5IgCgHIgJgFgAnVumIAHgBIgIgGgAnuvaIgBABIAEgEgAnsvaIAMgKIAHgLIgBgFIgUgQIgDgDIAJAdIADgHIAAAFIABgFIgBAPIgCgGIgFAOgAoRwrIAAABIAAgDgAmLrkIAAgBIAAACgAmBrvIAIAEIgBgBIADADIgCgCIACADIAEAEgAmHrmgAmcr8IABAAIAAgBIABgBIABABIgCABIABAAgAmZr9gAmZr+IABAAIgBABgAmdsDIgFgBIgDgEIACABIgEgCIAKAFIAEACIgBACgAmNsRIADgDIgDAJgAmNsRgAmMscIAAgBIABACgAmLsfIAAgCIAAADgAnduJIAFgQIABABIgHAUgAnXuYIABgCIATAHIABACgAnXuYgAnuujIALgBIgHgJIgBAAIgFgHIhNAHIAAAIIgBABIAAgJIBNgHIACgBIAAAAIABABIAFAHIAAAAIAHAJIgBAAIABABIgIACgAniujgAnbuuIAAgBIABAAIAAABgAnauwgAnuu0IAAAAIABAAgAoXxBIACABIgBgCIgBAAIAAgDIADAGIgBgBIAEATIgBADgApwxSIADgEIANgUIgBgUIABgBIABAVIgNAUIgGAIgApJxXIABgBIACAAIgDABgAo5xaIAEABIgDAAgAo7xaIABAAIgBAAgAo5xaIgCgBIAGABIgEAAgApsxaIgDgVIABgBIADASIABgCIgBADIAAABIAAABIgBABgAo8xrIACAAIgDgBIACAAIgCgBIADABIgBAAIAPALIgBABgApXxrIAagBIABABIgeABgApwx7IABABIABAJIgBABgAplx6IABgBIAAgBIABgBIABgDIAAAAIAAgBIgCgNIABAAIACAJIAAAHIgDADIgBADgApjyAIAAAAIAAgBIAAAAIAAABIABAAIgCAFgApiyAgApkyOIAAgBIAAAAIAAABgApSydIACgBIgCACIAAAAgApRyeIABgBIgBACgApLylIgCAEIAAgCIACgCIAAAAIACgCIgBABIgDAFgApKyoIAAABIgBABgApHy0IAAAAIgBABgApI1hgApI1iIAAAAIAAABgApI1jIgBgCIABAEgApZ16IgBAAIAAgBIACABIgBAAIACABgApk1+IACABIAAAAg");
	this.shape_15.setTransform(82.3,212.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#373737").s().p("ABYCMIAGgcIgFgnIgWghIgJgHIABACIAEAQIgBgEIgEgGIgBgGIgCgEIgFgDIgDgGIACACIAEAEIgIgQIgJgIIgCgBIgBgBIgBAAIAAAAIgBgCIAAAAIgCgCIgBgCIgBgFIgTgnIgKgFIAGAQIgIgNIADACIgFgGIAAgBIgJgEIAKAIIAGAQIgHgOIgVgQIAMAGIgKgIIARAIIgBgCIgVgfIgEAhIgDACIgBACIAAgDIABgCIAFggIAAgCIgLgEIAHAJIgFgCIgGgJIgPgGIADAFIASAKIADAFIgDgFIADAEIgTgJIATAhIAAgDIAAAEIAAgBIAAAFIgBABQgBABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIgBAEIAAgNIgTgjIgXgMIABgBIAFABIABAAIANAHIgDgFIgCgBIgIgBIgGgDIABAAIALABIgOgHIgBAAIgFgDIAGABIAAAAIAAABIAFABIAAgBIgEgCIgBAAIgFgCIAGABIAAAAIAAAAIAFABIAAAAIAEABIAbASIABAAIAQAHIAXAhIADAGIAPAIIATAoIABAFIACADIAOAMIAGAMIACAEIACADIACABIAKAJIAWAhIAEAoIgGAbIgQAsgAhDhvIACABIgDgCgAA7ArIAAACIgNgWIACACIABABIAAABIABABIAIANIACAFgAgFgzIAAgCIABADgAhThvIAAAAIAAABgAhFiaIgHgEIgDgEIAJAHIAGAHgAhEiaIgCgCIADACgAhSikIABACIgBgBIAAgBIgHgFIAEABIACABIABABIAAABIAAAAIACABIABACgAhSinIAAABIAAgBIAAAAIAAAAIAAgBIACAEgAhei3IAEAEIAEAEIABADg");
	this.shape_16.setTransform(153.3,374.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#373737").s().p("AhyCUIAAghIAmgDIAJgGIgKgeIgDgEIADAHIgHgIIgFAHIgFAFIACgEIACgCIACgDIACgDIABgBIgBgDIABABIABABIAAgBIgBgCIABABIgFgGIACAFIgCgDIABAHIgEAJIgCACIABgCIgCACIAFgKIAAgLIABADIAAgCIAAgCIgBgCIACACIAAACIAAgCIgBgCIAAABIgBgDIADAGIAFAFIAAAAIABgBIADgSIgBgLIgBgEIgEgIIgBgDIgCgCIgEgIIgQgNIgKgLIgJgPIgEgDIgDgDIgFgEIgPgFIgKAAIgDgBIgBAAIAEARIgCgFIABAEIgCgCIABACIgCgDIABACIgDgFIgKgHIABAAIgDAAIgBAAIADgBIgCgBIABAAIgBAAIAMgBIABgBIAAgBIgGgPIgIgPIgDgDIgJgKIgKgHIgKgDIAAAJIAAATIgcAXIgBgBIAdgXIAAgSIgBgJIgrgGIgBgBIAsAGIAAAAIABAAIAKADIAHAFIAEACIAMANIAJAPIAFAQIAAABIAAAAIAEAAIAKAAIAPAFIANALIAKAPIAWAWIADACIAGAKIAFALIADAQIgEATIgBABIACACIAAACIADACIAKAfIAKgHIAFgiIAwALIALAGIAfgBIABAAIAPABIAAgBIAAgFIACgMIACgHIgCgOIABABIgBgCIAAABIgHgFIgOgQIgGgPIAAgDIgDgJIgEgDIAMghIACgDIADgGIABgBIACgBIADgFIAJgJIAOgtIAjgWIAPACIAFgCIAVABIAFABIARgDIALAFIAWgGIACADIAbgNIAMA9IAAACIABABIAAABIAAAAIAIgBIACAKIACAFIgCABIgDgFIgCgKIgIAAIAAAAIAAAAIgBgCIAAgCIgLg5IgYALIAfAuIgSAYIAFgIIgBABIABgGIABABIAIgMIgdgtIgMAGIABABIAKANIgIgIIgBAAIAHAKIgIgIIgOgDIAEgBIALACIgCgEIgDgBIgGADIgFgBIAIgDIgEgDIgFACIgDAAIgHACIgBAAIgJAEIAJgGIALgEIgHgDIgKABIADABIgGAAIgBAAIgCABIgCgBIgDAAIABAAIgCAAIABAAIgKAFIAJgGIgEAAIgQgBIgBABIAIABIgKACIAJABIgWAEIAHgEIAGgBIgSgDIggAVIgMAnIAPgPIAWgGIAZAEIAFAAIgHADIACAAIAFAAIgTAIIgBAGIgDgBIABgHIgGACIAIgIIgCAGIAPgGIgXgDIgUAFIgTASIgCAGIArATIAHABIAEAGIgDgCIgJgDIgugTIACgEIgGAFIgDAFIgBABIgHAKIgGATIACgEIABgCIADgEIgBACIABgDIABAFIAAAAIABgCIgBACIACgDIAHAnIgCgDIABAFIgPgMIAHAVIAPAPIACACIABAAIAEADIgCgCIACABIACACIAAAAIgCgBIABAFIAAgBIABADIgBgBIABAFIgBADIAAABIABgEIABAFIgCAGIgBABIgDAMIABAFIAAABIAMACIABAAIgFACIAFAAIgGABIAAABIgDADIAAABIAAgBIgBABIAAABIAAABIAAAAIgCACIABgDIgBABIAAgBIAAAAIAAAAIAAgBIAAAAIAAgBIgBAAIAAAFIgBgDIAAAEIAAgDIgBgBIAAAAIAAAAIAAAAIgBgFIAAgDIAAgBIgJAAIAJAEIgGAAIgDgBIgGgDIgIADIgBABIASAAIAFADIgcgBIAFgCIgGgBIAJgDIgaAAIAGADIgNgDIAHAAIgDgBIgEgBIACAAIgHgEIgtgKIgEAdIAcgVIAABJIgCgCIAAhCIgaATIgCAMIAAABIAAAAIABABIARACIACgBIgBABIAGABIgKABIgBAAIAEAAIgDABIgBABIAAAAIgBABIgBAAIAAABIAAAAIgBACIABgCIgBAEIAAgBIgCgBIACgEIAAAAIABgBIAAAAIABgBIgBAAIgGgBIAEADIAAAAIgDABIgFgEIgBAAIAAgBIgCgBIAAAAIAAACIACAAIAFAFIgCgBIgBABIABABIgEABIAAgBIACgBIgDgBIABACIgDAAIgBgCIAAgCIgEgDIgBAAIgBAAIACAEIgCgDIAAgBIgBAAIgKABIgNAKIgEAGIgDAAIABAAIAEgHIAMgJIghACIAAAfgAhABxIABABIgBgBgAhCBwIAAABIAAgBIABAAIgBgBIAAgBIgBAAIABAAIAAAAIABABIgBgBIAAgBIgBgBIgBABIABABIgBgBIgBABIgDACIAFAAIAAAAIAAAAgAhBBrIABACIAAACIABABIAFAAIABgLIAAgBgAA7BXIACgBIABgBIAAABIABgBIAAAAIABAAIACgBIgDgBIAAAAIgFAAIAAADIAAABIABgCIAAACIAAAAIACgEgAAcgMIABAEIAQANIgHghgAipgkIADAGIgCgOIgKACIAEABIgDAAgAipgiIABABIgCgDgAC2iBIAEACIAOgGIgBgBgAgsCAIAAgCIARATIAAACgAgtCTIgGgJIgBgCIgFgOIgkAKIAAgBIAjgKIABABIACAAIADAJIACAEIAAgBIABACIAAgJIABgCIABgBIABgBIABACIgBACIAAgBIAAABIAAgBIAAABIAAAAIAAAAIACABIABATgAgvCLIAAgCIgBgDgAgpB2IAAABIgBAAgAgkB0IAGABIgKABgAgsB2IAAAAIAAAAgAhZA9IgBgDIABADgACmABIgCAAIgBAAIAAABIAAAAIAAgBIABgBIgBABIABgBIgBABIAAAAIAAAAIAAAAIgBABIAAABIABgBIAAABIgDADIAAgBIACgCIgBAAIgBABIABgBIAAgBIABgBIAAAAIAAAAIAAAAIgBAAIAAAAIgCgBIgKgDIgIgEIgKADIgFAAIgIABIgFAAIgUgEIAJAAIgJgBIANgBIAPgMIAAAAIAFgDIgCADIADgDIgDAIIgBgCIgBgBIgBAAIgPAMIgCABIACAAIAHABIASgBIAHgCIAAgBIABAAIABAAIgDgBIADAAIgEgCIAMAAIgFACIAEABIgDABIALAFIAFACIACAAIABgBIAAABIAAgBIABABIAAABIABgBIAAAAIABgBIgBgBIACACIgBAAIABABIABAAIAAgBIABABIAAgBIABABIABAAIgBAAIgBAAIgBAAIACAAIgCAAIACABIgDgBIACABIAAAAIAnA2IAMggIAAAAIACABIgBAAIgNAkgAClAAIABAAIAAAAIAAAAIAAAAgAClgBIAAABIAAAAIAAAAIABAAIAAAAIgBgBgAA+AyIAAAAIAAgBIAAABgADvAjIABgBIgBgBIAAAAIAAgBIAAAAIAAAAIAAAAIAAgBIAAgBIABABIACgEIAAACIgBADIAAAAIAAABIgBABIAAgBIAAABIAAAAIgDAFgADxAcIAAgBIAAABgADbAXIAAAAIgBAAIAAAAIABgBIABAAIAAAAIgBAAIABAAIADAAIgBAAIAAABIgCAAIAAAAgADaAXIABAAIAAgBgADZAWIABABIAAAAIgDAAgADaAWIAAAAIABAAIgBAAgADbAWIABAAIAAAAIAAAAgADjADIAAAAIAAgBIAGgOIAAgBIg5gkIgHAcIgCAAIAAABIACAAIgBAAIAAABIgEAOIgBgBIAEgOIAAAAIAAAAIgBgBIgDgBIACAAIgIgEIAAABIADANIgDgEIABAEIgLgUIACABIAAABIADACIgDgCIAIAOIgDgTIgSgXIgVgKIgIgCIAAgCIAJACIAVALIASAYIACAIIALAFIAIgcIA6AkIABgBIABAAIAOgbIAHgSIAAgIIADgBIgBAJQgBAFgFANIgQAcIgCABIAAABIAIAFIABAVIgBAAIAAgCIgBgTIgHgEIAAABIgBADIgFAKIAAABIAAAAIAAAAIgGAQIAAABIAAAAIgCAAIgBABgADrAQIACgBIAAAAIAAABIAAAAIgCAAIgFACgADyAOIABAAIABAAIAAADgADGgBIgTgEIgBAAIgCgBIACAAIABAAIADgBIgBABIASAEIAAAAIAAAAIACABIABABIAGAIgAChgEIACABIAAABgACjgEIAAgBIAAAAIAAgBIABACIAAAAIABABIgBgBIgBABgACjgHIAAABIAAAAgACjgGgACGgKIACAAIACABgACsgUIABAAIAAABgACpgUIAAgBIADABgACUghIAAAAIABABIAEADgABqgoIgBgBIgBgBIgFgHIAEgWIAEABIgDAJIAAABIgCAKIAIAKIABABgABfg1IAEAEIgBAEgABrhGgABkhIIgBgCIAFABIgBACgABohJgADbhLIAAgBIABAAIAAABgACkhrIgBAAIABgBIgBgBIgBAAIAKgLIAEAAIgCACIgIAJIgCABIABAAIAAAAIgBABgACkh8IALACIgDABIAAABIgHgCIgKAFgACwh4gACSiCIAFAAIADABIAGAAIgOABIgJAEg");
	this.shape_17.setTransform(188.9,451.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#373737").s().p("ABiBoIgCgDIgEgJIAAgBIgJgFIAAAAIgSgFIABABIgfgcIgOgKIgygWIgHgHIAAgIIADgFIgBABIAHgDIgBABIACgBIANAAIAJAAIABAAIADgFIABAAIgDgMIAAAAIAAAAIgGgGIgBAAIgPgGIAAAAIgFgEIgDgFIAAAAIgGgOQgDgFgIgHIgVgXIgNgKIgPgGIAPAGIANAKIAWAWIAKAMIAHAPIgBgBIAEAGIAAAAIAFAEIgBgBIAQAGIAAAAIABABIAGAFIAAAAIABABIACAKIABACIgCABIgEAEIAAAAIgYACIgFACIAAgBIgBABIABAAIgDAEIABAHIAHAHIAwAVIAPAKIAfAcIAQAEIAAAAIABABIAIAEIABABIAAABIADAJIADADgABgBmIAAgBIAAAAgAgiAQIAAgBIgBgBg");
	this.shape_18.setTransform(341.8,577.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373737").s().p("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gBgCIgCgCIgDACIAAAAIAAAAIAAADIAAACIAGAIIAAgBIABgHIAEAMIgBgBIABABIAAAAIABABIAAgHIACAEIAKAMIgLgIIgBgBIAKALIgLgIIAAACIAGANIABADIAEAFIAOAOIALAQIAGAGIgBABIAJAKIgLgFIAAAAIgJgKIgCgDIgIgLIgLgLIgEgGIgDgDIgHgTIAAgGIgGgIIAAACIgBAOIAJAUIACADIAIAKIAKAKIAIAMIABAAIAAAAIgBgEIgEgCIgBgDIAKAKIAAgCIgBgDIgEgDIgBgDIAMANIgCADIAEAFIAAgCIABgCIAIAJIgIgDIAHAGIgIgDIgBACIADAWIATAOIAEABIAAAAIgBgBIgFgHIAIAIIgDgCIAFADIgEgBIAMAOIABAAIgEgGIAIAGIAEABIgCgDIgFgHIANAKIgFgBIAEABIgCAAIgDAAIABAEIADACIgCgBIABABIAAAAIAAAAIACAGIAAAAIABABIACAFIANAQIAAAAIABAAIgBgDIAEAFIAEABIAAgBIgBgEIABADIgCgGIAOAOIgMgGIAAADIAJAJIgFgDIATAhIAEAEIAEACIAEANIANANIAKAHIAAgBIABgDIgBgEIABACIAAACIAAADIAAABIABgEIACAHIgDgDIAAAAIACADIABABIABACIgCgDIgDgDIgDAGIAAAAIABABIABACIgCgCIgCAEIAAABIgDgIIgBgBIgBACIAAABIgBACIAGAEIAAAAIAAAAIg2CWIgCDcICGAAIACABQACACgCAFIAPChIAGgFIgDAGIgCACIAAADIACgFIAFgEIgHAOIABADIALgKIgKAWIAAADIgBgPIgEACIgEAKIAAADIgBgHIgCAEIAAAEIAAgHIACgCIgBgLIgCAFIABAIIgHAFIAAAAIgmAfIBlAOIAEAJIADAUIAFAMIAKALIAOAGIADABIABAAIAHABIACAAIAGAIIgBABIgFAAIAEACIADAAIADADIAEABIgEgFIAJgCIgDAAIACAAIgEgBIAAAAIgBAAIgDABIgCAAIAAABIACABIgCABIgBAAIAAgBIgBgCIABAAIABAAIgDgGIgCgBIgCgBIACgBIgEgGIAFAGIADAAIABAAIAFgBIgEgGIAEADIAGACIgCAAIADAAIgHABIADAFIACADIABAAIgBAAIABAAIAAABIABABIgCAAIACAAIABAAIAEAFIAIgJIgDAEIACgDIgFALIADADIAAAAIgFAGIAAADIgBgBIAAACIAKAJIgCAIIAAAAIgBADIACAGIABADIAGAPIACAEIAIAIIgCgDIADAFIgBgDIAJANIgBgBIgFgEIgBgBIAFAMIgBgCIABAFIAAgDIAAAHIAFAMIABACIABADIABAEIABAAIAAgCIABACIgBgCIAAgDIACAFIAHAAIAAAIIAGAFIACABIAAgFIACACIAAAEIgCgBIAAAJIABABIgBAAIAAAHIAWADIABgBIgCgBIgTgCIAAgPIADACIgDgGIAAgLIAAAAIAJAEIAAgFIAAAAIgBAAIABAAIAAgEIAIAEIABAAIAAAAIASAJIAJgJIAKAAIgNAMIABABIANgNIAIgBIgQARIAEABIAFgGIgGALIAGACIAAAAIgGgCIgCADIgHgDIgDADIAJABIABgBIAHADIABgBIACAAIADgFIgEADIgBAAIABgBIgBAAIAIgIIgDAGIAFgFIgGAKIAAAAIgCAAIgBACIABABIACgDIAFABIAIgIIgEAHIABgBIAJgCIAEgCIAGgDIACgBIAGgFIgJAAIgWgKIAFABIgGgCIAIgFIAQAIIAOAAIABgCIgOAAIgQgHIAJgGIAJAEIAQAAIAAgCIACgGIgDgLIAAgBIAJgGIADATIgBAEIAAAAIAAACIABAAIAAgBIABgBIABgEIgEgUIABgBIgBgPIACAEIgCgFIAIAMIAEAZIgBAGIgBAAIAAACIAJAFIALgFIAYACIASgFIAPgMIAKgPIADgMIABgEIAAgEIAAgFIgCgKIACgGIABgDIAAgDIACgJIgCgLIgWgMIgTgSIgCgLIgBgBIg3gNIAphJIAhgJIATADIgDAAIABAAIACAAIABAAIgIgRIAIADIACABIAAAAIAHABIABAAIgFgKIAAgBIgGgMIAGADIAQADIAKAGIADgFIgBAHIAFACIAAAAIAAAAIAJAGIACgDIAAAEIgCgBIgCABIgCAHIgBABIAAABIABAAIABABIAEAAIABgKIABABIAFANIAEACIACAKIALAEIABABIgDABIgJgFIAAABIADAFIACACIAEgBIACgBIAJAEIABAAIACACIAGgEIAFgGIAHAGIAGAGIABABIAAAAIAHAKIgVACIAAAAIAAAAIgSADIgBAAIgPACIgBABIgEAIIAFAAIABAAIASgDIAPgLIABACIAFAHIgVACIg+AtIABADIAEAQIAAAGIABABIALAEIABAAIADAFIAFADIACABIgCgDIgBgFIgCAAIgDAAIgCgBIAAgBIgCgDIACACIgDgEIAKAFIAAgEIgBgCIAAgPIABgEIABgDIABgHIAFgJIgFAVIAQAdIADgBIgDgEIgBgHIAAgOIABgBIABgIIACgDIACgDIgDALIAJAPIAigNIgCAIIgBACIgCAEIAXgJIgDAIIgBAEIgKARIgUAUIgQACIALALIATACIAEAAIADgBIALgCIACgBIAIgDIADABIANADIACAAIADAAIADgBIACAAIACAAIAGgCIABAAIACAAIAAAAIAAgBIAAAAIgBAAIAAAAIgBgCIgBgCIACACIgBgBIADACIAAABIABABIAAAAIgBAAIAAgBIgBAAIABABIAAAAIABACIAAAAIgBgBIAAARIACAOIAUAdIAdAGIAXgKIB3hLIAJgDIAJgCIAIABIAFACIAAABIABADIACADIALARIADgNIAIAYIgJgIIgCgDIgBAFIADAJIAcgDIgUANIAAAGIAWgDIgRALIABAXIAIAGIgSgIIABAFIgBgEIAAAIIACAHIAJAHIgIgEIAAABIAEAGIABABIACACIARARIAQAKIADADIAIAKIARAfIAMARIAKAMIACACIgBgCIAEAGIgDgEIADALIAKANIAYAJIAIAIIADAEIACAFIABACIABABIADAGIACAEIADADIASAOIAJAPIAOgDIgBABIADACIAMgDIAJgFIAIgCIAAgDIAPgJIAAANIggAGIgLAIIACAFIgBgDIABAIIACAOIAAAPIgHARIAAAAIADgCIAagaIAgAiIgPAFIAFAFIgbAJIAEAJIgJgDIgCgDIgDABIgDgGIgBABIAAAGIAEgBIAKATIgNgEIgLgNIgBgBIAAABIgFAIIgCANIAAADIABANIAGAVIASARIAaADIAOgIIAAAAIACAAIAAgBIAAgBIgBgNIABADIACAHIAHAEIAGAAIADADIAGgEIgJABIgBgBIAAgLIAAABIAAAAIABAAIAQAMIgFgBIAdAKIAPANIALAOIACADIAEAHIgNgCIgDABIgBgCIAAAAIgbgFIALgDIANAGIgGgIIALgDIgOgFIgBAAIgDABIAGAGIABABIgHACIgLgEIALgFIgDgCIAAgBIAGACIgCABIACgBIAAAAIAAAAIgHgDIAAAAIgBAAIAAAAIAAABIgBABIAAgBIAAgBIAAABIAAAAIAAABIAAAAIAAAAIAAABIgBABIAAgCIgGAGIgBABIAAABIACAGIgHgCIgCADIgBAPIgDgKIgIAVIADAIIgHgNIADgbIABgBIgIgLIgOAJIgEAZIABAEIADAOIAFAOIACADIAUAbIAFAKIACADIAGADIAGABIAaAEIAMADIAIAJIAFAKIABBJIAJASIAVAyIAFAMIAJALIAHAHIANAVIAHAIIAMALIADAEIAAABIABgCIAAABIAAACIgBgBIAAAAIgIAXIAAASIADAOIAIAKIAdAcIAMAJIAIACIABABIALADIgBgGIAKAJIgIgDIgBAAIABAGIABADIAEAIIABADIAIAJIATAVIAEADIAAAAIAJAGIADACIAKAOIARAEIAmADQAJABANgDIARgEIAOABIACAAIgDgCIAHADIgEgBIAHAFIADABIALADIAdgEIAMACIALAFIAKAHIAvArIAUAKIBFAPIAJAEIAJAHIAbAdIAFALIACAEIARgHIAYgCIAEAAIgNAGIgBACIAIAAIAHAAIgIAEIgGATIABABIgBAAIAAAAIgCgBIAAABIgEgCIAFgWIgMACIgDABIgMAFIABABIAJAHIADACIADACIABAAIAAAAIAFACIgBADIAEAHIgBAAIgQgGIgNgLIgIAMIACAZIARASIA1AXIAKAHIAiAfIASAFIgBgBIADABIgCAAIACAEIALAOIAWAGIgBgCIgDgEIAMAIIgIgCIACADIADAEIAKALIARAFIACAAIAGABIB9AqIAHAEIABABIgBAAIAAgBIACABIAAAAIAAABIAAgBIAAABIAAAAIACADIgBgCIAAAEIgBgDIAAATIABACIAEAOIADAEIAGAGIABADIADABIAmAdIAcARIAWATIATAGIAMgGIASAGIAQgBIAQgFIAUgCIAUgKIABAAIABgBIACgBIAEADIABAAIgBAAIAAABIACABIAFABIAEABIABAAIABABIAFABIAPAEQAOAEAGAAIAUAAIAQgBIAIgCIACAAIAAAAIgBgCIAEAAIABABIAAAAIABACIAAAAIABABIgBAAIACABIgCgBIAVAoIAaAMIAmgCIACABIgBgCIAFADIAAgCIAAAAIAAAAIACACIABAAIABABIACACIgCAAIACAEIAAABIAAAAIACAEIAOAVIAeAEIAbgCIACAAIAEABIAAAAIABABIgBgBIABAAIAAAAIACAAIgCAAIACACIAOACIAPgDIAKgJIgBAAIADgCIgCACIAqgZIAoggIACgBIACgCIASgQQADgEAGgCIAIgCIAIgBIAUgFIALgRIABgGIABAAIABgBIAAAAIAAAAIAAAAIAAAAIgBAAIAAAAIAAAAIgCgBIAAABIABAAIABAAIgBABIAAABIgGACIADgCIgDABIADgEIABAAIgCAAIAEgBIABAAIgCAAIAFgFIgCAEIACAAIAEAAIgGACIAAABIABAAIAAAAIgBABIAAAAIgCAHIgLARIgVAFIgHABIACgBIgEABIACAAIgIACQgGACgDADIgUATIgCABIgDACIABgBIgDACIACgBIglAeIgoAYIABgBIgBABIgBAAIABAAIgBAAIgCADIgCABIgCACIgFAEIgPAEgAWFWFIACAAIABAAIAAAAIgBgBIgCAAgAUfV4IABAAIAAAAgAMMQgIAFgBIgBAAgABMGrIAAgBIgBgCgABmGBIAAgBIAAAAgABcF9IAJADIAAgBIAAgBIAAAAIAAgBIgBAAIABABIgKgEIAKgDIAHgCIABgBIgDABIACgBIgSgEIgBAAIAAAAIABABIgBgBIACAIIAAABIAAAAIAAAAIAAABIAAAAgABQF3IADAEIAEABIAAAAIABgBIAAAAIABgBIABgBIgJgDgABQF2IACAAIgCAAgAAIENIgGAFIAFAHIAAgJIABgEgAAKEKIAHAOIAZgJIgRgSgAgBDMIABACIgBgCgAgGDFIAAAAIAAAAgAsNAfIADgHIgCAAIgCAFIgKgHIgDAAgAr9ARIADAAIAVgHIALgGIAIgHIAFgGIgBAAIgDACIgCADIgIAHIgKAGIgVAHIgCAAgAsjARIACgDIAFAAIgEAAIABgBIADgBIgDAAIAAABIgIAAIACACIgCAAgAsHAQIACAAIAAgBIgCgBgAsSAPIABgCIgEAAgAspANIABAAIgBAAgAsmALIADAAIgDAAgAsfACIABAAIgCAEIAEACIAGgFIgFAAIgBAAIgCgBIAGgEIgBgBgAtHAG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jpIACAAIAAAAIgBAAIAAABIACAAIAAAAIABAAIAAAAIgBgBIAAgBIAAAAgAoojoIAAgBIgBAAgAowjqIAAAAIAAABIABAAIAAAAIACgCIgBAAIAAAAIgCABIAAgBIAAgBIgCAAgAo9jwIABAFIACABIACAAIACABIgEgCIgBgEIgBgBIAAAAgAo/juIABABIAAgCIgCAAIAAAAgApGjzIAAADIABABIAFAAIgFgDIgBgBIAAgBIgBAAgAo+jzIACAAIAAABIAAACIADgBIACAAIAAAAIgFgCIAAgBIgCAAgApvjxIAJABIADgDIADgBIgBgCIgCADgAo+jyIAAABIAAgBIAAgBIgBgBIAAAAIAAAAIAAAAIAAAAIAAABIAAAAIgCgBIgBgBIABABIgBAAIgDgBIgBgBIAAACIAFABIABAAIABABIAAgBgAv9kUIAAADIACgBIABgBIABgBIAIgGIgBgDgAwMm5IAOCcIADgCIgNiPIAAgNIgCgDIiHABIADjnIA2iUIgEgDIg3CXIgCDqICIAAgAxatDIgBAEIADACIgCgGIABgBIACABIAAAAIACACIABgBIgDgHIgCAFIgCgCgAxttSIAPAPIABgFIgMgNIgBgDIgDgDIgBAAIgDgCIgBgDIgCgHIgDgEIgOgYIgIgEIASAfIADAFIABAAIACAEIgBgCIACACIADACIABADIAAABIADAEIgCgCgAxdtIIABABIAAgCgAxytjIAIAKIgDgGIAAgCIgDgCIgDgEgAx/uEIgMgMIgBAAIAAgBIgHgIIABAFIgFgGIgBAAIgJgLIgCgFIAAAAIABAAIgBgBIAAABIgHgBIAFAJIAQATIgBgEIACADIgCgGIAFAFIABAEIAGAEIAEADIgCgCIAJAEgAyluwIAAAAIADACIABAAIABAAIgHgFgAyruwIAEABIgGgFgAywuwIgDgGIgEgFIAKAHIgBgBIAFAAIgKgIIAEAFIABADIgBgBIgFgFIgLgDIANAOIACAAgAy1u8IgGgHIgEgBIgWgRIgDgZIABgGIgEgFIgBACIgBAJIAAAFIAAADIADAUIAXASIABABIADABIgEgFIgEgHIALALIgEgCIAFADIgBgBIAHADgAzav9IAEAEIABgBIgEgFIgBACgA0FxPIAAgCIAAAAIgBAAIgBgCIgCAAIADACIAAAAgA0SxTIAEABIADgBIABAAIgBgBIgBAAIAAAAIAAgBIgBAAIABABIgDAAgA0GxUIABABIAAgBIAEgBIAAAAIgBgCIgFgCIgDACIAAAAIABABIABAAIAEgBIAAABIgBACgAz9xbIABABIgBABIAAAAIgBABIgBAAIAAABIgBABIgBABIAAAAIADAAIAAAAIABAAIAAgBIAAAAIABAAIAAgBIAAAAIgBgCIABAAIABgBIAAAAIgBgBIgBgBgAz+xbIABAAIgBgBgA0BxcIADABIgBgBIABgBIAAAAIgBAAIAAAAgAY4XcIgEgBIADAAIABABgAWJWFIACAAIgCAAgAS+WDIAAAAIgDgBIACABIgGgBIANgCIgGADIACAAgAWHWBIADAAIgCABgAWGWBIAAAAIAAAAIABAAgAUZVyIACABIgCgBIAHACIAAAAIgBAAIAAAAIAAAAIgDABgANmSvIADABIgGgCIAAAAIAAAAIAAAAIgCgIIAKANgAMJRAIgBgBIADACgAMBQ9gAFhOKIgBAAIAAgBIgBgGIAAgBIABACIgBgCIAEAHIAIAEgABWGiIABgDIAAACIAGgCIgDAJIgBgCIAAACgABgGXIgDAAIAEgEIgBAEIAPADIgSAFgABvGaIAPgEIAAAAIADAIgABbF6gAADDzIACgEIgCAJgAAbCwIAAAKIgIAFIgXAFgAtEgVIAAgBIgDgEIAIAEIAAgEIACAAIAAAEIgCAAIAAAKgAr8gTIABAAIABAAgAtRgZIABACIAAAAgAtQgXgAr6gcIABgBIAAAAIAJgGIgDgCIgEgBIAfgVIgBgFIAAAAIAFAHIABACIgdAUIABAAIgJAHIAFABgAqpgbIgHgBIAOgDIgHAEgArpggIgGgDIAdgTIgBgBIAEgCIgBgMIACAFIgCgFIACADIAAgCIABADIgBgDIAHALIAAACIgBABIAAgCIgGgKIAAAIIAAABIgBABIgDACIAAABIABAFIgYAQgAm+hbIAAAAIABAAgAplheIABABIAAAAIAAABIgBABgAnihbIgCgCIgFgEIAGADIAGABIgFACgAjchvIADACIgDgBIgBgEIABADIgBgEIAGAHgAtwhzIAAgBIABADgAtuh0IgCgCIAAgBIAAABIAAACIgIgIIAAgBIAFgHIgBgBIADgEIAGgGIgCAFIgBAAIgFAGIACACIAAgDIAAACIAEgHIAEgEIgDAEIADgEIgGALIAAgCIgBAEIAFAEIAAgBIADgEIAGgGIgEAJIAAAGIgBgEIAAADIAAgBIAAACIAAgBIAAABIgEgEIgEAEIAAABIgBABIABABIAAgCIABAEgAtxh2IgBgFIABAFIAAAAIAAAAgAuIiOgAuQiXIABAAIACADgApyidIAAAAIAAAAgAp4iyIAAAAIABAAgAp3i9gAp1jIIAAAAIABAAIABAAIAAAAIgBABgAp1jRIAGAGIgEADgAvDjUIAAAAIACADgAvEjVIABAAIAAABgAvDjVIAAAAIAAABgApZjuIgCgCIAAAAIABACIgCgBIAAAAIgGgBIgBAAIgBAAIALgDIAAAAIABAAIAAgBIAAAAIABABIAAgBIABAAIAAABIAEgBIgBAAIABAAIAAAAIABAAIAAAAIAAAAIABABIgBAAIgBgBIABABIABAAIgBABIAAABIAAgBIAAAAIgHAEgApWjxIAAgCIgBAAgApRjyIAAAAIAAAAgApXjzIABAAIAAAAIAAAAIAAAAIgBAAgAodj6IABAAIATAIIACABIgCABgAoHjxIAAAAIADgCIgDACgAoHjxgApFj1IAAAAIACABgAoij6IgCgBIgBAAIABAAIgHgDIgBgEIAPAIIgHgBIAAAAIAEACgAv7kGgAxktjIgBgBIgBAAIgBgBIAAAAIgBgEIABADIAAgDIAFAIgAyKuJIgHgIIgBgDIAAABIABAAIABABIgBgBIAFADIABACIADAFIAAABgAyOuYgAyPucIABABIAAADgAygu0IACAAIABABgAzHv8IgFgDIgBgBIAAgCIgBgFIgFgDIgBgEIARATgAzxxJIAAgBIgCgEIABgDIAFgNIAGgHIgEAGIgCAPIADAKIgCgCIADADIgBgBIAHAHgAz9xQIABADIgBACgAz0xRIABADIAAACgA0HxeIgGgCIgBAAIACgBIARgEIgMAHgA5S0TIgFgGIADADIAEAEgA7a1sIAAAAIABAAgA7i15IAAgCIACAEgA7i19IAAABIAAABgA7i2MIABgCIgBAEgA7O2sIgKgYIAAgBIAAAAIAAgBIAAABIAAgBIAAgBIAAABIAAACIAKAYIAPAJIAAABgA7R3AIAAgBIABABIAAABgA7Q3JIABAAIAAgBIgBABIABgBIAAAAIAAAAIAAAAIAAAAIgBAAIAAgBIAAAAIAAAAIAAAAIAAgBIAAAAIAAgBIABgBIABgBIAAABIAAgBIAAABIgBACIAAABIAAAAIAAAAIAAAAIABABIAAAAIAAAAIACAAIgCABIAAgBIAAAAIAAABIAAAAIAAAAIgBABIgBAAgA7P3KIABAAIgBAAgA7Q3KIABAAIgDAAgA7R3MIAAgBIgBAAIAAAAIAAAAIgCgFIACADIABACIABAAIgBABIABABIgCAAgA7S3PgA7T3RIABABIAAABgA7O3RIAAABIAAAAgA7V3bIAAABIAAADgA7V3aIAAgBIAAACgA7V3bIABgEIABgDIgBAIg");
	this.shape_19.setTransform(262.1,468.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#373737").s().p("ACyNcIgDAAIABAAIAAAAIgBAAIgBAAIgFgCIAEABIgBgBIALADgACmNWIgBgBIABABIABABgACaNDIABACIABADIAAACgACcNGIAAgBIAAABIAAABgACaMwIABgCIAAgCIABgCIAAADIgBABIAAABIgCADgACwMYIgMgeIAAgJIgFgEIgCgCIAAgBIgPgUIgTgTIgGgUIgBgEIgCAAIghgIIg2guIAFgHIgBgBIgHgGIgGgTIgTgMIgNgMIgKgPIgJgPIgFgQIAAAAIgBAAIgMgNIgYgoIgJAAIgegQIg8hNIA8gaIABgFIALgZIASgPIABgBIgBgDIAFgdIAAAAIgRgMIgOgbIgUhCIAdgyIAFgBIAKhVIArAMIAHgSIAMgTIAFgHQADgEgBgEIgBgJIAEgHIAHgIIALgHIANgzIAOgBIAAghIAlgQIABAAIAOgYIAqgQIALAEIgEgbIACgDIgIgHIghg0IgLgdIAAgWIABgIIAAgBIgFgQIAFgaIADAFIAAgBIgBgGIAAgTIAAgCIgRABIgCgBIgFABIgtgNIgWgeIgKgZIgGgHIgBgBIgUgMIgDgDIgjAMIgtgFIgDgDIgLAAIAAgLIgJgKIAPAGIAAgEIAXAKIAlgkIgZgIIgkgLIAAgCIAnANIABAAIAXAHIAUgUIAAAEIgDADIADgBIAAgCIAEgEIAAAGIgIABIgNAOIAqAOIgBABIgrgOIglAlIAFACIgHAAIAAAAIAzAAIAIgEIgBgBIgMgEIARADIABAAIAAAAIABAAIAFgBIACgDIgIAEIgEgDIgMgFIAQADIALgDIgDAEIAIgEIgDAFIAKgCIgNAFIgDAFIgBAAIABABIATALIADABIgEgFIgHgGIAcAOIgRgDIAAAAIAQAIIgMgCIACADIALAaIAUAbIAmALIgOgKIAWAJIADAAIgVgOIATAIIAUgBIABgEIAKgYIAXgaIAPgFIAAAAIAGgCIACAIIADgBIAMAVIADgYIgHAAIgIADIgEgHIALgEIAJAAIALhPIABAAIB9gMIhJB6IALAOIATAHIAZgFIgDACIgIAGIgKAEIAZgFIgFADIgGAFIgUAHIgaAGIgcABIgdgMIgEABIgKAAIAAAAIAHACIgMAHIgNBZIAEAFIgFAAIAAADIAFAGIgGAAIABgGIgkgrIgDAHIABAZIAHAOIgEgFIgIgQIgDgJIAAgCIACgIIAFgIIABgBIgCgDIAAABIAAgBIgCgCIABgBIgBgEIgCADIACACIgGANIAAAHIABABIABADIgBAFIAAAMIgBgBIABACIAAgBIAJATIgFgGIgFgMIAAAMIAKAaIAgAyIAFAFIAIgOIACgEIAJgKIgHALIgCAQIAIgMIAIgJIgGAJIgCAVIAIARIgHgIIgJgJIAAgJIgDAHIgBgBIABABIAAAAIABAAIALAZIgGgIIgJgIIAEAaIAJADIAAAAIABAAIgBAAIADgGIALgSIgGARIABACIAEAAIgEAHIABABIABABIAAAAIAHgBIABADIADgDIACAAIADAAIAJgBIAQAEIgWAAIgEAFIgHgEIABAEIAFABIgBABIAhAUIAOgEIgSAKIgGgEIAAAAIgcgRIgCACIgCAAIgDAEIAEgDIADAkIAigSIAEADIASgFIg3AeIgBgKIgHAEIgEgqIgDAAIAAAAIgCgBIACgEIgIgBIAEgDIAAAAIgEAAIAAgBIgFAAIAAAAIABACIgDAAIgCABIAFABIAAACIADgBIgCADIAAABIABAAIAIAAIgGASIACAOIAKANIADgCIABAHIACACIgCAAIACANIgIgJIgNAHIgEgbIgHgIIAEgLIgCgMIAJgFIgBAAIAAgBIAAgCIgGAEIgCACIgBgHIgNAHIAKgJIACgBIAAgHIgNgFIgkAOIgNAXIAAAAIgkAPIAAAcIAtgCIAWAMIAHACIgNAEIgRgKIgOABIgJAAIgBAAIgJABIgBALIAAAAIAAABIAGAHIAAgEIAEgQIgBAMIAFAIIAlgLIADABIAHACIgrAOIAZAjIgLgEIAJAMIg7gUIgBgwIgHABIgLAnIADABIACgBIADgCIAFgEIgIANIADAAIAKgGIgWAhIABgLIAAgDIAIgNIgBgBIgGADIgCAFIABAGIgJANIABgFIgBgOIgDADIgGAHIgEAHIABAIQABADgDAEIgEAHIgMASIgBADIgGAPIAkALIAMAGIAdACIAQAGIgegCIgDACIAQABIAOAFIgZgCIAAAAIgCAAIACAAIgiAaIgBADIAAAAIAAABIgBADIAAABIAAgBIAAgBIgBACIABAAIAAABIgBACIAAAAIAAAAIAAACIADAPIAFAKIgLgQIgCgNIABADIABABIgCgHIgBAAIAAAAIAAABIABABIgBAAIAAAAIAAABIgBAAIAAAAIAAAAIgBgCIABADIAAABIAAACIADARIAGAMIgLgRIgDgPIACAFIAAAAIgDgLIABAGIgEgLIAAgCIgcgfIAGgRIgigKIgJBLIAggHIgXAMIAYgGIgWALIgBACIAAgBIgCADIACgCIgCADIAAgBIgBABIAAABIgBACIABgDIABAAIgFAUIAAgJIgCgKIgFASIABgHIgEgTIgBABIgbAsIAUBAIAMAZIAQALIAEgHIADgLIAAgBIADAJIACgHIAAgCIABABIAAAGIAMALIASAFIAcgKIgMAKIgQAFIAFACIgJAAIAEgCIgWgGIgJgJIgBgCIAAABIgBABIgCAHIABgHIgFAJIAdAWIAagVIAQgGIgqAiIgNgKIACgCIgCACIgEgDIAAAAIgPgLIgDAZIABgCIANgJIAAgBIgBACIgCAGIAHgEIAAgBIAAACIgJAYIAEARIAAgBIgGgIIgCgHIgBgBIAHgVIgHAGIgDADIADAMIAAAAIAFATIgBgCIABACIgCgCIAAAAIABAAIgBgBIAAAAIAAABIgHAEIAIAAIguAcIADgGIgHAEIAEgIIAAAAIgyAWIA3BHIAcAPIAFAAIgNgWIAMAOIgBgBIADACIAFAIIAAAAIAMAAIAJADIgBAAIANAAIgRACIgOAAIAWAlIAIAIIgBgEIABADIABACIADADIABABIgBgHIABAEIgBgFIAKAPIgEgDIgFgEIAAABIAGAQIAIAOIAKAOIADAEIAXASIAEACIACAGIAEAMIAHAHIACACIAVgcIgBAAIAFgoIACACIAAgBIARAOIARgLIgJAJIALgGIgMAKIgBAEIAoAiIgDABIADACIgNAEIgUAAIAAABIAAACIAAABIAGAJIgFgEIADAGIgIgGIgBAAIgZAIIgKACIgGgBIgGgBIgCgCIgBgBIgCgCIgBgCIgDAFIA0AsIAgAHIABAAIAAgLIAAgBIABAFIgCgIIAAAAIAAgDIgBgBIAGAEIAJAEIAXgBIAJgDIAKgHIgKAJIACgBIAKgHIgUATIgiAEIAGAYIAKAJIAKAJIAOAVIABABIABACIAEADIAAgBIABgEIAAgEIADgPIgBALIAAgBIADgJIgCAMIAAgDIAAAFIAAgCIABAEIABABIAAADIABABIADgDIAAgCIABgBIAFgFIgEAFIABAAIgBABIAAAAIAAAAIgCADIABgBIgCACIABgBIABAAIABgBIgBABIAFgCIADAAIgIADIgBAIIgBgBIABgGIAAAAIgDABIABAGIABACIAAAAIAAgBIgBACIgHgFIAAAHIAMAeIAQALIgVgkIAAgCIAXAnIgCgBIABACgACmLxIAFADIgDgFgACmLlIAAADIAAABIAAABIAAAEIgBACIADgCIAAAAIAAAAIABAAIABAAIgBgBIAAAAIgBgEIAAgBIgBgFIAAADIAAgDgAB1KdIAAALIAigEIAJgJIgIAEIgYAAIgLgFIAAAAIAAAAIAAAAIgBAAIAAAAIABABIABAFIgBgEIAAgBgAB5KaIgCgBIgDgBgAAjJuIAAAAIADAEIACABQACACAEAAIAGAAIAKgBIAVgHIgbgcgABaJtIAAAAIABgDIgBgBIAAABIgBABIAAAAgABGI/IgMAPIAAABIAaAbIACACIACgBIABAAIgMgQIAFgeIgCgCIAAAAIgCgBgABQJaIAKAPIABgFIABgBIASAAIALgDIglghgAA5JMIALgPIAIgFIgPgOgABRI6IAAAAIACACIAAAAIAAAAIAAAAIAAgBIABgGgABMI4IACACIACgBIgCgCgAgoIIIAAgBIAAAAgAhxFsIAjgWIgNAAIgNANIgHADIgBAEIgBACgAhiFHIgLAYIgBADIAFgEIABAAIgCABIANgOIAWAAIgEgFIgGgTgAgLCIIgBgCIAAgBgAhZB9IABAHIADgFIAFgEIgCABIABgBgAgOBtIACgDIgDgEIAAgBIAAAAIAAAHIABABIAAAAIAAgBgAgJBkIAhgaIgNgBIgCgBIAAAAIgCgBIgJgFIglgLIgFANIATAVIABADIAAABIABADIAFgUIACAPIABACIADgPgAALBCIgBAAIgBAAgAAohQIAAApIAqAPIgVgdIgFABIgGALIAEgOIABgDIgGACIgHANIAEgPIACgDIADgTgAA4g9IAAADIAAgBIABgBIgBgBgACjibIABADIACgCIAAgCIgEgBIgBABIgDgBIgBAAIAAAAIgBAAIAEADIABgCgACmicIACAAIADgCIAAgBIACgBIgHgDIgBABIAAAAIAAABIACABIgBgBIgBAAgABtleIgCAGIAgAoIANhXIg1AhIAAAEIAAAAIABgCIAJgHIADgCIgKAJIABgBIgCACIABgBIgCAEIAEAFIADgDIAHgGIADgCgABXlTIAAACIAIgLIAAAAIgFgHgABglmIgBgEIA6gkIAAgDIACAAIgBACIAEgCIgBAAIgCAAIAAgBIgCAAIAAABIgJgBIgNAFIgDAAIgRAIIgRABIAAAEIAAARIABAFIgCABIgBgBIgBACIACgBgABFmKIAAAAIARgBIABgFgABfmLIAPgBIAFgCIgJgBIgJgDgADemsIgCADIgbAQIgKADIAAAAIAUAIIAZgBIAZgFIAEgCIgXgJIgMgNIAFgHIgCgDIAAAEIgDgHIADADIgBgGIgBACIgGAIIgEgZIgBABIgIADIABgBIAIgLIgOAGIgBABIAHgKIgSAKQgDACgCAAIgSAAIgEAZIAYALIgHgBIgRgGIAAgEIgBAAIABAAIgBAAIAAgBIgBAAIABABIgBAHIAZAMIgIgCIgNgEIABABIALAJIARgGIAYgPIACgDIAAAAgABFmPIgCgBIgCAAgABhmTIALACIANgEIAGAAIAHgDIABgBIgBAAIgNAEIgNgBIgJgDgAB9m/IgUAXIgGAPIALACIAmgNIgMAKIAQgFIgFADIgLACIgBABIAUABIABgDIAIADIABAAIgHgGIgLgMIgJgSIgCgHgACempIAAgBIgCgBgACbmrIgBgBIgBgBgADfnQIgCAGIADAOIA+hpIhuALIgBAAIgKBIIAOAAIADgBIACgBIAUgLIAKABIAMgIIADgDIgJALIACAAIAGABIgBAAIgKAHIAAABIAAAAIAIgEIABgBIABAAIgEAFIAJAAIgFABIAGAAgAhRnWIALgDIgrAAgAiGnlIAHAIIAQgBIgXgKgAgynjIACAAIABAAIAAgBgACrL9IABgGIABABIgBAEIAAgBIAAACgAC3LoIgEAAIAGgBIAIAAIgHABIgGABgACYKfIAAAAIgBAAgAB/KfIABAAIABAAgABoKPIAJAJIABABIABADgABJJWIAEAFIgBAFgABNJbgAg8HVIgHgBIgKgHIgKgRIAKAMIAMAIIAOAEIAMAAIgRACIgEgBgAhKFBgAhTB9IgCACIgBABgAhVB/gAAdBOgAAKgUgACqhhIAFgDIABAKgABMiAIAAgDIAJgDIgJAGIAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgBABgACMiSIAAACIgIAFgACMiQgACUiaIAAgCIAEgBIgBADgACsitIAUgBIABAAIAQAEIgbABIgFAFIgEAAgACriyIAGgJIgFAOIgEABgACsitgABdlCgADmmgIAEABIACADgACfmxgACNnQIACACIgBAAgACPnOgAiSnxIAGADIAAADgAgcn3IAFACIgGAIIgGABgAiMnuIAAgZIgiAFIgIgXIAHghIgEgGIgGgfIAAgGIgDgDIgQgtIgkgSIgVgaIgFgPIAAgCIAAgCIgBgBIgBgBIgHgMIAAAAIgYggIAGg8IAIgHIABgDIACgHIAAAAIABABIAAAAIgCAHIABAAIAAABIgLAJIgFA7IATAZIgBgWIACADIgBgDIAQAnIgCgCIABADIgCgDIgGgFIAFAIIABABIACAEIAAABIAFAQIAVAZIAhAQIgIgVIAMgIIAAgEIgDgJIAFAIIACACIABgBIAhgXIgBAEIgdAWIAYANIAFgjIADgBIgHAlIAMAGIAXgEIgIAEIgPACIgMgGIgCANIgCABIACgPIgZgOIgBAAIABAAIgBABIgCABIABATIADAKIAWgCIgBACIADAAIAAgDIAIAAIAVgJIAJgCIgeANIgIABIgGAhIgCgCIAFgfIgVACIAFAOIALAPIAAAEIgGgIIAAgBIAAABIgIgKIgEgPIgFAAIAQArIAAABIAAgOIACAIIgBgGIADAFIAAgHIABACIAOAbIgHgFIAFAIIgDgDIgLgJIAAADIAGAeIADADIABgDIAMgXIgGAQIAAADIgEALIAIAMIABAJIgCgEIgIgLIAAgCIgGAdIAHAWIAegFIAAgTIAFACIABAtgAi1plIAIAGIAAABIgIgRgAjRqrIAHAVIACABIADgBIgDgKIgBgRgAjDq1IACgBIgDgCgAjHq3IABAAIAAABIAAgBgAkVrnIABADIACABIAJAJIgNgigAkbtHIAAAAIgBgBgAigorIgCgDIgEgXIAEgHIAGgKIgGAQIAFAfgAiyp3gAijqfIAHgBIADACgAkgslIANgcIAAgBIABACIAAAAIgOAdgAkRtCIAAAAIAAABgAkPtHIAFgLIgBAAIABgBIAAABIANgIIAFgCIgSALIgEAKgAkKtRIAAAAIABgBgAkXtKIABAAIAAABIAAAAgAkUtLIABgBIAAABgAkVtUIABgDIAAACIgBAFgAkctTIACACIAAABg");
	this.shape_20.setTransform(69.3,245.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373737").s().p("EAhJAR+IADgCIgFgBIgDgBIABAFIgBgCIAAABIgJgHIAJADIAAgBIgBgDIgDgGIgEgHIhIgVIhkgTIgQgEIgUgCIgFgDIABgBIADgDIgHgLIgBgEIAAgSIgCgIIgEgEIgQgQIgCgBIgJgGIgLgBIgFAAIgHABIgCAAIgCAAIgaAJIgCAAIgNAHIgGAKIgCACIADABIATAAIgCAIIALAEIgIAIIAQAOIgMgGIACAAIgEgBIACABIgDgBIgHAKIADgKIAAgBIABgDIgGAFIgCAGIgCgCIgQAPIAAABIgBAAIAAAAIAAAEIAAAAIAJAFIgHgHIgBgCIAHAFIACAAIABACIgFAHIAEAGIABABIADgNIgDgBIAFgHIADgOIAEADIAHAHIgBAAIABAAIAAAAIABAAIgBAAIAAAAIgJANIAAAAIgKAOIAJADIgCgBIgKAAIgGgEIgGAJIAAAAIgBgCIgHgMIg6ghIgBADIAAgEIgFgCIAFgBIAAgDIgEgDIgDgBIgGgCIgBAAIgCAAIAAAAIABAEIAKAGIgLABIgBAAIgBAAIgCAEIgBgCIAAACIAAgCIgBAEIAAgPIABgCIABAAIAAAAIAAgBIgBAAIgDAAIgEgCIgJAOIgBgBIABgDIgCAHIAAgTIADgDIgQgKIAGAAIgLgCIgVABIgPADIgCAAIAAABIAAAAIgQAEIAAAAIAAAAIgDgKIgFgBIABgBIgDABIACAAIgVAMIAFgFIAFgEIAGgGIADgBIgOgFIhBAGIgMAAIgMgEIgTgQIgDgDIgEgBIgRgGIgDgBIgYABIg2ASIghAEIgDABIgBABIgRAHIAAAAIgHgEIgNACIgCABIgBABIAAAAIABgBIgBABIAAAAIgCAAIgBAAIADAAIgIgBIABAAIgDgBIAAAAIAAAAIgQgYIgNgPIgFgBIgJgFIABAFIgLgIIgJAAIAAAAIAAACIABABIAEAKIgTgNIANAAIgCgHIgBgBIgCgDIgJgGIAFAAIgHgMIgRAKIAGAAIgLADIAFgDIgZAAIhHgRIgGABIgNAgIgIgXIACgGIgFAAIgEgMIgeABIgNADIgCABIAMAXIgRgKIADAGIgKgHIAFAAIgBAAIgCgBIgEgCIAAABIAAAAIABABIABABIgBAAIAKATIgQgKIAAABIACAEIgEgDIgRAPIACgSIAEgEIgDAAIAAAAIgBAAIABAAIgBAEIgSAQIACgSIgHAFIgHABIgIgBIgNgEIgLgCIADACIgGgDIACAEIgHgHIAFACIgFgFIgMgZIgRgWIgagFIgVAFIACAFIABAKIgBAHIAAABIgBAGIgCADIgBALIgPgRIABgCIABgEIABgCIAAgDIgBgHIAAAAIgGADIgGAFIgKgLIAAAAIgJAEIAFgEIgBAAIABAAIALgJIAJgEIgBgCIgKgIIgDgDIgOgDIgNAAIgLABIgSAEIgGgDIgmAlIgFgUIASgRIgLAAIgMgEIgBgGIgjgCIAAAAIgBAAIAAAAIAAgBIgBgBIAAACIgQgCIgCgQIAAAAIgTgyIgBgDIgEgEIgPgSIgEgBIgFgQIAAAAIAAgBIgNAAIAMgCIAAAAIgCgGIAJgKIADgDIAHgRIgJgYIgCgCIgVgWIAAgHQABgEgDgDIgCgRIgDgMIgEgHIgBgCIgCgBIgGgIQgDgMACgHIAFgsIgCgYIgZhlIgBgCIgCgDIgFgHIgBgDIgCgBIgCgCIgKAFIABgBIgEACIADgBIgGADIgPAGIgNgBIAJgSIgIgBIANgcIACADIAEACIgLAYIABAAIADgCIAGgCIACAAIAOgIIAAgCIgPgKIAIgRIAAAAIABABIAIAGIABAAIAHgKIgFgIIAHAFIATgcIgwAVIgEAIIAAACIAAgCIgCADIgMAMIgHAGIgEACIgEABIASgaIABAAIABgCIgCgCIACABIgCgCIgFgEIAAAAIABgCIABgEIAAAAIAAgEIAAAAIgBABIAAgBIgCgDIgfgCIAOgHIgPgEIAPgDIgBgBIAAAAIgFgHIgIghIgVAVIgFAAIACABIgCgBIAAAAIgGgPIgGAEIAFgFIgBgCIggAAIgRgGIgBACIABAAIAKAGIgTAEIAIgKIgBgBIgQgDIgHABIABgBIgVgBIgKgCIgWgJIgRgCIgdACIgOAEIgDABIgLAHIgFADIgaABIgPADIgCACIgDABIgLALIgCAEIgBACIgBABIgEABIAAABIgBABIgGAGIgdARIgPAMIAAACIACgCIAAAAIABAAIACgBIgFAJIAAgGIgEAEIgCAAIghAGIAjA4IhDgBIgIhCIgCAAIgGAAIgBAAIABAAIgGAAIgJAYIgLAKQgMAIgCADIgSAVIgBACIABgBIAEgBIACgCIADgDIAAALIABAFIAAADIgBAGIgDAKIgEAHIgKAJIgMAGIgOADIgOgBIgfgKIgVgDIgDABIgPAHIgCACIgGAKIgBACIAAABIgCAHIAAAAIADgBIgGAFIACgDIgMACIgBAAIgPAEQgKAEgEADIgWAVIgDACIgBAAIAAABIgkAdIgpAZIgBAAIgDADIgBAAIAAAAIgCACIAAABIgBAAIAAAAIABABIgBAAIgBAAIAAAAIAAAAIgBAAIAAAAIgBgBIgEgDIgBgBIgCAAIgFAAIgCAAIggACIgMgCIgEgGIgFgMIgNgMIgCgCIgUgEIgiABIgJgEIgHgJIgFgOIgJgOIgBgBIgLgJIgCgBIgBgBIgIgBIgDAAIgIABIgIACIgPACIgPAAQgEAAgKgEIgQgEIgHgBIABAAIgEgBIgGgEIgBgBIgDgCIgBAAIgCAAIgEgBIgBAAIAAABIgIABIgBAAIgBABIgYALIgRACIgQAFIgHAAIgPgFIgCAAIgJgBIgCAAIgIAFIAAAAIgCgBIAAAAIgTgRIgdgRIglgbIgEgFIgCgHIAAABIgBgWIAAgBIgDgIIgBgCIgHgIIAAAAIgBgBIgNgIIiDgsIgJAAIgHgCIgEgFIgEgGIAAAAIAAAAIgFgHIgBgBIgBAAIgWgFIgCgDIgDgJIgBgBIgBAAIgIgFIgBgBIAAAAIgRgEIgegbIgPgKIgpgTIgDABIgBAAIAAAAIADgBIgIgEIgGgGIAAgGIACgEIAEgCIAIgBIAEABIgCgFIAEAEIACABIAIgBIABgBIAGgFIACgBIgBgDIgDgJIgBgBIgBgBIgGgGIgBgBIgOgFIgFgDIAAgBIgDgFIAAABIgHgPQgBgDgDgEIgGgFIgWgXIgNgKIgPgHIhEgPIgOgGIgtgqIgOgKIgRgIIgUgCIgZADIgGgBIgGgDIgBgBIgBAAIgJgDIgVAAIgSAFQgKABgHgBIgkgDIgCAAIgBgBIAAABIAAAAIAAgCIAAABIAAgDIAAAAIgCgEIAAgBIgBgBIgCgCIAAgBIgMgDIgHgFIgQgSIgFgGIgDgHIgBgKIgBgBIAAgBIgEgHIgBgBIgBgBIgKgEIgSgGIgGgEIgbgZIgCgEIgBgFIgBgJIAJgXIgBgOIAAgBIgJgOIgNgMIgFgGIgNgUIgIgJIgGgHIgIgTIgXg1IgChKIgJgSIgKgMIgBAAIgBgBIgMgHIgBgBIAAAAIgKgDIgKgBIgKgBIgFAAIgEgDIgCgDIgDgIIgRgWIgDgHIgCgLIACgIIADgCIAGACIgBgBIAHAGIAGAIIAGAMIAIgIIACgBIgBgGIAAgBIAAgBIgBgCIAAgCIACgCIAHgGIABgBIAAgBIADgFIAAAAIAAgBIABgJIAAgLIgFgJIgCgDIgFACIgDgIIAAgBIgFgDIADgBIgBgCIgCgCIgFgEIgFABIAAAAIgBAAIgBABIgBgEIgBgDIgHgDIACgBIACgBIABAAIgBgBIgCAAIgJgCIgBAAIglADIgBAAIgBAAIgIAGIgJgBIgGgFIgDgLIgBgJIABgFIADgEIABgBIgIgHIALABIABgGIAFAGIAEAAIABAAIAAgBIACgXIAAACIACgHIgEgCIgCAAIgCgDIgDgFIAEgKIgCgpIgDgLIAAgBIAAAAIgGgKIgFgHIACADIgLACIABADIgIACIAAgDIAHgCIgBgCIAAgBIgGgIIAAANIgLACIABgbIgPgNIgEgEIABAAIgDgIIAAAAIgBgBIgGgIIgNgNIgBgBIgVgIIgDgEIgCgIIAAAAIgBgBIgFgIIgLgLIgKgPIgRgfIgKgOIAAAAIAAgBIgIgGIgPgJIgOgOIgBgCIgBgEIgFAAIAEgGIAAgDIADAAIADgEIABgCIAAgBIgDgFIgBgBIgBAAIgCgBIACgGIgCgDIACABIABgEIAAgDIgIgXIACgNIgHgFIAAABIgKgRIAAABIgCgIIAAAAIgDgGIgBAAIgGgEIAAAAIgOgGIgPgCIgPADIgPAFIh4BMIgMAGIgKgCIgKgPIgBgFIAAgVIgDgIIAAAAIAAgBIgDgDIAAAAIgBgCIAAAAIgCgDIAAgBIgBAAIgEgCIAAgBIgEgBIAAAAIgEgBIgBAAIgIAAIgBAAIgEAAIAAAAIgIACIAAAAIgEAAIgCAAIgGgEIAAgBIgBAAIgDgBIgCAAIgIACIAAAAIgPAGIABAAIgIABIAAAAIgJgBIAAgTIgBgBIgBgBIAAAAIAAgBIgFgDIgBgBIAAAAIAAgCIAAgGIAAAAIABgDIABgCIAAgEIAAgCIgKgHIgBAFIgDAIIgDAFIgEAFIgFAAIgEgDIgEgFIgFgGIgBAAIgGgBIgJgCIgZgPIABAAIgEgDIAAAAIgBgBIABABIgDgNIAAgBIgBgBIgGgJIgBAAIgLgGIgEgBIAAAAIAAAAIgDAEIgCgDIABgCIgCgBIgCgEIAIACIACgBIgBAAIAPADIABAAIAIgBIABAAIANgEIgBABIAHgBIgBgBIAIACIgBAAIAQAIIAAAAIAFACIABAAIAJABIgBAAIAGACIAEAFIAAgBIAJAMIACgGQAAgDAGgLIAJgMIAIgNIAAgEIAAgCIAAgBIACgBIABABIAAAGQgBAFgHAJIgQAbIgDAMIgNgRIgCgDIgFgBIgIgCIgBAAIgBAAIgFgCIAAAAIgBAAIgPgIIABAAIgCAAIABAAIgFgBIgGABIABgBIgNAFIgBAAIgBABIgIAAIgBAAIAAAAIgCgBIACACIACAAIABACIAHAIIABACIACANIADADIAYAOIAHACIAJABIAGAHIABAAIAAABIAEAFIADAAIACgDIADgGIAFgQIASALIAAAEIAAAGIgBACIgBABIABgBIgBACIAAgBIAAADIAAgCIAAAFIAEADIAAAAIABABIABACIADACIgBADIAAAOIADAAIAHgBIAPgHIAJgBIABAAIAHACIAGADIAEAAIgCAAIAIgCIABAAIABAAIAEgBIACAAIAIABIABAAIABAAIADABIABAAIAEACIABAAIAAAAIAEADIACABIADADIACAEIgBgBIABACIAAgBIACADIABACIADAHIAAACIABAVIABAFIgCgCIACADIAAgBIAHAKIAFABIAKgEIB4hOIAQgFIARgDIARABIAOAGIACAAIABABIAIAGIAFAKIABAFIAAgBIABADIgBgCIAEAHIAFAGIgBAAIACABIgBgBIAKAIIgDAQIAJAYIgCAKIAHALIgIAOIAAACIAAgBIAAABIAAAAIABABIgBgBIANANIAQAJIAJAIIALAPIARAgIAcAjIACAIIAVAIIAQAPIAHAKIABABIAAACIACAFIADAEIgDgCIAEAEIgBgCIATAPIABABIARAIIALAOIAGALIAGAiIAAAbIgCAFIAMAEIgFARIAAgCIAAADIAAgBIgEAsIAGgBIAfgDIACAAIACAAIASAEIAFAIIABAAIAMAKIACACIAEAHIADgBIANAVIACAOIAAAEIgCANIgGALIgFAEIACAMIgVAUIABADIACACQAAABABAAQAAABABAAQAAAAAAAAQABAAAAAAIAEACIAJAAIARADIADABIADABIAPAJIAOAQIAMAVIAAAGIACATIAAAzIAdBCIAFAGIAJAJIAOAVIADADIAOAOIANAUIABAWIgIAZIAAACIAYAWIADACIAQAFIASAIIAKASIACALIABADIADADIAPAPIADADIgEgBIAHAEIgDgDIAHACIAFACIAKAJIABACIAXACQAGAAAHgBIAUgEIAWAAIAGABIAJACIAEAAIAGAFIAYgDIAZADIAWAJIASALIAsApIAIADIBEAPIAUAJIAQAMIAYAZQAKAKADAFIAHAPIAOAGIAQANIAMAiIgOAMIgCACIASAHIARAMIAcAZIAPAEIADABIAQAKIADAJIAUAFIAMAOIACAEIADAAIAEABICJAuIATALIANAQIAGARIABAVIgBgCIABACIAAAAIAAAAIA+AqIAKAIIABAAIASACIADAAIAQAEIAAAAIADAAIAAAAIAAAAIgDAAIAOgEIAPgCIAZgMIALgCIADgBIADAAIAEABIAHAAIAKAFIACABIAFAEIAVAFIALACIALAAIANgBIAVgEIAUAEIAWARIALAUIAFANIABABIAfgCIAdAGIAXAVIAEAMIAggEIAEABIAHABIAAAAIAogXIAjgdIABgBIACgCIADgCIAWgTIAIgGIAIgEIASgFIADgBIABAAIAJgSIAhgPIAfAEIAdAJIAJAAIAHgBIAAAAIAHgDIAFgFIgDADIAHgHIgEAEIABgCIADgKIAAgBIgHgMIAEgMIgDAEIgDACIgDACIgCABIABgBIASgUIAMgOIANgKIAFgFIAMghIAwgBIAIAMIALAAIAQgDIALgCIASgPIAcgRIAGgEIABgCIACgBIACgEIAOgNIADgBIAJgHIAUgEIAXgBIABAAIAMgIIAXgHIAhgBIAVADIAXAJIAHABIAaACIAIABIABgCIAcAIIgGAAIALACIgFgCIAqAAIADAHIAbgcIAQA9IAAAAIAcAFIAAAYIBkgrIg7BVIAYAUIgXAKIALARIAbBsIACAbIgFArQgBAGACAIIAFAGIACACIAEAJIAFAQIACAQQAAAAABABQAAAAAAABQABAAAAABQAAABgBAAQgBAFABABIAVAXIANAiIgNAcIgFAFIACAHIATAWIAEAEIAHARIAFARIALAZIAAAFIBuAHIgFAGIADgBIANgBIARAAIATAFIATAQIACAEIAbgGIAjAIIAXAbIAMAZIAAAAIAIACIANADIAEABIAKgGIAFgDIABAAIACgUIAYAJIAMgJIAEAHIABgBIAUgEIBIgFIgFALIBIASIASAAIAbgSIAWAkIAAAAIADAAIAeAMIAdAlIACgBIARgDIAGADIAPgGIAhgFIA3gSIAdgBIAeAJIAGAGIAPANIAJADIAKAAIBCgGIAeAMIACAFIATgFIAZgBIAOADIAHgBIAWAHIADAAIACgBIADgBIAfgEIAEAAIAPACIAQAGIAFgFIAHgNIASgKIAEgBIAdgJIAQgBIASACIARAKIADADIAVAVIACAJIABACIAAAPIABADIAFAIIgCACIgBABIAEADIAPACIAMACIAkAIIA/ALIBOAYIAIALIADAFIALADIAygnIAEgJIAJgGIAEgCIAIgGIAIh4IADgPIAHgNIABgBIgCgKIgEghIAYgiIARgEIARiBIAFgTIALgWIAVgRIAvgOIAWgNIAKgDIAUghIAhAFIAFgLIAGgFIABgGIABgEIABgJIAMgPIAMgHIAFgCIABgBIAAAAIABAAIABAAIAAgBIgBABIAGgFIADgBIADgBIAGgEIAGAAIABAAIAJgHIAOgFIAugEIAUAAIAAABIAAAAIgIABIABAAIAAABIAAAAIACAAIAGgBIgFADQAAAAAAAAQAAAAAAABQAAAAgBABQAAABgBABIAIgFQABAAgIAFIAGgCQACABgSAEIgvAGIgLADIgLAIIAAAAIABAAIAJABIgEAAIgIAEIABgBIgCACIABgBIgDAFIAFgKIgBABIgEAAIgEAAIgDACIgFACIgCACIgEADIgGACIgCABIgJAGIgIAKIgDAQIABACIADgCIgBACIADgEIgBAJIACAIIgCgEIgBgCIgBgCIgCgFIgIAJIgBABIACAFIAIADIAKABIgQADIgEAIIAGACIAFABIABAAIAGABIgIABIgJARIAAABIgBgBIgDgHIgBgIIAEgHIgHgDIADAKIgJAPIACAKIgFgMIgGgaIgUgDIgIAOIAAABIgIANIAAACIANgCIgMAHIgDAIIACgNIgEABIgJADIgEAIIABgHIgVANIgqAMIgEABIgQAOIgDAEIgGAOIgEARIgQB6IAAACIgCAOIACAAIADAAIgDABIAFgBIgIAGIgBACIACgFIAAgDIgCAAIgTAFIgSAYIADAaIAFASIABgBIgBABIACgCIgBABIABgCIgEALIABgHIgFAFIgFAJIgBADIgBAHIAAABIgHBuIAUAQIABABIAHAGIABABIAMAKIACATIgQABIgBgCIgBgJIgJgIIACAFIgHgIIAFADIgBgCIgEgDIgCgCIgKgIIgBAIIAAACIADABIgHAPIAAAAIAFAAIgDAJIAfgBIAAACIABAEIgjAAIgLAYIgEgEIALgXIABgCIgSAAIAEgMIgGAAIgBACIAAAHIgGANIAPAPIgHAQIgCgCIABAAIgCgBIACABIgCgCIgDgWIgBABIgFAIIgCACIAAABIAGAGIABAAIACADIACABIAAABIAAABIgMgFIgCAEIAAgDIgBACIAAAGIABgEIAAgBIABALIAFADIgCgBIADACgEAiaASIIAAgBIAAAAgEAiJASAIgCABIADABIAAAAIAAgBIADgGIgFgFgEAhxAR0IALADIABAAIABgCIgCgCIADgCIACgCIgCgBIAEgIgEAixARXIgDAJIAAAAIAEgJIgBAAIABAAIgBgBIAAABgAbwQ7IAAABIAAgBgAbeQ3IAAAAIACgDIAAAAIACgCIgBABIAHgGIgDgNIgJgBIgBAAIgDgBIAAABIglAAgAbrQkIAAAEIABABIAGgFIgEgDIgCAAgAaqQoIAFAAIgFgCgAcLQgIABgBIgDAAgAaWQfIADAAIgBgDIAAAAgAPEO4IAAAFIAJgHIABACIAEgEIgBAAIgEACIgBgCgAkgHpIgDAEIAEgFgAtMGZIABABIgBgCgAHmGVIAAgGIgBgBIABABIAAAAIgDgEgAgKFkIACAYIAYAAIgSgdIgBAAIgGAEIACgBgAHlF2IABgBIACgDIgIgHIAFAKIAAABIAAAAIABgBgAHQFmIgEgGIgCABIAAgBIAAgBIgBAAIABACIAAAAIAAAAIgBAAIABAAIAAABIAGAEIAAAAgA5Yg8IAAADIAAgDIAAAAIgBgBgA6DhkIgDgDIgEgBgA9bozIgBABIACgBgA+apIIAAAHIACAGIABAAIAGgEIgJgKgA/7shIAAAAIgBgCgEgmGgP8IgBAAIAAgBIgBAAgEgm/gQRIAAAAIAAAAIgBgBIABABIAAAAIAAAAgEgm/gQRIAAgBIgBAAgEgoOgQ1IgBAAIgBgBgEAiKASFIAAACIgBAAgAaGQ+IgEgIIAAgJIABgCIAAgCIAAAAIAAACIABgBIADAWgAaTQxIAAAAIgBAAIABgBIAAABIACgDIABAKgAbYQfIABAAIACAAIAAAKgAYsQeIADgDIAGgGIAEgBIABABIAAgBIgBAAIgDgDIAEADIAAAAIAAAAIALAKIgQgFIACgBIgDABIABAAIgKAHgAY1QZgAY6QUgAUXQJIgGAAIAHgBIACABIABABIAFADgAT1QEIgBAAIACABgAQLO0IAGACIgEgCIALABIADAGIgHARgAQbO7gAQLO0IgBgCIADACgAMLOeIAFAAIABgBIAFgEIAKAKIAAgBIAAABIAAAAIAAABIgBAOgAKWNrIAKAEIAFAVIgHAHgAJjNkIADABIAEAAIAAAEIgBgCIABAFgAI/MSIABACIgMgLIgGAAIAIgBIAEAAIADABIACAHIAAABIABAFgAI0LxIAAgBIABAAIgBABgAI1LwgAI0LvIAAAAIAAAAIAAABgEAmjAJwgAG2FeIgBgCIgLgBIAIgDIABgBIgBgCIACABIgDgCIABABIgMgDIAZgGIAAALIADACIgBAAIgBACIgCACIAAAGIAAgCIAAACIgCgDIgEAEIgBABIgBABIgCABIgBACIgCAAIgEACgAHCFZgAA7FWIABAAIgBAAgAB3ErIAAgCIABgBIACAAIABAAIgCABIACgBIgFAIgAGMEpIABgBIgBABgAy7DFIAAABIgBABgA9DnmIABABIgBABgA9CnlgA9FoUIAFgBIABAEgA9ZomIADgBIAAABIACgCIAAADIgBgBIABACgA+eovIABAAIABABgA+hphIAGAAIgDADgEghkgOmIABAEIgEAAgEghmgOxIADABIgBADgEgmLgP3IACAAIAAAAgEgnYgRNIgBAAIABAAgEgo3gRWIACAAIABADIgBACgEgoWgRlIgEAAIgUgDIgCAAIABgBIABAAIAUADIAFAAIgBABIABAAIABAAIgBAAIAAAAIgBABgEgoUgRmIABAAIgBABgEgoSgRvIgIgFIgMgCIgOgGIAEgOIAOgJIABABIANABIAFgDIABgBIAJABIAHACIAGABIABAAIACgCIABAAIABAAIACgBIACgBIAEADIABABIABABIADAEIADgBIgBABIABgBIAAAAIADgCIAAAAIABgBIADAAIAEgBIAFAHIABgCIABgBIAMgFIAEATIAAACIAAABIAAAAIACABIADAHIAFADIgDABIgFgEIgDgHIgBgCIgEgSIgIAEIgDADIABACIgDAEIAAAAIAAABIAAgBIAAAFIgCgBIAAgFIAAACIAAgCIABgBIACgCIAAgBIgDADIgFAEIgCgBIAGgFIADgCIgEgFIgBgCIgCABIgDAAIgBABIAAAAIgEADIgDABIAAgBIAAABIgBgBIABAAIgBgBIgBAAIABAAIgEgFIgBAAIgDgCIgEABIgBAAIgEABIABAAIgBABIgOgDIgHgBIgBAAIAAABIgGADIgNgCIgBAAIgBAAIgLAHIgBABIAAABIgEALIANAGIANADIAIAFIABADIABAAIAAABIgBABgEgoWgSQIADAAIgBgBgEgn5gSRIACAAIgBAAIAAAAg");
	this.shape_21.setTransform(459.5,558.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373737").s().p("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DgEIAWABIAAgDIgYgBIgEgDIAbABIgDgIIAAgQIABgIIACgCIAFgJIACgGIABgCIgKACIAKgGIgMACIAJgGIgLADIAIgFIAKgCIgCgDIAFgDIgFABIAAACIgIAFIgKACIALgIIgOADIARgKIAAgBIAGgOIAAADIACgGIgCADIgBgiIgDgJIgDgGIgDgEIgMACIgEgHIAOgDIAAgHIgCgDIACgBIAAAEIACADIAKgCIgCgDIgGgDIAAAAIgEABIAAgCIgDABIAAABIgPADIAAAFIgCgEIgBAAIAAgBIgIACIAAgBIAHgBIgBgBIgGABIAAgGIgFgEIAAANIAFgBIAAAJIgFABIAAgIIgfAHIAAgCIgFABIAAgBIAFgBIABg4IgGgCIAAA7IgEABIABg9IgFgCIAAA/IgFABIAChCIgFgCIgIgJIgBgDIgCgHIgDgFIgLgLIgYgoIgiAEIADgEIAdgEIgDgEIgXADIADgFIASgCIgDgEIgMABIgDAFIgDABIgDAEIACAAIABAAIgDAFIgDAAIADgFIgEAAIADgEIAEAAIADgFIgEAAIAIgMIgCgBIgJANIgEABIAKgQIgHgEIgSgTIgCgCIgBgCIAAgDIgCgFIAAgIIAAABIAAgDIAAACIgDgIIgCgBIABgDIgCgIIAFAAIADgKIgJgZIABgEIAAgDIgHgKIgHgLIgCgHIAAAAIADACIgEgGIABADIgCgBIABAAIgKgDIgKgBIgWAFIh4BMIgTAJIgFgCIgSgDIgQgYIgCgLIAAgSIgBgEIABACIgCgDIABABIgCgCIAAgBIgBgBIAEACIgFgEIABACIgBgDIABADIAAAAIgBAAIgCgBIgEAAIgCAAIgIACIgCAAIgBAAIgEABIgDAAIgJgCIgEgEIAAAAIgBAAIAAAAIABAAIgCAAIgBABIAAAAIgdBNIhPhtIgDgBIgKAAIgIABIgIAAIACASIAAACIAAADIgBAFIgEAMIAAABIACAHIAAACIAAACIABAFIAAACIgBADIgCAJIgCAEIgHALIgCABIgKAIIgPAEIgYgDIgCACIgIADIgKgFIgOAAIAAAOIgMgNIAAABIgCAIIgBADIgCADIgDAEIgHAGIgEADIgFACIgIADIgEABIgVgCIgEAHIgMgIIgJABIACgCIgCgBIAAgLIAMgBIgBAAIACAAIgGgDIg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nIgBACIAKALIgdA1IgZANIgKADIAEgCIgHACIADAAIgTAGIgEADIgeAJIgBAKIgFAMIgFATIgmAzIgNgEIgRALIAOAcIgDAMIABABIAEAKIgBAWIgEASIgRAiIguAKIgRgGIgBAAIAAAAIAGAEIATAeIAGAdIgCAYIgGAcIAAAAIABAxIgWAbIgNAKIAjA6IAEAEIARAQIAJAYIACAJIAFADIABADIAAAGQAAAAABAAQAAABAAAAQAAAAAAAAQAAAAABgBIABAAIADgCIAFgEIACgBIAGAAIgHACIANgCIgGAAIBVgVIgHBCIAEACIAHAdIAEADIAUAaIAJAQIAHAUIACAIIACACIAOAUIAAAAIAIAGIAPAQIANAdIAAABIACACIAEAzIgNAbIAAAAIA0AQIA0AXIAOAOIAiATIATAOIABABIAdARIAUAWIBtBbIAAAAIARgKIAjACIAkAMIAYANIASAUIAEAHIANAJIARAbIAFAmIAAAAIAAADIAAABIAZAfIAGALIADAKIABABIAXAgIADAHIAQAIIASAmIABAFIADAFIACABIABABIALAKIAKATIAMAJIAWAhIAEAmIgFAbIg4CYIAABiIAdAAQgCAAgBAAQgCAAAAABQgBAAABAAQAAAAABAAIBQARIAGAHIACACIABACIADAHIAQAxIAAAUIgBAGIAQCTIABAAIAIAFIAHAIIAHAHIAGAGIAKASIAUAIIAYATIALASIAFAGIASAQIAFAIIADAEIAHAMIAGANIAAAEIAJACIASgNIgMgLIAGgQIgBgCIAEgIIAMgkIAKgQIAIgLIAEgEIAPgxIA8gmIARACIADgBIAmACIAVgEIAJAEIAUgGIA5gaIAUBlIABAIIABAGIAAABIABABIARgCIAAAWIACgCIAAAEIgCASIgDALIgDALIgCADIAGAAIAIABIAUAGIAKAEIAYAOIAHAJIBDgrIAegLIAhgFIAkAEIAfAMIAgAVIAPAfIAiAaIgIAnIAIAWIARAZIgBADIAiA4IABAAIAEAGIAAAAIABABIAKALIAEAGIAKAEIAfAeIAQAYIAaAMIAXAgIAOAXIAHAdIABANIAdAJIgMAnIATADIAGALIAKgCIAvBQIAEAnIgEAeIAEACIAaAeIAWAoIADBPIATAtIAAABIAAAAIAJAJIAOAWIABAAIAQAOIAaArIACAoIAhAPIAbAwIAAAAIAHADIAFAEIAVgFIAoABIAZAGIANgCIAqAGIAkAPIAbASIAmAjIA9ANIAiAOIAwArIAXAZIADAFIABAAIAmAhIATA4IAQAPIAJACIAoAYIALADIAQATICGAtIAiAWIAbAgIANAlIAFAEIAdARIAKABIADABIAAAAIALgCIAWgKIAdgGIAkABIAbANIALAEIAGAAIAFgCIAdgEIAvAJIAsAjIAGALIAzALIAbAYIgBABIABAAIACgBIADAAIAiAGIAPAJIAbgWIABAAIgEAEIAIgGIgEACIAXgVQAGgFAOgFIAQgGIAJgQIArgUIAmAFIAdAKIAGAAIAAgBIABAAIACgBIABAAIAAgCIABgDIgBgCIgKgNIAIgOIgEAFIgHAFIgBABIAbgfIASgRIAIgHIAQgoIBEAAIAIAMIAXgEIAPgNIAcgRIAEgEIABgBIACgDIAQgQIAQgKIAagGIATgBIALgHIAcgHIAkgCIAZADIAYAJIADABIAYABIADgEIAlAMIApAAIAngnIAUBRIAXADIAFgBIAAACIAEABIAAALICGg6IhWB9IAhAcIgdAOIAAAAIAdByIACAeIgEAeIAAgDIACgbIgCgeIgehxIgjARIAaBnIACAWIgGAtQgBAHADANQAAACAGAGIACABIAEAIIABABIADAMIACARQADACgBAFIAAAHIAVAYIACABIAJAWIgIAQIgLAMIABgDIgCAEIAAAAIAAAAIAAABIAAAAIADAHIABADIACAHIAEAMIAFABIALANIACACIABACIAAAAIADACIABADIAEAJIAEARIAKAXIADAUIBQAFIgJAIIAKABIALgDIADAAIAHACIACAAIABABIAGACIgCAAIACABIAAAAIABAAIASgFIAVgBIACABIACAAIAIACIADABIACACIAHAFIACADIAGANIAAABIABAHIATgKIARgFIAEAAIADAAIAUAFIARAUIALAYIAGAHIAEADIAMABIAWAGIAHgBIAMgJIACAAIACgBIAMgFIAAgGIAJAEIACgCIACAEIADABIAFgEIABgBIABgBIAFgDIADgBIA1gFIgFAMIAFABIAZgEIBHARIAaAAIAPgKIAMAUIABAFIACACIAAABIANAAIADABIASAIIAMAOIARAZIAAAAIADABIAFABIAFABIAFgDIAKgBIAIAEIAWgJIAggFIA3gSIAWgBIAWAIIADACIAUARIAMAFIANAAIBBgGIARAHIAEALIACACIAjgJIAUgBIAPAEIAGgBIAOAEIACAKIAAABIABACIABAAIALgLIAJgDIALgCIASgBIAHABIACABIACABIAdAMIAAgEIARgZIALgGIAcgKIACAAIACAAIAHgBIACAAIACAAIAKACIALAGIASASIACAIIAAATIABAFIAIALIgDADIgCABIAFADIAVADQAJAAAIADIBkAUIBHAVIADAFIABACIACADIABAGIAGACIA8AOIgCABIAAABIAFADIAAABIAPgFIgBABIAFgDIABgBIABAAIAAgDIAAgBIACgEIAAgBIAAAAIADgEIABABIAAgCIACgDIAAAAIABgBIgBgBIgDgCIAAABIAAAAIABAGIgBABIgBgBIgBAAIAAgBIgEgBIAEgFIgBABIABgBIgEgCIAAAHIABAIIAAAAIgEgCIgCAEIgBACIAAAAIABAAIgBABIAAgBIgBACIgNADIgCgBIgFgEIABAAIACgBIACAAIALgDIAAgBIABgDIgbgJIAmgeIADAAIAAgBIAEgKIATgMIAGAEIAAAAIAJiKIAAgBIACgJIABgCIADgGIACgCIAEgDIAAgHIgEgPIgCgYIAPgVIARgEIAFAAIABgCIATiNIAEgQIAHgQIAPgMIAugOIAMgIIAUgIIAHgBIABgFIABgDIANgUIAbADIANAFIgCgLIAFgKIABgDIACgBIAJgJIgCgFIADgNIAGgIIAHgFIAJgDIAAAAIgJAEIgBABIgGAEIgGAJIAAADIgBAJIABADIAAAAIgBABIAAAAIABgBIAAAAIADgGIgCAIIAAAAIAAABIAAgBIACAGIgCgDIgBgCIAAAAIgKALIAAABIgFALIADAKIAIACIgDAFIgDgBIACAEIABgBIgBAAIABgBIAAgBIACAAIAFgDIgCADIABAAIgBABIgFAHIAAgDIgBgCIgDAEIABACIgFgKIAAAAIgQgGIgXgDIgLATIAAACIgBAGIABAAIABgBIgBABIAEgBIgHAEIACgBIAAgCIgFABIgBAAIgFABIgJADIgJAEIgMAJIgsAMIgCABIgCABIgLAJIgHAPIgEAPIgSCNIgBAFIgCACIAEgBIgHAEIACgDIgCABIACgBIgIAAIgBAAIgMADIgNASIAHAlIgBAJIgGAHIgBABIgCAEIgBACIAAABIgCAGIAAACIgICKIgBADIADACIABACIAAAAIACgGIAIiLIABgBIABgGIAAgBIAAAAIADgEIAAgBIAFgGIACgCIABgLIAAgBIgGggIgBgCIALgPIAKgDIABAAIABAAIAFAAIABAAIADgBIAEgEIACgGIASiNIAEgOIAFgMIABgCIABgBIAJgHIABgBIABAAIAtgNIAIgGIgIAGIgsAPIgBAAIgJAIIgBABIgBABIgFAMIgDAOIgNCNIgCAIIAAABIgGAHIAAABIgBAAIgHACIgIAAIABAAIgHACIABgBIgCABIABAAIgFAJIACAOIABADIADANIAAASIgBABIgDAEIgFAFIgCADIgBAGIABgBIgICMIgFAPIACAJIABAEIgNAAIABADIAEgBIgDAKIAFAFIgGgBIgEALIgEgMIgOgCIACgEIgBgBIAAAAIAAAAIgBgBIgDAGIACACIABgBIADADIgFAJIAAAAIAAABIgGAIIAAADIgBABIgBAEIgFAFIgGADIgBABIAAAAIgPAEIgHAAIAGADIACADgEAwcA0QIABABIABABIACACIAAABIACAJIABABIANAFIBGAQIABABIABAAIAAgBIgJgGIgBgBIACgBIg+gOIgKgEIgBgHIgBgBIgCgEIgCgDIhDgUIhmgUIgJgCIgggEIgGgDIgCABIgCACIABABIABAAIAEADICSAaIAtAOQAAAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgRgEgEAyIA0jIAAAAIABgBgEAx7A0bIABAAIAAAAgEAxwA0MIAQAFIAEgFIgHgDIAKgIIgBAAIADgJgEAymAz/IADACIABAAIABgDgEAyRAz3IAAABIgCAFIAGAAIABgCIABgCIAAgCIgBAAIgFAAIAAgBgEAypAzwIAFADIACgFIgFgEgEAyYAzoIgDABIgBADIgCADIAAABIAGAAIAAAAIABgDIACAAIAEgDIACgCIADACIACgGIgEgDgEAr0AzfIgCAEIABABIABAEIADgEIgCgEIAAAAIABAAIAEAAIACgEIgGAAIACABIgCgBIgCADIgDgFIAAAAIAAAAIAAAAIgEAAIAHAFgEAsiAyWIAHABIABAAIABABIAFADIAQAQIAAABIABAEIABAWIABAFIAIANIAEgDIgIgMIgBgFIgBgWIgBgFIgCgCIgPgPIgIgFIgCAAIgGgBIgKABIgBAAIgaAJIgBAAIAAAAIgJAFIgBACIgDAFIgGAIIgDAFIgCACIAAADIAEAAIAAgCIABgBIAJgMIADgGIACgCIAHgDIAAAAIABgBIAZgIIABAAIAAAAIAHgBgEArgAzMIgBgDIgGgDIgCgBIgBAAIgEAAgEAqRAzLIAEAAIgEgCgEAqGAzIIABAAIAEABIAAAAIABAAIABABIAAAAIAAAAIAAAAIABgDIAAAAIAAAAIAAAAIADACIABgCIAAgBIgBgBIAAAAIAAgCIgEABIAAACIABAAIgBAAIgBgBIgEgBIgBAAIAAAAIgBADIgBgDIAAACIAAgDIgBAAIgIgBIAAAAIgCgBIgBgBIAAgCIABgCIgCgHIgHgCIgCAAIgDABIgBAAIgPgEIgSABIgfAIIgCABIgBABIgCABIADADIACgCIABgBIAfgHIARgBIAPADIABAAIAEAAIABAAIAEABIAAACIABACIAAABIgBAEIAEAEIgBAAIABABIALACIAAAAIABAAIABgBgEArAAzCIgBABIAAABIACAFIACgDIAAgBIABgBIAAAAIABgBIgDgCgEArnAzEIAAAAIADACIABAAIAAgEIgEAAgEAr2AzEIACABIABAAIAAgBIgBgCIgBAAgEAocAy5IAIAGIACACIABAAIAAgBIABgBIAAAAIgEgBIABgBIABgBIAAAAIgGgFgEAqWAy2IgCABIgBABIgEAEIADACIADgDIAEgCIABAAIAKgCIAPgBIAEABIABAAIACAAIABAAIAFADIAEAAIgBgDIAFADIADAAIgQgHIgBAAIgGgBIgCAAIgZADIgBAAgEAoOAyqIAIADIADAIIAAABIADACIACgCIgCgDIgBAAIgDgJIgKgEIgCAAIg/AHIgPAAIgOgFIgWgUIgBgBIgBAAIgRgFIgCAAIgRABIg2ARIggAFIgVAKIAAAAIgHABIABABIgBAAIgBgBIgCgBIAAgBIAAAAIgDgBIgBgBIgCAAIgDABIgBAAIgDABIAAAAIgDABIgHAAIgIgBIABAAIgFgCIgFgEIABABIgSgaIgKgKIAJAKIARAaIABAAIAEAEIAGACIgBgBIAHACIAIAAIAAAAIAEgBIgBABIAEgCIAAAAIAAAAIADgBIABAAIAEACIACACIADAAIAHgBIgBAAIAWgJIAfgFIA2gRIASgBIARAGIAAAAIABAAIASAQQAEAEACABIAHADIAEABIAEABIAPAAIA+gGIABgBgEAokAyvIABAAIgBAAgEAkEAykIABgBIAAAAgEAjmAyiIgCgBIgBAAgEAZTAwBIAAAAIAAgBgEAzcAv1IAAAAIAAAAgEAJ5ArfIABAAIAAAAIAFABIABAAIAEgBIABAAIAAgBIADgCIADgDIAAAAIACgCIApgZIAlgeIAAAAIAEgDIABAAIAVgTIAGgEIAPgFIgKACQgIADgEAEIgVATIgEADIAAgBIglAfIgqAYIABAAIgFAFIAAAAIgDADIgBAAIgEABIAAAAIgBAAIgFgBIAAAAIAAAAIgHgEIgEAAIghADIgRgDIgBAAIAAgBIgHgKIgFgMIgKgKIgQgDIgkACIgOgHIgBAAIAAgBIgHgLIgNgaIgKgIIgHgCIgPADIAAAAIgRACQgLABgFgBIgRgDIgPgFIgGgBIgBAAIgEgBIgBAAIAAgBIgIgGIABABIgCgBIgDgBIgIACIgZAMIgSACIgPAFIAAAAIgLAAIgRgFIABAAIgIgBIgKAGIgBgBIgFgCIgBAAIgBAAIgUgRIhCgtIgBgBIAAAAIgGgHIgBgCIgCgIIgBgVIAAABIgDgIIgEgGIAAAAIgMgHIiBgrIABAAIgIgBIgBAAIgKgDIgIgIIgEgHIABABIgCgCIgCgCIADAAIgEgCIABACIgCgBIgVgFIgBgBIgEgFIgDgIIgFgDIgTgGIgPgOIgBABIAQAOIARAFIAGAEIADAHIAAABIAGAHIAXAFIgCgCIAEADIgCgBIACADIAEAHIABAAIAAABIAHAHIAKADIABABIABAAIAIAAIgCAAIACAAIAAAAICAArIAKAGIAFAHIAAgBIABACIgBgBIADAGIABAVIADAKIAAABIAHAIIAmAcIAdARIAUAQIAAABIABABIAIACIACgBIAHgEIAIAAIgBAAIARAFIABABIAKgBIAQgEIASgDIAZgMIAHgBIACAAIACABIAHAFIACABIAEABIAAAAIAHABIAPAFIARAEIARgBIAQgBIAAAAIABgBIAHgCIAGgBIAHABIAKAIIAAAAIANAaIAHAMIAAABIAPAHIAlgCIAQAEIgBgBIABABIAAAAIAKAJIgBgBIABABIAAAAIAEAMIAHAKIABABIABAAIARADIAhgEIAAAAIAEABgEAJxArPIAEABIACAAIAGAEIABABIAAAAIABAAIAAAAIABAAIAAgBIgBAAIABAAIABgBIACgCIAAAAIAAAAIADgDIABgBIApgYIAkgeIABAAIAAAAIAEgCIAWgUQAFgFAIgDIAPgEIABAAIABgBIAHAAIAFgCIABgBIACgGIAAgBIAAgBIAFgJIABgCIADgBIAPgHIACgCIAWADIAeALIAPAAIANgDIANgGIAKgJIAEgHIAEgKIABgGIAAgDIgBgFIAAgLIgFAFIgEABIgCABIACgCIASgUQACgEALgHIALgLIAAACIACgDIgCABIAKgXIARAAIAJAOIAAAAIAHgCIACAAIABAAIAIAAIAIAAIAMgDIgEgHIAEgGIgEgGIAIgPIgIAHIgBAHIABABIgBABIAAAJIgDgDIgEAHIABgNIgJgOIgNAAIgTAEIgDACIgBgEIgOAHIAPgLIAWgFIAIAAIgEgFIg7AAIgPAmIgJAHIgRAQIgZAdIABgBIAEgCIACgCIAEgEIgGANIAIAMIABABIAAAAIgBAEIgBADIAAABIgDACIgEACIABAAIgBABIgBAAIgBAAIABAAIgEAAIgFAAIgdgKIgjgEIgnATIgEAHIAHgBIAGgCIgQAMIACgBIAJgBIAHgCIgbATIAAgCIACgEIADgHIgKAIIgEAJIADgOIABgBIgHACQgMAEgGAGIgZAVIgCACIgCACIgiAcIgTALIgCgCIgFgEIADgCIgHgQIgJgJIADAAIgCgBIAWgBIAVAIIgOgJIgigFIgCAAIAHAHIgDAAIACABIgLABIACgBIgEABIACAAIgKAFIAiAVIgCABIgigVIgTAKIASAQIAAACIATgCIAGABIAKgGIAIAGIgFACIACABIAPAIIgPgFIgIAAIgFADIgHgBIgOAIIABACIADAEIgPgJIABABIADAHIAEAGIgdgSIAMACIAFgBIgPgJIAKABIAEAAIgPgOIACgDIAAABIADgDIgDACIAFgCIgBgBIATgKIgEgCIACgCIgBgBIABAAIAOgJIgYADIgBAAIgBAAIALAGIgCABIgNgIIAEABIgEgDIAFABIABAAIAZgCIgZgYIgwgJIAQAfIADAFIgGgFIgRggIgBAAIghACIAXAEIACACIAFADIgEgBIAZAWIAAABIAAABIAEAFIgigeIghgHIAMAAIgMgDIAtgBIgFgJIgsgjIgWgEIgIgBIgPgDIgdAFIgEABIgIAAIgBAAIACACIABAAIAHAFIgigRIAAAAIgFgBIAEABIgNgHIgiAAIgcAGIgWAKIAAAAIACAAIAAAAIgEABIAAAAIAOAEIgXgDIgBAAIAWAHIgWgCIAQANIgWgNIATARIgagPIg4AEIgEgDIAWgCIAAAAIAFAAIAAACIAAgCIAkgDIgDgCIgBAAIAAAAIgIABIAJgDIAAAAIgCgBIgfgCIAAAKIAAAAIgCgKIgCgBIgBABIgBgFIABgBIACAAIgDgFIAAAGIgBAAIAAABIgBAAIABABIABAEIgVALIAAAAIgJAEIANgBIADACIAeASIAGAFIANABIAFAAIALAEIAKgDIAOgCIAXgLIAUgEIAFABIAQAAIASAJIACACIAZAGIATgBIAFgBIATgDIAdAFIAeAXIANAZIABABIATAAIAlAHIALAKIAKgKIAFgDIABACIgFADIgJAIIgBABIAAAAIgCABIgBABIgDAEIgBAAIgBgBIgIgIIgigGIgOAAIAAACIAFAIIgKgJIgFAAIgDgGIACAAIgCgBIAAABIgNgDIAHAAIgKgSIgZgTIgXgEIgQACIgGACIgNABIgKABIgKgCIgMgEIABABIgEgCIgBAAIgDgBIgBAAIgDgDIgDgBIgDgCIgIgDIgIAAIgEgBIgEAAIgEABIgMADIgYALIgcAHIgPgFIgDAAIgMgBIAEABIgBAAIgBAAIABAAIAAAAIABABIAAAAIgBAAIgBgBIgDgBIADABIgCgBIgGgBIgHgGIgUACIAMgGIgXgOIgfgXIgBgTIgGgTIgOgRIgUgMIiGguIgIgBIADAFIgDgDIADAEIgKgGIAAgBIAHABIgBgCIgNgPIgBgBIAAAAIgSgFIgDgHIgVgNIgPgEIAGAFIgNgIIAHADIgFgFIgYAVIANALIASAGIAAAAIAIAEIABABIAAAAIADAKIADADIAWAGIABAAIAFAGIAAAAIAEAHIAAAAIAFAFIAAAAIAIACIgBAAIAJABIAAAAICCAtIANAHIAAABIAHAIIAAAAIADAJIABAUIACAJIAAgBIAFAGIAlAcIAQAKIgQgKIglgcIgFgGIABAAIgCgIIgBgVIgDgIIAAgBIgBAAIgGgIIgBAAIAAgBIgMgHIhCgXIBCAVIANAIIABABIAHAIIAAABIAAAAIADAJIABAAIABAWIgBgBIACAHIAFAFIAlAcIAdARIAUARIACAAIAGgEIACAAIALAAIAAABIABAAIAQAFIAIgBIAOgEIASgCIAYgMIABAAIAAgBIAIgBIAHAAIABAAIADACIABAAIABABIAFAEIAEACIgBgBIAXAGIAPAEIAfgCIgBAAIAQgEIACAAIAIACIACAAIABABIAMAJIABABIAOAcIAFAJIAKAFIAjgCIAUAEIAOANIABACIAEALIAFAHIAMABIAggDgEAJkAq0IAAAAIABgBgEAJhAquIADAGIABgCIACgBIAEgEgEAJVAqvIAEADIgBgDgEAJ5AqDIAJAJIAGAPIAQgJIAJgIIAJADIgHgEIAAAAIgCABIgUgIgEAJGAqWIAAgBIADgCgEAJcAqFIAEADIALgGIAJAAIgHgHIgBAAgEAH8AqCIgBgBIACABIgMgVIgagUIgZgFIgRADIgFABIgNABIgKABIgIgCIgRgFIgCgBIgTgKIgNAAIgFAAIgRAEIgXALIgPACIgMADIADABIABAAIgBAAIAKgDIAOgCIAYgLIARgDIAEAAIANAAIAIAEIADACIADACIgCgBIACABIAAAAIAFAAIAAABIAEADIAPAEIAJACIAVAAIgDAAIAIgBIgFABIAXgFIAYAFIAZAUIAKASIADAAgEAMOAp/IgEACIALgDgEAFWAp/IABAAIgBgBgEAMfAp8IgKACIAKgCIABgBIAEgFIAAgBIACgHIAAAAIAEgIIAOgHIARADIAfAKIASABIgSgBIgfgLIgRgCIgOAHIgFAIIABgBIgDAIIgDAGIgBAAgEAEOApeIACAAIABAAIAAAAgEAEPApdIAAABIACgBgEAWyApLIAPABIALgEIgBgCIgNgLIgCgEgEAXeAoWIgPAHIACABIgBAKIABABIAMALIACABIAAABIAFAGIAigQIgLgRIAAAAIgCAUIgDgLIAAALIgFgRIgEAGIAEgIIgEgNIAFAEIgCgGIADAFIAAAAIAAACIADADIAAAAIgCAEIAAADIACgDIAAACIABgDIAAAAIAAgHIAAAAIgEgDIABgHIABABIgBgCIAEACIAAgEIAEADIgBAGIAIgLIgYgUIALAVIgGgEIADAGIgWgOIgBABIABABIgBgBIgLARIAJgTIAAAAIAAgBIgCgCIgBABIACACIgJASIABABgEgBAAlrIgTARIACABIAMAEIAdARIABAFIAQADIAOARICMAwIAYAPIARAVIAJAXIAAAPIAMAJIASgJIAAAAIAGgEIgNgaIAEAEIgGgGIACACIgLgKIASAOIAIAPIAAgJIgIgGIgDgHIgEgDIgBgDIAOAKIgLgdIgageIghgVIh8gpIAHAIIACAEIgJgDIABACIAIAOIgIgLIgOgJIANAEIgCgCIAIADIgNgIIgEgGIgKgDIAOAJIAFAFIgNgFIgIgKIgDgBIAAAAIAEAIIgEgDIABADIADABIAAgBIADACIAAAAIAAAAIABABIAAgBIADABIACADIgFgDIACACIgCgBIAEAJIAGAEIgBgBIABABIADACIgBgCIgKgMIADABIAJALIAHAMIgHgKIgBAAIABACIgbgRIAGAQIgHgMIAFAMIgLgTIABAAIgBgBIgBAAIABAAIgBAAIgDgBIgDgBIADAAIgkgXIAGACIAgAUIABABIAAAAIABAAIABAAIABABIAAAAIgBgBIACAAIgCgGIgBgBIACAAIAAAAIgBgGIgDAAIACAGIgPgKIANADIgGgDIAHACIABAAIADACIAEAAIAAAAIgCgHIgEgCIgUgEIgRgLIAAgBIASAFIgVgNIgKgDIgHgGIABAFIgIgDIAEAEIAGADIgCgEIAGABIAAAAIANALIgBAAIABABIACACIgTgLIABADIAAAAIAAAAIABABIAJADIAWAMIgIgCIgPgJIgFgBIAKAJIgIgEIAHAFIgKgFgEAEIAotIAGgBIAAAAIgDgCIAEgBIgFgBIABAAIAFgBIgHABIAAAAIABAAIgBAAIACACIgFACIAAAAgEAX7AoXIACACIAMARIAYgLIgbgYgEADhAogIAVABIgUgLIgCgBgEAXJAoYIABABIAGgLIgBgBIAAABIgBACIABgCIgBABIABgBIAAgCIAAAAgEAX3AoNIABgDgEAXIAn1IgCABIgHALIACADIAIgMIgBgDIAEgCIAAAAIgLgOgEAXpAnpIAcAYIBMhxIh5A1IAAApIASgIgEAXlAntIgFAJIAQALIgLgUIABgBIAFAEIgDgGIgCACIgCgCgEAWuAnZIAAAAIgBAAIACAAIAAARIgDAFIgBACIAAABIAFADIACABIACADIABABIADACIANgFIgNgeIgKAAIAEgBgEAXMAnzIABABIAAgBgEAXOAnuIAAAFIACgBIgCgEIAAgNIgOgIIACAAIgEgBIACABIgCAAgEAQQAnmIAHAMIASgDIABAAIAEgEIAAgCIAPgMIAcgRIAHgGIAAAAIABgBIAFgDIAAgBIADgEIAAgBIACgBIAIgIIABgBIAFgDIAOgDIAagBIAGgDIALgIIAQgEIAdgCIAPADIAXAJIAKACIAbABIAOADIADABIABABIACgCIAOAEIAfAAIAHAPIADAEIAHAAIgCAAIACAAIARgSIAFASIAhgIIgFgEIgNgFIASACIgBgBIgRgGIASADIgThGIgcAdIADAAIAQAkIgJgFIAEAHIgCgBIgBgDIACAFIgVgOIAEAAIgGgBIACABIgEgBIgFABIABgBIgEABIADAAIgTALIANgOIgRALIAcgcIgjAAIAEACIAAAAIgIACIgLgGIgXgFIgBAAIgRAVIA0gKIAGADIg9AMIADgFIgIACIASgXIgTgBIgFgBIgXgJIgYgEIgjADIgbAHIgBABIAAAAIgBAAIgJAHIgVABIgXAFIgIAEIgDADIgEACIgDADIAJgCIgMAFIgHAHIgDAEIACgBIAEgCIAGgEIAIgCIAEgBIgOAGIAAgBIgCACIACgBIgUAeIADgMIAFgKIgOAVIADgOIAAAAIgWANIgIAGIAAAAIgFAFIgEADIACAAIAFgDgEAXTAnlIAAgBIABAAIgBgBIAAABIAAgBIAAgBIgCgCIgEgFIgBABIACACIAAACIAFAFgEAXIAnZIgDgCIgDgCIgFgEIgDACIACABIgCAAIABABIAGAAIAHAEgEAWsAnZIAFgCIgVgBIABAAIgCAAIAFACIgDgCgEAXCAnPIAMAIIAAgNgEAWPAnSIABABIgCACIAOABIgDgCIgBgCIgHgBgEAQDAnSIACAEIAAgBIAGgFgEAW3AnUIABAAIACgBIAAAAIAAAAIAAAAIgBgBIABABIgCgDIAAgBIAAgBIAAABIABgBIgPgJIgKAFIAXAFIgGADIgXgFIgEACIACADIAdACIAAgBIgBgBgEAQWAnOIgCADIAEgDgEAWVAnHIAEABIgFADIAAAAIAGACIAGgDI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DAEIAAAAIAAAAIAAgCgEgI+AhFIAAAAIAAAAgEgI1AhBIABAAIAAgBIgBAAgEgI4AhBIAAAAIAAAAIAAgBIABABIAAgBIAAABIAAAAIAAAAIABAAIgBgBIACABIgBgCIgDAAIgBgCIgCgCIgCgDIADAGIgDgBIABABIgKgDIADABIABABIAEACIACAAIAAAAIABAAIAAAAIAAAAIACAAIAAABIABAAIAAgCIAAABIACABIgCAAIABAAIgBAAIABABgEgKEAgiIgBAIIAKgcIAAACIAAgCIAAABIAAgFIAAADIABgDIAAAAIgBgBIgBADIAAAAIgEAMIAAACIgBgCgEgJ5AgJIAAAAIABgDIADACIgBgCIgCgBIAAAAIAAAAIAAgDIAAAAIgBgBIAAADIgBABIACAAIAAABIgCAAIAAgBIgGgCIACABIgCAAIABABIgBgBIABACIABABIACABIABABIAAAAIAAAAgEgKAAgEIAAgBIgBAAIgBgCIgJgIIABAAIAGACIAAABIAAgCIgBAAIgFgBIgDgCIABABIgDgEIgBgBIACAFIALAKIACABIAAABIABAAgEgKJAgCIAIACIgCgCIgHgCgAp6f/IABABIABABIAAgBIgCgBgArPf4IAAACIABgFgAp4f0IgCgdIgXgmIgRgPIAAAAIgBgBIABABIgOgWIgKgLIABABIgBgCIgNgfIgHgSIAAAGIATAuIAJALIAOAVIARAPIAXAlIACAcIACABgAqYeXIABABIgBgBgAq0d/IAAAAIAAgBgAqzd+IgBgBIgMgeIAAACIgCgFIgFgOIAAgLIgCgHIAAAOIgFgLIAAADIAFALIAAANIACAHIAAgRIASAsIACACgAq1d9IAAAAIAAgBgArUdJIADAGIAAAGIADAMIAAgMIgCgFIgBgBIAAgGIADAGIAAgGIgDgNIACAEIABAEIAAgCIgBgCIgBgEIACADIgDg+IgUglIgWgaIgCADIAAAAIAAAAIAVAZIAUAkIADA6IAAANIgGgKgArHc9IgDg+IgVgnIgYgcIgBAAIgBABIABABIAXAbIAVAmIADA7IgBgCIABAEIAAgCIACADgAsqb6IACACIAQgOIgCgCgAsxb1IAEACIAQgOIgCgCIANgMIABgCIgKAJIAAABIgFAEIAAgBgAtTbwIAFgDIACAAIACAAIAMgTIgGgBIgMASIAFAAIgDACIgDgBgAtUbtIACgBIgBAAgAt1bpIAEADIACAAIgBgCIgBgCgAthbmIABACQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIALgBIALgQIgFAAIgFAIIAAAAIgBABIgCADIAFAAIgHAEIACgEgAtka+IgCAcIABACIABABIAAABIABADIAAABIAAABIAAAAIAOgBIAGgKIgBAAIgDgCIgBgBIgOANIgBgBIADgfIgEgFgAtgbCIAJALIACAHIABABIAQgOIAFgIIgCgJIAFgEIADgGIgIgPIAJAMIAAAAIABgBIgHgOIAIALIABgHIADAEIABABIAAABIADAAIACABIADAAIgBgCIgCAAIgBgBIgDAAIAAgBIAAgBIgEgFIAAgDIAAgFIgBgPIgQgZIgDABIgCgFIgNgLIgBAEIgBgCIgDgFIgDgIIgBAJIgEABIABgIIgDAIIAAABIgCAAIgBAHIADgGIAAgCIACAAIgBAJIgEgBIgBADIAAABIAAAAIABAEIAAABIABAFIADgBIAAgMIAEABIgBAKIACgBIADACIAAgJIAFABIgBAIIAEgBIgDgHIAAAAIAAgBIAAgGIABACIACAFIAAAHIANgDIAEAGIAAADIAEAMIgZgOIAAgDIgDABIADACIAAABIACAFIAAAAIADAKIAGgBIABACIAEAGIABAAIAAALIABABIgBAAIgBAJIAAABIAAABIgDAEIAAABIgIAHIgBAAIABABIAFAJIgGgBIABADIAAACIgBABIgHAGIgDgGgAtsa5IAAACIgBASIADAFIACgdIABACIABgDIgBgEIgBAAIgDAFIAAgIIgEgDIABAAIgBAAIgBAPIgJACIAAAAIADADIADAEIgBgCIADAEIABgLIACAAIADgEgAtybMIAEAFIABgEIgEgIgAsObFIAAADIADgGIAAgEgAsHa7IAAABIAAACIABABIABgDIgBAAIgBgBIADgEIAAgBIABABIgBgCIAAAAIAAgBIgBgBIgCgHIgBAGIADABIAAADIgDgCIAAABIAAABIAAAAIAAABIAAADIgBgCIgCAEIADACIABgCIgBgBgAsRa4IAAABIABAAIAAAAIADACIABgDIgDgCIAAgBIgBACIgBgCIAAAAgAsAa4IAAABIACACIABgBIAAgCIgCgBIgBAAgAtba2IAAACIABgCgAsEZrIAFAHIADAlIgDAYIABABIACABIAEgaIgEglIgLgSgAsSauIAEADIAAgDIgEgDgAstatIAFABIAAgDIAAAAIgFgBIAAAAIABACIgCgCgAsvatIAAgCIAAgCIgBAAIAAABIAAgBIgEgBIgBAAIAAgBIAAAFIABAAIADAAIABABIAAgDIABADgAsOaaIACAEIABALIAEACIgCgOIgHgOgAtmanIAAABIAAAAIAAgBgAsHZ1IADAhIgBAEIABABIACALIACgPIgDgjIgDgFIgDgBIgBgGIgGgJIAAAAIADAMIAEADIACAFIgDgCgAsUajIAEACIAAgGIgHgNgAtlacIABABIACACIABgKIgDgMgAtcaXIgBAHIAEgDIgBACIABgCIAAAAIABgBIgBABIAAAAIAAAAIAAgFgAtsaEIgCAVIAFACIACgZgAtYaXIAAgBIgBAAgAtbaMIABABIgBgEgAtiZ3IAAAAIABAAgAsPZ1IgBgEIgFgDIAAAAIAAAAIABAEIAFADgAt9ZyIACAAIABgDgAtoZxIAAAAIAAAAgAtzZiIABAAIABAAIgDAIIAAABIgCAEIABABIADgFIgBAAIABgBIAAAAIAAAAIAAgBIABAAIgBABIABAAIAAAAIAAgBIAAAAIAEgGIgBAAIgDgBIABgCIgBAAgAsVZrIAEADIgBgGIgDgCgAuMZrIALABIABgBIgBAAgAuZZrIAAAAIAAgDIgDAAgAuwZpIAJABIAEgCIgPgBgAuBZqIABAAIAAgBIAAAAgAsjZpIABABIAAgCIAAgCIgDgCgAseZiIABAEIADABIgBgEIgDgCgAslZkIgBgEIAEADIABAAIgCgFIAAAAIgFgDIACAFIgBAAIABAEIABAAgAufZkIgMgLIgHABIAGgDIgNgOIAAABIgBAEIAAAKIAEALIAAABIAXAAgAu2ZkIAAAAIAAAAIAAgBIgBgBgAuXZQIgBATIACAAIAVgBIAIgMIAAgIIAAAAIgeACIADggIgOgGIgDAAIAFAFIgGACIgBADIAAABIgBALIgIgJIgBABIgEAKIgLAAIAHAHIADgEIABgDIASABIAEgGIgDAIIgEAJIgBACIgBABIAAABIABgBIAAADIADgCIAMgCgAsWZcIgBgDIgLgTIAAABIgBgBIgCgCIAAAAIgDgCIAAABIAFAJIAAABIAGALIgCgKIAJAOgAtqZcIABAAIABAAIAAgBIgBAAIAAgBIABgCIAAADIAGgKIgBAAIgEgBIAAACIAAgCIAAAAIAAAAIgBAAIgCAAIgBAAIgCAGIAAADIABgCIgBACIAFgHIgBAIgAt0ZPIAAACIgBAKIABgFIAAABIAAgCIAAABIADgFIAAAFIACgGIAAgBIAAAAIgBgCIAAACIgDgBIgBAAgAt5ZWIAAgBIAAAAgAtmY/IAAACIACABIADAAIAAgCIgEgCIgBAAgAteZAIABAAIACAAIAAAAIgDgBgAtaY7IgBABIABAAIAAgBgAswYwIgCABIACADIAHAGIABABIgGgLgAthY5IgBAAIABAAIAAABIAAgBIAAgCgAtiY5IAAAAIgBAAgAstYnIAEAIIALAKIgLgTgAs6YzIACAEIACgBIgDgDgAuHYxIABAAIABAAIAAgBgAt/YuIgCABIAFACIADgBIgBgCIgCAAIgCgBIAAAAIgCABIABAAIABAAgAuDYvIAAAAIgBAAgAtxYuIABAAIAAAAIADgBIAAgCIgDgBIAAACIAAACgAuTYsIABgEIgUgJIAAAAIAHABIAAgCIgHgDIAHABIgBgDIAEACIABgCIAOgCIAAgBIgGgCIgHAAIgBAEIgFgBIAAgCIABAAIADAAIAAAAIACgBIABgCIgFgCIAGAAIAAgaIgDgUIgDgNIgBgDIgHgMIgCgDIAEgBIgDgHIAAgBIgBAAIgBgBIgFAAIABABIAAABIABABIgMADIAEAFIAAABIALgCIABABIgLACIgBgBIgDABIAAABIAEgBIABACIgFABIAAgCIgEABIACACIACgBIAAADIACAEIAFAJIAAAAIABAAIADAMIACApIgBAAIgCAFIAMgCIgEgDIAEABIABABIACAAIABADIgBgCIABACIgDgCIAAAEIgPACIACAEIAAABIACADIgEAAIABACIADgBIAAAAIABAAIAAAAIAAAAIADABIADABIAAAAIAAABIAHABIgFABIgCgBIgBACIADgBIAOAHIABgDgAuDYoIABAAIABACIACgBIABgBIgDgBIgCABIAAAAIAAAAgAvCYoIgBAAIAIgCIABABIABABIACgCIAAAAIAAAAIgEAAIgBgCgAtAYnIAEgBIgCgDIgJgBgAtOYlI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AgA8MTjIABAAIABgHIgBgDIgDAAIACAFIAAgBgA7XTfIgJACIABAAIABABIAJABIAAAAIABgBIgDgDIABABIgBgBIAFgBIgBABIABgBIAAAAIABAAIgBAAIABgBIgBAAIgEgDIAAgCIgEAAIAEACIgBAEIAAABIAAAAgAw3TiIACgCIgBgCIgBAAIAAAAIAAAAIgBACIgCgEIAAAAIgFgFIABACIADAEIAAAAIABACIgBgCIAAABIABAEIABAAIAAAAIABgCgA7lTiIAFgBIgBgCIABgGIgBAAIAAgBIABAAIAAABIAJAGIgHgIIAEABIgCgBIgDAAIAKgIIACgMIgGAHIgCAEIgEAFIgBAAIAAAEIgDAAIAAAAIACABIgCACIAAAAIAAAAIgIAFIgCgBIAAAAIAAgBIAAAAIAAAAIAAAAIAAgBIgBgCIAAgCIAIgBIABABIABgBIABAAIAAAAIgBgCIgCgGIgJAGIABACIAAABIgEAAIgLAIIgBACIAQAAIADgDgAwwTeIgCACIABAAIAAACIABAAIAAAAIACgDIgCgBIACgDIABADIAAgBIAAAAIABgCIgFgDIAAAAIgBAFIAAAAIAAAAIAAAAgA1uStIAAABIADAHIABAAIAAAUIABAHIAKAOIAKADIANgGIAfgUIgDgHIAAgFIABAAIgBgBIADgBIAAAAIAAAMIAAACIAAAAIAAABIAAgBIAFgDIABADIAAgDIAAAAIgBAAIgEgMIgBgBIAAgEIgCgBIgBAAIAAAEIgFgIIgBABIgBgDIgHgEIgFADIAKAGIADgCIACAGIAEACIAAADIAAAAIAAABIgCABIACAEIAAAFIABADIgFgLIgSAMIgDgFIAAgIIANgJIgKgHIgDADIgDgHIgGgEIgJAAIAAABIAFAMIAAAFIANgHIAAANIgEACIAEAGIAAADIADACIgDACIAAAAIAAAAIgHAEIgBABIgJAEIAFABIgGAAIACADIgEgCIAAgBIgFgDIAFABIgFgHIAAgCIAAgBIgBAAIAAgKIAMgBIgFgEIAGACIAAgGIgGAEIgBABIgGACIAAgKIgBgCIgDgIIgBgBIAAgBIgBgBIgJABIAIgDIgBgBIABAAIAAABIABgBIAJgGIgHABIgDACIgCABIAAAAIgCgCIgHAAIAGgCIgBgBIgBgBIAHgBIAHgEIAAAAIABACIABABIABABIABADIAHgEIAEgBIABAAIgBgCIgBAAIgBgCIABACIgDADIgIAAIAJgFIgLABIAJgGIAAAAIgCgEIgLAHIACADIgHABIgEACIgEACIgDgCIgBgBIgBAAIgFgCIAAAAIgFgBIgBAAIgBAAIgBALIABAAIAAAAIAEABIAAAAIAEACIAAAAIAEACIABAAIAAABIABACIABAAIABACIgBAAgA7RTdIAAAAIAAAAgAwsTLIAFAMIgBACIADABIABABIABABIABgFIgBgEIgIgKgA65TWIgBACIADAAIAAgCIgBAAIAAgBIgBABIAAgBgAwsTWIgFgGIABgEIAAgBIACgFIAAAAIAAgBIAAAAIgBgIIABABIABABIABgEIgEgJIgCgHIADgSIgegYIAAgCIgCgEIgFgEIAEADIgLgWIgcgSIgcgLIgggEIgeAFIgcAKIhBAqIACACIAAABIBBgqIAbgJIAdgFIAfAEIAcALIAZARIALAUIAAABIAAAAIADAFIABADIgCgBIABACIABABIAAgCIAEAEIgCgGIACACIABADIAAABIAYATIgEARIADAIIABgFIAAAJIAAgBIAAACIAAgBIACACIgBACIAEAJIgEgFIAAgBIgCAHIADADIAAAHIgDgGIAAABIACAHIAGAEgA7hTUIgBABIABAAIACgDgA7eTJIgBAFIAAAAIADgHgAw6TLIABABIABgGIgCgDgA5sTFIABACIAAgDIAAADIABgEIAJABIgCgGIAAgCIgFACIADgDIgEAEIAAAAIABgBIgCADIgBABIAAABIAAAAIABgCIAAACIgBAAgA1HTGIgDgHIgEACIgEgDIAAAGIAEgDIAHAFgA5tTEIABgBIAAAAIgBgDIAAgCIgfAAIAPgHIgUAAIAAABIgBAJIAUAAIACABIACgBIAOACgA0jTEIADgCIgDgHgA0fTBIACgCIgCgHgAw5S1IACADIABAIIABgFIgBgCIgBgBIAAgCIgBgFgA5qS/IAAAAIAAAAgA59S3IABAAIAPAHIAAgCIgBgEIALABIAAgCIAAgEIACgKIADgIIAAAAIgBgHIgLgBIABAHIgCAGIgCAIIgBAFIAAAFIAAAAIgEAAIgKgCgAw7S5IABACIABgGIgDgDgA5jS7IAAAAIACAAIACgBIABgBgA6WS6IAAAAIgGgDIgIAAgA69S3IAAgGIgHAFIAAgBIAAABIAAAAgA0oSvIAFADIAAADIACgBIgHgKIgCgBIAAACIAAgBIgCABIAAgCIgBgDIACACIgBgEIACADIgDgHIgCABIACAFIgFgDIgEACIAJAHIABAAIAAAAIAAABIADADIAAgCgAxQSzIAEACIgDgHIgEgBgAxXS1IABgFIgDgBIAAgBIgDgGIAEACIgCgFIAJAEIgDgHIgEgCIACAFIgQgMIgBgCIgCgCIgBgDIAAADIAAAAIgDgHIADAEIgEgKIgGgNIgOgJIgEgCIgVgJIgYgDIgXAEIgVAHIhBApIAAAAIAEAKIBCgqIATgHIAUgDIAVACIAUAIIAOAJIAGAMIABACIACAGIACAFIACACIASAOIgBACIAFACgAwqSXIgEAUIADAJIAGgfIgggYIAAgBIgPgeIgegUIgfgMIgjgEIggAFIgdAKIhCArIACAEIBCgqIAdgKIAfgFIAhAEIAdALIAdATIAKAUIAHAGIABACIACADIACAEIAAABIAEADIABACIAAgCgA8fSgIgDAEIgBABIAAABIgBAEIAAADIABADIAAABIABACIAEgBIgCgDIAAAAIgBgDIAAgBIABgFIAAAAIADgEIAAAAIABAAIADgEIAAABIADgEIAAAAIABgEIAAAAIgBgFIAAABIgCgFIAAABIgCgEIAAAAIgcgcIgIgNIgDgCIABAAIgFgCIgEAAIgTADIAAAAIgFgBIAAAAIgFgCIAAAAIgDgEIAAAAIgBAAIgBgFIgCgKIgDAEIABAHIAAABIACAFIAFAFIAFADIACAAIAEABIABAAIAFgBIAAAAIAPgCIgCAAIAFAAIACACIAAgBIABABIgBAAIADABIAHANIAbAbIADAEIACADIgBgBIABAEIAAACIgDADIgDADIAAAAgAxWSvIABgDIgDgCgA78SlIAAAIIAGgEIgGgGgA0oScIAEALIAEgDIgFgKgA2GSlIAAgGIADAAIgDgIIAAAIIgCgBIgBAAgA5eSkIAAgCIAAgBgA1KSjIAAAAIAAgBIgCAAgA2RSgIgBACIAAABIACgCIAAgBgA3JScIADAHIAAgGIAAAAIAAAAIAAgDIgBAAIAAAAIgHAAgA1bSdIABABIACAEIABAAIAJAAIABAAIgFgEIAHACIgBgEIAAAAgA2ZSiIAEgBIgBAAIADAAIgCgFIABgBIACAFIAAAAIAAgKIgCAFIAAgCIgBACIgBgDIgBAAIAAAAIgBgBIAAAAIABAAIAAgBIgCABIgDgDIgEAIIADgHIgEAHIADgJIgDgBIgEAKIACABIABAAIAFAEIAAAAgA2QSgIADgBIAAAAIABAAIgBgEgA3RSBIAAABIAAABIgFAHIAEADIAAABIACABIAAAAIAAAQIAHgSIAAgBIAAAAIAAgBIABgCIgBgBIgBgBIgBgBIgBgBIgCgCIAAgBIAAgDIAAAAIACgDIgBgMIgBAAIgDAJIADgBgA2QSeIABgFIgBgFIAAAAgA1bSdIAAAAIgBgCgA2xSSIADAJIAAACIABgBIADAAIAAgIIgDAIIgBgBIAEgKgA2LSYIABAEIABgIgA5oSUIAJAEIgBgFgA1OSVIAEADIAGgBIgKgCgA2JSTIAAAAIABgBIgBgDgA5qSTIAAAAIgBgBIABABIAAAAgA5gSRIgBgEIgBgCIADAEIgFgIIACAEIAAAAIAAgBIgJgGIgMgNIgCgGIgBgBIADADIgDgSIgFgFIADgEIgBgDIgBgBIABgDIgCgKIgCADIABgCIgCADIgBADIgCADIgDgBIgFAOIADAEIADAJIAGASIAPAQIAEADIACAAIABAAIALABgA2RSQIgBABIAAAAIABgBgA2OSQIADgFIgBgLIgDgCIAAABIAAgBIAAAAIgCgDIABABIAAAAIgBgBIAAAAIABABIABAAIAGAFIAAAAIAAABIAAgBIAAAAIAAgBIgDgCIAAgFIABAAIgBgBIAAAAIAAABIgDAAIAAAAIgCAAIAAABIgDAAIAAAAIAAACIgBAAIABABIABAAIAAAAIACABIAAAJIABgBIAAgHIAAgBIAAAAIAAAAIAAABIABACIAAAEIABgDIAAAHIgBgDIABAFIgBACIAAAAIgBAAIAAgBIAAAAIAAABIAAgBIAAABIAAAAIAAAAIAAABIAAgBgA2ASGIABAAIAJACIAHADIACAAIACACIAEACIABABIAMgIIgNgIIgHgDIgQgDIgCgBgA2XSJIgCAEIAAACIADgFIgBgBIAAAAIACAAIAAAAIgCAAIgBAAgA4DSLIgBgBIAAAAIgCgBIgEgBIgEABIgCgBIAAABIABAAIABAAIAHACIAEAAgA20SJIABABIAAgBIADgFIAHgBIAAgBIgHgIIABAJIgBABIgCAAIAAgBIAAABIAAAAIgFgNIgDABIgDACIAAAFIAGAHIABgBIADgBIABAAgA5HSKIADgBIgBgEIgEgBgA4FSJIABAAIgBAAIAAAAIAAgBIgBAAIgCgBIgBAAgA41SJIAGgBIACgBIgHAAIgBAAgA07SIIAAAAIgCgCgA08SFIABACIABABIABAAIAAgBIgCgCgA2aSCIAAACIAAACIAAAAIABAAIAAAAIACAAIAAABIACABIAAgCIgBgJIABAAIgBgBIAAABIgCAAIAAgBIgBAAIAAAAIABgBIgCAAIABAAIAAABIgBAAIABAAIAAABIAAAAIgDAIIACAAIAAgBIAAgDgA9ARDIANAEIAHAHIAEACIAJAPIAXAYIADACIAFAIIADAHIACgRIAAgCIgDgDIgDgDIgWgWIgJgQIgIgGIABAHIgBgEIgBgEIAAAAIgBgDIgBAAIABADIgEgEIgQgFIgMgBIgFgPIgCgDIAAAOIgEAEIABACIgEAAIgBABIAEABIACACIAAAFIAFAAIABgBIgGgEIgBgDIAAgBIAIgCIACAAIACALIgDgBIgBAAIgBgBIABABIAAAAIACACIgCgBIAEAGIAAgBIABACIgBgHgA4RSHIAAAAIAAAAgA5kRhIADAJIAAAAIAHAHIAIAGIAGAGIACAFIAEABIABACIAQACIAAgBIgQgDIgBAAIgCgHIgCgCIgBAAIABAAIABgBIgCAAIgFgFIgHgGIgHgGIgCgGIgEgCgA2SSHIAAAAIABgFgA2SSHIAAgFIgBgFIgCAAgA4aSEIABABIAAAAIAFACIACAAIAAgBIgHgCgA4tSHIAAAAIAFgBIgDgBIAIgFIgBgBIgCAAIABAAIACAAIABAAIgBAAIgGgCIAAAAIgBgBIgBABIgEADIgDAAIAHgEIAAAAIABgBIACgCIgHgEIgLgKIAAgFIAAgBIAHABIAFAAIAHAAIAAgBIAAAAIgDgCIgBgEIADgHIABAAIAEgBIAAAAIgBgEIAAAAIgDAEIADgFIAAgBIgFAEIgDADIAAAAIAAAAIgOAKIgBAAIAAABIAAABIABABIgNgCIAMgBIgCgIIgHgEIgFgCIgGAOIABABIAFAEIAOAGIgKgCIAHAGIACADIABAEIABABIACADIAAABIABACIAAACIAFgBIgBACIACgBIAAAAIABABIABAAIgEABIABgBIgEAAIABAEIAAAAIAIgBIACAAgA4aSHIgBgBIABAAIgCgCIABACIgBAAIABABIABAAgA3qSGIABAAIAAAAIAAgHIAAgBIAAgBIABgGIABgCIgCgCIgBADIgCAGIABgCIgCADIAEACIgFgBIAAAAIAAgBIAAAAIgCgCIACABIgCgDIAAgBIgGgGIgCABIABgCIgBABIABgBIAAAAIAAAAIAAgBIAAABIgBgBIgEgBIADAEIABgBIgBABIAAABIANASIADAAgA4cSGIgBAAIgGAAIgCAAIABAAIAAAAIABAAIAHAAgA4USEIABABIABAAIgCgDIgCAAIgBABIACABIAAAAgA0yR/IgDACIgBAAIACADIABAAIACgCIgBgDIACADIAAgBIgBgBIgBgBIAAAAgAxOR1IAFAJIAAABIAFAFIgCgHIgIgIIAAAAIgCgCgA2kSCIAAAAIADgGIgBgBgA1CR+IACADIACgBIgCgDgA2JSBIAAgBIAAAAgA3FSBIABgDIABgCIgFACIgBABIACgBIgCABIAAAAIgCAAIABAAIACAAgA4gSAIgBgBIgBAAgA4XR+IABABIABAAIgCgBIgBAAgA3jR/IABgCIgEgHIAAADIgBgCIAAADIABgBgA4LR/IABAAIAAAAgA4jR+IABAAIAAAAIABAAIABgBIgGgEIgDACIgBAAIABABIAEABIACABIAAAAgA07R5IADAEIADgCIAAgBIgDgDgA2YR5IAAACIAAAAIACAAIAAgBIgBgBIACAAIAAAAIgBgEIgBADIAAABIgBgBgA15ReIACADIABAAIAKADIADAAIAMAFIAUAMIAEAFIACgBIgFgGIgUgMIgMgFIgDAAIgLgDIgDgBIgJgGIgBAAIADAAIgEgCIgBABIAAABIgBAAIgBADIAHADIAEADIACAAIgGgDgA12R6IgEgBIAAAAgA2hR5IAAAAIAAAAIAAgBgA2gR3IABABIgBAAIABABIAAgBIAAgCIgBAAgA23R3IAFAAIgGgGIgGgFIABAAIgBAAIAAAAIgDgCIAJAKIAAgCIABADIgBgBgA14RZIAEAAIAOAEIANAFIAWAMIAFAHIAEgBIgHgJIgXgNIgJgEIgTgFIgHgBIgDAAgA4YRuIAGAEIAIgGIgGgEgA3TRvIgDgFIgFgDgA4lRnIAEACIAAABIAHAEIAJgHIgJgEIAAAAIgBAAIAAABIgBACIgBADIAAgDIABAAIgBAAIABgCIgFABIgDAAIAAAAIgCABIAAAAgA2HRkIAAAAIAIAGIAJADIgQgLIgCAAgA34RtIgBgBIAAAAgA2cRqIABABIAAgBIAAAAgA4ERqIAAAAIAAABIABgBIAAgBgA3CRkIAAABIAEADIAAACIABAAIADgGIgEgBIgCgFIgBABIgBgBIAAAAIAAAAIABACIABAAIgBAAIAAABIgCgCIgBABIACABIgEACIgCgCIAEgBIgDgCIAAABIgBACIAAAAIAAABIgBACIADgBgA4ARpIABABIgBgCgA4CRpIgBABIACgBIAAAAIAAgBgA4KRoIADABIABAAIgCgFgA4ARnIAAABIAAAAIALgFIAAgBIgBgCIgIAAIgCgBIAAAAIgCAAIACABIgCAGIAAAAIAAAAIAAABIAAAAIABAAIAAAAgA4ORmIABABIACABIgBgCIAAABIgBgCgA4VRhIgCABIAHAEIAAAAIACgCIABAAIAEgDIgFgJIAMAGIACABIAAgCIACABIAHABIABABIADAAIAEgNIAAAAIgNgCIgBAAIAAAAIAAABIgDALIgBAAIgHgDIgBgBIgFgCIAAABIgBgBIgDABIAAAAIAAAAIAAAAIACAEIABAAIgBACIAAgBIAAgBIAAABIgBAAIAAABIAAAAIAAAAIgDgEIgCADIAAAAIgCACIADABIAAAAIAAABIAAAAIAAgBIABAAIgBAAIACAAIgBAAIAAABIgBAAgA3JRkIgBABIACAAIgBgBIAAAAIgBAAgA3kRkIAGABIgGgDgA4aRiIAAABIABgCIAAAAgA4hReIABABIAFADIAAAAIABgBIAAAAIABgBIgBAAIAAABIAAgBIgBAAIAAAAIAAAAIAAgBIACgHIACAEIgCADIABAAIABgDIAAAAIADgDIAAAAIgBgBIAAAAIgCgDIgBAEIgBgCIACgEIgDABIAAAAIAAAAIgGAIIACgFgA2YRhIACAAIgCgCgA29RgIAEABIABgCIgBAAgA4ZRhIACAAIgCAAgA2QRgIABAAIgBgBIgBAAgA4ZRcIgBADIACgEgA24ReIAAABIAAAAIAEgBIgCgBIAAAAIAAAAIgBgBIAAAAIgBABIgBAAgA3DRdIACAAIABABIAAAAIABAAIAGgBIgEgDIgDgCIgDAAIgBABIABABIgCAAIgCAAIACABIABAAgA3HRXIgFABIgGADIABAAIAAAAIAAABIADABIADgBIABgBIADAAIgBgBIgBAAIABAAIABAAIAAAAIACgBIABgCIABAAIADABIABAAIgDgDIAAAAIgBAAIgCABIgBAAIgCgCIABACIgBAAgA4IRTIAFAJIgCgLgA4jRaIABABIAAAAIACgFgA4SRZIAAAAIAAgBgA5gRYIABABIAAgDgA2PRYIAAABIABAAIAAgBIgCAAIACgDIAAAAIAAAAIgDgBIAAAEIAAABIABAAIAAgBgA2+RUIABACIABABIACAAIABAAIgDgEgA3eRRIACADIAAAAIAEADIABgBIACgFIgIgCIAAAAgA4jRXIADgBIAAAAIADgJIAAgBIAAgBIgBAAIAAAAIAAAAIgBABIgBAAIAAAAIAAABIAAgBgA4PRXIABgBIgBgCIgCgFIgDABIAAAAIABACIgBAAIAAAAIAAABIABAAIAAABIABABIAAABIAAABIABgCIAAAAIgBABIACAAgA3iRWIgCgIIAAgCIgCgCIAAACIAAABIAAABIgBgBIAFAJgA4vRHIAGAOIADgHIgGgHgA4TRUIAAAAIgBAAgA4WRTIAAAAIAAAAIAAgBIgBAAIAAABIAAAAIABAAgA4WRSIAAABIAAgBIgBAAgA3RRQIABABIABABIACAAIgCgBIgBAAIgBgBIgDgCgA4MRMIAEAGIADgBIgBgFIgCgCgA5eRRIAAgCIgDgBgA3bRLIgBACIAAABIAIACIAAgCIACgEIADACIgDgDIAAABIAAAAIgBAAIAAAAIgBgBIgBgBIACACgA4WRIIABACIgBAEIAAAAIAEgCIgBgDIABgDIgCABIAAAAIAAAAgA3uROIAAAAIAAAAIAAgDIABAAIAAAAIABgDIgBgBIgCgCIAAAFIAAAAIABABIgBAAIAAgBIAAAAIgBgFIgGAAIgBAAIgBgBIgBAAIgCAHIAAABIAAABIACgBIAAAAIAHABIAEABgA5ARFIAAAAIAAAAIAAAAIACABIAHAEIgBgEIgIgBIAAgBgA22RAIABABIAKAHIABgBIAAAAIgLgHIgBgBgA4vRHIAAgCIgGgBIgDgBIA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gIgMIgRAIIgFgCIgCgBIgOAEIgJgFIgFgBIAAAAIgFgCIgCAAIADgCIAAgBIgDADIAAAAIgCAAIgSgBIgEADIgBAAIgPgCIgEADIAOACIAGgDIANACIgLACIAEAAIACAAIgRAHIALACIAFgDIASABIAGACIAEgBIABAAIgCABIAEgCIAAAAIgCABIAHgGIACAAIAHAEIgIgBIgGACIAJgBIAFADIAAgBIACAAgA4BP3IAEgCIgDACIAEgDIAJgDIgDgBIgDgBgA3qPvIAHABIACACIABgBIgDgEgA45PoIAOgCIgIgBgA99PZIgNiMIgJgpIgBgDIAAgDIAAgCIgGgGIgBgBIgCAAIg0gIIgCAAIgBAAIg8AAIABiQIA5icIADgSIgCgXIgNgTIgEgDIgNgJIgBgGIgGgMIgFgFIgFgEIgCgBIgCgCIgJgRIABAGIgDgJIACADIgBgGIgLgWIgQgIIAAACIgBgCIABAAIgIgQIgOgUIgPgGIAEAFIACADIgKgGIgBADIgCAEIAAABIAPAFIALARIAIARIACACIAQAIIAIARIABAHIANAVIAIAHIADADIAEAHIABACIACAHIACADIAQAMIALAQIACASIgEAPIg4CdIgCCeIBIgBIAzAGIAEAEIABACIAAABIAIAvIABAOIADAaIAIBcIALABgA4bPVIgCABIAIgDIABgBgA3HO0IABABIAfgOIgBgCgEggfAImIAJgYgEggMAHNIABABIAAgBIgBgBgEggAAHIIACACIgCgFgEggBAHJIABABIAAgBIgBgDIAAAAIAAAAIgCgDIgOgKIgIgJIgBgCIgBgEIgBAAIAAgBIgBgHIAAAAIgBgBIgBgBIACACIgLgIIgRgeIgBgBIAAgCIgBgFIgCgFIgMgGIgCgBIgGgHIgBgCIAAgBIgJgTIgEgGIgEgBIADAAIgDAAIAAAAIgHgBIgGgHIgBgBIgCgDIgBgBIgHgCIgIgGIgBgIIAAgDIABgGIACgFQADgGAAgFIgCgGIgGgFIgBgBIgBAAIgFgFIgJgNIgMgMIAAgBIgCgDIgBgCIgEgIIAAgFIABgEIgEgDIgBABIAAAGIAAACIAAAEIABADIADAIIABABIACACIABACIABABIALAKIAJANIABABIAAABIAFAEIACACIADABIABABIACAGQAAAGgEAEIgBAFIgBAGIAAACIAAABIABAKIAIAGIACACIADABIADAAIABABIACACIABABIAHAJIAKABIAAAAIgCgDIAHAFIgEgBIADAEIAJAUIACACIAIAJIALAFIgCgEIAHAHIgEgCIABADIgBgCIACAJIARAcIAGAHIADACIADACIABABIABAGIAAABIABAAIACAGIACACIAHAHIAPALIACAEgEgg3AFOIABABIgBgCIgBgBgEghZAEmIAAABIAAgBIAAAAgEghlAEQIAEAJIAAAAIgBAFIAGADIACAEIAAAAIABABIgIgNIADgGIAJAFQADgIAAgHIgCgJIgKgOIgBAEIgGAGIAFAGIADAIIgBAJIgBgBIgEgDIgKgDgEgh9ADbIAFAIIAEAFIAFADIAIAPIAGgNIgIgMIgEgCIACADIgCgCIACACIgJgGIAHADIgIgLIgEgEIgBADIgCADIgBACIgCACIAAgBIgBgBIgGAPIAFgGIADgHIABABgEgh0ADpIgBgBIgDgCgEgiHADRIAAABIAHAGIACgEIAAACIAAgDIAAABIgCgKIACAEIgBgEIAAAAIAGAGIAAAAIAFgJIgDgVIgJgOIgMgJIgDgDIgEgIIgCgCIgJgKIgPgIIgcgKIgTgBIgYAOIgEABIgCAAIACABIgDgBIABAAIgBgBIACAAIgEgBIACABIAAAAIgFgBIADAAIgFgCIgJgGIhyhjIgSgTIgbgQIgSgPIgkgUIgMgMIgtgVIgugOIgDAKIAuAOIAqAUIALALIAlAVIARAOIAbAPIARAUIBzBjIABAAIgCgBIAEAFIgBgCIgBgCIAJAHIAHAEIAHACIAIgCIAZgMIAGAAIAKABIAXAIIANAHIAHAIIAKAOIgCgBIAEADIgCgCIAIAHIADACIAHAKIACAPIgBADIAAAAIgEAIIgCACIAAAAIABgDgEgirADKIADADIACgDIABgBIACgEIAAAAIAAAAIAAgBIAAAAIABgCIABgBIgDgCIAAADIABACIgBgBIAAgBIgBgDIABAEIAAAAIAAABIgDgCIgCAFIACgCIgDAFIABgDgEgisAC4IgBAFIABABIAFAEIAAAAIABgDIABgBIgEgDIgCgCIgBgCIAAAAgEgi6ACsIAEAGIAHAJIAAgBIADgDIgGgHIgDgGIgEgEIgFgDIgUgGIAAAAIgPAIIgLAEIgNABIgCAAIgOgDIgCAAIgBgBIgNgGIgNgKIgBAAIAAgBIh0hkIgQgRIgYgPIgSgOIgmgUIgLgLIgigQIglgLIgTACIgGAFIAYgDIAkALIAhAPIAMALIAmAVIARAOIAYAOIAPARIB1BlIAAgBIACACIANAKIANAGIACACIACAAIAMADIADAAIACAAIAOgCIAEgBIAIgDIAOgIIARAGIAEADIgCgDIAFAEIgDgBgEgjyACJIgCACIAFgCgEgqrgBdIAAALIAOAgIAkAEIASgCIABAAIADgDIgEADIACgFIgUADIghgEIgMgaIgBgDIAAgDIAAgGIADgDIgFgBgEgqDgBFIAEgEIAFgEIACgDIgEgDIAAAAIAAAAIgCAAIAAABIgCAGIAAABIAAAAgEgp4gBTIABACIACgCIAcgEIgCgJIgKABIgNAKIgBAAIAEgEIACgFIgMABIgDADIgBgDIgBAAIABAFIgCADIABABIABgCIAAgCIABgCIADAGIAGgBIgCACgEgqHgBbIAAAAIABABIACgEIgIgBgEgqigBoIAAAAIAAAAIACADIAGgFIgGAAIABgBIADgDIgGAAgEgqXgBpIAAgBIgBAAgEgqagBqIACAAIAAAAIgBgBgEgq8gCVIgCAaIARAOIACgCIgPgNIABgXIATgKIADgBIAPAAIgCAAIADAAIAAAAIABAAIABgBIAAAAIAAgBIgBgCIAAAAIAAAAIgCAAIgBAAIABAAIgEAAIgDAAIgIABIgEAAgEgqagBvIgCABIADABIAAAAIAAgBIAAAAIAAAAIACgDIAAgBIACgDIAAABIABAAIAEABIADgBIAMgDIAEgDIAAAAIgIgGIAAABIgEAAIgIACIgDAAIgBAAIgGAIIAHgBIgDABIAAADgEgqXgCVIADAHIAFABIAMAFIAEAEIgDACIAHABIADACIABABIAEgDIAAAAIAFgBIgBgCIgBgBIACgBIgEgKIgFAFIAHAGIgDAEIgGAAIgCAAIAAAAIgEgDIAGgEIACgDIgHgGIgOgGIgVgCgEgp9gCeIgEgHIgDgCIgCgEIAAABIAAgCIgBgBIABADIgCACIgCgEIABgBIACgCIgCgFIAAAAIgEgBIAAACIADAHIgEAFIACADIAEgEIABADIAKAHgEgplgDBIgCAFIAFADIAAAMIABAEIgBABIAHAHIADgGIgBgYIgDgBIgBgOIgHgQIgDgDIgGgHIgLgIIgPgVIgJgJIAAgDIgCgOIgBgCIgEgKIgGgLIgFAJIADAFIAEAMIAAABIACASIALAKIAPAVIALAJIAIAIIACADIADAHIABADIAAAEIABACIAJAGIgCAJIAAgCIgBADIgBgHIABABIgBgEIAAADIgFgHgEgqMgC+IAAACIgBABIABAAIADAAIAAgBIAAgBIABgCIAAgCIABgEIAAABIAAgBIABABIAAAAIgBgCIAAABIAAAAIgDgDIgOgLIgPgWIgQgOIgEgOIAAgCIgBgOIgBgBIgCABIAAgBIAAAAIAAABIAAAAIAAABIABAQIABACIACAHIACAFIAPAPIAQAWIAOALIABABIgBgCIACACIAAAAIAAgBIABACIgBgBIAAACIgBgBgEgqYgEFIgBgEIAAABIAAgBIgDgDIAEAHgEgq/gEcIgCgDIgDgDIAGgFIgBgBIgBAAIABAAIgCABIABgBIgCAAIgDAEIgDgDIAAgBIgBAAIgCgBIABACIgDgCIAGAHIgNABIgBAAIgHABIgEAAIgPgEIgYgUIAQgXIABgBIAAAAIgDABIgSAXIAbAWIAQAEIAEABIADAAIAIgBIAAAAIALgCIAAAAIADADIAAABIAEAAgEgragEtIAEgFIgEACIAGgFIgCADIASgLIACgEIABgBIgCgKIAEABIACAAIABABIAFgHIgDgCIgHgBIABACIgDAEIgBgHIgBAAIgLADIgEACIgFAEIgCABIAJgBIgEACIgEAAIABABIAAABIgEABIABAEIACABIgCAAIAEAAIgCAAIADgBIAEgDIADgDIACgBIAJgCIABAAIgGAJIgSAKIACAJgEgrcgE6IAAABIABgBgEgregFKIAAAAIABACIACgCIgCAAIAAgBIgBAAgEgtVgGWIAGAKIAHAJIAKAKIAPAKIACADIAJAOIADANIACABIACABIACAAIAGAAIAIgEIANgHIAAAAIgCgCIgCACIgIAFIgJAEIgFAAIgDABIgCgCIgCgBIAAgCIgCgLIgLgRIgPgJIgJgIIgIgLIgFgKIgEgLIgCgIIgBgCgEgrjgFQIAAgCIgBgBgEgrmgFSIgBgDIABABIABABIABgBIAAAAIAAgBIAAABIgBgCIgGAAIACACIACABIABABgEgrtgFYIABABIACgBIgCgBgEgrlgFkIACACIAIgCIgCgCgEgrMgFsIABABIABgKIgDgCIACACIgDgDIABABIgCgCIAGgBIADgeIgkAJIgMABIgEABIgFAEIgFAFIgGAEIgFABIgCgBIgBgCIAAgMIgCgFIgPgJIgDgDIABABIgDgDIACACIgGgJIgEgPIAAgCIgFgLIgJgKIgHgEIgCgDIABACIgDgEIACACIgcguIgEAIIAaAqIADAEIAGAFIAIAIIAEAKIABABIAAACIACAIIACAGIADAFIADAFIAGAFIAQALIACAFIAAAOIABABIACACIAFgCIAHgEIAGgFIAGgEIAEgCIAEAAIAHAAIAbgHIgCAVIAAAAIACAAgEgr3gF0IACACIABgJIgCgBgEguLgHyIAAgCIABAAIgCgBIABAAIgBAAIAAAAIgEgFgEgudgINIgCAJIAIgEIACAAIABgBIAFgDIgIAAIANgFIgDADIgCACIAEAAIAEgHIAFgBIACgHIgEAAIAFgKIADgMIACgFIABgBIgFgEIgEAIIgDAMIgHAOIgHgBIgCgCIADABIgGgHIgCAJIAEAFIABAAIAGgCIgDADIgBAAIAAAAIAAABIgFADIgBABIgBAAgEguWgIUIAAAAIAAAAIgDgCgEguqgIuIABAAIAAAAIABgBIgBAAgEgt5gI3IAAAAIAAABIAAgBIAAAAIAAAAgEgthgLMIADACIAIALIABACIACANIABABIAAABIgBANIgFAXIgBABIAAABIgCAEIAAABIgBABIgEAGIAAAAIABABIACACIAAABIAAAAIAEAHIAAAUIgGAIIgBABIgCABIgPAMIgFAGIAHAAIABAAIABgBIAQgLIACgCIAJgMIAAgYIgFgJIAAgBIACgDIAAgBIACgEIABgCIAAgCIAFgXIABgNIAAgDIgDgMIAAgEIgKgPIgDgCgEgt8gJsIAAAAIAAABIAAAKIABgEIAAAAIAAgBIAAgBIAAABIAAAAIABABIABACIgBgEIgBABIAAAAIABgCIgBgEIAAAAgEgt+gJqIABACIAAABIAAgEgEguGgKYIABgBIgBAAgEgt4gKlIABAAIAAgBgEguigMTIgPAaIAQAyIAJASIAVAPIAAAAIgVgQIgIgRIgQgyIAPgZIAIgBIAAgCgEgt1gKsIAAACIAAgCIAAABIAAgCgEgtzgKtIAAgBIgBAAgEgt2gKuIABAAIgBAAIAAgBgEgt2gKuIAAgBIgBAAgEgt0gKuIABAAIgBgBIAAAAgEgtygKvIABAAIAEAAIgEAAgEgt3gKyIAAAAIAAABIAAgCIgBAAgEgt5gKxIAAgBIgBAAgEguBgLUIgHAGIAKAAIAAAAIAAAAIAAAAIAAAAIABgBIgDgFIAAgBIAEgDIACAAIAAACIACAEIgCAAIgDADIAAAAIAAABIAHAAIAAAAIAAAAIABAAIABgBIgDgCIgBgBIAHAAIAJgGIgBAAIgEAAIgNAAIgIgXIAAAAIgCgGIgCAAIgBADIgCABIAAACIgCAAIgDACIAGgBIAIAZgEguNgMTIgBAFIABgFIABgBIgBAAIAAAAgEguOgMhIABAIIAAABIgKADIgBAAIAAACIABgBIAKgCIAAgCIABgBIgBgIgEguMgMUIAAAAIAAgBIABAAIAAAAIAAgBIAAAAIAAABgEguNgMUIAAAAIABgBgEguNgMVIAAAAIAAAAIAAAAIABgBIAAAAIAAAAIAAAAIgBAAIAAABgEgtqgMcIAAAHIAGgEIAAgDIgCgJIAHAEIAGABIAGgEIgKgDIgKgFIgBgDIACgKIgGAEIgBAGIgGgCIgHAFIAOAEgEguLgMXIAAAAIAAABIABgBIgBAAIABgBgEguMgMXIAAAAIABgBgEgs5gMfIAAADIACAAIAHACIAEABIAEAAIAJgCIAFgJIABgEIABgFIAAgBIAAgJIgCgGIgBgCIgBgBIgCgDIgBgBIgBgBIAAgGIABADIAAACIADgLIgFgJIgBgBIgBgCIgBgCIAAgCIgDgGIgEgFIgBgBIgBgBIgEgDIgBAAIAAgBIABgBIAGgHIACgFIAAgJIABgFIADgFIAEgCIAAAAIAAAAIAJgBIAAAAIAPgKIADgSIgBgIIAGADIATAHIALgPIABgCIAHgWIAAgCIACgJIgDgBIgCgBIAAACIgBAJIAAACIgEAIIgCALIgBABIgBABIgIAMIgQgFIgHgEIABgFIgEADIACAAIgCAAIADACIgBACIAAADIgFgDIAAgBIgEADIAEgBIABAKIgDAPIgCACIgLAHIgCAAIgBAAIgHABIgEACIgEAFIgBAFIABAFQABAFgDAEIgHAKIgCgDIABAFIABgCIACACIACAAIAAAAIgBABIgBAFIAEADIAAAAIABABIAEAEIABAFIAAABIABAAIAAADIACACIgBgBIACADIABAAIADAHIgBADIAAABIAAABIgBAEIAAABIABAFIADAEIACAFIABACIAAAHIgBABIgBAFIAAABIgEAIIgIACIgKgEIgFAAgEgs+gM0IAAAAIgBACIABAAIAAgBIAAgBIAAABIAAgBIAAAAIABgBgEgsjgM/IAAAAIABAAIgBAAIAAgCIgBgCgEgswgM/IABAAIABgBgEgtBgNEIAAgBIAAAAgEgtUgNJIABABIAAABIAAgBIAAgBIgBAAgEgs1gNpIABgDIgBgBIAAAAIgBAAgEgs5gNwIABACIACABIgBgFIgCACgEgsIgO7IABAAIAAgBIAAgCgEgsMgO+IADgCIgCAAgEgrbgPzIAAAHIgCAFIAFAAIABgEIAAgLIgIgCIgBgBIAFgDIAGgCIADgBIACgDIgBgGIABgCIACgEIAAAAIABgDIgBgBIgBABIAAAAIgBAAIgBAAIAAABIgCAEIgBACIABAGQgBADgEABIgGABIgFAEIgBABIgNgEIADAEIAAAAIAAAAIAAAAIAAABIAAAAIAAgBIABABIACABIgCACIgBAAIAAACIAAAAIgDAEIANgGgEgqkgQJIgBABIgEABIAAADIAFgCIACgBIAEgEIAFgDIgCgDIgFADIACAAgEgqXgQTIAAACIABAAIAAAAIACAAIgBAAIAEACIADAAIAMgEIgBAAIAFgBIACAAIABgBIAGgDIACgCIAGgMIgJgKIADgHIAJgPIAAgCIABgNIAAgCIgJgSIgOAAIgBABIAOAAIAJARIAAACIgCANIAAABIgJAPIgCAHIABABIgBACIAHAJIgCAEIgEAIIgHADIgBAAIgFABIABAAIgMAEIgIgCIACAAIgDAAIAAAAIAAAAgEgqWgQRIABAAIgBAAgEgr+gQfIACAAQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAIAAgBgEgp5gQuIACgDIgDgDgEgrZgUAIgBABIAAAAIAKAMIAGgnIgXANIAAAGIAHAHIAAABIAAAAIAAAAIAAAAIABgCgEgusgW7IAKADIAFgFgEAyOA0VgEAybA0LIABAAIAAABgEArEAzDIAAABIgBABgEArEAzEgEAobAyzIAAAAIAAAAgEAzDAw+IAAAAIgBABgEA2oArlIABACIAAABgEAJzArbIAAAAIABAAgEAJqAq5IgBABIACgCIACgBIAFgFIAHgEIACAAIAIACIAOAIIgOgFIgLABIABgBIgEABIADAAIgQAHgEAKJAqlIABgBIAAABgEAKDAqegEAICAqTIgBAAIAAgBIgHgBIAAAAIgGgBIAEgBIABAAIgBAAIgDgDIAGADIgBAAIAFACIgBgCIAAAAIABAAIgBgBIgBAAIABABIgBAAIgBgCIgLgCIAQAAIABADIABABIAAABIAGAJgEAIBAqSIACABIgDgBgEADzAqNgEADxAqFIgCAAIAEgBIgCABgEAHEAqDIgBAAIACABgEAFYAp2IgBgBIACABgEADwApkIgZACIASgKIABAAIADADIABAAIAKAKgEAD6ApiIgFgEIAHAGgEAEPApjIADAAIgDAAgEAEOApjIABAAIgDAAgEAITApeIgGgEIAOAGgEAGoApdIAEAAIgIABgEAGoApYIAEAAIgJACgEAKnApQIACgCIABAAIAEgDIgOALgEAF+AojIADAAIgDgBIAMADIADACIAPALgEAClAoxIgDgGIACACIAAAAIABAAIAAAAIAAABIABAAIgBAAIAAABIAAACgEAClAotgEAB9AohIAAAAIAAACgEAMJAofIAAABIgEAAgEADbAoggEAB1AoUIgBAAIACABgEADLAn+IAAgBIAAAAIAAABgEAOpAntIABgBIAGgGIgLAQgEAXTAnlIgCgCIACAAIAAACgEAPZAnZIAAADIgLAFgEAQMAnggEgBCAmhIAPADIADAIgEgC9AmpIASgFIACgCIAMgBIgHAGIgPACgEgCrAmkIgCACIAGgDgEgC7AmkIgCgBIANgDIgEAAIgMAAIARgEIgBACIAEgCIgDAAIABAAIAPgNIADABIgRAPIAEgBIgDABIAHAAIgEADIgMACgEgCYAmUIAFADIgLACgEgCSAmYIABAAIgCAAgEgCRAmXIADgDIgCADgEgCOAmUIgGgEIABgBIgEgDIAHgGIAEADIgHAGIAGAFIgBAAgEAAKAmUgEgCcAmQIAEgDIAEADIgEAEgEAAEAmQIAAgBIABABgEgCUAmQgEgCbAmMIABgBIADABIgBABgEgCXAmMgEASVAmJIACgBIALgBIgSAEgEgCMAmJgEgCRAl/IAAgBIgDAFgEgAxAl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AaIADAXIAAAFIAAAOIgIAbIgBABIABAgIAKAaIgJAJIABADIgIAEIgWAYIiRCqIgIANIihC8IgKALIAAABIABACIAHAJIACABIBrCCIADABIAhAZIAPAvIgDAYIAMASIABADIACABIARAaIAOAMIAOAtIgBACIARApIADALIAGAHIAMAaIAAABIABABIABAAIAoAlIAGAJIgDADIAKAMIAXAVIADAEIASAFIARAKIAWACIAXAFIAgAPIA1ALIASAJgEAy+AaSIgCAEIgBAHIAIAUIAEgGIABgZIgHgNgEAyzAaEIgCAGIADAEIABgMIgEgGIgEgMIABAAIAEADIAEADIALAOIAAABIABgEIgFgNIgBgEIgFgOIgBgCIgKgHIgBgBIACAIIgBgBIACAEIgXgWIAAAAIAGACIAFACIAFAEIgBgBIACACIgBgBIADABIgQgWIgGgDIgCgJIgMgQIgEgFIAAgCIABgbIgOghIgIgFIgGgDIARAQIAHAfIgCASIAFAFIAAAFIABALIgHgQIgBAFIAAABIAEAFIAHAMIgDgCIgIgBIgBAAIgDgDIgIgJIAAgEIADgdIgJgYIgQgMIgIgDIgCgBIh+iNIB6CRIADADIAIADIACACIAMAIIAHAWIgDAbIAAAIIAJAJIAHALIABAAIAAABIABAEIABADIADAAIAFADIAAgCIgBgEIgFgEIACABIgDgBIAFAAIgBgDIgGgJIAFABIAAAAIAEABIgEgBIALAHIACAIIAAACIAIAFIADAFIABAEIAAgDIAAABIAHAMIABADIAMAKIABAFIgGgFIgEgBIAAAAIgBgBIAAABIAAgBIgFgCIAJAGIgBgCIADADIgCgBIALAPgEAx7AZKIABABIAAAFIAMAGIACAFIAFAGIABADIACAGIACABIAFAFIAFADIACAGIABABIALAJIAAABIABgBIgHgVIgJgHIgEgDIACAGIgBgDIACAFIgBgCIACADIgPgOIAKAEIABABIgBgEIgCgEIgBgBIgIgLIAAAAIgBgBIgJgFIAAABIABAEIgBgBIAAAAIAAAAIgIgFgEAx7AYcIABAAIAAAAIABgCIgGgGgEAxnAQhIAJADIAIgPIAAAFIACgCIACgCIgIgDIACgDIgEgBgEAx6AQRIAAABIAEABIgCADIAFACIAAgEIgDgBIADgDIAAgNIgLANIACABIAAAAgEAzhAOSQgaAcg8BIIAAANQBhh5gDAAIgIAIgEAvkAI0IDxAiIAUAIIAFAEIABABIAFADIgKgIIgUgJIjzgjgEAvkAI7QBbAMA/AHIiagVgEAu4AJJIgCgVIAAAAIAnAGIgBgCIgmgFIgBgGIAiAFIgCgDIgggEIAAACIgDAAIABAGIADAAIAAABIgDAAIACARIADAEgEAuyAItIAAgDIADABIgCgOIgFgVIAAgCIABgJIAAgBIADgYIgGgtIAAgQIADgcIgBgTIgCgFIgCAFIgBgEIgBgBIAAACIgBAMIADgJIAAABIABASIgCAcIAAARIAGAsIgFAhIABADIAFAVIACANIgNgCIgIgDIADAEIAEACIAOACgEAuqAFuIACAFIAAAAIAHgVIgCgCIADgMIAGgpIAAgCIgDgEIAAAGIgGApIgCAJIACADIgCAHIgCACIACgGIgCgCIACgEIgOgOIgCgCIgFgFIgIgFIAQARIAAABIALAMIgBAEIgFAGIAAAAIgCADIAAAAIgCADIAAAEIADgEIAAAAIAAABIABgBIABgCIABgBIABgBIADgEgEAujAFyIAAABIABgCgEAu1gELIgBAIIgOASIgQAKIgFAFIg/BVIgBADIAAAcIAFAXIAwCiIANAqQAIAaAEARIAZBaIgBAhIADACIAAAAIABgjIgYhZIgZhUIgxilIgFgWIAAgbIABgDIA+hUIAFgFIAQgKIAOgTIAEgQIAEgCIAOgFIAWgnIgRghIgQgOIgEgCIgKgGIgWgGIgVgBIgdABIgUgBIgSgHIgLgLIgDgKIABgJIABgBIAKgYIACgdIgKg+IgCgLIAKBJIgCAdIgLAZIgBAIIgBgCIAEAPIALALIATAHIAVACIAdgCIAUACIAWAFIAOAIIAOAOIARAfIgVAlIgPAFIABgEIgDgaIAAAKIgBACIABAOIgBAFIgBAAIgFACIgIABIgBAAIABgCIgQAGIAZgCIAEgBgEAtLgJ0IgIAIIgIAKIgHANIgBAJIAFAkIAAACIABAEIgBgEIAAgCIgBgMIgDgYIABgJIAGgMIAQgTIAMgHgEAwTgTCIAAAAIABgDgEAwDgZGIAAAAIgBAAgEAJXgieIgNgSIAAADIgBgDIABAAIgGgQIAAABIAAAAIgEADIgBgDIgLAIIgBgCIgDAEIAAABIABgBIABAAIAGgCIAFgEIADgBIABACIAAAAIACAEIAGAMIAOAMgEAIogizIgPARIATgOIABgBIAEABIAAgBIgBgDIgBABIgCACIgFgCIADgDIAEABIgBgDIgCABIgBABIgQgEIgCABIgHAFIAJgBgEAI2gixIAMgDIgLAAIgBAAIgBAAgEAI7gi+IgGADIAKgEIgBgCIgDADgEAJEgjFIAAADIgBACIABgBIAAAAIAAgBIAAgDgEALbgmqIgRAUIgZAOIgGAUIgFAGIg6ApIgVAWIgNAVIgHAaIgJAWIACAmIACADIAEgCIgBgCIgCgkIAJgXIAGgYIANgUIAUgWIA5gnIAAgBIABAAIAGgHIAGgUIAPgIIACgFIAEgEIAMgHIgKALIgBABIgHAEIgGAMIAFgJIAagTIALgDIgRADIgBAAIAFgFIADgJgEAaRglyIABAEIAIgcIgBgEgEAL5gmvIgHACIgLAYIAJgJIAIgPIAEgDgEAcAgmaIgBgBIAEAAIgFAAIgQgKIgjgBIgHACIgCgBIgBAAIgJgCIgLgCIAAABIAUAEIAAABIABAAIABAAIABAAIAHgCIAjABIAOAJIABAAIADABgEAR7gm+IAdAhIgEgJIgagcgEAaLgmkIAAAAIACAAIgBgBIgCAAgEAacgmlIACABIAAgCIgCAAgEAaHgmqIADAEIAAABIALgDIgBAAIABAAIADAAIgDgBIgBAAIAAgBIgjgNIAEACIAeAMIgHACIgBAAIgFgGgEAaegmoIAAgCIgCAAIAAACIACAAgEAOMgn2IgTABIgLABIgdAMIgfAYIgJAFIgDACIgRAGIgbAPIgCAAIgLAEIgIAHIANgEIACgEIAGgDIAPgDIAOgIIATgGIACgCIACgBIgSAHIAKgIIAMgEIAGgBIAbgWIAcgLIAKgBIAUgBIBOgRIAcAAIAhAOIgBAAIgIAAIASAFIABAAIgDgCIgHgDIAKAAIAJAFIgJAAIABAAIAQAEIgIgEIASgBIAKAGIgMADIAMgBIACAAIgBgBIgBgBIAGgBIAGAEIgBAAIgDAAIAGACIgDgCIAEACIgBAAIAGACIgHgEIgBAAIAdgGIACgFIglAHIgOgJIgdAAIgBgBIgpgRIgeAAgEAL8gmwIAJgCIAGgFIAIgCIgKACIgNAHgEAaZgm4IgBAAIACAAIgEgSIgKgOIgGgTIgSgTIgFgOIgGgKIACAFIAAACIADAEIAFAOIASATIAFAOIABAFIACADIABABIAHAKIADARIAAAAgEASrgnrIAMgEIgQADIgIgDIgMgCIgDAEIAOACIABAAIAIgBgEASCgnuIACAAIACgEIAAgBIgDAAgEAYVgnxIABAAIAAgBIABgCIAAAAIgBAAIgBACIABAAgEAYYgn1IAAAAIgBABIACgCgEAYYgn3IAAABIAAAAIgBABIABgBIABgBIgBAAIACgBgEATpgpGIghANIgXARIgoAlIADABIAmgkIAXgRIAggMIA3gDIASAEIgXAKIALgDIgCAAIADgBIANgGIAGACIAQAKIABAAIALAGIgIgGIgSgLIgGgCIgCABIgCAAIADgBIgUgFIgIABIgCAAgEAZngoUIABACIgCgFgEAYmgpPIAYAHIAfAVIAIAXIABAAIADAGIgKgeIghgVIgXgIIgUgCIgZADIgeAOIgFAGIACABIAFgGIAdgOIAYgDgEAW+godIACAAIABgBIAAAAgEAXDgohIgBACIABgBIACgCIgCACIADgDgEAXKgotIgFAJIACgCIAEgGIABgBIAPADIAMAFIACgBIgOgFIgQgDgAuMb3gEAzSAa4IAJAJIABAHIgBgDIABAEgAtDayIgCgJIADAGIABAHIAAAAIgGAGIACgCIgDADgEAy0AaiIAAgIIAEAIIgOAPgEAyhAaaIAAgRIgCAJIgKAKIADgFIAAgBIABgBIAAABIAAABIAAgBIABgCIAFgHIAAgEIAAgDIgGgJIACABIgDgCIABABIgEgDIAIAEIACABIAAAHIACACIAAgBIABABIABgFIAAgBIABABIADADIAAgBIABADIgBgCIgBARIgLAMgEAyIAZtIAEACIAAgBIAAgBIABABIAAAAIAAABIAAAAIACAFgAtZZzgAvdZuIgDgDIAGABIADADgAvpZuIgDgDIAHAAIADADgAvlZrIgEgDIAGAAIADADgAvjZoIgDgDIAHAAIACADgAthZlIABgLIAEgBIgBAOgAtwZPIABAAIgCACgAsgZLIgCgEIACAEIABADgEAyWAZMIAAgDIgGgJIADACIgFgFIACADIgGgEIgBgCIgDgEIALAFIADACIAAAAIACAFIAAACIABAJgEAyUAY9gEAxeAYrIAEADIAAAEgEAxpAYhIAGAGIABACIAAAIgAt+YtIACABIABAAgAugYZIgGgDIAGABIAAACgAugYXgAtnXxIgDgBIAAgDIADADIAAABgAvaXKIAEAGIgEABgEAvUAV+IAXAbgAxrU8gAxvUzIACAAIABAAIgDAFIgDABgAxlUSIgFgFIAHgBIAFgIIACACIAEACIgGALIgFABgAxYUIgAxlT8IgBABIAAgBIAAAAIAAgBIgBgGIAGgJIgFgKIAAAAIAAAAIgIgTIAMAFIAIALIACgGIgDgJIAKAPIgDAJIgGgJIgCAJIACADIADgEIABAEIAAACIgBAEIAGAHIACABIgDAGIgDgCIgEgDIADgEIgCgGIAAABIgBgCIgCgCIAAAAIgCACIABACIAAAGIADADIgFAKgA70UBIABAAIAAAAgA7oUAIAAAAIAAAAgAxnT7IAAAAIAAgBIAAABIABACgA8ZT8IAKAAIAAAAIgKABgAxnT7IAAgBIAAABgAxVTwIgBgDIACgFIADAFIgEAGgA7uTdIABAAIAAABgA7tTdgA7kTXIgBgCIABACgAxcS1IAEAKIgDAKgA1FTEgA0sTAgAxYS/gAwxS6IAAAAIABgIIABALgA1oShIABACIAAAAIAAAAIgIABgA5oSdIAAADIgBACgAydSfIgBgCIABABIAAABgA2aSXIABAAIAAAAIABAAgA2QSNgA2QSNgAxMSEIAAAAIACACgA2ySEgA3PSCIABABIAAABgA3OSDgA4wSCIADAAIgCAAgAxESAIAAAAIABABgA2JSBgAxPR/IgBgBIABACgA2RR+IAAgDIABADgA2WR9gA40R4IAAAAIABAAIgBAAIAFAAIgHACgA2MR5gA6KRiIgBgGIAGgLIAHADIgCAHIABABIAAABIAFATgA3ARiIAAAAIAAgCIAAAAIACADIgCgBIABABgA31RfIABAAIABABgA4dRfIgDgBIAFABgA33RfIgBgBIAAAAIgBgCIAEACIgDAAIABABgA4sRYIACAAIgBAFgA4oRYIgCAAIABgDIABACIAAABIAAAAIgCACgA4oRYIABgBIgBABgA4oRYgA3HRWIABAAIAAAAgA4QRWIgBgBIACgBIgBACgA34RJIACAAIABAAIAAgBIAAAAIADgBIgCABIAAABIACgBIgCABIgBABgA+YQ1IAHABIgFAEgA+RQ2gA4pQxIABAAIAAAAgA5iQnIADgKIgCALgA4vQjIgEAAIAAgDIADABIABAAIAAAAIABACgA5AQeIgBgCIAFABIgBADgA48QdgA33QLIgBgBIABABIAAAAgEAutAIBIABAFIgBAFgEggDAHFIgCgCIADADgEgggAGjIAAgBIABABgA/3GUIAEAFIACAFgEAuiAFQIAAgBIABADgEggtAFJIABABIABACgEgg0AFDIAFACIACAEgEgh2AE7IAAgBIABABIACACgEgiFAEIIgFgEIgCgFIAIAJgEgjRAChIgBAAIABAAIAAAAgEgiPACZIADACIADADgEgp+gBKIgBABIgDACgEgp/gBJgEgpwgCFgEgqJgDDIAAgBIABADgEAu4gEUIAAgBIADgBIgBAEIgDABgEAt9gEfIABACIgBAAgEgrGgEgIgBgCIAAAAIACgCIABACIgCACgEguTgITIABAAIADAAIADgGIAAAAIAIgCIgDAIIgEABIgIgBgEguSgIZIABAAIACACgEgt7gJlIgBgBIABABgEgtZgJ9IABABIgBgDIABACIABAAIgCAEgEgtXgJ9gEguAgLVgEAtsgLmIABABIAAAAgEguIgLuIgBgBIACAAIAAABIgBAAgEgtsgMoIAAAAIgBgFIAAgCIADABIACABIABABIABAHgEgtogMwIAAABIAAACgEgtogMvgEgslgNfIABACIABAAIAAADgEgrpgP4IAEgBIABgBIAEABIAAABIgCABIgCABgEgrggP5gAor7DIhIgMIhFgUIhvgVIgngSIg5goIhAgjIgMgLIgEgEIgIgCIgsgdIgGgCIgPgJIgUgYIgbgUIgSgSIgQgaIgKgaIgEgHIgEgIIgBgDIgEgOIgDgEIAAgFIABgFQAAgBgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAIgBgBIhIAMIgVgGIAJACIAxgVIgQgEIAigGIgBgDIgqAGIAAAAIgFgCIgFABIgBAAIgDACIgGgCIACAAIgCAAIADgCIAFgBIgVgIIgBAAIgZAEIiegVIgjgLIhDgjIghgYIgfggIgXgjIgMgYIgGgeIABgFIgKgRIgEgMIgDgSIAAgUIACgEIgOgxIgGg6IgHgTIgBgdIgFgQIgOAEIgqgEIgbgaIgNgVQgOgRgGgKIgIgIIgGgJIAEADIgHgIIADAFIgG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AAQAPgEASAHIANAEIAFgJIAKgLIALgKIARgLIABgBIAOgVIAMgLQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIAGgKIAOgRIASgPIAdgNIATgBIAIgNIADgMIAXgaIAigUIAngQIABgBIAAABIAEgEIAVgbIAYgUIAcgQIAdgKIABAAIABAAIAPgQIA1geIAUgUIAXgQIAggJIAFAAIAOgWIBGASIAXAQIAfAdIBBBNIAcAaIATAaIAxBmIhSAbIgDABIARAQIATAqIAHAXIAAAcIgCAGIAABOIgqAAIgBABIgKACIAPAMIADAOIAvAAIAbBBIABABIAIAMIAHAIIAPAVIAIgFIAFAWIAEAGIAEgDIACAJIACgBIADAKIABgNIAKAAIAAgBIAAgJIADABIAAAJIAAAAIABAAIAFABIAwBaIAAAAIgDAKIABAEIABAXIAAgBIAHASIAGA/IATBBIgFARIgBABIAAAAIABAAIgBAAIABABIASAcIABAXIgBADIABAGIAFALIAQAXIAVAVIAXAQIA5AdIAWAHICJASIABAAIAAAAIAEgBIANgFIAggGIAaANIgNgFIABAGIASAHIgCgGIgEgCIADACIgcgQIghAGIgNAFIgBAAIgDABIgBAAIABgBIhDgKIBDAJIgBAAIgBAAIACAAIAEgBIAMgFIAigGIAcAOIgCgFIgagOIgjAHIgNAFIAAAAIgBABIABgBIgDABIgBAAIACgBIiJgRIgUgHIg4gcIgWgQIgUgUIgOgWIgFgKIgBgDIABgCIgBgaIgSgdIABgBIAFgPIgThDIgGg/IgHgQIAgAFIACAFIAGBAIAUBJIgEAMIAPAYIABAhIABADIAMASIARARIASANIA0AbIAQAGICAARIALgEIAugJIBFAjIAMADIAcAJIANAGIAVANIAOAPIBYAtIhDALIADAJIAHAMIAKAaIACAEIADADIAfAXIAMAPIAAAAIAqAcIAAAAIAbALIAQARIAAABIA5AfIA2AmIASAIIBmAVIBEATIBIANIA5ARIAvgHIA8gVIA2gOQATgFAhgGIBjgUICBgnICdgiIB6gHIgDgJIgJgnIgKgbIgEgSIgOiQICwAPIARgMIAIAAIAyAJIgPAJIABAAIAEABIABAAIAPgJICkAcIgGAEIgIAHIgEACIgDABIgIAKIgLAFIgEA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IAAgGIgEgBgEgaOgooIACAAIABgJIgDAAIAAAGIABgEgEgaMgo6IABAGIABgHgEg0ggpFIgIAJIgDAGIAIgFIAFgMgEgaHgo9IgCABIACADIAAgDIACAAIgBgCIgBABIAAgIIgBAAIgBgGIgDgDIAAAAIgEgFIABANIACAAIABAAIADABIAAAIIgBAAIABABIAAgBgEg07go/IgCAFIAFgEIACgHIgDAEIAAAAIgCACgEgaFgo/IABADIAGABIABgBIgFgGgEgaNgo9IADAAIgDgDgEgaSgpUIAAAEIACgVIAAgCgEgaegp/IABAFIAEACIgDABIAIAfIADgTIgDgLIABABIgCgCIgBgDIgBABIACACIABABIgFgCIACgBIgCgCIgDgFgEgangphIgIgHIAEgCIAIgJIAHgEIgBgDIgGgCIgFACIgJAJIgCACIAAAAIABADIACADIABABIgBAAIgDACIgHgDIADAEIABAAIADgBIAMAFgEgaQgpsIABACIAAAAIAGAAIABgIIgHAAgEgaIgpqIADAAIAAgIIgDAAgEga+gprIgCABIAFgBIgBgBIADgBIABAAIAFgCIgHgLIgLgMIAAgBIgIgJIgGgJIgFgGIgBgBIgBAAIgIgNIgFgEIADAMIgIgSIACADIADADIgBgHIgTgsIgOAAIAAAAIACACIgDgCIgBAAIACACIgEgCIgBAAIACAHIAAAAIAMAAIARAnIABAJIAGAFIAIAMIAHAIIAYAfIAFAIIgJgBgEgcsgqQIACADIADAAIAFgEIgCgDIgBgCIAGADIASgLIgOAEIgEgDIgGAEIgCgJIgMgJIAEAJIABAFIAHAFIgDACIgDAAgEgc2gqNIgCgJIgLAAIgOgNIgBgCIgEgGIgYgTIgBgRIAAgCIABgHIgBgBIABAAIAAgBIAAgCIgCgEIABAHIgHgEIgBABIABABIAGAKIgEgCIACABIgEgCIAAAAIgCAAIAAADIAAAGIAAACIACAQIAYATIAGAIIASAQIAQABgEg2tgq/IALgZIgGAKIgBhAIgEgHIgBgBgEgcegrMIgFgGIAEAEIgHgLIgDgCIACgBIARAAIgEgIIgQAAIgDACIgEgQIgEgCIgEACIADANIgIgHIAIAQIACgCIgBgFIgBgCIAGAFIADgCIABAFIAAAAIADACIgDACIgBAEIgDg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CAEIACACIgCgMIgBAFIABgEIgBADIgBACIgDgGIgBgDIAAAAIAAgBIAAABIgCgIIAAAAIgBAAIgHgFIgIgDIABABIgBAAIgDgBIAEADIABAAIAAAAIgBgBIABABIgBgCIAJAEIgKgCIgBAAIABABIAKAEIgLgDIgDgBIADAFIAIAFIABAFIABACIABACIACAEIAAAAIACgHIAAACIABgDIAAAEIAAAAIADAOIACACIAAgEIABAIIgBgCIAAACIALALIAHADgEg1agtrIAAABIAAgBIgBgBgEgdxgtsIACgCIAAgDgEgdugtyIgBAEIACgBIABgEIAGgBIAAgJIgGAKgEgd3gtxIAAABIAIgCIAAgFIAGgFIgGABIAAAEgEgtyguCIABABIAAACIABAEIAAAJIAAgDIADgGIABgFIgEgBIgBAAIABgGQABABABAAQABAAAAAAQAAABAAAAQAAAAgBAAIACAAIACgJIgNgXIgKgFIACAGIgDgBIAEAEIgBgDIAFADIAFAIIACADIAEAJIgBAGIgCAAIgCgCIACADIgDgDgEgcdgt3IABACIAAACIACgGIAAgIIgDgFgEglugt6IgCABIACgBIABgBIAAgBgEgtsguAIAIACIAGADIAWABIAAgFIgUAAIgHgEIgJgCgEglrgt+IgBABIACgBIACgEgEgdbgt/IABAAIgBAAgEgdRgt/IAAgBIAAAAgEgdRguAIAJAAIAJgJIgIAAgEgdeguGIADAGIgBAAIAKAAIAAAAIAAgDIgDgGIgKAAIABACIACAAgEg1LguJIACAIIABgEIAAgLgEgdvguEIAIgBIgCgEIgGAAgEgvDguKIADACIgBgBIgCgCgEg1aguNIAAABIABgDgEgdgguOIgCgDIAAgBIAJAAIgDgFIADADIgDgEIgBgBIABACIgBgBIgVgIIgagZIgMgRIgIgUIABgWIAAgEIALgWIAQgPIASgKIAVgEIgEgFIgDgDIgRADIgVALIgOAOIgEADIgMAZIgCAfIAJAWIAOATIAcAbIAQAGIADAAIAEAEgEglLguTIAUgEIAmgVIgmAVIgUADIgJgCgEglbgubIAAAAIABAAIgBAAgEglegubIABAAIAAAAgEglQgudIAAAAIAFACIASgDIAEgDIAfgRIAMgPIACgEIACgEIAFgQIAOgWIgDACIADgEIgDADIAGgMIgDAKIAAABIAIgFIABAAIAAgBIAAAAIABgBIAAABIAAAAIAkgOIAWgMIAkgpIAHgHIALgGIAWgHIALgDIAGgCIAFgDIAXgXIA2geIAXgYIAAAAIgFACIADgCIgDAAIAJgBIgDABIgBAAIAdABIADgBIgGgGIgFgDIAJAEIAFgCIgEgDIgBAAIgDABIgDgBIgbAAIACgBIgCABIAAAAIAAAAIgEACIgXAYIg1AeIgLAMQgOAMgEACIgLADIgKADIgPAFIgNAHIgJAIIgiAnIgUAMIgmAPIgMAHIgBACIgCADIgMAUIgGASIgEAHIgIAKIghASIgNADIgOgEIgEgCIAAAAIgDADIgCAEIAFABIgDABIAGAAIAEgCIgDAFIgCAAIgIgEIgDAGIAJACIAAAAIABgBIADgDIAFACIABAAIgBAAIABAAIgBAAIABAAIABAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIABAAgEgvKgufIAEACIgBgBIgCgBIgCgBgEgvMguiIACABIgCgDIgBgBgEgvBgujIAAAAIAAgBIgBgBIgBgCIABAAIABAAIgBAAIgBAAIgCgDIACACIAAgBIgBAAIABAAIgCgBIgLgDIAAABIAAAAIgBgCIgBAAIABABIACAEIADABIAAAAIACABIAEACIADACIACAAgEguSgutIAAAIIAIgQIgDgDgEgwjgvVIAQAwIAggKIgBAAIgeAJIgQgvIgDgSIABACIAAgBIgBgEIAAACIAAABIgBgDIAAAAIAAgCIgKgUIgDgDIgEgFIgCgDIABABIgCgCIABABIgDgCIAAABIAEAEIAEAFIADAEIAIASIAAgDIABAEIACACIAAAFIgBgDIABAEIAAgBIABABIgBAAgEgvAguoIACABIAOgOIgDACIACgCIgEADIgJABIAEAFIgBAAIgEgBIgDgCIgGgCIAAgBIACgDIAAAAIgCgBIgIgGIAAAEIAGACIAAAEIACABIADAEIADADIAAAAIgCAAIACAAIAAAAIABABIgCAAgEguJgu5IgBAEIABABIADAJIAFABIAAAAIgBgCIAAgBIgEgKIgDgCIABgBIgNgbIgJgGIACAHIgFgEIAAABIADAHIgBAHIACAEIABgDIAAADIACgLIgCgEIAFACIAHARIgBgBIgFgDIgDgCIAHAIIAAABIAFAGIAAgBIgDgIgEguFguqIABAAIgBgBgEgwcgvXIAOAqIAUgHIgBAAIACAAIAKgDIAAAAIgKgEIATAAIAAgFIgJgCIgYAHIgKgeIgEgXIAAAAIgBgCIABACIgEgGIgBgCIgIgSIgEgEIgFgFIgCgDIgEgHIAAgBIABABIgBgCIAAABIgMgIIgBgBIAAAAIgFgBIgUgOIgCgGIgBgEIACALIgGgFIACAKIgCgCIgBgJIgBgBIgCgBIgDgWIgFAJIAAABIAEAJIAEADIACAJIACACIABADIgEgEIABAEIABABIAMAIIAAACIADADIAEADIgBgBIgBgBIgDgDIAAgBIAAAAIgBgBIAKAHIAEABIAAABIABABIgBgCIABAAIgCgBIgHgKIgCgFIgBgCIAEAHIAOAKIABABIABABIAAAAIAJABIgJAAIgBAAIgCgBIgFgBIACADIAGADIABABIACAAIACABIgCAAIAAAAIgBgBIAAABIAAAAIgDgBIgBAAIgCAAIABABIADABIADAAIABAAIABAAIACACIAAAAIgDgBIAAABIABACIADAEIAFAFIADADIAJATIADAFIAAgBIABACIgBgBgEgvTguxIABACIAAgFgEgvdgvNIAAANIgBAOIAAAAIAEgIIACABIABABIAFAEIAAgCIABAAIABABIAAAAIgBgBIAAAAIABAAIAAgDIAAABIgDgBIAAABIgCgCIgBAAIgBgBIgCgBIABgBIACgEIgEgEIgBgQgEgvpguyIACAAIAAgBgEgvlgu0IAAAAIAAAAgEgvvgu3IAIACIAAAAIABgFgEgvhgvDIAAABIABAAIAAgBIgBgBgEgvLgvEIACABIAAgEgEg1xgvhIABAHIAAAAIgBABIgBAFIACABIABAAIgBALIACgKIAAAAIACgIIAAgGIgFgCgEg13gvKIADgKIAAgCIAAgDIABACIAAgEIAAgIIgDgBIgCgEIAFADIgBgGIgEgCIgBgBIAAAAIgCgCIAAgBIACACIABgHIAAAAIABABIgBgEIAAACIgBgGIAAgBIAAgJIgFgKIgCABIgLABIAGALIAAAGIgBAEIAAADIAAABIAFAKIgDgCIAEAHIAAgDIgBgCIACACIAJARIAAACIABABIAAACIgBgCgEgdmgvjIAEAGIAPAOIAHACIAEgGIgGgDIgOgNIgEgGIABAAIACgCIAbgFIAAgBIgBgIIgCACIgaAFIgCABIgDABIgDAEIgBACIAAACIABADIABACIADgEIABgFIABACIABABIAAAAIAAAAIAAAAIAAABIgBABIgBABIAAgBgEg1zgvUIAAgBIgBgBgEg1/gvbIAJAEIgKgQgEguugvhIADAEIADABIAEACIADACIgCgGIgEgCIgLgCgEguegvbIAAAAIgHgTIgfgDIgGACIAGACIgFACIgGgCIAEgCIABAAIgXgHIABADIgDgBIACAPIABACIAEACIgCgFIgCgNIARAGIgDABIgIAGIgCACIAHgBIAFgEIADgBIAEgBIAAAAIAGACIAGgCIgHgCIABgBIAbAEIAFAMIAFADgEglQgvhIACAAIgCABIAGADIAFgDIgJgBIADgBgEglDgvgIABAAIAAgBIAAAAgEglCgvhIABAAIAAgBgEglEgvhIAAAAIgBgBgEggHgzjIgQALIgVAWIg1AeIgRASIgEACIggAKIgWANIgTAPIgUAaIgHAIIgJAFIgnAQIgaAQIgNAPIgDAJIgEAGIAAABIgIANIgGAPIgFADIAEACIAAAAIADACIADgCIAEgJIgJAHIAAgBIAAABIgBABIABgEIAJgEIACgIIANgWIACgHIAMgNIAZgQIAngPIAKgGIAIgIIAUgaIARgPIAWgMIAagJIAGgBQACAAADgDIARgRIA1geIAVgWIAPgKIASgGIANABIAFgHIAIAAIAHgJIAhAIIAOAKIAbAZIBBBNIAbAZIAPAUIAaA3IguAPIgSAMIgBABIAAAAIABABIABABIAAAAIAEADIARgLIA1gSIgfg/IgPgVIgcgZIhBhNIgbgaIgQgKIgngKIgMARIgTAAgEg1sgviIAAgEIAAgDIgBgGIgEgIIAAADIgCAEIAAgBIgBAFIAAgBIAAgBIAAgBIgDgFIgCAFIACABIACABIABAAIAAABIABAAIAAgDIAAgBIACACIAAAKIAFACgEg17gwRIAFAKIAAAJIgBAEIAAABIAEAHIAAAAIABgEIgBgJIABADIgBgCIABACIAAgCIAAgLIgFgKgEgwCgv0IAEACIAPgFIAMADIgBgDIgLgEgEg2Ggv2IAAAAIgBgBgEgvlgwGIgDAAIABACIACAEIABAJIADABIgBgLIgDgFIABgBIgCAAgEgkugwKIgBAFIAEgJgEg1vgwVIAZAMIAaACIAIgBIgCgEIgGACIgZgCIgUgLIgEACIABAAIgCAAgEgw6gwQIAEAEIgFgGIgCAAgEg1ngwZIABAAIASAJIAYACIADgBIgKgLIgNgBIgegPIAEABIgEgBIgBAAIABAAIgCAAIgMADIACAFIABAHIAEgBIACAAIACAAIAEAAgEg2BgwWIgLACIAAACIABACIALgCIACAAIgCgEIAAAAgEg2ZgwQIABAAIABgBgEg2VgwSIgBABIACgBIACAAIACgCIgEACgEgxAgwTIABABIAAAAIABAAIAAAAIgCgDIgBAAgEg2UgwTIAAAAIABAAgEg19gwXIABAEIAFgBIgCgEgEgw9gwTIgBgBIAAABIgBgCIgBAAIABABIAAAAIABABIABAAgEgw+gwUIAAgBIgBAAgEgw/gwVIAAAAIAAAAgEgxBgwXIABABIAAABIAAgBIAAgBIgBgCIgBgBgEgxEgwWIABAAIgBgBIgDgBgEg12gwWIAEAAIABAAIgBgBgEg1ugwXIABAAIADAAIgBAAIgFgDIgGABIgCgBIAAACIABAAIABgBIACABIADAAgEg2RgwXIAAAAIABAAIAAgBgEg2QgwXIABAAIACgCIAAAAIAAACIAMgCIAAAAIAAgEIgBgDIgCgFIgKACIABgRIAAgBIgCASIABAAIgBADIABAEIAAACIABgBgEg2XgwZIgDABIADAAIACgCIABgDIgDADIAAAAIAAAAIAAABIABgBIABAAgEg2fgwYIAFAAIgDAAIACAAIABAAIABgBgEg2BgwlIACAFIABAGIAEgBIAAAAIgBgHIgCgFgEg2XgwbIADgDIABgFIgBAAIgCAAgEgdPgwiIACAGIAFgMIgCgFgEgwBgwvIADACIAGAIIAAABIADAAIgBgDQgEgGgCgCIgEgCgEgxKgwnIgBgBIgBAAgEg2VgwqIACACIACgOIAAgBIgBgEIgBAAgEgddgw2IACABIAFAHIAIgGIgGgHIAAgBgEgwdgxOIAFAFIACACIABAAIAIAGIADAEIACACIACAEIACADIAAgFIgHgKIgNgIIgHgKIAAAAIgVgSIACAEIACABIAMALIgFgBIgDgBIgFgBIgBAAIACACIAOAEIABAAIgDgDIAEABIABABIgBACIgBgBIgBAAIgKAVIAAAEIAMgYgEgdAgxFIgFAMIAGgCIAFgMgEg0Agw9IAMADIABgBIgMgDgEg2Ngw9IABACIAAgCIAAgBgEge4gyeIgCABIAEADIBBBOIASAQIABAAIAIgFIgUgSIhAhOIgEgDgEgxagxAIgBgGIgCgBIgBgDIACgDIgEgRIgEAHIAAgBIgBgFIgBgCIAAAAIgGgZIgMgBIABAAIAIAkIAHgNIABADIgHANIAAABIAHgMIACAKIABgEIAGANIAAABIAEAJgEgwZgxIIAEAHIgDgGIgBgCIgFgDgEg0XgxDIADABIABgBIABAAIgEgBgEg0CgxVIgLAPIABABIAMgRgEg0LgxSIgBABIgHAKIADABIAJgOgEg01gxKIACgBIgCAAgEgx2gxRIACAEIABgBIgBgEIgKgoIgCgBgEgw0gxZIACABIABAAIgDgBIABAAIgBAAgEgz4gxkIgBABIAAABIgDAEIAAADIAFgHIgBgCIACgBIAAgBIgBAAIgDABIgBABIAAABIADgCgEg0CgxgIABAAIAEgCIABAAIgBgBIgEACIABgBIgDABIABAAIABAAgEgz7gxpIABADIABAAIgCgFIAAAAgEgxCgyXIAMAvIABABIABAAIgBgBIgMgvIgFgNIAMgXIABgCIgygBIgigYIgJgIIgDgBIgSgIIgBgBIgMgSIgUgOIgQAFIAAABIAQgFIATAOIAMASIABABIgFgCIAJAGIgEgEIASAIIADABIAKAIIAeAWIABABIAAAAIABABIADABIACAAIgCgBIAvABIgMAXIgCgGIgOgKIAAABIANAKIADAGIgJASIgDADIgBABIAAABIAEgEIAJgRgEgzqgx8IgBADIAAACIABgFgEgx4gx8IABABIAFABIAFAAIAAgCIgEAAIgIgBgEgx+gx8IABAAIAAAAIADAAIgBgBIgCgBIgBAAIABABIgCgBgEgzqgx9IAAABIABgEgEgzUgyvIAZALIAgAYIACACIAVAMIACABIAAgBIgBgBIAAAAIgGgEIgOgKIACACIgJgGIAIAIIgFgDIgDgGIgXgQIgEgEIgagMIgBgBgEgzpgx+IAAgBIAAgBgEgxogyBIADAAIgHgLIgDAAgEgxrgyBIABAAIgEgHIACABIgDgEIABADIgCgCgEgx2gyCIAFABIADAAIgCgHIgDgFIgLgCIgOgJIgCgCIgIgGIgFAFIAYARIAAAAIAIAGIABAAIgBAAIgDgIgEgykgycIABABIAIgIIgBgBgEgzRgy3IABABIAZAMIASANIAIgIIgUgPIADACIgFgEIACACIgXgLgEgfGgyoIAGAFIAEgBIAFgFIgEgDgEgyGgywIAGAKIAAgBIgGgKgEgzjgyuIgFAHIAFgFIAEgFIAAgBgEgyFgyyIAGAKIACgBIgFgJIAEgHgEgfLgytIADABIABAAIABAAIAFgCIACgCIAEAEIANgGIAGgIIgTAHIgEADIgBgBgEgzrgyvIAAABIAKgJIABgBIAAgDIgCgBgEgyKgy2IABABIAAAAIAAgBIAAAAIAEgGgEgzTgy5IAJgHIgBgBIAAgBIgBAAIgCABIACgBIgIAHIgBAAIAAABIABgBgEgxrgy7IABAAIgBgBgEgxsgy9IgBAAIAAAAgEgxvgy+IACABIgBgBIgCgBgEgzWgzAIAGgEIACAAIgBABIACgBIgBAAIABAAIACgBIgDAAIgBAAIgCgDIABAAIAAAAIAAAAIAEABIADgDIACgBIgBAAIgMgCIgCgCIgBABIAAABIAAAAIgFADIAFABIABADIgIgCIgBABIACABIAAAAIACAAIABAAIABAAIAAAAIADABgEgzJgzDIABAAIABAAIABAAIABgBIAAAAIgBABIAAAAIABgBIgDAAgEgzmgzKIABACIgBgCIAAAAIgIgHIAFAHIABACIACAAIgDgCgEgfigzhIAGAAIADgFgEAwBgbQIAAgBIAAACgEArJgbfIgNgXIgIgWICGAYIBqASIhbAOIhnACgEAJ0gh7IAHgEMAg4AFzIABAAgACy8fIADgEIALAAIgDAEgAD68jIABAAIABAAIgGABgAD88jgADT+ggADF+igAEN+7IACgDIABAFIgDAAgEgQzgg3IABACIACAHgEgTfghDIACAAIgCgBIAHgCIAEABIAKgCIAFACIAEABIgTAEgEgTfghDIAAAAgEgTfghDIgFgCIAFABIAAABgEgTBghEgEAHKgiYIAIgFIAHABIgJAFgEgYlgn6IgFgMIfdFjIgEABIgIAAIgPABgEgYbgkvIACALIgBAFIAAABIAAgCIAAACgEgYZgkkgEgZhgksIABgBIAAABIAAgDIADAJgEgZhgksgEgYrglcIAAAAIAAAAIABACgEgYrgldIAAAAIAAABgEgYrgldgEgYsglgIAAABIABABIgBAAIAAABgEg2fglhIAAgFIAAADIAAABIAAACgEgZxgluIACgHIAAANgEALFgmNIgCADIAAABgEg2EgmzIAGgGIgIAMgEAMMgm4IgBABIgEABgEgZFgn/IAAgDIAAADgEgZFgoCgEgZHgoYIABACIABAUgEgZFgoCgEgYqgoHIAAABIAAABgEgYrgoIIABABIgbgmIgChOIg8gMIADgcIBVARIADB1IgCAHIAAAQgEgZKgofIADAHIgEANgEgZHgoYIgDgNIAAAGIgDgEIAAgXIAIANIABALIgDAKgEgZ8gp9IAtAJIACA6gEgavgpogEgZ9gp9IgGgKIAHAKgEg0zgrlIAAAAIAAACgEg0zgrlIABgDIAAAAIgBgCIAAgCIABAAIAAAAIgBgEIABAEIAAgBIAAABIAIgnQABgFAAgIIgCgMIgCgFIgDgEIgGgJIgFgCIgIgGIgBgCIAPAJIAGAJIADAEIACAFQADAUgCAFIgIApIAAABIAAABIgBgCIABADIgBAAIAAgCIAAABIAAAFgEg0sgrmIAAgBIAAABIAAAAgEg0rgrsIAAAAIAAACgEg0zgrtIgBgCIABADgEgo8gslIAEAAIgEABgEg1MgtHIAAgBIABABIgBgDIAAAAIgBgCIABACIAAACIgBgBIAAABIgBgCIAAAAIABgBIgBgCIAAgFIABACIABACIABACIACAGIgBABIAAgBIgBgBIAAAAIACAGgEg1HgtHIAAAAIABAAIAAgCIgBgDIgBgDIAAAAIgBgGIACADIAAAAIAAAEIAAABIABAAIAAABIAAAAIABABIgBAAIAAABIACACIgBAAIABABIgBAAIgBAAIAAAEgEg1EgtIIgBgDIAAABIABABIAAABgEg1OgtTIAAAAIAAABgEg1OgtYIgBgGIABAAIABAEIAAABIAAABIgBACgEgnqgtcIACgDIgDAFgEg1RgthIABgBIAAACIAAgCIABABIgBACgEg1PgthgEg1OgtmgEgtwgt7IABgEIAAAGgEg1NguFIAAgBIAAADgEg1PguTIACAHIAAAAIAAACIgCAEgEgu0guOIABgCIgBACgEgdkguSgEgdlguTIABABIAAAAgEgmzguYIABgBIgCACgEglQgudIABgBIgBAAIABAAIAAgBIADgCIgEAEgEglRgueIABAAIgBABgEglSgueIABAAIABAAIAAAAIgCABgEglQgueIAAAAIAAAAIABgBIgBABIAAAAgEglQguegEglQguegEglQgufIABAAIgBABgEgvTgu3IAAAAIABABgEg1vgvYIAAgBIAAACgEg18gvnIgDgDIgDgGIAIAHIAAAAIACAEgEg16gvpIgGgKIADACIABACIABgBIgCgBIgCgDIAEADIAAABIAAAAIgBACIAEAGgEgvEgvtgEg16gv4IgBABIgBgGIACAEIgBgEIACAFIAAACIgBACgEg12gwBIACACIAAABgEg16gv/IABABIAAAAgEg15gv+gEgw+gwTgEg1xgweIgEAAIAFgBIADABIgDABgEgxSgwkIABAAIABACgEgfsgyrgEgzWgzFIAAgBIAHABIgBABgEgzPgzFgEgzXgzJIAAgEIADAAIABADIACACg");
	this.shape_22.setTransform(359,338.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#373737").s().p("AFVFXIAAgBIAAgBIAAAAIABABIABAEgAFWFYIgBgBIACADgAFVFUIgBgCIAAgEIgDgDIgEgIIgDgEIgIgFIgCgDIgIgPIABADIgDgHIALATIACACIABABIAGAFIAEAEIACAEIAEAHIACAHgAE1EjIACADIABAFgAEbEFIgGgEIACABIAEADIABAAIABABIgBgBIABADgAEdEGIACABIgCgBIgBgCIADADgAEbEEIgBgBIABAAIgCgCIABABIgHgQIgNgTIgPgGIAAgBIAAAAIAPAHIAOASIAHASIgBgBIABABIAAAAIAAAAIAAABgAEZEDIAAgBIAAAAIABABgADvDgIABgBIgBgBIACgCIAAgCIAAgBIABAAIgBADIgBADIAAABgAD2DYIgCgCIgBgBIgBgBIABAAIAAAAIABABIADADgADlDOIAAAAIACABgADECeIAAAAIADgFIAEgIIABgBIgEAKIgFAGgADdCeIgBgBIAAgBIgDgBIgDgDIAEACIAAAAIACABIAAABIABABIAAAAIABACgADKCOIAAAAIAAACgADJCGIAAAAIAAABgADICFIAAABIAAAAgAC6BWIADACIACACgABUA9IAAAAIACAAgABNA9IACgBIAAAAIABAAIgBAAIABABgABUA8IAAAAIABAAIAAAAgABQA8IgBAAIAAAAIgCAAIABAAIgEgBIACAAIgCgBIACABIADABIAAAAIABAAIAAAAgAhghVIgSgOIgkgUIgMgMIgEgCIgogTIgvgOIgmAFIgBACIgKAKIAAABIgGAEIgEAFIACgFIgEAEIAGgNIgNgJIADAAIAKAIIABgCIgBgFIABAAIAAAAIAAgBIABAAIAFAAIAIgBIAGgSIgIgTIgBABIgOAKIgPADIgHgBIgBAAIgBABIgDACIACgCIAAgBIABgCIAAAAIAAAAIAGAAIAEAAIANgCIAOgKIAAgBIgKgKIgPgGIgKAAIABAAIABADIABABIgBgBIAFANIgBACIgBAAIgGAKIgEABIAJgOIgFgNIgJgDIAJAAIgIgDIAUACIAPAGIALAKIAQgSIACgEIAGgLIgBgVIgCgBIAAAAIgBAGIAAgBIgBACIgBgGIgBAGIAAgCIAAACIgBgGIABACIgCgFIABADIgIgJIAEADIADABIgGgHIAKAHIAAgLIgHgQIgJgJIgKgJIgOgWIgIgHIgBgDIAAACIABABIAAAAIABADIgBgBIgBgBIAAgCIgBgBIAAABIABAFIgGgKIAEADIgDgEIAPANIAOAVIAVASIAHAQIAAALIABADIgBAAIADACIABAYIgFALIgBADIgSAUIAAABIAIAUIgFARIgBABIAmgEIAvAOIAtAVIALAMIAkAUIASAPIAKAGgAk2iQIAFgFIABgBIgDgCIgDAHIACgBIgCACgAkxicIgBACIADADIAAAAIgDgIgAktiZIAHgHIABgBIgIABIgEgBgAkVkFIAAAAIABACIAAgBIgBgBIAAgBgAk+iiIgDgBIAMABIABABgAlFjKIACgDIgBAGg");
	this.shape_23.setTransform(121,345.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#373737").s().p("AhDAdIACgDIAkgZIAGgBIgpAdIgHAPgAhIAeIAKgUIAKgRIA2gdIAtADIAKgKIgJALIACAAIAKgKIgIAKIABAAIAVAHIAAAAIgEAFIAEABIABAAIgLANIABgCIgBABIAAABIAAAAIAAgBIAAgCIgCgCIAIgJIgBgBIAAAAIgRgFIgDgBIANAQIgBACIAAgBIAAABIgHgIIgJgKIgogGIg0AbIgHALIAKgEIADAAIAKgBIADgBIABAAIABgBIADgBIgGAEIgHAAIgTAGIgKATIgCACIgHAPgAgdABgABAgGg");
	this.shape_24.setTransform(439.6,600.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#373737").s().p("AClCvIgPAHIADgCIgDACIABgCIAJgIIgCgBIAHgEIABABIAJgFIAFADIACAAIgCABIgJAEIASAMIADAIIABACgAC9C3IgGgOIgDgCIAJgBIAAgBIgGgFIgDAAIgFADIAAgBIgKAFIgFgCIAHgFIgNABIAGAEIgCAAIgDADIADADIgMAGIgCACIADgDIAGgGIACgCIgNgHIAFABIADAAIABgBIADAAIgKgHIADABIACAAIABAAIABAAIAPgCIgXgUIgugJIAGAKIAFALIAAABIABAAIACAGIgOgNIAEAJIABABIADAGIgagYIgagFIAcgBIgdgGIAhgBIgGgLIgmgdIgmgHIgXAEIgGACIgIAAIgCAAIgSgEIANALIgYgNIADABIgEgCIAHACIAFABIgZgNIgeAAIgXAGIgUAJIgCABIgBAAIAAAAIgMACIgFABIgHgCIAEADIADgBIASAGIgTgDIAJAHIgOgIIAAAAIgIgEIgFAAIgBgBIgagDIgLAHIAmgDIAHAGIABAAIAOAMIgUgLIg5AEIARgIIgUABIAdgQIANABIgSgKIgHgFIABAJIgIgPIABARIgNgYIAEAEIgGgHIACADIgIgIIAUAPIgHgMIgJgJIAOAKIgJgaIgWgaIgegTIiBgsIAEAFIADAFIAAABIAAAAIAAgBIgFgFIADAEIgGgEIADAEIACAFIgegTIAAAAIgBAAIAFAPIgKgTIglgXIAKADIAdASIAAAAIABAAIgEgMIgagGIgJgGIAaAGIgdgSIgGgBIAJAHIgLgGIAJAIIgcgQIAKADIgJgFIAKACIgSgPIgXgQIg2gYIgCgBIA5AYIAXAPIAWATIALADIAnAXIABAAIAJACIAQASICKAtIAfATIAXAbIAGAOIAAAAIAHATIAAAFIALAIIAfATIANABIAFABIAEgBIAMgBIgBAAIAWgLIAagFIAgAAIASAJIACACIAGACIAPAEIAKgBIAEgBIAZgEIArAIIAnAgIAIAOIAAAAIAEAAIAyAKIAcAZIAGAAIAVgNIAkgdIADgCIAFgFIAUgSQAIgGAEgBIATgHIAIgPIA9gdIAoAFIApgtIAFgEIAFgEIADgBIABgBIAHgHIAFgFIgEAGIgHAHIgDACIgEALIAOgUIAFgFIgVAfIACgGIgDAFIAGgQIgFAEIgrAwIACABIAGAAIAbAKIgEgBIgHABIgCACIAJADIAAAAIgFABIgEACIAAAAIgLANIABgCIgCADIAAgCIgCgDIAMgPIgCABIACgCIABAAIACgCIgDACIgNgEIgJgBIgFAFIAPAQIgBAAIAAAAIAAABIAAgBIAAACIgSgUIADgEIgjgFIg5AcIgEAHIAPgFIAIgBIACgBIABAAIAEgBIgMAJIAJgBIAEgCIguAhIgHARIAFgRIAEgIIgHAFIgIASIAEgRIAKgSIgRAIIgVASIgJAIIAGgEIgMAJIAGgFIgnAgIgDABIgLAHIAWAEIAUAMIgagKIgQABIABAAIASADIAUAMIgZgJIADgBIgFAAIACABIgRAAIAJAWIABACgABhCLIgBgCIgFgKIgJgCgABaB+IgBgCIgDAAgAElBbIAfgWIgCAAIgUAHIgJAPgAGuA0IAAAAIABgBgAnIhaIACADIAEAAIASALIgGgHIgKgEIgCAAIgGgDIAAgBIgCgBgAnJhWIADAAIAAAAIgDgBgAnIhcIAHABIAFABIgKgLIgHgCgACgClgAJHhNIAHAAIAaAogAHhhNIBSAAIgXABIg+AGgApRixIgGgHIAIAIg");
	this.shape_25.setTransform(403.3,592.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373737").s().p("ACxGqIgIgLIgBgBIgGgJIgGgcIABgJIAAAAIAAACIAAAGIAGAcIAGAJIAAgBIAFgMIABgBIAAADIABgCIAAACIAAABIAAACIgCAEIABgEIgBAEIAAgHIgEAKIgBACIAAAAIAJAMIACADIAAACgACnF4IgKgIIAAgBIAKAIIABABIACADgACoF4IgKgUIAAgEIAAACIANAYgACdFwgACXFsIgRgwIgCAAIgjgSIgTgWIgFgQIAAgCIgLgRIgWgcIAFg2IAJgHIACgKIgEgDIgcgGIgfgXIgQgtIANgoIAKgNIgBgGIgCAAIgQgUIAAAAIgDgCIgJgOIgCgEIgFgFIgJgaIAAgXIAFgNIgBgCIgFgiIAFgMIAAgBIgFABIgdghIgkgVIgRgzIAGgPIgBgFIACgZIgQgQIADgaIgSgCIgWgqIgDgEIABAAIAAAAIgDgFIABgCIAAgGIABgLIAAgCIADgPIAAAIIgBAEIAAADIgBADIgBAQIAAAAIADABIAAAAIgDgBIAAACIAHAOIAJALIARAGIAEABIAIACIABgHIgUgFIgBAAIgCgBIACAAIAVAFIABgGIASgYIATgRIgHAJIAIgHIgKALIABgCIgCAEIABgFIgCADIAAAAIgHAFIgSAYIAAAFIAAABIgBAIIAAABIgBAPIgBABIAgAEIgJgMIADACIgBgCIgDAAIgFgFIAFAEIACAAIADAAIAAAAIgEgIIAAgBIgCgCIAAAAIAAABIgBgDIABABIAHgkIACgDIgHAnIAAAAIAAAAIAFABIAGgCIgHADIgCgBIADAAIAAAAIgDAAIgBAAIABACIAAAAIAEAJIAVAEIARgFIgGACIgIADIABABIgEAAIAAAAIgBAAIgTgDIAAAAIAAABIgCgBIABACIACABIAAAAIADAHIASgGIAAAAIAGgCIADgDIAGgCIgJAGIgZAJIAAAAIghgEIgDAZIAOAPIAEgTIAFgOIgBAIIADgHIgCAaIAUAiIgEgEIADAFIgNgJIgGgIIgHgHIgBAWIAFgQIgBALIgDAKIAAADIACAAIAAABIAAgBIABgNIAEgKIgCAWIAAABIgBAIIgCABIAAgCIgBACIgBAAIgCgHIgEAKIAPAxIAeARIgKgYIAHAJIAHAPIADAEIABABIAPABIgBgCIACABIgBgEIABABIgCgIIAEAJIAKAEIgIgBIABABIgCgBIgBAAIgBAAIABADIAAAAIACABIAKAVIADABIAEgPIgOgGIAAAAIgDgBIgBgBIACAAIABAAIgBgCIARAHIAAAAIAWgUIAMgHIgOAMIAAABIgRAPIAAAAIAGADIAAADIACAAIABgCIAAABIAAgBIAAAAIABgBIAHgSIAEgEIALgHIgMAMIgIATIABABIAUAHIgFABIAFACIgPACIgBAAIAHAVIgFgFIgFgPIADgBIgBgCIAMgCIgOgFIACAHIgDAAIgDgHIgBAFIAAgHIgBgBIgDAHIABgHIgHgDIABgDIgDgBIgBADIADABIgFAQIABAAIASgDIABADIgPACIAUANIACAHIgDgEIgYgPIgBAAIAAAAIgEAPIAEAfIACgFIABgIIABAMIgCAFIACAFIAAAKIgEgJIAAgBIgDAIIAAAXIAJAYIADAFIAEAHIgBgGIgBgBIABAAIABADIgBgCIAFAGIgEgOIACAGIARAWIAEADIAAABIgIgEIgLgOIABAEIAFAIIAFACIACADIgCgBIACACIAAgBIAGADIAAgCIADABIgBACIAAAAIADAMIADABIACgCIADgDIgEAIIABAAIAAgBIAAgBIAAABIAAAAIAAABIAAAAIACAAIgDAIIABAEIAAAFIAAgEIgCgGIAAAGIgCgEIAAAAIABAEIgCgFIAAgBIgIALIgNAnIAPArIAeAWIAVAEIgFgCIgEgHIACACIgEgEIAGADIACADIAGAEIADACIACABIADAAIABAAIAAgBIABAAIABABIAAAAIgBgCIgBABIgRgJIgCgDIACACIgEgEIAWAMIAAgBIACgDIABAEIAAABIAAAAIACgFIABAEIgBABIABAAIAAADIAAABIABAAIAAAAIACACIADgCIAAAAIACgBIAMgFIgPAJIgBAAIgBgBIgCACIAAABIACABIAAgBIABgBIAAAAIABAAIAEgDIAMgFIgNAIIAVAHIgKAAIAKACIgOAAIgKgDIgBAAIABgCIAAAAIgCgCIAAAAIAAABIgBACIACABIgRAjIABgGIgDAGIAAgQIADgLIgFAEIgFA0IARAXIgBgSIADAHIgBgHIAOAiIgEgFIgJgWIAAAAIABAOIABABIAHAHIADAGIgEgDIgCgCIABACIADAEIABABIACADIAAACIAFAQIATAWIAhARIABAAIAIgBIgBgCIgBgbIABACIABALIABAOIAAACIAYgCIABgBIAAADIAAAAIABgBIgGAnIgBgBIAGglIgYACIAGATIAMAQIgBACIgMgQIgHgVIgFAAIARAwIAEADIAAgKIABADIAAgBIgBgDIABABIAAACIAAADIAAgCIgBAIIAAgBIAAACgAA1CxIAMgaIAAAAIABgDIABgBIAAAAIgBAAIAAAAIAAgBIgBAAIgJAHIgDAOIAAAKgAA5CVIAFgEIAAAAIgEgBgABACQIAAAAIAAgCgAA/CLIAAAAIgBAAgAA9CJIACAAIgCgBgAA9CFIAAABIABAAIAAAAIgBgBgAgCADIAAAAIgDgLIAAAAIgBgBIgIgDgAgYgiIgBgDIAAgBgAguiZIADAAIgEgCIgLgYIgNgBgAh1k/IgEAUIAAAAIAPAQIAIAGIgSgdIABgUgAiYlYIAQACIAAgBIACgPIAAgBIgegKIgFgHgACdFiIAAgGIAAAHgAChFegACpE2IARgIIgIABIgBAAIgCABIADABIgJgBIAGAAIgFgDIAAACIAAAAIgBABIAAAGIgCAAIACgJIgSgLIACgBIAQAJIAEgWIgUANIgBAAIAWgPIgBACIABgBIgEAYIAFADIATgEIgIAEIAJgBIgVAIIgGADgACMEcIAAgBIgBgBIABAAIAMAHIgCABgACKEbIABAAIAAABgAASALIgKgDIABgCIALACIgHgDIgCgEIgCgBIgGgIIALAKIABAAIgGgHIgFgFIAFAEIAAABIAAgBIAAAAIgDgEIADACIgGgeIAFgOIAIgLIgKAaIgBgDIAAAFIABgCIAFAbIALALIAXAGIAOgCIgPAFIACAAIgDAAIAEAAIgBAAIAOgDIgWAJgAAgALIAGABIAGgCIgSgFgAArAHIAEAAIgCAAgAAXAGIgCgDIgGgBgAgEgMIAEgjIANgRIgFAMIgEAGIgBAIIAAAAIgBABIgDAagAgkhgIAAgKIABgEIACgHIAAAegAgRidgAgbiqIABgGIACAHgAhKi+IgLgNIgEgKIAQAWIAMAEIABADgAh1kCIB0gLIAAgIIACgBIAAAJIh2AMgAhxlfIABABIABAAgAicl0IACAAIABABgAiumKIAAAAIABAAIAAAAIABABgAiwmLIAAAAIAAAAIAAAAIABAAIAAAAIABABIgBAAIgBgBIACABgAimmKIgLgTIABgJIABgIIgBARIAKATgAjBmgIACACIgCgFIgBgFIADAJIABACIAAAAIgBgBIABADgAixmeIAAABIAAABgAixmdg");
	this.shape_26.setTransform(36.1,146.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373737").s().p("AB0IAIAGAEgABhHzIgRgxIAOgsIAHgKIAAAAIgOgUIgBgBIgCgBIgSgbIgKgcIAAgZIAEgLIgBgBIgFgkIACgHIgcgfIgmgWIgRg5IAFgRIAAgCIABgWIgQgRIADgVIgOgBIgYgtIgBAAIgBAAIg4gIIgqhBIANgrIADgVIAMgcIB+AfIhVgiIgBAHIgDgIIgBAJIgEgLIAFABIABAAIAAgBIAHg1IgBABIAAAAIgGAFIgDAEIgDAdIAEAOIgEgCIAAACIgRgIIAAgBIADACIADgHIAIgJIABgLIAAgBIgGALIAAABIgDAJIgGAFIgDgBIAFgHIABAAIACgIIALgUIACgRIAPgMIgBgQIgBAAIgVgPIgMgtIAEgxIAEgEIgBgBIAAgBIgCgRIgEgNIgrgXIAXg1IgBgKIACgMIABgCIABgFIAAgEIgDgCIgBgBIgBgBIABABIABAAIAEADIAAAEIgBAHIAAADIgCAMIABADIAJgTIAMgNIgJANIALgLIgNARIgEArIgBgDIAAgBIgBgCIAFgmIgJAUIACALIACAHIAAAAIgBAGIgEgUIgUAwIAmATIgCgIIAAgcIACARIAAgRIADARIALAUIALAJIAGADIgBACIgJgFIgJgHIgLgUIAAAEIgBgDIAAAIIADAKIASAIIAEADIAEACIABAAIAAAAIAEABIgCABIACABIABgCIAAAAIgBAAIABgBIgEgCIAIgHIgDAIIAFgGIgEALIgRAnIAGAaIgGgNIgDgNIARgnIgDgBIgVAUIgBAKIALAXIADAOIgQgiIgBASIgDATIAMArIASANIgBgQIAkgoIAMgKIgCAHIgIAGIgiAnIABARIAHAEIADACIAGgFIARgIIgMAKIAOgHIgRAOIAAAAIgDgCIgEACIAFACIgHAFIABgDIgDAFIACgCIgFAJIACgCIAPgHIgMAKIAOgHIgYAUIgIA1IBgAlIgLgCIAHACIiBgfIgFAJIgHASIgBAJIAGgIIABgCIABgBIgDALIgFAHIgCAEIAAAJIAAADIAHgXIAFgIIABgBIgKAkIAAgEIAAAGIAAgCIACANIgFgRIgBAFIAAgFIAAAHIAAgCIACANIgFgRIgIAdIAoA/IAzAHIAAAAIgHgHIgHgVIgDgKIAFANIgCgCIADAFIgBgDIAFAGIgEgKIgCgKIAEAMIgBgCIACAFIgBgDIAHAHIABgJIAAgDIAAgDIADgNIgBATIABADIAAALIAIAKIAEAAIgMgVIABgDIAAgDIAAgDIADgMIgBASIANAZIASABIgQACIgBAAIgKgBIgBAAIABAAIAAABIABAAIAAAAIgBAAIAAAAIgBgBIAAAAIgBAAIgCgCIADACIgHgIIABgFIgEgFIAAAGIgFgFIAEAJIAAABIABgFIADAEIAAABIAGAJIAEAAIABAAIAFAAIACADIgKABIAAABIALAPIAYAIIAAgEIABgCIADABIgBAGIASAFIADgBIAAAAIACgBIACADIAAABIgEACIAGAEIABAAIgCgEIAAAAIAAAAIgBgCIABAAIACgBIABADIAaAFIAVgHIgKAGIgMAEIADAAIAUgHIgKAHIgbAKIgTgDIAAgEIAKABIgLgMIgBABIgTgHIgCAPIATACIAAAAIADAAIgBAEIACAAIgCAZIAWAlIgHgEIgTghIACgTIgBACIgEAWIgBADIAGAHIgBAEIABACIABgGIAKAMIAGAGIADAFIAAAAIgCAAIAAAAIgJgIIgJgJIgBATIAAAAIgBAJIgBgJIgBAAIABgQIACgFIgBgCIgBAHIgEAKIACAGIAAAAIABAAIAAAEIABAGICEgOIAAgIIAEgBIAAAJIiMAOIgCgJIgDAKIARA2IAcARIABABIgLgbIAHAKIgEgLIATAZIAJAEIABACIAAABIgMgEIgNgRIAGAQIAGAFIAEADIALABIgCgEIAEACIgCgEIAAAAIgEgMIAIANIAPAGIgJAAIgGgCIABABIgBAAIAKAWIAFgPIgJgEIAJABIAAAAIADgJIAZgWIAMgHIgKAIIALgHIgQAOIACgDIgFAGIADgIIgFAHIAAAAIgPANIgDAJIAJAEIAAACIABAAIgBADIAAgDIgJgDIgFAPIAAAAIAJAGIAPgCIgEgNIgEgCIAAAAIgBgBIABgCIgCAAIABgMIACAGIAAgGIABAEIAHgRIAAAAIADgDIgJAXIADAHIAcALIgFABIgWgIIAEALIgDABIABADIADgBIgBgDIASgDIAGADIgXADIAFARIgDgDIAAgBIgFgMIgLABIAQALIABAFIgDgCIgTgNIgKACIgCgCIgBAFIAEAhIADgJIACgGIAAAHIAAAAIACgHIABAjIgCgFIAAgBIAAAHIgCgFIgEgKIgDAIIAAAaIAJAbIAKAPIgEgRIACAGIABACIADALIAHAJIAAABIAMAFIAAgCIAAAAIAGgqIAOgUIgCAEIADgDIgMAdIAHAiIgBAAIAPAPIAdAIIARgDIgIACIgBABIAJgCIgYAJIgqgJIAAgCIAUAEIALACIAKADIAQgFIgIABIABAAIgDAAIACAAIgbgHIAJAIIgFgCIgGgHIgGgBIgKgJIgBAAIABAAIAAAAIAAgBIgBABIAAAAIAAAAIAAgBIgBAAIABgBIAAAAIABAAIAAABIAKAIIAEABIgMgLIAAgCIAAABIgBgBIAAAAIAAgBIAAgBIAAACIgBgDIABABIgHgfIAAABIABgDIAAgCIAAABIAJgZIgLAQIgGApIABAEIACABIADABIACABIADABIAAAAIABABIAAAAIAAABIAAAAIABAAIAAABIgEAIIAAgCIgBADIAAABIAAAAIAAACIgBAAIABgCIgBACIgBAAIAAACIACAHIAAACIgDgHIgBgEIAAAAIgBgCIgBAAIgHAKIgOArIARAxIATAOgACbGRIADAAIgBAAgABnGJIgBABIABAAIAAACIABAAIACAAIABgHIAAAFIABgFIAAADIADgHIAAAAIgBAAIAAAAIgBAAIAAAAIgJgEgABmGKIgDgNIgKgFgAA+EaIAFALIgBgWgAA7DuIACABIAFAAIgGgEgAA6DsIAAgCIAAAAIgLgWIgNgBgABADYIACABIAAgDIgCgBgAgTBoIAEgKIgDgCgAghBFIAMAOIAAAAIAFgXIADgIIgSgBgAACAyIAIABIAOgFIABAAIgXgEIACAEIgDgCIABABIgCgCgAguAtIAMABIACgPIgZgIgAhAgEIgBgBIgBAAgAh9iuIANAFIgEgMIABgJgAhrjjIgBAJIAQgNIAAgBIAAgFIADgGIgBABIgCACIAAADIgFAKIABgDIAAgHgAhdj1IAGgFIgCAAIgEgEgAh7mFIACAQIAAABIASgQIgYgNgABsGZIAAABIAAAAgABrGXIAAgJIABABIAAAKgABsGPgABrGMIABgCIAAADgABwGBIAAAAIAAABgABvGAgABxF8IAAAAIAAgBIAAAAIAAAAIAAAAIAAAAIAAAAIAAABIAAABIAAAAgABxF7gABqFWIAAADIgBACgAAbDHIAEACIACADgAgQB2gAgCAfIgEABIgBgEIgVgFIAAgDIASAEIgBgCIAJgsIAOgMIgLAMIgIArIACAEIAKADIgCAAIACAAIAAAAIAIgDIgNAFIgDgBIABACIACgBIAGABIgCABIACgBIAAAAIAIgCIgPAGgAgMATIABADIAAABgAgwATIgJgQIADgBIgCgCIARABIgPABIAIANIgCAAIADACIgBgCIAPAEIABgOIAUgaIAUgRIgMAPIAAABIgBAAIgCACIABgBIgDACIgTAZIgCAOIgDgBIAAADgAgLAWgAhDgBIAAAAIAAAAgAhFgCIABAAIABABgAhFjxIgIgFIgBAAIACgCIAIADIA1AKIAPgJIAAAAIACgBIgjgDIgPgJIgHgHIACAEIgFgHIADADIgEgIIAAADIgDgHIADAEIgEgPIAKghIAEgDIgBAAIACgEIgLAnIADAOIAEAIIAFAGIAPAJIAiACIARgHIgRALIAAAAIATgIIgjAWgAgykHIgCgDIgDgDgAg3kOIgBgEIgCgEg");
	this.shape_27.setTransform(25,108.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373737").s().p("ABBJeIAAAAIAAAAIAAAAgABXJUIABAAIgCABgABGJUIgBAAIASgBIAHgCIgBABIACgBIgBAAIAIgGIgFAFIgCACIgIACgABfJSIAAAAIgCABgAgNIuIgDAAIgCgBIgDgCIgEgKIgHgGIgDgKIgCgFIgSgMIgMgLIgKgNIgIgNIgEgPIgBgDIgDgDIgLgLIgagsIgMgBIgbgNIgwg/IAygXIADgJIAKgWIAWgUIgCgHIADgYIAFgHIgXgRIgMgXIgTg9IAYgpIALgDIgBgFIAIhJIAoAMIALgdIACgDIAJgNIAFgHQADgFgBgDIgBgJIADgGIAGgIIAHgEIAHgDIANgwIARAAIAAgmIAigPIAAgBIAAgBIAMgUIAjgOIAZAJIgGgqIAEgIIgOgMIgfgyIgKgaIAAgTIADgKIgHgQIAFgWIAEAEIgDASIADAIIAJgPIgCgCIgEgEIAAgFIADACIgBgDIACgCIABAAIArgbIABAAIAIgGIgHgCIABgFIALAEIgFADIAEABIgNAIIAAABIgrAaIAAAFIACADIgBADIACACIgHANIAAABIAAABIgCAGIADAIIAAAHIAHAOIgEgFIgIgPIAAACIAAASIAJAYIAfAwIANALIAFgIIACgEIAHgJIgFAJIgBAJIADgGIACgDIABAAIgDAGIADgFIgBARIAGANIgHgIIgEgEIAHAQIgHgJIgBgBIAAABIgBgBIgFgEIgCAFIAGArIAAAAIABAAIAAAAIAIgFIADgJIAFgJIAAgBIABABIAFgJIgFANIABAEIgCAEIgCAEIACAAIAEAAIgCgIIAEgGIAAgDIADARIAIgBIAPADIgRABIACABIAAABIABAAIABAAIAMADIgIAAIAUAMIgEAAIgDACIgVgNIAAAAIAAAAIAAAAIgKAKIACATIAVgMIAAAAIABAAIAHgEIADABIAMgDIgsAYIACAVIgFgGIABAKIgOgQIgGADIgDgNIgEgGIADgHIgCgKIAGABIAAgBIAAABIAFAAIACgEIgIgEIAAAAIAAACIADABIgBABIAAAAIgBADIgBgDIgEgBIABgBIgDAAIABABIgDgBIABAAIABgBIAAgBIgFAAIAFgDIAAAAIgHgBIgTgHIgeAMIgMAUIAAABIAAACIgiAPIAAAgIATgBIAOAAIAUAKIAHADIgKADIgSgKIgNABIAAACIAJAOIAWgHIAIACIgbAJIAQAVIgIgCIgNgSIgNAEIgBAEIAbAKIAFAIIgxgRIAAgdIgNABIgKAlIAAACIACAAIACgBIAIgFIgHALIABAAIABgBIADgCIAGgEIgSAbIABgGIAAgFIAGgJIgDAAIgEABIABAIIgHALIACgHIgBgKIgEABIgGAFIgFAHIgEAGIABAIQABAEgCADIgEAHIgJANIgEAGIgKAZIAbAIIANAGIgBgBIADABIAcADIAPAEIgXgBIAAAAIgCAAIACAAIgCABIAJAAIAOAGIgUgCIgbAVIgDAGIABgEIgBAFIAAgBIAAABIADANIAEAHIgKgOIgBgKIgBACIAAABIADAQIAEAHIgLgOIgBgOIABAFIgCgJIABAEIgEgJIABgDIgbgfIAAgCIghgJIgIBDIAAAFIAZgGIgRAIIASgDIgSAJIACgCIgCABIAAAAIAAABIAAAAIgBABIABgBIAAAAIAAAAIgBABIAAAAIgBABIAAABIABgCIgEAQIAAgJIgBgHIgEAQIABgJIgCgLIgIACIgXAlIASA7IALAWIAWAQIAAAAIABgBIAAgBIABgBIgBABIADgMIABABIAAgBIAAABIAAgDIACAEIAAABIABgDIAAgBIABABIAAgBIAAAAIAAgDIACAFIAGAFIAMAEIAWgIIgKAIIANgEIgjAcIgSgOIgDAGIgFAXIACAEIAMgJIgCAHIAFgEIAAABIgHASIAEANIgGgIIAAAAIAAgBIACAJIgCgCIABACIgFgIIgEgLIgUASIgKAVIgBAGIAAAAIAAABIACgCIgCABIALgLIATgBIgGAEIAGAAIglAWIADgEIgFADIACgHIgsAUIAuA7IAaAOIAJAAIgLgSIAJAKIAAAAIABAAIgIgMIAJAKIgBAAIAKAGIAAgBIALAEIgBAAIALAAIgOABIgIgBIAAAAIgJgHIAEAIIALABIACgBIAEABIAKAAIgQACIgJAAIAXAmIACAFIAEACIAHAIIABABIAAAAIgBgCIADAEIAFAHIgEgDIAAAAIAAABIAFANIAHAOIAHAJIACADIAMALIASAMIACAEIADALIAHAGIADAJIABABIADABIABACIAEAAIAFABIAJgDIAXgJIgVgVIAEgiIABACIgDAgIADACIABgCIAEgGIAQgKIABAAIAIgFIgHAHIAAgBIgBABIABAAIAAAAIAAAAIABABIgBABIgEAYIABADIAAgBIAOAAIAPgDIACABIgNADIgEABIgMAAIgBAAIAKAQIgDgDIgIgMIAAAAIgCgCIgBgCIAEgZIgDADIACgFIgOAJIgFAGIgBACIARARIABACIABACIAJAFIACAEIgLgIIgCgCIgBAAIgYAJIgIACgAAeH+IAAAAIABgBIAAAAIgBAAgAimEzIAcgSIgLAAIgLAKIgEACIAAABIgCAFgAh8ECIAFgPIgIAGIABAFIAAgDgAh4DRIAOALIAXgSIgMAEIAFACIgIAAIADgCIgPgFIgHgGIAAAAIgCAMIACgEgAiMBFIABAEIAAAAIAAgBIAAAAIABgBIAEgDIAAAAgAg5BCIAAAAIgCgCgAhBAwIABAAIgBgCgAhCAtIAAAAIABABIABACIACgFIAAAAIAAAAIABgBIAAgBIAAAAIgBgBIABABIgBABIAAABIAAAAIAAAAIAAgBIgBgCIgEgFIABAEIAAABIAAABIgCgBgAg9AqIAcgVIgTgBIgDgBIAAAAIgNgHIgZgHIAVAXIADgMIACAQIAEgPIACATIABACIgBgBgAhJAjIAAABIAAgBgAgDhwIgCAGIAFABIABgJIACAAIABgCIAAABIAHgCIgGgIIgEAKIAAABgAgMiFIABAZIAFABIABgFIAAAAIAAAAIABgFIADgGIAAgFIABgGgAABiGIAAACIADAFIACgHgABsiuIAIAJIgBgNgAByi4IABAGIAEgCIAAgGgABjjBIABAJIAEAGIAKgGIgCgSIgKgBgABtjNIADABIAAgDIgBAAgABojPIABAAIAEACIABgCIgGgBgAB1jPIABAAIgFgCIAGgGIADgBIgCgFIgCAAIACACIgCAAIgBAAIgJACIgCAEIAHAEIgBABIAAABIAEAAIABAAgAB6jbIACAAIABgCIgDAAIgBgBIACgBIgCgBIAAACIgCAAIgBgCIgCAAIABADIABAAIABgBIABABIACAAgABfkQIACAFIABgKgAAWIUIAEAFIgBAFgAhVHKIgDgDIAAgEIABADIgBgFIAHAMgAieEqIABAAIAAAAIgBABIgDABgAh7DMIgBACgAh4C/IAAgBIABACgAh5C/IABAAIAAABgAh4C/gAh0C+IAAgCIABADgAh1C9IABABIAAABgAh0C+gAh5C5IABADIAAACgAiGBKgAiIBFIgCACIgBABIAAAAgAg+ArIAAAAIAAABgAhAApIACACIAAAAgAAWi6IAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgCAAgABVjMIAEgCIACgBIAAACIAAABIAAAAIAAAAIgPAIgABSjQIABgBIAFAAIgPAIgABbjQIABAAIgBABgABcjQgABYjRgAB/jXgAAxlsIgCgDIgFgLIgBgPIAIgMIgBgCIABgDIACACIAAAAIAKgHIgHAGIAAgBIgBACIABgBIgCADIAZAfIABAAIAEAGIgEAAIAEAEIgGAAIABgEIAAgBIgaghIgFAKIAAgBIAAACIAAgBIAAAUIAHAOgAAymcIAAAAIgBABgAAnmlIgCgCIAAABIgBgIIAAgRIACgRIgCAAIgIABIgSABIgUgOIAHACIgGgDIAQAGIAVgBIgEACIAEgBIgSAGIABABIARgBIAIAAIACAAIAFgLIAAgBIAAAAIABgBIAAAAIADgIIATgWIAUgGIABgBIgDgOIAEAHIgCgHIAHAMIgCABIACADIABAAIACAAIAFAJIAAAAIAAABIAAAAIgBACIgHgMIgDABIADAFIACAEIADAFIADAEIACADIAEAEIADACIAEADIAMgEIAEgCIASgLIAMgTIgNAGIAAAAIAFgGIALgFIgDAFIADgCIAAABIAAAAIgNAVIgXAOIgLAEIACACIAHACIASAIIAWgBIAYgGIALgEIAGgCIAFgDIAHgCIgDACIgIAGIgRAGIgZAGIgXAAIgZgKIgEgDIgIADIgYgBIgOAEIgDAAIgBAAIgRAIIgDABIAAAAIgEARIABARIAAADIACAGIgCABIgBAAgAAInSIAQgEIgSABIADABIgFgBIACAAIgJgFgAArnSIADAAIAPgIIgFAAIgJgBgAAJnVIgCgCIgDAAgABHneIgDACIgBABIAAAAIAOgEgAAwncIAQABIAEgCIADgDIACAAIABgBIgDABIAGgGIAFgBIgIAGIAPgCIgIADIABAAIAXACIAGgDIAAAAIgHgFIgCgEIgHgGIgEgJIgDgGIAAAAIgUAHIgSAUIgCAHIAAAAIAhgMIgEADgAAvncIABAAIgBAAgAAwndIgBAAIADAAIgCAAgABZoEIACAAIgDgGgAC/nhIAFgBIgRgGIACADIgGgFIAEACIgMgOIgDgSIgBAAIAAAAIABgCIAAgCIAAAAIABgBIgJAAIgEAGIAAABIgGACIAFgEIgFADIAGgIIgHgBIgRAKIgDACIgEABIgTAAIgGAAIgDgEIABgBIAJABIAKhPIACAAIBkgKIgrBJIgBABIABgEIgGAEIgBABIAAAAIgEACIAEABIABgBIAAABIAEAAIgCAAIgBACIgBABIAFAAIgDABIAFgBIgGADIAAABIACAQIAMAOIAPAGIAVgEIgDACIgDADIgPACIAEABgABnoFIARAAIAEgBIAVgLIAKAAIAAAAIARgLIABgBIgBACIADgEIgCACIAlg+IhfAKIgCAAgAB1nrIgRgGIAAgEIgBgBIABABIABABIAAgBIAAgCIAXALIgGgBIgDgBIAJAEgABdoFgACjoHIAAAAIAAABg");
	this.shape_28.setTransform(75.5,251.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373737").s().p("AAAAAIAAAAIAAAAIABAAg");
	this.shape_29.setTransform(749.9,590.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373737").s().p("AiFGTIABAAIAAAAIgBgDIgWAKIg8gNIgYgJIgHgNIAAgCIgygPIigggIgJgFIAEgDIgBABIACABIAFAEICgAfIAvAOIgCgIIADAGIADACIgCgJIADAFIAKAIIgJgDIAIAGIgIgCIAGAKIAWAJIA6ANIASgGIgCgBIgBgBIAEAAIABAAIABABIADgBIABABIAGgBIAKgEIABgBIAIgDIAJgJIACgHIAAgDIACgBIgEgIIgJgBIgDgBIgCgCIAEABIgEgBIAFgCIAAAAIgBAAIgBgBIgCgBIACAAIAAAAIAAgBIgGgfIACABIgBgEIAJACIAFADIAHAEIACADIABABIAFAAIABgBIgEgPIADACIABAAIABABIAAABIgBgHIADAEIADADIACABIAPAPIAKgeIAIiNIAAACIAAgCIAAAAIABgBIAFgGIACgDIAEgFIABgWIgFgSIAAgDIAAAAIAAgBIgBABIgDgBIAEgCIgBgCIAAAAIgDAEIAAAAIABgDIAAgBIAAAAIABgIIABAFIADgCIABgDIABAHIAAACIACAAIAOgEIANgPIABgMIATiMIACgLIAEgIIAvgOIAPgKIAEgCIAGgCIAVgEIAKgNIABgDIgCgBIgLgBIAJgEIgJgBIASgJIgEAHIABgEIgCAFIABgBIAGgDIAAAAIADgBIgFAJIALAEIAWADIAXgNIgBgRIAAgEIgBgCIAAgBIgBAAIAAgBIAAABIgBgEIgBgCIADgDIAAgGIABAFIAGgGIABgCIAHgNIgBgBIgCAAIACgCIAAgCIAAgCIABgBIAAAAIABgBIAAABIAAAAIABgDIgBACIgBgLIgBgBIACADIACAEIABAEIABAAIAAgBIAEgCIAEABIADAAIAMgDIAFgGIADgDIAAgBIAGgBIAAAAIA1gFIACAAIACgBIAKgEIgBgBIACAAIgDAAIAFgBIABgBIgFgDIADABIgDgBIAKgCIABAAIgEADIgBABIgBABIAAAAIACAAIAGgBIgBABIABgBIgBABIACAAIAEAAIALgDIABAAIAEgCIACAAIABgBIACgCIABAAIABgBIAHgEIAAgCIAAAAIgBAAIACgCIABgCIgEAAIADgBIgCAAIAIgGIgDAEIgCADIBRACIAfACIADAAIAIgCIABABIABAAIAHAEIAOABIASgRIAFgYIADg3IACgFIACgCIACgBQACgBAHgBIADAAIADgBIAIgIIADgTIgGgLIAAgCIgBgBIgEgGIAAAAIgBgGIAAAAIACAFIAEAGIABAAIABADIAFALIgBAUIgJAJIgCABIgIACIgFACIgCABIgBADIgBAFIgCAzIgGAZIgTAUIgKAAIgEgBIgEAAIgHgDIgCAAIgHABIgTAAIgPgDIhNgCIAAAAIgDAFIgDADIgDACIgCABIgEADIgBAAIgBABIgSAFIgEABIgDAAIgFgBIgBAAIgDADIgDABIgHACIgGABIg3AHIgBABIgJAIIgNAEIgHAAIgBABIgBAAIgBABIgCABIAAAFIgJARIgIAIIAEAHIACAaIgcAOIgZgDIgKgDIAAADIgNARIgXAEIgIAEIgQAKIgsANIAEgDIgEACIAAABIgCABIgDAEIAEgEIgCAEIgBAJIgSCNIgFAOIgLAPIALgQIAEgNIABgKIgBgBIgCALIgEAMIgMASIgRAEIgCAAIABACIAEATIgBAYIgEAFIgDAEIgBABIgBACIgCACIgJCNIgKAgIAhAfIgqgFIgOAqIgMggIgCAIIgLAJIgKAGIgCABIgHACIgHACIACAIgAhWFtIgBABIgBADIgBABIAKAZIAKgeIgPgCgAhaFtIAAgBIABgBIAAAAIgCgBgAhAFqIAdACIgXgUgAhWFPIACACIAAABIAIAIIgGANIAOACIAHgUIgOgNIAAABIAAAFIgDAFIgCgGIAEgEIAAgCIgDgDIgDgEIACAIIAAgBIAAABIAAAAIAAAEIAAABIgBADIAAAAIgBABIAAgBIAAAAIgEgBIgDgDIgGgBIACADIACABIgIAAIADAFIgGgEIAEAIIgCgCIAHAQIAGABIAGgMIgJgKIgBgCgAhmFlIAEAAIgBgCgAhqFkIAAAAIAAAAIAHgCIgCgDgAhrFhIAGgCIgFgOIAAAAIgBgCIAAgBIADAAIABAAIgCgDIAKAAIAAAAIgDgCIgDgCIgDgBIgIgDgAhMFJIgBABIACgCgAhMFBIgBgBIgBgBgAghBnIABAAIgBgBgAhfF0IAAAAIgBABgAhsFOIAAAAIABACgAoZFIIgWgTIABABIgCgCIgBgBIABABIgBgBIAAAAIADACIgBgBIAXAUIANADIAtgBIgQgoIgEgHIAAAFIgBAEIgBACIACgGIgCgEIABAEIgBADIAAgCIAAgBIgEgNIAEAGIAAgCIAHALIAQApIguACgAnVErIgCgHIgEgcIAAgBIgEgEIABAAIAAAAIAAgBIgCAAIABABIAAAAIgTAGIgEAGIgBAAIAAABIAAAAIgEAFIACgGIgEAFIADgIIABgBIABADIABgBIgCgDIAAAAIgBgDIgBAAIABgEIgGgCIAHAJIAAABIgCgDIAAAAIgCAAIgEgDIgCgBIABgCIADADIgBgDIABAAIgCgBIABABIgKgDIADAAIADAAIgFgCIACAAIAFABIAFACIADACIABADIAAgCIABAFIgBgJIABADIABADIABADIAHgGIgEAGIgDACIAAAAIABAAIABAAIgCAAIACgBIAAAAIABgBIASgHIAAAAIAAAAIAAgBIABABIgBAAIABAAIABAAIgBAAIACgBIgCAAIACAAIAAAAIABAAIAAAAIAAAAIABABIgBgBIgBAAIACACIgBAAIAAAAIAAAAIABABIABAAIAAgBIAAABIABAAIgBAAIABACIABABIAAABIAEAcIACAGIAJASIgCADgAn4EKIAAABIAAABIABgCIAAgBgAn2EIIAAABIABgBgAn3EJIAAgBIAAAAgAngECIABAAIgBgBIgBAAgAoyE0IgEgCIAEABIABABgAoPEzIAAgCIAKAAIAKgoIAAABIgKApgAn5EKgAgpChIAAACIAAAAgAAehSIAAAAIgBABgAC5ivIABACIAAAAgAC3i2IACAHIAAAAIgCABIABgCIgCADgADGjNIgBAAIABgCIgBACIABgEIAAABIABgEIgBADIAAgJIADAGIAAAEIABABIgBAAIgEACgADSjVIACgBIgBABgAHjkAIAAAAIAAAAIAAgBIABABIgBAAIABAAg");
	this.shape_30.setTransform(691.7,638.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#373737").s().p("ACoB6QgBAAAAgMIADg+IAAgCIgEghIgegRIgzAJIgBABIAAAAIABABIgDgBIgHABIgDgDIgMgCIAJgCIgKgJIgDgFIgCgHIgIgNIgKgGIgEgCIgFgCIgEgGIgEgGIgEgEIgTgLIgEAAIgvgKIgggOIgpgGIgGgCIgSgLIgYgGIAAAAIgDgBIAbAGIATALIAFABIAYABIASAEIAgANIA0AJIAVALIAEAFIAFAGIADAFIAFACIAEABIADADIAHAEIAGAIIAEAHIADAIIgCgDIADAGIgBgDIACADIAMAMIA8gNIAmAVIAFAnIgHA/QgDANgCAAIAAAAgAA+AKIANgDIAFAFIADACgAA3gQIABACIABAEg");
	this.shape_31.setTransform(715.3,538.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#373737").s().p("AhQEYIAAAAIgGAAIAfhcIgOgEIgYAHIAOgIIAagEIAGACIgBADIAIAHIgKgCIgeBbIARgBIANgLIAEgCIALgJIAKgVIAFgQIAAgFIAAgBIgBADIgDgZIAAgBIAAgBIgBgBIABABIAAAAIADAAIgDAAIACgDIgDABIAAABIAAACIABABIgJATIgEgbIAGACIAEACIACAAIgBgIIADAAIgBgBIgCAAIgBgHIAAgBIAAgBIgBgBIgGgCIgGgBIABAGIAFAEIgEgBIABAJIgKgDIACgHIgagGIACgBIgDABIABAAIgeAJIANgIIAhgIIAPAFIgBgOIANAQIAAABIABAAIgEgaIAOAPIADAJIAEgIIAFghIgKhvQgIgqgDANIgGAcIgDgnIgPhDIANhcIgEgpIgpgaIgvAIIgBAAIgBAAIAEAEIgLgCIgCAAIAIAJIABABIghgGIAYgEIgBgBIgZgFIASgEIgDgFIADAFIAAAAIgCgHIgKgTIgMgIIgDgDIgDgBIgDgCQgCgEAEACIAGACIAEABIAJAFIANAUIADAHIACACIADADIA4gNIA2AeIAHA0IgIBTIAAACIAAAGIARBAIASCbIgEAkIgBADIARgFIAZgBIABAAIAUgGIAdACIAdALIAMAMIAGACIARAMIAPASQALASABADQAAACgKgMIgGgIIgEgFIgNgOIgRgLIgGgCIgBAAIgBgBIgKgJIgbgKIgZgBIgVAHIgBAAIgYABIgVAHIgCAEIABAAIABABQABAAAAAAQABAAAAAAQAAABAAAAQgBAAAAABIgBABIgDAAIADAGIgBAbIgFAWIgMAbIghAbIgeADgAgYDAgAgcC0IgBAAIADgBIAAABgAhHCog");
	this.shape_32.setTransform(737.6,561.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#373737").s().p("AgFgDIADAAIAIAHg");
	this.shape_33.setTransform(729.4,539.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373737").s().p("AAEAEIgLgxIAMAxIADAoIgBACg");
	this.shape_34.setTransform(733.5,558.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#335C64").s().p("EAtjA0BIgOgFIgCgCIgBgKIgCgCIg/gTIhygXIgjgFIgGgDIAGgGIgKgNIgBgGIAAgYIgBgEIgOgNIgFgEIgHgBIgHABIgZAIIgGAEIgEAFIgJAMIgBADIACADIACAJIABABIADAAIAEACIgKAAIACABIABACIAAAFIAIANIACAFIgGAAIgEgBIgWgTIgIgEIgTgDIgIgFIAEgGIABgBIgFgDIgHgBIgXADIgDABIgEADIAAACIABACIAAADIgCAHIgCACIgIgEIgRgDIgCgCIgFgFIAAgCIAAgFIAAgBIgBAAIgEAAIgCAAIgPgEIgQABIgeAIIgDACIgCACIgCABIgQgMIgBgCIgCgHIgHgDIhCAGIgPAAIgPgGIgXgVIgQgFIgRABIg1ARIgfAFIgWAJIgIACIgDgBIgDgCIgCgCIgHACIgDABIgJAAIgHgCIgHgCIgEgEIgSgaIgJgKIgPgHIgUABIgEgKIgCgEIgBgEIgCgEIgFADIggAAIhGgRIgZAEIgUgCIgIgDIADgHIgXADIgGADIgIAHIgGACIgDgBIgBALIgCAAIgFgJIgDADIgDABIgEgBIgBgDIgCABIgOAKIgOACIgZgGIgMgCIgLgFIgJgLIgLgZIgLgOIgQgEIgPAEIgQAIIgNALIgJADIgFAAIABgQIADgHIAAgCIgBgDIgDgKIgHgFIgIgCIgJgBIgJABIgVAFIgFgBIgIgEIgEgBIgFABIgHACIgEAAIgKgBIgagIIADgCIgzgEIgGgDIgDgGIgCgVIgKgWIgHgZIgFgEIAAgBIgJgKIgBgBIgFABIgCAAIgBgCIAAgFIgGgQIgBgHIgEgIIAAgFIABgJIAMgNIAFgIIgGgOIgZgcIADgLIgEgDIgCgTIgCgKIgFgHIgHgIIgCgDIgCgNIAAgEIAGg1IgBgUIgZhkIgGgHIgMgMIgGgHIABgGIgMgIIgDgEIAFAAIAFgCIADgCIAFgCIgEgDIAAgEIABgEIADgEIgMAFIgEABIgEgBIgDgEIgCgBIgCgBIgCgDIgDgCIgIAEIgCgCIAAgDIAAgFIgGACIgCgDIAAgDIAEgCIACgBIAGgHIACgDIAAgDIgJgCIgKgGIgGgJIgCgKIgFAFIgEABIgLAAIgGgBIgGgJIgEgIIgYAAIgJgDIgDADIgLgGIgMgCIgbgCIgMgCIgWgJIgNgCIgaACIgOADIgTALIgbABIgLADIgDACIgHAHIgCACIgBAFIgCACIgEAAIgKAJIgdARIgKAJIAAACIgDABIgHAHIgEABIgqAHIgNAAIgGABIgFAEIgDABIgMgSIgDAAIgHASIgOAMIgEADIgFADIgVAXIAJgDIACgDIACALIgDANIgEAMIgGAIIgMAMIgPAHIgQADIgRgBIgfgLIgRgCIgPAHIgEAIIgDAIIgEAGIgQADIgRAFIgGACIgZAXIgEACIglAeIgqAZIgDACIgCADIgDACIgEABIgEgBIgHgEIgFAAIghADIgRgDIgGgKIgFgMIgLgLIgRgDIgjABIgOgHIgHgLIgNgaIgLgKIgIgBIgQADIgdACIgIgBIgbgHIgGgBIgEgCIgIgGIgDgBIgEAAIgIABIgZAMIgRACIgQAFIgJAAIgRgFIgKgBIgIAFIgFgCIgUgRIgcgRIglgcIgGgHIgCgIIgBgVIgDgIIgGgIIgNgIIiCgsIgJgBIgIgCIgFgGIgJgNIgXgFIgDgFIgEgJIgIgFIgSgFIgfgcIgNgJIgygWIgJgJIAAgIIADgGIAHgDIAIgBIAIABIAIgBIAEgEIgDgLIgGgFIgQgGIgFgFIgEgFIgFgOIgEgEIgdgeIgMgKIgOgGIhEgPIgPgHIgtgqIgPgKIgPgGIgSgDIgbAEIgGgCIgIgFIgJgCIgTgBIgWAFIgIABIgrgDIgEgCIgCgCIgBgEIgBgEIgBgCIgLgDIgIgGIgRgSIgGgHIgDgIIgBgLIgFgHIgKgEIgSgFIgHgFIgfgfIAAgGIgBgLIAJgYIgBgLIgIgNIgOgMIgEgGIgOgVIgMgNIgDgFIgfhHIgBhKIgJgQIgKgMIgMgIIgQgDIgQgBIgIgCIgCgFIgDgJIgTgXIgDgIIgCgMIABgKIAIgFIAIACIAHAHIAGAIIAFAHIADgEIAAgDIgCgDIAAgFIALgKIADgFIABgKIgBgKIgEgGIgHACIgDgNIgCgEIgFgEIgCAAIgEACIgEABIAAgCIgBgHIgCgGIgJgCIglADIgLAGIgLgBIgIgHIgDgNIgBgKIABgFIAHgMIACgHIADgDIAGAGIACgSIABgDIgEgBIgCgDIgFgIIAFgLIAAgWIgCgRIgDgMIgFgJIgHgKIgGgDIAAANIgCgFIgLgQIgVgQIgDgGIgCgHIgGgJIgNgMIgXgJIgDgFIgDgIIgFgJIgVgaIgagtIgIgGIgQgJIgPgQIgBgCIgBgFIgBgIIAAgEIAGgBIABgDIgDgDIgEgCIADgPIgJgZIADgLIgGgFIgKgQIgCgIIgDgEIgFgEIgOgFIgNgCIgPACIgNAFIh5BMIgOAGIgMgDIgLgPIgBgHIAAgUIgDgIIgDgEIgBgCIgBgCIgEgCIgHgDIgJAAIgEAAIgJACIgEABIgEgBIgFgEIgEgBIgIABIgOAGIgIACIgKgBIgDgEIAAgSIgBgBIgGgEIgBgCIAAgDIABgKIABgDIAAgCIgFgDIgCAHIgEAHIgGAGIgGABIgHgFIgEgFIgDgFIgHAAIgJgDIgZgPIgFgFIgDgOIgHgJIgKgFIgMgDIAEgHIAGgCIAQADIAIgBIANgEIAHgBIAHACIARAIIAFACIAIABIAGACIAGAFIAFAHIACgGIAHgNIAMgOIACgFIAAgHIgIABIgGgEIgDgGIgDgQIgFACIgGAGIgFAFIAAgGIABgBIABgCIgDgFIgDAAIgEADIgGACIgCgCIgEgGIgDgBIgCAAIgDACIgDABIgOgEIgCAAIABAHIABACIgBACIgBAAIABACIABADIAEAFIAAAGIgKAAIgDgFIAAgBIgBAAIAAACIgEADIgBgCIAAgCIgCACIgFgCIgBgEIABgCIAAgCIABgCIABgEIADAAIABAAIACgCIABgCIgOgCIgLAGIgDAJIAKAFIANACIAKAGIACAIIgHAIIgHAAIgVgDIgEABIgVATIgCACIgDAGIgBAFIADAEIgBADIgCAEIgBACIACAJIAHAHIAIAGIAGAHIAGARIACAUIgBAGIgDAJIgBAFIAAAEIACAIIAAAFIgCAJIgFAIIgIAFIgHADIgagDIgHADIgHgEIggAAIgQgHIgGgCIgBAIIABAFIAGAJIABAGIgBAEIgHAHIgDACIgJADIgagDIAAgDIgFADIAAAAIAAAAIgPABIAAgFIgLgHIgEgGIgEgIIAAgGIgHgWIgBgBIgDgEIgHgJIgFgKIAAgEIABgEIACgEIAEgDIADgEIABgFIgBgFIgCgEIgDgEIgOgOIgNgOIgIgNIgDgDIgFgBIgFgBIgSADIgFgBIgEgCIgDgDIgCgEIgDgUIgDgJIgGgJIgGgHIgEgCIgEgCIgpgGIARgNIgSjXIABgFIgFgFIiCAAIADi5IA7ifIABgKIAAgKIgGgIIgOgLIgHgHIgBgEIgCgIIgDgEIgDgCIgHgFIgQgcIgCgIIgDgIIgOgHIgFgHIgJgTIgHgKIgHgDIgGAAIgEgEIgCgFIgGgDIgFgCIgDgCIgBgDIABgHIACgFIADgDIABgFIABgGIgCgGIgIgGIgBgGIgFgBIgCgDIgIgMIgCgCIgLgLIgFgJIAAgCIACgCIAEgJIACgCIABgDIgBgFIgCgEIgKgHIgLgQIgFgFIgIgFIgVgHIgGAAIgSAJIgHADIgNABIgMgCIgMgGIgMgJIAAgBIh0hkIgQgRIgZgQIgRgOIgmgVIgKgLIgmgTIgpgMIgtAFIgWgDIgJgSIAFgGIAMgLIACgIIgBgGIgGgFIgIgDIgQgCIgGgEIAAgGIAJgEIAIgBIAHAAIAFgBIAIgGIALgKIAFgHIADgGIgBgEIgDgDIgDgEIADgMIAAgFIgEgIIgEgFIgNgKIgPgWIgNgMIgCgHIAAgHIgBgKIgDgIIgFgIIgMgQIgCgBIgBgBIgCgBIgCgBIgCABIgCABIgHAHIgMABIgLgCIgHgGIAGgIIATgLIAFgHIgDgKIgJgGIgGgHIACgOIgJACIgOAAIgHADIgMALIgGAEIgHACIgEgDIABgRIgDgGIgTgNIgHgGIgFgHIgEgIIgEgRIgEgIIgQgPIgkg+IgDgBIgBAAIgLACIgLgBIgJgFIgIgLIAJgDIADgDIAEgDIAGgNIADgLIAFgLIAggaIAEgFIAAgNIgCgEIgDgEIgCgFIABgFIAFgIIACgFIAGgWIAAgLIgCgLIgGgJIgIgFIgIAAIgIAGIgHgFIgFgKIgLgmIADgGIAUgFIADgCIACgDIAEgHIABgOIgDgTIABgNIAPAFIANAHIANADIAaACIAIADIACgBIABgDIACgFIAAgFIgCgDIgDgGIgCgIIAAAAIACgJIgCgDIgCgCIgCgDIAAgFIgCgEIgDgDIgGgFIgGgGIADgIIALgMIABgFIgBgKIABgFIAEgGIAFgCIALgBIAKgHIACgMIgBgLIADgJIAJgBIAMAGIAKAEIAGgIIADgLIADgJIAEgVIgTgGIAAgGIANgGIAEgEIADgBIAFAAIADgBIAAgCIgBgGIABgCIAFgJIADgBIAFACIANAHIAEgBIALAFIAHgBIAGgGIAKgGIADAAIAIACIAJgEIAFgBIAEgCIADgFIgHgKIAEgNIAJgOIABgNIgFgLIgPAAIgGADIgBgHIAEgGIAEgGIADgHIgDgNIgJgLIgVgTIgYgnIgGgOIAAgEIABgEIACgDIADgCIACgCIAAgCIgBgCIgJgVIACgHIAGACIABgGIgDgSIAAgIIACgIIACgIIAFgFIAIgDIAbABIAIgCIATgKIAPABIAIgBIAGgGIAFgIIAMgHIAGgGIAEgHIABgIIgCgGIgHgEIgJgBIgNAIIgHACIgRAEIgIAAIgHgDIgDgDIgCgCIgDgEIgBgJIgCgCIgDAAIgLgFIABAAIgCAAIABAAIgFAKIgIAFIgIACIgZgBIgMAEIgEAAIgEgBIgDgBIgKAIIgHAEIgIABIgHgFIgEAAIgPAEIgGgCIgFgGIgJgZIgSgZIgMgKIgLgCIgEgEIgPgNIgXgIIgKAAIgUAJIgEAAIAAgBIgDAGIgJACIgIgBIgHgHIgKAAIAAAGIgCgHIACgKIAJgSIACgJIgGgKIgLgPIgCgKIABgWIgBgJIgMgLIgCgGIAIgGIgGgJIgDgIIgBgVIgCgLIgDgMIgGgIIgKgBIgUAJIgLABIgKgFIgDgFIgCgFIAAgEIgCgHIgDgEIgDgDIgCgEIAAgHIgNgMIgEgHIAAgIIACgBIAEgBIACgBIAAgKIADgRIAIgRIAAgJIgEgKIgJgRIgFgIIgGgEIgEAAIgFgBIgDgDIgEgEIgEgEIgGgBIgLAAIgJgCIgIgFIgCgIIADgMIAOgRIAEgJIADgLIgDgLIgDgIIgCgIIACgNIAEgFIABgFIgDgFIgIgEIgDgFIgDgBIgEAAIgHACIgDgBIgBgCIgCgHIgCgDIgDgCIgFgDIgCgDIgDgIIAAgCIAGgPIACgLIgCgIIgEgJIgCgLIADgJIAFgFIAHgDIAEgHIABgRIgJgLIgYgPIgEgHIgCgIIgEgEIgPACIgEgFIgGgPIgGgFIgQgBIgFgDIgDgJIAFgQIgBgIIAAAIIgCgKIADgYIADgJIgBgJIgJgGIgIgJIACgPIADgEIANgLIAFgGIgBgEIgPgSIgJgIIgLgFIgKABIgFADIgHACIgEAAIgDgGIAAgDIABgHIAAgDIgDgCIgDAAIgCABIgDgBIgFgFIgDgMIgDgEIgDgDIgOgHIgFgBIgZADIgNgCIgHgLIABgGIAIgKIAAgGIgCgHIABgGIAFgMIAQgSIADgHIAEgKIADgGIAFgEIAIgEIACgDIgEgJIABgEIAEgDIAGgDIADgEIACgHIAFgTIgDgXIAMgNIANgLIAJgMIAAgIIgDgHIgFgHIgFgFIgGgCIgFABIgNAHIgTgDIgGgDIgDgCIgBgEIABgIIAAgFIANgMIAAgGIgJgUIAAgIIgDgZIgGgTIAAgSIgDgHIgCgDIgDgCIgGgCIgFgCIABgDIAEgDIABgDIgDgOIgBgGIABgJIAKghIgCgNIgTgJIgFgFIgGgHIgCgKIgCgEIgBgDIAAgEIAAgEIgGgGIgCgDIgCgHIgBgDIgBgBIAFgJIAHgGIADgGIgDgVIACgJIAJgQIgEgOIgjgVIgLgIIgBgFIAEgKIgBgEIgFgLIgBgFIAAgFIABgDIAAgEIgGgLIgDgRIgLgNIgEgGIAGgHIAIgFIAGgCIAHgBIAJACIAKgCIAXgGIAJACIAdAOIALABIAJgCIAXgKIAIgGIAGgKIgSgUIAQgGIABgGIgCgGIAAgHIAAgIIACgHIANgaIACgGIABgIIgCgQIACgGIApghIAKgDIAFAEIALAQIAEAGIAYALIAmAcIABACIAIAEIAIACIAJAAIgBACIgCACIAIAFIAFALIALAwIAFAKIAIAHIgEAGIACADIAKAIIAGAAIADABIACACIACAEIANAJIADADIABADIACAFIAFAFIADACIADAFIAJAVIAEAEIACAGIAEAYIADAIIAKgDIAoANIABgBIAGgDIAEAAIABADIgBAFIAAAEIAEACIAFABIAFADIACAGIgDAHIACAFIAHAEIAEAEIAGATIAFADIAJAEIACADIgBAFIgEAIIABAGIAFAFIAIAFIAJAFIALADIAIAEIAEABIBDABIAcARIBRARIAaALIAWAGIAegEIAGgDIAUgPIAHgEIAGgBIAPAAIAJgDIAEgBIAFABIAoASIAIACIAGAAIAJgEIAMgIIAFgGIAEgHIALgXIAGgGIAHgGIAVgMIAHgGIAGgPIAFgHIADgCIAHgEIACgCIANgUIAEgHIAHgEIAGgDIAGgBIALAFIAFACIAFgBIAagPIAEgEIACgEIAHgTIANgWIACgFIADgEIASgLIAngPIAQgJIAggmIANgLIAQgIIAbgKIAIgBIAFgDIAVgVIA0gdIAXgXIAIgGIAJgCIAcAAIAGgBIADgDIAFgHIAFABIAIAFIAYAWIBABOIAaAYIALAPIAJASIgPAEIgUAOIgYAFIgMAHIgMAKIgHAOIAAARIAEANIAKAOIAWAVIAWAJIAGAGIALAZIACAGIAAAHIgCAGIgDAHIADAFIgTAAIgDAKIhHAMIgBAEIAAADIgBADIgVANIgDAGIABAUIAIAOIAZAUIAyAZIAFAEIADALIgCAKIABAIIASAPIAHAJIAHAGIAMABIATgNIACAAIAFAMIADAOIAGAIIAGAGIAHALIAHAHIAXAdIALAUIANANIAWABIAKgCIALgFIALgHIAIgIIAGgDIAOADIACArIgFAPIADAKIABAaIAHASIAGA8IAQA5IgEAJIAAAMIACAKIADAIIANAWIAAAFIgBAIIAEATIAIASIAUAeIAaAbIAcAUIA/AgIAdAKICUAUIAQgCIAOgGIAMgCIAOAHIgEABIgHgCIgDAEIAhANIAyALIASAHIANAMIgCARIAEAHIAEASIAJAQIAKAaIAMATIANANIAcAVIATAXIAGAEIAHACIArAdIAJACIAEACIAMAMIAGAFIA9AhIA4AoIAhAPIBsAVIBEAUIBIANIBFAUIBHgKIBAgXIDKgrICCgnICAgdIASgDICXgJIAcgGIATgQIgBASIgVAIIgcADIgSAGIgFACIgFgBIgLgDIgFABIgLAEIgGABIgWgDIgUAAIAEAGIAFACIANgBIgIADIgEAAIAKAMIAPAHIA8AGIAGADIAGACIAxgNIAFgEIACgIIAAhFIgCgIIgFgDIgHgDIABgHIAJgPIgJgOIgGgRIgJgnIgMglIgEgoIBmAJIAHAAIAGgDIAHgHIAHgEIAJgBIAQABIANgEIA/glIAIgBIAYAFIASAAIAFgDIAKgKIAIgDIAFgFIASgMIAKgIIACgEIABgHIAGgMIABgHIAAgMIAAgDIgCgEIgFgEIgBgCIgBgLIAHgPIACgKIABgHIAGgIIALgNIA6goIATgUIADgGIACgGIAFgDIAFgBIAFgBIACgEIAEgJIAEgEIAHgCIAWgFIAGgBIADgIIAIgFIASgGIAEAAIAIgHIAIgEIAdgWIAKgEIAYgBIBOgQIAJAAIAXAKIAPAIIAaAAIAGAFIALAFIAFACIAGAAIA2gKIARACIANAGIAGABIAigGIAFgEIAEgIIABgJIgBgIIgKgMIACgHIAYgXIANgJIAOgFIAjgBIAGACIAGADIAFAEIAFACIAGgBIAfgOIASgDIAEABIAPAMIAOAIIAFACIA6ALIAPAGIAIABIAHgEIAGgFIAMgIIAFgFIAHgNIAFgFIAHgDIADgBIAFABIAIACIAEADIABADIAAAEIACAEIAJAPIAHARIAFAHIAMANIAEAPIAIAMIADAIIgCAIIgHAaIAKANIA3AWIATgEIAGABIAUAGIATgBIAFgBIAGAAIAFADIAFAEIAFADIADABIAHgCIACABIAEADIADAHIACADIAGACIAGAAIAGgCIAHAAIANADIA8AdIAaAGIANABIAGACIAHADIAZADIAAAEIgYADIABAEIAIAPIgEAJIAAACIACAGIAGAFIAHADIAfAEIAFADIAKAHIAGACIAkgEIAHgDIAFgIIAEgJIAEgHIAHgEIAHgBIAGAEIAVARIARAHIAJABIAJAAIADgDIACgDIAEgCIADAAIAJACIAJgCIAEgHIACgHIACgDIAXANIAgAHIAPAHIAFAEIAGACIALABIAFADIAMANIA2AmIAIABIAWgKIAJACIAIAIIAIAKIABAHIgBALIACAFIABAFIgBAEIgCAFIgBAFIABALIAHAiIAEAHIAZAUIAIAJIACADIgBACIAAACIgBABIAAAEIgCAEIABADIAHACIADADIACACIAEACIADAAIAMgFIAGABIAHAHIADAIIAFARIAFAFIAEgBIADgDIAEgHIAEgCIAEAAIA5ASIAaAWIAOAJIAhAGIAPAGIAMAQIAOAfIASAcIAqAzIAJAOIALAeIAIAOIAOAHIBfgCIB/gSIAoAAIATAIIAQACIADAQIAEAMIABAGIgBAGIgBAFIgCAFIgCAEIgCAFIABAFIACAHIgJAnIgBAXIAEAOIgBADIgBADIADACIAEACIACADIABADIACAFIAEAFIAAALIgCAEIAGAKIAGAdIAAAPIABACIgBADIgGAIIgCAJIAAAFIgBAFIgDACIgEABIgCADIgBAFIABAKIAAAEIgMAMIgFAFIAFADIAKABIAIAEIAMAOIAEAHIAGAQIABARIACAHIAAAIIgCAKIACAEIAAAEIgDAOIABAJIgBADIgGAFIgBADIABAMIAFALIAMATIAFATIABAKIgDAJIgFAJIgJALIgEAJIgEAPIgCAFIgIALIgCAFIgCAJIACAZIgEAIIgGAEIgKACIgIAAIgGAEIgBAKIgBAPIACACIACAFIAAAEIgEACIgCACIACAFIANASIABACIAAAFIgBAFIAAADIAFAFIgKANIgDAHIgCATIgFARIgCAJIgBAFIgFAJIgBAGIACARIgFAgIgMAEIgCAIIgHANIgMAJIgHAIIgBAMIACAMIgCALIgEAFIgEABIgGAAIgFABIgFADIgCADIgCADIgSAUIgHAFIgKADIgVADIgKAFIgFAKIADAAIAEACIADADIACALIAEAEIAKAEIAEAEIAEAGIAGAMIAcAlIAFAIIhfAGIADAKIgGAGIgSAKIgOAOIgMAQIgLAVIgCAVIAPB1IgBASIgLAbIgDAPIAKAhIAXAYIAgAMIAdADIAdgCIAPABIAMADIAHAEIAGAGIADAGIgDAGIgGACIgSABIgHAFIgBAGIACAQIgCAJIgDAFIgOAIIgLAKIhIBiIgBAHIAAAqIBlFpIgBAkIgFAkIgCAHIgKANIgDAHIACADIAFAEIgEAKIABAEIAEAJIABAKIgEAbIAGA/IgEAhIABAKIAFAWIAFApIAMAFIEyAtIAJAEIAIAGIAOARIADAIIgDATIAAAPIAJAJIALARIADAKIAAANIABAEIAMAdIABAJIAAACIgDAKIgHAPIABAFIACAhIgCABIgBAEIgCAIIACABIAAACIiLCnIAAgHIgWAlIiaC4IAAAAIgzA8ICmDHIAIAGIAIADIAHAFIADALIgCAgIAAAJIANAOIAFAHIABAFIABALIACAFIAEAFIADABIAEABIAEACIAEAGIACAHIADAHIAHADIADACIABAEIgBAEIgDAEIgDADIgBADIABACIADACIAFADIAEADIADAEIARAmIADAQIACAGIALANIALAYIALANIAoAkIAQAVIAYAWIAMAOIAHAEIAXAHIASAKIAMAEIAaACIAMADIAgAOIAzAKIALAGIAEAFIAHALIAHAEIAGACIAEACIACAFIADAHIAFAJIAZAbIAIAFIA/gNIAJAFIABAPIgLBeIARBHIANCRIgCASIgVAtIAHAJIADAFIgBAHIgCAGIgCAFIgEADIgGAAIARAPIAFADIAEAAIAEgDIAEgBIACABIAJAGIAMACIALAAIAggGIAUgHIAKAAIAHABIAFgBIAVgGIAEAAIAFACIAJAJIAFACIAKAEIADACIAEAFIAFAIIAOAdIgHgEIgeAAIgHAEIgFAGIgBAFIgGAKIAAAFIACAxIADAIIAFAHIADAHIgBAHIgGAGIgPACIgGAEIgDAGIgDA/IgDARIgJAIIgEAAIgDgBIgCgCIgEgCIgDAAIgLACIgPAAIgPgDIhYgCIgFABIgCAEIgFAIIgCACIgGADIgMACIgDAAIgEgCIgEgBIgDACIgDADIgDADIgIACIg/AHIgDABIgEADIgCAFIgCACIgFABIgIAAIgDAAIgDACIgIAFIgHADIgDACIgDADIgBAEIABADIACACIABADIgFAIIgLALIgDAGIACAKIAEAHIAAAHIgIAEIgOgCIgRgGIgOgCIgGAKIgCALIgDAEIgQADIgIACIgGAEIgOAJIgtANIgJAIIgFALIgEANIgTCNIgBAHIgGAIIgGABIgIAAIgIACIgHALIABAQIAFARIgCAOIgCAEIgFAFIgDAEIgBAGIgJCMIgMAjIgCgGIgBgHIgGgFIgBgDIgCgBIgEADIgBACIAAAHIgCACIACACIAEAFIACACIgIgBIgGgDIgGAAIgIAHIAJADIADACIADADIgCAEIgGAIIgCAFIAAAEIgCACIgGADIgUAHIAFADIAFAFgA7uPjIABAGIABAAIACgIIgBAAgEguMgUtIgFgBIAFAAIAAABgEgdagp+IAOgBIgEADg");
	this.shape_35.setTransform(379.3,342.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,755.9,679.3);


(lib.ethiopiaai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ethiopia.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#888E9C").s().p("AOBLxQgwgDgogKQgTgFgZgJIhwg3Qh8g9iphAQhFgbjvhVQg0gUhqglIigg4IkjhpIgbgOQgSgKgcgVQhLg4hNhNQg9g+hIhXIh8iZIhBhSQgggwgWg0QgWgzgNg2IgLg1IgGgeQgDgWAEgXIAFgVIAHgTIACgEIAAgBIABgBIAGgNIgSgPIADACIADACIAPAJIABABIgBAEIgQApQgJAhAFAfIAIApQAUBaAfBCQATAoAXAiQAKARAPASIAZAeQAnAwA3BEQA+BNAkApQA4BAAyAxQA9A8A7AtQAtAiAdAOQAHAEAQAGIJ6DoQDGBFBgAlQCiA/B9A/IBXArQAnAQAsAHQAlAGAtABIBNgCIBKgEIA9gDQAogCAgACQgggBguACIhIAEIhRAEIgoABIgsgBg");
	this.shape.setTransform(586.8,275.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#888E9C").s().p("AhKAcIAmgEQAbgCAVgHQAcgIAXgOQAbgSACAAIAJgGIAIAGIgIgEIgIAGIgFADIgRALQgVANgQAGQgQAHgWAEQgXAFgoACIgpAEg");
	this.shape_1.setTransform(455.2,202.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#888E9C").s().p("AheG+IAzhjQAZguATgfQAUgfAMglQAKgdAKgwIAQhTIAVhQQAHgbAIgRIAHgPIASgXIABgBIgEgFIhXhVIgognQhPhPgzhuIgEgJQAxBpBJBOQAQASAbAYIBnBjIABACIgBACIgQAUIgHAMQgFAJgFAOIgXBUQgIAcgLA6QgLA4gIAbQgOArgSAeIgGAIIgoBHIguBZIgIANQgCAEAAADIAAgDg");
	this.shape_2.setTransform(432.2,138.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#888E9C").s().p("AhsgtIgCAAIADAAIBjBYIABABIA/gcIAfgPQANgFALgCQgLADgNAEIgeAQIhAAdg");
	this.shape_3.setTransform(301.3,19.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#888E9C").s().p("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");
	this.shape_4.setTransform(360.3,119.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#888E9C").s().p("AKIGvQhEgYihg3Qimg6k3hyIieg7QgPgFgLgGQgQgIgggYQhhhLhahmQgvg0h6iZIhShmQgWgggRglQAJATAKASQAMAUALANIAaAhIBzCNQBFBUAvA0QBCBIA8AyQApAjAbAUQASANAPAHIAPAHIIzDOQAzATBUAeICHAxQBZAhBIAeIh4gtg");
	this.shape_5.setTransform(559.6,275.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#888E9C").s().p("A7sPZQgBgCASgMIAXgKIAWgJQAJgFAJgKQAPgPAIgaIAzjnQAQhMAjhAIAUggIBEhgQApg8AuhIQA2hVAjgqQAagfAbgXQANgMARgLQATgNANgKQAVgQApgiIAggcQARgTAFgXIAThRIAXhPIAuidQAZhbAMhFIALhOIADhBIADAAIA4AHQAlAEAgAHQAXAGAUgDQAVgDARgQQAPgNAMgVQAKgSAJgKQALgMAJgBQALgBALAKQALAIALAPIBtCWQAAABABAAQAAABABAAQAAAAAAAAQABAAAAAAIACgFICel/IADgFIANgBQAEgBACACIA2AiIAqAYIAWAMQAKAFAJAIQAVASAKARQAIANANAgQAPAdAUAJQAUAKAfgFQANgBAkgIIAYgFIALgEIALAAQAiAAAagLQAOgGAMgLQALgJAIgMIAMgZQACgEADgBIAHgBIBlBbIA7gZIAcgOQAQgIAMgDQAegJAcAKQALAEAQAJQAMAHAQAGQA/AdA6gCQAVgBAKgCIAegHQAcgFAeALQAXAJAfASIA1AeIA2AcQAbAPAYASQAzAmAkAuQAPAUATAeIAjAzQBTB3BTA9QAQAMBVA7QA7AmAdAtQAKAOASAoQANAdAQAbQAhA4AoAsQAQASAcAaIAtArIBRBSIADADIgBABIgBgCIgEgEIg2g1QgmgngbgXQhFg8gwhMQgXgkgUgsQgRgpgegfQgNgOgTgPIgkgZIhLgzQgsgfgbgZQgegbgignQgvg3g8hbQgvhIhLgwIglgWIgogUQg1gdgagNQghgRgUgEQgNgDgMACIgeAGQgjAIglgDQgigDgmgMQgfgLgigTQgZgNgZADQgLACgQAHIhuAzIhehWIgDAAQgEAAgCAEQgFANgHAKIgLAMIgDADIgKAGQgSALgZAGIgWAEIgdABIgHADIgIABIgZAFIgbAGQgXAEgMAAQgrAAgWgVQgLgLgKgRIgPgeIgKgVQgFgIgHgIQgOgQgRgJIhig5QgBgBgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAIgMABIAAABIgBACIioGRQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBgBIiOjFIgHgFQgEgEgDAAIAAAAIgBABQgDABgGAGIgbApQgXAfgdAJQgcAKgmgKIgZgFIhOgLIgCAAQgCgCABADIgOCAQgOBOgYBUIguCdIgWBOIgTBPQgGAcgTAUIgiAeQgtAmgRANIg9AtQgbAYgYAbQgiAog1BUQglA7gzBJIhDBgQgLAPgIAQQgjA8gRBLIgQBMIglCeQgJAdgRASQgJAKgMAHQgKAGgPAFIgGACIgPAGQgPAEgGAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAg");
	this.shape_6.setTransform(272.5,102.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#888E9C").s().p("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");
	this.shape_7.setTransform(363.6,287.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#888E9C").s().p("AAZCDIgZgjQgrhGgZhZIgKgsIgGgcIAGAaQAHAgAGASQAaBeAyBHQALARAhAqIAiArgAhUiHIgBgFIAAgDIgBgCIABACIAAADIABAFgAhXiYQgCgNACgOQACgRAFgLIgCAGQgGARAAAQQAAAHACAQg");
	this.shape_8.setTransform(479,226.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#888E9C").s().p("AgNAiIAPgrIABgDIAAgBIAFgSIACgEIADAAQABAAAAAAQAAAAAAABQAAAAgBABQAAAAgBABIgBADIgBAOIgRAnIgGAMIAAgCg");
	this.shape_9.setTransform(240.5,16);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#888E9C").s().p("AhnBDQgggXgXg1IgJgUIgCgDIgBgBIgBgBIgCgCQgJgKgIgFIgWgLQgMgGgOgJIgHgEIgBAAIgFgDIgEAAIAAAAIAAACIgCAGIAAABIAAABIgpBeIAjhgIABgBIAAgBIAAgEIAEgJIABgCIADAAIANAGIABABIAKAGIAgARIASAKIAMAKIADAFQADACAHARIAQAdQAJASAMAOQAPAQAPAJQARAKAUAFQAbAGAcgDQATgCAIgCIASgEIAdgGIAQgDIABAAIABgBIABAAIAYgBQAPgBAMgDQAggHAXgOIAHgEIAKgHIADgEQAEgDABgEQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAIADADIABAAIgCAAIAxAsIgygrIAAAAIAGAFIAAABIAAAAIgBgBIgFgDQAAgBgBAAQAAAAgBAAQAAABAAAAQgBAAAAABIgBADIgDAGIgCACIgIAFIgFAEIgOAIQgaANgdAFIgXADIgRABIgCAAIgBABIgCAAIhJAQIgkADIgDAAQgzAAgkgbgAEaBAIARAPg");
	this.shape_10.setTransform(267.8,22.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#888E9C").s().p("ABgBPQgygEgngQIhfgvQhbgrh0gxQBkAnBNAjQAwAWA1AcIAqASQAVAHAZAEQAnAHBCgCIB4gFQg0AEgyACIg4ACQgZAAgRgCg");
	this.shape_11.setTransform(666.1,331.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#888E9C").s().p("AD+C1IALgNIAVgcQATgaARgeQAMgUAdg7IAihGIACgJQhagFg9gDQghgBgtAAIhGAEIhdAEQhHADgRgBQgsgBgjgIQgUgEgPgHIgjgQQhLgohigsQBLAgBYAsIATALIAQAHQAIADAZAJQAiAIApACQAaABA+gCIB2gGIAogCQAngBAwABIBTADIBVAHIgCAHIgcA7QgTAogOAbQgTAjgYAiIgNARIgNARIgSAVIgKANg");
	this.shape_12.setTransform(687.6,346.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#888E9C").s().p("AILFaIA5AVgAEvEOQjRhKi1hEIglgPQgSgKgPgMIgjgaIgigcQg/g2g+hGQgvg0hEhVIhxiOIBoB/QBCBSAuAzQBFBMA5AzIAjAdIAlAdQASAOARALIAlAQII6DRIAuARg");
	this.shape_13.setTransform(547.1,275.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#888E9C").s().p("Ak7HQQAkg8AzgbIAdgNIAOgEIAOgEIAxgUIAPgGQAHgEAFgHQAJgLADgTIAThSIARhPIAOhEIAAgEIAAAEIgBAIIABACQAVhjAzhPICRjXIAwhLQAfgvAagdQAaggAdgZQgiAfggApQgcAlgqBCQhBBrhLBpQgZAkgMAVQgTAhgMAdQgYA6gMBKQgOBIgPA9IgQBAQgGAQgJAIQgGAHgSAGIgiAOIghALQgpAMgeAZQgbAXgYAlQgSAdgQAoQANgnAPgdg");
	this.shape_14.setTransform(109.7,160.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#888E9C").s().p("AgBiMQACgRACAQIADAmIgLD9QgChxAGixg");
	this.shape_15.setTransform(65.4,273.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#888E9C").s().p("AgKDmIgDl4QAEhCALgvIAGgTQABgDAAAMIgFAhQgEAngDAhIAFgTQAEgMgBAfQgDApgBA7IgCBdQABAcAFgIIAJgSQgODHgFAnQgBALgBAAQgDAAAAgyg");
	this.shape_16.setTransform(64.1,246.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0A3542").s().p("EgJQAr5QgUgGgfgBQghAAgRgBIgggCQgUAAgNgDIijgnQhegXhEgTIhhgVQg5gOgkgYIj0ijIj1iiQgugfhBgFIkxgbIAAlCQAAgUgEgIQgFgMgUgHQgugPhUgkQhYgmgrgPQgpgPgVg1QgfhWgshuIhOjDQgVgzgJgQQgVgjghgUQghgTguglIhNg+QgwgkgWgsQgOgagkg9Qghg4gPghQgKgTgOgMQgMgKgUgIIlxiTIAyg4QAcghANgZQAIgTgCghQgDgmgBgTQAAgUAMgGQAIgEAVAAIBBACQAlABAbgFQAHgBA2ABQAlAAAWgNQBFgpAzgjQAMgIAGgHQAHgKABgOQASmWAMjLIAEiMQAEhUALg4IAGgFQATADAJgPIALgcQAehMAdgkQAqg1BAgPQAOgDATgIIAhgNQATgHALgQQAJgMAFgVQAiiLAKg9QAXh8BDhcQBMhpBChnQA1hSAcgkQAxg+A3gkQAWgPAcgXIAygpQAPgOAGgGQAKgMAEgOQAOhAAbheQAfhoAPg1QA2i+ACiIIBKAJQArAGAdAHQAhAIAVgJQAUgKARgeQAdgxAcAAQAcAAAiAxIBYB7ICil6IAOAAQAEgBACABIA8AmQAkAXAZANQAaANAXAcQAEAFAZA0QARAiAZAGQAUAFAigGIA3gLIAIgDIAHgCQBdAFAghLQACgGACgBQADgDAGAAIBmBdIAmgQQAXgJAOgIQAhgSAagDQAegDAgASQBsA9BggaQAegIAfAJQATAGAjATIAoAXQAYAOARAIQCAA+BIBwQBLB3BGBGQAhAiA1AmQAeAWA/AqQBCAvAbBAQA5CEBjBYQAbAZAmAmIA/BAQgiAmgJAWQgHAQgXBXQgLAqgRBWQgTBMggAvQgUAegaAxIgsBRIAFAEQADADABACQAUBPAhAhQAqAqBQgLQAYgDAtgCQAogFAagSIBOgvIBvBVQgCAJgaAzQgQAiAEAcQAQBXAYA/QAeBMAxA8QBDBRCDCjQB1CLBrBRQAxAmAfALIEzB0QCzBDCBAuQDmBUBnApQC3BJCLBLQA3AeBGAIQAqAEBYgCICUgHQBXgDA9AFQgvBqhnBhQjJC/jrEDQitDAjQDPQiuCtjhDQQgMAMgKAFQgNAIgPAAIg5ADIg6ACImLAFIgUABQgNABgGAEQh+A/g9AiQhtA7g9BDQhPBXhVATQjSAviRBmQgKAHgUARQgRANgSgBQhMgDgmgEQhDgGgtgaQghgUhCggQhFghgegRQgPgJgNAAQgLgBgRAFQiAAmiSAmQhAAPgfAtQhSB3h7AvQgjANgjAbQgWARgbAAQgOAAgQgFg");
	this.shape_17.setTransform(365.4,284);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,728.1,573.7);


(lib.chadai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// chad.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABSZNIgGgPIgHgaIAGg3IgSgZIgKgzIAMgQIAkgOIAmg+IAGABIgnBBIgkANIgOARIAKAyIATAaIgFA2IAGAbIAFANgAtEVhIADgDIgMAXIgDAAgArVVPIACgBIgLAXIgDACgAlgUgIACgBIA9AoIgBACgAxrUaIg6glIgDgFIA4AlIBCAaIAcgvIAjgsIArglIAHgkIAOgHIAGggIAMgOIARgIIAVAEIARAHIAOATIAWgCIAdgSIAugvIA1heIABAFIg2BgIguAvIgdASIgWADIgOgUIgRgHIgVgDIgRAHIgMAOIgFAgIgPAHIgHAkIgrAlIgjAsIgaAtgAgaUOIgag6IADAAIAaA8gAhfTLIgUgpIADAEIATAmgAkjSkIgDgNIABgBIACALIASAYIgBABgAzVSLIAAgBIATAUIAAACgAz2RfIgnALIgwACIgBgGIAtgBIAngLIAkAQIADAFgAreN6IgIgUIAEAEIAGASgAotN2IgGgLIACgBIAHAMgAL6NfIAAgDIAZAJIgBAEgAr6NMIgEhCIAMhqIgJgRIABAAIANAaIgMBqIADA/gAwnIFIgPg6IACAAIAQA8gAiwAnIAPgBIAGADIgSABgAw8gwIACgCIA5A7IgDADgAPKifIABgBIAQAiIgBABgA0VktIAQgEIAEgHIAQgEIAIgQIAEADIgGANIgQAFIgFAHIgUAFgAzElAIANgJIAJg2IAOgJIgVgnIAEgBIAVAnIgOAJIgJA2IgNAKgATjlVIAAABIgbAAgArclZIALgGIAFAAIgMAGgApelfIAdgNIAHAAIgfAOgAm/mJIADACIgdAQIgIABgAxul8IALgQIAJgEIABAAIgFADIgNAUgAxOmNIAagVIgJgLIgcgLIgKgLIAGgVIgFgeIAFgBIAGAcIgEAaIAkASIAJAMIgeAXgAUC4UIAlgUIAlgmIADAAIgmAmIgmAVg");
	this.shape.setTransform(167.1,486.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#202020").s().p("AjKIoIgPgDIgKgEIgBAAIAAgKIgBgCIgQAAIgXgDIgYgFIgngOQgKgGgHgGIgIgIQgFgHgCgGIAAgKIABgKQABgUADgLIAHgTIACgCIgGgFQgGgHgGgJIgJgPQgQgbgIgSQgIgWgCgGIgHgeQAAgEgBgCIgJgPQgNgYgLgZQgNgfgGgXIgGgcIgCgGQgBgFgEgEQgDgDgHAAIgIgBIgBAAIgCAAIgDAAQgNgDgKgEQgNgGgHgHQgKgIgGgKQgJgEgHgIIgLgBQgUgDgSgLQgQgJgPgQIg1gvIgBAAIgBgBIgLgGQgVgNgLgVIgFgLIgBgCIgWgVQgKgLgFgKQgKgSgCgTQgKgEgJgIQgHgFgHgJIgEgFIgOgQIgCgBQgcgUgVgbIgKgOIgJgPQgQgcgBgdQAAgUAHgSQAFgPAKgNQAHgKAHgHIAWgWIAFgHIABgBIAAAAQAFgSAHgNQAJgPAIgJQAMgLAOgGQANgFARgDIA9gEIAsAAIhEADQgkADgLADQgXAFgQANQgIAHgLASQgJAQgEASIgBAAIgCADIgXAaIgOAPQgKANgFALQgIASAAARQgCASAGARQAEANAGALIATAeQAWAcAcATIACACIADACIALAOIABAAIADAEIAKALQAJAIALAGQAAgQAFgQIAAgBIABgBIASAGIAAAAIAAAAIAaAKIABAAIgcgIIAAAAIAAAAIgMgEIgEAPIgBAKIAAAAIAAAGIAAABIABAAIAJACIgBAGIgBAAIAJAJIABABIAAAAIgEAFIAAgBIAAAAIgCgCIgLgLIADAMQAEANAKAPIANAOIAOANIAMgDIgJACIAAABIACAEIAAABIACgBIgCACIAAABIAFAKQAFAJAIAJQAHAIALAGIAOAIQAFAEARAQIAXAUIAHAGQANAOAOAJQAQAJAUAFIAGABQgGgIgDgHIgCgEIgBgBIAAgBIABAAIABgBIAGgDIgCABIAAABIABABIAAAAIABACIAGALIAIAKIAFAAIgCgFIgBgFIAAgBIAHgBIACAJIABADIALAAIAEAAIAAAHIgCAAIgKAAIADAGQAHAFAIACIADAAIAAAAIAAAAIAAAAIgBADIAAABIgBADIgBAAIgDgBIgEgBIACACQAJAJALAFIANAFIAPADIAKAAQAIAAAGAFQAEADADAJIADAJIAFAWQAGAbALAaQAJAVAPAdIAKARQACADAAAGIAHAdQADAMAHAPQAHAQARAeIAOAXIAJAJIAAgBIACgCIAEgCIAAgJIAAgEIAAgCIAGAAIAAAOIgDADIgCACIgCAFIABABQAMAKATAFIAJACIACABIAAAAIAAAAIAAABIgBAFIgBAAIgJgCIgOgEQgMgGgJgHQgHAQgDATIgEAZIABAGQAAACACAFIAJALQAJAHALAGIAbAKIAWAGQASAEAIAAIAWACIABABIABABIAAAIIABABIABABIAMAEQATAGAYgDQAPgCATgGIAigLQARgHAMgJQAKgHAHgKIgBABIgKABIgCAAIgDAAIAAgCIABAAIAMgBIAFgBIADgGIAFgJIADACIAAAAIgHAMIATgGIABAAIABAAIAAgBIACAAIAGABIAQgDQAIgCAJgFIALgGQADgDAHgCIAdgKQARgJALgPIACgDIgFgNIgHgEQgMgLgHgSIgFgQIgBgHIAAgBIABAAIABgBIAAABIAAACIAFATQAFAQALALIAIAHIgCgKIAAgQIACAAQgBAPAEANIAAAAIAHAEIABABIACgFIABgEIABgCIABgBIAAgJQABgBAAgBQAAAAABgBQAAAAABAAQAAAAABABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIAGgHIABgBIACgBIABABIABgBIgBABIgFAFQgCAEgDAAIgDAAQgBgBAAAAQAAAAgBAAQAAAAAAABQgBAAAAAAIgBAJIgBAFIgDAFIgBABIAAAAIgBACIABgCIAAABIAAABIgBAAIAAABIgBAAIgDAFIAAACQAEAGAFAGQAHAJAHAFQAJAGAOAGIAAAAIAAAAIAAAAIACgBIAAAAIAAABIABABIAAAAIACgBIgCACIADAFQADAHAGAGQAHAJAJAGQAMAIAOACQAPACAOgEIAGgCIABAAIAOgEQAMgFAIgHQAJgGAGgLIgQACIgBAAIgBAAIAAgKIAAAIIACAAIARgDIABgBIAEgLIADgJIAAgEIgjgFIABAAIAkAEIAAABIAAACQgBAKgFAKIgBADIACAAQAUgEASgKIgDAAIAGgFIABACIAAAAIAOgKIADgDIABAAIABABIAAAAIgHAHIgJAGIgCABIAAABIABAAQAJABAGgCQAHgCAHgFQALgIAOgPIAAgBIAAgBIAAAAIACgBIALgEQAMgIAHgKIAEgGIgCABIgGgLIABACIAEAHIABAAIAEgCIABgCIACgFIAAgBIACABIAAABIgBABIgBAEIAHgCIAWgKIgFgBIgLgEIgDgCIAAAAIABgCIABABIACABIAGACQAHADAEABIABAAIAFgCIAFgDIgBgBIACADIgBAAIgGADQAKACAMgDQALgEAJgGQAIgGAFgHIABgBIgBAAIAAAAIAAAAIABgBIAAAAIABgCIACgCIAAAAIAAgBIACABIAAABIgBACIAEgBIABAAIAGgDIAFgFQACgCAEAAIAKAAIA2AFQAVACALgCQAMgCANgHIAFgDIABAAIAIgEQAJgCASgBIC9gSQAJAAAOgHQANgFAGgLQAEgGAGgRIAGgXIAAgBIAAAAIAAgCIAAgCIAAABIAAABIABABIAAAAIAAABIgBAGQgFASgDAJQgGAOgHAHQgGAIgQAGIgGACIjPAUQgPACgHADIgPAIQgMAFgNACQgLABgHgBIgpgEIgRgBIgOgBIgFABIgFAEQgEADgHACIgEABIgFAHQgHAHgIAFQgNAHgLABQgIACgKgCIghAOIgCADQgEAGgFAFQgJALgOAFIgDABIgBABQgLAOgNAJQgFAEgJAFQgIADgHgBIgIgBQgOAJgSADIgKACIgEAGQgDAGgGAFQgKAJgLAFIgOAFIgHABQgNAEgNAAQgPgBgNgHQgTgKgLgTIgEgIIgLgFQgSgIgLgNQgFgHgEgHIgIALQgKAKgNAHIgLAEIgXAIIgDACIgSAKQgKAFgJABIgIAAIgIAAIAAABIgBAAIgBABIgUAFIgJALQgKALgNAHQgOAIgOAEQgmAOgVADIgQABQgJAAgHgCgAE6GZIAAgBIgBgCIABACIABABgArmhsIAAAAIgCABgAr3jEIgDgBIADABIADAAIAAAAIgBAAIgCAAg");
	this.shape_1.setTransform(338.9,554.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#202020").s().p("ABjAgIAegpQgUgQgcgEQgOgCgMABQgIABgNAEQgKACgNAGIgDABIAAAAIgEACIgEABIgGAEIAFACIAAAAIAAADIgGgBIgDgBIgEACIgFAEIAAABIgCgBIADgDIAFgEIgmgLQgVgGgQgEIgLgBIAXACIAtAMIAQAEIAGACIANgIIAOgFIAVgHQASgEARACQAVACARAIIASALIABABIggAqgAgCAOIABAJIgBgJgAgNAIIgBgCIABACIADADgAhjgdIgKgBIgVgCIAVACIAKABg");
	this.shape_2.setTransform(282,502.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#202020").s().p("ABoGYQgVgOgMgUQgOgWgZgSQgQgNgJgOQgFgIgDgIIgGgPQgEgMgEgEQgCgCgEgCQgRgGgJgLQgHgHgDgKQgCgIAAgJIABgOIACgHIAAgDQAAgEgEgGIgOgWIgIgPQgFgNgBgLQgCgPAHgOIAAgCIAAgBIABAAIAAgBIgCgFIgGgMQgFgLgCgGIgIhVQAAgVABgLQADgMAEgKIAEgHIAAgCIADgVIAEgKIAHgOIAJgMQABgDgDgDIgGgGIgDgGIgEgQQgGghAHgaIgFgGQgHgIgDgJQgCgLABgKQAAgHAEgMIABgEIgDgGIgCgHIAAgBIgFgBQgHAAgJgEQgIgGgHgHQgIgIgEgHQgGgMABgGIgBgZIABAXQAAAIAFAKQALATASAKQAJAGAIgCIACAAIAAgBIAAgBIABgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgFgHIgBgBIAAgBIALgEIgKAEIACADQAFAGAAACIgBAFIgBAAIABABIACABIABAAIABAAIgBACIgCgBIgBAAIAAABIABAEIADAGIAAgDIAAAAIABgBIABAAIAAABIAAAAIgBAFIAEAFIAEAFIAEgEIgFAFIAAAAIgCgBIgCgCIgEgGIgDAOQgCALABALQABAKAHAJIAHAIIADgIIACgDIAAgBIACABIAAAAIAAAAIgBADIgEALIAFAFIAAAAIgBABIABAAIgBABIgFgEQgEAQABAUQAAAIADAQIADALIADAFIAEAFIAEADQACADgBADIgKANIgDAGIgEAKQgFAOgBAOIABABIABAAIgBABIAAABIgBABIAAAAIAAAAIAAAAIAAAAIAAAAIgGAMIgEAPQgCALAAAPIABApIACAUIAEAXQABAMAHANIAGAOIABADIAAABIgBACQgEAKgBALQgBASAJARIAMAVIAJAOIADAIIAAACIgCAIQgCAJABALQABANAIANQAHAJANAHIAIADIABAAIAFAEIAOAfQALAaAWARQAYASAPAWQALAVAWAOIAzAcIAAAAgAhclIIABgBIAAAAIAAABgAhclIgAibm0IABAYg");
	this.shape_3.setTransform(296.5,465.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#202020").s().p("AhFVVIABAAIABgHIABgEIABABIgCAJIgBABIACABIgDgBgAhCVKQACgNgEgNQgFgNgKgKIgKgKIgRgRQgEgDgLgGIgDgBIAAAAIACADIAAAAIgBABIgFgGIgCgBIgIgCIgDAMIADgNIABAAIAHACIgOgQQgKgLgKgHQgPgKgMgPIgMgQIABAAIAAAAIAAgBIgDgBIAAAAIABgBIgBgBIABAAIABAAIgCAAIACgBIAKgLQAagaALgUQAFgJACgJQAAgFAGgDIAJgCIAhgDIA5ACIAOACQASAEAqANQAdAGAOgBQAPgBAMgGQAGgDAGgEIABgBIAAgBIAAgBIABAAIADgBIADgCIAAgBIAAAAIACABIAEgCIAIgCIABAAIAAAAIAAABIAAADIAAgEIABAAIAAAAIAEADIAJAFQAMAEALgBQAHgBAGgCIAAgBIADgFIAAgBIABAAIACABIACABIAEgDIABgBIABAAIAEAGIAAAAIgBABIgBABIAFABIgDgDIABAAIgCgDIAFAGIgBAAIAGABQALABAIgEIAAACIAAgCIAAAAIABgEIAAAAIADABIAFgDIAAAAIgEgFIAKAKIAAAAIAdAIQAbAMARgDIAngIQAKgBAJgDIAUgGQAKgEAFgGQAFgEADgIQADgHgBgJQgCgMgJgJIgJgHIgQgIIgfgRQgMgIgGgLQgSgdghgaQgLgIgGgMIgHgPQgEgMgHgKQgIgNgMgJIgBAAIgCgBIgCgBIAAABIAAAAIgBAAIgGgBIgCAAIgBAAIAAAAIABgEIgFgDIABgBIADgHIAAAAIADABIAAgBIAAgBIAAAAIgCgBIgBACIAAAAIAAgCIABgBIACgGIABAAQAAgLgEgKQgEgMgHgMIgOgXIgDgGIAAgBIAAAAIAAAAIAAAAIAAAAIADgKQADgJAAgHQAAgQgGgOIgFgLIgDgGQgCgDgCgLIgCgRQgCgRAAgUIAAgTQAAgIACgEIABgEIABgBIAGgOQACgHAAgJIACgLIASgdIAGgJQADgGABgFQAAgFgDgGIgGgJIgGgKIgGgLQgCgFgBgJQgBgQAFgMIAEgNQACgLgEgIIgDgGIgLgJQgEgEABgIIAEgNIACgEIAAgBIAAgDQACgLgGgLIgBgDIgCABIAAAAIgJACIAJgCIAAgCIABgBIgBAAIgDgEIgFgFIgBgBIgBACIAHgJIgFgIIgCgDIgCgEIgEgGIgFgEIgBAAIgBgBIgBAAIgHACQgGABgHgEQgGgFgDgFQgEgGABgHIABg1IgCgOQgDgRgKgLIgCgCIgFAAIAAgEIgCgCIgBgBIAAAAIACgDIAAgBIABgBIAAgJQgCgZgLgTQgDgFgFgCIgKgDIgFgDIAAAAIgBABIgCAAIAAABIAAAEIAAAAQAGACgMgCIgBgBIAAAAIAAAAIAAAAIgDAAIgJgBIgEgBIADAAIACABIABAAIAAgBQABgGAAgHIgCgGIgFgBQgEgBgHACIgFACIgBAAIgCgHIgBgBIgDgIIACAAIAJgDQgGgCgGAAIgDAAIgDgBIgVgKIgBABIAAAAIgFABIAAgBIAEgBIABAAIgDgBIgBAAIgBACIAEgRIACAAIABABQAAgQgEgPQgGgUgQgVQgPgVgSgHQgMgFgfAAIhVgCQgIgBgFgEIgJgLIg1hIIgrg9QgcgogSgWQgJgKgDgMIgzjZQgCgIgDgFIgBgDIAAgNIACgDIAGgEIAMgFQAFgDAIgBIANgBIAHgDQAFgCAIgHQAGgGAEgHIADgIIABgDIAAgCQABgEgBgJQAAgGAGgGQAFgFAFgDIANgFIACgBIAEgDQAGgEADgHQAEgKgBgMIgEgSIgCgNQAAgEADgJIAKgYQAFgMAHgKQAFgJAKgLQAMgMAJgLIBqiQQAXgfAMgOQAjgtArgoQAognB+iCIBGhGIhdBhQhNBSgnAoIg7A7QgbAegZAgIgxBDIhKBnIgPASIgPAQQgKAMgIAQIgLAZIgCAHQgFAKAEANIADALIABARIgBAIIgDAIQgEAJgHAGIgFAEIgCABIgLAEIgJAHQgFAFABAGIAAALIgFAOQgEAJgIAHQgIAIgIADIgBABIgCABIgZAFIgKAFIgEADIgCACIAAAMIABACIAgB/IAQBBIAIAeQACAKAHAIICIC3IANARQADADAHABIBSABQAfgBASAIQATAIASAXQASAYAHAWQAFAUgBAWIAJAEIABAAIAEAAQAGAAAGACQAKADAHAGQAGAFADAGQAJAEAGAIIACADIABgBIgBABIAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIARAJQAGAEADADQAMASAFAfIABAQQAOAPAFAUQACAKAAAIIAAAuQAAAGACAEQAHALAJgBIAFgBIACAAIACABIACABIAGAFIAEAFIADAFIACAEIABADQAAABABAAQAAAAAAABQABAAAAAAQABABAAAAIACADIADAFQAEAHAAAGIAAAGQAJAOgCAQIAAAFIgBAAIAAABIgBADQgFANAEAGIAIAGIAEAHQAEAJAAAIIAAAMIgCAIIgDAJQgEAIABALIABAKIABABIAAAAIABABIACACIABAAIARAjQACAHgBAFQgBAEgDAHIgMAWIgMATIgBAEIAAADQAAAIgCAIQgCAIgFAKIgCAEIgBABIAAAAIAAABIAAAxIADAaQACAKADAFIAJAVQAFARgBANQgBANgDAKIAKASQAGAIAFAMQAFALADAQQACAKgBAKQAGAEAGAGQAQAOAMAbIAJAUQAEAHAGAEQAjAcAUAfQAEAIAIAGIAeAQIAPAIIAMAIQANANADAOQAEAMgDAMQgCAKgIALQgJAMgOAGIgEABIgBABIgDAAIgPAFQgJADgNABIgoAIQgXAEgdgNIgHgDIgXgGQgHAEgHAAQgNADgNgEIgGgBIgJADQgPADgQgDQgLgCgKgGIgHADIgLAHQgNAIgTAEQgOACgQgCIgWgEQgrgOgSgEQgPgDgJgBQgOgBgPAAIgqACIgIABQgDACgCAEQgBAIgEAGQgMAVgaAaIgIAJIgDADIgCAAIABgBIACgDIACgBIAGgHQAbgcAMgUIAEgJIABgFQAAgDACgCQACgCAIgBIA8gDIASABQANABAXAHIAqAMIAcAFQAWACATgHQAIgDALgGIACgBIgBgCIAAAAIABgBIAKgDIgBgBIgBAAIACgCIAAAAIAAgBIgCgBIAAAAIgFACIgLAHQgOAJgPACQgUADgcgHIg9gRQgRgEgJAAQgOgCgQAAIguADIgKABQgEACgCAFQgBAJgFAIQgMAUgZAZIgIAJIgBAAIgCADIAAACIACADIABAAIgBAAIAAAAIgBgBIgBAAIACABIAJAMQAKANAQAMQAKAHALAMIAQASIAFADQAJADAHAGIALAKIAHAIIAIAJIAEAEQALAMACAOQADAKgCALgAD1RYIgCACIgCABQARAEAJAEQAdAMAUgDIA9gNIAVgGQANgGAIgJQAHgIACgKQADgKgCgLQgEgPgLgLIgEgDIgBgBIgGgEIgPgIIgegQQgKgGgFgJQgTgegjgcQgJgGgFgLIgGgPQgGgMgHgMQgKgOgNgJIAAABIAAABQAMAJAIANQAHAKAGAOIAHAPQAGAMAJAGQAiAcATAeQAFAJAKAGIAMAHIASAKIAPAIIAEACIAGAFQAKAIAEAOQACAJgBAKQgDALgFAGQgIALgLAFIgEABIgBAAIgCABIgPAFQgJADgMABIgnAIQgWADgbgMIgWgHgACERWIAAADIALAFQAUAHATgHIABAAIgBgBIgFgDQgLAEgOgDQgMgDgJgGIAAgBIgBAAIgDABIgEABIABACIABgBIACgCIgCACIADACIABABIABgBIABAAgADERdIABAAQAHACAHAAQAHAAAHgCIABgFIAAAAIgFACQgLACgJgCIgFADgAC4RYIAFADIAGgDIgGgCIgFACgADgNOIACABIAAgCIgCgBIAAACgADFL8IAJAOQAKAOADALQAHAPgBASIACABQAAgRgFgQQgEgMgJgOIgKgOIgCgBgADCL2IAAAAIABABIABgCIgBgCIgBADgADSHTIAGAKIAEALQAAAFgDAGIgFALQgHAMgHAKQgGAIgBAFIgCASQgDAOgEAHIgCACIAAABIgBABIgBAHIAAARQAAATABARIAEAYIADAMIAEAHQAIAPABARQACAQgGAQIACgBIAAAAIACgJQADgKgBgJQgBgRgIgRIgHgNIgBgGIgDgYQgCgQAAgUIAAgRIABgIIABgCQAGgKACgLIACgKIAAgKIACgEIAFgIIAOgWIAFgLQADgGAAgGQAAgDgDgIIgPgbIAAgBgAAzA/IABAAIAFgGIAAAAIgGAGgAjJSnIACACIgCgCgAjRShgACDRKIAAgBIAAABgADlRBIAAgBIAAAAIABACgABlQ8IAAABIAAgBIAAAAIAAABIAAAAgADKNaIAAAAIABgBIgBABIABAAIgBAAIAAAAIAAAAgACtEvIABAAIAAABgAgWAOIgBAHIgBAAIACgHg");
	this.shape_4.setTransform(275.4,399.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#202020").s().p("AAJFuIgFgFQgCgDgEgBIgPACIgIgBQgGgBgBgCQgBgCAEgEIAEgFQADgFABgIIABgCIABgXQAAgKgBgIQgDgQgLgOQgJgLgNgGIAAABIABABIgHADIgDgEIgDgGIgFgBIgEAAIABgBIABgHIACAAIgIgQQgGgLgDgKIgDgJIgCgKIgDgTQgCgIgFgJIgNgZQgLgTgIgTQgIgWgEgQIgPg2QgFgRgIgMQgHgNgNgLQgYgWgggEIgIgBQAIALACALIADANIAAABIgEABIAAgBIAAgCIgCgKQgEgNgIgLIgRgCIgDAAIAAgCIAAgBIAAgBIACAAIgHgNIgBgDIgGgCIgKgEIgFgBIgBAAIABgEIABABIAPAEIgFgGIgHgGIgJgGIgKgEIgLgCIgDAAIgDAAIgEAAIgLAAQgGgBgDgDIgigeQgRgRgNgKIgPgLIAAABIAEAMIAAABIABAAIgCAAIAAAAIgBgBIAAgCIgEgKIgBgDIgGgDIgIgEIgGAMIAGgOIABABIABAAIAHADIADACIgFgKQgHgKgMgMIgIgIIAAgCIAJAJQAMALAHALQAEAGAEAHQAIAEAJAIIAeAbIAbAXIAHAGQAEADAFAAIAKAAIAIAAIAOADIAKAEQAGACAEAEIAIAGIAJAMQANAHAIAJIAEAEIANABQAhAEAZAXQAPANAGAMQAIAMAGASQAJAZABAIIAFAWQAFATAIARIASAmIAOAZQAFAKACAIIAEAUIAAAEIABADIACAHIAFAOQAFALAMAVQAKADAKAGQANAJAJAOQAGAMADAOIABAKIgBAiIAAACQgCAIgGAGQgBABAAAAQAAABAAAAQAAABAAAAQABAAAAABIAEABQAFABAEgBIAIgBQAFAAACADQAFAIAKgCIAUgGIAEgDQABAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAAAIABgCIACgEIABgDQAIgMAJgIQAKgKAPgGQAJgEAPgCIAGgBIABAAIABAAIAFgBIAWgGIAMgCQANgHAOgGIACgFQADgLADgFIAEgIQAEgFACAAQADgBAHgFIAEgDQgBgCAGADQABABABAAQABABABAAQAAAAAAAAQAAAAAAgBIAVgVQAHgGAJgFIACADIAFAFIABABQAAABAAgBIAAgGQAAgGADgCIAFgBQAIgDAMgBIAUgBIASALQAKAHAHAJIAHALIADAFIACAGIAAABIAAAEQABAEADACIADABIABAAIACABIACACIAGAIQAIAKAEANIAKAGIAJgFQAOgHATgCIANgCIAFgEIAHgFQAMgGAIgCIADAAIAAAAIACABQADACACgEIAFgFIABgBIAIgGIAMgGQAEgDAJgDIAGgCIABAAIAPA3IAAABIgPg3IgBAAIgGACIgNAGIgHAEIgGAJIgGAPIAAABIAAAAIgBAAIAAgBIABAAQACgJAEgHIAEgHIgDACIgHAFIgBABIgFAGQgDAEgDgCIgBgBIgBAAIgCAAQgKADgJAEIgHAFIgFAEIAAABIAAAAIgBAAIAAAAIgCABIgLACQgXACgRALIAOAMQAJAKAHALIAGALIABADIAAAAIAAABIgEABIAAAAIAAgBIgBgBIgFgLQgHgLgIgJQgIgIgIgFIgFAEIAAANIACgBIAAABIABADIgQAEIgBABIAAAAIAGARIgIgVQgGAJgDALIgDALIgBADIAAABIAVADIgYgDIAAAAIAAgBIAAgCIADgMQAEgMAHgKIAAAAQAFgIAHgHIgBgGIgCgHIgIgDIgJgEIAAAAIgBAAIACgFIAAAAIABAAIAAABIABAAIAHADIAFACQgDgIgEgFIgGgHIgDgDIgCgCIgBgBIgEgBQgEgCgBgFIgBgEIAAgBIAAgBIgEgKIgHgKQgHgJgJgFIgQgKIgSABIgRACIgGACIgBABIgBABIgBAJIAAACIgBgBIgCgDIgEgEIgCABIgEACIgTARIgJAKIgBABIgBABIgDgCIgDgBIgCAAIgBACIgJAFIgDACQgCAAgDADQgFAIgFAPIAIgCIAHgCIACAIIgBAAIgHACIgLADIgBAGIgBAEIABACIAAAAIgHgCIAAgBIgBgBIABgFIgIAEIABAAIACAAIgBAGQAAACAAABQAAABAAABQAAAAAAAAQAAgBAAgBIgCgBIgGAAIgKAAIAAABIgFADIgCgDIgGABIgZAHIgCABIgEAAIgOACQgSAFgOALQgNALgHAOIgBAEIgCACIgDADIgJAEQgNAFgGABIgFAAQgFAAgFgDgAGJE9IAFAAIADAAIACgBIgBgKIgJALgAGXEqIADgCIgEgDIABAFgAkZhtIAAACIABAAIgDABIANABIgBgBQgHgHgIgFgAGaFtIgBgBIABABIAAADgAlDhWIAAAAIgBABgAn7kBIgDgBIgEgBIAEABIAUAHIAAgCQADgIABgJIABABQgBAJgDAIIAAABIAAAAgAnukVIgEADIAFgEIAHAGIAAACgAoyltIgIgCIgBgBIAAAAIAAAAIABAAIADABIAFABIAGACIABABg");
	this.shape_5.setTransform(318.6,562);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#202020").s().p("EACVAivQACgFAAgGQABgOAEgLQAFgKAHgKIAHgIQAFgGgBgEQgBgEgGgFQgHgFgBgEQgFgJgCgOQgFgdAJgVIADgHIAAgCIgEgDQgKgHgEgGQgFgHAAgMIAGgTIACgJIAAgFIgCgCIgCgBIgBgBIgDgEIAAgDIAAgBIACgGQABgEgEgEIgFgGIgBgBIgEAAIgJACQgJAAgJgGQgJgHgFgIQgFgIABgLIAAg8IgBgQQgDgIgEgEIgHgGQgHgGAAgIIAAgRQgCgUgHgMQgCgCgFgBIgIgBQgFgCgEgFIgBgCIgBABQgGABgFgBQgDgBgEgEQgDgCgBgEQgBgFABgEIAAAAIgCAAQgGgBgFgCIgRgIIgKgDQgHgDgFgGQgEgFgCgHIgCgIIAAgDIAAgCQAEgRgFgPQgEgOgKgPQgMgPgMgEQgEgCgZAAIhIAAIgXgBQgLgCgJgGQgGgGgIgKIgOgSIgtg8Qg7hTgfgmQgOgQgFgRIgIggIgQg+IgahpIgFgWIgGgWIgFgUIgCgEIABgFIACgKQgBgFAEgEIAHgHQAFgFAMgHQAJgEALgDIAfgIIADAAIABgBIAAgBIAAgBIACgXQABgLAHgJQAIgIAJgHIAQgIIgDgIQgCgMAAgLQAAgIAFgPQAFgPAJgUQAHgQALgSIAYgcIAKgLIAJgMIBPhrQApg8ApgvQAYgbAXgVIAsgsQA6g8BrhzICTiaIAGgIQAHgHAAgOIAcokQAEhdAGg5IA1mUQAFgdAMgTIA9hhIADgIIABgEIgCgEIgYgVIgEgEQgJgKgDgGQgMgTgTgVIgagZIgKgIQgSgNgMgTIgKgUIgHgVQgCgMABgIIABgKIAAgBIAAgCIABgBIAGgHQAFgEABgDQABgDgEgGIhThxIgRgVIgDgEIgDgBIgBgCIgCgBIgSgOQgSgOgDgWQgCgKAAgiIgChgQAAgugNhKIg5ktQACgOABgFQACgGALgJIAHgFIA3gYQAsgNggAVQgnARgUAKQgMAIgCADQgDAFAAANQABAGACALIA2ETQAPBPABAsIACCHQABAWAPALIAXARIAEAFIASAXIBaB5QAGAHAAAEQgBAEgHAFQgHAHgBADIgBADIgCAHQgBAHACAIIACAGIAEANIAJASQALARAQALQAkAaAiAzIALAOIAaAYQAHAEACAEIAEAFIgBAGIgNAVIg6BdQgLAQgDAVIgCARIgbDOQgJBSgIArQgIA0gFBKIgGB8IgVIAQAAAPgEAHQgDAFgLANIlJFYIg1A0QgtAvgwBFIhXB3QgJAOgLAMIgXAaQgQAWgOAoQgFALAAAHQAAAIADALIADARIAAAHQgCACgEACIgQAGQgGADgJAJQgIAGAAAKIgBATQAAAHgGAGQgDADgDACIgJACIgTADQgKACgHADQgJADgIAGIgKAIIAAAOIgBAFIACAEIAFARQANAsATBZIAXBjQAEAQANAPQAfAnA5BTIA5BNIANAPQAHAGALABIBbACIARAAQAKAAAHACQAOAFAMARQAKAPAFARQAGASgFARQgBAGABAEQACAGADAEQADAEAFADIAKAEIARAHIAIADIAKAAIABABIAAACIAAAKQgBAEAEADQAEACADgBIABAAIAAgBIAAgBIAHgCIAAABIABAAIAAACIACADIAEAFIADACIAJACQAHABABACQADACACAFIADAJIACASIAAASQAAAHAFADIAGAHQAMALgBAUIgCA6IABAKIADAJQADAIAJAHQAKAGAIAAIAJgCQABgBAAAAQABAAABAAQAAAAABAAQAAAAABABIABAAIABACIAFAHQADAFABADQgBADgCAGIACAEIAEAFQACACABAFIgDAJQgFAOgBAEQgBALAFAIQADAFALAIIADADIAAADIgCAIQgJAUADAcQADAPAFAIIACAFIAFAEIAIAJQABAFgFAFIgIAJQgGAJgGALQgFAKgBAPQAAAGgBAFIgCAEg");
	this.shape_6.setTransform(275.4,233.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#202020").s().p("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IABACIADAFIABAAIAZALIAGABIAEAAQAIABAEACQADACADAFIADAIIAAAAIAEAAQAEABADADQADACACAEIABACIAAABIABABIABAAIAIAEIAJACQAFABADAGQAJAQACAZIAAASIAFADIAEAFQAIAJAEAPIABAMIgCA6QAAAIAEAHQAGAHAFADQAIAFAHgBIAIgDIACABQAEADADAFIADAFIAGAJQADAFgBAFIgBAFIAEAHQAFAIgCAJIgCAIQgEAJgBAGQgBAIAFAGQADAEAJAGIADAFQADAGgCAHQAAAFgCACIgBAFQgGAOABASQABALADAFIAFALIAFAJIAHAIQAEAGgBAFQgBAEgKAOIgPAYIgBAEIgCAHIAAAHIgDAOIgCAIIgDADIgDAHQgCAGAAAJIACA4IADATIAEAPIAIARQAGAPgBAMQgBAKgBAEIgDAIIgBABQAAADABAEQACAGAGAJIAKAQQAHAMADAJQAEANgCAOIgCAQIAAABIAGACQAIADAEAEQAMAHAGAMIALAUIAGAQQAHAOANAJQAfAZASAcQAEAHAGAGIAMgCIALgEIABAAIACAIIABAAIAGASIAJAFIAQAIIAIAGQAHAIAAAIQACANgJAIQgFAFgHACIgSAGIgNADIgBAAIgHANIgBABIABAAIgFAJIgcgPIgDAAQgQADgZgKIgHgDIglgJIgFAEQgJAFgIgCQgHgBgJgFIgDgBIgBAAIgEADQgJAFgJABQgIAAgKgDIgLgHIgDgBIgFAAIgKADIgKAEIgBABIgFAEIgLAGQgLAFgNABQgOABgagGQgqgMgTgEIgOgDIgOgBIgegBIgXABIgcADIgLACQgGADgBAGQgCAMgGAJQgIAQgTAUIgVAXIgBADIABAFIARAXQAMAOAOAJQALAJAIAIIAOAQIAEAEIAAAAIAFACIANAHIASARIAFAGIAFAEQAIAIAEAKQAGAMgCANIgBAFIANALQALAKAFAIQAIAJAEALQAJAFAJAGIAfAcIAcAYIALAKQAFAEAIABIAXAAIADAAIACAAIAKAEIAHAEIAGAFQAFAGADAGIABABQAMAFAJAJQAEAFAEAFIARABQAdADAWATQAMALAGAMQAEAHAIATIAJAeIAFAWQAFAVAIATQAJAVALASIANAYQAEAIACAIIACAQIACAJIACAJIAHARQAHAQANAVIABADIADABIAIACQAJAEAJAHQAHAHAFAMQADAJABAIIgBAeIgBAHQgBAIgEAFIgEAGIgEAFIgBADIADACIAHACQAFABAJgBIAOgCQAHAAAFAGQADAGAHADQAHACAHgCQAIgBAQgGIALgEQAGgEACgFIAEgHQAEgHAFgEQALgMAOgFIANgDIAIgBIABAAIABAAIADgBIAVgGQAMgCAGAAIACAAIALgHQAMgGAPgFIABAAIABgEQAEgVAFgHQABgDAEgCIAEAAQAFgBAGgFIAEABQABAAABAAQAAABABAAQAAAAAAgBQAAAAAAAAIATgUIAGgFIAFgDIABgBIAEAFIACABQAAABAAgBIABgHIAAgCIABAAIAGgCIAOgCIANgBIAMAIQAGAEAHAHIAFAIIADAGIAAACIAAACIABAGQABAHAGADIAFACIABAAIAAAAIACABIAEAEIAEAGQAHALABAKIAAAAQAQAHAMAMQAJgKAMgFIAOgEIAGgCIAUgCIAFgDIAAAAIADgCIAKgHIAHgDIAHgCIAAAAIAEABQADACACgBIAFgEIAHgIIAEgEIALgGQAEgHAGgGQALgLANgHIAUgIIAFgCIAdgNQAJgEAJgCIALgBIAKgFIAUgIIAFgCIACgCIACgBIAJgGQAMgHAFgCQAHgCAOgBIAIAAIBGAGQAMgIARgFQAUgGAggCIATgBIB+gNQAFgBACgCQADgBAAgGIACgMIADgHIAHgJQAOgTAVgKQAHgEAKgCIAFgCIAHgDQAFgDAFgHIAQgXQANgUAJgMIAEgGIADgEIgHAHIgoA3IgFAFIgIAFIgWAHQgRAHgNAMQgIAGgFAIIgGAIIgFALIAAACIgBAEIABgGIAAgCIAEgHQAIgOAJgIQARgRAYgIIAJgDIAEgBIAFgEIAFgEIAng5IAHgJQADgEAAgFIADgEQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgEgDIgEgCIgHgGIgCgBIgBAAIgBAAIAAAAIgBgBIgOgOIgFgGQgLgLgHgOIgEgNIgBgIIAAgQIADgMIAGgQIAIgNIANgNIA1gnQAcgSAegDIA2gHIACAAIAHAAQAKAAALACIAHACIACABIACAAIAMgCQAggEAPABIAOABIAAAAQAMgEALgBQAOAAAMADIAHACIALgEQAggJAWgBIARABIACgBIAFgCIAGgEQAWgPAXgGQAMgDAMgBIAkgBQAMgDANAAQARAAAPAIIADgBIAAgBIACgFIAEgJQADgKAHgJIANgPQAJgJALgGQAPgKAUgCIAJgBIAKABIADABQAAAAABAAQAAAAAAAAQABAAAAAAQAAgBABAAIABgDQABgCAFgBIADAAIABgBIAAgBIADgDIAKgKQAIgGAJgDIAJgLIAOgNIAIgGQADgBACgDIAEgHIABgEIAAgBIABgDQACgRAKgRQAHgLAKgIQAKgQASgJIAFgCQAIgNAMgLIAUgQIABgBIAAAAIgDgDIAAgBIAAAAIACgCIAEgFIAIgIQAHgIAMgIIACgBIAEgCIABgBIADgBIADgBIAPgFIAGgBIADAAIAGABIAEgEIAGgJIAAgDIAHgOIAKgOIAQgRIANgMIALgHQALgFANgDIAIgBIACAAQAGAAADgDIgEgOQgEgTACgWIACgSIAAAAIgBgBQABAAAAAAQABgBAAAAQAAAAAAAAQAAAAAAAAIACgQIAFgQIAGgLIAGgIQAIgLAMgIIARgLQAUgKAUgCIADgDQAMgIALgEIABgBQAFgIAHgHQAOgPASgHQANgGASgCIANAAIANgLIAQgJIAJgEQAZgMAngOIAKgFIARgFQAWgFATACQAJAAAMADIADABIAEAAQANAAAMACQAIAAALAEIAAAAIABAAIADAAIAEACIAGABQADAAABgEIAGgRIgCAAQgMgDgKgFQgUgJgOgTQgxgUgjgzQgRgZgEgeQgDgcAKgeIABgEIgaguQgLgTgBgVQAAgKACgJQACgUAAAKIAAgHIgBgDIgIgSIgMgnIgDgEIgIgMIgGgPIgCgHIgCgKIAAAAIABgBIADgFIABgEQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAgBgBQgIgCgEgDIgEgCIgBADIgHADIgXAFIglADQgdgBgZgOQgXgMgRgYQgKgQgHgPQgKgVgCgWQgCgUADgWQACgMAHgUIAGgPIAVgoQADgJAFgIQAHgNARgOIAQgOQANgKALgHQAOgJASgFIAIgLQgEgKgBgLIgCgNIgEgEQgQgQgJgXQgHgOgBgQQgNgYADgbQABgVALgTIAigsQAQgSAOgMIAUgOIAKgHIADgBIACgBIAXgQIgEgQIgCgPQAOgFgHACIAAgBIAAAAIgEgNQgCgKgCgOQgIgLgEgNQgKgaAFgZQAEgZAPgTQANgRASgKIAEgDIACAAIAHgEIAYgKIAGgCIAQgFIABgBIgBgCIgBgFIAAgEIACgNQAEgRALgQQAIgKALgJIAHgNIASgZIAJgIIASgQIASgNIAEgJIAHgLIABgCIACgCIABgBIgHgKQgKgPgFgRQgEgOAAgQIACgVQADgQAGgOIAGgNIAKgMIALgLIALgHIAAAAIgGADIgMAKQgIAHgHALQAIgOANgKIAMgIIAJgFIAHgDIAggeQANgKAOgGQAQgHAPgCQATgCANACIA3AHIAJgBIAegNQAbgKAdgBQAXgCAZACIAYADIABAAIAAgCIAAgDIgGz4QAAAAAAgBQAAAAAAAAQAAAAgBAAQAAgBAAAAIAAAAIuNnGIh6g8Ij1h3QhFghgvgaQg4gfgdgPIjnh0IrBlXIABgEQhjgtgygZQBcAiDtBiQB+AykiiOIBRAkIAAAAQCHA7B1AvIjZhlQAaAIgIgHIBPAjIAZAIIE1CJQCdBGgggTQgbgPhjguIjUhhIgfgRQBxA1gSgOQgLgJABAAQADgBAnATID3BzQCVBGBiAvIOwHNIJgEwQAWALAMAKIACAnIADVYIgFA4QABAGgFABIgKAAQgJABgJgCIASABIAMgCIAAgDIADguIgEAsIAAADIgBAAIgMACQgFAAgJgBIgOgCIgegEIghgGIgegDQgcgDgSADQgHABgNAEIgKAEQgHAEgIACQgcAMghgEIgugGQgLgDgIAGIgWAUIgFAGIgEAFQgJAHgLAEIgFABIgBAEIADAFIABAAIADADIAJAIQAIAJACANIABALIAAAVIgCAfQgCASgLAKIgGAHIgCAIQgDAOgKAJIgPAKQgTALgRARIgFAHIAAACQABAKgDAJQgEAJgKAHIgLAFIAGAaQAEATgBANQAAAFgCADIgGAGIgOAJQgOAHgTAFIgkAIIgNAEIgHADIAFAGQAGAIABAKIABANIgBAKQAAAFABAFIACAFQABADgBACIgCAFIgBAFQAAAFAEAEQADAFAGAAIAKAAIAFADIAKAJQAKAOADANIAAAGIgBAHIgDAIIgBADIgFAIQgFAJgGAGQgFAEgLAHIgQAKIgQALIgJAEIgHACIgBAAIgBAAIgFADIglAYQgKAGgJAIIgRATIgMAOIABABQAFAJABALIAAAHIgBACIAAABIABADIACADIACACIAFAEQAJAGAIALQAHALADAOIACAMIgBAKIABAEIABACIALAMQAFAGAEAJQAFAMgEANQgCAIgFAIIgHAJIgkAtQgKAMgFAFQgMAJgLADIgHACIgDABIgCAAIgBAAIgCABIgGADIgWATIgEAGIgFAKIgDAFIgPAfQgFAPAAAKIACAJIAHAMIAEAFIAEABIAKgBIAQgEIALgDIABgCQABgDACgBIAEgCIAGgCIAagJQAFgCADgDIADgGQADgDAIADIAMAFIAWAMQAPAIAIADQAaAKATAMQAGADADAEQAEAEAAAHQABAKgBALQgBAMgEAKQgBAFgDAGIgFAJIgDAGIgBAEIAAABIAAAAIgBAAQAHAKADALIAJAlIAIARQAHAQACAKIACANIABAAIARABIAHACIAGACIAHAFQAJAGAEAKQAEAJAAAFIAAAIIgCAOIgZBmQgCAGACAGQABAIALAMQAJAJAKAGIASAIQAOAHAKANIAQgBQAKgBAKACQANADAIAGIAFAFIACACIAAABIACADIAFANIABABIAAABIgBACIgCACIAAAAIAAABIABABIAPAgQADAGACAHQADANgBAPIgDAPIgNAmIgMAeQgHARgHAMQgIAPgIAJQgKAKgSABQgOABgQgDIgNgFIgYgGIgEgCIgRgEIgngDIgFgCIgJgBIhNAfIgBABIgBABIgHALQgKAPgRAFQgPAFgPgDIgJgBIgDAGQgEAKgJAHQgIAHgNADIgMACIgCAAIgBAAIAAABIgDADQgFAFgFADQgKAHgPADIgMABIgDAAIgBANIAAABQALANADANQAGATgIASQgDAGgFAIIgCACIAAAAIAAAAIgBAGQgCAIgDAHQgDAGgRATQgQAQgOAHQgPAIgVABIgJABIgCADIgBAAIAAAAIAAABIAAABQgIAdgfAjQgQARgOAEQgNAEgXgDIgDAAIgCACQgDAEAAACQAAADgFADQgKAIgBACIAAABIAAABIgBAAIAAAAIAAAAQgEANgFAHQgGAKgLAIQgIAFgHADIgBAAIgBABIgFAGIgCACIgBAFIgHATQgEAJgQAXQgGAKgGAFIgRANIgDACIgBABIgBAAIgGAIQgJALgIAHQgIAGgJADIgDACIgBAAIgLACIgDABIAAgCIAAAAIgBgBIglAdIgLAKQgGAGgMgBIgKgBIgEAKIgKASQgJANgKAIQgLAIgLAEIgRAGIgkAJQgPABgOgEIgNgFIgDAAIgLABIgQAAIgQABQgGACgHAFQgYARgbAFQgPADgPAAIgOAAIgMADIgSAFQgRAFgNABQgPABgPgEQgRAFgUgDQgKgCgSADIgUACQgRACgMgBIgRgDIgHgCIADAAIADABIAMACQAMACATgBIAVgDQASgDALABIAFABIAKABQALAAAKgDIAAAAIgFgCIgBAAIgNABIgKAAIgNgCQgKAAgZADQgSADgKgBIgQgCIgGgBIgBAAIgCgBIgCAAIACgBIACAAIAAAAIABAAIgBgBIAFABQAHACAIAAQALABAQgCIAjgEIAHAAIAHABQANACALgCIADgGIABAAIADABIAEACIADgBIAFgCIACgCIgDgGIgHgCIgCABIgCABIgBAAQgMAEgPgCIgIgBIgHAAIgQABIgkAEQgLABgMgDIgKgDIgBAAIgBAAIgBAAIg4AIQgJACgKAHIgFAEIAAAAIgFAEIAMAGIAFgDIAAAAIABgBQALgIAKAAIAqgGIABAAIAAgBIADABIgDAAIgBABIABABIABAAIACABIgvAFQgHABgEADIgIAEIAAAAIgFAEIAEACIAYARIAUASIAPARQAFAEAAAHQAAAEgCAGIgJATIgGATIgFADIgBABIgCADQgIAYgVAWIgOAPIglA0QgTAYgWAMQgMAGgOAFIgJADIAAAFIgEAOIgIAXQgFANgLAGIgLAFIgKADIi5AUQgRABgLACQgJACgHAEIgCABIgFADIgLAFQgJADgLABIgZgBIgxgEIgLABIgCAAQgDgBgDADIgFADIgIADIgJACIAAAAIgIAJQgHAHgIAEQgNAFgMAAIgLgBIglAPQgFALgJAHIgMAJIgJADIAAAAIgBABQgJALgPAMQgIAGgGACQgHACgHgBIgIAAIACgCIACgBIgBgCIgBABIgDACIgBACIACAAQgPAJgTADIgLACIgEAIQgHAKgLAHQgHAFgKADIgLADIgBAAIAAAAIAAAAIgKADQgNACgOgEQgNgDgJgIQgMgKgIgQIgCgEIgDgCIgEgBIgLgFIgNgJQgJgIgEgHQgGgJgDgLIgBgBIgGAOQgKAPgPAIQgGAEgHACIgHACIgDABIgHACIgMAFIgIAFQgEADgIADQgPAFgNgBIAAAAIgEABQgPAFgKACIgCABQgHALgLAIQgKAIgSAIQgsAQgWADIgQABQgJAAgJgCgEgRcAtlIgBgCQgJgJgHgEQgIgFgMgBQgbACgNgCQgNgCgGgFQgCgBAAgDIABgFIAGgIQALgMAGgbQADgJAAgKIAAgKQAAgEgCgBQgCgCgCgBIgKgCQgMgDgGgKIgSgfQgVgmgEgdIgCgKIgEgKIgLgUQgPgcgHgPQgKgYgGgWIgMgsIgGgRQgEgJgHgGQgNgNgUAAIgTgBQgHAAgGgCIgGgEQgDgCgCgFIgBgEIAAgBIgBgCQgBgEgFgCIgDgBIgCAAIgGgCQgFgDgEgHIgCgFIgCgCIAAABIAAgBIgBgCIAAgBIgCAAIgBAAQgPABgKgBQgOgCgLgHIgLgIIgJgJIgcgYQgRgSgIgGIgNgIIgJgFQgIgEgEgIIgCgEIgCgGIgCgFQgEgGgGgFIgNgMQgKgJgFgJQgEgIAAgHQgBgIADgHIAAgCIgBAAIgBgBIgVgWQgFgEgEAAQgGgCgFgEIgYgbIgMgKQgWgPgRgWIgPgVQgJgRAAgOQAAgKADgJIAIgPIASgTQATgTAIgOIAPgkQAEgJAJgEQAEgCAOgCQAQgDAXgBIAjgCQARAAARACQAOAAAVAFQAXAGAoAMQASADAGgBQADAAAEgDIAIgGIAGgDIABgBIABAAIABgBIAQgGQALgEALAAQAMgBANAGIABAAIgCgCIAAAAIACADIABAAIAGAEIAFgDIAEgFIgDgCIgGgDIgJAFIAAABIgLgOIAAAAIgBAAQgJgCgKACQgKABgNAFIgIADIgEABIgDACIgIAEIgIAHIgEABQgHABgPgFQgogMgXgFIglgFIgigBIglACQgcACgNADQgPADgEADQgKAGgDAIIgQAmQgIANgSASQgPAPgFAGQgOATACAWQABASALARIAQAXQATAXAVAOIALAJIAQATIAKAKQAEAEAIACIADAAIABABQAEACAJALIAKADIgBAFIACACIgEAEIAAACQgBAPAJANQAEAGAJAJIALAJQAKAJADAFIABADIABABIAAABIAAAAIABACQAFAQAPAJIALAEIAIAGIAZAXIAbAYQASAQAEACQANAIAOABIAPABIABAAIADgCIAEgDIABABIABAEIADAAIADAAIAAgBIAAgDIgBAMIAAAAIACADQADAEAGADIAJADIAEABIAAABIAAAAIAAACIACAGQADAHAFADQAEAEADAAQAIADAHAAIASABQASABAMALQAHAHADAGIAGAPIAGATIAGAYQAHAZAKAWQAIAUAOAYIALATIAEAJIABAKQADAXAMAYQAHAPAQAbIAGAKQAFAIAHAEQAHAEAIABIADABIABAAIACAAIABADIAAAUIgDANQgEAPgEAKQgDAGgKAMIgBAGIADAFQADADAIACQAKACAOAAIAMAAIANgBQAOAAALAJIAKAIIADADgEACOAlRIAFADIAAAAIABABIAYAQQAKAHAKAKIAPAOQAEADgBAGQAAAFgCAEIgIAMIgFARQAAACgEAFQgEAFAAACQgDAIgGAMQgIAOADgCQALgHAMgVIACgIIADgBIADgDQADgGACgHQADgLAFgJIAEgIQACgGgDgGIgGgIIgHgHQgUgWgUgMIgKgGIAAgBIgEgCgEgWmAlNIAEACIAJAGIAEAFIAAgCIgDgEQgEgEgFgCIgFgCIgEgBIgbAAQgLgCgFgEIgNgMIgbgYIgdgaQgLgIgIgEIgDABIAAAAIgBABIADABQAKAFAJAGQALAJARARIAcAYIANALQAGAEALACIASAAgEACBAlKIAAAAIAGADIAGADIAFgEIAFgEIgGgDIgGgDgEABnAlMIAAAAIAAAAgEAB7AlIIABABIAAgBIAAAAIAAAAgEAFuAk6QAJACAKAAQAQAAAPgEIAhgKIAJAAIAEAAQAPABAQgDQAagGAZgQQAJgGAFgBQAGgCAJAAIAPAAIAMgBIgCgBIgJABIgPgBIgRACQgIACgGAFQgZARgdAFIgeACIgNAAIgPAEIgXAHQgUAEgPgDIgEAAIABgBIAEgCIgCAAIABgBIAAAAIgBgDIgBAAIgEADIAFABIgBAAIgGACIAEABIgFACIAAAAIACAAgEAFjAk3IACABIADABIAFgCIgFgBIAAAAIgFABgEAF3Ak1IAPAAQAPgBANgEIAggJIAOAAQAOAAAOgDQAXgEAZgQQAJgHAHgBQAIgCAKAAIARAAIABgCIgBACIABAAIAAgBIAFgGIABABIAHAEIABAAIAEgBIABAAIABAFIABAAIAGACQAMADAOgBQAJAAALgDIAfgKQALgFAJgHQAIgGAIgMIAJgQIADgIIABgBIgBAAIgEgBIAAgCIAAgBIAAgHIABAAIAEACIADAAIABgBIgBgBIAAAAIABABIABgDIAAgBIABgCIAAgBIAAAAIgBAAIAKADIAAABIgCAGIAFABQAMABAFgGIAFgGIAFgFIAogcIgBgGIgCgCIgNAGQgSAIgLANQgEADgEAIQgGAFgKgCIgQgDIgBAAIAAAAIgCAAIgBABIAAACIgBAAIAAgBIAAABIgCAHQgKAWgFAJQgHAJgJAHQgGAFgMAEIgeAJIgSADQgMABgLgFQgEAAgFgEIAAAAIgBgBIgBAAIgCAAIgFABIAAAAIgOABIgOAAQgLAAgJACQgJACgJAHQgXAPgXAFQgNACgNgBIgQABIgiAJQgPAEgKAAQgLABgJgDgEAFeAk1IAEgBIAAgBIgDAAIAAgBgEgY0Aj9IAAAAIAAAAgEgaMAh8IAKAHIAPAPIANAMQAGAJABAHQACAJgCAIIgBACIAAABIAAABIAAABQABACAHAGIAOAMQAKAKAEAHIAGALIACAGIAAABIABAAIACABIABAAIAAAAIgDgKQgCgEgEgHQgHgKgIgHIgOgMIgHgHIAAAAIAAAAIgBAAIABAAIAAgBIABAAIAAgDQADgLgCgIQgCgKgHgHIgNgMQgJgLgGgEQgFgEgGgDIgHgDIAAAAIgBABIgBgBIAAAAIgDgBIgBAAIABgDIgQgTQgHgHgLgIQgQgLgPgSQgHgJgFgJQgFgIAAgFQAAgFAFgGIAGgHIAIgJQAXgXAKgRQAEgHAFgUQADgHAIgCIAOgCIA/gDQATAAAOACQAOACASAFIAhAKQAaAHAKABQAQABANgFQAIgDAHgGIAFgFIgBgBIgBAAIAAAAIAAAAIAAAAIgBABIgHAGQgOAJgQAAQgNAAgPgFIgYgGQgegJgRgEIgWgDIhYACIgKABQgFAAgEADQgFADgCAFIgCAJQgDALgFAHQgIAQgYAZQgUATABALQAAAKASAXQAPASARALQAIAGAJAJIANAQIAFAFIAAAAIABACIAAAAIABAAIAAABIAAAAIABAAgEAGRAj4QAPgGAPgDIASgDIAJAAIAIAAQAUAAAWgOQAPgMAPgEQAPgEAUAAQASAAADgBIABAAIADgBIAHgBQAKgBAJAEIAJAEIABABIABABQADABAKgDQAPgEAIgDIAHgDQACgBABgDQADgDAHgRIADgKIAGgMIAGgHIALgIQAHgFAKgCIAJAAIACAAIACAAIAJADQAGACADgFIAEgJQAFgJAMAAIAJgBIAEgDQAAAAABAAQAAAAAAAAQAAgBAAAAQABAAAAgBIABgBQAGgGAFgDIAHgCIACgBIAAAAIABAAIAAAAIADgEIALgNQAIgKAIgDIAIgGIAGgIQAIgKACgGQAEgIAAgKIACgIIgGABIgBAIQAAAHgEAIIgJAPQgDAFgDACIgRANQgGAFgDAEIgKAMIgBACIgBAAIAAAAIgDAAIgHAEIgIAGIgDADIgBABQgCAEgFABIgJABQgLABgDAJIgBAEIgDAEQgDADgFgCIgJgCIgIAAIgKABQgIACgIAGQgGAEgEAFQgFAFgEAGIgEAJIgBADIAAABIgIAVIgEAGQgCADgaAHIgKACIgDAAIgFgDIgHgDQgHgCgHAAIgLABIgEABIAAAAIgMABQgVAAgOADQgVADgTAPQgLAHgLAEIgLACIgMABIgEAAQgaAAgfANgEALlAi0IAAAAIAAAAgEAM/AigIAAAAIAAgCgEAN4Ah5IgEAEQgKANgIAHQgHAGgHADIAAAAQAJgEAHgGQAIgIAJgLIADgEIAAAAIAAAAgEANGAiXIAGgBIADgEIACgCIAAgBIAAAAIABAAIAAAAIADACIAIgFQAIgHAHgJIAHgIIABgCIAFgDQAKgGAFgFQAFgFAHgKIASgbQADgHADgIIAAgBIgGACIgFABIgBAAIAAABIgCAGIgRAbQgHAKgFAEIgOALIgIAFIgIAKQgHAKgIAFIgLAGIgDABIAAAAIgDADIgCABQAAABAAAAQAAAAgBAAQAAAAgBgBQgBAAgBgBIABAGIACgDgEAOsAgVIgBABIgEADIgCAAIgCAMIADgBIAEgCIAEgCIAAAAIABgEIAAAAIgCgHIABACIABgBIAAAAIACAAIABAAIAAAAIACgBIAFgBIAEgHIABgFIAAgBIgLAEQgBAEgCABIgDAEIAAABIAAAAIgBAAIgBAAIABAAgEAO8AgbIgFABIAAABIAGgBIAAgBIgBAAgAPYfmIgBAEIgFALIgHAJIgBABIAAABIgCAAIAAABIgCANIAAABIAEgDQAMgIAGgNIAFgOIgJgDgAOlf/IAAAAIAAgBgAOAfpQgDAFgBAGQADgEAFgDQACgFAFgEIgLAFgAPpfrIAAgBIAAAAgAP5e/IgGAHQgEAEgBAFQgBAFgGADQgMAJgCAFIgBABIAAAAIABAAIAIADIABAAIAAgBQABgDAEgDIAMgKIADgHIAFgGIAAgDIgBAAIABAAIAAAAIABAAIABABIAEgEIAAAAIACAEIAAAAIABAAQATADALgCQALgDAOgOQAKgKAKgOQAKgMAGgOIAFgPIAAAAIAAgBIAAAAIAAABIADABIgBgBIgBgBIgBAAIAAAAIACgDIAAgFIAFAAIAFgEIABgBIgDgEIAIAJIAFgBQAPgBAPgIQAMgFAPgQQAQgQAEgMIADgKIgIgJIgBABIgBAJQgBAFgEAGQgFAJgKAKQgNAOgNAGQgPAHgRABIgGAAIgCAAIgEAAIgJAKIgCADIgCADQgGAZgcAgIgLALQgIAGgHABQgIACgYgDIAAAAIgEgBIgBAAgAOZfcIAHgDIABAAIADAAIABAAIABgEIAAAAQAEgMARgPQALgIADgEIACgEIgBgBIAAgBIACgDIAFgHIANgMIAHgFIABgBIABgBIAJgCIAGgBIARADQAGAAAJgKQAPgTADgMIAEgJIAGgKIANgOIAEgFIAHgFIAMgGIAJgCIAHAAQAJAAAJgDQAHgDAHgIIAEgFIgMAMIgFgFIAAAAIgFADQgGADgKAAIgGAAQgHABgFACQgGACgIAFIgLAKIgNAPIgHAMIgDAIQgDALgOARQgIAJgFAAQgLgDgFAAIgDAAIgMAEIgDABIgJAHQgIAGgGAIIgFAHIAAABIABACIAAABIgBABIgEAEIgOAMIgMANIgFAIIACAGIgBAAIgEABIgBAFIgCgBIgBAAIgDAAIAAAEgAQHfSQAMABALgBQAMgBALgIQAGgFAIgJQgIAJgIAFQgKAIgNABQgJABgPgCIgDAAgAP/fSIAAAAIABgBIgBAAIAAABgAzve2IAQAGIAAgBIgFgDIgKgEQgRgFgVgDQAUAEARAGgAyWezIABgBIAAAAIASgGQAFgCACgCQAFgEgBgHQgCgHgIgFIgMgGIgEgCIgGgDIgGACIAKAEIAEADIABgBIACAAIAAAAIAAACIACABIAKAFIAEAFQACAFgDAEIgGAEIgFACIgJADIAAAAIgJADIgGABIAEACIAHgBgA1OerIgBABIgDACQgEADgDAAIgHACIAFgBQAGgBAHgFQADgCAEAAIAFACIAKAFQAGACAEgBIAGgCIACgCIABgBIADgCQABgBAHABQgHgBgBAAIgDABIgEADQgEADgFAAQgFAAgIgEIgGgDIgEgBQgDAAgCACgA1peyQgFgCgEgDIgDgBIgCgCQgEgCgEAAQgHgBgNAFIgLAEIAAAAIABACIADgCQARgHAHgBQAFAAAFACIAEADQAEADAHACIAAAAgAyJehIgCACIABgBIABgBIgBABIACgCIABgBIABAAIgCABIgBABgAyGeeIgEgFIABAAIgBAAIABABIAAABIAAgCIAAABIACADIgCgCIACACIAAAAIAAABIABAAgAzKeaIACACIAPgEIgLgHIgDgBIgEABQgFABgIgCIAOAKgA1heVIAAACIAAAAIAAgCgA0/eIIgCABQAFABAGADIADABIAIgDIAAAAIAHgBIAOAAIAIACIAAgBIgLgNQgFAAgGAAIgBACIgBABIAAABIgDAFIAAgBIgKgFIgMAHgA1Qd+IgMAPIAAAAIAGgCQAHgDAJABIgKgLIAAAAIAAAAIAAAAgA1wYdQADAMAFAIQAGAKABAKQACALgEALQgFAJADALQACAIAHALIALATQAHALACAJQACALgDALQgDAOADAGQADAGAOAFQAKAFAHAJQAGAHAFALIAIATQAJAUAQALQAdAXAQAaIAFAIIABgBIAEAAIgGgJQgRgcgegWQgQgMgHgRIgIgTQgFgLgGgIQgJgKgIgEIgKgEQgEgCgCgCQgEgGACgJIACgLIAAgLQgBgRgQgVIgKgRQgFgLAAgGIACgIQADgGAAgEQADgKgDgMQgCgGgHgMQgEgIgCgKQgGggAAgsQAAgYAGgLQAGgIAAgLQAAgIACgJQAFgQAOgQIAFgHQADgEAAgEQgBgDgEgEIgHgGQgEgFgEgLIgEgRQgCgTADgOIADgKIADgIQABgFgEgDQgKgHgEgFQgGgHACgLQAAgGAFgLQAFgLgEgHQgBgDgEgDIgCgDIACgHQACgEgDgEIgGgHIgCgEIgCgBIAAAAIgBgBIgJACQgJACgJgGQgIgEgGgJQgFgIAAgKIABg4IAAgTQgCgJgGgGQgDgEgDgCQgGgEgBgFIAAgKIAAgJQgBgUgHgPQgDgFgEAAIgKgCQgEAAgEgEQgDgEgBgEIgBAAIAAgBIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIgMAEIAAAAIAAACIAEAHIACADIACAAIAHgDIAAAAIgBgBIABABIAAABIABABIgBgCIABACIgCgEIADAGIAAABIACAEIAAACIAAAAIAIABQAEACADAKIAEAPIAAANIADAGIgBAAIABAEIgCABIABACQADAJAIAFQAJAHABAOIAABGIACAKQAHAWAWAGIAHABIAPgHIgCACIADgCIgBACIgCADIACACIAFAHQACADgCAFIgBAFQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIADADIABABQAAABABABQAAAAAAABQABAAAAABQAAAAAAAAIABACIgBAFIgHAUQgCANAFAIQACAEANAKIAEAEIABAAIgBAAIgCAIQgIASADAdQACAMAFALQADAHADACIAIAIQADADAAACQAAAEgCACIgHAJQgHAIgGAMQgFALgBAOQAAAIgBAEIgFALIgCAGQgCAIAAAHIABAqQABAUACAOQADANgCgTIADAVgA2OWUIgCAEIgBAAQgGAMgEAQQgBAKAAAWIADA5IACAPIAEARQACAIAFAJIAEAKIABAEIAAAAIgBADIgDAHQgEAQAEAPQABAIAGANIAVAiQACAEAAAEIAAACIgBADQgDAOABANQACALAFAIQAGAKAHAFQAEAEAJAEIAGADIABAAIAEAEQADAEAFAMIAHAPQAEAJAFAHQAKAOAPAMIAPANIASAEIgLgMIgQgNQgUgQgKgVIgPghIgHgHIgDgCIgFgBIgIgFQgKgFgGgLQgFgKAAgMQAAgHACgJIABgGQABgIgIgMIgFgHIgQggQgDgKAAgHQgBgJAEgLIACgEIAAgBIAAgCIABgDQAAgDgCgFIgBgDIgDgFIgFgLQgEgJgCgPIgCgVQgCgTAAgXIAAgVQABgPAEgMQACgGAFgIIAAAAIAAAAIAAAAIAAgBIAAAAIAAAAIAAAAIAAgBIAAgDIACgOIAEgOIAEgJQADgFAFgHIAFgFQACgDABgDQAAgDgEgDIgFgFIgDgGIgDgIQgEgNAAgMQgCgUAFgSIAAAAIACgHIgKgLIgBADIgEAMIAGAGIAAAAIgJAEQgEAaAHAeQADAJACAFIAIAIQACABgBAEIgNARIgEALQgEAMgBAPIAEADIgCgCgATCcgIABAAIAAABIAGAGIADgCIABAAIgBgBIAHgJQAFgJACgKQABgKgDgLQgDgJgGgIIgFgGIAAAAIAAgFIABgMIgDgEIAAAAIABAAIACgCIABAAIAAAAIABgLIAHAAIAAABIgBAJQAIAAAIgCQAQgEANgNIACgCIACgBQADgCAEAAQALAAAMgHQAGgEAFgGIAGgLIAAgBIgBAAIgBgIIABAAIABAAIADAAIABAAQAAABAAAAIAAgBIAAAAIAAAAIABgBIAAgCIAAAAIAHADIgBABIAAABQAIACAIAAQAMAAALgFQAKgFAHgJIAHgMIAAgBIABgBIAAAAIABgBIABgCIAAgBIADABIAAAAIABAAQAUgKAwgTIAKgDIAHAAIANADIAeABIAFABIABAAIADABIAMACQACAAAEADIAMADIAVAHIAXADQANAAAIgEQAIgDAIgLQAIgNAMgcIAWg8QADgLABgMQACgWgOgTIgJgUIAAgCIAAgBIAAgBIACgCIgCgFIgEgKIgBgCIgBgBIgBgBIgDgDQgFgEgHgDQgGgBgKAAIgKAAIgHABIgGAEIgBAAIgCABIAAgBIgBgCIgBAAIgDgFIgJgJQgIgIgLgEIgMgEIgJgGQgIgGgJgIQgKgMgDgFQgEgJABgLIAFgSIAOhGIAEgbIABgEIAAgEQAAgIgGgGQgDgDgDgBIgFgCIgGgBIgLABIgBAEIACAAIAHABQAHACADACIAFADIACAFIABAIIgTBjIgFASQgBAKADAJQACAIAIAKIAPAPQALAIAHAEIARAHIAIAEQAHAFAHAIIAFAHIAAABIADAAIAegEQAGAAAFACQAFABAEACIAGAGIAEAIIABAGIAAADIgBACIAAABIACAGIADAIQACAGAHAKQAEAHACAKQABAKgCAJIgEASIgMAhIgPAlIgIARQgFAJgGAGQgHAGgLAAQgJABgLgCIgKgCIgIgEIgUgGQgHgCgEAAIgQgEIgagBIgMgCIgIgCQgJgCgOAHQgvASgVAKIgGADIgCABIAAABIAAAAIgBABIgBADQgDAHgGAGQgHAIgKADQgIACgKgBQgHAAgGgDIgCAAIAAAAIAAAAIAAgCIAAABIAAABIgEgBIgFAAIgBABIAAgBIAAABIABAEIgCgEIgBADIgDAJQgDALgKAHQgJAGgLAAIgGABQgEABgEADIgDADIgFAFQgJAGgGACQgHADgJAAIgIAAIAAAAIgCAAIgHA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");
	this.shape_7.setTransform(429.6,311.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#202020").s().p("ABmCdQgPgIgFgPIgEgIQgCgFgKgJIgLgKQgHgGgFgIQgKgMABgQIABgJIgHgIQgKgLgEgCIgBgBIgBAAIgCgBQgGgBgFgEIgagcIgLgKQgVgOgTgXQgJgLgGgLQgLgSgBgRQgBgMAEgKQADgJAGgIIAIgKIgJAMQgGAKgDAJQgDALACALQACAPALASIAPAWQASAVAUANQAGAEAGAGIAUAWQAIAIAEABIAHACIAAAAIAIAFIAPAQIABgBQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAABABIABAAIgBADIABABIABAAIgCACIgBAAIAAAAIgBAJQAAAHAEALQADAGAFAGQAKAMAPANQAEAFACAEIADAKIAFAJQAGAIAKAFIACABgAApAzgAApAzIAAAAg");
	this.shape_8.setTransform(258.6,529.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#202020").s().p("AkXE/IBTh4QAVgfATgZQAZggAfgjIAfggIAdgdQAdgcBPhVIDjjtIAAACIipC2QhjBuhFBFIhJBMQgdAigkAxIhXB2IgMAQIgPAPg");
	this.shape_9.setTransform(270.2,276.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#202020").s().p("AlNB2IAAgCIACgHQADgNAJgMQAFgJAIgGIAAAAQALgJAPgFIAKgDIAXgDIACgBIAAAAIAAAAQAIgHAJgFQAHgDAEAAIADgBIADABQADACACgCIAIgJIAKgIIAFgCIAGgJQAKgLARgKQAMgGAKgEIAKgDIAVgKIAPgHQAJgDAKAAIAEgCQAJgFANgEIAGgCQADgBABgDIALgHQAMgGAGgDQAIgCAPgBIAJAAIBDAFIABAAIAMgFQAQgHATgDIA2gGIB7gJIAEgBQADgBABgFQgBAFgCABIgFABIhyALQgcACgVADQgPABgTAFIgTAIIgCABIAAAEIgDAAIgDgBIgBABIgEACIgCABIAPAaIABABIgSgdIAAAAIACgBIACgBIg+gGIgKAAQgNAAgIADIgSAJIgMAHIgCAEIgFABIgVAIIgCABIAGABQAKABAHADIAHAEIADABIABABIAAAAIgCACIAAAAIgBgBQgGgDgIgDQgMgDgLAAIgKAHIgFAEIgEAGIgGAIIgBABIgCgBIAAgBIAAAAIAFgHIAIgKIAHgGIgCAAQgHACgNAFIgcAMIgFADQgKADgLAFQgPAHgMAMIgFAHIgDAEQgHAKgDALIgBABIgCgBIAGgPIACgEIgKAIIgIAJQgDADgDgCIgDgCIAAAAIgCABQgNACgIAHIgHAFIgBABIgBgBIAAAAIAAACIgBABIgeAEQgQAFgNAKIAAAAIgLAKQgJAMgEANIgCAKIgBACIAAABgAiTAzIAAAAIAAAAIADANIgDgNg");
	this.shape_10.setTransform(390.6,585.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#202020").s().p("AjsCRIABgBIAAgBIAAABIgBABgAjtCPIgBgCIABABIABADIgBgCgAkdByIAAAAIAAAAIABgBIALgPIAIgIIAKgGIADgBIgLAHIgFAFIgJAJIgFAHIgCAEIgBgBgAjxBNIASgGQAAAAABAAQAAAAABgBQAAAAABAAQAAgBAAAAIAGgGIAYgMQAMgEAQAAIAQAAIA6AFIAAAAIADgBQAPgIAVgGQAPgDAogDIB7gLIADAAIAEgCQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBIABgGIACgDIAEgHIALgPQANgNAPgJQANgHAOgEIAHgCIAFgDIAFgEIAggtIAJgLIAEgDIADgGIADgEQADgDABgCIgFgDQgGgGgEgCQAFABAEAEIAEACIAFACQABACgDADQgDABAAADQgBAEgFAFIgpA5IgGAGIgFAEIgFADIgNADQgMAEgMAHQgOAKgJALIgKAMIgGALIAAACIgBADIgBAGQgBACgEAAIiEAKQgfABgYAHQgQADgPAHIADAAIABAAIAAADIgBAAIgGgBIgLAHIAGAKIgIgMIABgBIAHgEIg3gFIgQAAQgQAAgLADIgYAMIgGAFQgDAEgDgBIgOAGIgNAFIgDAAIAOgGg");
	this.shape_11.setTransform(409.4,571.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#202020").s().p("AAyEnIgHgHQgDgDgGAAIgTABIgKgBIgFgBQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAIAGgIQADgDABgGIADgJIAAgDIABgcQAAgPgIgOQgEgJgIgGQgIgGgGgCIgCgBIAAABIgFADIAAgBIgCgEIgBgBIgDgBIgCAAIgBACIACgHIAAgBQgMgVgGgOIgGgPIgDgQIgDgRQgBgHgFgJIgNgYQgKgUgJgTQgIgUgFgSIgFgXIgEgPIgFgQQgGgRgFgKQgIgNgLgKQgWgUgfgEIgMgBQAEAHACAIIADAMIAAABIgDAAIAAgCIgCgIQgCgKgGgJIgMAAIgDgBIAAgCIABgBIABABIALAAIgEgEQgIgIgJgGIAEAKIABAAIgGADIADgCIAAAAIgCgFIgEgHIgBgBIgBAAIgOgFIgBAAIAAgCIABAAIAEABIAJADIgHgKIgGgFIgIgFIgLgEIgDAAIgDAAIgCgBIgHAAQgHABgGgBQgHgBgFgDIgKgJIgagXIgNgNQgIgIgIgGQgJgHgKgGIgBAAIAAAAIAAgCIABABIASAMQANAKARARIAbAYIAKAIQAGAEAFAAIANAAIAEAAIACAAIAFAAIALADIAEACIAJAFIAGAFIAKAOQAMAFAIAIIAIAJIAOABQAeACAZAVQALAKAIAOQAHAMAGAQIAJAgIAFAWQAFASAIAUQAIAQALAWIAOAYQAFALABAGIADASIABAFIAJAbIATAkIAEABQAMAEAIAHQAKAIAGAMQAGAMABAJIgBAjIgBAGIgDALIgIAJQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABIACACIAFACQAGABAGgBIAMgCQAFAAAFAFQAGALAOgDIAUgGIAJgDQAFgDACgFIAEgHQADgGAGgGQAMgOAQgGIAPgEIAGgBIAEAAIABAAIACAAIAVgGIATgDIACAAIAIgFQALgHAOgEQAFgWAFgIIAFgFIAEgBQADgBAJgGQAAAAAAAAQAAAAAAAAQABAAABAAQAAAAABABQABAAABABQABAAABAAQAAAAAAAAQAAAAAAAAIAJgKIAMgMIAKgHIADgCIABABIABABIAFAGIABgJIAAgCIABAAIACgBIAEgBIAQgDIAQgBIAPAJQALAHAIAMIADAHIABACIABAEIABADIABAHQACADADACIAFABIAAABIADACIADADQAHAIAEAKIADAJIgBAAIgDgJQgDgJgHgIIgGgGIgBAAIgFgCQgDgBgCgEQgBgDAAgDIgBgEIgBgDIgEgJQgIgMgLgHIgOgJIgPABIgQADIgEABIgCABIgBACIgBAIIAAABIgCgBIgFgGIgBAAIgFADIgGAFIgWAXIgFgCIgBgBIAAAAIgBABIgCABIgIAFIgEABQgCABgDADQgFAHgFAWIAAAAIABAAIAKgDIACAAIAAgBIACAHIgBgEIAAAAIgBABIgCAAIgGACIgFABIgCAHIABABIAAABIAAABIgCgBIAAgBIgBgCIAAgFQgLAFgIAEIgHAEIAEAAIADAAIACAAIgBAEIgBAAIgDgBIgGAAIgEAAIgEADIgBAAIAAgBIgBgBIgKACIgXAGIgEABIgFAAIgOADQgQAEgMALIgKAMIgGALQgCAGgFADIgLAEIgWAHIgGABQgHAAgFgEgAELDiIAAAAIABABgADlDggADlDdIAAADgAm0kXIABAAIgBADg");
	this.shape_12.setTransform(314.3,569.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#202020").s().p("ABIHMIAAAAIACgBIAIgOQAHgKADgGQACgEgCgGIgEgJIgLgRIhoiMIgOgQIgHgGIgGgEQgJgFgDgEQgEgGAAgIIgChtQAAgUgCgVQgCgjgJgsIgPhPIgtjaQAAgGACgCQACgCAEgCIEbh9Ig5AeIjbBhQgIAFAAADQgBAEACAJIAtDXQgDgNgCgBIARBYQAJAxACAmIABAqIAAAoIACA2QAAAJADAFQADAEAJAFIANALQAJAJAUAbIBdCAIAGAKIAFANQAAAGgEAGIgHAKIgHAMIgCADIgDABgABHHMIAAAAIAAAAg");
	this.shape_13.setTransform(305.3,51.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#202020").s().p("AAUALIiOg7QgNgJAOAEIAiAKIDYBiQgtgRhAgbg");
	this.shape_14.setTransform(370.4,23.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#202020").s().p("AC9BSQjthfhcghIhEggIgGgEQgCAAgBAAQgBAAAAgBQgBAAAAAAQABAAABgBIgIgDIAMACIAEAAIACgBIAAAAIgPgHIAdAHIgOAAIA3AZIgNgLQgIgGAZAJICkBKQAZAIgEgIQgLgJgCgEQDYBmgOAAQgFAAgggMg");
	this.shape_15.setTransform(347.5,15.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#202020").s().p("AgkgOIAAgCIBJAhg");
	this.shape_16.setTransform(353.6,16.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#335C64").s().p("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gDgIAFQgIAFgEAQQgEAMgLABQgTABgKALQgMANgRgCQgKgBgMAIQgMAHAAAIQAAAKgEATQgBARALALQAPAQgPANQgGAGAAAGQAAAKgGAIIgNAPQgSATghgBQgIgBgEAEQgUATgCAKQgFARgRAWQgOASgHACQgHADgVgFQgJgDgFAGIgJAJQgGAGgBAGQAAAEgEADIgHAFIgLAJQgGAGgCAGQgDARgWAFQgLACABAIIgCADIgCABQgIABgCAFQgCADAAAJQgBAMgIANIgPAXQgEAFgIAFIgNAJIgPASQgJALgMABIgDAEQgFAHgLAAQgagBgHAWQgDANgPgFQgNgFgGACQgHACgHAJQgCACgBAEIgCAGQgMAbgIAIQgJAIgaAIQgQAEgHAAQgNAAgKgHQgGgEgJACQgFACgXAAQgfAAgSAMQgeAWgggCQgUgBggAKQgbAJgSgIQgHgDgGADQgJAFgPgCQgNgCgPABIgdAEQgXADgOgGQgGgCgEABIg4AGQgRADgVAPIgjAbIgDAEIgBAFQAEACAFAIQAFAHAEACQAOAEAUAPQAVARAKAFQAPAHgPAMQgLAKgCAGQgEAVgXAWQgLAKgNATIgWAfQgYAggiAJQgeAHgDAjQgBARgEAFQgFAFgQABIiPALIgvADQgcADgSAMQgJAFgVgCQg3gGgPAAQgLAAgFAHQgLAMgTADIgLADQgFADgDAFQgFAJgIgFQgGgDgFABIgKAEQgaAMgIACQgNAEgGAFQgKAGgDALQgCAEgEACQgQAEgRAWQgIALgKgGIgFgDQgDgBgCACQgKAJgOAEQgKADgRACQgJABgGAEQgGAFgBAIQgBAKgIAEIgQAEQgGADgGgEQgFgEgDgHQgJgWgZgIQgSgHABgRQABgNgKgCQgLgCgFgJQgDgFgCgNIAAgHQgBgEgDgCQgMABgMAPQgGAIgDACQgGAEgHgDQgIgDgCAJIAAAMQgBAYgVAFQgXAGgPAKQgLAGgDgBQgKgBgQAEQgRAGgIAAQgRABgHAOQgHAQgRAFIgcAJQgQAGgMABIgIAAQgTAAgJgNg");
	this.shape_17.setTransform(432.8,301.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(31.2,0.4,608,647.9);


(lib.Afghanistanai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Afghanistan.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#202020").s().p("AA5JdIpqAkItWlKIIUpeIAch1IhRj7IgVgGIAVAGIBTD7IgdB2IoSJcIFlCLIDZBTIDbBSIA7AWIJqgnIErBBIBOg0IEfhoIABABIGaATIDVhAIBGgWIhGAWIjUBEImFgPIgJgBIgKgBIgBAAIgBAAIkeBnIhPA2g");
	this.shape.setTransform(162.8,550.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#202020").s().p("ACngzIlOBng");
	this.shape_1.setTransform(321.2,589.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#202020").s().p("AmaD7IBJkGIBqgdIBkiaICIhqIBfBTIB9ANIC4hHIABAAIABAAIgBAAIi5BJIh+gMIhehSIiGBoIhlCaIhqAeIhJEDIAJAyg");
	this.shape_2.setTransform(385.5,516.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#202020").s().p("AhNAAIBFgQQAAAAAAAAQABABAAAAQAAAAAAAAQAAABgBAAIBDANIAxgkIgxAlIhAgMIgDgBIAAgBIgCAAIhCAPIgfAlg");
	this.shape_3.setTransform(546.9,372.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#202020").s().p("A2aXpIBRACIKMjKICNheIhPhYIA9irIghi0IA5jNIBdgaIBtinIBPg9IAMALIgMgMIhQA+IhtCmIheAZIg6DPIAhC0Ig+CsIBMBWIiHBbIqNDGImWgSIgEAAIGZAOIKLjJIB/hVIhKhTIA+ivIghizIA8jXIBfgZIBsilIBXhEIBHA+ICgARIEfhvIhAhEIgWARIACgYIAJgGIgIgIIACgYIAUAVIDkixIDJglIBjAOIBTB6ICNgRIC2jvIgnk3IBhiXIgRhJIApguIAEhGIBHhVIApgKIAGgCIADAAIACgBIACABIABAAIABABIBHAOIEQjGIhmjqIiWiSIABgcIgZAAIADgCIgDAAIAZgYIAAACIACgCIAAAYIFEAFIARgDIgRADIlEgDIAAAbICWCRIBqDuIkVDMIhJgOIgCgBQgBAAABAAIgDAAIgDABIgsAKIhCBRIgEBHIgnAtIARBIIhhCXIAqE4Ii8D5IibAUIhWh8IhagMIjCAlIjfCuIBSBWIk9B7IirgSIg/g3IhJA4IhvCoIhbAZIg4DIIAgC0Ig8CpIBQBaIiTBhIqODIgAV53UIAWAAIAAgWgACXCuIALAMIgBAOIgNAKg");
	this.shape_4.setTransform(413.2,464.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#202020").s().p("AG1D4Ip0AmIwLmSIBchmIhXBlIQIGJIJzgiIFOBKIBshJID2hYIADgBIAEABIA1ACIg5gBIgCABIj1BZIhtBKgAS0CeIgSgBIASABIAXABgAwXk/IhXBlg");
	this.shape_5.setTransform(123.8,598.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#202020").s().p("A94e9IhThIIgEAEIAFgEIBSBGICPAOIDrhcIhEhIIEVjZIDYgrIB6AQIBQB1IBjgNICfjWIgrk2IBeiVIgShNIAug0IADhGIBchvIAqgKIAogJIACABIAIACIAzAKIDbihIhSi5IifiaIAAhtIF3ACIEgg5IASiCIhyiaIBOgyIgBhIIDkjUIAkiSIgVhWIAggsIhEiEIgVh+IiaisID2k8IA+AUIAOgVIDRieICigxIAzgyIDagvIIMgeIAtAWIASgbIBkgsQAdgKAAAEQACACgXAOIhjAtIgOAWIAPAHIgVAGIAPAHIgcAIIAJgNIAEgCIgCgBIgCADIgVAFIAKgOIgogTIoHAfIjUAuIgyAyIijAxIjNCaIgJAPIALADIgRAHIgDAEIAPAFIgYAJIAJgOIgGgBIgRAGIAGgKIgvgPIjnEpICVCkIAVCBIBICKIgiAvIAVBSIgmCbIjhDTIABBKIhGAtIBsCQIgUCaIkxA9IligCIAABMICbCXIBbDOIjxCyIhDgNQAAgBAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIhGARIhTBjIgDBFIgsAyIARBLIhgCWIAnE1IioDeIhwAOIhQh4Ih0gQIjVAoIkQDTIBBBGIAHgDIgCAGIADgBIgBAFIgCgCIAAgCIgBABIABABIgBAFIgFgFIjuBbg");
	this.shape_6.setTransform(585.4,300.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#202020").s().p("EgieAv/Ip0AlIvtmGIJeq4IAPhAIg0iYIAAgCIgGgPIiIglICFAoIAmB4Igph2IgLgCIgCgBInsiJIgLmIIAgiBIgViOIgKhNQgIgtgHghIhFlXICojWIiqhYIAYmRICgh3IAEgCIAKgDIABAAIhLh1IDMhzIBLjJIAHiTICrlEIEqCwIBxgIIDQCAIAAABIAWgMIBZAYIDOhaIAthwIgkisIEEgjID7hbIA1ADIAIABIAyhpIBWAUIACAAIAFABIAFgFIACgCIBbhVIgEAGIAYAPIAgAAIAFgBIADgDIACgDIB8h9IAMhmIBojZIgGh6IDNh7IBtgPIgKABICwgZIAAgBIArixIGICPIGIgQICXB0IAEgCIBJgsIDbA9IAeBeIAAABIACAAIBGAyIABAAIACACIADgDIAZgOIABgBIgBAFIACgGIAAAAIAXg7IG9iwIB/BqIgUiAICWiSIDkgoIAOAOIA7AVIAAgBIAAAAIAJgMIABgBIg8h+IFWmgIACgBIDKhFIE2DvIgYB9ICTgQIhAGrQgSBfgGAtIgKBAIgCAJIgBADIABABIBlDLIAAABIAAABIACAFIANACIAFgDIC+iYIDXhhIADgFIAvhfIFwi9IAoACIAAAEIBrAHIBcAFIA6AEIAxABIgBACIgwgDIj5gFIgsgCIi7BpQhSAugTANQgZAQBAgfID+h+IAbACIgbgBIlVC5IgvBoIgSAKIASgJIAzhlIDAhlQghAWAPgFIhvA7Ig2AhIgyBnIjiBuQiZCBg2AvQhDgEAgAFIAlAFIDTiuIDlhtIAUglIgTAnIhkAxQgHAEACAAIAJgCQASgFgCACQgEADg5AbIhTAnIjVCwIhsgKIiVkfIBNoUIiaARIAnjPIjPifIhgAgIgNAFQgJADgCAGIkNFIIA7B7IhoCJIiHgvIAAgCQAAgBgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIgFABIiSAaIhSBRIAVCKIh2BmIiaiBIlPCFIgUA0IiBBKIilh1IgYhIIhwgfIhlA8Ii0iLIl1AOIh3gsIBfAgIkRhlIgiCEIlFAtIiEBPIAEBVIhqDhIgNB6Ii6C9IhLACQABgJgFAEIgJAJIhTBNIhBgPIgtBdIhugIIjvBZIiaAVIATBZIhKC6IkcB+IhWgYIgqAVIAAADIgCgCIhyA6IAHiAIh3hJIhwAIIjiiFIhnDEIgGCMIhiEAIiGBMIBSCBIAAAAIAAABIgBAAIgCABIhoAlIh8BdIgRESIDjB2IjdEYIA7ElQAIAhAHAtIAMBQIAYCnIgiCHIAJEjIB/AiIAmALIgmgKIiAgjIgJkjIAhiHIgijoIgThiIARBhIAhDpIgiCGIAIEoIBhAbIA9ASIiggrIgKkqIAiiHIgkj1IhLl2IDbkTIjfh1IASkaIB9heIADgCIAFgBIBegiIhSiAICKhQIBfj9IAEiMIBtjUIDtCFIBwgMQAYAMACAAQACgBgXgSIgDgBIhwAMIjyiIIhyDcIgECOIhdD4IiRBSIBRB/IheAiIiBBhIgSElIDaByIjWENIBMGJIAhDlIgiCGIAKE0IESBJQAqAKADgBQADgCgogPIg8gSIANAEIEFBMIBSD2IgcBzIkME3IhbBkIiyDIINZFNIAFABIBVgGIAkgDQAJgBgTAAIH9gdIEvBCIBQg2IEXhlIAEgBIACAAIARABIGIANIJqjBIARgKIgkgpIBJjOIghivIBTknIBxgfIBgiSICpiDIBuBgIACAAIBhAKIADAAIB1gtIgwg0IFikUID0gvIClAWIBGBoIACABIACADIAEgBIATgCIABAAIADgBIABgCIB7ijIAAgBIAAAAIABgBIAAgBIAAgCIgokwIBciQIAAgBIAAgBIABAGIgBgGIAAAAIgThSIA0g9IAEhEIB3iRIB2gcIADgBIALAEQAGADALACIAQADIAAAAIAAgBICXhuIACgCIABAAIAAgBIg3h+IipikIABjGICpADIioAAIAADCICqCjIAPAjIAqBcIABADIgDAEIibBzIgEAAIgBgBIgYgEIgQgGIgCAAIh0AcIh0CNIgDBEIAEgDIADhAIB0iKIBwgaIAPAFIAiAHICmh6IgIAHIieB1IgigGIgPgFIgCAAIhtAaIhxCJIgCBFIgzA6IATBSIAAABIABgBIgShRIAyg7IAEhEIBwiHIBGgQIhFASIhsCHIgCA8IABACIAAACIAAAGIgBACIgBACIABgBIACgDIABgBIgFAHIgBACIgqAyIATBJIABADIAAgCIABABIADAGQgBAGABABQABABAFgHIgBgHIAAgCIABABIgBgBIgOhFIAvg4IAEhFIBmh6IBfgXIAAABIAMADIArAJIDGiRIhJimIiiidIAAiJIGKAEIETg1IAOhvIh6ikIBWg4IgBhGIA1gxQADgCgHAIIgvAsIACA+IABADIAAgEIAAAKIhVA4IB7CgIgPB2IkXA3ImDgCIAAB8ICiCcIApBbIALAZIgyh1IhshrIBvBpIBRC0IjWCdIgtgJQgFAAgGgDIgFgCIhVAWIhcByIgDBFIgtA1IASBNIhdCVIAoE1IieDSIhdANIhPh1Ih+gQIjaArIkZDeIAQARIALgEIgJgKIgCgCIEPjRIDUgoIBzAQIBRB4IBxgOICqjfIgok1IBgiWIgQhLIArgxIACgYIgBAYIgrAyIARBKIheCWIApE3IirDkIgXADIAXgCICsjlIgpk2IBeiWIgQhLIAqgyIADhFIBRhjIBCgQIACAAIAAABIBEAOID1i0IgSgrIASArIhTA7IBQg8IhcjOIiciWIAAhLIFkACIEzg8IAVidIhriOIBFgtIgBhKIDhjTIAmicIgUhSIAigvIhJiMIgViBIiTijIDjkkIA/AUIAUgfIDMiZICjgxIAzgyIDSgtIIFgeIA4AbIAYgkIAegNIgcAOIgWAlIAJAEIgIACIgEgCIgCAEIgHACIAFgIIg2gZIoEAeIjPAuIgyAyIikAxIjICYIgRAcIADABIgFACIgDAFIAEABIgCACIADgBIgBgBIAVgiIDHiXIClgxIAKgLIAAACIgJALIAxgyIDNguIHdgdIkQAbIjLAOIjJAtIgxAxIilAyIjECUIgcAsIhBgUIjKEDICJCYIAWCEIBOCXIgkAzIATBMIgrCqIjeDQIABBNIg5AlIBgCBIgaC6IlHA+IlQgEIAAAsICXCTIBhDgIkFC/IhFgOIgCAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIg8AOIhLBaIgDBGIgqAwIAQBJIhgCWIAHA3IgIg3IBfiWIgRhKIAqgwIADhGIBMhdIA+gPIAAABIBGAOID9i8IhgjYIiaiVIAAgwIgBAAIAAAwICaCVIBgDYIj8C6Ig/gMIgEgBIgDgBIg/APIhMBdIgEBGIgpAxIARBJIhfCXIAqE3IiyDqIiCAQIhTh7IhogOIjNAnIj9DEIACACIAQgGIgCAHIgJAEIACACIAHgDIgCAIIAAABIADgBIACgJIgDABIAAgDIAEgBIgBADIACgBIgCAJIAEgCIAAACIgEABIgBAEIA3A8Ig3AWIADgQIgCgDIADgBIADgMIgNAGIgCgCIAAgBIgEgDIgCAJIgCAAIADgKIgDgDIgDAPIADgCIgBAFIgCgDIgDALIAEgBIABgHIACACIgBAEIAEgBIgDgDIABgHIAFgCIABAAIACgBIAHAHIgMAFIgBAAIAAABIABABIALAMIgVAIIgBAEIAEADIgBACIgDgEIAAgBIgBgCIgBACIgCgCIACgBIgCgCIAAACIAAABIAAAAIgCAHIgFgFIgDABIAHAIIgCAHIgLgMIivBDIicgQIhJhBIhfBKIhqCjIhhAaIg+DdIAiCzIg/CxIBHBQIh3BPIqHDJImZgOQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIj9BdIhpBGgEgdXAw5IBlhEID8hcIAFgBQAAAAAAAAQAAgBABAAQAAAAAAAAQAAABAAAAIACAAIGYAQIDshMIBPgYIE7hiIk7BiIhPAYIjsBHImagPIAAAAIgBAAIgCABIkABfIhkBEIgrgJgEgdeAwSIBcg+IEMhiIAYACIGDAPIJ6jDIAcgTIgHgJIgaASIp2DCImYgPIgCAAIkQBkIhaA9Ik6hBIpwAqIhCgZIBCAaICngIICbgJIEtgUgEgGhAqIIgBAAIAAABIABABIAGAHIgJAHIAAAAIARAUIACgPIgKgMIANgIIACgQgEgGsAqPIADAEIgBAIIAFgDIgEgFIABgHIAFgDIgEgFIgBAIgEgGdApiIAnAoIgrgvIAAACIAEAFIAAgBgAihcmIhkCZIhrAdIhJEIIAgCwIhFDDIAYAbIAKgGIgWgYIBFi/IgiixIBIkAIBpgcIBlibICBhjIBaBQICEAOICWg5IgKgLIiOA2Ih8gMIhfhTgAjtfgIhkAbIhCDrIAiCyIg/C2IANANIABgBIABABIAAgCIgBABIgLgNIBAi1IghiyIBAjoIBjgbIBoihIBqhTIBQBFICSAOICmg/IgHgHIigA/IiPgNIhRhGIgcAWQAAABgcAWIg1AqQgnA7AXgggAFub5IAGAIIAEgCIgHgHgAF4b1IAHAHIACAAIgIgHgAFXbiIAKAKIAEgBIgKgLgAG5bsIACgHIAEgBIgDgDIACgIIgGADIAEAFIgBAEIgGADIgDgDIgBAEIAEgBgAFhbeIALALIABgBIgKgLgAGubgIAEAFIACgIIAEgBIgDgDIgBAEgAF8bUIAKALIANgGIgKgKgAGsbeIADgMIgCgCIADgBIADgQIgPAGIAAABIAJAKIgLAEIgFgFIACgJIgCABIACgGIgDgDIgCAKIADgBIgBAGIgDgCIABgDIgCABIABACIgDANIAEgBIACgKIABACIgBAHIAEgBIABgBIABAAgAE+bHIACACIADgCIgBgBgAGfbGIAEgBIgDgCIgBADgAFJbEIABABIACgBIgCgBgAJnV/IlcETIAuAwIAEgCIgtgvIFakNIDwguICgAVIBKBtIAkgFICCitIgJg+IgCgVIgEgbIAEAbIACAVIAIA9IiDCrIggAEIhJhtIijgWgAJsWIIlSELIApArIACgBIgogrIFQkGIDtguICbAVIBLBuIAtgGICGizIgpkzIATgeIgUAeIAnEyIiFCwIgpAFIhKhuIiegVgAFla7IAAAAIANgGIgCgBIgNAFIAAAAgAFea0IAAgBIANgFIgCgCIgUgVIEpjnIDegsQBGAJA+AHIAHAKIACgEIgGgKIiHgRIjjApIk3DtIALgJIgLAIIAAABIAaAcIgNgOgAF+auIACACIALgEIgCgCgAGiasIACABIAAgCgEg11gOKIgECRIhQDZIi2BpIBNB4IABABIgbAIIgHADIgGACIiXByIgVFoIC+BiIi4DsIBEE/IAJAsIAJAqIAkDkIgGAZIAGgZIgijcIhTmcIC8jvIjBhjIAWliICXhxIAsgOIgBAAIAAgBIhMh4ICwhmIBRjdIAFiRICVkcIEUCgIBxgJICIBUIiHhXIgtACIAtgDIC4ByIAFgCIi9hzIhwAIIkaikgAUKMPIAUBSIAAAAIgCACIgBABIAAABIhaCOIAEAVIgDgVIBeiSIgShRIA0g7IAAgFgAUXNmIgBgBgEg53AMqIgGgggAZwgQIAAABIABAAIAAgCgEgqfgMtIAEADIABgOIgFgDgEgrogNdIAEADIANgGIgFgDgEgqbgOEIAAAGIAFgDIAAgFgEgoKgOEIDfhkIA0iBIggiZIB8gQIAOgDIBhgQID4hbIBHAFIAzhmIBWAVIBghXIgCgBIADgFIAAgCIgBABIgBABIhgBZIhYgVIgxBnIhGgFIj4BcIjwAhIAgCdIgxB+IjdBjIhYgYIgbANIAAAFIAbgNgEAlWgVaIg1g8IDVkUIA9AUIgBABIADgBIgCAAIADgEIgGgCIgGACIACgDIg3gRIjXEYIA4A8gA4E4eIAQAJIAEACIAsgCICOiQIALhrIBnjbIgEhxIC9hyIEbgqIAAAAIApisIF4CGIBLgEIAagBICpgGIipAGIgaABIhLACIl6iIIgoCkIAAABIgBACIgBAFIAAAAIABgDIgBADIkaApIjBB0IAGBzIhmDbIgNBqIiLCOIgrABIgSgKgEAm7ggWIgmhJIBUpRIiXARIAfihIkIjKIifA4IgEACIg6BIIgUAYIAUgYIA8hIQAAAAABAAQAAgBAAAAQABAAABAAQAAgBABAAICdg1IEEDIIgeCkICWgRIhSJNIAkBEIAEAFgEAJ+ggzIgCAHIACgHIABgCgEAmPgheIAZi9gEgMAgkMIABgBIAAgBgAGIcVIABgEIACADIAAAEgAGLcUIACgIIACABIgCAJgAGIcVgAGLcUgAGPcNgAGlcAgAGWbwgAGtbQgAUnNjIgBgEIABAEIAAAAgEA71gfmIAGgCIAGADIgPAEgEA7JgmVIAKAAIhZCFg");
	this.shape_7.setTransform(388.4,314.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#202020").s().p("AhUgQIAHgDIABABICEAGIiBgDIgCgBIgBAAIhsAkgAA4gMICBAEg");
	this.shape_8.setTransform(243.4,608.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#202020").s().p("AAHgBIBOABIARgDQAIgBgBABIgUAEIgDABIgBAAIgBABIgCAAIgKAAIiYACQhVgBCsgFg");
	this.shape_9.setTransform(578.8,305.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#202020").s().p("AjgE0IAIABIANACIADAAIACABIAEAAIAAAAIAAAAIBOg7IBZhEIg9iJIgBgBIipiiIAAi2IGoACIBdgSIhbAVIgCAAIgBABImgAAIAACtICmCeIADABIBACSIiwB/gAjqExIgCgBIAMAEIgKgDgAjsEwIgGgCIgBAAIABAAIAGACg");
	this.shape_10.setTransform(570.6,333.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#202020").s().p("AjoGOIBQAfgAk6FvIJlrAIAPg7IgJggIAKAfIgOA9IplK+IBQAgg");
	this.shape_11.setTransform(34.3,549.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#202020").s().p("ABBCdIhzCFgAC1AXIANg2IgzieIiTgsIhfgcIgBgBID1BGIA1ChIgOA4Ih3CEgAhkkGIgEgBIhdgaIBdAaIAEABg");
	this.shape_12.setTransform(45.3,513.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#202020").s().p("AEsApIpzAlIj1hgID2BbIEygSIFAgSIFMBJIBphGIBQgcIhPAdIhqBIgAo8gSIj0heID0Beg");
	this.shape_13.setTransform(137.6,618.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#202020").s().p("AgdgBIgBAAIABgBQABgBALACIAxAEg");
	this.shape_14.setTransform(809.2,80.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#202020").s().p("ApUC/IClgzIAxgxIDFgsIH4geIBLAjIAjg0IDehkIg4hmIBhg+IhbBAIA4BmIjgBlIglA4IhOgkIkCAQQAYgCACgCIkPAQIjDAsIgxAwIimAzIhgBHg");
	this.shape_15.setTransform(733.2,110.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#202020").s().p("AgKBBIAUggIgkgIIgEgIIAtAIIA6hVIi0gMIC8AFIg7BeIATAEIA3gfQAMgFAAABQAAABgIAGQgIAGgMAHIgVAPIgQAJIgbgGIgWAngAgfAYIAFABIAQAoIgDADgAgKBBg");
	this.shape_16.setTransform(753.9,78.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#202020").s().p("AkwBjIgEAFIgdhIIAGABIgEgJIA3AKIAKAAIDyiOIEZADIAwA/IAIAKIAWAeQAOAUgRgSQAAAAgSgUIg9hNIhBgCQAAACApAEQAYADhCAAIjRgIIhPAsQggAWAMgCIAagEIipBXIg/gQIAbBCQAbglAAADQAAADgYAog");
	this.shape_17.setTransform(784.8,75.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#202020").s().p("AgNgBIAVACIABgBIAFAAIgGACg");
	this.shape_18.setTransform(757.5,82.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6E2405").s().p("EglzAu4IpwAiIuolwIJDqMIAXhcIhFjWInoiNIgJlLIAiiFIglkEIhJltIDMkBIjPhsIAUk+ICPhrIBGgWIhPh8ICdhZIBbjuIAGiOIB+juID5CTIBwgHICTBbIgEBXIBzg5IBXAYIEEhyIBCikIgXhxIC5gZIDzhYIBgAHIAvhgIBIASIBhhZIAAAMIBHgCICtiuIAOh1IBqjfIgEhdICUhZIE7grIAjiOIE+B1IF6gPICuCGIBeg5ICKAnIAYBNICRBmIBqg8IAVg2IFniNICWB+IBdhRIgViJIBghdICmgdIAAAFIB8ArIBXhxIg8h8IEhldICCgtIDgCtIgkDBICYgQIhPImICMERIBbAIIDRirIDlhrIAzhmIFJisIDbANIg7BYIBWASID5iJIDlAJIA7BKIhAgGIibBkIA3BjIjRBeIgeAsIhBgeIoAAdIjMAsIgyAyIikAxIjHCVIgZAnIhBgUIjUEPICMCdIAWCDIBMCSIgkAxIATBPIgpCkIjgDRIABBLIg/ApIBkCHIgXCrIk9A9IlcgFIAAA/ICZCWIBcDUIj3C1IhEgOIAAgBIhEAQIhQBhIgEBFIgrAyIARBLIhgCVIAnE2IirDhIh0AOIhRh4IhxgQIjTAoIkNDPIBGBKIj4BfIiSgQIhRhGIhsBTIhpCfIhkAbIhDDrIAgCzIhCC3IA+BHIhfA+IqBDCImagTIAAAAIkJBeIhgBAg");
	this.shape_19.setTransform(410,317.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,818.6,630.6);


(lib.TurkeyButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("Ag7DuQgHgCgCgCQgDgCgBgDQAAgEACgFIAthxQgDgCgDgCQgEgEgBgDIh0k3QgCgHAAgEQAAgEACgDQAEgDAGAAIARgBIARABQAHgBADACQAEACACACIADAHIBcEEIABAAIBakFQABgHAEgCQACgBAHgBIARgBIARABQAGAAAEADQADADAAAEQAAAEgDAGIh0FDIgrB3QgBAHgKACQgIAEgTAAIgOgBg");
	this.shape.setTransform(595.6,495.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("Ag4CnQgegLgVgWQgVgWgKghQgLghAAgsQAAgpALgiQALghAVgXQAUgYAdgMQAdgNAiAAQAnAAAbANQAbAMARAVQARAUAJAdQAIAbAAAgIAAALQAAANgIAGQgHAGgJAAIjVAAQAAAbAGAWQAFAWANAPQAMAQAVAIQAUAIAcAAQAYAAASgDQASgEANgFIAWgIQAJgEAEAAQABAAAAAAQABAAABAAQAAAAAAABQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQABAAAAABIABAHIABALIgBAIIAAAGIgCAFIgDAEIgMAHQgKAEgQAEQgPAFgUADQgVAEgXAAQgnAAgegMgAgih7QgRAIgMAOQgLAOgGASQgGASgBAUICxAAQABgvgWgaQgWgbgrAAQgWAAgQAIg");
	this.shape_1.setTransform(560.8,488.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("ABWD9IgLgCIgGgEIgGgGIiIi0IAAC1QAAADgBACIgFADIgKACIgOABIgOgBIgJgCQgEgBgCgCIgBgFIAAniIABgFQACgCAEgCQACgBAHgBIAOgBIAOABIAKACIAFAEIABAFIAAElIB6iGQACgEAEgCQADgCAFgCQAEgCAGAAIAPgBIAQABQAFAAAFACQADABACACQABACAAADQAAAEgCAFQgDAEgFAGIh1B1ICECrIAHAKQACAEAAADQgBADgBACQgCADgDABIgKACIgPABIgQAAg");
	this.shape_2.setTransform(530.2,480.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AhPCwIgJgCQgDgCgCgCIgBgFIAAlEIABgFQABgCADgBQADgCAGAAIANgBIAOABQAFAAACACIAFADIABAFIAAAvQANgTAMgMQALgNAKgHQALgHAKgCQAKgDALAAIAKAAIAMACIANAEQAEABADACQAAABABAAQAAAAABABQAAAAAAABQAAAAABABIABAEIABAHIAAANIgBAOIgBAIIgCAFQgBABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgHgCIgKgDIgLgDQgHgCgIAAQgIAAgJAEQgJADgJAJQgJAIgLAOQgKANgMAUIAADVQAAADgCACIgEAEIgKACIgPAAIgOAAg");
	this.shape_3.setTransform(500.5,488.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AhNClQgXgLgOgSQgNgTgGgYQgGgZAAgkIAAjEQAAgDABgCQABgCAEgBQADgCAGAAIAPgBIAOABQAGAAAEACIAEADQACACAAADIAAC8QAAAdAEARQAEARAJANQAIALANAHQANAHARAAQAWAAAWgQQAWgQAZgfIAAjiQAAgDACgCQABgCADgBQAEgCAGAAIAOgBIAPABQAFAAAEACIAFADQABACAAADIAAFEIgBAFQgBACgEACIgIACIgNAAIgNAAIgJgCQgDgCgBgCQgBgCAAgDIAAgrQgcAfgbAOQgbAOgbAAQggAAgWgLg");
	this.shape_4.setTransform(466,488.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AgODqIgKgCQgDgBgCgDQgBgCAAgDIAAmUIiEAAIgFgBQgCgCgCgDIgCgIIgBgMIABgMIACgJQACgDACgBIAFgCIFFAAQADAAACACIAEAEIACAJIABAMIgBAMIgCAIIgEAFIgFABIiEAAIAAGUQAAADgBACQgCADgDABIgKACIgPABIgOgBg");
	this.shape_5.setTransform(433.2,482.6);

	this.instance = new lib.turkeyai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(545.5,501.7,1,1,39,0,0,520.4,224.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.SyriaButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AhCCsQgVgHgOgMQgPgNgIgSQgJgTAAgXQAAgcAMgUQALgUAVgNQAVgNAegHQAfgGAkAAIAtAAIAAgaQAAgTgEgOQgEgOgIgKQgJgKgOgEQgPgFgUAAQgVAAgSAFQgRAFgNAHQgOAGgIAFQgJAFgFAAQgDAAgCgBIgDgEQgCgDgBgFIgBgKQAAgJACgFQABgFAFgFQAFgFAMgGQAMgGAPgFQAQgGASgDQASgEASAAQAjAAAZAIQAYAIAQAQQAPAPAHAXQAHAWAAAfIAADaQAAAEgDADQgDACgFABIgPABIgPgBQgGgBgCgCQgDgDAAgEIAAggQgVAWgaANQgbANgcAAQgZAAgVgHgAgSATQgSAEgMAIQgMAIgGAMQgFALAAAPQAAAZAQAPQAQAPAdAAQAWAAAUgMQAUgMAWgYIAAhFIgzAAQgXAAgSAEg");
	this.shape.setTransform(513.7,413.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgODwIgJgCQgDgBgBgCIgBgFIAAlEIABgFQABgCADgCQADgBAGgBIAOgBIAOABIAKACIAEAEQACACAAADIAAFEQAAADgCACIgEADIgKACIgOABIgOgBgAgcivQgIgIAAgVQAAgVAIgHQAIgIAVAAQAUAAAIAIQAIAHAAAVQAAAVgIAHQgIAIgVAAQgUAAgIgHg");
	this.shape_1.setTransform(488.6,406.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AhPCwIgJgCQgEgCgBgCIgBgFIAAlEIABgFQABgCADgBQAEgCAFAAIANgBIAOABQAEAAADACIAEADIABAFIAAAvQAOgTAMgMQAMgNAJgHQALgHAKgCQAKgDAKAAIALAAIANACIALAEQAFABADACQAAABABAAQAAAAABABQAAAAAAABQAAAAAAABIACAEIABAHIAAANIgBAOIgBAIIgCAFQgBABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgHgCIgJgDIgNgDQgGgCgHAAQgKAAgIAEQgJADgJAJQgJAIgKAOQgLANgNAUIAADVQAAADgBACIgFAEIgJACIgOAAIgPAAg");
	this.shape_2.setTransform(469.3,413.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("Ag7DuQgGgCgDgCQgEgCAAgDQAAgEACgFIAthxQgEgBgDgDQgCgEgBgDIh0k3QgDgHAAgEQAAgFADgCQADgCAGgBIASgBIARABQAGgBADACQAEABABAEIAEAGIBcEEIABAAIBakFQACgHADgCQADgCAGAAIASgBIAQABQAGABAEACQADACAAAFQAAAEgCAGIh1FDIgqB3QgDAHgIACQgKAEgRAAIgPgBg");
	this.shape_3.setTransform(437.5,420.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("Ag5DtQgVgEgPgGQgQgGgKgGQgMgGgEgFQgEgEgCgGQgCgHAAgLIABgNIACgJQACgDACgBIAEgCQAGAAAJAGIAYAOQAOAHAUAGQAVAHAbAAQATAAARgGQARgFAMgKQALgKAHgPQAGgOABgTQgBgTgIgPQgKgOgOgKQgPgLgTgJIgmgSQgUgJgSgKQgTgLgPgQQgPgPgJgUQgKgVAAgcQAAgdAMgXQAKgXATgQQATgPAbgIQAagJAcAAQAQAAAQADQAPADAPAEQANAFAMAGQAKAFAEAEIAEAFIACAFIABAHIAAAMIAAALIgCAJIgCAFIgFABQgFAAgHgFIgWgLQgMgHgRgFQgRgFgUAAQgTAAgPAFQgOAFgKAJQgIAJgFAMQgFAMAAANQAAAUAJAOQAJAOAPALQAPAKATAJIAmATQAUAJATALQATAKAPAPQAPAPAJAVQAKAUAAAcQAAAggMAaQgNAagVASQgWASgdAJQgdAJggAAQgYAAgTgEg");
	this.shape_4.setTransform(404.6,407.4);

	this.instance = new lib.syriaai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(472.5,456.3,1.067,1.119,37.4,0,0,351.1,257.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.SudanButton2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("ABfCwIgJgCQgDgCgBgCQgCgCAAgDIAAi9QAAgcgEgRQgEgRgJgMQgIgNgNgGQgOgHgRAAQgVAAgWAQQgXAQgYAfIAADiQAAADgCACIgEAEIgKACIgPAAIgOAAIgJgCQgDgCgCgCIgBgFIAAlEIABgFQABgCADgBQADgCAFAAIAOgBIANABQAGAAACACIAFADIABAFIAAArQAbgfAcgOQAagOAbAAQAhAAAWALQAXALANASQAOATAGAZQAGAYAAAjIAADFQAAADgBACQgCACgEACIgJACIgOAAIgPAAg");
	this.shape.setTransform(405.9,298.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AhCCsQgVgHgOgMQgPgNgIgSQgJgTAAgXQAAgcAMgUQALgUAVgNQAVgNAegHQAfgGAkAAIAtAAIAAgaQAAgTgEgOQgEgOgIgKQgJgKgOgEQgPgFgUAAQgVAAgSAFQgRAFgNAHQgOAGgIAFQgJAFgFAAQgDAAgCgBIgDgEQgCgDgBgFIgBgKQAAgJACgFQABgFAFgFQAFgFAMgGQAMgGAPgFQAQgGASgDQASgEASAAQAjAAAZAIQAYAIAQAQQAPAPAHAXQAHAWAAAfIAADaQAAAEgDADQgDACgFABIgPABIgPgBQgGgBgCgCQgDgDAAgEIAAggQgVAWgaANQgbANgcAAQgZAAgVgHgAgSATQgSAEgMAIQgMAIgGAMQgFALAAAPQAAAZAQAPQAQAPAdAAQAWAAAUgMQAUgMAWgYIAAhFIgzAAQgXAAgSAEg");
	this.shape_1.setTransform(367.6,299);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AhNDwQgagNgPgYQgQgYgHgfQgIghAAgjQAAgqAJghQAKgiARgYQASgXAagNQAagNAjAAQAbAAAYAMQAYANAXAYIAAi9QAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgDAEgBIAJgDIAOgBIAPABIAJADQADABACADQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABIAAHhIgBAEIgFAEIgIACIgMABIgNgBIgIgCQgEgCgBgCIgBgEIAAgsQgaAcgcAQQgbAPggABQgkAAgZgPgAgqgoQgQALgKASQgKAQgEAXQgFAWAAAXQAAAZAEAYQAEAXAJASQAKATAPALQAQAKAXABQALgBALgDQALgDAMgIQALgIANgLQANgMAOgSIAAiDQgZgcgWgQQgXgPgXAAQgXgBgQALg");
	this.shape_2.setTransform(330.5,291.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AhNClQgXgLgOgSQgNgTgGgYQgGgZAAgkIAAjEQAAgDABgCQABgCAEgBQADgCAGAAIAPgBIAOABQAGAAAEACIAEADQACACAAADIAAC8QAAAdAEARQAEARAJANQAIALANAHQANAHARAAQAWAAAWgQQAWgQAZgfIAAjiQAAgDACgCQABgCADgBQAEgCAGAAIAOgBIAPABQAFAAAEACIAFADQABACAAADIAAFEIgBAFQgBACgEACIgIACIgNAAIgNAAIgJgCQgDgCgBgCQgBgCAAgDIAAgrQgcAfgbAOQgbAOgbAAQggAAgWgLg");
	this.shape_3.setTransform(292.6,299.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("Ag6DtQgUgEgQgGQgPgGgLgGQgLgGgDgFQgFgEgBgGQgDgHAAgLIABgNIACgJQACgDABgBIAGgCQAFAAAJAGIAXAOQAPAHAUAGQAVAHAaAAQAUAAARgGQAQgFANgKQAMgKAGgPQAHgOgBgTQAAgTgJgPQgIgOgPgKQgPgLgTgJIgmgSQgTgJgUgKQgSgLgPgQQgPgPgJgUQgJgVAAgcQgBgdALgXQALgXATgQQATgPAagIQAagJAeAAQAQAAAPADQAQADAOAEQANAFALAGQALAFAEAEIAEAFIACAFIABAHIABAMIgBALIgCAJIgDAFIgEABQgFAAgIgFIgUgLQgNgHgQgFQgSgFgVAAQgSAAgOAFQgPAFgJAJQgKAJgFAMQgEAMAAANQAAAUAJAOQAJAOAPALQAPAKATAJIAmATQAUAJATALQAUAKAPAPQAOAPAKAVQAJAUAAAcQAAAggMAaQgMAagWASQgWASgcAJQgdAJghAAQgXAAgVgEg");
	this.shape_4.setTransform(256.2,292.8);

	this.instance = new lib.sudanai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(339.4,326.9,0.668,0.693,-18.2,0,0,409.6,366.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.SouthSudanButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("ABgCwIgJgCQgEgCgCgCQgBgCAAgDIAAi9QAAgcgEgRQgFgRgIgMQgIgNgNgGQgOgHgRAAQgVAAgXAQQgWAQgZAfIAADiQABADgCACIgEAEIgKACIgOAAIgPAAIgJgCQgEgCgBgCIgBgFIAAlEIABgFQABgCADgBQAEgCAEAAIAOgBIANABQAFAAADACIAEADIACAFIAAArQAbgfAcgOQAbgOAbAAQAgAAAXALQAWALANASQAOATAGAZQAGAYAAAjIAADFQAAADgBACQgCACgDACIgKACIgOAAIgOAAg");
	this.shape.setTransform(600.9,394.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AhCCsQgVgHgOgMQgPgNgIgSQgJgTAAgXQAAgcAMgUQALgUAVgNQAVgNAegHQAfgGAkAAIAtAAIAAgaQAAgTgEgOQgEgOgIgKQgJgKgOgEQgPgFgUAAQgVAAgSAFQgRAFgNAHQgOAGgIAFQgJAFgFAAQgDAAgCgBIgDgEQgCgDgBgFIgBgKQAAgJACgFQABgFAFgFQAFgFAMgGQAMgGAPgFQAQgGASgDQASgEASAAQAjAAAZAIQAYAIAQAQQAPAPAHAXQAHAWAAAfIAADaQAAAEgDADQgDACgFABIgPABIgPgBQgGgBgCgCQgDgDAAgEIAAggQgVAWgaANQgbANgcAAQgZAAgVgHgAgSATQgSAEgMAIQgMAIgGAMQgFALAAAPQAAAZAQAPQAQAPAdAAQAWAAAUgMQAUgMAWgYIAAhFIgzAAQgXAAgSAEg");
	this.shape_1.setTransform(562.6,395.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AhNDxQgagOgPgYQgQgYgHgfQgIghAAgjQAAgqAJghQAKgiARgYQASgYAagMQAagNAjAAQAbAAAYAMQAYANAXAYIAAi9QAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgDAEgBIAJgDIAOAAIAPAAIAJADQADABACADQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABIAAHhIgBAEIgFAEIgIACIgMABIgNgBIgIgCQgEgCgBgCIgBgEIAAgrQgaAbgcAQQgbAPggAAQgkAAgZgNgAgqgoQgQALgKASQgKAQgEAXQgFAWAAAXQAAAZAEAYQAEAXAJASQAKATAPALQAQAKAXABQALgBALgDQALgDAMgIQALgIANgLQANgMAOgSIAAiDQgZgcgWgQQgXgPgXgBQgXAAgQALg");
	this.shape_2.setTransform(525.5,387.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AhNClQgXgLgOgSQgNgTgGgYQgGgZAAgkIAAjEQAAgDABgCQABgCAEgBQADgCAGAAIAPgBIAOABQAGAAAEACIAEADQACACAAADIAAC8QAAAdAEARQAEARAJANQAIALANAHQANAHARAAQAWAAAWgQQAWgQAZgfIAAjiQAAgDACgCQABgCADgBQAEgCAGAAIAOgBIAPABQAFAAAEACIAFADQABACAAADIAAFEIgBAFQgBACgEACIgIACIgNAAIgNAAIgJgCQgDgCgBgCQgBgCAAgDIAAgrQgcAfgbAOQgbAOgbAAQggAAgWgLg");
	this.shape_3.setTransform(487.6,395.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("Ag5DtQgVgEgPgGQgQgGgKgGQgLgGgFgFQgEgEgBgGQgDgHAAgLIABgNIACgJQABgDACgBIAGgCQAFAAAJAGIAYAOQAOAHAVAGQAUAHAbAAQATAAARgGQARgFAMgKQALgKAHgPQAGgOABgTQAAgTgJgPQgKgOgOgKQgPgLgTgJIgmgSQgUgJgSgKQgTgLgPgQQgPgPgJgUQgKgVABgcQAAgdALgXQAKgXATgQQATgPAagIQAagJAdAAQAQAAAQADQAPADAPAEQAOAFALAGQAKAFAEAEIAEAFIACAFIABAHIAAAMIAAALIgCAJIgCAFIgGABQgEAAgHgFIgVgLQgNgHgRgFQgQgFgWAAQgSAAgPAFQgOAFgJAJQgKAJgFAMQgEAMAAANQAAAUAJAOQAJAOAPALQAPAKATAJIAmATQAUAJATALQATAKAQAPQAPAPAIAVQAKAUAAAcQAAAggMAaQgMAagWASQgWASgcAJQgeAJggAAQgYAAgTgEg");
	this.shape_4.setTransform(451.2,389);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("ABfD8IgJgCQgDgBgCgCQgBgCAAgDIAAi/QAAgcgEgRQgEgPgJgNQgIgMgNgHQgOgGgRAAQgVAAgWAQQgXAQgZAdIAADkQAAADgBACIgEADIgKACIgPABIgOgBIgJgCQgDgBgCgCIgBgFIAAniIABgFQACgCADgCQADgBAGgBIAOgBIAPABQAGABAEABIAEAEIABAFIAADDQAagbAagNQAagOAaAAQAgAAAWALQAXALANATQAOASAGAZQAGAYAAAjIAADGQAAADgBACQgCACgEABIgJACIgOABIgPgBg");
	this.shape_5.setTransform(398.2,387.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AADDVQgRgHgMgNQgLgOgFgVQgGgVAAgcIAAi9IgtAAQgGAAgDgGQgDgFAAgNIABgMIACgIQABgDADgBIAFgBIAtAAIAAhOQAAAAAAgBQAAgBABAAQAAgBAAAAQAAgBABAAQABgDADgBIAJgDIAPAAIAPAAIAIADQADABABADQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAIAABOIBTAAQADAAACABIAEAEIACAIIABAMQAAANgDAFQgDAGgGAAIhTAAIAAC1QAAAhAKARQAKARAZAAIAPgBIAMgEIAIgDQAEgCADAAIADABIADAEIABAHIABAKQAAALgBAGQgCAGgDADIgIAFIgNAFIgQACIgRABQgZAAgSgGg");
	this.shape_6.setTransform(365.6,391);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("AhNClQgXgLgOgSQgNgTgGgYQgGgZAAgkIAAjEQAAgDABgCQABgCAEgBQADgCAGAAIAPgBIAOABQAGAAAEACIAEADQACACAAADIAAC8QAAAdAEARQAEARAJANQAIALANAHQANAHARAAQAWAAAWgQQAWgQAZgfIAAjiQAAgDACgCQABgCADgBQAEgCAGAAIAOgBIAPABQAFAAAEACIAFADQABACAAADIAAFEIgBAFQgBACgEACIgIACIgNAAIgNAAIgJgCQgDgCgBgCQgBgCAAgDIAAgrQgcAfgbAOQgbAOgbAAQggAAgWgLg");
	this.shape_7.setTransform(334.3,395.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCCC").s().p("AhICnQgegMgUgXQgUgXgKggQgJghgBgpQAAgnALghQAKgiAVgYQAUgYAggNQAfgOApAAQAoAAAdAMQAeAMAUAXQAUAXAKAgQAJAhAAApQAAAmgKAiQgKAhgVAYQgVAZgfANQgfAOgoAAQgoAAgegMgAgsh2QgTAJgMARQgNARgFAYQgHAXAAAcQAAAaAGAXQAEAYALARQAMASAUAKQATAKAcAAQAaAAATgJQAUgJAMgRQANgRAFgYQAGgXAAgdQAAgZgFgXQgFgYgMgSQgLgRgSgKQgVgLgcAAQgZAAgUAKg");
	this.shape_8.setTransform(295.5,395.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("Ag5DtQgVgEgPgGQgQgGgKgGQgMgGgEgFQgEgEgCgGQgCgHAAgLIABgNIACgJQACgDACgBIAEgCQAGAAAJAGIAYAOQAOAHAVAGQAUAHAbAAQATAAARgGQARgFAMgKQALgKAHgPQAGgOABgTQAAgTgJgPQgKgOgOgKQgPgLgTgJIgmgSQgUgJgSgKQgTgLgPgQQgPgPgJgUQgKgVAAgcQAAgdAMgXQAKgXATgQQATgPAbgIQAagJAcAAQAQAAAQADQAPADAPAEQAOAFALAGQAKAFAEAEIAEAFIACAFIABAHIAAAMIAAALIgCAJIgCAFIgGABQgEAAgHgFIgWgLQgMgHgRgFQgQgFgWAAQgSAAgPAFQgOAFgJAJQgKAJgFAMQgEAMAAANQAAAUAJAOQAJAOAPALQAPAKATAJIAmATQAUAJATALQAUAKAOAPQAQAPAIAVQAKAUAAAcQAAAggMAaQgNAagVASQgVASgeAJQgdAJggAAQgYAAgTgEg");
	this.shape_9.setTransform(258.9,389);

	this.instance = new lib.southsudanai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(379.6,353.2,0.652,0.666,-24.7,0,0,465.3,374.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.SomaliaButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B25538").s().p("AhCCsQgVgHgOgMQgPgNgIgSQgJgTAAgXQAAgcAMgUQALgUAVgNQAVgNAegHQAfgGAkAAIAtAAIAAgaQAAgTgEgOQgEgOgIgKQgJgKgOgEQgPgFgUAAQgVAAgSAFQgRAFgNAHQgOAGgIAFQgJAFgFAAQgDAAgCgBIgDgEQgCgDgBgFIgBgKQAAgJACgFQABgFAFgFQAFgFAMgGQAMgGAPgFQAQgGASgDQASgEASAAQAjAAAZAIQAYAIAQAQQAPAPAHAXQAHAWAAAfIAADaQAAAEgDADQgDACgFABIgPABIgPgBQgGgBgCgCQgDgDAAgEIAAggQgVAWgaANQgbANgcAAQgZAAgVgHgAgSATQgSAEgMAIQgMAIgGAMQgFALAAAPQAAAZAQAPQAQAPAdAAQAWAAAUgMQAUgMAWgYIAAhFIgzAAQgXAAgSAEg");
	this.shape.setTransform(482.2,271.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B25538").s().p("AgNDwIgJgCQgEgBgCgCIgBgFIAAlEIABgFQACgCAEgCQACgBAHgBIANgBIAPABIAJACIAEAEQACACAAADIAAFEQAAADgCACIgEADIgJACIgPABIgNgBgAgcivQgIgIAAgVQAAgVAIgHQAIgIAUAAQAVAAAIAIQAIAHAAAVQAAAVgIAHQgIAIgVAAQgUAAgIgHg");
	this.shape_1.setTransform(457,264.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B25538").s().p("AgOD8IgJgCQgDgBgCgCIgBgFIAAniIABgFQACgCADgCQADgBAGgBIAOgBIAOABQAGABAEABIAEAEIACAFIAAHiQAAADgCACIgEADIgKACIgOABIgOgBg");
	this.shape_2.setTransform(440,263.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B25538").s().p("AhCCsQgVgHgOgMQgPgNgIgSQgJgTAAgXQAAgcAMgUQALgUAVgNQAVgNAegHQAfgGAkAAIAtAAIAAgaQAAgTgEgOQgEgOgIgKQgJgKgOgEQgPgFgUAAQgVAAgSAFQgRAFgNAHQgOAGgIAFQgJAFgFAAQgDAAgCgBIgDgEQgCgDgBgFIgBgKQAAgJACgFQABgFAFgFQAFgFAMgGQAMgGAPgFQAQgGASgDQASgEASAAQAjAAAZAIQAYAIAQAQQAPAPAHAXQAHAWAAAfIAADaQAAAEgDADQgDACgFABIgPABIgPgBQgGgBgCgCQgDgDAAgEIAAggQgVAWgaANQgbANgcAAQgZAAgVgHgAgSATQgSAEgMAIQgMAIgGAMQgFALAAAPQAAAZAQAPQAQAPAdAAQAWAAAUgMQAUgMAWgYIAAhFIgzAAQgXAAgSAEg");
	this.shape_3.setTransform(412.7,271.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B25538").s().p("ADFCwIgJgCQgEgCgCgCQgBgCAAgDIAAjEQAAgVgDgRQgEgRgIgMQgIgNgMgGQgMgHgRAAQgUAAgWAQQgVAQgYAfIAADiQAAADgCACQgBACgEACIgJACIgOAAIgOAAIgJgCQgDgCgBgCQgCgCAAgDIAAjEQAAgVgEgRQgEgRgHgMQgJgNgLgGQgNgHgRAAQgUAAgVAQQgVAQgYAfIAADiQAAADgCACIgEAEIgKACIgPAAIgOAAIgJgCQgDgCgCgCIgBgFIAAlEIABgFQABgCADgBQADgCAGAAIANgBIAOABQAFAAACACIAFADIABAFIAAArQAbgfAagOQAagOAaAAQAVAAAQAEQAQAFAMAJQAMAIAIAMQAIAMAGAOQARgSAOgMQAOgMAOgIQAOgHANgEQAMgDANAAQAgAAAVALQAWALANASQANATAFAZQAGAYAAAcIAADMQAAADgCACQAAACgEACIgJACIgPAAIgOAAg");
	this.shape_4.setTransform(366.6,271.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B25538").s().p("AhICnQgegMgUgXQgUgXgJggQgKghAAgpQAAgnAKghQAKgiAVgYQAUgYAggNQAfgOAoAAQApAAAeAMQAdAMAUAXQAUAXAKAgQAKAhAAApQAAAmgLAiQgKAhgVAYQgVAZgfANQgfAOgpAAQgoAAgdgMgAgrh2QgUAJgMARQgNARgGAYQgFAXAAAcQAAAaAEAXQAFAYAMARQALASATAKQAUAKAcAAQAaAAAUgJQASgJAMgRQANgRAGgYQAGgXAAgdQAAgZgFgXQgFgYgLgSQgLgRgUgKQgUgLgcAAQgaAAgSAKg");
	this.shape_5.setTransform(317.5,271.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B25538").s().p("Ag6DtQgUgEgQgGQgPgGgLgGQgLgGgDgFQgFgEgBgGQgDgHAAgLIABgNIACgJQACgDABgBIAGgCQAFAAAJAGIAXAOQAPAHAUAGQAVAHAaAAQAUAAARgGQAQgFANgKQAMgKAGgPQAHgOgBgTQAAgTgJgPQgIgOgPgKQgPgLgTgJIgmgSQgTgJgUgKQgSgLgPgQQgPgPgJgUQgJgVAAgcQgBgdALgXQALgXATgQQATgPAagIQAagJAeAAQAQAAAPADQAQADAOAEQANAFALAGQALAFAEAEIAEAFIACAFIABAHIABAMIgBALIgCAJIgDAFIgEABQgFAAgIgFIgUgLQgNgHgQgFQgSgFgVAAQgSAAgOAFQgPAFgJAJQgKAJgFAMQgEAMAAANQAAAUAJAOQAJAOAPALQAPAKATAJIAmATQAUAJATALQAUAKAPAPQAOAPAKAVQAJAUAAAcQAAAggMAaQgMAagWASQgWASgcAJQgdAJghAAQgXAAgVgEg");
	this.shape_6.setTransform(280.9,265.2);

	this.instance = new lib.somaliaai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(210.4,227.2,0.522,0.49,-23,0,0,288.8,373.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.PakisatanButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("ABgCwIgJgCQgEgCgCgCQgBgCAAgDIAAi9QAAgcgEgRQgFgRgIgMQgIgNgNgGQgOgHgRAAQgVAAgWAQQgXAQgZAfIAADiQAAADgBACIgEAEIgKACIgPAAIgOAAIgJgCQgEgCgBgCIgBgFIAAlEIABgFQABgCADgBQAEgCAEAAIAOgBIANABQAFAAADACIAFADIABAFIAAArQAbgfAcgOQAbgOAbAAQAgAAAXALQAWALANASQAOATAGAZQAGAYAAAjIAADFQAAADgBACQgCACgEACIgJACIgOAAIgOAAg");
	this.shape.setTransform(631.2,428);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AhCCsQgVgHgOgMQgPgNgIgSQgJgTAAgXQAAgcAMgUQALgUAVgNQAVgNAegHQAfgGAkAAIAtAAIAAgaQAAgTgEgOQgEgOgIgKQgJgKgOgEQgPgFgUAAQgVAAgSAFQgRAFgNAHQgOAGgIAFQgJAFgFAAQgDAAgCgBIgDgEQgCgDgBgFIgBgKQAAgJACgFQABgFAFgFQAFgFAMgGQAMgGAPgFQAQgGASgDQASgEASAAQAjAAAZAIQAYAIAQAQQAPAPAHAXQAHAWAAAfIAADaQAAAEgDADQgDACgFABIgPABIgPgBQgGgBgCgCQgDgDAAgEIAAggQgVAWgaANQgbANgcAAQgZAAgVgHgAgSATQgSAEgMAIQgMAIgGAMQgFALAAAPQAAAZAQAPQAQAPAdAAQAWAAAUgMQAUgMAWgYIAAhFIgzAAQgXAAgSAEg");
	this.shape_1.setTransform(592.8,428.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AADDVQgRgHgMgNQgLgOgFgVQgGgVAAgcIAAi9IgtAAQgGAAgDgGQgDgFAAgNIABgMIACgIQABgDADgBIAFgBIAtAAIAAhOQAAAAAAgBQAAgBABAAQAAgBAAAAQAAgBABAAQABgDADgBIAJgDIAPAAIAPAAIAIADQADABABADQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAIAABOIBTAAQADAAACABIAEAEIACAIIABAMQAAANgDAFQgDAGgGAAIhTAAIAAC1QAAAhAKARQAKARAZAAIAPgBIAMgEIAIgDQAEgCADAAIADABIADAEIABAHIABAKQAAALgBAGQgCAGgDADIgIAFIgNAFIgQACIgRABQgZAAgSgGg");
	this.shape_2.setTransform(564.1,424.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AgsCwQgQgDgMgEIgWgIIgNgJQgEgDgCgHQgBgGAAgMIAAgLIACgIQACgDACgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAEAAAIAFQAIAFALAFQALAGAQAFQAPAFAVAAQANAAANgDQAMgEAJgGQAJgGAGgKQAEgKAAgNQAAgOgHgJQgHgKgMgHQgLgHgPgGIgdgLIgdgOQgPgHgLgLQgMgMgHgPQgHgQgBgVQAAgTAJgSQAGgRAPgNQAPgOAWgIQAWgIAdAAQANAAANACIAYAGIASAHIALAHIAFAFIACAFIABAGIABAKIgBALIgCAHIgDAEIgEABQgEAAgFgEQgHgEgJgEQgKgFgNgEQgOgDgRAAQgOAAgLADQgMADgHAHQgHAGgEAJQgEAIAAAKQAAAPAHAJQAHAKAMAHQAMAHANAGIAfAMIAeAOQAPAGAMALQALALAHAPQAHAPAAAVQAAAZgJAUQgKATgQAOQgSANgXAHQgXAHgbAAQgSAAgPgDg");
	this.shape_3.setTransform(538.6,428.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AgODwIgJgCQgDgBgBgCIgBgFIAAlEIABgFQABgCADgCQAEgBAFgBIAOgBIAPABIAJACIAEAEQACACAAADIAAFEQAAADgCACIgEADIgJACIgPABIgOgBgAgcivQgIgIAAgVQAAgVAIgHQAIgIAVAAQAUAAAIAIQAIAHAAAVQAAAVgIAHQgIAIgVAAQgVAAgHgHg");
	this.shape_4.setTransform(515.7,421.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("ABWD9IgLgCIgHgEIgFgGIiIi0IAAC1QAAADgCACIgEADIgJACIgPABIgPgBIgJgCQgDgBgBgCIgBgFIAAniIABgFQABgCADgCQAEgBAFgBIAPgBIAPABIAJACIAEAEIACAFIAAElIB6iGQADgEADgCQADgCAFgCQAEgCAHAAIAOgBIAPABQAHAAADACQAEABACACQABACABADQgBAEgCAFQgCAEgGAGIh0B1ICCCrIAHAKQACAEAAADQAAADgBACQgCADgDABIgJACIgQABIgQAAg");
	this.shape_5.setTransform(492.4,420.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AhCCsQgVgHgOgMQgPgNgIgSQgJgTAAgXQAAgcAMgUQALgUAVgNQAVgNAegHQAfgGAkAAIAtAAIAAgaQAAgTgEgOQgEgOgIgKQgJgKgOgEQgPgFgUAAQgVAAgSAFQgRAFgNAHQgOAGgIAFQgJAFgFAAQgDAAgCgBIgDgEQgCgDgBgFIgBgKQAAgJACgFQABgFAFgFQAFgFAMgGQAMgGAPgFQAQgGASgDQASgEASAAQAjAAAZAIQAYAIAQAQQAPAPAHAXQAHAWAAAfIAADaQAAAEgDADQgDACgFABIgPABIgPgBQgGgBgCgCQgDgDAAgEIAAggQgVAWgaANQgbANgcAAQgZAAgVgHgAgSATQgSAEgMAIQgMAIgGAMQgFALAAAPQAAAZAQAPQAQAPAdAAQAWAAAUgMQAUgMAWgYIAAhFIgzAAQgXAAgSAEg");
	this.shape_6.setTransform(454.7,428.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("Ah+DqIgKgCQgEgBgBgDQgCgCAAgDIAAmuQAAgPAIgGQAIgGAJAAIBkAAQAPAAANACQAOABATAEQATAEAUAMQATALAOAQQAOARAHAWQAIAWAAAaQAAAjgMAcQgLAdgWASQgVAUggALQgfALgqAAIg1AAIAACoQAAADgCACIgFAEIgJACIgQABIgOgBgAhQAEIA4AAQAbAAATgGQASgHANgNQAMgNAHgSQAGgSAAgVQAAgcgKgUQgLgTgQgJQgPgJgRgDQgQgCgQAAIg5AAg");
	this.shape_7.setTransform(422,422.1);

	this.instance = new lib.pakistanai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(499.4,476.9,1.15,1.238,-101.4,0,0,348.2,346.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.LebanonButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("ABgCwIgJgCQgEgCgCgCQgBgCAAgDIAAi9QAAgcgEgRQgFgRgIgMQgIgNgNgGQgOgHgRAAQgVAAgXAQQgWAQgZAfIAADiQABADgCACIgFAEIgJACIgOAAIgPAAIgJgCQgEgCgBgCIgBgFIAAlEIABgFQABgCADgBQAEgCAEAAIAOgBIANABQAFAAADACIAEADIABAFIAAArQAcgfAcgOQAbgOAbAAQAgAAAXALQAVALAOASQAOATAGAZQAGAYAAAjIAADFQAAADgCACQgBACgDACIgJACIgPAAIgOAAg");
	this.shape.setTransform(533.8,298.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AhICnQgegMgUgXQgUgXgKggQgKghAAgpQAAgnALghQAKgiAVgYQAVgYAegNQAggOApAAQAoAAAdAMQAeAMAUAXQAUAXAKAgQAJAhAAApQAAAmgKAiQgKAhgVAYQgVAZgfANQgfAOgoAAQgoAAgegMgAgsh2QgTAJgMARQgNARgFAYQgHAXAAAcQAAAaAGAXQAEAYALARQAMASAUAKQATAKAcAAQAaAAATgJQAUgJAMgRQANgRAFgYQAGgXAAgdQAAgZgFgXQgFgYgMgSQgLgRgSgKQgVgLgcAAQgZAAgUAKg");
	this.shape_1.setTransform(494.7,299);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("ABgCwIgJgCQgEgCgCgCQgBgCAAgDIAAi9QAAgcgEgRQgFgRgIgMQgIgNgNgGQgOgHgRAAQgVAAgXAQQgWAQgZAfIAADiQABADgCACIgFAEIgJACIgOAAIgPAAIgJgCQgEgCgBgCIgBgFIAAlEIABgFQABgCADgBQAEgCAFAAIANgBIANABQAFAAADACIAEADIABAFIAAArQAcgfAcgOQAbgOAbAAQAgAAAXALQAVALAOASQAOATAGAZQAGAYAAAjIAADFQAAADgCACQgBACgDACIgJACIgPAAIgOAAg");
	this.shape_2.setTransform(455.9,298.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AhCCsQgVgHgOgMQgPgNgIgSQgJgTAAgXQAAgcAMgUQALgUAVgNQAVgNAegHQAfgGAkAAIAtAAIAAgaQAAgTgEgOQgEgOgIgKQgJgKgOgEQgPgFgUAAQgVAAgSAFQgRAFgNAHQgOAGgIAFQgJAFgFAAQgDAAgCgBIgDgEQgCgDgBgFIgBgKQAAgJACgFQABgFAFgFQAFgFAMgGQAMgGAPgFQAQgGASgDQASgEASAAQAjAAAZAIQAYAIAQAQQAPAPAHAXQAHAWAAAfIAADaQAAAEgDADQgDACgFABIgPABIgPgBQgGgBgCgCQgDgDAAgEIAAggQgVAWgaANQgbANgcAAQgZAAgVgHgAgSATQgSAEgMAIQgMAIgGAMQgFALAAAPQAAAZAQAPQAQAPAdAAQAWAAAUgMQAUgMAWgYIAAhFIgzAAQgXAAgSAEg");
	this.shape_3.setTransform(417.6,299);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AgSD8QgOgDgMgHQgMgHgNgKQgNgLgOgPIAAAoQAAADgCACIgEAEIgIACIgNAAIgMAAIgIgCQgDgCgBgCIgCgFIAAniIACgFQABgCADgBQAEgCAFAAIAPgBIAOABQAHAAADACIAFADIABAFIAADDQAPgPANgKQAOgKAMgGQANgGAOgDQALgDAPAAQAjAAAaAOQAZAOAPAYQAQAXAHAfQAIAgAAAjQgBArgIAiQgKAhgRAYQgTAYgaAMQgaANgiAAQgOAAgNgDgAgQgvQgLAEgLAHQgMAIgNAMQgMAMgOARIAACBQAYAeAXAQQAWAQAYAAQAXAAAQgLQAQgLAKgSQAJgSAFgWQAEgWABgXQAAgZgFgXQgDgYgJgRQgKgSgQgLQgPgLgXAAQgLAAgMADg");
	this.shape_4.setTransform(382.6,291.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("Ag4CnQgegLgVgWQgVgWgKghQgLghAAgsQAAgpALgiQALghAVgXQAUgYAdgMQAdgNAiAAQAnAAAbANQAbAMARAVQARAUAJAdQAIAbAAAgIAAALQAAANgIAGQgHAGgJAAIjVAAQAAAbAGAWQAFAWANAPQAMAQAVAIQAUAIAcAAQAYAAASgDQASgEANgFIAWgIQAJgEAEAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABABIABAHIABALIgBAIIAAAGIgCAFIgDAEIgMAHQgKAEgQAEQgPAFgUADQgVAEgXAAQgnAAgegMgAgih7QgRAIgMAOQgLAOgGASQgGASgBAUICxAAQABgvgWgaQgWgbgrAAQgWAAgQAIg");
	this.shape_5.setTransform(343.6,299);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AhhDrQgIAAgIgGQgHgFAAgPIAAmvQAAgDABgCQACgDADgBIAKgCIAPgBIAPABIAKACQADABACADQABACAAADIAAGTICnAAQADAAACACQADABABADIADAIIAAANIAAAMIgDAIIgEAFQgCACgDAAg");
	this.shape_6.setTransform(312.5,292.7);

	this.instance = new lib.lebanonai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(406,320.5,0.925,1,81.7,0,0,291.7,371);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.KenyaButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AhCCsQgVgHgOgMQgPgNgIgSQgJgTAAgXQAAgcAMgUQALgUAVgNQAVgNAegHQAfgGAkAAIAtAAIAAgaQAAgTgEgOQgEgOgIgKQgJgKgOgEQgPgFgUAAQgVAAgSAFQgRAFgNAHQgOAGgIAFQgJAFgFAAQgDAAgCgBIgDgEQgCgDgBgFIgBgKQAAgJACgFQABgFAFgFQAFgFAMgGQAMgGAPgFQAQgGASgDQASgEASAAQAjAAAZAIQAYAIAQAQQAPAPAHAXQAHAWAAAfIAADaQAAAEgDADQgDACgFABIgPABIgPgBQgGgBgCgCQgDgDAAgEIAAggQgVAWgaANQgbANgcAAQgZAAgVgHgAgSATQgSAEgMAIQgMAIgGAMQgFALAAAPQAAAZAQAPQAQAPAdAAQAWAAAUgMQAUgMAWgYIAAhFIgzAAQgXAAgSAEg");
	this.shape.setTransform(320,244);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("Ag7DuQgGgBgDgCQgEgCAAgEQAAgEACgFIAthxQgEgCgDgDQgCgDgBgEIh0k1QgDgIAAgEQAAgEADgDQADgCAGgCIASgBIARABQAGAAADACQAEABABADIAEAIIBcEEIABAAIBakGQACgGADgCQADgCAGgCIASgBIAQABQAGACAEACQADADAAAEQAAAEgCAHIh1FCIgqB3QgDAGgIADQgKADgRAAIgPAAg");
	this.shape_1.setTransform(287.7,250.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("ABfCwIgJgCQgDgCgBgCQgCgCAAgDIAAi9QAAgcgEgRQgEgRgJgMQgIgNgNgGQgNgHgSAAQgVAAgWAQQgXAQgYAfIAADiQAAADgCACIgEAEIgKACIgPAAIgOAAIgJgCQgDgCgCgCIgBgFIAAlEIABgFQABgCADgBQADgCAFAAIAOgBIANABQAGAAACACIAFADIABAFIAAArQAbgfAcgOQAbgOAaAAQAhAAAWALQAXALANASQAOATAGAZQAGAYAAAjIAADFQAAADgBACQgCACgEACIgJACIgOAAIgPAAg");
	this.shape_2.setTransform(252.9,243.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("Ag4CnQgegLgVgWQgVgWgKghQgLghAAgsQAAgpALgiQALghAVgXQAUgYAdgMQAdgNAiAAQAnAAAbANQAbAMARAVQARAUAJAdQAIAbAAAgIAAALQAAANgIAGQgHAGgJAAIjVAAQAAAbAGAWQAFAWANAPQAMAQAVAIQAUAIAcAAQAYAAASgDQASgEANgFIAWgIQAJgEAEAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAABABIABAHIABALIgBAIIAAAGIgCAFIgDAEIgMAHQgKAEgQAEQgPAFgUADQgVAEgXAAQgnAAgegMgAgih7QgRAIgMAOQgLAOgGASQgGASgBAUICxAAQABgvgWgaQgWgbgrAAQgWAAgQAIg");
	this.shape_3.setTransform(214.9,244);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("ABkDrQgHgBgFgDIgGgHIirjoIAADoIgCAFQgBADgDABIgKACIgQABIgOgBIgKgCQgDgBgCgDIgBgFIAAm/QAAgDABgCQACgDADgBIAKgCIAOgBIAQABIAKACQADABABADQACACAAADIAADPICljPQABgEADgCQADgCAEgBIAKgCIAQgBIAPABIAKACIAEAEIABAFQAAAEgCAFQgDAFgGAIIiaC5ICmDdIAHANIABAGIgBAFQgBACgDACIgKACIgQABIgVgBg");
	this.shape_4.setTransform(180.9,237.8);

	this.instance = new lib.kenyaai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(257.8,287.3,0.784,0.771,13,0,0,265.3,321.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.JordanButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("ABgCwIgJgCQgEgCgCgCQgBgCAAgDIAAi9QAAgcgEgRQgFgRgIgMQgIgNgNgGQgOgHgRAAQgVAAgWAQQgXAQgZAfIAADiQAAADgBACIgEAEIgKACIgPAAIgOAAIgJgCQgEgCgBgCIgBgFIAAlEIABgFQABgCADgBQAEgCAEAAIAOgBIANABQAFAAADACIAFADIABAFIAAArQAbgfAcgOQAbgOAbAAQAgAAAWALQAXALANASQAOATAGAZQAGAYAAAjIAADFQAAADgBACQgCACgEACIgJACIgOAAIgOAAg");
	this.shape.setTransform(426,254.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AhCCsQgVgHgOgMQgPgNgIgSQgJgTAAgXQAAgcAMgUQALgUAVgNQAVgNAegHQAfgGAkAAIAtAAIAAgaQAAgTgEgOQgEgOgIgKQgJgKgOgEQgPgFgUAAQgVAAgSAFQgRAFgNAHQgOAGgIAFQgJAFgFAAQgDAAgCgBIgDgEQgCgDgBgFIgBgKQAAgJACgFQABgFAFgFQAFgFAMgGQAMgGAPgFQAQgGASgDQASgEASAAQAjAAAZAIQAYAIAQAQQAPAPAHAXQAHAWAAAfIAADaQAAAEgDADQgDACgFABIgPABIgPgBQgGgBgCgCQgDgDAAgEIAAggQgVAWgaANQgbANgcAAQgZAAgVgHgAgSATQgSAEgMAIQgMAIgGAMQgFALAAAPQAAAZAQAPQAQAPAdAAQAWAAAUgMQAUgMAWgYIAAhFIgzAAQgXAAgSAEg");
	this.shape_1.setTransform(387.6,255);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AhNDxQgagOgPgYQgQgYgHggQgIgfAAgkQAAgqAJgiQAKggARgZQASgYAagMQAagNAjAAQAbAAAYANQAYAMAXAYIAAi9QAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAgBQABgCAEgBIAJgCIAOgBIAPABIAJACQADABACACQABABAAABQAAAAAAABQABAAAAABQAAAAAAABIAAHgIgBAFIgFAEIgIACIgMABIgNgBIgIgCQgEgBgBgDIgBgFIAAgqQgaAcgcAPQgbAPggAAQgkABgZgOgAgqgoQgQALgKASQgKAQgEAXQgFAWAAAXQAAAZAEAXQAEAYAJASQAKATAPAKQAQAMAXAAQALAAALgEQALgDAMgIQALgIANgLQANgNAOgRIAAiDQgZgcgWgQQgXgQgXAAQgXAAgQALg");
	this.shape_2.setTransform(350.5,247.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AhPCwIgJgCQgDgCgCgCIgBgFIAAlEIABgFQABgCADgBQAEgCAEAAIAOgBIANABQAFAAADACIAEADIACAFIAAAvQANgTAMgMQAMgNAJgHQAKgHALgCQAKgDAKAAIAMAAIALACIAMAEQAFABADACQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABIACAEIABAHIAAANIAAAOIgCAIIgDAFQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgHgCIgJgDIgMgDQgHgCgIAAQgJAAgIAEQgJADgJAJQgJAIgKAOQgLANgNAUIAADVQABADgCACIgEAEIgKACIgOAAIgPAAg");
	this.shape_3.setTransform(322.4,254.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AhICnQgegMgUgXQgUgXgKggQgJghgBgpQAAgnALghQAKgiAVgYQAUgYAggNQAfgOApAAQAoAAAdAMQAeAMAUAXQAUAXAKAgQAJAhAAApQAAAmgKAiQgKAhgVAYQgVAZgfANQgfAOgoAAQgoAAgegMgAgsh2QgTAJgMARQgNARgFAYQgHAXAAAcQAAAaAGAXQAEAYALARQAMASAUAKQATAKAcAAQAaAAATgJQAUgJAMgRQANgRAFgYQAGgXAAgdQAAgZgFgXQgFgYgMgSQgLgRgSgKQgVgLgcAAQgZAAgUAKg");
	this.shape_4.setTransform(287.8,255);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AglDsQgKgBgJgDIgOgFIgIgGIgDgEIgCgGIgCgHIAAgLIABgNQAAgFABgDIAEgFQACgBADgBQADAAAEADIALAGIAPAHQAIACALAAQAMAAAJgDQAIgDAFgJQAGgHADgPQADgPAAgXIAAlOQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAgBQACgCADgBIAKgDIAPAAIAPAAQAGABAEACIAFADQAAABAAABQABAAAAABQAAAAAAABQAAAAAAABIAAFTQAAAcgFAXQgFAYgMAQQgNARgTAIQgVAJgcAAIgUgCg");
	this.shape_5.setTransform(253.6,249.1);

	this.instance = new lib.jordanai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(350.2,345.8,0.939,0.858,105,0,0,299.9,334.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.IranButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("ABfCwIgJgCQgDgCgBgCQgCgCAAgDIAAi9QAAgcgEgRQgEgRgJgMQgIgNgNgGQgNgHgSAAQgVAAgWAQQgXAQgYAfIAADiQAAADgCACIgEAEIgKACIgPAAIgOAAIgJgCQgDgCgCgCIgBgFIAAlEIABgFQABgCADgBQADgCAFAAIAOgBIANABQAGAAACACIAFADIABAFIAAArQAbgfAbgOQAbgOAbAAQAhAAAWALQAXALANASQAOATAGAZQAGAYAAAjIAADFQAAADgBACQgCACgEACIgJACIgOAAIgPAAg");
	this.shape.setTransform(383.9,422.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AhCCsQgVgHgOgMQgPgNgIgSQgJgTAAgXQAAgcAMgUQALgUAVgNQAVgNAegHQAfgGAkAAIAtAAIAAgaQAAgTgEgOQgEgOgIgKQgJgKgOgEQgPgFgUAAQgVAAgSAFQgRAFgNAHQgOAGgIAFQgJAFgFAAQgDAAgCgBIgDgEQgCgDgBgFIgBgKQAAgJACgFQABgFAFgFQAFgFAMgGQAMgGAPgFQAQgGASgDQASgEASAAQAjAAAZAIQAYAIAQAQQAPAPAHAXQAHAWAAAfIAADaQAAAEgDADQgDACgFABIgPABIgPgBQgGgBgCgCQgDgDAAgEIAAggQgVAWgaANQgbANgcAAQgZAAgVgHgAgSATQgSAEgMAIQgMAIgGAMQgFALAAAPQAAAZAQAPQAQAPAdAAQAWAAAUgMQAUgMAWgYIAAhFIgzAAQgXAAgSAEg");
	this.shape_1.setTransform(345.5,422.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AhPCwIgJgCQgDgCgCgCIgBgFIAAlEIABgFQABgCADgBQADgCAGAAIANgBIAOABQAFAAACACIAFADIAAAFIAAAvQAOgTAMgMQALgNAKgHQALgHAKgCQAKgDALAAIAKAAIAMACIANAEQAEABADACQAAABABAAQAAAAABABQAAAAAAABQAAAAABABIABAEIABAHIAAANIgBAOIgBAIIgCAFQgBABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgHgCIgKgDIgLgDQgHgCgIAAQgIAAgJAEQgJADgJAJQgJAIgLAOQgKANgMAUIAADVQAAADgCACIgFAEIgJACIgPAAIgOAAg");
	this.shape_2.setTransform(319.6,422.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AgODrIgKgCQgDgBgCgDQgBgCAAgDIAAm/QAAgDACgCQABgDAEgBIAKgCIANgBIAPABIAKACQADABACADQABACAAADIAAG/QAAADgBACQgCADgDABIgKACIgPABIgOgBg");
	this.shape_3.setTransform(295.2,416.4);

	this.instance = new lib.iranai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(383.5,394.9,0.795,0.792,120,0,0,377.9,339.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.EthiopiaButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AhCCsQgVgHgOgMQgPgNgIgSQgJgTAAgXQAAgcAMgUQALgUAVgNQAVgNAegHQAfgGAkAAIAtAAIAAgaQAAgTgEgOQgEgOgIgKQgJgKgOgEQgPgFgUAAQgVAAgSAFQgRAFgNAHQgOAGgIAFQgJAFgFAAQgDAAgCgBIgDgEQgCgDgBgFIgBgKQAAgJACgFQABgFAFgFQAFgFAMgGQAMgGAPgFQAQgGASgDQASgEASAAQAjAAAZAIQAYAIAQAQQAPAPAHAXQAHAWAAAfIAADaQAAAEgDADQgDACgFABIgPABIgPgBQgGgBgCgCQgDgDAAgEIAAggQgVAWgaANQgbANgcAAQgZAAgVgHgAgSATQgSAEgMAIQgMAIgGAMQgFALAAAPQAAAZAQAPQAQAPAdAAQAWAAAUgMQAUgMAWgYIAAhFIgzAAQgXAAgSAEg");
	this.shape.setTransform(362.2,299);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgODwIgJgCQgDgBgBgCIgBgFIAAlEIABgFQABgCADgCQAEgBAFgBIAOgBIAPABIAJACIAEAEQACACAAADIAAFEQAAADgCACIgEADIgJACIgPABIgOgBgAgcivQgIgIAAgVQAAgVAIgHQAIgIAUAAQAVAAAIAIQAIAHAAAVQAAAVgIAHQgIAIgVAAQgVAAgHgHg");
	this.shape_1.setTransform(337,292.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AiFDxIgJgDQgEgCgCgCIgBgEIAAnGIABgFQABgCAEgCQADgBAFAAIANgBIAMABQAEAAAEABIAFAEIABAFIAAAsQAOgPAOgMQAOgLAOgHQAOgHAOgEQAOgEARAAQAiAAAZAOQAaANAQAYQAPAYAHAgQAHAgAAAjQABArgKAgQgJAigSAYQgRAYgbANQgbANghgBQgOAAgMgCQgNgDgLgGQgMgHgMgJIgYgWIAACjQAAACgCACIgEAEIgJADIgPAAIgOAAgAgPi5QgLADgMAIQgMAHgMANQgNALgOASIAACBQAZAeAWAPQAWAQAYAAQAWAAAQgLQAQgLAKgSQAKgSAFgVQAFgXgBgXQAAgYgDgYQgEgXgKgSQgIgSgQgLQgQgLgXAAQgLABgLADg");
	this.shape_2.setTransform(310.2,305.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AhICnQgegMgUgXQgUgXgKggQgKghAAgpQAAgnALghQAKgiAVgYQAVgYAegNQAggOApAAQAnAAAeAMQAeAMAUAXQAUAXAKAgQAJAhAAApQAAAmgKAiQgKAhgVAYQgVAZgfANQgfAOgoAAQgoAAgegMgAgsh2QgTAJgMARQgNARgFAYQgHAXABAcQgBAaAGAXQAEAYALARQAMASAUAKQATAKAcAAQAaAAATgJQAUgJAMgRQANgRAFgYQAGgXAAgdQAAgZgFgXQgFgYgLgSQgMgRgSgKQgVgLgcAAQgZAAgUAKg");
	this.shape_3.setTransform(270.2,299);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AgODwIgJgCQgDgBgBgCIgBgFIAAlEIABgFQABgCADgCQAEgBAFgBIAOgBIAPABIAJACIAEAEQACACAAADIAAFEQAAADgCACIgEADIgJACIgPABIgOgBgAgcivQgIgIAAgVQAAgVAIgHQAIgIAUAAQAVAAAIAIQAIAHAAAVQAAAVgIAHQgIAIgVAAQgVAAgHgHg");
	this.shape_4.setTransform(242.2,292.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("ABgD8IgJgCQgEgBgCgCQgBgCAAgDIAAi/QAAgcgEgRQgFgPgIgNQgIgMgNgHQgOgGgRAAQgVAAgXAQQgWAQgZAdIAADkQABADgCACIgEADIgKACIgOABIgPgBIgJgCQgDgBgCgCIgBgFIAAniIABgFQACgCADgCQADgBAGgBIAPgBIAOABIAKACIAEAEIABAFIAADDQAagbAagNQAagOAaAAQAgAAAXALQAWALANATQAOASAGAZQAGAYAAAjIAADGQAAADgBACQgCACgEABIgIACIgPABIgOgBg");
	this.shape_5.setTransform(214.4,291.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AADDVQgRgHgMgNQgLgOgFgVQgGgVAAgcIAAi9IgtAAQgGAAgDgGQgDgFAAgNIABgMIACgIQABgDADgBIAFgBIAtAAIAAhOQAAAAAAgBQAAgBABAAQAAgBAAAAQAAgBABAAQABgDADgBIAJgDIAPAAIAPAAIAIADQADABABADQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAIAABOIBTAAQADAAACABIAEAEIACAIIABAMQAAANgDAFQgDAGgGAAIhTAAIAAC1QAAAhAKARQAKARAZAAIAPgBIAMgEIAIgDQAEgCADAAIADABIADAEIABAHIABAKQAAALgBAGQgCAGgDADIgIAFIgNAFIgQACIgRABQgZAAgSgGg");
	this.shape_6.setTransform(181.8,294.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("AhqDqQgIAAgIgGQgHgFAAgPIAAmgQAAgOAHgFQAIgGAIAAIDdAAQADAAACACIAEAEIACAJIABAMIgBALIgCAIIgEAEQgCACgDAAIi2AAIAACTICcAAQADAAACABIAEAFIACAIIABAMIgBAKIgCAHIgEAFIgFABIicAAIAACnIC4AAQADAAADACQACABACADQACADAAAFIABAMIgBAMQAAAEgCAEIgEAEQgDACgDAAg");
	this.shape_7.setTransform(153.9,292.8);

	this.instance = new lib.ethiopiaai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(268.4,276.2,0.6,0.588,-51.3,0,0,363.9,287.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.ChadButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AhNDwQgagOgPgXQgQgYgHggQgIgfAAgkQAAgqAJgiQAKghARgXQASgZAagMQAagNAjAAQAbAAAYANQAYAMAXAYIAAi9QAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAgBQABgCAEgBIAJgDIAOgBIAPABIAJADQADABACACQABABAAABQAAAAAAABQABAAAAABQAAAAAAABIAAHgIgBAGIgFADIgIACIgMAAIgNAAIgIgCQgEgCgBgBIgBgGIAAgrQgaAdgcAPQgbAQggAAQgkgBgZgOgAgqgoQgQALgKARQgKASgEAWQgFAWAAAYQAAAYAEAXQAEAYAJATQAKARAPALQAQAMAXgBQALABALgEQALgDAMgHQALgJANgLQANgNAOgRIAAiCQgZgdgWgQQgXgPgXAAQgXAAgQAKg");
	this.shape.setTransform(462.1,280.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AhCCsQgVgHgOgMQgPgNgIgSQgJgTAAgXQAAgcAMgUQALgUAVgNQAVgNAegHQAfgGAkAAIAtAAIAAgaQAAgTgEgOQgEgOgIgKQgJgKgOgEQgPgFgUAAQgVAAgSAFQgRAFgNAHQgOAGgIAFQgJAFgFAAQgDAAgCgBIgDgEQgCgDgBgFIgBgKQAAgJACgFQABgFAFgFQAFgFAMgGQAMgGAPgFQAQgGASgDQASgEASAAQAjAAAZAIQAYAIAQAQQAPAPAHAXQAHAWAAAfIAADaQAAAEgDADQgDACgFABIgPABIgPgBQgGgBgCgCQgDgDAAgEIAAggQgVAWgaANQgbANgcAAQgZAAgVgHgAgSATQgSAEgMAIQgMAIgGAMQgFALAAAPQAAAZAQAPQAQAPAdAAQAWAAAUgMQAUgMAWgYIAAhFIgzAAQgXAAgSAEg");
	this.shape_1.setTransform(424.9,288);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("ABfD8IgJgCQgDgBgBgCQgCgCAAgDIAAi/QAAgcgEgRQgFgPgIgNQgIgMgNgHQgNgGgSAAQgVAAgWAQQgXAQgYAdIAADkQAAADgCACIgEADIgKACIgPABIgOgBIgJgCQgDgBgCgCIgBgFIAAniIABgFQACgCADgCQADgBAGgBIAOgBIAPABIAKACIAEAEIACAFIAADDQAZgbAagNQAagOAZAAQAhAAAWALQAXALANATQAOASAGAZQAGAYAAAjIAADGQAAADgBACQgCACgEABIgJACIgOABIgPgBg");
	this.shape_2.setTransform(388.9,280.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("Ag0DgQglgPgagdQgagegOgrQgOgsAAg5QAAg5APguQAPgtAbggQAbgfAmgRQAmgRAtAAQAUAAATAEQATAEARAGQAQAGANAHQAMAIAFAFIAGAHIADAGIABAIIABALIgBANIgCAIQgCAEgCABQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAQgFAAgKgHQgJgHgOgJQgOgIgVgHQgVgHgcAAQgfAAgZAMQgaANgSAYQgSAYgKAjQgKAjAAAsQAAAsAKAiQAJAiASAXQASAXAaAMQAaAMAhAAQAbAAAVgHQAVgHAPgIIAYgQQAKgHAFAAIAFABQABABABAEQACACAAAGIABAOIgBAKIgBAHIgCAGIgFAGIgQALQgLAIgRAHQgSAHgWAFQgWAFgaAAQgtAAgkgQg");
	this.shape_3.setTransform(350.4,281.8);

	this.instance = new lib.chadai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(377.6,365.4,0.841,0.889,-60,0,0,335.3,324.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.AfghanistanButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("ABgCwIgJgCQgEgCgCgCQgBgCAAgDIAAi9QAAgcgEgRQgFgRgIgMQgIgNgNgGQgOgHgRAAQgVAAgXAQQgWAQgZAfIAADiQABADgCACIgFAEIgJACIgOAAIgPAAIgJgCQgEgCgBgCIgBgFIAAlEIABgFQABgCADgBQAEgCAFAAIANgBIAOABQAEAAADACIAEADIABAFIAAArQAcgfAcgOQAbgOAbAAQAgAAAXALQAVALAOASQAOATAGAZQAGAYAAAjIAADFQAAADgCACQgBACgDACIgJACIgPAAIgOAAg");
	this.shape.setTransform(640.4,433.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AhCCsQgVgHgOgMQgPgNgIgSQgJgTAAgXQAAgcAMgUQALgUAVgNQAVgNAegHQAfgGAkAAIAtAAIAAgaQAAgTgEgOQgEgOgIgKQgJgKgOgEQgPgFgUAAQgVAAgSAFQgRAFgNAHQgOAGgIAFQgJAFgFAAQgDAAgCgBIgDgEQgCgDgBgFIgBgKQAAgJACgFQABgFAFgFQAFgFAMgGQAMgGAPgFQAQgGASgDQASgEASAAQAjAAAZAIQAYAIAQAQQAPAPAHAXQAHAWAAAfIAADaQAAAEgDADQgDACgFABIgPABIgPgBQgGgBgCgCQgDgDAAgEIAAggQgVAWgaANQgbANgcAAQgZAAgVgHgAgSATQgSAEgMAIQgMAIgGAMQgFALAAAPQAAAZAQAPQAQAPAdAAQAWAAAUgMQAUgMAWgYIAAhFIgzAAQgXAAgSAEg");
	this.shape_1.setTransform(602.1,433.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AADDVQgRgHgMgNQgLgOgFgVQgGgVAAgcIAAi9IgtAAQgGAAgDgGQgDgFAAgNIABgMIACgIQABgDADgBIAFgBIAtAAIAAhOQAAAAAAgBQAAgBABAAQAAgBAAAAQAAgBABAAQABgDADgBIAJgDIAPAAIAPAAIAIADQADABABADQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAIAABOIBTAAQADAAACABIAEAEIACAIIABAMQAAANgDAFQgDAGgGAAIhTAAIAAC1QAAAhAKARQAKARAZAAIAPgBIAMgEIAIgDQAEgCADAAIADABIADAEIABAHIABAKQAAALgBAGQgCAGgDADIgIAFIgNAFIgQACIgRABQgZAAgSgGg");
	this.shape_2.setTransform(573.3,429.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AgsCwQgRgDgLgEIgWgIIgMgJQgFgDgCgHQgBgGAAgMIAAgLIACgIQABgDADgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAEAAAIAFIATAKQALAGAPAFQAQAFAUAAQAPAAAMgDQAMgEAJgGQAKgGAEgKQAFgKAAgNQAAgOgHgJQgHgKgMgHQgLgHgPgGIgcgLIgegOQgPgHgLgLQgMgMgHgPQgHgQAAgVQgBgTAJgSQAGgRAPgNQAPgOAWgIQAXgIAcAAQANAAANACIAXAGIATAHIALAHIAFAFIACAFIABAGIABAKIgBALIgCAHIgDAEIgEABQgDAAgGgEQgHgEgJgEQgKgFgNgEQgOgDgQAAQgOAAgMADQgMADgHAHQgIAGgDAJQgEAIAAAKQAAAPAHAJQAIAKALAHQALAHAOAGIAeAMIAfAOQAOAGANALQALALAHAPQAHAPAAAVQAAAZgJAUQgKATgQAOQgSANgXAHQgYAHgbAAQgRAAgPgDg");
	this.shape_3.setTransform(547.9,433.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AgODwIgJgCQgDgBgBgCIgCgFIAAlEIACgFQABgCADgCQAEgBAFgBIAOgBIAOABIAKACIAFAEQABACAAADIAAFEQAAADgBACIgFADIgKACIgOABIgOgBgAgcivQgIgIAAgVQAAgVAIgHQAIgIAVAAQAUAAAIAIQAIAHAAAVQAAAVgIAHQgIAIgVAAQgUAAgIgHg");
	this.shape_4.setTransform(524.9,427);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("ABfCwIgJgCQgDgCgBgCQgCgCAAgDIAAi9QAAgcgEgRQgFgRgIgMQgIgNgNgGQgOgHgRAAQgVAAgXAQQgWAQgYAfIAADiQgBADgBACIgFAEIgJACIgOAAIgPAAIgJgCQgEgCgBgCIgBgFIAAlEIABgFQABgCADgBQAEgCAFAAIANgBIAOABQAEAAADACIAEADIABAFIAAArQAcgfAbgOQAbgOAbAAQAhAAAXALQAVALAOASQAOATAGAZQAGAYAAAjIAADFQAAADgCACQgBACgDACIgJACIgPAAIgPAAg");
	this.shape_5.setTransform(497.1,433.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AhCCsQgVgHgOgMQgPgNgIgSQgJgTAAgXQAAgcAMgUQALgUAVgNQAVgNAegHQAfgGAkAAIAtAAIAAgaQAAgTgEgOQgEgOgIgKQgJgKgOgEQgPgFgUAAQgVAAgSAFQgRAFgNAHQgOAGgIAFQgJAFgFAAQgDAAgCgBIgDgEQgCgDgBgFIgBgKQAAgJACgFQABgFAFgFQAFgFAMgGQAMgGAPgFQAQgGASgDQASgEASAAQAjAAAZAIQAYAIAQAQQAPAPAHAXQAHAWAAAfIAADaQAAAEgDADQgDACgFABIgPABIgPgBQgGgBgCgCQgDgDAAgEIAAggQgVAWgaANQgbANgcAAQgZAAgVgHgAgSATQgSAEgMAIQgMAIgGAMQgFALAAAPQAAAZAQAPQAQAPAdAAQAWAAAUgMQAUgMAWgYIAAhFIgzAAQgXAAgSAEg");
	this.shape_6.setTransform(458.8,433.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("ABgD8IgJgCQgEgBgCgCQgBgCAAgDIAAi/QAAgcgEgRQgFgPgIgNQgIgMgNgHQgOgGgRAAQgVAAgWAQQgXAQgZAdIAADkQAAADgBACIgEADIgKACIgPABIgOgBIgJgCQgDgBgCgCIgBgFIAAniIABgFQACgCADgCQADgBAGgBIAOgBIAPABIAKACIAEAEIABAFIAADDQAagbAagNQAagOAaAAQAgAAAWALQAXALANATQAOASAGAZQAGAYAAAjIAADGQAAADgBACQgCACgEABIgJACIgOABIgOgBg");
	this.shape_7.setTransform(422.8,425.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCCC").s().p("AhJDrQgcgIgSgLQgSgMgIgPQgIgRAAgSQAAgNADgLQADgLAGgKQAGgKAJgJQAJgKALgIQgSgKgIgOQgJgNAAgQQABgVAIgRQAJgSAOgOQgMgNgGgQQgGgSgBgXQAAgcAKgWQAJgWARgPQAQgQAYgIQAYgIAbAAQANAAANACQANACAMADIBiAAQAGAAADAFQADAHAAALQAAANgDAGQgEAFgFAAIgvAAQANANAFAQQAFAQAAARQAAAcgJAVQgJAWgRAQQgRAPgXAHQgXAJgbgBQgUAAgSgFQgSgFgJgIQgHAHgEAIQgEAIgBAKQABAMAMAJQALAIATABIBUADQAYABAVAGQAUAGAPALQAPALAIAQQAJARAAAUQAAAXgKAUQgKAVgSAPQgUAPgeAJQgeAJgoAAQgnAAgbgGgAhLBnQgHAIgFAHQgEAIgBAHQgCAHgBAHQAAAYAYAMQAZANAqAAQAagBATgFQARgFAMgJQALgJAFgLQAFgLAAgMQAAgVgRgMQgSgLgdAAIhTgEQgLAJgIAJgAgmi8QgNAFgJALQgIAJgEAOQgEANgBAOQABAhASASQASATAhAAQARgBANgFQANgGAIgJQAJgKAEgOQAEgNAAgOQAAghgSgTQgTgSghAAQgQAAgNAGg");
	this.shape_8.setTransform(385.7,440);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("AgkD9IgJgBQgEgCgBgCQgBgCgBgDIAAkcIgtAAQgGAAgDgGQgDgFAAgNIABgNIACgHQABgDACgBQACgCAEABIAtAAIAAgiQABgiAGgYQAGgZANgQQANgPATgHQATgIAbAAQANAAALADIATAFIAJAEIAEAGIABAJIABALIgBALIgBAHIgDADIgEABIgGgCIgJgDIgNgEQgHgCgKAAQgOABgIAEQgKAFgGAIQgFAKgDAPQgCAOAAAVIAAAkIBIAAQADgBACACQACABACADIACAHIABANQAAANgDAFQgEAGgFAAIhIAAIAAEcQAAADgCACQgBACgEACIgIABIgPABIgOgBg");
	this.shape_9.setTransform(360.3,425.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCCCCC").s().p("ACZDsIgKgCQgEgCgBgCIgDgFIgohyIjCAAIgmBwIgDAGIgFAEIgKACIgQABIgRgBQgHgBgDgCQgDgDABgFQAAgFADgIICcmxQACgEACgCQADgDAEgBIAMgCIASgBIASABIAMACQAFABACADQADACABAEICdGyIADANQAAAEgDADQgDACgGABIgSABIgSAAgAhTA9IChAAIhQjoIgBAAg");
	this.shape_10.setTransform(326.6,427.5);

	this.instance = new lib.Afghanistanai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(413.5,399,0.807,0.788,-142.2,0,0,409.1,315.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.portraitofharbor2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.AFGbutt.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndStop(10);
		}
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.CHADbutt.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_3()
		{
			this.gotoAndStop(20);
		}
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.ETHbutt.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			this.gotoAndStop(30);
		}
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.IRANbutt.addEventListener("click", fl_ClickToGoToAndStopAtFrame_5.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_5()
		{
			this.gotoAndStop(40);
		}
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.JORbutt.addEventListener("click", fl_ClickToGoToAndStopAtFrame_6.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_6()
		{
			this.gotoAndStop(50);
		}
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.KENbutt.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_7()
		{
			this.gotoAndStop(60);
		}
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.LEBbutt.addEventListener("click", fl_ClickToGoToAndStopAtFrame_8.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_8()
		{
			this.gotoAndStop(70);
		}
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.PAKbutt.addEventListener("click", fl_ClickToGoToAndStopAtFrame_9.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_9()
		{
			this.gotoAndStop(80);
		}
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.SOMbutt.addEventListener("click", fl_ClickToGoToAndStopAtFrame_10.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_10()
		{
			this.gotoAndStop(90);
		}
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.SOUTHbutt.addEventListener("click", fl_ClickToGoToAndStopAtFrame_11.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_11()
		{
			this.gotoAndStop(100);
		}
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.SUDbutt.addEventListener("click", fl_ClickToGoToAndStopAtFrame_12.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_12()
		{
			this.gotoAndStop(110);
		}
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.SYRbutt.addEventListener("click", fl_ClickToGoToAndStopAtFrame_13.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_13()
		{
			this.gotoAndStop(120);
		}
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.TURKbutt.addEventListener("click", fl_ClickToGoToAndStopAtFrame_14.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_14()
		{
			this.gotoAndStop(130);
		}
	}
	this.frame_9 = function() {
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.button_1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_15.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_15()
		{
			this.gotoAndStop(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(131));

	// Home
	this.button_1 = new lib.HomeButton();
	this.button_1.parent = this;
	this.button_1.setTransform(807.4,1147.1,1,1,0,0,0,42.6,47.1);
	this.button_1._off = true;
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.HomeButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(9).to({_off:false},0).wait(131));

	// Arrows
	this.instance = new lib.nubluelong1ai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(2114.3,1343.5,0.879,0.976,0,109,-71,485,104.1);

	this.instance_1 = new lib.redlong1ai("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1823.4,1217.2,0.881,0.91,0,-67.7,112.3,449.8,120.9);

	this.instance_2 = new lib.redxtralong2ai("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(2284.7,1383.4,2.121,1.829,-137.4,0,0,678.7,284.5);

	this.instance_3 = new lib.nubluextralong2ai("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(2322.3,1014.2,1.97,1.641,0,-140.1,41.1,688.7,163.5);

	this.instance_4 = new lib.redlong2ai("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(2203.9,1369.8,1.999,1.948,-132.8,0,0,457.7,126);

	this.instance_5 = new lib.greenshort2ai("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(3222.3,1736,1.331,1.266,120,0,0,256.4,97.2);

	this.instance_6 = new lib.nublueshort1ai("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(2435.4,1479.4,0.831,0.884,0,-101.6,78.4,253.8,91.5);

	this.instance_7 = new lib.redxshort2ai("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(1720.6,302,0.707,0.823,-18.5,0,0,263.7,117.4);

	this.instance_8 = new lib.nubluelong2ai("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(1917,1193.8,1.127,1.27,-161.5,0,0,402.9,108.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1,p:{regX:449.8,scaleX:0.881,scaleY:0.91,skewX:-67.7,skewY:112.3,x:1823.4,y:1217.2}},{t:this.instance}]},9).to({state:[{t:this.instance_3},{t:this.instance_2,p:{regX:678.7,regY:284.5,scaleX:2.121,scaleY:1.829,rotation:-137.4,x:2284.7,y:1383.4}}]},10).to({state:[{t:this.instance_5,p:{regY:97.2,scaleX:1.331,scaleY:1.266,rotation:120,skewX:0,skewY:0,x:3222.3,y:1736,regX:256.4}},{t:this.instance_4,p:{regX:457.7,regY:126,scaleX:1.999,scaleY:1.948,rotation:-132.8,skewX:0,skewY:0,x:2203.9,y:1369.8}}]},10).to({state:[{t:this.instance_5,p:{regY:97,scaleX:0.733,scaleY:0.695,rotation:0,skewX:-45,skewY:135,x:1980.5,y:1025.1,regX:256.4}}]},10).to({state:[{t:this.instance_5,p:{regY:97.3,scaleX:1,scaleY:0.794,rotation:0,skewX:-135,skewY:45,x:2740.8,y:1505.6,regX:256.4}}]},10).to({state:[{t:this.instance_4,p:{regX:458.1,regY:125.9,scaleX:2.117,scaleY:1.686,rotation:0,skewX:-131,skewY:49,x:2116,y:1357.1}},{t:this.instance_5,p:{regY:97.3,scaleX:0.757,scaleY:1,rotation:0,skewX:-15,skewY:165,x:1785.8,y:380.1,regX:256.4}}]},10).to({state:[{t:this.instance_6}]},10).to({state:[{t:this.instance_1,p:{regX:449.8,scaleX:0.881,scaleY:0.91,skewX:-67.7,skewY:112.3,x:1823.4,y:1217.2}},{t:this.instance}]},10).to({state:[{t:this.instance_7}]},10).to({state:[{t:this.instance_5,p:{regY:97.2,scaleX:0.729,scaleY:0.996,rotation:0,skewX:81.4,skewY:-98.6,x:3578.8,y:1591.6,regX:256.3}},{t:this.instance_1,p:{regX:449.7,scaleX:0.622,scaleY:1.097,skewX:-55.7,skewY:124.3,x:3026.4,y:1614.6}}]},10).to({state:[{t:this.instance_2,p:{regX:678.8,regY:284.9,scaleX:2.074,scaleY:1.881,rotation:-138.5,x:2352.3,y:1352.5}},{t:this.instance_5,p:{regY:97.3,scaleX:0.774,scaleY:1.103,rotation:52,skewX:0,skewY:0,x:3538.9,y:1564.6,regX:256.4}}]},10).to({state:[{t:this.instance_4,p:{regX:457.9,regY:125.9,scaleX:1.112,scaleY:1.544,rotation:-154.6,skewX:0,skewY:0,x:1917.1,y:1212.8}}]},10).to({state:[{t:this.instance_8}]},10).wait(11));

	// Details
	this.instance_9 = new lib.afghanpsd("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(525.1,1750.1,1.3,1.3,0,0,0,250.1,500.1);

	this.instance_10 = new lib.chadpsd("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(525,1750,1.3,1.3,0,0,0,250,500);

	this.instance_11 = new lib.ethiopiapsd("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(525,1750.1,1.3,1.3,0,0,0,250,500.1);

	this.instance_12 = new lib.iranpsd("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(525.2,1750,1.3,1.3,0,0,0,250.1,500);

	this.instance_13 = new lib.jordanpsd("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(525.2,1750,1.3,1.3,0,0,0,250.1,500);

	this.instance_14 = new lib.kenyapsd("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(525,1750,1.3,1.3,0,0,0,250,500);

	this.instance_15 = new lib.lebanonpsd("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(525,1750,1.3,1.3,0,0,0,250,500);

	this.instance_16 = new lib.pakistanpsd("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(525,1750,1.3,1.3,0,0,0,250,500);

	this.instance_17 = new lib.somaliapsd("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(525.6,1750.5,1.3,1.3,0,0,0,250.5,500.4);

	this.instance_18 = new lib.southsudanpsd("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(525,1750,1.3,1.3,0,0,0,250,500);

	this.instance_19 = new lib.sudanpsd("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(525,1750,1.3,1.3,0,0,0,250,500);

	this.instance_20 = new lib.syriapsd("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(525,1750,1.3,1.3,0,0,0,250,500);

	this.instance_21 = new lib.turkeypsd("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(525,1750,1.3,1.3,0,0,0,250,500);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},9).to({state:[{t:this.instance_10}]},10).to({state:[{t:this.instance_11}]},10).to({state:[{t:this.instance_12}]},10).to({state:[{t:this.instance_13}]},10).to({state:[{t:this.instance_14}]},10).to({state:[{t:this.instance_15}]},10).to({state:[{t:this.instance_16}]},10).to({state:[{t:this.instance_17}]},10).to({state:[{t:this.instance_18}]},10).to({state:[{t:this.instance_19}]},10).to({state:[{t:this.instance_20}]},10).to({state:[{t:this.instance_21}]},10).wait(11));

	// buttons
	this.AFGbutt = new lib.AfghanistanButton();
	this.AFGbutt.parent = this;
	this.AFGbutt.setTransform(2094.4,886.1,1,1,0,0,0,413.4,398.9);
	new cjs.ButtonHelper(this.AFGbutt, 0, 1, 2, false, new lib.AfghanistanButton(), 3);

	this.CHADbutt = new lib.ChadButton();
	this.CHADbutt.parent = this;
	this.CHADbutt.setTransform(1298.4,365.3,1,1,0,0,0,377.3,365.3);
	new cjs.ButtonHelper(this.CHADbutt, 0, 1, 2, false, new lib.ChadButton(), 3);

	this.ETHbutt = new lib.EthiopiaButton();
	this.ETHbutt.parent = this;
	this.ETHbutt.setTransform(2892,1892.7,1,1,0,0,0,268.3,276);
	new cjs.ButtonHelper(this.ETHbutt, 0, 1, 2, false, new lib.EthiopiaButton(), 3);

	this.IRANbutt = new lib.IranButton();
	this.IRANbutt.parent = this;
	this.IRANbutt.setTransform(1910.4,1253.6,1,1,0,0,0,383.3,394.9);
	new cjs.ButtonHelper(this.IRANbutt, 0, 1, 2, false, new lib.IranButton(), 3);

	this.JORbutt = new lib.JordanButton();
	this.JORbutt.parent = this;
	this.JORbutt.setTransform(3048.5,1723.7,1,1,0,0,0,350.2,345.7);
	new cjs.ButtonHelper(this.JORbutt, 0, 1, 2, false, new lib.JordanButton(), 3);

	this.KENbutt = new lib.KenyaButton();
	this.KENbutt.parent = this;
	this.KENbutt.setTransform(1679.7,574.7,1,1,0,0,0,257.8,287.3);
	new cjs.ButtonHelper(this.KENbutt, 0, 1, 2, false, new lib.KenyaButton(), 3);

	this.LEBbutt = new lib.LebanonButton();
	this.LEBbutt.parent = this;
	this.LEBbutt.setTransform(2446.6,1646.2,1,1,0,0,0,406,320.4);
	new cjs.ButtonHelper(this.LEBbutt, 0, 1, 2, false, new lib.LebanonButton(), 3);

	this.PAKbutt = new lib.PakisatanButton();
	this.PAKbutt.parent = this;
	this.PAKbutt.setTransform(1734.8,1686.4,1,1,0,0,0,499.3,476.8);
	new cjs.ButtonHelper(this.PAKbutt, 0, 1, 2, false, new lib.PakisatanButton(), 3);

	this.SOMbutt = new lib.SomaliaButton();
	this.SOMbutt.parent = this;
	this.SOMbutt.setTransform(1938,448,1,1,0,0,0,210,227);
	new cjs.ButtonHelper(this.SOMbutt, 0, 1, 2, false, new lib.SomaliaButton(), 3);

	this.SOUTHbutt = new lib.SouthSudanButton();
	this.SOUTHbutt.parent = this;
	this.SOUTHbutt.setTransform(3320.7,1382.8,1,1,0,0,0,379.3,352.9);
	new cjs.ButtonHelper(this.SOUTHbutt, 0, 1, 2, false, new lib.SouthSudanButton(), 3);

	this.SUDbutt = new lib.SudanButton2();
	this.SUDbutt.parent = this;
	this.SUDbutt.setTransform(3529.8,1841.9,1,1,0,0,0,339.3,326.9);
	new cjs.ButtonHelper(this.SUDbutt, 0, 1, 2, false, new lib.SudanButton2(), 3);

	this.SYRbutt = new lib.SyriaButton();
	this.SYRbutt.parent = this;
	this.SYRbutt.setTransform(2534.7,1349.9,1,1,0,0,0,472.3,456.2);
	new cjs.ButtonHelper(this.SYRbutt, 0, 1, 2, false, new lib.SyriaButton(), 3);

	this.TURKbutt = new lib.TurkeyButton();
	this.TURKbutt.parent = this;
	this.TURKbutt.setTransform(1349.8,789,1,1,0,0,0,545.4,501.6);
	new cjs.ButtonHelper(this.TURKbutt, 0, 1, 2, false, new lib.TurkeyButton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.TURKbutt},{t:this.SYRbutt},{t:this.SUDbutt},{t:this.SOUTHbutt},{t:this.SOMbutt},{t:this.PAKbutt},{t:this.LEBbutt},{t:this.KENbutt},{t:this.JORbutt},{t:this.IRANbutt},{t:this.ETHbutt},{t:this.CHADbutt},{t:this.AFGbutt}]}).wait(140));

	// BG
	this.instance_22 = new lib.Portrait_1_consudan();
	this.instance_22.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(140));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2100,1275,4200,2550);
// library properties:
lib.properties = {
	width: 4200,
	height: 2550,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/portrait_of_harbor_2_atlas_.png", id:"portrait_of_harbor_2_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;