import { Observable } from 'rxjs';

const btn = document.createElement('button')
btn.textContent = 'Click me, mother fucker!';
document.body.appendChild(btn);

fromEvent(btn, 'click')
  .subscribe(() => {
    const log = document.createElement('div');
    log.textContent = 'Button Was Clicked!';
    document.body.appendChild(log);
  });

export function fromEvent(el: HTMLElement, eventName: string): Observable<string> {
  return new Observable((subscriber) => {
    function handler(e) {
      subscriber.next(e);
    }
    el.addEventListener(eventName, handler);
    return () => el.removeEventListener(eventName, handler);
  });
}