gdjs.game_32overCode = {};
gdjs.game_32overCode.localVariables = [];
gdjs.game_32overCode.idToCallbackMap = new Map();
gdjs.game_32overCode.GDperdeuObjects1= [];
gdjs.game_32overCode.GDperdeuObjects2= [];
gdjs.game_32overCode.GDfimObjects1= [];
gdjs.game_32overCode.GDfimObjects2= [];
gdjs.game_32overCode.GDde_9595novoObjects1= [];
gdjs.game_32overCode.GDde_9595novoObjects2= [];
gdjs.game_32overCode.GDfogoObjects1= [];
gdjs.game_32overCode.GDfogoObjects2= [];
gdjs.game_32overCode.GDplacarObjects1= [];
gdjs.game_32overCode.GDplacarObjects2= [];
gdjs.game_32overCode.GDvoltar_9595IObjects1= [];
gdjs.game_32overCode.GDvoltar_9595IObjects2= [];
gdjs.game_32overCode.GDPontua_95231_95227oObjects1= [];
gdjs.game_32overCode.GDPontua_95231_95227oObjects2= [];


gdjs.game_32overCode.mapOfGDgdjs_9546game_959532overCode_9546GDvoltar_95959595IObjects1Objects = Hashtable.newFrom({"voltar_I": gdjs.game_32overCode.GDvoltar_9595IObjects1});
gdjs.game_32overCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasTouchEnded(runtimeScene, 1);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "início", false);
}
}

}


};gdjs.game_32overCode.eventsList1 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(runtimeScene.getObjects("voltar_I"), gdjs.game_32overCode.GDvoltar_9595IObjects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.game_32overCode.mapOfGDgdjs_9546game_959532overCode_9546GDvoltar_95959595IObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.game_32overCode.GDvoltar_9595IObjects1 */
{for(var i = 0, len = gdjs.game_32overCode.GDvoltar_9595IObjects1.length ;i < len;++i) {
    gdjs.game_32overCode.GDvoltar_9595IObjects1[i].getBehavior("Effect").enableEffect("AdvancedBloom", true);
}
}

{ //Subevents
gdjs.game_32overCode.eventsList0(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("voltar_I"), gdjs.game_32overCode.GDvoltar_9595IObjects1);
{for(var i = 0, len = gdjs.game_32overCode.GDvoltar_9595IObjects1.length ;i < len;++i) {
    gdjs.game_32overCode.GDvoltar_9595IObjects1[i].getBehavior("Effect").enableEffect("AdvancedBloom", false);
}
}
elseEventsChainSatisfied = true;
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Pontuação"), gdjs.game_32overCode.GDPontua_95231_95227oObjects1);
{for(var i = 0, len = gdjs.game_32overCode.GDPontua_95231_95227oObjects1.length ;i < len;++i) {
    gdjs.game_32overCode.GDPontua_95231_95227oObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
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

gdjs.game_32overCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.game_32overCode.GDperdeuObjects1.length = 0;
gdjs.game_32overCode.GDperdeuObjects2.length = 0;
gdjs.game_32overCode.GDfimObjects1.length = 0;
gdjs.game_32overCode.GDfimObjects2.length = 0;
gdjs.game_32overCode.GDde_9595novoObjects1.length = 0;
gdjs.game_32overCode.GDde_9595novoObjects2.length = 0;
gdjs.game_32overCode.GDfogoObjects1.length = 0;
gdjs.game_32overCode.GDfogoObjects2.length = 0;
gdjs.game_32overCode.GDplacarObjects1.length = 0;
gdjs.game_32overCode.GDplacarObjects2.length = 0;
gdjs.game_32overCode.GDvoltar_9595IObjects1.length = 0;
gdjs.game_32overCode.GDvoltar_9595IObjects2.length = 0;
gdjs.game_32overCode.GDPontua_95231_95227oObjects1.length = 0;
gdjs.game_32overCode.GDPontua_95231_95227oObjects2.length = 0;

gdjs.game_32overCode.eventsList1(runtimeScene);
gdjs.game_32overCode.GDperdeuObjects1.length = 0;
gdjs.game_32overCode.GDperdeuObjects2.length = 0;
gdjs.game_32overCode.GDfimObjects1.length = 0;
gdjs.game_32overCode.GDfimObjects2.length = 0;
gdjs.game_32overCode.GDde_9595novoObjects1.length = 0;
gdjs.game_32overCode.GDde_9595novoObjects2.length = 0;
gdjs.game_32overCode.GDfogoObjects1.length = 0;
gdjs.game_32overCode.GDfogoObjects2.length = 0;
gdjs.game_32overCode.GDplacarObjects1.length = 0;
gdjs.game_32overCode.GDplacarObjects2.length = 0;
gdjs.game_32overCode.GDvoltar_9595IObjects1.length = 0;
gdjs.game_32overCode.GDvoltar_9595IObjects2.length = 0;
gdjs.game_32overCode.GDPontua_95231_95227oObjects1.length = 0;
gdjs.game_32overCode.GDPontua_95231_95227oObjects2.length = 0;


return;

}

gdjs['game_32overCode'] = gdjs.game_32overCode;
