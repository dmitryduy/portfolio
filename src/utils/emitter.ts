

export class Emitter {
  listeners: {[key: string]: any[]} = {}
  on(eventName: string, cb: (data?: {[key: string]: any}) => void) {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }
    this.listeners[eventName].push(cb);
  }
  emit(eventName: string, data?: {[key: string]: any}) {
    if (this.listeners[eventName]) {
      for (let cb of this.listeners[eventName]) {
        cb(data);
      }
    }
  }
  un(eventName: string) {
    delete this.listeners[eventName];
  }
}