

export class Emitter {
  listeners: {[key: string]: any[]} = {}
  on<T extends object>(eventName: string, cb: (data?: T) => void) {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }
    this.listeners[eventName].push(cb);
  }
  emit<T extends object>(eventName: string, data?: T) {
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