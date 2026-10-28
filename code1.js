gdjs.in_237cioCode = {};
gdjs.in_237cioCode.localVariables = [];
gdjs.in_237cioCode.idToCallbackMap = new Map();
gdjs.in_237cioCode.GDbkObjects1= [];
gdjs.in_237cioCode.GDbkObjects2= [];
gdjs.in_237cioCode.GDenfeiteObjects1= [];
gdjs.in_237cioCode.GDenfeiteObjects2= [];
gdjs.in_237cioCode.GDNewTextObjects1= [];
gdjs.in_237cioCode.GDNewTextObjects2= [];
gdjs.in_237cioCode.GDiconeObjects1= [];
gdjs.in_237cioCode.GDiconeObjects2= [];
gdjs.in_237cioCode.GDjogarObjects1= [];
gdjs.in_237cioCode.GDjogarObjects2= [];
gdjs.in_237cioCode.GDsairObjects1= [];
gdjs.in_237cioCode.GDsairObjects2= [];
gdjs.in_237cioCode.GDNewText2Objects1= [];
gdjs.in_237cioCode.GDNewText2Objects2= [];
gdjs.in_237cioCode.GDPontua_95231_95227oObjects1= [];
gdjs.in_237cioCode.GDPontua_95231_95227oObjects2= [];


gdjs.in_237cioCode.mapOfGDgdjs_9546in_9595237cioCode_9546GDjogarObjects1Objects = Hashtable.newFrom({"jogar": gdjs.in_237cioCode.GDjogarObjects1});
gdjs.in_237cioCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasTouchEnded(runtimeScene, 1);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Príncipal", false);
}
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "musica_coneco.wav", 1, true, 100, 1);
}
}

}


};gdjs.in_237cioCode.mapOfGDgdjs_9546in_9595237cioCode_9546GDsairObjects1Objects = Hashtable.newFrom({"sair": gdjs.in_237cioCode.GDsairObjects1});
gdjs.in_237cioCode.eventsList1 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("icone"), gdjs.in_237cioCode.GDiconeObjects1);
{for(var i = 0, len = gdjs.in_237cioCode.GDiconeObjects1.length ;i < len;++i) {
    gdjs.in_237cioCode.GDiconeObjects1[i].rotate(-25, runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("jogar"), gdjs.in_237cioCode.GDjogarObjects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.in_237cioCode.mapOfGDgdjs_9546in_9595237cioCode_9546GDjogarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.in_237cioCode.GDjogarObjects1 */
{for(var i = 0, len = gdjs.in_237cioCode.GDjogarObjects1.length ;i < len;++i) {
    gdjs.in_237cioCode.GDjogarObjects1[i].getBehavior("Effect").enableEffect("AdvancedBloom", true);
}
}

{ //Subevents
gdjs.in_237cioCode.eventsList0(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("jogar"), gdjs.in_237cioCode.GDjogarObjects1);
{for(var i = 0, len = gdjs.in_237cioCode.GDjogarObjects1.length ;i < len;++i) {
    gdjs.in_237cioCode.GDjogarObjects1[i].getBehavior("Effect").enableEffect("AdvancedBloom", false);
}
}
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("sair"), gdjs.in_237cioCode.GDsairObjects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.in_237cioCode.mapOfGDgdjs_9546in_9595237cioCode_9546GDsairObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.in_237cioCode.GDsairObjects1 */
{for(var i = 0, len = gdjs.in_237cioCode.GDsairObjects1.length ;i < len;++i) {
    gdjs.in_237cioCode.GDsairObjects1[i].getBehavior("Effect").enableEffect("AdvancedBloom", true);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("sair"), gdjs.in_237cioCode.GDsairObjects1);
{for(var i = 0, len = gdjs.in_237cioCode.GDsairObjects1.length ;i < len;++i) {
    gdjs.in_237cioCode.GDsairObjects1[i].getBehavior("Effect").enableEffect("AdvancedBloom", false);
}
}
elseEventsChainSatisfied = true;
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "efeito_sonoro_coneco.wav", false, 30, 1);
}
}

}

}

};

gdjs.in_237cioCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.in_237cioCode.GDbkObjects1.length = 0;
gdjs.in_237cioCode.GDbkObjects2.length = 0;
gdjs.in_237cioCode.GDenfeiteObjects1.length = 0;
gdjs.in_237cioCode.GDenfeiteObjects2.length = 0;
gdjs.in_237cioCode.GDNewTextObjects1.length = 0;
gdjs.in_237cioCode.GDNewTextObjects2.length = 0;
gdjs.in_237cioCode.GDiconeObjects1.length = 0;
gdjs.in_237cioCode.GDiconeObjects2.length = 0;
gdjs.in_237cioCode.GDjogarObjects1.length = 0;
gdjs.in_237cioCode.GDjogarObjects2.length = 0;
gdjs.in_237cioCode.GDsairObjects1.length = 0;
gdjs.in_237cioCode.GDsairObjects2.length = 0;
gdjs.in_237cioCode.GDNewText2Objects1.length = 0;
gdjs.in_237cioCode.GDNewText2Objects2.length = 0;
gdjs.in_237cioCode.GDPontua_95231_95227oObjects1.length = 0;
gdjs.in_237cioCode.GDPontua_95231_95227oObjects2.length = 0;

gdjs.in_237cioCode.eventsList1(runtimeScene);
gdjs.in_237cioCode.GDbkObjects1.length = 0;
gdjs.in_237cioCode.GDbkObjects2.length = 0;
gdjs.in_237cioCode.GDenfeiteObjects1.length = 0;
gdjs.in_237cioCode.GDenfeiteObjects2.length = 0;
gdjs.in_237cioCode.GDNewTextObjects1.length = 0;
gdjs.in_237cioCode.GDNewTextObjects2.length = 0;
gdjs.in_237cioCode.GDiconeObjects1.length = 0;
gdjs.in_237cioCode.GDiconeObjects2.length = 0;
gdjs.in_237cioCode.GDjogarObjects1.length = 0;
gdjs.in_237cioCode.GDjogarObjects2.length = 0;
gdjs.in_237cioCode.GDsairObjects1.length = 0;
gdjs.in_237cioCode.GDsairObjects2.length = 0;
gdjs.in_237cioCode.GDNewText2Objects1.length = 0;
gdjs.in_237cioCode.GDNewText2Objects2.length = 0;
gdjs.in_237cioCode.GDPontua_95231_95227oObjects1.length = 0;
gdjs.in_237cioCode.GDPontua_95231_95227oObjects2.length = 0;


return;

}

gdjs['in_237cioCode'] = gdjs.in_237cioCode;
