import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    // 例1：事件绑定
    let button = document.querySelector('button');
    // button.addEventListener('click', () => console.log('Clicked!'));
    // Observable.fromEvent(button, 'click').subscribe(() => console.log('Rx:Clicked!'));

    // 例2：点击计数器
    // js
    // let count = 0;
    // button.addEventListener('click', () => console.log(`button clicked ${++count} times`));
    // rxjs
    // Observable.fromEvent(button, 'click')
    //   .scan((count: number) => count + 1, 0) // scan操作符和数组中reduce方法的类似
    //   .subscribe(count => console.log(`button clicked ${count} times`));

    // 例3：每秒最多点击一次
    // let count = 0;
    // let rate = 1000;
    // let lastClick = Date.now() - rate;
    // button.addEventListener('click', () => {
    //   if (Date.now() - lastClick > rate) {
    //     console.log(`点击${++count}次`);
    //     lastClick = Date.now();
    //   }
    // });
    // rxjs
    // Observable.fromEvent(button, 'click')
    //   .throttleTime(1000) // 其他流操作符：filter, delay, debounceTime, take, takeUntil, distinct, distinctUntilChanged 等等
    //   .scan((count: number) => count + 1, 0) // scan操作符和数组中reduce方法的类似
    //   .subscribe(count => console.log(`button clicked ${count} times`));

    // 例4：每次点击鼠标时获取x坐标的位置
    // let rate = 1000;
    // let lastClick = Date.now() - rate;
    // button.addEventListener('click', (event) => {
    //   if (Date.now() - lastClick > rate) {
    //     console.log(`X坐标的位置：${event.clientX}`);
    //     lastClick = Date.now();
    //   }
    // });
    // Observable.fromEvent(button, 'click')
    //   .throttleTime(1000)
    //   .map((event: any) => event.clientX) // 其他的值生产者还有 pluck, pairwise, sample
    //   .subscribe(clientX => console.log(`X坐标的位置：${clientX}`));

    // 例5：创建可观察对象
    // let observable = Observable.create((observer) => {
    //   observer.next(1);
    //   observer.next(2);
    //   observer.next(3);
    //   setTimeout(() => {
    //     observer.next(4);
    //     observer.complete();
    //   }, 1000);
    // });
    // console.log('start subscribe');
    // observable.subscribe({
    //   next: x => console.log(`got value ${x}`),
    //   error: err => console.error(`some error occurred: ${err}`),
    //   complete: () => console.log('done')
    // });
    // console.log('end subscribe');
    // 例6：取消订阅
    let observable = Observable.from([10, 20, 30]);
    let subscription = observable.subscribe(x => console.log(x));
    subscription.unsubscribe(); // 取消订阅
  }
}
