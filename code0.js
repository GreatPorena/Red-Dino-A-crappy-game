gdjs.Scena_32bez_32tytu_322uCode = {};
gdjs.Scena_32bez_32tytu_322uCode.localVariables = [];
gdjs.Scena_32bez_32tytu_322uCode.idToCallbackMap = new Map();
gdjs.Scena_32bez_32tytu_322uCode.GDPlayerObjects1= [];
gdjs.Scena_32bez_32tytu_322uCode.GDPlayerObjects2= [];
gdjs.Scena_32bez_32tytu_322uCode.GDMouse_9595CursorObjects1= [];
gdjs.Scena_32bez_32tytu_322uCode.GDMouse_9595CursorObjects2= [];
gdjs.Scena_32bez_32tytu_322uCode.GDPlatform_9595DirtObjects1= [];
gdjs.Scena_32bez_32tytu_322uCode.GDPlatform_9595DirtObjects2= [];
gdjs.Scena_32bez_32tytu_322uCode.GDPlatform_9595Dirt2Objects1= [];
gdjs.Scena_32bez_32tytu_322uCode.GDPlatform_9595Dirt2Objects2= [];
gdjs.Scena_32bez_32tytu_322uCode.GDBoundaryObjects1= [];
gdjs.Scena_32bez_32tytu_322uCode.GDBoundaryObjects2= [];
gdjs.Scena_32bez_32tytu_322uCode.GDLeft_9595arrow_9595buttonObjects1= [];
gdjs.Scena_32bez_32tytu_322uCode.GDLeft_9595arrow_9595buttonObjects2= [];
gdjs.Scena_32bez_32tytu_322uCode.GDRight_9595arrow_9595buttonObjects1= [];
gdjs.Scena_32bez_32tytu_322uCode.GDRight_9595arrow_9595buttonObjects2= [];
gdjs.Scena_32bez_32tytu_322uCode.GDTop_9595arrow_9595buttonObjects1= [];
gdjs.Scena_32bez_32tytu_322uCode.GDTop_9595arrow_9595buttonObjects2= [];
gdjs.Scena_32bez_32tytu_322uCode.GDTrophyObjects1= [];
gdjs.Scena_32bez_32tytu_322uCode.GDTrophyObjects2= [];


gdjs.Scena_32bez_32tytu_322uCode.asyncCallback11178124 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Scena_32bez_32tytu_322uCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scena bez tytułu", false);
}
gdjs.Scena_32bez_32tytu_322uCode.localVariables.length = 0;
}
gdjs.Scena_32bez_32tytu_322uCode.idToCallbackMap.set(11178124, gdjs.Scena_32bez_32tytu_322uCode.asyncCallback11178124);
gdjs.Scena_32bez_32tytu_322uCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Scena_32bez_32tytu_322uCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Scena_32bez_32tytu_322uCode.asyncCallback11178124(runtimeScene, asyncObjectsList)), 11178124, asyncObjectsList);
}
}

}


};gdjs.Scena_32bez_32tytu_322uCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Scena_32bez_32tytu_322uCode.GDPlayerObjects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 4, "", 0);
}
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Scena_32bez_32tytu_322uCode.GDPlayerObjects1.length !== 0 ? gdjs.Scena_32bez_32tytu_322uCode.GDPlayerObjects1[0] : null), true, "", 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Scena_32bez_32tytu_322uCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scena_32bez_32tytu_322uCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scena_32bez_32tytu_322uCode.GDPlayerObjects1[i].getBehavior("Animation").getAnimationName() == "Hurt" ) {
        isConditionTrue_0 = true;
        gdjs.Scena_32bez_32tytu_322uCode.GDPlayerObjects1[k] = gdjs.Scena_32bez_32tytu_322uCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scena_32bez_32tytu_322uCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11196436);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Scena_32bez_32tytu_322uCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Scena_32bez_32tytu_322uCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Scena_32bez_32tytu_322uCode.GDPlayerObjects1[i].activateBehavior("PlatformerObject", false);
}
}

{ //Subevents
gdjs.Scena_32bez_32tytu_322uCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Boundary"), gdjs.Scena_32bez_32tytu_322uCode.GDBoundaryObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Scena_32bez_32tytu_322uCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scena_32bez_32tytu_322uCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scena_32bez_32tytu_322uCode.GDPlayerObjects1[i].getY() > (( gdjs.Scena_32bez_32tytu_322uCode.GDBoundaryObjects1.length === 0 ) ? 0 :gdjs.Scena_32bez_32tytu_322uCode.GDBoundaryObjects1[0].getPointY("")) ) {
        isConditionTrue_0 = true;
        gdjs.Scena_32bez_32tytu_322uCode.GDPlayerObjects1[k] = gdjs.Scena_32bez_32tytu_322uCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scena_32bez_32tytu_322uCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Scena_32bez_32tytu_322uCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Scena_32bez_32tytu_322uCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Scena_32bez_32tytu_322uCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Hurt");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Top_arrow_button"), gdjs.Scena_32bez_32tytu_322uCode.GDTop_9595arrow_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scena_32bez_32tytu_322uCode.GDTop_9595arrow_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.Scena_32bez_32tytu_322uCode.GDTop_9595arrow_9595buttonObjects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Scena_32bez_32tytu_322uCode.GDTop_9595arrow_9595buttonObjects1[k] = gdjs.Scena_32bez_32tytu_322uCode.GDTop_9595arrow_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.Scena_32bez_32tytu_322uCode.GDTop_9595arrow_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Scena_32bez_32tytu_322uCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Scena_32bez_32tytu_322uCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Scena_32bez_32tytu_322uCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Right_arrow_button"), gdjs.Scena_32bez_32tytu_322uCode.GDRight_9595arrow_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scena_32bez_32tytu_322uCode.GDRight_9595arrow_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.Scena_32bez_32tytu_322uCode.GDRight_9595arrow_9595buttonObjects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Scena_32bez_32tytu_322uCode.GDRight_9595arrow_9595buttonObjects1[k] = gdjs.Scena_32bez_32tytu_322uCode.GDRight_9595arrow_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.Scena_32bez_32tytu_322uCode.GDRight_9595arrow_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Scena_32bez_32tytu_322uCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Scena_32bez_32tytu_322uCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Scena_32bez_32tytu_322uCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Left_arrow_button"), gdjs.Scena_32bez_32tytu_322uCode.GDLeft_9595arrow_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Scena_32bez_32tytu_322uCode.GDLeft_9595arrow_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.Scena_32bez_32tytu_322uCode.GDLeft_9595arrow_9595buttonObjects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Scena_32bez_32tytu_322uCode.GDLeft_9595arrow_9595buttonObjects1[k] = gdjs.Scena_32bez_32tytu_322uCode.GDLeft_9595arrow_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.Scena_32bez_32tytu_322uCode.GDLeft_9595arrow_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Scena_32bez_32tytu_322uCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Scena_32bez_32tytu_322uCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Scena_32bez_32tytu_322uCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}
}

}


};

gdjs.Scena_32bez_32tytu_322uCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scena_32bez_32tytu_322uCode.GDPlayerObjects1.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDPlayerObjects2.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDMouse_9595CursorObjects1.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDMouse_9595CursorObjects2.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDPlatform_9595DirtObjects1.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDPlatform_9595DirtObjects2.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDPlatform_9595Dirt2Objects1.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDPlatform_9595Dirt2Objects2.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDBoundaryObjects1.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDBoundaryObjects2.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDLeft_9595arrow_9595buttonObjects1.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDLeft_9595arrow_9595buttonObjects2.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDRight_9595arrow_9595buttonObjects1.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDRight_9595arrow_9595buttonObjects2.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDTop_9595arrow_9595buttonObjects1.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDTop_9595arrow_9595buttonObjects2.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDTrophyObjects1.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDTrophyObjects2.length = 0;

gdjs.Scena_32bez_32tytu_322uCode.eventsList1(runtimeScene);
gdjs.Scena_32bez_32tytu_322uCode.GDPlayerObjects1.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDPlayerObjects2.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDMouse_9595CursorObjects1.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDMouse_9595CursorObjects2.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDPlatform_9595DirtObjects1.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDPlatform_9595DirtObjects2.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDPlatform_9595Dirt2Objects1.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDPlatform_9595Dirt2Objects2.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDBoundaryObjects1.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDBoundaryObjects2.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDLeft_9595arrow_9595buttonObjects1.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDLeft_9595arrow_9595buttonObjects2.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDRight_9595arrow_9595buttonObjects1.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDRight_9595arrow_9595buttonObjects2.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDTop_9595arrow_9595buttonObjects1.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDTop_9595arrow_9595buttonObjects2.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDTrophyObjects1.length = 0;
gdjs.Scena_32bez_32tytu_322uCode.GDTrophyObjects2.length = 0;


return;

}

gdjs['Scena_32bez_32tytu_322uCode'] = gdjs.Scena_32bez_32tytu_322uCode;
