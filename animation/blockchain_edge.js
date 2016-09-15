/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "both",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'base-sx',
                type: 'rect',
                rect: ['280px', '127px','11px','11px','auto', 'auto'],
                borderRadius: ["3px 3px", "3px 3px", "3px 3px", "3px 3px"],
                fill: ["rgba(108,191,106,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'uno',
                type: 'rect',
                rect: ['267px', 'auto','11px','11px','auto', '62px'],
                borderRadius: ["3px 3px", "3px 3px", "3px 3px", "3px 3px"],
                fill: ["rgba(108,191,106,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'due',
                type: 'rect',
                rect: ['294px', 'auto','11px','11px','auto', '62px'],
                borderRadius: ["3px 3px", "3px 3px", "3px 3px", "3px 3px"],
                fill: ["rgba(108,191,106,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'tre',
                type: 'rect',
                rect: ['267px', '94px','11px','11px','auto', 'auto'],
                borderRadius: ["3px 3px", "3px 3px", "3px 3px", "3px 3px"],
                fill: ["rgba(108,191,106,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'quattro',
                type: 'rect',
                rect: ['294px', '94px','11px','11px','auto', 'auto'],
                borderRadius: ["3px 3px", "3px 3px", "3px 3px", "3px 3px"],
                fill: ["rgba(108,191,106,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'RoundRect5',
                type: 'rect',
                rect: ['266px', '127px','39px','11px','auto', 'auto'],
                borderRadius: ["3px 3px", "3px 3px", "3px 3px", "3px 3px"],
                fill: ["rgba(108,191,106,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'RoundRect6',
                type: 'rect',
                rect: ['266px', '94px','11px','44px','auto', 'auto'],
                borderRadius: ["3px 3px", "3px 3px", "3px 3px", "3px 3px"],
                fill: ["rgba(108,191,106,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'RoundRect7',
                type: 'rect',
                rect: ['294px', '94px','11px','44px','auto', 'auto'],
                borderRadius: ["3px 3px", "3px 3px", "3px 3px", "3px 3px"],
                fill: ["rgba(108,191,106,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'RoundRect10',
                type: 'rect',
                rect: ['266px', '94px','17px','22px','auto', 'auto'],
                borderRadius: ["3px 3px", "3px 3px", "3px 3px", "3px 3px"],
                fill: ["rgba(108,191,106,0.00)"],
                stroke: [11,"rgba(108,191,106,1.00)","solid"]
            },
            {
                id: 'RoundRect11',
                type: 'rect',
                rect: ['266px', '127px','17px','22px','auto', 'auto'],
                borderRadius: ["3px 3px", "3px 3px", "3px 3px", "3px 3px"],
                fill: ["rgba(108,191,106,0)"],
                stroke: [11,"rgb(108, 191, 106)","solid"]
            },
            {
                id: 'mask-1',
                type: 'rect',
                rect: ['39', '83','auto','auto','auto', 'auto']
            },
            {
                id: 'base-cen-sx',
                type: 'rect',
                rect: ['326px', '127px','11px','11px','auto', 'auto'],
                borderRadius: ["3px 3px", "3px 3px", "3px 3px", "3px 3px"],
                fill: ["rgba(108,191,106,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'base-cen-dx',
                type: 'rect',
                rect: ['357px', '127px','11px','11px','auto', 'auto'],
                borderRadius: ["3px 3px", "3px 3px", "3px 3px", "3px 3px"],
                fill: ["rgba(108,191,106,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'RoundRect12',
                type: 'rect',
                rect: ['326px', '128px','11px','11px','auto', 'auto'],
                borderRadius: ["3px 3px", "3px 3px", "3px 3px", "3px 3px"],
                fill: ["rgba(108,191,106,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'RoundRect13',
                type: 'rect',
                rect: ['357px', '128px','11px','11px','auto', 'auto'],
                borderRadius: ["3px 3px", "3px 3px", "3px 3px", "3px 3px"],
                fill: ["rgba(108,191,106,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'base-dx',
                type: 'rect',
                rect: ['403px', '127px','11px','11px','auto', 'auto'],
                borderRadius: ["3px 3px", "3px 3px", "3px 3px", "3px 3px"],
                fill: ["rgba(108,191,106,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'due-1',
                type: 'rect',
                rect: ['auto', '127px','11px','11px','267px', 'auto'],
                borderRadius: ["3px 3px", "3px 3px", "3px 3px", "3px 3px"],
                fill: ["rgba(108,191,106,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'uno-1',
                type: 'rect',
                rect: ['auto', '127px','11px','11px','295px', 'auto'],
                borderRadius: ["3px 3px", "3px 3px", "3px 3px", "3px 3px"],
                fill: ["rgba(108,191,106,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'quattro-1',
                type: 'rect',
                rect: ['417px', '157px','11px','11px','auto', 'auto'],
                borderRadius: ["3px 3px", "3px 3px", "3px 3px", "3px 3px"],
                fill: ["rgba(108,191,106,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'tre-1',
                type: 'rect',
                rect: ['389px', '157px','11px','11px','auto', 'auto'],
                borderRadius: ["3px 3px", "3px 3px", "3px 3px", "3px 3px"],
                fill: ["rgba(108,191,106,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'RoundRect3',
                type: 'rect',
                rect: ['389px', '127px','11px','39px','auto', 'auto'],
                borderRadius: ["3px 3px", "3px 3px", "3px 3px", "3px 3px"],
                fill: ["rgba(108,191,106,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'RoundRect3Copy',
                type: 'rect',
                rect: ['417px', '127px','11px','39px','auto', 'auto'],
                borderRadius: ["3px 3px", "3px 3px", "3px 3px", "3px 3px"],
                fill: ["rgba(108,191,106,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'RoundRect4',
                type: 'rect',
                rect: ['389px', '127px','39px','11px','auto', 'auto'],
                borderRadius: ["3px 3px", "3px 3px", "3px 3px", "3px 3px"],
                fill: ["rgba(108,191,106,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'RoundRect8',
                type: 'rect',
                rect: ['389px', '94px','17px','22px','auto', 'auto'],
                borderRadius: ["3px 3px", "3px 3px", "3px 3px", "3px 3px"],
                fill: ["rgba(108,191,106,0.00)"],
                stroke: [11,"rgba(108,191,106,1.00)","solid"]
            },
            {
                id: 'RoundRect9',
                type: 'rect',
                rect: ['389px', '127px','17px','22px','auto', 'auto'],
                borderRadius: ["3px 3px", "3px 3px", "3px 3px", "3px 3px"],
                fill: ["rgba(108,191,106,0)"],
                stroke: [11,"rgb(108, 191, 106)","solid"]
            },
            {
                id: 'mask_2',
                type: 'rect',
                rect: ['370', '83','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'mask_2',
                symbolName: 'mask_2'
            },
            {
                id: 'mask-1',
                symbolName: 'mask-1'
            }
            ]
        },
    states: {
        "Base State": {
            "${_tre-1}": [
                ["style", "top", '160px'],
                ["style", "opacity", '0'],
                ["style", "left", '389px'],
                ["style", "width", '11px']
            ],
            "${_uno}": [
                ["style", "top", 'auto'],
                ["style", "bottom", '62px'],
                ["style", "height", '11px'],
                ["style", "opacity", '0'],
                ["style", "left", '266px']
            ],
            "${_quattro}": [
                ["style", "top", '94px'],
                ["style", "opacity", '0'],
                ["style", "left", '294px'],
                ["style", "width", '11px']
            ],
            "${_RoundRect10}": [
                ["color", "background-color", 'rgba(108,191,106,0.00)'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '11px'],
                ["style", "width", '17px'],
                ["style", "top", '94px'],
                ["style", "height", '22px'],
                ["color", "border-color", 'rgba(108,191,106,1.00)'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '266px']
            ],
            "${_due-1}": [
                ["style", "top", '127px'],
                ["style", "right", '267px'],
                ["style", "bottom", 'auto'],
                ["style", "height", '11px'],
                ["style", "opacity", '0'],
                ["style", "left", 'auto'],
                ["style", "width", '11px']
            ],
            "${_RoundRect12}": [
                ["style", "top", '128px'],
                ["style", "left", '326px'],
                ["style", "width", '11px']
            ],
            "${_mask-1}": [
                ["transform", "scaleX", '0.99303'],
                ["style", "left", '38px']
            ],
            "${_base-sx}": [
                ["style", "top", '127px'],
                ["style", "opacity", '1'],
                ["style", "left", '280px'],
                ["style", "width", '11px']
            ],
            "${_base-cen-sx}": [
                ["style", "top", '127px'],
                ["style", "left", '326px'],
                ["style", "height", '11px']
            ],
            "${_RoundRect11}": [
                ["style", "top", '127px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '266px'],
                ["style", "height", '22px']
            ],
            "${_RoundRect13}": [
                ["style", "top", '128px'],
                ["style", "left", '357px'],
                ["style", "width", '11px']
            ],
            "${_RoundRect3}": [
                ["style", "top", '127px'],
                ["style", "opacity", '0.000000'],
                ["style", "height", '39px']
            ],
            "${_quattro-1}": [
                ["style", "top", '160px'],
                ["style", "opacity", '0'],
                ["style", "left", '417px'],
                ["style", "width", '11px']
            ],
            "${_RoundRect3Copy}": [
                ["style", "top", '127px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '417px'],
                ["style", "height", '39px']
            ],
            "${_RoundRect7}": [
                ["style", "height", '44px'],
                ["style", "opacity", '0.000000'],
                ["style", "top", '94px']
            ],
            "${_due}": [
                ["style", "top", 'auto'],
                ["style", "bottom", '62px'],
                ["style", "height", '11px'],
                ["style", "opacity", '0'],
                ["style", "left", '294px']
            ],
            "${_RoundRect8}": [
                ["color", "background-color", 'rgba(108,191,106,0.00)'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '389px'],
                ["color", "border-color", 'rgba(108,191,106,1.00)'],
                ["style", "height", '22px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '11px'],
                ["style", "width", '17px']
            ],
            "${_RoundRect4}": [
                ["style", "top", '127px'],
                ["style", "opacity", '0.000000']
            ],
            "${_RoundRect6}": [
                ["style", "height", '44px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '266px'],
                ["style", "top", '94px']
            ],
            "${_RoundRect9}": [
                ["style", "top", '127px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '389px'],
                ["style", "height", '22px']
            ],
            "${_base-dx}": [
                ["style", "top", '127px'],
                ["style", "opacity", '1'],
                ["style", "left", '403px'],
                ["style", "width", '11px']
            ],
            "${_base-cen-dx}": [
                ["style", "top", '127px'],
                ["style", "height", '11px'],
                ["style", "left", '357px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0)'],
                ["style", "width", '695px'],
                ["style", "height", '200px'],
                ["style", "overflow", 'hidden']
            ],
            "${_tre}": [
                ["style", "top", '94px'],
                ["style", "opacity", '0'],
                ["style", "left", '266px'],
                ["style", "width", '11px']
            ],
            "${_RoundRect5}": [
                ["style", "top", '127px'],
                ["style", "opacity", '0.000000']
            ],
            "${_uno-1}": [
                ["style", "top", '127px'],
                ["style", "right", '295px'],
                ["style", "bottom", 'auto'],
                ["style", "height", '11px'],
                ["style", "opacity", '0'],
                ["style", "left", 'auto'],
                ["style", "width", '11px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3179,
            autoPlay: true,
            timeline: [
                { id: "eid54", tween: [ "style", "${_tre-1}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInOutElastic" },
                { id: "eid87", tween: [ "style", "${_tre-1}", "opacity", '1', { fromValue: '0.000000'}], position: 962, duration: 38, easing: "easeInOutQuart" },
                { id: "eid157", tween: [ "style", "${_tre-1}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 70, easing: "easeInOutQuart" },
                { id: "eid215", tween: [ "transform", "${_mask-1}", "scaleX", '0.99303', { fromValue: '0.99303'}], position: 2500, duration: 0, easing: "easeInOutQuart" },
                { id: "eid203", tween: [ "style", "${_RoundRect10}", "opacity", '1', { fromValue: '0.000000'}], position: 2000, duration: 70, easing: "easeInOutQuart" },
                { id: "eid135", tween: [ "style", "${_RoundRect7}", "opacity", '1', { fromValue: '0.000000'}], position: 1463, duration: 37, easing: "easeInOutQuart" },
                { id: "eid196", tween: [ "style", "${_RoundRect7}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 70, easing: "easeInOutQuart" },
                { id: "eid56", tween: [ "style", "${_due-1}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInOutElastic" },
                { id: "eid61", tween: [ "style", "${_due-1}", "opacity", '1', { fromValue: '0.000000'}], position: 459, duration: 41, easing: "easeInOutQuart" },
                { id: "eid154", tween: [ "style", "${_due-1}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 70, easing: "easeInOutQuart" },
                { id: "eid210", tween: [ "style", "${_RoundRect9}", "left", '655px', { fromValue: '389px'}], position: 2070, duration: 430, easing: "easeInOutQuart" },
                { id: "eid84", tween: [ "style", "${_due-1}", "height", '44px', { fromValue: '11px'}], position: 500, duration: 500, easing: "easeInOutQuart" },
                { id: "eid30", tween: [ "style", "${_uno}", "height", '44px', { fromValue: '11px'}], position: 500, duration: 500, easing: "easeInOutCubic" },
                { id: "eid83", tween: [ "style", "${_due-1}", "top", '127px', { fromValue: '127px'}], position: 500, duration: 0, easing: "easeInOutElastic" },
                { id: "eid166", tween: [ "style", "${_RoundRect8}", "opacity", '1', { fromValue: '0.000000'}], position: 2000, duration: 70, easing: "easeInOutQuart" },
                { id: "eid20", tween: [ "style", "${_base-sx}", "width", '39px', { fromValue: '11px'}], position: 0, duration: 500, easing: "easeInOutQuart" },
                { id: "eid216", tween: [ "style", "${_mask-1}", "left", '38px', { fromValue: '38px'}], position: 2500, duration: 0, easing: "easeInOutQuart" },
                { id: "eid81", tween: [ "style", "${_uno-1}", "top", '127px', { fromValue: '127px'}], position: 500, duration: 0, easing: "easeInOutElastic" },
                { id: "eid165", tween: [ "style", "${_RoundRect9}", "opacity", '1', { fromValue: '0.000000'}], position: 2000, duration: 70, easing: "easeInOutQuart" },
                { id: "eid69", tween: [ "style", "${_uno-1}", "width", '11px', { fromValue: '11px'}], position: 500, duration: 0, easing: "easeInOutElastic" },
                { id: "eid55", tween: [ "style", "${_quattro-1}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInOutElastic" },
                { id: "eid88", tween: [ "style", "${_quattro-1}", "opacity", '1', { fromValue: '0.000000'}], position: 962, duration: 38, easing: "easeInOutQuart" },
                { id: "eid159", tween: [ "style", "${_quattro-1}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 70, easing: "easeInOutQuart" },
                { id: "eid57", tween: [ "style", "${_uno-1}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInOutElastic" },
                { id: "eid60", tween: [ "style", "${_uno-1}", "opacity", '1', { fromValue: '0.000000'}], position: 459, duration: 41, easing: "easeInOutQuart" },
                { id: "eid158", tween: [ "style", "${_uno-1}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 70, easing: "easeInOutQuart" },
                { id: "eid143", tween: [ "style", "${_RoundRect5}", "top", '160px', { fromValue: '127px'}], position: 1500, duration: 500, easing: "easeInOutQuart" },
                { id: "eid144", tween: [ "style", "${_RoundRect7}", "top", '127px', { fromValue: '94px'}], position: 1500, duration: 500, easing: "easeInOutQuart" },
                { id: "eid8", tween: [ "style", "${_quattro}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid36", tween: [ "style", "${_quattro}", "opacity", '1', { fromValue: '0.000000'}], position: 962, duration: 38, easing: "easeInOutCubic" },
                { id: "eid195", tween: [ "style", "${_quattro}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 70, easing: "easeInOutCubic" },
                { id: "eid221", tween: [ "style", "${_base-cen-sx}", "left", '326px', { fromValue: '326px'}], position: 2500, duration: 0, easing: "easeInOutElastic" },
                { id: "eid142", tween: [ "style", "${_RoundRect6}", "top", '127px', { fromValue: '94px'}], position: 1500, duration: 500, easing: "easeInOutQuart" },
                { id: "eid155", tween: [ "style", "${_base-dx}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 70, easing: "easeInOutQuart" },
                { id: "eid204", tween: [ "style", "${_RoundRect11}", "opacity", '1', { fromValue: '0.000000'}], position: 2000, duration: 70, easing: "easeInOutQuart" },
                { id: "eid32", tween: [ "style", "${_uno}", "left", '266px', { fromValue: '266px'}], position: 500, duration: 0, easing: "easeInOutElastic" },
                { id: "eid48", tween: [ "style", "${_quattro}", "width", '28px', { fromValue: '11px'}], position: 1000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid93", tween: [ "style", "${_quattro-1}", "width", '28px', { fromValue: '11px'}], position: 1000, duration: 500, easing: "easeInOutQuart" },
                { id: "eid29", tween: [ "style", "${_uno}", "bottom", '62px', { fromValue: '62px'}], position: 500, duration: 0, easing: "easeInOutElastic" },
                { id: "eid240", tween: [ "style", "${_RoundRect12}", "left", '326px', { fromValue: '326px'}], position: 2753, duration: 0, easing: "easeInOutElastic" },
                { id: "eid207", tween: [ "style", "${_RoundRect10}", "left", '0px', { fromValue: '266px'}], position: 2070, duration: 430, easing: "easeInOutQuart" },
                { id: "eid236", tween: [ "style", "${_RoundRect13}", "top", '128px', { fromValue: '128px'}], position: 2750, duration: 0, easing: "easeInOutElastic" },
                { id: "eid241", tween: [ "style", "${_RoundRect12}", "top", '128px', { fromValue: '128px'}], position: 2753, duration: 0, easing: "easeInOutElastic" },
                { id: "eid110", tween: [ "style", "${_RoundRect3Copy}", "top", '94px', { fromValue: '127px'}], position: 1500, duration: 500, easing: "easeInOutQuart" },
                { id: "eid33", tween: [ "style", "${_due}", "height", '44px', { fromValue: '11px'}], position: 500, duration: 500, easing: "easeInOutCubic" },
                { id: "eid208", tween: [ "style", "${_RoundRect11}", "left", '0px', { fromValue: '266px'}], position: 2070, duration: 430, easing: "easeInOutQuart" },
                { id: "eid6", tween: [ "style", "${_uno}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid25", tween: [ "style", "${_uno}", "opacity", '1', { fromValue: '0.000000'}], position: 459, duration: 41, easing: "easeInOutCubic" },
                { id: "eid197", tween: [ "style", "${_uno}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 70, easing: "easeInOutCubic" },
                { id: "eid239", tween: [ "style", "${_RoundRect13}", "width", '31px', { fromValue: '11px'}], position: 2726, duration: 453, easing: "easeInOutQuart" },
                { id: "eid5", tween: [ "style", "${_tre}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid37", tween: [ "style", "${_tre}", "opacity", '1', { fromValue: '0.000000'}], position: 962, duration: 38, easing: "easeInOutCubic" },
                { id: "eid191", tween: [ "style", "${_tre}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 70, easing: "easeInOutCubic" },
                { id: "eid47", tween: [ "style", "${_quattro}", "left", '277px', { fromValue: '294px'}], position: 1000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid111", tween: [ "style", "${_RoundRect4}", "top", '94px', { fromValue: '127px'}], position: 1500, duration: 500, easing: "easeInOutQuart" },
                { id: "eid13", tween: [ "style", "${_base-cen-sx}", "height", '115px', { fromValue: '11px'}], position: 0, duration: 2000, easing: "easeInOutQuart" },
                { id: "eid224", tween: [ "style", "${_base-cen-sx}", "height", '77px', { fromValue: '115px'}], position: 2500, duration: 679, easing: "easeInOutQuart" },
                { id: "eid101", tween: [ "style", "${_RoundRect3Copy}", "opacity", '1', { fromValue: '0.000000'}], position: 1463, duration: 37, easing: "easeInOutQuart" },
                { id: "eid160", tween: [ "style", "${_RoundRect3Copy}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 70, easing: "easeInOutQuart" },
                { id: "eid193", tween: [ "style", "${_base-sx}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 70, easing: "easeInOutQuart" },
                { id: "eid103", tween: [ "style", "${_RoundRect3}", "opacity", '1', { fromValue: '0.000000'}], position: 1463, duration: 37, easing: "easeInOutQuart" },
                { id: "eid156", tween: [ "style", "${_RoundRect3}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 70, easing: "easeInOutQuart" },
                { id: "eid133", tween: [ "style", "${_RoundRect6}", "opacity", '1', { fromValue: '0.000000'}], position: 1463, duration: 37, easing: "easeInOutQuart" },
                { id: "eid192", tween: [ "style", "${_RoundRect6}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 70, easing: "easeInOutQuart" },
                { id: "eid38", tween: [ "style", "${_tre}", "left", '266px', { fromValue: '266px'}], position: 1000, duration: 0, easing: "easeInOutElastic" },
                { id: "eid64", tween: [ "style", "${_base-dx}", "width", '39px', { fromValue: '11px'}], position: 0, duration: 500, easing: "easeInOutQuart" },
                { id: "eid82", tween: [ "style", "${_uno-1}", "height", '44px', { fromValue: '11px'}], position: 500, duration: 500, easing: "easeInOutQuart" },
                { id: "eid238", tween: [ "style", "${_RoundRect13}", "left", '337px', { fromValue: '357px'}], position: 2726, duration: 453, easing: "easeInOutQuart" },
                { id: "eid243", tween: [ "style", "${_RoundRect12}", "width", '31px', { fromValue: '11px'}], position: 2729, duration: 450, easing: "easeInOutQuart" },
                { id: "eid16", tween: [ "style", "${_base-cen-dx}", "top", '75px', { fromValue: '127px'}], position: 0, duration: 2000, easing: "easeInOutQuart" },
                { id: "eid234", tween: [ "style", "${_base-cen-dx}", "top", '94px', { fromValue: '75px'}], position: 2500, duration: 679, easing: "easeInOutQuart" },
                { id: "eid102", tween: [ "style", "${_RoundRect4}", "opacity", '1', { fromValue: '0.000000'}], position: 1463, duration: 37, easing: "easeInOutQuart" },
                { id: "eid153", tween: [ "style", "${_RoundRect4}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 70, easing: "easeInOutQuart" },
                { id: "eid66", tween: [ "style", "${_due-1}", "width", '11px', { fromValue: '11px'}], position: 500, duration: 0, easing: "easeInOutElastic" },
                { id: "eid244", tween: [ "style", "${_quattro-1}", "top", '160px', { fromValue: '160px'}], position: 1000, duration: 0, easing: "easeInOutQuart" },
                { id: "eid245", tween: [ "style", "${_quattro-1}", "top", '160px', { fromValue: '160px'}], position: 1500, duration: 0, easing: "easeInOutQuart" },
                { id: "eid7", tween: [ "style", "${_due}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid24", tween: [ "style", "${_due}", "opacity", '1', { fromValue: '0.000000'}], position: 459, duration: 41, easing: "easeInOutCubic" },
                { id: "eid198", tween: [ "style", "${_due}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 70, easing: "easeInOutCubic" },
                { id: "eid14", tween: [ "style", "${_base-cen-dx}", "height", '115px', { fromValue: '11px'}], position: 0, duration: 2000, easing: "easeInOutQuart" },
                { id: "eid233", tween: [ "style", "${_base-cen-dx}", "height", '77px', { fromValue: '115px'}], position: 2500, duration: 679, easing: "easeInOutQuart" },
                { id: "eid49", tween: [ "style", "${_tre}", "width", '28px', { fromValue: '11px'}], position: 1000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid21", tween: [ "style", "${_base-sx}", "left", '266px', { fromValue: '280px'}], position: 0, duration: 500, easing: "easeInOutQuart" },
                { id: "eid15", tween: [ "style", "${_base-cen-sx}", "top", '75px', { fromValue: '127px'}], position: 0, duration: 2000, easing: "easeInOutQuart" },
                { id: "eid225", tween: [ "style", "${_base-cen-sx}", "top", '94px', { fromValue: '75px'}], position: 2500, duration: 679, easing: "easeInOutQuart" },
                { id: "eid209", tween: [ "style", "${_RoundRect8}", "left", '655px', { fromValue: '389px'}], position: 2070, duration: 430, easing: "easeInOutQuart" },
                { id: "eid65", tween: [ "style", "${_base-dx}", "left", '389px', { fromValue: '403px'}], position: 0, duration: 500, easing: "easeInOutQuart" },
                { id: "eid246", tween: [ "style", "${_tre-1}", "top", '160px', { fromValue: '160px'}], position: 1000, duration: 0, easing: "easeInOutQuart" },
                { id: "eid247", tween: [ "style", "${_tre-1}", "top", '160px', { fromValue: '160px'}], position: 1500, duration: 0, easing: "easeInOutQuart" },
                { id: "eid134", tween: [ "style", "${_RoundRect5}", "opacity", '1', { fromValue: '0.000000'}], position: 1463, duration: 37, easing: "easeInOutQuart" },
                { id: "eid194", tween: [ "style", "${_RoundRect5}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 70, easing: "easeInOutQuart" },
                { id: "eid91", tween: [ "style", "${_tre-1}", "width", '28px', { fromValue: '11px'}], position: 1000, duration: 500, easing: "easeInOutQuart" },
                { id: "eid94", tween: [ "style", "${_quattro-1}", "left", '400px', { fromValue: '417px'}], position: 1000, duration: 500, easing: "easeInOutQuart" },
                { id: "eid112", tween: [ "style", "${_RoundRect3}", "top", '94px', { fromValue: '127px'}], position: 1500, duration: 500, easing: "easeInOutQuart" }            ]
        }
    }
},
"mask-1": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '265px', '77px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [11, 'rgba(108,191,106,0.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(108,191,106,0)']
                },
                {
                    id: 'lockc-042',
                    type: 'image',
                    rect: ['271px', '0px', '285px', '99px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/lockc-042.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle}": [
                ["style", "top", '0px'],
                ["color", "border-color", 'rgba(108,191,106,0.00)'],
                ["style", "left", '0px'],
                ["style", "height", '77px']
            ],
            "${_lockc-042}": [
                ["style", "left", '271px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '99px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '287px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2500,
            autoPlay: true,
            timeline: [
                { id: "eid218", tween: [ "style", "${_lockc-042}", "left", '1px', { fromValue: '271px'}], position: 2070, duration: 430, easing: "easeInOutQuart" }            ]
        }
    }
},
"mask_2": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '262px', '77px', 'auto', 'auto'],
                    id: 'Rectangle2',
                    stroke: [11, 'rgba(108, 191, 106, 0)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(108,191,106,0)']
                },
                {
                    id: 'ainla-04',
                    type: 'image',
                    rect: ['2px', '0px', '285px', '99px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ainla-04.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["style", "top", '0px'],
                ["style", "height", '77px'],
                ["style", "left", '0px'],
                ["style", "width", '262px']
            ],
            "${_ainla-04}": [
                ["style", "left", '-285px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '99px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '284px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2500,
            autoPlay: true,
            timeline: [
                { id: "eid220", tween: [ "style", "${_ainla-04}", "left", '2px', { fromValue: '-285px'}], position: 2070, duration: 430, easing: "easeInOutQuart" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-10336752");
