{
let f = EventTarget.prototype.addEventListener;
EventTarget.prototype.addEventListener = function (a, b, c) {
  switch (a) {
    case "animationend":
    case "animationiteration":
    case "animationstart":
    case "auxclick":
    case "blur":
    case "contextmenu":
    case "dblclick":
    case "drag":
    case "dragend":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "dragstart":
    case "drop":
    case "encrypted":
    case "error":
    case "focus":
    case "focusin":
    case "focusout":
    case "gotpointercapture":
    case "invalid":
    case "keypress":
    case "lostpointercapture":
    case "mousedown":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "mouseup":
    case "offline":
    case "online":
    case "pagehide":
    case "pageshow":
    case "pointercancel":
    case "pointerdown":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "pointerup":
    case "selectionchange":
    case "test":
    case "touchcancel":
    case "touchend":
    case "touchmove":
    case "touchstart":
    case "visibilitychange":
    case "volumechange":
      return 0;
    default:
      return f.call(this, a, b, c);
  }
}
}