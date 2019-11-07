class Boat {
  @decorator
  color: string = 'red';

  @decorator
  get formattedColor(): string {
    return `This boat color is ${this.color}`;
  }

  @logError('ups, error')
  pilot(): void {
    throw new Error();
    console.log('swim');
  }
}

function decorator(target: any, key: string) {
  console.log(key);
}

function logError(errorMsg: string) {
  return function(target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
    desc.value = function() {
      try {
        method();
      } catch (err) {
        console.log(errorMsg);
      }
    };
  };
}

// new Boat().pilot();

// NOTES:
function testDecorator(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {}

// target - prototype (holds only methods, not properties)
// key - key of property, method, class that we apply our decorator to
// descriptor - object with properties: writable, enumerable, value, configurable
const car = { make: 'honda' };
Object.defineProperty(car, 'make', { writable: false });
console.log(Object.getOwnPropertyDescriptor(car, 'make'));
