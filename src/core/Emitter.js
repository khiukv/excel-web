export class Emitter {
  constructor() {
    this.listeners = {};
  }

  // dispatch, fire, trigger
  // Notify the listener if any
  // table.emit('table:select', {a: 1})
  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false;
    }
    this.listeners[event].forEach(listener => {
      listener(...args);
    });
    return true;
  }

  // on, listen
  // Subscribe to the notification
  // Adding a new listener
  // formula.subscribe('table:select', () => {})
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || [];
    this.listeners[event].push(fn);
    return () => {
      this.listeners[event] =
        this.listeners[event].filter(listener => listener !== fn);
    };
  }
}
