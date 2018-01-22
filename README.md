# key emitter

minor snippet to react to key stroke

## Arrow key

For every key down or key up operation, it will trigger a `change` event. `Enter` key will trigger `commit` event;

For `change handler`, it will receive a next index value;

for `commit handler`, it will receive a current triggered index value.

### options

#### max

It's requried, which will indicate the max index value on key down or key up.

### usage

```js
import { ArrowKeyHandler } from 'key-emitter';

this.arrowHandler = new ArrowKeyHandler({
  max: max,
});

this.arrowHandler.on('change', ({ index }) => {
  // ...
})

this.arrowHandler.on('commit', ({ index }) => {
  // ...
})
```