
export {};

declare global {
  interface Window {
    emitter: {
      on:(eventName: string, cb: (data?: {[key: string]: any}) => void) => void,
      emit: (eventName: string, data?: {[key: string]: any}) => void,
      un: (eventName: string) => void
    }
  }
}