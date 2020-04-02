!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1),n(2),n(3),n(4),n(5),n(6),n(7),n(8)},function(e,t){var n,r,a;AFRAME.registerComponent("webxr-ar",{schema:{takeOverCamera:{default:!0},cameraUserHeight:{default:!1},worldSensing:{default:!1}},init:function(){this.posePosition=new THREE.Vector3,this.poseQuaternion=new THREE.Quaternion,this.poseEuler=new THREE.Euler(0,0,0,"YXZ"),this.poseRotation=new THREE.Vector3,this.projectionMatrix=new THREE.Matrix4,this.onceSceneLoaded=this.onceSceneLoaded.bind(this),this.el.sceneEl.hasLoaded?setTimeout(this.onceSceneLoaded):this.el.sceneEl.addEventListener("loaded",this.onceSceneLoaded)},tick:function(e,t){this.arDisplay&&this.arDisplay.getFrameData},takeOverCamera:function(e){this.arCamera=e,e.isARPerspectiveCamera=!0,e.vrDisplay=this.arDisplay,e.el.setAttribute("ar-camera","enabled",!0)},onceSceneLoaded:function(){var e=this;window.addEventListener("ardisplayconnect",(function(){e.arDisplay||e.checkForARDisplay()})),this.checkForARDisplay()},checkForARDisplay:function(){if(navigator.xr&&navigator.xr.isSessionSupported){var e=this;e.arDisplay={type:"webxr-ar"},navigator.xr.isSessionSupported("immersive-ar").then((function(t){if(t){let t=["local-floor"],n=[];(e.data.worldSensing?t:n).push("hit-test");let r=e.el.sceneEl.getAttribute("webxr");r?(r.optionalFeatures.forEach((function(e){n=n.filter((function(t,n,r){return t!=e}))})),r.requiredFeatures.forEach((function(e){t=t.filter((function(t,n,r){return t!=e}))})),t.forEach((function(e){r.optionalFeatures=r.optionalFeatures.filter((function(t,n,r){return t!=e}))})),r.requiredFeatures=r.requiredFeatures.concat(t),r.optionalFeatures=r.optionalFeatures.concat(n),e.el.sceneEl.setAttribute("webxr",r)):e.el.sceneEl.setAttribute("webxr",{requiredFeatures:t.join(","),optionalFeatures:n.join(",")}),e.el.sceneEl.setAttribute("vr-mode-ui","enabled","true"),e.xrHitTestSource=null,e.viewerSpace=null,e.refSpace=null,e.el.sceneEl.renderer.xr.addEventListener("sessionend",t=>{e.viewerSpace=null,e.refSpace=null,e.xrHitTestSource=null}),e.el.sceneEl.renderer.xr.addEventListener("sessionstart",t=>{let n=e.el.sceneEl.renderer.xr.getSession();n.addEventListener("select",(function(){setTimeout(()=>{var e=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0});window.dispatchEvent(e)})})),n.requestReferenceSpace("viewer").then(t=>{e.viewerSpace=t,e.data.worldSensing&&n.requestHitTestSource({space:e.viewerSpace}).then(t=>{e.xrHitTestSource=t,console.log("session requestHitTestSource OK")})}),n.requestReferenceSpace("local-floor").then(t=>{e.refSpace=t})})}}))}},getPosition:function(){return this.arDisplay&&this.arDisplay.getFrameData?this.posePosition:null},getOrientation:function(){return this.arDisplay&&this.arDisplay.getFrameData?this.poseQuaternion:null},getRotation:function(){return this.arDisplay&&this.arDisplay.getFrameData?this.poseRotation:null},getProjectionMatrix:function(){return this.arDisplay&&this.arDisplay.getFrameData?this.projectionMatrix:null},hitAR:(n=new THREE.Matrix4,r=new THREE.Vector3,new THREE.Quaternion,new THREE.Vector3,a=new THREE.Vector3,function(e,t,i,o){if(!this.arDisplay)return[];var s=[];if(this.el.sceneEl.is("ar-mode")){if(!this.viewerSpace)return;let e=this.el.sceneEl.frame,t=e.getViewerPose(this.refSpace);if(this.xrHitTestSource&&t){let t=e.getHitTestResults(this.xrHitTestSource);s=[];for(var c=0;t&&c<t.length;c++){let e=t[c].getPose(this.refSpace);n.fromArray(e.transform.matrix),r.setFromMatrixPosition(n),console.log(c,r),o.object3D.getWorldPosition(a),s.push({distance:r.distanceTo(a),point:r.clone(),object:i&&i.object3D||this.el.sceneEl.object3D})}}}return s})})},function(e,t){function n(e){var t,n=e.length,r=new Float32Array(3*n),a=0,i=0;for(a=0;a<n;a++)t=e[a],r[i]=t.x,r[i+1]=t.y,r[i+2]=t.z,i+=3;return r}var r,a,i,o,s;AFRAME.registerComponent("mozilla-xr-ar",{schema:{takeOverCamera:{default:!0},cameraUserHeight:{default:!1},worldSensing:{default:!0}},init:function(){this.onInit=this.onInit.bind(this),this.onWatch=this.onWatch.bind(this),this.poseMatrix=new THREE.Matrix4,this.posePosition=new THREE.Vector3,this.poseQuaternion=new THREE.Quaternion,this.poseEuler=new THREE.Euler(0,0,0,"YXZ"),this.poseRotation=new THREE.Vector3,this.projectionMatrix=new THREE.Matrix4,this.viewMatrix=new THREE.Matrix4,this.onceSceneLoaded=this.onceSceneLoaded.bind(this),this.el.sceneEl.hasLoaded?setTimeout(this.onceSceneLoaded):this.el.sceneEl.addEventListener("loaded",this.onceSceneLoaded),this.planes_=new Map,this.anchors_=new Map},takeOverCamera:function(e){this.arCamera=e,e.el.setAttribute("ar-camera","enabled",!0)},onceSceneLoaded:function(){if(window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.initAR){setTimeout((function(){var e=AFRAME.scenes[0];e.canvas.style.position="absolute !important",e.canvas.style.width="100% !important",e.canvas.style.height="100% !important",setTimeout((function(){e.resize()}))}),1e3),window.arkitCallback0=this.onInit,window.arkitCallback1=this.onWatch;var e={options:{ui:{browser:!0,points:!0,focus:!1,rec:!0,rec_time:!0,mic:!1,build:!1,plane:!0,warnings:!0,anchors:!1,debug:!0,statistics:!1}},callback:"arkitCallback0"};window.setNativeTime=function(e){window.nativeTime=e.nativeTime},["arTrackingChanged","userGrantedWorldSensingData","arkitDidMoveBackground","arkitStartRecording","arkitStopRecording","arkitInterruptionEnded","arkitShowDebug","onError"].forEach((function(e){window[e]=function(t){console.log(e+":",t)}}));var t=this.el.sceneEl.components["vr-mode-ui"],n=t.enterAREl.cloneNode(!0);t.enterAREl.parentNode.replaceChild(n,t.enterAREl),t.enterAREl=n,t.enterAREl.classList.remove("a-hidden"),t.enterAREl.onclick=function(){var n=AFRAME.scenes[0];n.addState("ar-mode"),n.addState("vr-mode"),n.emit("enter-vr",{target:n}),t.orientationModalEl.classList.add("a-hidden"),window.webkit.messageHandlers.initAR.postMessage(e)}}},checkForARDisplay:function(){if(window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.watchAR){this.arDisplay=!0;var e={options:{location:!0,camera:!0,objects:!0,light_intensity:!0,worldSensing:this.data.worldSensing},callback:"arkitCallback1"};window.arkitWindowResize=function(){setTimeout((function(){AFRAME.scenes[0].resize()}),100)},window.webkit.messageHandlers.watchAR.postMessage(e);var t=this,n=t.el.sceneEl;t.data.takeOverCamera&&setTimeout((function(){t.takeOverCamera(n.camera)})),n.renderer.setPixelRatio(1),n.renderer.autoClear=!1,n.renderer.setClearColor("#000",0),n.renderer.alpha=!0}},onInit:function(e){this.checkForARDisplay()},onWatch:function(e){this.frameData=e,this.handleFrame(e)},handleFrame:function(e){var t,r;if(this.poseMatrix.fromArray(e.camera_transform),this.poseMatrix.decompose(this.posePosition,this.poseQuaternion,this.poseRotation),this.poseEuler.setFromQuaternion(this.poseQuaternion),this.poseRotation.set(THREE.Math.RAD2DEG*this.poseEuler.x,THREE.Math.RAD2DEG*this.poseEuler.y,THREE.Math.RAD2DEG*this.poseEuler.z),this.projectionMatrix.fromArray(e.projection_camera),this.viewMatrix.fromArray(e.camera_view),this.arCamera&&this.data.cameraUserHeight&&(this.posePosition.y+=this.arCamera.el.components.camera.data.userHeight),this.posePosition.x||this.posePosition.y||this.posePosition.z||this.poseQuaternion.x||this.poseQuaternion.y||this.poseQuaternion.z?!1!==this.poseLost&&(this.poseLost=!1,this.el.emit("poseFound")):!0!==this.poseLost&&(this.poseLost=!0,this.el.emit("poseLost",!1)),e.newObjects&&e.newObjects.length)for(t=0;t<e.newObjects.length;t++)if((r=e.newObjects[t]).plane_center)this.planes_.set(r.uuid,{id:r.uuid,center:r.plane_center,extent:[r.plane_extent.x,r.plane_extent.z],modelMatrix:r.transform,alignment:r.plane_alignment,vertices:n(r.geometry.vertices)});else{var a={id:r.uuid,modelMatrix:r.transform};"image"===r.type&&(a.name=r.uuid),this.anchors_.set(r.uuid,a)}if(e.removedObjects&&e.removedObjects.length)for(t=0;t<e.removedObjects.length;t++)r=e.removedObjects[t],this.planes_.get(r)?this.planes_.delete(r):this.anchors_.delete(r);if(e.objects&&e.objects.length)for(t=0;t<e.objects.length;t++)if((r=e.objects[t]).plane_center){var i=this.planes_.get(r.uuid);i?(i.center=r.plane_center,i.extent=[r.plane_extent.x,r.plane_extent.z],i.modelMatrix=r.transform,i.alignment=r.plane_alignment,i.vertices=n(r.geometry.vertices)):this.planes_.set(r.uuid,{id:r.uuid,center:r.plane_center,extent:[r.plane_extent.x,r.plane_extent.z],modelMatrix:r.transform,alignment:r.plane_alignment,vertices:n(r.geometry.vertices)})}else{var o=this.anchors_.get(r.uuid);o?o.modelMatrix=r.transform:this.anchors_.set(r.uuid,{id:r.uuid,modelMatrix:r.transform})}},getPosition:function(){return this.arDisplay?this.posePosition:null},getOrientation:function(){return this.arDisplay?this.poseQuaternion:null},getRotation:function(){return this.arDisplay?this.poseRotation:null},getProjectionMatrix:function(){return this.arDisplay?this.projectionMatrix:null},addImage:function(e,t,n){if(!this.arDisplay)return null;var r,a=document.createElement("canvas"),i=a.getContext("2d");if(r||((r=document.createElement("img")).crossOrigin="anonymous",r.src=t,document.body.appendChild(r)),r.complete&&r.naturalHeight)if(r.width&&r.height){a.width=r.width,a.height=r.height,i.drawImage(r,0,0);var o=function(e){var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r=e;e instanceof ArrayBuffer?r=new Uint8Array(arrayBuffer):e instanceof ImageData&&(r=e.data);for(var a,i=e.length,o=i%3,s=i-o,c=0;c<s;c+=3)t+=n[(16515072&(a=r[c]<<16|r[c+1]<<8|r[c+2]))>>18]+n[(258048&a)>>12]+n[(4032&a)>>6]+n[63&a];return 1==o?t+=n[(252&(a=r[s]))>>2]+n[(3&a)<<4]+"==":2==o&&(t+=n[(64512&(a=r[s]<<8|r[s+1]))>>10]+n[(1008&a)>>4]+n[(15&a)<<2]+"="),t}(i.getImageData(0,0,r.width,r.height).data);if(o){window.callbackForCreateImageAnchorCounter=(window.callbackForCreateImageAnchorCounter||0)+1;var s="callbackForCreateImageAnchor_"+window.callbackForCreateImageAnchorCounter,c=e;window[s]=function(e){void 0!==e.created?e.created?window.webkit.messageHandlers.activateDetectionImage.postMessage({callback:s,uid:c}):(console.log("addImage: !created; ",e.error),delete window[s]):void 0!==e.activated&&(e.activated||console.log("addImage: !activated; ",e.error),delete window[s])},window.webkit.messageHandlers.createImageAnchor.postMessage({callback:s,uid:e,buffer:o,imageWidth:r.width,imageHeight:r.height,physicalWidth:n})}else console.log("!!! addImage: !b64ImageData, aborting")}else console.log("!!! addImage: !aImg.width || !aImg.height, aborting");else console.log("!!! addImage: !aImg.complete || !aImg.naturalHeight, aborting")},removeImage:function(e){if(!this.arDisplay)return null;window.callbackForRemoveImageAnchorCounter=(window.callbackForRemoveImageAnchorCounter||0)+1;var t="callbackForRemoveImageAnchor_"+window.callbackForRemoveImageAnchorCounter,n=e;window[t]=function(e){void 0!==e.deactivated&&(e.deactivated||(console.log("!!! "+t+": !deactivated",e.error),delete window[t]),window.webkit.messageHandlers.destroyDetectionImage.postMessage({callback:t,uid:n})),void 0!==e.destroyed&&(e.destroyed||console.log("!!! "+t+": !destroyed, ",e.error),delete window[t])},window.webkit.messageHandlers.deactivateDetectionImage.postMessage({callback:t,uid:n})},getAnchors:function(){return Array.from(this.anchors_.values())},getPlanes:function(){return Array.from(this.planes_.values())},hitTestNoAnchor:function(){function e(){return this.modelMatrix=new Float32Array(16),this}var t,n={rayStart:new THREE.Vector3,rayEnd:new THREE.Vector3,cameraPosition:new THREE.Vector3,cameraQuaternion:new THREE.Quaternion,projViewMatrix:new THREE.Matrix4,worldRayStart:new THREE.Vector3,worldRayEnd:new THREE.Vector3,worldRayDir:new THREE.Vector3,planeMatrix:new THREE.Matrix4,planeMatrixInverse:new THREE.Matrix4,planeExtent:new THREE.Vector3,planePosition:new THREE.Vector3,planeCenter:new THREE.Vector3,planeNormal:new THREE.Vector3,planeIntersection:new THREE.Vector3,planeIntersectionLocal:new THREE.Vector3,planeHit:new THREE.Matrix4,planeQuaternion:new THREE.Quaternion},r=(t=new THREE.Vector3,function(e,n,r,a){var i=e.dot(a);return t.subVectors(n,r),t.dot(e)/i}),a=function(e,t){n.planeMatrix.fromArray(e.modelMatrix),n.planeIntersection.setFromMatrixPosition(n.planeMatrix);var r=n.planeIntersection.distanceTo(n.cameraPosition);return n.planeMatrix.fromArray(t.modelMatrix),n.planeIntersection.setFromMatrixPosition(n.planeMatrix),r<n.planeIntersection.distanceTo(n.cameraPosition)?-1:1};return function(t,i){if(t<0||t>1||i<0||i>1)throw new Error("hitTest - x and y values must be normalized [0,1]!");var o=[],s=this.getPlanes();if(!s||0===s.length)return o;n.rayStart.set(2*t-1,2*(1-i)-1,0),n.rayEnd.set(2*t-1,2*(1-i)-1,1),n.planeMatrix.multiplyMatrices(this.projectionMatrix,this.viewMatrix),n.projViewMatrix.getInverse(n.planeMatrix),n.worldRayStart.copy(n.rayStart).applyMatrix4(n.projViewMatrix),n.worldRayEnd.copy(n.rayEnd).applyMatrix4(n.projViewMatrix),n.worldRayDir.subVectors(n.worldRayEnd,n.worldRayStart).normalize();for(var c=0;c<s.length;c++){var l=s[c];n.planeMatrix.fromArray(l.modelMatrix),n.planeCenter.set(l.center.x,l.center.y,l.center.z),n.planePosition.copy(n.planeCenter).applyMatrix4(n.planeMatrix),n.planeAlignment=l.alignment,0===n.planeAlignment?n.planeNormal.set(0,1,0):n.planeNormal.set(n.planeMatrix[4],n.planeMatrix[5],n.planeMatrix[6]);var d=r(n.planeNormal,n.planePosition,n.worldRayStart,n.worldRayDir);if(!(d<0)){n.planeIntersectionLocal.copy(n.worldRayDir).multiplyScalar(d),n.planeIntersection.addVectors(n.worldRayStart,n.planeIntersectionLocal),n.planeExtent.set(l.extent[0],0,l.extent[1]),n.planeMatrixInverse.getInverse(n.planeMatrix),n.planeIntersectionLocal.copy(n.planeIntersection).applyMatrix4(n.planeMatrixInverse);if(!(Math.abs(n.planeIntersectionLocal.x)>n.planeExtent.x/2+.0075||Math.abs(n.planeIntersectionLocal.z)>n.planeExtent.z/2+.0075)){n.planeQuaternion.setFromRotationMatrix(n.planeMatrix),n.planeHit.makeRotationFromQuaternion(n.planeQuaternion).setPosition(n.planeIntersection);for(var h=new e,u=0;u<16;u++)h.modelMatrix[u]=n.planeHit.elements[u];h.i=c,o.push(h)}}}return o.sort(a),o}}(),hitAR:(r=new THREE.Matrix4,a=new THREE.Vector3,i=new THREE.Quaternion,o=new THREE.Vector3,s=new THREE.Vector3,function(e,t,n,c){if(!this.arDisplay)return[];for(var l=this.hitTestNoAnchor(e,t),d=[],h=0;l&&h<l.length;h++)r.fromArray(l[h].modelMatrix),r.decompose(a,i,o),c.object3D.getWorldPosition(s),d.push({distance:a.distanceTo(s),point:a.clone(),object:n&&n.object3D||this.el.sceneEl.object3D});return d})})},function(e,t){var n,r,a,i;AFRAME.registerComponent("ar-planes",{getPlaneSource:function(){var e;return this.planeSource||(e=this.el.sceneEl.components.ar)&&(this.planeSource=e.getSource()),this.planeSource},getPlanes:function(){var e=this.getPlaneSource();if(e&&e.getPlanes)return e.getPlanes()},init:function(){this.planes={},this.anchorsAdded=[],this.anchorsAddedDetail={type:"added",anchors:this.anchorsAdded},this.anchorsUpdated=[],this.anchorsUpdatedDetail={type:"updated",anchors:this.anchorsUpdated},this.anchorsRemoved=[],this.anchorsRemovedDetail={type:"removed",anchors:this.anchorsRemoved}},tick:(n=new THREE.Vector3(1,1,1),r=new THREE.Matrix4,a=new THREE.Vector3,i=new THREE.Quaternion,function(e,t){var o=this.getPlanes();if(o){var s,c=[],l=[],d=[],h={};for(s=0;o&&s<o.length;s++){var u,p=o[s],m=(void 0!==p.identifier?p.identifier:p.id).toString(),f=p.timestamp;h[m]=!0;var g=!this.planes[m],w=void 0!==f;if(g||!w||f!==this.planes[m].timestamp){if(u={identifier:m},void 0!==f&&(u.timestamp=f),p.modelMatrix||p.transform?u.modelMatrix=p.modelMatrix||p.transform:(a.fromArray(p.position),i.fromArray(p.orientation),n.set(1,1,1),r.compose(a,i,n),u.modelMatrix=r.elements.slice()),u.extent=p.extent,p.center&&(u.center=p.center),p.polygon?u.vertices=p.polygon:p.vertices&&(u.vertices=p.vertices),g)c.push(u);else if(w)l.push(u);else{if(AFRAME.utils.deepEqual(u,this.planes[m]))continue;l.push(u)}w?this.planes[m]=u:(this.planes[m]={identifier:u.identifier,modelMatrix:u.modelMatrix.slice(),extent:u.extent.slice()},u.vertices&&(this.planes[m].vertices=u.vertices.slice()))}}var E=this;Object.keys(E.planes).forEach((function(e){h[e]||(d.push(E.planes[e]),delete E.planes[e])})),this.anchorsAdded=c,c.length>0&&(this.anchorsAddedDetail.anchors=c,this.el.emit("anchorsadded",this.anchorsAddedDetail)),this.anchorsUpdated=l,l.length>0&&(this.anchorsUpdatedDetail.anchors=l,this.el.emit("anchorsupdated",this.anchorsUpdatedDetail)),this.anchorsRemoved=d,d.length>0&&(this.anchorsRemovedDetail.anchors=d,this.el.emit("anchorsremoved",this.anchorsRemovedDetail))}})})},function(e,t){AFRAME.registerComponent("ar-anchors",{getSource:function(){var e;return this.source||(e=this.el.sceneEl.components.ar)&&(this.source=e.getSource()),this.source},getAnchors:function(){var e=this.getSource();if(e&&e.getAnchors)return e.getAnchors()}})},function(e,t){AFRAME.registerComponent("ar-images",{getSource:function(){var e;return this.source||(e=this.el.sceneEl.components.ar)&&(this.source=e.getSource()),this.source},addImage:function(e,t,n){var r=this.getSource();if(r&&r.addImage)return r.addImage(e,t,n)},removeImage:function(e){var t=this.getSource();if(t&&t.removeImage)return t.removeImage(e)}})},function(e,t){AFRAME.registerComponent("ar",{schema:{takeOverCamera:{default:!0},cameraUserHeight:{default:!1},worldSensing:{default:!0},hideUI:{default:!1}},dependencies:["webxr-ar","mozilla-xr-ar","ar-planes","ar-anchors"],getSource:function(){var e;if(!this.source){var t=this;t.dependencies.forEach((function(n){(e=t.el.sceneEl.components[n])&&e.arDisplay&&(t.source=e)}))}return this.source},getPlanes:function(){return this.source?this.source.getPlanes():void 0},getAnchors:function(){return this.source?this.source.getAnchors():void 0},addImage:function(e,t,n){return this.source.addImage(e,t,n)},removeImage:function(e){return this.source.removeImage(e)},init:function(){var e={takeOverCamera:this.data.takeOverCamera,cameraUserHeight:this.data.cameraUserHeight,worldSensing:this.data.worldSensing},t=this;this.dependencies.forEach((function(n){t.el.setAttribute(n,e)})),this.data.hideUI&&this.el.sceneEl.setAttribute("vr-mode-ui",{enabled:!1}),document.head.insertAdjacentHTML("beforeend","<style>html,body {background-color: transparent !important;}</style>")}})},function(e,t){AFRAME.registerComponent("ar-camera",{schema:{enabled:{default:!0}},init:function(){var e=this.el.getAttribute("look-controls");this.wasLookControlsEnabled=!!e&&e.enabled},update:function(e){if(!e||e.enabled!==this.data.enabled)if(this.data.enabled){var t=this.el.getAttribute("look-controls");this.wasLookControlsEnabled=!!t&&t.enabled,this.wasLookControlsEnabled&&this.el.setAttribute("look-controls","enabled",!1)}else this.wasLookControlsEnabled&&this.el.setAttribute("look-controls","enabled",!0)},tick:function(e,t){if(this.data.enabled){var n=this.checkWhichAR();if(n){var r=n.getPosition();r&&this.el.setAttribute("position",r);var a=n.getRotation();if(a&&this.el.setAttribute("rotation",a),!this.el.sceneEl.is("vr-mode")){var i=n.getProjectionMatrix();i&&(this.el.components.camera.camera.projectionMatrix=i)}}}},checkWhichAR:function(){if(!this.whichar){var e=this.el.sceneEl.components.ar.getSource();if(!e||!e.arDisplay)return;this.whichar=e}return this.whichar}})},function(e,t){AFRAME.registerComponent("ar-raycaster",{dependencies:["raycaster"],schema:{x:{default:.5},y:{default:.5},el:{type:"selector"}},init:function(){this.raycaster=this.el.components.raycaster.raycaster,this.raycasterIntersectObjects=this.raycaster.intersectObjects.bind(this.raycaster),this.raycaster.intersectObjects=this.intersectObjects.bind(this)},update:function(e){this.data.el||this.el.sceneEl.object3D.el||(this.el.sceneEl.object3D.el=this.el.sceneEl)},intersectObjects:function(e,t,n){var r=this.raycasterIntersectObjects(e,t,n),a=this.hitAR();return a&&a.length&&(n?(a.forEach(e=>n.push(e)),r=n):a.forEach(e=>r.push(e))),r},hitAR:function(){var e=this.checkWhichAR();if(!e||!e.arDisplay)return[];var t=this.data.x,n=this.data.y;return arguments.length>=2&&(t=arguments[0],n=arguments[1]),e.hitAR(t,n,this.data.el,this.el)},checkWhichAR:function(){if(!this.whichar){var e=this.el.sceneEl.components.ar;if(e&&(e=e.getSource?e.getSource():void 0),!e||!e.arDisplay)return;this.whichar=e}return this.whichar}})}]);