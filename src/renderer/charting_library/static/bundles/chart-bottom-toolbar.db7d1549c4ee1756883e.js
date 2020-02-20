webpackJsonp([11],{1006:function(e,t,n){"use strict";function a(e){var t;return t=function(t){function n(e,n){var a=t.call(this,e,n)||this;return a._handleSelectRange=function(e){var t,n,i;a.setState({activeRange:e.value}),t=a.context.chartWidget,n=t.model(),i={val:e.value,res:e.targetResolution},n.loadRange(i)},a.state={ranges:[]},a}return C.c(n,t),n.prototype.componentDidMount=function(){var e=this,t=this.context.chartWidget;t.withModel(null,function(){var n=t.model(),a=n.mainSeries();a.onStatusChanged().subscribe(e,e._updateAvailableRanges),R.enabled("update_timeframes_set_on_symbol_resolve")&&a.onSymbolResolved().subscribe(e,e._updateAvailableRanges),a.priceScale().properties().lockScale.subscribe(e,e._updateAvailableRanges),a.onIntervalChanged().subscribe(e,e._onRangeChanged),n.model().onResetScales().subscribe(e,e._resetActiveInterval),a.onSymbolResolved().subscribe(e,e._resetActiveInterval),a.properties().extendedHours.subscribe(e,e._resetActiveInterval),e._updateAvailableRanges()}),t.onScroll().subscribe(this,this._resetActiveInterval)},n.prototype.componentWillUnmount=function(){var e=this,t=this.context.chartWidget;t.withModel(null,function(){var n=t.model(),a=n.mainSeries();a.onStatusChanged().unsubscribe(e,e._updateAvailableRanges),R.enabled("update_timeframes_set_on_symbol_resolve")&&a.onSymbolResolved().unsubscribe(e,e._updateAvailableRanges),a.priceScale().properties().lockScale.unsubscribe(e,e._updateAvailableRanges),a.onIntervalChanged().unsubscribe(e,e._onRangeChanged),n.model().onResetScales().unsubscribe(e,e._resetActiveInterval),a.onSymbolResolved().unsubscribe(e,e._resetActiveInterval),a.properties().extendedHours.unsubscribe(e,e._resetActiveInterval)}),t.onScroll().unsubscribe(this,this._resetActiveInterval)},n.prototype.render=function(){return S.createElement(e,{goToDateButton:this.props.goToDateButton,className:this.props.className,ranges:this.state.ranges,activeRange:this.state.activeRange,onSelectRange:this._handleSelectRange})},n.prototype._onRangeChanged=function(e,t){this.setState({activeRange:t.timeframe})},n.prototype._resetActiveInterval=function(){this.setState({activeRange:void 0})},n.prototype._updateAvailableRanges=function(){var e,t,n,a=this.context,i=a.availableTimeFrames,o=a.chartWidget;o.model()&&(e=o.model().mainSeries(),(t=e.status())!==M.STATUS_LOADING&&t!==M.STATUS_RESOLVING&&(n=i(e.symbolInfo(),e.status()),0!==n.length&&this.setState({ranges:n})))},n}(S.PureComponent),t.contextTypes={availableTimeFrames:x.func.isRequired,chartWidget:x.object.isRequired},t}function i(e){return S.createElement("div",{className:B.slider,ref:e.reference})}function o(e){return function(t){function n(){var e=null!==t&&t.apply(this,arguments)||this;return e._activeTab=null,e}return C.c(n,t),n.prototype.componentDidUpdate=function(){this._componentDidUpdate()},n.prototype.componentDidMount=function(){this._componentDidUpdate()},n.prototype.render=function(){var t=this,n=this.props.className,a=this._generateTabs();return S.createElement("div",{className:E(n,B.tabs)},a,S.createElement(e,{
reference:function(e){t._slider=e}}))},n.prototype._generateTabs=function(){var e=this;return this._activeTab=null,S.Children.map(this.props.children,function(t){var n=t,a=!!n.props.isActive,i={reference:function(t){a&&(e._activeTab=t),n.props.reference&&n.props.reference(t)}};return S.cloneElement(n,i)})},n.prototype._componentDidUpdate=function(){var e,t,n=Object($.ensureNotNull)(this._slider),a=n.style;this._activeTab?(e=this._activeTab.offsetWidth,t=this._activeTab.offsetLeft,a.transform="translateX("+t+"px)",a.width=e+"px",a.opacity="1"):a.opacity="0"},n}(S.PureComponent)}function s(e){var t,n=E(F.item,(t={},t[F.isActive]=e.isActive,t[F.isFirst]=e.isFirst,t[F.isLast]=e.isLast,t));return S.createElement("div",{className:n,onClick:e.onClick,ref:e.reference},e.children)}function r(e){return S.createElement("div",{className:O.slider,ref:e.reference},S.createElement("div",{className:O.inner}))}function c(e){var t=e.className,n=e.ranges,a=e.activeRange,i=e.onSelectRange;return S.createElement(q,{className:E(L.sliderRow,t)},n.map(function(e,t){return S.createElement(s,{key:e.value,isFirst:0===t,isLast:t===n.length-1,isActive:a===e.value,onClick:i&&i.bind(null,e)},S.createElement("div",{title:e.description||e.text,className:"apply-common-tooltip"},e.text))}))}function l(e){var t=e.reference,n=e.className,a=e.children,i=C.e(e,["reference","className","children"]);return S.createElement("button",C.a({},i,{className:E(n,Y.button),ref:t}),S.createElement("span",{className:Y.inner},a))}function u(e){e.updateActions();var t=e.actions();return t&&t.applyTimeZone&&t.applyTimeZone.subActions?t.applyTimeZone.subActions:[]}function p(e){return S.createElement("span",{className:E(oe.separator,e.className)})}function d(e){var t;return t=function(t){function n(e,n){var a=t.call(this,e,n)||this;return a._priceScale=null,a._handleSelect=function(){var e=a.context.chartWidget,t=e.model(),n=Object($.ensureNotNull)(a.state.series),i=n.priceScale(),o=i.mode();n.priceScale().isLockScale()||t.setPriceScaleMode({log:!o.log},i,window.t("Toggle Log Scale"))},a.state={isActive:!1,series:null},a}return C.c(n,t),n.prototype.componentDidMount=function(){var e=this,t=this.context.chartWidget;t.withModel(null,function(){var n=t.model().mainSeries(),a=n.priceScale();e._handleMainSeriesPriceScaleChanged(a),n.priceScaleChanged().subscribe(e,e._handleMainSeriesPriceScaleChanged),e._handleModeChanged({},a.mode()),e.setState({isActive:n.priceScale().isLog(),series:n})})},n.prototype.componentWillUnmount=function(){var e=this,t=this.context.chartWidget;t.withModel(null,function(){t.model().mainSeries().priceScaleChanged().unsubscribe(e,e._handleMainSeriesPriceScaleChanged)}),null!==this._priceScale&&(this._priceScale.modeChanged().unsubscribeAll(this),this._priceScale=null)},n.prototype.render=function(){var t=this.props.className,n=this.state,a=n.isActive,i=n.series;return S.createElement(e,{className:t,isLogarithm:a,isDisabled:null===i,onClick:this._handleSelect})},n.prototype._handleMainSeriesPriceScaleChanged=function(e){var t={}
;null!==this._priceScale&&(t=this._priceScale.mode(),this._priceScale.modeChanged().unsubscribe(this,this._handleModeChanged)),this._priceScale=e,this._priceScale.modeChanged().subscribe(this,this._handleModeChanged),this._handleModeChanged(t,e.mode())},n.prototype._handleModeChanged=function(e,t){e.log!==t.log&&this.setState({isActive:t.log})},n}(S.PureComponent),t.contextTypes={chartWidget:x.object.isRequired},t}function h(e){var t;return t=function(t){function n(e,n){var a=t.call(this,e,n)||this;return a._priceScale=null,a._handleSelect=function(){var e=a.context.chartWidget,t=e.model(),n=Object($.ensureNotNull)(a.state.series),i=n.priceScale(),o=i.mode();t.setPriceScaleMode({autoScale:!o.autoScale},i,window.t("Toggle Auto Scale"))},a.state={isActive:!1,series:null},a}return C.c(n,t),n.prototype.componentDidMount=function(){var e=this,t=this.context.chartWidget;t.withModel(null,function(){var n=t.model().mainSeries(),a=n.priceScale();e._handleMainSeriesPriceScaleChanged(a),n.priceScaleChanged().subscribe(e,e._handleMainSeriesPriceScaleChanged),e._handleModeChanged({},a.mode()),e.setState({isActive:n.priceScale().isAutoScale(),series:n})})},n.prototype.componentWillUnmount=function(){var e=this,t=this.context.chartWidget;t.withModel(null,function(){t.model().mainSeries().priceScaleChanged().unsubscribe(e,e._handleMainSeriesPriceScaleChanged)}),null!==this._priceScale&&(this._priceScale.modeChanged().unsubscribeAll(this),this._priceScale=null)},n.prototype.render=function(){var t=this.props.className,n=this.state,a=n.isActive,i=n.series;return S.createElement(e,{className:t,isAuto:a,isDisabled:null===i,onClick:this._handleSelect})},n.prototype._handleMainSeriesPriceScaleChanged=function(e){var t={};null!==this._priceScale&&(t=this._priceScale.mode(),this._priceScale.modeChanged().unsubscribe(this,this._handleModeChanged)),this._priceScale=e,this._priceScale.modeChanged().subscribe(this,this._handleModeChanged),this._handleModeChanged(t,e.mode())},n.prototype._handleModeChanged=function(e,t){e.autoScale!==t.autoScale&&this.setState({isActive:t.autoScale})},n}(S.PureComponent),t.contextTypes={chartWidget:x.object.isRequired},t}function m(e){var t;return t=function(t){function n(e,n){var a=t.call(this,e,n)||this;return a._priceScale=null,a._handleSelect=function(){var e=a.context.chartWidget,t=e.model(),n=Object($.ensureNotNull)(a.state.series),i=n.priceScale(),o=i.mode();n.priceScale().isLockScale()||t.setPriceScaleMode({percentage:!o.percentage},i,window.t("Toggle Percentage Scale"))},a.state={isActive:!1,series:null},a}return C.c(n,t),n.prototype.componentDidMount=function(){var e=this,t=this.context.chartWidget;t.withModel(null,function(){var n=t.model().mainSeries(),a=n.priceScale();e._handleMainSeriesPriceScaleChanged(a),n.priceScaleChanged().subscribe(e,e._handleMainSeriesPriceScaleChanged),e._handleScaleChange({},a.mode()),e.setState({isActive:n.priceScale().isPercentage(),series:n})})},n.prototype.componentWillUnmount=function(){var e=this,t=this.context.chartWidget;t.withModel(null,function(){
t.model().mainSeries().priceScaleChanged().unsubscribe(e,e._handleMainSeriesPriceScaleChanged)}),null!==this._priceScale&&(this._priceScale.modeChanged().unsubscribeAll(this),this._priceScale=null)},n.prototype.render=function(){var t=this.props.className,n=this.state,a=n.isActive,i=n.series;return S.createElement(e,{className:t,isPercentage:a,isDisabled:null===i,onClick:this._handleSelect})},n.prototype._handleMainSeriesPriceScaleChanged=function(e){var t={};null!==this._priceScale&&(t=this._priceScale.mode(),this._priceScale.modeChanged().unsubscribe(this,this._handleScaleChange)),this._priceScale=e,this._priceScale.modeChanged().subscribe(this,this._handleScaleChange),this._handleScaleChange(t,e.mode())},n.prototype._handleScaleChange=function(e,t){e.percentage!==t.percentage&&this.setState({isActive:t.percentage})},n}(S.PureComponent),t.contextTypes={chartWidget:x.object.isRequired},t}function f(e){var t;return t=function(t){function n(e,n){var a,i=t.call(this,e,n)||this;return i._handleClick=function(e){var t=i.context.resizerDetacher;e.shiftKey&&t.detachable.value()?t.detach():i.state.isFullscreen?t.exitFullscreen():t.requestFullscreen()},i._handleLayoutChange=function(e){i.setState({isFullscreen:e})},a=i.context.resizerDetacher,i.state={isFullscreen:a.fullscreen.value()},i}return C.c(n,t),n.prototype.componentDidMount=function(){this.context.resizerDetacher.fullscreen.subscribe(this._handleLayoutChange)},n.prototype.componentWillUnmount=function(){this.context.resizerDetacher.fullscreen.unsubscribe(this._handleLayoutChange)},n.prototype.render=function(){var t=this.props.className,n=this.state.isFullscreen;return S.createElement(e,{className:t,isFullscreen:n,onClick:this._handleClick})},n}(S.PureComponent),t.contextTypes={chartWidget:x.object.isRequired,resizerDetacher:x.object.isRequired},t}function g(e){if(e.map){return S.Children.toArray(e.children).map(e.map)}return e.children}function b(e){return Object.keys(e).map(function(t){return{name:t,width:e[t].offsetWidth}}).sort(function(e,t){return we[e.name]-we[t.name]})}function v(e){var t={};return Object.keys(e).forEach(function(n){var a,i=e[n];null!==i&&null!==(a=y.findDOMNode(i))&&(t[n]=a)}),t}function _(e,t){return function(n,a,i){var o,s,r,c;return S.isValidElement(n)&&"string"!=typeof n.type&&(o=n.props,"string"==typeof o.className)?(s={className:E(o.className,0===a&&fe.first,a===i.length-1&&fe.last)},r=e(),c=Object($.ensureDefined)(Re.get(n.type)),S.createElement("div",{key:null===n.key?void 0:n.key,className:E(fe.inline,r[c]&&fe.collapsed),ref:function(e){return t(e,c)}},S.cloneElement(n,s))):n}}var C,S,y,x,E,w,R,T,A,M,N,k,W,z,D,j,$,B,F,I,P,O,L,q,U,H,G,V,Z,J,K,X,Y,Q,ee,te,ne,ae,ie,oe,se,re,ce,le,ue,pe,de,he,me,fe,ge,be,ve,_e,Ce,Se,ye,xe,Ee,we,Re,Te,Ae,Me,Ne;Object.defineProperty(t,"__esModule",{value:!0}),C=n(0),S=n(4),y=n(30),n(9),x=n(23),E=n(12),w=n(95),R=n(5),T=n(152),A=n(80),M=n(35),N=n(96),k=n(353),W=n(1127),z={title:window.t("Date Range"),goToDate:window.t("Go to...")},D=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
;return t._handleGoToDateClick=function(){var e=t.context.chartWidget;Object(k.showGoToDateDialog)(e.model())},t._handleRangeSelect=function(e){e&&t.props.onSelectRange&&t.props.onSelectRange(e)},t}return C.c(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.ranges,a=t.activeRange,i=t.goToDateButton;return S.createElement(T.a,{className:W.button,content:z.title,arrow:!0,verticalAttachEdge:T.b.Top,verticalDropDirection:T.c.FromBottomToTop,horizontalMargin:4},n.map(function(t){return S.createElement(A.a,{key:t.value,label:t.description||t.text,isActive:a===t.value,onClick:e._handleRangeSelect,onClickArg:t})}),i&&S.createElement(N.a,null),i&&S.createElement(A.a,{label:z.goToDate,onClick:this._handleGoToDateClick}))},t.contextTypes={chartWidget:x.object.isRequired},t}(S.PureComponent),j=a(D),$=n(7),B=n(1079),o(i),F=n(1128),I=n(1129),P=n(153),O=Object(P.a)(B,I),L=n(1130),q=o(r),U=a(c),H=n(60),G=n(1131),V={title:window.t("Go to...")},Z=Object(H.b)({keys:["Alt","G"],text:"{0} + {1}"}),J=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._handleClick=function(){var e=t.context.chartWidget;Object(k.showGoToDateDialog)(e.model())},t}return C.c(t,e),t.prototype.render=function(){var e=this.props,t=e.className;return e.ranges.length>0&&S.createElement("div",{className:E("apply-common-tooltip",G.button,t),"data-tooltip-hotkey":Z,onClick:this._handleClick},V.title)},t.contextTypes={chartWidget:x.object.isRequired},t}(S.PureComponent),K=a(J),X=n(1027),Y=n(1132),Q=n(368),ee=n(120),te=n(216),ne=n(1133),ae={hint:window.t("Timezone")},ie=function(e){function t(t,n){var a=e.call(this,t,n)||this;return a._element=null,a._timeFormatter=new ee.TimeFormatter,a._handleRef=function(e){a._element=e},a.state={time:"",timezone:""},a}return C.c(t,e),t.prototype.componentDidMount=function(){var e,t=this,n=this.context.chartWidget,a=this.props.withMenu;n.withModel(null,function(){var e=n.model();e.model().mainSeries().onSymbolResolved().subscribe(t,t.updateTimezonesButton),e.model().properties().timezone.subscribe(t,t.updateTimezonesButton)}),a&&(e=Object($.ensureNotNull)(this._element),Object(X.bindPopupMenu)(e,function(){return u(n).map(function(e){return{action:e.enabled?e.executeCallback.bind(e):null,addClass:e.enabled?"":"special",disabled:!e.enabled,iconClass:e.checkable&&e.checked?"icon checked-icon":"unchecked-icon",svg:e.checkable&&e.checked?te:"",title:e.text||""}})},{direction:"up",addClass:"context-menu",svg:!0,wrapIcon:!0}))},t.prototype.componentWillUnmount=function(){var e,t=this,n=this.context.chartWidget;n.withModel(null,function(){var e=n.model();e.model().mainSeries().onSymbolResolved().unsubscribe(t,t.updateTimezonesButton),e.model().properties().timezone.unsubscribe(t,t.updateTimezonesButton)}),e=Object($.ensureNotNull)(this._element),Object(X.unbindPopupMenu)(e)},t.prototype.render=function(){var e=this.props,t=e.className,n=e.isDisabled,a=this.state,i=a.time,o=a.timezone;return S.createElement(l,{className:E(t,ne.button,"apply-common-tooltip"),title:ae.hint,reference:this._handleRef,
disabled:n},i&&o&&i+" ("+o+")")},t.prototype.updateTimezonesButton=function(){var e,t,n,a,i=this.context.chartWidget;i.model()&&null!==i.model().mainSeries().symbolInfo()&&(e=i.model().model().timezone(),"exchange"===e&&(t=Object($.ensureNotNull)(i.model().mainSeries().symbolInfo()),(n=t.timezone)&&(e=n)),a=Object(Q.a)(e),this._timezoneOffset=a.offset,this.setState({timezone:a.string}),this.tickClock())},t.prototype.tickClock=function(){var e,t,n=this.context.chartApiInstance,a=this._timezoneOffset;void 0!==a&&(e=1e3*n.serverTimeOffset(),t=new Date(Date.now()+a+e),this.setState({time:this._timeFormatter.format(t)}))},t.contextTypes={chartWidget:x.object.isRequired,chartApiInstance:x.object.isRequired},t}(S.PureComponent),oe=n(1134),se=n(82),re=n(70),ce=n(47),le=n(1135),ue=n(1136),pe={hint:window.t("Scales Properties")},de=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._element=null,t._handleRef=function(e){t._element=e},t}return C.c(t,e),t.prototype.componentDidMount=function(){var e=this.context.chartWidget,t=Object($.ensureNotNull)(this._element);Object(X.bindPopupMenu)(t,function(){var t,n,a,i,o,s,r,c=e.paneWidgets();for(t=0;t<c.length;++t)if(n=c[t],n.containsMainSeries()){if(a=[],!(i=n.getDefaultPriceAxisWidget()))return a;for(o=i.getContextMenuActions(),s=0;s<o.length;++s)r=o[s],r instanceof ce.ActionSeparator?a.push({separator:!0}):a.push({action:r.enabled?r.executeCallback.bind(r):null,addClass:r.enabled?"":"special",disabled:!r.enabled,iconClass:r.checkable&&r.checked?"icon checked-icon":"unchecked-icon",svg:r.checkable&&r.checked?te:"",title:r.text||""});return a}return[]},{direction:"up",addClass:"context-menu",reverse:!0,svg:!0,wrapIcon:!0})},t.prototype.componentWillUnmount=function(){var e=Object($.ensureNotNull)(this._element);Object(X.unbindPopupMenu)(e)},t.prototype.render=function(){var e=this.props.className;return S.createElement(l,{reference:this._handleRef,className:E("apply-common-tooltip",e),title:pe.hint},S.createElement(re.a,{className:ue.icon,icon:le}))},t.contextTypes={chartWidget:x.object.isRequired},t}(S.PureComponent),he=n(1137),me=n(1138),fe=n(1139),_e={extLabel:window.t("ext"),extHint:window.t("Extended Hours is available only for intraday charts"),percentageHint:window.t("Toggle Percentage"),logLabel:window.t("log",{context:"scale"}),logHint:window.t("Toggle Log Scale"),autoLabel:window.t("auto",{context:"scale"}),autoHint:window.t("Toggle Auto Scale"),fullscreenHint:window.t("Toggle Maximize Chart"),adjLabel:window.t("adj",{context:"adjustments"}),adjHint:window.t("Adjust data for dividends")},Ce=d(function(e){return S.createElement(se.a,{text:_e.logLabel,title:_e.logHint,className:e.className,isActive:e.isLogarithm,onClick:e.onClick})}),Se=h(function(e){return S.createElement(se.a,{text:_e.autoLabel,title:_e.autoHint,className:e.className,isActive:e.isAuto,onClick:e.onClick})}),ye=m(function(e){return S.createElement(se.a,{icon:he,title:_e.percentageHint,className:e.className,isActive:e.isPercentage,isDisabled:e.isDisabled,onClick:e.onClick})}),
xe=f(function(e){return S.createElement(se.a,{icon:me,title:_e.fullscreenHint,className:e.className,isActive:e.isFullscreen,onClick:e.onClick})}),ge={},ge.properties=!0,ge.fullscreen=!0,Ee=ge,be={},be.fullscreen=Number.MIN_SAFE_INTEGER,be.properties=Number.MIN_SAFE_INTEGER,be.timeZones=-1,be.auto=0,be.logarithm=1,be.percentage=2,be.ext=3,be.adj=4,we=be,Re=function(){var e=new Map;return e.set(Ce,"logarithm"),e.set(ye,"percentage"),e.set(Se,"auto"),e.set(xe,"fullscreen"),e.set(de,"properties"),e}(),ve={dateRangeMode:"hidden"},ve.timeZones=!0,ve.fullscreen=!0,ve.properties=!0,ve.auto=!0,ve.logarithm=!0,ve.percentage=!0,ve.ext=!0,ve.adj=!0,Te=ve,Ae=function(e){function t(t,n){var a,i,o,s,r=e.call(this,t,n)||this;return r._timezoneButtonRef=null,r._layout=Object.assign({},Te),r._raf=null,r._toolbar=null,r._rangeExpanded=null,r._rangeCollapsed=null,r._seriesControls=null,r._seriesComponents={},r._injector=_(function(){return r._layout},function(e,t){return r._seriesComponents[t]=e}),r._handleTimezoneButtonRef=function(e){r._timezoneButtonRef=e},r._handleMeasure=function(){null!==r._toolbar&&r.resizeUI()},r._handleFullscreenableChange=function(e){r._setStateWithResize({isFullscreenable:e})},r._handleActiveWidgetChange=function(){var e=r.context,t=e.chartWidgetCollection,n=e.chartWidget;r.setState({isActive:t.activeChartWidget.value()===n})},r._handleToolbarRef=function(e){return r._toolbar=e},r._handleRangeCollapsedRef=function(e){return r._rangeCollapsed=e},r._handleRangeExpandedRef=function(e){return r._rangeExpanded=e},r._handleSeriesControlsRef=function(e){return r._seriesControls=e},r._handleTimeZonesRef=function(e){r._seriesComponents.timeZones=e},a=r.context,i=a.chartWidgetCollection,o=a.chartWidget,s=a.resizerDetacher,r.state={isActive:i.activeChartWidget.value()===o,isFullscreenable:s.fullscreenable.value()},r}return C.c(t,e),t.prototype.componentDidMount=function(){var e=this.context,t=e.resizerDetacher,n=e.chartWidgetCollection;t.fullscreenable.subscribe(this._handleFullscreenableChange),n.activeChartWidget.subscribe(this._handleActiveWidgetChange),this.updateTimezonesButton(),this.resizeUI()},t.prototype.componentWillUnmount=function(){var e=this.context,t=e.resizerDetacher,n=e.chartWidgetCollection;t.fullscreenable.unsubscribe(this._handleFullscreenableChange),n.activeChartWidget.unsubscribe(this._handleActiveWidgetChange),null!==this._raf&&(cancelAnimationFrame(this._raf),this._raf=null)},t.prototype.render=function(){var e=this._layout,t=this.state.isActive;return S.createElement("div",{className:fe.toolbar,ref:this._handleToolbarRef},this.props.timeFramesWidgetEnabled&&S.createElement(g,null,S.createElement("div",{className:E(fe.dateRangeWrapper,"collapsed"!==e.dateRangeMode&&fe.collapsed),ref:this._handleRangeCollapsedRef},S.createElement("div",{className:E(fe.dateRangeCollapsed)},S.createElement(j,{goToDateButton:this.props.goToDateEnabled}))),S.createElement(w,{onMeasure:this._handleMeasure},S.createElement("div",{className:E(fe.dateRangeWrapper,"expanded"!==e.dateRangeMode&&fe.collapsed),
ref:this._handleRangeExpandedRef},S.createElement("div",{className:E(fe.dateRangeExpanded)},S.createElement(U,null),this.props.goToDateEnabled&&S.createElement(p,null),this.props.goToDateEnabled&&S.createElement(K,null))))),S.createElement("div",{className:fe.seriesControlWrapper,ref:this._handleSeriesControlsRef},this.props.timeWidgetEnabled&&S.createElement(w,{onMeasure:this._handleMeasure},S.createElement("div",{className:E(fe.inline,e.timeZones&&fe.collapsed,!t&&fe.hidden),ref:this._handleTimeZonesRef},S.createElement("div",{className:fe.inline},S.createElement(ie,{className:fe.timezone,withMenu:this.props.timezoneMenuEnabled,ref:this._handleTimezoneButtonRef})),S.createElement("div",{className:fe.inline},S.createElement(p,null)))),S.createElement(g,{map:this._injector},this.props.percentageScaleButtonEnabled&&!R.enabled("fundamental_widget")&&S.createElement(ye,{className:fe.icon}),this.props.logScaleButtonEnabled&&S.createElement(Ce,{className:fe.item}),this.props.autoScaleButtonEnabled&&S.createElement(Se,{className:fe.item}),this.props.scalePropertiesButtonEnabled&&S.createElement(de,{className:fe.icon}),this.props.fullscreenButtonEnabled&&this.state.isFullscreenable&&S.createElement(xe,{className:fe.icon}))))},t.prototype.tickClock=function(){this.state.isActive&&null!==this._timezoneButtonRef&&this._timezoneButtonRef.tickClock()},t.prototype.updateTimezonesButton=function(){null!==this._timezoneButtonRef&&this._timezoneButtonRef.updateTimezonesButton()},t.prototype.resizeUI=function(){this._handleResize()},t.prototype._handleResize=function(){var e=this;null===this._raf&&(this._raf=requestAnimationFrame(function(){var t,n,a,i,o,s,r,c,l,u,p,d=e._layout,h=Object($.ensureNotNull)(e._toolbar),m=Object($.ensureNotNull)(e._rangeExpanded),f=b(v(e._seriesComponents)),g=h.offsetWidth,_=f.reduce(function(e,t){return e+t.width},0),C=m.offsetWidth,S=!!m.textContent,y=g-_-C<=0,x=!S||y?"collapsed":"expanded";if(Object.assign(d,{dateRangeMode:x}),"expanded"!==x){for(i=Object($.ensureNotNull)(e._rangeCollapsed),o=i.offsetWidth,s=g-o-0,r=0,c=0,l=0,u=f;l<u.length;l++)p=u[l],r+=p.width,p.name in Ee?(c+=p.width,Object.assign(d,(t={},t[p.name]=!1,t))):Object.assign(d,(n={},n[p.name]=s<=r,n));s<=c&&Object.assign(d,{dateRangeMode:"hidden"})}else Object.assign(d,(a={},a.timeZones=!1,a.fullscreen=!1,a.properties=!1,a.auto=!1,a.logarithm=!1,a.percentage=!1,a.ext=!1,a.adj=!1,a));e._applyResizing(),e._raf=null}))},t.prototype._setStateWithResize=function(e){var t=this;Object.assign(this._layout,Te),this._applyResizing(),this.setState(e,function(){return t._handleResize()})},t.prototype._applyResizing=function(){var e=this,t=this._layout,n=t.dateRangeMode,a=C.e(t,["dateRangeMode"]);this._rangeExpanded&&this._rangeExpanded.classList.toggle(fe.collapsed,"expanded"!==n),this._rangeCollapsed&&this._rangeCollapsed.classList.toggle(fe.collapsed,"collapsed"!==n),Object.keys(a).forEach(function(t){var n=t,i=e._seriesComponents[n];i&&i.classList.toggle(fe.collapsed,a[n])})},t.contextTypes={chartApiInstance:x.object.isRequired,
chartWidget:x.object.isRequired,chartWidgetCollection:x.object.isRequired,resizerDetacher:x.object.isRequired},t}(S.PureComponent),Me=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return C.c(t,e),t.prototype.getChildContext=function(){return{chartWidget:this.props.chartWidget,chartApiInstance:this.props.chartApiInstance,chartWidgetCollection:this.props.chartWidgetCollection,resizerDetacher:this.props.resizerDetacher,availableTimeFrames:this.props.availableTimeFrames}},t.prototype.render=function(){return this.props.children},t.childContextTypes={chartWidget:x.object,chartApiInstance:x.object,chartWidgetCollection:x.object,resizerDetacher:x.object,availableTimeFrames:x.func},t}(S.PureComponent),n.d(t,"BottomToolbarRenderer",function(){return Ne}),Ne=function(){function e(e,t,n,a,i,o){var s,r,c,l=this;this._component=null,this._container=e,s=o.timeFramesWidgetEnabled?o.timeFramesWidget.availableTimeFrames:void 0,r={timeFramesWidgetEnabled:o.timeFramesWidgetEnabled,goToDateEnabled:o.timeFramesWidget.goToDateEnabled,timeWidgetEnabled:o.timeWidgetEnabled,timezoneMenuEnabled:o.timeWidget&&o.timeWidget.timezoneMenuEnabled,extendedHoursButtonEnabled:o.extendedHoursButtonEnabled,adjustForDividendsButtonEnabled:o.adjustForDividendsButtonEnabled,logScaleButtonEnabled:o.logScaleButtonEnabled,percentageScaleButtonEnabled:o.percentageScaleButtonEnabled,autoScaleButtonEnabled:o.autoScaleButtonEnabled,scalePropertiesButtonEnabled:o.scalePropertiesButtonEnabled,fullscreenButtonEnabled:o.fullscreenButtonEnabled},c=S.createElement(Me,{chartWidget:t,chartWidgetCollection:n,chartApiInstance:a,resizerDetacher:i,availableTimeFrames:s},S.createElement(Ae,C.a({ref:function(e){return l._component=e}},r))),y.render(c,e),e.setAttribute("data-initialized","true")}return e.prototype.destroy=function(){y.unmountComponentAtNode(this._container),this._container.removeAttribute("data-initialized")},e.prototype.tickClock=function(){Object($.ensureNotNull)(this._component).tickClock()},e.prototype.updateUI=function(){Object($.ensureNotNull)(this._component).resizeUI()},e.prototype.resizeUI=function(){this._component&&this._component.resizeUI()},e}()},1015:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path d="M5.182 6.596l-3.889-3.889-.707-.707 1.414-1.414.707.707 3.889 3.889 3.889-3.889.707-.707 1.414 1.414-.707.707-3.889 3.889 3.889 3.889.707.707-1.414 1.414-.707-.707-3.889-3.889-3.889 3.889-.707.707-1.414-1.414.707-.707 3.889-3.889z"/></svg>'},1027:function(e,t,n){"use strict";var a,i=n(211).ESC,o=function(e,t,a){var s,r,c,l,u,p,d=".popup-menu";e=$(e),a=a||{},a.activeClass=a.activeClass||"",s=(a.event||"click")+d,a.hideEvent&&(r=a.hideEvent+d),c=function(){},l=c,u={},p=function(s,p,h){function m(t){var n=$(t.target).parents().andSelf();n.is(_)||n.is(e)||n.is(".charts-popup-tab-headers, .charts-popup-itemheader")||l()}function f(e){if(u.preventFirstProcessClick)return void(u.preventFirstProcessClick=!1);var t=$(e.target).parents().andSelf()
;t.is(".charts-popup-tab-headers, .charts-popup-itemheader")||a.notCloseOnButtons&&t.is(".icon-delete")||l()}function g(e){e.keyCode===i&&l()}function b(t,i,s){var r,c,l,u,p,d,h,m,f,g,v,C,S,y,x,E;if(t instanceof o.TabGroup){if(!t.tabs||!t.tabs.length)return;return 1!==t.tabs.length||t.tabs[0].title?(r=$('<div class="charts-popup-tab-group"></div>').appendTo(s),c=$('<div class="charts-popup-tab-headers"></div>').appendTo(r),l=null,void $.each(t.tabs||[],function(e,n){var a,i;n.items&&n.items.length&&(a=$('<div class="charts-popup-tab"></div>').hide().appendTo(r),$.each(n.items,function(){b(this,void 0,a)}),i=$('<span class="charts-popup-tab-header">').append($('<a href="javascript://" class="charts-popup-tab-header-label">').text(n.name)).appendTo(c),i.on("click",function(e){i.is(".active")||(c.find(".charts-popup-tab-header.active").removeClass("active"),i.addClass("active"),r.find(".charts-popup-tab").hide(),a.show(),e&&e.preventDefault(),"function"==typeof t.onChange&&t.onChange.call(t,n.name))}),l&&!n.active||(l=i,c.find(".charts-popup-tab-header.active").removeClass("active"),i.addClass("active"),r.find(".charts-popup-tab").hide(),a.show()))})):void $.each(t.tabs[0].items,function(){b(this,void 0,s)})}return t instanceof o.Group?(u=$('<div class="charts-popup-group"></div>').appendTo(s),t.title&&(p=$('<div class="charts-popup-itemheader"></div>').text(t.title).prepend($('<span class="charts-popup-itemheader-icon"></span>')),t.collapsible&&(u.addClass("charts-popup-group-collapsible"),u.toggleClass("collapsed",t.collapsed),p.on("click",function(){u.toggleClass("collapsed"),"function"==typeof t.onChange&&t.onChange(u.hasClass("collapsed")),_.height()===parseInt(_.css("max-height"))?_.addClass("popup-menu-scroll-y"):_.height()<parseInt(_.css("max-height"))&&_.removeClass("popup-menu-scroll-y")})),u.append(p)),void $.each(t.items,function(e){b(this,1,u)})):t instanceof o.Header?void s.append($('<div class="charts-popup-itemheader"></div>').text(t.title)):t.separator?(d=$('<span class="separator"></span>'),void s.append(d)):(d=$('<a class="item">'),t.url&&d.attr("href",t.url),t.target&&d.attr("target",t.target),i||d.addClass("first"),"function"==typeof t.active?t.active(t)&&d.addClass("active"):t.active&&d.addClass("active"),t.addClass&&d.addClass(t.addClass),t.addData&&d.data(t.addData),t.disabled&&d.addClass("disabled"),"function"==typeof t.action&&(h=t.action,m=function(e){$(e.target).parents().andSelf().is(y)||(h.apply(d,arguments),!t.url&&e&&"function"==typeof e.preventDefault&&e.preventDefault())},a.upAction?d.bind("mouseup",m):d.bind("click",m)),t.date?(f=$('<span class="title"></span>').appendTo(d),$('<span class="date"></span>').text(t.date||"").appendTo(d)):t.icon&&!a.svg?(g=$('<span class="icon"></span>').appendTo(d),g.css("background-image",t.icon.image||""),t.icon.offset&&g.css("background-position","string"==typeof t.icon.offset?t.icon.offset:t.icon.offset.x+"px "+t.icon.offset.y+"px"),
f=$('<span class="title"></span>').appendTo(d)):!0===a.svg&&t.svg?(a.wrapIcon?d.append($('<span class="icon-wrap">').addClass(t.iconClass).append(t.svg)):d.append(t.svg),f=$('<span class="title"></span>').appendTo(d)):t.iconClass?(d.append($('<span class="icon"></span>').addClass(t.iconClass)),f=$('<span class="title"></span>').appendTo(d)):f=$('<span class="title-expanded"></span>').appendTo(d),t.html?f.html(t.html):f.text(TradingView.clean(t.title,!0)||""),v=$('<span class="shortcut"></span>').appendTo(d),t.shortcut&&v.text(t.shortcut.keys),"function"==typeof t.deleteAction&&(C=t.deleteAction,S=t.deleteAction.title||$.t("Delete"),y=$('<span class="icon-delete">'),y.html(n(1015)),y.attr("title",S),y.on("click",function(e){C.apply(d,arguments),e.preventDefault()}),d.append(y)),t.buttons instanceof Array&&t.buttons.length&&t.buttons.forEach(function(e){e.el instanceof $||(e.el=$(e.el)),e.el.appendTo(d),e.handler&&e.el.on("click",function(t){e.handler.apply(d,arguments)})}),void 0!==t.counter&&("function"==typeof t.counter?(x=$('<span class="counter"></span>').html(t.counter()),x.appendTo(d)):(E=t.counterBlue?"blue":"",$('<span class="counter"></span>').text(t.counter+"").addClass(E).appendTo(d))),s.append(d),void e.data("popup-menu",s))}var v,_,C,S,y,x,E,w,R,T,A,M,N,k,W,z,D,j,B,F,I,P,O,L,q,U,H=s.target.ownerDocument,G=H.defaultView,V=p||t;if("function"==typeof V&&(V=V()),$(this).hasClass("open")||$(this).hasClass("active"))return s.preventDefault(),l(),void(v=u.scrollTop);switch(l=function(){u.scrollTop=_.scrollTop(),_.remove(),e.removeClass("active open "+a.activeClass),e.data("popup-menu",null),$(H).off("click",f),$(H).off("mousedown",m),Modernizr.touch&&$(H).off("touchstart.chartgui",m),$(H).off("selectstart."+d),H.removeEventListener("keydown",g,!1),l=c,a.onRemove&&a.onRemove()},e.addClass("active open "+a.activeClass),_=$('<div class="charts-popup-list">'),a.addClass&&_.addClass(a.addClass),a.zIndex&&_.css("z-index",a.zIndex),C=_,a.listInner&&(C=$('<div class="list-inner">').appendTo(C)),a.listTable&&(C=$('<div class="list-table">').appendTo(C)),$.each(V,function(e){b(this,e,C)}),r||(u.preventFirstProcessClick=!0),$(H).on("click",f),$(H).on("mousedown",m),H.addEventListener("keydown",g,!1),Modernizr.touch&&$(H).on("touchstart.chartgui",m),a.upAction&&$(H).on("selectstart.popup-menu",function(){return!1}),_.appendTo(H.body),S=$(G).width(),y=Math.min($(G).height(),$("body").height()),x=e.outerWidth(),E=e.outerHeight(),w=e.offset(),v=$(G).scrollTop()||0,w.top-=v,w.top=Math.round(w.top),w.left=Math.round(w.left),R=_.outerWidth(),T=_.outerHeight(),A=void 0!==a.viewportSpacing?a.viewportSpacing:10,M=a.popupSpacing?~~a.popupSpacing:1,N=a.popupDrift?~~a.popupDrift:0,k=T-_.height(),W="down",a.direction&&(W="function"==typeof a.direction?a.direction():a.direction),z=!!a.reverse,"down"===W?(D=y-w.top-E-M-A-k,j=w.top-M-A-k,D<Math.max(T||0,100)&&j>D&&(W="up")):"right"===W&&(B=S-w.left-x-M-A-k,F=w.left-M-A-k,B<Math.max(R||0,100)&&F>B&&(W="left")),W){case"down":case"up":
"down"===W?_.css("top",w.top+E+M+"px"):_.css("bottom",y-w.top+M+"px").css("top","auto"),z?_.css("left",Math.max(w.left+N+x-R,A)+"px").css("right","auto"):_.css("left",w.left+N+"px").css("right","auto");break;case"right":case"left":M=Math.max(M,4),"right"===W?_.css("left",Math.floor(w.left+x+M)+"px").css("right","auto"):_.css("left",Math.floor(Math.max(w.left-R-M,A))+"px").css("right","auto"),z?_.css("top",Math.floor(Math.max(w.top+N+E-T,A))+"px"):_.css("top",Math.floor(w.top+N)+"px")}for(_.show(),I=w.top,"up"===W||{left:1,right:1}[W]&&z?"up"!==W?I+=E:I-=E+M+k+A:I=y-I-E-2*M-k,_.height()>I&&_.addClass("popup-menu-scroll-y"),_.css("max-height",I+"px"),a.careRightBorder&&(P=S+$(G).scrollLeft(),parseInt(_.css("left"))+_.width()+A>P&&_.css("left",P-_.width()-A+"px").css("right","auto")),a.careBottomBorder&&parseInt(_.css("top"))+_.height()+A>y+v&&_.css("top",y-_.height()-A+v+"px"),L=e.parents().andSelf(),q=L.size();q--;)if("fixed"===L.eq(q).css("position")){O=L.eq(q);break}O&&(U=_.offset(),_.css({position:"fixed",left:U.left-$(H).scrollLeft(),right:"auto"})),_[0].scrollHeight>_.height()&&_.addClass("popup-with-scroll"),s&&s.preventDefault()},s&&e.bind(s,p),r&&e.bind(r,function(){l()}),a.runOpened&&p()};o.TabGroup=function e(t){if(!(this instanceof e))return new e(t);t=t||{},this.tabs=[],"function"==typeof t.onChange&&(this.onChange=t.onChange)},o.TabGroup.prototype.appendTab=function(e,t,n){if(null==e?e="":e+="",t||(t=[]),n||(n={}),!Array.isArray(t))throw new TypeError("items must be an array");return this.tabs.push({name:e,items:t,active:!!n.active}),t},o.Header=function e(t){if(!(this instanceof e))return new e(t);this.title=t},o.Group=function e(t){if(!(this instanceof e))return new e(t);t=t||{},this.items=[],this.title=null==t.title?"":t.title+"",this.collapsible=!!t.collapsible,this.collapsed=!!t.collapsed,"function"==typeof t.onChange&&(this.onChange=t.onChange)},o.Group.prototype.push=function(){this.items.push.apply(this.items,arguments)},t.bindPopupMenu=o,a=function(e){e=$(e),e.unbind(".popup-menu"),e.removeData("popup-menu")},t.unbindPopupMenu=a},1079:function(e,t){e.exports={tabs:"tabs-3f6R4UrH-",tab:"tab-C-so14ap-",active:"active-3_gZ3PzW-",slider:"slider-XCKyHkum-"}},1127:function(e,t){e.exports={button:"button-1VVj8kLG-"}},1128:function(e,t){e.exports={item:"item-3cgIlGYO-",hovered:"hovered-2g31gdB--",isActive:"isActive-2M6dwA7--",isFirst:"isFirst-2kfAV5tf-",isLast:"isLast-voJ1bqZh-"}},1129:function(e,t){e.exports={slider:"slider-1ealLtjI-",inner:"inner-3lmAEIjy-"}},1130:function(e,t){e.exports={sliderRow:"sliderRow-Tv1W7hM5-"}},1131:function(e,t){e.exports={button:"button-2gir_Bbb-",hovered:"hovered-C6AkUeyT-"}},1132:function(e,t){e.exports={button:"button-88UE6omC-",hovered:"hovered-3xELmoc6-",inner:"inner-2FptJsfC-"}},1133:function(e,t){e.exports={button:"button-37qwTsBL-"}},1134:function(e,t){e.exports={separator:"separator-3bp1jCsV-"}},1135:function(e,t){
e.exports='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="currentColor" d="M9 5.1V4a1 1 0 1 1 2 0v1.1c.638.13 1.233.38 1.757.728l.779-.778a1 1 0 0 1 1.414 1.414l-.778.779c.347.524.598 1.119.728 1.757H16a1 1 0 0 1 0 2h-1.1a4.972 4.972 0 0 1-.728 1.757l.778.779a1 1 0 0 1-1.414 1.414l-.779-.778A4.972 4.972 0 0 1 11 14.9V16a1 1 0 0 1-2 0v-1.1a4.972 4.972 0 0 1-1.757-.728l-.779.778a1 1 0 1 1-1.414-1.414l.778-.779A4.972 4.972 0 0 1 5.1 11H4a1 1 0 1 1 0-2h1.1c.13-.638.38-1.233.728-1.757l-.778-.779A1 1 0 0 1 6.464 5.05l.779.778A4.972 4.972 0 0 1 9 5.1zm1 7.9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>'},1136:function(e,t){e.exports={icon:"icon-2Gun4jqH-"}},1137:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><g fill="none" stroke="currentColor"><circle cx="3.5" cy="3.5" r="2"/><circle cx="10.5" cy="10.5" r="2"/><path stroke-linecap="square" d="M9.5 1.5l-5 11"/></g></svg>'},1138:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4 8V6a1 1 0 0 1 1-1h2m10 3V6a1 1 0 0 0-1-1h-2M4 12v2a1 1 0 0 0 1 1h2m10-3v2a1 1 0 0 1-1 1h-2"/></svg>'},1139:function(e,t){e.exports={toolbar:"toolbar-2MJefnwP-",dateRangeWrapper:"dateRangeWrapper-yS_7EK1i-",seriesControlWrapper:"seriesControlWrapper-1c7dZFwu-",dateRangeExpanded:"dateRangeExpanded-Eh9SAOEe-",dateRangeCollapsed:"dateRangeCollapsed-1-pFg0M1-",item:"item-2cWFW_ze-",first:"first-1XNI05qr-",last:"last-2VBe7EFW-",inline:"inline-2rwBBIxN-",timezone:"timezone-34WAZb8x-",icon:"icon-3VRthUnU-",hidden:"hidden-3Tq8Bf9V-",collapsed:"collapsed-2lhil-Rc-"}}});