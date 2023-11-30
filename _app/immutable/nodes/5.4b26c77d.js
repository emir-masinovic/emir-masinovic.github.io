import{S as Ki,i as Yi,s as Zi,k as Tt,q as qi,a as Ji,l as At,m as xt,r as Qi,h as je,c as es,n as Ke,b as Et,E as xi,G as St,o as ts}from"../chunks/index.1befde18.js";import{L as se,G as is,T as ht,C as Ei,O as de,S as Ie,a as y,M as ye,P as ss,b as Z,U as rs,E as ns,V as x,c as os,_ as as,d as H,I as ls,D as fs,e as L,f as Xe,A as ui,g as Ui,R as cs,h as us,i as ce,j as Vi,k as He,l as D,m as Y,n as Bi,o as bt,p as ds,q as di,r as Se,s as Le,t as O,Q as he,H as Gi,u as hi,v as mi,w as _i,F as mt,x as ki,B as ft,y as It,z as hs,J as _t,K as ms,N as p,W as _s,X as ps,Y as gs,Z as vs,$ as Ts,a0 as q,a1 as As,a2 as xs,a3 as Es,a4 as Ss,a5 as ys,a6 as Cs,a7 as Ps,a8 as Si,a9 as Os,aa as Nt,ab as bs,ac as Is,ad as X,ae as h,af as R,ag as P,ah as oe,ai as A,aj as xe,ak as j,al as _,am as Pe,an as Oe,ao as ve,ap as _e,aq as Ee,ar as be,as as Ns,at as Lt,au as ct,av as Ls,aw as Ms,ax as Fs,ay as yt,az as yi,aA as Rs,aB as ws,aC as $e,aD as Ds,aE as Ci,aF as Ye,aG as Ze,aH as Us,aI as Vs,aJ as Bs}from"../chunks/flowGraphSceneTickEventBlock.01f1f94b.js";class pi{constructor(e,t,s){this.frame=e,this.action=t,this.onlyOnce=s,this.isDone=!1}_clone(){return new pi(this.frame,this.action,this.onlyOnce)}}class Gs{constructor(e,t,s){if(this.loop=!1,this._coneInnerAngle=360,this._coneOuterAngle=360,this._volume=1,this.isPlaying=!1,this.isPaused=!1,this._sounds=[],this._weights=[],t.length!==s.length)throw new Error("Sounds length does not equal weights length");this.loop=e,this._weights=s;let i=0;for(const n of s)i+=n;const r=i>0?1/i:0;for(let n=0;n<this._weights.length;n++)this._weights[n]*=r;this._sounds=t;for(const n of this._sounds)n.onEndedObservable.add(()=>{this._onended()})}get directionalConeInnerAngle(){return this._coneInnerAngle}set directionalConeInnerAngle(e){if(e!==this._coneInnerAngle){if(this._coneOuterAngle<e){se.Error("directionalConeInnerAngle: outer angle of the cone must be superior or equal to the inner angle.");return}this._coneInnerAngle=e;for(const t of this._sounds)t.directionalConeInnerAngle=e}}get directionalConeOuterAngle(){return this._coneOuterAngle}set directionalConeOuterAngle(e){if(e!==this._coneOuterAngle){if(e<this._coneInnerAngle){se.Error("directionalConeOuterAngle: outer angle of the cone must be superior or equal to the inner angle.");return}this._coneOuterAngle=e;for(const t of this._sounds)t.directionalConeOuterAngle=e}}get volume(){return this._volume}set volume(e){if(e!==this._volume)for(const t of this._sounds)t.setVolume(e)}_onended(){this._currentIndex!==void 0&&(this._sounds[this._currentIndex].autoplay=!1),this.loop&&this.isPlaying?this.play():this.isPlaying=!1}pause(){this.isPaused=!0,this._currentIndex!==void 0&&this._sounds[this._currentIndex].pause()}stop(){this.isPlaying=!1,this._currentIndex!==void 0&&this._sounds[this._currentIndex].stop()}play(e){if(!this.isPaused){this.stop();const s=Math.random();let i=0;for(let r=0;r<this._weights.length;r++)if(i+=this._weights[r],s<=i){this._currentIndex=r;break}}const t=this._sounds[this._currentIndex];t.isReady()?t.play(0,this.isPaused?void 0:e):t.autoplay=!0,this.isPlaying=!0,this.isPaused=!1}}class Ue extends is{get coloredMaterial(){return this._coloredMaterial}get hoverMaterial(){return this._hoverMaterial}get disableMaterial(){return this._disableMaterial}static _CreateArrow(e,t,s=1,i=!1){const r=new ht("arrow",e),n=Ei("cylinder",{diameterTop:0,height:.075,diameterBottom:.0375*(1+(s-1)/4),tessellation:96},e),o=Ei("cylinder",{diameterTop:.005*s,height:.275,diameterBottom:.005*s,tessellation:96},e);return n.parent=r,n.material=t,n.rotation.x=Math.PI/2,n.position.z+=.3,o.parent=r,o.material=t,o.position.z+=.275/2,o.rotation.x=Math.PI/2,i&&(o.visibility=0,n.visibility=0),r}static _CreateArrowInstance(e,t){const s=new ht("arrow",e);for(const i of t.getChildMeshes()){const r=i.createInstance(i.name);r.parent=s}return s}constructor(e,t=y.Gray(),s=rs.DefaultUtilityLayer,i=null,r=1,n=y.Yellow(),o=y.Gray()){var a;super(s),this._pointerObserver=null,this.snapDistance=0,this.onSnapObservable=new de,this._isEnabled=!0,this._parent=null,this._dragging=!1,this._parent=i,this._coloredMaterial=new Ie("",s.utilityLayerScene),this._coloredMaterial.diffuseColor=t,this._coloredMaterial.specularColor=t.subtract(new y(.1,.1,.1)),this._hoverMaterial=new Ie("",s.utilityLayerScene),this._hoverMaterial.diffuseColor=n,this._disableMaterial=new Ie("",s.utilityLayerScene),this._disableMaterial.diffuseColor=o,this._disableMaterial.alpha=.4;const f=Ue._CreateArrow(s.utilityLayerScene,this._coloredMaterial,r),c=Ue._CreateArrow(s.utilityLayerScene,this._coloredMaterial,r+4,!0);this._gizmoMesh=new ye("",s.utilityLayerScene),this._gizmoMesh.addChild(f),this._gizmoMesh.addChild(c),this._gizmoMesh.lookAt(this._rootMesh.position.add(e)),this._gizmoMesh.scaling.scaleInPlace(1/3),this._gizmoMesh.parent=this._rootMesh;let u=0;const d={snapDistance:0};this.dragBehavior=new ss({dragAxis:e}),this.dragBehavior.moveAttached=!1,this.dragBehavior.updateDragPlane=!1,this._rootMesh.addBehavior(this.dragBehavior),this.dragBehavior.onDragObservable.add(T=>{if(this.attachedNode){let S=!1;if(this.snapDistance==0)this.attachedNode.getWorldMatrix().getTranslationToRef(Z.Vector3[2]),Z.Vector3[2].addInPlace(T.delta),this.dragBehavior.validateDrag(Z.Vector3[2])&&(this.attachedNode.position&&this.attachedNode.position.addInPlaceFromFloats(T.delta.x,T.delta.y,T.delta.z),this.attachedNode.getWorldMatrix().addTranslationFromFloats(T.delta.x,T.delta.y,T.delta.z),this.attachedNode.updateCache(),S=!0);else if(u+=T.dragDistance,Math.abs(u)>this.snapDistance){const E=Math.floor(Math.abs(u)/this.snapDistance);u=u%this.snapDistance,T.delta.normalizeToRef(Z.Vector3[1]),Z.Vector3[1].scaleInPlace(this.snapDistance*E),this.attachedNode.getWorldMatrix().getTranslationToRef(Z.Vector3[2]),Z.Vector3[2].addInPlace(Z.Vector3[1]),this.dragBehavior.validateDrag(Z.Vector3[2])&&(this.attachedNode.getWorldMatrix().addTranslationFromFloats(Z.Vector3[1].x,Z.Vector3[1].y,Z.Vector3[1].z),this.attachedNode.updateCache(),d.snapDistance=this.snapDistance*E,this.onSnapObservable.notifyObservers(d),S=!0)}S&&this._matrixChanged()}}),this.dragBehavior.onDragStartObservable.add(()=>{this._dragging=!0}),this.dragBehavior.onDragEndObservable.add(()=>{this._dragging=!1});const m=s._getSharedGizmoLight();m.includedOnlyMeshes=m.includedOnlyMeshes.concat(this._rootMesh.getChildMeshes(!1));const g={gizmoMeshes:f.getChildMeshes(),colliderMeshes:c.getChildMeshes(),material:this._coloredMaterial,hoverMaterial:this._hoverMaterial,disableMaterial:this._disableMaterial,active:!1,dragBehavior:this.dragBehavior};(a=this._parent)===null||a===void 0||a.addToAxisCache(c,g),this._pointerObserver=s.utilityLayerScene.onPointerObservable.add(T=>{var S;if(!this._customMeshSet&&(this._isHovered=g.colliderMeshes.indexOf((S=T==null?void 0:T.pickInfo)===null||S===void 0?void 0:S.pickedMesh)!=-1,!this._parent)){const E=this.dragBehavior.enabled?this._isHovered||this._dragging?this._hoverMaterial:this._coloredMaterial:this._disableMaterial;this._setGizmoMeshMaterial(g.gizmoMeshes,E)}}),this.dragBehavior.onEnabledObservable.add(T=>{this._setGizmoMeshMaterial(g.gizmoMeshes,T?g.material:g.disableMaterial)})}_attachedNodeChanged(e){this.dragBehavior&&(this.dragBehavior.enabled=!!e)}set isEnabled(e){this._isEnabled=e,e?this._parent&&(this.attachedMesh=this._parent.attachedMesh,this.attachedNode=this._parent.attachedNode):(this.attachedMesh=null,this.attachedNode=null)}get isEnabled(){return this._isEnabled}dispose(){this.onSnapObservable.clear(),this.gizmoLayer.utilityLayerScene.onPointerObservable.remove(this._pointerObserver),this.dragBehavior.detach(),this._gizmoMesh&&this._gizmoMesh.dispose(),[this._coloredMaterial,this._hoverMaterial,this._disableMaterial].forEach(e=>{e&&e.dispose()}),super.dispose()}}class Je{get scaleLines(){return this._scaleLines}set scaleLines(e){this._scaleLines=e,this._xAxis.scaling.setAll(this._scaleLines*this._scaleLinesFactor),this._yAxis.scaling.setAll(this._scaleLines*this._scaleLinesFactor),this._zAxis.scaling.setAll(this._scaleLines*this._scaleLinesFactor)}get xAxis(){return this._xAxis}get yAxis(){return this._yAxis}get zAxis(){return this._zAxis}constructor(e,t=1,s=2,i,r,n,o=1){if(this._scaleLinesFactor=4,this._instanced=!1,this.scene=null,this._scaleLines=1,e=e||ns.LastCreatedScene,!!e){if(!i){const a=new Ie("xAxisMaterial",e);a.disableLighting=!0,a.emissiveColor=y.Red().scale(.5),i=Ue._CreateArrow(e,a,o)}if(!r){const a=new Ie("yAxisMaterial",e);a.disableLighting=!0,a.emissiveColor=y.Green().scale(.5),r=Ue._CreateArrow(e,a,o)}if(!n){const a=new Ie("zAxisMaterial",e);a.disableLighting=!0,a.emissiveColor=y.Blue().scale(.5),n=Ue._CreateArrow(e,a,o)}this._xAxis=i,this._yAxis=r,this._zAxis=n,this.scaleLines=t,s!=null&&(Je._SetRenderingGroupId(this._xAxis,s),Je._SetRenderingGroupId(this._yAxis,s),Je._SetRenderingGroupId(this._zAxis,s)),this.scene=e,this.update(new x,x.Right(),x.Up(),x.Forward())}}update(e,t,s,i){this._xAxis.position.copyFrom(e),this._xAxis.setDirection(t),this._yAxis.position.copyFrom(e),this._yAxis.setDirection(s),this._zAxis.position.copyFrom(e),this._zAxis.setDirection(i)}createInstance(){const e=Ue._CreateArrowInstance(this.scene,this._xAxis),t=Ue._CreateArrowInstance(this.scene,this._yAxis),s=Ue._CreateArrowInstance(this.scene,this._zAxis),i=new Je(this.scene,this.scaleLines,null,e,t,s);return i._instanced=!0,i}dispose(){this._xAxis&&this._xAxis.dispose(!1,!this._instanced),this._yAxis&&this._yAxis.dispose(!1,!this._instanced),this._zAxis&&this._zAxis.dispose(!1,!this._instanced),this.scene=null}static _SetRenderingGroupId(e,t){e.getChildMeshes().forEach(s=>{s.renderingGroupId=t})}}class gi extends os{constructor(e,t,s,i=5,r=0,n=!1,o=!1,a=3,f=null){super("",e),this._texture=e.getEngine().createRawCubeTexture(t,s,i,r,n,o,a,f)}update(e,t,s,i,r=null){this._texture.getEngine().updateRawCubeTexture(this._texture,e,t,s,i,r)}updateRGBDAsync(e,t=null,s=.8,i=0){return as(this._texture,e,t,s,i).then(()=>{})}clone(){return H.Clone(()=>{const e=this.getScene(),t=this._texture,s=new gi(e,t._bufferViewArray,t.width,t.format,t.type,t.generateMipMaps,t.invertY,t.samplingMode,t._compression);return t.source===ls.CubeRawRGBD&&s.updateRGBDAsync(t._bufferViewArrayArray,t._sphericalPolynomial,t._lodGenerationScale,t._lodGenerationOffset),s},this)}}class it{get resolve(){return this._resolve}get reject(){return this._reject}constructor(){this.promise=new Promise((e,t)=>{this._resolve=e,this._reject=t})}}class dt{constructor(e){this.byteOffset=0,this.buffer=e}loadAsync(e){return this.buffer.readAsync(this.byteOffset,e).then(t=>{this._dataView=new DataView(t.buffer,t.byteOffset,t.byteLength),this._dataByteOffset=0})}readUint32(){const e=this._dataView.getUint32(this._dataByteOffset,!0);return this._dataByteOffset+=4,this.byteOffset+=4,e}readUint8Array(e){const t=new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+this._dataByteOffset,e);return this._dataByteOffset+=e,this.byteOffset+=e,t}readString(e){return fs(this.readUint8Array(e))}skipBytes(e){this._dataByteOffset+=e,this.byteOffset+=e}}function Mt(l,e,t,s){const i={externalResourceFunction:r=>s(r).then(n=>new Uint8Array(n))};return t&&(i.uri=e==="file:"?t:e+t),l instanceof ArrayBuffer?GLTFValidator.validateBytes(new Uint8Array(l),i):GLTFValidator.validateString(l,i)}function ks(){const l=[];onmessage=e=>{const t=e.data;switch(t.id){case"init":{importScripts(t.url);break}case"validate":{Mt(t.data,t.rootUrl,t.fileName,s=>new Promise((i,r)=>{const n=l.length;l.push({resolve:i,reject:r}),postMessage({id:"getExternalResource",index:n,uri:s})})).then(s=>{postMessage({id:"validate.resolve",value:s})},s=>{postMessage({id:"validate.reject",reason:s})});break}case"getExternalResource.resolve":{l[t.index].resolve(t.value);break}case"getExternalResource.reject":{l[t.index].reject(t.reason);break}}}}class $i{static ValidateAsync(e,t,s,i){const r=ArrayBuffer.isView(e)?e.slice().buffer:e;return typeof Worker=="function"?new Promise((n,o)=>{const a=`${Mt}(${ks})()`,f=URL.createObjectURL(new Blob([a],{type:"application/javascript"})),c=new Worker(f),u=m=>{c.removeEventListener("error",u),c.removeEventListener("message",d),o(m)},d=m=>{const g=m.data;switch(g.id){case"getExternalResource":{i(g.uri).then(T=>{c.postMessage({id:"getExternalResource.resolve",index:g.index,value:T},[T])},T=>{c.postMessage({id:"getExternalResource.reject",index:g.index,reason:T})});break}case"validate.resolve":{c.removeEventListener("error",u),c.removeEventListener("message",d),n(g.value),c.terminate();break}case"validate.reject":c.removeEventListener("error",u),c.removeEventListener("message",d),o(g.reason),c.terminate()}};c.addEventListener("error",u),c.addEventListener("message",d),c.postMessage({id:"init",url:L.GetBabylonScriptURL(this.Configuration.url)}),c.postMessage({id:"validate",data:r,rootUrl:t,fileName:s})}):(this._LoadScriptPromise||(this._LoadScriptPromise=L.LoadBabylonScriptAsync(this.Configuration.url)),this._LoadScriptPromise.then(()=>Mt(r,t,s,i)))}}$i.Configuration={url:`${L._DefaultCdnUrl}/gltf_validator.js`};function Pi(l,e,t){try{return Promise.resolve(new Uint8Array(l,e,t))}catch(s){return Promise.reject(s)}}function $s(l,e,t){try{if(l.byteOffset+e+t>l.buffer.byteLength)throw new Error("Array length out of bounds.");return Promise.resolve(new Uint8Array(l.buffer,l.byteOffset+e,t))}catch(s){return Promise.reject(s)}}var nt;(function(l){l[l.AUTO=0]="AUTO",l[l.FORCE_RIGHT_HANDED=1]="FORCE_RIGHT_HANDED"})(nt||(nt={}));var Qe;(function(l){l[l.NONE=0]="NONE",l[l.FIRST=1]="FIRST",l[l.ALL=2]="ALL"})(Qe||(Qe={}));var Ae;(function(l){l[l.LOADING=0]="LOADING",l[l.READY=1]="READY",l[l.COMPLETE=2]="COMPLETE"})(Ae||(Ae={}));class z{constructor(){this.onParsedObservable=new de,this.coordinateSystemMode=nt.AUTO,this.animationStartMode=Qe.FIRST,this.compileMaterials=!1,this.useClipPlane=!1,this.compileShadowGenerators=!1,this.transparencyAsCoverage=!1,this.useRangeRequests=!1,this.createInstances=!0,this.alwaysComputeBoundingBox=!1,this.loadAllMaterials=!1,this.loadOnlyMaterials=!1,this.skipMaterials=!1,this.useSRGBBuffers=!0,this.targetFps=60,this.alwaysComputeSkeletonRootNode=!1,this.preprocessUrlAsync=e=>Promise.resolve(e),this.onMeshLoadedObservable=new de,this.onSkinLoadedObservable=new de,this.onTextureLoadedObservable=new de,this.onMaterialLoadedObservable=new de,this.onCameraLoadedObservable=new de,this.onCompleteObservable=new de,this.onErrorObservable=new de,this.onDisposeObservable=new de,this.onExtensionLoadedObservable=new de,this.validate=!1,this.onValidatedObservable=new de,this._loader=null,this._state=null,this._requests=new Array,this.name="gltf",this.extensions={".gltf":{isBinary:!1},".glb":{isBinary:!0}},this.onLoaderStateChangedObservable=new de,this._logIndentLevel=0,this._loggingEnabled=!1,this._log=this._logDisabled,this._capturePerformanceCounters=!1,this._startPerformanceCounter=this._startPerformanceCounterDisabled,this._endPerformanceCounter=this._endPerformanceCounterDisabled}set onParsed(e){this._onParsedObserver&&this.onParsedObservable.remove(this._onParsedObserver),this._onParsedObserver=this.onParsedObservable.add(e)}set onMeshLoaded(e){this._onMeshLoadedObserver&&this.onMeshLoadedObservable.remove(this._onMeshLoadedObserver),this._onMeshLoadedObserver=this.onMeshLoadedObservable.add(e)}set onTextureLoaded(e){this._onTextureLoadedObserver&&this.onTextureLoadedObservable.remove(this._onTextureLoadedObserver),this._onTextureLoadedObserver=this.onTextureLoadedObservable.add(e)}set onMaterialLoaded(e){this._onMaterialLoadedObserver&&this.onMaterialLoadedObservable.remove(this._onMaterialLoadedObserver),this._onMaterialLoadedObserver=this.onMaterialLoadedObservable.add(e)}set onCameraLoaded(e){this._onCameraLoadedObserver&&this.onCameraLoadedObservable.remove(this._onCameraLoadedObserver),this._onCameraLoadedObserver=this.onCameraLoadedObservable.add(e)}set onComplete(e){this._onCompleteObserver&&this.onCompleteObservable.remove(this._onCompleteObserver),this._onCompleteObserver=this.onCompleteObservable.add(e)}set onError(e){this._onErrorObserver&&this.onErrorObservable.remove(this._onErrorObserver),this._onErrorObserver=this.onErrorObservable.add(e)}set onDispose(e){this._onDisposeObserver&&this.onDisposeObservable.remove(this._onDisposeObserver),this._onDisposeObserver=this.onDisposeObservable.add(e)}set onExtensionLoaded(e){this._onExtensionLoadedObserver&&this.onExtensionLoadedObservable.remove(this._onExtensionLoadedObserver),this._onExtensionLoadedObserver=this.onExtensionLoadedObservable.add(e)}get loggingEnabled(){return this._loggingEnabled}set loggingEnabled(e){this._loggingEnabled!==e&&(this._loggingEnabled=e,this._loggingEnabled?this._log=this._logEnabled:this._log=this._logDisabled)}get capturePerformanceCounters(){return this._capturePerformanceCounters}set capturePerformanceCounters(e){this._capturePerformanceCounters!==e&&(this._capturePerformanceCounters=e,this._capturePerformanceCounters?(this._startPerformanceCounter=this._startPerformanceCounterEnabled,this._endPerformanceCounter=this._endPerformanceCounterEnabled):(this._startPerformanceCounter=this._startPerformanceCounterDisabled,this._endPerformanceCounter=this._endPerformanceCounterDisabled))}set onValidated(e){this._onValidatedObserver&&this.onValidatedObservable.remove(this._onValidatedObserver),this._onValidatedObserver=this.onValidatedObservable.add(e)}dispose(){this._loader&&(this._loader.dispose(),this._loader=null);for(const e of this._requests)e.abort();this._requests.length=0,delete this._progressCallback,this.preprocessUrlAsync=e=>Promise.resolve(e),this.onMeshLoadedObservable.clear(),this.onSkinLoadedObservable.clear(),this.onTextureLoadedObservable.clear(),this.onMaterialLoadedObservable.clear(),this.onCameraLoadedObservable.clear(),this.onCompleteObservable.clear(),this.onExtensionLoadedObservable.clear(),this.onDisposeObservable.notifyObservers(void 0),this.onDisposeObservable.clear()}loadFile(e,t,s,i,r,n,o,a){if(ArrayBuffer.isView(t))return this._loadBinary(e,t,s,i,o,a),null;this._progressCallback=r;const f=t.name||L.GetFilename(t);if(n){if(this.useRangeRequests){this.validate&&se.Warn("glTF validation is not supported when range requests are enabled");const c={abort:()=>{},onCompleteObservable:new de},u={readAsync:(d,m)=>new Promise((g,T)=>{this._loadFile(e,t,S=>{g(new Uint8Array(S))},!0,S=>{T(S)},S=>{S.setRequestHeader("Range",`bytes=${d}-${d+m-1}`)})}),byteLength:0};return this._unpackBinaryAsync(new dt(u)).then(d=>{c.onCompleteObservable.notifyObservers(c),i(d)},o?d=>o(void 0,d):void 0),c}return this._loadFile(e,t,c=>{this._validate(e,new Uint8Array(c),s,f),this._unpackBinaryAsync(new dt({readAsync:(u,d)=>Pi(c,u,d),byteLength:c.byteLength})).then(u=>{i(u)},o?u=>o(void 0,u):void 0)},!0,o)}return this._loadFile(e,t,c=>{this._validate(e,new Uint8Array(c),s,f),i({json:this._parseJson(c)})},n,o)}_loadBinary(e,t,s,i,r,n){this._validate(e,t,s,n),this._unpackBinaryAsync(new dt({readAsync:(o,a)=>$s(t,o,a),byteLength:t.byteLength})).then(o=>{i(o)},r?o=>r(void 0,o):void 0)}importMeshAsync(e,t,s,i,r,n){return Promise.resolve().then(()=>(this.onParsedObservable.notifyObservers(s),this.onParsedObservable.clear(),this._log(`Loading ${n||""}`),this._loader=this._getLoader(s),this._loader.importMeshAsync(e,t,null,s,i,r,n)))}loadAsync(e,t,s,i,r){return Promise.resolve().then(()=>(this.onParsedObservable.notifyObservers(t),this.onParsedObservable.clear(),this._log(`Loading ${r||""}`),this._loader=this._getLoader(t),this._loader.loadAsync(e,t,s,i,r)))}loadAssetContainerAsync(e,t,s,i,r){return Promise.resolve().then(()=>{this.onParsedObservable.notifyObservers(t),this.onParsedObservable.clear(),this._log(`Loading ${r||""}`),this._loader=this._getLoader(t);const n=new ui(e),o=[];this.onMaterialLoadedObservable.add(u=>{o.push(u)});const a=[];this.onTextureLoadedObservable.add(u=>{a.push(u)});const f=[];this.onCameraLoadedObservable.add(u=>{f.push(u)});const c=[];return this.onMeshLoadedObservable.add(u=>{u.morphTargetManager&&c.push(u.morphTargetManager)}),this._loader.importMeshAsync(null,e,n,t,s,i,r).then(u=>(Array.prototype.push.apply(n.geometries,u.geometries),Array.prototype.push.apply(n.meshes,u.meshes),Array.prototype.push.apply(n.particleSystems,u.particleSystems),Array.prototype.push.apply(n.skeletons,u.skeletons),Array.prototype.push.apply(n.animationGroups,u.animationGroups),Array.prototype.push.apply(n.materials,o),Array.prototype.push.apply(n.textures,a),Array.prototype.push.apply(n.lights,u.lights),Array.prototype.push.apply(n.transformNodes,u.transformNodes),Array.prototype.push.apply(n.cameras,f),Array.prototype.push.apply(n.morphTargetManagers,c),n))})}canDirectLoad(e){return e.indexOf("asset")!==-1&&e.indexOf("version")!==-1||e.startsWith("data:base64,"+z._MagicBase64Encoded)||e.startsWith("data:;base64,"+z._MagicBase64Encoded)||e.startsWith("data:application/octet-stream;base64,"+z._MagicBase64Encoded)||e.startsWith("data:model/gltf-binary;base64,"+z._MagicBase64Encoded)}directLoad(e,t){if(t.startsWith("base64,"+z._MagicBase64Encoded)||t.startsWith(";base64,"+z._MagicBase64Encoded)||t.startsWith("application/octet-stream;base64,"+z._MagicBase64Encoded)||t.startsWith("model/gltf-binary;base64,"+z._MagicBase64Encoded)){const s=Ui(t);return this._validate(e,new Uint8Array(s)),this._unpackBinaryAsync(new dt({readAsync:(i,r)=>Pi(s,i,r),byteLength:s.byteLength}))}return this._validate(e,t),Promise.resolve({json:this._parseJson(t)})}createPlugin(){return new z}get loaderState(){return this._state}whenCompleteAsync(){return new Promise((e,t)=>{this.onCompleteObservable.addOnce(()=>{e()}),this.onErrorObservable.addOnce(s=>{t(s)})})}_setState(e){this._state!==e&&(this._state=e,this.onLoaderStateChangedObservable.notifyObservers(this._state),this._log(Ae[this._state]))}_loadFile(e,t,s,i,r,n){const o=e._loadFile(t,s,a=>{this._onProgress(a,o)},!0,i,r,n);return o.onCompleteObservable.add(a=>{this._requests.splice(this._requests.indexOf(a),1)}),this._requests.push(o),o}_onProgress(e,t){if(!this._progressCallback)return;t._lengthComputable=e.lengthComputable,t._loaded=e.loaded,t._total=e.total;let s=!0,i=0,r=0;for(const n of this._requests){if(n._lengthComputable===void 0||n._loaded===void 0||n._total===void 0)return;s=s&&n._lengthComputable,i+=n._loaded,r+=n._total}this._progressCallback({lengthComputable:s,loaded:i,total:s?r:0})}_validate(e,t,s="",i=""){this.validate&&(this._startPerformanceCounter("Validate JSON"),$i.ValidateAsync(t,s,i,r=>this.preprocessUrlAsync(s+r).then(n=>e._loadFileAsync(n,void 0,!0,!0))).then(r=>{this._endPerformanceCounter("Validate JSON"),this.onValidatedObservable.notifyObservers(r),this.onValidatedObservable.clear()},r=>{this._endPerformanceCounter("Validate JSON"),L.Warn(`Failed to validate: ${r.message}`),this.onValidatedObservable.clear()}))}_getLoader(e){const t=e.json.asset||{};this._log(`Asset version: ${t.version}`),t.minVersion&&this._log(`Asset minimum version: ${t.minVersion}`),t.generator&&this._log(`Asset generator: ${t.generator}`);const s=z._parseVersion(t.version);if(!s)throw new Error("Invalid version: "+t.version);if(t.minVersion!==void 0){const n=z._parseVersion(t.minVersion);if(!n)throw new Error("Invalid minimum version: "+t.minVersion);if(z._compareVersion(n,{major:2,minor:0})>0)throw new Error("Incompatible minimum version: "+t.minVersion)}const r={1:z._CreateGLTF1Loader,2:z._CreateGLTF2Loader}[s.major];if(!r)throw new Error("Unsupported version: "+t.version);return r(this)}_parseJson(e){this._startPerformanceCounter("Parse JSON"),this._log(`JSON length: ${e.length}`);const t=JSON.parse(e);return this._endPerformanceCounter("Parse JSON"),t}_unpackBinaryAsync(e){return this._startPerformanceCounter("Unpack Binary"),e.loadAsync(20).then(()=>{const t={Magic:1179937895},s=e.readUint32();if(s!==t.Magic)throw new cs("Unexpected magic: "+s,us.GLTFLoaderUnexpectedMagicError);const i=e.readUint32();this.loggingEnabled&&this._log(`Binary version: ${i}`);const r=e.readUint32();!this.useRangeRequests&&r!==e.buffer.byteLength&&se.Warn(`Length in header does not match actual data length: ${r} != ${e.buffer.byteLength}`);let n;switch(i){case 1:{n=this._unpackBinaryV1Async(e,r);break}case 2:{n=this._unpackBinaryV2Async(e,r);break}default:throw new Error("Unsupported version: "+i)}return this._endPerformanceCounter("Unpack Binary"),n})}_unpackBinaryV1Async(e,t){const s={JSON:0},i=e.readUint32(),r=e.readUint32();if(r!==s.JSON)throw new Error(`Unexpected content format: ${r}`);const n=t-e.byteOffset,o={json:this._parseJson(e.readString(i)),bin:null};if(n!==0){const a=e.byteOffset;o.bin={readAsync:(f,c)=>e.buffer.readAsync(a+f,c),byteLength:n}}return Promise.resolve(o)}_unpackBinaryV2Async(e,t){const s={JSON:1313821514,BIN:5130562},i=e.readUint32();if(e.readUint32()!==s.JSON)throw new Error("First chunk format is not JSON");return e.byteOffset+i===t?e.loadAsync(i).then(()=>({json:this._parseJson(e.readString(i)),bin:null})):e.loadAsync(i+8).then(()=>{const n={json:this._parseJson(e.readString(i)),bin:null},o=()=>{const a=e.readUint32();switch(e.readUint32()){case s.JSON:throw new Error("Unexpected JSON chunk");case s.BIN:{const c=e.byteOffset;n.bin={readAsync:(u,d)=>e.buffer.readAsync(c+u,d),byteLength:a},e.skipBytes(a);break}default:{e.skipBytes(a);break}}return e.byteOffset!==t?e.loadAsync(8).then(o):Promise.resolve(n)};return o()})}static _parseVersion(e){if(e==="1.0"||e==="1.0.1")return{major:1,minor:0};const t=(e+"").match(/^(\d+)\.(\d+)/);return t?{major:parseInt(t[1]),minor:parseInt(t[2])}:null}static _compareVersion(e,t){return e.major>t.major?1:e.major<t.major?-1:e.minor>t.minor?1:e.minor<t.minor?-1:0}_logOpen(e){this._log(e),this._logIndentLevel++}_logClose(){--this._logIndentLevel}_logEnabled(e){const t=z._logSpaces.substr(0,this._logIndentLevel*2);se.Log(`${t}${e}`)}_logDisabled(e){}_startPerformanceCounterEnabled(e){L.StartPerformanceCounter(e)}_startPerformanceCounterDisabled(e){}_endPerformanceCounterEnabled(e){L.EndPerformanceCounter(e)}_endPerformanceCounterDisabled(e){}}z.IncrementalLoading=!0;z.HomogeneousCoordinates=!1;z._MagicBase64Encoded="Z2xURg";z._logSpaces="                                ";Xe&&Xe.RegisterPlugin(new z);var Ge;(function(l){l[l.BYTE=5120]="BYTE",l[l.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",l[l.SHORT=5122]="SHORT",l[l.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",l[l.FLOAT=5126]="FLOAT"})(Ge||(Ge={}));var Ft;(function(l){l[l.FRAGMENT=35632]="FRAGMENT",l[l.VERTEX=35633]="VERTEX"})(Ft||(Ft={}));var ge;(function(l){l[l.BYTE=5120]="BYTE",l[l.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",l[l.SHORT=5122]="SHORT",l[l.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",l[l.INT=5124]="INT",l[l.UNSIGNED_INT=5125]="UNSIGNED_INT",l[l.FLOAT=5126]="FLOAT",l[l.FLOAT_VEC2=35664]="FLOAT_VEC2",l[l.FLOAT_VEC3=35665]="FLOAT_VEC3",l[l.FLOAT_VEC4=35666]="FLOAT_VEC4",l[l.INT_VEC2=35667]="INT_VEC2",l[l.INT_VEC3=35668]="INT_VEC3",l[l.INT_VEC4=35669]="INT_VEC4",l[l.BOOL=35670]="BOOL",l[l.BOOL_VEC2=35671]="BOOL_VEC2",l[l.BOOL_VEC3=35672]="BOOL_VEC3",l[l.BOOL_VEC4=35673]="BOOL_VEC4",l[l.FLOAT_MAT2=35674]="FLOAT_MAT2",l[l.FLOAT_MAT3=35675]="FLOAT_MAT3",l[l.FLOAT_MAT4=35676]="FLOAT_MAT4",l[l.SAMPLER_2D=35678]="SAMPLER_2D"})(ge||(ge={}));var rt;(function(l){l[l.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",l[l.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT",l[l.REPEAT=10497]="REPEAT"})(rt||(rt={}));var Fe;(function(l){l[l.NEAREST=9728]="NEAREST",l[l.LINEAR=9728]="LINEAR",l[l.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",l[l.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",l[l.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",l[l.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"})(Fe||(Fe={}));var Oi;(function(l){l[l.ALPHA=6406]="ALPHA",l[l.RGB=6407]="RGB",l[l.RGBA=6408]="RGBA",l[l.LUMINANCE=6409]="LUMINANCE",l[l.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA"})(Oi||(Oi={}));var Rt;(function(l){l[l.FRONT=1028]="FRONT",l[l.BACK=1029]="BACK",l[l.FRONT_AND_BACK=1032]="FRONT_AND_BACK"})(Rt||(Rt={}));var K;(function(l){l[l.ZERO=0]="ZERO",l[l.ONE=1]="ONE",l[l.SRC_COLOR=768]="SRC_COLOR",l[l.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",l[l.DST_COLOR=774]="DST_COLOR",l[l.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",l[l.SRC_ALPHA=770]="SRC_ALPHA",l[l.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",l[l.DST_ALPHA=772]="DST_ALPHA",l[l.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",l[l.CONSTANT_COLOR=32769]="CONSTANT_COLOR",l[l.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",l[l.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",l[l.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA",l[l.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE"})(K||(K={}));class ne{static SetMatrix(e,t,s,i,r){let n=null;if(s.semantic==="MODEL"?n=t.getWorldMatrix():s.semantic==="PROJECTION"?n=e.getProjectionMatrix():s.semantic==="VIEW"?n=e.getViewMatrix():s.semantic==="MODELVIEWINVERSETRANSPOSE"?n=ce.Transpose(t.getWorldMatrix().multiply(e.getViewMatrix()).invert()):s.semantic==="MODELVIEW"?n=t.getWorldMatrix().multiply(e.getViewMatrix()):s.semantic==="MODELVIEWPROJECTION"?n=t.getWorldMatrix().multiply(e.getTransformMatrix()):s.semantic==="MODELINVERSE"?n=t.getWorldMatrix().invert():s.semantic==="VIEWINVERSE"?n=e.getViewMatrix().invert():s.semantic==="PROJECTIONINVERSE"?n=e.getProjectionMatrix().invert():s.semantic==="MODELVIEWINVERSE"?n=t.getWorldMatrix().multiply(e.getViewMatrix()).invert():s.semantic==="MODELVIEWPROJECTIONINVERSE"?n=t.getWorldMatrix().multiply(e.getTransformMatrix()).invert():s.semantic==="MODELINVERSETRANSPOSE"&&(n=ce.Transpose(t.getWorldMatrix().invert())),n)switch(s.type){case ge.FLOAT_MAT2:r.setMatrix2x2(i,ce.GetAsMatrix2x2(n));break;case ge.FLOAT_MAT3:r.setMatrix3x3(i,ce.GetAsMatrix3x3(n));break;case ge.FLOAT_MAT4:r.setMatrix(i,n);break}}static SetUniform(e,t,s,i){switch(i){case ge.FLOAT:return e.setFloat(t,s),!0;case ge.FLOAT_VEC2:return e.setVector2(t,He.FromArray(s)),!0;case ge.FLOAT_VEC3:return e.setVector3(t,x.FromArray(s)),!0;case ge.FLOAT_VEC4:return e.setVector4(t,Vi.FromArray(s)),!0;default:return!1}}static GetWrapMode(e){switch(e){case rt.CLAMP_TO_EDGE:return D.CLAMP_ADDRESSMODE;case rt.MIRRORED_REPEAT:return D.MIRROR_ADDRESSMODE;case rt.REPEAT:return D.WRAP_ADDRESSMODE;default:return D.WRAP_ADDRESSMODE}}static GetByteStrideFromType(e){switch(e.type){case"VEC2":return 2;case"VEC3":return 3;case"VEC4":return 4;case"MAT2":return 4;case"MAT3":return 9;case"MAT4":return 16;default:return 1}}static GetTextureFilterMode(e){switch(e){case Fe.LINEAR:case Fe.LINEAR_MIPMAP_NEAREST:case Fe.LINEAR_MIPMAP_LINEAR:return D.TRILINEAR_SAMPLINGMODE;case Fe.NEAREST:case Fe.NEAREST_MIPMAP_NEAREST:return D.NEAREST_SAMPLINGMODE;default:return D.BILINEAR_SAMPLINGMODE}}static GetBufferFromBufferView(e,t,s,i,r){s=t.byteOffset+s;const n=e.loadedBufferViews[t.buffer];if(s+i>n.byteLength)throw new Error("Buffer access is out of range");const o=n.buffer;switch(s+=n.byteOffset,r){case Ge.BYTE:return new Int8Array(o,s,i);case Ge.UNSIGNED_BYTE:return new Uint8Array(o,s,i);case Ge.SHORT:return new Int16Array(o,s,i);case Ge.UNSIGNED_SHORT:return new Uint16Array(o,s,i);default:return new Float32Array(o,s,i)}}static GetBufferFromAccessor(e,t){const s=e.bufferViews[t.bufferView],i=t.count*ne.GetByteStrideFromType(t);return ne.GetBufferFromBufferView(e,s,t.byteOffset,i,t.componentType)}static DecodeBufferToText(e){let t="";const s=e.byteLength;for(let i=0;i<s;++i)t+=String.fromCharCode(e[i]);return t}static GetDefaultMaterial(e){if(!ne._DefaultMaterial){Y.ShadersStore.GLTFDefaultMaterialVertexShader=["precision highp float;","","uniform mat4 worldView;","uniform mat4 projection;","","attribute vec3 position;","","void main(void)","{","    gl_Position = projection * worldView * vec4(position, 1.0);","}"].join(`
`),Y.ShadersStore.GLTFDefaultMaterialPixelShader=["precision highp float;","","uniform vec4 u_emission;","","void main(void)","{","    gl_FragColor = u_emission;","}"].join(`
`);const t={vertex:"GLTFDefaultMaterial",fragment:"GLTFDefaultMaterial"},s={attributes:["position"],uniforms:["worldView","projection","u_emission"],samplers:new Array,needAlphaBlending:!1};ne._DefaultMaterial=new Bi("GLTFDefaultMaterial",e,t,s),ne._DefaultMaterial.setColor4("u_emission",new bt(.5,.5,.5,1))}return ne._DefaultMaterial}}ne._DefaultMaterial=null;var ke;(function(l){l[l.IDENTIFIER=1]="IDENTIFIER",l[l.UNKNOWN=2]="UNKNOWN",l[l.END_OF_INPUT=3]="END_OF_INPUT"})(ke||(ke={}));class bi{constructor(e){this._pos=0,this.currentToken=ke.UNKNOWN,this.currentIdentifier="",this.currentString="",this.isLetterOrDigitPattern=/^[a-zA-Z0-9]+$/,this._toParse=e,this._maxPos=e.length}getNextToken(){if(this.isEnd())return ke.END_OF_INPUT;if(this.currentString=this.read(),this.currentToken=ke.UNKNOWN,this.currentString==="_"||this.isLetterOrDigitPattern.test(this.currentString))for(this.currentToken=ke.IDENTIFIER,this.currentIdentifier=this.currentString;!this.isEnd()&&(this.isLetterOrDigitPattern.test(this.currentString=this.peek())||this.currentString==="_");)this.currentIdentifier+=this.currentString,this.forward();return this.currentToken}peek(){return this._toParse[this._pos]}read(){return this._toParse[this._pos++]}forward(){this._pos++}isEnd(){return this._pos>=this._maxPos}}const zi=["MODEL","VIEW","PROJECTION","MODELVIEW","MODELVIEWPROJECTION","JOINTMATRIX"],Wi=["world","view","projection","worldView","worldViewProjection","mBones"],zs=["translation","rotation","scale"],Ws=["position","rotationQuaternion","scaling"],Hs=(l,e)=>{for(const t in l){const s=l[t];e.buffers[t]=s,e.buffersCount++}},Xs=(l,e)=>{for(const t in l){const s=l[t];e.shaders[t]=s,e.shaderscount++}},me=(l,e,t)=>{for(const s in l){const i=l[s];t[e][s]=i}},js=l=>{if(l)for(let e=0;e<l.length/2;e++)l[e*2+1]=1-l[e*2+1]},Ii=l=>{if(l.semantic==="NORMAL")return"normal";if(l.semantic==="POSITION")return"position";if(l.semantic==="JOINT")return"matricesIndices";if(l.semantic==="WEIGHT")return"matricesWeights";if(l.semantic==="COLOR")return"color";if(l.semantic&&l.semantic.indexOf("TEXCOORD_")!==-1){const e=Number(l.semantic.split("_")[1]);return"uv"+(e===0?"":e+1)}return null},Ks=l=>{for(const e in l.animations){const t=l.animations[e];if(!t.channels||!t.samplers)continue;let s=null;for(let i=0;i<t.channels.length;i++){const r=t.channels[i],n=t.samplers[r.sampler];if(!n)continue;let o=null,a=null;t.parameters?(o=t.parameters[n.input],a=t.parameters[n.output]):(o=n.input,a=n.output);const f=ne.GetBufferFromAccessor(l,l.accessors[o]),c=ne.GetBufferFromAccessor(l,l.accessors[a]),u=r.target.id;let d=l.scene.getNodeById(u);if(d===null&&(d=l.scene.getNodeByName(u)),d===null){L.Warn("Creating animation named "+e+". But cannot find node named "+u+" to attach to");continue}const m=d instanceof ft;let g=r.target.path;const T=zs.indexOf(g);T!==-1&&(g=Ws[T]);let S=O.ANIMATIONTYPE_MATRIX;m||(g==="rotationQuaternion"?(S=O.ANIMATIONTYPE_QUATERNION,d.rotationQuaternion=new he):S=O.ANIMATIONTYPE_VECTOR3);let E=null;const b=[];let w=0,B=!1;m&&s&&s.getKeys().length===f.length&&(E=s,B=!0),B||(l.scene._blockEntityCollection=!!l.assetContainer,E=new O(e,m?"_matrix":g,1,S,O.ANIMATIONLOOPMODE_CYCLE),l.scene._blockEntityCollection=!1);for(let N=0;N<f.length;N++){let M=null;if(g==="rotationQuaternion"?(M=he.FromArray([c[w],c[w+1],c[w+2],c[w+3]]),w+=4):(M=x.FromArray([c[w],c[w+1],c[w+2]]),w+=3),m){const I=d;let F=x.Zero(),ee=new he,te=x.Zero(),ie=I.getBaseMatrix();B&&s&&(ie=s.getKeys()[N].value),ie.decompose(te,ee,F),g==="position"?F=M:g==="rotationQuaternion"?ee=M:te=M,M=ce.Compose(te,ee,F)}B?s&&(s.getKeys()[N].value=M):b.push({frame:f[N],value:M})}!B&&E&&(E.setKeys(b),d.animations.push(E)),s=E,l.scene.stopAnimation(d),l.scene.beginAnimation(d,0,f[f.length-1],!0,1)}}},vi=l=>{let e=null;if(l.translation||l.rotation||l.scale){const t=x.FromArray(l.scale||[1,1,1]),s=he.FromArray(l.rotation||[0,0,0,1]),i=x.FromArray(l.translation||[0,0,0]);e=ce.Compose(t,s,i)}else e=ce.FromArray(l.matrix);return e},Hi=(l,e,t,s)=>{for(let r=0;r<s.bones.length;r++)if(s.bones[r].name===t)return s.bones[r];const i=l.nodes;for(const r in i){const n=i[r];if(!n.jointName)continue;const o=n.children;for(let a=0;a<o.length;a++){const f=l.nodes[o[a]];if(f.jointName&&f.jointName===t){const c=vi(n),u=new ft(n.name||"",s,Hi(l,e,n.jointName,s),c);return u.id=r,u}}}return null},Ys=(l,e)=>{for(let t=0;t<l.length;t++){const s=l[t];for(let i=0;i<s.node.children.length;i++)if(s.node.children[i]===e)return s.bone}return null},Ct=(l,e)=>{const t=l.nodes;let s=t[e];if(s)return{node:s,id:e};for(const i in t)if(s=t[i],s.jointName===e)return{node:s,id:i};return null},Zs=(l,e)=>{for(let t=0;t<l.jointNames.length;t++)if(l.jointNames[t]===e)return!0;return!1},qs=(l,e,t,s)=>{for(const i in l.nodes){const r=l.nodes[i],n=i;if(!r.jointName||Zs(t,r.jointName))continue;const o=vi(r),a=new ft(r.name||"",e,null,o);a.id=n,s.push({bone:a,node:r,id:n})}for(let i=0;i<s.length;i++){const r=s[i],n=r.node.children;for(let o=0;o<n.length;o++){let a=null;for(let f=0;f<s.length;f++)if(s[f].id===n[o]){a=s[f];break}a&&(a.bone._parent=r.bone,r.bone.children.push(a.bone))}}},Js=(l,e,t,s)=>{if(s||(s=new di(e.name||"","",l.scene)),!e.babylonSkeleton)return s;const i=[],r=[];qs(l,s,e,i),s.bones=[];for(let o=0;o<e.jointNames.length;o++){const a=Ct(l,e.jointNames[o]);if(!a)continue;const f=a.node;if(!f){L.Warn("Joint named "+e.jointNames[o]+" does not exist");continue}const c=a.id,u=l.scene.getBoneById(c);if(u){s.bones.push(u);continue}let d=!1,m=null;for(let S=0;S<o;S++){const E=Ct(l,e.jointNames[S]);if(!E)continue;const b=E.node;if(!b){L.Warn("Joint named "+e.jointNames[S]+" does not exist when looking for parent");continue}const w=b.children;if(w){d=!1;for(let B=0;B<w.length;B++)if(w[B]===c){m=Hi(l,e,e.jointNames[S],s),d=!0;break}if(d)break}}const g=vi(f);!m&&i.length>0&&(m=Ys(i,c),m&&r.indexOf(m)===-1&&r.push(m));const T=new ft(f.jointName||"",s,m,g);T.id=c}const n=s.bones;s.bones=[];for(let o=0;o<e.jointNames.length;o++){const a=Ct(l,e.jointNames[o]);if(a){for(let f=0;f<n.length;f++)if(n[f].id===a.id){s.bones.push(n[f]);break}}}s.prepare();for(let o=0;o<r.length;o++)s.bones.push(r[o]);return s},Ni=(l,e,t,s,i)=>{if(i||(l.scene._blockEntityCollection=!!l.assetContainer,i=new ye(e.name||"",l.scene),i._parentContainer=l.assetContainer,l.scene._blockEntityCollection=!1,i.id=s),!e.babylonNode)return i;const r=[];let n=null;const o=[],a=[],f=[],c=[];for(let m=0;m<t.length;m++){const g=t[m],T=l.meshes[g];if(T)for(let S=0;S<T.primitives.length;S++){const E=new It,b=T.primitives[S];b.mode;const w=b.attributes;let B=null,N=null;for(const I in w)if(B=l.accessors[w[I]],N=ne.GetBufferFromAccessor(l,B),I==="NORMAL")E.normals=new Float32Array(N.length),E.normals.set(N);else if(I==="POSITION"){if(z.HomogeneousCoordinates){E.positions=new Float32Array(N.length-N.length/4);for(let F=0;F<N.length;F+=4)E.positions[F]=N[F],E.positions[F+1]=N[F+1],E.positions[F+2]=N[F+2]}else E.positions=new Float32Array(N.length),E.positions.set(N);a.push(E.positions.length)}else if(I.indexOf("TEXCOORD_")!==-1){const F=Number(I.split("_")[1]),ee=p.UVKind+(F===0?"":F+1),te=new Float32Array(N.length);te.set(N),js(te),E.set(te,ee)}else I==="JOINT"?(E.matricesIndices=new Float32Array(N.length),E.matricesIndices.set(N)):I==="WEIGHT"?(E.matricesWeights=new Float32Array(N.length),E.matricesWeights.set(N)):I==="COLOR"&&(E.colors=new Float32Array(N.length),E.colors.set(N));if(B=l.accessors[b.indices],B)N=ne.GetBufferFromAccessor(l,B),E.indices=new Int32Array(N.length),E.indices.set(N),c.push(E.indices.length);else{const I=[];for(let F=0;F<E.positions.length/3;F++)I.push(F);E.indices=new Int32Array(I),c.push(E.indices.length)}n?n.merge(E):n=E;const M=l.scene.getMaterialById(b.material);r.push(M===null?ne.GetDefaultMaterial(l.scene):M),o.push(o.length===0?0:o[o.length-1]+a[a.length-2]),f.push(f.length===0?0:f[f.length-1]+c[c.length-2])}}let u;l.scene._blockEntityCollection=!!l.assetContainer,r.length>1?(u=new hs("multimat"+s,l.scene),u.subMaterials=r):u=new Ie("multimat"+s,l.scene),r.length===1&&(u=r[0]),u._parentContainer=l.assetContainer,i.material||(i.material=u),new _t(s,l.scene,n,!1,i),i.computeWorldMatrix(!0),l.scene._blockEntityCollection=!1,i.subMeshes=[];let d=0;for(let m=0;m<t.length;m++){const g=t[m],T=l.meshes[g];if(T)for(let S=0;S<T.primitives.length;S++)T.primitives[S].mode,ms.AddToMesh(d,o[d],a[d],f[d],c[d],i,i,!0),d++}return i},wt=(l,e,t,s)=>{l.position&&(l.position=e),(l.rotationQuaternion||l.rotation)&&(l.rotationQuaternion=t),l.scaling&&(l.scaling=s)},Qs=(l,e)=>{if(e.matrix){const t=new x(0,0,0),s=new he,i=new x(0,0,0);ce.FromArray(e.matrix).decompose(i,s,t),wt(l,t,s,i)}else e.translation&&e.rotation&&e.scale&&wt(l,x.FromArray(e.translation),he.FromArray(e.rotation),x.FromArray(e.scale));l.computeWorldMatrix(!0)},er=(l,e,t)=>{let s=null;if(l.importOnlyMeshes&&(e.skin||e.meshes)&&l.importMeshesNames&&l.importMeshesNames.length>0&&l.importMeshesNames.indexOf(e.name||"")===-1)return null;if(e.skin){if(e.meshes){const i=l.skins[e.skin],r=Ni(l,e,e.meshes,t,e.babylonNode);r.skeleton=l.scene.getLastSkeletonById(e.skin),r.skeleton===null&&(r.skeleton=Js(l,i,r,i.babylonSkeleton),i.babylonSkeleton||(i.babylonSkeleton=r.skeleton)),s=r}}else if(e.meshes)s=Ni(l,e,e.mesh?[e.mesh]:e.meshes,t,e.babylonNode);else if(e.light&&!e.babylonNode&&!l.importOnlyMeshes){const i=l.lights[e.light];if(i){if(i.type==="ambient"){const r=i[i.type],n=new Gi(e.light,x.Zero(),l.scene);n.name=e.name||"",r.color&&(n.diffuse=y.FromArray(r.color)),s=n}else if(i.type==="directional"){const r=i[i.type],n=new hi(e.light,x.Zero(),l.scene);n.name=e.name||"",r.color&&(n.diffuse=y.FromArray(r.color)),s=n}else if(i.type==="point"){const r=i[i.type],n=new mi(e.light,x.Zero(),l.scene);n.name=e.name||"",r.color&&(n.diffuse=y.FromArray(r.color)),s=n}else if(i.type==="spot"){const r=i[i.type],n=new _i(e.light,x.Zero(),x.Zero(),0,0,l.scene);n.name=e.name||"",r.color&&(n.diffuse=y.FromArray(r.color)),r.fallOfAngle&&(n.angle=r.fallOfAngle),r.fallOffExponent&&(n.exponent=r.fallOffExponent),s=n}}}else if(e.camera&&!e.babylonNode&&!l.importOnlyMeshes){const i=l.cameras[e.camera];if(i){if(l.scene._blockEntityCollection=!!l.assetContainer,i.type==="orthographic"){const r=new mt(e.camera,x.Zero(),l.scene,!1);r.name=e.name||"",r.mode=ki.ORTHOGRAPHIC_CAMERA,r.attachControl(),s=r,r._parentContainer=l.assetContainer}else if(i.type==="perspective"){const r=i[i.type],n=new mt(e.camera,x.Zero(),l.scene,!1);n.name=e.name||"",n.attachControl(),r.aspectRatio||(r.aspectRatio=l.scene.getEngine().getRenderWidth()/l.scene.getEngine().getRenderHeight()),r.znear&&r.zfar&&(n.maxZ=r.zfar,n.minZ=r.znear),s=n,n._parentContainer=l.assetContainer}l.scene._blockEntityCollection=!1}}if(!e.jointName){if(e.babylonNode)return e.babylonNode;if(s===null){l.scene._blockEntityCollection=!!l.assetContainer;const i=new ye(e.name||"",l.scene);i._parentContainer=l.assetContainer,l.scene._blockEntityCollection=!1,e.babylonNode=i,s=i}}if(s!==null){if(e.matrix&&s instanceof ye)Qs(s,e);else{const i=e.translation||[0,0,0],r=e.rotation||[0,0,0,1],n=e.scale||[1,1,1];wt(s,x.FromArray(i),he.FromArray(r),x.FromArray(n))}s.updateCache(!0),e.babylonNode=s}return s},ot=(l,e,t,s=!1)=>{const i=l.nodes[e];let r=null;if(l.importOnlyMeshes&&!s&&l.importMeshesNames?l.importMeshesNames.indexOf(i.name||"")!==-1||l.importMeshesNames.length===0?s=!0:s=!1:s=!0,!i.jointName&&s&&(r=er(l,i,e),r!==null&&(r.id=e,r.parent=t)),i.children)for(let n=0;n<i.children.length;n++)ot(l,i.children[n],r,s)},Li=l=>{let e=l.currentScene;if(e)for(let t=0;t<e.nodes.length;t++)ot(l,e.nodes[t],null);else for(const t in l.scenes){e=l.scenes[t];for(let s=0;s<e.nodes.length;s++)ot(l,e.nodes[s],null)}Ks(l);for(let t=0;t<l.scene.skeletons.length;t++){const s=l.scene.skeletons[t];l.scene.beginAnimation(s,0,Number.MAX_VALUE,!0,1)}},tr=(l,e,t,s,i,r,n)=>{const o=r.values||i.parameters;for(const a in t){const f=t[a],c=f.type;if(c===ge.FLOAT_MAT2||c===ge.FLOAT_MAT3||c===ge.FLOAT_MAT4){if(f.semantic&&!f.source&&!f.node)ne.SetMatrix(e.scene,l,f,a,s.getEffect());else if(f.semantic&&(f.source||f.node)){let u=e.scene.getNodeByName(f.source||f.node||"");if(u===null&&(u=e.scene.getNodeById(f.source||f.node||"")),u===null)continue;ne.SetMatrix(e.scene,u,f,a,s.getEffect())}}else{const u=o[i.uniforms[a]];if(!u)continue;if(c===ge.SAMPLER_2D){const d=e.textures[r.values?u:f.value].babylonTexture;if(d==null)continue;s.getEffect().setTexture(a,d)}else ne.SetUniform(s.getEffect(),a,u,c)}}n(s)},ir=(l,e,t,s,i)=>{const r=s.values||t.parameters,n=t.uniforms;for(const o in i){const a=i[o],f=a.type;let c=r[n[o]];if(c===void 0&&(c=a.value),!c)continue;const u=d=>m=>{a.value&&d&&(e.setTexture(d,m),delete i[d])};f===ge.SAMPLER_2D?ae.LoadTextureAsync(l,s.values?c:a.value,u(o),()=>u(null)):a.value&&ne.SetUniform(e,o,s.values?c:a.value,f)&&delete i[o]}},sr=(l,e,t)=>(s,i)=>{e.dispose(!0),t("Cannot compile program named "+l.name+". Error: "+i+". Default material will be applied")},rr=(l,e,t,s,i,r)=>n=>{ir(l,e,t,s,i),e.onBind=o=>{tr(o,l,i,e,t,s,r)}},Mi=(l,e,t)=>{for(const s in e.uniforms){const i=e.uniforms[s],r=e.parameters[i];if(l.currentIdentifier===s&&r.semantic&&!r.source&&!r.node){const n=zi.indexOf(r.semantic);if(n!==-1)return delete t[s],Wi[n]}}return l.currentIdentifier},Fi=l=>{for(const e in l.materials)ae.LoadMaterialAsync(l,e,()=>{},()=>{})};class Ve{static CreateRuntime(e,t,s){const i={extensions:{},accessors:{},buffers:{},bufferViews:{},meshes:{},lights:{},cameras:{},nodes:{},images:{},textures:{},shaders:{},programs:{},samplers:{},techniques:{},materials:{},animations:{},skins:{},extensionsUsed:[],scenes:{},buffersCount:0,shaderscount:0,scene:t,rootUrl:s,loadedBufferCount:0,loadedBufferViews:{},loadedShaderCount:0,importOnlyMeshes:!1,dummyNodes:[],assetContainer:null};return e.extensions&&me(e.extensions,"extensions",i),e.extensionsUsed&&me(e.extensionsUsed,"extensionsUsed",i),e.buffers&&Hs(e.buffers,i),e.bufferViews&&me(e.bufferViews,"bufferViews",i),e.accessors&&me(e.accessors,"accessors",i),e.meshes&&me(e.meshes,"meshes",i),e.lights&&me(e.lights,"lights",i),e.cameras&&me(e.cameras,"cameras",i),e.nodes&&me(e.nodes,"nodes",i),e.images&&me(e.images,"images",i),e.textures&&me(e.textures,"textures",i),e.shaders&&Xs(e.shaders,i),e.programs&&me(e.programs,"programs",i),e.samplers&&me(e.samplers,"samplers",i),e.techniques&&me(e.techniques,"techniques",i),e.materials&&me(e.materials,"materials",i),e.animations&&me(e.animations,"animations",i),e.skins&&me(e.skins,"skins",i),e.scenes&&(i.scenes=e.scenes),e.scene&&e.scenes&&(i.currentScene=e.scenes[e.scene]),i}static LoadBufferAsync(e,t,s,i,r){const n=e.buffers[t];L.IsBase64(n.uri)?setTimeout(()=>s(new Uint8Array(L.DecodeBase64(n.uri)))):L.LoadFile(e.rootUrl+n.uri,o=>s(new Uint8Array(o)),r,void 0,!0,o=>{o&&i(o.status+" "+o.statusText)})}static LoadTextureBufferAsync(e,t,s,i){const r=e.textures[t];if(!r||!r.source){i("");return}if(r.babylonTexture){s(null);return}const n=e.images[r.source];L.IsBase64(n.uri)?setTimeout(()=>s(new Uint8Array(L.DecodeBase64(n.uri)))):L.LoadFile(e.rootUrl+n.uri,o=>s(new Uint8Array(o)),void 0,void 0,!0,o=>{o&&i(o.status+" "+o.statusText)})}static CreateTextureAsync(e,t,s,i){const r=e.textures[t];if(r.babylonTexture){i(r.babylonTexture);return}const n=e.samplers[r.sampler],o=n.minFilter===Fe.NEAREST_MIPMAP_NEAREST||n.minFilter===Fe.NEAREST_MIPMAP_LINEAR||n.minFilter===Fe.LINEAR_MIPMAP_NEAREST||n.minFilter===Fe.LINEAR_MIPMAP_LINEAR,a=D.BILINEAR_SAMPLINGMODE,f=s==null?new Blob:new Blob([s]),c=URL.createObjectURL(f),u=()=>URL.revokeObjectURL(c),d=new D(c,e.scene,!o,!0,a,u,u);n.wrapS!==void 0&&(d.wrapU=ne.GetWrapMode(n.wrapS)),n.wrapT!==void 0&&(d.wrapV=ne.GetWrapMode(n.wrapT)),d.name=t,r.babylonTexture=d,i(d)}static LoadShaderStringAsync(e,t,s,i){const r=e.shaders[t];if(L.IsBase64(r.uri)){const n=atob(r.uri.split(",")[1]);s&&s(n)}else L.LoadFile(e.rootUrl+r.uri,s,void 0,void 0,!1,n=>{n&&i&&i(n.status+" "+n.statusText)})}static LoadMaterialAsync(e,t,s,i){const r=e.materials[t];if(!r.technique){i&&i("No technique found.");return}const n=e.techniques[r.technique];if(!n){e.scene._blockEntityCollection=!!e.assetContainer;const M=new Ie(t,e.scene);M._parentContainer=e.assetContainer,e.scene._blockEntityCollection=!1,M.diffuseColor=new y(.5,.5,.5),M.sideOrientation=Se.CounterClockWiseSideOrientation,s(M);return}const o=e.programs[n.program],a=n.states,f=Y.ShadersStore[o.vertexShader+"VertexShader"],c=Y.ShadersStore[o.fragmentShader+"PixelShader"];let u="",d="";const m=new bi(f),g=new bi(c),T={},S=[],E=[],b=[];for(const M in n.uniforms){const I=n.uniforms[M],F=n.parameters[I];if(T[M]=F,F.semantic&&!F.node&&!F.source){const ee=zi.indexOf(F.semantic);ee!==-1?(S.push(Wi[ee]),delete T[M]):S.push(M)}else F.type===ge.SAMPLER_2D?b.push(M):S.push(M)}for(const M in n.attributes){const I=n.attributes[M],F=n.parameters[I];if(F.semantic){const ee=Ii(F);ee&&E.push(ee)}}for(;!m.isEnd()&&m.getNextToken();){if(m.currentToken!==ke.IDENTIFIER){u+=m.currentString;continue}let I=!1;for(const F in n.attributes){const ee=n.attributes[F],te=n.parameters[ee];if(m.currentIdentifier===F&&te.semantic){u+=Ii(te),I=!0;break}}I||(u+=Mi(m,n,T))}for(;!g.isEnd()&&g.getNextToken();){if(g.currentToken!==ke.IDENTIFIER){d+=g.currentString;continue}d+=Mi(g,n,T)}const w={vertex:o.vertexShader+t,fragment:o.fragmentShader+t},B={attributes:E,uniforms:S,samplers:b,needAlphaBlending:a&&a.enable&&a.enable.indexOf(3042)!==-1};Y.ShadersStore[o.vertexShader+t+"VertexShader"]=u,Y.ShadersStore[o.fragmentShader+t+"PixelShader"]=d;const N=new Bi(t,e.scene,w,B);if(N.onError=sr(o,N,i),N.onCompiled=rr(e,N,n,r,T,s),N.sideOrientation=Se.CounterClockWiseSideOrientation,a&&a.functions){const M=a.functions;M.cullFace&&M.cullFace[0]!==Rt.BACK&&(N.backFaceCulling=!1);const I=M.blendFuncSeparate;I&&(I[0]===K.SRC_ALPHA&&I[1]===K.ONE_MINUS_SRC_ALPHA&&I[2]===K.ONE&&I[3]===K.ONE?N.alphaMode=Le.ALPHA_COMBINE:I[0]===K.ONE&&I[1]===K.ONE&&I[2]===K.ZERO&&I[3]===K.ONE?N.alphaMode=Le.ALPHA_ONEONE:I[0]===K.SRC_ALPHA&&I[1]===K.ONE&&I[2]===K.ZERO&&I[3]===K.ONE?N.alphaMode=Le.ALPHA_ADD:I[0]===K.ZERO&&I[1]===K.ONE_MINUS_SRC_COLOR&&I[2]===K.ONE&&I[3]===K.ONE?N.alphaMode=Le.ALPHA_SUBTRACT:I[0]===K.DST_COLOR&&I[1]===K.ZERO&&I[2]===K.ONE&&I[3]===K.ONE?N.alphaMode=Le.ALPHA_MULTIPLY:I[0]===K.SRC_ALPHA&&I[1]===K.ONE_MINUS_SRC_COLOR&&I[2]===K.ONE&&I[3]===K.ONE&&(N.alphaMode=Le.ALPHA_MAXIMIZED))}}}let et=class Dt{static RegisterExtension(e){if(Dt.Extensions[e.name]){L.Error('Tool with the same name "'+e.name+'" already exists');return}Dt.Extensions[e.name]=e}dispose(){}_importMeshAsync(e,t,s,i,r,n,o,a){return t.useRightHandedSystem=!0,ae.LoadRuntimeAsync(t,s,i,f=>{f.assetContainer=r,f.importOnlyMeshes=!0,e===""?f.importMeshesNames=[]:typeof e=="string"?f.importMeshesNames=[e]:e&&!(e instanceof Array)?f.importMeshesNames=[e]:(f.importMeshesNames=[],L.Warn("Argument meshesNames must be of type string or string[]")),this._createNodes(f);const c=[],u=[];for(const d in f.nodes){const m=f.nodes[d];m.babylonNode instanceof ds&&c.push(m.babylonNode)}for(const d in f.skins){const m=f.skins[d];m.babylonSkeleton instanceof di&&u.push(m.babylonSkeleton)}this._loadBuffersAsync(f,()=>{this._loadShadersAsync(f,()=>{Fi(f),Li(f),!z.IncrementalLoading&&n&&n(c,u)})}),z.IncrementalLoading&&n&&n(c,u)},a),!0}importMeshAsync(e,t,s,i,r,n){return new Promise((o,a)=>{this._importMeshAsync(e,t,i,r,s,(f,c)=>{o({meshes:f,particleSystems:[],skeletons:c,animationGroups:[],lights:[],transformNodes:[],geometries:[]})},n,f=>{a(new Error(f))})})}_loadAsync(e,t,s,i,r,n){e.useRightHandedSystem=!0,ae.LoadRuntimeAsync(e,t,s,o=>{ae.LoadRuntimeExtensionsAsync(o,()=>{this._createNodes(o),this._loadBuffersAsync(o,()=>{this._loadShadersAsync(o,()=>{Fi(o),Li(o),z.IncrementalLoading||i()})}),z.IncrementalLoading&&i()},n)},n)}loadAsync(e,t,s,i){return new Promise((r,n)=>{this._loadAsync(e,t,s,()=>{r()},i,o=>{n(new Error(o))})})}_loadShadersAsync(e,t){let s=!1;const i=(r,n)=>{ae.LoadShaderStringAsync(e,r,o=>{o instanceof ArrayBuffer||(e.loadedShaderCount++,o&&(Y.ShadersStore[r+(n.type===Ft.VERTEX?"VertexShader":"PixelShader")]=o),e.loadedShaderCount===e.shaderscount&&t())},()=>{L.Error("Error when loading shader program named "+r+" located at "+n.uri)})};for(const r in e.shaders){s=!0;const n=e.shaders[r];n?i.bind(this,r,n)():L.Error("No shader named: "+r)}s||t()}_loadBuffersAsync(e,t){let s=!1;const i=(r,n)=>{ae.LoadBufferAsync(e,r,o=>{e.loadedBufferCount++,o&&(o.byteLength!=e.buffers[r].byteLength&&L.Error("Buffer named "+r+" is length "+o.byteLength+". Expected: "+n.byteLength),e.loadedBufferViews[r]=o),e.loadedBufferCount===e.buffersCount&&t()},()=>{L.Error("Error when loading buffer named "+r+" located at "+n.uri)})};for(const r in e.buffers){s=!0;const n=e.buffers[r];n?i.bind(this,r,n)():L.Error("No buffer named: "+r)}s||t()}_createNodes(e){let t=e.currentScene;if(t)for(let s=0;s<t.nodes.length;s++)ot(e,t.nodes[s],null);else for(const s in e.scenes){t=e.scenes[s];for(let i=0;i<t.nodes.length;i++)ot(e,t.nodes[i],null)}}};et.Extensions={};class ae{constructor(e){this._name=e}get name(){return this._name}loadRuntimeAsync(e,t,s,i,r){return!1}loadRuntimeExtensionsAsync(e,t,s){return!1}loadBufferAsync(e,t,s,i,r){return!1}loadTextureBufferAsync(e,t,s,i){return!1}createTextureAsync(e,t,s,i,r){return!1}loadShaderStringAsync(e,t,s,i){return!1}loadMaterialAsync(e,t,s,i){return!1}static LoadRuntimeAsync(e,t,s,i,r){ae._ApplyExtensions(n=>n.loadRuntimeAsync(e,t,s,i,r),()=>{setTimeout(()=>{i&&i(Ve.CreateRuntime(t.json,e,s))})})}static LoadRuntimeExtensionsAsync(e,t,s){ae._ApplyExtensions(i=>i.loadRuntimeExtensionsAsync(e,t,s),()=>{setTimeout(()=>{t()})})}static LoadBufferAsync(e,t,s,i,r){ae._ApplyExtensions(n=>n.loadBufferAsync(e,t,s,i,r),()=>{Ve.LoadBufferAsync(e,t,s,i,r)})}static LoadTextureAsync(e,t,s,i){ae._LoadTextureBufferAsync(e,t,r=>{r&&ae._CreateTextureAsync(e,t,r,s,i)},i)}static LoadShaderStringAsync(e,t,s,i){ae._ApplyExtensions(r=>r.loadShaderStringAsync(e,t,s,i),()=>{Ve.LoadShaderStringAsync(e,t,s,i)})}static LoadMaterialAsync(e,t,s,i){ae._ApplyExtensions(r=>r.loadMaterialAsync(e,t,s,i),()=>{Ve.LoadMaterialAsync(e,t,s,i)})}static _LoadTextureBufferAsync(e,t,s,i){ae._ApplyExtensions(r=>r.loadTextureBufferAsync(e,t,s,i),()=>{Ve.LoadTextureBufferAsync(e,t,s,i)})}static _CreateTextureAsync(e,t,s,i,r){ae._ApplyExtensions(n=>n.createTextureAsync(e,t,s,i,r),()=>{Ve.CreateTextureAsync(e,t,s,i)})}static _ApplyExtensions(e,t){for(const s in et.Extensions){const i=et.Extensions[s];if(e(i))return}t()}}z._CreateGLTF1Loader=()=>new et;const nr="binary_glTF";class or extends ae{constructor(){super("KHR_binary_glTF")}loadRuntimeAsync(e,t,s,i){const r=t.json.extensionsUsed;return!r||r.indexOf(this.name)===-1||!t.bin?!1:(this._bin=t.bin,i(Ve.CreateRuntime(t.json,e,s)),!0)}loadBufferAsync(e,t,s,i){return e.extensionsUsed.indexOf(this.name)===-1||t!==nr?!1:(this._bin.readAsync(0,this._bin.byteLength).then(s,r=>i(r.message)),!0)}loadTextureBufferAsync(e,t,s){const i=e.textures[t],r=e.images[i.source];if(!r.extensions||!(this.name in r.extensions))return!1;const n=r.extensions[this.name],o=e.bufferViews[n.bufferView],a=ne.GetBufferFromBufferView(e,o,0,o.byteLength,Ge.UNSIGNED_BYTE);return s(a),!0}loadShaderStringAsync(e,t,s){const i=e.shaders[t];if(!i.extensions||!(this.name in i.extensions))return!1;const r=i.extensions[this.name],n=e.bufferViews[r.bufferView],o=ne.GetBufferFromBufferView(e,n,0,n.byteLength,Ge.UNSIGNED_BYTE);return setTimeout(()=>{const a=ne.DecodeBufferToText(o);s(a)}),!0}}et.RegisterExtension(new or);class ar extends ae{constructor(){super("KHR_materials_common")}loadRuntimeExtensionsAsync(e){if(!e.extensions)return!1;const t=e.extensions[this.name];if(!t)return!1;const s=t.lights;if(s)for(const i in s){const r=s[i];switch(r.type){case"ambient":{const n=new Gi(r.name,new x(0,1,0),e.scene),o=r.ambient;o&&(n.diffuse=y.FromArray(o.color||[1,1,1]));break}case"point":{const n=new mi(r.name,new x(10,10,10),e.scene),o=r.point;o&&(n.diffuse=y.FromArray(o.color||[1,1,1]));break}case"directional":{const n=new hi(r.name,new x(0,-1,0),e.scene),o=r.directional;o&&(n.diffuse=y.FromArray(o.color||[1,1,1]));break}case"spot":{const n=r.spot;if(n){const o=new _i(r.name,new x(0,10,0),new x(0,-1,0),n.fallOffAngle||Math.PI,n.fallOffExponent||0,e.scene);o.diffuse=y.FromArray(n.color||[1,1,1])}break}default:L.Warn('GLTF Material Common extension: light type "'+r.type+"” not supported");break}}return!1}loadMaterialAsync(e,t,s,i){const r=e.materials[t];if(!r||!r.extensions)return!1;const n=r.extensions[this.name];if(!n)return!1;const o=new Ie(t,e.scene);return o.sideOrientation=Se.CounterClockWiseSideOrientation,n.technique==="CONSTANT"&&(o.disableLighting=!0),o.backFaceCulling=n.doubleSided===void 0?!1:!n.doubleSided,o.alpha=n.values.transparency===void 0?1:n.values.transparency,o.specularPower=n.values.shininess===void 0?0:n.values.shininess,typeof n.values.ambient=="string"?this._loadTexture(e,n.values.ambient,o,"ambientTexture",i):o.ambientColor=y.FromArray(n.values.ambient||[0,0,0]),typeof n.values.diffuse=="string"?this._loadTexture(e,n.values.diffuse,o,"diffuseTexture",i):o.diffuseColor=y.FromArray(n.values.diffuse||[0,0,0]),typeof n.values.emission=="string"?this._loadTexture(e,n.values.emission,o,"emissiveTexture",i):o.emissiveColor=y.FromArray(n.values.emission||[0,0,0]),typeof n.values.specular=="string"?this._loadTexture(e,n.values.specular,o,"specularTexture",i):o.specularColor=y.FromArray(n.values.specular||[0,0,0]),!0}_loadTexture(e,t,s,i,r){Ve.LoadTextureBufferAsync(e,t,n=>{Ve.CreateTextureAsync(e,t,n,o=>s[i]=o)},r)}}et.RegisterExtension(new ar);function Ri(l,e,t,s){return x.FromArray(e,t).scaleInPlace(s)}function lr(l,e,t,s){return he.FromArray(e,t).scaleInPlace(s)}function fr(l,e,t,s){const i=new Array(l._numMorphTargets);for(let r=0;r<i.length;r++)i[r]=e[t++]*s;return i}class ut{constructor(e,t,s,i){this.type=e,this.name=t,this.getValue=s,this.getStride=i}_buildAnimation(e,t,s){const i=new O(e,this.name,t,this.type);return i.setKeys(s),i}}class Pt extends ut{buildAnimations(e,t,s,i,r){r(e._babylonTransformNode,this._buildAnimation(t,s,i))}}class cr extends ut{buildAnimations(e,t,s,i,r){if(e._numMorphTargets)for(let n=0;n<e._numMorphTargets;n++){const o=new O(`${t}_${n}`,this.name,s,this.type);if(o.setKeys(i.map(a=>({frame:a.frame,inTangent:a.inTangent?a.inTangent[n]:void 0,value:a.value[n],outTangent:a.outTangent?a.outTangent[n]:void 0,interpolation:a.interpolation}))),e._primitiveBabylonMeshes){for(const a of e._primitiveBabylonMeshes)if(a.morphTargetManager){const f=a.morphTargetManager.getTarget(n),c=o.clone();f.animations.push(c),r(f,c)}}}}}const st={translation:[new Pt(O.ANIMATIONTYPE_VECTOR3,"position",Ri,()=>3)],rotation:[new Pt(O.ANIMATIONTYPE_QUATERNION,"rotationQuaternion",lr,()=>4)],scale:[new Pt(O.ANIMATIONTYPE_VECTOR3,"scaling",Ri,()=>3)],weights:[new cr(O.ANIMATIONTYPE_FLOAT,"influence",fr,l=>l._numMorphTargets)]};function Xi(...l){const e=t=>t&&typeof t=="object";return l.reduce((t,s)=>(Object.keys(s).forEach(i=>{const r=t[i],n=s[i];Array.isArray(r)&&Array.isArray(n)?t[i]=r.concat(...n):e(r)&&e(n)?t[i]=Xi(r,n):t[i]=n}),t),{})}class C{static Get(e,t,s){if(!t||s==null||!t[s])throw new Error(`${e}: Failed to find index (${s})`);return t[s]}static TryGet(e,t){return!e||t==null||!e[t]?null:e[t]}static Assign(e){if(e)for(let t=0;t<e.length;t++)e[t].index=t}}class v{static RegisterExtension(e,t){v.UnregisterExtension(e)&&se.Warn(`Extension with the name '${e}' already exists`),v._RegisteredExtensions[e]={factory:t}}static UnregisterExtension(e){return v._RegisteredExtensions[e]?(delete v._RegisteredExtensions[e],!0):!1}get gltf(){if(!this._gltf)throw new Error("glTF JSON is not available");return this._gltf}get bin(){return this._bin}get parent(){return this._parent}get babylonScene(){if(!this._babylonScene)throw new Error("Scene is not available");return this._babylonScene}get rootBabylonMesh(){return this._rootBabylonMesh}constructor(e){this._completePromises=new Array,this._assetContainer=null,this._babylonLights=[],this._disableInstancedMesh=0,this._allMaterialsDirtyRequired=!1,this._extensions=new Array,this._disposed=!1,this._rootUrl=null,this._fileName=null,this._uniqueRootUrl=null,this._bin=null,this._rootBabylonMesh=null,this._defaultBabylonMaterialData={},this._postSceneLoadActions=new Array,this._parent=e}dispose(){this._disposed||(this._disposed=!0,this._completePromises.length=0,this._extensions.forEach(e=>e.dispose&&e.dispose()),this._extensions.length=0,this._gltf=null,this._bin=null,this._babylonScene=null,this._rootBabylonMesh=null,this._defaultBabylonMaterialData={},this._postSceneLoadActions.length=0,this._parent.dispose())}importMeshAsync(e,t,s,i,r,n,o=""){return Promise.resolve().then(()=>{this._babylonScene=t,this._assetContainer=s,this._loadData(i);let a=null;if(e){const f={};if(this._gltf.nodes)for(const u of this._gltf.nodes)u.name&&(f[u.name]=u.index);a=(e instanceof Array?e:[e]).map(u=>{const d=f[u];if(d===void 0)throw new Error(`Failed to find node '${u}'`);return d})}return this._loadAsync(r,o,a,()=>({meshes:this._getMeshes(),particleSystems:[],skeletons:this._getSkeletons(),animationGroups:this._getAnimationGroups(),lights:this._babylonLights,transformNodes:this._getTransformNodes(),geometries:this._getGeometries()}))})}loadAsync(e,t,s,i,r=""){return Promise.resolve().then(()=>(this._babylonScene=e,this._loadData(t),this._loadAsync(s,r,null,()=>{})))}_loadAsync(e,t,s,i){return Promise.resolve().then(()=>{this._rootUrl=e,this._uniqueRootUrl=!e.startsWith("file:")&&t?e:`${e}${Date.now()}/`,this._fileName=t,this._allMaterialsDirtyRequired=!1,this._loadExtensions(),this._checkExtensions();const r=`${Ae[Ae.LOADING]} => ${Ae[Ae.READY]}`,n=`${Ae[Ae.LOADING]} => ${Ae[Ae.COMPLETE]}`;this._parent._startPerformanceCounter(r),this._parent._startPerformanceCounter(n),this._parent._setState(Ae.LOADING),this._extensionsOnLoading();const o=new Array,a=this._babylonScene.blockMaterialDirtyMechanism;if(this._babylonScene.blockMaterialDirtyMechanism=!0,!this.parent.loadOnlyMaterials){if(s)o.push(this.loadSceneAsync("/nodes",{nodes:s,index:-1}));else if(this._gltf.scene!=null||this._gltf.scenes&&this._gltf.scenes[0]){const c=C.Get("/scene",this._gltf.scenes,this._gltf.scene||0);o.push(this.loadSceneAsync(`/scenes/${c.index}`,c))}}if(!this.parent.skipMaterials&&this.parent.loadAllMaterials&&this._gltf.materials)for(let c=0;c<this._gltf.materials.length;++c){const u=this._gltf.materials[c],d="/materials/"+c,m=Se.TriangleFillMode;o.push(this._loadMaterialAsync(d,u,null,m,()=>{}))}return this._allMaterialsDirtyRequired?this._babylonScene.blockMaterialDirtyMechanism=a:this._babylonScene._forceBlockMaterialDirtyMechanism(a),this._parent.compileMaterials&&o.push(this._compileMaterialsAsync()),this._parent.compileShadowGenerators&&o.push(this._compileShadowGeneratorsAsync()),Promise.all(o).then(()=>(this._rootBabylonMesh&&this._rootBabylonMesh.setEnabled(!0),this._extensionsOnReady(),this._parent._setState(Ae.READY),this._startAnimations(),i())).then(c=>(this._parent._endPerformanceCounter(r),L.SetImmediate(()=>{this._disposed||Promise.all(this._completePromises).then(()=>{this._parent._endPerformanceCounter(n),this._parent._setState(Ae.COMPLETE),this._parent.onCompleteObservable.notifyObservers(void 0),this._parent.onCompleteObservable.clear(),this.dispose()},u=>{this._parent.onErrorObservable.notifyObservers(u),this._parent.onErrorObservable.clear(),this.dispose()})}),c))}).catch(r=>{throw this._disposed||(this._parent.onErrorObservable.notifyObservers(r),this._parent.onErrorObservable.clear(),this.dispose()),r})}_loadData(e){if(this._gltf=e.json,this._setupData(),e.bin){const t=this._gltf.buffers;if(t&&t[0]&&!t[0].uri){const s=t[0];(s.byteLength<e.bin.byteLength-3||s.byteLength>e.bin.byteLength)&&se.Warn(`Binary buffer length (${s.byteLength}) from JSON does not match chunk length (${e.bin.byteLength})`),this._bin=e.bin}else se.Warn("Unexpected BIN chunk")}}_setupData(){if(C.Assign(this._gltf.accessors),C.Assign(this._gltf.animations),C.Assign(this._gltf.buffers),C.Assign(this._gltf.bufferViews),C.Assign(this._gltf.cameras),C.Assign(this._gltf.images),C.Assign(this._gltf.materials),C.Assign(this._gltf.meshes),C.Assign(this._gltf.nodes),C.Assign(this._gltf.samplers),C.Assign(this._gltf.scenes),C.Assign(this._gltf.skins),C.Assign(this._gltf.textures),this._gltf.nodes){const e={};for(const s of this._gltf.nodes)if(s.children)for(const i of s.children)e[i]=s.index;const t=this._createRootNode();for(const s of this._gltf.nodes){const i=e[s.index];s.parent=i===void 0?t:this._gltf.nodes[i]}}}_loadExtensions(){for(const e in v._RegisteredExtensions){const t=v._RegisteredExtensions[e].factory(this);t.name!==e&&se.Warn(`The name of the glTF loader extension instance does not match the registered name: ${t.name} !== ${e}`),this._extensions.push(t),this._parent.onExtensionLoadedObservable.notifyObservers(t)}this._extensions.sort((e,t)=>(e.order||Number.MAX_VALUE)-(t.order||Number.MAX_VALUE)),this._parent.onExtensionLoadedObservable.clear()}_checkExtensions(){if(this._gltf.extensionsRequired){for(const e of this._gltf.extensionsRequired)if(!this._extensions.some(s=>s.name===e&&s.enabled))throw new Error(`Require extension ${e} is not available`)}}_createRootNode(){this._babylonScene._blockEntityCollection=!!this._assetContainer,this._rootBabylonMesh=new ye("__root__",this._babylonScene),this._rootBabylonMesh._parentContainer=this._assetContainer,this._babylonScene._blockEntityCollection=!1,this._rootBabylonMesh.setEnabled(!1);const e={_babylonTransformNode:this._rootBabylonMesh,index:-1};switch(this._parent.coordinateSystemMode){case nt.AUTO:{this._babylonScene.useRightHandedSystem||(e.rotation=[0,1,0,0],e.scale=[1,1,-1],v._LoadTransform(e,this._rootBabylonMesh));break}case nt.FORCE_RIGHT_HANDED:{this._babylonScene.useRightHandedSystem=!0;break}default:throw new Error(`Invalid coordinate system mode (${this._parent.coordinateSystemMode})`)}return this._parent.onMeshLoadedObservable.notifyObservers(this._rootBabylonMesh),e}loadSceneAsync(e,t){const s=this._extensionsLoadSceneAsync(e,t);if(s)return s;const i=new Array;if(this.logOpen(`${e} ${t.name||""}`),t.nodes)for(const r of t.nodes){const n=C.Get(`${e}/nodes/${r}`,this._gltf.nodes,r);i.push(this.loadNodeAsync(`/nodes/${n.index}`,n,o=>{o.parent=this._rootBabylonMesh}))}for(const r of this._postSceneLoadActions)r();return i.push(this._loadAnimationsAsync()),this.logClose(),Promise.all(i).then(()=>{})}_forEachPrimitive(e,t){if(e._primitiveBabylonMeshes)for(const s of e._primitiveBabylonMeshes)t(s)}_getGeometries(){const e=[],t=this._gltf.nodes;if(t)for(const s of t)this._forEachPrimitive(s,i=>{const r=i.geometry;r&&e.indexOf(r)===-1&&e.push(r)});return e}_getMeshes(){const e=[];this._rootBabylonMesh&&e.push(this._rootBabylonMesh);const t=this._gltf.nodes;if(t)for(const s of t)this._forEachPrimitive(s,i=>{e.push(i)});return e}_getTransformNodes(){const e=[],t=this._gltf.nodes;if(t)for(const s of t)s._babylonTransformNode&&s._babylonTransformNode.getClassName()==="TransformNode"&&e.push(s._babylonTransformNode),s._babylonTransformNodeForSkin&&e.push(s._babylonTransformNodeForSkin);return e}_getSkeletons(){const e=[],t=this._gltf.skins;if(t)for(const s of t)s._data&&e.push(s._data.babylonSkeleton);return e}_getAnimationGroups(){const e=[],t=this._gltf.animations;if(t)for(const s of t)s._babylonAnimationGroup&&e.push(s._babylonAnimationGroup);return e}_startAnimations(){switch(this._parent.animationStartMode){case Qe.NONE:break;case Qe.FIRST:{const e=this._getAnimationGroups();e.length!==0&&e[0].start(!0);break}case Qe.ALL:{const e=this._getAnimationGroups();for(const t of e)t.start(!0);break}default:{se.Error(`Invalid animation start mode (${this._parent.animationStartMode})`);return}}}loadNodeAsync(e,t,s=()=>{}){const i=this._extensionsLoadNodeAsync(e,t,s);if(i)return i;if(t._babylonTransformNode)throw new Error(`${e}: Invalid recursive node hierarchy`);const r=new Array;this.logOpen(`${e} ${t.name||""}`);const n=o=>{if(v.AddPointerMetadata(o,e),v._LoadTransform(t,o),t.camera!=null){const a=C.Get(`${e}/camera`,this._gltf.cameras,t.camera);r.push(this.loadCameraAsync(`/cameras/${a.index}`,a,f=>{f.parent=o}))}if(t.children)for(const a of t.children){const f=C.Get(`${e}/children/${a}`,this._gltf.nodes,a);r.push(this.loadNodeAsync(`/nodes/${f.index}`,f,c=>{c.parent=o}))}s(o)};if(t.mesh==null||t.skin!=null){const o=t.name||`node${t.index}`;this._babylonScene._blockEntityCollection=!!this._assetContainer;const a=new ht(o,this._babylonScene);a._parentContainer=this._assetContainer,this._babylonScene._blockEntityCollection=!1,t.mesh==null?t._babylonTransformNode=a:t._babylonTransformNodeForSkin=a,n(a)}if(t.mesh!=null)if(t.skin==null){const o=C.Get(`${e}/mesh`,this._gltf.meshes,t.mesh);r.push(this._loadMeshAsync(`/meshes/${o.index}`,t,o,n))}else{const o=C.Get(`${e}/mesh`,this._gltf.meshes,t.mesh);r.push(this._loadMeshAsync(`/meshes/${o.index}`,t,o,a=>{const f=t._babylonTransformNodeForSkin;a.metadata=Xi(f.metadata,a.metadata||{});const c=C.Get(`${e}/skin`,this._gltf.skins,t.skin);r.push(this._loadSkinAsync(`/skins/${c.index}`,t,c,u=>{this._forEachPrimitive(t,d=>{d.skeleton=u}),this._postSceneLoadActions.push(()=>{if(c.skeleton!=null){const d=C.Get(`/skins/${c.index}/skeleton`,this._gltf.nodes,c.skeleton).parent;t.index===d.index?a.parent=f.parent:a.parent=d._babylonTransformNode}else a.parent=this._rootBabylonMesh;this._parent.onSkinLoadedObservable.notifyObservers({node:f,skinnedNode:a})})}))}))}return this.logClose(),Promise.all(r).then(()=>(this._forEachPrimitive(t,o=>{o.geometry&&o.geometry.useBoundingInfoFromGeometry?o._updateBoundingInfo():o.refreshBoundingInfo(!0)}),t._babylonTransformNode))}_loadMeshAsync(e,t,s,i){const r=s.primitives;if(!r||!r.length)throw new Error(`${e}: Primitives are missing`);r[0].index==null&&C.Assign(r);const n=new Array;this.logOpen(`${e} ${s.name||""}`);const o=t.name||`node${t.index}`;if(r.length===1){const a=s.primitives[0];n.push(this._loadMeshPrimitiveAsync(`${e}/primitives/${a.index}`,o,t,s,a,f=>{t._babylonTransformNode=f,t._primitiveBabylonMeshes=[f]}))}else{this._babylonScene._blockEntityCollection=!!this._assetContainer,t._babylonTransformNode=new ht(o,this._babylonScene),t._babylonTransformNode._parentContainer=this._assetContainer,this._babylonScene._blockEntityCollection=!1,t._primitiveBabylonMeshes=[];for(const a of r)n.push(this._loadMeshPrimitiveAsync(`${e}/primitives/${a.index}`,`${o}_primitive${a.index}`,t,s,a,f=>{f.parent=t._babylonTransformNode,t._primitiveBabylonMeshes.push(f)}))}return i(t._babylonTransformNode),this.logClose(),Promise.all(n).then(()=>t._babylonTransformNode)}_loadMeshPrimitiveAsync(e,t,s,i,r,n){const o=this._extensionsLoadMeshPrimitiveAsync(e,t,s,i,r,n);if(o)return o;this.logOpen(`${e}`);const a=this._disableInstancedMesh===0&&this._parent.createInstances&&s.skin==null&&!i.primitives[0].targets;let f,c;if(a&&r._instanceData)this._babylonScene._blockEntityCollection=!!this._assetContainer,f=r._instanceData.babylonSourceMesh.createInstance(t),f._parentContainer=this._assetContainer,this._babylonScene._blockEntityCollection=!1,c=r._instanceData.promise;else{const u=new Array;this._babylonScene._blockEntityCollection=!!this._assetContainer;const d=new ye(t,this._babylonScene);d._parentContainer=this._assetContainer,this._babylonScene._blockEntityCollection=!1,d.overrideMaterialSideOrientation=this._babylonScene.useRightHandedSystem?Se.CounterClockWiseSideOrientation:Se.ClockWiseSideOrientation,this._createMorphTargets(e,s,i,r,d),u.push(this._loadVertexDataAsync(e,r,d).then(g=>this._loadMorphTargetsAsync(e,r,d,g).then(()=>{this._disposed||(this._babylonScene._blockEntityCollection=!!this._assetContainer,g.applyToMesh(d),g._parentContainer=this._assetContainer,this._babylonScene._blockEntityCollection=!1)})));const m=v._GetDrawMode(e,r.mode);if(r.material==null){let g=this._defaultBabylonMaterialData[m];g||(g=this._createDefaultMaterial("__GLTFLoader._default",m),this._parent.onMaterialLoadedObservable.notifyObservers(g),this._defaultBabylonMaterialData[m]=g),d.material=g}else if(!this.parent.skipMaterials){const g=C.Get(`${e}/material`,this._gltf.materials,r.material);u.push(this._loadMaterialAsync(`/materials/${g.index}`,g,d,m,T=>{d.material=T}))}c=Promise.all(u),a&&(r._instanceData={babylonSourceMesh:d,promise:c}),f=d}return v.AddPointerMetadata(f,e),this._parent.onMeshLoadedObservable.notifyObservers(f),n(f),this.logClose(),c.then(()=>f)}_loadVertexDataAsync(e,t,s){const i=this._extensionsLoadVertexDataAsync(e,t,s);if(i)return i;const r=t.attributes;if(!r)throw new Error(`${e}: Attributes are missing`);const n=new Array,o=new _t(s.name,this._babylonScene);if(t.indices==null)s.isUnIndexed=!0;else{const f=C.Get(`${e}/indices`,this._gltf.accessors,t.indices);n.push(this._loadIndicesAccessorAsync(`/accessors/${f.index}`,f).then(c=>{o.setIndices(c)}))}const a=(f,c,u)=>{if(r[f]==null)return;s._delayInfo=s._delayInfo||[],s._delayInfo.indexOf(c)===-1&&s._delayInfo.push(c);const d=C.Get(`${e}/attributes/${f}`,this._gltf.accessors,r[f]);n.push(this._loadVertexAccessorAsync(`/accessors/${d.index}`,d,c).then(m=>{if(m.getKind()===p.PositionKind&&!this.parent.alwaysComputeBoundingBox&&!s.skeleton&&d.min&&d.max){const g=Z.Vector3[0].copyFromFloats(...d.min),T=Z.Vector3[1].copyFromFloats(...d.max);if(d.normalized&&d.componentType!==5126){let S=1;switch(d.componentType){case 5120:S=127;break;case 5121:S=255;break;case 5122:S=32767;break;case 5123:S=65535;break}const E=1/S;g.scaleInPlace(E),T.scaleInPlace(E)}o._boundingInfo=new Es(g,T),o.useBoundingInfoFromGeometry=!0}o.setVerticesBuffer(m,d.count)})),c==p.MatricesIndicesExtraKind&&(s.numBoneInfluencers=8),u&&u(d)};return a("POSITION",p.PositionKind),a("NORMAL",p.NormalKind),a("TANGENT",p.TangentKind),a("TEXCOORD_0",p.UVKind),a("TEXCOORD_1",p.UV2Kind),a("TEXCOORD_2",p.UV3Kind),a("TEXCOORD_3",p.UV4Kind),a("TEXCOORD_4",p.UV5Kind),a("TEXCOORD_5",p.UV6Kind),a("JOINTS_0",p.MatricesIndicesKind),a("WEIGHTS_0",p.MatricesWeightsKind),a("JOINTS_1",p.MatricesIndicesExtraKind),a("WEIGHTS_1",p.MatricesWeightsExtraKind),a("COLOR_0",p.ColorKind,f=>{f.type==="VEC4"&&(s.hasVertexAlpha=!0)}),Promise.all(n).then(()=>o)}_createMorphTargets(e,t,s,i,r){if(!i.targets)return;if(t._numMorphTargets==null)t._numMorphTargets=i.targets.length;else if(i.targets.length!==t._numMorphTargets)throw new Error(`${e}: Primitives do not have the same number of targets`);const n=s.extras?s.extras.targetNames:null;this._babylonScene._blockEntityCollection=!!this._assetContainer,r.morphTargetManager=new _s(this._babylonScene),r.morphTargetManager._parentContainer=this._assetContainer,this._babylonScene._blockEntityCollection=!1,r.morphTargetManager.areUpdatesFrozen=!0;for(let o=0;o<i.targets.length;o++){const a=t.weights?t.weights[o]:s.weights?s.weights[o]:0,f=n?n[o]:`morphTarget${o}`;r.morphTargetManager.addTarget(new ps(f,a,r.getScene()))}}_loadMorphTargetsAsync(e,t,s,i){if(!t.targets)return Promise.resolve();const r=new Array,n=s.morphTargetManager;for(let o=0;o<n.numTargets;o++){const a=n.getTarget(o);r.push(this._loadMorphTargetVertexDataAsync(`${e}/targets/${o}`,i,t.targets[o],a))}return Promise.all(r).then(()=>{n.areUpdatesFrozen=!1})}_loadMorphTargetVertexDataAsync(e,t,s,i){const r=new Array,n=(o,a,f)=>{if(s[o]==null)return;const c=t.getVertexBuffer(a);if(!c)return;const u=C.Get(`${e}/${o}`,this._gltf.accessors,s[o]);r.push(this._loadFloatAccessorAsync(`/accessors/${u.index}`,u).then(d=>{f(c,d)}))};return n("POSITION",p.PositionKind,(o,a)=>{const f=new Float32Array(a.length);o.forEach(a.length,(c,u)=>{f[u]=a[u]+c}),i.setPositions(f)}),n("NORMAL",p.NormalKind,(o,a)=>{const f=new Float32Array(a.length);o.forEach(f.length,(c,u)=>{f[u]=a[u]+c}),i.setNormals(f)}),n("TANGENT",p.TangentKind,(o,a)=>{const f=new Float32Array(a.length/3*4);let c=0;o.forEach(a.length/3*4,(u,d)=>{(d+1)%4!==0&&(f[c]=a[c]+u,c++)}),i.setTangents(f)}),Promise.all(r).then(()=>{})}static _LoadTransform(e,t){if(e.skin!=null)return;let s=x.Zero(),i=he.Identity(),r=x.One();e.matrix?ce.FromArray(e.matrix).decompose(r,i,s):(e.translation&&(s=x.FromArray(e.translation)),e.rotation&&(i=he.FromArray(e.rotation)),e.scale&&(r=x.FromArray(e.scale))),t.position=s,t.rotationQuaternion=i,t.scaling=r}_loadSkinAsync(e,t,s,i){const r=this._extensionsLoadSkinAsync(e,t,s);if(r)return r;if(s._data)return i(s._data.babylonSkeleton),s._data.promise;const n=`skeleton${s.index}`;this._babylonScene._blockEntityCollection=!!this._assetContainer;const o=new di(s.name||n,n,this._babylonScene);o._parentContainer=this._assetContainer,this._babylonScene._blockEntityCollection=!1,this._loadBones(e,s,o);const a=this._loadSkinInverseBindMatricesDataAsync(e,s).then(f=>{this._updateBoneMatrices(o,f)});return s._data={babylonSkeleton:o,promise:a},i(o),a}_loadBones(e,t,s){if(t.skeleton==null||this._parent.alwaysComputeSkeletonRootNode){const r=this._findSkeletonRootNode(`${e}/joints`,t.joints);if(r)if(t.skeleton===void 0)t.skeleton=r.index;else{const n=(a,f)=>{for(;f.parent;f=f.parent)if(f.parent===a)return!0;return!1},o=C.Get(`${e}/skeleton`,this._gltf.nodes,t.skeleton);o!==r&&!n(o,r)&&(se.Warn(`${e}/skeleton: Overriding with nearest common ancestor as skeleton node is not a common root`),t.skeleton=r.index)}else se.Warn(`${e}: Failed to find common root`)}const i={};for(const r of t.joints){const n=C.Get(`${e}/joints/${r}`,this._gltf.nodes,r);this._loadBone(n,t,s,i)}}_findSkeletonRootNode(e,t){if(t.length===0)return null;const s={};for(const r of t){const n=[];let o=C.Get(`${e}/${r}`,this._gltf.nodes,r);for(;o.index!==-1;)n.unshift(o),o=o.parent;s[r]=n}let i=null;for(let r=0;;++r){let n=s[t[0]];if(r>=n.length)return i;const o=n[r];for(let a=1;a<t.length;++a)if(n=s[t[a]],r>=n.length||o!==n[r])return i;i=o}}_loadBone(e,t,s,i){let r=i[e.index];if(r)return r;let n=null;e.index!==t.skeleton&&(e.parent&&e.parent.index!==-1?n=this._loadBone(e.parent,t,s,i):t.skeleton!==void 0&&se.Warn(`/skins/${t.index}/skeleton: Skeleton node is not a common root`));const o=t.joints.indexOf(e.index);return r=new ft(e.name||`joint${e.index}`,s,n,this._getNodeMatrix(e),null,null,o),i[e.index]=r,this._postSceneLoadActions.push(()=>{r.linkTransformNode(e._babylonTransformNode)}),r}_loadSkinInverseBindMatricesDataAsync(e,t){if(t.inverseBindMatrices==null)return Promise.resolve(null);const s=C.Get(`${e}/inverseBindMatrices`,this._gltf.accessors,t.inverseBindMatrices);return this._loadFloatAccessorAsync(`/accessors/${s.index}`,s)}_updateBoneMatrices(e,t){for(const s of e.bones){const i=ce.Identity(),r=s._index;t&&r!==-1&&(ce.FromArrayToRef(t,r*16,i),i.invertToRef(i));const n=s.getParent();n&&i.multiplyToRef(n.getAbsoluteInverseBindMatrix(),i),s.updateMatrix(i,!1,!1),s._updateAbsoluteBindMatrices(void 0,!1)}}_getNodeMatrix(e){return e.matrix?ce.FromArray(e.matrix):ce.Compose(e.scale?x.FromArray(e.scale):x.One(),e.rotation?he.FromArray(e.rotation):he.Identity(),e.translation?x.FromArray(e.translation):x.Zero())}loadCameraAsync(e,t,s=()=>{}){const i=this._extensionsLoadCameraAsync(e,t,s);if(i)return i;const r=new Array;this.logOpen(`${e} ${t.name||""}`),this._babylonScene._blockEntityCollection=!!this._assetContainer;const n=new mt(t.name||`camera${t.index}`,x.Zero(),this._babylonScene,!1);switch(n._parentContainer=this._assetContainer,this._babylonScene._blockEntityCollection=!1,n.ignoreParentScaling=!0,t._babylonCamera=n,n.rotation=new x(0,Math.PI,0),t.type){case"perspective":{const o=t.perspective;if(!o)throw new Error(`${e}: Camera perspective properties are missing`);n.fov=o.yfov,n.minZ=o.znear,n.maxZ=o.zfar||0;break}case"orthographic":{if(!t.orthographic)throw new Error(`${e}: Camera orthographic properties are missing`);n.mode=ki.ORTHOGRAPHIC_CAMERA,n.orthoLeft=-t.orthographic.xmag,n.orthoRight=t.orthographic.xmag,n.orthoBottom=-t.orthographic.ymag,n.orthoTop=t.orthographic.ymag,n.minZ=t.orthographic.znear,n.maxZ=t.orthographic.zfar;break}default:throw new Error(`${e}: Invalid camera type (${t.type})`)}return v.AddPointerMetadata(n,e),this._parent.onCameraLoadedObservable.notifyObservers(n),s(n),this.logClose(),Promise.all(r).then(()=>n)}_loadAnimationsAsync(){const e=this._gltf.animations;if(!e)return Promise.resolve();const t=new Array;for(let s=0;s<e.length;s++){const i=e[s];t.push(this.loadAnimationAsync(`/animations/${i.index}`,i).then(r=>{r.targetedAnimations.length===0&&r.dispose()}))}return Promise.all(t).then(()=>{})}loadAnimationAsync(e,t){const s=this._extensionsLoadAnimationAsync(e,t);if(s)return s;this._babylonScene._blockEntityCollection=!!this._assetContainer;const i=new gs(t.name||`animation${t.index}`,this._babylonScene);i._parentContainer=this._assetContainer,this._babylonScene._blockEntityCollection=!1,t._babylonAnimationGroup=i;const r=new Array;C.Assign(t.channels),C.Assign(t.samplers);for(const n of t.channels)r.push(this._loadAnimationChannelAsync(`${e}/channels/${n.index}`,e,t,n,(o,a)=>{o.animations=o.animations||[],o.animations.push(a),i.addTargetedAnimation(a,o)}));return Promise.all(r).then(()=>(i.normalize(0),i))}_loadAnimationChannelAsync(e,t,s,i,r){const n=this._extensionsLoadAnimationChannelAsync(e,t,s,i,r);if(n)return n;if(i.target.node==null)return Promise.resolve();const o=C.Get(`${e}/target/node`,this._gltf.nodes,i.target.node);if(i.target.path==="weights"&&!o._numMorphTargets||i.target.path!=="weights"&&!o._babylonTransformNode)return Promise.resolve();let a;switch(i.target.path){case"translation":{a=st.translation;break}case"rotation":{a=st.rotation;break}case"scale":{a=st.scale;break}case"weights":{a=st.weights;break}default:throw new Error(`${e}/target/path: Invalid value (${i.target.path})`)}const f={target:o,properties:a};return this._loadAnimationChannelFromTargetInfoAsync(e,t,s,i,f,r)}_loadAnimationChannelFromTargetInfoAsync(e,t,s,i,r,n){const o=this.parent.targetFps,a=1/o,f=C.Get(`${e}/sampler`,s.samplers,i.sampler);return this._loadAnimationSamplerAsync(`${t}/samplers/${i.sampler}`,f).then(c=>{let u=0;for(const d of r.properties){const m=d.getStride(r.target),g=c.input,T=c.output,S=new Array(g.length);let E=0;switch(c.interpolation){case"STEP":{for(let b=0;b<g.length;b++){const w=d.getValue(r.target,T,E,1);E+=m,S[b]={frame:g[b]*o,value:w,interpolation:vs.STEP}}break}case"CUBICSPLINE":{for(let b=0;b<g.length;b++){const w=d.getValue(r.target,T,E,a);E+=m;const B=d.getValue(r.target,T,E,1);E+=m;const N=d.getValue(r.target,T,E,a);E+=m,S[b]={frame:g[b]*o,inTangent:w,value:B,outTangent:N}}break}case"LINEAR":{for(let b=0;b<g.length;b++){const w=d.getValue(r.target,T,E,1);E+=m,S[b]={frame:g[b]*o,value:w}}break}}if(E>0){const b=`${s.name||`animation${s.index}`}_channel${i.index}_${u}`;d.buildAnimations(r.target,b,o,S,(w,B)=>{++u,n(w,B)})}}})}_loadAnimationSamplerAsync(e,t){if(t._data)return t._data;const s=t.interpolation||"LINEAR";switch(s){case"STEP":case"LINEAR":case"CUBICSPLINE":break;default:throw new Error(`${e}/interpolation: Invalid value (${t.interpolation})`)}const i=C.Get(`${e}/input`,this._gltf.accessors,t.input),r=C.Get(`${e}/output`,this._gltf.accessors,t.output);return t._data=Promise.all([this._loadFloatAccessorAsync(`/accessors/${i.index}`,i),this._loadFloatAccessorAsync(`/accessors/${r.index}`,r)]).then(([n,o])=>({input:n,interpolation:s,output:o})),t._data}loadBufferAsync(e,t,s,i){const r=this._extensionsLoadBufferAsync(e,t,s,i);if(r)return r;if(!t._data)if(t.uri)t._data=this.loadUriAsync(`${e}/uri`,t,t.uri);else{if(!this._bin)throw new Error(`${e}: Uri is missing or the binary glTF is missing its binary chunk`);t._data=this._bin.readAsync(0,t.byteLength)}return t._data.then(n=>{try{return new Uint8Array(n.buffer,n.byteOffset+s,i)}catch(o){throw new Error(`${e}: ${o.message}`)}})}loadBufferViewAsync(e,t){const s=this._extensionsLoadBufferViewAsync(e,t);if(s)return s;if(t._data)return t._data;const i=C.Get(`${e}/buffer`,this._gltf.buffers,t.buffer);return t._data=this.loadBufferAsync(`/buffers/${i.index}`,i,t.byteOffset||0,t.byteLength),t._data}_loadAccessorAsync(e,t,s){if(t._data)return t._data;const i=v._GetNumComponents(e,t.type),r=i*p.GetTypeByteLength(t.componentType),n=i*t.count;if(t.bufferView==null)t._data=Promise.resolve(new s(n));else{const o=C.Get(`${e}/bufferView`,this._gltf.bufferViews,t.bufferView);t._data=this.loadBufferViewAsync(`/bufferViews/${o.index}`,o).then(a=>{if(t.componentType===5126&&!t.normalized&&(!o.byteStride||o.byteStride===r))return v._GetTypedArray(e,t.componentType,a,t.byteOffset,n);{const f=new s(n);return p.ForEach(a,t.byteOffset||0,o.byteStride||r,i,t.componentType,f.length,t.normalized||!1,(c,u)=>{f[u]=c}),f}})}if(t.sparse){const o=t.sparse;t._data=t._data.then(a=>{const f=a,c=C.Get(`${e}/sparse/indices/bufferView`,this._gltf.bufferViews,o.indices.bufferView),u=C.Get(`${e}/sparse/values/bufferView`,this._gltf.bufferViews,o.values.bufferView);return Promise.all([this.loadBufferViewAsync(`/bufferViews/${c.index}`,c),this.loadBufferViewAsync(`/bufferViews/${u.index}`,u)]).then(([d,m])=>{const g=v._GetTypedArray(`${e}/sparse/indices`,o.indices.componentType,d,o.indices.byteOffset,o.count),T=i*o.count;let S;if(t.componentType===5126&&!t.normalized)S=v._GetTypedArray(`${e}/sparse/values`,t.componentType,m,o.values.byteOffset,T);else{const b=v._GetTypedArray(`${e}/sparse/values`,t.componentType,m,o.values.byteOffset,T);S=new s(T),p.ForEach(b,0,r,i,t.componentType,S.length,t.normalized||!1,(w,B)=>{S[B]=w})}let E=0;for(let b=0;b<g.length;b++){let w=g[b]*i;for(let B=0;B<i;B++)f[w++]=S[E++]}return f})})}return t._data}_loadFloatAccessorAsync(e,t){return this._loadAccessorAsync(e,t,Float32Array)}_loadIndicesAccessorAsync(e,t){if(t.type!=="SCALAR")throw new Error(`${e}/type: Invalid value ${t.type}`);if(t.componentType!==5121&&t.componentType!==5123&&t.componentType!==5125)throw new Error(`${e}/componentType: Invalid value ${t.componentType}`);if(t._data)return t._data;if(t.sparse){const s=v._GetTypedArrayConstructor(`${e}/componentType`,t.componentType);t._data=this._loadAccessorAsync(e,t,s)}else{const s=C.Get(`${e}/bufferView`,this._gltf.bufferViews,t.bufferView);t._data=this.loadBufferViewAsync(`/bufferViews/${s.index}`,s).then(i=>v._GetTypedArray(e,t.componentType,i,t.byteOffset,t.count))}return t._data}_loadVertexBufferViewAsync(e){if(e._babylonBuffer)return e._babylonBuffer;const t=this._babylonScene.getEngine();return e._babylonBuffer=this.loadBufferViewAsync(`/bufferViews/${e.index}`,e).then(s=>new Ts(t,s,!1)),e._babylonBuffer}_loadVertexAccessorAsync(e,t,s){var i;if(!((i=t._babylonVertexBuffer)===null||i===void 0)&&i[s])return t._babylonVertexBuffer[s];t._babylonVertexBuffer||(t._babylonVertexBuffer={});const r=this._babylonScene.getEngine();if(t.sparse||t.bufferView==null)t._babylonVertexBuffer[s]=this._loadFloatAccessorAsync(e,t).then(n=>new p(r,n,s,!1));else{const n=C.Get(`${e}/bufferView`,this._gltf.bufferViews,t.bufferView);t._babylonVertexBuffer[s]=this._loadVertexBufferViewAsync(n).then(o=>{const a=v._GetNumComponents(e,t.type);return new p(r,o,s,!1,void 0,n.byteStride,void 0,t.byteOffset,a,t.componentType,t.normalized,!0,void 0,!0)})}return t._babylonVertexBuffer[s]}_loadMaterialMetallicRoughnessPropertiesAsync(e,t,s){if(!(s instanceof q))throw new Error(`${e}: Material type not supported`);const i=new Array;return t&&(t.baseColorFactor?(s.albedoColor=y.FromArray(t.baseColorFactor),s.alpha=t.baseColorFactor[3]):s.albedoColor=y.White(),s.metallic=t.metallicFactor==null?1:t.metallicFactor,s.roughness=t.roughnessFactor==null?1:t.roughnessFactor,t.baseColorTexture&&i.push(this.loadTextureInfoAsync(`${e}/baseColorTexture`,t.baseColorTexture,r=>{r.name=`${s.name} (Base Color)`,s.albedoTexture=r})),t.metallicRoughnessTexture&&(t.metallicRoughnessTexture.nonColorData=!0,i.push(this.loadTextureInfoAsync(`${e}/metallicRoughnessTexture`,t.metallicRoughnessTexture,r=>{r.name=`${s.name} (Metallic Roughness)`,s.metallicTexture=r})),s.useMetallnessFromMetallicTextureBlue=!0,s.useRoughnessFromMetallicTextureGreen=!0,s.useRoughnessFromMetallicTextureAlpha=!1)),Promise.all(i).then(()=>{})}_loadMaterialAsync(e,t,s,i,r=()=>{}){const n=this._extensionsLoadMaterialAsync(e,t,s,i,r);if(n)return n;t._data=t._data||{};let o=t._data[i];if(!o){this.logOpen(`${e} ${t.name||""}`);const a=this.createMaterial(e,t,i);o={babylonMaterial:a,babylonMeshes:[],promise:this.loadMaterialPropertiesAsync(e,t,a)},t._data[i]=o,v.AddPointerMetadata(a,e),this._parent.onMaterialLoadedObservable.notifyObservers(a),this.logClose()}return s&&(o.babylonMeshes.push(s),s.onDisposeObservable.addOnce(()=>{const a=o.babylonMeshes.indexOf(s);a!==-1&&o.babylonMeshes.splice(a,1)})),r(o.babylonMaterial),o.promise.then(()=>o.babylonMaterial)}_createDefaultMaterial(e,t){this._babylonScene._blockEntityCollection=!!this._assetContainer;const s=new q(e,this._babylonScene);return s._parentContainer=this._assetContainer,this._babylonScene._blockEntityCollection=!1,s.fillMode=t,s.enableSpecularAntiAliasing=!0,s.useRadianceOverAlpha=!this._parent.transparencyAsCoverage,s.useSpecularOverAlpha=!this._parent.transparencyAsCoverage,s.transparencyMode=q.PBRMATERIAL_OPAQUE,s.metallic=1,s.roughness=1,s}createMaterial(e,t,s){const i=this._extensionsCreateMaterial(e,t,s);if(i)return i;const r=t.name||`material${t.index}`;return this._createDefaultMaterial(r,s)}loadMaterialPropertiesAsync(e,t,s){const i=this._extensionsLoadMaterialPropertiesAsync(e,t,s);if(i)return i;const r=new Array;return r.push(this.loadMaterialBasePropertiesAsync(e,t,s)),t.pbrMetallicRoughness&&r.push(this._loadMaterialMetallicRoughnessPropertiesAsync(`${e}/pbrMetallicRoughness`,t.pbrMetallicRoughness,s)),this.loadMaterialAlphaProperties(e,t,s),Promise.all(r).then(()=>{})}loadMaterialBasePropertiesAsync(e,t,s){if(!(s instanceof q))throw new Error(`${e}: Material type not supported`);const i=new Array;return s.emissiveColor=t.emissiveFactor?y.FromArray(t.emissiveFactor):new y(0,0,0),t.doubleSided&&(s.backFaceCulling=!1,s.twoSidedLighting=!0),t.normalTexture&&(t.normalTexture.nonColorData=!0,i.push(this.loadTextureInfoAsync(`${e}/normalTexture`,t.normalTexture,r=>{r.name=`${s.name} (Normal)`,s.bumpTexture=r})),s.invertNormalMapX=!this._babylonScene.useRightHandedSystem,s.invertNormalMapY=this._babylonScene.useRightHandedSystem,t.normalTexture.scale!=null&&s.bumpTexture&&(s.bumpTexture.level=t.normalTexture.scale),s.forceIrradianceInFragment=!0),t.occlusionTexture&&(t.occlusionTexture.nonColorData=!0,i.push(this.loadTextureInfoAsync(`${e}/occlusionTexture`,t.occlusionTexture,r=>{r.name=`${s.name} (Occlusion)`,s.ambientTexture=r})),s.useAmbientInGrayScale=!0,t.occlusionTexture.strength!=null&&(s.ambientTextureStrength=t.occlusionTexture.strength)),t.emissiveTexture&&i.push(this.loadTextureInfoAsync(`${e}/emissiveTexture`,t.emissiveTexture,r=>{r.name=`${s.name} (Emissive)`,s.emissiveTexture=r})),Promise.all(i).then(()=>{})}loadMaterialAlphaProperties(e,t,s){if(!(s instanceof q))throw new Error(`${e}: Material type not supported`);switch(t.alphaMode||"OPAQUE"){case"OPAQUE":{s.transparencyMode=q.PBRMATERIAL_OPAQUE;break}case"MASK":{s.transparencyMode=q.PBRMATERIAL_ALPHATEST,s.alphaCutOff=t.alphaCutoff==null?.5:t.alphaCutoff,s.albedoTexture&&(s.albedoTexture.hasAlpha=!0);break}case"BLEND":{s.transparencyMode=q.PBRMATERIAL_ALPHABLEND,s.albedoTexture&&(s.albedoTexture.hasAlpha=!0,s.useAlphaFromAlbedoTexture=!0);break}default:throw new Error(`${e}/alphaMode: Invalid value (${t.alphaMode})`)}}loadTextureInfoAsync(e,t,s=()=>{}){const i=this._extensionsLoadTextureInfoAsync(e,t,s);if(i)return i;if(this.logOpen(`${e}`),t.texCoord>=6)throw new Error(`${e}/texCoord: Invalid value (${t.texCoord})`);const r=C.Get(`${e}/index`,this._gltf.textures,t.index);r._textureInfo=t;const n=this._loadTextureAsync(`/textures/${t.index}`,r,o=>{o.coordinatesIndex=t.texCoord||0,v.AddPointerMetadata(o,e),this._parent.onTextureLoadedObservable.notifyObservers(o),s(o)});return this.logClose(),n}_loadTextureAsync(e,t,s=()=>{}){const i=this._extensionsLoadTextureAsync(e,t,s);if(i)return i;this.logOpen(`${e} ${t.name||""}`);const r=t.sampler==null?v.DefaultSampler:C.Get(`${e}/sampler`,this._gltf.samplers,t.sampler),n=C.Get(`${e}/source`,this._gltf.images,t.source),o=this._createTextureAsync(e,r,n,s,void 0,!t._textureInfo.nonColorData);return this.logClose(),o}_createTextureAsync(e,t,s,i=()=>{},r,n){const o=this._loadSampler(`/samplers/${t.index}`,t),a=new Array,f=new it;this._babylonScene._blockEntityCollection=!!this._assetContainer;const c={noMipmap:o.noMipMaps,invertY:!1,samplingMode:o.samplingMode,onLoad:()=>{this._disposed||f.resolve()},onError:(d,m)=>{this._disposed||f.reject(new Error(`${e}: ${m&&m.message?m.message:d||"Failed to load texture"}`))},mimeType:s.mimeType,loaderOptions:r,useSRGBBuffer:!!n&&this._parent.useSRGBBuffers},u=new D(null,this._babylonScene,c);return u._parentContainer=this._assetContainer,this._babylonScene._blockEntityCollection=!1,a.push(f.promise),a.push(this.loadImageAsync(`/images/${s.index}`,s).then(d=>{const m=s.uri||`${this._fileName}#image${s.index}`,g=`data:${this._uniqueRootUrl}${m}`;u.updateURL(g,d)})),u.wrapU=o.wrapU,u.wrapV=o.wrapV,i(u),Promise.all(a).then(()=>u)}_loadSampler(e,t){return t._data||(t._data={noMipMaps:t.minFilter===9728||t.minFilter===9729,samplingMode:v._GetTextureSamplingMode(e,t),wrapU:v._GetTextureWrapMode(`${e}/wrapS`,t.wrapS),wrapV:v._GetTextureWrapMode(`${e}/wrapT`,t.wrapT)}),t._data}loadImageAsync(e,t){if(!t._data){if(this.logOpen(`${e} ${t.name||""}`),t.uri)t._data=this.loadUriAsync(`${e}/uri`,t,t.uri);else{const s=C.Get(`${e}/bufferView`,this._gltf.bufferViews,t.bufferView);t._data=this.loadBufferViewAsync(`/bufferViews/${s.index}`,s)}this.logClose()}return t._data}loadUriAsync(e,t,s){const i=this._extensionsLoadUriAsync(e,t,s);if(i)return i;if(!v._ValidateUri(s))throw new Error(`${e}: '${s}' is invalid`);if(As(s)){const r=new Uint8Array(Ui(s));return this.log(`${e}: Decoded ${s.substr(0,64)}... (${r.length} bytes)`),Promise.resolve(r)}return this.log(`${e}: Loading ${s}`),this._parent.preprocessUrlAsync(this._rootUrl+s).then(r=>new Promise((n,o)=>{this._parent._loadFile(this._babylonScene,r,a=>{this._disposed||(this.log(`${e}: Loaded ${s} (${a.byteLength} bytes)`),n(new Uint8Array(a)))},!0,a=>{o(new xs(`${e}: Failed to load '${s}'${a?": "+a.status+" "+a.statusText:""}`,a))})}))}static AddPointerMetadata(e,t){e.metadata=e.metadata||{};const s=e._internalMetadata=e._internalMetadata||{},i=s.gltf=s.gltf||{};(i.pointers=i.pointers||[]).push(t)}static _GetTextureWrapMode(e,t){switch(t=t??10497,t){case 33071:return D.CLAMP_ADDRESSMODE;case 33648:return D.MIRROR_ADDRESSMODE;case 10497:return D.WRAP_ADDRESSMODE;default:return se.Warn(`${e}: Invalid value (${t})`),D.WRAP_ADDRESSMODE}}static _GetTextureSamplingMode(e,t){const s=t.magFilter==null?9729:t.magFilter,i=t.minFilter==null?9987:t.minFilter;if(s===9729)switch(i){case 9728:return D.LINEAR_NEAREST;case 9729:return D.LINEAR_LINEAR;case 9984:return D.LINEAR_NEAREST_MIPNEAREST;case 9985:return D.LINEAR_LINEAR_MIPNEAREST;case 9986:return D.LINEAR_NEAREST_MIPLINEAR;case 9987:return D.LINEAR_LINEAR_MIPLINEAR;default:return se.Warn(`${e}/minFilter: Invalid value (${i})`),D.LINEAR_LINEAR_MIPLINEAR}else switch(s!==9728&&se.Warn(`${e}/magFilter: Invalid value (${s})`),i){case 9728:return D.NEAREST_NEAREST;case 9729:return D.NEAREST_LINEAR;case 9984:return D.NEAREST_NEAREST_MIPNEAREST;case 9985:return D.NEAREST_LINEAR_MIPNEAREST;case 9986:return D.NEAREST_NEAREST_MIPLINEAR;case 9987:return D.NEAREST_LINEAR_MIPLINEAR;default:return se.Warn(`${e}/minFilter: Invalid value (${i})`),D.NEAREST_NEAREST_MIPNEAREST}}static _GetTypedArrayConstructor(e,t){switch(t){case 5120:return Int8Array;case 5121:return Uint8Array;case 5122:return Int16Array;case 5123:return Uint16Array;case 5125:return Uint32Array;case 5126:return Float32Array;default:throw new Error(`${e}: Invalid component type ${t}`)}}static _GetTypedArray(e,t,s,i,r){const n=s.buffer;i=s.byteOffset+(i||0);const o=v._GetTypedArrayConstructor(`${e}/componentType`,t),a=p.GetTypeByteLength(t);return i%a!==0?(se.Warn(`${e}: Copying buffer as byte offset (${i}) is not a multiple of component type byte length (${a})`),new o(n.slice(i,i+r*a),0)):new o(n,i,r)}static _GetNumComponents(e,t){switch(t){case"SCALAR":return 1;case"VEC2":return 2;case"VEC3":return 3;case"VEC4":return 4;case"MAT2":return 4;case"MAT3":return 9;case"MAT4":return 16}throw new Error(`${e}: Invalid type (${t})`)}static _ValidateUri(e){return L.IsBase64(e)||e.indexOf("..")===-1}static _GetDrawMode(e,t){switch(t==null&&(t=4),t){case 0:return Se.PointListDrawMode;case 1:return Se.LineListDrawMode;case 2:return Se.LineLoopDrawMode;case 3:return Se.LineStripDrawMode;case 4:return Se.TriangleFillMode;case 5:return Se.TriangleStripDrawMode;case 6:return Se.TriangleFanDrawMode}throw new Error(`${e}: Invalid mesh primitive mode (${t})`)}_compileMaterialsAsync(){this._parent._startPerformanceCounter("Compile materials");const e=new Array;if(this._gltf.materials){for(const t of this._gltf.materials)if(t._data)for(const s in t._data){const i=t._data[s];for(const r of i.babylonMeshes){r.computeWorldMatrix(!0);const n=i.babylonMaterial;e.push(n.forceCompilationAsync(r)),e.push(n.forceCompilationAsync(r,{useInstances:!0})),this._parent.useClipPlane&&(e.push(n.forceCompilationAsync(r,{clipPlane:!0})),e.push(n.forceCompilationAsync(r,{clipPlane:!0,useInstances:!0})))}}}return Promise.all(e).then(()=>{this._parent._endPerformanceCounter("Compile materials")})}_compileShadowGeneratorsAsync(){this._parent._startPerformanceCounter("Compile shadow generators");const e=new Array,t=this._babylonScene.lights;for(const s of t){const i=s.getShadowGenerator();i&&e.push(i.forceCompilationAsync())}return Promise.all(e).then(()=>{this._parent._endPerformanceCounter("Compile shadow generators")})}_forEachExtensions(e){for(const t of this._extensions)t.enabled&&e(t)}_applyExtensions(e,t,s){for(const i of this._extensions)if(i.enabled){const r=`${i.name}.${t}`,n=e;n._activeLoaderExtensionFunctions=n._activeLoaderExtensionFunctions||{};const o=n._activeLoaderExtensionFunctions;if(!o[r]){o[r]=!0;try{const a=s(i);if(a)return a}finally{delete o[r]}}}return null}_extensionsOnLoading(){this._forEachExtensions(e=>e.onLoading&&e.onLoading())}_extensionsOnReady(){this._forEachExtensions(e=>e.onReady&&e.onReady())}_extensionsLoadSceneAsync(e,t){return this._applyExtensions(t,"loadScene",s=>s.loadSceneAsync&&s.loadSceneAsync(e,t))}_extensionsLoadNodeAsync(e,t,s){return this._applyExtensions(t,"loadNode",i=>i.loadNodeAsync&&i.loadNodeAsync(e,t,s))}_extensionsLoadCameraAsync(e,t,s){return this._applyExtensions(t,"loadCamera",i=>i.loadCameraAsync&&i.loadCameraAsync(e,t,s))}_extensionsLoadVertexDataAsync(e,t,s){return this._applyExtensions(t,"loadVertexData",i=>i._loadVertexDataAsync&&i._loadVertexDataAsync(e,t,s))}_extensionsLoadMeshPrimitiveAsync(e,t,s,i,r,n){return this._applyExtensions(r,"loadMeshPrimitive",o=>o._loadMeshPrimitiveAsync&&o._loadMeshPrimitiveAsync(e,t,s,i,r,n))}_extensionsLoadMaterialAsync(e,t,s,i,r){return this._applyExtensions(t,"loadMaterial",n=>n._loadMaterialAsync&&n._loadMaterialAsync(e,t,s,i,r))}_extensionsCreateMaterial(e,t,s){return this._applyExtensions(t,"createMaterial",i=>i.createMaterial&&i.createMaterial(e,t,s))}_extensionsLoadMaterialPropertiesAsync(e,t,s){return this._applyExtensions(t,"loadMaterialProperties",i=>i.loadMaterialPropertiesAsync&&i.loadMaterialPropertiesAsync(e,t,s))}_extensionsLoadTextureInfoAsync(e,t,s){return this._applyExtensions(t,"loadTextureInfo",i=>i.loadTextureInfoAsync&&i.loadTextureInfoAsync(e,t,s))}_extensionsLoadTextureAsync(e,t,s){return this._applyExtensions(t,"loadTexture",i=>i._loadTextureAsync&&i._loadTextureAsync(e,t,s))}_extensionsLoadAnimationAsync(e,t){return this._applyExtensions(t,"loadAnimation",s=>s.loadAnimationAsync&&s.loadAnimationAsync(e,t))}_extensionsLoadAnimationChannelAsync(e,t,s,i,r){return this._applyExtensions(s,"loadAnimationChannel",n=>n._loadAnimationChannelAsync&&n._loadAnimationChannelAsync(e,t,s,i,r))}_extensionsLoadSkinAsync(e,t,s){return this._applyExtensions(s,"loadSkin",i=>i._loadSkinAsync&&i._loadSkinAsync(e,t,s))}_extensionsLoadUriAsync(e,t,s){return this._applyExtensions(t,"loadUri",i=>i._loadUriAsync&&i._loadUriAsync(e,t,s))}_extensionsLoadBufferViewAsync(e,t){return this._applyExtensions(t,"loadBufferView",s=>s.loadBufferViewAsync&&s.loadBufferViewAsync(e,t))}_extensionsLoadBufferAsync(e,t,s,i){return this._applyExtensions(t,"loadBuffer",r=>r.loadBufferAsync&&r.loadBufferAsync(e,t,s,i))}static LoadExtensionAsync(e,t,s,i){if(!t.extensions)return null;const n=t.extensions[s];return n?i(`${e}/extensions/${s}`,n):null}static LoadExtraAsync(e,t,s,i){if(!t.extras)return null;const n=t.extras[s];return n?i(`${e}/extras/${s}`,n):null}isExtensionUsed(e){return!!this._gltf.extensionsUsed&&this._gltf.extensionsUsed.indexOf(e)!==-1}logOpen(e){this._parent._logOpen(e)}logClose(){this._parent._logClose()}log(e){this._parent._log(e)}startPerformanceCounter(e){this._parent._startPerformanceCounter(e)}endPerformanceCounter(e){this._parent._endPerformanceCounter(e)}}v._RegisteredExtensions={};v.DefaultSampler={index:-1};z._CreateGLTF2Loader=l=>new v(l);const Ut="EXT_lights_image_based";class ur{constructor(e){this.name=Ut,this._loader=e,this.enabled=this._loader.isExtensionUsed(Ut)}dispose(){this._loader=null,delete this._lights}onLoading(){const e=this._loader.gltf.extensions;if(e&&e[this.name]){const t=e[this.name];this._lights=t.lights}}loadSceneAsync(e,t){return v.LoadExtensionAsync(e,t,this.name,(s,i)=>{this._loader._allMaterialsDirtyRequired=!0;const r=new Array;r.push(this._loader.loadSceneAsync(e,t)),this._loader.logOpen(`${s}`);const n=C.Get(`${s}/light`,this._lights,i.light);return r.push(this._loadLightAsync(`/extensions/${this.name}/lights/${i.light}`,n).then(o=>{this._loader.babylonScene.environmentTexture=o})),this._loader.logClose(),Promise.all(r).then(()=>{})})}_loadLightAsync(e,t){if(!t._loaded){const s=new Array;this._loader.logOpen(`${e}`);const i=new Array(t.specularImages.length);for(let r=0;r<t.specularImages.length;r++){const n=t.specularImages[r];i[r]=new Array(n.length);for(let o=0;o<n.length;o++){const a=`${e}/specularImages/${r}/${o}`;this._loader.logOpen(`${a}`);const f=n[o],c=C.Get(a,this._loader.gltf.images,f);s.push(this._loader.loadImageAsync(`/images/${f}`,c).then(u=>{i[r][o]=u})),this._loader.logClose()}}this._loader.logClose(),t._loaded=Promise.all(s).then(()=>{const r=new gi(this._loader.babylonScene,null,t.specularImageSize);if(r.name=t.name||"environment",t._babylonTexture=r,t.intensity!=null&&(r.level=t.intensity),t.rotation){let f=he.FromArray(t.rotation);this._loader.babylonScene.useRightHandedSystem||(f=he.Inverse(f)),ce.FromQuaternionToRef(f,r.getReflectionTextureMatrix())}if(!t.irradianceCoefficients)throw new Error(`${e}: Irradiance coefficients are missing`);const n=Ss.FromArray(t.irradianceCoefficients);n.scaleInPlace(t.intensity),n.convertIrradianceToLambertianRadiance();const o=ys.FromHarmonics(n),a=(i.length-1)/Cs.Log2(t.specularImageSize);return r.updateRGBDAsync(i,o,a)})}return t._loaded.then(()=>t._babylonTexture)}}v.RegisterExtension(Ut,l=>new ur(l));const Vt="EXT_mesh_gpu_instancing";class dr{constructor(e){this.name=Vt,this._loader=e,this.enabled=this._loader.isExtensionUsed(Vt)}dispose(){this._loader=null}loadNodeAsync(e,t,s){return v.LoadExtensionAsync(e,t,this.name,(i,r)=>{this._loader._disableInstancedMesh++;const n=this._loader.loadNodeAsync(`/nodes/${t.index}`,t,s);if(this._loader._disableInstancedMesh--,!t._primitiveBabylonMeshes)return n;const o=new Array;let a=0;const f=c=>{if(r.attributes[c]==null){o.push(Promise.resolve(null));return}const u=C.Get(`${i}/attributes/${c}`,this._loader.gltf.accessors,r.attributes[c]);if(o.push(this._loader._loadFloatAccessorAsync(`/accessors/${u.bufferView}`,u)),a===0)a=u.count;else if(a!==u.count)throw new Error(`${i}/attributes: Instance buffer accessors do not have the same count.`)};return f("TRANSLATION"),f("ROTATION"),f("SCALE"),n.then(c=>Promise.all(o).then(([u,d,m])=>{const g=new Float32Array(a*16);Z.Vector3[0].copyFromFloats(0,0,0),Z.Quaternion[0].copyFromFloats(0,0,0,1),Z.Vector3[1].copyFromFloats(1,1,1);for(let T=0;T<a;++T)u&&x.FromArrayToRef(u,T*3,Z.Vector3[0]),d&&he.FromArrayToRef(d,T*4,Z.Quaternion[0]),m&&x.FromArrayToRef(m,T*3,Z.Vector3[1]),ce.ComposeToRef(Z.Vector3[1],Z.Quaternion[0],Z.Vector3[0],Z.Matrix[0]),Z.Matrix[0].copyToArray(g,T*16);for(const T of t._primitiveBabylonMeshes)T.thinInstanceSetBuffer("matrix",g,16,!0);return c}))})}}v.RegisterExtension(Vt,l=>new dr(l));const Bt="EXT_meshopt_compression";class hr{constructor(e){this.name=Bt,this.enabled=e.isExtensionUsed(Bt),this._loader=e}dispose(){this._loader=null}loadBufferViewAsync(e,t){return v.LoadExtensionAsync(e,t,this.name,(s,i)=>{const r=t;if(r._meshOptData)return r._meshOptData;const n=C.Get(`${e}/buffer`,this._loader.gltf.buffers,i.buffer);return r._meshOptData=this._loader.loadBufferAsync(`/buffers/${n.index}`,n,i.byteOffset||0,i.byteLength).then(o=>Ps.Default.decodeGltfBufferAsync(o,i.count,i.byteStride,i.mode,i.filter)),r._meshOptData})}}v.RegisterExtension(Bt,l=>new hr(l));const Gt="EXT_texture_webp";class mr{constructor(e){this.name=Gt,this._loader=e,this.enabled=e.isExtensionUsed(Gt)}dispose(){this._loader=null}_loadTextureAsync(e,t,s){return v.LoadExtensionAsync(e,t,this.name,(i,r)=>{const n=t.sampler==null?v.DefaultSampler:C.Get(`${e}/sampler`,this._loader.gltf.samplers,t.sampler),o=C.Get(`${i}/source`,this._loader.gltf.images,r.source);return this._loader._createTextureAsync(e,n,o,a=>{s(a)},void 0,!t._textureInfo.nonColorData)})}}v.RegisterExtension(Gt,l=>new mr(l));const kt="KHR_draco_mesh_compression";class _r{constructor(e){this.name=kt,this.useNormalizedFlagFromAccessor=!0,this._loader=e,this.enabled=Si.DecoderAvailable&&this._loader.isExtensionUsed(kt)}dispose(){delete this.dracoCompression,this._loader=null}_loadVertexDataAsync(e,t,s){return v.LoadExtensionAsync(e,t,this.name,(i,r)=>{if(t.mode!=null){if(t.mode!==5&&t.mode!==4)throw new Error(`${e}: Unsupported mode ${t.mode}`);if(t.mode===5)throw new Error(`${e}: Mode ${t.mode} is not currently supported`)}const n={},o={},a=(c,u)=>{const d=r.attributes[c];if(d!=null&&(s._delayInfo=s._delayInfo||[],s._delayInfo.indexOf(u)===-1&&s._delayInfo.push(u),n[u]=d,this.useNormalizedFlagFromAccessor)){const m=C.TryGet(this._loader.gltf.accessors,t.attributes[c]);m&&(o[u]=m.normalized||!1)}};a("POSITION",p.PositionKind),a("NORMAL",p.NormalKind),a("TANGENT",p.TangentKind),a("TEXCOORD_0",p.UVKind),a("TEXCOORD_1",p.UV2Kind),a("TEXCOORD_2",p.UV3Kind),a("TEXCOORD_3",p.UV4Kind),a("TEXCOORD_4",p.UV5Kind),a("TEXCOORD_5",p.UV6Kind),a("JOINTS_0",p.MatricesIndicesKind),a("WEIGHTS_0",p.MatricesWeightsKind),a("COLOR_0",p.ColorKind);const f=C.Get(i,this._loader.gltf.bufferViews,r.bufferView);return f._dracoBabylonGeometry||(f._dracoBabylonGeometry=this._loader.loadBufferViewAsync(`/bufferViews/${f.index}`,f).then(c=>(this.dracoCompression||Si.Default)._decodeMeshToGeometryForGltfAsync(s.name,this._loader.babylonScene,c,n,o).catch(d=>{throw new Error(`${e}: ${d.message}`)}))),f._dracoBabylonGeometry})}}v.RegisterExtension(kt,l=>new _r(l));const $t="KHR_lights_punctual";class pr{constructor(e){this.name=$t,this._loader=e,this.enabled=this._loader.isExtensionUsed($t)}dispose(){this._loader=null,delete this._lights}onLoading(){const e=this._loader.gltf.extensions;if(e&&e[this.name]){const t=e[this.name];this._lights=t.lights,C.Assign(this._lights)}}loadNodeAsync(e,t,s){return v.LoadExtensionAsync(e,t,this.name,(i,r)=>(this._loader._allMaterialsDirtyRequired=!0,this._loader.loadNodeAsync(e,t,n=>{let o;const a=C.Get(i,this._lights,r.light),f=a.name||n.name;switch(this._loader.babylonScene._blockEntityCollection=!!this._loader._assetContainer,a.type){case"directional":{const c=new hi(f,x.Backward(),this._loader.babylonScene);c.position.setAll(0),o=c;break}case"point":{o=new mi(f,x.Zero(),this._loader.babylonScene);break}case"spot":{const c=new _i(f,x.Zero(),x.Backward(),0,1,this._loader.babylonScene);c.angle=(a.spot&&a.spot.outerConeAngle||Math.PI/4)*2,c.innerAngle=(a.spot&&a.spot.innerConeAngle||0)*2,o=c;break}default:throw this._loader.babylonScene._blockEntityCollection=!1,new Error(`${i}: Invalid light type (${a.type})`)}o._parentContainer=this._loader._assetContainer,this._loader.babylonScene._blockEntityCollection=!1,a._babylonLight=o,o.falloffType=Os.FALLOFF_GLTF,o.diffuse=a.color?y.FromArray(a.color):y.White(),o.intensity=a.intensity==null?1:a.intensity,o.range=a.range==null?Number.MAX_VALUE:a.range,o.parent=n,this._loader._babylonLights.push(o),v.AddPointerMetadata(o,i),s(n)})))}}v.RegisterExtension($t,l=>new pr(l));const zt="KHR_materials_pbrSpecularGlossiness";class gr{constructor(e){this.name=zt,this.order=200,this._loader=e,this.enabled=this._loader.isExtensionUsed(zt)}dispose(){this._loader=null}loadMaterialPropertiesAsync(e,t,s){return v.LoadExtensionAsync(e,t,this.name,(i,r)=>{const n=new Array;return n.push(this._loader.loadMaterialBasePropertiesAsync(e,t,s)),n.push(this._loadSpecularGlossinessPropertiesAsync(i,t,r,s)),this._loader.loadMaterialAlphaProperties(e,t,s),Promise.all(n).then(()=>{})})}_loadSpecularGlossinessPropertiesAsync(e,t,s,i){if(!(i instanceof q))throw new Error(`${e}: Material type not supported`);const r=new Array;return i.metallic=null,i.roughness=null,s.diffuseFactor?(i.albedoColor=y.FromArray(s.diffuseFactor),i.alpha=s.diffuseFactor[3]):i.albedoColor=y.White(),i.reflectivityColor=s.specularFactor?y.FromArray(s.specularFactor):y.White(),i.microSurface=s.glossinessFactor==null?1:s.glossinessFactor,s.diffuseTexture&&r.push(this._loader.loadTextureInfoAsync(`${e}/diffuseTexture`,s.diffuseTexture,n=>{n.name=`${i.name} (Diffuse)`,i.albedoTexture=n})),s.specularGlossinessTexture&&(r.push(this._loader.loadTextureInfoAsync(`${e}/specularGlossinessTexture`,s.specularGlossinessTexture,n=>{n.name=`${i.name} (Specular Glossiness)`,i.reflectivityTexture=n,i.reflectivityTexture.hasAlpha=!0})),i.useMicroSurfaceFromReflectivityMapAlpha=!0),Promise.all(r).then(()=>{})}}v.RegisterExtension(zt,l=>new gr(l));const Wt="KHR_materials_unlit";class vr{constructor(e){this.name=Wt,this.order=210,this._loader=e,this.enabled=this._loader.isExtensionUsed(Wt)}dispose(){this._loader=null}loadMaterialPropertiesAsync(e,t,s){return v.LoadExtensionAsync(e,t,this.name,()=>this._loadUnlitPropertiesAsync(e,t,s))}_loadUnlitPropertiesAsync(e,t,s){if(!(s instanceof q))throw new Error(`${e}: Material type not supported`);const i=new Array;s.unlit=!0;const r=t.pbrMetallicRoughness;return r&&(r.baseColorFactor?(s.albedoColor=y.FromArray(r.baseColorFactor),s.alpha=r.baseColorFactor[3]):s.albedoColor=y.White(),r.baseColorTexture&&i.push(this._loader.loadTextureInfoAsync(`${e}/baseColorTexture`,r.baseColorTexture,n=>{n.name=`${s.name} (Base Color)`,s.albedoTexture=n}))),t.doubleSided&&(s.backFaceCulling=!1,s.twoSidedLighting=!0),this._loader.loadMaterialAlphaProperties(e,t,s),Promise.all(i).then(()=>{})}}v.RegisterExtension(Wt,l=>new vr(l));const Ht="KHR_materials_clearcoat";class Tr{constructor(e){this.name=Ht,this.order=190,this._loader=e,this.enabled=this._loader.isExtensionUsed(Ht)}dispose(){this._loader=null}loadMaterialPropertiesAsync(e,t,s){return v.LoadExtensionAsync(e,t,this.name,(i,r)=>{const n=new Array;return n.push(this._loader.loadMaterialPropertiesAsync(e,t,s)),n.push(this._loadClearCoatPropertiesAsync(i,r,s)),Promise.all(n).then(()=>{})})}_loadClearCoatPropertiesAsync(e,t,s){if(!(s instanceof q))throw new Error(`${e}: Material type not supported`);const i=new Array;return s.clearCoat.isEnabled=!0,s.clearCoat.useRoughnessFromMainTexture=!1,s.clearCoat.remapF0OnInterfaceChange=!1,t.clearcoatFactor!=null?s.clearCoat.intensity=t.clearcoatFactor:s.clearCoat.intensity=0,t.clearcoatTexture&&i.push(this._loader.loadTextureInfoAsync(`${e}/clearcoatTexture`,t.clearcoatTexture,r=>{r.name=`${s.name} (ClearCoat Intensity)`,s.clearCoat.texture=r})),t.clearcoatRoughnessFactor!=null?s.clearCoat.roughness=t.clearcoatRoughnessFactor:s.clearCoat.roughness=0,t.clearcoatRoughnessTexture&&(t.clearcoatRoughnessTexture.nonColorData=!0,i.push(this._loader.loadTextureInfoAsync(`${e}/clearcoatRoughnessTexture`,t.clearcoatRoughnessTexture,r=>{r.name=`${s.name} (ClearCoat Roughness)`,s.clearCoat.textureRoughness=r}))),t.clearcoatNormalTexture&&(t.clearcoatNormalTexture.nonColorData=!0,i.push(this._loader.loadTextureInfoAsync(`${e}/clearcoatNormalTexture`,t.clearcoatNormalTexture,r=>{r.name=`${s.name} (ClearCoat Normal)`,s.clearCoat.bumpTexture=r})),s.invertNormalMapX=!s.getScene().useRightHandedSystem,s.invertNormalMapY=s.getScene().useRightHandedSystem,t.clearcoatNormalTexture.scale!=null&&(s.clearCoat.bumpTexture.level=t.clearcoatNormalTexture.scale)),Promise.all(i).then(()=>{})}}v.RegisterExtension(Ht,l=>new Tr(l));const Xt="KHR_materials_iridescence";class Ar{constructor(e){this.name=Xt,this.order=195,this._loader=e,this.enabled=this._loader.isExtensionUsed(Xt)}dispose(){this._loader=null}loadMaterialPropertiesAsync(e,t,s){return v.LoadExtensionAsync(e,t,this.name,(i,r)=>{const n=new Array;return n.push(this._loader.loadMaterialPropertiesAsync(e,t,s)),n.push(this._loadIridescencePropertiesAsync(i,r,s)),Promise.all(n).then(()=>{})})}_loadIridescencePropertiesAsync(e,t,s){var i,r,n,o,a;if(!(s instanceof q))throw new Error(`${e}: Material type not supported`);const f=new Array;return s.iridescence.isEnabled=!0,s.iridescence.intensity=(i=t.iridescenceFactor)!==null&&i!==void 0?i:0,s.iridescence.indexOfRefraction=(n=(r=t.iridescenceIor)!==null&&r!==void 0?r:t.iridescenceIOR)!==null&&n!==void 0?n:1.3,s.iridescence.minimumThickness=(o=t.iridescenceThicknessMinimum)!==null&&o!==void 0?o:100,s.iridescence.maximumThickness=(a=t.iridescenceThicknessMaximum)!==null&&a!==void 0?a:400,t.iridescenceTexture&&f.push(this._loader.loadTextureInfoAsync(`${e}/iridescenceTexture`,t.iridescenceTexture,c=>{c.name=`${s.name} (Iridescence Intensity)`,s.iridescence.texture=c})),t.iridescenceThicknessTexture&&f.push(this._loader.loadTextureInfoAsync(`${e}/iridescenceThicknessTexture`,t.iridescenceThicknessTexture,c=>{c.name=`${s.name} (Iridescence Thickness)`,s.iridescence.thicknessTexture=c})),Promise.all(f).then(()=>{})}}v.RegisterExtension(Xt,l=>new Ar(l));const jt="KHR_materials_anisotropy";class xr{constructor(e){this.name=jt,this.order=195,this._loader=e,this.enabled=this._loader.isExtensionUsed(jt)}dispose(){this._loader=null}loadMaterialPropertiesAsync(e,t,s){return v.LoadExtensionAsync(e,t,this.name,(i,r)=>{const n=new Array;return n.push(this._loader.loadMaterialPropertiesAsync(e,t,s)),n.push(this._loadIridescencePropertiesAsync(i,r,s)),Promise.all(n).then(()=>{})})}_loadIridescencePropertiesAsync(e,t,s){var i,r;if(!(s instanceof q))throw new Error(`${e}: Material type not supported`);const n=new Array;return s.anisotropy.isEnabled=!0,s.anisotropy.intensity=(i=t.anisotropyStrength)!==null&&i!==void 0?i:0,s.anisotropy.angle=(r=t.anisotropyRotation)!==null&&r!==void 0?r:0,t.anisotropyTexture&&n.push(this._loader.loadTextureInfoAsync(`${e}/anisotropyTexture`,t.anisotropyTexture,o=>{o.name=`${s.name} (Anisotropy Intensity)`,s.anisotropy.texture=o})),Promise.all(n).then(()=>{})}}v.RegisterExtension(jt,l=>new xr(l));const Kt="KHR_materials_emissive_strength";class Er{constructor(e){this.name=Kt,this.order=170,this._loader=e,this.enabled=this._loader.isExtensionUsed(Kt)}dispose(){this._loader=null}loadMaterialPropertiesAsync(e,t,s){return v.LoadExtensionAsync(e,t,this.name,(i,r)=>this._loader.loadMaterialPropertiesAsync(e,t,s).then(()=>{this._loadEmissiveProperties(i,r,s)}))}_loadEmissiveProperties(e,t,s){if(!(s instanceof q))throw new Error(`${e}: Material type not supported`);t.emissiveStrength!==void 0&&s.emissiveColor.scaleToRef(t.emissiveStrength,s.emissiveColor)}}v.RegisterExtension(Kt,l=>new Er(l));const Yt="KHR_materials_sheen";class Sr{constructor(e){this.name=Yt,this.order=190,this._loader=e,this.enabled=this._loader.isExtensionUsed(Yt)}dispose(){this._loader=null}loadMaterialPropertiesAsync(e,t,s){return v.LoadExtensionAsync(e,t,this.name,(i,r)=>{const n=new Array;return n.push(this._loader.loadMaterialPropertiesAsync(e,t,s)),n.push(this._loadSheenPropertiesAsync(i,r,s)),Promise.all(n).then(()=>{})})}_loadSheenPropertiesAsync(e,t,s){if(!(s instanceof q))throw new Error(`${e}: Material type not supported`);const i=new Array;return s.sheen.isEnabled=!0,s.sheen.intensity=1,t.sheenColorFactor!=null?s.sheen.color=y.FromArray(t.sheenColorFactor):s.sheen.color=y.Black(),t.sheenColorTexture&&i.push(this._loader.loadTextureInfoAsync(`${e}/sheenColorTexture`,t.sheenColorTexture,r=>{r.name=`${s.name} (Sheen Color)`,s.sheen.texture=r})),t.sheenRoughnessFactor!==void 0?s.sheen.roughness=t.sheenRoughnessFactor:s.sheen.roughness=0,t.sheenRoughnessTexture&&(t.sheenRoughnessTexture.nonColorData=!0,i.push(this._loader.loadTextureInfoAsync(`${e}/sheenRoughnessTexture`,t.sheenRoughnessTexture,r=>{r.name=`${s.name} (Sheen Roughness)`,s.sheen.textureRoughness=r}))),s.sheen.albedoScaling=!0,s.sheen.useRoughnessFromMainTexture=!1,Promise.all(i).then(()=>{})}}v.RegisterExtension(Yt,l=>new Sr(l));const Zt="KHR_materials_specular";class yr{constructor(e){this.name=Zt,this.order=190,this._loader=e,this.enabled=this._loader.isExtensionUsed(Zt)}dispose(){this._loader=null}loadMaterialPropertiesAsync(e,t,s){return v.LoadExtensionAsync(e,t,this.name,(i,r)=>{const n=new Array;return n.push(this._loader.loadMaterialPropertiesAsync(e,t,s)),n.push(this._loadSpecularPropertiesAsync(i,r,s)),Promise.all(n).then(()=>{})})}_loadSpecularPropertiesAsync(e,t,s){if(!(s instanceof q))throw new Error(`${e}: Material type not supported`);const i=new Array;return t.specularFactor!==void 0&&(s.metallicF0Factor=t.specularFactor),t.specularColorFactor!==void 0&&(s.metallicReflectanceColor=y.FromArray(t.specularColorFactor)),t.specularTexture&&(t.specularTexture.nonColorData=!0,i.push(this._loader.loadTextureInfoAsync(`${e}/specularTexture`,t.specularTexture,r=>{r.name=`${s.name} (Specular F0 Strength)`,s.metallicReflectanceTexture=r,s.useOnlyMetallicFromMetallicReflectanceTexture=!0}))),t.specularColorTexture&&i.push(this._loader.loadTextureInfoAsync(`${e}/specularColorTexture`,t.specularColorTexture,r=>{r.name=`${s.name} (Specular F0 Color)`,s.reflectanceTexture=r})),Promise.all(i).then(()=>{})}}v.RegisterExtension(Zt,l=>new yr(l));const qt="KHR_materials_ior";class vt{constructor(e){this.name=qt,this.order=180,this._loader=e,this.enabled=this._loader.isExtensionUsed(qt)}dispose(){this._loader=null}loadMaterialPropertiesAsync(e,t,s){return v.LoadExtensionAsync(e,t,this.name,(i,r)=>{const n=new Array;return n.push(this._loader.loadMaterialPropertiesAsync(e,t,s)),n.push(this._loadIorPropertiesAsync(i,r,s)),Promise.all(n).then(()=>{})})}_loadIorPropertiesAsync(e,t,s){if(!(s instanceof q))throw new Error(`${e}: Material type not supported`);return t.ior!==void 0?s.indexOfRefraction=t.ior:s.indexOfRefraction=vt._DEFAULT_IOR,Promise.resolve()}}vt._DEFAULT_IOR=1.5;v.RegisterExtension(qt,l=>new vt(l));const pe="KHR_materials_variants";class Be{constructor(e){this.name=pe,this._loader=e,this.enabled=this._loader.isExtensionUsed(pe)}dispose(){this._loader=null}static GetAvailableVariants(e){const t=this._GetExtensionMetadata(e);return t?Object.keys(t.variants):[]}getAvailableVariants(e){return Be.GetAvailableVariants(e)}static SelectVariant(e,t){const s=this._GetExtensionMetadata(e);if(!s)throw new Error(`Cannot select variant on a glTF mesh that does not have the ${pe} extension`);const i=r=>{const n=s.variants[r];if(n)for(const o of n)o.mesh.material=o.material};if(t instanceof Array)for(const r of t)i(r);else i(t);s.lastSelected=t}selectVariant(e,t){return Be.SelectVariant(e,t)}static Reset(e){const t=this._GetExtensionMetadata(e);if(!t)throw new Error(`Cannot reset on a glTF mesh that does not have the ${pe} extension`);for(const s of t.original)s.mesh.material=s.material;t.lastSelected=null}reset(e){return Be.Reset(e)}static GetLastSelectedVariant(e){const t=this._GetExtensionMetadata(e);if(!t)throw new Error(`Cannot get the last selected variant on a glTF mesh that does not have the ${pe} extension`);return t.lastSelected}getLastSelectedVariant(e){return Be.GetLastSelectedVariant(e)}static _GetExtensionMetadata(e){var t,s;return((s=(t=e==null?void 0:e._internalMetadata)===null||t===void 0?void 0:t.gltf)===null||s===void 0?void 0:s[pe])||null}onLoading(){const e=this._loader.gltf.extensions;if(e&&e[this.name]){const t=e[this.name];this._variants=t.variants}}_loadMeshPrimitiveAsync(e,t,s,i,r,n){return v.LoadExtensionAsync(e,r,this.name,(o,a)=>{const f=new Array;return f.push(this._loader._loadMeshPrimitiveAsync(e,t,s,i,r,c=>{if(n(c),c instanceof ye){const u=v._GetDrawMode(e,r.mode),d=this._loader.rootBabylonMesh,m=d?d._internalMetadata=d._internalMetadata||{}:{},g=m.gltf=m.gltf||{},T=g[pe]=g[pe]||{lastSelected:null,original:[],variants:{}};T.original.push({mesh:c,material:c.material});for(let S=0;S<a.mappings.length;++S){const E=a.mappings[S],b=C.Get(`${o}/mappings/${S}/material`,this._loader.gltf.materials,E.material);f.push(this._loader._loadMaterialAsync(`#/materials/${E.material}`,b,c,u,w=>{for(let B=0;B<E.variants.length;++B){const N=E.variants[B],M=C.Get(`/extensions/${pe}/variants/${N}`,this._variants,N);T.variants[M.name]=T.variants[M.name]||[],T.variants[M.name].push({mesh:c,material:w}),c.onClonedObservable.add(I=>{const F=I;let ee=null,te=F;do{if(te=te.parent,!te)return;ee=Be._GetExtensionMetadata(te)}while(ee===null);if(d&&ee===Be._GetExtensionMetadata(d)){te._internalMetadata={};for(const ie in d._internalMetadata)te._internalMetadata[ie]=d._internalMetadata[ie];te._internalMetadata.gltf=[];for(const ie in d._internalMetadata.gltf)te._internalMetadata.gltf[ie]=d._internalMetadata.gltf[ie];te._internalMetadata.gltf[pe]={lastSelected:null,original:[],variants:{}};for(const ie of ee.original)te._internalMetadata.gltf[pe].original.push({mesh:ie.mesh,material:ie.material});for(const ie in ee.variants)if(Object.prototype.hasOwnProperty.call(ee.variants,ie)){te._internalMetadata.gltf[pe].variants[ie]=[];for(const Ai of ee.variants[ie])te._internalMetadata.gltf[pe].variants[ie].push({mesh:Ai.mesh,material:Ai.material})}ee=te._internalMetadata.gltf[pe]}for(const ie of ee.original)ie.mesh===c&&(ie.mesh=F);for(const ie of ee.variants[M.name])ie.mesh===c&&(ie.mesh=F)})}}))}}})),Promise.all(f).then(([c])=>c)})}}v.RegisterExtension(pe,l=>new Be(l));class Ti{static _GetDefaultOptions(){return{renderSize:1024,samples:4,lodGenerationScale:1,lodGenerationOffset:-4,renderTargetTextureType:Le.TEXTURETYPE_HALF_FLOAT,generateMipmaps:!0}}constructor(e,t){this._opaqueRenderTarget=null,this._opaqueMeshesCache=[],this._transparentMeshesCache=[],this._materialObservers={},this._options={...Ti._GetDefaultOptions(),...e},this._scene=t,this._scene._transmissionHelper=this,this.onErrorObservable=new de,this._scene.onDisposeObservable.addOnce(()=>{this.dispose()}),this._parseScene(),this._setupRenderTargets()}updateOptions(e){if(!Object.keys(e).filter(r=>this._options[r]!==e[r]).length)return;const s={...this._options,...e},i=this._options;this._options=s,s.renderSize!==i.renderSize||s.renderTargetTextureType!==i.renderTargetTextureType||s.generateMipmaps!==i.generateMipmaps||!this._opaqueRenderTarget?this._setupRenderTargets():(this._opaqueRenderTarget.samples=s.samples,this._opaqueRenderTarget.lodGenerationScale=s.lodGenerationScale,this._opaqueRenderTarget.lodGenerationOffset=s.lodGenerationOffset)}getOpaqueTarget(){return this._opaqueRenderTarget}_shouldRenderAsTransmission(e){return e?!!(e instanceof q&&e.subSurface.isRefractionEnabled):!1}_addMesh(e){this._materialObservers[e.uniqueId]=e.onMaterialChangedObservable.add(this._onMeshMaterialChanged.bind(this)),L.SetImmediate(()=>{this._shouldRenderAsTransmission(e.material)?(e.material.refractionTexture=this._opaqueRenderTarget,this._transparentMeshesCache.indexOf(e)===-1&&this._transparentMeshesCache.push(e)):this._opaqueMeshesCache.indexOf(e)===-1&&this._opaqueMeshesCache.push(e)})}_removeMesh(e){e.onMaterialChangedObservable.remove(this._materialObservers[e.uniqueId]),delete this._materialObservers[e.uniqueId];let t=this._transparentMeshesCache.indexOf(e);t!==-1&&this._transparentMeshesCache.splice(t,1),t=this._opaqueMeshesCache.indexOf(e),t!==-1&&this._opaqueMeshesCache.splice(t,1)}_parseScene(){this._scene.meshes.forEach(this._addMesh.bind(this)),this._scene.onNewMeshAddedObservable.add(this._addMesh.bind(this)),this._scene.onMeshRemovedObservable.add(this._removeMesh.bind(this))}_onMeshMaterialChanged(e){const t=this._transparentMeshesCache.indexOf(e),s=this._opaqueMeshesCache.indexOf(e);this._shouldRenderAsTransmission(e.material)?(e.material instanceof q&&(e.material.subSurface.refractionTexture=this._opaqueRenderTarget),s!==-1?(this._opaqueMeshesCache.splice(s,1),this._transparentMeshesCache.push(e)):t===-1&&this._transparentMeshesCache.push(e)):t!==-1?(this._transparentMeshesCache.splice(t,1),this._opaqueMeshesCache.push(e)):s===-1&&this._opaqueMeshesCache.push(e)}_isRenderTargetValid(){var e;return((e=this._opaqueRenderTarget)===null||e===void 0?void 0:e.getInternalTexture())!==null}_setupRenderTargets(){var e,t;this._opaqueRenderTarget&&this._opaqueRenderTarget.dispose(),this._opaqueRenderTarget=new Nt("opaqueSceneTexture",this._options.renderSize,this._scene,this._options.generateMipmaps,void 0,this._options.renderTargetTextureType),this._opaqueRenderTarget.ignoreCameraViewport=!0,this._opaqueRenderTarget.renderList=this._opaqueMeshesCache,this._opaqueRenderTarget.clearColor=(t=(e=this._options.clearColor)===null||e===void 0?void 0:e.clone())!==null&&t!==void 0?t:this._scene.clearColor.clone(),this._opaqueRenderTarget.gammaSpace=!1,this._opaqueRenderTarget.lodGenerationScale=this._options.lodGenerationScale,this._opaqueRenderTarget.lodGenerationOffset=this._options.lodGenerationOffset,this._opaqueRenderTarget.samples=this._options.samples;let s,i;this._opaqueRenderTarget.onBeforeBindObservable.add(r=>{i=this._scene.environmentIntensity,this._scene.environmentIntensity=1,s=this._scene.imageProcessingConfiguration.applyByPostProcess,this._options.clearColor?r.clearColor.copyFrom(this._options.clearColor):this._scene.clearColor.toLinearSpaceToRef(r.clearColor,this._scene.getEngine().useExactSrgbConversions),this._scene.imageProcessingConfiguration._applyByPostProcess=!0}),this._opaqueRenderTarget.onAfterUnbindObservable.add(()=>{this._scene.environmentIntensity=i,this._scene.imageProcessingConfiguration._applyByPostProcess=s}),this._transparentMeshesCache.forEach(r=>{this._shouldRenderAsTransmission(r.material)&&(r.material.refractionTexture=this._opaqueRenderTarget)})}dispose(){this._scene._transmissionHelper=void 0,this._opaqueRenderTarget&&(this._opaqueRenderTarget.dispose(),this._opaqueRenderTarget=null),this._transparentMeshesCache=[],this._opaqueMeshesCache=[]}}const Jt="KHR_materials_transmission";class Cr{constructor(e){this.name=Jt,this.order=175,this._loader=e,this.enabled=this._loader.isExtensionUsed(Jt),this.enabled&&(e.parent.transparencyAsCoverage=!0)}dispose(){this._loader=null}loadMaterialPropertiesAsync(e,t,s){return v.LoadExtensionAsync(e,t,this.name,(i,r)=>{const n=new Array;return n.push(this._loader.loadMaterialBasePropertiesAsync(e,t,s)),n.push(this._loader.loadMaterialPropertiesAsync(e,t,s)),n.push(this._loadTransparentPropertiesAsync(i,t,s,r)),Promise.all(n).then(()=>{})})}_loadTransparentPropertiesAsync(e,t,s,i){var r,n;if(!(s instanceof q))throw new Error(`${e}: Material type not supported`);const o=s;if(o.subSurface.isRefractionEnabled=!0,o.subSurface.volumeIndexOfRefraction=1,o.subSurface.useAlbedoToTintRefraction=!0,i.transmissionFactor!==void 0){o.subSurface.refractionIntensity=i.transmissionFactor;const a=o.getScene();o.subSurface.refractionIntensity&&!a._transmissionHelper?new Ti({},o.getScene()):o.subSurface.refractionIntensity&&!(!((r=a._transmissionHelper)===null||r===void 0)&&r._isRenderTargetValid())&&((n=a._transmissionHelper)===null||n===void 0||n._setupRenderTargets())}else return o.subSurface.refractionIntensity=0,o.subSurface.isRefractionEnabled=!1,Promise.resolve();return o.subSurface.minimumThickness=0,o.subSurface.maximumThickness=0,i.transmissionTexture?(i.transmissionTexture.nonColorData=!0,this._loader.loadTextureInfoAsync(`${e}/transmissionTexture`,i.transmissionTexture,void 0).then(a=>{o.subSurface.refractionIntensityTexture=a,o.subSurface.useGltfStyleTextures=!0})):Promise.resolve()}}v.RegisterExtension(Jt,l=>new Cr(l));const Qt="KHR_materials_translucency";class Pr{constructor(e){this.name=Qt,this.order=174,this._loader=e,this.enabled=this._loader.isExtensionUsed(Qt),this.enabled&&(e.parent.transparencyAsCoverage=!0)}dispose(){this._loader=null}loadMaterialPropertiesAsync(e,t,s){return v.LoadExtensionAsync(e,t,this.name,(i,r)=>{const n=new Array;return n.push(this._loader.loadMaterialBasePropertiesAsync(e,t,s)),n.push(this._loader.loadMaterialPropertiesAsync(e,t,s)),n.push(this._loadTranslucentPropertiesAsync(i,t,s,r)),Promise.all(n).then(()=>{})})}_loadTranslucentPropertiesAsync(e,t,s,i){if(!(s instanceof q))throw new Error(`${e}: Material type not supported`);const r=s;if(r.subSurface.isTranslucencyEnabled=!0,r.subSurface.volumeIndexOfRefraction=1,r.subSurface.minimumThickness=0,r.subSurface.maximumThickness=0,r.subSurface.useAlbedoToTintTranslucency=!0,i.translucencyFactor!==void 0)r.subSurface.translucencyIntensity=i.translucencyFactor;else return r.subSurface.translucencyIntensity=0,r.subSurface.isTranslucencyEnabled=!1,Promise.resolve();return i.translucencyTexture?(i.translucencyTexture.nonColorData=!0,this._loader.loadTextureInfoAsync(`${e}/translucencyTexture`,i.translucencyTexture).then(n=>{r.subSurface.translucencyIntensityTexture=n})):Promise.resolve()}}v.RegisterExtension(Qt,l=>new Pr(l));const ei="KHR_materials_volume";class Or{constructor(e){this.name=ei,this.order=173,this._loader=e,this.enabled=this._loader.isExtensionUsed(ei),this.enabled&&this._loader._disableInstancedMesh++}dispose(){this.enabled&&this._loader._disableInstancedMesh--,this._loader=null}loadMaterialPropertiesAsync(e,t,s){return v.LoadExtensionAsync(e,t,this.name,(i,r)=>{const n=new Array;return n.push(this._loader.loadMaterialBasePropertiesAsync(e,t,s)),n.push(this._loader.loadMaterialPropertiesAsync(e,t,s)),n.push(this._loadVolumePropertiesAsync(i,t,s,r)),Promise.all(n).then(()=>{})})}_loadVolumePropertiesAsync(e,t,s,i){if(!(s instanceof q))throw new Error(`${e}: Material type not supported`);if(!s.subSurface.isRefractionEnabled&&!s.subSurface.isTranslucencyEnabled||!i.thicknessFactor)return Promise.resolve();s.subSurface.volumeIndexOfRefraction=s.indexOfRefraction;const r=i.attenuationDistance!==void 0?i.attenuationDistance:Number.MAX_VALUE;return s.subSurface.tintColorAtDistance=r,i.attenuationColor!==void 0&&i.attenuationColor.length==3&&s.subSurface.tintColor.copyFromFloats(i.attenuationColor[0],i.attenuationColor[1],i.attenuationColor[2]),s.subSurface.minimumThickness=0,s.subSurface.maximumThickness=i.thicknessFactor,s.subSurface.useThicknessAsDepth=!0,i.thicknessTexture?(i.thicknessTexture.nonColorData=!0,this._loader.loadTextureInfoAsync(`${e}/thicknessTexture`,i.thicknessTexture).then(n=>{s.subSurface.thicknessTexture=n,s.subSurface.useGltfStyleTextures=!0})):Promise.resolve()}}v.RegisterExtension(ei,l=>new Or(l));const ti="KHR_mesh_quantization";class br{constructor(e){this.name=ti,this.enabled=e.isExtensionUsed(ti)}dispose(){}}v.RegisterExtension(ti,l=>new br(l));const ii="KHR_texture_basisu";class Ir{constructor(e){this.name=ii,this._loader=e,this.enabled=e.isExtensionUsed(ii)}dispose(){this._loader=null}_loadTextureAsync(e,t,s){return v.LoadExtensionAsync(e,t,this.name,(i,r)=>{const n=t.sampler==null?v.DefaultSampler:C.Get(`${e}/sampler`,this._loader.gltf.samplers,t.sampler),o=C.Get(`${i}/source`,this._loader.gltf.images,r.source);return this._loader._createTextureAsync(e,n,o,a=>{s(a)},t._textureInfo.nonColorData?{useRGBAIfASTCBC7NotAvailableWhenUASTC:!0}:void 0,!t._textureInfo.nonColorData)})}}v.RegisterExtension(ii,l=>new Ir(l));const si="KHR_texture_transform";class Nr{constructor(e){this.name=si,this._loader=e,this.enabled=this._loader.isExtensionUsed(si)}dispose(){this._loader=null}loadTextureInfoAsync(e,t,s){return v.LoadExtensionAsync(e,t,this.name,(i,r)=>this._loader.loadTextureInfoAsync(e,t,n=>{if(!(n instanceof D))throw new Error(`${i}: Texture type not supported`);r.offset&&(n.uOffset=r.offset[0],n.vOffset=r.offset[1]),n.uRotationCenter=0,n.vRotationCenter=0,r.rotation&&(n.wAng=-r.rotation),r.scale&&(n.uScale=r.scale[0],n.vScale=r.scale[1]),r.texCoord!=null&&(n.coordinatesIndex=r.texCoord),s(n)}))}}v.RegisterExtension(si,l=>new Nr(l));const ri="KHR_xmp_json_ld";class Lr{constructor(e){this.name=ri,this.order=100,this._loader=e,this.enabled=this._loader.isExtensionUsed(ri)}dispose(){this._loader=null}onLoading(){var e,t,s;if(this._loader.rootBabylonMesh===null)return;const i=(e=this._loader.gltf.extensions)===null||e===void 0?void 0:e.KHR_xmp_json_ld,r=(s=(t=this._loader.gltf.asset)===null||t===void 0?void 0:t.extensions)===null||s===void 0?void 0:s.KHR_xmp_json_ld;if(i&&r){const n=+r.packet;i.packets&&n<i.packets.length&&(this._loader.rootBabylonMesh.metadata=this._loader.rootBabylonMesh.metadata||{},this._loader.rootBabylonMesh.metadata.xmp=i.packets[n])}}}v.RegisterExtension(ri,l=>new Lr(l));function qe(l,e,t,s){return y.FromArray(e,t).scale(s)}function Mr(l,e,t,s){return e[t+3]*s}function $(l,e,t,s){return e[t]*s}function ni(l,e,t,s){return-e[t]*s}function pt(l,e,t,s){return e[t+1]*s}function wi(l,e,t,s){return e[t]*s*2}function Ot(l){return{scale:[new k(O.ANIMATIONTYPE_FLOAT,`${l}.uScale`,$,()=>2),new k(O.ANIMATIONTYPE_FLOAT,`${l}.vScale`,pt,()=>2)],offset:[new k(O.ANIMATIONTYPE_FLOAT,`${l}.uOffset`,$,()=>2),new k(O.ANIMATIONTYPE_FLOAT,`${l}.vOffset`,pt,()=>2)],rotation:[new k(O.ANIMATIONTYPE_FLOAT,`${l}.wAng`,ni,()=>1)]}}class De extends ut{buildAnimations(e,t,s,i,r){r(e._babylonCamera,this._buildAnimation(t,s,i))}}class k extends ut{buildAnimations(e,t,s,i,r){for(const n in e._data)r(e._data[n].babylonMaterial,this._buildAnimation(t,s,i))}}class tt extends ut{buildAnimations(e,t,s,i,r){r(e._babylonLight,this._buildAnimation(t,s,i))}}const Fr={__array__:{__target__:!0,...st}},Rr={__array__:{__target__:!0,orthographic:{xmag:[new De(O.ANIMATIONTYPE_FLOAT,"orthoLeft",ni,()=>1),new De(O.ANIMATIONTYPE_FLOAT,"orthoRight",pt,()=>1)],ymag:[new De(O.ANIMATIONTYPE_FLOAT,"orthoBottom",ni,()=>1),new De(O.ANIMATIONTYPE_FLOAT,"orthoTop",pt,()=>1)],zfar:[new De(O.ANIMATIONTYPE_FLOAT,"maxZ",$,()=>1)],znear:[new De(O.ANIMATIONTYPE_FLOAT,"minZ",$,()=>1)]},perspective:{yfov:[new De(O.ANIMATIONTYPE_FLOAT,"fov",$,()=>1)],zfar:[new De(O.ANIMATIONTYPE_FLOAT,"maxZ",$,()=>1)],znear:[new De(O.ANIMATIONTYPE_FLOAT,"minZ",$,()=>1)]}}},wr={__array__:{__target__:!0,pbrMetallicRoughness:{baseColorFactor:[new k(O.ANIMATIONTYPE_COLOR3,"albedoColor",qe,()=>4),new k(O.ANIMATIONTYPE_FLOAT,"alpha",Mr,()=>4)],metallicFactor:[new k(O.ANIMATIONTYPE_FLOAT,"metallic",$,()=>1)],roughnessFactor:[new k(O.ANIMATIONTYPE_FLOAT,"roughness",$,()=>1)],baseColorTexture:{extensions:{KHR_texture_transform:Ot("albedoTexture")}}},emissiveFactor:[new k(O.ANIMATIONTYPE_COLOR3,"emissiveColor",qe,()=>3)],normalTexture:{scale:[new k(O.ANIMATIONTYPE_FLOAT,"bumpTexture.level",$,()=>1)]},occlusionTexture:{strength:[new k(O.ANIMATIONTYPE_FLOAT,"ambientTextureStrength",$,()=>1)],extensions:{KHR_texture_transform:Ot("ambientTexture")}},emissiveTexture:{extensions:{KHR_texture_transform:Ot("emissiveTexture")}},extensions:{KHR_materials_ior:{ior:[new k(O.ANIMATIONTYPE_FLOAT,"indexOfRefraction",$,()=>1)]},KHR_materials_clearcoat:{clearcoatFactor:[new k(O.ANIMATIONTYPE_FLOAT,"clearCoat.intensity",$,()=>1)],clearcoatRoughnessFactor:[new k(O.ANIMATIONTYPE_FLOAT,"clearCoat.roughness",$,()=>1)]},KHR_materials_sheen:{sheenColorFactor:[new k(O.ANIMATIONTYPE_COLOR3,"sheen.color",qe,()=>3)],sheenRoughnessFactor:[new k(O.ANIMATIONTYPE_FLOAT,"sheen.roughness",$,()=>1)]},KHR_materials_specular:{specularFactor:[new k(O.ANIMATIONTYPE_FLOAT,"metallicF0Factor",$,()=>1)],specularColorFactor:[new k(O.ANIMATIONTYPE_COLOR3,"metallicReflectanceColor",qe,()=>3)]},KHR_materials_emissive_strength:{emissiveStrength:[new k(O.ANIMATIONTYPE_FLOAT,"emissiveIntensity",$,()=>1)]},KHR_materials_transmission:{transmissionFactor:[new k(O.ANIMATIONTYPE_FLOAT,"subSurface.refractionIntensity",$,()=>1)]},KHR_materials_volume:{attenuationColor:[new k(O.ANIMATIONTYPE_COLOR3,"subSurface.tintColor",qe,()=>3)],attenuationDistance:[new k(O.ANIMATIONTYPE_FLOAT,"subSurface.tintColorAtDistance",$,()=>1)],thicknessFactor:[new k(O.ANIMATIONTYPE_FLOAT,"subSurface.maximumThickness",$,()=>1)]},KHR_materials_iridescence:{iridescenceFactor:[new k(O.ANIMATIONTYPE_FLOAT,"iridescence.intensity",$,()=>1)],iridescenceIor:[new k(O.ANIMATIONTYPE_FLOAT,"iridescence.indexOfRefraction",$,()=>1)],iridescenceThicknessMinimum:[new k(O.ANIMATIONTYPE_FLOAT,"iridescence.minimumThickness",$,()=>1)],iridescenceThicknessMaximum:[new k(O.ANIMATIONTYPE_FLOAT,"iridescence.maximumThickness",$,()=>1)]},KHR_materials_anisotropy:{anisotropyStrength:[new k(O.ANIMATIONTYPE_FLOAT,"anisotropy.intensity",$,()=>1)],anisotropyRotation:[new k(O.ANIMATIONTYPE_FLOAT,"anisotropy.angle",$,()=>1)]}}}},Dr={KHR_lights_punctual:{lights:{__array__:{__target__:!0,color:[new tt(O.ANIMATIONTYPE_COLOR3,"diffuse",qe,()=>3)],intensity:[new tt(O.ANIMATIONTYPE_FLOAT,"intensity",$,()=>1)],range:[new tt(O.ANIMATIONTYPE_FLOAT,"range",$,()=>1)],spot:{innerConeAngle:[new tt(O.ANIMATIONTYPE_FLOAT,"innerAngle",wi,()=>1)],outerConeAngle:[new tt(O.ANIMATIONTYPE_FLOAT,"angle",wi,()=>1)]}}}}},Ur={nodes:Fr,materials:wr,cameras:Rr,extensions:Dr},oi="KHR_animation_pointer";class Vr{constructor(e){this.name=oi,this._loader=e}get enabled(){return this._loader.isExtensionUsed(oi)}dispose(){this._loader=null}_loadAnimationChannelAsync(e,t,s,i,r){var n;const o=(n=i.target.extensions)===null||n===void 0?void 0:n.KHR_animation_pointer;if(!o)return null;i.target.path!=="pointer"&&se.Warn(`${e}/target/path: Value (${i.target.path}) must be (pointer) when using the ${this.name} extension`),i.target.node!=null&&se.Warn(`${e}/target/node: Value (${i.target.node}) must not be present when using the ${this.name} extension`);const a=`${e}/extensions/${this.name}`,f=o.pointer;if(!f)throw new Error(`${a}: Pointer is missing`);const c=this._parseAnimationPointer(`${a}/pointer`,f);return c?this._loader._loadAnimationChannelFromTargetInfoAsync(e,t,s,i,c,r):(se.Warn(`${a}/pointer: Invalid pointer (${f}) skipped`),null)}_parseAnimationPointer(e,t){if(!t.startsWith("/"))return se.Warn(`${e}: Value (${t}) must start with a slash`),null;const s=t.split("/");s.shift();let i=Ur,r=this._loader.gltf,n;for(const o of s){if(i.__array__)i=i.__array__;else if(i=i[o],!i)return null;r=r&&r[o],i.__target__&&(n=r)}return!n||!Array.isArray(i)?null:{target:n,properties:i}}}v.RegisterExtension(oi,l=>new Vr(l));const ai="MSFT_audio_emitter";class Br{constructor(e){this.name=ai,this._loader=e,this.enabled=this._loader.isExtensionUsed(ai)}dispose(){this._loader=null,this._clips=null,this._emitters=null}onLoading(){const e=this._loader.gltf.extensions;if(e&&e[this.name]){const t=e[this.name];this._clips=t.clips,this._emitters=t.emitters,C.Assign(this._clips),C.Assign(this._emitters)}}loadSceneAsync(e,t){return v.LoadExtensionAsync(e,t,this.name,(s,i)=>{const r=new Array;r.push(this._loader.loadSceneAsync(e,t));for(const n of i.emitters){const o=C.Get(`${s}/emitters`,this._emitters,n);if(o.refDistance!=null||o.maxDistance!=null||o.rolloffFactor!=null||o.distanceModel!=null||o.innerAngle!=null||o.outerAngle!=null)throw new Error(`${s}: Direction or Distance properties are not allowed on emitters attached to a scene`);r.push(this._loadEmitterAsync(`${s}/emitters/${o.index}`,o))}return Promise.all(r).then(()=>{})})}loadNodeAsync(e,t,s){return v.LoadExtensionAsync(e,t,this.name,(i,r)=>{const n=new Array;return this._loader.loadNodeAsync(i,t,o=>{for(const a of r.emitters){const f=C.Get(`${i}/emitters`,this._emitters,a);n.push(this._loadEmitterAsync(`${i}/emitters/${f.index}`,f).then(()=>{for(const c of f._babylonSounds)c.attachToMesh(o),(f.innerAngle!=null||f.outerAngle!=null)&&(c.setLocalDirectionToMesh(x.Forward()),c.setDirectionalCone(2*L.ToDegrees(f.innerAngle==null?Math.PI:f.innerAngle),2*L.ToDegrees(f.outerAngle==null?Math.PI:f.outerAngle),0))}))}s(o)}).then(o=>Promise.all(n).then(()=>o))})}loadAnimationAsync(e,t){return v.LoadExtensionAsync(e,t,this.name,(s,i)=>this._loader.loadAnimationAsync(e,t).then(r=>{const n=new Array;C.Assign(i.events);for(const o of i.events)n.push(this._loadAnimationEventAsync(`${s}/events/${o.index}`,e,t,o,r));return Promise.all(n).then(()=>r)}))}_loadClipAsync(e,t){if(t._objectURL)return t._objectURL;let s;if(t.uri)s=this._loader.loadUriAsync(e,t,t.uri);else{const i=C.Get(`${e}/bufferView`,this._loader.gltf.bufferViews,t.bufferView);s=this._loader.loadBufferViewAsync(`/bufferViews/${i.index}`,i)}return t._objectURL=s.then(i=>URL.createObjectURL(new Blob([i],{type:t.mimeType}))),t._objectURL}_loadEmitterAsync(e,t){if(t._babylonSounds=t._babylonSounds||[],!t._babylonData){const s=new Array,i=t.name||`emitter${t.index}`,r={loop:!1,autoplay:!1,volume:t.volume==null?1:t.volume};for(let o=0;o<t.clips.length;o++){const a=`/extensions/${this.name}/clips`,f=C.Get(a,this._clips,t.clips[o].clip);s.push(this._loadClipAsync(`${a}/${t.clips[o].clip}`,f).then(c=>{const u=t._babylonSounds[o]=new bs(i,c,this._loader.babylonScene,null,r);u.refDistance=t.refDistance||1,u.maxDistance=t.maxDistance||256,u.rolloffFactor=t.rolloffFactor||1,u.distanceModel=t.distanceModel||"exponential"}))}const n=Promise.all(s).then(()=>{const o=t.clips.map(f=>f.weight||1),a=new Gs(t.loop||!1,t._babylonSounds,o);t.innerAngle&&(a.directionalConeInnerAngle=2*L.ToDegrees(t.innerAngle)),t.outerAngle&&(a.directionalConeOuterAngle=2*L.ToDegrees(t.outerAngle)),t.volume&&(a.volume=t.volume),t._babylonData.sound=a});t._babylonData={loaded:n}}return t._babylonData.loaded}_getEventAction(e,t,s,i,r){switch(s){case"play":return n=>{const o=(r||0)+(n-i);t.play(o)};case"stop":return()=>{t.stop()};case"pause":return()=>{t.pause()};default:throw new Error(`${e}: Unsupported action ${s}`)}}_loadAnimationEventAsync(e,t,s,i,r){if(r.targetedAnimations.length==0)return Promise.resolve();const n=r.targetedAnimations[0],o=i.emitter,a=C.Get(`/extensions/${this.name}/emitters`,this._emitters,o);return this._loadEmitterAsync(e,a).then(()=>{const f=a._babylonData.sound;if(f){const c=new pi(i.time,this._getEventAction(e,f,i.action,i.time,i.startOffset));n.animation.addEvent(c),r.onAnimationGroupEndObservable.add(()=>{f.stop()}),r.onAnimationGroupPauseObservable.add(()=>{f.pause()})}})}}v.RegisterExtension(ai,l=>new Br(l));const li="MSFT_lod";class Gr{constructor(e){this.name=li,this.order=100,this.maxLODsToLoad=10,this.onNodeLODsLoadedObservable=new de,this.onMaterialLODsLoadedObservable=new de,this._bufferLODs=new Array,this._nodeIndexLOD=null,this._nodeSignalLODs=new Array,this._nodePromiseLODs=new Array,this._nodeBufferLODs=new Array,this._materialIndexLOD=null,this._materialSignalLODs=new Array,this._materialPromiseLODs=new Array,this._materialBufferLODs=new Array,this._loader=e,this.enabled=this._loader.isExtensionUsed(li)}dispose(){this._loader=null,this._nodeIndexLOD=null,this._nodeSignalLODs.length=0,this._nodePromiseLODs.length=0,this._nodeBufferLODs.length=0,this._materialIndexLOD=null,this._materialSignalLODs.length=0,this._materialPromiseLODs.length=0,this._materialBufferLODs.length=0,this.onMaterialLODsLoadedObservable.clear(),this.onNodeLODsLoadedObservable.clear()}onReady(){for(let e=0;e<this._nodePromiseLODs.length;e++){const t=Promise.all(this._nodePromiseLODs[e]).then(()=>{e!==0&&(this._loader.endPerformanceCounter(`Node LOD ${e}`),this._loader.log(`Loaded node LOD ${e}`)),this.onNodeLODsLoadedObservable.notifyObservers(e),e!==this._nodePromiseLODs.length-1&&(this._loader.startPerformanceCounter(`Node LOD ${e+1}`),this._loadBufferLOD(this._nodeBufferLODs,e+1),this._nodeSignalLODs[e]&&this._nodeSignalLODs[e].resolve())});this._loader._completePromises.push(t)}for(let e=0;e<this._materialPromiseLODs.length;e++){const t=Promise.all(this._materialPromiseLODs[e]).then(()=>{e!==0&&(this._loader.endPerformanceCounter(`Material LOD ${e}`),this._loader.log(`Loaded material LOD ${e}`)),this.onMaterialLODsLoadedObservable.notifyObservers(e),e!==this._materialPromiseLODs.length-1&&(this._loader.startPerformanceCounter(`Material LOD ${e+1}`),this._loadBufferLOD(this._materialBufferLODs,e+1),this._materialSignalLODs[e]&&this._materialSignalLODs[e].resolve())});this._loader._completePromises.push(t)}}loadSceneAsync(e,t){const s=this._loader.loadSceneAsync(e,t);return this._loadBufferLOD(this._bufferLODs,0),s}loadNodeAsync(e,t,s){return v.LoadExtensionAsync(e,t,this.name,(i,r)=>{let n;const o=this._getLODs(i,t,this._loader.gltf.nodes,r.ids);this._loader.logOpen(`${i}`);for(let a=0;a<o.length;a++){const f=o[a];a!==0&&(this._nodeIndexLOD=a,this._nodeSignalLODs[a]=this._nodeSignalLODs[a]||new it);const c=d=>{s(d),d.setEnabled(!1)},u=this._loader.loadNodeAsync(`/nodes/${f.index}`,f,c).then(d=>{if(a!==0){const m=o[a-1];m._babylonTransformNode&&(this._disposeTransformNode(m._babylonTransformNode),delete m._babylonTransformNode)}return d.setEnabled(!0),d});this._nodePromiseLODs[a]=this._nodePromiseLODs[a]||[],a===0?n=u:(this._nodeIndexLOD=null,this._nodePromiseLODs[a].push(u))}return this._loader.logClose(),n})}_loadMaterialAsync(e,t,s,i,r){return this._nodeIndexLOD?null:v.LoadExtensionAsync(e,t,this.name,(n,o)=>{let a;const f=this._getLODs(n,t,this._loader.gltf.materials,o.ids);this._loader.logOpen(`${n}`);for(let c=0;c<f.length;c++){const u=f[c];c!==0&&(this._materialIndexLOD=c);const d=this._loader._loadMaterialAsync(`/materials/${u.index}`,u,s,i,m=>{c===0&&r(m)}).then(m=>{if(c!==0){r(m);const g=f[c-1]._data;g[i]&&(this._disposeMaterials([g[i].babylonMaterial]),delete g[i])}return m});this._materialPromiseLODs[c]=this._materialPromiseLODs[c]||[],c===0?a=d:(this._materialIndexLOD=null,this._materialPromiseLODs[c].push(d))}return this._loader.logClose(),a})}_loadUriAsync(e,t,s){if(this._nodeIndexLOD!==null){this._loader.log("deferred");const i=this._nodeIndexLOD-1;return this._nodeSignalLODs[i]=this._nodeSignalLODs[i]||new it,this._nodeSignalLODs[this._nodeIndexLOD-1].promise.then(()=>this._loader.loadUriAsync(e,t,s))}else if(this._materialIndexLOD!==null){this._loader.log("deferred");const i=this._materialIndexLOD-1;return this._materialSignalLODs[i]=this._materialSignalLODs[i]||new it,this._materialSignalLODs[i].promise.then(()=>this._loader.loadUriAsync(e,t,s))}return null}loadBufferAsync(e,t,s,i){if(this._loader.parent.useRangeRequests&&!t.uri){if(!this._loader.bin)throw new Error(`${e}: Uri is missing or the binary glTF is missing its binary chunk`);const r=(n,o)=>{const a=s,f=a+i-1;let c=n[o];return c?(c.start=Math.min(c.start,a),c.end=Math.max(c.end,f)):(c={start:a,end:f,loaded:new it},n[o]=c),c.loaded.promise.then(u=>new Uint8Array(u.buffer,u.byteOffset+s-c.start,i))};return this._loader.log("deferred"),this._nodeIndexLOD!==null?r(this._nodeBufferLODs,this._nodeIndexLOD):this._materialIndexLOD!==null?r(this._materialBufferLODs,this._materialIndexLOD):r(this._bufferLODs,0)}return null}_loadBufferLOD(e,t){const s=e[t];s&&(this._loader.log(`Loading buffer range [${s.start}-${s.end}]`),this._loader.bin.readAsync(s.start,s.end-s.start+1).then(i=>{s.loaded.resolve(i)},i=>{s.loaded.reject(i)}))}_getLODs(e,t,s,i){if(this.maxLODsToLoad<=0)throw new Error("maxLODsToLoad must be greater than zero");const r=[];for(let n=i.length-1;n>=0;n--)if(r.push(C.Get(`${e}/ids/${i[n]}`,s,i[n])),r.length===this.maxLODsToLoad)return r;return r.push(t),r}_disposeTransformNode(e){const t=[],s=e.material;s&&t.push(s);for(const r of e.getChildMeshes())r.material&&t.push(r.material);e.dispose();const i=t.filter(r=>this._loader.babylonScene.meshes.every(n=>n.material!=r));this._disposeMaterials(i)}_disposeMaterials(e){const t={};for(const s of e){for(const i of s.getActiveTextures())t[i.uniqueId]=i;s.dispose()}for(const s in t)for(const i of this._loader.babylonScene.materials)i.hasTexture(t[s])&&delete t[s];for(const s in t)t[s].dispose()}}v.RegisterExtension(li,l=>new Gr(l));const fi="MSFT_minecraftMesh";class kr{constructor(e){this.name=fi,this._loader=e,this.enabled=this._loader.isExtensionUsed(fi)}dispose(){this._loader=null}loadMaterialPropertiesAsync(e,t,s){return v.LoadExtraAsync(e,t,this.name,(i,r)=>{if(r){if(!(s instanceof q))throw new Error(`${i}: Material type not supported`);const n=this._loader.loadMaterialPropertiesAsync(e,t,s);return s.needAlphaBlending()&&(s.forceDepthWrite=!0,s.separateCullingPass=!0),s.backFaceCulling=s.forceDepthWrite,s.twoSidedLighting=!0,n}return null})}}v.RegisterExtension(fi,l=>new kr(l));const ci="MSFT_sRGBFactors";class $r{constructor(e){this.name=ci,this._loader=e,this.enabled=this._loader.isExtensionUsed(ci)}dispose(){this._loader=null}loadMaterialPropertiesAsync(e,t,s){return v.LoadExtraAsync(e,t,this.name,(i,r)=>{if(r){if(!(s instanceof q))throw new Error(`${i}: Material type not supported`);const n=this._loader.loadMaterialPropertiesAsync(e,t,s),o=s.getScene().getEngine().useExactSrgbConversions;return s.albedoTexture||s.albedoColor.toLinearSpaceToRef(s.albedoColor,o),s.reflectivityTexture||s.reflectivityColor.toLinearSpaceToRef(s.reflectivityColor,o),n}return null})}}v.RegisterExtension(ci,l=>new $r(l));const ji="ExtrasAsMetadata";class zr{_assignExtras(e,t){if(t.extras&&Object.keys(t.extras).length>0){const s=e.metadata=e.metadata||{},i=s.gltf=s.gltf||{};i.extras=t.extras}}constructor(e){this.name=ji,this.enabled=!0,this._loader=e}dispose(){this._loader=null}loadNodeAsync(e,t,s){return this._loader.loadNodeAsync(e,t,i=>{this._assignExtras(i,t),s(i)})}loadCameraAsync(e,t,s){return this._loader.loadCameraAsync(e,t,i=>{this._assignExtras(i,t),s(i)})}createMaterial(e,t,s){const i=this._loader.createMaterial(e,t,s);return this._assignExtras(i,t),i}}v.RegisterExtension(ji,l=>new zr(l));class Me{constructor(){this.materials=[]}parseMTL(e,t,s,i){if(t instanceof ArrayBuffer)return;const r=t.split(`
`),n=/\s+/;let o,a=null;for(let f=0;f<r.length;f++){const c=r[f].trim();if(c.length===0||c.charAt(0)==="#")continue;const u=c.indexOf(" ");let d=u>=0?c.substring(0,u):c;d=d.toLowerCase();const m=u>=0?c.substring(u+1).trim():"";if(d==="newmtl")a&&this.materials.push(a),e._blockEntityCollection=!!i,a=new Ie(m,e),a._parentContainer=i,e._blockEntityCollection=!1;else if(d==="kd"&&a)o=m.split(n,3).map(parseFloat),a.diffuseColor=y.FromArray(o);else if(d==="ka"&&a)o=m.split(n,3).map(parseFloat),a.ambientColor=y.FromArray(o);else if(d==="ks"&&a)o=m.split(n,3).map(parseFloat),a.specularColor=y.FromArray(o);else if(d==="ke"&&a)o=m.split(n,3).map(parseFloat),a.emissiveColor=y.FromArray(o);else if(d==="ns"&&a)a.specularPower=parseFloat(m);else if(d==="d"&&a)a.alpha=parseFloat(m);else if(d==="map_ka"&&a)a.ambientTexture=Me._GetTexture(s,m,e);else if(d==="map_kd"&&a)a.diffuseTexture=Me._GetTexture(s,m,e);else if(d==="map_ks"&&a)a.specularTexture=Me._GetTexture(s,m,e);else if(d!=="map_ns")if(d==="map_bump"&&a){const g=m.split(n),T=g.indexOf("-bm");let S=null;T>=0&&(S=g[T+1],g.splice(T,2)),a.bumpTexture=Me._GetTexture(s,g.join(" "),e),a.bumpTexture&&S!==null&&(a.bumpTexture.level=parseFloat(S))}else d==="map_d"&&a&&(a.opacityTexture=Me._GetTexture(s,m,e))}a&&this.materials.push(a)}static _GetTexture(e,t,s){if(!t)return null;let i=e;if(e==="file:"){let r=t.lastIndexOf("\\");r===-1&&(r=t.lastIndexOf("/")),r>-1?i+=t.substr(r+1):i+=t}else i+=t;return new D(i,s,!1,Me.INVERT_TEXTURE_Y)}}Me.INVERT_TEXTURE_Y=!0;class U{constructor(e,t,s){this._positions=[],this._normals=[],this._uvs=[],this._colors=[],this._meshesFromObj=[],this._indicesForBabylon=[],this._wrappedPositionForBabylon=[],this._wrappedUvsForBabylon=[],this._wrappedColorsForBabylon=[],this._wrappedNormalsForBabylon=[],this._tuplePosNorm=[],this._curPositionInIndices=0,this._hasMeshes=!1,this._unwrappedPositionsForBabylon=[],this._unwrappedColorsForBabylon=[],this._unwrappedNormalsForBabylon=[],this._unwrappedUVForBabylon=[],this._triangles=[],this._materialNameFromObj="",this._objMeshName="",this._increment=1,this._isFirstMaterial=!0,this._grayColor=new bt(.5,.5,.5,1),this._materialToUse=e,this._babylonMeshesArray=t,this._loadingOptions=s}_isInArray(e,t){e[t[0]]||(e[t[0]]={normals:[],idx:[]});const s=e[t[0]].normals.indexOf(t[1]);return s===-1?-1:e[t[0]].idx[s]}_isInArrayUV(e,t){e[t[0]]||(e[t[0]]={normals:[],idx:[],uv:[]});const s=e[t[0]].normals.indexOf(t[1]);return s!=1&&t[2]===e[t[0]].uv[s]?e[t[0]].idx[s]:-1}_setData(e,t,s,i,r,n,o){let a;this._loadingOptions.optimizeWithUV?a=this._isInArrayUV(this._tuplePosNorm,[e,s,t]):a=this._isInArray(this._tuplePosNorm,[e,s]),a===-1?(this._indicesForBabylon.push(this._wrappedPositionForBabylon.length),this._wrappedPositionForBabylon.push(i),this._wrappedUvsForBabylon.push(r),this._wrappedNormalsForBabylon.push(n),o!==void 0&&this._wrappedColorsForBabylon.push(o),this._tuplePosNorm[e].normals.push(s),this._tuplePosNorm[e].idx.push(this._curPositionInIndices++),this._loadingOptions.optimizeWithUV&&this._tuplePosNorm[e].uv.push(t)):this._indicesForBabylon.push(a)}_unwrapData(){for(let e=0;e<this._wrappedPositionForBabylon.length;e++)this._unwrappedPositionsForBabylon.push(this._wrappedPositionForBabylon[e].x,this._wrappedPositionForBabylon[e].y,this._wrappedPositionForBabylon[e].z),this._unwrappedNormalsForBabylon.push(this._wrappedNormalsForBabylon[e].x,this._wrappedNormalsForBabylon[e].y,this._wrappedNormalsForBabylon[e].z),this._unwrappedUVForBabylon.push(this._wrappedUvsForBabylon[e].x,this._wrappedUvsForBabylon[e].y),this._loadingOptions.importVertexColors&&this._unwrappedColorsForBabylon.push(this._wrappedColorsForBabylon[e].r,this._wrappedColorsForBabylon[e].g,this._wrappedColorsForBabylon[e].b,this._wrappedColorsForBabylon[e].a);this._wrappedPositionForBabylon.length=0,this._wrappedNormalsForBabylon.length=0,this._wrappedUvsForBabylon.length=0,this._wrappedColorsForBabylon.length=0,this._tuplePosNorm.length=0,this._curPositionInIndices=0}_getTriangles(e,t){for(let s=t;s<e.length-1;s++)this._triangles.push(e[0],e[s],e[s+1])}_setDataForCurrentFaceWithPattern1(e,t){this._getTriangles(e,t);for(let s=0;s<this._triangles.length;s++){const i=parseInt(this._triangles[s])-1;this._setData(i,0,0,this._positions[i],He.Zero(),x.Up(),this._loadingOptions.importVertexColors?this._colors[i]:void 0)}this._triangles.length=0}_setDataForCurrentFaceWithPattern2(e,t){this._getTriangles(e,t);for(let s=0;s<this._triangles.length;s++){const i=this._triangles[s].split("/"),r=parseInt(i[0])-1,n=parseInt(i[1])-1;this._setData(r,n,0,this._positions[r],this._uvs[n],x.Up(),this._loadingOptions.importVertexColors?this._colors[r]:void 0)}this._triangles.length=0}_setDataForCurrentFaceWithPattern3(e,t){this._getTriangles(e,t);for(let s=0;s<this._triangles.length;s++){const i=this._triangles[s].split("/"),r=parseInt(i[0])-1,n=parseInt(i[1])-1,o=parseInt(i[2])-1;this._setData(r,n,o,this._positions[r],this._uvs[n],this._normals[o])}this._triangles.length=0}_setDataForCurrentFaceWithPattern4(e,t){this._getTriangles(e,t);for(let s=0;s<this._triangles.length;s++){const i=this._triangles[s].split("//"),r=parseInt(i[0])-1,n=parseInt(i[1])-1;this._setData(r,1,n,this._positions[r],He.Zero(),this._normals[n],this._loadingOptions.importVertexColors?this._colors[r]:void 0)}this._triangles.length=0}_setDataForCurrentFaceWithPattern5(e,t){this._getTriangles(e,t);for(let s=0;s<this._triangles.length;s++){const i=this._triangles[s].split("/"),r=this._positions.length+parseInt(i[0]),n=this._uvs.length+parseInt(i[1]),o=this._normals.length+parseInt(i[2]);this._setData(r,n,o,this._positions[r],this._uvs[n],this._normals[o],this._loadingOptions.importVertexColors?this._colors[r]:void 0)}this._triangles.length=0}_addPreviousObjMesh(){this._meshesFromObj.length>0&&(this._handledMesh=this._meshesFromObj[this._meshesFromObj.length-1],this._unwrapData(),this._indicesForBabylon.reverse(),this._handledMesh.indices=this._indicesForBabylon.slice(),this._handledMesh.positions=this._unwrappedPositionsForBabylon.slice(),this._handledMesh.normals=this._unwrappedNormalsForBabylon.slice(),this._handledMesh.uvs=this._unwrappedUVForBabylon.slice(),this._loadingOptions.importVertexColors&&(this._handledMesh.colors=this._unwrappedColorsForBabylon.slice()),this._indicesForBabylon.length=0,this._unwrappedPositionsForBabylon.length=0,this._unwrappedColorsForBabylon.length=0,this._unwrappedNormalsForBabylon.length=0,this._unwrappedUVForBabylon.length=0)}_optimizeNormals(e){const t=e.getVerticesData(p.PositionKind),s=e.getVerticesData(p.NormalKind),i={};if(!t||!s)return;for(let n=0;n<t.length/3;n++){const o=t[n*3+0],a=t[n*3+1],f=t[n*3+2],c=o+"_"+a+"_"+f;let u=i[c];u||(u=[],i[c]=u),u.push(n)}const r=new x;for(const n in i){const o=i[n];if(o.length<2)continue;const a=o[0];for(let f=1;f<o.length;++f){const c=o[f];s[a*3+0]+=s[c*3+0],s[a*3+1]+=s[c*3+1],s[a*3+2]+=s[c*3+2]}r.copyFromFloats(s[a*3+0],s[a*3+1],s[a*3+2]),r.normalize();for(let f=0;f<o.length;++f){const c=o[f];s[c*3+0]=r.x,s[c*3+1]=r.y,s[c*3+2]=r.z}}e.setVerticesData(p.NormalKind,s)}parse(e,t,s,i,r){var n;const o=t.split(`
`);for(let a=0;a<o.length;a++){const f=o[a].trim().replace(/\s\s/g," ");let c;if(!(f.length===0||f.charAt(0)==="#"))if(U.VertexPattern.test(f)){if(c=f.match(/[^ ]+/g),this._positions.push(new x(parseFloat(c[1]),parseFloat(c[2]),parseFloat(c[3]))),this._loadingOptions.importVertexColors)if(c.length>=7){const u=parseFloat(c[4]),d=parseFloat(c[5]),m=parseFloat(c[6]);this._colors.push(new bt(u>1?u/255:u,d>1?d/255:d,m>1?m/255:m,c.length===7||c[7]===void 0?1:parseFloat(c[7])))}else this._colors.push(this._grayColor)}else if((c=U.NormalPattern.exec(f))!==null)this._normals.push(new x(parseFloat(c[1]),parseFloat(c[2]),parseFloat(c[3])));else if((c=U.UVPattern.exec(f))!==null)this._uvs.push(new He(parseFloat(c[1])*this._loadingOptions.UVScaling.x,parseFloat(c[2])*this._loadingOptions.UVScaling.y));else if((c=U.FacePattern3.exec(f))!==null)this._setDataForCurrentFaceWithPattern3(c[1].trim().split(" "),1);else if((c=U.FacePattern4.exec(f))!==null)this._setDataForCurrentFaceWithPattern4(c[1].trim().split(" "),1);else if((c=U.FacePattern5.exec(f))!==null)this._setDataForCurrentFaceWithPattern5(c[1].trim().split(" "),1);else if((c=U.FacePattern2.exec(f))!==null)this._setDataForCurrentFaceWithPattern2(c[1].trim().split(" "),1);else if((c=U.FacePattern1.exec(f))!==null)this._setDataForCurrentFaceWithPattern1(c[1].trim().split(" "),1);else if((c=U.LinePattern1.exec(f))!==null)this._setDataForCurrentFaceWithPattern1(c[1].trim().split(" "),0);else if((c=U.LinePattern2.exec(f))!==null)this._setDataForCurrentFaceWithPattern2(c[1].trim().split(" "),0);else if((c=U.LinePattern3.exec(f))!==null)this._setDataForCurrentFaceWithPattern3(c[1].trim().split(" "),0);else if(U.GroupDescriptor.test(f)||U.ObjectDescriptor.test(f)){const u={name:f.substring(2).trim(),indices:void 0,positions:void 0,normals:void 0,uvs:void 0,colors:void 0,materialName:this._materialNameFromObj};this._addPreviousObjMesh(),this._meshesFromObj.push(u),this._hasMeshes=!0,this._isFirstMaterial=!0,this._increment=1}else if(U.UseMtlDescriptor.test(f)){if(this._materialNameFromObj=f.substring(7).trim(),!this._isFirstMaterial||!this._hasMeshes){this._addPreviousObjMesh();const u={name:(this._objMeshName||"mesh")+"_mm"+this._increment.toString(),indices:void 0,positions:void 0,normals:void 0,uvs:void 0,colors:void 0,materialName:this._materialNameFromObj};this._increment++,this._meshesFromObj.push(u),this._hasMeshes=!0}this._hasMeshes&&this._isFirstMaterial&&(this._meshesFromObj[this._meshesFromObj.length-1].materialName=this._materialNameFromObj,this._isFirstMaterial=!1)}else U.MtlLibGroupDescriptor.test(f)?r(f.substring(7).trim()):U.SmoothDescriptor.test(f)||console.log("Unhandled expression at line : "+f)}if(this._hasMeshes&&(this._handledMesh=this._meshesFromObj[this._meshesFromObj.length-1],this._indicesForBabylon.reverse(),this._unwrapData(),this._handledMesh.indices=this._indicesForBabylon,this._handledMesh.positions=this._unwrappedPositionsForBabylon,this._handledMesh.normals=this._unwrappedNormalsForBabylon,this._handledMesh.uvs=this._unwrappedUVForBabylon,this._loadingOptions.importVertexColors&&(this._handledMesh.colors=this._unwrappedColorsForBabylon)),!this._hasMeshes){let a=null;if(this._indicesForBabylon.length)this._indicesForBabylon.reverse(),this._unwrapData();else{for(const f of this._positions)this._unwrappedPositionsForBabylon.push(f.x,f.y,f.z);if(this._normals.length)for(const f of this._normals)this._unwrappedNormalsForBabylon.push(f.x,f.y,f.z);if(this._uvs.length)for(const f of this._uvs)this._unwrappedUVForBabylon.push(f.x,f.y);if(this._colors.length)for(const f of this._colors)this._unwrappedColorsForBabylon.push(f.r,f.g,f.b,f.a);this._materialNameFromObj||(a=new Ie(_t.RandomId(),s),a.pointsCloud=!0,this._materialNameFromObj=a.name,this._normals.length||(a.disableLighting=!0,a.emissiveColor=y.White()))}this._meshesFromObj.push({name:_t.RandomId(),indices:this._indicesForBabylon,positions:this._unwrappedPositionsForBabylon,colors:this._unwrappedColorsForBabylon,normals:this._unwrappedNormalsForBabylon,uvs:this._unwrappedUVForBabylon,materialName:this._materialNameFromObj,directMaterial:a})}for(let a=0;a<this._meshesFromObj.length;a++){if(e&&this._meshesFromObj[a].name){if(e instanceof Array){if(e.indexOf(this._meshesFromObj[a].name)===-1)continue}else if(this._meshesFromObj[a].name!==e)continue}this._handledMesh=this._meshesFromObj[a],s._blockEntityCollection=!!i;const f=new ye(this._meshesFromObj[a].name,s);if(f._parentContainer=i,s._blockEntityCollection=!1,this._materialToUse.push(this._meshesFromObj[a].materialName),((n=this._handledMesh.positions)===null||n===void 0?void 0:n.length)===0){this._babylonMeshesArray.push(f);continue}const c=new It;if(c.uvs=this._handledMesh.uvs,c.indices=this._handledMesh.indices,c.positions=this._handledMesh.positions,this._loadingOptions.computeNormals){const u=new Array;It.ComputeNormals(this._handledMesh.positions,this._handledMesh.indices,u),c.normals=u}else c.normals=this._handledMesh.normals;this._loadingOptions.importVertexColors&&(c.colors=this._handledMesh.colors),c.applyToMesh(f),this._loadingOptions.invertY&&(f.scaling.y*=-1),this._loadingOptions.optimizeNormals&&this._optimizeNormals(f),this._babylonMeshesArray.push(f),this._handledMesh.directMaterial&&(f.material=this._handledMesh.directMaterial)}}}U.ObjectDescriptor=/^o/;U.GroupDescriptor=/^g/;U.MtlLibGroupDescriptor=/^mtllib /;U.UseMtlDescriptor=/^usemtl /;U.SmoothDescriptor=/^s /;U.VertexPattern=/^v(\s+[\d|.|+|\-|e|E]+){3,7}/;U.NormalPattern=/^vn(\s+[\d|.|+|\-|e|E]+)( +[\d|.|+|\-|e|E]+)( +[\d|.|+|\-|e|E]+)/;U.UVPattern=/^vt(\s+[\d|.|+|\-|e|E]+)( +[\d|.|+|\-|e|E]+)/;U.FacePattern1=/^f\s+(([\d]{1,}[\s]?){3,})+/;U.FacePattern2=/^f\s+((([\d]{1,}\/[\d]{1,}[\s]?){3,})+)/;U.FacePattern3=/^f\s+((([\d]{1,}\/[\d]{1,}\/[\d]{1,}[\s]?){3,})+)/;U.FacePattern4=/^f\s+((([\d]{1,}\/\/[\d]{1,}[\s]?){3,})+)/;U.FacePattern5=/^f\s+(((-[\d]{1,}\/-[\d]{1,}\/-[\d]{1,}[\s]?){3,})+)/;U.LinePattern1=/^l\s+(([\d]{1,}[\s]?){2,})+/;U.LinePattern2=/^l\s+((([\d]{1,}\/[\d]{1,}[\s]?){2,})+)/;U.LinePattern3=/^l\s+((([\d]{1,}\/[\d]{1,}\/[\d]{1,}[\s]?){2,})+)/;class re{static get INVERT_TEXTURE_Y(){return Me.INVERT_TEXTURE_Y}static set INVERT_TEXTURE_Y(e){Me.INVERT_TEXTURE_Y=e}constructor(e){this.name="obj",this.extensions=".obj",this._assetContainer=null,this._loadingOptions=e||re._DefaultLoadingOptions}static get _DefaultLoadingOptions(){return{computeNormals:re.COMPUTE_NORMALS,optimizeNormals:re.OPTIMIZE_NORMALS,importVertexColors:re.IMPORT_VERTEX_COLORS,invertY:re.INVERT_Y,invertTextureY:re.INVERT_TEXTURE_Y,UVScaling:re.UV_SCALING,materialLoadingFailsSilently:re.MATERIAL_LOADING_FAILS_SILENTLY,optimizeWithUV:re.OPTIMIZE_WITH_UV,skipMaterials:re.SKIP_MATERIALS}}_loadMTL(e,t,s,i){const r=t+e;L.LoadFile(r,s,void 0,void 0,!1,(n,o)=>{i(r,o)})}createPlugin(){return new re(re._DefaultLoadingOptions)}canDirectLoad(){return!1}importMeshAsync(e,t,s,i){return this._parseSolid(e,t,s,i).then(r=>({meshes:r,particleSystems:[],skeletons:[],animationGroups:[],transformNodes:[],geometries:[],lights:[]}))}loadAsync(e,t,s){return this.importMeshAsync(null,e,t,s).then(()=>{})}loadAssetContainerAsync(e,t,s){const i=new ui(e);return this._assetContainer=i,this.importMeshAsync(null,e,t,s).then(r=>(r.meshes.forEach(n=>i.meshes.push(n)),r.meshes.forEach(n=>{const o=n.material;o&&i.materials.indexOf(o)==-1&&(i.materials.push(o),o.getActiveTextures().forEach(f=>{i.textures.indexOf(f)==-1&&i.textures.push(f)}))}),this._assetContainer=null,i)).catch(r=>{throw this._assetContainer=null,r})}_parseSolid(e,t,s,i){let r="";const n=new Me,o=[],a=[];new U(o,a,this._loadingOptions).parse(e,s,t,this._assetContainer,u=>{r=u});const c=[];return r!==""&&!this._loadingOptions.skipMaterials&&c.push(new Promise((u,d)=>{this._loadMTL(r,i,m=>{try{n.parseMTL(t,m,i,this._assetContainer);for(let g=0;g<n.materials.length;g++){let T=0;const S=[];let E;for(;(E=o.indexOf(n.materials[g].name,T))>-1;)S.push(E),T=E+1;if(E===-1&&S.length===0)n.materials[g].dispose();else for(let b=0;b<S.length;b++){const w=a[S[b]],B=n.materials[g];w.material=B,w.getTotalIndices()||(B.pointsCloud=!0)}}u()}catch(g){L.Warn(`Error processing MTL file: '${r}'`),this._loadingOptions.materialLoadingFailsSilently?u():d(g)}},(m,g)=>{L.Warn(`Error downloading MTL file: '${r}'`),this._loadingOptions.materialLoadingFailsSilently?u():d(g)})})),Promise.all(c).then(()=>a)}}re.OPTIMIZE_WITH_UV=!0;re.INVERT_Y=!1;re.IMPORT_VERTEX_COLORS=!1;re.COMPUTE_NORMALS=!1;re.OPTIMIZE_NORMALS=!1;re.UV_SCALING=new He(1,1);re.SKIP_MATERIALS=!1;re.MATERIAL_LOADING_FAILS_SILENTLY=!0;Xe&&Xe.RegisterPlugin(new re);class We{constructor(){this.solidPattern=/solid (\S*)([\S\s]*?)endsolid[ ]*(\S*)/g,this.facetsPattern=/facet([\s\S]*?)endfacet/g,this.normalPattern=/normal[\s]+([-+]?[0-9]+\.?[0-9]*([eE][-+]?[0-9]+)?)+[\s]+([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)+[\s]+([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)+/g,this.vertexPattern=/vertex[\s]+([-+]?[0-9]+\.?[0-9]*([eE][-+]?[0-9]+)?)+[\s]+([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)+[\s]+([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)+/g,this.name="stl",this.extensions={".stl":{isBinary:!0}}}importMesh(e,t,s,i,r){let n;if(typeof s!="string"){if(this._isBinary(s)){const o=new ye("stlmesh",t);return this._parseBinary(o,s),r&&r.push(o),!0}s=new TextDecoder().decode(new Uint8Array(s))}for(;n=this.solidPattern.exec(s);){let o=n[1];const a=n[3];if(a&&o!=a)return L.Error("Error in STL, solid name != endsolid name"),!1;if(e&&o){if(e instanceof Array){if(!e.indexOf(o))continue}else if(o!==e)continue}o=o||"stlmesh";const f=new ye(o,t);this._parseASCII(f,n[2]),r&&r.push(f)}return!0}load(e,t,s){return this.importMesh(null,e,t,s,null)}loadAssetContainer(e,t,s){const i=new ui(e);return e._blockEntityCollection=!0,this.importMesh(null,e,t,s,i.meshes),e._blockEntityCollection=!1,i}_isBinary(e){const t=new DataView(e);if(t.byteLength<=80)return!1;const s=32/8*3+32/8*3*3+16/8,i=t.getUint32(80,!0);if(80+32/8+i*s===t.byteLength)return!0;const r=[115,111,108,105,100];for(let n=0;n<5;n++)if(t.getUint8(n)!==r[n])return!0;return!1}_parseBinary(e,t){const s=new DataView(t),i=s.getUint32(80,!0),r=84,n=12*4+2;let o=0;const a=new Float32Array(i*3*3),f=new Float32Array(i*3*3),c=new Uint32Array(i*3);let u=0;for(let d=0;d<i;d++){const m=r+d*n,g=s.getFloat32(m,!0),T=s.getFloat32(m+4,!0),S=s.getFloat32(m+8,!0);for(let E=1;E<=3;E++){const b=m+E*12;a[o]=s.getFloat32(b,!0),f[o]=g,We.DO_NOT_ALTER_FILE_COORDINATES?(a[o+1]=s.getFloat32(b+4,!0),a[o+2]=s.getFloat32(b+8,!0),f[o+1]=T,f[o+2]=S):(a[o+2]=s.getFloat32(b+4,!0),a[o+1]=s.getFloat32(b+8,!0),f[o+2]=T,f[o+1]=S),o+=3}We.DO_NOT_ALTER_FILE_COORDINATES?(c[u]=u,c[u+1]=u+2,c[u+2]=u+1,u+=3):(c[u]=u++,c[u]=u++,c[u]=u++)}e.setVerticesData(p.PositionKind,a),e.setVerticesData(p.NormalKind,f),e.setIndices(c),e.computeWorldMatrix(!0)}_parseASCII(e,t){const s=[],i=[],r=[];let n=0,o;for(;o=this.facetsPattern.exec(t);){const a=o[1],f=this.normalPattern.exec(a);if(this.normalPattern.lastIndex=0,!f)continue;const c=[Number(f[1]),Number(f[5]),Number(f[3])];let u;for(;u=this.vertexPattern.exec(a);)We.DO_NOT_ALTER_FILE_COORDINATES?(s.push(Number(u[1]),Number(u[3]),Number(u[5])),i.push(c[0],c[2],c[1])):(s.push(Number(u[1]),Number(u[5]),Number(u[3])),i.push(c[0],c[1],c[2]));We.DO_NOT_ALTER_FILE_COORDINATES?(r.push(n,n+2,n+1),n+=3):r.push(n++,n++,n++),this.vertexPattern.lastIndex=0}this.facetsPattern.lastIndex=0,e.setVerticesData(p.PositionKind,s),e.setVerticesData(p.NormalKind,i),e.setIndices(r),e.computeWorldMatrix(!0)}}We.DO_NOT_ALTER_FILE_COORDINATES=!1;Xe&&Xe.RegisterPlugin(new We);const Wr=l=>{const e=new Is("Arc Camera",L.ToRadians(-90),L.ToRadians(80),10,new x(0,0,0),l);return e.angularSensibilityX=3e3,e.angularSensibilityY=3e3,e.wheelPrecision=10,e},Hr=l=>{const e=new mt("Free Camera",new x(0,5,-10),l);e.rotation.x=L.ToRadians(30),e.inputs.addMouseWheel(),e.speed=2;let t=.5;return e.inputs.attached.mousewheel.wheelPrecisionX=t,e.inputs.attached.mousewheel.wheelPrecisionY=t,e.inputs.attached.mousewheel.wheelPrecisionZ=t,e},Xr="cellPixelShader",jr=`precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<helperFunctions>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#ifdef DIFFUSE
varying vec2 vDiffuseUV;uniform sampler2D diffuseSampler;uniform vec2 vDiffuseInfos;
#endif
#include<clipPlaneFragmentDeclaration>
#include<fogFragmentDeclaration>
vec3 computeCustomDiffuseLighting(lightingInfo info,vec3 diffuseBase,float shadow)
{diffuseBase=info.diffuse*shadow;
#ifdef CELLBASIC
float level=1.0;if (info.ndl<0.5)
level=0.5;diffuseBase.rgb*vec3(level,level,level);
#else
float ToonThresholds[4];ToonThresholds[0]=0.95;ToonThresholds[1]=0.5;ToonThresholds[2]=0.2;ToonThresholds[3]=0.03;float ToonBrightnessLevels[5];ToonBrightnessLevels[0]=1.0;ToonBrightnessLevels[1]=0.8;ToonBrightnessLevels[2]=0.6;ToonBrightnessLevels[3]=0.35;ToonBrightnessLevels[4]=0.2;if (info.ndl>ToonThresholds[0])
{diffuseBase.rgb*=ToonBrightnessLevels[0];}
else if (info.ndl>ToonThresholds[1])
{diffuseBase.rgb*=ToonBrightnessLevels[1];}
else if (info.ndl>ToonThresholds[2])
{diffuseBase.rgb*=ToonBrightnessLevels[2];}
else if (info.ndl>ToonThresholds[3])
{diffuseBase.rgb*=ToonBrightnessLevels[3];}
else
{diffuseBase.rgb*=ToonBrightnessLevels[4];}
#endif
return max(diffuseBase,vec3(0.2));}
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(1.,1.,1.,1.);vec3 diffuseColor=vDiffuseColor.rgb;float alpha=vDiffuseColor.a;
#ifdef DIFFUSE
baseColor=texture2D(diffuseSampler,vDiffuseUV);
#ifdef ALPHATEST
if (baseColor.a<0.4)
discard;
#endif
#include<depthPrePass>
baseColor.rgb*=vDiffuseInfos.y;
#endif
#ifdef VERTEXCOLOR
baseColor.rgb*=vColor.rgb;
#endif
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=vec3(1.0,1.0,1.0);
#endif
lightingInfo info;vec3 diffuseBase=vec3(0.,0.,0.);float shadow=1.;float glossiness=0.;float aggShadow=0.;float numLights=0.;
#ifdef SPECULARTERM
vec3 specularBase=vec3(0.,0.,0.);
#endif 
#include<lightFragment>[0..maxSimultaneousLights]
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
vec3 finalDiffuse=clamp(diffuseBase*diffuseColor,0.0,1.0)*baseColor.rgb;vec4 color=vec4(finalDiffuse,alpha);
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}`;X.ShadersStore[Xr]=jr;const Kr="cellVertexShader",Yr=`precision highp float;attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
uniform mat4 view;uniform mat4 viewProjection;
#ifdef DIFFUSE
varying vec2 vDiffuseUV;uniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);
#ifdef NORMAL
vNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));
#endif
#ifndef UV1
vec2 uv=vec2(0.,0.);
#endif
#ifndef UV2
vec2 uv2=vec2(0.,0.);
#endif
#ifdef DIFFUSE
if (vDiffuseInfos.x==0.)
{vDiffuseUV=vec2(diffuseMatrix*vec4(uv,1.0,0.0));}
else
{vDiffuseUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));}
#endif
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;X.ShadersStore[Kr]=Yr;class Zr extends Ee{constructor(){super(),this.DIFFUSE=!1,this.CLIPPLANE=!1,this.CLIPPLANE2=!1,this.CLIPPLANE3=!1,this.CLIPPLANE4=!1,this.CLIPPLANE5=!1,this.CLIPPLANE6=!1,this.ALPHATEST=!1,this.POINTSIZE=!1,this.FOG=!1,this.NORMAL=!1,this.UV1=!1,this.UV2=!1,this.VERTEXCOLOR=!1,this.VERTEXALPHA=!1,this.NUM_BONE_INFLUENCERS=0,this.BonesPerMesh=0,this.INSTANCES=!1,this.INSTANCESCOLOR=!1,this.NDOTL=!0,this.CUSTOMUSERLIGHTING=!0,this.CELLBASIC=!0,this.DEPTHPREPASS=!1,this.IMAGEPROCESSINGPOSTPROCESS=!1,this.SKIPFINALCOLORCLAMP=!1,this.rebuild()}}class Ce extends xe{constructor(e,t){super(e,t),this.diffuseColor=new y(1,1,1),this._computeHighLevel=!1,this._disableLighting=!1,this._maxSimultaneousLights=4}needAlphaBlending(){return this.alpha<1}needAlphaTesting(){return!1}getAlphaTestTexture(){return null}isReadyForSubMesh(e,t,s){if(this.isFrozen&&t.effect&&t.effect._wasPreviouslyReady&&t.effect._wasPreviouslyUsingInstances===s)return!0;t.materialDefines||(t.materialDefines=new Zr);const i=t.materialDefines,r=this.getScene();if(this._isReadyForSubMesh(t))return!0;const n=r.getEngine();if(i._areTexturesDirty&&(i._needUVs=!1,r.texturesEnabled&&this._diffuseTexture&&j.DiffuseTextureEnabled))if(this._diffuseTexture.isReady())i._needUVs=!0,i.DIFFUSE=!0;else return!1;if(i.CELLBASIC=!this.computeHighLevel,_.PrepareDefinesForMisc(e,r,!1,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(e),i),i._needNormals=_.PrepareDefinesForLights(r,e,i,!1,this._maxSimultaneousLights,this._disableLighting),_.PrepareDefinesForFrameBoundValues(r,n,this,i,!!s),_.PrepareDefinesForAttributes(e,i,!0,!0),i.isDirty){i.markAsProcessed(),r.resetCachedMaterial();const o=new be;i.FOG&&o.addFallback(1,"FOG"),_.HandleFallbacksForShadows(i,o,this.maxSimultaneousLights),i.NUM_BONE_INFLUENCERS>0&&o.addCPUSkinningFallback(0,e),i.IMAGEPROCESSINGPOSTPROCESS=r.imageProcessingConfiguration.applyByPostProcess;const a=[p.PositionKind];i.NORMAL&&a.push(p.NormalKind),i.UV1&&a.push(p.UVKind),i.UV2&&a.push(p.UV2Kind),i.VERTEXCOLOR&&a.push(p.ColorKind),_.PrepareAttributesForBones(a,e,i,o),_.PrepareAttributesForInstances(a,i);const f="cell",c=i.toString(),u=["world","view","viewProjection","vEyePosition","vLightsType","vDiffuseColor","vFogInfos","vFogColor","pointSize","vDiffuseInfos","mBones","diffuseMatrix"],d=["diffuseSampler"],m=[];Pe(u),_.PrepareUniformsAndSamplersList({uniformsNames:u,uniformBuffersNames:m,samplers:d,defines:i,maxSimultaneousLights:this.maxSimultaneousLights}),t.setEffect(r.getEngine().createEffect(f,{attributes:a,uniformsNames:u,uniformBuffersNames:m,samplers:d,defines:c,fallbacks:o,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:this.maxSimultaneousLights-1}},n),i,this._materialContext)}return!t.effect||!t.effect.isReady()?!1:(i._renderId=r.getRenderId(),t.effect._wasPreviouslyReady=!0,t.effect._wasPreviouslyUsingInstances=!!s,!0)}bindForSubMesh(e,t,s){const i=this.getScene(),r=s.materialDefines;if(!r)return;const n=s.effect;n&&(this._activeEffect=n,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",i.getTransformMatrix()),_.BindBonesParameters(t,this._activeEffect),this._mustRebind(i,n)&&(this._diffuseTexture&&j.DiffuseTextureEnabled&&(this._activeEffect.setTexture("diffuseSampler",this._diffuseTexture),this._activeEffect.setFloat2("vDiffuseInfos",this._diffuseTexture.coordinatesIndex,this._diffuseTexture.level),this._activeEffect.setMatrix("diffuseMatrix",this._diffuseTexture.getTextureMatrix())),Oe(this._activeEffect,this,i),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),i.bindEyePosition(n)),this._activeEffect.setColor4("vDiffuseColor",this.diffuseColor,this.alpha*t.visibility),i.lightsEnabled&&!this.disableLighting&&_.BindLights(i,t,this._activeEffect,r,this._maxSimultaneousLights),i.fogEnabled&&t.applyFog&&i.fogMode!==ve.FOGMODE_NONE&&this._activeEffect.setMatrix("view",i.getViewMatrix()),_.BindFogParameters(i,t,this._activeEffect),this._afterBind(t,this._activeEffect))}getAnimatables(){const e=[];return this._diffuseTexture&&this._diffuseTexture.animations&&this._diffuseTexture.animations.length>0&&e.push(this._diffuseTexture),e}getActiveTextures(){const e=super.getActiveTextures();return this._diffuseTexture&&e.push(this._diffuseTexture),e}hasTexture(e){return super.hasTexture(e)?!0:this._diffuseTexture===e}dispose(e){this._diffuseTexture&&this._diffuseTexture.dispose(),super.dispose(e)}getClassName(){return"CellMaterial"}clone(e){return H.Clone(()=>new Ce(e,this.getScene()),this)}serialize(){const e=super.serialize();return e.customType="BABYLON.CellMaterial",e}static Parse(e,t,s){return H.Parse(()=>new Ce(e.name,t),e,t,s)}}h([R("diffuseTexture")],Ce.prototype,"_diffuseTexture",void 0);h([P("_markAllSubMeshesAsTexturesDirty")],Ce.prototype,"diffuseTexture",void 0);h([oe("diffuse")],Ce.prototype,"diffuseColor",void 0);h([A("computeHighLevel")],Ce.prototype,"_computeHighLevel",void 0);h([P("_markAllSubMeshesAsTexturesDirty")],Ce.prototype,"computeHighLevel",void 0);h([A("disableLighting")],Ce.prototype,"_disableLighting",void 0);h([P("_markAllSubMeshesAsLightsDirty")],Ce.prototype,"disableLighting",void 0);h([A("maxSimultaneousLights")],Ce.prototype,"_maxSimultaneousLights",void 0);h([P("_markAllSubMeshesAsLightsDirty")],Ce.prototype,"maxSimultaneousLights",void 0);_e("BABYLON.CellMaterial",Ce);class qr{constructor(){}}class at extends Ie{AttachAfterBind(e,t){if(this._newUniformInstances)for(const s in this._newUniformInstances){const i=s.toString().split("-");i[0]=="vec2"?t.setVector2(i[1],this._newUniformInstances[s]):i[0]=="vec3"?t.setVector3(i[1],this._newUniformInstances[s]):i[0]=="vec4"?t.setVector4(i[1],this._newUniformInstances[s]):i[0]=="mat4"?t.setMatrix(i[1],this._newUniformInstances[s]):i[0]=="float"&&t.setFloat(i[1],this._newUniformInstances[s])}if(this._newSamplerInstances)for(const s in this._newSamplerInstances){const i=s.toString().split("-");i[0]=="sampler2D"&&this._newSamplerInstances[s].isReady&&this._newSamplerInstances[s].isReady()&&t.setTexture(i[1],this._newSamplerInstances[s])}}ReviewUniform(e,t){if(e=="uniform"&&this._newUniforms)for(let s=0;s<this._newUniforms.length;s++)this._customUniform[s].indexOf("sampler")==-1&&t.push(this._newUniforms[s].replace(/\[\d*\]/g,""));if(e=="sampler"&&this._newUniforms)for(let s=0;s<this._newUniforms.length;s++)this._customUniform[s].indexOf("sampler")!=-1&&t.push(this._newUniforms[s].replace(/\[\d*\]/g,""));return t}Builder(e,t,s,i,r,n){if(n&&this._customAttributes&&this._customAttributes.length>0&&n.push(...this._customAttributes),this.ReviewUniform("uniform",t),this.ReviewUniform("sampler",i),this._isCreatedShader)return this._createdShaderName;this._isCreatedShader=!1,at.ShaderIndexer++;const o="custom_"+at.ShaderIndexer,a=this._afterBind.bind(this);return this._afterBind=(f,c)=>{if(c){this.AttachAfterBind(f,c);try{a(f,c)}catch{}}},Y.ShadersStore[o+"VertexShader"]=this.VertexShader.replace("#define CUSTOM_VERTEX_BEGIN",this.CustomParts.Vertex_Begin?this.CustomParts.Vertex_Begin:"").replace("#define CUSTOM_VERTEX_DEFINITIONS",(this._customUniform?this._customUniform.join(`
`):"")+(this.CustomParts.Vertex_Definitions?this.CustomParts.Vertex_Definitions:"")).replace("#define CUSTOM_VERTEX_MAIN_BEGIN",this.CustomParts.Vertex_MainBegin?this.CustomParts.Vertex_MainBegin:"").replace("#define CUSTOM_VERTEX_UPDATE_POSITION",this.CustomParts.Vertex_Before_PositionUpdated?this.CustomParts.Vertex_Before_PositionUpdated:"").replace("#define CUSTOM_VERTEX_UPDATE_NORMAL",this.CustomParts.Vertex_Before_NormalUpdated?this.CustomParts.Vertex_Before_NormalUpdated:"").replace("#define CUSTOM_VERTEX_MAIN_END",this.CustomParts.Vertex_MainEnd?this.CustomParts.Vertex_MainEnd:""),this.CustomParts.Vertex_After_WorldPosComputed&&(Y.ShadersStore[o+"VertexShader"]=Y.ShadersStore[o+"VertexShader"].replace("#define CUSTOM_VERTEX_UPDATE_WORLDPOS",this.CustomParts.Vertex_After_WorldPosComputed)),Y.ShadersStore[o+"PixelShader"]=this.FragmentShader.replace("#define CUSTOM_FRAGMENT_BEGIN",this.CustomParts.Fragment_Begin?this.CustomParts.Fragment_Begin:"").replace("#define CUSTOM_FRAGMENT_MAIN_BEGIN",this.CustomParts.Fragment_MainBegin?this.CustomParts.Fragment_MainBegin:"").replace("#define CUSTOM_FRAGMENT_DEFINITIONS",(this._customUniform?this._customUniform.join(`
`):"")+(this.CustomParts.Fragment_Definitions?this.CustomParts.Fragment_Definitions:"")).replace("#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE",this.CustomParts.Fragment_Custom_Diffuse?this.CustomParts.Fragment_Custom_Diffuse:"").replace("#define CUSTOM_FRAGMENT_UPDATE_ALPHA",this.CustomParts.Fragment_Custom_Alpha?this.CustomParts.Fragment_Custom_Alpha:"").replace("#define CUSTOM_FRAGMENT_BEFORE_LIGHTS",this.CustomParts.Fragment_Before_Lights?this.CustomParts.Fragment_Before_Lights:"").replace("#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR",this.CustomParts.Fragment_Before_FragColor?this.CustomParts.Fragment_Before_FragColor:"").replace("#define CUSTOM_FRAGMENT_MAIN_END",this.CustomParts.Fragment_MainEnd?this.CustomParts.Fragment_MainEnd:""),this.CustomParts.Fragment_Before_Fog&&(Y.ShadersStore[o+"PixelShader"]=Y.ShadersStore[o+"PixelShader"].replace("#define CUSTOM_FRAGMENT_BEFORE_FOG",this.CustomParts.Fragment_Before_Fog)),this._isCreatedShader=!0,this._createdShaderName=o,o}constructor(e,t){super(e,t),this.CustomParts=new qr,this.customShaderNameResolve=this.Builder,this.FragmentShader=Y.ShadersStore.defaultPixelShader,this.VertexShader=Y.ShadersStore.defaultVertexShader}AddUniform(e,t,s){return this._customUniform||(this._customUniform=new Array,this._newUniforms=new Array,this._newSamplerInstances={},this._newUniformInstances={}),s&&(t.indexOf("sampler")!=-1?this._newSamplerInstances[t+"-"+e]=s:this._newUniformInstances[t+"-"+e]=s),this._customUniform.push("uniform "+t+" "+e+";"),this._newUniforms.push(e),this}AddAttribute(e){return this._customAttributes||(this._customAttributes=[]),this._customAttributes.push(e),this}Fragment_Begin(e){return this.CustomParts.Fragment_Begin=e,this}Fragment_Definitions(e){return this.CustomParts.Fragment_Definitions=e,this}Fragment_MainBegin(e){return this.CustomParts.Fragment_MainBegin=e,this}Fragment_MainEnd(e){return this.CustomParts.Fragment_MainEnd=e,this}Fragment_Custom_Diffuse(e){return this.CustomParts.Fragment_Custom_Diffuse=e.replace("result","diffuseColor"),this}Fragment_Custom_Alpha(e){return this.CustomParts.Fragment_Custom_Alpha=e.replace("result","alpha"),this}Fragment_Before_Lights(e){return this.CustomParts.Fragment_Before_Lights=e,this}Fragment_Before_Fog(e){return this.CustomParts.Fragment_Before_Fog=e,this}Fragment_Before_FragColor(e){return this.CustomParts.Fragment_Before_FragColor=e.replace("result","color"),this}Vertex_Begin(e){return this.CustomParts.Vertex_Begin=e,this}Vertex_Definitions(e){return this.CustomParts.Vertex_Definitions=e,this}Vertex_MainBegin(e){return this.CustomParts.Vertex_MainBegin=e,this}Vertex_Before_PositionUpdated(e){return this.CustomParts.Vertex_Before_PositionUpdated=e.replace("result","positionUpdated"),this}Vertex_Before_NormalUpdated(e){return this.CustomParts.Vertex_Before_NormalUpdated=e.replace("result","normalUpdated"),this}Vertex_After_WorldPosComputed(e){return this.CustomParts.Vertex_After_WorldPosComputed=e,this}Vertex_MainEnd(e){return this.CustomParts.Vertex_MainEnd=e,this}}at.ShaderIndexer=1;_e("BABYLON.CustomMaterial",at);class Jr{constructor(){}}class lt extends q{AttachAfterBind(e,t){if(this._newUniformInstances)for(const s in this._newUniformInstances){const i=s.toString().split("-");i[0]=="vec2"?t.setVector2(i[1],this._newUniformInstances[s]):i[0]=="vec3"?t.setVector3(i[1],this._newUniformInstances[s]):i[0]=="vec4"?t.setVector4(i[1],this._newUniformInstances[s]):i[0]=="mat4"?t.setMatrix(i[1],this._newUniformInstances[s]):i[0]=="float"&&t.setFloat(i[1],this._newUniformInstances[s])}if(this._newSamplerInstances)for(const s in this._newSamplerInstances){const i=s.toString().split("-");i[0]=="sampler2D"&&this._newSamplerInstances[s].isReady&&this._newSamplerInstances[s].isReady()&&t.setTexture(i[1],this._newSamplerInstances[s])}}ReviewUniform(e,t){if(e=="uniform"&&this._newUniforms)for(let s=0;s<this._newUniforms.length;s++)this._customUniform[s].indexOf("sampler")==-1&&t.push(this._newUniforms[s].replace(/\[\d*\]/g,""));if(e=="sampler"&&this._newUniforms)for(let s=0;s<this._newUniforms.length;s++)this._customUniform[s].indexOf("sampler")!=-1&&t.push(this._newUniforms[s].replace(/\[\d*\]/g,""));return t}Builder(e,t,s,i,r,n,o){if(o){const c=o.processFinalCode;o.processFinalCode=(u,d)=>{if(u==="vertex")return c?c(u,d):d;const m=new Ns(d);return m.inlineToken="#define pbr_inline",m.processCode(),c?c(u,m.code):m.code}}if(n&&this._customAttributes&&this._customAttributes.length>0&&n.push(...this._customAttributes),this.ReviewUniform("uniform",t),this.ReviewUniform("sampler",i),this._isCreatedShader)return this._createdShaderName;this._isCreatedShader=!1,lt.ShaderIndexer++;const a="custom_"+lt.ShaderIndexer,f=this._afterBind.bind(this);return this._afterBind=(c,u)=>{if(u){this.AttachAfterBind(c,u);try{f(c,u)}catch{}}},Y.ShadersStore[a+"VertexShader"]=this.VertexShader.replace("#define CUSTOM_VERTEX_BEGIN",this.CustomParts.Vertex_Begin?this.CustomParts.Vertex_Begin:"").replace("#define CUSTOM_VERTEX_DEFINITIONS",(this._customUniform?this._customUniform.join(`
`):"")+(this.CustomParts.Vertex_Definitions?this.CustomParts.Vertex_Definitions:"")).replace("#define CUSTOM_VERTEX_MAIN_BEGIN",this.CustomParts.Vertex_MainBegin?this.CustomParts.Vertex_MainBegin:"").replace("#define CUSTOM_VERTEX_UPDATE_POSITION",this.CustomParts.Vertex_Before_PositionUpdated?this.CustomParts.Vertex_Before_PositionUpdated:"").replace("#define CUSTOM_VERTEX_UPDATE_NORMAL",this.CustomParts.Vertex_Before_NormalUpdated?this.CustomParts.Vertex_Before_NormalUpdated:"").replace("#define CUSTOM_VERTEX_MAIN_END",this.CustomParts.Vertex_MainEnd?this.CustomParts.Vertex_MainEnd:""),this.CustomParts.Vertex_After_WorldPosComputed&&(Y.ShadersStore[a+"VertexShader"]=Y.ShadersStore[a+"VertexShader"].replace("#define CUSTOM_VERTEX_UPDATE_WORLDPOS",this.CustomParts.Vertex_After_WorldPosComputed)),Y.ShadersStore[a+"PixelShader"]=this.FragmentShader.replace("#define CUSTOM_FRAGMENT_BEGIN",this.CustomParts.Fragment_Begin?this.CustomParts.Fragment_Begin:"").replace("#define CUSTOM_FRAGMENT_MAIN_BEGIN",this.CustomParts.Fragment_MainBegin?this.CustomParts.Fragment_MainBegin:"").replace("#define CUSTOM_FRAGMENT_DEFINITIONS",(this._customUniform?this._customUniform.join(`
`):"")+(this.CustomParts.Fragment_Definitions?this.CustomParts.Fragment_Definitions:"")).replace("#define CUSTOM_FRAGMENT_UPDATE_ALBEDO",this.CustomParts.Fragment_Custom_Albedo?this.CustomParts.Fragment_Custom_Albedo:"").replace("#define CUSTOM_FRAGMENT_UPDATE_ALPHA",this.CustomParts.Fragment_Custom_Alpha?this.CustomParts.Fragment_Custom_Alpha:"").replace("#define CUSTOM_FRAGMENT_BEFORE_LIGHTS",this.CustomParts.Fragment_Before_Lights?this.CustomParts.Fragment_Before_Lights:"").replace("#define CUSTOM_FRAGMENT_UPDATE_METALLICROUGHNESS",this.CustomParts.Fragment_Custom_MetallicRoughness?this.CustomParts.Fragment_Custom_MetallicRoughness:"").replace("#define CUSTOM_FRAGMENT_UPDATE_MICROSURFACE",this.CustomParts.Fragment_Custom_MicroSurface?this.CustomParts.Fragment_Custom_MicroSurface:"").replace("#define CUSTOM_FRAGMENT_BEFORE_FINALCOLORCOMPOSITION",this.CustomParts.Fragment_Before_FinalColorComposition?this.CustomParts.Fragment_Before_FinalColorComposition:"").replace("#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR",this.CustomParts.Fragment_Before_FragColor?this.CustomParts.Fragment_Before_FragColor:"").replace("#define CUSTOM_FRAGMENT_MAIN_END",this.CustomParts.Fragment_MainEnd?this.CustomParts.Fragment_MainEnd:""),this.CustomParts.Fragment_Before_Fog&&(Y.ShadersStore[a+"PixelShader"]=Y.ShadersStore[a+"PixelShader"].replace("#define CUSTOM_FRAGMENT_BEFORE_FOG",this.CustomParts.Fragment_Before_Fog)),this._isCreatedShader=!0,this._createdShaderName=a,a}constructor(e,t){super(e,t),this.CustomParts=new Jr,this.customShaderNameResolve=this.Builder,this.FragmentShader=Y.ShadersStore.pbrPixelShader,this.VertexShader=Y.ShadersStore.pbrVertexShader,this.FragmentShader=this.FragmentShader.replace(/#include<pbrBlockAlbedoOpacity>/g,Y.IncludesShadersStore.pbrBlockAlbedoOpacity),this.FragmentShader=this.FragmentShader.replace(/#include<pbrBlockReflectivity>/g,Y.IncludesShadersStore.pbrBlockReflectivity),this.FragmentShader=this.FragmentShader.replace(/#include<pbrBlockFinalColorComposition>/g,Y.IncludesShadersStore.pbrBlockFinalColorComposition)}AddUniform(e,t,s){return this._customUniform||(this._customUniform=new Array,this._newUniforms=new Array,this._newSamplerInstances={},this._newUniformInstances={}),s&&(t.indexOf("sampler")!=-1?this._newSamplerInstances[t+"-"+e]=s:this._newUniformInstances[t+"-"+e]=s),this._customUniform.push("uniform "+t+" "+e+";"),this._newUniforms.push(e),this}AddAttribute(e){return this._customAttributes||(this._customAttributes=[]),this._customAttributes.push(e),this}Fragment_Begin(e){return this.CustomParts.Fragment_Begin=e,this}Fragment_Definitions(e){return this.CustomParts.Fragment_Definitions=e,this}Fragment_MainBegin(e){return this.CustomParts.Fragment_MainBegin=e,this}Fragment_Custom_Albedo(e){return this.CustomParts.Fragment_Custom_Albedo=e.replace("result","surfaceAlbedo"),this}Fragment_Custom_Alpha(e){return this.CustomParts.Fragment_Custom_Alpha=e.replace("result","alpha"),this}Fragment_Before_Lights(e){return this.CustomParts.Fragment_Before_Lights=e,this}Fragment_Custom_MetallicRoughness(e){return this.CustomParts.Fragment_Custom_MetallicRoughness=e,this}Fragment_Custom_MicroSurface(e){return this.CustomParts.Fragment_Custom_MicroSurface=e,this}Fragment_Before_Fog(e){return this.CustomParts.Fragment_Before_Fog=e,this}Fragment_Before_FinalColorComposition(e){return this.CustomParts.Fragment_Before_FinalColorComposition=e,this}Fragment_Before_FragColor(e){return this.CustomParts.Fragment_Before_FragColor=e.replace("result","color"),this}Fragment_MainEnd(e){return this.CustomParts.Fragment_MainEnd=e,this}Vertex_Begin(e){return this.CustomParts.Vertex_Begin=e,this}Vertex_Definitions(e){return this.CustomParts.Vertex_Definitions=e,this}Vertex_MainBegin(e){return this.CustomParts.Vertex_MainBegin=e,this}Vertex_Before_PositionUpdated(e){return this.CustomParts.Vertex_Before_PositionUpdated=e.replace("result","positionUpdated"),this}Vertex_Before_NormalUpdated(e){return this.CustomParts.Vertex_Before_NormalUpdated=e.replace("result","normalUpdated"),this}Vertex_After_WorldPosComputed(e){return this.CustomParts.Vertex_After_WorldPosComputed=e,this}Vertex_MainEnd(e){return this.CustomParts.Vertex_MainEnd=e,this}}lt.ShaderIndexer=1;_e("BABYLON.PBRCustomMaterial",lt);const Qr="firePixelShader",en=`precision highp float;uniform vec4 vEyePosition;varying vec3 vPositionW;
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#ifdef DIFFUSE
varying vec2 vDiffuseUV;uniform sampler2D diffuseSampler;uniform vec2 vDiffuseInfos;
#endif
uniform sampler2D distortionSampler;uniform sampler2D opacitySampler;
#ifdef DIFFUSE
varying vec2 vDistortionCoords1;varying vec2 vDistortionCoords2;varying vec2 vDistortionCoords3;
#endif
#include<clipPlaneFragmentDeclaration>
#include<fogFragmentDeclaration>
vec4 bx2(vec4 x)
{return vec4(2.0)*x-vec4(1.0);}
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(1.,1.,1.,1.);float alpha=1.0;
#ifdef DIFFUSE
const float distortionAmount0 =0.092;const float distortionAmount1 =0.092;const float distortionAmount2 =0.092;vec2 heightAttenuation=vec2(0.3,0.39);vec4 noise0=texture2D(distortionSampler,vDistortionCoords1);vec4 noise1=texture2D(distortionSampler,vDistortionCoords2);vec4 noise2=texture2D(distortionSampler,vDistortionCoords3);vec4 noiseSum=bx2(noise0)*distortionAmount0+bx2(noise1)*distortionAmount1+bx2(noise2)*distortionAmount2;vec4 perturbedBaseCoords=vec4(vDiffuseUV,0.0,1.0)+noiseSum*(vDiffuseUV.y*heightAttenuation.x+heightAttenuation.y);vec4 opacityColor=texture2D(opacitySampler,perturbedBaseCoords.xy);
#ifdef ALPHATEST
if (opacityColor.r<0.1)
discard;
#endif
#include<depthPrePass>
baseColor=texture2D(diffuseSampler,perturbedBaseCoords.xy)*2.0;baseColor*=opacityColor;baseColor.rgb*=vDiffuseInfos.y;
#endif
#ifdef VERTEXCOLOR
baseColor.rgb*=vColor.rgb;
#endif
vec3 diffuseBase=vec3(1.0,1.0,1.0);
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
vec4 color=vec4(baseColor.rgb,alpha);
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}`;X.ShadersStore[Qr]=en;const tn="fireVertexShader",sn=`precision highp float;attribute vec3 position;
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
uniform mat4 view;uniform mat4 viewProjection;
#ifdef DIFFUSE
varying vec2 vDiffuseUV;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
uniform float time;uniform float speed;
#ifdef DIFFUSE
varying vec2 vDistortionCoords1;varying vec2 vDistortionCoords2;varying vec2 vDistortionCoords3;
#endif
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);
#ifdef DIFFUSE
vDiffuseUV=uv;vDiffuseUV.y-=0.2;
#endif
#include<clipPlaneVertex>
#include<fogVertex>
#include<vertexColorMixing>
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#ifdef DIFFUSE
vec3 layerSpeed=vec3(-0.2,-0.52,-0.1)*speed;vDistortionCoords1.x=uv.x;vDistortionCoords1.y=uv.y+layerSpeed.x*time/1000.0;vDistortionCoords2.x=uv.x;vDistortionCoords2.y=uv.y+layerSpeed.y*time/1000.0;vDistortionCoords3.x=uv.x;vDistortionCoords3.y=uv.y+layerSpeed.z*time/1000.0;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;X.ShadersStore[tn]=sn;class rn extends Ee{constructor(){super(),this.DIFFUSE=!1,this.CLIPPLANE=!1,this.CLIPPLANE2=!1,this.CLIPPLANE3=!1,this.CLIPPLANE4=!1,this.CLIPPLANE5=!1,this.CLIPPLANE6=!1,this.ALPHATEST=!1,this.DEPTHPREPASS=!1,this.POINTSIZE=!1,this.FOG=!1,this.UV1=!1,this.VERTEXCOLOR=!1,this.VERTEXALPHA=!1,this.BonesPerMesh=0,this.NUM_BONE_INFLUENCERS=0,this.INSTANCES=!1,this.INSTANCESCOLOR=!1,this.IMAGEPROCESSINGPOSTPROCESS=!1,this.SKIPFINALCOLORCLAMP=!1,this.rebuild()}}class Ne extends xe{constructor(e,t){super(e,t),this.diffuseColor=new y(1,1,1),this.speed=1,this._scaledDiffuse=new y,this._lastTime=0}needAlphaBlending(){return!1}needAlphaTesting(){return!0}getAlphaTestTexture(){return null}isReadyForSubMesh(e,t,s){if(this.isFrozen&&t.effect&&t.effect._wasPreviouslyReady&&t.effect._wasPreviouslyUsingInstances===s)return!0;t.materialDefines||(t.materialDefines=new rn);const i=t.materialDefines,r=this.getScene();if(this._isReadyForSubMesh(t))return!0;const n=r.getEngine();if(i._areTexturesDirty&&(i._needUVs=!1,this._diffuseTexture&&j.DiffuseTextureEnabled))if(this._diffuseTexture.isReady())i._needUVs=!0,i.DIFFUSE=!0;else return!1;if(i.ALPHATEST=!!this._opacityTexture,i._areMiscDirty&&(i.POINTSIZE=this.pointsCloud||r.forcePointsCloud,i.FOG=r.fogEnabled&&e.applyFog&&r.fogMode!==ve.FOGMODE_NONE&&this.fogEnabled),_.PrepareDefinesForFrameBoundValues(r,n,this,i,!!s),_.PrepareDefinesForAttributes(e,i,!1,!0),i.isDirty){i.markAsProcessed(),r.resetCachedMaterial();const o=new be;i.FOG&&o.addFallback(1,"FOG"),i.NUM_BONE_INFLUENCERS>0&&o.addCPUSkinningFallback(0,e),i.IMAGEPROCESSINGPOSTPROCESS=r.imageProcessingConfiguration.applyByPostProcess;const a=[p.PositionKind];i.UV1&&a.push(p.UVKind),i.VERTEXCOLOR&&a.push(p.ColorKind),_.PrepareAttributesForBones(a,e,i,o),_.PrepareAttributesForInstances(a,i);const f="fire",c=["world","view","viewProjection","vEyePosition","vFogInfos","vFogColor","pointSize","vDiffuseInfos","mBones","diffuseMatrix","time","speed"];Pe(c);const u=i.toString();t.setEffect(r.getEngine().createEffect(f,{attributes:a,uniformsNames:c,uniformBuffersNames:[],samplers:["diffuseSampler","distortionSampler","opacitySampler"],defines:u,fallbacks:o,onCompiled:this.onCompiled,onError:this.onError,indexParameters:null,maxSimultaneousLights:4,transformFeedbackVaryings:null},n),i,this._materialContext)}return!t.effect||!t.effect.isReady()?!1:(i._renderId=r.getRenderId(),t.effect._wasPreviouslyReady=!0,t.effect._wasPreviouslyUsingInstances=!!s,!0)}bindForSubMesh(e,t,s){const i=this.getScene();if(!s.materialDefines)return;const n=s.effect;n&&(this._activeEffect=n,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",i.getTransformMatrix()),_.BindBonesParameters(t,this._activeEffect),this._mustRebind(i,n)&&(this._diffuseTexture&&j.DiffuseTextureEnabled&&(this._activeEffect.setTexture("diffuseSampler",this._diffuseTexture),this._activeEffect.setFloat2("vDiffuseInfos",this._diffuseTexture.coordinatesIndex,this._diffuseTexture.level),this._activeEffect.setMatrix("diffuseMatrix",this._diffuseTexture.getTextureMatrix()),this._activeEffect.setTexture("distortionSampler",this._distortionTexture),this._activeEffect.setTexture("opacitySampler",this._opacityTexture)),Oe(this._activeEffect,this,i),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),i.bindEyePosition(n)),this._activeEffect.setColor4("vDiffuseColor",this._scaledDiffuse,this.alpha*t.visibility),i.fogEnabled&&t.applyFog&&i.fogMode!==ve.FOGMODE_NONE&&this._activeEffect.setMatrix("view",i.getViewMatrix()),_.BindFogParameters(i,t,this._activeEffect),this._lastTime+=i.getEngine().getDeltaTime(),this._activeEffect.setFloat("time",this._lastTime),this._activeEffect.setFloat("speed",this.speed),this._afterBind(t,this._activeEffect))}getAnimatables(){const e=[];return this._diffuseTexture&&this._diffuseTexture.animations&&this._diffuseTexture.animations.length>0&&e.push(this._diffuseTexture),this._distortionTexture&&this._distortionTexture.animations&&this._distortionTexture.animations.length>0&&e.push(this._distortionTexture),this._opacityTexture&&this._opacityTexture.animations&&this._opacityTexture.animations.length>0&&e.push(this._opacityTexture),e}getActiveTextures(){const e=super.getActiveTextures();return this._diffuseTexture&&e.push(this._diffuseTexture),this._distortionTexture&&e.push(this._distortionTexture),this._opacityTexture&&e.push(this._opacityTexture),e}hasTexture(e){return!!(super.hasTexture(e)||this._diffuseTexture===e||this._distortionTexture===e||this._opacityTexture===e)}getClassName(){return"FireMaterial"}dispose(e){this._diffuseTexture&&this._diffuseTexture.dispose(),this._distortionTexture&&this._distortionTexture.dispose(),super.dispose(e)}clone(e){return H.Clone(()=>new Ne(e,this.getScene()),this)}serialize(){const e=super.serialize();return e.customType="BABYLON.FireMaterial",e.diffuseColor=this.diffuseColor.asArray(),e.speed=this.speed,this._diffuseTexture&&(e._diffuseTexture=this._diffuseTexture.serialize()),this._distortionTexture&&(e._distortionTexture=this._distortionTexture.serialize()),this._opacityTexture&&(e._opacityTexture=this._opacityTexture.serialize()),e}static Parse(e,t,s){const i=new Ne(e.name,t);return i.diffuseColor=y.FromArray(e.diffuseColor),i.speed=e.speed,i.alpha=e.alpha,i.id=e.id,Lt.AddTagsTo(i,e.tags),i.backFaceCulling=e.backFaceCulling,i.wireframe=e.wireframe,e._diffuseTexture&&(i._diffuseTexture=D.Parse(e._diffuseTexture,t,s)),e._distortionTexture&&(i._distortionTexture=D.Parse(e._distortionTexture,t,s)),e._opacityTexture&&(i._opacityTexture=D.Parse(e._opacityTexture,t,s)),i}}h([R("diffuseTexture")],Ne.prototype,"_diffuseTexture",void 0);h([P("_markAllSubMeshesAsTexturesDirty")],Ne.prototype,"diffuseTexture",void 0);h([R("distortionTexture")],Ne.prototype,"_distortionTexture",void 0);h([P("_markAllSubMeshesAsTexturesDirty")],Ne.prototype,"distortionTexture",void 0);h([R("opacityTexture")],Ne.prototype,"_opacityTexture",void 0);h([P("_markAllSubMeshesAsTexturesDirty")],Ne.prototype,"opacityTexture",void 0);h([oe("diffuse")],Ne.prototype,"diffuseColor",void 0);h([A()],Ne.prototype,"speed",void 0);_e("BABYLON.FireMaterial",Ne);const nn="furPixelShader",on=`precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;uniform vec4 furColor;uniform float furLength;varying vec3 vPositionW;varying float vfur_length;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<helperFunctions>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#ifdef DIFFUSE
varying vec2 vDiffuseUV;uniform sampler2D diffuseSampler;uniform vec2 vDiffuseInfos;
#endif
#ifdef HIGHLEVEL
uniform float furOffset;uniform float furOcclusion;uniform sampler2D furTexture;varying vec2 vFurUV;
#endif
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#include<fogFragmentDeclaration>
#include<clipPlaneFragmentDeclaration>
float Rand(vec3 rv) {float x=dot(rv,vec3(12.9898,78.233,24.65487));return fract(sin(x)*43758.5453);}
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=furColor;vec3 diffuseColor=vDiffuseColor.rgb;float alpha=vDiffuseColor.a;
#ifdef DIFFUSE
baseColor*=texture2D(diffuseSampler,vDiffuseUV);
#ifdef ALPHATEST
if (baseColor.a<0.4)
discard;
#endif
#include<depthPrePass>
baseColor.rgb*=vDiffuseInfos.y;
#endif
#ifdef VERTEXCOLOR
baseColor.rgb*=vColor.rgb;
#endif
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=vec3(1.0,1.0,1.0);
#endif
#ifdef HIGHLEVEL
vec4 furTextureColor=texture2D(furTexture,vec2(vFurUV.x,vFurUV.y));if (furTextureColor.a<=0.0 || furTextureColor.g<furOffset) {discard;}
float occlusion=mix(0.0,furTextureColor.b*1.2,furOffset);baseColor=vec4(baseColor.xyz*max(occlusion,furOcclusion),1.1-furOffset);
#endif
vec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float glossiness=0.;float aggShadow=0.;float numLights=0.;
#ifdef SPECULARTERM
vec3 specularBase=vec3(0.,0.,0.);
#endif
#include<lightFragment>[0..maxSimultaneousLights]
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
vec3 finalDiffuse=clamp(diffuseBase.rgb*baseColor.rgb,0.0,1.0);
#ifdef HIGHLEVEL
vec4 color=vec4(finalDiffuse,alpha);
#else
float r=vfur_length/furLength*0.5;vec4 color=vec4(finalDiffuse*(0.5+r),alpha);
#endif
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}`;X.ShadersStore[nn]=on;const an="furVertexShader",ln=`precision highp float;attribute vec3 position;attribute vec3 normal;
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
uniform float furLength;uniform float furAngle;
#ifdef HIGHLEVEL
uniform float furOffset;uniform vec3 furGravity;uniform float furTime;uniform float furSpacing;uniform float furDensity;
#endif
#ifdef HEIGHTMAP
uniform sampler2D heightTexture;
#endif
#ifdef HIGHLEVEL
varying vec2 vFurUV;
#endif
#include<instancesDeclaration>
uniform mat4 view;uniform mat4 viewProjection;
#ifdef DIFFUSE
varying vec2 vDiffuseUV;uniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
varying float vfur_length;
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
float Rand(vec3 rv) {float x=dot(rv,vec3(12.9898,78.233,24.65487));return fract(sin(x)*43758.5453);}
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
float r=Rand(position);
#ifdef HEIGHTMAP
#if __VERSION__>100
vfur_length=furLength*texture(heightTexture,uv).x;
#else
vfur_length=furLength*texture2D(heightTexture,uv).r;
#endif
#else 
vfur_length=(furLength*r);
#endif
vec3 tangent1=vec3(normal.y,-normal.x,0);vec3 tangent2=vec3(-normal.z,0,normal.x);r=Rand(tangent1*r);float J=(2.0+4.0*r);r=Rand(tangent2*r);float K=(2.0+2.0*r);tangent1=tangent1*J+tangent2*K;tangent1=normalize(tangent1);vec3 newPosition=position+normal*vfur_length*cos(furAngle)+tangent1*vfur_length*sin(furAngle);
#ifdef HIGHLEVEL
vec3 forceDirection=vec3(0.0,0.0,0.0);forceDirection.x=sin(furTime+position.x*0.05)*0.2;forceDirection.y=cos(furTime*0.7+position.y*0.04)*0.2;forceDirection.z=sin(furTime*0.7+position.z*0.04)*0.2;vec3 displacement=vec3(0.0,0.0,0.0);displacement=furGravity+forceDirection;float displacementFactor=pow(furOffset,3.0);vec3 aNormal=normal;aNormal.xyz+=displacement*displacementFactor;newPosition=vec3(newPosition.x,newPosition.y,newPosition.z)+(normalize(aNormal)*furOffset*furSpacing);
#endif
#ifdef NORMAL
vNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));
#endif
gl_Position=viewProjection*finalWorld*vec4(newPosition,1.0);vec4 worldPos=finalWorld*vec4(newPosition,1.0);vPositionW=vec3(worldPos);
#ifndef UV1
vec2 uv=vec2(0.,0.);
#endif
#ifndef UV2
vec2 uv2=vec2(0.,0.);
#endif
#ifdef DIFFUSE
if (vDiffuseInfos.x==0.)
{vDiffuseUV=vec2(diffuseMatrix*vec4(uv,1.0,0.0));}
else
{vDiffuseUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));}
#ifdef HIGHLEVEL
vFurUV=vDiffuseUV*furDensity;
#endif
#else
#ifdef HIGHLEVEL
vFurUV=uv*furDensity;
#endif
#endif
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;X.ShadersStore[an]=ln;class fn extends Ee{constructor(){super(),this.DIFFUSE=!1,this.HEIGHTMAP=!1,this.CLIPPLANE=!1,this.CLIPPLANE2=!1,this.CLIPPLANE3=!1,this.CLIPPLANE4=!1,this.CLIPPLANE5=!1,this.CLIPPLANE6=!1,this.ALPHATEST=!1,this.DEPTHPREPASS=!1,this.POINTSIZE=!1,this.FOG=!1,this.NORMAL=!1,this.UV1=!1,this.UV2=!1,this.VERTEXCOLOR=!1,this.VERTEXALPHA=!1,this.NUM_BONE_INFLUENCERS=0,this.BonesPerMesh=0,this.INSTANCES=!1,this.INSTANCESCOLOR=!1,this.HIGHLEVEL=!1,this.IMAGEPROCESSINGPOSTPROCESS=!1,this.SKIPFINALCOLORCLAMP=!1,this.rebuild()}}class W extends xe{constructor(e,t){super(e,t),this.diffuseColor=new y(1,1,1),this.furLength=1,this.furAngle=0,this.furColor=new y(.44,.21,.02),this.furOffset=0,this.furSpacing=12,this.furGravity=new x(0,0,0),this.furSpeed=100,this.furDensity=20,this.furOcclusion=0,this._disableLighting=!1,this._maxSimultaneousLights=4,this.highLevelFur=!0,this._furTime=0}get furTime(){return this._furTime}set furTime(e){this._furTime=e}needAlphaBlending(){return this.alpha<1}needAlphaTesting(){return!1}getAlphaTestTexture(){return null}updateFur(){for(let e=1;e<this._meshes.length;e++){const t=this._meshes[e].material;t.furLength=this.furLength,t.furAngle=this.furAngle,t.furGravity=this.furGravity,t.furSpacing=this.furSpacing,t.furSpeed=this.furSpeed,t.furColor=this.furColor,t.diffuseTexture=this.diffuseTexture,t.furTexture=this.furTexture,t.highLevelFur=this.highLevelFur,t.furTime=this.furTime,t.furDensity=this.furDensity}}isReadyForSubMesh(e,t,s){if(this.isFrozen&&t.effect&&t.effect._wasPreviouslyReady&&t.effect._wasPreviouslyUsingInstances===s)return!0;t.materialDefines||(t.materialDefines=new fn);const i=t.materialDefines,r=this.getScene();if(this._isReadyForSubMesh(t))return!0;const n=r.getEngine();if(i._areTexturesDirty&&r.texturesEnabled){if(this.diffuseTexture&&j.DiffuseTextureEnabled)if(this.diffuseTexture.isReady())i._needUVs=!0,i.DIFFUSE=!0;else return!1;if(this.heightTexture&&n.getCaps().maxVertexTextureImageUnits)if(this.heightTexture.isReady())i._needUVs=!0,i.HEIGHTMAP=!0;else return!1}if(this.highLevelFur!==i.HIGHLEVEL&&(i.HIGHLEVEL=!0,i.markAsUnprocessed()),_.PrepareDefinesForMisc(e,r,!1,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(e),i),i._needNormals=_.PrepareDefinesForLights(r,e,i,!1,this._maxSimultaneousLights,this._disableLighting),_.PrepareDefinesForFrameBoundValues(r,n,this,i,!!s),_.PrepareDefinesForAttributes(e,i,!0,!0),i.isDirty){i.markAsProcessed(),r.resetCachedMaterial();const o=new be;i.FOG&&o.addFallback(1,"FOG"),_.HandleFallbacksForShadows(i,o,this.maxSimultaneousLights),i.NUM_BONE_INFLUENCERS>0&&o.addCPUSkinningFallback(0,e),i.IMAGEPROCESSINGPOSTPROCESS=r.imageProcessingConfiguration.applyByPostProcess;const a=[p.PositionKind];i.NORMAL&&a.push(p.NormalKind),i.UV1&&a.push(p.UVKind),i.UV2&&a.push(p.UV2Kind),i.VERTEXCOLOR&&a.push(p.ColorKind),_.PrepareAttributesForBones(a,e,i,o),_.PrepareAttributesForInstances(a,i);const f="fur",c=i.toString(),u=["world","view","viewProjection","vEyePosition","vLightsType","vDiffuseColor","vFogInfos","vFogColor","pointSize","vDiffuseInfos","mBones","diffuseMatrix","furLength","furAngle","furColor","furOffset","furGravity","furTime","furSpacing","furDensity","furOcclusion"];Pe(u);const d=["diffuseSampler","heightTexture","furTexture"],m=[];_.PrepareUniformsAndSamplersList({uniformsNames:u,uniformBuffersNames:m,samplers:d,defines:i,maxSimultaneousLights:this.maxSimultaneousLights}),t.setEffect(r.getEngine().createEffect(f,{attributes:a,uniformsNames:u,uniformBuffersNames:m,samplers:d,defines:c,fallbacks:o,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:this.maxSimultaneousLights}},n),i,this._materialContext)}return!t.effect||!t.effect.isReady()?!1:(i._renderId=r.getRenderId(),t.effect._wasPreviouslyReady=!0,t.effect._wasPreviouslyUsingInstances=!!s,!0)}bindForSubMesh(e,t,s){const i=this.getScene(),r=s.materialDefines;if(!r)return;const n=s.effect;n&&(this._activeEffect=n,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",i.getTransformMatrix()),_.BindBonesParameters(t,this._activeEffect),i.getCachedMaterial()!==this&&(this._diffuseTexture&&j.DiffuseTextureEnabled&&(this._activeEffect.setTexture("diffuseSampler",this._diffuseTexture),this._activeEffect.setFloat2("vDiffuseInfos",this._diffuseTexture.coordinatesIndex,this._diffuseTexture.level),this._activeEffect.setMatrix("diffuseMatrix",this._diffuseTexture.getTextureMatrix())),this._heightTexture&&this._activeEffect.setTexture("heightTexture",this._heightTexture),Oe(this._activeEffect,this,i),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),i.bindEyePosition(n)),this._activeEffect.setColor4("vDiffuseColor",this.diffuseColor,this.alpha*t.visibility),i.lightsEnabled&&!this.disableLighting&&_.BindLights(i,t,this._activeEffect,r,this.maxSimultaneousLights),i.fogEnabled&&t.applyFog&&i.fogMode!==ve.FOGMODE_NONE&&this._activeEffect.setMatrix("view",i.getViewMatrix()),_.BindFogParameters(i,t,this._activeEffect),this._activeEffect.setFloat("furLength",this.furLength),this._activeEffect.setFloat("furAngle",this.furAngle),this._activeEffect.setColor4("furColor",this.furColor,1),this.highLevelFur&&(this._activeEffect.setVector3("furGravity",this.furGravity),this._activeEffect.setFloat("furOffset",this.furOffset),this._activeEffect.setFloat("furSpacing",this.furSpacing),this._activeEffect.setFloat("furDensity",this.furDensity),this._activeEffect.setFloat("furOcclusion",this.furOcclusion),this._furTime+=this.getScene().getEngine().getDeltaTime()/this.furSpeed,this._activeEffect.setFloat("furTime",this._furTime),this._activeEffect.setTexture("furTexture",this.furTexture)),this._afterBind(t,this._activeEffect))}getAnimatables(){const e=[];return this.diffuseTexture&&this.diffuseTexture.animations&&this.diffuseTexture.animations.length>0&&e.push(this.diffuseTexture),this.heightTexture&&this.heightTexture.animations&&this.heightTexture.animations.length>0&&e.push(this.heightTexture),e}getActiveTextures(){const e=super.getActiveTextures();return this._diffuseTexture&&e.push(this._diffuseTexture),this._heightTexture&&e.push(this._heightTexture),e}hasTexture(e){return!!(super.hasTexture(e)||this.diffuseTexture===e||this._heightTexture===e)}dispose(e){if(this.diffuseTexture&&this.diffuseTexture.dispose(),this._meshes)for(let t=1;t<this._meshes.length;t++){const s=this._meshes[t].material;s&&s.dispose(e),this._meshes[t].dispose()}super.dispose(e)}clone(e){return H.Clone(()=>new W(e,this.getScene()),this)}serialize(){const e=super.serialize();return e.customType="BABYLON.FurMaterial",this._meshes&&(e.sourceMeshName=this._meshes[0].name,e.quality=this._meshes.length),e}getClassName(){return"FurMaterial"}static Parse(e,t,s){const i=H.Parse(()=>new W(e.name,t),e,t,s);return e.sourceMeshName&&i.highLevelFur&&t.executeWhenReady(()=>{const r=t.getMeshByName(e.sourceMeshName);if(r){const n=W.GenerateTexture("Fur Texture",t);i.furTexture=n,W.FurifyMesh(r,e.quality)}}),i}static GenerateTexture(e,t){const s=new Ls("FurTexture "+e,256,t,!0),i=s.getContext();for(let r=0;r<2e4;++r)i.fillStyle="rgba(255, "+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+", 1)",i.fillRect(Math.random()*s.getSize().width,Math.random()*s.getSize().height,2,2);return s.update(!1),s.wrapU=D.WRAP_ADDRESSMODE,s.wrapV=D.WRAP_ADDRESSMODE,s}static FurifyMesh(e,t){const s=[e],i=e.material;let r;if(!(i instanceof W))throw"The material of the source mesh must be a Fur Material";for(r=1;r<t;r++){const n=new W(i.name+r,e.getScene());e.getScene().materials.pop(),Lt.EnableFor(n),Lt.AddTagsTo(n,"furShellMaterial"),n.furLength=i.furLength,n.furAngle=i.furAngle,n.furGravity=i.furGravity,n.furSpacing=i.furSpacing,n.furSpeed=i.furSpeed,n.furColor=i.furColor,n.diffuseTexture=i.diffuseTexture,n.furOffset=r/t,n.furTexture=i.furTexture,n.highLevelFur=i.highLevelFur,n.furTime=i.furTime,n.furDensity=i.furDensity;const o=e.clone(e.name+r);o.material=n,o.skeleton=e.skeleton,o.position=x.Zero(),s.push(o)}for(r=1;r<s.length;r++)s[r].parent=e;return e.material._meshes=s,s}}h([R("diffuseTexture")],W.prototype,"_diffuseTexture",void 0);h([P("_markAllSubMeshesAsTexturesDirty")],W.prototype,"diffuseTexture",void 0);h([R("heightTexture")],W.prototype,"_heightTexture",void 0);h([P("_markAllSubMeshesAsTexturesDirty")],W.prototype,"heightTexture",void 0);h([oe()],W.prototype,"diffuseColor",void 0);h([A()],W.prototype,"furLength",void 0);h([A()],W.prototype,"furAngle",void 0);h([oe()],W.prototype,"furColor",void 0);h([A()],W.prototype,"furOffset",void 0);h([A()],W.prototype,"furSpacing",void 0);h([ct()],W.prototype,"furGravity",void 0);h([A()],W.prototype,"furSpeed",void 0);h([A()],W.prototype,"furDensity",void 0);h([A()],W.prototype,"furOcclusion",void 0);h([A("disableLighting")],W.prototype,"_disableLighting",void 0);h([P("_markAllSubMeshesAsLightsDirty")],W.prototype,"disableLighting",void 0);h([A("maxSimultaneousLights")],W.prototype,"_maxSimultaneousLights",void 0);h([P("_markAllSubMeshesAsLightsDirty")],W.prototype,"maxSimultaneousLights",void 0);h([A()],W.prototype,"highLevelFur",void 0);h([A()],W.prototype,"furTime",null);_e("BABYLON.FurMaterial",W);const cn="gradientPixelShader",un=`precision highp float;uniform vec4 vEyePosition;uniform vec4 topColor;uniform vec4 bottomColor;uniform float offset;uniform float scale;uniform float smoothness;varying vec3 vPositionW;varying vec3 vPosition;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<helperFunctions>
#include<__decl__lightFragment>[0]
#include<__decl__lightFragment>[1]
#include<__decl__lightFragment>[2]
#include<__decl__lightFragment>[3]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#include<clipPlaneFragmentDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);float h=vPosition.y*scale+offset;float mysmoothness=clamp(smoothness,0.01,max(smoothness,10.));vec4 baseColor=mix(bottomColor,topColor,max(pow(max(h,0.0),mysmoothness),0.0));vec3 diffuseColor=baseColor.rgb;float alpha=baseColor.a;
#ifdef ALPHATEST
if (baseColor.a<0.4)
discard;
#endif
#include<depthPrePass>
#ifdef VERTEXCOLOR
baseColor.rgb*=vColor.rgb;
#endif
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=vec3(1.0,1.0,1.0);
#endif
#ifdef EMISSIVE
vec3 diffuseBase=baseColor.rgb;
#else
vec3 diffuseBase=vec3(0.,0.,0.);
#endif
lightingInfo info;float shadow=1.;float glossiness=0.;float aggShadow=0.;float numLights=0.;
#include<lightFragment>[0..maxSimultaneousLights]
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
vec3 finalDiffuse=clamp(diffuseBase*diffuseColor,0.0,1.0)*baseColor.rgb;vec4 color=vec4(finalDiffuse,alpha);
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}
`;X.ShadersStore[cn]=un;const dn="gradientVertexShader",hn=`precision highp float;attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
uniform mat4 view;uniform mat4 viewProjection;
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;varying vec3 vPosition;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);vPosition=position;
#ifdef NORMAL
vNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));
#endif
#ifndef UV1
vec2 uv=vec2(0.,0.);
#endif
#ifndef UV2
vec2 uv2=vec2(0.,0.);
#endif
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;X.ShadersStore[dn]=hn;class mn extends Ee{constructor(){super(),this.EMISSIVE=!1,this.CLIPPLANE=!1,this.CLIPPLANE2=!1,this.CLIPPLANE3=!1,this.CLIPPLANE4=!1,this.CLIPPLANE5=!1,this.CLIPPLANE6=!1,this.ALPHATEST=!1,this.DEPTHPREPASS=!1,this.POINTSIZE=!1,this.FOG=!1,this.NORMAL=!1,this.UV1=!1,this.UV2=!1,this.VERTEXCOLOR=!1,this.VERTEXALPHA=!1,this.NUM_BONE_INFLUENCERS=0,this.BonesPerMesh=0,this.INSTANCES=!1,this.INSTANCESCOLOR=!1,this.IMAGEPROCESSINGPOSTPROCESS=!1,this.SKIPFINALCOLORCLAMP=!1,this.rebuild()}}class Te extends xe{constructor(e,t){super(e,t),this._maxSimultaneousLights=4,this.topColor=new y(1,0,0),this.topColorAlpha=1,this.bottomColor=new y(0,0,1),this.bottomColorAlpha=1,this.offset=0,this.scale=1,this.smoothness=1,this._disableLighting=!1}needAlphaBlending(){return this.alpha<1||this.topColorAlpha<1||this.bottomColorAlpha<1}needAlphaTesting(){return!0}getAlphaTestTexture(){return null}isReadyForSubMesh(e,t,s){if(this.isFrozen&&t.effect&&t.effect._wasPreviouslyReady&&t.effect._wasPreviouslyUsingInstances===s)return!0;t.materialDefines||(t.materialDefines=new mn);const i=t.materialDefines,r=this.getScene();if(this._isReadyForSubMesh(t))return!0;const n=r.getEngine();if(_.PrepareDefinesForFrameBoundValues(r,n,this,i,!!s),_.PrepareDefinesForMisc(e,r,!1,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(e),i),i._needNormals=_.PrepareDefinesForLights(r,e,i,!1,this._maxSimultaneousLights,this._disableLighting),i.EMISSIVE=this._disableLighting,_.PrepareDefinesForAttributes(e,i,!1,!0),i.isDirty){i.markAsProcessed(),r.resetCachedMaterial();const o=new be;i.FOG&&o.addFallback(1,"FOG"),_.HandleFallbacksForShadows(i,o),i.NUM_BONE_INFLUENCERS>0&&o.addCPUSkinningFallback(0,e),i.IMAGEPROCESSINGPOSTPROCESS=r.imageProcessingConfiguration.applyByPostProcess;const a=[p.PositionKind];i.NORMAL&&a.push(p.NormalKind),i.UV1&&a.push(p.UVKind),i.UV2&&a.push(p.UV2Kind),i.VERTEXCOLOR&&a.push(p.ColorKind),_.PrepareAttributesForBones(a,e,i,o),_.PrepareAttributesForInstances(a,i);const f="gradient",c=i.toString(),u=["world","view","viewProjection","vEyePosition","vLightsType","vFogInfos","vFogColor","pointSize","mBones","topColor","bottomColor","offset","smoothness","scale"];Pe(u);const d=[],m=[];_.PrepareUniformsAndSamplersList({uniformsNames:u,uniformBuffersNames:m,samplers:d,defines:i,maxSimultaneousLights:4}),t.setEffect(r.getEngine().createEffect(f,{attributes:a,uniformsNames:u,uniformBuffersNames:m,samplers:d,defines:c,fallbacks:o,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:4}},n),i,this._materialContext)}return!t.effect||!t.effect.isReady()?!1:(i._renderId=r.getRenderId(),t.effect._wasPreviouslyReady=!0,t.effect._wasPreviouslyUsingInstances=!!s,!0)}bindForSubMesh(e,t,s){const i=this.getScene(),r=s.materialDefines;if(!r)return;const n=s.effect;n&&(this._activeEffect=n,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",i.getTransformMatrix()),_.BindBonesParameters(t,n),this._mustRebind(i,n)&&(Oe(n,this,i),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),i.bindEyePosition(n)),i.lightsEnabled&&!this.disableLighting&&_.BindLights(i,t,this._activeEffect,r,this.maxSimultaneousLights),i.fogEnabled&&t.applyFog&&i.fogMode!==ve.FOGMODE_NONE&&this._activeEffect.setMatrix("view",i.getViewMatrix()),_.BindFogParameters(i,t,this._activeEffect),this._activeEffect.setColor4("topColor",this.topColor,this.topColorAlpha),this._activeEffect.setColor4("bottomColor",this.bottomColor,this.bottomColorAlpha),this._activeEffect.setFloat("offset",this.offset),this._activeEffect.setFloat("scale",this.scale),this._activeEffect.setFloat("smoothness",this.smoothness),this._afterBind(t,this._activeEffect))}getAnimatables(){return[]}dispose(e){super.dispose(e)}clone(e){return H.Clone(()=>new Te(e,this.getScene()),this)}serialize(){const e=super.serialize();return e.customType="BABYLON.GradientMaterial",e}getClassName(){return"GradientMaterial"}static Parse(e,t,s){return H.Parse(()=>new Te(e.name,t),e,t,s)}}h([A("maxSimultaneousLights")],Te.prototype,"_maxSimultaneousLights",void 0);h([P("_markAllSubMeshesAsLightsDirty")],Te.prototype,"maxSimultaneousLights",void 0);h([oe()],Te.prototype,"topColor",void 0);h([A()],Te.prototype,"topColorAlpha",void 0);h([oe()],Te.prototype,"bottomColor",void 0);h([A()],Te.prototype,"bottomColorAlpha",void 0);h([A()],Te.prototype,"offset",void 0);h([A()],Te.prototype,"scale",void 0);h([A()],Te.prototype,"smoothness",void 0);h([A("disableLighting")],Te.prototype,"_disableLighting",void 0);h([P("_markAllSubMeshesAsLightsDirty")],Te.prototype,"disableLighting",void 0);_e("BABYLON.GradientMaterial",Te);const _n="gridPixelShader",pn=`#extension GL_OES_standard_derivatives : enable
#define SQRT2 1.41421356
#define PI 3.14159
precision highp float;uniform float visibility;uniform vec3 mainColor;uniform vec3 lineColor;uniform vec4 gridControl;uniform vec3 gridOffset;varying vec3 vPosition;varying vec3 vNormal;
#include<fogFragmentDeclaration>
#ifdef OPACITY
varying vec2 vOpacityUV;uniform sampler2D opacitySampler;uniform vec2 vOpacityInfos;
#endif
float getDynamicVisibility(float position) {float majorGridFrequency=gridControl.y;if (floor(position+0.5)==floor(position/majorGridFrequency+0.5)*majorGridFrequency)
{return 1.0;}
return gridControl.z;}
float getAnisotropicAttenuation(float differentialLength) {const float maxNumberOfLines=10.0;return clamp(1.0/(differentialLength+1.0)-1.0/maxNumberOfLines,0.0,1.0);}
float isPointOnLine(float position,float differentialLength) {float fractionPartOfPosition=position-floor(position+0.5); 
fractionPartOfPosition/=differentialLength; 
#ifdef ANTIALIAS
fractionPartOfPosition=clamp(fractionPartOfPosition,-1.,1.);float result=0.5+0.5*cos(fractionPartOfPosition*PI); 
return result;
#else
return abs(fractionPartOfPosition)<SQRT2/4. ? 1. : 0.;
#endif
}
float contributionOnAxis(float position) {float differentialLength=length(vec2(dFdx(position),dFdy(position)));differentialLength*=SQRT2; 
float result=isPointOnLine(position,differentialLength);float dynamicVisibility=getDynamicVisibility(position);result*=dynamicVisibility;float anisotropicAttenuation=getAnisotropicAttenuation(differentialLength);result*=anisotropicAttenuation;return result;}
float normalImpactOnAxis(float x) {float normalImpact=clamp(1.0-3.0*abs(x*x*x),0.0,1.0);return normalImpact;}
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
float gridRatio=gridControl.x;vec3 gridPos=(vPosition+gridOffset.xyz)/gridRatio;float x=contributionOnAxis(gridPos.x);float y=contributionOnAxis(gridPos.y);float z=contributionOnAxis(gridPos.z);vec3 normal=normalize(vNormal);x*=normalImpactOnAxis(normal.x);y*=normalImpactOnAxis(normal.y);z*=normalImpactOnAxis(normal.z);
#ifdef MAX_LINE
float grid=clamp(max(max(x,y),z),0.,1.);
#else
float grid=clamp(x+y+z,0.,1.);
#endif
vec3 color=mix(mainColor,lineColor,grid);
#ifdef FOG
#include<fogFragment>
#endif
float opacity=1.0;
#ifdef TRANSPARENT
opacity=clamp(grid,0.08,gridControl.w*grid);
#endif
#ifdef OPACITY
opacity*=texture2D(opacitySampler,vOpacityUV).a;
#endif
gl_FragColor=vec4(color.rgb,opacity*visibility);
#ifdef TRANSPARENT
#ifdef PREMULTIPLYALPHA
gl_FragColor.rgb*=opacity;
#endif
#else
#endif
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}
`;X.ShadersStore[_n]=pn;const gn="gridVertexShader",vn=`precision highp float;attribute vec3 position;attribute vec3 normal;
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#include<instancesDeclaration>
uniform mat4 projection;uniform mat4 view;varying vec3 vPosition;varying vec3 vNormal;
#include<fogVertexDeclaration>
#ifdef OPACITY
varying vec2 vOpacityUV;uniform mat4 opacityMatrix;uniform vec2 vOpacityInfos;
#endif
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
vec4 worldPos=finalWorld*vec4(position,1.0);
#include<fogVertex>
vec4 cameraSpacePosition=view*worldPos;gl_Position=projection*cameraSpacePosition;
#ifdef OPACITY
#ifndef UV1
vec2 uv=vec2(0.,0.);
#endif
#ifndef UV2
vec2 uv2=vec2(0.,0.);
#endif
if (vOpacityInfos.x==0.)
{vOpacityUV=vec2(opacityMatrix*vec4(uv,1.0,0.0));}
else
{vOpacityUV=vec2(opacityMatrix*vec4(uv2,1.0,0.0));}
#endif 
vPosition=position;vNormal=normal;
#define CUSTOM_VERTEX_MAIN_END
}`;X.ShadersStore[gn]=vn;class Tn extends Ee{constructor(){super(),this.OPACITY=!1,this.ANTIALIAS=!1,this.TRANSPARENT=!1,this.FOG=!1,this.PREMULTIPLYALPHA=!1,this.MAX_LINE=!1,this.UV1=!1,this.UV2=!1,this.INSTANCES=!1,this.THIN_INSTANCES=!1,this.IMAGEPROCESSINGPOSTPROCESS=!1,this.SKIPFINALCOLORCLAMP=!1,this.rebuild()}}class le extends xe{constructor(e,t){super(e,t),this.mainColor=y.Black(),this.lineColor=y.Teal(),this.gridRatio=1,this.gridOffset=x.Zero(),this.majorUnitFrequency=10,this.minorUnitVisibility=.33,this.opacity=1,this.antialias=!0,this.preMultiplyAlpha=!1,this.useMaxLine=!1,this._gridControl=new Vi(this.gridRatio,this.majorUnitFrequency,this.minorUnitVisibility,this.opacity)}needAlphaBlending(){return this.opacity<1||this._opacityTexture&&this._opacityTexture.isReady()}needAlphaBlendingForMesh(e){return e.visibility<1||this.needAlphaBlending()}isReadyForSubMesh(e,t,s){if(this.isFrozen&&t.effect&&t.effect._wasPreviouslyReady&&t.effect._wasPreviouslyUsingInstances===s)return!0;t.materialDefines||(t.materialDefines=new Tn);const i=t.materialDefines,r=this.getScene();if(this._isReadyForSubMesh(t))return!0;if(i.TRANSPARENT!==this.opacity<1&&(i.TRANSPARENT=!i.TRANSPARENT,i.markAsUnprocessed()),i.PREMULTIPLYALPHA!=this.preMultiplyAlpha&&(i.PREMULTIPLYALPHA=!i.PREMULTIPLYALPHA,i.markAsUnprocessed()),i.MAX_LINE!==this.useMaxLine&&(i.MAX_LINE=!i.MAX_LINE,i.markAsUnprocessed()),i.ANTIALIAS!==this.antialias&&(i.ANTIALIAS=!i.ANTIALIAS,i.markAsUnprocessed()),i._areTexturesDirty&&(i._needUVs=!1,r.texturesEnabled&&this._opacityTexture&&j.OpacityTextureEnabled))if(this._opacityTexture.isReady())i._needUVs=!0,i.OPACITY=!0;else return!1;if(_.PrepareDefinesForMisc(e,r,!1,!1,this.fogEnabled,!1,i),_.PrepareDefinesForFrameBoundValues(r,r.getEngine(),this,i,!!s),i.isDirty){i.markAsProcessed(),r.resetCachedMaterial(),_.PrepareDefinesForAttributes(e,i,!1,!1);const n=[p.PositionKind,p.NormalKind];i.UV1&&n.push(p.UVKind),i.UV2&&n.push(p.UV2Kind),i.IMAGEPROCESSINGPOSTPROCESS=r.imageProcessingConfiguration.applyByPostProcess,_.PrepareAttributesForInstances(n,i);const o=i.toString();t.setEffect(r.getEngine().createEffect("grid",n,["projection","mainColor","lineColor","gridControl","gridOffset","vFogInfos","vFogColor","world","view","opacityMatrix","vOpacityInfos","visibility"],["opacitySampler"],o,void 0,this.onCompiled,this.onError),i,this._materialContext)}return!t.effect||!t.effect.isReady()?!1:(i._renderId=r.getRenderId(),t.effect._wasPreviouslyReady=!0,t.effect._wasPreviouslyUsingInstances=!!s,!0)}bindForSubMesh(e,t,s){const i=this.getScene(),r=s.materialDefines;if(!r)return;const n=s.effect;n&&(this._activeEffect=n,this._activeEffect.setFloat("visibility",t.visibility),(!r.INSTANCES||r.THIN_INSTANCE)&&this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("view",i.getViewMatrix()),this._activeEffect.setMatrix("projection",i.getProjectionMatrix()),this._mustRebind(i,n)&&(this._activeEffect.setColor3("mainColor",this.mainColor),this._activeEffect.setColor3("lineColor",this.lineColor),this._activeEffect.setVector3("gridOffset",this.gridOffset),this._gridControl.x=this.gridRatio,this._gridControl.y=Math.round(this.majorUnitFrequency),this._gridControl.z=this.minorUnitVisibility,this._gridControl.w=this.opacity,this._activeEffect.setVector4("gridControl",this._gridControl),this._opacityTexture&&j.OpacityTextureEnabled&&(this._activeEffect.setTexture("opacitySampler",this._opacityTexture),this._activeEffect.setFloat2("vOpacityInfos",this._opacityTexture.coordinatesIndex,this._opacityTexture.level),this._activeEffect.setMatrix("opacityMatrix",this._opacityTexture.getTextureMatrix()))),_.BindFogParameters(i,t,this._activeEffect),this._afterBind(t,this._activeEffect))}dispose(e){super.dispose(e)}clone(e){return H.Clone(()=>new le(e,this.getScene()),this)}serialize(){const e=super.serialize();return e.customType="BABYLON.GridMaterial",e}getClassName(){return"GridMaterial"}static Parse(e,t,s){return H.Parse(()=>new le(e.name,t),e,t,s)}}h([oe()],le.prototype,"mainColor",void 0);h([oe()],le.prototype,"lineColor",void 0);h([A()],le.prototype,"gridRatio",void 0);h([ct()],le.prototype,"gridOffset",void 0);h([A()],le.prototype,"majorUnitFrequency",void 0);h([A()],le.prototype,"minorUnitVisibility",void 0);h([A()],le.prototype,"opacity",void 0);h([A()],le.prototype,"antialias",void 0);h([A()],le.prototype,"preMultiplyAlpha",void 0);h([A()],le.prototype,"useMaxLine",void 0);h([R("opacityTexture")],le.prototype,"_opacityTexture",void 0);h([P("_markAllSubMeshesAsTexturesDirty")],le.prototype,"opacityTexture",void 0);_e("BABYLON.GridMaterial",le);const An="lavaPixelShader",xn=`precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;varying vec3 vPositionW;uniform float time;uniform float speed;uniform float movingSpeed;uniform vec3 fogColor;uniform sampler2D noiseTexture;uniform float fogDensity;varying float noise;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<helperFunctions>
#include<__decl__lightFragment>[0]
#include<__decl__lightFragment>[1]
#include<__decl__lightFragment>[2]
#include<__decl__lightFragment>[3]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#ifdef DIFFUSE
varying vec2 vDiffuseUV;uniform sampler2D diffuseSampler;uniform vec2 vDiffuseInfos;
#endif
#include<clipPlaneFragmentDeclaration>
#include<fogFragmentDeclaration>
float random( vec3 scale,float seed ){return fract( sin( dot( gl_FragCoord.xyz+seed,scale ) )*43758.5453+seed ) ;}
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(1.,1.,1.,1.);vec3 diffuseColor=vDiffuseColor.rgb;float alpha=vDiffuseColor.a;
#ifdef DIFFUSE
vec4 noiseTex=texture2D( noiseTexture,vDiffuseUV );vec2 T1=vDiffuseUV+vec2( 1.5,-1.5 )*time *0.02;vec2 T2=vDiffuseUV+vec2( -0.5,2.0 )*time*0.01*speed;T1.x+=noiseTex.x*2.0;T1.y+=noiseTex.y*2.0;T2.x-=noiseTex.y*0.2+time*0.001*movingSpeed;T2.y+=noiseTex.z*0.2+time*0.002*movingSpeed;float p=texture2D( noiseTexture,T1*3.0 ).a;vec4 lavaColor=texture2D( diffuseSampler,T2*4.0);vec4 temp=lavaColor*( vec4( p,p,p,p )*2. )+( lavaColor*lavaColor-0.1 );baseColor=temp;float depth=gl_FragCoord.z*4.0;const float LOG2=1.442695;float fogFactor=exp2(-fogDensity*fogDensity*depth*depth*LOG2 );fogFactor=1.0-clamp( fogFactor,0.0,1.0 );baseColor=mix( baseColor,vec4( fogColor,baseColor.w ),fogFactor );diffuseColor=baseColor.rgb;
#ifdef ALPHATEST
if (baseColor.a<0.4)
discard;
#endif
#include<depthPrePass>
baseColor.rgb*=vDiffuseInfos.y;
#endif
#ifdef VERTEXCOLOR
baseColor.rgb*=vColor.rgb;
#endif
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=vec3(1.0,1.0,1.0);
#endif
#ifdef UNLIT
vec3 diffuseBase=vec3(1.,1.,1.);
#else
vec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float glossiness=0.;float aggShadow=0.;float numLights=0.;
#include<lightFragment>[0]
#include<lightFragment>[1]
#include<lightFragment>[2]
#include<lightFragment>[3]
#endif
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
vec3 finalDiffuse=clamp(diffuseBase*diffuseColor,0.0,1.0)*baseColor.rgb;vec4 color=vec4(finalDiffuse,alpha);
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}`;X.ShadersStore[An]=xn;const En="lavaVertexShader",Sn=`precision highp float;uniform float time;uniform float lowFrequencySpeed;varying float noise;attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
uniform mat4 view;uniform mat4 viewProjection;
#ifdef DIFFUSE
varying vec2 vDiffuseUV;uniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
/* NOISE FUNCTIONS */
vec3 mod289(vec3 x)
{return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x)
{return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x)
{return mod289(((x*34.0)+1.0)*x);}
vec4 taylorInvSqrt(vec4 r)
{return 1.79284291400159-0.85373472095314*r;}
vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}
float pnoise(vec3 P,vec3 rep)
{vec3 Pi0=mod(floor(P),rep); 
vec3 Pi1=mod(Pi0+vec3(1.0),rep); 
Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P); 
vec3 Pf1=Pf0-vec3(1.0); 
vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=fade(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}
/* END FUNCTION */
float turbulence( vec3 p ) {float w=100.0;float t=-.5;for (float f=1.0 ; f<=10.0 ; f++ ){float power=pow( 2.0,f );t+=abs( pnoise( vec3( power*p ),vec3( 10.0,10.0,10.0 ) )/power );}
return t;}
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
#ifdef NORMAL
noise=10.0* -.10*turbulence( .5*normal+time*1.15 );float b=lowFrequencySpeed*5.0*pnoise( 0.05*position +vec3(time*1.025),vec3( 100.0 ) );float displacement=- 1.5*noise+b;vec3 newPosition=position+normal*displacement;gl_Position=viewProjection*finalWorld*vec4( newPosition,1.0 );vec4 worldPos=finalWorld*vec4(newPosition,1.0);vPositionW=vec3(worldPos);vNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));
#endif
#ifndef UV1
vec2 uv=vec2(0.,0.);
#endif
#ifndef UV2
vec2 uv2=vec2(0.,0.);
#endif
#ifdef DIFFUSE
if (vDiffuseInfos.x==0.)
{vDiffuseUV=vec2(diffuseMatrix*vec4(uv,1.0,0.0));}
else
{vDiffuseUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));}
#endif
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#define CUSTOM_VERTEX_MAIN_END
}`;X.ShadersStore[En]=Sn;class yn extends Ee{constructor(){super(),this.DIFFUSE=!1,this.CLIPPLANE=!1,this.CLIPPLANE2=!1,this.CLIPPLANE3=!1,this.CLIPPLANE4=!1,this.CLIPPLANE5=!1,this.CLIPPLANE6=!1,this.ALPHATEST=!1,this.DEPTHPREPASS=!1,this.POINTSIZE=!1,this.FOG=!1,this.LIGHT0=!1,this.LIGHT1=!1,this.LIGHT2=!1,this.LIGHT3=!1,this.SPOTLIGHT0=!1,this.SPOTLIGHT1=!1,this.SPOTLIGHT2=!1,this.SPOTLIGHT3=!1,this.HEMILIGHT0=!1,this.HEMILIGHT1=!1,this.HEMILIGHT2=!1,this.HEMILIGHT3=!1,this.DIRLIGHT0=!1,this.DIRLIGHT1=!1,this.DIRLIGHT2=!1,this.DIRLIGHT3=!1,this.POINTLIGHT0=!1,this.POINTLIGHT1=!1,this.POINTLIGHT2=!1,this.POINTLIGHT3=!1,this.SHADOW0=!1,this.SHADOW1=!1,this.SHADOW2=!1,this.SHADOW3=!1,this.SHADOWS=!1,this.SHADOWESM0=!1,this.SHADOWESM1=!1,this.SHADOWESM2=!1,this.SHADOWESM3=!1,this.SHADOWPOISSON0=!1,this.SHADOWPOISSON1=!1,this.SHADOWPOISSON2=!1,this.SHADOWPOISSON3=!1,this.SHADOWPCF0=!1,this.SHADOWPCF1=!1,this.SHADOWPCF2=!1,this.SHADOWPCF3=!1,this.SHADOWPCSS0=!1,this.SHADOWPCSS1=!1,this.SHADOWPCSS2=!1,this.SHADOWPCSS3=!1,this.NORMAL=!1,this.UV1=!1,this.UV2=!1,this.VERTEXCOLOR=!1,this.VERTEXALPHA=!1,this.NUM_BONE_INFLUENCERS=0,this.BonesPerMesh=0,this.INSTANCES=!1,this.INSTANCESCOLOR=!1,this.UNLIT=!1,this.IMAGEPROCESSINGPOSTPROCESS=!1,this.SKIPFINALCOLORCLAMP=!1,this.rebuild()}}class fe extends xe{constructor(e,t){super(e,t),this.speed=1,this.movingSpeed=1,this.lowFrequencySpeed=1,this.fogDensity=.15,this._lastTime=0,this.diffuseColor=new y(1,1,1),this._disableLighting=!1,this._unlit=!1,this._maxSimultaneousLights=4,this._scaledDiffuse=new y}needAlphaBlending(){return this.alpha<1}needAlphaTesting(){return!1}getAlphaTestTexture(){return null}isReadyForSubMesh(e,t,s){if(this.isFrozen&&t.effect&&t.effect._wasPreviouslyReady&&t.effect._wasPreviouslyUsingInstances===s)return!0;t.materialDefines||(t.materialDefines=new yn);const i=t.materialDefines,r=this.getScene();if(this._isReadyForSubMesh(t))return!0;const n=r.getEngine();if(i._areTexturesDirty&&(i._needUVs=!1,r.texturesEnabled&&this._diffuseTexture&&j.DiffuseTextureEnabled))if(this._diffuseTexture.isReady())i._needUVs=!0,i.DIFFUSE=!0;else return!1;if(_.PrepareDefinesForMisc(e,r,!1,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(e),i),i._needNormals=!0,_.PrepareDefinesForLights(r,e,i,!1,this._maxSimultaneousLights,this._disableLighting),_.PrepareDefinesForFrameBoundValues(r,n,this,i,!!s),_.PrepareDefinesForAttributes(e,i,!0,!0),i.isDirty){i.markAsProcessed(),r.resetCachedMaterial();const o=new be;i.FOG&&o.addFallback(1,"FOG"),_.HandleFallbacksForShadows(i,o),i.NUM_BONE_INFLUENCERS>0&&o.addCPUSkinningFallback(0,e),i.IMAGEPROCESSINGPOSTPROCESS=r.imageProcessingConfiguration.applyByPostProcess;const a=[p.PositionKind];i.NORMAL&&a.push(p.NormalKind),i.UV1&&a.push(p.UVKind),i.UV2&&a.push(p.UV2Kind),i.VERTEXCOLOR&&a.push(p.ColorKind),_.PrepareAttributesForBones(a,e,i,o),_.PrepareAttributesForInstances(a,i);const f="lava",c=i.toString(),u=["world","view","viewProjection","vEyePosition","vLightsType","vDiffuseColor","vFogInfos","vFogColor","pointSize","vDiffuseInfos","mBones","diffuseMatrix","time","speed","movingSpeed","fogColor","fogDensity","lowFrequencySpeed"];Pe(u);const d=["diffuseSampler","noiseTexture"],m=[];_.PrepareUniformsAndSamplersList({uniformsNames:u,uniformBuffersNames:m,samplers:d,defines:i,maxSimultaneousLights:this.maxSimultaneousLights}),t.setEffect(r.getEngine().createEffect(f,{attributes:a,uniformsNames:u,uniformBuffersNames:m,samplers:d,defines:c,fallbacks:o,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:this.maxSimultaneousLights}},n),i,this._materialContext)}return!t.effect||!t.effect.isReady()?!1:(i._renderId=r.getRenderId(),t.effect._wasPreviouslyReady=!0,t.effect._wasPreviouslyUsingInstances=!!s,!0)}bindForSubMesh(e,t,s){const i=this.getScene(),r=s.materialDefines;if(!r)return;const n=s.effect;n&&(this._activeEffect=n,r.UNLIT=this._unlit,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",i.getTransformMatrix()),_.BindBonesParameters(t,this._activeEffect),this._mustRebind(i,n)&&(this.diffuseTexture&&j.DiffuseTextureEnabled&&(this._activeEffect.setTexture("diffuseSampler",this.diffuseTexture),this._activeEffect.setFloat2("vDiffuseInfos",this.diffuseTexture.coordinatesIndex,this.diffuseTexture.level),this._activeEffect.setMatrix("diffuseMatrix",this.diffuseTexture.getTextureMatrix())),this.noiseTexture&&this._activeEffect.setTexture("noiseTexture",this.noiseTexture),Oe(n,this,i),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),i.bindEyePosition(n)),this._activeEffect.setColor4("vDiffuseColor",this._scaledDiffuse,this.alpha*t.visibility),i.lightsEnabled&&!this.disableLighting&&_.BindLights(i,t,this._activeEffect,r),i.fogEnabled&&t.applyFog&&i.fogMode!==ve.FOGMODE_NONE&&this._activeEffect.setMatrix("view",i.getViewMatrix()),_.BindFogParameters(i,t,this._activeEffect),this._lastTime+=i.getEngine().getDeltaTime(),this._activeEffect.setFloat("time",this._lastTime*this.speed/1e3),this.fogColor||(this.fogColor=y.Black()),this._activeEffect.setColor3("fogColor",this.fogColor),this._activeEffect.setFloat("fogDensity",this.fogDensity),this._activeEffect.setFloat("lowFrequencySpeed",this.lowFrequencySpeed),this._activeEffect.setFloat("movingSpeed",this.movingSpeed),this._afterBind(t,this._activeEffect))}getAnimatables(){const e=[];return this.diffuseTexture&&this.diffuseTexture.animations&&this.diffuseTexture.animations.length>0&&e.push(this.diffuseTexture),this.noiseTexture&&this.noiseTexture.animations&&this.noiseTexture.animations.length>0&&e.push(this.noiseTexture),e}getActiveTextures(){const e=super.getActiveTextures();return this._diffuseTexture&&e.push(this._diffuseTexture),e}hasTexture(e){return!!(super.hasTexture(e)||this.diffuseTexture===e)}dispose(e){this.diffuseTexture&&this.diffuseTexture.dispose(),this.noiseTexture&&this.noiseTexture.dispose(),super.dispose(e)}clone(e){return H.Clone(()=>new fe(e,this.getScene()),this)}serialize(){const e=super.serialize();return e.customType="BABYLON.LavaMaterial",e}getClassName(){return"LavaMaterial"}static Parse(e,t,s){return H.Parse(()=>new fe(e.name,t),e,t,s)}}h([R("diffuseTexture")],fe.prototype,"_diffuseTexture",void 0);h([P("_markAllSubMeshesAsTexturesDirty")],fe.prototype,"diffuseTexture",void 0);h([R()],fe.prototype,"noiseTexture",void 0);h([oe()],fe.prototype,"fogColor",void 0);h([A()],fe.prototype,"speed",void 0);h([A()],fe.prototype,"movingSpeed",void 0);h([A()],fe.prototype,"lowFrequencySpeed",void 0);h([A()],fe.prototype,"fogDensity",void 0);h([oe()],fe.prototype,"diffuseColor",void 0);h([A("disableLighting")],fe.prototype,"_disableLighting",void 0);h([P("_markAllSubMeshesAsLightsDirty")],fe.prototype,"disableLighting",void 0);h([A("unlit")],fe.prototype,"_unlit",void 0);h([P("_markAllSubMeshesAsLightsDirty")],fe.prototype,"unlit",void 0);h([A("maxSimultaneousLights")],fe.prototype,"_maxSimultaneousLights",void 0);h([P("_markAllSubMeshesAsLightsDirty")],fe.prototype,"maxSimultaneousLights",void 0);_e("BABYLON.LavaMaterial",fe);const Cn="mixPixelShader",Pn=`precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;
#ifdef SPECULARTERM
uniform vec4 vSpecularColor;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<helperFunctions>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#ifdef DIFFUSE
varying vec2 vTextureUV;uniform sampler2D mixMap1Sampler;uniform vec2 vTextureInfos;
#ifdef MIXMAP2
uniform sampler2D mixMap2Sampler;
#endif
uniform sampler2D diffuse1Sampler;uniform sampler2D diffuse2Sampler;uniform sampler2D diffuse3Sampler;uniform sampler2D diffuse4Sampler;uniform vec2 diffuse1Infos;uniform vec2 diffuse2Infos;uniform vec2 diffuse3Infos;uniform vec2 diffuse4Infos;
#ifdef MIXMAP2
uniform sampler2D diffuse5Sampler;uniform sampler2D diffuse6Sampler;uniform sampler2D diffuse7Sampler;uniform sampler2D diffuse8Sampler;uniform vec2 diffuse5Infos;uniform vec2 diffuse6Infos;uniform vec2 diffuse7Infos;uniform vec2 diffuse8Infos;
#endif
#endif
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#include<clipPlaneFragmentDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 finalMixColor=vec4(1.,1.,1.,1.);vec3 diffuseColor=vDiffuseColor.rgb;
#ifdef MIXMAP2
vec4 mixColor2=vec4(1.,1.,1.,1.);
#endif
#ifdef SPECULARTERM
float glossiness=vSpecularColor.a;vec3 specularColor=vSpecularColor.rgb;
#else
float glossiness=0.;
#endif
float alpha=vDiffuseColor.a;
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=vec3(1.0,1.0,1.0);
#endif
#ifdef DIFFUSE
vec4 mixColor=texture2D(mixMap1Sampler,vTextureUV);
#include<depthPrePass>
mixColor.rgb*=vTextureInfos.y;vec4 diffuse1Color=texture2D(diffuse1Sampler,vTextureUV*diffuse1Infos);vec4 diffuse2Color=texture2D(diffuse2Sampler,vTextureUV*diffuse2Infos);vec4 diffuse3Color=texture2D(diffuse3Sampler,vTextureUV*diffuse3Infos);vec4 diffuse4Color=texture2D(diffuse4Sampler,vTextureUV*diffuse4Infos);diffuse1Color.rgb*=mixColor.r;diffuse2Color.rgb=mix(diffuse1Color.rgb,diffuse2Color.rgb,mixColor.g);diffuse3Color.rgb=mix(diffuse2Color.rgb,diffuse3Color.rgb,mixColor.b);finalMixColor.rgb=mix(diffuse3Color.rgb,diffuse4Color.rgb,1.0-mixColor.a);
#ifdef MIXMAP2
mixColor=texture2D(mixMap2Sampler,vTextureUV);mixColor.rgb*=vTextureInfos.y;vec4 diffuse5Color=texture2D(diffuse5Sampler,vTextureUV*diffuse5Infos);vec4 diffuse6Color=texture2D(diffuse6Sampler,vTextureUV*diffuse6Infos);vec4 diffuse7Color=texture2D(diffuse7Sampler,vTextureUV*diffuse7Infos);vec4 diffuse8Color=texture2D(diffuse8Sampler,vTextureUV*diffuse8Infos);diffuse5Color.rgb=mix(finalMixColor.rgb,diffuse5Color.rgb,mixColor.r);diffuse6Color.rgb=mix(diffuse5Color.rgb,diffuse6Color.rgb,mixColor.g);diffuse7Color.rgb=mix(diffuse6Color.rgb,diffuse7Color.rgb,mixColor.b);finalMixColor.rgb=mix(diffuse7Color.rgb,diffuse8Color.rgb,1.0-mixColor.a);
#endif
#endif
#ifdef VERTEXCOLOR
finalMixColor.rgb*=vColor.rgb;
#endif
vec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float aggShadow=0.;float numLights=0.;
#ifdef SPECULARTERM
vec3 specularBase=vec3(0.,0.,0.);
#endif
#include<lightFragment>[0..maxSimultaneousLights]
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
#ifdef SPECULARTERM
vec3 finalSpecular=specularBase*specularColor;
#else
vec3 finalSpecular=vec3(0.0);
#endif
vec3 finalDiffuse=clamp(diffuseBase*diffuseColor*finalMixColor.rgb,0.0,1.0);vec4 color=vec4(finalDiffuse+finalSpecular,alpha);
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}
`;X.ShadersStore[Cn]=Pn;const On="mixVertexShader",bn=`precision highp float;attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
uniform mat4 view;uniform mat4 viewProjection;
#ifdef DIFFUSE
varying vec2 vTextureUV;uniform mat4 textureMatrix;uniform vec2 vTextureInfos;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);
#ifdef NORMAL
vNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));
#endif
#ifndef UV1
vec2 uv=vec2(0.,0.);
#endif
#ifndef UV2
vec2 uv2=vec2(0.,0.);
#endif
#ifdef DIFFUSE
if (vTextureInfos.x==0.)
{vTextureUV=vec2(textureMatrix*vec4(uv,1.0,0.0));}
else
{vTextureUV=vec2(textureMatrix*vec4(uv2,1.0,0.0));}
#endif
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;X.ShadersStore[On]=bn;class In extends Ee{constructor(){super(),this.DIFFUSE=!1,this.CLIPPLANE=!1,this.CLIPPLANE2=!1,this.CLIPPLANE3=!1,this.CLIPPLANE4=!1,this.CLIPPLANE5=!1,this.CLIPPLANE6=!1,this.ALPHATEST=!1,this.DEPTHPREPASS=!1,this.POINTSIZE=!1,this.FOG=!1,this.SPECULARTERM=!1,this.NORMAL=!1,this.UV1=!1,this.UV2=!1,this.VERTEXCOLOR=!1,this.VERTEXALPHA=!1,this.NUM_BONE_INFLUENCERS=0,this.BonesPerMesh=0,this.INSTANCES=!1,this.INSTANCESCOLOR=!1,this.MIXMAP2=!1,this.IMAGEPROCESSINGPOSTPROCESS=!1,this.SKIPFINALCOLORCLAMP=!1,this.rebuild()}}class G extends xe{constructor(e,t){super(e,t),this.diffuseColor=new y(1,1,1),this.specularColor=new y(0,0,0),this.specularPower=64,this._disableLighting=!1,this._maxSimultaneousLights=4}needAlphaBlending(){return this.alpha<1}needAlphaTesting(){return!1}getAlphaTestTexture(){return null}isReadyForSubMesh(e,t,s){if(this.isFrozen&&t.effect&&t.effect._wasPreviouslyReady&&t.effect._wasPreviouslyUsingInstances===s)return!0;t.materialDefines||(t.materialDefines=new In);const i=t.materialDefines,r=this.getScene();if(this._isReadyForSubMesh(t))return!0;const n=r.getEngine();if(r.texturesEnabled&&(!this._mixTexture1||!this._mixTexture1.isReady()||(i._needUVs=!0,j.DiffuseTextureEnabled&&(!this._diffuseTexture1||!this._diffuseTexture1.isReady()||(i.DIFFUSE=!0,!this._diffuseTexture2||!this._diffuseTexture2.isReady())||!this._diffuseTexture3||!this._diffuseTexture3.isReady()||!this._diffuseTexture4||!this._diffuseTexture4.isReady()||this._mixTexture2&&(!this._mixTexture2.isReady()||(i.MIXMAP2=!0,!this._diffuseTexture5||!this._diffuseTexture5.isReady())||!this._diffuseTexture6||!this._diffuseTexture6.isReady()||!this._diffuseTexture7||!this._diffuseTexture7.isReady()||!this._diffuseTexture8||!this._diffuseTexture8.isReady())))))return!1;if(_.PrepareDefinesForMisc(e,r,!1,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(e),i),i._needNormals=_.PrepareDefinesForLights(r,e,i,!1,this._maxSimultaneousLights,this._disableLighting),_.PrepareDefinesForFrameBoundValues(r,n,this,i,!!s),_.PrepareDefinesForAttributes(e,i,!0,!0),i.isDirty){i.markAsProcessed(),r.resetCachedMaterial();const o=new be;i.FOG&&o.addFallback(1,"FOG"),_.HandleFallbacksForShadows(i,o,this.maxSimultaneousLights),i.NUM_BONE_INFLUENCERS>0&&o.addCPUSkinningFallback(0,e),i.IMAGEPROCESSINGPOSTPROCESS=r.imageProcessingConfiguration.applyByPostProcess;const a=[p.PositionKind];i.NORMAL&&a.push(p.NormalKind),i.UV1&&a.push(p.UVKind),i.UV2&&a.push(p.UV2Kind),i.VERTEXCOLOR&&a.push(p.ColorKind),_.PrepareAttributesForBones(a,e,i,o),_.PrepareAttributesForInstances(a,i);const f="mix",c=i.toString(),u=["world","view","viewProjection","vEyePosition","vLightsType","vDiffuseColor","vSpecularColor","vFogInfos","vFogColor","pointSize","vTextureInfos","mBones","textureMatrix","diffuse1Infos","diffuse2Infos","diffuse3Infos","diffuse4Infos","diffuse5Infos","diffuse6Infos","diffuse7Infos","diffuse8Infos"],d=["mixMap1Sampler","mixMap2Sampler","diffuse1Sampler","diffuse2Sampler","diffuse3Sampler","diffuse4Sampler","diffuse5Sampler","diffuse6Sampler","diffuse7Sampler","diffuse8Sampler"],m=[];Pe(u),_.PrepareUniformsAndSamplersList({uniformsNames:u,uniformBuffersNames:m,samplers:d,defines:i,maxSimultaneousLights:this.maxSimultaneousLights}),t.setEffect(r.getEngine().createEffect(f,{attributes:a,uniformsNames:u,uniformBuffersNames:m,samplers:d,defines:c,fallbacks:o,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:this.maxSimultaneousLights}},n),i,this._materialContext)}return!t.effect||!t.effect.isReady()?!1:(i._renderId=r.getRenderId(),t.effect._wasPreviouslyReady=!0,t.effect._wasPreviouslyUsingInstances=!!s,!0)}bindForSubMesh(e,t,s){const i=this.getScene(),r=s.materialDefines;if(!r)return;const n=s.effect;n&&(this._activeEffect=n,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",i.getTransformMatrix()),_.BindBonesParameters(t,this._activeEffect),this._mustRebind(i,n)&&(this._mixTexture1&&(this._activeEffect.setTexture("mixMap1Sampler",this._mixTexture1),this._activeEffect.setFloat2("vTextureInfos",this._mixTexture1.coordinatesIndex,this._mixTexture1.level),this._activeEffect.setMatrix("textureMatrix",this._mixTexture1.getTextureMatrix()),j.DiffuseTextureEnabled&&(this._diffuseTexture1&&(this._activeEffect.setTexture("diffuse1Sampler",this._diffuseTexture1),this._activeEffect.setFloat2("diffuse1Infos",this._diffuseTexture1.uScale,this._diffuseTexture1.vScale)),this._diffuseTexture2&&(this._activeEffect.setTexture("diffuse2Sampler",this._diffuseTexture2),this._activeEffect.setFloat2("diffuse2Infos",this._diffuseTexture2.uScale,this._diffuseTexture2.vScale)),this._diffuseTexture3&&(this._activeEffect.setTexture("diffuse3Sampler",this._diffuseTexture3),this._activeEffect.setFloat2("diffuse3Infos",this._diffuseTexture3.uScale,this._diffuseTexture3.vScale)),this._diffuseTexture4&&(this._activeEffect.setTexture("diffuse4Sampler",this._diffuseTexture4),this._activeEffect.setFloat2("diffuse4Infos",this._diffuseTexture4.uScale,this._diffuseTexture4.vScale)))),this._mixTexture2&&(this._activeEffect.setTexture("mixMap2Sampler",this._mixTexture2),j.DiffuseTextureEnabled&&(this._diffuseTexture5&&(this._activeEffect.setTexture("diffuse5Sampler",this._diffuseTexture5),this._activeEffect.setFloat2("diffuse5Infos",this._diffuseTexture5.uScale,this._diffuseTexture5.vScale)),this._diffuseTexture6&&(this._activeEffect.setTexture("diffuse6Sampler",this._diffuseTexture6),this._activeEffect.setFloat2("diffuse6Infos",this._diffuseTexture6.uScale,this._diffuseTexture6.vScale)),this._diffuseTexture7&&(this._activeEffect.setTexture("diffuse7Sampler",this._diffuseTexture7),this._activeEffect.setFloat2("diffuse7Infos",this._diffuseTexture7.uScale,this._diffuseTexture7.vScale)),this._diffuseTexture8&&(this._activeEffect.setTexture("diffuse8Sampler",this._diffuseTexture8),this._activeEffect.setFloat2("diffuse8Infos",this._diffuseTexture8.uScale,this._diffuseTexture8.vScale)))),Oe(n,this,i),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),i.bindEyePosition(n)),this._activeEffect.setColor4("vDiffuseColor",this.diffuseColor,this.alpha*t.visibility),r.SPECULARTERM&&this._activeEffect.setColor4("vSpecularColor",this.specularColor,this.specularPower),i.lightsEnabled&&!this.disableLighting&&_.BindLights(i,t,this._activeEffect,r,this.maxSimultaneousLights),i.fogEnabled&&t.applyFog&&i.fogMode!==ve.FOGMODE_NONE&&this._activeEffect.setMatrix("view",i.getViewMatrix()),_.BindFogParameters(i,t,this._activeEffect),this._afterBind(t,this._activeEffect))}getAnimatables(){const e=[];return this._mixTexture1&&this._mixTexture1.animations&&this._mixTexture1.animations.length>0&&e.push(this._mixTexture1),this._mixTexture2&&this._mixTexture2.animations&&this._mixTexture2.animations.length>0&&e.push(this._mixTexture2),e}getActiveTextures(){const e=super.getActiveTextures();return this._mixTexture1&&e.push(this._mixTexture1),this._diffuseTexture1&&e.push(this._diffuseTexture1),this._diffuseTexture2&&e.push(this._diffuseTexture2),this._diffuseTexture3&&e.push(this._diffuseTexture3),this._diffuseTexture4&&e.push(this._diffuseTexture4),this._mixTexture2&&e.push(this._mixTexture2),this._diffuseTexture5&&e.push(this._diffuseTexture5),this._diffuseTexture6&&e.push(this._diffuseTexture6),this._diffuseTexture7&&e.push(this._diffuseTexture7),this._diffuseTexture8&&e.push(this._diffuseTexture8),e}hasTexture(e){return!!(super.hasTexture(e)||this._mixTexture1===e||this._diffuseTexture1===e||this._diffuseTexture2===e||this._diffuseTexture3===e||this._diffuseTexture4===e||this._mixTexture2===e||this._diffuseTexture5===e||this._diffuseTexture6===e||this._diffuseTexture7===e||this._diffuseTexture8===e)}dispose(e){this._mixTexture1&&this._mixTexture1.dispose(),super.dispose(e)}clone(e){return H.Clone(()=>new G(e,this.getScene()),this)}serialize(){const e=super.serialize();return e.customType="BABYLON.MixMaterial",e}getClassName(){return"MixMaterial"}static Parse(e,t,s){return H.Parse(()=>new G(e.name,t),e,t,s)}}h([R("mixTexture1")],G.prototype,"_mixTexture1",void 0);h([P("_markAllSubMeshesAsTexturesDirty")],G.prototype,"mixTexture1",void 0);h([R("mixTexture2")],G.prototype,"_mixTexture2",void 0);h([P("_markAllSubMeshesAsTexturesDirty")],G.prototype,"mixTexture2",void 0);h([R("diffuseTexture1")],G.prototype,"_diffuseTexture1",void 0);h([P("_markAllSubMeshesAsTexturesDirty")],G.prototype,"diffuseTexture1",void 0);h([R("diffuseTexture2")],G.prototype,"_diffuseTexture2",void 0);h([P("_markAllSubMeshesAsTexturesDirty")],G.prototype,"diffuseTexture2",void 0);h([R("diffuseTexture3")],G.prototype,"_diffuseTexture3",void 0);h([P("_markAllSubMeshesAsTexturesDirty")],G.prototype,"diffuseTexture3",void 0);h([R("diffuseTexture4")],G.prototype,"_diffuseTexture4",void 0);h([P("_markAllSubMeshesAsTexturesDirty")],G.prototype,"diffuseTexture4",void 0);h([R("diffuseTexture1")],G.prototype,"_diffuseTexture5",void 0);h([P("_markAllSubMeshesAsTexturesDirty")],G.prototype,"diffuseTexture5",void 0);h([R("diffuseTexture2")],G.prototype,"_diffuseTexture6",void 0);h([P("_markAllSubMeshesAsTexturesDirty")],G.prototype,"diffuseTexture6",void 0);h([R("diffuseTexture3")],G.prototype,"_diffuseTexture7",void 0);h([P("_markAllSubMeshesAsTexturesDirty")],G.prototype,"diffuseTexture7",void 0);h([R("diffuseTexture4")],G.prototype,"_diffuseTexture8",void 0);h([P("_markAllSubMeshesAsTexturesDirty")],G.prototype,"diffuseTexture8",void 0);h([oe()],G.prototype,"diffuseColor",void 0);h([oe()],G.prototype,"specularColor",void 0);h([A()],G.prototype,"specularPower",void 0);h([A("disableLighting")],G.prototype,"_disableLighting",void 0);h([P("_markAllSubMeshesAsLightsDirty")],G.prototype,"disableLighting",void 0);h([A("maxSimultaneousLights")],G.prototype,"_maxSimultaneousLights",void 0);h([P("_markAllSubMeshesAsLightsDirty")],G.prototype,"maxSimultaneousLights",void 0);_e("BABYLON.MixMaterial",G);const Nn="normalPixelShader",Ln=`precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef LIGHTING
#include<helperFunctions>
#include<__decl__lightFragment>[0]
#include<__decl__lightFragment>[1]
#include<__decl__lightFragment>[2]
#include<__decl__lightFragment>[3]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#endif
#ifdef DIFFUSE
varying vec2 vDiffuseUV;uniform sampler2D diffuseSampler;uniform vec2 vDiffuseInfos;
#endif
#include<clipPlaneFragmentDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(1.,1.,1.,1.);vec3 diffuseColor=vDiffuseColor.rgb;float alpha=vDiffuseColor.a;
#ifdef DIFFUSE
baseColor=texture2D(diffuseSampler,vDiffuseUV);
#ifdef ALPHATEST
if (baseColor.a<0.4)
discard;
#endif
#include<depthPrePass>
baseColor.rgb*=vDiffuseInfos.y;
#endif
#ifdef NORMAL
baseColor=mix(baseColor,vec4(vNormalW,1.0),0.5);
#endif
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=vec3(1.0,1.0,1.0);
#endif
#ifdef LIGHTING
vec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float glossiness=0.;float aggShadow=0.;float numLights=0.;
#include<lightFragment>[0]
#include<lightFragment>[1]
#include<lightFragment>[2]
#include<lightFragment>[3]
vec3 finalDiffuse=clamp(diffuseBase*diffuseColor,0.0,1.0)*baseColor.rgb;
#else
vec3 finalDiffuse= baseColor.rgb;
#endif
vec4 color=vec4(finalDiffuse,alpha);
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}`;X.ShadersStore[Nn]=Ln;const Mn="normalVertexShader",Fn=`precision highp float;attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
uniform mat4 view;uniform mat4 viewProjection;
#ifdef DIFFUSE
varying vec2 vDiffuseUV;uniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);
#ifdef NORMAL
vNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));
#endif
#ifndef UV1
vec2 uv=vec2(0.,0.);
#endif
#ifndef UV2
vec2 uv2=vec2(0.,0.);
#endif
#ifdef DIFFUSE
if (vDiffuseInfos.x==0.)
{vDiffuseUV=vec2(diffuseMatrix*vec4(uv,1.0,0.0));}
else
{vDiffuseUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));}
#endif
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;X.ShadersStore[Mn]=Fn;class Rn extends Ee{constructor(){super(),this.DIFFUSE=!1,this.CLIPPLANE=!1,this.CLIPPLANE2=!1,this.CLIPPLANE3=!1,this.CLIPPLANE4=!1,this.CLIPPLANE5=!1,this.CLIPPLANE6=!1,this.ALPHATEST=!1,this.DEPTHPREPASS=!1,this.POINTSIZE=!1,this.FOG=!1,this.LIGHT0=!1,this.LIGHT1=!1,this.LIGHT2=!1,this.LIGHT3=!1,this.SPOTLIGHT0=!1,this.SPOTLIGHT1=!1,this.SPOTLIGHT2=!1,this.SPOTLIGHT3=!1,this.HEMILIGHT0=!1,this.HEMILIGHT1=!1,this.HEMILIGHT2=!1,this.HEMILIGHT3=!1,this.DIRLIGHT0=!1,this.DIRLIGHT1=!1,this.DIRLIGHT2=!1,this.DIRLIGHT3=!1,this.POINTLIGHT0=!1,this.POINTLIGHT1=!1,this.POINTLIGHT2=!1,this.POINTLIGHT3=!1,this.SHADOW0=!1,this.SHADOW1=!1,this.SHADOW2=!1,this.SHADOW3=!1,this.SHADOWS=!1,this.SHADOWESM0=!1,this.SHADOWESM1=!1,this.SHADOWESM2=!1,this.SHADOWESM3=!1,this.SHADOWPOISSON0=!1,this.SHADOWPOISSON1=!1,this.SHADOWPOISSON2=!1,this.SHADOWPOISSON3=!1,this.SHADOWPCF0=!1,this.SHADOWPCF1=!1,this.SHADOWPCF2=!1,this.SHADOWPCF3=!1,this.SHADOWPCSS0=!1,this.SHADOWPCSS1=!1,this.SHADOWPCSS2=!1,this.SHADOWPCSS3=!1,this.NORMAL=!1,this.UV1=!1,this.UV2=!1,this.NUM_BONE_INFLUENCERS=0,this.BonesPerMesh=0,this.INSTANCES=!1,this.LIGHTING=!1,this.IMAGEPROCESSINGPOSTPROCESS=!1,this.SKIPFINALCOLORCLAMP=!1,this.rebuild()}}class Re extends xe{constructor(e,t){super(e,t),this.diffuseColor=new y(1,1,1),this._disableLighting=!1,this._maxSimultaneousLights=4}needAlphaBlending(){return this.alpha<1}needAlphaBlendingForMesh(e){return this.needAlphaBlending()||e.visibility<1}needAlphaTesting(){return!1}getAlphaTestTexture(){return null}isReadyForSubMesh(e,t,s){if(this.isFrozen&&t.effect&&t.effect._wasPreviouslyReady&&t.effect._wasPreviouslyUsingInstances===s)return!0;t.materialDefines||(t.materialDefines=new Rn);const i=t.materialDefines,r=this.getScene();if(this._isReadyForSubMesh(t))return!0;const n=r.getEngine();if(i._areTexturesDirty&&(i._needUVs=!1,r.texturesEnabled&&this._diffuseTexture&&j.DiffuseTextureEnabled))if(this._diffuseTexture.isReady())i._needUVs=!0,i.DIFFUSE=!0;else return!1;if(_.PrepareDefinesForMisc(e,r,!1,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(e),i),i._needNormals=!0,_.PrepareDefinesForLights(r,e,i,!1,this._maxSimultaneousLights,this._disableLighting),_.PrepareDefinesForFrameBoundValues(r,n,this,i,!!s),i.LIGHTING=!this._disableLighting,_.PrepareDefinesForAttributes(e,i,!0,!0),i.isDirty){i.markAsProcessed(),r.resetCachedMaterial();const o=new be;i.FOG&&o.addFallback(1,"FOG"),_.HandleFallbacksForShadows(i,o),i.NUM_BONE_INFLUENCERS>0&&o.addCPUSkinningFallback(0,e),i.IMAGEPROCESSINGPOSTPROCESS=r.imageProcessingConfiguration.applyByPostProcess;const a=[p.PositionKind];i.NORMAL&&a.push(p.NormalKind),i.UV1&&a.push(p.UVKind),i.UV2&&a.push(p.UV2Kind),_.PrepareAttributesForBones(a,e,i,o),_.PrepareAttributesForInstances(a,i);const f="normal",c=i.toString(),u=["world","view","viewProjection","vEyePosition","vLightsType","vDiffuseColor","vFogInfos","vFogColor","pointSize","vDiffuseInfos","mBones","diffuseMatrix"],d=["diffuseSampler"],m=[];Pe(u),_.PrepareUniformsAndSamplersList({uniformsNames:u,uniformBuffersNames:m,samplers:d,defines:i,maxSimultaneousLights:4}),t.setEffect(r.getEngine().createEffect(f,{attributes:a,uniformsNames:u,uniformBuffersNames:m,samplers:d,defines:c,fallbacks:o,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:4}},n),i,this._materialContext)}return!t.effect||!t.effect.isReady()?!1:(i._renderId=r.getRenderId(),t.effect._wasPreviouslyReady=!0,t.effect._wasPreviouslyUsingInstances=!!s,!0)}bindForSubMesh(e,t,s){const i=this.getScene(),r=s.materialDefines;if(!r)return;const n=s.effect;n&&(this._activeEffect=n,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",i.getTransformMatrix()),_.BindBonesParameters(t,this._activeEffect),this._mustRebind(i,n)&&(this.diffuseTexture&&j.DiffuseTextureEnabled&&(this._activeEffect.setTexture("diffuseSampler",this.diffuseTexture),this._activeEffect.setFloat2("vDiffuseInfos",this.diffuseTexture.coordinatesIndex,this.diffuseTexture.level),this._activeEffect.setMatrix("diffuseMatrix",this.diffuseTexture.getTextureMatrix())),Oe(n,this,i),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),i.bindEyePosition(n)),this._activeEffect.setColor4("vDiffuseColor",this.diffuseColor,this.alpha*t.visibility),i.lightsEnabled&&!this.disableLighting&&_.BindLights(i,t,this._activeEffect,r),i.fogEnabled&&t.applyFog&&i.fogMode!==ve.FOGMODE_NONE&&this._activeEffect.setMatrix("view",i.getViewMatrix()),_.BindFogParameters(i,t,this._activeEffect),this._afterBind(t,this._activeEffect))}getAnimatables(){const e=[];return this.diffuseTexture&&this.diffuseTexture.animations&&this.diffuseTexture.animations.length>0&&e.push(this.diffuseTexture),e}getActiveTextures(){const e=super.getActiveTextures();return this._diffuseTexture&&e.push(this._diffuseTexture),e}hasTexture(e){return!!(super.hasTexture(e)||this.diffuseTexture===e)}dispose(e){this.diffuseTexture&&this.diffuseTexture.dispose(),super.dispose(e)}clone(e){return H.Clone(()=>new Re(e,this.getScene()),this)}serialize(){const e=super.serialize();return e.customType="BABYLON.NormalMaterial",e}getClassName(){return"NormalMaterial"}static Parse(e,t,s){return H.Parse(()=>new Re(e.name,t),e,t,s)}}h([R("diffuseTexture")],Re.prototype,"_diffuseTexture",void 0);h([P("_markAllSubMeshesAsTexturesDirty")],Re.prototype,"diffuseTexture",void 0);h([oe()],Re.prototype,"diffuseColor",void 0);h([A("disableLighting")],Re.prototype,"_disableLighting",void 0);h([P("_markAllSubMeshesAsLightsDirty")],Re.prototype,"disableLighting",void 0);h([A("maxSimultaneousLights")],Re.prototype,"_maxSimultaneousLights",void 0);h([P("_markAllSubMeshesAsLightsDirty")],Re.prototype,"maxSimultaneousLights",void 0);_e("BABYLON.NormalMaterial",Re);const wn="shadowOnlyPixelShader",Dn=`precision highp float;uniform vec4 vEyePosition;uniform float alpha;uniform vec3 shadowColor;varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#include<helperFunctions>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#include<clipPlaneFragmentDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=vec3(1.0,1.0,1.0);
#endif
vec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float glossiness=0.;float aggShadow=0.;float numLights=0.;
#include<lightFragment>[0..1]
vec4 color=vec4(shadowColor,(1.0-clamp(shadow,0.,1.))*alpha);
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}`;X.ShadersStore[wn]=Dn;const Un="shadowOnlyVertexShader",Vn=`precision highp float;attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
uniform mat4 view;uniform mat4 viewProjection;
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);
#ifdef NORMAL
vNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));
#endif
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;X.ShadersStore[Un]=Vn;class Bn extends Ee{constructor(){super(),this.CLIPPLANE=!1,this.CLIPPLANE2=!1,this.CLIPPLANE3=!1,this.CLIPPLANE4=!1,this.CLIPPLANE5=!1,this.CLIPPLANE6=!1,this.POINTSIZE=!1,this.FOG=!1,this.NORMAL=!1,this.NUM_BONE_INFLUENCERS=0,this.BonesPerMesh=0,this.INSTANCES=!1,this.IMAGEPROCESSINGPOSTPROCESS=!1,this.SKIPFINALCOLORCLAMP=!1,this.rebuild()}}class gt extends xe{constructor(e,t){super(e,t),this._needAlphaBlending=!0,this.shadowColor=y.Black()}needAlphaBlending(){return this._needAlphaBlending}needAlphaTesting(){return!1}getAlphaTestTexture(){return null}get activeLight(){return this._activeLight}set activeLight(e){this._activeLight=e}_getFirstShadowLightForMesh(e){for(const t of e.lightSources)if(t.shadowEnabled)return t;return null}isReadyForSubMesh(e,t,s){var i;if(this.isFrozen&&t.effect&&t.effect._wasPreviouslyReady&&t.effect._wasPreviouslyUsingInstances===s)return!0;t.materialDefines||(t.materialDefines=new Bn);const r=t.materialDefines,n=this.getScene();if(this._isReadyForSubMesh(t))return!0;const o=n.getEngine();if(this._activeLight){for(const f of e.lightSources)if(f.shadowEnabled){if(this._activeLight===f)break;const c=e.lightSources.indexOf(this._activeLight);c!==-1&&(e.lightSources.splice(c,1),e.lightSources.splice(0,0,this._activeLight));break}}_.PrepareDefinesForFrameBoundValues(n,o,this,r,!!s),_.PrepareDefinesForMisc(e,n,!1,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(e),r),r._needNormals=_.PrepareDefinesForLights(n,e,r,!1,1);const a=(i=this._getFirstShadowLightForMesh(e))===null||i===void 0?void 0:i.getShadowGenerator();if(this._needAlphaBlending=!0,a&&a.getClassName&&a.getClassName()==="CascadedShadowGenerator"){const f=a;this._needAlphaBlending=!f.autoCalcDepthBounds}if(_.PrepareDefinesForAttributes(e,r,!1,!0),r.isDirty){r.markAsProcessed(),n.resetCachedMaterial();const f=new be;r.FOG&&f.addFallback(1,"FOG"),_.HandleFallbacksForShadows(r,f,1),r.NUM_BONE_INFLUENCERS>0&&f.addCPUSkinningFallback(0,e),r.IMAGEPROCESSINGPOSTPROCESS=n.imageProcessingConfiguration.applyByPostProcess;const c=[p.PositionKind];r.NORMAL&&c.push(p.NormalKind),_.PrepareAttributesForBones(c,e,r,f),_.PrepareAttributesForInstances(c,r);const u="shadowOnly",d=r.toString(),m=["world","view","viewProjection","vEyePosition","vLightsType","vFogInfos","vFogColor","pointSize","alpha","shadowColor","mBones"],g=[],T=[];Pe(m),_.PrepareUniformsAndSamplersList({uniformsNames:m,uniformBuffersNames:T,samplers:g,defines:r,maxSimultaneousLights:1}),t.setEffect(n.getEngine().createEffect(u,{attributes:c,uniformsNames:m,uniformBuffersNames:T,samplers:g,defines:d,fallbacks:f,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:1}},o),r,this._materialContext)}return!t.effect||!t.effect.isReady()?!1:(r._renderId=n.getRenderId(),t.effect._wasPreviouslyReady=!0,t.effect._wasPreviouslyUsingInstances=!!s,!0)}bindForSubMesh(e,t,s){const i=this.getScene(),r=s.materialDefines;if(!r)return;const n=s.effect;if(n){if(this._activeEffect=n,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",i.getTransformMatrix()),_.BindBonesParameters(t,this._activeEffect),this._mustRebind(i,n)&&(Oe(n,this,i),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),this._activeEffect.setFloat("alpha",this.alpha),this._activeEffect.setColor3("shadowColor",this.shadowColor),i.bindEyePosition(n)),i.lightsEnabled){_.BindLights(i,t,this._activeEffect,r,1);const o=this._getFirstShadowLightForMesh(t);o&&(o._renderId=-1)}(i.fogEnabled&&t.applyFog&&i.fogMode!==ve.FOGMODE_NONE||r.SHADOWCSM0)&&this._activeEffect.setMatrix("view",i.getViewMatrix()),_.BindFogParameters(i,t,this._activeEffect),this._afterBind(t,this._activeEffect)}}clone(e){return H.Clone(()=>new gt(e,this.getScene()),this)}serialize(){const e=super.serialize();return e.customType="BABYLON.ShadowOnlyMaterial",e}getClassName(){return"ShadowOnlyMaterial"}static Parse(e,t,s){return H.Parse(()=>new gt(e.name,t),e,t,s)}}_e("BABYLON.ShadowOnlyMaterial",gt);const Gn="simplePixelShader",kn=`precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
#include<helperFunctions>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#ifdef DIFFUSE
varying vec2 vDiffuseUV;uniform sampler2D diffuseSampler;uniform vec2 vDiffuseInfos;
#endif
#include<clipPlaneFragmentDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(1.,1.,1.,1.);vec3 diffuseColor=vDiffuseColor.rgb;float alpha=vDiffuseColor.a;
#ifdef DIFFUSE
baseColor=texture2D(diffuseSampler,vDiffuseUV);
#ifdef ALPHATEST
if (baseColor.a<0.4)
discard;
#endif
#include<depthPrePass>
baseColor.rgb*=vDiffuseInfos.y;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
baseColor.rgb*=vColor.rgb;
#endif
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=vec3(1.0,1.0,1.0);
#endif
vec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float glossiness=0.;float aggShadow=0.;float numLights=0.;
#ifdef SPECULARTERM
vec3 specularBase=vec3(0.,0.,0.);
#endif 
#include<lightFragment>[0..maxSimultaneousLights]
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
vec3 finalDiffuse=clamp(diffuseBase*diffuseColor,0.0,1.0)*baseColor.rgb;vec4 color=vec4(finalDiffuse,alpha);
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}`;X.ShadersStore[Gn]=kn;const $n="simpleVertexShader",zn=`precision highp float;attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
uniform mat4 view;uniform mat4 viewProjection;
#ifdef DIFFUSE
varying vec2 vDiffuseUV;uniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);
#ifdef NORMAL
vNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));
#endif
#ifndef UV1
vec2 uv=vec2(0.,0.);
#endif
#ifndef UV2
vec2 uv2=vec2(0.,0.);
#endif
#ifdef DIFFUSE
if (vDiffuseInfos.x==0.)
{vDiffuseUV=vec2(diffuseMatrix*vec4(uv,1.0,0.0));}
else
{vDiffuseUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));}
#endif
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;X.ShadersStore[$n]=zn;class Wn extends Ee{constructor(){super(),this.DIFFUSE=!1,this.CLIPPLANE=!1,this.CLIPPLANE2=!1,this.CLIPPLANE3=!1,this.CLIPPLANE4=!1,this.CLIPPLANE5=!1,this.CLIPPLANE6=!1,this.ALPHATEST=!1,this.DEPTHPREPASS=!1,this.POINTSIZE=!1,this.FOG=!1,this.NORMAL=!1,this.UV1=!1,this.UV2=!1,this.VERTEXCOLOR=!1,this.VERTEXALPHA=!1,this.NUM_BONE_INFLUENCERS=0,this.BonesPerMesh=0,this.INSTANCES=!1,this.INSTANCESCOLOR=!1,this.IMAGEPROCESSINGPOSTPROCESS=!1,this.SKIPFINALCOLORCLAMP=!1,this.rebuild()}}class we extends xe{constructor(e,t){super(e,t),this.diffuseColor=new y(1,1,1),this._disableLighting=!1,this._maxSimultaneousLights=4}needAlphaBlending(){return this.alpha<1}needAlphaTesting(){return!1}getAlphaTestTexture(){return null}isReadyForSubMesh(e,t,s){if(this.isFrozen&&t.effect&&t.effect._wasPreviouslyReady&&t.effect._wasPreviouslyUsingInstances===s)return!0;t.materialDefines||(t.materialDefines=new Wn);const i=t.materialDefines,r=this.getScene();if(this._isReadyForSubMesh(t))return!0;const n=r.getEngine();if(i._areTexturesDirty&&(i._needUVs=!1,r.texturesEnabled&&this._diffuseTexture&&j.DiffuseTextureEnabled))if(this._diffuseTexture.isReady())i._needUVs=!0,i.DIFFUSE=!0;else return!1;if(_.PrepareDefinesForMisc(e,r,!1,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(e),i),i._needNormals=_.PrepareDefinesForLights(r,e,i,!1,this._maxSimultaneousLights,this._disableLighting),_.PrepareDefinesForFrameBoundValues(r,n,this,i,!!s),_.PrepareDefinesForAttributes(e,i,!0,!0),i.isDirty){i.markAsProcessed(),r.resetCachedMaterial();const o=new be;i.FOG&&o.addFallback(1,"FOG"),_.HandleFallbacksForShadows(i,o,this.maxSimultaneousLights),i.NUM_BONE_INFLUENCERS>0&&o.addCPUSkinningFallback(0,e),i.IMAGEPROCESSINGPOSTPROCESS=r.imageProcessingConfiguration.applyByPostProcess;const a=[p.PositionKind];i.NORMAL&&a.push(p.NormalKind),i.UV1&&a.push(p.UVKind),i.UV2&&a.push(p.UV2Kind),i.VERTEXCOLOR&&a.push(p.ColorKind),_.PrepareAttributesForBones(a,e,i,o),_.PrepareAttributesForInstances(a,i);const f="simple",c=i.toString(),u=["world","view","viewProjection","vEyePosition","vLightsType","vDiffuseColor","vFogInfos","vFogColor","pointSize","vDiffuseInfos","mBones","diffuseMatrix"],d=["diffuseSampler"],m=[];Pe(u),_.PrepareUniformsAndSamplersList({uniformsNames:u,uniformBuffersNames:m,samplers:d,defines:i,maxSimultaneousLights:this.maxSimultaneousLights}),t.setEffect(r.getEngine().createEffect(f,{attributes:a,uniformsNames:u,uniformBuffersNames:m,samplers:d,defines:c,fallbacks:o,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:this._maxSimultaneousLights-1}},n),i,this._materialContext)}return!t.effect||!t.effect.isReady()?!1:(i._renderId=r.getRenderId(),t.effect._wasPreviouslyReady=!0,t.effect._wasPreviouslyUsingInstances=!!s,!0)}bindForSubMesh(e,t,s){const i=this.getScene(),r=s.materialDefines;if(!r)return;const n=s.effect;n&&(this._activeEffect=n,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",i.getTransformMatrix()),_.BindBonesParameters(t,this._activeEffect),this._mustRebind(i,n)&&(this._diffuseTexture&&j.DiffuseTextureEnabled&&(this._activeEffect.setTexture("diffuseSampler",this._diffuseTexture),this._activeEffect.setFloat2("vDiffuseInfos",this._diffuseTexture.coordinatesIndex,this._diffuseTexture.level),this._activeEffect.setMatrix("diffuseMatrix",this._diffuseTexture.getTextureMatrix())),Oe(n,this,i),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),i.bindEyePosition(n)),this._activeEffect.setColor4("vDiffuseColor",this.diffuseColor,this.alpha*t.visibility),i.lightsEnabled&&!this.disableLighting&&_.BindLights(i,t,this._activeEffect,r,this.maxSimultaneousLights),i.fogEnabled&&t.applyFog&&i.fogMode!==ve.FOGMODE_NONE&&this._activeEffect.setMatrix("view",i.getViewMatrix()),_.BindFogParameters(i,t,this._activeEffect),this._afterBind(t,this._activeEffect))}getAnimatables(){const e=[];return this._diffuseTexture&&this._diffuseTexture.animations&&this._diffuseTexture.animations.length>0&&e.push(this._diffuseTexture),e}getActiveTextures(){const e=super.getActiveTextures();return this._diffuseTexture&&e.push(this._diffuseTexture),e}hasTexture(e){return!!(super.hasTexture(e)||this.diffuseTexture===e)}dispose(e){this._diffuseTexture&&this._diffuseTexture.dispose(),super.dispose(e)}clone(e){return H.Clone(()=>new we(e,this.getScene()),this)}serialize(){const e=super.serialize();return e.customType="BABYLON.SimpleMaterial",e}getClassName(){return"SimpleMaterial"}static Parse(e,t,s){return H.Parse(()=>new we(e.name,t),e,t,s)}}h([R("diffuseTexture")],we.prototype,"_diffuseTexture",void 0);h([P("_markAllSubMeshesAsTexturesDirty")],we.prototype,"diffuseTexture",void 0);h([oe("diffuse")],we.prototype,"diffuseColor",void 0);h([A("disableLighting")],we.prototype,"_disableLighting",void 0);h([P("_markAllSubMeshesAsLightsDirty")],we.prototype,"disableLighting",void 0);h([A("maxSimultaneousLights")],we.prototype,"_maxSimultaneousLights",void 0);h([P("_markAllSubMeshesAsLightsDirty")],we.prototype,"maxSimultaneousLights",void 0);_e("BABYLON.SimpleMaterial",we);const Hn="skyPixelShader",Xn=`precision highp float;varying vec3 vPositionW;
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<clipPlaneFragmentDeclaration>
uniform vec3 cameraPosition;uniform vec3 cameraOffset;uniform vec3 up;uniform float luminance;uniform float turbidity;uniform float rayleigh;uniform float mieCoefficient;uniform float mieDirectionalG;uniform vec3 sunPosition;
#include<fogFragmentDeclaration>
const float e=2.71828182845904523536028747135266249775724709369995957;const float pi=3.141592653589793238462643383279502884197169;const float n=1.0003;const float N=2.545E25;const float pn=0.035;const vec3 lambda=vec3(680E-9,550E-9,450E-9);const vec3 K=vec3(0.686,0.678,0.666);const float v=4.0;const float rayleighZenithLength=8.4E3;const float mieZenithLength=1.25E3;const float EE=1000.0;const float sunAngularDiameterCos=0.999956676946448443553574619906976478926848692873900859324;const float cutoffAngle=pi/1.95;const float steepness=1.5;vec3 totalRayleigh(vec3 lambda)
{return (8.0*pow(pi,3.0)*pow(pow(n,2.0)-1.0,2.0)*(6.0+3.0*pn))/(3.0*N*pow(lambda,vec3(4.0))*(6.0-7.0*pn));}
vec3 simplifiedRayleigh()
{return 0.0005/vec3(94,40,18);}
float rayleighPhase(float cosTheta)
{ 
return (3.0/(16.0*pi))*(1.0+pow(cosTheta,2.0));}
vec3 totalMie(vec3 lambda,vec3 K,float T)
{float c=(0.2*T )*10E-18;return 0.434*c*pi*pow((2.0*pi)/lambda,vec3(v-2.0))*K;}
float hgPhase(float cosTheta,float g)
{return (1.0/(4.0*pi))*((1.0-pow(g,2.0))/pow(1.0-2.0*g*cosTheta+pow(g,2.0),1.5));}
float sunIntensity(float zenithAngleCos)
{return EE*max(0.0,1.0-exp((-(cutoffAngle-acos(zenithAngleCos))/steepness)));}
float A=0.15;float B=0.50;float C=0.10;float D=0.20;float EEE=0.02;float F=0.30;float W=1000.0;vec3 Uncharted2Tonemap(vec3 x)
{return ((x*(A*x+C*B)+D*EEE)/(x*(A*x+B)+D*F))-EEE/F;}
#if DITHER
#include<helperFunctions>
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
/**
*--------------------------------------------------------------------------------------------------
* Sky Color
*--------------------------------------------------------------------------------------------------
*/
float sunfade=1.0-clamp(1.0-exp((sunPosition.y/450000.0)),0.0,1.0);float rayleighCoefficient=rayleigh-(1.0*(1.0-sunfade));vec3 sunDirection=normalize(sunPosition);float sunE=sunIntensity(dot(sunDirection,up));vec3 betaR=simplifiedRayleigh()*rayleighCoefficient;vec3 betaM=totalMie(lambda,K,turbidity)*mieCoefficient;float zenithAngle=acos(max(0.0,dot(up,normalize(vPositionW-cameraPosition+cameraOffset))));float sR=rayleighZenithLength/(cos(zenithAngle)+0.15*pow(93.885-((zenithAngle*180.0)/pi),-1.253));float sM=mieZenithLength/(cos(zenithAngle)+0.15*pow(93.885-((zenithAngle*180.0)/pi),-1.253));vec3 Fex=exp(-(betaR*sR+betaM*sM));float cosTheta=dot(normalize(vPositionW-cameraPosition),sunDirection);float rPhase=rayleighPhase(cosTheta*0.5+0.5);vec3 betaRTheta=betaR*rPhase;float mPhase=hgPhase(cosTheta,mieDirectionalG);vec3 betaMTheta=betaM*mPhase;vec3 Lin=pow(sunE*((betaRTheta+betaMTheta)/(betaR+betaM))*(1.0-Fex),vec3(1.5));Lin*=mix(vec3(1.0),pow(sunE*((betaRTheta+betaMTheta)/(betaR+betaM))*Fex,vec3(1.0/2.0)),clamp(pow(1.0-dot(up,sunDirection),5.0),0.0,1.0));vec3 direction=normalize(vPositionW-cameraPosition);float theta=acos(direction.y);float phi=atan(direction.z,direction.x);vec2 uv=vec2(phi,theta)/vec2(2.0*pi,pi)+vec2(0.5,0.0);vec3 L0=vec3(0.1)*Fex;float sundisk=smoothstep(sunAngularDiameterCos,sunAngularDiameterCos+0.00002,cosTheta);L0+=(sunE*19000.0*Fex)*sundisk;vec3 whiteScale=1.0/Uncharted2Tonemap(vec3(W));vec3 texColor=(Lin+L0);texColor*=0.04 ;texColor+=vec3(0.0,0.001,0.0025)*0.3;float g_fMaxLuminance=1.0;float fLumScaled=0.1/luminance; 
float fLumCompressed=(fLumScaled*(1.0+(fLumScaled/(g_fMaxLuminance*g_fMaxLuminance))))/(1.0+fLumScaled); 
float ExposureBias=fLumCompressed;vec3 curr=Uncharted2Tonemap((log2(2.0/pow(luminance,4.0)))*texColor);vec3 retColor=curr*whiteScale;/**
*--------------------------------------------------------------------------------------------------
* Sky Color
*--------------------------------------------------------------------------------------------------
*/
float alpha=1.0;
#ifdef VERTEXCOLOR
retColor.rgb*=vColor.rgb;
#endif
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
#if DITHER
retColor.rgb+=dither(gl_FragCoord.xy,0.5);
#endif
vec4 color=clamp(vec4(retColor.rgb,alpha),0.0,1.0);
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}
`;X.ShadersStore[Hn]=Xn;const jn="skyVertexShader",Kn=`precision highp float;attribute vec3 position;
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
uniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;
#ifdef VERTEXCOLOR
varying vec4 vColor;
#endif
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
gl_Position=viewProjection*world*vec4(position,1.0);vec4 worldPos=world*vec4(position,1.0);vPositionW=vec3(worldPos);
#include<clipPlaneVertex>
#include<fogVertex>
#ifdef VERTEXCOLOR
vColor=color;
#endif
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;X.ShadersStore[jn]=Kn;class Yn extends Ee{constructor(){super(),this.CLIPPLANE=!1,this.CLIPPLANE2=!1,this.CLIPPLANE3=!1,this.CLIPPLANE4=!1,this.CLIPPLANE5=!1,this.CLIPPLANE6=!1,this.POINTSIZE=!1,this.FOG=!1,this.VERTEXCOLOR=!1,this.VERTEXALPHA=!1,this.IMAGEPROCESSINGPOSTPROCESS=!1,this.SKIPFINALCOLORCLAMP=!1,this.DITHER=!1,this.rebuild()}}class ue extends xe{constructor(e,t){super(e,t),this.luminance=1,this.turbidity=10,this.rayleigh=2,this.mieCoefficient=.005,this.mieDirectionalG=.8,this.distance=500,this.inclination=.49,this.azimuth=.25,this.sunPosition=new x(0,100,0),this.useSunPosition=!1,this.cameraOffset=x.Zero(),this.up=x.Up(),this.dithering=!1,this._cameraPosition=x.Zero(),this._skyOrientation=new he}needAlphaBlending(){return this.alpha<1}needAlphaTesting(){return!1}getAlphaTestTexture(){return null}isReadyForSubMesh(e,t){if(this.isFrozen&&t.effect&&t.effect._wasPreviouslyReady)return!0;t.materialDefines||(t.materialDefines=new Yn);const s=t.materialDefines,i=this.getScene();if(this._isReadyForSubMesh(t))return!0;if(_.PrepareDefinesForMisc(e,i,!1,this.pointsCloud,this.fogEnabled,!1,s),_.PrepareDefinesForAttributes(e,s,!0,!1),s.IMAGEPROCESSINGPOSTPROCESS!==i.imageProcessingConfiguration.applyByPostProcess&&s.markAsMiscDirty(),s.DITHER!==this.dithering&&s.markAsMiscDirty(),s.isDirty){s.markAsProcessed(),i.resetCachedMaterial();const r=new be;s.FOG&&r.addFallback(1,"FOG"),s.IMAGEPROCESSINGPOSTPROCESS=i.imageProcessingConfiguration.applyByPostProcess,s.DITHER=this.dithering;const n=[p.PositionKind];s.VERTEXCOLOR&&n.push(p.ColorKind);const o="sky",a=["world","viewProjection","view","vFogInfos","vFogColor","pointSize","luminance","turbidity","rayleigh","mieCoefficient","mieDirectionalG","sunPosition","cameraPosition","cameraOffset","up"];Pe(a);const f=s.toString();t.setEffect(i.getEngine().createEffect(o,n,a,[],f,r,this.onCompiled,this.onError),s,this._materialContext)}return!t.effect||!t.effect.isReady()?!1:(s._renderId=i.getRenderId(),t.effect._wasPreviouslyReady=!0,!0)}bindForSubMesh(e,t,s){const i=this.getScene();if(!s.materialDefines)return;const n=s.effect;if(!n)return;this._activeEffect=n,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",i.getTransformMatrix()),this._mustRebind(i,n)&&(Oe(n,this,i),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize)),i.fogEnabled&&t.applyFog&&i.fogMode!==ve.FOGMODE_NONE&&this._activeEffect.setMatrix("view",i.getViewMatrix()),_.BindFogParameters(i,t,this._activeEffect);const o=i.activeCamera;if(o){const a=o.getWorldMatrix();this._cameraPosition.x=a.m[12],this._cameraPosition.y=a.m[13],this._cameraPosition.z=a.m[14],this._activeEffect.setVector3("cameraPosition",this._cameraPosition)}if(this._activeEffect.setVector3("cameraOffset",this.cameraOffset),this._activeEffect.setVector3("up",this.up),this.luminance>0&&this._activeEffect.setFloat("luminance",this.luminance),this._activeEffect.setFloat("turbidity",this.turbidity),this._activeEffect.setFloat("rayleigh",this.rayleigh),this._activeEffect.setFloat("mieCoefficient",this.mieCoefficient),this._activeEffect.setFloat("mieDirectionalG",this.mieDirectionalG),!this.useSunPosition){const a=Math.PI*(this.inclination-.5),f=2*Math.PI*(this.azimuth-.5);this.sunPosition.x=this.distance*Math.cos(f)*Math.cos(a),this.sunPosition.y=this.distance*Math.sin(-a),this.sunPosition.z=this.distance*Math.sin(f)*Math.cos(a),he.FromUnitVectorsToRef(x.UpReadOnly,this.up,this._skyOrientation),this.sunPosition.rotateByQuaternionToRef(this._skyOrientation,this.sunPosition)}this._activeEffect.setVector3("sunPosition",this.sunPosition),this._afterBind(t,this._activeEffect)}getAnimatables(){return[]}dispose(e){super.dispose(e)}clone(e){return H.Clone(()=>new ue(e,this.getScene()),this)}serialize(){const e=super.serialize();return e.customType="BABYLON.SkyMaterial",e}getClassName(){return"SkyMaterial"}static Parse(e,t,s){return H.Parse(()=>new ue(e.name,t),e,t,s)}}h([A()],ue.prototype,"luminance",void 0);h([A()],ue.prototype,"turbidity",void 0);h([A()],ue.prototype,"rayleigh",void 0);h([A()],ue.prototype,"mieCoefficient",void 0);h([A()],ue.prototype,"mieDirectionalG",void 0);h([A()],ue.prototype,"distance",void 0);h([A()],ue.prototype,"inclination",void 0);h([A()],ue.prototype,"azimuth",void 0);h([ct()],ue.prototype,"sunPosition",void 0);h([A()],ue.prototype,"useSunPosition",void 0);h([ct()],ue.prototype,"cameraOffset",void 0);h([ct()],ue.prototype,"up",void 0);h([A()],ue.prototype,"dithering",void 0);_e("BABYLON.SkyMaterial",ue);const Zn="terrainPixelShader",qn=`precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;
#ifdef SPECULARTERM
uniform vec4 vSpecularColor;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
#include<helperFunctions>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#ifdef DIFFUSE
varying vec2 vTextureUV;uniform sampler2D textureSampler;uniform vec2 vTextureInfos;uniform sampler2D diffuse1Sampler;uniform sampler2D diffuse2Sampler;uniform sampler2D diffuse3Sampler;uniform vec2 diffuse1Infos;uniform vec2 diffuse2Infos;uniform vec2 diffuse3Infos;
#endif
#ifdef BUMP
uniform sampler2D bump1Sampler;uniform sampler2D bump2Sampler;uniform sampler2D bump3Sampler;
#endif
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#include<clipPlaneFragmentDeclaration>
#include<fogFragmentDeclaration>
#ifdef BUMP
#extension GL_OES_standard_derivatives : enable
mat3 cotangent_frame(vec3 normal,vec3 p,vec2 uv)
{vec3 dp1=dFdx(p);vec3 dp2=dFdy(p);vec2 duv1=dFdx(uv);vec2 duv2=dFdy(uv);vec3 dp2perp=cross(dp2,normal);vec3 dp1perp=cross(normal,dp1);vec3 tangent=dp2perp*duv1.x+dp1perp*duv2.x;vec3 binormal=dp2perp*duv1.y+dp1perp*duv2.y;float invmax=inversesqrt(max(dot(tangent,tangent),dot(binormal,binormal)));return mat3(tangent*invmax,binormal*invmax,normal);}
vec3 perturbNormal(vec3 viewDir,vec3 mixColor)
{vec3 bump1Color=texture2D(bump1Sampler,vTextureUV*diffuse1Infos).xyz;vec3 bump2Color=texture2D(bump2Sampler,vTextureUV*diffuse2Infos).xyz;vec3 bump3Color=texture2D(bump3Sampler,vTextureUV*diffuse3Infos).xyz;bump1Color.rgb*=mixColor.r;bump2Color.rgb=mix(bump1Color.rgb,bump2Color.rgb,mixColor.g);vec3 map=mix(bump2Color.rgb,bump3Color.rgb,mixColor.b);map=map*255./127.-128./127.;mat3 TBN=cotangent_frame(vNormalW*vTextureInfos.y,-viewDir,vTextureUV);return normalize(TBN*map);}
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(1.,1.,1.,1.);vec3 diffuseColor=vDiffuseColor.rgb;
#ifdef SPECULARTERM
float glossiness=vSpecularColor.a;vec3 specularColor=vSpecularColor.rgb;
#else
float glossiness=0.;
#endif
float alpha=vDiffuseColor.a;
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=vec3(1.0,1.0,1.0);
#endif
#ifdef DIFFUSE
baseColor=texture2D(textureSampler,vTextureUV);
#if defined(BUMP) && defined(DIFFUSE)
normalW=perturbNormal(viewDirectionW,baseColor.rgb);
#endif
#ifdef ALPHATEST
if (baseColor.a<0.4)
discard;
#endif
#include<depthPrePass>
baseColor.rgb*=vTextureInfos.y;vec4 diffuse1Color=texture2D(diffuse1Sampler,vTextureUV*diffuse1Infos);vec4 diffuse2Color=texture2D(diffuse2Sampler,vTextureUV*diffuse2Infos);vec4 diffuse3Color=texture2D(diffuse3Sampler,vTextureUV*diffuse3Infos);diffuse1Color.rgb*=baseColor.r;diffuse2Color.rgb=mix(diffuse1Color.rgb,diffuse2Color.rgb,baseColor.g);baseColor.rgb=mix(diffuse2Color.rgb,diffuse3Color.rgb,baseColor.b);
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
baseColor.rgb*=vColor.rgb;
#endif
vec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float aggShadow=0.;float numLights=0.;
#ifdef SPECULARTERM
vec3 specularBase=vec3(0.,0.,0.);
#endif
#include<lightFragment>[0..maxSimultaneousLights]
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
#ifdef SPECULARTERM
vec3 finalSpecular=specularBase*specularColor;
#else
vec3 finalSpecular=vec3(0.0);
#endif
vec3 finalDiffuse=clamp(diffuseBase*diffuseColor*baseColor.rgb,0.0,1.0);vec4 color=vec4(finalDiffuse+finalSpecular,alpha);
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}
`;X.ShadersStore[Zn]=qn;const Jn="terrainVertexShader",Qn=`precision highp float;attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
uniform mat4 view;uniform mat4 viewProjection;
#ifdef DIFFUSE
varying vec2 vTextureUV;uniform mat4 textureMatrix;uniform vec2 vTextureInfos;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);
#ifdef NORMAL
vNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));
#endif
#ifndef UV1
vec2 uv=vec2(0.,0.);
#endif
#ifndef UV2
vec2 uv2=vec2(0.,0.);
#endif
#ifdef DIFFUSE
if (vTextureInfos.x==0.)
{vTextureUV=vec2(textureMatrix*vec4(uv,1.0,0.0));}
else
{vTextureUV=vec2(textureMatrix*vec4(uv2,1.0,0.0));}
#endif
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;X.ShadersStore[Jn]=Qn;class eo extends Ee{constructor(){super(),this.DIFFUSE=!1,this.BUMP=!1,this.CLIPPLANE=!1,this.CLIPPLANE2=!1,this.CLIPPLANE3=!1,this.CLIPPLANE4=!1,this.CLIPPLANE5=!1,this.CLIPPLANE6=!1,this.ALPHATEST=!1,this.DEPTHPREPASS=!1,this.POINTSIZE=!1,this.FOG=!1,this.SPECULARTERM=!1,this.NORMAL=!1,this.UV1=!1,this.UV2=!1,this.VERTEXCOLOR=!1,this.VERTEXALPHA=!1,this.NUM_BONE_INFLUENCERS=0,this.BonesPerMesh=0,this.INSTANCES=!1,this.INSTANCESCOLOR=!1,this.IMAGEPROCESSINGPOSTPROCESS=!1,this.SKIPFINALCOLORCLAMP=!1,this.rebuild()}}class J extends xe{constructor(e,t){super(e,t),this.diffuseColor=new y(1,1,1),this.specularColor=new y(0,0,0),this.specularPower=64,this._disableLighting=!1,this._maxSimultaneousLights=4}needAlphaBlending(){return this.alpha<1}needAlphaTesting(){return!1}getAlphaTestTexture(){return null}isReadyForSubMesh(e,t,s){if(this.isFrozen&&t.effect&&t.effect._wasPreviouslyReady&&t.effect._wasPreviouslyUsingInstances===s)return!0;t.materialDefines||(t.materialDefines=new eo);const i=t.materialDefines,r=this.getScene();if(this._isReadyForSubMesh(t))return!0;const n=r.getEngine();if(r.texturesEnabled){if(!this.mixTexture||!this.mixTexture.isReady())return!1;if(i._needUVs=!0,j.DiffuseTextureEnabled){if(!this.diffuseTexture1||!this.diffuseTexture1.isReady()||!this.diffuseTexture2||!this.diffuseTexture2.isReady()||!this.diffuseTexture3||!this.diffuseTexture3.isReady())return!1;i.DIFFUSE=!0}if(this.bumpTexture1&&this.bumpTexture2&&this.bumpTexture3&&j.BumpTextureEnabled){if(!this.bumpTexture1.isReady()||!this.bumpTexture2.isReady()||!this.bumpTexture3.isReady())return!1;i._needNormals=!0,i.BUMP=!0}}if(_.PrepareDefinesForMisc(e,r,!1,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(e),i),i._needNormals=_.PrepareDefinesForLights(r,e,i,!1,this._maxSimultaneousLights,this._disableLighting),_.PrepareDefinesForFrameBoundValues(r,n,this,i,!!s),_.PrepareDefinesForAttributes(e,i,!0,!0),i.isDirty){i.markAsProcessed(),r.resetCachedMaterial();const o=new be;i.FOG&&o.addFallback(1,"FOG"),_.HandleFallbacksForShadows(i,o,this.maxSimultaneousLights),i.NUM_BONE_INFLUENCERS>0&&o.addCPUSkinningFallback(0,e),i.IMAGEPROCESSINGPOSTPROCESS=r.imageProcessingConfiguration.applyByPostProcess;const a=[p.PositionKind];i.NORMAL&&a.push(p.NormalKind),i.UV1&&a.push(p.UVKind),i.UV2&&a.push(p.UV2Kind),i.VERTEXCOLOR&&a.push(p.ColorKind),_.PrepareAttributesForBones(a,e,i,o),_.PrepareAttributesForInstances(a,i);const f="terrain",c=i.toString(),u=["world","view","viewProjection","vEyePosition","vLightsType","vDiffuseColor","vSpecularColor","vFogInfos","vFogColor","pointSize","vTextureInfos","mBones","textureMatrix","diffuse1Infos","diffuse2Infos","diffuse3Infos"],d=["textureSampler","diffuse1Sampler","diffuse2Sampler","diffuse3Sampler","bump1Sampler","bump2Sampler","bump3Sampler"],m=[];Pe(u),_.PrepareUniformsAndSamplersList({uniformsNames:u,uniformBuffersNames:m,samplers:d,defines:i,maxSimultaneousLights:this.maxSimultaneousLights}),t.setEffect(r.getEngine().createEffect(f,{attributes:a,uniformsNames:u,uniformBuffersNames:m,samplers:d,defines:c,fallbacks:o,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:this.maxSimultaneousLights}},n),i,this._materialContext)}return!t.effect||!t.effect.isReady()?!1:(i._renderId=r.getRenderId(),t.effect._wasPreviouslyReady=!0,t.effect._wasPreviouslyUsingInstances=!!s,!0)}bindForSubMesh(e,t,s){const i=this.getScene(),r=s.materialDefines;if(!r)return;const n=s.effect;n&&(this._activeEffect=n,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",i.getTransformMatrix()),_.BindBonesParameters(t,this._activeEffect),this._mustRebind(i,n)&&(this.mixTexture&&(this._activeEffect.setTexture("textureSampler",this._mixTexture),this._activeEffect.setFloat2("vTextureInfos",this._mixTexture.coordinatesIndex,this._mixTexture.level),this._activeEffect.setMatrix("textureMatrix",this._mixTexture.getTextureMatrix()),j.DiffuseTextureEnabled&&(this._diffuseTexture1&&(this._activeEffect.setTexture("diffuse1Sampler",this._diffuseTexture1),this._activeEffect.setFloat2("diffuse1Infos",this._diffuseTexture1.uScale,this._diffuseTexture1.vScale)),this._diffuseTexture2&&(this._activeEffect.setTexture("diffuse2Sampler",this._diffuseTexture2),this._activeEffect.setFloat2("diffuse2Infos",this._diffuseTexture2.uScale,this._diffuseTexture2.vScale)),this._diffuseTexture3&&(this._activeEffect.setTexture("diffuse3Sampler",this._diffuseTexture3),this._activeEffect.setFloat2("diffuse3Infos",this._diffuseTexture3.uScale,this._diffuseTexture3.vScale))),j.BumpTextureEnabled&&i.getEngine().getCaps().standardDerivatives&&(this._bumpTexture1&&this._activeEffect.setTexture("bump1Sampler",this._bumpTexture1),this._bumpTexture2&&this._activeEffect.setTexture("bump2Sampler",this._bumpTexture2),this._bumpTexture3&&this._activeEffect.setTexture("bump3Sampler",this._bumpTexture3))),Oe(n,this,i),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),i.bindEyePosition(n)),this._activeEffect.setColor4("vDiffuseColor",this.diffuseColor,this.alpha*t.visibility),r.SPECULARTERM&&this._activeEffect.setColor4("vSpecularColor",this.specularColor,this.specularPower),i.lightsEnabled&&!this.disableLighting&&_.BindLights(i,t,this._activeEffect,r,this.maxSimultaneousLights),i.fogEnabled&&t.applyFog&&i.fogMode!==ve.FOGMODE_NONE&&this._activeEffect.setMatrix("view",i.getViewMatrix()),_.BindFogParameters(i,t,this._activeEffect),this._afterBind(t,this._activeEffect))}getAnimatables(){const e=[];return this.mixTexture&&this.mixTexture.animations&&this.mixTexture.animations.length>0&&e.push(this.mixTexture),e}getActiveTextures(){const e=super.getActiveTextures();return this._mixTexture&&e.push(this._mixTexture),this._diffuseTexture1&&e.push(this._diffuseTexture1),this._diffuseTexture2&&e.push(this._diffuseTexture2),this._diffuseTexture3&&e.push(this._diffuseTexture3),this._bumpTexture1&&e.push(this._bumpTexture1),this._bumpTexture2&&e.push(this._bumpTexture2),this._bumpTexture3&&e.push(this._bumpTexture3),e}hasTexture(e){return!!(super.hasTexture(e)||this._mixTexture===e||this._diffuseTexture1===e||this._diffuseTexture2===e||this._diffuseTexture3===e||this._bumpTexture1===e||this._bumpTexture2===e||this._bumpTexture3===e)}dispose(e){this.mixTexture&&this.mixTexture.dispose(),super.dispose(e)}clone(e){return H.Clone(()=>new J(e,this.getScene()),this)}serialize(){const e=super.serialize();return e.customType="BABYLON.TerrainMaterial",e}getClassName(){return"TerrainMaterial"}static Parse(e,t,s){return H.Parse(()=>new J(e.name,t),e,t,s)}}h([R("mixTexture")],J.prototype,"_mixTexture",void 0);h([P("_markAllSubMeshesAsTexturesDirty")],J.prototype,"mixTexture",void 0);h([R("diffuseTexture1")],J.prototype,"_diffuseTexture1",void 0);h([P("_markAllSubMeshesAsTexturesDirty")],J.prototype,"diffuseTexture1",void 0);h([R("diffuseTexture2")],J.prototype,"_diffuseTexture2",void 0);h([P("_markAllSubMeshesAsTexturesDirty")],J.prototype,"diffuseTexture2",void 0);h([R("diffuseTexture3")],J.prototype,"_diffuseTexture3",void 0);h([P("_markAllSubMeshesAsTexturesDirty")],J.prototype,"diffuseTexture3",void 0);h([R("bumpTexture1")],J.prototype,"_bumpTexture1",void 0);h([P("_markAllSubMeshesAsTexturesDirty")],J.prototype,"bumpTexture1",void 0);h([R("bumpTexture2")],J.prototype,"_bumpTexture2",void 0);h([P("_markAllSubMeshesAsTexturesDirty")],J.prototype,"bumpTexture2",void 0);h([R("bumpTexture3")],J.prototype,"_bumpTexture3",void 0);h([P("_markAllSubMeshesAsTexturesDirty")],J.prototype,"bumpTexture3",void 0);h([oe()],J.prototype,"diffuseColor",void 0);h([oe()],J.prototype,"specularColor",void 0);h([A()],J.prototype,"specularPower",void 0);h([A("disableLighting")],J.prototype,"_disableLighting",void 0);h([P("_markAllSubMeshesAsLightsDirty")],J.prototype,"disableLighting",void 0);h([A("maxSimultaneousLights")],J.prototype,"_maxSimultaneousLights",void 0);h([P("_markAllSubMeshesAsLightsDirty")],J.prototype,"maxSimultaneousLights",void 0);_e("BABYLON.TerrainMaterial",J);const to="triplanarPixelShader",io=`precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;
#ifdef SPECULARTERM
uniform vec4 vSpecularColor;
#endif
varying vec3 vPositionW;
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
#include<helperFunctions>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#ifdef DIFFUSEX
varying vec2 vTextureUVX;uniform sampler2D diffuseSamplerX;
#ifdef BUMPX
uniform sampler2D normalSamplerX;
#endif
#endif
#ifdef DIFFUSEY
varying vec2 vTextureUVY;uniform sampler2D diffuseSamplerY;
#ifdef BUMPY
uniform sampler2D normalSamplerY;
#endif
#endif
#ifdef DIFFUSEZ
varying vec2 vTextureUVZ;uniform sampler2D diffuseSamplerZ;
#ifdef BUMPZ
uniform sampler2D normalSamplerZ;
#endif
#endif
#ifdef NORMAL
varying mat3 tangentSpace;
#endif
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#include<clipPlaneFragmentDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(0.,0.,0.,1.);vec3 diffuseColor=vDiffuseColor.rgb;float alpha=vDiffuseColor.a;
#ifdef NORMAL
vec3 normalW=tangentSpace[2];
#else
vec3 normalW=vec3(1.0,1.0,1.0);
#endif
vec4 baseNormal=vec4(0.0,0.0,0.0,1.0);normalW*=normalW;
#ifdef DIFFUSEX
baseColor+=texture2D(diffuseSamplerX,vTextureUVX)*normalW.x;
#ifdef BUMPX
baseNormal+=texture2D(normalSamplerX,vTextureUVX)*normalW.x;
#endif
#endif
#ifdef DIFFUSEY
baseColor+=texture2D(diffuseSamplerY,vTextureUVY)*normalW.y;
#ifdef BUMPY
baseNormal+=texture2D(normalSamplerY,vTextureUVY)*normalW.y;
#endif
#endif
#ifdef DIFFUSEZ
baseColor+=texture2D(diffuseSamplerZ,vTextureUVZ)*normalW.z;
#ifdef BUMPZ
baseNormal+=texture2D(normalSamplerZ,vTextureUVZ)*normalW.z;
#endif
#endif
#ifdef NORMAL
normalW=normalize((2.0*baseNormal.xyz-1.0)*tangentSpace);
#endif
#ifdef ALPHATEST
if (baseColor.a<0.4)
discard;
#endif
#include<depthPrePass>
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
baseColor.rgb*=vColor.rgb;
#endif
vec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float aggShadow=0.;float numLights=0.;
#ifdef SPECULARTERM
float glossiness=vSpecularColor.a;vec3 specularBase=vec3(0.,0.,0.);vec3 specularColor=vSpecularColor.rgb;
#else
float glossiness=0.;
#endif
#include<lightFragment>[0..maxSimultaneousLights]
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
#ifdef SPECULARTERM
vec3 finalSpecular=specularBase*specularColor;
#else
vec3 finalSpecular=vec3(0.0);
#endif
vec3 finalDiffuse=clamp(diffuseBase*diffuseColor,0.0,1.0)*baseColor.rgb;vec4 color=vec4(finalDiffuse+finalSpecular,alpha);
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}
`;X.ShadersStore[to]=io;const so="triplanarVertexShader",ro=`precision highp float;attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<helperFunctions>
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
uniform mat4 view;uniform mat4 viewProjection;
#ifdef DIFFUSEX
varying vec2 vTextureUVX;
#endif
#ifdef DIFFUSEY
varying vec2 vTextureUVY;
#endif
#ifdef DIFFUSEZ
varying vec2 vTextureUVZ;
#endif
uniform float tileSize;
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying mat3 tangentSpace;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#define CUSTOM_VERTEX_DEFINITIONS
void main(void)
{
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);
#ifdef DIFFUSEX
vTextureUVX=worldPos.zy/tileSize;
#endif
#ifdef DIFFUSEY
vTextureUVY=worldPos.xz/tileSize;
#endif
#ifdef DIFFUSEZ
vTextureUVZ=worldPos.xy/tileSize;
#endif
#ifdef NORMAL
vec3 xtan=vec3(0,0,1);vec3 xbin=vec3(0,1,0);vec3 ytan=vec3(1,0,0);vec3 ybin=vec3(0,0,1);vec3 ztan=vec3(1,0,0);vec3 zbin=vec3(0,1,0);vec3 normalizedNormal=normalize(normal);normalizedNormal*=normalizedNormal;vec3 worldBinormal=normalize(xbin*normalizedNormal.x+ybin*normalizedNormal.y+zbin*normalizedNormal.z);vec3 worldTangent=normalize(xtan*normalizedNormal.x+ytan*normalizedNormal.y+ztan*normalizedNormal.z);mat3 normalWorld=mat3(world);
#ifdef NONUNIFORMSCALING
normalWorld=transposeMat3(inverseMat3(normalWorld));
#endif
worldTangent=normalize((normalWorld*worldTangent).xyz);worldBinormal=normalize((normalWorld*worldBinormal).xyz);vec3 worldNormal=normalize((normalWorld*normalize(normal)).xyz);tangentSpace[0]=worldTangent;tangentSpace[1]=worldBinormal;tangentSpace[2]=worldNormal;
#endif
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;X.ShadersStore[so]=ro;class no extends Ee{constructor(){super(),this.DIFFUSEX=!1,this.DIFFUSEY=!1,this.DIFFUSEZ=!1,this.BUMPX=!1,this.BUMPY=!1,this.BUMPZ=!1,this.CLIPPLANE=!1,this.CLIPPLANE2=!1,this.CLIPPLANE3=!1,this.CLIPPLANE4=!1,this.CLIPPLANE5=!1,this.CLIPPLANE6=!1,this.ALPHATEST=!1,this.DEPTHPREPASS=!1,this.POINTSIZE=!1,this.FOG=!1,this.SPECULARTERM=!1,this.NORMAL=!1,this.VERTEXCOLOR=!1,this.VERTEXALPHA=!1,this.NUM_BONE_INFLUENCERS=0,this.BonesPerMesh=0,this.INSTANCES=!1,this.INSTANCESCOLOR=!1,this.IMAGEPROCESSINGPOSTPROCESS=!1,this.SKIPFINALCOLORCLAMP=!1,this.NONUNIFORMSCALING=!1,this.rebuild()}}class Q extends xe{constructor(e,t){super(e,t),this.tileSize=1,this.diffuseColor=new y(1,1,1),this.specularColor=new y(.2,.2,.2),this.specularPower=64,this._disableLighting=!1,this._maxSimultaneousLights=4}needAlphaBlending(){return this.alpha<1}needAlphaTesting(){return!1}getAlphaTestTexture(){return null}isReadyForSubMesh(e,t,s){if(this.isFrozen&&t.effect&&t.effect._wasPreviouslyReady&&t.effect._wasPreviouslyUsingInstances===s)return!0;t.materialDefines||(t.materialDefines=new no);const i=t.materialDefines,r=this.getScene();if(this._isReadyForSubMesh(t))return!0;const n=r.getEngine();if(i._areTexturesDirty&&r.texturesEnabled){if(j.DiffuseTextureEnabled){const o=[this.diffuseTextureX,this.diffuseTextureY,this.diffuseTextureZ],a=["DIFFUSEX","DIFFUSEY","DIFFUSEZ"];for(let f=0;f<o.length;f++)if(o[f])if(o[f].isReady())i[a[f]]=!0;else return!1}if(j.BumpTextureEnabled){const o=[this.normalTextureX,this.normalTextureY,this.normalTextureZ],a=["BUMPX","BUMPY","BUMPZ"];for(let f=0;f<o.length;f++)if(o[f])if(o[f].isReady())i[a[f]]=!0;else return!1}}if(_.PrepareDefinesForMisc(e,r,!1,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(e),i),i._needNormals=_.PrepareDefinesForLights(r,e,i,!1,this._maxSimultaneousLights,this._disableLighting),_.PrepareDefinesForFrameBoundValues(r,n,this,i,!!s),_.PrepareDefinesForAttributes(e,i,!0,!0),i.isDirty){i.markAsProcessed(),r.resetCachedMaterial();const o=new be;i.FOG&&o.addFallback(1,"FOG"),_.HandleFallbacksForShadows(i,o,this.maxSimultaneousLights),i.NUM_BONE_INFLUENCERS>0&&o.addCPUSkinningFallback(0,e),i.IMAGEPROCESSINGPOSTPROCESS=r.imageProcessingConfiguration.applyByPostProcess;const a=[p.PositionKind];i.NORMAL&&a.push(p.NormalKind),i.VERTEXCOLOR&&a.push(p.ColorKind),_.PrepareAttributesForBones(a,e,i,o),_.PrepareAttributesForInstances(a,i);const f="triplanar",c=i.toString(),u=["world","view","viewProjection","vEyePosition","vLightsType","vDiffuseColor","vSpecularColor","vFogInfos","vFogColor","pointSize","mBones","tileSize"],d=["diffuseSamplerX","diffuseSamplerY","diffuseSamplerZ","normalSamplerX","normalSamplerY","normalSamplerZ"],m=[];Pe(u),_.PrepareUniformsAndSamplersList({uniformsNames:u,uniformBuffersNames:m,samplers:d,defines:i,maxSimultaneousLights:this.maxSimultaneousLights}),t.setEffect(r.getEngine().createEffect(f,{attributes:a,uniformsNames:u,uniformBuffersNames:m,samplers:d,defines:c,fallbacks:o,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:this.maxSimultaneousLights}},n),i,this._materialContext)}return!t.effect||!t.effect.isReady()?!1:(i._renderId=r.getRenderId(),t.effect._wasPreviouslyReady=!0,t.effect._wasPreviouslyUsingInstances=!!s,!0)}bindForSubMesh(e,t,s){const i=this.getScene(),r=s.materialDefines;if(!r)return;const n=s.effect;n&&(this._activeEffect=n,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",i.getTransformMatrix()),_.BindBonesParameters(t,this._activeEffect),this._activeEffect.setFloat("tileSize",this.tileSize),i.getCachedMaterial()!==this&&(this.diffuseTextureX&&this._activeEffect.setTexture("diffuseSamplerX",this.diffuseTextureX),this.diffuseTextureY&&this._activeEffect.setTexture("diffuseSamplerY",this.diffuseTextureY),this.diffuseTextureZ&&this._activeEffect.setTexture("diffuseSamplerZ",this.diffuseTextureZ),this.normalTextureX&&this._activeEffect.setTexture("normalSamplerX",this.normalTextureX),this.normalTextureY&&this._activeEffect.setTexture("normalSamplerY",this.normalTextureY),this.normalTextureZ&&this._activeEffect.setTexture("normalSamplerZ",this.normalTextureZ),Oe(n,this,i),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),i.bindEyePosition(n)),this._activeEffect.setColor4("vDiffuseColor",this.diffuseColor,this.alpha*t.visibility),r.SPECULARTERM&&this._activeEffect.setColor4("vSpecularColor",this.specularColor,this.specularPower),i.lightsEnabled&&!this.disableLighting&&_.BindLights(i,t,this._activeEffect,r,this.maxSimultaneousLights),i.fogEnabled&&t.applyFog&&i.fogMode!==ve.FOGMODE_NONE&&this._activeEffect.setMatrix("view",i.getViewMatrix()),_.BindFogParameters(i,t,this._activeEffect),this._afterBind(t,this._activeEffect))}getAnimatables(){const e=[];return this.mixTexture&&this.mixTexture.animations&&this.mixTexture.animations.length>0&&e.push(this.mixTexture),e}getActiveTextures(){const e=super.getActiveTextures();return this._diffuseTextureX&&e.push(this._diffuseTextureX),this._diffuseTextureY&&e.push(this._diffuseTextureY),this._diffuseTextureZ&&e.push(this._diffuseTextureZ),this._normalTextureX&&e.push(this._normalTextureX),this._normalTextureY&&e.push(this._normalTextureY),this._normalTextureZ&&e.push(this._normalTextureZ),e}hasTexture(e){return!!(super.hasTexture(e)||this._diffuseTextureX===e||this._diffuseTextureY===e||this._diffuseTextureZ===e||this._normalTextureX===e||this._normalTextureY===e||this._normalTextureZ===e)}dispose(e){this.mixTexture&&this.mixTexture.dispose(),super.dispose(e)}clone(e){return H.Clone(()=>new Q(e,this.getScene()),this)}serialize(){const e=super.serialize();return e.customType="BABYLON.TriPlanarMaterial",e}getClassName(){return"TriPlanarMaterial"}static Parse(e,t,s){return H.Parse(()=>new Q(e.name,t),e,t,s)}}h([R()],Q.prototype,"mixTexture",void 0);h([R("diffuseTextureX")],Q.prototype,"_diffuseTextureX",void 0);h([P("_markAllSubMeshesAsTexturesDirty")],Q.prototype,"diffuseTextureX",void 0);h([R("diffuseTexturY")],Q.prototype,"_diffuseTextureY",void 0);h([P("_markAllSubMeshesAsTexturesDirty")],Q.prototype,"diffuseTextureY",void 0);h([R("diffuseTextureZ")],Q.prototype,"_diffuseTextureZ",void 0);h([P("_markAllSubMeshesAsTexturesDirty")],Q.prototype,"diffuseTextureZ",void 0);h([R("normalTextureX")],Q.prototype,"_normalTextureX",void 0);h([P("_markAllSubMeshesAsTexturesDirty")],Q.prototype,"normalTextureX",void 0);h([R("normalTextureY")],Q.prototype,"_normalTextureY",void 0);h([P("_markAllSubMeshesAsTexturesDirty")],Q.prototype,"normalTextureY",void 0);h([R("normalTextureZ")],Q.prototype,"_normalTextureZ",void 0);h([P("_markAllSubMeshesAsTexturesDirty")],Q.prototype,"normalTextureZ",void 0);h([A()],Q.prototype,"tileSize",void 0);h([oe()],Q.prototype,"diffuseColor",void 0);h([oe()],Q.prototype,"specularColor",void 0);h([A()],Q.prototype,"specularPower",void 0);h([A("disableLighting")],Q.prototype,"_disableLighting",void 0);h([P("_markAllSubMeshesAsLightsDirty")],Q.prototype,"disableLighting",void 0);h([A("maxSimultaneousLights")],Q.prototype,"_maxSimultaneousLights",void 0);h([P("_markAllSubMeshesAsLightsDirty")],Q.prototype,"maxSimultaneousLights",void 0);_e("BABYLON.TriPlanarMaterial",Q);const oo="waterPixelShader",ao=`#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;
#ifdef SPECULARTERM
uniform vec4 vSpecularColor;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
#include<helperFunctions>
#include<imageProcessingDeclaration>
#include<imageProcessingFunctions>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#ifdef BUMP
varying vec2 vNormalUV;
#ifdef BUMPSUPERIMPOSE
varying vec2 vNormalUV2;
#endif
uniform sampler2D normalSampler;uniform vec2 vNormalInfos;
#endif
uniform sampler2D refractionSampler;uniform sampler2D reflectionSampler;const float LOG2=1.442695;uniform vec3 cameraPosition;uniform vec4 waterColor;uniform float colorBlendFactor;uniform vec4 waterColor2;uniform float colorBlendFactor2;uniform float bumpHeight;uniform float time;varying vec3 vRefractionMapTexCoord;varying vec3 vReflectionMapTexCoord;
#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(1.,1.,1.,1.);vec3 diffuseColor=vDiffuseColor.rgb;float alpha=vDiffuseColor.a;
#ifdef BUMP
#ifdef BUMPSUPERIMPOSE
baseColor=0.6*texture2D(normalSampler,vNormalUV)+0.4*texture2D(normalSampler,vec2(vNormalUV2.x,vNormalUV2.y));
#else
baseColor=texture2D(normalSampler,vNormalUV);
#endif
vec3 bumpColor=baseColor.rgb;
#ifdef ALPHATEST
if (baseColor.a<0.4)
discard;
#endif
baseColor.rgb*=vNormalInfos.y;
#else
vec3 bumpColor=vec3(1.0);
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
baseColor.rgb*=vColor.rgb;
#endif
#ifdef NORMAL
vec2 perturbation=bumpHeight*(baseColor.rg-0.5);
#ifdef BUMPAFFECTSREFLECTION
vec3 normalW=normalize(vNormalW+vec3(perturbation.x*8.0,0.0,perturbation.y*8.0));if (normalW.y<0.0) {normalW.y=-normalW.y;}
#else
vec3 normalW=normalize(vNormalW);
#endif
#else
vec3 normalW=vec3(1.0,1.0,1.0);vec2 perturbation=bumpHeight*(vec2(1.0,1.0)-0.5);
#endif
#ifdef FRESNELSEPARATE
#ifdef REFLECTION
vec2 projectedRefractionTexCoords=clamp(vRefractionMapTexCoord.xy/vRefractionMapTexCoord.z+perturbation*0.5,0.0,1.0);vec4 refractiveColor=texture2D(refractionSampler,projectedRefractionTexCoords);
#ifdef IS_REFRACTION_LINEAR
refractiveColor.rgb=toGammaSpace(refractiveColor.rgb);
#endif
vec2 projectedReflectionTexCoords=clamp(vec2(
vReflectionMapTexCoord.x/vReflectionMapTexCoord.z+perturbation.x*0.3,
vReflectionMapTexCoord.y/vReflectionMapTexCoord.z+perturbation.y
),0.0,1.0);vec4 reflectiveColor=texture2D(reflectionSampler,projectedReflectionTexCoords);
#ifdef IS_REFLECTION_LINEAR
reflectiveColor.rgb=toGammaSpace(reflectiveColor.rgb);
#endif
vec3 upVector=vec3(0.0,1.0,0.0);float fresnelTerm=clamp(abs(pow(dot(viewDirectionW,upVector),3.0)),0.05,0.65);float IfresnelTerm=1.0-fresnelTerm;refractiveColor=colorBlendFactor*waterColor+(1.0-colorBlendFactor)*refractiveColor;reflectiveColor=IfresnelTerm*colorBlendFactor2*waterColor+(1.0-colorBlendFactor2*IfresnelTerm)*reflectiveColor;vec4 combinedColor=refractiveColor*fresnelTerm+reflectiveColor*IfresnelTerm;baseColor=combinedColor;
#endif
vec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float aggShadow=0.;float numLights=0.;
#ifdef SPECULARTERM
float glossiness=vSpecularColor.a;vec3 specularBase=vec3(0.,0.,0.);vec3 specularColor=vSpecularColor.rgb;
#else
float glossiness=0.;
#endif
#include<lightFragment>[0..maxSimultaneousLights]
vec3 finalDiffuse=clamp(baseColor.rgb,0.0,1.0);
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
#ifdef SPECULARTERM
vec3 finalSpecular=specularBase*specularColor;
#else
vec3 finalSpecular=vec3(0.0);
#endif
#else 
#ifdef REFLECTION
vec2 projectedRefractionTexCoords=clamp(vRefractionMapTexCoord.xy/vRefractionMapTexCoord.z+perturbation,0.0,1.0);vec4 refractiveColor=texture2D(refractionSampler,projectedRefractionTexCoords);
#ifdef IS_REFRACTION_LINEAR
refractiveColor.rgb=toGammaSpace(refractiveColor.rgb);
#endif
vec2 projectedReflectionTexCoords=clamp(vReflectionMapTexCoord.xy/vReflectionMapTexCoord.z+perturbation,0.0,1.0);vec4 reflectiveColor=texture2D(reflectionSampler,projectedReflectionTexCoords);
#ifdef IS_REFLECTION_LINEAR
reflectiveColor.rgb=toGammaSpace(reflectiveColor.rgb);
#endif
vec3 upVector=vec3(0.0,1.0,0.0);float fresnelTerm=max(dot(viewDirectionW,upVector),0.0);vec4 combinedColor=refractiveColor*fresnelTerm+reflectiveColor*(1.0-fresnelTerm);baseColor=colorBlendFactor*waterColor+(1.0-colorBlendFactor)*combinedColor;
#endif
vec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float aggShadow=0.;float numLights=0.;
#ifdef SPECULARTERM
float glossiness=vSpecularColor.a;vec3 specularBase=vec3(0.,0.,0.);vec3 specularColor=vSpecularColor.rgb;
#else
float glossiness=0.;
#endif
#include<lightFragment>[0..maxSimultaneousLights]
vec3 finalDiffuse=clamp(baseColor.rgb,0.0,1.0);
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
#ifdef SPECULARTERM
vec3 finalSpecular=specularBase*specularColor;
#else
vec3 finalSpecular=vec3(0.0);
#endif
#endif
vec4 color=vec4(finalDiffuse+finalSpecular,alpha);
#include<logDepthFragment>
#include<fogFragment>
#ifdef IMAGEPROCESSINGPOSTPROCESS
color.rgb=toLinearSpace(color.rgb);
#elif defined(IMAGEPROCESSING)
color.rgb=toLinearSpace(color.rgb);color=applyImageProcessing(color);
#endif
gl_FragColor=color;
#define CUSTOM_FRAGMENT_MAIN_END
}
`;X.ShadersStore[oo]=ao;const lo="waterVertexShader",fo=`precision highp float;attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
uniform mat4 view;uniform mat4 viewProjection;
#ifdef BUMP
varying vec2 vNormalUV;
#ifdef BUMPSUPERIMPOSE
varying vec2 vNormalUV2;
#endif
uniform mat4 normalMatrix;uniform vec2 vNormalInfos;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightFragment>[0..maxSimultaneousLights]
#include<logDepthDeclaration>
uniform mat4 reflectionViewProjection;uniform vec2 windDirection;uniform float waveLength;uniform float time;uniform float windForce;uniform float waveHeight;uniform float waveSpeed;uniform float waveCount;varying vec3 vRefractionMapTexCoord;varying vec3 vReflectionMapTexCoord;
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(position,1.0);vPositionW=vec3(worldPos);
#ifdef NORMAL
vNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));
#endif
#ifndef UV1
vec2 uv=vec2(0.,0.);
#endif
#ifndef UV2
vec2 uv2=vec2(0.,0.);
#endif
#ifdef BUMP
if (vNormalInfos.x==0.)
{vNormalUV=vec2(normalMatrix*vec4((uv*1.0)/waveLength+time*windForce*windDirection,1.0,0.0));
#ifdef BUMPSUPERIMPOSE
vNormalUV2=vec2(normalMatrix*vec4((uv*0.721)/waveLength+time*1.2*windForce*windDirection,1.0,0.0));
#endif
}
else
{vNormalUV=vec2(normalMatrix*vec4((uv2*1.0)/waveLength+time*windForce*windDirection ,1.0,0.0));
#ifdef BUMPSUPERIMPOSE
vNormalUV2=vec2(normalMatrix*vec4((uv2*0.721)/waveLength+time*1.2*windForce*windDirection ,1.0,0.0));
#endif
}
#endif
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
float finalWaveCount=1.0/(waveCount*0.5);
#ifdef USE_WORLD_COORDINATES
vec3 p=worldPos.xyz;
#else
vec3 p=position;
#endif
float newY=(sin(((p.x/finalWaveCount)+time*waveSpeed))*waveHeight*windDirection.x*5.0)
+ (cos(((p.z/finalWaveCount)+ time*waveSpeed))*waveHeight*windDirection.y*5.0);p.y+=abs(newY);
#ifdef USE_WORLD_COORDINATES
gl_Position=viewProjection*vec4(p,1.0);
#else
gl_Position=viewProjection*finalWorld*vec4(p,1.0);
#endif
#ifdef REFLECTION
vRefractionMapTexCoord.x=0.5*(gl_Position.w+gl_Position.x);vRefractionMapTexCoord.y=0.5*(gl_Position.w+gl_Position.y);vRefractionMapTexCoord.z=gl_Position.w;worldPos=reflectionViewProjection*finalWorld*vec4(position,1.0);vReflectionMapTexCoord.x=0.5*(worldPos.w+worldPos.x);vReflectionMapTexCoord.y=0.5*(worldPos.w+worldPos.y);vReflectionMapTexCoord.z=worldPos.w;
#endif
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}
`;X.ShadersStore[lo]=fo;class co extends Ee{constructor(){super(),this.BUMP=!1,this.REFLECTION=!1,this.CLIPPLANE=!1,this.CLIPPLANE2=!1,this.CLIPPLANE3=!1,this.CLIPPLANE4=!1,this.CLIPPLANE5=!1,this.CLIPPLANE6=!1,this.ALPHATEST=!1,this.DEPTHPREPASS=!1,this.POINTSIZE=!1,this.FOG=!1,this.NORMAL=!1,this.UV1=!1,this.UV2=!1,this.VERTEXCOLOR=!1,this.VERTEXALPHA=!1,this.NUM_BONE_INFLUENCERS=0,this.BonesPerMesh=0,this.INSTANCES=!1,this.INSTANCESCOLOR=!1,this.SPECULARTERM=!1,this.LOGARITHMICDEPTH=!1,this.USE_REVERSE_DEPTHBUFFER=!1,this.FRESNELSEPARATE=!1,this.BUMPSUPERIMPOSE=!1,this.BUMPAFFECTSREFLECTION=!1,this.USE_WORLD_COORDINATES=!1,this.IMAGEPROCESSING=!1,this.VIGNETTE=!1,this.VIGNETTEBLENDMODEMULTIPLY=!1,this.VIGNETTEBLENDMODEOPAQUE=!1,this.TONEMAPPING=!1,this.TONEMAPPING_ACES=!1,this.CONTRAST=!1,this.EXPOSURE=!1,this.COLORCURVES=!1,this.COLORGRADING=!1,this.COLORGRADING3D=!1,this.SAMPLER3DGREENDEPTH=!1,this.SAMPLER3DBGRMAP=!1,this.DITHER=!1,this.IMAGEPROCESSINGPOSTPROCESS=!1,this.SKIPFINALCOLORCLAMP=!1,this.rebuild()}}class V extends xe{get hasRenderTargetTextures(){return!0}constructor(e,t,s=new He(512,512)){super(e,t),this.renderTargetSize=s,this.diffuseColor=new y(1,1,1),this.specularColor=new y(0,0,0),this.specularPower=64,this._disableLighting=!1,this._maxSimultaneousLights=4,this.windForce=6,this.windDirection=new He(0,1),this.waveHeight=.4,this.bumpHeight=.4,this._bumpSuperimpose=!1,this._fresnelSeparate=!1,this._bumpAffectsReflection=!1,this.waterColor=new y(.1,.1,.6),this.colorBlendFactor=.2,this.waterColor2=new y(.1,.1,.6),this.colorBlendFactor2=.2,this.waveLength=.1,this.waveSpeed=1,this.waveCount=20,this.disableClipPlane=!1,this._useWorldCoordinatesForWaveDeformation=!1,this._renderTargets=new Fs(16),this._mesh=null,this._reflectionTransform=ce.Zero(),this._lastTime=0,this._lastDeltaTime=0,this._createRenderTargets(this.getScene(),s),this.getRenderTargetTextures=()=>(this._renderTargets.reset(),this._renderTargets.push(this._reflectionRTT),this._renderTargets.push(this._refractionRTT),this._renderTargets),this._imageProcessingConfiguration=this.getScene().imageProcessingConfiguration,this._imageProcessingConfiguration&&(this._imageProcessingObserver=this._imageProcessingConfiguration.onUpdateParameters.add(()=>{this._markAllSubMeshesAsImageProcessingDirty()}))}get useLogarithmicDepth(){return this._useLogarithmicDepth}set useLogarithmicDepth(e){this._useLogarithmicDepth=e&&this.getScene().getEngine().getCaps().fragmentDepthSupported,this._markAllSubMeshesAsMiscDirty()}get refractionTexture(){return this._refractionRTT}get reflectionTexture(){return this._reflectionRTT}addToRenderList(e){this._refractionRTT&&this._refractionRTT.renderList&&this._refractionRTT.renderList.push(e),this._reflectionRTT&&this._reflectionRTT.renderList&&this._reflectionRTT.renderList.push(e)}removeFromRenderList(e){if(this._refractionRTT&&this._refractionRTT.renderList){const t=this._refractionRTT.renderList.indexOf(e);t!==-1&&this._refractionRTT.renderList.splice(t,1)}if(this._reflectionRTT&&this._reflectionRTT.renderList){const t=this._reflectionRTT.renderList.indexOf(e);t!==-1&&this._reflectionRTT.renderList.splice(t,1)}}enableRenderTargets(e){const t=e?1:0;this._refractionRTT&&(this._refractionRTT.refreshRate=t),this._reflectionRTT&&(this._reflectionRTT.refreshRate=t)}getRenderList(){return this._refractionRTT?this._refractionRTT.renderList:[]}get renderTargetsEnabled(){return!(this._refractionRTT&&this._refractionRTT.refreshRate===0)}needAlphaBlending(){return this.alpha<1}needAlphaTesting(){return!1}getAlphaTestTexture(){return null}isReadyForSubMesh(e,t,s){if(this.isFrozen&&t.effect&&t.effect._wasPreviouslyReady&&t.effect._wasPreviouslyUsingInstances===s)return!0;t.materialDefines||(t.materialDefines=new co);const i=t.materialDefines,r=this.getScene();if(this._isReadyForSubMesh(t))return!0;const n=r.getEngine();if(i._areTexturesDirty&&(i._needUVs=!1,r.texturesEnabled)){if(this.bumpTexture&&j.BumpTextureEnabled)if(this.bumpTexture.isReady())i._needUVs=!0,i.BUMP=!0;else return!1;j.ReflectionTextureEnabled&&(i.REFLECTION=!0)}if(_.PrepareDefinesForFrameBoundValues(r,n,this,i,!!s),_.PrepareDefinesForMisc(e,r,this._useLogarithmicDepth,this.pointsCloud,this.fogEnabled,this._shouldTurnAlphaTestOn(e),i),i._areMiscDirty&&(i.FRESNELSEPARATE=this._fresnelSeparate,i.BUMPSUPERIMPOSE=this._bumpSuperimpose,i.BUMPAFFECTSREFLECTION=this._bumpAffectsReflection,i.USE_WORLD_COORDINATES=this._useWorldCoordinatesForWaveDeformation),i._needNormals=_.PrepareDefinesForLights(r,e,i,!0,this._maxSimultaneousLights,this._disableLighting),i._areImageProcessingDirty&&this._imageProcessingConfiguration){if(!this._imageProcessingConfiguration.isReady())return!1;this._imageProcessingConfiguration.prepareDefines(i),i.IS_REFLECTION_LINEAR=this.reflectionTexture!=null&&!this.reflectionTexture.gammaSpace,i.IS_REFRACTION_LINEAR=this.refractionTexture!=null&&!this.refractionTexture.gammaSpace}if(_.PrepareDefinesForAttributes(e,i,!0,!0),this._mesh=e,this._waitingRenderList){for(let o=0;o<this._waitingRenderList.length;o++)this.addToRenderList(r.getNodeById(this._waitingRenderList[o]));this._waitingRenderList=null}if(i.isDirty){i.markAsProcessed(),r.resetCachedMaterial();const o=new be;i.FOG&&o.addFallback(1,"FOG"),i.LOGARITHMICDEPTH&&o.addFallback(0,"LOGARITHMICDEPTH"),_.HandleFallbacksForShadows(i,o,this.maxSimultaneousLights),i.NUM_BONE_INFLUENCERS>0&&o.addCPUSkinningFallback(0,e);const a=[p.PositionKind];i.NORMAL&&a.push(p.NormalKind),i.UV1&&a.push(p.UVKind),i.UV2&&a.push(p.UV2Kind),i.VERTEXCOLOR&&a.push(p.ColorKind),_.PrepareAttributesForBones(a,e,i,o),_.PrepareAttributesForInstances(a,i);const f="water",c=i.toString(),u=["world","view","viewProjection","vEyePosition","vLightsType","vDiffuseColor","vSpecularColor","vFogInfos","vFogColor","pointSize","vNormalInfos","mBones","normalMatrix","logarithmicDepthConstant","reflectionViewProjection","windDirection","waveLength","time","windForce","cameraPosition","bumpHeight","waveHeight","waterColor","waterColor2","colorBlendFactor","colorBlendFactor2","waveSpeed","waveCount"],d=["normalSampler","refractionSampler","reflectionSampler"],m=[];yt&&(yt.PrepareUniforms(u,i),yt.PrepareSamplers(d,i)),Pe(u),_.PrepareUniformsAndSamplersList({uniformsNames:u,uniformBuffersNames:m,samplers:d,defines:i,maxSimultaneousLights:this.maxSimultaneousLights}),t.setEffect(r.getEngine().createEffect(f,{attributes:a,uniformsNames:u,uniformBuffersNames:m,samplers:d,defines:c,fallbacks:o,onCompiled:this.onCompiled,onError:this.onError,indexParameters:{maxSimultaneousLights:this._maxSimultaneousLights}},n),i,this._materialContext)}return!t.effect||!t.effect.isReady()?!1:(i._renderId=r.getRenderId(),t.effect._wasPreviouslyReady=!0,t.effect._wasPreviouslyUsingInstances=!!s,!0)}bindForSubMesh(e,t,s){const i=this.getScene(),r=s.materialDefines;if(!r)return;const n=s.effect;if(!n||!this._mesh)return;this._activeEffect=n,this.bindOnlyWorldMatrix(e),this._activeEffect.setMatrix("viewProjection",i.getTransformMatrix()),_.BindBonesParameters(t,this._activeEffect),this._mustRebind(i,n)&&(this.bumpTexture&&j.BumpTextureEnabled&&(this._activeEffect.setTexture("normalSampler",this.bumpTexture),this._activeEffect.setFloat2("vNormalInfos",this.bumpTexture.coordinatesIndex,this.bumpTexture.level),this._activeEffect.setMatrix("normalMatrix",this.bumpTexture.getTextureMatrix())),Oe(n,this,i),this.pointsCloud&&this._activeEffect.setFloat("pointSize",this.pointSize),i.bindEyePosition(n)),this._activeEffect.setColor4("vDiffuseColor",this.diffuseColor,this.alpha*t.visibility),r.SPECULARTERM&&this._activeEffect.setColor4("vSpecularColor",this.specularColor,this.specularPower),i.lightsEnabled&&!this.disableLighting&&_.BindLights(i,t,this._activeEffect,r,this.maxSimultaneousLights),i.fogEnabled&&t.applyFog&&i.fogMode!==ve.FOGMODE_NONE&&this._activeEffect.setMatrix("view",i.getViewMatrix()),_.BindFogParameters(i,t,this._activeEffect),_.BindLogDepth(r,this._activeEffect,i),j.ReflectionTextureEnabled&&(this._activeEffect.setTexture("refractionSampler",this._refractionRTT),this._activeEffect.setTexture("reflectionSampler",this._reflectionRTT));const o=this._reflectionTransform.multiply(i.getProjectionMatrix()),a=i.getEngine().getDeltaTime();a!==this._lastDeltaTime&&(this._lastDeltaTime=a,this._lastTime+=this._lastDeltaTime),this._activeEffect.setMatrix("reflectionViewProjection",o),this._activeEffect.setVector2("windDirection",this.windDirection),this._activeEffect.setFloat("waveLength",this.waveLength),this._activeEffect.setFloat("time",this._lastTime/1e5),this._activeEffect.setFloat("windForce",this.windForce),this._activeEffect.setFloat("waveHeight",this.waveHeight),this._activeEffect.setFloat("bumpHeight",this.bumpHeight),this._activeEffect.setColor4("waterColor",this.waterColor,1),this._activeEffect.setFloat("colorBlendFactor",this.colorBlendFactor),this._activeEffect.setColor4("waterColor2",this.waterColor2,1),this._activeEffect.setFloat("colorBlendFactor2",this.colorBlendFactor2),this._activeEffect.setFloat("waveSpeed",this.waveSpeed),this._activeEffect.setFloat("waveCount",this.waveCount),this._imageProcessingConfiguration&&!this._imageProcessingConfiguration.applyByPostProcess&&this._imageProcessingConfiguration.bind(this._activeEffect),this._afterBind(t,this._activeEffect)}_createRenderTargets(e,t){this._refractionRTT=new Nt(name+"_refraction",{width:t.x,height:t.y},e,!1,!0),this._refractionRTT.wrapU=Le.TEXTURE_MIRROR_ADDRESSMODE,this._refractionRTT.wrapV=Le.TEXTURE_MIRROR_ADDRESSMODE,this._refractionRTT.ignoreCameraViewport=!0,this._reflectionRTT=new Nt(name+"_reflection",{width:t.x,height:t.y},e,!1,!0),this._reflectionRTT.wrapU=Le.TEXTURE_MIRROR_ADDRESSMODE,this._reflectionRTT.wrapV=Le.TEXTURE_MIRROR_ADDRESSMODE,this._reflectionRTT.ignoreCameraViewport=!0;let s,i=null,r;const n=ce.Zero();this._refractionRTT.onBeforeRender=()=>{if(this._mesh&&(s=this._mesh.isVisible,this._mesh.isVisible=!1),!this.disableClipPlane){i=e.clipPlane;const o=this._mesh?this._mesh.absolutePosition.y:0;e.clipPlane=yi.FromPositionAndNormal(new x(0,o+.05,0),new x(0,1,0))}},this._refractionRTT.onAfterRender=()=>{this._mesh&&(this._mesh.isVisible=s),this.disableClipPlane||(e.clipPlane=i)},this._reflectionRTT.onBeforeRender=()=>{if(this._mesh&&(s=this._mesh.isVisible,this._mesh.isVisible=!1),!this.disableClipPlane){i=e.clipPlane;const o=this._mesh?this._mesh.absolutePosition.y:0;e.clipPlane=yi.FromPositionAndNormal(new x(0,o-.05,0),new x(0,-1,0)),ce.ReflectionToRef(e.clipPlane,n)}r=e.getViewMatrix(),n.multiplyToRef(r,this._reflectionTransform),e.setTransformMatrix(this._reflectionTransform,e.getProjectionMatrix()),e._mirroredCameraPosition=x.TransformCoordinates(e.activeCamera.position,n)},this._reflectionRTT.onAfterRender=()=>{this._mesh&&(this._mesh.isVisible=s),e.clipPlane=i,e.setTransformMatrix(r,e.getProjectionMatrix()),e._mirroredCameraPosition=null}}getAnimatables(){const e=[];return this.bumpTexture&&this.bumpTexture.animations&&this.bumpTexture.animations.length>0&&e.push(this.bumpTexture),this._reflectionRTT&&this._reflectionRTT.animations&&this._reflectionRTT.animations.length>0&&e.push(this._reflectionRTT),this._refractionRTT&&this._refractionRTT.animations&&this._refractionRTT.animations.length>0&&e.push(this._refractionRTT),e}getActiveTextures(){const e=super.getActiveTextures();return this._bumpTexture&&e.push(this._bumpTexture),e}hasTexture(e){return!!(super.hasTexture(e)||this._bumpTexture===e)}dispose(e){this.bumpTexture&&this.bumpTexture.dispose();let t=this.getScene().customRenderTargets.indexOf(this._refractionRTT);t!=-1&&this.getScene().customRenderTargets.splice(t,1),t=-1,t=this.getScene().customRenderTargets.indexOf(this._reflectionRTT),t!=-1&&this.getScene().customRenderTargets.splice(t,1),this._reflectionRTT&&this._reflectionRTT.dispose(),this._refractionRTT&&this._refractionRTT.dispose(),this._imageProcessingConfiguration&&this._imageProcessingObserver&&this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver),super.dispose(e)}clone(e){return H.Clone(()=>new V(e,this.getScene()),this)}serialize(){const e=super.serialize();if(e.customType="BABYLON.WaterMaterial",e.renderList=[],this._refractionRTT&&this._refractionRTT.renderList)for(let t=0;t<this._refractionRTT.renderList.length;t++)e.renderList.push(this._refractionRTT.renderList[t].id);return e}getClassName(){return"WaterMaterial"}static Parse(e,t,s){const i=H.Parse(()=>new V(e.name,t),e,t,s);return i._waitingRenderList=e.renderList,i}static CreateDefaultMesh(e,t){return Rs(e,{width:512,height:512,subdivisions:32,updatable:!1},t)}}h([R("bumpTexture")],V.prototype,"_bumpTexture",void 0);h([P("_markAllSubMeshesAsTexturesDirty")],V.prototype,"bumpTexture",void 0);h([oe()],V.prototype,"diffuseColor",void 0);h([oe()],V.prototype,"specularColor",void 0);h([A()],V.prototype,"specularPower",void 0);h([A("disableLighting")],V.prototype,"_disableLighting",void 0);h([P("_markAllSubMeshesAsLightsDirty")],V.prototype,"disableLighting",void 0);h([A("maxSimultaneousLights")],V.prototype,"_maxSimultaneousLights",void 0);h([P("_markAllSubMeshesAsLightsDirty")],V.prototype,"maxSimultaneousLights",void 0);h([A()],V.prototype,"windForce",void 0);h([Ms()],V.prototype,"windDirection",void 0);h([A()],V.prototype,"waveHeight",void 0);h([A()],V.prototype,"bumpHeight",void 0);h([A("bumpSuperimpose")],V.prototype,"_bumpSuperimpose",void 0);h([P("_markAllSubMeshesAsMiscDirty")],V.prototype,"bumpSuperimpose",void 0);h([A("fresnelSeparate")],V.prototype,"_fresnelSeparate",void 0);h([P("_markAllSubMeshesAsMiscDirty")],V.prototype,"fresnelSeparate",void 0);h([A("bumpAffectsReflection")],V.prototype,"_bumpAffectsReflection",void 0);h([P("_markAllSubMeshesAsMiscDirty")],V.prototype,"bumpAffectsReflection",void 0);h([oe()],V.prototype,"waterColor",void 0);h([A()],V.prototype,"colorBlendFactor",void 0);h([oe()],V.prototype,"waterColor2",void 0);h([A()],V.prototype,"colorBlendFactor2",void 0);h([A()],V.prototype,"waveLength",void 0);h([A()],V.prototype,"waveSpeed",void 0);h([A()],V.prototype,"waveCount",void 0);h([A()],V.prototype,"disableClipPlane",void 0);h([A("useWorldCoordinatesForWaveDeformation")],V.prototype,"_useWorldCoordinatesForWaveDeformation",void 0);h([P("_markAllSubMeshesAsMiscDirty")],V.prototype,"useWorldCoordinatesForWaveDeformation",void 0);h([A()],V.prototype,"useLogarithmicDepth",null);_e("BABYLON.WaterMaterial",V);const uo=l=>{let e=ws.CreatePlane("Ground Plane",{width:1e3,height:1e3,sideOrientation:ye.DOUBLESIDE},l);e.position.x=0,e.position.y=-.5,e.rotation.x=L.ToRadians(90),e.physicsImpostor=new $e(e,$e.BoxImpostor,{mass:0,friction:.08,restitution:0},l),e.checkCollisions=!0;let t=new le("Ground Plane Material",l);return t.gridRatio=3,t.majorUnitFrequency=30,t.lineColor=y.FromHexString("#fe01f5"),e.material=t,e},ho=l=>{let e=ye.CreateBox("Box",1,l);e.physicsImpostor=new $e(e,$e.BoxImpostor,{mass:0,friction:10,restitution:0},l),e.checkCollisions=!0;let t=new le("playerMaterial",l);t.gridRatio=.3,t.lineColor=y.FromHexString("#F9C80E"),e.material=t;const s=new Je(l,1);return s.xAxis.parent=e,s.yAxis.parent=e,s.zAxis.parent=e,e};function mo(l,e,t,s){for(var i=0;i<l;i++){const n=2*Math.PI*i/l,o=e*Math.sin(n),a=e*Math.cos(n);var r=t.createInstance("Clone: "+i);r.position=new x(o,0,a),r.rotationQuaternion=null,r.alwaysSelectAsActiveMesh=!0,r.freezeWorldMatrix(),r.isPickable=!1,r.physicsImpostor=new $e(r,$e.BoxImpostor,{mass:0,friction:10,restitution:.1},s),r.checkCollisions=!0}}let ze=.2,_o=5,Di=.02;function po(l,e,t,s,i,r,n){const o=new Ds(s);document.addEventListener("pointerlockchange",()=>{},!1),l.onclick=function(){l.requestPointerLock=l.requestPointerLock,l.requestPointerLock()},e.registerBeforeRender(()=>{let a=o.getDeviceSource(Ci.Keyboard),f=o.getDeviceSource(Ci.Mouse);a&&(a.getInput(87)==1&&t.translate(Ye.Z,ze,Ze.LOCAL),a.getInput(83)==1&&t.translate(Ye.Z,-ze,Ze.LOCAL),a.getInput(65)==1&&t.translate(Ye.X,-ze,Ze.LOCAL),a.getInput(68)==1&&t.translate(Ye.X,ze,Ze.LOCAL),a.getInput(81)==1&&t.rotate(new x(0,-1,0),Di),a.getInput(69)==1&&t.rotate(new x(0,1,0),Di),a.getInput(32)==1&&(t.physicsImpostor.setLinearVelocity(new x(0,_o,0)),t.translate(Ye.Y,ze,Ze.LOCAL)),a.getInput(17)==1&&t.translate(Ye.Y,-ze,Ze.LOCAL),a.getInput(70)==1&&(i.position=t.position,i.rotation.x=L.ToRadians(0),e.activeCamera=i,ze=0),a.getInput(67)==1&&(r.radius=10,e.activeCamera=r),a.getInput(82)==1&&(t.position=new x(0)),a.getInput(77)==1&&console.log("MENU")),f&&f.getInput(2)==1})}function go(l){let e=ye.CreateBox("skyBox",1e4,l),t=new ue("skyBoxMaterial",l);t.backFaceCulling=!1,t.inclination=-.5,e.material=t,l.registerBeforeRender(()=>{let i=1e-5;t.inclination+=i,t.inclination>.6&&(t.inclination=-.6)}),window.addEventListener("keydown",function(i){const n={49:{property:"inclination",value:0},50:{property:"inclination",value:-.5},51:{property:"luminance",value:.1},52:{property:"luminance",value:1},53:{property:"turbidity",value:40},54:{property:"turbidity",value:5},55:{property:"cameraOffset.y",value:300},56:{property:"cameraOffset.y",value:0},57:{property:"rayleigh",value:0},48:{property:"rayleigh",value:-.1}}[i.keyCode];n&&s(`material.${n.property}`,t[n.property],n.value)});function s(i,r,n){let o=[{frame:0,value:r},{frame:100,value:n}],a=new O("animation",i,100,O.ANIMATIONTYPE_FLOAT,O.ANIMATIONLOOPMODE_CONSTANT);a.setKeys(o),l.stopAnimation(e),l.beginDirectAnimation(e,[a],0,100,!1,1)}}function vo(l){Xe.ImportMesh("","/","city3.babylon",l,function(e){e.forEach(t=>{t.scaling=new x(50,50,50),t.position.y=40,t.physicsImpostor=new $e(t,$e.BoxImpostor,{mass:0,friction:.08,restitution:0},l);let s=new le("Ground Plane Material",l);s.gridRatio=.05,s.majorUnitFrequency=5,s.lineColor=new y(Math.random(),Math.random(),Math.random()),t.material=s})})}function To(l){let e,t,s,i,r;return{c(){e=Tt("div"),t=qi("0"),s=Ji(),i=Tt("div"),r=Tt("canvas"),this.h()},l(n){e=At(n,"DIV",{id:!0,class:!0});var o=xt(e);t=Qi(o,"0"),o.forEach(je),s=es(n),i=At(n,"DIV",{id:!0,class:!0});var a=xt(i);r=At(a,"CANVAS",{id:!0,class:!0}),xt(r).forEach(je),a.forEach(je),this.h()},h(){Ke(e,"id","fps"),Ke(e,"class","svelte-gu8g5l"),Ke(r,"id","renderCanvas"),Ke(r,"class","svelte-gu8g5l"),Ke(i,"id","canvasZone"),Ke(i,"class","svelte-gu8g5l")},m(n,o){Et(n,e,o),xi(e,t),Et(n,s,o),Et(n,i,o),xi(i,r)},p:St,i:St,o:St,d(n){n&&je(e),n&&je(s),n&&je(i)}}}function Ao(l){let e,t;async function s(){let i=document.getElementById("fps"),r=document.getElementById("renderCanvas");e=new Us(r,!0,{preserveDrawingBuffer:!0,stencil:!0}),e.displayLoadingUI(),t=new ve(e),t.enablePhysics(new x(0,-9.81,0),new Vs),t.collisionsEnabled=!0;let n=Wr(t),o=Hr(t);uo(t);let a=ho(t);n.lockedTarget=a,n.attachControl(r,!1),o.attachControl(r,!1);const f=new Bs("FollowCamera",new x(0,0,0),t);f.lockedTarget=a,t.activeCamera=f,f.rotationOffset=180,po(r,t,a,e,o,n),go(t);const c=10,u=10;return mo(c*5,u,a,t),vo(t),t.registerBeforeRender(()=>{i.innerText=e.getFps().toFixed()+" fps",a.position.y<-100&&(a.position=new x(0,0,0))}),t}return ts(async()=>{await s(),e.hideLoadingUI(),e.runRenderLoop(()=>{t.render()}),window.addEventListener("resize",()=>{e.resize()})}),[]}class So extends Ki{constructor(e){super(),Yi(this,e,Ao,To,Zi,{})}}export{So as component};
